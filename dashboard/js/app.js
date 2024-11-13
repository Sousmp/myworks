(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
        }
    };
    function addTouchClass() {
        document.documentElement.classList.add(isMobile.any() ? "touch" : "pc");
    }
    function addLoadedClass() {
        window.addEventListener("load", (function() {
            setTimeout((function() {
                document.documentElement.classList.add("loaded");
            }), 0);
        }));
    }
    function fullVHfix() {
        const fullScreens = document.querySelectorAll("[data-fullscreen]");
        if (fullScreens.length && isMobile.any()) {
            window.addEventListener("resize", fixHeight);
            function fixHeight() {
                let vh = window.innerHeight * .01;
                document.documentElement.style.setProperty("--vh", `${vh}px`);
            }
            fixHeight();
        }
    }
    let bodyLockStatus = true;
    let bodyLockToggle = (delay = 500) => {
        if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
    };
    let bodyUnlock = (delay = 500) => {
        let body = document.querySelector("body");
        if (bodyLockStatus) {
            let lock_padding = document.querySelectorAll("[data-lp]");
            setTimeout((() => {
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = "0px";
                }
                body.style.paddingRight = "0px";
                document.documentElement.classList.remove("lock");
            }), delay);
            bodyLockStatus = false;
            setTimeout((function() {
                bodyLockStatus = true;
            }), delay);
        }
    };
    let bodyLock = (delay = 500) => {
        let body = document.querySelector("body");
        if (bodyLockStatus) {
            let lock_padding = document.querySelectorAll("[data-lp]");
            for (let index = 0; index < lock_padding.length; index++) {
                const el = lock_padding[index];
                el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
            }
            body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
            document.documentElement.classList.add("lock");
            bodyLockStatus = false;
            setTimeout((function() {
                bodyLockStatus = true;
            }), delay);
        }
    };
    function menuInit() {
        if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
            if (bodyLockStatus && e.target.closest(".icon-menu")) {
                bodyLockToggle();
                document.documentElement.classList.toggle("menu-open");
            }
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    document.addEventListener("DOMContentLoaded", (function() {
        document.querySelectorAll(".sidebar__link").forEach((link => {
            link.addEventListener("click", (function() {
                document.querySelectorAll(".sidebar__link").forEach((item => item.classList.remove("sidebar__link--active")));
                this.classList.add("sidebar__link--active");
            }));
        }));
        document.querySelectorAll(".pagination-button").forEach((link => {
            link.addEventListener("click", (function() {
                document.querySelectorAll(".pagination-button").forEach((item => item.classList.remove("pagination-button--active")));
                this.classList.add("pagination-button--active");
            }));
        }));
        const burgerMenu = document.querySelector(".title__burger");
        const sidebar = document.querySelector(".sidebar");
        if (burgerMenu && sidebar) document.addEventListener("click", (function(e) {
            const isBurgerClick = e.target.closest(".title__burger");
            const isSidebarClick = e.target.closest(".sidebar");
            if (bodyLockStatus && isBurgerClick) {
                bodyLockToggle();
                burgerMenu.classList.toggle("title__burger--active");
                sidebar.classList.toggle("sidebar--active");
            } else if (bodyLockStatus && !isSidebarClick && !isBurgerClick && sidebar.classList.contains("sidebar--active")) {
                bodyUnlock();
                burgerMenu.classList.remove("title__burger--active");
                sidebar.classList.remove("sidebar--active");
            }
        }));
    }));
    gsap.from(".customer__container", {
        opacity: 0,
        duration: 1
    });
    gsap.from(".title__title", {
        opacity: 0,
        duration: 1
    });
    const tl = gsap.timeline({
        defaults: {
            duration: .3
        },
        repeat: -1
    });
    tl.to(".animated-hand", {
        rotate: 10
    }).to(".animated-hand", {
        rotate: 0
    });
    window["FLS"] = true;
    isWebp();
    addTouchClass();
    addLoadedClass();
    menuInit();
    fullVHfix();
})();