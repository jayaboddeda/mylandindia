!(function (e) {
  "use strict";
  function t(t) {
    e(t).length > 0 &&
      e(t).each(function () {
        e(this)
          .find("a")
          .each(function () {
            e(this).on("click", function (t) {
              var a = e(this).attr("href");
              if (a && a.startsWith("#") && a.length > 1) {
                var n = e(a);
                n.length &&
                  (t.preventDefault(),
                  e("html, body")
                    .stop()
                    .animate({ scrollTop: n.offset().top - 10 }, 1e3));
              }
            });
          });
      });
  }
  if (
    (e(window).on("load", function () {
      e(".preloader").fadeOut();
    }),
    e(".preloader").length > 0 &&
      e(".preloaderCls").each(function () {
        e(this).on("click", function (t) {
          t.preventDefault(), e(".preloader").css("display", "none");
        });
      }),
    (e.fn.thmobilemenu = function (t) {
      var a = e.extend(
        {
          menuToggleBtn: ".th-menu-toggle",
          bodyToggleClass: "th-body-visible",
          subMenuClass: "th-submenu",
          subMenuParent: "menu-item-has-children",
          thSubMenuParent: "th-item-has-children",
          subMenuParentToggle: "th-active",
          meanExpandClass: "th-mean-expand",
          appendElement: '<span class="th-mean-expand"></span>',
          subMenuToggleClass: "th-open",
          toggleSpeed: 400,
        },
        t
      );
      return this.each(function () {
        var t = e(this);
        function n() {
          t.toggleClass(a.bodyToggleClass);
          var n = "." + a.subMenuClass;
          e(n).each(function () {
            e(this).hasClass(a.subMenuToggleClass) &&
              (e(this).removeClass(a.subMenuToggleClass),
              e(this).css("display", "none"),
              e(this).parent().removeClass(a.subMenuParentToggle));
          });
        }
        t.find("." + a.subMenuParent).each(function () {
          var t = e(this).find("ul");
          t.addClass(a.subMenuClass),
            t.css("display", "none"),
            e(this).addClass(a.subMenuParent),
            e(this).addClass(a.thSubMenuParent),
            e(this).children("a").append(a.appendElement);
        });
        var s = "." + a.thSubMenuParent + " > a";
        e(s).each(function () {
          e(this).on("click", function (t) {
            var n, s;
            t.preventDefault(),
              (n = e(this).parent()),
              (s = n.children("ul")).length > 0 &&
                (n.toggleClass(a.subMenuParentToggle),
                s.slideToggle(a.toggleSpeed),
                s.toggleClass(a.subMenuToggleClass));
          });
        }),
          e(a.menuToggleBtn).each(function () {
            e(this).on("click", function () {
              n();
            });
          }),
          t.on("click", function (e) {
            e.stopPropagation(), n();
          }),
          t.find("div").on("click", function (e) {
            e.stopPropagation();
          });
      });
    }),
    e(".th-menu-wrapper").thmobilemenu(),
    t(".onepage-nav"),
    t(".scroll-down"),
    e(window).scroll(function () {
      e(this).scrollTop() > 500
        ? (e(".sticky-wrapper").addClass("sticky"),
          e(".category-menu").addClass("close-category"))
        : (e(".sticky-wrapper").removeClass("sticky"),
          e(".category-menu").removeClass("close-category"));
    }),
    e(".menu-expand").each(function () {
      e(this).on("click", function (t) {
        t.preventDefault(), e(".category-menu").toggleClass("open-category");
      });
    }),
    e(".scroll-top").length > 0)
  ) {
    var a = document.querySelector(".scroll-top"),
      n = document.querySelector(".scroll-top path"),
      s = n.getTotalLength();
    (n.style.transition = n.style.WebkitTransition = "none"),
      (n.style.strokeDasharray = s + " " + s),
      (n.style.strokeDashoffset = s),
      n.getBoundingClientRect(),
      (n.style.transition = n.style.WebkitTransition =
        "stroke-dashoffset 10ms linear");
    var o = function () {
      var t = e(window).scrollTop(),
        a = e(document).height() - e(window).height(),
        o = s - (t * s) / a;
      n.style.strokeDashoffset = o;
    };
    o(), e(window).scroll(o);
    jQuery(window).on("scroll", function () {
      jQuery(this).scrollTop() > 50
        ? jQuery(a).addClass("show")
        : jQuery(a).removeClass("show");
    }),
      jQuery(a).on("click", function (e) {
        return (
          e.preventDefault(),
          jQuery("html, body").animate({ scrollTop: 0 }, 750),
          !1
        );
      });
  }
  e("[data-bg-src]").length > 0 &&
    e("[data-bg-src]").each(function () {
      var t = e(this).attr("data-bg-src");
      e(this).css("background-image", "url(" + t + ")"),
        e(this).removeAttr("data-bg-src").addClass("background-image");
    }),
    e("[data-bg-color]").length > 0 &&
      e("[data-bg-color]").each(function () {
        var t = e(this).attr("data-bg-color");
        e(this).css("background-color", t), e(this).removeAttr("data-bg-color");
      }),
    e("[data-theme-color]").length > 0 &&
      e("[data-theme-color]").each(function () {
        var t = e(this).attr("data-theme-color");
        e(this).get(0).style.setProperty("--theme-color", t),
          e(this).removeAttr("data-theme-color");
      }),
    e("[data-border]").each(function () {
      var t = e(this).data("border");
      e(this).css("--th-border-color", t);
    }),
    e("[data-mask-src]").length > 0 &&
      e("[data-mask-src]").each(function () {
        var t = e(this).attr("data-mask-src");
        e(this).css({
          "mask-image": "url(" + t + ")",
          "-webkit-mask-image": "url(" + t + ")",
        }),
          e(this).addClass("bg-mask"),
          e(this).removeAttr("data-mask-src");
      }),
    e(".th-slider").each(function () {
      var t = e(this),
        a = e(this).data("slider-options") || {},
        n = t.find(".slider-prev"),
        s = t.find(".slider-next"),
        o = t.find(".slider-pagination").get(0),
        i = t.find(".slider-pagination2"),
        r = t.find(".slider-pagination-progressbar2 .slider-progressbar-fill"),
        c = {
          slidesPerView: 1,
          spaceBetween: a.spaceBetween || 24,
          loop: !1 !== a.loop,
          speed: a.speed || 1e3,
          autoplay: a.autoplay || { delay: 6e3, disableOnInteraction: !1 },
          navigation: { prevEl: n.get(0), nextEl: s.get(0) },
          pagination: {
            el: o,
            type: a.paginationType || "bullets",
            clickable: !0,
            renderBullet: function (e, t) {
              var a = e + 1;
              return (
                '<span class="' +
                t +
                '" aria-label="Go to Slide ' +
                (a < 10 ? "0" + a : a) +
                '"></span>'
              );
            },
          },
          on: {
            init: function () {
              d(this), u(this), p(this), h(this);
            },
            slideChange: function () {
              d(this), u(this), p(this), h(this);
            },
            destroy: function () {
              !(function (t) {
                t && t.destroy(!0, !0);
                e(".panorama-container").each(function () {
                  var t = e(this).data("viewer");
                  t && (t.dispose(), e(this).html(""));
                });
              })(this);
            },
          },
        },
        l = e.extend({}, c, a);
      new Swiper(t.get(0), l);
      function d(e) {
        var t = e.realIndex + 1,
          a = e.slides.length;
        i.html(
          '<span class="current-slide">' +
            (t < 10 ? "0" + t : t) +
            '</span> <span class="divider">/</span> <span class="total-slides">' +
            (a < 10 ? "0" + a : a) +
            "</span>"
        );
      }
      function u(e) {
        var t = ((e.realIndex + 1) / e.slides.length) * 100;
        r.css("height", t + "%");
      }
      function p(t) {
        var a = e(t.slides[t.realIndex]).find(".panorama-container");
        if (a.length) {
          var n = a.data("panorama-src");
          a.html("");
          var s = new PANOLENS.ImagePanorama(n),
            o = new PANOLENS.Viewer({
              container: a[0],
              autoRotate: !0,
              autoRotateSpeed: 0.25,
              cameraFov: 70,
              controlBar: !1,
            });
          o.add(s), o.getCamera().position.set(900, 0, 0);
        }
      }
      function h(t) {
        var a = e(t.slides),
          o = t.realIndex,
          i = a.eq((o + 1) % a.length),
          r = a.eq((o - 1 + a.length) % a.length),
          c = i.find(".panorama-container").data("panorama-src"),
          l = r.find(".panorama-container").data("panorama-src");
        c && s.css("background-image", "url(" + c + ")"),
          l && n.css("background-image", "url(" + l + ")");
      }
    }),
    e("[data-ani]").each(function () {
      var t = e(this).data("ani");
      e(this).addClass(t);
    }),
    e("[data-ani-delay]").each(function () {
      var t = e(this).data("ani-delay");
      e(this).css("animation-delay", t);
    }),
    e("[data-slider-prev], [data-slider-next]").on("click", function () {
      var t = e(this).data("slider-prev") || e(this).data("slider-next"),
        a = e(t);
      if (a.length) {
        var n = a[0].swiper;
        n &&
          (e(this).data("slider-prev")
            ? n.slidePrev()
            : (navigator, n.slideNext()));
      }
    });
  const i = new Swiper(".hero-slider12", {
    loop: !0,
    effect: "fade",
    speed: 1e3,
    autoHeight: !0,
    autoplay: { delay: 2500, disableOnInteraction: !1 },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  !(function () {
    const e = document.querySelectorAll(".swiper-slide"),
      t = document.querySelector(".swiper-button-next"),
      a = document.querySelector(".swiper-button-prev");
    i.on("slideChange", function () {
      let n = i.realIndex,
        s = e[(n + 1) % e.length],
        o = e[(n - 1 + e.length) % e.length];
      s && (t.style.backgroundImage = s.style.backgroundImage),
        o && (a.style.backgroundImage = o.style.backgroundImage);
    });
  })(),
    e(document).ready(function () {
      e(".team-slider7").each(function () {
        const e = 1.47,
          t = 0.048;
        new Swiper(".team-slider7", {
          slidesPerView: 5,
          spaceBetween: 60,
          centeredSlides: !0,
          loop: !0,
          grabCursor: !0,
          pagination: { el: ".swiper-pagination", clickable: !0 },
          breakpoints: {
            300: { slidesPerView: 1, spaceBetween: 120 },
            600: { slidesPerView: 1, spaceBetween: 220 },
            768: { slidesPerView: 2, spaceBetween: 90 },
            991: { slidesPerView: 3, spaceBetween: 80 },
            1100: { slidesPerView: 3, spaceBetween: 130 },
            1400: { slidesPerView: 4, spaceBetween: 100 },
            1600: { slidesPerView: 5, spaceBetween: 100 },
          },
        }),
          (function a() {
            requestAnimationFrame(a),
              document.querySelectorAll(".single").forEach((a, n) => {
                const s = a.getBoundingClientRect(),
                  o = 0.5 * window.innerWidth - (s.x + 0.5 * s.width);
                let i = Math.abs(o) * e - s.width * e;
                i < 0 && (i = 0);
                const r = o < 0 ? "left top" : "right top";
                (a.style.transform = `translate(0, ${i}px) rotate(${
                  -o * t
                }deg)`),
                  (a.style.transformOrigin = r);
              });
          })();
      });
    }),
    (e.fn.activateSliderThumbs = function (t) {
      var a = e.extend({ sliderTab: !1, tabButton: ".tab-btn" }, t);
      return this.each(function () {
        var t = e(this),
          n = t.find(a.tabButton),
          s = e('<span class="indicator"></span>').appendTo(t),
          o = t.data("slider-tab"),
          i = e(o)[0].swiper;
        if (
          (n.on("click", function (t) {
            t.preventDefault();
            var n = e(this);
            if (
              (n.addClass("active").siblings().removeClass("active"),
              l(n),
              a.sliderTab)
            ) {
              var s = n.index();
              i.slideTo(s);
            }
          }),
          a.sliderTab)
        ) {
          i.on("slideChange", function () {
            var e = i.realIndex,
              t = n.eq(e);
            t.addClass("active").siblings().removeClass("active"), l(t);
          });
          var r = i.activeIndex,
            c = n.eq(r);
          c.addClass("active").siblings().removeClass("active"), l(c);
        }
        function l(e) {
          var t = e.position(),
            a = parseInt(e.css("margin-top")) || 0,
            n = parseInt(e.css("margin-left")) || 0;
          s.css("--height-set", e.outerHeight() + "px"),
            s.css("--width-set", e.outerWidth() + "px"),
            s.css("--pos-y", t.top + a + "px"),
            s.css("--pos-x", t.left + n + "px");
        }
      });
    }),
    e(".project-number-pagination").length &&
      e(".project-number-pagination").activateSliderThumbs({
        sliderTab: !0,
        tabButton: ".tab-btn",
      });
  var r,
    c,
    l,
    d = ".ajax-contact",
    u = "is-invalid",
    p = '[name="email"]',
    h =
      '[name="name"],[name="email"],[name="subject"],[name="number"],[name="message"]',
    f = e(".form-messages");
  function m() {
    var t,
      a = e(d).serialize();
    (t = (function () {
      var t,
        a = !0;
      function n(n) {
        n = n.split(",");
        for (var s = 0; s < n.length; s++)
          (t = d + " " + n[s]),
            e(t).val()
              ? (e(t).removeClass(u), (a = !0))
              : (e(t).addClass(u), (a = !1));
      }
      n(h),
        e(p).val() &&
        e(p)
          .val()
          .match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)
          ? (e(p).removeClass(u), (a = !0))
          : (e(p).addClass(u), (a = !1));
      return a;
    })()),
      t &&
        jQuery
          .ajax({ url: e(d).attr("action"), data: a, type: "POST" })
          .done(function (t) {
            f.removeClass("error"),
              f.addClass("success"),
              f.text(t),
              e(d + ' input:not([type="submit"]),' + d + " textarea").val("");
          })
          .fail(function (e) {
            f.removeClass("success"),
              f.addClass("error"),
              "" !== e.responseText
                ? f.html(e.responseText)
                : f.html(
                    "Oops! An error occured and your message could not be sent."
                  );
          });
  }
  function g(t, a, n, s) {
    e(a).on("click", function (a) {
      a.preventDefault(), e(t).addClass(s);
    }),
      e(t).on("click", function (a) {
        a.stopPropagation(), e(t).removeClass(s);
      }),
      e(t + " > div").on("click", function (a) {
        a.stopPropagation(), e(t).addClass(s);
      }),
      e(n).on("click", function (a) {
        a.preventDefault(), a.stopPropagation(), e(t).removeClass(s);
      });
  }
  function v(e) {
    return parseInt(e, 10);
  }
  e(d).on("submit", function (e) {
    e.preventDefault(), m();
  }),
    (r = ".popup-search-box"),
    (c = ".searchClose"),
    (l = "show"),
    e(".searchBoxToggler").on("click", function (t) {
      t.preventDefault(), e(r).addClass(l);
    }),
    e(r).on("click", function (t) {
      t.stopPropagation(), e(r).removeClass(l);
    }),
    e(r)
      .find("form")
      .on("click", function (t) {
        t.stopPropagation(), e(r).addClass(l);
      }),
    e(c).on("click", function (t) {
      t.preventDefault(), t.stopPropagation(), e(r).removeClass(l);
    }),
    g(".sidemenu-cart", ".sideMenuToggler", ".sideMenuCls", "show"),
    g(".sidemenu-info", ".sideMenuInfo", ".sideMenuCls", "show"),
    e(".popup-image").magnificPopup({
      type: "image",
      mainClass: "mfp-zoom-in",
      removalDelay: 260,
      gallery: { enabled: !0 },
    }),
    e(".popup-video").magnificPopup({
      type: "iframe",
      removalDelay: 260,
      mainClass: "mfp-zoom-in",
    }),
    e(".popup-content").magnificPopup({ type: "inline", midClick: !0 }),
    (e.fn.sectionPosition = function (t, a) {
      e(this).each(function () {
        var n,
          s,
          o,
          i,
          r,
          c = e(this);
        (n = Math.floor(c.height() / 2)),
          (s = c.attr(t)),
          (o = c.attr(a)),
          (i = v(e(o).css("padding-top"))),
          (r = v(e(o).css("padding-bottom"))),
          "top-half" === s
            ? (e(o).css("padding-bottom", r + n + "px"),
              c.css("margin-top", "-" + n + "px"))
            : "bottom-half" === s &&
              (e(o).css("padding-top", i + n + "px"),
              c.css("margin-bottom", "-" + n + "px"));
      });
    });
  var y = "[data-sec-pos]";
  e(y).length &&
    e(y).imagesLoaded(function () {
      e(y).sectionPosition("data-sec-pos", "data-pos-for");
    }),
    e(".filter-active").imagesLoaded(function () {
      var t = ".filter-active",
        a = ".filter-menu-active";
      if (e(t).length > 0) {
        var n = e(t).isotope({
          itemSelector: ".filter-item",
          filter: "*",
          masonry: {},
        });
        e(a).on("click", "button", function () {
          var t = e(this).attr("data-filter");
          n.isotope({ filter: t });
        }),
          e(a).on("click", "button", function (t) {
            t.preventDefault(),
              e(this).addClass("active"),
              e(this).siblings(".active").removeClass("active");
          });
      }
    }),
    e(".masonary-active, .woocommerce-Reviews .comment-list").imagesLoaded(
      function () {
        var t = ".masonary-active, .woocommerce-Reviews .comment-list";
        e(t).length > 0 &&
          e(t).isotope({
            itemSelector: ".filter-item, .woocommerce-Reviews .comment-list li",
            filter: "*",
            masonry: { columnWidth: 1 },
          }),
          e('[data-bs-toggle="tab"]').on("shown.bs.tab", function (a) {
            e(t).isotope({ filter: "*" });
          });
      }
    ),
    e(".filter-active-cat1").imagesLoaded(function () {
      var t = ".filter-active-cat1",
        a = ".filter-menu-active";
      if (e(t).length > 0) {
        var n = e(t).isotope({
          itemSelector: ".filter-item",
          filter: ".cat1",
          masonry: { columnWidth: 1 },
        });
        e(a).on("click", "button", function () {
          var t = e(this).attr("data-filter");
          n.isotope({ filter: t });
        }),
          e(a).on("click", "button", function (t) {
            t.preventDefault(),
              e(this).addClass("active"),
              e(this).siblings(".active").removeClass("active");
          });
      }
    }),
    e(".counter-number").counterUp({ delay: 10, time: 1e3 }),
    (e.fn.shapeMockup = function () {
      e(this).each(function () {
        var t = e(this),
          a = t.data("top"),
          n = t.data("right"),
          s = t.data("bottom"),
          o = t.data("left");
        t.css({ top: a, right: n, bottom: s, left: o })
          .removeAttr("data-top")
          .removeAttr("data-right")
          .removeAttr("data-bottom")
          .removeAttr("data-left")
          .parent()
          .addClass("shape-mockup-wrap");
      });
    }),
    e(".shape-mockup") && e(".shape-mockup").shapeMockup(),
    e(".progress-bar").waypoint(
      function () {
        e(".progress-bar").css({
          animation: "animate-positive 1.8s",
          opacity: "1",
        });
      },
      { offset: "75%" }
    ),
    (e.fn.countdown = function () {
      e(this).each(function () {
        var t = e(this),
          a = new Date(t.data("offer-date")).getTime();
        function n(e) {
          return t.find(e);
        }
        var s = setInterval(function () {
          var e = new Date().getTime(),
            o = a - e,
            i = Math.floor(o / 864e5),
            r = Math.floor((o % 864e5) / 36e5),
            c = Math.floor((o % 36e5) / 6e4),
            l = Math.floor((o % 6e4) / 1e3);
          i < 10 && (i = "0" + i),
            r < 10 && (r = "0" + r),
            c < 10 && (c = "0" + c),
            l < 10 && (l = "0" + l),
            o < 0
              ? (clearInterval(s),
                t.addClass("expired"),
                t.find(".message").css("display", "block"))
              : (n(".day").html(i),
                n(".hour").html(r),
                n(".minute").html(c),
                n(".seconds").html(l));
        }, 1e3);
      });
    }),
    e(".counter-list").length && e(".counter-list").countdown();
  const b = {};
  function w() {
    const t = e(this),
      a = t.attr("src");
    if (!b[a]) {
      const t = e.Deferred();
      e.get(a, (a) => {
        t.resolve(e(a).find("svg"));
      }),
        (b[a] = t.promise());
    }
    b[a].then((a) => {
      const n = e(a).clone();
      t.attr("id") && n.attr("id", t.attr("id")),
        t.attr("class") && n.attr("class", t.attr("class")),
        t.attr("style") && n.attr("style", t.attr("style")),
        t.attr("width") &&
          (n.attr("width", t.attr("width")),
          t.attr("height") || n.removeAttr("height")),
        t.attr("height") &&
          (n.attr("height", t.attr("height")),
          t.attr("width") || n.removeAttr("width")),
        n.insertAfter(t),
        t.trigger("svgInlined", n[0]),
        t.remove();
    });
  }
  function C(t, a, n, s) {
    var o = t.text().split(a),
      i = "";
    o.length &&
      (e(o).each(function (e, t) {
        i += '<span class="' + n + (e + 1) + '">' + t + "</span>" + s;
      }),
      t.empty().append(i));
  }
  (e.fn.inlineSvg = function () {
    return this.each(w), this;
  }),
    e(".svg-img").inlineSvg(),
    e("#ship-to-different-address-checkbox").on("change", function () {
      e(this).is(":checked")
        ? e("#ship-to-different-address").next(".shipping_address").slideDown()
        : e("#ship-to-different-address").next(".shipping_address").slideUp();
    }),
    e(".woocommerce-form-login-toggle a").on("click", function (t) {
      t.preventDefault(), e(".woocommerce-form-login").slideToggle();
    }),
    e(".woocommerce-form-coupon-toggle a").on("click", function (t) {
      t.preventDefault(), e(".woocommerce-form-coupon").slideToggle();
    }),
    e(".shipping-calculator-button").on("click", function (t) {
      t.preventDefault(),
        e(this).next(".shipping-calculator-form").slideToggle();
    }),
    e('.wc_payment_methods input[type="radio"]:checked')
      .siblings(".payment_box")
      .show(),
    e('.wc_payment_methods input[type="radio"]').each(function () {
      e(this).on("change", function () {
        e(".payment_box").slideUp(),
          e(this).siblings(".payment_box").slideDown();
      });
    }),
    e(".rating-select .stars a").each(function () {
      e(this).on("click", function (t) {
        t.preventDefault(),
          e(this).siblings().removeClass("active"),
          e(this).parent().parent().addClass("selected"),
          e(this).addClass("active");
      });
    }),
    e(".quantity-plus").each(function () {
      e(this).on("click", function (t) {
        t.preventDefault();
        var a = e(this).siblings(".qty-input"),
          n = parseInt(a.val(), 10);
        isNaN(n) || a.val(n + 1);
      });
    }),
    e(".quantity-minus").each(function () {
      e(this).on("click", function (t) {
        t.preventDefault();
        var a = e(this).siblings(".qty-input"),
          n = parseInt(a.val(), 10);
        !isNaN(n) && n > 1 && a.val(n - 1);
      });
    }),
    e(".color-switch-btns button").each(function () {
      const t = e(this),
        a = t.data("color");
      t.css("--theme-color", a),
        t.on("click", function () {
          const t = e(this).data("color");
          e(":root").css("--theme-color", t);
        });
    }),
    e(document).on("click", ".switchIcon", function () {
      e(".color-scheme-wrap").toggleClass("active");
    });
  var k = {
    init: function () {
      return this.each(function () {
        C(e(this), "", "char", "");
      });
    },
    words: function () {
      return this.each(function () {
        C(e(this), " ", "word", " ");
      });
    },
    lines: function () {
      return this.each(function () {
        var t = "eefec303079ad17405c889e092e105b0";
        C(e(this).children("br").replaceWith(t).end(), t, "line", "");
      });
    },
  };
  if (
    ((e.fn.lettering = function (t) {
      return t && k[t]
        ? k[t].apply(this, [].slice.call(arguments, 1))
        : "letters" !== t && t
        ? (e.error("Method " + t + " does not exist on jQuery.lettering"), this)
        : k.init.apply(this, [].slice.call(arguments, 0));
    }),
    e(".circle-title-anime").lettering(),
    e(".cursor-follower").length > 0)
  ) {
    var x = e(".cursor-follower"),
      T = 0,
      P = 0,
      S = 0,
      M = 0;
    TweenMax.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        (T += (S - T) / 9),
          (P += (M - P) / 9),
          TweenMax.set(x, { css: { left: T - 12, top: P - 12 } });
      },
    }),
      e(document).on("mousemove", function (e) {
        (S = e.clientX), (M = e.clientY);
      }),
      e(".slider-area").on("mouseenter", function () {
        x.addClass("d-none");
      }),
      e(".slider-area").on("mouseleave", function () {
        x.removeClass("d-none");
      });
  }
  const D = document.querySelector(".slider-drag-cursor"),
    I = { x: window.innerWidth / 2, y: window.innerHeight / 2 },
    A = { x: I.x, y: I.y },
    E = gsap.quickSetter(D, "x", "px"),
    L = gsap.quickSetter(D, "y", "px");
  window.addEventListener("pointermove", (e) => {
    (A.x = e.x), (A.y = e.y);
  }),
    gsap.set(".slider-drag-cursor", { xPercent: -50, yPercent: -50 }),
    gsap.ticker.add(() => {
      const e = 1 - Math.pow(0, gsap.ticker.deltaRatio());
      (I.x += (A.x - I.x) * e), (I.y += (A.y - I.y) * e), E(I.x), L(I.y);
    }),
    e(".slider-drag-wrap").hover(
      function () {
        e(".slider-drag-cursor").addClass("active");
      },
      function () {
        e(".slider-drag-cursor").removeClass("active");
      }
    ),
    e(".slider-drag-wrap a").hover(
      function () {
        e(".slider-drag-cursor").removeClass("active");
      },
      function () {
        e(".slider-drag-cursor").addClass("active");
      }
    ),
    e(".price_slider").slider({
      range: !0,
      min: 0,
      max: 1e4,
      values: [1e3, 8500],
      slide: function (t, a) {
        e(".from").text("$" + a.values[0]), e(".to").text("$" + a.values[1]);
      },
    }),
    e(".from").text("$" + e(".price_slider").slider("values", 0)),
    e(".to").text("$" + e(".price_slider").slider("values", 1)),
    e(".date-pick").datetimepicker({
      timepicker: !1,
      datepicker: !0,
      format: "d-m-y",
      step: 10,
    }),
    e(".time-pick").datetimepicker({ datepicker: !1, format: "H:i", step: 30 }),
    e(".date-time-pick").datetimepicker({}),
    document.addEventListener("DOMContentLoaded", function () {
      const e = document.querySelectorAll(".hotspot-dot"),
        t = document.querySelectorAll(".product-hotspot-dot");
      let a = null;
      e.forEach((e, n) => {
        e.addEventListener("mouseenter", function () {
          t.forEach((e) => e.classList.remove("show"));
          document
            .querySelector(`.product-hotspot-dot${n + 1}`)
            .classList.add("show"),
            (a = n + 1);
        });
      }),
        t.forEach((e) => {
          e.addEventListener("mouseenter", function () {
            this.classList.add("show");
          }),
            e.addEventListener("mouseleave", function () {
              this.classList.remove("show");
            });
        }),
        document.addEventListener("click", function (e) {
          e.target.closest(".hotspot-dot") ||
            e.target.closest(".product-hotspot-dot") ||
            t.forEach((e) => e.classList.remove("show"));
        });
    }),
    gsap.registerPlugin(ScrollTrigger);
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const e = new Lenis({ lerp: 0.07 });
    e.on("scroll", ScrollTrigger.update),
      gsap.ticker.add((t) => {
        e.raf(1e3 * t);
      }),
      document.querySelectorAll(".allow-natural-scroll").forEach((e) => {
        e.addEventListener("wheel", (e) => e.stopPropagation(), {
          passive: !0,
        }),
          e.addEventListener("touchmove", (e) => e.stopPropagation(), {
            passive: !0,
          });
      });
  }
//   window.addEventListener(
//     "contextmenu",
//     function (e) {
//       e.preventDefault();
//     },
//     !1
//   ),
//     (document.onkeydown = function (e) {
//       return (
//         123 != event.keyCode &&
//         (!e.ctrlKey || !e.shiftKey || e.keyCode != "I".charCodeAt(0)) &&
//         (!e.ctrlKey || !e.shiftKey || e.keyCode != "C".charCodeAt(0)) &&
//         (!e.ctrlKey || !e.shiftKey || e.keyCode != "J".charCodeAt(0)) &&
//         (!e.ctrlKey || e.keyCode != "U".charCodeAt(0)) &&
//         void 0
//       );
//     });
})(jQuery);
