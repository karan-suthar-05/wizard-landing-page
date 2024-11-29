function mobileMenu() {
    // mobile menu animation
    const menuTl = gsap.timeline({ paused: true });

    menuTl.from("#mobile-menu", {
        transform: "translatex(120%)",
        duration: 0.3
    });
    menuTl.from("#mobile-menu #close", {
        x: -100,
        rotate: 180,
        opacity: 0,
        duration: 0.5,
    });
    menuTl.from("#mobile-menu a,#mobile-menu button:last-of-type", {
        x: -100,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1
    });

    const menuBtn = document.getElementById("menu");
    const closeBtn = document.getElementById("close");

    menuBtn.addEventListener("click", function () {

        menuTl.play();
    });
    closeBtn.addEventListener("click", function () {

        menuTl.reverse();
    });
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function startLoader() {
    return new Promise((resolve) => {
        let counter = document.querySelector("#counter h1");
        let currentValue = 0;

        async function updateCounter() {
            if (currentValue === 100) {

                resolve();
                return;
            }

            currentValue += Math.floor(Math.random() * 10) + 1;
            if (currentValue >= 100)
                currentValue = 100;
            counter.textContent = currentValue + "%";

            let delay = Math.floor(Math.random() * 3) * 100;
            await sleep(delay);
            updateCounter();
        }
        updateCounter();
    });
}

function loadingAnimation() {
    return new Promise(async (resolve) => {
        await startLoader();
        const tl = gsap.timeline();
        tl.to("#counter", {
            opacity: 0,
            y: 20,
            duration: 0.3,
        });
        tl.to("#barcontainer .bar:nth-child(2)", {
            opacity: 0,
            x: -100,
            duration: 0.5,
            ease: "power4.out"
        }, "bar");
        tl.to("#barcontainer .bar:nth-child(3)", {
            opacity: 0,
            x: 100,
            duration: 0.5,
            ease: "power4.out"
        }, "bar");

        tl.to("#barcontainer", {
            attr: { class: "hidden" }
        });
        resolve();
    });
}

function section1Animation() {
    // section 1 animation
    const sec1Tl = gsap.timeline({ delay: 1 });
    sec1Tl.addLabel('logo');
    sec1Tl.from("#logo i", {
        x: -100,
        y: -100,
        opacity: 0,
        duration: 0.7,
        ease: "power4.out"
    }, 'logo');
    sec1Tl.from("#logo h1", {
        y: -50,
        opacity: 0,
        duration: 0.7,
        ease: "power4.out"
    }, 'logo');
    sec1Tl.addLabel("menu")
    sec1Tl.from("#links a,#links button", {
        y: -50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power4.out"
    }, "menu");
    sec1Tl.from("#menu", {
        y: -50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power4.out"
    }, "menu");
    sec1Tl.from("#main-content h1", {
        x: -50,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out"
    });
    sec1Tl.from("#main-content p", {
        x: -30,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out"
    });
    sec1Tl.addLabel("img");
    sec1Tl.from("#main-content button", {
        x: -10,
        opacity: 0,
        duration: 0.5,
        ease: "power4.out"
    }, "img");
    sec1Tl.from("#main-content #main-img", {
        x: 30,
        opacity: 0,
        duration: 0.5,
        ease: "power4.out"
    }, "img");
    sec1Tl.from("#companyies img", {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "power4.out"
    });
}

function section2Animation() {

    const sec2Tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#services",
            scroller: "body",
            start: "top center",
            end: "+=600",
            scrub: 2,

        }
    });

    sec2Tl.from("#services .service-heading,#services p", {
        y: -20,
        opacity: 0,
        duration: 0.5,
        ease: "power4.out"
    });
    sec2Tl.from("#services .line1:nth-child(1)", {
        x: 10,
        opacity: 0,
        duration: 0.5,
        ease: "power4.out"
    }, "line1");
    sec2Tl.from("#services .line1:nth-child(2)", {
        x: -10,
        opacity: 0,
        duration: 0.5,
        ease: "power4.out"
    }, "line1");
    sec2Tl.from("#services .line1:nth-child(3)", {
        x: 10,
        opacity: 0,
        duration: 0.5,
        ease: "power4.out"
    }, "line2");
    sec2Tl.from("#services .line1:nth-child(4)", {
        x: -10,
        opacity: 0,
        duration: 0.5,
        ease: "power4.out"
    }, "line2");
}

function section3Animation() {
    const sec3Tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#bottom",
            scroller: "body",
            start: "top center",
            end: "+=400",
            scrub: 2,
        }
    });

    sec3Tl.from("#bottom #info", {
        opacity: 0,
        duration: 0.5,
        ease: "power4.out"
    });
    sec3Tl.from("#bottom #info h1", {
        x: -30,
        opacity: 0,
        duration: 0.5,
        ease: "power4.out"
    });
    sec3Tl.from("#bottom #info p", {
        x: -20,
        opacity: 0,
        duration: 0.5,
        ease: "power4.out"
    });
    sec3Tl.from("#bottom #info button", {
        x: -10,
        opacity: 0,
        duration: 0.5,
        ease: "power4.out"
    }, "bottom-img");

    sec3Tl.from("#bottom #info img", {
        x: 10,
        opacity: 0,
        duration: 0.5,
        ease: "power4.out"
    }, "bottom-img");

    sec3Tl.from("#bottom .service-heading", {
        y: -20,
        opacity: 0,
        duration: 0.5,
        ease: "power4.out"
    });
    sec3Tl.from("#bottom #footer", {
        opacity: 0,
        duration: 0.5,
        ease: "power4.out"
    });
    sec3Tl.from("#bottom .fcard", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "power4.out",
        stagger: 0.2
    });

}

async function runAnimations() {
    // Run loadingAnimation next
    await loadingAnimation();

    // Run the other animations sequentially
    section1Animation();
    section2Animation();
    section3Animation();
}

mobileMenu();
runAnimations();