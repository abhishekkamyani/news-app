export const routes = [
    {
      path: "/",
      url: "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=e16777196dd14463b4aa53d0494b206c",
      heading: "Top Headlines",
      navKey: 0
    },
    {
      path: "/science",
      url: "https://newsapi.org/v2/top-headlines?category=science&apiKey=e16777196dd14463b4aa53d0494b206c",
      heading: "Science Headlines",
      navKey: 1
    },
    {
      path: "/technology",
      url: "https://newsapi.org/v2/top-headlines?category=technology&apiKey=e16777196dd14463b4aa53d0494b206c",
      heading: "Technology Headlines",
      navKey: 2
    },
    {
      path: "/entertainment",
      url: "https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=e16777196dd14463b4aa53d0494b206c",
      heading: "Entertainment Headlines",
      navKey: 3
    },
    {
      path: "/business",
      url: "https://newsapi.org/v2/top-headlines?category=business&apiKey=e16777196dd14463b4aa53d0494b206c",
      heading: "Business Headlines",
      navKey: 4
    },
    {
      path: "/health",
      url: "https://newsapi.org/v2/top-headlines?category=health&apiKey=e16777196dd14463b4aa53d0494b206c",
      heading: "Health Headlines",
      navKey: 5
    }
  ];