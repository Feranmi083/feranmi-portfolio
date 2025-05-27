document.addEventListener("DOMContentLoaded", function() {
    const footer = document.querySelector("footer p");
    const currentYear = new Date().getFullYear();
    if (footer){
        footer.innerHTML = `&copy; ${currentYear} Aregbesola Oluwalatiferanmi. all rigths reserved.`;
    }

    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e){
            e.preventDefault();
            const targetID = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetID);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    const bactToTop = document.createElement('button');
    bactToTop.textContent = 'Top';
    bactToTop.classList.add('back-to-top');
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', () => {
        if(window.scroll > 300) {
            bactToTop.style.display = 'block';
        } else {
            bactToTop.style.display = 'none';
        }
    });

    bactToTop.addEventListener('click', () => {
        window.scrollTo({top: 0, behavior: 'smooth' });
    });

    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.addEventListener('click',() => {
        document.body.classList.toggle('dark-mode');
    });

    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const name = contactForm.name.value.trim();
            const email = contactForm.email.value.trim();
            const message = contactForm.message.value.trim();

            if (name === "") {
                alert("Name is required.");
            } else if (email === "") {
                alert("Email is required.");
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert("Please enter a valid email address.");
            } else if (message === "") {
                alert("Message is required.");
            } else {
                alert("Message sent successfully!");
                contactForm.reset();
            }
        });
    }

    const projectitems = document.querySelectorAll(".project-item");
    let currentProject = 0;

    setInterval(() => {
        projectitems.forEach((item,index) =>{
            item.style.display = index === currentProject ? 'block' : 'none';
        });
        currentProject = (currentProject + 1) % projectitems.length;
    }, 3000);
    const spinner = document.querySelector('.spinner');
    window.addEventListener('load',() => {
        if (spinner) spinner.style,display = 'none';
    });
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) 
            {entry.target.classList.add('fade-in');

            }
        });
    }, {threshold: 0.5});

    const projects = document.querySelectorAll(".project-item");
    const filterButtons = document.querySelectorAll(",filter-btn");

    filterButtons.forEach(button => {
        button.addEventListener("click", function() {
            const category = this.getAttribute("data=category");
            projects.forEach(project => {
                if (category ==="all" || project.classList.contains(category)) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }
            });
        });
    });
    const word = ["Game developer","JavaScript enthusiast","UI/UX Designer"];
    let woedindex = 0;
    let typewriter = document.querySelector('.typewriter');
    function typewriter() {
        let word = words[wordindex];
        typewriter.textContent = '';
        let i = 0
        const typeInterval =
        setInterval(() => {
            if (i < word.length) {
                typewriter.textContent+= word.charAt(1);
                i++;
            } else {
                clearInterval(typeInterval);
                setTimeout(() => {
                    wordindex = (woedindex + 1) % word.length;typeword();
                }, 2000);
            }
        }, 100)
    }
    if (typewriter){
        typeword();
    }
});