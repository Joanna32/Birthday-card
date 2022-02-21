function showBirthdayWishes() {
  let heading = document.querySelector("#birthday-heading");
  heading.setAttribute("src", "image/wishes.jpg");
  let content = document.querySelector("#birthday-wishes");
  content.innerHTML =
    "Wishing You all the best! Have a great day and a lot of fun today :) P.S You are older today than yesterday but younger than tomorrow😎";
}

let button = document.querySelector("#click-me");
button.addEventListener("click", showBirthdayWishes);
