const list = document.querySelector(".list");

fetch("https://jsonplaceholder.typicode.com/albums")
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    result.forEach((element) => {
      const li = document.createElement("li");
      li.textContent = element.title;
      list.appendChild(li);
    });
  });
