document.getElementById("search-all").addEventListener("click", () => {
  fetch("http://localhost/info2180-lab4/superheroes.php")
    .then((result) => result.text())
    .then((data) => alert(data))
    .catch((err) => alert(err));
});
