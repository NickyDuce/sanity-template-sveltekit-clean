export async function load() {
    const mockData = {
      slug: 'studio',
      studioImage: {
        asset: {
          _id: 'mock123',
          url: 'https://via.placeholder.com/150',
        },
      },
      welcome: 'Welcome to our mock studio!',
      section01: {
        title: 'Mock Story',
        part1: 'This is part 1 of the mock story.',
        part2: 'This is part 2 of the mock story.',
      },
      section02: {
        title: 'Mock Studio',
        description: 'This is a description of the mock studio.',
        subHeading1: 'Subheading One',
        subHeading2: 'Subheading Two',
        part1: 'This is part 1 of section 02.',
        part2: 'This is part 2 of section 02.',
      },
      faces: {
        footage: {
          asset: {
            _id: 'mock456',
            url: 'https://via.placeholder.com/150',
          },
        },
        theTeam: 'Our mock team is great!',
        partnerList: [
          {
            partner: {
              name: 'Mock Partner',
              image: {
                asset: {
                  _id: 'mock789',
                  url: 'https://via.placeholder.com/150',
                },
              },
              role: 'Mock Role',
              linkedIn: 'https://linkedin.com/mock',
            },
          },
        ],
      },
    };
  
    console.log('Returning Mock Data:', mockData); // Debug the output
    return { mockData }; // Return mock data
  }
  