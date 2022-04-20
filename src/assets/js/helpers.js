export const smoothScrollToUp = () => {
  console.log(document.body);
  document.body.scrollBy({
    behavior: "smooth",
    top:0
  })
}