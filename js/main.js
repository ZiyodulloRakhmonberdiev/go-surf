$(function () {
  $('.header__slider').slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img src="./img/icons/arrow-right.svg" alt="icon-right" class="slider-arrows slider-arrows__left">',
    nextArrow:
      '<img src="./img/icons/arrow-right.svg" alt="icon-right" class="slider-arrows slider-arrows__right">',
    asNavFor: '.slider-dots'
  })
  $('.slider-dots').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider',
    focusOnSelect: true
  })
  $('.slider-surf').slick({
    prevArrow:
      '<img src="./img/icons/arrow-right.svg" alt="icon-right" class="slider-arrows slider-arrows__left">',
    nextArrow:
      '<img src="./img/icons/arrow-right.svg" alt="icon-right" class="slider-arrows slider-arrows__right">',
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.map__info-container',
    infinite: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          centerMode: true
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2.7,
          centerMode: false
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 635,
        settings: {
          slidesToShow: 1,
          centerMode: true
        }
      },
      {
        breakpoint: 359,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }
    ]
  })
  $('.map__info-container').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slider-surf',
    infinite: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          infinite: true,
          cssEase: 'linear'
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2.6,
          infinite: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 635,
        settings: {
          slidesToShow: 1.9
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1.6
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }
    ]
  })
  $('.slider-holder, .shop__slider').slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img src="./img/icons/arrow-right.svg" alt="icon-right" class="slider-arrows slider-arrows__left">',
    nextArrow:
      '<img src="./img/icons/arrow-right.svg" alt="icon-right" class="slider-arrows slider-arrows__right">'
  })
  $(
    '<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="../img/sleep-section/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="./img/sleep-section/minus.svg" alt=""></div></div>'
  ).insertAfter('.quantity input')
  $('.quantity').each(function () {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max')

    btnUp.click(function () {
      var oldValue = parseFloat(input.val())
      if (oldValue >= max) {
        var newVal = oldValue
      } else {
        var newVal = oldValue + 1
      }
      spinner.find('input').val(newVal)
      spinner.find('input').trigger('change')
    })

    btnDown.click(function () {
      var oldValue = parseFloat(input.val())
      if (oldValue <= min) {
        var newVal = oldValue
      } else {
        var newVal = oldValue - 1
      }
      spinner.find('input').val(newVal)
      spinner.find('input').trigger('change')
    })
  })

  $('.quantity-button').on('click', function () {
    let summ =
      $('.nights').val() * $('.summ').data('nights') +
      $('.guests').val() * $('.summ').data('guests')
    $('.summ').html('$' + summ)
  })
  let summ =
    $('.nights').val() * $('.summ').data('nights') +
    $('.guests').val() * $('.summ').data('guests')
  $('.summ').html('$' + summ)

  $('.surfboard-shop__circle').on('click', function () {
    $(this).toggleClass('active')
  })

  //current data controls
  let today = new Date()
  let currentDay = today.getDate()
  let currentMonth = today.getMonth()
  let currentYear = today.getFullYear()

  if (currentDay < 10) {
    currentDay = '0' + today.getDate()
  }
  if (currentMonth < 10) {
    currentMonth = '0' + today.getMonth()
  }

  $('.data-current-day').html(currentDay)
  $('.data-current-month').html(currentMonth)
  $('.data-current-year').html(currentYear)

  //menu toggler
  $('.menu-btn').on('click', function () {
    $('.aside-header__menu').toggleClass('active')
  })
})
