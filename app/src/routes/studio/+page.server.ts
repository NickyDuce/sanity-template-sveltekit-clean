// studio.server.ts
import { client } from '$lib/sanity/client';

export async function load() {
  try {
    // Query to fetch studio data
    const studioQuery = `*[_type == "studio" && slug.current == "studio"][0]{
      slug,
      welcome,
      section01{
        title,
        part1,
        part2
      },
      studioImage{
        asset->{
          _id,
          url
        }
      },
      section02{
        title,
        description,
        subHeading1,
        subHeading2,
        part1,
        part2
      },
      faces{
        footage{
          asset->{
            _id,
            url
          }
        },
        theTeam,
        partnerList[]{
          name, 
          image{
            asset->{
              _id,
              url
            }
          },
          role,
          linkedIn
        }
      },
      gallery[]{
        asset->{
          _id,
          url
        }
      }
    }`;

    // Query to fetch project data
    const projectsQuery = `*[_type == "project"]{
      slug,
      projectTitle,
      heroImage{
        asset->{
          _id,
          url
        }
      },
      completionDate,
      services
    }`;

    // Fetch data from Sanity
    const [studioContent, projectsContent] = await Promise.all([
      client.fetch(studioQuery),
      client.fetch(projectsQuery),
    ]);

    // Log the data for debugging if needed
    // console.log('Fetched Projects Content:', projectsContent);

    // Return both studio and projects content
    return {
      studioContent,
      projectsContent,
    };
  } catch (error) {
    console.error('Sanity Fetch Error:', error);

    // Return empty content if fetch fails
    return {
      studioContent: null,
      projectsContent: null,
    };
  }
}
