const cards = document.getElementById("card");
const carousel = document.getElementById("carousel-slide");
const carouselItem = document.querySelector(".carousel-item img");
const carouselItem2 = document.querySelector(".carousel-item2 img");
const carouselItem3 = document.querySelector(".carousel-item3 img");
const url =
  "https://newsapi.org/v2/everything?q=Apple&from=2025-03-19&sortBy=popularity&apiKey=be862f3e68634812ad6c9042d1bc64ca";

console.log("HELLO WORLD");

async function getNewsArticles(pageSize = 6, page = 3) {
  try {
    const res = await fetch(`${url}&pageSize=${pageSize}&page=${page}`);
    const toJson = await res.json();
    document.querySelector("#newsArticlesContainer pre").textContent =
      JSON.stringify(toJson.articles, null, 2);

    // Update carousel image with the first article's image
    if (toJson.articles.length > 0 && toJson.articles[0].urlToImage) {
      carouselItem.src = toJson.articles[0].urlToImage;
      carouselItem2.src = toJson.articles[1].urlToImage;
      carouselItem3.src = toJson.articles[2].urlToImage;
      console.log("carouselItem is=", carouselItem);
    }
  } catch (error) {
    // handle error
    alert(error.toString());
  }
}

getNewsArticles();
