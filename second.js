function smoothScrollToTarget(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href").slice(1);
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth",
    });
  }
}

const smoothScrollLinks = document.querySelectorAll(".smooth-scroll-link");
smoothScrollLinks.forEach((link) => {
  link.addEventListener("click", smoothScrollToTarget);
});
