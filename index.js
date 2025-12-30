/*partials footer*/
async function loadIncludes() {
  const includes = document.querySelectorAll("[data-include]");

  for (const el of includes) {
    const name = el.dataset.include;
    const res = await fetch(`./partials/footer.html`);
    el.innerHTML = await res.text();
  }
}

document.addEventListener("DOMContentLoaded", loadIncludes);