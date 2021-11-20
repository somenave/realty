"use strict";
"use strict";

document.querySelector('.burger-menu').addEventListener('click', function (e) {
  document.querySelector('.burger-menu').classList.toggle('burger-menu--opened');
  document.querySelector('.burger-menu').classList.toggle('burger-menu--closed');
});
"use strict";

//Popups
var popup_link = document.querySelectorAll('._popup-link');
var popups = document.querySelectorAll('.popup');

var _loop = function _loop(index) {
  var el = popup_link[index];
  el.addEventListener('click', function (e) {
    if (unlock) {
      var item = el.getAttribute('href').replace('#', '');
      var video = el.getAttribute('data-video');
      popup_open(item, video);
    }

    e.preventDefault();
  });
};

for (var index = 0; index < popup_link.length; index++) {
  _loop(index);
}

for (var _index = 0; _index < popups.length; _index++) {
  var popup = popups[_index];
  popup.addEventListener("click", function (e) {
    if (!e.target.closest('.popup__body')) {
      popup_close(e.target.closest('.popup'));
    }
  });
}

function popup_open(item) {
  var video = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var activePopup = document.querySelectorAll('.popup._active');

  if (activePopup.length > 0) {
    popup_close('', false);
  }

  var curent_popup = document.querySelector('.popup_' + item);

  if (curent_popup && unlock) {
    if (video != '' && video != null) {
      var popup_video = document.querySelector('.popup_video');
      popup_video.querySelector('.popup__video').innerHTML = '<iframe src="https://www.youtube.com/embed/' + video + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
    }

    if (!document.querySelector('.menu__body._active')) {
      body_lock_add(500);
    }

    curent_popup.classList.add('_active');
    history.pushState('', '', '#' + item);
  }
}

function popup_close(item) {
  var bodyUnlock = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (unlock) {
    if (!item) {
      for (var _index2 = 0; _index2 < popups.length; _index2++) {
        var _popup = popups[_index2];

        var video = _popup.querySelector('.popup__video');

        if (video) {
          video.innerHTML = '';
        }

        _popup.classList.remove('_active');
      }
    } else {
      var _video = item.querySelector('.popup__video');

      if (_video) {
        _video.innerHTML = '';
      }

      item.classList.remove('_active');
    }

    if (!document.querySelector('.menu__body._active') && bodyUnlock) {
      body_lock_remove(500);
    }

    history.pushState('', '', window.location.href.split('#')[0]);
  }
}

var popup_close_icon = document.querySelectorAll('.popup__close,._popup-close');

if (popup_close_icon) {
  var _loop2 = function _loop2(_index3) {
    var el = popup_close_icon[_index3];
    el.addEventListener('click', function () {
      popup_close(el.closest('.popup'));
    });
  };

  for (var _index3 = 0; _index3 < popup_close_icon.length; _index3++) {
    _loop2(_index3);
  }
}

document.addEventListener('keydown', function (e) {
  if (e.code === 'Escape') {
    popup_close();
  }
});
"use strict";

var offerSlider = document.querySelector('.offer__slider');
var gallerySlider = document.querySelector('.gallery__slider');
var menu = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
var swiper1 = new Swiper(offerSlider, {
  observer: true,
  observerParents: true,
  observerSlideChildren: true,
  slidesPerView: 'auto',
  slidesPerGroup: 3,
  spaceBetween: 130,
  grid: {
    rows: 2,
    columns: 3
  },
  pagination: {
    el: '.offer-pagination',
    clickable: true,
    renderBullet: function renderBullet(index, className) {
      // if (index > 2) {
      // return `<span class="${className}'">${menu[index]} ...</span>`;
      // }
      return '<span class="' + className + '">' + menu[index] + '</span>';
    }
  },
  breakpoints: {
    1720: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 130,
      grid: {
        rows: 2,
        columns: 3
      }
    },
    1400: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 130,
      grid: {
        rows: 2,
        columns: 3
      }
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 60,
      slidesPerGroup: 3,
      grid: {
        rows: 2,
        columns: 3
      }
    },
    990: {
      slidesPerView: 3,
      spaceBetween: 60,
      slidesPerGroup: 2,
      grid: {
        rows: 2,
        columns: 3
      }
    },
    768: {
      slidesPerGroup: 1,
      slidesPerView: 1,
      spaceBetween: 40,
      grid: {
        rows: 3,
        columns: 1
      }
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 50,
      grid: {
        rows: 2,
        columns: 1
      }
    }
  }
});
var swiper2 = new Swiper(gallerySlider, {
  observer: true,
  observerParents: true,
  observerSlideChildren: true,
  grabCursor: true,
  centeredSlides: true,
  freeMode: true,
  slidesPerView: 'auto',
  effect: 'coverflow',
  loop: true,
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: true
  },
  breakpoints: {
    1780: {
      spaceBetween: 240
    },
    1440: {
      spaceBetween: 100
    },
    780: {
      spaceBetween: 100
    },
    580: {
      spaceBetween: 50
    },
    320: {
      spaceBetween: 20
    }
  },
  navigation: {
    nextEl: '.gallery__arrow-next',
    prevEl: '.gallery__arrow-prev'
  }
});
"use strict";

var unlock = true;

function body_lock(delay) {
  var body = document.querySelector("body");

  if (body.classList.contains('_lock')) {
    body_lock_remove(delay);
  } else {
    body_lock_add(delay);
  }
}

function body_lock_remove(delay) {
  var body = document.querySelector("body");

  if (unlock) {
    var lock_padding = document.querySelectorAll("._lp");
    setTimeout(function () {
      for (var index = 0; index < lock_padding.length; index++) {
        var el = lock_padding[index];
        el.style.paddingRight = '0px';
      }

      body.style.paddingRight = '0px';
      body.classList.remove("_lock");
    }, delay);
    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, delay);
  }
}

function body_lock_add(delay) {
  var body = document.querySelector("body");

  if (unlock) {
    var lock_padding = document.querySelectorAll("._lp");

    for (var index = 0; index < lock_padding.length; index++) {
      var el = lock_padding[index];
      el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    }

    body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    body.classList.add("_lock");
    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, delay);
  }
}
"use strict";
//# sourceMappingURL=main.js.map
