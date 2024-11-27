// Query to fetch all projects (already defined)
export const projectsQuery = `*[_type == "project"] | order(completionDate desc) {
	_id,
	slug,
	projectTitle,
	heroImage {
	  asset -> {
		url
	  }
	},
	completionDate,
	sector,
	client,
	location
  }`;
  
  // Query to fetch a single project by slug
  export const projectQueryBySlug = `*[_type == "project" && slug.current == $slug][0] {
_id,
    _createdAt,
    projectTitle,
    "slug": slug.current,
    heroImage{
      asset->{
        _id,
        url
      }
    },
    completionDate,
    sector,
    client,
    location,
    services[],
    team[],
    overview{
      boldSummary,
      briefContent
    },
    challenges{
      approach,
      image1{
        asset->{
          _id,
          url
        }
      },
      image2{
        asset->{
          _id,
          url
        }
      },
      boldSummary,
      briefContent,
      image3{
        asset->{
          _id,
          url
        }
      },
      image4{
        asset->{
          _id,
          url
        }
      }
    },
    imageGrid{
      image1{
        asset->{
          _id,
          url
        }
      },
      image2{
        asset->{
          _id,
          url
        }
      },
      image3{
        asset->{
          _id,
          url
        }
      },
      largeImage{
        asset->{
          _id,
          url
        }
      }
    },
    outcome{
      boldSummary,
      briefContent
    }
  }
`;
  
  export interface Project {
	_id: string;
	_createdAt: string;
	projectTitle: string;
	slug: string; // The slug string
	heroImage?: {
	  asset: {
		_id: string;
		url: string;
	  };
	};
	completionDate?: string; // Format: "month/year"
	sector?: string;
	client?: string;
	location?: string;
	services?: string[]; // Array of service strings
	team?: string[]; // Array of team member names
	overview?: {
	  boldSummary: string;
	  briefContent: string;
	};
	challenges?: {
	  approach: string;
	  image1?: {
		asset: {
		  _id: string;
		  url: string;
		};
	  };
	  image2?: {
		asset: {
		  _id: string;
		  url: string;
		};
	  };
	  boldSummary: string;
	  briefContent: string;
	  image3?: {
		asset: {
		  _id: string;
		  url: string;
		};
	  };
	  image4?: {
		asset: {
		  _id: string;
		  url: string;
		};
	  };
	};
	imageGrid?: {
	  image1?: {
		asset: {
		  _id: string;
		  url: string;
		};
	  };
	  image2?: {
		asset: {
		  _id: string;
		  url: string;
		};
	  };
	  image3?: {
		asset: {
		  _id: string;
		  url: string;
		};
	  };
	  largeImage?: {
		asset: {
		  _id: string;
		  url: string;
		};
	  };
	};
	outcome?: {
	  boldSummary: string;
	  briefContent: string;
	};
  }
  
  