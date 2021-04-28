function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
}

const messages = ["https://i.iodine.gg/456jj.png", "https://i.iodine.gg/4g8ag.png", "https://i.iodine.gg/4f6g6.png", "https://i.iodine.gg/a7708.png", 
"https://i.iodine.gg/86819.png", "https://i.iodine.gg/0h36a.png", "https://i.iodine.gg/8a4b9.png", "https://i.iodine.gg/8i1gg.png", 
"https://i.iodine.gg/4i075.png", "https://i.iodine.gg/98204.png", "https://i.iodine.gg/459b5.png", "https://i.iodine.gg/g7037.png",
"https://i.iodine.gg/i8e43.png", "https://i.iodine.gg/c9aj2.png", "https://i.iodine.gg/48cjh.png", "https://i.iodine.gg/58c9f.png",
"https://i.iodine.gg/54297.png"
]
ready(() => {
    messages.forEach((msg, idx) => {
        const img = document.createElement('img');
        img.src = msg;
        img.style.width = '100%';

        const slide = document.createElement('div');
        slide.classList.add('slide', 'fade');
        slide.append(img);
        document.querySelector('.slideshow-container').prepend(slide);

        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.id = idx;
        document.querySelector('.dots').append(dot);
    })
    let slideIndex = 0;
    currentSlide(1)
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }  
    function showSlides(n) {
      let i;
      let slides = document.querySelectorAll(".slide")
      let dots = document.querySelectorAll(".dot")
      if (n > slides.length) slideIndex = 1
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none"
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].classList.remove("active")
      }
        slides[slideIndex - 1].style.display = "block"
        dots[slideIndex - 1].classList.add("active")
    }
    document.querySelectorAll(".dot").forEach(dot => {
      dot.addEventListener("click", el => {
        const id = el.target.getAttribute("id")
        currentSlide(id)
      })
    })
    document.querySelector(".prev").addEventListener("click", () => {
        plusSlides(-1)
    })
    document.querySelector(".next").addEventListener("click", () => {
        plusSlides(1)
    });
    

    function recursiveAnimateTitle(string) {
        let firstLetter = string[0];
        let title = document.querySelector('title');
        title.innerHTML += firstLetter;
        if (string.length > 1) {
          setTimeout(function() {
            recursiveAnimateTitle(string.substring(1));
          }, 100);
        }
      }
      
      function animateTitle(string) {
        document.querySelector('title').innerHTML = "";
        recursiveAnimateTitle(string);
      }
      
      animateTitle('Indra is a weeb');

      document.onkeydown = ({key}) => {
        if (key == "ArrowRight" || key == "d") {
          plusSlides(1)
        } else if (key == "ArrowLeft" || key == "a") {
          plusSlides(-1) 
        } else if (key == "ArrowUp" || key == "w") {
          location.replace("https://hamdog.isaskid.xyz") //requested by indra
        }
      }
  
})
