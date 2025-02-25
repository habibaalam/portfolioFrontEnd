
window.onload = greet;
window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("backToTop").style.display = "block";
    } else {
        document.getElementById("backToTop").style.display = "none";
    }
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
};


function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    const name = document.getElementById("Cname").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        event.preventDefault();
    }
});

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("backToTop").classList.add("show");
    } else {
        document.getElementById("backToTop").classList.remove("show");
    }
};
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}