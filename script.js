function transform(btn) {
  const card = btn.parentElement;
  const img = card.querySelector("img");

  img.style.opacity = "0";

  setTimeout(() => {
    img.src = "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=800&q=80";
    img.style.opacity = "1";
  }, 300);
}

function scrollToSection() {
  document.getElementById("models").scrollIntoView({
    behavior: "smooth"
  });
}