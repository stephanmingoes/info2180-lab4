function getAllSuperHeroes() {
  return fetch("http://localhost/info2180-lab4/superheroes.php")
    .then((result) => result.text())
    .then((data) => data)
    .catch((err) => err);
}
function sanitizeInput(str) {
  str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, " ");
  return str.trim();
}
function getSpecificHero(hero) {
  return fetch(`http://localhost/info2180-lab4/superheroes.php?query=${hero}`)
    .then((result) => result.text())
    .then((data) => data)
    .catch((err) => err);
}

function searchHeroes(search) {
  if (search === null || sanitizeInput(search) === "")
    return getAllSuperHeroes();
  return getSpecificHero(search);
}

document.getElementById("search-all").addEventListener("click", () => {
  searchHeroes(document.getElementById("superhero-search").value).then(
    (data) => (document.getElementById("result").innerHTML = data)
  );
});
