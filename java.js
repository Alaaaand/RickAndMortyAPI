
const main = document.querySelector(".main");
const cards = document.querySelector(".cards");
const button = document.querySelector("button");

async function fetchProducts() {
  try {
    const Response = await fetch("https://rickandmortyapi.com/api/character");
    console.log(Response);
    const datas = await Response.json();
    console.log(datas);
    const alive = datas.results.filter((live) => live.status === "Alive");

    button.addEventListener("click", nextpage);
    page = 1;
    async function nextpage() {
      page++;
      const Response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );
      const datas = await Response.json();
      const alive = datas.results.filter((live) => live.status === "Alive");
      for (let data of alive) {
        const cardsItem = document.createElement("LI");
        cardsItem.classList.add("cards_item");
        cards.appendChild(cardsItem);

        const card = document.createElement("div");
        card.classList.add("card");
        cardsItem.appendChild(card);

        const cardImg = document.createElement("div");
        cardImg.classList.add("card_img");
        card.appendChild(cardImg);

        const img = document.createElement("img");
        cardImg.appendChild(img);

        const cardContent = document.createElement("div");
        cardContent.classList.add("card_content");
        card.appendChild(cardContent);

        const cardTitle = document.createElement("h2");
        cardTitle.classList.add("card_title");
        cardContent.appendChild(cardTitle);

        const gender = document.createElement("h2");
        gender.classList.add("card_gender");
        cardContent.appendChild(gender);

        let role = document.createElement("h2");
        role.classList.add("card_gender");
        cardContent.appendChild(role);

        const species = document.createElement("h2");
        species.classList.add("card_gender");
        cardContent.appendChild(species);

        const episodes = document.createElement("h2");
        episodes.classList.add("card_gender");
        cardContent.appendChild(episodes);

        cardTitle.innerText = `name: ${data.name}`;
        img.src = data.image;
        gender.textContent = `gender: ${data.gender}`;
        species.textContent = `species: ${data.species}`;
        episodes.textContent = `episodes: ${data.episode.length}`;

        if (data.episode.length > 25) {
          data.role = "main character";
          role.textContent = `role: ${data.role}`;
        } else {
          data.role = "side character";
          role.textContent = `role: ${data.role}`;
        }
      }
    }

    function firstPage() {
      for (let data of alive) {
        const cardsItem = document.createElement("LI");
        cardsItem.classList.add("cards_item");
        cards.appendChild(cardsItem);

        const card = document.createElement("div");
        card.classList.add("card");
        cardsItem.appendChild(card);

        const cardImg = document.createElement("div");
        cardImg.classList.add("card_img");
        card.appendChild(cardImg);

        const img = document.createElement("img");
        cardImg.appendChild(img);

        const cardContent = document.createElement("div");
        cardContent.classList.add("card_content");
        card.appendChild(cardContent);

        const cardTitle = document.createElement("h2");
        cardTitle.classList.add("card_title");
        cardContent.appendChild(cardTitle);

        const gender = document.createElement("h2");
        gender.classList.add("card_gender");
        cardContent.appendChild(gender);

        let role = document.createElement("h2");
        role.classList.add("card_gender");
        cardContent.appendChild(role);

        const species = document.createElement("h2");
        species.classList.add("card_gender");
        cardContent.appendChild(species);

        const episodes = document.createElement("h2");
        episodes.classList.add("card_gender");
        cardContent.appendChild(episodes);

        cardTitle.innerText = `name: ${data.name}`;
        img.src = data.image;
        gender.textContent = `gender: ${data.gender}`;
        species.textContent = `species: ${data.species}`;
        episodes.textContent = `episodes: ${data.episode.length}`;

        if (data.episode.length > 25) {
          data.role = "main character";
          role.textContent = `role: ${data.role}`;
        } else {
          data.role = "side character";
          role.textContent = `role: ${data.role}`;
        }
        console.log(data);
      }
    }
    firstPage();
  } catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}
fetchProducts();
