const texts = ["notrace.email", "full-stack dev", "ux/ui designer", "sysadmin", "problem solver"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let isDeleting = false;
let typeSpeed = 100;

(function type() {
    if (count === texts.length) count = 0;
    currentText = texts[count];
    
    if (isDeleting) {
        letter = currentText.slice(0, --index);
        typeSpeed = 50;
    } else {
        letter = currentText.slice(0, ++index);
        typeSpeed = 100;
    }

    document.getElementById("typewriter").textContent = letter;

    if (!isDeleting && letter.length === currentText.length) {
        isDeleting = true;
        typeSpeed = 2000;
    } else if (isDeleting && letter.length === 0) {
        isDeleting = false;
        count++;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
})();
