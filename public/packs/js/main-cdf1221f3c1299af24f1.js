/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/main.js":
/*!**************************************!*\
  !*** ./app/javascript/packs/main.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
* Template Name: Kelly - v2.0.0
* Template URL: https://bootstrapmade.com/kelly-free-bootstrap-cv-resume-html-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
console.log('hello world');
$(document).on('turbolinks:load', function () {
  console.log("It works on each visit!");
}); // !(function ($) {
//   "use strict";
//   // Preloader
//   $(window).on('load', function () {
//     if ($('#preloader').length) {
//       $('#preloader').delay(100).fadeOut('slow', function () {
//         $(this).remove();
//       });
//     }
//   });
//   // Smooth scroll for the navigation menu and links with .scrollto classes
//   $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function (e) {
//     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       if (target.length) {
//         e.preventDefault();
//         var scrollto = target.offset().top;
//         var scrolled = 20;
//         if ($('#header').length) {
//           scrollto -= $('#header').outerHeight()
//           if (!$('#header').hasClass('header-scrolled')) {
//             scrollto += scrolled;
//           }
//         }
//         if ($(this).attr("href") == '#header') {
//           scrollto = 0;
//         }
//         $('html, body').animate({
//           scrollTop: scrollto
//         }, 1500, 'easeInOutExpo');
//         if ($(this).parents('.nav-menu, .mobile-nav').length) {
//           $('.nav-menu .active, .mobile-nav .active').removeClass('active');
//           $(this).closest('li').addClass('active');
//         }
//         if ($('body').hasClass('mobile-nav-active')) {
//           $('body').removeClass('mobile-nav-active');
//           $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
//           $('.mobile-nav-overly').fadeOut();
//         }
//         return false;
//       }
//     }
//   });
//   // Mobile Navigation
//   if ($('.nav-menu').length) {
//     var $mobile_nav = $('.nav-menu').clone().prop({
//       class: 'mobile-nav d-lg-none'
//     });
//     $('body').append($mobile_nav);
//     $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
//     $('body').append('<div class="mobile-nav-overly"></div>');
//     $(document).on('click', '.mobile-nav-toggle', function (e) {
//       $('body').toggleClass('mobile-nav-active');
//       $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
//       $('.mobile-nav-overly').toggle();
//     });
//     $(document).on('click', '.mobile-nav .drop-down > a', function (e) {
//       e.preventDefault();
//       $(this).next().slideToggle(300);
//       $(this).parent().toggleClass('active');
//     });
//     $(document).click(function (e) {
//       var container = $(".mobile-nav, .mobile-nav-toggle");
//       if (!container.is(e.target) && container.has(e.target).length === 0) {
//         if ($('body').hasClass('mobile-nav-active')) {
//           $('body').removeClass('mobile-nav-active');
//           $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
//           $('.mobile-nav-overly').fadeOut();
//         }
//       }
//     });
//   } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
//     $(".mobile-nav, .mobile-nav-toggle").hide();
//   }
//   // Back to top button
//   $(window).scroll(function () {
//     if ($(this).scrollTop() > 100) {
//       $('.back-to-top').fadeIn('slow');
//     } else {
//       $('.back-to-top').fadeOut('slow');
//     }
//   });
//   $('.back-to-top').click(function () {
//     $('html, body').animate({
//       scrollTop: 0
//     }, 1500, 'easeInOutExpo');
//     return false;
//   });
//   // Skills section
//   $('.skills-content').waypoint(function () {
//     $('.progress .progress-bar').each(function () {
//       $(this).css("width", $(this).attr("aria-valuenow") + '%');
//     });
//   }, {
//     offset: '80%'
//   });
//   // jQuery counterUp
//   $('[data-toggle="counter-up"]').counterUp({
//     delay: 10,
//     time: 1000
//   });
//   // Testimonials carousel (uses the Owl Carousel library)
//   $(".testimonials-carousel").owlCarousel({
//     autoplay: true,
//     dots: true,
//     loop: true,
//     items: 1
//   });
//   // Porfolio isotope and filter
//   $(window).on('load', function () {
//     var portfolioIsotope = $('.portfolio-container').isotope({
//       itemSelector: '.portfolio-item'
//     });
//     $('#portfolio-flters li').on('click', function () {
//       $("#portfolio-flters li").removeClass('filter-active');
//       $(this).addClass('filter-active');
//       portfolioIsotope.isotope({
//         filter: $(this).data('filter')
//       });
//       aos_init();
//     });
//     // Initiate venobox (lightbox feature used in portofilo)
//     $(document).ready(function () {
//       $('.venobox').venobox({
//         'share': false
//       });
//     });
//   });
//   // Portfolio details carousel
//   $(".portfolio-details-carousel").owlCarousel({
//     autoplay: true,
//     dots: true,
//     loop: true,
//     items: 1
//   });
//   // Init AOS
//   function aos_init() {
//     AOS.init({
//       duration: 1000,
//       once: true
//     });
//   }
//   $(window).on('load', function () {
//     aos_init();
//   });
// })(jQuery);

/***/ })

/******/ });
//# sourceMappingURL=main-cdf1221f3c1299af24f1.js.map