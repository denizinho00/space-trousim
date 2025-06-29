const headlınks = document.querySelectorAll(".menu-links a ");
console.log(headlınks);
async function dataPage() {
  const res = await fetch("data.json");
  const data = await res.json();
  return data;
}
window.addEventListener("load", () => {
  document.body.classList.remove("ext-page");
});
headlınks.forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");

    if (href && !href.startsWith("#")) {
      e.preventDefault();

      document.body.classList.add("ext-page");

      setTimeout(() => {
        window.location.href = href;
      }, 100);
    }
  });
});
