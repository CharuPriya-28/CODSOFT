// Welcome page buttons
if (document.getElementById("moviesBtn")) {
  document.getElementById("moviesBtn").onclick = () => {
    localStorage.setItem("type", "movies");
    window.location.href = "genres.html";
  };
}

if (document.getElementById("booksBtn")) {
  document.getElementById("booksBtn").onclick = () => {
    localStorage.setItem("type", "books");
    window.location.href = "genres.html";
  };
}

// Animate hero
if (document.getElementById("hero")) {
  gsap.from("#hero", { opacity: 0, y: -50, duration: 1 });
}

// Genres page
if (document.getElementById("genreCards")) {
  const genres = ["Sci-Fi", "Comedy", "Crime", "Adventure", "Romance"];
  const type = localStorage.getItem("type");
  if (type === "movies") {
    genres.push("Marvel");
  } else {
    genres.push("Marvel Comics");
  }

  genres.forEach((g) => {
    const card = document.createElement("div");
    card.className = "genre-card";
    const img = document.createElement("img");
    img.src = `images/${g.toLowerCase().replace(" ", "-")}.jpg`;
    const text = document.createElement("div");
    text.innerText = g + " 🎉";
    card.appendChild(img);
    card.appendChild(text);
    card.onclick = () => {
      localStorage.setItem("genre", g);
      window.location.href = "recommend.html";
    };
    document.getElementById("genreCards").appendChild(card);
  });

  gsap.from(".genre-card", { opacity: 0, y: 50, stagger: 0.1 });
}

// Recommendations page
if (document.getElementById("recommendCard")) {
  const type = localStorage.getItem("type");
  const genre = localStorage.getItem("genre");

  const data = type === "movies" ? movies : books;
  const filtered = data.filter((item) => item.genre === genre);

  function showRandom() {
    const pick = filtered[Math.floor(Math.random() * filtered.length)];
    document.getElementById("recommendTitle").innerText =
      `${genre} ${type === "movies" ? "Movie" : "Book"} 🎬📚`;
    document.getElementById("recommendCard").innerHTML =
      `<img src="${pick.img}"><div>${pick.title}</div>`;
    gsap.from("#recommendCard", { opacity: 0, y: 50, rotate: 10 });
  }

  showRandom();

  document.getElementById("nextBtn").onclick = showRandom;
}
