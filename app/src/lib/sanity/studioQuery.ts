export const studioQuery= `*[_type == "studio"][0]{
    slug,
    overview,
    showreel,
    story,
    projects[] {
      image { asset->{url} },
      projectTitle,
      date,
      view
    },
    values,
    partners {
      image1 { asset->{url} },
      image2 { asset->{url} },
      boldSummary,
      partnerList
    }
  }`;