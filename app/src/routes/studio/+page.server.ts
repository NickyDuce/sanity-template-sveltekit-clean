import { client } from '$lib/sanity/client';
import type { Studio } from '$lib/types/types';

export async function load() {
  try {
    const query = `*[_type == "studio" && slug.current == "studio"][0]{
      slug,
      studioImage{
        asset->{
          _id,
          url
        }
      },
      welcome,
      section01{
        title,
        part1,
        part2
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
          partner{
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
        }
      }
    }`;

    const studioContent: Studio = await client.fetch(query);

    console.log('Fetched Studio Content:', studioContent); // Debugging

    // Return studioContent directly
    return { studioContent };
  } catch (error) {
    console.error('Sanity Fetch Error:', error);

    // Return empty content if fetch fails
    return { studioContent: null };
  }
}
