console.log("Hi there.")

document.getElementById("grayscale").addEventListener("click", () => {
  for (const $img of Array.from(document.querySelectorAll("img"))) {
    $img.classList.toggle("grayscale")
  }
})

for (const $img of Array.from(document.querySelectorAll("img"))) {
  $img.addEventListener("click", (e) => {
    e.target.classList.toggle("grayscale")
  })
}
