"use strict";document.querySelector(".burger-menu").addEventListener("click",(function(){document.querySelector(".burger-menu").classList.toggle("burger-menu--opened"),document.querySelector(".burger-menu").classList.toggle("burger-menu--closed")})),document.querySelectorAll(".menu__item-header").forEach((function(e){e.addEventListener("click",(function(){document.querySelector("body").classList.remove("_lock"),menuClose()}))}));var iconMenu=document.querySelector(".icon-menu"),menuBody=document.querySelector(".menu__body");function menuClose(){iconMenu.classList.toggle("_active"),menuBody.classList.toggle("_active"),document.querySelector(".burger-menu").classList.toggle("burger-menu--opened"),document.querySelector(".burger-menu").classList.toggle("burger-menu--closed")}null!=iconMenu&&iconMenu.addEventListener("click",(function(){iconMenu.classList.toggle("_active"),menuBody.classList.toggle("_active"),document.querySelector("body").classList.toggle("_lock")}));for(var popup_link=document.querySelectorAll("._popup-link"),popups=document.querySelectorAll(".popup"),_loop=function(e){var o=popup_link[e];o.addEventListener("click",(function(e){unlock&&popup_open(o.getAttribute("href").replace("#",""),o.getAttribute("data-video"));e.preventDefault()}))},index=0;index<popup_link.length;index++)_loop(index);for(var _index=0;_index<popups.length;_index++){var popup=popups[_index];popup.addEventListener("click",(function(e){e.target.closest(".popup__body")||popup_close(e.target.closest(".popup"))}))}function popup_open(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=document.querySelectorAll(".popup._active");t.length>0&&popup_close("",!1);var n=document.querySelector(".popup_"+e);if(n&&unlock){if(""!=o&&null!=o){var r=document.querySelector(".popup_video");r.querySelector(".popup__video").innerHTML='<iframe src="https://www.youtube.com/embed/'+o+'?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>'}document.querySelector(".menu__body._active")||body_lock_add(500),n.classList.add("_active"),history.pushState("","","#"+e)}}function popup_close(e){var o=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(unlock){if(e){var t=e.querySelector(".popup__video");t&&(t.innerHTML=""),e.classList.remove("_active")}else for(var n=0;n<popups.length;n++){var r=popups[n],u=r.querySelector(".popup__video");u&&(u.innerHTML=""),r.classList.remove("_active")}!document.querySelector(".menu__body._active")&&o&&body_lock_remove(500),history.pushState("","",window.location.href.split("#")[0])}}var popup_close_icon=document.querySelectorAll(".popup__close,._popup-close");if(popup_close_icon)for(var _loop2=function(e){var o=popup_close_icon[e];o.addEventListener("click",(function(){popup_close(o.closest(".popup"))}))},_index3=0;_index3<popup_close_icon.length;_index3++)_loop2(_index3);document.addEventListener("keydown",(function(e){"Escape"===e.code&&popup_close()}));var questions=document.querySelectorAll("[data-num]"),numberQuestions=7,currentQuestionNumber=1;function showQuestion(e){8==questions[currentQuestionNumber-1].getAttribute("data-num")&&(document.querySelector(".question__buttons").style.display="none"),e>questions.length&&(currentQuestionNumber=1),e<1&&(currentQuestionNumber=questions.length),questions.forEach((function(e){e.style.display="none"})),questions[currentQuestionNumber-1].style.display="block"}function plusQuestion(e){showQuestion(currentQuestionNumber+=e)}function minusQuestion(e){showQuestion(currentQuestionNumber-=e)}showQuestion(currentQuestionNumber);try{var nextBtn=document.querySelectorAll(".question-next");nextBtn.forEach((function(e){return e.addEventListener("click",(function(e){e.preventDefault(),plusQuestion(1),showQuestion(currentQuestionNumber)}))}))}catch(e){}try{var prevBtn=document.querySelectorAll(".question-back");prevBtn.forEach((function(e){return e.addEventListener("click",(function(e){e.preventDefault(),minusQuestion(1),showQuestion(currentQuestionNumber)}))}))}catch(e){}function getRandomInRange(e,o){return Math.floor(Math.random()*(o-e+1))+e}document.querySelector(".random-num").textContent="".concat(getRandomInRange(16,60));var offerSlider=document.querySelector(".offer__slider"),gallerySlider=document.querySelector(".gallery__slider"),menu=["1","2","3","4","5","6","7","8","9","10","11","12"],swiper1=new Swiper(offerSlider,{observer:!0,observerParents:!0,observerSlideChildren:!0,slidesPerView:"auto",slidesPerGroup:2,spaceBetween:0,grid:{rows:2,columns:3},pagination:{el:".offer-pagination",clickable:!0,renderBullet:function(e,o){return'<span class="'+o+'">'+menu[e]+"</span>"}},breakpoints:{1400:{slidesPerView:4,slidesPerGroup:4,spaceBetween:45,grid:{rows:2,columns:3}},1279:{slidesPerView:3,spaceBetween:60,slidesPerGroup:3,grid:{rows:2,columns:3}},990:{slidesPerView:3,spaceBetween:60,slidesPerGroup:2,grid:{rows:2,columns:2}},600:{slidesPerGroup:2,slidesPerView:2,spaceBetween:40,grid:{rows:3,columns:1}},320:{slidesPerView:1,spaceBetween:30,grid:{rows:3,columns:1}}}}),swiper2=new Swiper(gallerySlider,{observer:!0,observerParents:!0,observerSlideChildren:!0,grabCursor:!0,centeredSlides:!0,freeMode:!0,slidesPerView:"auto",effect:"coverflow",loop:!0,coverflowEffect:{rotate:20,stretch:0,depth:50,modifier:1,slideShadows:!0},breakpoints:{1780:{spaceBetween:240},1440:{spaceBetween:100},780:{spaceBetween:100},580:{spaceBetween:50},320:{spaceBetween:20}},navigation:{nextEl:".gallery__arrow-next",prevEl:".gallery__arrow-prev"}}),unlock=!0;function body_lock(e){document.querySelector("body").classList.contains("_lock")?body_lock_remove(e):body_lock_add(e)}function body_lock_remove(e){var o=document.querySelector("body");if(unlock){var t=document.querySelectorAll("._lp");setTimeout((function(){for(var e=0;e<t.length;e++){t[e].style.paddingRight="0px"}o.style.paddingRight="0px",o.classList.remove("_lock")}),e),unlock=!1,setTimeout((function(){unlock=!0}),e)}}function body_lock_add(e){var o=document.querySelector("body");if(unlock){for(var t=document.querySelectorAll("._lp"),n=0;n<t.length;n++){t[n].style.paddingRight=window.innerWidth-document.querySelector(".wrapper").offsetWidth+"px"}o.style.paddingRight=window.innerWidth-document.querySelector(".wrapper").offsetWidth+"px",o.classList.add("_lock"),unlock=!1,setTimeout((function(){unlock=!0}),e)}}