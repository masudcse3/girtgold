function smoothScrollToTarget(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: "smooth"
        });
    }
}

function setActiveLink() {
    const scrollPosition = window.scrollY;
    const smoothScrollLinks = document.querySelectorAll(".smooth-scroll-link");

    smoothScrollLinks.forEach(link => {
        const targetId = link.getAttribute("href").slice(1);
        const targetElement = document.getElementById(targetId);
        const targetPosition = targetElement.getBoundingClientRect().top;

        if (targetPosition <= 30 && targetPosition > -targetElement.clientHeight) {
            smoothScrollLinks.forEach(link => link.classList.remove("bg-[#FFFFFF30]"));
            link.classList.add("bg-[#FFFFFF30]");
        } else {
            link.classList.remove("bg-[#FFFFFF30]");
        }
    });
}

const smoothScrollLinks = document.querySelectorAll(".smooth-scroll-link");
smoothScrollLinks.forEach(link => {
    link.addEventListener("click", smoothScrollToTarget);
});

window.addEventListener("scroll", setActiveLink);
