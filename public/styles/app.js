const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

var hiddenElements = document.querySelectorAll('.hidden-l');
hiddenElements.forEach((el) => observer.observe(el));
hiddenElements = document.querySelectorAll('.hidden-r');
hiddenElements.forEach((el) => observer.observe(el));
hiddenElements = document.querySelectorAll('.hidden-r1');
hiddenElements.forEach((el) => observer.observe(el));
