// make news revolve within carousel and cards

console.log("HELLO WORLD");

async function getNewsArticles(pageSize = 6, page = 6) {
  try {
    const res = await fetch(`${url}&pageSize=${pageSize}&page=${page}`);
    if (!res) {
      throw new Error("Api call failed");
    }
    const toJson = await res.json();
    document.querySelector("#newsArticlesContainer pre").textContent =
      JSON.stringify(toJson.articles, null, 2);

    if (toJson.articles && toJson.articles.length > 0) {
      carouselData(toJson.articles);
      cardData(toJson.articles);
    } else {
      console.error("No articles found in API response.");
    }
  } catch (error) {
    // handle error
    alert(error.toString());
  }
  console.log("carouselItem is=", carouselItem);
}

function carouselData(articles) {
  if (articles.length > 0) {
    carouselItem.src = articles[0].urlToImage;
    carouselTitle.textContent = articles[0].title;
    CarouselDesc.textContent = articles[0].description;
    if (articles[1]) {
      carouselItem2.src = articles[1].urlToImage;
      carouselTitle2.textContent = articles[1].title;
      carouselDesc2.textContent = articles[1].description;
    }
    if (articles[2]) {
      carouselItem3.src = articles[2].urlToImage;
      carouselTitle3.textContent = articles[2].title;
      carouselDesc3.textContent = articles[2].description;
    }
  }
}

function cardData(articles) {
  if (articles.length > 3) {
    cardImg1.src = articles[3].urlToImage;
    cardTitle1.textContent = articles[3].title;
    cardText1.textContent = articles[3].description;
    cardBtn1.href = articles[3].url;
  }
  if (articles[4]) {
    cardImg2.src = articles[4].urlToImage;
    cardTitle2.textContent = articles[4].title;
    cardText2.textContent = articles[4].description;
    cardBtn2.href = articles[4].url;
  }
  if (articles[5]) {
    cardImg3.src = articles[5].urlToImage;
    cardTitle3.textContent = articles[5].title;
    cardText3.textContent = articles[5].description;
    cardBtn3.href = articles[5].url;
  }
}

getNewsArticles();
