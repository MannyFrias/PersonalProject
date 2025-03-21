const cards = document.getElementById("card");
const carousel = document.getElementById("carousel-slide");
const carouselItem = document.querySelector(".carousel-item img");
const carouselTitle = document.querySelector("#carousel-caption h5");
const CarouselDesc = document.querySelector(".carousel-caption p");
const carouselItem2 = document.querySelector("#carousel-item2 img");
const carouselTitle2 = document.querySelector("#carousel-caption2 h5");
const carouselDesc2 = document.querySelector("#carousel-caption2 p");
const carouselItem3 = document.querySelector("#carousel-item3 img");
const carouselTitle3 = document.querySelector("#carousel-caption3 h5");
const carouselDesc3 = document.querySelector("#carousel-caption3 p");
const url =
  "https://newsapi.org/v2/everything?q=Apple&from=2025-03-19&sortBy=popularity&apiKey=be862f3e68634812ad6c9042d1bc64ca";

console.log("HELLO WORLD");

async function getNewsArticles(pageSize = 6, page = 3) {
  try {
    const res = await fetch(`${url}&pageSize=${pageSize}&page=${page}`);
    if (!res) {
      return throw new Error("Api call failed");
    }
    const toJson = await res.json();
    document.querySelector("#newsArticlesContainer pre").textContent =
      JSON.stringify(toJson.articles, null, 2);

    // Update carousel image with the first article's image
    for (let i = 0; i < toJson.articles.length; i++) {
      if (toJson.articles.length > 0) {
        carouselItem.src = toJson.articles[0].urlToImage;
        carouselTitle.textContent = toJson.articles[0].title;
        CarouselDesc.textContent = toJson.articles[0].description;
        carouselItem2.src = toJson.articles[1].urlToImage;
        carouselTitle2.textContent = toJson.articles[1].title;
        carouselDesc2.textContent = toJson.articles[1].description;
        carouselItem3.src = toJson.articles[2].urlToImage;
        carouselTitle3.textContent = toJson.articles[2].title;
        carouselDesc3.textContent = toJson.articles[2].description;
      }
    }
  } catch (error) {
    // handle error
    alert(error.toString());
  }
  console.log("carouselItem is=", carouselItem);
}

function carouselText() {}

getNewsArticles();
