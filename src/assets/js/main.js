function mobilemenu(){
    const menuBox = document.querySelector("#menuToggle");
    const list = document.querySelector(".header .list");
    menuBox.addEventListener("click", function(){
        menuBox.classList.toggle('open')
        list.classList.toggle('open')
    });
}





function swiperSlider(){
    var swiper = new Swiper(".swiper-bottom", {
        slidesPerView: 4,
        spaceBetween: 30,
        cssMode: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            993: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        }
      });
}








function popUp() {
    const popupButton = document.querySelectorAll('.form-popup')
    const popupBg = document.querySelector('.lb')
    const popupContent = document.querySelector('.lb-content')
    const popupclose = document.querySelector('.close')


    popupButton.forEach(item =>{
        item.addEventListener('click', function(){
            popupBg.classList.add('active');
            popupContent.classList.add('active')
        })
    })

    


    popupclose.addEventListener('click',function(){
        popupBg.classList.remove('active');
        popupContent.classList.remove('active')
        
    } )



}

window.addEventListener('DOMContentLoaded', (event) => {
    mobilemenu()
    swiperSlider()
    popUp()
    
});