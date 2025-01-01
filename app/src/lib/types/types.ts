
export type Project = {
    projectTitle: string;
    slug: { current: string };
    heroImage: {
      asset: { 
        url: string
      };
    };
    completionDate: string;
    sector: string;
    client: string;
    location: string;
    services: string[];
    team: string[];
    overview: {
      boldSummary: string;
      briefContent: string;
    };
    challenges: {
      approach: string;
      image1: { asset: { url: string } };
      image2: { asset: { url: string } };
      boldSummary: string;
      briefContent: string;
      image3: { asset: { url: string } };
      image4: { asset: { url: string } };
    };
    imageGrid: {
      image1: { asset: { url: string } };
      image2: { asset: { url: string } };
      image3: { asset: { url: string } };
      largeImage: { asset: { url: string } };
    };
    outcome: {
      boldSummary: string;
      briefContent: string;
    };
  };
  

  //studio types
  export type Studio = {
    slug: string;
    studioImage: { asset: { _id: string; url: string } };
    welcome: string;
    section01: {
      title: string;
      part1: string;
      part2: string;
    };
    gallery: { asset: { _id: string; url: string } }[]; // Add gallery field
    section02: {
      title: string;
      description: string;
      subHeading1: string;
      subHeading2: string;
      part1: string;
      part2: string;
    };
    faces: {
      footage: { asset: { _id: string; url: string } };
      theTeam: string;
      partnerList: {
        name: string;
        image: { asset: { _id: string; url: string } };
        role: string;
        linkedIn: string;
      }[];
    };
  };

// Homepage types
export type HomeBodyContent = {
  subHeading: string;
  body1: string;
  body2: string;
};

export type HomeContent = {
  version: string;
  slug: string;
  header: string;
  body: HomeBodyContent;
};
