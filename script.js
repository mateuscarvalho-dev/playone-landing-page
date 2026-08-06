/*=====================================================
PLAYONE
SCRIPT.JS
VERSÃO 1.0
=====================================================*/


document.addEventListener("DOMContentLoaded", () => {

    /*====================================
    PRELOADER
    ====================================*/

    const preloader = document.getElementById("preloader");

    window.addEventListener("load", () => {

        preloader.style.opacity = "0";

        setTimeout(() => {

            preloader.style.display = "none";

        }, 600);

    });


        

    /*====================================
    SCROLL REVEAL
    ====================================*/

    const revealElements = document.querySelectorAll(

        ".benefit-card,.number-card,.timeline-item,.plan-card,.device-card,.testimonial,.faq-item,.cta-banner"

    );

    const reveal = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    revealElements.forEach(el=>{

        el.classList.add("fade-up");

        reveal.observe(el);

    });


    /*====================================
    CONTADORES
    ====================================*/

    const counters = document.querySelectorAll(".counter");

    const counterObserver = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                const counter = entry.target;

                const target = Number(counter.dataset.target);

                let current = 0;

                const increment = target / 60;

                const timer = setInterval(()=>{

                    current += increment;

                    if(current >= target){

                        counter.innerText = target;

                        clearInterval(timer);

                    }else{

                        counter.innerText = Math.floor(current);

                    }

                },20);

                counterObserver.unobserve(counter);

            }

        });

    });

    counters.forEach(counter=>{

        counterObserver.observe(counter);

    });


    /*====================================
    FAQ
    ====================================*/

    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question=>{

        question.addEventListener("click",()=>{

            const item = question.parentElement;

            const answer = item.querySelector(".faq-answer");

            const isOpen = answer.style.maxHeight;

            document.querySelectorAll(".faq-answer").forEach(a=>{

                a.style.maxHeight = null;

            });

            document.querySelectorAll(".faq-question span").forEach(span=>{

                span.innerHTML = "+";

            });

            if(!isOpen){

                answer.style.maxHeight = answer.scrollHeight + "px";

                question.querySelector("span").innerHTML = "−";

            }

        });

    });


    /*====================================
    CURSOR GLOW
    ====================================*/

    const glow = document.querySelector(".cursor-glow");

    document.addEventListener("mousemove",(e)=>{

        glow.style.left = e.clientX - 110 + "px";

        glow.style.top = e.clientY - 110 + "px";

    });


    /*====================================
    BOTÃO WHATSAPP
    ====================================*/

    const whatsapp = document.querySelector(".whatsapp-button");

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 400){

            whatsapp.style.transform = "scale(1)";

            whatsapp.style.opacity = "1";

        }else{

            whatsapp.style.transform = "scale(.8)";

            whatsapp.style.opacity = ".75";

        }

    });


    /*====================================
    BOTÃO VOLTAR AO TOPO
    ====================================*/

    const topButton = document.createElement("div");

    topButton.innerHTML = "↑";

    topButton.id = "topButton";

    document.body.appendChild(topButton);

    topButton.style.cssText=`

        position:fixed;
        left:25px;
        bottom:25px;
        width:55px;
        height:55px;
        border-radius:50%;
        background:#d50000;
        color:#fff;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:26px;
        cursor:pointer;
        z-index:999;
        opacity:0;
        transition:.35s;
        box-shadow:0 15px 40px rgba(213,0,0,.4);

    `;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>500){

            topButton.style.opacity="1";

        }else{

            topButton.style.opacity="0";

        }

    });

    topButton.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });


    /*====================================
    SMOOTH LINKS
    ====================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });
/*====================================
META PIXEL - WHATSAPP
====================================*/

document.querySelectorAll('a[href*="wa.me"]').forEach(button=>{

    button.addEventListener("click",()=>{

        if(typeof fbq !== "undefined"){

            fbq('track','Lead');

            fbq('trackCustom','WhatsAppClick');

        }

    });

});

});