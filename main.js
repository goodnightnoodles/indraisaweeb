const messages = ["https://i.iodine.gg/456jj.png", "https://i.iodine.gg/4g8ag.png", "https://i.iodine.gg/4f6g6.png", "https://i.iodine.gg/a7708.png",
"https://i.iodine.gg/a7708.png", "https://i.iodine.gg/86819.png", "https://i.iodine.gg/0h36a.png", "https://i.iodine.gg/8a4b9.png", "https://i.iodine.gg/8i1gg.png",
"https://i.iodine.gg/8i1gg.png", "https://i.iodine.gg/4i075.png", "https://i.iodine.gg/98204.png", "https://i.iodine.gg/459b5.png", "https://i.iodine.gg/g7037.png",
"https://i.iodine.gg/i8e43.png", "https://i.iodine.gg/c9aj2.png", "https://i.iodine.gg/c9aj2.png", "https://i.iodine.gg/48cjh.png", "https://i.iodine.gg/58c9f.png",
"https://i.iodine.gg/54297.png"
]
$(() => {
    messages.forEach((msg, idx) => {
        $(".slideshow-container").prepend(`
        <div class="slide fade">
        <img src="${msg}" style="width:100%">
      </div>`)
      $(".dots").append(`<span class="dot" id="${idx}"></span>`)
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
      let slides = $(".slide")
      let dots = $(".dot")
      if (n > slides.length) slideIndex = 1
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          $(slides[i]).hide()
      }
      for (i = 0; i < dots.length; i++) {
          $(dots[i]).removeClass("active")
      }
        $(slides[slideIndex - 1]).css("display", "block")
        $(dots[slideIndex - 1]).addClass("active")
    }
    $(".dot").click(el => {
        const id = $(el.target).attr("id")
        currentSlide(id)
    })
    $(".prev").click(() => {
        plusSlides(-1)
    })
    $(".next").click(() => {
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

})
