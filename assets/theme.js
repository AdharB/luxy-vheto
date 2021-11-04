/*! For license information please see theme.min.js.LICENSE.txt */
!(function () {
    var e = {
            2044: function (e, t, n) {
                var i;
                void 0 ===
                    (i = function () {
                        return function (e, t, n) {
                            var i;
                            return (
                                t || (t = 100),
                                function () {
                                    var o = this,
                                        r = arguments,
                                        a = function () {
                                            (i = null), n || e.apply(o, r);
                                        },
                                        s = n && !i;
                                    clearTimeout(i), (i = setTimeout(a, t)), s && e.apply(o, r);
                                }
                            );
                        };
                    }.call(t, n, t, e)) || (e.exports = i);
            },
            1306: function (e, t, n) {
                var i;
                void 0 ===
                    (i = function () {
                        return function (e) {
                            var t = e.querySelector(":scope > script");
                            try {
                                return JSON.parse(t.innerHTML);
                            } catch (e) {
                                return {};
                            }
                        };
                    }.call(t, n, t, e)) || (e.exports = i);
            },
            4642: function (e, t, n) {
                var i;
                void 0 ===
                    (i = function () {
                        return function (e) {
                            var t = 0,
                                n = e;
                            do {
                                (t += n.offsetTop), (n = n.offsetParent);
                            } while (n);
                            return t < 0 && (t = 0), t;
                        };
                    }.call(t, n, t, e)) || (e.exports = i);
            },
            5614: function (e, t, n) {
                var i;
                void 0 ===
                    (i = function () {
                        return function (e, t) {
                            "string" == typeof e && (e = e.replace(".", ""));
                            var n = "",
                                i = /\{\{\s*(\w+)\s*\}\}/,
                                o = t || "${{amount}}";
                            function r(e) {
                                return e.replace(/(\d+)(\d{3}[\.,]?)/, "$1,$2");
                            }
                            function a(e, t) {
                                var n = e.toFixed(t).toString();
                                return n.match(/^\.\d+/) ? "0" + n : n;
                            }
                            switch (o.match(i)[1]) {
                                case "amount":
                                    n = r(a(e / 100, 2));
                                    break;
                                case "amount_no_decimals":
                                    n = r(a(e / 100, 0));
                                    break;
                                case "amount_with_comma_separator":
                                    n = a(e / 100, 2).replace(/\./, ",");
                                    break;
                                case "amount_no_decimals_with_comma_separator":
                                    n = r(a(e / 100, 0)).replace(/\./, ",");
                            }
                            return o.replace(i, n);
                        };
                    }.call(t, n, t, e)) || (e.exports = i);
            },
            6699: function (e, t, n) {
                var i;
                void 0 ===
                    (i = function () {
                        return function (e, t, n) {
                            t || (t = 100);
                            var i = null,
                                o = null;
                            return function () {
                                var r = n || this,
                                    a = +new Date(),
                                    s = arguments;
                                i && a < i + t
                                    ? (clearTimeout(o),
                                      (o = setTimeout(function () {
                                          (i = a), e.apply(r, s);
                                      }, t)))
                                    : ((i = a), e.apply(r, s));
                            };
                        };
                    }.call(t, n, t, e)) || (e.exports = i);
            },
            3727: function (e, t, n) {
                var i;
                void 0 ===
                    (i = function () {
                        return function (e) {
                            return e.classList.contains("velocity-animating");
                        };
                    }.call(t, n, t, e)) || (e.exports = i);
            },
            806: function (e, t, n) {
                var i;
                void 0 ===
                    (i = function () {
                        return function e(t, n) {
                            window[t]
                                ? n()
                                : setTimeout(function () {
                                      e(t, n);
                                  }, 100);
                        };
                    }.call(t, n, t, e)) || (e.exports = i);
            },
            2546: function (e, t, n) {
                var i, o;
                (i = [n(9755), n(1200), n(2283)]),
                    void 0 ===
                        (o = function (e, t, n) {
                            function i() {
                                var n = e(".js-accordion-link"),
                                    i = e(".js-accordion-content"),
                                    o = e(".js-accordion-icon");
                                n.click(function (n) {
                                    if ((n.preventDefault(), i.hasClass(".velocity-animating"))) return !1;
                                    var r = e(this),
                                        a = r.next(".js-accordion-content"),
                                        s = r.find(".js-accordion-icon"),
                                        c = null;
                                    o.removeClass("state--showing"), a.is(":visible") ? t(a[0], "slideUp", 200) : ((c = i.filter(":visible")), t(c[0], "slideUp", 200), t(a[0], "slideDown", 200), s.addClass("state--showing"));
                                });
                            }
                            i(), n.on("pjax:load", i).on("cartdrawer:update", i);
                        }.apply(t, i)) || (e.exports = o);
            },
            7180: function (e, t, n) {
                var i, o;
                (i = [n(9755), n(2283), n(1306)]),
                    void 0 ===
                        (o = function (e, t, n) {
                            i(), t.on("pjax:load", i);
                            function i() {
                                document.querySelectorAll("[module-add-to-cart]").forEach(o);
                            }
                            function o(i) {
                                var o = n(i);
                                i.addEventListener("click", function (n) {
                                    var r, a;
                                    n.preventDefault(),
                                        i.classList.add("state--loading"),
                                        t.trigger("addtocart:click", [o.variant, o.quantity, o.collection]),
                                        ((r = o.variant.id),
                                        (a = o.quantity),
                                        e.ajax({
                                            type: "POST",
                                            url: "/cart/add.js",
                                            data: "id=" + r + "&quantity=" + a + ($("#vheto_status").val() == "1" ? "&properties['_vheto_status']=" + $("#vheto_status").val() : ""),
                                            dataType: "json",
                                        })).done(function () {
                                            t.trigger("addtocart");
                                        });
                                }),
                                    t.on("cartdrawer:update", function () {
                                        i.classList.remove("state--loading");
                                    });
                            }
                        }.apply(t, i)) || (e.exports = o);
            },
            4900: function (e, t, n) {
                var i, o;
                (i = [n(1200), n(9117)]),
                    void 0 ===
                        (o = function (e, t) {
                            var n = document.querySelector("[data-module-article-guide-bar]");
                            if (n) {
                                var i,
                                    o = new t();
                                (i = n),
                                    o.on("button:click", function () {
                                        e(i, "fadeOut", {
                                            duration: 200,
                                            complete: function () {
                                                document.documentElement.classList.add("article-guide-bar--hidden");
                                            },
                                        });
                                    }),
                                    n.querySelector("[data-local-button]").addEventListener("click", function (e) {
                                        e.preventDefault(), o.trigger("button:click");
                                    });
                            }
                        }.apply(t, i)) || (e.exports = o);
            },
            8494: function (e, t, n) {
                Promise.resolve()
                    .then(function () {
                        var e = [n(3497), n(2283), n(806)];
                        (function (e, t, n) {
                            n("KlaviyoSubscribe", function () {
                                KlaviyoSubscribe.attachToForms("#article-newsletter", {
                                    extra_properties: { $source: "stickyblog" },
                                    success: function () {
                                        (e.signed_up = !0), t.trigger("newsletter:success"), t.trigger("articlenewsletter:success");
                                    },
                                });
                            });
                        }.apply(null, e));
                    })
                    .catch(n.oe);
            },
            6001: function (e, t, n) {
                var i, o;
                (i = [n(1200), n(2283), n(8225), n(5105), n(4642)]),
                    void 0 ===
                        (o = function (e, t, n, i, o) {
                            var r = document.querySelector("[data-module-article-sidebar-utility]");
                            if (r && !n.large_down) {
                                var a = { duration: 200 },
                                    s = o(r) - 118;
                                window.addEventListener("scroll", function (e) {
                                    i.scroll_top() >= s ? r.classList.add("state--fixed") : r.classList.remove("state--fixed");
                                }),
                                    t
                                        .on("footer:top:scrolldown", function () {
                                            e(r, "fadeOut", a);
                                        })
                                        .on("footer:top:scrollup", function () {
                                            e(r, "fadeIn", a);
                                        });
                            }
                        }.apply(t, i)) || (e.exports = o);
            },
            669: function (e, t, n) {
                var i, o;
                (i = [n(1200), n(2283), n(5105), n(5745), n(4642)]),
                    void 0 ===
                        (o = function (e, t, n, i, o) {
                            var r,
                                a,
                                s,
                                c = document.querySelector("[data-module-social-icons]");
                            c &&
                                ((a = { duration: 200 }),
                                (s = o((r = c)) - 118),
                                window.addEventListener("scroll", function (e) {
                                    n.scroll_top() >= s ? r.classList.add("state--fixed") : r.classList.remove("state--fixed");
                                }),
                                t
                                    .on("footer:top:scrolldown", function () {
                                        e(r, "fadeOut", a);
                                    })
                                    .on("footer:top:scrollup", function () {
                                        e(r, "fadeIn", a);
                                    }),
                                (function () {
                                    var e = c.querySelector("[data-local-link]");
                                    e &&
                                        e.addEventListener("click", function (t) {
                                            t.preventDefault(),
                                                navigator.clipboard.writeText(e.href).then(function () {
                                                    console.log("Copied!");
                                                });
                                        });
                                })());
                        }.apply(t, i)) || (e.exports = o);
            },
            7377: function (e, t, n) {
                var i, o;
                (i = [n(9755), n(1200), n(9117), n(2283), n(1306)]),
                    void 0 ===
                        (o = function (e, t, n, i, o) {
                            var r = document.querySelector("[data-module-blog-pagination]");
                            if (r) {
                                var a,
                                    s = new n(),
                                    c = o(r),
                                    l = { duration: 200 };
                                !(function () {
                                    var t = e("#blog-pagination-articles");
                                    function n(e) {
                                        t.append(e)
                                            .promise()
                                            .done(function () {
                                                s.trigger("articles:load"), i.trigger("blogpagination:load");
                                            });
                                    }
                                    function o() {
                                        c.pagination_page_urls.length ? s.trigger("articles:reset") : s.trigger("articles:end");
                                    }
                                    s.on("button:click", function () {
                                        e.get(c.pagination_page_urls[0], function (e) {
                                            c.pagination_page_urls.shift();
                                        })
                                            .then(n)
                                            .then(o);
                                    });
                                })(),
                                    (a = r.querySelector("[data-local-spinner]")),
                                    s
                                        .on("button:click", function () {
                                            t(a, "fadeIn", l);
                                        })
                                        .on("articles:load", function () {
                                            t(a, "fadeOut", l);
                                        }),
                                    (function () {
                                        var e = r.querySelector("[data-local-button]");
                                        function n() {
                                            t(e, "fadeOut", l);
                                        }
                                        e.addEventListener("click", function (e) {
                                            e.preventDefault(), n(), s.trigger("button:click");
                                        }),
                                            s
                                                .on("articles:reset", function () {
                                                    t(e, "fadeIn", l);
                                                })
                                                .on("articles:end", n);
                                    })();
                            }
                        }.apply(t, i)) || (e.exports = o);
            },
            8841: function (e, t, n) {
                var i, o;
                (i = [n(9755)]),
                    void 0 ===
                        (o = function (e) {
                            function t(t) {
                                (this.element = t), (this.$element = e(t)), (this.query_input = t.querySelector("[name=q]")), this.events();
                            }
                            (t.prototype = {
                                events: function () {
                                    this.element.addEventListener("submit", this.submit.bind(this));
                                },
                                submit: function (e) {
                                    e.preventDefault();
                                    var t = "/search?" + this.$element.serialize();
                                    window.location.href = t;
                                },
                                constructor: t,
                            }),
                                document.querySelectorAll("[data-module-blog-search]").forEach(function (e) {
                                    new t(e);
                                });
                        }.apply(t, i)) || (e.exports = o);
            },
            6974: function (e, t, n) {
                var i, o;
                (i = [n(9755)]),
                    void 0 ===
                        (o = function (e) {
                            if (!window.whr) return !1;
                            whr(document).ready(function () {
                                whr_embed(4971, { detail: "titles", base: "jobs", zoom: "city", grouping: "none" });
                            }),
                                e(document).on("click", "#whr_embed_hook a", function (e) {
                                    e.preventDefault(), window.open(this.href, "_blank");
                                });
                        }.apply(t, i)) || (e.exports = o);
            },
            3309: function (e, t, n) {
                var i, o;
                (i = [n(8356)]),
                    void 0 ===
                        (o = function (e) {
                            var t = document.querySelector(".js-careers-team-slider");
                            if (!t) return !1;
                            new e(t, { wrapAround: !0, adaptiveHeight: !1, prevNextButtons: !0, pageDots: !0, groupCells: "100%" }), t.classList.add("state--visible");
                        }.apply(t, i)) || (e.exports = o);
            },
            338: function (e, t, n) {
                var i, o;
                (i = [n(9755), n(8356), n(1200), n(9117), n(2283), n(1306), n(4955)]),
                    void 0 ===
                        (o = function (e, t, n, i, o, r) {
                            function a() {
                                var t = document.querySelector("[data-module-cart-drawer-gift]");
                                if (!t) return !1;
                                var a,
                                    s,
                                    c,
                                    l,
                                    u,
                                    d,
                                    f = new i(),
                                    h = { variant_ids: [] };
                                function p(t, n) {
                                    var i = r(t),
                                        a = {
                                            default: function () {
                                                t.classList.remove("state--active"), t.classList.remove("state--loading");
                                            },
                                            active: function () {
                                                t.classList.add("state--active"), t.classList.remove("state--loading");
                                            },
                                            get is_active() {
                                                return t.classList.contains("state--active");
                                            },
                                            loading: function () {
                                                t.classList.add("state--loading"), t.classList.remove("state--active");
                                            },
                                        };
                                    o.on("cart:change", function (e) {
                                        if (e) {
                                            var t = [];
                                            e.items.forEach(function (e) {
                                                t.push(e.id);
                                            }),
                                                t.includes(i.id) && !a.is_active ? a.active() : a.default();
                                        }
                                    }),
                                        t.addEventListener("click", function (t) {
                                            var r;
                                            t.preventDefault(),
                                                a.is_active ||
                                                    (a.loading(),
                                                    (r = "updates[" + i.id + "]=" + i.quantity),
                                                    h.variant_ids.forEach(function (e) {
                                                        i.id != e && (r += "&updates[" + e + "]=0");
                                                    }),
                                                    e.ajax({
                                                        type: "POST",
                                                        url: "/cart/update.js",
                                                        dataType: "json",
                                                        data: r,
                                                        success: function (e) {
                                                            f.trigger("addtocart:success", [n]), o.trigger("cartproductgift:addtocart", [e]), a.active();
                                                        },
                                                        error: function () {
                                                            a.default();
                                                        },
                                                    }));
                                        }),
                                        f.on("addtocart:success", function (e) {
                                            null != n && a.default(), n == e && o.trigger("cart:change");
                                        });
                                }
                                (a = { button: t.querySelector("[data-local-button]"), content: t.querySelector("[data-local-content]") }),
                                    (s = { visible: !0 }),
                                    a.button.addEventListener("click", function (e) {
                                        e.preventDefault();
                                        var t = null;
                                        s.visible ? ((t = "slideUp"), (s.visible = !1)) : ((t = "slideDown"), (s.visible = !0)), n(a.content, t, { duration: 200 });
                                    }),
                                    (u = t.querySelector("[data-local-slider]")),
                                    (d = !1),
                                    u.addEventListener("mousedown", function (e) {
                                        (d = !0), u.classList.add("state--active"), (c = e.pageX - u.offsetLeft), (l = u.scrollLeft);
                                    }),
                                    u.addEventListener("mouseleave", function () {
                                        (d = !1), u.classList.remove("state--active");
                                    }),
                                    u.addEventListener("mouseup", function () {
                                        (d = !1), u.classList.remove("state--active");
                                    }),
                                    u.addEventListener("mousemove", function (e) {
                                        if (d) {
                                            e.preventDefault();
                                            var t = 3 * (e.pageX - u.offsetLeft - c);
                                            u.scrollLeft = l - t;
                                        }
                                    }),
                                    (function () {
                                        var e = t.querySelectorAll("[data-local-add-to-cart]");
                                        e.forEach(function (e) {
                                            var t = r(e);
                                            h.variant_ids.push(t.id);
                                        }),
                                            e.forEach(p);
                                    })();
                            }
                            o.on("cartdrawer:update", a), a();
                        }.apply(t, i)) || (e.exports = o);
            },
            5738: function (e, t, n) {
                var i, o;
                (i = [n(2283)]),
                    void 0 ===
                        (o = function (e) {
                            function t() {
                                var e = document.querySelector("[data-module-cart-drawer-header]");
                                e &&
                                    (function (e) {
                                        e.querySelectorAll("[data-local-close-button]").forEach(n);
                                    })(e);
                            }
                            function n(t) {
                                t.addEventListener("click", function (t) {
                                    t.preventDefault(), e.trigger("cartdrawerheader:closebutton:click");
                                });
                            }
                            e.on("cartdrawer:update", t), t();
                        }.apply(t, i)) || (e.exports = o);
            },
            8381: function (e, t, n) {
                var i, o;
                (i = [n(9755), n(2283), n(9117), n(1306)]),
                    void 0 ===
                        (o = function (e, t, n, i) {
                            function o() {
                                document.querySelectorAll("[data-module-cart-drawer-item-quantity]").forEach(function (o) {
                                    !(function (o) {
                                        var r,
                                            a,
                                            s = new n(),
                                            c = i(o);
                                        (r = o.querySelector("[data-local-input]")),
                                            (a = parseInt(r.getAttribute("min"))),
                                            s.on("change", function (n) {
                                                var i,
                                                    o,
                                                    l = parseInt(r.value) + n;
                                                l < a && (l = a),
                                                    l == a ? s.trigger("input:minimum") : s.trigger("input:between"),
                                                    (r.value = l),
                                                    ((i = c.id), (o = l), e.ajax({ type: "POST", url: "/cart/update.js", dataType: "json", data: "updates[" + i + "]=" + o })).done(function (e) {
                                                        t.trigger("cart:change", [e]);
                                                    });
                                            }),
                                            (function () {
                                                var e = o.querySelector("[data-local-decrement]");
                                                e.addEventListener("click", function (e) {
                                                    e.preventDefault(), s.trigger("change", [-1]);
                                                }),
                                                    s
                                                        .on("input:minimum", function () {
                                                            e.classList.add("state--disabled");
                                                        })
                                                        .on("input:between", function () {
                                                            e.classList.remove("state--disabled");
                                                        });
                                            })(),
                                            o.querySelector("[data-local-increment]").addEventListener("click", function (e) {
                                                e.preventDefault(), s.trigger("change", [1]);
                                            });
                                    })(o);
                                });
                            }
                            t.on("cartdraweritems:update", o).on("cartdrawer:update", o), o();
                        }.apply(t, i)) || (e.exports = o);
            },
            7188: function (e, t, n) {
                var i, o;
                (i = [n(9755), n(2283), n(1306)]),
                    void 0 ===
                        (o = function (e, t, n) {
                            function i() {
                                document.querySelectorAll("[data-module-cart-drawer-item-remove]").forEach(function (i) {
                                    var o, r;
                                    (o = i.querySelector("[data-local-link]")),
                                        (r = n(o)),
                                        o.addEventListener("click", function (n) {
                                            var i;
                                            n.preventDefault(),
                                                ((i = r.id), e.ajax({ type: "POST", url: "/cart/update.js", dataType: "json", data: "updates[" + i + "]=0" })).done(function (e) {
                                                    t.trigger("cart:change", [e]), t.trigger("cart:remove", [r.id]);
                                                });
                                        });
                                });
                            }
                            t.on("cartdraweritems:update", i).on("cartdrawer:update", i), i();
                        }.apply(t, i)) || (e.exports = o);
            },
            7920: function (e, t, n) {
                var i, o;
                (i = [n(9755), n(2283)]),
                    void 0 ===
                        (o = function (e, t) {
                            function n() {
                                var n = document.querySelector("[data-module-cart-drawer-items]");
                                n &&
                                    (function (n) {
                                        var i = n;
                                        t.on("cart:change", function (n) {
                                            e.ajax({
                                                url: "/cart?view=pjax-drawer-items",
                                                type: "GET",
                                                success: function (e) {
                                                    n && 0 === n.items.length ? window.location.reload() : ((i.innerHTML = e), $('#cart_vheto_status').val($('#pjax_cart_vheto_status').val()), t.trigger("cartdraweritems:update"));
                                                },
                                            });
                                        });
                                    })(n);
                            }
                            t.on("cartdrawer:update", n), n();
                        }.apply(t, i)) || (e.exports = o);
            },
            6611: function (e, t, n) {
                var i, o;
                (i = [n(8356), n(2283), n(9939), n(1306)]),
                    void 0 ===
                        (o = function (e, t, n, i) {
                            function o() {
                                var n = document.querySelector("[data-module-cart-drawer-recommendations]");
                                n &&
                                    ((function (n) {
                                        var i = n.querySelector("[data-local-slider]"),
                                            o = new e(i, { wrapAround: !1, pageDots: !0, prevNextButtons: !1, lazyLoad: 2, dragThreshold: 10, setGallerySize: !1 });
                                        t.on("cartdrawer:show", function () {
                                            setTimeout(function () {
                                                o.resize();
                                            }, 1e3);
                                        });
                                    })(n),
                                    (function (e) {
                                        e.querySelectorAll("[data-local-button]").forEach(r);
                                    })(n));
                            }
                            function r(e) {
                                var n = i(e),
                                    o = function () {
                                        e.classList.remove("state--active"), e.classList.remove("state--loading");
                                    };
                                t.on("cart:remove", function (e) {
                                    e == n.id && o();
                                }),
                                    e.addEventListener("click", function (i) {
                                        var r, a;
                                        i.preventDefault(),
                                            e.classList.add("state--loading"),
                                            e.classList.remove("state--active"),
                                            ((r = n.id), (a = n.quantity), $.ajax({ type: "POST", url: "/cart/add.js", data: "id=" + r + "&quantity=" + a, dataType: "json" }))
                                                .done(function () {
                                                    t.trigger("cart:change"), e.classList.add("state--active"), e.classList.remove("state--loading");
                                                })
                                                .fail(function () {
                                                    o();
                                                });
                                    });
                            }
                            t.on("cartdrawer:update", o), o();
                        }.apply(t, i)) || (e.exports = o);
            },
            311: function (e, t, n) {
                var i, o;
                (i = [n(9755), n(2283), n(5745)]),
                    void 0 ===
                        (o = function (e, t, n) {
                            function i(n) {
                                var i = document.querySelector("[data-module-cart-drawer-savings]");
                                i &&
                                    (function (n) {
                                        var i = n.querySelector("[data-local-price]");
                                        function o() {
                                            e.ajax({ url: "/cart?view=json" }).done(function (e) {
                                                var t = JSON.parse(e);
                                                t.total_savings > 0 ? (n.style.display = "block") : (n.style.display = "none"), (i.innerHTML = t.total_savings_formatted);
                                            });
                                        }
                                        t.on("cartproductgift:addtocart", o).on("cart:change", o);
                                    })(i);
                            }
                            t.on("cartdrawer:update", i), i();
                        }.apply(t, i)) || (e.exports = o);
            },
            2354: function (e, t, n) {
                var i, o;
                (i = [n(2283), n(8506), n(1306), n(4955)]),
                    void 0 ===
                        (o = function (e, t, n) {
                            function i() {
                                var e = document.querySelector("[data-module-cart-drawer-shipping]");
                                e &&
                                    t.done(function (t) {
                                        !(function (e, t) {
                                            var i = e.querySelectorAll("[data-local-description]"),
                                                o = null,
                                                r = null;
                                            i.forEach(function (e) {
                                                var i = e.getAttribute("data-local-description"),
                                                    a = n(e);
                                                a.countries.includes(t) && (r = i), a.default && (o = i);
                                            });
                                            var a = '[data-local-description="' + (r || o) + '"]',
                                                s = e.querySelector(a);
                                            s ? (s.style.display = "block") : (e.style.display = "none");
                                        })(e, t.country_code);
                                    });
                            }
                            e.on("cartdrawer:update", i), i();
                        }.apply(t, i)) || (e.exports = o);
            },
            1423: function (e, t, n) {
                var i, o;
                (i = [n(2283), n(5614)]),
                    void 0 ===
                        (o = function (e, t) {
                            function n() {
                                var n = document.querySelector("[data-module-cart-drawer-subtotal]");
                                e.on("cart:change", function (e) {
                                    e && n && (n.innerHTML = t(e.total_price));
                                });
                            }
                            e.on("cartdrawer:update", n), n();
                        }.apply(t, i)) || (e.exports = o);
            },
            3951: function (e, t, n) {
                var i, o;
                (i = [n(2283), n(5745), n(9117), n(1200), n(2044)]),
                    void 0 ===
                        (o = function (e, t, n, i, o) {
                            var r = document.querySelector("[data-module-cart-drawer]");
                            if (r) {
                                var a = new n();
                                !(function () {
                                    var n = r,
                                        o = function (e) {
                                            e.target == n && c();
                                        };
                                    function s() {
                                        document.documentElement.classList.add("state--disable-scroll"), i(n, "fadeIn", { duration: 200 });
                                    }
                                    function c() {
                                        a.trigger("container:hide"), document.documentElement.classList.remove("state--disable-scroll"), i(n, "fadeOut", { duration: 200 });
                                    }
                                    "cart" == t.Template.name && s(), e.on("cartlink:click", s).on("cartdrawerheader:closebutton:click", c).on("cartdrawer:update", s), a.on("closebutton:click", c), n.addEventListener("click", o);
                                })(),
                                    (function () {
                                        var n = r.querySelector("[data-local-drawer]");
                                        function o() {
                                            e.trigger("cartdrawer:show"), i(n, { translateZ: 0, translateX: "-100%" }, { duration: 200 });
                                        }
                                        function s() {
                                            e.trigger("cartdrawer:hide"), i(n, { translateZ: 0, translateX: "100%" }, { duration: 200 });
                                        }
                                        "cart" == t.Template.name && o(),
                                            e
                                                .on("addtocart", function () {
                                                    $.ajax({
                                                        url: "/cart?view=pjax-drawer",
                                                        type: "GET",
                                                        success: function (t) {
                                                            (n.innerHTML = t), e.trigger("cartdrawer:update");
                                                        },
                                                    }).done(o);
                                                })
                                                .on("cartlink:click", o)
                                                .on("cartdrawerheader:closebutton:click", s),
                                            a.on("container:hide", s).on("closebutton:click", s);
                                    })();
                            }
                        }.apply(t, i)) || (e.exports = o);
            },
            4417: function (e, t, n) {
                var i, o;
                (i = [n(9755), n(5745), n(2283)]),
                    void 0 ===
                        (o = function (e, t, n) {
                            if ("cart" == t.Template.name) {
                                var i = t.Cart.custom_attributes.gift_auto;
                                i.enabled &&
                                    window.addEventListener("DOMContentLoaded", function () {
                                        var o,
                                            r = (function (e, t) {
                                                var n = !1;
                                                return (
                                                    e.items.forEach(function (e) {
                                                        e.variant_id != t || (n = !0);
                                                    }),
                                                    n
                                                );
                                            })(t.Cart, i.id);
                                        r &&
                                            t.Cart.total_price <= i.cart_amount &&
                                            ((o = i.id), e.ajax({ type: "POST", url: "/cart/update.js", dataType: "json", data: "updates[" + o + "]=0" })).done(function () {
                                                n.trigger("cart:change"),
                                                    (function (e, t) {
                                                        var n = !1;
                                                        return 1 == e.items.length && e.items[0].variant_id == t && (n = !0), n;
                                                    })(Cart, i.id) && (window.location = "/cart");
                                            }),
                                            !r &&
                                                t.Cart.total_price > i.cart_amount &&
                                                (function (t, n) {
                                                    return e.ajax({ type: "POST", url: "/cart/add.js", dataType: "json", data: "id=" + t + "&quantity=" + n });
                                                })(i.id, i.quantity).done(function () {
                                                    n.trigger("cart:change");
                                                });
                                    });
                            }
                        }.apply(t, i)) || (e.exports = o);
            },
            8034: function (e, t, n) {
                var i, o;
                (i = [n(2283)]),
                    void 0 ===
                        (o = function (e) {
                            e.on("header:sticky:ready", function () {
                                document.querySelectorAll("[data-module-cart-link]").forEach(function (t) {
                                    !(function (t) {
                                        var n = function (t) {
                                            t.preventDefault(), e.trigger("cartlink:click");
                                        };
                                        t.addEventListener("click", n);
                                    })(t),
                                        (function (t) {
                                            var n = t.querySelector("[data-local-count]");
                                            function i() {
                                                n.innerHTML = parseInt(n.innerText) + 1;
                                            }
                                            e.on("addtocart", i).on("foursixty:addtocart", i).on("cartproductgiftbackorder:addtocart", i).on("cartproductgift:addtocart", i);
                                        })(t);
                                });
                            });
                        }.apply(t, i)) || (e.exports = o);
            },
            6095: function (e, t, n) {
                var i, o;
                (i = [n(5745), n(9117), n(1200)]),
                    void 0 ===
                        (o = function (e, t, n) {
                            var i = "luxy_cart_reminder",
                                o = { duration: 200 },
                                r = document.querySelector("[data-module-cart-reminder]");
                            if (r && "cart" != e.Template.name && 0 != e.Cart.item_count && !window.sessionStorage.getItem(i) && window.sessionStorage.getItem("luxy_shipping_notification")) {
                                var a,
                                    s = new t();
                                (a = r),
                                    setTimeout(function () {
                                        n(a, "fadeIn", o), window.sessionStorage.setItem(i, "true");
                                    }, 2e3),
                                    s.on("button:click", function () {
                                        n(a, "fadeOut", o);
                                    }),
                                    r.querySelector("[data-local-button]").addEventListener("click", function (e) {
                                        e.preventDefault(), s.trigger("button:click");
                                    });
                            }
                        }.apply(t, i)) || (e.exports = o);
            },
            2058: function (e, t, n) {
                var i, o;
                (i = [n(2283), n(5745)]),
                    void 0 ===
                        (o = function (e, t) {
                            function n() {
                                document.querySelectorAll("[data-module-chat]").forEach(i),
                                    "index" != t.Template.name &&
                                        e
                                            .on("cartdrawer:show", function () {
                                                var e = document.getElementById("lighthouse");
                                                e && (e.style.display = "none");
                                            })
                                            .on("cartdrawer:hide", function () {
                                                var e = document.getElementById("lighthouse");
                                                e &&
                                                    setTimeout(function () {
                                                        e.style.display = "block";
                                                    }, 500);
                                            });
                            }
                            function i(e) {
                                e.addEventListener("click", function (e) {
                                    e.preventDefault(), window.Lighthouse && window.Lighthouse.show();
                                });
                            }
                            n(), e.on("pjax:load", n);
                        }.apply(t, i)) || (e.exports = o);
            },
            6517: function (e, t, n) {
                var i, o;
                (i = [n(9755), n(1200), n(8225)]),
                    void 0 ===
                        (o = function (e, t, n) {
                            var i = e("[data-module-collection-classic-thumbnail]"),
                                o = !0,
                                r = null;
                            if (!n.xlarge) return !1;
                            i.mouseenter(function () {
                                (o = !1), (this_thumbnail = i.filter(this)[0]), (r = e.makeArray(i.not(this))), t(r, { opacity: 0.6 }, { duration: 200 }), t(this_thumbnail, "stop"), t(this_thumbnail, { opacity: 1 }, { duration: 200 });
                            }).mouseleave(function () {
                                (o = !0),
                                    setTimeout(function () {
                                        o && t(e.makeArray(i), { opacity: 1 }, { duration: 200 });
                                    }, 250);
                            });
                        }.apply(t, i)) || (e.exports = o);
            },
            3453: function (e, t, n) {
                var i, o;
                (i = [n(1200), n(9117), n(2283), n(1306)]),
                    void 0 ===
                        (o = function (e, t, n, i) {
                            var o = document.querySelectorAll("[data-module-collection-landing-filter]"),
                                r = {};
                            o.forEach(function (o) {
                                var r = new t();
                                !(function (e, t) {
                                    var n = e.querySelector("[data-local-button]"),
                                        i = {
                                            get active() {
                                                return n.classList.contains("state--active");
                                            },
                                        };
                                    function o() {
                                        i.active ? n.classList.remove("state--active") : n.classList.add("state--active");
                                    }
                                    n.addEventListener("click", function (e) {
                                        e.preventDefault(), o(), t.trigger("button:click");
                                    }),
                                        t.on("link:click", o);
                                })(o, r),
                                    (function (e, t) {
                                        var n = e.querySelector("[data-local-label]");
                                        function i(e, t) {
                                            n.innerHTML = "Filter: " + t;
                                        }
                                        t.on("select:change", i).on("link:click", i);
                                    })(o, r),
                                    (function (t, n) {
                                        var i = t.querySelector("[data-local-dropdown]"),
                                            o = { hidden: !0 };
                                        function r() {
                                            e(i, "slideUp", { duration: 200 }), (o.hidden = !0);
                                        }
                                        n.on("button:click", function () {
                                            i.classList.contains("velocity-animating") || (o.hidden ? (e(i, "slideDown", { duration: 200 }), (o.hidden = !1)) : r());
                                        }).on("link:click", r);
                                    })(o, r),
                                    (function (e, t) {
                                        e.querySelectorAll("[data-local-link]").forEach(function (o) {
                                            !(function (e, t, o) {
                                                var r = i(t),
                                                    a = t.innerHTML;
                                                t.addEventListener("click", function (t) {
                                                    t.preventDefault(), o.trigger("link:click", [r.attribute, a]), n.trigger("collectionlandingfilter:change", [e, r.attribute]);
                                                });
                                            })(e, o, t);
                                        });
                                    })(o, r),
                                    (function (e, t) {
                                        var i = e.querySelector("[data-local-select]");
                                        i.addEventListener("change", function (o) {
                                            var r = i.options[i.selectedIndex],
                                                a = r.value,
                                                s = r.innerHTML;
                                            t.trigger("select:change", [a, s]), n.trigger("collectionlandingfilter:change", [e, a]);
                                        });
                                    })(o, r);
                            }),
                                n.on("collectionlandingfilter:change", function (e, t) {
                                    var i = e.getAttribute("id");
                                    r[i] = t;
                                    var o = [];
                                    for (var a in r) r[a] && o.push(r[a]);
                                    n.trigger("collectionlandingfilter:update", [o]);
                                });
                        }.apply(t, i)) || (e.exports = o);
            },
            4038: function (e, t, n) {
                var i, o;
                (i = [n(9117), n(8356)]),
                    void 0 ===
                        (o = function (e, t) {
                            var n = document.querySelector(".collection-landing-inside");
                            if (n) {
                                var i,
                                    o,
                                    r,
                                    a = new e();
                                (i = n.querySelectorAll(".collection-landing-inside-chunk")).forEach(c),
                                    i.forEach(function (e, t) {
                                        e.addEventListener("click", function (e) {
                                            e.preventDefault(), a.trigger("description:click"), a.trigger("description:click:" + t);
                                        });
                                    }),
                                    (function () {
                                        var e = n.querySelectorAll(".collection-landing-inside-marker");
                                        e.forEach(c), e.forEach(s);
                                    })(),
                                    (o = n.querySelector(".collection-landing-inside-slider")),
                                    (r = new t(o, { wrapAround: !0, adaptiveHeight: !1, prevNextButtons: !1, pageDots: !1 })).on("select", function (e) {
                                        a.trigger("slider:change"), a.trigger("slider:change:" + r.selectedIndex);
                                    }),
                                    a.on("marker:click", function (e) {
                                        r.select(e);
                                    });
                            }
                            function s(e, t) {
                                e.addEventListener("click", function (e) {
                                    e.preventDefault(), a.trigger("marker:click", [t]), a.trigger("marker:click:" + t);
                                });
                            }
                            function c(e, t) {
                                function n() {
                                    e.classList.add("state--active");
                                }
                                function i() {
                                    e.classList.remove("state--active");
                                }
                                a.on("marker:click", i)
                                    .on("marker:click:" + t, n)
                                    .on("description:click", i)
                                    .on("description:click:" + t, n)
                                    .on("slider:change", i)
                                    .on("slider:change:" + t, n);
                            }
                        }.apply(t, i)) || (e.exports = o);
            },
            667: function (e, t, n) {
                var i, o;
                (i = [n(2283), n(1306), n(4955), n(6675)]),
                    void 0 ===
                        (o = function (e, t) {
                            document.querySelectorAll("[data-module-collection-product-thumbnail]").forEach(function (n) {
                                var i = t(n);
                                function o() {
                                    n.classList.remove("state--hidden");
                                }
                                e.on("collectionlandingfilter:update", function (e) {
                                    if (e.length) {
                                        var t = [];
                                        e.forEach(function (e) {
                                            i.attributes.includes(e) && t.push(e);
                                        }),
                                            t.length == e.length ? o() : n.classList.add("state--hidden");
                                    } else o();
                                });
                            });
                        }.apply(t, i)) || (e.exports = o);
            },
            8969: function (e, t, n) {
                var i, o;
                (i = [n(9117), n(1200)]),
                    void 0 ===
                        (o = function (e, t) {
                            var n = document.querySelector("[data-module-collections-hero]");
                            n &&
                                (new e(),
                                (function () {
                                    var e = n.querySelector("[data-local-video-container]");
                                    function t() {
                                        var t = e.parentElement.offsetWidth,
                                            n = e.parentElement.offsetHeight,
                                            i = n / t,
                                            o = 9 / 16;
                                        i > o && ((e.style.width = n / o + "px"), (e.style.height = "100%")), i < o && ((e.style.width = "100%"), (e.style.height = t * o + "px"));
                                    }
                                    e && (t(), window.addEventListener("resize", t));
                                })());
                        }.apply(t, i)) || (e.exports = o);
            },
            7878: function (e, t, n) {
                var i, o;
                (i = [n(5105), n(2283), n(9117)]),
                    void 0 ===
                        (o = function (e, t, n) {
                            var i = document.querySelector("[data-module-collections-menu]");
                            if (!i) return !1;
                            var o,
                                r = new n();
                            (o = i),
                                window.addEventListener("scroll", function (t) {
                                    e.scroll_top() >= 476 ? o.classList.add("state--fixed") : o.classList.remove("state--fixed");
                                }),
                                window.addEventListener("scroll", function () {
                                    e.scroll_top() < 350 && r.trigger("page:top");
                                }),
                                i.querySelectorAll("[data-local-link]").forEach(function (e) {
                                    var n = e.getAttribute("href").replace("#", "");
                                    function i() {
                                        e.classList.add("state--active");
                                    }
                                    function o() {
                                        e.classList.remove("state--active");
                                    }
                                    t.on("collectionsproducts:section:inview", function (e) {
                                        n == e ? i() : o();
                                    }),
                                        r.on("page:top", function () {
                                            "collections" == n ? i() : o();
                                        });
                                });
                        }.apply(t, i)) || (e.exports = o);
            },
            9118: function (e, t, n) {
                var i, o;
                (i = [n(1200), n(9117)]),
                    void 0 ===
                        (o = function (e, t) {
                            var n = document.querySelector("[data-module-collections-mobile-menu]");
                            if (n) {
                                var i,
                                    o = new t();
                                n.querySelector("[data-local-button]").addEventListener("click", function (e) {
                                    e.preventDefault(), o.trigger("button:click");
                                }),
                                    (function () {
                                        var e = n.querySelector("[data-local-button-text]");
                                        function t(t) {
                                            e.innerHTML = t;
                                        }
                                        o.on("select:change", t).on("link:click", t);
                                    })(),
                                    (function () {
                                        var t = n.querySelector("[data-local-dropdown]"),
                                            i = { hidden: !0 };
                                        function r() {
                                            e(t, "slideUp", { duration: 200 }), (i.hidden = !0);
                                        }
                                        o.on("button:click", function () {
                                            t.classList.contains("velocity-animating") || (i.hidden ? (e(t, "slideDown", { duration: 200 }), (i.hidden = !1)) : r());
                                        }).on("link:click", r);
                                    })(),
                                    n.querySelectorAll("[data-local-link]").forEach(function (e) {
                                        e.addEventListener("click", function (t) {
                                            t.preventDefault();
                                            var n = e.getAttribute("href");
                                            o.trigger("link:click", [e.innerText, n]);
                                        });
                                    }),
                                    (i = n.querySelector("[data-local-select]")).addEventListener("change", function (e) {
                                        var t = i.options[i.selectedIndex];
                                        o.trigger("select:change", [t.innerText, t.value]);
                                    }),
                                    (function () {
                                        function t(t, n) {
                                            e(t, "scroll", { offset: n });
                                        }
                                        o.on("select:change", function (e, n) {
                                            t(document.getElementById(n), -document.getElementById("sticky-menu").offsetHeight);
                                        }),
                                            o.on("link:click", function (e, n) {
                                                var i = n.replace("#", "");
                                                t(document.getElementById(i), -295);
                                            });
                                    })();
                            }
                        }.apply(t, i)) || (e.exports = o);
            },
            736: function (e, t, n) {
                var i, o;
                (i = [n(2283), n(8225), n(1200)]),
                    void 0 ===
                        (o = function (e, t, n) {
                            var i,
                                o = document.querySelector("[data-module-collections-products]");
                            if (!o) return !1;
                            function r(t) {
                                var n = t.getBoundingClientRect().top;
                                (n = Math.floor(n)), (n = Math.abs(n)), Math.floor(n) < 130 && e.trigger("collectionsproducts:section:inview", [t.id]);
                            }
                            function a(e) {
                                var t = e.querySelector("img:first-of-type");
                                e.addEventListener("mouseover", function () {
                                    n(t, "stop"), n(t, "fadeIn", { duration: 150 });
                                }),
                                    e.addEventListener("mouseout", function () {
                                        n(t, "stop"), n(t, "fadeOut", { duration: 150 });
                                    });
                            }
                            (i = o.querySelectorAll("[data-local-section]")),
                                window.addEventListener("scroll", function (e) {
                                    i.forEach(r);
                                }),
                                (function () {
                                    var e = o.querySelectorAll("[data-local-product-image]");
                                    t.large && e.forEach(a);
                                })();
                        }.apply(t, i)) || (e.exports = o);
            },
            4343: function (e, t, n) {
                var i, o;
                (i = [n(2283), n(9939), n(9755)]),
                    void 0 ===
                        (o = function (e, t, n) {
                            function i() {
                                document.querySelectorAll("[data-module-currency-switcher]").forEach(o);
                            }
                            function o(i) {
                                i.addEventListener("change", function (o) {
                                    e.trigger("currencyswitcher:change"),
                                        (function () {
                                            var e = i.options[i.selectedIndex],
                                                o = t();
                                            (o.currency = e.value), (o = n.param(o));
                                            var r = window.location.origin + window.location.pathname + "?" + o;
                                            window.location.href = r;
                                        })();
                                });
                            }
                            i(),
                                e.on("pjax:load", function () {
                                    i();
                                });
                        }.apply(t, i)) || (e.exports = o);
            },
            5131: function (e, t, n) {
                var i, o;
                (i = [n(9755)]),
                    void 0 ===
                        (o = function (e) {
                            var t = e(".js-form-container");
                            e(".js-toggle-forms").click(function (e) {
                                e.preventDefault(), t.toggle();
                            }),
                                "#recover" == window.location.hash && t.toggle();
                        }.apply(t, i)) || (e.exports = o);
            },
            3518: function (e, t, n) {
                Promise.resolve()
                    .then(function () {
                        var e = [n(9755), n(8225), n(2283), n(8356)];
                        (function (e, t, n, i) {
                            function o() {
                                document.querySelectorAll("[data-flickity]").forEach(r);
                            }
                            function r(n) {
                                var o = JSON.parse(n.getAttribute("data-flickity") || "{}"),
                                    r = JSON.parse(n.getAttribute("data-flickity-large") || "{}");
                                t.large && e.extend(o, r);
                                var a = new i(n, o);
                                (n.style.opacity = 1),
                                    a.isActive ||
                                        n.querySelectorAll("[data-flickity-lazyload]").forEach(function (e) {
                                            var t = e.getAttribute("data-flickity-lazyload");
                                            e.setAttribute("src", t), e.classList.add("flickity-lazyloaded"), e.removeAttribute("data-flickity-lazyload");
                                        });
                            }
                            n.on("pjax:load", o), o();
                        }.apply(null, e));
                    })
                    .catch(n.oe);
            },
            441: function (e, t, n) {
                var i, o;
                (i = [n(5105), n(2283)]),
                    void 0 ===
                        (o = function (e, t) {
                            var n = document.querySelector("[data-module-footer]");
                            if (n) {
                                var i = !1;
                                window.addEventListener("scroll", function (o) {
                                    var r = n.getBoundingClientRect();
                                    r.top <= e.height() && !i && (t.trigger("footer:top:scrolldown"), (i = !0)), r.top >= e.height() + 1 && i && (t.trigger("footer:top:scrollup"), (i = !1));
                                });
                            }
                        }.apply(t, i)) || (e.exports = o);
            },
            1050: function (e, t, n) {
                var i, o;
                (i = [n(2283)]),
                    void 0 ===
                        (o = function (e) {
                            window.onFoursixtyCartAdded = function (t) {
                                e.trigger("foursixty:addtocart");
                            };
                        }.apply(t, i)) || (e.exports = o);
            },
            8357: function (e, t, n) {
                var i, o;
                (i = [n(1200), n(9117), n(1337), n(8506), n(986), n(1306)]),
                    void 0 ===
                        (o = function (e, t, n, i, o, r) {
                            var a = document.querySelector("[data-module-gdpr-notice]");
                            if (a) {
                                var s = new t();
                                i.done(function (t) {
                                    var i,
                                        o = "luxy_gdpr_notice";
                                    "EU" == t.country_code &&
                                        (n.get(o) ||
                                            (n.set(o, "true", { expires: 7, path: "/" }),
                                            (i = a),
                                            document.documentElement.classList.add("gdpr-notice--showing"),
                                            (i.style.display = "block"),
                                            s.on("button:click", function () {
                                                e(
                                                    i,
                                                    { translateY: "100%" },
                                                    {
                                                        duration: 200,
                                                        complete: function () {
                                                            document.documentElement.classList.remove("gdpr-notice--showing");
                                                        },
                                                    }
                                                );
                                            }),
                                            a.querySelector("[data-local-button]").addEventListener("click", function (e) {
                                                e.preventDefault(), s.trigger("button:click");
                                            })));
                                });
                            }
                        }.apply(t, i)) || (e.exports = o);
            },
            2976: function (e, t, n) {
                var i, o;
                (i = [n(9755), n(2283)]),
                    void 0 ===
                        (o = function (e, t) {
                            if (!window.ga) return !1;
                            function n() {
                                e("[data-ga-event]").each(function () {
                                    var t = e(this),
                                        n = e.extend({ event: "click", target: null }, t.data("ga-event"));
                                    t.on(n.event, n.target, function () {
                                        ga("send", "event", n.category, n.action, n.label, n.value);
                                    });
                                });
                            }
                            n(), t.on("pjax:load", n);
                        }.apply(t, i)) || (e.exports = o);
            },
            9038: function (e, t, n) {
                var i, o;
                (i = [n(2283), n(5745), n(8356)]),
                    void 0 ===
                        (o = function (e, t, n) {
                            if ("unpublished" != t.Theme.role) {
                                var i = function (e, t) {
                                        new IntersectionObserver(
                                            function (e, n) {
                                                e.forEach(function (e) {
                                                    1 != e.intersectionRatio && (t(), n.unobserve(e.target));
                                                });
                                            },
                                            { threshold: 1 }
                                        ).observe(e);
                                    },
                                    o = "gtag_UA_23346554_1.send";
                                e
                                    .on("newsletter:success", function () {
                                        ga(o, "event", "Engagement", "Email Sign Up", t.Template.name);
                                    })
                                    .on("articlenewsletter:success", function () {
                                        ga(o, "event", "Engagement", "Email Sign Up - Article sidebar", t.Template.name);
                                    })
                                    .on("productoptioncolorfilter:change", function (e) {
                                        var t = e.charAt(0).toUpperCase();
                                        ga(o, "event", "Engagement", "Shade Selected", t);
                                    }),
                                    "cart" == t.Template.name && t.Cart.custom_attributes.invalid && ga(o, "event", "Liquid.Cart", "message", "Total price over max allowed"),
                                    "search" == t.Template.name && ga(o, "event", "Site Search", "Search", t.Search.terms),
                                    "index" == t.Template.name &&
                                        setTimeout(function () {
                                            var e;
                                            (e = document.querySelector("[data-module-homepage-stories]")) &&
                                                (n.data(e.querySelector("[data-flickity]")).once("dragMove", function () {
                                                    ga(o, "event", "Engagement", "Homepage Merchandising Circles Section Scroll");
                                                }),
                                                i(e, function () {
                                                    ga(o, "event", "Engagement", "Homepage Merchandising Circles Section View");
                                                })),
                                                (function () {
                                                    var e = document.querySelector("[data-module-homepage-thumbnails]");
                                                    e &&
                                                        (n.data(e.querySelector("[data-flickity]")).once("dragMove", function () {
                                                            ga(o, "event", "Engagement", "Homepage Merchandising Section Scroll");
                                                        }),
                                                        i(e, function () {
                                                            ga(o, "event", "Engagement", "Homepage Merchandising Section View");
                                                        }));
                                                })();
                                        }, 500);
                            }
                        }.apply(t, i)) || (e.exports = o);
            },
            6388: function (e, t, n) {
                var i, o;
                (i = [n(2283)]),
                    void 0 ===
                        (o = function (e) {
                            if (!window.ga) return !1;
                            e.on("pjax:load", function () {
                                ga("send", "pageview", location.pathname);
                            });
                        }.apply(t, i)) || (e.exports = o);
            },
            7913: function (e, t, n) {
                var i, o;
                (i = [n(6699), n(2283), n(1200), n(3727)]),
                    void 0 ===
                        (o = function (e, t, n, i) {
                            var o = document.querySelector("[data-module-header]");
                            if (o) {
                                var r = function () {
                                    return Math.round(window.pageYOffset);
                                };
                                window.addEventListener("DOMContentLoaded", function () {
                                    var a = o.cloneNode(!0);
                                    a.classList.add("state--sticky"), document.querySelector("main").prepend(a), t.trigger("header:sticky:ready");
                                    var s = 1e3,
                                        c = function () {
                                            return a.classList.contains("state--showing");
                                        },
                                        l = r();
                                    function u() {
                                        n(
                                            a,
                                            { opacity: 0 },
                                            {
                                                duration: 200,
                                                display: "none",
                                                complete: function () {
                                                    a.classList.remove("state--showing");
                                                },
                                            }
                                        );
                                    }
                                    window.addEventListener(
                                        "scroll",
                                        e(function () {
                                            var e,
                                                t = c(),
                                                o = r();
                                            (e = o > l ? "down" : "up"),
                                                i(a) ||
                                                    (t && "down" == e && u(),
                                                    t && o < s && l >= s && u(),
                                                    !t &&
                                                        "up" == e &&
                                                        o >= s &&
                                                        n(
                                                            a,
                                                            { opacity: 1 },
                                                            {
                                                                duration: 200,
                                                                display: "flex",
                                                                complete: function () {
                                                                    a.classList.add("state--showing");
                                                                },
                                                            }
                                                        ),
                                                    (l = o));
                                        })
                                    );
                                });
                            }
                        }.apply(t, i)) || (e.exports = o);
            },
            7556: function (e, t, n) {
                var i, o;
                (i = [n(9755), n(6699), n(2283), n(8225), n(5105), n(1200)]),
                    void 0 ===
                        (o = function (e, t, n, i, o, r) {
                            function a() {
                                document.querySelectorAll("[data-src]:not(.state--loaded)").forEach(s);
                            }
                            function s(n) {
                                var a = "data-src-" + i.current;
                                a = n.hasAttribute(a) ? n.getAttribute(a) : n.getAttribute("data-src");
                                var s = o.height * (i.medium_down ? 3 : 2),
                                    c = {
                                        get inview() {
                                            return o.inview(n, s);
                                        },
                                        set loaded(e) {
                                            n.classList.add("state--loaded");
                                        },
                                        get loaded() {
                                            return n.classList.contains("state--loaded");
                                        },
                                    };
                                function l() {
                                    var t, i;
                                    c.loaded ||
                                        (c.inview &&
                                            ((c.loaded = !0),
                                            ((t = e.Deferred()),
                                            (i = new Image()),
                                            (i.onload = function () {
                                                "IMG" == n.nodeName ? (n.src = a) : (n.style.backgroundImage = "url(" + a + ")"), t.resolve();
                                            }),
                                            (i.src = a),
                                            t.promise()).then(u)));
                                }
                                function u() {
                                    r(n, "fadeIn", { duration: 200, display: "block" });
                                }
                                l(), window.addEventListener("scroll", t(l));
                            }
                            a(), n.on("pjax:load", a).on("blogpagination:load", a);
                        }.apply(t, i)) || (e.exports = o);
            },
            375: function (e, t, n) {
                var i, o;
                (i = [n(9755), n(9117), n(1200)]),
                    void 0 ===
                        (o = function (e, t, n) {
                            var i = document.querySelector("[data-module-mobile-menu-nav]");
                            i &&
                                (new t(),
                                i.querySelectorAll("[data-local-nav-item]").forEach(function (e) {
                                    var t = {
                                            get hidden() {
                                                return !e.classList.contains("state--show");
                                            },
                                        },
                                        i = { link: e.querySelector("[data-local-link]"), dropdown: e.querySelector("[data-local-dropdown]"), icon: e.querySelector("svg") };
                                    i.link.addEventListener("click", function (o) {
                                        o.preventDefault(), t.hidden ? (n(i.dropdown, "slideDown", { duration: 200 }), e.classList.add("state--show")) : (n(i.dropdown, "slideUp", { duration: 200 }), e.classList.remove("state--show"));
                                    });
                                }),
                                i.querySelectorAll("[data-local-link-2]").forEach(function (e) {
                                    var t = {
                                        get hidden() {
                                            return !e.classList.contains("state--show");
                                        },
                                    };
                                    e.addEventListener("click", function (i) {
                                        i.preventDefault(),
                                            t.hidden ? (n(e.nextElementSibling, "slideDown", { duration: 200 }), e.classList.add("state--show")) : (n(e.nextElementSibling, "slideUp", { duration: 200 }), e.classList.remove("state--show"));
                                    });
                                }));
                        }.apply(t, i)) || (e.exports = o);
            },
            4539: function (e, t, n) {
                var i, o;
                (i = [n(9755), n(9117), n(1200)]),
                    void 0 ===
                        (o = function (e, t, n) {
                            var i,
                                o = new t();
                            document.querySelectorAll("[data-module-mobile-menu-link]").forEach(function (e) {
                                e.addEventListener("click", function (e) {
                                    e.preventDefault(), o.trigger("link:click");
                                });
                            }),
                                (function () {
                                    var e = document.querySelector("[data-module-mobile-menu]");
                                    function t() {
                                        (document.body.style.overflowY = "auto"), n(e, "fadeOut", { duration: 200 });
                                    }
                                    e &&
                                        (e.addEventListener("click", function (n) {
                                            n.target == e && t();
                                        }),
                                        o
                                            .on("link:click", function () {
                                                (document.body.style.overflowY = "hidden"), n(e, "fadeIn", { duration: 200 });
                                            })
                                            .on("close:click", t));
                                })(),
                                (i = document.querySelector(".js-mobile-menu-close")) &&
                                    i.addEventListener("click", function (e) {
                                        e.preventDefault(), o.trigger("close:click");
                                    });
                        }.apply(t, i)) || (e.exports = o);
            },
            10: function (e, t, n) {
                var i, o;
                (i = [n(9755), n(894)]),
                    void 0 ===
                        (o = function (e) {
                            e(document).on("click", ".js-modal-close", function (t) {
                                t.preventDefault(), e.fancybox.close();
                            });
                        }.apply(t, i)) || (e.exports = o);
            },
            9896: function (e, t, n) {
                var i, o;
                (i = [n(2283), n(6775)]),
                    void 0 ===
                        (o = function (e, t) {
                            function n() {
                                document.querySelectorAll(".js-modal-video").forEach(i);
                            }
                            function i(e) {
                                t(e, { href: e.href, width: 800, height: 450, aspectRatio: !0, scrolling: "no", helpers: { media: !0 }, youtube: { autoplay: 1, rel: 0 } });
                            }
                            n(), e.on("pjax:load", n);
                        }.apply(t, i)) || (e.exports = o);
            },
            343: function (e, t, n) {
                var i, o;
                (i = [n(2283), n(6775)]),
                    void 0 ===
                        (o = function (e, t) {
                            function n() {
                                document.querySelectorAll(".js-modal").forEach(i);
                            }
                            function i(e) {
                                t(e, { href: e.getAttribute("href"), maxWidth: 950, maxHeight: "75%" });
                            }
                            n(), e.on("pjax:load", n);
                        }.apply(t, i)) || (e.exports = o);
            },
            2817: function (e, t, n) {
                Promise.resolve()
                    .then(function () {
                        var e = [n(3497), n(2283), n(5745), n(806)];
                        (function (e, t, n, i) {
                            i("KlaviyoSubscribe", function () {
                                var i = "footer";
                                "blog" == n.Template.name && (i = "footerblog"),
                                    "article" == n.Template.name && (i = "footerblog"),
                                    KlaviyoSubscribe.attachToForms("#newsletter", {
                                        extra_properties: { $source: i },
                                        success: function () {
                                            (e.signed_up = !0), t.trigger("newsletter:success");
                                        },
                                    });
                            });
                        }.apply(null, e));
                    })
                    .catch(n.oe);
            },
            1289: function (e, t, n) {
                var i, o;
                (i = [n(2283), n(8506)]),
                    void 0 ===
                        (o = function (e, t) {
                            function n() {
                                t.done(function (e) {
                                    "CA" == e.country_code &&
                                        document.querySelectorAll("[data-module-paybright]").forEach(function (e) {
                                            e.classList.remove("state--hidden");
                                        });
                                });
                            }
                            n(), e.on("pjax:load", n);
                        }.apply(t, i)) || (e.exports = o);
            },
            769: function (e, t, n) {
                var i, o;
                (i = [n(5745), n(2283)]),
                    void 0 ===
                        (o = function (e, t) {
                            if (!window.pintrk) return !1;
                            t.on("newsletter:success", function () {
                                pintrk("track", "lead", { lead_type: "newsletter" });
                            }),
                                t.on("addtocart:click", function (e, t) {
                                    var n = { value: e.price * t, product_name: e.title, product_id: e.sku, product_price: e.price / 100 };
                                    pintrk("track", "addtocart", n);
                                }),
                                t.on("pjax:load", function (t) {
                                    pintrk("track", "pagevisit", { page_title: e.Product.title });
                                }),
                                "product" == e.Template.name && pintrk("track", "pagevisit", { page_title: e.Product.title }),
                                "collection" == e.Template.name && pintrk("track", "pagevisit", { page_title: e.Collection.title }),
                                "collection" != e.Template.name || e.Collection.current_tags || pintrk("track", "viewcategory", { product_category: e.Collection.title });
                        }.apply(t, i)) || (e.exports = o);
            },
            2427: function (e, t, n) {
                var i, o;
                (i = [n(2283)]),
                    void 0 ===
                        (o = function (e) {
                            function t() {
                                document.querySelectorAll("[data-module-product-accordion]").forEach(n);
                            }
                            function n(t) {
                                var n = t.querySelector("[data-local-header]");
                                n.addEventListener("click", function (e) {
                                    e.preventDefault(),
                                        n.classList.contains("state--showing")
                                            ? (n.classList.remove("state--showing"), Velocity(n.nextElementSibling, "slideUp", i))
                                            : (n.classList.add("state--showing"), Velocity(n.nextElementSibling, "slideDown", i));
                                });
                                var i = {
                                    duration: 200,
                                    complete: function () {
                                        e.trigger("productaccordion:change");
                                    },
                                };
                            }
                            e.on("pjax:load", t), t();
                        }.apply(t, i)) || (e.exports = o);
            },
            6528: function (e, t, n) {
                var i, o;
                (i = [n(5150)]),
                    void 0 ===
                        (o = function (e) {
                            document.querySelectorAll("[data-module-product-gallery-video]").forEach(function (t) {
                                var n = { button: t.querySelector("button"), image: t.querySelector("img"), iframe: t.querySelector("iframe") },
                                    i = new e(n.iframe);
                                n.button.addEventListener("click", function () {
                                    i.getPaused().then(function (e) {
                                        e ? i.play() : i.pause();
                                    });
                                }),
                                    i.on("play", function () {
                                        n.button.classList.add("state--hidden"), n.image.classList.add("state--hidden");
                                    }),
                                    i.on("pause", function () {
                                        n.button.classList.remove("state--hidden"), n.image.classList.remove("state--hidden");
                                    });
                            });
                        }.apply(t, i)) || (e.exports = o);
            },
            2575: function (e, t, n) {
                var i, o;
                (i = [n(9117), n(8356), n(245), n(5745), n(5614), n(1306)]),
                    void 0 ===
                        (o = function (e, t, n, i, o, r) {
                            var a = document.querySelector("[data-module-product-gift-card-options]");
                            if (a) {
                                var s,
                                    c = new e();
                                !(function () {
                                    var e = document.querySelector("[data-product-gift-card-variant-image]"),
                                        t = r(e);
                                    function n(n) {
                                        e.querySelector("img").src = t.image_urls[n.index];
                                    }
                                    t.image_urls.forEach(function (e) {
                                        new Image().src = e;
                                    }),
                                        c.on("link:click", n).on("select:change", n);
                                })(),
                                    (function () {
                                        var e = document.querySelector("[data-product-gift-card-form-input]");
                                        function t(t) {
                                            e.setAttribute("value", t.id);
                                        }
                                        c.on("link:click", t).on("select:change", t);
                                    })(),
                                    (function () {
                                        function e(e) {
                                            var t = window.location.pathname + "?variant=" + e.id;
                                            history.replaceState({}, "", t);
                                        }
                                        c.on("link:click", e).on("select:change", e);
                                    })(),
                                    (function () {
                                        var e = document.querySelector(".product-header .local--price");
                                        function t(t) {
                                            e.innerHTML = t.value;
                                        }
                                        c.on("link:click", t).on("select:change", t);
                                    })(),
                                    (function () {
                                        var e = a.querySelector("[data-local-label]");
                                        function t(t) {
                                            e.innerHTML = "Amount: " + t.value;
                                        }
                                        c.on("link:click", t).on("select:change", t);
                                    })(),
                                    a.querySelector("[data-local-button]").addEventListener("click", function (e) {
                                        e.preventDefault(), c.trigger("button:click");
                                    }),
                                    (function () {
                                        var e = a.querySelector("[data-local-dropdown]"),
                                            t = { hidden: !0 };
                                        function n() {
                                            Velocity(e, "slideUp", { duration: 200 }), (t.hidden = !0);
                                        }
                                        c.on("button:click", function () {
                                            e.classList.contains("velocity-animating") || (t.hidden ? (Velocity(e, "slideDown", { duration: 200 }), (t.hidden = !1)) : n());
                                        }).on("link:click", n);
                                    })(),
                                    a.querySelectorAll("[data-local-link]").forEach(function (e) {
                                        var t = r(e);
                                        e.addEventListener("click", function (e) {
                                            e.preventDefault(), c.trigger("link:click", [t]);
                                        });
                                    }),
                                    (s = a.querySelector("[data-local-select]")).addEventListener("change", function (e) {
                                        var t = { value: (t = s.options[s.selectedIndex].value.split("|"))[0], id: t[1], index: t[2] };
                                        c.trigger("select:change", [t]);
                                    });
                            }
                        }.apply(t, i)) || (e.exports = o);
            },
            3203: function (e, t, n) {
                var i, o;
                (i = [n(9755), n(1200), n(9117), n(2283)]),
                    void 0 ===
                        (o = function (e, t, n, i) {
                            var o = null,
                                r = null;
                            l(), i.on("pjax:load", l);
                            var a,
                                s =
                                    ((a = []),
                                    {
                                        setItem: function (e, t) {
                                            sessionStorage.setItem(e, t), a.push(e);
                                        },
                                        getItem: function (e) {
                                            return sessionStorage.getItem(e);
                                        },
                                        clear: function () {
                                            a.forEach(function (e) {
                                                sessionStorage.removeItem(e);
                                            });
                                        },
                                        is_cached: function (e) {
                                            return a.includes(e);
                                        },
                                    }),
                                c = (function () {
                                    var t = document.getElementById("product-container");
                                    function n(t) {
                                        var n = e.Deferred();
                                        return (
                                            e.ajax({
                                                url: t,
                                                type: "GET",
                                                success: function (e) {
                                                    n.resolve(e);
                                                },
                                                error: function (e) {
                                                    n.reject(e);
                                                },
                                            }),
                                            n.promise()
                                        );
                                    }
                                    function o(e) {
                                        return e.replace(/(<(pre|script|style|textarea)[^]+?<\/\2)|(^|>)\s+|\s+(?=<|$)/g, "$1$3");
                                    }
                                    function r(n) {
                                        e(t)
                                            .html(n)
                                            .promise()
                                            .done(function () {
                                                i.trigger("pjax:load");
                                            });
                                    }
                                    return (
                                        document.querySelectorAll("[data-pjax]").forEach(function (e) {
                                            var t = e.getAttribute("data-key"),
                                                i = e.getAttribute("data-pjax");
                                            s.is_cached(t) ||
                                                n(i)
                                                    .then(o)
                                                    .done(function (e) {
                                                        s.setItem(t, e);
                                                    });
                                        }),
                                        {
                                            get: function (e, t, i) {
                                                var a = s.getItem(i);
                                                a
                                                    ? r(a)
                                                    : n(e)
                                                          .then(o)
                                                          .done(function (e) {
                                                              r(e);
                                                          })
                                                          .fail(function () {
                                                              location.href = t;
                                                          });
                                            },
                                        }
                                    );
                                })();
                            function l() {
                                var e;
                                (o = document.querySelector("[data-module-product-option-color-dropdown]")) &&
                                    ((r = new n()),
                                    (function () {
                                        var e = o.querySelector("[data-local-button]"),
                                            t = {
                                                get active() {
                                                    return e.classList.contains("state--active");
                                                },
                                            };
                                        function n() {
                                            t.active ? e.classList.remove("state--active") : e.classList.add("state--active");
                                        }
                                        e.addEventListener("click", function (e) {
                                            e.preventDefault(), n(), r.trigger("button:click");
                                        }),
                                            r.on("link:click", n);
                                    })(),
                                    (function () {
                                        var e = o.querySelector("[data-local-dropdown]"),
                                            n = { hidden: !0 };
                                        function i() {
                                            t(e, "slideUp", { duration: 200 }), (n.hidden = !0);
                                        }
                                        r.on("button:click", function () {
                                            e.classList.contains("velocity-animating") || (n.hidden ? (t(e, "slideDown", { duration: 200 }), (n.hidden = !1)) : i());
                                        }).on("link:click", i);
                                    })(),
                                    o.querySelectorAll("[data-local-link]").forEach(u),
                                    (e = o.querySelector("[data-local-select]")).addEventListener("change", function (t) {
                                        var n = e.options[e.selectedIndex],
                                            i = n.getAttribute("data-pjax"),
                                            o = n.getAttribute("data-href"),
                                            r = n.getAttribute("data-key");
                                        c.get(i, o, r);
                                    }));
                            }
                            function u(e) {
                                e.addEventListener("click", function (t) {
                                    t.preventDefault(), history.replaceState({}, "", e.href);
                                    var n = e.getAttribute("data-pjax"),
                                        i = e.href,
                                        o = e.getAttribute("data-key");
                                    c.get(n, i, o);
                                });
                            }
                        }.apply(t, i)) || (e.exports = o);
            },
            7127: function (e, t, n) {
                var i, o;
                (i = [n(9755), n(1200), n(9117), n(1337), n(2283), n(9939)]),
                    void 0 ===
                        (o = function (e, t, n, i, o, r) {
                            var a = null,
                                s = null;
                            function c() {
                                var c;
                                (a = document.querySelector("[data-module-product-option-color-filter]")) &&
                                    ((s = new n()),
                                    (function () {
                                        var e = a.querySelector("[data-local-button]"),
                                            t = {
                                                get active() {
                                                    return e.classList.contains("state--active");
                                                },
                                            };
                                        function n() {
                                            t.active ? e.classList.remove("state--active") : e.classList.add("state--active");
                                        }
                                        e.addEventListener("click", function (e) {
                                            e.preventDefault(), n(), s.trigger("button:click");
                                        }),
                                            s.on("link:click", n);
                                    })(),
                                    (function () {
                                        var e = a.querySelector("[data-local-label]");
                                        function t(t) {
                                            e.innerHTML = "Filter: " + t;
                                        }
                                        s.on("select:change", t).on("link:click", t);
                                    })(),
                                    (function () {
                                        var e = a.querySelector("[data-local-dropdown]"),
                                            n = { hidden: !0 };
                                        function i() {
                                            t(e, "slideUp", { duration: 200 }), (n.hidden = !0);
                                        }
                                        s.on("button:click", function () {
                                            e.classList.contains("velocity-animating") || (n.hidden ? (t(e, "slideDown", { duration: 200 }), (n.hidden = !1)) : i());
                                        }).on("link:click", i);
                                    })(),
                                    a.querySelectorAll("[data-local-link]").forEach(l),
                                    (c = a.querySelector("[data-local-select]")).addEventListener("change", function (e) {
                                        var t = c.options[c.selectedIndex],
                                            n = t.innerText,
                                            i = t.value;
                                        s.trigger("select:change", [n, i]), o.trigger("productoptioncolorfilter:change", [i]);
                                    }),
                                    (function () {
                                        function t(t, n) {
                                            var i = r();
                                            i.type = n;
                                            var o = location.origin + location.pathname + "?" + e.param(i);
                                            history.replaceState({}, "", o);
                                        }
                                        s.on("link:click", t).on("select:change", t);
                                    })(),
                                    s.on("select:change", function (e) {
                                        i.set("shade-selected", e);
                                    }));
                            }
                            function l(e) {
                                e.addEventListener("click", function (t) {
                                    t.preventDefault();
                                    var n = e.getAttribute("href").replace("#", ""),
                                        i = e.innerText;
                                    s.trigger("link:click", [i, n]), o.trigger("productoptioncolorfilter:change", [n]);
                                });
                            }
                            c(), o.on("pjax:load", c);
                        }.apply(t, i)) || (e.exports = o);
            },
            4002: function (e, t, n) {
                var i, o;
                (i = [n(2283), n(1306), n(4955)]),
                    void 0 ===
                        (o = function (e, t) {
                            function n() {
                                document.querySelectorAll("[data-module-product-option-color]").forEach(i);
                            }
                            function i(n) {
                                var i = t(n),
                                    o = n.classList.contains("state--disabled");
                                e.on("productoptioncolorfilter:change", function (e) {
                                    o || ("all" == e || i.color_groups.includes(e) ? (n.style.display = "inline-block") : (n.style.display = "none"));
                                });
                            }
                            n(), e.on("pjax:load", n);
                        }.apply(t, i)) || (e.exports = o);
            },
            9933: function (e, t, n) {
                var i, o;
                (i = [n(9755), n(2283)]),
                    void 0 ===
                        (o = function (e, t) {
                            var n = null;
                            a(), t.on("pjax:load", a);
                            var i,
                                o =
                                    ((i = []),
                                    {
                                        setItem: function (e, t) {
                                            sessionStorage.setItem(e, t), i.push(e);
                                        },
                                        getItem: function (e) {
                                            return sessionStorage.getItem(e);
                                        },
                                        clear: function () {
                                            i.forEach(function (e) {
                                                sessionStorage.removeItem(e);
                                            });
                                        },
                                        is_cached: function (e) {
                                            return i.includes(e);
                                        },
                                    }),
                                r = (function () {
                                    var n = document.getElementById("product-container");
                                    function i(t) {
                                        var n = e.Deferred();
                                        return (
                                            e.ajax({
                                                url: t,
                                                type: "GET",
                                                success: function (e) {
                                                    n.resolve(e);
                                                },
                                                error: function (e) {
                                                    n.reject(e);
                                                },
                                            }),
                                            n.promise()
                                        );
                                    }
                                    function r(e) {
                                        return e.replace(/(<(pre|script|style|textarea)[^]+?<\/\2)|(^|>)\s+|\s+(?=<|$)/g, "$1$3");
                                    }
                                    function a(i) {
                                        e(n)
                                            .html(i)
                                            .promise()
                                            .done(function () {
                                                t.trigger("pjax:load");
                                            });
                                    }
                                    return (
                                        document.querySelectorAll("[data-pjax]").forEach(function (e) {
                                            var t = e.getAttribute("data-key"),
                                                n = e.getAttribute("data-pjax");
                                            o.is_cached(t) ||
                                                i(n)
                                                    .then(r)
                                                    .done(function (e) {
                                                        o.setItem(t, e);
                                                    });
                                        }),
                                        {
                                            get: function (e, t, n) {
                                                var s = o.getItem(n);
                                                s
                                                    ? a(s)
                                                    : i(e)
                                                          .then(r)
                                                          .done(function (e) {
                                                              a(e);
                                                          })
                                                          .fail(function () {
                                                              location.href = t;
                                                          });
                                            },
                                        }
                                    );
                                })();
                            function a() {
                                (n = document.querySelector("[data-module-product-option-size]")) && n.querySelectorAll("[data-local-link]").forEach(s);
                            }
                            function s(e) {
                                e.addEventListener("click", function (t) {
                                    t.preventDefault(), history.replaceState({}, "", e.href);
                                    var n = e.getAttribute("data-pjax"),
                                        i = e.href,
                                        o = e.getAttribute("data-key");
                                    r.get(n, i, o);
                                });
                            }
                        }.apply(t, i)) || (e.exports = o);
            },
            5171: function (e, t, n) {
                var i, o;
                (i = [n(9755), n(2283), n(5745), n(1306), n(9939), n(4955)]),
                    void 0 ===
                        (o = function (e, t, n, i, o) {
                            var r,
                                a =
                                    ((r = []),
                                    {
                                        setItem: function (e, t) {
                                            sessionStorage.setItem(e, t), r.push(e);
                                        },
                                        getItem: function (e) {
                                            return sessionStorage.getItem(e);
                                        },
                                        clear: function () {
                                            r.forEach(function (e) {
                                                sessionStorage.removeItem(e);
                                            });
                                        },
                                        is_cached: function (e) {
                                            return r.includes(e);
                                        },
                                    }),
                                s = n.Product.custom_attributes.length;
                            l(), t.on("pjax:load", l).on("productoptioncolorfilter:change", a.clear);
                            var c = document.getElementById("product-container");
                            function l() {
                                document.querySelectorAll("[data-module-product-option]").forEach(u);
                            }
                            function u(e) {
                                var n = i(e),
                                    r = (e.getAttribute("title"), o().type || "all");
                                function c(e) {
                                    var t = !1;
                                    if (("length" == n.type && (t = !0), "color" == n.type && n.color_groups.includes(e) && n.length == s && (t = !0), t)) {
                                        var i = null;
                                        if (("color" == n.type && (i = n.pjax_urls_by_color_group[e]), "length" == n.type && (i = n.pjax_url + "&type=" + e), i)) {
                                            var o = e + "-" + n.id;
                                            a.is_cached(o) ||
                                                d(i)
                                                    .then(f)
                                                    .done(function (e) {
                                                        a.setItem(o, e);
                                                    });
                                        }
                                    }
                                }
                                document.addEventListener("DOMContentLoaded", function () {
                                    c(r);
                                }),
                                    t.on("productoptioncolorfilter:change", c),
                                    e.addEventListener("click", function (t) {
                                        t.preventDefault(), "length" == n.type && (s = n.value);
                                        var i = o().type || "all",
                                            r = e.href + "?type=" + i,
                                            c = null;
                                        "color" == n.type && (c = n.pjax_urls_by_color_group[i]),
                                            "length" == n.type && (c = n.pjax_url + "&type=" + i),
                                            history.replaceState({}, "", r),
                                            (function (t, i) {
                                                var o = i + "-" + n.id,
                                                    r = a.getItem(o);
                                                r
                                                    ? h(r)
                                                    : d(t)
                                                          .then(f)
                                                          .done(function (e) {
                                                              h(e);
                                                          })
                                                          .fail(function () {
                                                              location.href = e.href;
                                                          });
                                            })(c, i);
                                    });
                            }
                            function d(t) {
                                var n = e.Deferred();
                                return (
                                    e.ajax({
                                        url: t,
                                        type: "GET",
                                        success: function (e) {
                                            n.resolve(e);
                                        },
                                        error: function (e) {
                                            n.reject(e);
                                        },
                                    }),
                                    n.promise()
                                );
                            }
                            function f(e) {
                                return e.replace(/(<(pre|script|style|textarea)[^]+?<\/\2)|(^|>)\s+|\s+(?=<|$)/g, "$1$3");
                            }
                            function h(n) {
                                e(c)
                                    .html(n)
                                    .promise()
                                    .done(function () {
                                        t.trigger("pjax:load");
                                    });
                            }
                        }.apply(t, i)) || (e.exports = o);
            },
            2008: function (e, t, n) {
                var i, o;
                (i = [n(2283), n(8506)]),
                    void 0 ===
                        (o = function (e, t) {
                            function n() {
                                t.done(function (e) {
                                    "US" == e.country_code &&
                                        document.querySelectorAll("[data-module-product-payments-shoppay]").forEach(function (e) {
                                            e.classList.remove("state--hidden");
                                        });
                                });
                            }
                            n(), e.on("pjax:load", n);
                        }.apply(t, i)) || (e.exports = o);
            },
            7090: function (e, t, n) {
                var i, o;
                (i = [n(8506), n(2283)]),
                    void 0 ===
                        (o = function (e, t) {
                            function n() {
                                var t = document.querySelectorAll("[data-module-product-payments]");
                                e.done(function (e) {
                                    "US" != e.country_code &&
                                        "CA" != e.country_code &&
                                        t.forEach(function (e) {
                                            e.style.display = "none";
                                        });
                                });
                            }
                            t.on("pjax:load", n), n();
                        }.apply(t, i)) || (e.exports = o);
            },
            6051: function (e, t, n) {
                var i, o;
                (i = [n(8225), n(2283)]),
                    void 0 ===
                        (o = function (e, t) {
                            function n() {
                                !(function () {
                                    var n = document.querySelector("[data-module-product-sidebar]");
                                    if (n && e.xlarge) {
                                        var i = {
                                                header_height: function () {
                                                    return 89;
                                                },
                                                fixed_header_height: function () {
                                                    return 60;
                                                },
                                                viewport_top: function () {
                                                    return Math.round(window.pageYOffset);
                                                },
                                                viewport_height: function () {
                                                    return window.innerHeight;
                                                },
                                                viewport_bottom: function () {
                                                    return this.viewport_top() + this.viewport_height();
                                                },
                                                element_bottom: function (e) {
                                                    return Math.round(e.getBoundingClientRect().bottom) + this.viewport_top();
                                                },
                                                element_top: function (e) {
                                                    return Math.round(e.getBoundingClientRect().top) + this.viewport_top();
                                                },
                                            },
                                            o = null,
                                            r = 0,
                                            a = i.viewport_top();
                                        s(),
                                            t.on("productaccordion:change", s),
                                            window.addEventListener("scroll", function () {
                                                var e,
                                                    t = i.viewport_top();
                                                e = t > a ? "down" : "up";
                                                var s = i.viewport_height() - (n.clientHeight - 50 + i.header_height());
                                                o &&
                                                    ((r += t - a),
                                                    "down" == e && (-r >= s ? (n.style.top = -r + "px") : ((r = Math.abs(s)), (n.style.top = s + "px"))),
                                                    "up" == e && (-r <= 0 ? (n.style.top = -r + "px") : ((r = 0), (n.style.top = 0)))),
                                                    (a = t);
                                            });
                                    }
                                    function s() {
                                        var e = i.element_top(n) >= i.viewport_top(),
                                            t = i.element_bottom(n) <= i.viewport_bottom();
                                        o = !e || !t;
                                    }
                                })();
                            }
                            t.on("pjax:load", n), n();
                        }.apply(t, i)) || (e.exports = o);
            },
            3478: function (e, t, n) {
                Promise.resolve()
                    .then(function () {
                        var e = [n(2283), n(806)];
                        (function (e, t) {
                            function n() {
                                t("KlaviyoSubscribe", i);
                            }
                            function i() {
                                KlaviyoSubscribe.attachToForms("#product-waitlist-form", { hide_form_on_success: !0, custom_success_message: !0, extra_properties: { $source: "waitlist" } });
                            }
                            e.on("pjax:load", n), n();
                        }.apply(null, e));
                    })
                    .catch(n.oe);
            },
            6522: function (e, t, n) {
                var i, o;
                (i = [n(9755), n(737)]),
                    void 0 ===
                        (o = function (e, t) {
                            var n = e(".js-rte");
                            n.length && n.find("table").wrap('<div class="table-wrapper">').end().fitVids();
                        }.apply(t, i)) || (e.exports = o);
            },
            8822: function (e, t, n) {
                var i, o;
                (i = [n(9755), n(6699), n(5105)]),
                    void 0 ===
                        (o = function (e, t, n) {
                            var i = document.querySelector("[data-module-scroll-indicator]");
                            if (!i) return !1;
                            var o = !1,
                                r = !1;
                            n.scroll_top() > 800 && (r = !0),
                                setInterval(function () {
                                    if (!r) {
                                        var e;
                                        (e = o ? "remove" : "add"), i.classList[e]("bounce"), (o = !o);
                                    }
                                }, 1800),
                                window.addEventListener(
                                    "scroll",
                                    t(function () {
                                        n.scroll_top() > 800 && (r = !0);
                                    })
                                );
                        }.apply(t, i)) || (e.exports = o);
            },
            6542: function (e, t, n) {
                var i, o;
                (i = [n(9755), n(1200)]),
                    void 0 ===
                        (o = function (e, t) {
                            e("[data-scroll]").click(function (n) {
                                n.preventDefault();
                                var i = this.getAttribute("href"),
                                    o = e(i),
                                    r = e.extend({ offset: 0, top: !1 }, e(this).data("scroll"));
                                "string" == typeof r.offset && (r.offset = e(r.offset).outerHeight());
                                var a = o[0];
                                r.top && (a = document.body), t(a, "scroll", { offset: -r.offset });
                            });
                        }.apply(t, i)) || (e.exports = o);
            },
            2378: function (e, t, n) {
                var i, o;
                (i = [n(1200), n(2283), n(9117), n(5105), n(6699), n(2044)]),
                    void 0 ===
                        (o = function (e, t, n, i, o, r) {
                            var a = document.querySelector("[data-module-search-form]");
                            if (a) {
                                var s,
                                    c = new n();
                                !(function () {
                                    var n = a,
                                        s = { showing: !1 };
                                    function l() {
                                        e(n, "fadeOut", {
                                            duration: 200,
                                            complete: function () {
                                                c.trigger("search:hide"), (s.showing = !1);
                                            },
                                        });
                                    }
                                    t.on("searchlink:click", function () {
                                        s.showing
                                            ? l()
                                            : e(n, "fadeIn", {
                                                  duration: 200,
                                                  complete: function () {
                                                      c.trigger("search:show"), (s.showing = !0);
                                                  },
                                              });
                                    }),
                                        c.on("button:click", l),
                                        window.addEventListener(
                                            "scroll",
                                            o(function (e) {
                                                s.showing && i.scroll_top() > 600 && l();
                                            })
                                        ),
                                        window.addEventListener(
                                            "resize",
                                            r(function () {
                                                matchMedia("(max-width: 1139px)").matches && l();
                                            })
                                        );
                                })(),
                                    (s = a.querySelector("[data-local-input]")),
                                    c
                                        .on("search:show", function () {
                                            s.focus();
                                        })
                                        .on("search:hide", function () {
                                            s.blur();
                                        }),
                                    a.querySelector("[data-local-button]").addEventListener("click", function (e) {
                                        e.preventDefault(), c.trigger("button:click");
                                    });
                            }
                        }.apply(t, i)) || (e.exports = o);
            },
            8700: function (e, t, n) {
                var i, o;
                (i = [n(2283)]),
                    void 0 ===
                        (o = function (e) {
                            var t = document.querySelector("[data-module-search-link]");
                            t &&
                                t.addEventListener("click", function (t) {
                                    t.preventDefault(), e.trigger("searchlink:click");
                                });
                        }.apply(t, i)) || (e.exports = o);
            },
            7801: function (e, t, n) {
                var i, o;
                (i = [n(9117), n(1200), n(8506), n(8225), n(1306), n(4955)]),
                    void 0 ===
                        (o = function (e, t, n, i, o) {
                            var r = "luxy_shipping_notification",
                                a = document.querySelector("[data-module-shipping-notification]");
                            if (a && !i.large_down && !window.sessionStorage.getItem(r)) {
                                var s = new e();
                                n.done(function (e) {
                                    var n, i, c;
                                    (n = e.country_code),
                                        (i = a.querySelectorAll("[data-local-description]")),
                                        (c = { default: null, matching: null }),
                                        i.forEach(function (e) {
                                            var t = o(e);
                                            t.default && (c.default = e), t.countries && t.countries.includes(n) && (c.matching = e);
                                        }),
                                        ((c.matching || c.default).style.display = "block"),
                                        a.querySelector("[data-local-button]").addEventListener("click", function (e) {
                                            e.preventDefault(), s.trigger("button:click");
                                        }),
                                        (function () {
                                            var e = a;
                                            s.on("button:click", function () {
                                                t(e, "fadeOut", {
                                                    duration: 200,
                                                    complete: function () {
                                                        e.parentElement.style.display = "none";
                                                    },
                                                }),
                                                    window.sessionStorage.setItem(r, "true");
                                            }),
                                                setTimeout(function () {
                                                    (e.parentElement.style.display = "block"), e.classList.add("state--showing");
                                                }, 500);
                                        })();
                                });
                            }
                        }.apply(t, i)) || (e.exports = o);
            },
            2646: function (e, t, n) {
                var i, o;
                (i = [n(2283), n(9939)]),
                    void 0 ===
                        (o = function (e, t) {
                            if (!window.snaptr) return !1;
                            e.on("addtocart:click", function (e, t) {
                                var n = { description: e.title, item_ids: [e.sku], price: e.price / 100, currency: "USD", number_items: t };
                                snaptr("track", "ADD_CART", n);
                            }),
                                "/search" == window.location.pathname && snaptr("track", "SEARCH", { search_string: t().q });
                        }.apply(t, i)) || (e.exports = o);
            },
            8146: function (e, t, n) {
                var i, o;
                (i = [n(9755), n(8225)]),
                    void 0 ===
                        (o = function (e, t) {
                            var n = { form: document.getElementById("support-search"), input: document.getElementById("support-search-input") };
                            return (
                                !!n.form &&
                                !t.medium_down &&
                                (window.addEventListener(
                                    "awesomplete-selectcomplete",
                                    function (e) {
                                        var t = n.input.getAttribute("data-url");
                                        location.href = t;
                                    },
                                    !1
                                ),
                                void e.getJSON("/blogs/support?view=json", function (e) {
                                    var t = [],
                                        i = {};
                                    e.forEach(function (e) {
                                        t.push(e.title), (i[e.title] = e.url);
                                    }),
                                        new Awesomplete(n.input, {
                                            list: t,
                                            replace: function (e) {
                                                var t = i[e];
                                                this.input.setAttribute("data-url", t), (this.input.value = e);
                                            },
                                        });
                                }))
                            );
                        }.apply(t, i)) || (e.exports = o);
            },
            6330: function (e, t, n) {
                var i, o;
                (i = [n(2283)]),
                    void 0 ===
                        (o = function (e) {
                            e.on("pjax:load", function () {
                                new Yotpo.API(yotpo).refreshWidgets();
                            });
                        }.apply(t, i)) || (e.exports = o);
            },
            8225: function (e, t, n) {
                var i, o;
                (i = [n(9755), n(6699), n(2283)]),
                    void 0 ===
                        (o = function (e, t, n) {
                            var i = { small: 0, medium: 480, large: 768, xlarge: 1024 },
                                o = {
                                    get small() {
                                        return matchMedia("(max-width: " + i.medium + "px)").matches;
                                    },
                                    get medium() {
                                        return matchMedia("(min-width: " + (i.medium + 1) + "px)").matches;
                                    },
                                    get medium_down() {
                                        return matchMedia("(max-width: " + i.large + "px)").matches;
                                    },
                                    get large() {
                                        return matchMedia("(min-width: " + (i.large + 1) + "px)").matches;
                                    },
                                    get large_down() {
                                        return matchMedia("(max-width: " + i.xlarge + "px)").matches;
                                    },
                                    get xlarge() {
                                        return matchMedia("(min-width: " + (i.xlarge + 1) + "px)").matches;
                                    },
                                    get current() {
                                        var e = window.innerWidth,
                                            t = null;
                                        for (var n in i) e > i[n] && (t = n);
                                        return t;
                                    },
                                    max: function (e) {
                                        return matchMedia("(max-width: " + e + ")").matches;
                                    },
                                    min: function (e) {
                                        return matchMedia("(min-width: " + e + ")").matches;
                                    },
                                },
                                r = o.current;
                            return (
                                e(window).resize(
                                    t(function () {
                                        var e = o.current;
                                        e != r && (n.trigger("breakpoint", [e]), (r = e));
                                    })
                                ),
                                o
                            );
                        }.apply(t, i)) || (e.exports = o);
            },
            245: function (e, t, n) {
                var i, o;
                (i = [n(9755), n(1337)]),
                    void 0 ===
                        (o = function (e, t) {
                            return {
                                formats: {
                                    USD: { money_format: "${{amount}}", money_with_currency_format: "${{amount}} USD" },
                                    EUR: { money_format: "&euro;{{amount}}", money_with_currency_format: "&euro;{{amount}} EUR" },
                                    GBP: { money_format: "&pound;{{amount}}", money_with_currency_format: "&pound;{{amount}} GBP" },
                                    CAD: { money_format: "${{amount}}", money_with_currency_format: "${{amount}} CAD" },
                                    ALL: { money_format: "Lek {{amount}}", money_with_currency_format: "Lek {{amount}} ALL" },
                                    DZD: { money_format: "DA {{amount}}", money_with_currency_format: "DA {{amount}} DZD" },
                                    AOA: { money_format: "Kz{{amount}}", money_with_currency_format: "Kz{{amount}} AOA" },
                                    ARS: { money_format: "${{amount_with_comma_separator}}", money_with_currency_format: "${{amount_with_comma_separator}} ARS" },
                                    AMD: { money_format: "{{amount}} AMD", money_with_currency_format: "{{amount}} AMD" },
                                    AWG: { money_format: "Afl{{amount}}", money_with_currency_format: "Afl{{amount}} AWG" },
                                    AUD: { money_format: "${{amount}}", money_with_currency_format: "${{amount}} AUD" },
                                    BBD: { money_format: "${{amount}}", money_with_currency_format: "${{amount}} Bds" },
                                    AZN: { money_format: "m.{{amount}}", money_with_currency_format: "m.{{amount}} AZN" },
                                    BDT: { money_format: "Tk {{amount}}", money_with_currency_format: "Tk {{amount}} BDT" },
                                    BSD: { money_format: "BS${{amount}}", money_with_currency_format: "BS${{amount}} BSD" },
                                    BHD: { money_format: "{{amount}}0 BD", money_with_currency_format: "{{amount}}0 BHD" },
                                    BYR: { money_format: "Br {{amount}}", money_with_currency_format: "Br {{amount}} BYR" },
                                    BZD: { money_format: "BZ${{amount}}", money_with_currency_format: "BZ${{amount}} BZD" },
                                    BTN: { money_format: "Nu {{amount}}", money_with_currency_format: "Nu {{amount}} BTN" },
                                    BAM: { money_format: "KM {{amount_with_comma_separator}}", money_with_currency_format: "KM {{amount_with_comma_separator}} BAM" },
                                    BRL: { money_format: "R$ {{amount_with_comma_separator}}", money_with_currency_format: "R$ {{amount_with_comma_separator}} BRL" },
                                    BOB: { money_format: "Bs{{amount_with_comma_separator}}", money_with_currency_format: "Bs{{amount_with_comma_separator}} BOB" },
                                    BWP: { money_format: "P{{amount}}", money_with_currency_format: "P{{amount}} BWP" },
                                    BND: { money_format: "${{amount}}", money_with_currency_format: "${{amount}} BND" },
                                    BGN: { money_format: "{{amount}} Ð»Ð²", money_with_currency_format: "{{amount}} Ð»Ð² BGN" },
                                    MMK: { money_format: "K{{amount}}", money_with_currency_format: "K{{amount}} MMK" },
                                    KHR: { money_format: "KHR{{amount}}", money_with_currency_format: "KHR{{amount}}" },
                                    KYD: { money_format: "${{amount}}", money_with_currency_format: "${{amount}} KYD" },
                                    XAF: { money_format: "FCFA{{amount}}", money_with_currency_format: "FCFA{{amount}} XAF" },
                                    CLP: { money_format: "${{amount_no_decimals}}", money_with_currency_format: "${{amount_no_decimals}} CLP" },
                                    CNY: { money_format: "&#165;{{amount}}", money_with_currency_format: "&#165;{{amount}} CNY" },
                                    COP: { money_format: "${{amount_with_comma_separator}}", money_with_currency_format: "${{amount_with_comma_separator}} COP" },
                                    CRC: { money_format: "&#8353; {{amount_with_comma_separator}}", money_with_currency_format: "&#8353; {{amount_with_comma_separator}} CRC" },
                                    HRK: { money_format: "{{amount_with_comma_separator}} kn", money_with_currency_format: "{{amount_with_comma_separator}} kn HRK" },
                                    CZK: { money_format: "{{amount_with_comma_separator}} K&#269;", money_with_currency_format: "{{amount_with_comma_separator}} K&#269;" },
                                    DKK: { money_format: "{{amount_with_comma_separator}}", money_with_currency_format: "kr.{{amount_with_comma_separator}}" },
                                    DOP: { money_format: "RD$ {{amount}}", money_with_currency_format: "RD$ {{amount}}" },
                                    XCD: { money_format: "${{amount}}", money_with_currency_format: "EC${{amount}}" },
                                    EGP: { money_format: "LE {{amount}}", money_with_currency_format: "LE {{amount}} EGP" },
                                    ETB: { money_format: "Br{{amount}}", money_with_currency_format: "Br{{amount}} ETB" },
                                    XPF: { money_format: "{{amount_no_decimals_with_comma_separator}} XPF", money_with_currency_format: "{{amount_no_decimals_with_comma_separator}} XPF" },
                                    FJD: { money_format: "${{amount}}", money_with_currency_format: "FJ${{amount}}" },
                                    GMD: { money_format: "D {{amount}}", money_with_currency_format: "D {{amount}} GMD" },
                                    GHS: { money_format: "GH&#8373;{{amount}}", money_with_currency_format: "GH&#8373;{{amount}}" },
                                    GTQ: { money_format: "Q{{amount}}", money_with_currency_format: "{{amount}} GTQ" },
                                    GYD: { money_format: "G${{amount}}", money_with_currency_format: "${{amount}} GYD" },
                                    GEL: { money_format: "{{amount}} GEL", money_with_currency_format: "{{amount}} GEL" },
                                    HNL: { money_format: "L {{amount}}", money_with_currency_format: "L {{amount}} HNL" },
                                    HKD: { money_format: "${{amount}}", money_with_currency_format: "HK${{amount}}" },
                                    HUF: { money_format: "{{amount_no_decimals_with_comma_separator}}", money_with_currency_format: "{{amount_no_decimals_with_comma_separator}} Ft" },
                                    ISK: { money_format: "{{amount_no_decimals}} kr", money_with_currency_format: "{{amount_no_decimals}} kr ISK" },
                                    INR: { money_format: "Rs. {{amount}}", money_with_currency_format: "Rs. {{amount}}" },
                                    IDR: { money_format: "{{amount_with_comma_separator}}", money_with_currency_format: "Rp {{amount_with_comma_separator}}" },
                                    ILS: { money_format: "{{amount}} NIS", money_with_currency_format: "{{amount}} NIS" },
                                    JMD: { money_format: "${{amount}}", money_with_currency_format: "${{amount}} JMD" },
                                    JPY: { money_format: "&#165;{{amount_no_decimals}}", money_with_currency_format: "&#165;{{amount_no_decimals}} JPY" },
                                    JEP: { money_format: "&pound;{{amount}}", money_with_currency_format: "&pound;{{amount}} JEP" },
                                    JOD: { money_format: "{{amount}}0 JD", money_with_currency_format: "{{amount}}0 JOD" },
                                    KZT: { money_format: "{{amount}} KZT", money_with_currency_format: "{{amount}} KZT" },
                                    KES: { money_format: "KSh{{amount}}", money_with_currency_format: "KSh{{amount}}" },
                                    KWD: { money_format: "{{amount}}0 KD", money_with_currency_format: "{{amount}}0 KWD" },
                                    KGS: { money_format: "Ð»Ð²{{amount}}", money_with_currency_format: "Ð»Ð²{{amount}}" },
                                    LVL: { money_format: "Ls {{amount}}", money_with_currency_format: "Ls {{amount}} LVL" },
                                    LBP: { money_format: "L&pound;{{amount}}", money_with_currency_format: "L&pound;{{amount}} LBP" },
                                    LTL: { money_format: "{{amount}} Lt", money_with_currency_format: "{{amount}} Lt" },
                                    MGA: { money_format: "Ar {{amount}}", money_with_currency_format: "Ar {{amount}} MGA" },
                                    MKD: { money_format: "Ð´ÐµÐ½ {{amount}}", money_with_currency_format: "Ð´ÐµÐ½ {{amount}} MKD" },
                                    MOP: { money_format: "MOP${{amount}}", money_with_currency_format: "MOP${{amount}}" },
                                    MVR: { money_format: "Rf{{amount}}", money_with_currency_format: "Rf{{amount}} MRf" },
                                    MXN: { money_format: "$ {{amount}}", money_with_currency_format: "$ {{amount}} MXN" },
                                    MYR: { money_format: "RM{{amount}} MYR", money_with_currency_format: "RM{{amount}} MYR" },
                                    MUR: { money_format: "Rs {{amount}}", money_with_currency_format: "Rs {{amount}} MUR" },
                                    MDL: { money_format: "{{amount}} MDL", money_with_currency_format: "{{amount}} MDL" },
                                    MAD: { money_format: "{{amount}} dh", money_with_currency_format: "Dh {{amount}} MAD" },
                                    MNT: { money_format: "{{amount_no_decimals}} &#8366", money_with_currency_format: "{{amount_no_decimals}} MNT" },
                                    MZN: { money_format: "{{amount}} Mt", money_with_currency_format: "Mt {{amount}} MZN" },
                                    NAD: { money_format: "N${{amount}}", money_with_currency_format: "N${{amount}} NAD" },
                                    NPR: { money_format: "Rs{{amount}}", money_with_currency_format: "Rs{{amount}} NPR" },
                                    ANG: { money_format: "&fnof;{{amount}}", money_with_currency_format: "{{amount}} NA&fnof;" },
                                    NZD: { money_format: "${{amount}}", money_with_currency_format: "${{amount}} NZD" },
                                    NIO: { money_format: "C${{amount}}", money_with_currency_format: "C${{amount}} NIO" },
                                    NGN: { money_format: "&#8358;{{amount}}", money_with_currency_format: "&#8358;{{amount}} NGN" },
                                    NOK: { money_format: "kr {{amount_with_comma_separator}}", money_with_currency_format: "kr {{amount_with_comma_separator}} NOK" },
                                    OMR: { money_format: "{{amount_with_comma_separator}} OMR", money_with_currency_format: "{{amount_with_comma_separator}} OMR" },
                                    PKR: { money_format: "Rs.{{amount}}", money_with_currency_format: "Rs.{{amount}} PKR" },
                                    PGK: { money_format: "K {{amount}}", money_with_currency_format: "K {{amount}} PGK" },
                                    PYG: { money_format: "Gs. {{amount_no_decimals_with_comma_separator}}", money_with_currency_format: "Gs. {{amount_no_decimals_with_comma_separator}} PYG" },
                                    PEN: { money_format: "S/. {{amount}}", money_with_currency_format: "S/. {{amount}} PEN" },
                                    PHP: { money_format: "&#8369;{{amount}}", money_with_currency_format: "&#8369;{{amount}} PHP" },
                                    PLN: { money_format: "{{amount_with_comma_separator}} zl", money_with_currency_format: "{{amount_with_comma_separator}} zl PLN" },
                                    QAR: { money_format: "QAR {{amount_with_comma_separator}}", money_with_currency_format: "QAR {{amount_with_comma_separator}}" },
                                    RON: { money_format: "{{amount_with_comma_separator}} lei", money_with_currency_format: "{{amount_with_comma_separator}} lei RON" },
                                    RUB: { money_format: "&#1088;&#1091;&#1073;{{amount_with_comma_separator}}", money_with_currency_format: "&#1088;&#1091;&#1073;{{amount_with_comma_separator}} RUB" },
                                    RWF: { money_format: "{{amount_no_decimals}} RF", money_with_currency_format: "{{amount_no_decimals}} RWF" },
                                    WST: { money_format: "WS$ {{amount}}", money_with_currency_format: "WS$ {{amount}} WST" },
                                    SAR: { money_format: "{{amount}} SR", money_with_currency_format: "{{amount}} SAR" },
                                    STD: { money_format: "Db {{amount}}", money_with_currency_format: "Db {{amount}} STD" },
                                    RSD: { money_format: "{{amount}} RSD", money_with_currency_format: "{{amount}} RSD" },
                                    SCR: { money_format: "Rs {{amount}}", money_with_currency_format: "Rs {{amount}} SCR" },
                                    SGD: { money_format: "${{amount}}", money_with_currency_format: "${{amount}} SGD" },
                                    SYP: { money_format: "S&pound;{{amount}}", money_with_currency_format: "S&pound;{{amount}} SYP" },
                                    ZAR: { money_format: "R {{amount}}", money_with_currency_format: "R {{amount}} ZAR" },
                                    KRW: { money_format: "&#8361;{{amount_no_decimals}}", money_with_currency_format: "&#8361;{{amount_no_decimals}} KRW" },
                                    LKR: { money_format: "Rs {{amount}}", money_with_currency_format: "Rs {{amount}} LKR" },
                                    SEK: { money_format: "{{amount_no_decimals}} kr", money_with_currency_format: "{{amount_no_decimals}} kr SEK" },
                                    CHF: { money_format: "SFr. {{amount}}", money_with_currency_format: "SFr. {{amount}} CHF" },
                                    TWD: { money_format: "${{amount}}", money_with_currency_format: "${{amount}} TWD" },
                                    THB: { money_format: "{{amount}} &#xe3f;", money_with_currency_format: "{{amount}} &#xe3f; THB" },
                                    TZS: { money_format: "{{amount}} TZS", money_with_currency_format: "{{amount}} TZS" },
                                    TTD: { money_format: "${{amount}}", money_with_currency_format: "${{amount}} TTD" },
                                    TND: { money_format: "{{amount}}", money_with_currency_format: "{{amount}} DT" },
                                    TRY: { money_format: "{{amount}}TL", money_with_currency_format: "{{amount}}TL" },
                                    UGX: { money_format: "Ush {{amount_no_decimals}}", money_with_currency_format: "Ush {{amount_no_decimals}} UGX" },
                                    UAH: { money_format: "â‚´{{amount}}", money_with_currency_format: "â‚´{{amount}} UAH" },
                                    AED: { money_format: "Dhs. {{amount}}", money_with_currency_format: "Dhs. {{amount}} AED" },
                                    UYU: { money_format: "${{amount_with_comma_separator}}", money_with_currency_format: "${{amount_with_comma_separator}} UYU" },
                                    VUV: { money_format: "${{amount}}", money_with_currency_format: "${{amount}}VT" },
                                    VEF: { money_format: "Bs. {{amount_with_comma_separator}}", money_with_currency_format: "Bs. {{amount_with_comma_separator}} VEF" },
                                    VND: { money_format: "{{amount_no_decimals_with_comma_separator}}&#8363;", money_with_currency_format: "{{amount_no_decimals_with_comma_separator}} VND" },
                                    XBT: { money_format: "{{amount_no_decimals}} BTC", money_with_currency_format: "{{amount_no_decimals}} BTC" },
                                    XOF: { money_format: "CFA{{amount}}", money_with_currency_format: "CFA{{amount}} XOF" },
                                    ZMW: { money_format: "K{{amount_no_decimals_with_comma_separator}}", money_with_currency_format: "ZMW{{amount_no_decimals_with_comma_separator}}" },
                                },
                            };
                        }.apply(t, i)) || (e.exports = o);
            },
            3497: function (e, t, n) {
                var i, o;
                (i = [n(1337)]),
                    void 0 ===
                        (o = function (e) {
                            var t = {};
                            return (
                                Object.defineProperties(t, {
                                    signed_up: {
                                        get: function () {
                                            return e.get("shopify-newsletter-sign-up");
                                        },
                                        set: function (t) {
                                            e.set("shopify-newsletter-sign-up", t, { expires: 365 });
                                        },
                                    },
                                }),
                                t
                            );
                        }.apply(t, i)) || (e.exports = o);
            },
            986: function (e, t, n) {
                var i;
                void 0 ===
                    (i = function () {
                        return {
                            EU: "Europe",
                            AD: "Andorra",
                            AL: "Albania",
                            AT: "Austria",
                            BA: "Bosnia and Herzegovina",
                            BE: "Belgium",
                            BG: "Bulgaria",
                            BY: "Belarus",
                            CH: "Switzerland",
                            CS: "Serbia and Montenegro",
                            CZ: "Czech Republic",
                            DE: "Germany",
                            DK: "Denmark",
                            EE: "Estonia",
                            ES: "Spain",
                            FI: "Finland",
                            FO: "Faroe Islands",
                            FR: "France",
                            FX: "France:  Metropolitan",
                            GB: "United Kingdom",
                            GI: "Gibraltar",
                            GR: "Greece",
                            HR: "Croatia",
                            HU: "Hungary",
                            IE: "Ireland",
                            IS: "Iceland",
                            IT: "Italy",
                            LI: "Liechtenstein",
                            LT: "Lithuania",
                            LU: "Luxembourg",
                            LV: "Latvia",
                            MC: "Monaco",
                            MD: "Moldova:  Republic of",
                            MK: "Macedonia",
                            MT: "Malta",
                            NL: "Netherlands",
                            NO: "Norway",
                            PL: "Poland",
                            PT: "Portugal",
                            RO: "Romania",
                            SE: "Sweden",
                            SI: "Slovenia",
                            SJ: "Svalbard and Jan Mayen",
                            SK: "Slovakia",
                            SM: "San Marino",
                            UA: "Ukraine",
                            VA: "Holy See (Vatican City State)",
                        };
                    }.call(t, n, t, e)) || (e.exports = i);
            },
            2283: function (e, t, n) {
                var i, o;
                (i = [n(9117)]),
                    void 0 ===
                        (o = function (e) {
                            return new e();
                        }.apply(t, i)) || (e.exports = o);
            },
            8506: function (e, t, n) {
                var i, o;
                (i = [n(9755), n(1337), n(9939), n(4955)]),
                    void 0 ===
                        (o = function (e, t, n) {
                            var i = ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "GB"],
                                o = n(),
                                r = {
                                    get country_code() {
                                        return t.get("luxy_geolocation_country_code");
                                    },
                                    get original_country_code() {
                                        return t.get("luxy_original_geolocation_country_code");
                                    },
                                    set country_code(e) {
                                        t.set("luxy_original_geolocation_country_code", e, { expires: 7, path: "/" }), i.includes(e) && (e = "EU"), t.set("luxy_geolocation_country_code", e, { expires: 7, path: "/" });
                                    },
                                },
                                a = e.Deferred();
                            return (
                                (o = n()).geolocation && (r.country_code = o.geolocation),
                                r.country_code
                                    ? a.resolve(r)
                                    : (function () {
                                          var t = e.Deferred();
                                          return (
                                              geoip2.country(
                                                  function (e) {
                                                      t.resolve(e);
                                                  },
                                                  function (e) {
                                                      console.log("MaxMind: Error", e);
                                                  }
                                              ),
                                              t.promise()
                                          );
                                      })().done(function (e) {
                                          (r.country_code = e.country.iso_code), a.resolve(r);
                                      }),
                                a.promise()
                            );
                        }.apply(t, i)) || (e.exports = o);
            },
            5745: function (e, t, n) {
                var i;
                void 0 ===
                    (i = function () {
                        var e = document.getElementById("liquid-json"),
                            t = {};
                        return e && (t = JSON.parse(e.innerHTML)), t;
                    }.call(t, n, t, e)) || (e.exports = i);
            },
            6775: function (e, t, n) {
                var i, o;
                (i = [n(9755), n(894)]),
                    void 0 ===
                        (o = function (e) {
                            var t = document.getElementById("modal-close"),
                                n = {
                                    closeBtn: !1,
                                    beforeShow: function () {
                                        t && this.skin.before(t.innerHTML);
                                    },
                                    padding: 0,
                                    helpers: { overlay: { css: { background: "rgba(233, 233, 233, 0.90)" }, locked: !1 } },
                                };
                            return function (t, i) {
                                t.addEventListener("click", function (t) {
                                    t.preventDefault(), e.fancybox.open(e.extend(!0, {}, n, i));
                                });
                            };
                        }.apply(t, i)) || (e.exports = o);
            },
            9939: function (e, t, n) {
                var i;
                void 0 ===
                    (i = function () {
                        return function () {
                            query_string = document.location.search.replace(/\+/g, " ");
                            for (var e = {}, t = /[?&]?([^=]+)=([^&]*)/g, n = null; (n = t.exec(query_string)); ) e[decodeURIComponent(n[1])] = decodeURIComponent(n[2]);
                            return e;
                        };
                    }.call(t, n, t, e)) || (e.exports = i);
            },
            5105: function (e, t, n) {
                var i;
                void 0 ===
                    (i = function () {
                        var e = window,
                            t = document.documentElement;
                        return {
                            scroll_top: function () {
                                return e.pageYOffset || t.scrollTop;
                            },
                            width: function () {
                                return e.innerWidth || t.clientWidth;
                            },
                            height: function () {
                                return e.innerHeight || t.clientHeight;
                            },
                            inview: function (t, n) {
                                n = n || 200;
                                var i = this.scroll_top(),
                                    o = i + e.innerHeight,
                                    r = t.getBoundingClientRect(),
                                    a = r.top + i;
                                return r.bottom + i >= i - n && a <= o + n;
                            },
                        };
                    }.call(t, n, t, e)) || (e.exports = i);
            },
            4955: function (e, t, n) {
                var i;
                void 0 ===
                    (i = function () {
                        if (Array.prototype.includes) return !1;
                        Array.prototype.includes = function (e) {
                            "use strict";
                            if (null == this) throw new TypeError("Array.prototype.includes called on null or undefined");
                            var t = Object(this),
                                n = parseInt(t.length, 10) || 0;
                            if (0 === n) return !1;
                            var i,
                                o,
                                r = parseInt(arguments[1], 10) || 0;
                            for (r >= 0 ? (i = r) : (i = n + r) < 0 && (i = 0); i < n; ) {
                                if (e === (o = t[i]) || (e != e && o != o)) return !0;
                                i++;
                            }
                            return !1;
                        };
                    }.call(t, n, t, e)) || (e.exports = i);
            },
            6675: function (e, t, n) {
                var i;
                void 0 ===
                    (i = function () {
                        if (Array.prototype.uniq) return !1;
                        Array.prototype.uniq = function () {
                            for (var e = {}, t = [], n = this.length, i = 0, o = 0; o < n; o++) {
                                var r = this[o];
                                1 !== e[r] && ((e[r] = 1), (t[i++] = r));
                            }
                            return t;
                        };
                    }.call(t, n, t, e)) || (e.exports = i);
            },
            1337: function (e, t, n) {
                var i, o;
                void 0 ===
                    (o =
                        "function" ==
                        typeof (i = function () {
                            function e() {
                                for (var e = 0, t = {}; e < arguments.length; e++) {
                                    var n = arguments[e];
                                    for (var i in n) t[i] = n[i];
                                }
                                return t;
                            }
                            return (function t(n) {
                                function i(t, o, r) {
                                    var a;
                                    if (arguments.length > 1) {
                                        if ("number" == typeof (r = e({ path: "/" }, i.defaults, r)).expires) {
                                            var s = new Date();
                                            s.setMilliseconds(s.getMilliseconds() + 864e5 * r.expires), (r.expires = s);
                                        }
                                        try {
                                            (a = JSON.stringify(o)), /^[\{\[]/.test(a) && (o = a);
                                        } catch (e) {}
                                        return (
                                            (o = n.write ? n.write(o, t) : encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent)),
                                            (t = (t = (t = encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape)),
                                            (document.cookie = [t, "=", o, r.expires && "; expires=" + r.expires.toUTCString(), r.path && "; path=" + r.path, r.domain && "; domain=" + r.domain, r.secure ? "; secure" : ""].join(""))
                                        );
                                    }
                                    t || (a = {});
                                    for (var c = document.cookie ? document.cookie.split("; ") : [], l = /(%[0-9A-Z]{2})+/g, u = 0; u < c.length; u++) {
                                        var d = c[u].split("="),
                                            f = d[0].replace(l, decodeURIComponent),
                                            h = d.slice(1).join("=");
                                        '"' === h.charAt(0) && (h = h.slice(1, -1));
                                        try {
                                            if (((h = n.read ? n.read(h, f) : n(h, f) || h.replace(l, decodeURIComponent)), this.json))
                                                try {
                                                    h = JSON.parse(h);
                                                } catch (e) {}
                                            if (t === f) {
                                                a = h;
                                                break;
                                            }
                                            t || (a[f] = h);
                                        } catch (e) {}
                                    }
                                    return a;
                                }
                                return (
                                    (i.get = i.set = i),
                                    (i.getJSON = function () {
                                        return i.apply({ json: !0 }, [].slice.call(arguments));
                                    }),
                                    (i.defaults = {}),
                                    (i.remove = function (t, n) {
                                        i(t, "", e(n, { expires: -1 }));
                                    }),
                                    (i.withConverter = t),
                                    i
                                );
                            })(function () {});
                        })
                            ? i.call(t, n, t, e)
                            : i) || (e.exports = o);
            },
            9117: function (e, t, n) {
                var i;
                !(function (t) {
                    "use strict";
                    function o() {}
                    var r = o.prototype,
                        a = t.EventEmitter;
                    function s(e, t) {
                        for (var n = e.length; n--; ) if (e[n].listener === t) return n;
                        return -1;
                    }
                    function c(e) {
                        return function () {
                            return this[e].apply(this, arguments);
                        };
                    }
                    function l(e) {
                        return "function" == typeof e || e instanceof RegExp || (!(!e || "object" != typeof e) && l(e.listener));
                    }
                    (r.getListeners = function (e) {
                        var t,
                            n,
                            i = this._getEvents();
                        if (e instanceof RegExp) for (n in ((t = {}), i)) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n]);
                        else t = i[e] || (i[e] = []);
                        return t;
                    }),
                        (r.flattenListeners = function (e) {
                            var t,
                                n = [];
                            for (t = 0; t < e.length; t += 1) n.push(e[t].listener);
                            return n;
                        }),
                        (r.getListenersAsObject = function (e) {
                            var t,
                                n = this.getListeners(e);
                            return n instanceof Array && ((t = {})[e] = n), t || n;
                        }),
                        (r.addListener = function (e, t) {
                            if (!l(t)) throw new TypeError("listener must be a function");
                            var n,
                                i = this.getListenersAsObject(e),
                                o = "object" == typeof t;
                            for (n in i) i.hasOwnProperty(n) && -1 === s(i[n], t) && i[n].push(o ? t : { listener: t, once: !1 });
                            return this;
                        }),
                        (r.on = c("addListener")),
                        (r.addOnceListener = function (e, t) {
                            return this.addListener(e, { listener: t, once: !0 });
                        }),
                        (r.once = c("addOnceListener")),
                        (r.defineEvent = function (e) {
                            return this.getListeners(e), this;
                        }),
                        (r.defineEvents = function (e) {
                            for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
                            return this;
                        }),
                        (r.removeListener = function (e, t) {
                            var n,
                                i,
                                o = this.getListenersAsObject(e);
                            for (i in o) o.hasOwnProperty(i) && -1 !== (n = s(o[i], t)) && o[i].splice(n, 1);
                            return this;
                        }),
                        (r.off = c("removeListener")),
                        (r.addListeners = function (e, t) {
                            return this.manipulateListeners(!1, e, t);
                        }),
                        (r.removeListeners = function (e, t) {
                            return this.manipulateListeners(!0, e, t);
                        }),
                        (r.manipulateListeners = function (e, t, n) {
                            var i,
                                o,
                                r = e ? this.removeListener : this.addListener,
                                a = e ? this.removeListeners : this.addListeners;
                            if ("object" != typeof t || t instanceof RegExp) for (i = n.length; i--; ) r.call(this, t, n[i]);
                            else for (i in t) t.hasOwnProperty(i) && (o = t[i]) && ("function" == typeof o ? r.call(this, i, o) : a.call(this, i, o));
                            return this;
                        }),
                        (r.removeEvent = function (e) {
                            var t,
                                n = typeof e,
                                i = this._getEvents();
                            if ("string" === n) delete i[e];
                            else if (e instanceof RegExp) for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
                            else delete this._events;
                            return this;
                        }),
                        (r.removeAllListeners = c("removeEvent")),
                        (r.emitEvent = function (e, t) {
                            var n,
                                i,
                                o,
                                r,
                                a = this.getListenersAsObject(e);
                            for (r in a)
                                if (a.hasOwnProperty(r))
                                    for (n = a[r].slice(0), o = 0; o < n.length; o++)
                                        !0 === (i = n[o]).once && this.removeListener(e, i.listener), i.listener.apply(this, t || []) === this._getOnceReturnValue() && this.removeListener(e, i.listener);
                            return this;
                        }),
                        (r.trigger = c("emitEvent")),
                        (r.emit = function (e) {
                            var t = Array.prototype.slice.call(arguments, 1);
                            return this.emitEvent(e, t);
                        }),
                        (r.setOnceReturnValue = function (e) {
                            return (this._onceReturnValue = e), this;
                        }),
                        (r._getOnceReturnValue = function () {
                            return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue;
                        }),
                        (r._getEvents = function () {
                            return this._events || (this._events = {});
                        }),
                        (o.noConflict = function () {
                            return (t.EventEmitter = a), o;
                        }),
                        void 0 ===
                            (i = function () {
                                return o;
                            }.call(t, n, t, e)) || (e.exports = i);
                })(this || {});
            },
            894: function (e, t, n) {
                var i, o;
                (i = [n(9755), n(2180)]),
                    void 0 ===
                        (o = function (e) {
                            var t = e.fancybox,
                                n = function (t, n, i) {
                                    return (
                                        (i = i || ""),
                                        "object" === e.type(i) && (i = e.param(i, !0)),
                                        e.each(n, function (e, n) {
                                            t = t.replace("$" + e, n || "");
                                        }),
                                        i.length && (t += (t.indexOf("?") > 0 ? "&" : "?") + i),
                                        t
                                    );
                                };
                            t.helpers.media = {
                                defaults: {
                                    youtube: {
                                        matcher: /(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,
                                        params: { autoplay: 1, autohide: 1, fs: 1, rel: 0, hd: 1, wmode: "opaque", enablejsapi: 1 },
                                        type: "iframe",
                                        url: "//www.youtube.com/embed/$3",
                                    },
                                    vimeo: {
                                        matcher: /(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,
                                        params: { autoplay: 1, hd: 1, show_title: 1, show_byline: 1, show_portrait: 0, fullscreen: 1 },
                                        type: "iframe",
                                        url: "//player.vimeo.com/video/$1",
                                    },
                                    metacafe: {
                                        matcher: /metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,
                                        params: { autoPlay: "yes" },
                                        type: "swf",
                                        url: function (t, n, i) {
                                            return (i.swf.flashVars = "playerVars=" + e.param(n, !0)), "//www.metacafe.com/fplayer/" + t[1] + "/.swf";
                                        },
                                    },
                                    dailymotion: { matcher: /dailymotion.com\/video\/(.*)\/?(.*)/, params: { additionalInfos: 0, autoStart: 1 }, type: "swf", url: "//www.dailymotion.com/swf/video/$1" },
                                    twitvid: { matcher: /twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i, params: { autoplay: 0 }, type: "iframe", url: "//www.twitvid.com/embed.php?guid=$1" },
                                    twitpic: { matcher: /twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i, type: "image", url: "//twitpic.com/show/full/$1/" },
                                    instagram: { matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i, type: "image", url: "//$1/p/$2/media/?size=l" },
                                    google_maps: {
                                        matcher: /maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,
                                        type: "iframe",
                                        url: function (e) {
                                            return "//maps.google." + e[1] + "/" + e[3] + e[4] + "&output=" + (e[4].indexOf("layer=c") > 0 ? "svembed" : "embed");
                                        },
                                    },
                                },
                                beforeLoad: function (t, i) {
                                    var o,
                                        r,
                                        a,
                                        s,
                                        c = i.href || "",
                                        l = !1;
                                    for (o in t)
                                        if (t.hasOwnProperty(o) && ((r = t[o]), (a = c.match(r.matcher)))) {
                                            (l = r.type), (s = e.extend(!0, {}, r.params, i[o] || (e.isPlainObject(t[o]) ? t[o].params : null))), (c = "function" === e.type(r.url) ? r.url.call(this, a, s, i) : n(r.url, a, s));
                                            break;
                                        }
                                    l && ((i.href = c), (i.type = l), (i.autoHeight = !1));
                                },
                            };
                        }.apply(t, i)) || (e.exports = o);
            },
            2180: function (e, t, n) {
                var i, o;
                (i = [n(9755)]),
                    void 0 ===
                        (o = function (e) {
                            "use strict";
                            var t = e("html"),
                                n = e(window),
                                i = e(document),
                                o = (e.fancybox = function () {
                                    o.open.apply(this, arguments);
                                }),
                                r = navigator.userAgent.match(/msie/i),
                                a = null,
                                s = void 0 !== document.createTouch,
                                c = function (t) {
                                    return t && t.hasOwnProperty && t instanceof e;
                                },
                                l = function (t) {
                                    return t && "string" === e.type(t);
                                },
                                u = function (e) {
                                    return l(e) && e.indexOf("%") > 0;
                                },
                                d = function (e, t) {
                                    var n = parseInt(e, 10) || 0;
                                    return t && u(e) && (n = (o.getViewport()[t] / 100) * n), Math.ceil(n);
                                },
                                f = function (e, t) {
                                    return d(e, t) + "px";
                                };
                            e.extend(o, {
                                version: "2.1.5",
                                defaults: {
                                    padding: 15,
                                    margin: 20,
                                    width: 800,
                                    height: 600,
                                    minWidth: 100,
                                    minHeight: 100,
                                    maxWidth: 9999,
                                    maxHeight: 9999,
                                    pixelRatio: 1,
                                    autoSize: !0,
                                    autoHeight: !1,
                                    autoWidth: !1,
                                    autoResize: !0,
                                    autoCenter: !s,
                                    fitToView: !0,
                                    aspectRatio: !1,
                                    topRatio: 0.5,
                                    leftRatio: 0.5,
                                    scrolling: "auto",
                                    wrapCSS: "",
                                    arrows: !0,
                                    closeBtn: !0,
                                    closeClick: !1,
                                    nextClick: !1,
                                    mouseWheel: !0,
                                    autoPlay: !1,
                                    playSpeed: 3e3,
                                    preload: 3,
                                    modal: !1,
                                    loop: !0,
                                    ajax: { dataType: "html", headers: { "X-fancyBox": !0 } },
                                    iframe: { scrolling: "auto", preload: !0 },
                                    swf: { wmode: "transparent", allowfullscreen: "true", allowscriptaccess: "always" },
                                    keys: { next: { 13: "left", 34: "up", 39: "left", 40: "up" }, prev: { 8: "right", 33: "down", 37: "right", 38: "down" }, close: [27], play: [32], toggle: [70] },
                                    direction: { next: "left", prev: "right" },
                                    scrollOutside: !0,
                                    index: 0,
                                    type: null,
                                    href: null,
                                    content: null,
                                    title: null,
                                    tpl: {
                                        wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                                        image: '<img class="fancybox-image" src="{href}" alt="" />',
                                        iframe:
                                            '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' +
                                            (r ? ' allowtransparency="true"' : "") +
                                            "></iframe>",
                                        error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                                        closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                                        next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                                        prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',
                                    },
                                    openEffect: "fade",
                                    openSpeed: 250,
                                    openEasing: "swing",
                                    openOpacity: !0,
                                    openMethod: "zoomIn",
                                    closeEffect: "fade",
                                    closeSpeed: 250,
                                    closeEasing: "swing",
                                    closeOpacity: !0,
                                    closeMethod: "zoomOut",
                                    nextEffect: "elastic",
                                    nextSpeed: 250,
                                    nextEasing: "swing",
                                    nextMethod: "changeIn",
                                    prevEffect: "elastic",
                                    prevSpeed: 250,
                                    prevEasing: "swing",
                                    prevMethod: "changeOut",
                                    helpers: { overlay: !0, title: !0 },
                                    onCancel: e.noop,
                                    beforeLoad: e.noop,
                                    afterLoad: e.noop,
                                    beforeShow: e.noop,
                                    afterShow: e.noop,
                                    beforeChange: e.noop,
                                    beforeClose: e.noop,
                                    afterClose: e.noop,
                                },
                                group: {},
                                opts: {},
                                previous: null,
                                coming: null,
                                current: null,
                                isActive: !1,
                                isOpen: !1,
                                isOpened: !1,
                                wrap: null,
                                skin: null,
                                outer: null,
                                inner: null,
                                player: { timer: null, isActive: !1 },
                                ajaxLoad: null,
                                imgPreload: null,
                                transitions: {},
                                helpers: {},
                                open: function (t, n) {
                                    if (t && (e.isPlainObject(n) || (n = {}), !1 !== o.close(!0)))
                                        return (
                                            e.isArray(t) || (t = c(t) ? e(t).get() : [t]),
                                            e.each(t, function (i, r) {
                                                var a,
                                                    s,
                                                    u,
                                                    d,
                                                    f,
                                                    h,
                                                    p,
                                                    m = {};
                                                "object" === e.type(r) &&
                                                    (r.nodeType && (r = e(r)),
                                                    c(r)
                                                        ? ((m = { href: r.data("fancybox-href") || r.attr("href"), title: r.data("fancybox-title") || r.attr("title"), isDom: !0, element: r }), e.metadata && e.extend(!0, m, r.metadata()))
                                                        : (m = r)),
                                                    (a = n.href || m.href || (l(r) ? r : null)),
                                                    (s = void 0 !== n.title ? n.title : m.title || ""),
                                                    !(d = (u = n.content || m.content) ? "html" : n.type || m.type) && m.isDom && ((d = r.data("fancybox-type")) || (d = (f = r.prop("class").match(/fancybox\.(\w+)/)) ? f[1] : null)),
                                                    l(a) &&
                                                        (d || (o.isImage(a) ? (d = "image") : o.isSWF(a) ? (d = "swf") : "#" === a.charAt(0) ? (d = "inline") : l(r) && ((d = "html"), (u = r))),
                                                        "ajax" === d && ((h = a.split(/\s+/, 2)), (a = h.shift()), (p = h.shift()))),
                                                    u || ("inline" === d ? (a ? (u = e(l(a) ? a.replace(/.*(?=#[^\s]+$)/, "") : a)) : m.isDom && (u = r)) : "html" === d ? (u = a) : d || a || !m.isDom || ((d = "inline"), (u = r))),
                                                    e.extend(m, { href: a, type: d, content: u, title: s, selector: p }),
                                                    (t[i] = m);
                                            }),
                                            (o.opts = e.extend(!0, {}, o.defaults, n)),
                                            void 0 !== n.keys && (o.opts.keys = !!n.keys && e.extend({}, o.defaults.keys, n.keys)),
                                            (o.group = t),
                                            o._start(o.opts.index)
                                        );
                                },
                                cancel: function () {
                                    var e = o.coming;
                                    e &&
                                        !1 !== o.trigger("onCancel") &&
                                        (o.hideLoading(),
                                        o.ajaxLoad && o.ajaxLoad.abort(),
                                        (o.ajaxLoad = null),
                                        o.imgPreload && (o.imgPreload.onload = o.imgPreload.onerror = null),
                                        e.wrap && e.wrap.stop(!0, !0).trigger("onReset").remove(),
                                        (o.coming = null),
                                        o.current || o._afterZoomOut(e));
                                },
                                close: function (t) {
                                    o.cancel(),
                                        !1 !== o.trigger("beforeClose") &&
                                            (o.unbindEvents(),
                                            o.isActive &&
                                                (o.isOpen && !0 !== t
                                                    ? ((o.isOpen = o.isOpened = !1),
                                                      (o.isClosing = !0),
                                                      e(".fancybox-item, .fancybox-nav").remove(),
                                                      o.wrap.stop(!0, !0).removeClass("fancybox-opened"),
                                                      o.transitions[o.current.closeMethod]())
                                                    : (e(".fancybox-wrap").stop(!0).trigger("onReset").remove(), o._afterZoomOut())));
                                },
                                play: function (e) {
                                    var t = function () {
                                            clearTimeout(o.player.timer);
                                        },
                                        n = function () {
                                            t(), o.current && o.player.isActive && (o.player.timer = setTimeout(o.next, o.current.playSpeed));
                                        },
                                        r = function () {
                                            t(), i.unbind(".player"), (o.player.isActive = !1), o.trigger("onPlayEnd");
                                        };
                                    !0 === e || (!o.player.isActive && !1 !== e)
                                        ? o.current &&
                                          (o.current.loop || o.current.index < o.group.length - 1) &&
                                          ((o.player.isActive = !0), i.bind({ "onCancel.player beforeClose.player": r, "onUpdate.player": n, "beforeLoad.player": t }), n(), o.trigger("onPlayStart"))
                                        : r();
                                },
                                next: function (e) {
                                    var t = o.current;
                                    t && (l(e) || (e = t.direction.next), o.jumpto(t.index + 1, e, "next"));
                                },
                                prev: function (e) {
                                    var t = o.current;
                                    t && (l(e) || (e = t.direction.prev), o.jumpto(t.index - 1, e, "prev"));
                                },
                                jumpto: function (e, t, n) {
                                    var i = o.current;
                                    i &&
                                        ((e = d(e)),
                                        (o.direction = t || i.direction[e >= i.index ? "next" : "prev"]),
                                        (o.router = n || "jumpto"),
                                        i.loop && (e < 0 && (e = i.group.length + (e % i.group.length)), (e %= i.group.length)),
                                        void 0 !== i.group[e] && (o.cancel(), o._start(e)));
                                },
                                reposition: function (t, n) {
                                    var i,
                                        r = o.current,
                                        a = r ? r.wrap : null;
                                    a && ((i = o._getPosition(n)), t && "scroll" === t.type ? (delete i.position, a.stop(!0, !0).animate(i, 200)) : (a.css(i), (r.pos = e.extend({}, r.dim, i))));
                                },
                                update: function (e) {
                                    var t = e && e.type,
                                        n = !t || "orientationchange" === t;
                                    n && (clearTimeout(a), (a = null)),
                                        o.isOpen &&
                                            !a &&
                                            (a = setTimeout(
                                                function () {
                                                    var i = o.current;
                                                    i &&
                                                        !o.isClosing &&
                                                        (o.wrap.removeClass("fancybox-tmp"),
                                                        (n || "load" === t || ("resize" === t && i.autoResize)) && o._setDimension(),
                                                        ("scroll" === t && i.canShrink) || o.reposition(e),
                                                        o.trigger("onUpdate"),
                                                        (a = null));
                                                },
                                                n && !s ? 0 : 300
                                            ));
                                },
                                toggle: function (t) {
                                    o.isOpen && ((o.current.fitToView = "boolean" === e.type(t) ? t : !o.current.fitToView), s && (o.wrap.removeAttr("style").addClass("fancybox-tmp"), o.trigger("onUpdate")), o.update());
                                },
                                hideLoading: function () {
                                    i.unbind(".loading"), e("#fancybox-loading").remove();
                                },
                                showLoading: function () {
                                    var t, n;
                                    o.hideLoading(),
                                        (t = e('<div id="fancybox-loading"><div></div></div>').click(o.cancel).appendTo("body")),
                                        i.bind("keydown.loading", function (e) {
                                            27 === (e.which || e.keyCode) && (e.preventDefault(), o.cancel());
                                        }),
                                        o.defaults.fixed || ((n = o.getViewport()), t.css({ position: "absolute", top: 0.5 * n.h + n.y, left: 0.5 * n.w + n.x }));
                                },
                                getViewport: function () {
                                    var e = (o.current && o.current.locked) || !1,
                                        t = { x: n.scrollLeft(), y: n.scrollTop() };
                                    return e ? ((t.w = e[0].clientWidth), (t.h = e[0].clientHeight)) : ((t.w = s && window.innerWidth ? window.innerWidth : n.width()), (t.h = s && window.innerHeight ? window.innerHeight : n.height())), t;
                                },
                                unbindEvents: function () {
                                    o.wrap && c(o.wrap) && o.wrap.unbind(".fb"), i.unbind(".fb"), n.unbind(".fb");
                                },
                                bindEvents: function () {
                                    var t,
                                        r = o.current;
                                    r &&
                                        (n.bind("orientationchange.fb" + (s ? "" : " resize.fb") + (r.autoCenter && !r.locked ? " scroll.fb" : ""), o.update),
                                        (t = r.keys) &&
                                            i.bind("keydown.fb", function (n) {
                                                var i = n.which || n.keyCode,
                                                    a = n.target || n.srcElement;
                                                if (27 === i && o.coming) return !1;
                                                n.ctrlKey ||
                                                    n.altKey ||
                                                    n.shiftKey ||
                                                    n.metaKey ||
                                                    (a && (a.type || e(a).is("[contenteditable]"))) ||
                                                    e.each(t, function (t, a) {
                                                        return r.group.length > 1 && void 0 !== a[i] ? (o[t](a[i]), n.preventDefault(), !1) : e.inArray(i, a) > -1 ? (o[t](), n.preventDefault(), !1) : void 0;
                                                    });
                                            }),
                                        e.fn.mousewheel &&
                                            r.mouseWheel &&
                                            o.wrap.bind("mousewheel.fb", function (t, n, i, a) {
                                                for (var s, c = t.target || null, l = e(c), u = !1; l.length && !(u || l.is(".fancybox-skin") || l.is(".fancybox-wrap")); )
                                                    (u = (s = l[0]) && !(s.style.overflow && "hidden" === s.style.overflow) && ((s.clientWidth && s.scrollWidth > s.clientWidth) || (s.clientHeight && s.scrollHeight > s.clientHeight))),
                                                        (l = e(l).parent());
                                                0 === n || u || (o.group.length > 1 && !r.canShrink && (a > 0 || i > 0 ? o.prev(a > 0 ? "down" : "left") : (a < 0 || i < 0) && o.next(a < 0 ? "up" : "right"), t.preventDefault()));
                                            }));
                                },
                                trigger: function (t, n) {
                                    var r,
                                        a = n || o.coming || o.current;
                                    if (a) {
                                        if ((e.isFunction(a[t]) && (r = a[t].apply(a, Array.prototype.slice.call(arguments, 1))), !1 === r)) return !1;
                                        a.helpers &&
                                            e.each(a.helpers, function (n, i) {
                                                i && o.helpers[n] && e.isFunction(o.helpers[n][t]) && o.helpers[n][t](e.extend(!0, {}, o.helpers[n].defaults, i), a);
                                            }),
                                            i.trigger(t);
                                    }
                                },
                                isImage: function (e) {
                                    return l(e) && e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
                                },
                                isSWF: function (e) {
                                    return l(e) && e.match(/\.(swf)((\?|#).*)?$/i);
                                },
                                _start: function (t) {
                                    var n,
                                        i,
                                        r,
                                        a,
                                        c,
                                        l = {};
                                    if (((t = d(t)), !(n = o.group[t] || null))) return !1;
                                    if (
                                        ((a = (l = e.extend(!0, {}, o.opts, n)).margin),
                                        (c = l.padding),
                                        "number" === e.type(a) && (l.margin = [a, a, a, a]),
                                        "number" === e.type(c) && (l.padding = [c, c, c, c]),
                                        l.modal && e.extend(!0, l, { closeBtn: !1, closeClick: !1, nextClick: !1, arrows: !1, mouseWheel: !1, keys: null, helpers: { overlay: { closeClick: !1 } } }),
                                        l.autoSize && (l.autoWidth = l.autoHeight = !0),
                                        "auto" === l.width && (l.autoWidth = !0),
                                        "auto" === l.height && (l.autoHeight = !0),
                                        (l.group = o.group),
                                        (l.index = t),
                                        (o.coming = l),
                                        !1 !== o.trigger("beforeLoad"))
                                    ) {
                                        if (((r = l.type), (i = l.href), !r)) return (o.coming = null), !(!o.current || !o.router || "jumpto" === o.router) && ((o.current.index = t), o[o.router](o.direction));
                                        if (
                                            ((o.isActive = !0),
                                            ("image" !== r && "swf" !== r) || ((l.autoHeight = l.autoWidth = !1), (l.scrolling = "visible")),
                                            "image" === r && (l.aspectRatio = !0),
                                            "iframe" === r && s && (l.scrolling = "scroll"),
                                            (l.wrap = e(l.tpl.wrap)
                                                .addClass("fancybox-" + (s ? "mobile" : "desktop") + " fancybox-type-" + r + " fancybox-tmp " + l.wrapCSS)
                                                .appendTo(l.parent || "body")),
                                            e.extend(l, { skin: e(".fancybox-skin", l.wrap), outer: e(".fancybox-outer", l.wrap), inner: e(".fancybox-inner", l.wrap) }),
                                            e.each(["Top", "Right", "Bottom", "Left"], function (e, t) {
                                                l.skin.css("padding" + t, f(l.padding[e]));
                                            }),
                                            o.trigger("onReady"),
                                            "inline" === r || "html" === r)
                                        ) {
                                            if (!l.content || !l.content.length) return o._error("content");
                                        } else if (!i) return o._error("href");
                                        "image" === r ? o._loadImage() : "ajax" === r ? o._loadAjax() : "iframe" === r ? o._loadIframe() : o._afterLoad();
                                    } else o.coming = null;
                                },
                                _error: function (t) {
                                    e.extend(o.coming, { type: "html", autoWidth: !0, autoHeight: !0, minWidth: 0, minHeight: 0, scrolling: "no", hasError: t, content: o.coming.tpl.error }), o._afterLoad();
                                },
                                _loadImage: function () {
                                    var e = (o.imgPreload = new Image());
                                    (e.onload = function () {
                                        (this.onload = this.onerror = null), (o.coming.width = this.width / o.opts.pixelRatio), (o.coming.height = this.height / o.opts.pixelRatio), o._afterLoad();
                                    }),
                                        (e.onerror = function () {
                                            (this.onload = this.onerror = null), o._error("image");
                                        }),
                                        (e.src = o.coming.href),
                                        !0 !== e.complete && o.showLoading();
                                },
                                _loadAjax: function () {
                                    var t = o.coming;
                                    o.showLoading(),
                                        (o.ajaxLoad = e.ajax(
                                            e.extend({}, t.ajax, {
                                                url: t.href,
                                                error: function (e, t) {
                                                    o.coming && "abort" !== t ? o._error("ajax", e) : o.hideLoading();
                                                },
                                                success: function (e, n) {
                                                    "success" === n && ((t.content = e), o._afterLoad());
                                                },
                                            })
                                        ));
                                },
                                _loadIframe: function () {
                                    var t = o.coming,
                                        n = e(t.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
                                            .attr("scrolling", s ? "auto" : t.iframe.scrolling)
                                            .attr("src", t.href);
                                    e(t.wrap).bind("onReset", function () {
                                        try {
                                            e(this).find("iframe").hide().attr("src", "//about:blank").end().empty();
                                        } catch (e) {}
                                    }),
                                        t.iframe.preload &&
                                            (o.showLoading(),
                                            n.one("load", function () {
                                                e(this).data("ready", 1), s || e(this).bind("load.fb", o.update), e(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), o._afterLoad();
                                            })),
                                        (t.content = n.appendTo(t.inner)),
                                        t.iframe.preload || o._afterLoad();
                                },
                                _preloadImages: function () {
                                    var e,
                                        t,
                                        n = o.group,
                                        i = o.current,
                                        r = n.length,
                                        a = i.preload ? Math.min(i.preload, r - 1) : 0;
                                    for (t = 1; t <= a; t += 1) "image" === (e = n[(i.index + t) % r]).type && e.href && (new Image().src = e.href);
                                },
                                _afterLoad: function () {
                                    var t,
                                        n,
                                        i,
                                        r,
                                        a,
                                        s,
                                        l = o.coming,
                                        u = o.current,
                                        d = "fancybox-placeholder";
                                    if ((o.hideLoading(), l && !1 !== o.isActive)) {
                                        if (!1 === o.trigger("afterLoad", l, u)) return l.wrap.stop(!0).trigger("onReset").remove(), void (o.coming = null);
                                        switch (
                                            (u && (o.trigger("beforeChange", u), u.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()),
                                            o.unbindEvents(),
                                            (t = l),
                                            (n = l.content),
                                            (i = l.type),
                                            (r = l.scrolling),
                                            e.extend(o, { wrap: t.wrap, skin: t.skin, outer: t.outer, inner: t.inner, current: t, previous: u }),
                                            (a = t.href),
                                            i)
                                        ) {
                                            case "inline":
                                            case "ajax":
                                            case "html":
                                                t.selector
                                                    ? (n = e("<div>").html(n).find(t.selector))
                                                    : c(n) &&
                                                      (n.data(d) ||
                                                          n.data(
                                                              d,
                                                              e('<div class="' + d + '"></div>')
                                                                  .insertAfter(n)
                                                                  .hide()
                                                          ),
                                                      (n = n.show().detach()),
                                                      t.wrap.bind("onReset", function () {
                                                          e(this).find(n).length && n.hide().replaceAll(n.data(d)).data(d, !1);
                                                      }));
                                                break;
                                            case "image":
                                                n = t.tpl.image.replace("{href}", a);
                                                break;
                                            case "swf":
                                                (n = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + a + '"></param>'),
                                                    (s = ""),
                                                    e.each(t.swf, function (e, t) {
                                                        (n += '<param name="' + e + '" value="' + t + '"></param>'), (s += " " + e + '="' + t + '"');
                                                    }),
                                                    (n += '<embed src="' + a + '" type="application/x-shockwave-flash" width="100%" height="100%"' + s + "></embed></object>");
                                        }
                                        (c(n) && n.parent().is(t.inner)) || t.inner.append(n),
                                            o.trigger("beforeShow"),
                                            t.inner.css("overflow", "yes" === r ? "scroll" : "no" === r ? "hidden" : r),
                                            o._setDimension(),
                                            o.reposition(),
                                            (o.isOpen = !1),
                                            (o.coming = null),
                                            o.bindEvents(),
                                            o.isOpened ? u.prevMethod && o.transitions[u.prevMethod]() : e(".fancybox-wrap").not(t.wrap).stop(!0).trigger("onReset").remove(),
                                            o.transitions[o.isOpened ? t.nextMethod : t.openMethod](),
                                            o._preloadImages();
                                    }
                                },
                                _setDimension: function () {
                                    var t,
                                        n,
                                        i,
                                        r,
                                        a,
                                        s,
                                        c,
                                        l,
                                        h,
                                        p,
                                        m,
                                        v,
                                        g,
                                        y,
                                        w,
                                        x,
                                        b,
                                        _ = o.getViewport(),
                                        S = 0,
                                        E = o.wrap,
                                        k = o.skin,
                                        C = o.inner,
                                        T = o.current,
                                        P = T.width,
                                        L = T.height,
                                        A = T.minWidth,
                                        D = T.minHeight,
                                        j = T.maxWidth,
                                        N = T.maxHeight,
                                        M = T.scrolling,
                                        q = T.scrollOutside ? T.scrollbarWidth : 0,
                                        I = T.margin,
                                        R = d(I[1] + I[3]),
                                        O = d(I[0] + I[2]);
                                    if (
                                        (E.add(k).add(C).width("auto").height("auto").removeClass("fancybox-tmp"),
                                        (a = R + (i = d(k.outerWidth(!0) - k.width()))),
                                        (s = O + (r = d(k.outerHeight(!0) - k.height()))),
                                        (c = u(P) ? ((_.w - a) * d(P)) / 100 : P),
                                        (l = u(L) ? ((_.h - s) * d(L)) / 100 : L),
                                        "iframe" === T.type)
                                    ) {
                                        if (((x = T.content), T.autoHeight && 1 === x.data("ready")))
                                            try {
                                                x[0].contentWindow.document.location && (C.width(c).height(9999), (b = x.contents().find("body")), q && b.css("overflow-x", "hidden"), (l = b.outerHeight(!0)));
                                            } catch (e) {}
                                    } else
                                        (T.autoWidth || T.autoHeight) &&
                                            (C.addClass("fancybox-tmp"), T.autoWidth || C.width(c), T.autoHeight || C.height(l), T.autoWidth && (c = C.width()), T.autoHeight && (l = C.height()), C.removeClass("fancybox-tmp"));
                                    if (
                                        ((P = d(c)),
                                        (L = d(l)),
                                        (m = c / l),
                                        (A = d(u(A) ? d(A, "w") - a : A)),
                                        (j = d(u(j) ? d(j, "w") - a : j)),
                                        (D = d(u(D) ? d(D, "h") - s : D)),
                                        (h = j),
                                        (p = N = d(u(N) ? d(N, "h") - s : N)),
                                        T.fitToView && ((j = Math.min(_.w - a, j)), (N = Math.min(_.h - s, N))),
                                        (y = _.w - R),
                                        (w = _.h - O),
                                        T.aspectRatio
                                            ? (P > j && (L = d((P = j) / m)), L > N && (P = d((L = N) * m)), P < A && (L = d((P = A) / m)), L < D && (P = d((L = D) * m)))
                                            : ((P = Math.max(A, Math.min(P, j))), T.autoHeight && "iframe" !== T.type && (C.width(P), (L = C.height())), (L = Math.max(D, Math.min(L, N)))),
                                        T.fitToView)
                                    )
                                        if ((C.width(P).height(L), E.width(P + i), (v = E.width()), (g = E.height()), T.aspectRatio))
                                            for (; (v > y || g > w) && P > A && L > D && !(S++ > 19); )
                                                (L = Math.max(D, Math.min(N, L - 10))), (P = d(L * m)) < A && (L = d((P = A) / m)), P > j && (L = d((P = j) / m)), C.width(P).height(L), E.width(P + i), (v = E.width()), (g = E.height());
                                        else (P = Math.max(A, Math.min(P, P - (v - y)))), (L = Math.max(D, Math.min(L, L - (g - w))));
                                    q && "auto" === M && L < l && P + i + q < y && (P += q),
                                        C.width(P).height(L),
                                        E.width(P + i),
                                        (v = E.width()),
                                        (g = E.height()),
                                        (t = (v > y || g > w) && P > A && L > D),
                                        (n = T.aspectRatio ? P < h && L < p && P < c && L < l : (P < h || L < p) && (P < c || L < l)),
                                        e.extend(T, { dim: { width: f(v), height: f(g) }, origWidth: c, origHeight: l, canShrink: t, canExpand: n, wPadding: i, hPadding: r, wrapSpace: g - k.outerHeight(!0), skinSpace: k.height() - L }),
                                        !x && T.autoHeight && L > D && L < N && !n && C.height("auto");
                                },
                                _getPosition: function (e) {
                                    var t = o.current,
                                        n = o.getViewport(),
                                        i = t.margin,
                                        r = o.wrap.width() + i[1] + i[3],
                                        a = o.wrap.height() + i[0] + i[2],
                                        s = { position: "absolute", top: i[0], left: i[3] };
                                    return (
                                        t.autoCenter && t.fixed && !e && a <= n.h && r <= n.w ? (s.position = "fixed") : t.locked || ((s.top += n.y), (s.left += n.x)),
                                        (s.top = f(Math.max(s.top, s.top + (n.h - a) * t.topRatio))),
                                        (s.left = f(Math.max(s.left, s.left + (n.w - r) * t.leftRatio))),
                                        s
                                    );
                                },
                                _afterZoomIn: function () {
                                    var t = o.current;
                                    t &&
                                        ((o.isOpen = o.isOpened = !0),
                                        o.wrap.css("overflow", "visible").addClass("fancybox-opened"),
                                        o.update(),
                                        (t.closeClick || (t.nextClick && o.group.length > 1)) &&
                                            o.inner.css("cursor", "pointer").bind("click.fb", function (n) {
                                                e(n.target).is("a") || e(n.target).parent().is("a") || (n.preventDefault(), o[t.closeClick ? "close" : "next"]());
                                            }),
                                        t.closeBtn &&
                                            e(t.tpl.closeBtn)
                                                .appendTo(o.skin)
                                                .bind("click.fb", function (e) {
                                                    e.preventDefault(), o.close();
                                                }),
                                        t.arrows &&
                                            o.group.length > 1 &&
                                            ((t.loop || t.index > 0) && e(t.tpl.prev).appendTo(o.outer).bind("click.fb", o.prev), (t.loop || t.index < o.group.length - 1) && e(t.tpl.next).appendTo(o.outer).bind("click.fb", o.next)),
                                        o.trigger("afterShow"),
                                        t.loop || t.index !== t.group.length - 1 ? o.opts.autoPlay && !o.player.isActive && ((o.opts.autoPlay = !1), o.play()) : o.play(!1));
                                },
                                _afterZoomOut: function (t) {
                                    (t = t || o.current),
                                        e(".fancybox-wrap").trigger("onReset").remove(),
                                        e.extend(o, { group: {}, opts: {}, router: !1, current: null, isActive: !1, isOpened: !1, isOpen: !1, isClosing: !1, wrap: null, skin: null, outer: null, inner: null }),
                                        o.trigger("afterClose", t);
                                },
                            }),
                                (o.transitions = {
                                    getOrigPosition: function () {
                                        var e = o.current,
                                            t = e.element,
                                            n = e.orig,
                                            i = {},
                                            r = 50,
                                            a = 50,
                                            s = e.hPadding,
                                            l = e.wPadding,
                                            u = o.getViewport();
                                        return (
                                            !n && e.isDom && t.is(":visible") && ((n = t.find("img:first")).length || (n = t)),
                                            c(n) ? ((i = n.offset()), n.is("img") && ((r = n.outerWidth()), (a = n.outerHeight()))) : ((i.top = u.y + (u.h - a) * e.topRatio), (i.left = u.x + (u.w - r) * e.leftRatio)),
                                            ("fixed" === o.wrap.css("position") || e.locked) && ((i.top -= u.y), (i.left -= u.x)),
                                            { top: f(i.top - s * e.topRatio), left: f(i.left - l * e.leftRatio), width: f(r + l), height: f(a + s) }
                                        );
                                    },
                                    step: function (e, t) {
                                        var n,
                                            i,
                                            r = t.prop,
                                            a = o.current,
                                            s = a.wrapSpace,
                                            c = a.skinSpace;
                                        ("width" !== r && "height" !== r) ||
                                            ((n = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start)),
                                            o.isClosing && (n = 1 - n),
                                            (i = e - ("width" === r ? a.wPadding : a.hPadding)),
                                            o.skin[r](d("width" === r ? i : i - s * n)),
                                            o.inner[r](d("width" === r ? i : i - s * n - c * n)));
                                    },
                                    zoomIn: function () {
                                        var t = o.current,
                                            n = t.pos,
                                            i = t.openEffect,
                                            r = "elastic" === i,
                                            a = e.extend({ opacity: 1 }, n);
                                        delete a.position,
                                            r ? ((n = this.getOrigPosition()), t.openOpacity && (n.opacity = 0.1)) : "fade" === i && (n.opacity = 0.1),
                                            o.wrap.css(n).animate(a, { duration: "none" === i ? 0 : t.openSpeed, easing: t.openEasing, step: r ? this.step : null, complete: o._afterZoomIn });
                                    },
                                    zoomOut: function () {
                                        var e = o.current,
                                            t = e.closeEffect,
                                            n = "elastic" === t,
                                            i = { opacity: 0.1 };
                                        n && ((i = this.getOrigPosition()), e.closeOpacity && (i.opacity = 0.1)),
                                            o.wrap.animate(i, { duration: "none" === t ? 0 : e.closeSpeed, easing: e.closeEasing, step: n ? this.step : null, complete: o._afterZoomOut });
                                    },
                                    changeIn: function () {
                                        var e,
                                            t = o.current,
                                            n = t.nextEffect,
                                            i = t.pos,
                                            r = { opacity: 1 },
                                            a = o.direction;
                                        (i.opacity = 0.1),
                                            "elastic" === n &&
                                                ((e = "down" === a || "up" === a ? "top" : "left"), "down" === a || "right" === a ? ((i[e] = f(d(i[e]) - 200)), (r[e] = "+=200px")) : ((i[e] = f(d(i[e]) + 200)), (r[e] = "-=200px"))),
                                            "none" === n ? o._afterZoomIn() : o.wrap.css(i).animate(r, { duration: t.nextSpeed, easing: t.nextEasing, complete: o._afterZoomIn });
                                    },
                                    changeOut: function () {
                                        var t = o.previous,
                                            n = t.prevEffect,
                                            i = { opacity: 0.1 },
                                            r = o.direction;
                                        "elastic" === n && (i["down" === r || "up" === r ? "top" : "left"] = ("up" === r || "left" === r ? "-" : "+") + "=200px"),
                                            t.wrap.animate(i, {
                                                duration: "none" === n ? 0 : t.prevSpeed,
                                                easing: t.prevEasing,
                                                complete: function () {
                                                    e(this).trigger("onReset").remove();
                                                },
                                            });
                                    },
                                }),
                                (o.helpers.overlay = {
                                    defaults: { closeClick: !0, speedOut: 200, showEarly: !0, css: {}, locked: !s, fixed: !0 },
                                    overlay: null,
                                    fixed: !1,
                                    el: e("html"),
                                    create: function (t) {
                                        (t = e.extend({}, this.defaults, t)),
                                            this.overlay && this.close(),
                                            (this.overlay = e('<div class="fancybox-overlay"></div>').appendTo(o.coming ? o.coming.parent : t.parent)),
                                            (this.fixed = !1),
                                            t.fixed && o.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), (this.fixed = !0));
                                    },
                                    open: function (t) {
                                        var i = this;
                                        (t = e.extend({}, this.defaults, t)),
                                            this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(t),
                                            this.fixed || (n.bind("resize.overlay", e.proxy(this.update, this)), this.update()),
                                            t.closeClick &&
                                                this.overlay.bind("click.overlay", function (t) {
                                                    if (e(t.target).hasClass("fancybox-overlay")) return o.isActive ? o.close() : i.close(), !1;
                                                }),
                                            this.overlay.css(t.css).show();
                                    },
                                    close: function () {
                                        var t, i;
                                        n.unbind("resize.overlay"),
                                            this.el.hasClass("fancybox-lock") &&
                                                (e(".fancybox-margin").removeClass("fancybox-margin"), (t = n.scrollTop()), (i = n.scrollLeft()), this.el.removeClass("fancybox-lock"), n.scrollTop(t).scrollLeft(i)),
                                            e(".fancybox-overlay").remove().hide(),
                                            e.extend(this, { overlay: null, fixed: !1 });
                                    },
                                    update: function () {
                                        var e,
                                            t = "100%";
                                        this.overlay.width(t).height("100%"),
                                            r ? ((e = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth)), i.width() > e && (t = i.width())) : i.width() > n.width() && (t = i.width()),
                                            this.overlay.width(t).height(i.height());
                                    },
                                    onReady: function (t, o) {
                                        var r = this.overlay;
                                        e(".fancybox-overlay").stop(!0, !0),
                                            r || this.create(t),
                                            t.locked && this.fixed && o.fixed && (r || (this.margin = i.height() > n.height() && e("html").css("margin-right").replace("px", "")), (o.locked = this.overlay.append(o.wrap)), (o.fixed = !1)),
                                            !0 === t.showEarly && this.beforeShow.apply(this, arguments);
                                    },
                                    beforeShow: function (t, i) {
                                        var o, r;
                                        i.locked &&
                                            (!1 !== this.margin &&
                                                (e("*")
                                                    .filter(function () {
                                                        return "fixed" === e(this).css("position") && !e(this).hasClass("fancybox-overlay") && !e(this).hasClass("fancybox-wrap");
                                                    })
                                                    .addClass("fancybox-margin"),
                                                this.el.addClass("fancybox-margin")),
                                            (o = n.scrollTop()),
                                            (r = n.scrollLeft()),
                                            this.el.addClass("fancybox-lock"),
                                            n.scrollTop(o).scrollLeft(r)),
                                            this.open(t);
                                    },
                                    onUpdate: function () {
                                        this.fixed || this.update();
                                    },
                                    afterClose: function (t) {
                                        this.overlay && !o.coming && this.overlay.fadeOut(t.speedOut, e.proxy(this.close, this));
                                    },
                                }),
                                (o.helpers.title = {
                                    defaults: { type: "float", position: "bottom" },
                                    beforeShow: function (t) {
                                        var n,
                                            i,
                                            a = o.current,
                                            s = a.title,
                                            c = t.type;
                                        if ((e.isFunction(s) && (s = s.call(a.element, a)), l(s) && "" !== e.trim(s))) {
                                            switch (((n = e('<div class="fancybox-title fancybox-title-' + c + '-wrap">' + s + "</div>")), c)) {
                                                case "inside":
                                                    i = o.skin;
                                                    break;
                                                case "outside":
                                                    i = o.wrap;
                                                    break;
                                                case "over":
                                                    i = o.inner;
                                                    break;
                                                default:
                                                    (i = o.skin), n.appendTo("body"), r && n.width(n.width()), n.wrapInner('<span class="child"></span>'), (o.current.margin[2] += Math.abs(d(n.css("margin-bottom"))));
                                            }
                                            n["top" === t.position ? "prependTo" : "appendTo"](i);
                                        }
                                    },
                                }),
                                (e.fn.fancybox = function (t) {
                                    var n,
                                        r = e(this),
                                        a = this.selector || "",
                                        s = function (i) {
                                            var s,
                                                c,
                                                l = e(this).blur(),
                                                u = n;
                                            i.ctrlKey ||
                                                i.altKey ||
                                                i.shiftKey ||
                                                i.metaKey ||
                                                l.is(".fancybox-wrap") ||
                                                ((s = t.groupAttr || "data-fancybox-group"),
                                                (c = l.attr(s)) || ((s = "rel"), (c = l.get(0)[s])),
                                                c && "" !== c && "nofollow" !== c && (u = (l = (l = a.length ? e(a) : r).filter("[" + s + '="' + c + '"]')).index(this)),
                                                (t.index = u),
                                                !1 !== o.open(l, t) && i.preventDefault());
                                        };
                                    return (
                                        (n = (t = t || {}).index || 0),
                                        a && !1 !== t.live ? i.undelegate(a, "click.fb-start").delegate(a + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", s) : r.unbind("click.fb-start").bind("click.fb-start", s),
                                        this.filter("[data-fancybox-start=1]").trigger("click"),
                                        this
                                    );
                                }),
                                i.ready(function () {
                                    var n, i, r, a;
                                    void 0 === e.scrollbarWidth &&
                                        (e.scrollbarWidth = function () {
                                            var t = e('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                                                n = t.children(),
                                                i = n.innerWidth() - n.height(99).innerWidth();
                                            return t.remove(), i;
                                        }),
                                        void 0 === e.support.fixedPosition &&
                                            (e.support.fixedPosition = ((a = 20 === (r = e('<div style="position:fixed;top:20px;"></div>').appendTo("body"))[0].offsetTop || 15 === r[0].offsetTop), r.remove(), a)),
                                        e.extend(o.defaults, { scrollbarWidth: e.scrollbarWidth(), fixed: e.support.fixedPosition, parent: e("body") }),
                                        (n = e(window).width()),
                                        t.addClass("fancybox-lock-test"),
                                        (i = e(window).width()),
                                        t.removeClass("fancybox-lock-test"),
                                        e("<style type='text/css'>.fancybox-margin{margin-right:" + (i - n) + "px;}</style>").appendTo("head");
                                });
                        }.apply(t, i)) || (e.exports = o);
            },
            737: function (e, t, n) {
                var i, o;
                (i = [n(9755)]),
                    void 0 ===
                        (o = function (e) {
                            "use strict";
                            (e.fn.fitVids = function (t) {
                                var n = { customSelector: null, ignore: null };
                                if (!document.getElementById("fit-vids-style")) {
                                    var i = document.head || document.getElementsByTagName("head")[0],
                                        o = document.createElement("div");
                                    (o.innerHTML =
                                        '<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>'),
                                        i.appendChild(o.childNodes[1]);
                                }
                                return (
                                    t && e.extend(n, t),
                                    this.each(function () {
                                        var t = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
                                        n.customSelector && t.push(n.customSelector);
                                        var i = ".fitvidsignore";
                                        n.ignore && (i = i + ", " + n.ignore);
                                        var o = e(this).find(t.join(","));
                                        (o = (o = o.not("object object")).not(i)).each(function () {
                                            var t = e(this);
                                            if (!(t.parents(i).length > 0 || ("embed" === this.tagName.toLowerCase() && t.parent("object").length) || t.parent(".fluid-width-video-wrapper").length)) {
                                                t.css("height") || t.css("width") || (!isNaN(t.attr("height")) && !isNaN(t.attr("width"))) || (t.attr("height", 9), t.attr("width", 16));
                                                var n =
                                                    ("object" === this.tagName.toLowerCase() || (t.attr("height") && !isNaN(parseInt(t.attr("height"), 10))) ? parseInt(t.attr("height"), 10) : t.height()) /
                                                    (isNaN(parseInt(t.attr("width"), 10)) ? t.width() : parseInt(t.attr("width"), 10));
                                                if (!t.attr("name")) {
                                                    var o = "fitvid" + e.fn.fitVids._count;
                                                    t.attr("name", o), e.fn.fitVids._count++;
                                                }
                                                t
                                                    .wrap('<div class="fluid-width-video-wrapper"></div>')
                                                    .parent(".fluid-width-video-wrapper")
                                                    .css("padding-top", 100 * n + "%"),
                                                    t.removeAttr("height").removeAttr("width");
                                            }
                                        });
                                    })
                                );
                            }),
                                (e.fn.fitVids._count = 0);
                        }.apply(t, i)) || (e.exports = o);
            },
            8356: function (e, t, n) {
                var i, o, r, a, s, c, l, u, d, f, h, p, m, v, g, y, w, x, b, _, S, E, k, C, T, P, L, A, D, j, N, M, q, I, R, O, H, F, B, V, W, z, $, U, G;
                !(function (i, o) {
                    void 0 ===
                        (G = function () {
                            return (function (e, t) {
                                "use strict";
                                var n = Array.prototype.slice,
                                    i = e.console,
                                    o =
                                        void 0 === i
                                            ? function () {}
                                            : function (e) {
                                                  i.error(e);
                                              };
                                function r(i, r, s) {
                                    function c(e, t, n) {
                                        var r,
                                            a = "$()." + i + '("' + t + '")';
                                        return (
                                            e.each(function (e, c) {
                                                var l = s.data(c, i);
                                                if (l) {
                                                    var u = l[t];
                                                    if (u && "_" != t.charAt(0)) {
                                                        var d = u.apply(l, n);
                                                        r = void 0 === r ? d : r;
                                                    } else o(a + " is not a valid method");
                                                } else o(i + " not initialized. Cannot call methods, i.e. " + a);
                                            }),
                                            void 0 !== r ? r : e
                                        );
                                    }
                                    function l(e, t) {
                                        e.each(function (e, n) {
                                            var o = s.data(n, i);
                                            o ? (o.option(t), o._init()) : ((o = new r(n, t)), s.data(n, i, o));
                                        });
                                    }
                                    (s = s || t || e.jQuery) &&
                                        (r.prototype.option ||
                                            (r.prototype.option = function (e) {
                                                s.isPlainObject(e) && (this.options = s.extend(!0, this.options, e));
                                            }),
                                        (s.fn[i] = function (e) {
                                            return "string" == typeof e ? c(this, e, n.call(arguments, 1)) : (l(this, e), this);
                                        }),
                                        a(s));
                                }
                                function a(e) {
                                    !e || (e && e.bridget) || (e.bridget = r);
                                }
                                return a(t || e.jQuery), r;
                            })(i, i.jQuery);
                        }.call(t, n, t, e)) || (e.exports = G);
                })(window),
                    "undefined" != typeof window && window,
                    "function" ==
                    typeof (o = function () {
                        function e() {}
                        var t = e.prototype;
                        return (
                            (t.on = function (e, t) {
                                if (e && t) {
                                    var n = (this._events = this._events || {}),
                                        i = (n[e] = n[e] || []);
                                    return -1 == i.indexOf(t) && i.push(t), this;
                                }
                            }),
                            (t.once = function (e, t) {
                                if (e && t) {
                                    this.on(e, t);
                                    var n = (this._onceEvents = this._onceEvents || {});
                                    return ((n[e] = n[e] || {})[t] = !0), this;
                                }
                            }),
                            (t.off = function (e, t) {
                                var n = this._events && this._events[e];
                                if (n && n.length) {
                                    var i = n.indexOf(t);
                                    return -1 != i && n.splice(i, 1), this;
                                }
                            }),
                            (t.emitEvent = function (e, t) {
                                var n = this._events && this._events[e];
                                if (n && n.length) {
                                    (n = n.slice(0)), (t = t || []);
                                    for (var i = this._onceEvents && this._onceEvents[e], o = 0; o < n.length; o++) {
                                        var r = n[o];
                                        i && i[r] && (this.off(e, r), delete i[r]), r.apply(this, t);
                                    }
                                    return this;
                                }
                            }),
                            (t.allOff = function () {
                                delete this._events, delete this._onceEvents;
                            }),
                            e
                        );
                    })
                        ? ((i = o.call((r = { id: "ev-emitter/ev-emitter", exports: {}, loaded: !1 }).exports, n, r.exports, r)), (r.loaded = !0), void 0 === i && (i = r.exports))
                        : (i = o),
                    (function (e, t) {
                        "use strict";
                        void 0 !==
                            (a = function () {
                                return (function () {
                                    function e(e) {
                                        var t = parseFloat(e);
                                        return -1 == e.indexOf("%") && !isNaN(t) && t;
                                    }
                                    var t =
                                            "undefined" == typeof console
                                                ? function () {}
                                                : function (e) {
                                                      console.error(e);
                                                  },
                                        n = [
                                            "paddingLeft",
                                            "paddingRight",
                                            "paddingTop",
                                            "paddingBottom",
                                            "marginLeft",
                                            "marginRight",
                                            "marginTop",
                                            "marginBottom",
                                            "borderLeftWidth",
                                            "borderRightWidth",
                                            "borderTopWidth",
                                            "borderBottomWidth",
                                        ],
                                        i = n.length;
                                    function o(e) {
                                        var n = getComputedStyle(e);
                                        return n || t("Style returned " + n + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), n;
                                    }
                                    var r,
                                        a = !1;
                                    function s(t) {
                                        if (
                                            ((function () {
                                                if (!a) {
                                                    a = !0;
                                                    var t = document.createElement("div");
                                                    (t.style.width = "200px"), (t.style.padding = "1px 2px 3px 4px"), (t.style.borderStyle = "solid"), (t.style.borderWidth = "1px 2px 3px 4px"), (t.style.boxSizing = "border-box");
                                                    var n = document.body || document.documentElement;
                                                    n.appendChild(t);
                                                    var i = o(t);
                                                    (s.isBoxSizeOuter = r = 200 == e(i.width)), n.removeChild(t);
                                                }
                                            })(),
                                            "string" == typeof t && (t = document.querySelector(t)),
                                            t && "object" == typeof t && t.nodeType)
                                        ) {
                                            var c = o(t);
                                            if ("none" == c.display)
                                                return (function () {
                                                    for (var e = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, t = 0; t < i; t++) e[n[t]] = 0;
                                                    return e;
                                                })();
                                            var l = {};
                                            (l.width = t.offsetWidth), (l.height = t.offsetHeight);
                                            for (var u = (l.isBorderBox = "border-box" == c.boxSizing), d = 0; d < i; d++) {
                                                var f = n[d],
                                                    h = c[f],
                                                    p = parseFloat(h);
                                                l[f] = isNaN(p) ? 0 : p;
                                            }
                                            var m = l.paddingLeft + l.paddingRight,
                                                v = l.paddingTop + l.paddingBottom,
                                                g = l.marginLeft + l.marginRight,
                                                y = l.marginTop + l.marginBottom,
                                                w = l.borderLeftWidth + l.borderRightWidth,
                                                x = l.borderTopWidth + l.borderBottomWidth,
                                                b = u && r,
                                                _ = e(c.width);
                                            !1 !== _ && (l.width = _ + (b ? 0 : m + w));
                                            var S = e(c.height);
                                            return !1 !== S && (l.height = S + (b ? 0 : v + x)), (l.innerWidth = l.width - (m + w)), (l.innerHeight = l.height - (v + x)), (l.outerWidth = l.width + g), (l.outerHeight = l.height + y), l;
                                        }
                                    }
                                    return s;
                                })();
                            }.apply((s = {}), (U = []))) || (a = s);
                    })(window),
                    (function (e, t) {
                        "use strict";
                        "function" == typeof (l = t)
                            ? ((u = { id: "desandro-matches-selector/matches-selector", exports: {}, loaded: !1 }), (c = l.call(u.exports, n, u.exports, u)), (u.loaded = !0), void 0 === c && (c = u.exports))
                            : (c = l);
                    })(window, function () {
                        "use strict";
                        var e = (function () {
                            var e = window.Element.prototype;
                            if (e.matches) return "matches";
                            if (e.matchesSelector) return "matchesSelector";
                            for (var t = ["webkit", "moz", "ms", "o"], n = 0; n < t.length; n++) {
                                var i = t[n] + "MatchesSelector";
                                if (e[i]) return i;
                            }
                        })();
                        return function (t, n) {
                            return t[e](n);
                        };
                    }),
                    (function (e, t) {
                        void 0 !==
                            (d = function (t) {
                                return (function (e, t) {
                                    var n = {
                                            extend: function (e, t) {
                                                for (var n in t) e[n] = t[n];
                                                return e;
                                            },
                                            modulo: function (e, t) {
                                                return ((e % t) + t) % t;
                                            },
                                            makeArray: function (e) {
                                                var t = [];
                                                if (Array.isArray(e)) t = e;
                                                else if (e && "object" == typeof e && "number" == typeof e.length) for (var n = 0; n < e.length; n++) t.push(e[n]);
                                                else t.push(e);
                                                return t;
                                            },
                                            removeFrom: function (e, t) {
                                                var n = e.indexOf(t);
                                                -1 != n && e.splice(n, 1);
                                            },
                                            getParent: function (e, n) {
                                                for (; e.parentNode && e != document.body; ) if (((e = e.parentNode), t(e, n))) return e;
                                            },
                                            getQueryElement: function (e) {
                                                return "string" == typeof e ? document.querySelector(e) : e;
                                            },
                                            handleEvent: function (e) {
                                                var t = "on" + e.type;
                                                this[t] && this[t](e);
                                            },
                                            filterFindElements: function (e, i) {
                                                e = n.makeArray(e);
                                                var o = [];
                                                return (
                                                    e.forEach(function (e) {
                                                        if (e instanceof HTMLElement)
                                                            if (i) {
                                                                t(e, i) && o.push(e);
                                                                for (var n = e.querySelectorAll(i), r = 0; r < n.length; r++) o.push(n[r]);
                                                            } else o.push(e);
                                                    }),
                                                    o
                                                );
                                            },
                                            debounceMethod: function (e, t, n) {
                                                var i = e.prototype[t],
                                                    o = t + "Timeout";
                                                e.prototype[t] = function () {
                                                    var e = this[o];
                                                    e && clearTimeout(e);
                                                    var t = arguments,
                                                        r = this;
                                                    this[o] = setTimeout(function () {
                                                        i.apply(r, t), delete r[o];
                                                    }, n || 100);
                                                };
                                            },
                                            docReady: function (e) {
                                                var t = document.readyState;
                                                "complete" == t || "interactive" == t ? setTimeout(e) : document.addEventListener("DOMContentLoaded", e);
                                            },
                                            toDashed: function (e) {
                                                return e
                                                    .replace(/(.)([A-Z])/g, function (e, t, n) {
                                                        return t + "-" + n;
                                                    })
                                                    .toLowerCase();
                                            },
                                        },
                                        i = e.console;
                                    return (
                                        (n.htmlInit = function (t, o) {
                                            n.docReady(function () {
                                                var r = n.toDashed(o),
                                                    a = "data-" + r,
                                                    s = document.querySelectorAll("[" + a + "]"),
                                                    c = document.querySelectorAll(".js-" + r),
                                                    l = n.makeArray(s).concat(n.makeArray(c)),
                                                    u = a + "-options",
                                                    d = e.jQuery;
                                                l.forEach(function (e) {
                                                    var n,
                                                        r = e.getAttribute(a) || e.getAttribute(u);
                                                    try {
                                                        n = r && JSON.parse(r);
                                                    } catch (t) {
                                                        return void (i && i.error("Error parsing " + a + " on " + e.className + ": " + t));
                                                    }
                                                    var s = new t(e, n);
                                                    d && d.data(e, o, s);
                                                });
                                            });
                                        }),
                                        n
                                    );
                                })(e, t);
                            }.apply((f = {}), (U = [c]))) || (d = f);
                    })(window),
                    window,
                    void 0 !==
                        (h = function (e) {
                            return (function (e, t) {
                                function n(e, t) {
                                    (this.element = e), (this.parent = t), this.create();
                                }
                                var i = n.prototype;
                                return (
                                    (i.create = function () {
                                        (this.element.style.position = "absolute"), (this.x = 0), (this.shift = 0);
                                    }),
                                    (i.destroy = function () {
                                        this.element.style.position = "";
                                        var e = this.parent.originSide;
                                        this.element.style[e] = "";
                                    }),
                                    (i.getSize = function () {
                                        this.size = t(this.element);
                                    }),
                                    (i.setPosition = function (e) {
                                        (this.x = e), this.updateTarget(), this.renderPosition(e);
                                    }),
                                    (i.updateTarget = i.setDefaultTarget = function () {
                                        var e = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
                                        this.target = this.x + this.size[e] + this.size.width * this.parent.cellAlign;
                                    }),
                                    (i.renderPosition = function (e) {
                                        var t = this.parent.originSide;
                                        this.element.style[t] = this.parent.getPositionValue(e);
                                    }),
                                    (i.wrapShift = function (e) {
                                        (this.shift = e), this.renderPosition(this.x + this.parent.slideableWidth * e);
                                    }),
                                    (i.remove = function () {
                                        this.element.parentNode.removeChild(this.element);
                                    }),
                                    n
                                );
                            })(0, e);
                        }.apply((p = {}), (U = [a]))) || (h = p),
                    window,
                    "function" ==
                    typeof (v = function () {
                        "use strict";
                        function e(e) {
                            (this.parent = e), (this.isOriginLeft = "left" == e.originSide), (this.cells = []), (this.outerWidth = 0), (this.height = 0);
                        }
                        var t = e.prototype;
                        return (
                            (t.addCell = function (e) {
                                if ((this.cells.push(e), (this.outerWidth += e.size.outerWidth), (this.height = Math.max(e.size.outerHeight, this.height)), 1 == this.cells.length)) {
                                    this.x = e.x;
                                    var t = this.isOriginLeft ? "marginLeft" : "marginRight";
                                    this.firstMargin = e.size[t];
                                }
                            }),
                            (t.updateTarget = function () {
                                var e = this.isOriginLeft ? "marginRight" : "marginLeft",
                                    t = this.getLastCell(),
                                    n = t ? t.size[e] : 0,
                                    i = this.outerWidth - (this.firstMargin + n);
                                this.target = this.x + this.firstMargin + i * this.parent.cellAlign;
                            }),
                            (t.getLastCell = function () {
                                return this.cells[this.cells.length - 1];
                            }),
                            (t.select = function () {
                                this.changeSelectedClass("add");
                            }),
                            (t.unselect = function () {
                                this.changeSelectedClass("remove");
                            }),
                            (t.changeSelectedClass = function (e) {
                                this.cells.forEach(function (t) {
                                    t.element.classList[e]("is-selected");
                                });
                            }),
                            (t.getCellElements = function () {
                                return this.cells.map(function (e) {
                                    return e.element;
                                });
                            }),
                            e
                        );
                    })
                        ? ((m = v.call((g = { id: "flickity/js/slide", exports: {}, loaded: !1 }).exports, n, g.exports, g)), (g.loaded = !0), void 0 === m && (m = g.exports))
                        : (m = v),
                    (function (e, t) {
                        void 0 !==
                            (y = function (t) {
                                return (function (e, t) {
                                    var n = e.requestAnimationFrame || e.webkitRequestAnimationFrame,
                                        i = 0;
                                    n ||
                                        (n = function (e) {
                                            var t = new Date().getTime(),
                                                n = Math.max(0, 16 - (t - i)),
                                                o = setTimeout(e, n);
                                            return (i = t + n), o;
                                        });
                                    var o = {
                                            startAnimation: function () {
                                                this.isAnimating || ((this.isAnimating = !0), (this.restingFrames = 0), this.animate());
                                            },
                                            animate: function () {
                                                this.applyDragForce(), this.applySelectedAttraction();
                                                var e = this.x;
                                                if ((this.integratePhysics(), this.positionSlider(), this.settle(e), this.isAnimating)) {
                                                    var t = this;
                                                    n(function () {
                                                        t.animate();
                                                    });
                                                }
                                            },
                                        },
                                        r = "string" == typeof document.documentElement.style.transform ? "transform" : "WebkitTransform";
                                    return (
                                        (o.positionSlider = function () {
                                            var e = this.x;
                                            this.options.wrapAround && this.cells.length > 1 && ((e = t.modulo(e, this.slideableWidth)), (e -= this.slideableWidth), this.shiftWrapCells(e)),
                                                (e += this.cursorPosition),
                                                (e = this.options.rightToLeft && r ? -e : e);
                                            var n = this.getPositionValue(e);
                                            this.slider.style[r] = this.isAnimating ? "translate3d(" + n + ",0,0)" : "translateX(" + n + ")";
                                            var i = this.slides[0];
                                            if (i) {
                                                var o = -this.x - i.target,
                                                    a = o / this.slidesWidth;
                                                this.dispatchEvent("scroll", null, [a, o]);
                                            }
                                        }),
                                        (o.positionSliderAtSelected = function () {
                                            this.cells.length && ((this.x = -this.selectedSlide.target), this.positionSlider());
                                        }),
                                        (o.getPositionValue = function (e) {
                                            return this.options.percentPosition ? 0.01 * Math.round((e / this.size.innerWidth) * 1e4) + "%" : Math.round(e) + "px";
                                        }),
                                        (o.settle = function (e) {
                                            this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * e) || this.restingFrames++,
                                                this.restingFrames > 2 && ((this.isAnimating = !1), delete this.isFreeScrolling, this.positionSlider(), this.dispatchEvent("settle"));
                                        }),
                                        (o.shiftWrapCells = function (e) {
                                            var t = this.cursorPosition + e;
                                            this._shiftCells(this.beforeShiftCells, t, -1);
                                            var n = this.size.innerWidth - (e + this.slideableWidth + this.cursorPosition);
                                            this._shiftCells(this.afterShiftCells, n, 1);
                                        }),
                                        (o._shiftCells = function (e, t, n) {
                                            for (var i = 0; i < e.length; i++) {
                                                var o = e[i],
                                                    r = t > 0 ? n : 0;
                                                o.wrapShift(r), (t -= o.size.outerWidth);
                                            }
                                        }),
                                        (o._unshiftCells = function (e) {
                                            if (e && e.length) for (var t = 0; t < e.length; t++) e[t].wrapShift(0);
                                        }),
                                        (o.integratePhysics = function () {
                                            (this.x += this.velocity), (this.velocity *= this.getFrictionFactor());
                                        }),
                                        (o.applyForce = function (e) {
                                            this.velocity += e;
                                        }),
                                        (o.getFrictionFactor = function () {
                                            return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"];
                                        }),
                                        (o.getRestingPosition = function () {
                                            return this.x + this.velocity / (1 - this.getFrictionFactor());
                                        }),
                                        (o.applyDragForce = function () {
                                            if (this.isPointerDown) {
                                                var e = this.dragX - this.x - this.velocity;
                                                this.applyForce(e);
                                            }
                                        }),
                                        (o.applySelectedAttraction = function () {
                                            if (!this.isPointerDown && !this.isFreeScrolling && this.cells.length) {
                                                var e = (-1 * this.selectedSlide.target - this.x) * this.options.selectedAttraction;
                                                this.applyForce(e);
                                            }
                                        }),
                                        o
                                    );
                                })(e, t);
                            }.apply((w = {}), (U = [d]))) || (y = w);
                    })(window),
                    (function (e, t) {
                        void 0 !==
                            (x = function (t, n, i, o, r, a) {
                                return (function (e, t, n, i, o, r, a) {
                                    var s = e.jQuery,
                                        c = e.getComputedStyle,
                                        l = e.console;
                                    function u(e, t) {
                                        for (e = i.makeArray(e); e.length; ) t.appendChild(e.shift());
                                    }
                                    var d = 0,
                                        f = {};
                                    function h(e, t) {
                                        var n = i.getQueryElement(e);
                                        if (n) {
                                            if (((this.element = n), this.element.flickityGUID)) {
                                                var o = f[this.element.flickityGUID];
                                                return o.option(t), o;
                                            }
                                            s && (this.$element = s(this.element)), (this.options = i.extend({}, this.constructor.defaults)), this.option(t), this._create();
                                        } else l && l.error("Bad element for Flickity: " + (n || e));
                                    }
                                    (h.defaults = {
                                        accessibility: !0,
                                        cellAlign: "center",
                                        freeScrollFriction: 0.075,
                                        friction: 0.28,
                                        namespaceJQueryEvents: !0,
                                        percentPosition: !0,
                                        resize: !0,
                                        selectedAttraction: 0.025,
                                        setGallerySize: !0,
                                    }),
                                        (h.createMethods = []);
                                    var p = h.prototype;
                                    i.extend(p, t.prototype),
                                        (p._create = function () {
                                            var t = (this.guid = ++d);
                                            (this.element.flickityGUID = t),
                                                (f[t] = this),
                                                (this.selectedIndex = 0),
                                                (this.restingFrames = 0),
                                                (this.x = 0),
                                                (this.velocity = 0),
                                                (this.originSide = this.options.rightToLeft ? "right" : "left"),
                                                (this.viewport = document.createElement("div")),
                                                (this.viewport.className = "flickity-viewport"),
                                                this._createSlider(),
                                                (this.options.resize || this.options.watchCSS) && e.addEventListener("resize", this),
                                                h.createMethods.forEach(function (e) {
                                                    this[e]();
                                                }, this),
                                                this.options.watchCSS ? this.watchCSS() : this.activate();
                                        }),
                                        (p.option = function (e) {
                                            i.extend(this.options, e);
                                        }),
                                        (p.activate = function () {
                                            if (!this.isActive) {
                                                var e;
                                                (this.isActive = !0),
                                                    this.element.classList.add("flickity-enabled"),
                                                    this.options.rightToLeft && this.element.classList.add("flickity-rtl"),
                                                    this.getSize(),
                                                    u(this._filterFindCellElements(this.element.children), this.slider),
                                                    this.viewport.appendChild(this.slider),
                                                    this.element.appendChild(this.viewport),
                                                    this.reloadCells(),
                                                    this.options.accessibility && ((this.element.tabIndex = 0), this.element.addEventListener("keydown", this)),
                                                    this.emitEvent("activate");
                                                var t = this.options.initialIndex;
                                                (e = this.isInitActivated ? this.selectedIndex : void 0 !== t && this.cells[t] ? t : 0), this.select(e, !1, !0), (this.isInitActivated = !0);
                                            }
                                        }),
                                        (p._createSlider = function () {
                                            var e = document.createElement("div");
                                            (e.className = "flickity-slider"), (e.style[this.originSide] = 0), (this.slider = e);
                                        }),
                                        (p._filterFindCellElements = function (e) {
                                            return i.filterFindElements(e, this.options.cellSelector);
                                        }),
                                        (p.reloadCells = function () {
                                            (this.cells = this._makeCells(this.slider.children)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize();
                                        }),
                                        (p._makeCells = function (e) {
                                            return this._filterFindCellElements(e).map(function (e) {
                                                return new o(e, this);
                                            }, this);
                                        }),
                                        (p.getLastCell = function () {
                                            return this.cells[this.cells.length - 1];
                                        }),
                                        (p.getLastSlide = function () {
                                            return this.slides[this.slides.length - 1];
                                        }),
                                        (p.positionCells = function () {
                                            this._sizeCells(this.cells), this._positionCells(0);
                                        }),
                                        (p._positionCells = function (e) {
                                            (e = e || 0), (this.maxCellHeight = (e && this.maxCellHeight) || 0);
                                            var t = 0;
                                            if (e > 0) {
                                                var n = this.cells[e - 1];
                                                t = n.x + n.size.outerWidth;
                                            }
                                            for (var i = this.cells.length, o = e; o < i; o++) {
                                                var r = this.cells[o];
                                                r.setPosition(t), (t += r.size.outerWidth), (this.maxCellHeight = Math.max(r.size.outerHeight, this.maxCellHeight));
                                            }
                                            (this.slideableWidth = t), this.updateSlides(), this._containSlides(), (this.slidesWidth = i ? this.getLastSlide().target - this.slides[0].target : 0);
                                        }),
                                        (p._sizeCells = function (e) {
                                            e.forEach(function (e) {
                                                e.getSize();
                                            });
                                        }),
                                        (p.updateSlides = function () {
                                            if (((this.slides = []), this.cells.length)) {
                                                var e = new r(this);
                                                this.slides.push(e);
                                                var t = "left" == this.originSide ? "marginRight" : "marginLeft",
                                                    n = this._getCanCellFit();
                                                this.cells.forEach(function (i, o) {
                                                    if (e.cells.length) {
                                                        var a = e.outerWidth - e.firstMargin + (i.size.outerWidth - i.size[t]);
                                                        n.call(this, o, a) || (e.updateTarget(), (e = new r(this)), this.slides.push(e)), e.addCell(i);
                                                    } else e.addCell(i);
                                                }, this),
                                                    e.updateTarget(),
                                                    this.updateSelectedSlide();
                                            }
                                        }),
                                        (p._getCanCellFit = function () {
                                            var e = this.options.groupCells;
                                            if (!e)
                                                return function () {
                                                    return !1;
                                                };
                                            if ("number" == typeof e) {
                                                var t = parseInt(e, 10);
                                                return function (e) {
                                                    return e % t != 0;
                                                };
                                            }
                                            var n = "string" == typeof e && e.match(/^(\d+)%$/),
                                                i = n ? parseInt(n[1], 10) / 100 : 1;
                                            return function (e, t) {
                                                return t <= (this.size.innerWidth + 1) * i;
                                            };
                                        }),
                                        (p._init = p.reposition = function () {
                                            this.positionCells(), this.positionSliderAtSelected();
                                        }),
                                        (p.getSize = function () {
                                            (this.size = n(this.element)), this.setCellAlign(), (this.cursorPosition = this.size.innerWidth * this.cellAlign);
                                        });
                                    var m = { center: { left: 0.5, right: 0.5 }, left: { left: 0, right: 1 }, right: { right: 0, left: 1 } };
                                    return (
                                        (p.setCellAlign = function () {
                                            var e = m[this.options.cellAlign];
                                            this.cellAlign = e ? e[this.originSide] : this.options.cellAlign;
                                        }),
                                        (p.setGallerySize = function () {
                                            if (this.options.setGallerySize) {
                                                var e = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
                                                this.viewport.style.height = e + "px";
                                            }
                                        }),
                                        (p._getWrapShiftCells = function () {
                                            if (this.options.wrapAround) {
                                                this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells);
                                                var e = this.cursorPosition,
                                                    t = this.cells.length - 1;
                                                (this.beforeShiftCells = this._getGapCells(e, t, -1)), (e = this.size.innerWidth - this.cursorPosition), (this.afterShiftCells = this._getGapCells(e, 0, 1));
                                            }
                                        }),
                                        (p._getGapCells = function (e, t, n) {
                                            for (var i = []; e > 0; ) {
                                                var o = this.cells[t];
                                                if (!o) break;
                                                i.push(o), (t += n), (e -= o.size.outerWidth);
                                            }
                                            return i;
                                        }),
                                        (p._containSlides = function () {
                                            if (this.options.contain && !this.options.wrapAround && this.cells.length) {
                                                var e = this.options.rightToLeft,
                                                    t = e ? "marginRight" : "marginLeft",
                                                    n = e ? "marginLeft" : "marginRight",
                                                    i = this.slideableWidth - this.getLastCell().size[n],
                                                    o = i < this.size.innerWidth,
                                                    r = this.cursorPosition + this.cells[0].size[t],
                                                    a = i - this.size.innerWidth * (1 - this.cellAlign);
                                                this.slides.forEach(function (e) {
                                                    o ? (e.target = i * this.cellAlign) : ((e.target = Math.max(e.target, r)), (e.target = Math.min(e.target, a)));
                                                }, this);
                                            }
                                        }),
                                        (p.dispatchEvent = function (e, t, n) {
                                            var i = t ? [t].concat(n) : n;
                                            if ((this.emitEvent(e, i), s && this.$element)) {
                                                var o = (e += this.options.namespaceJQueryEvents ? ".flickity" : "");
                                                if (t) {
                                                    var r = s.Event(t);
                                                    (r.type = e), (o = r);
                                                }
                                                this.$element.trigger(o, n);
                                            }
                                        }),
                                        (p.select = function (e, t, n) {
                                            this.isActive &&
                                                ((e = parseInt(e, 10)),
                                                this._wrapSelect(e),
                                                (this.options.wrapAround || t) && (e = i.modulo(e, this.slides.length)),
                                                this.slides[e] &&
                                                    ((this.selectedIndex = e),
                                                    this.updateSelectedSlide(),
                                                    n ? this.positionSliderAtSelected() : this.startAnimation(),
                                                    this.options.adaptiveHeight && this.setGallerySize(),
                                                    this.dispatchEvent("select"),
                                                    this.dispatchEvent("cellSelect")));
                                        }),
                                        (p._wrapSelect = function (e) {
                                            var t = this.slides.length;
                                            if (!(this.options.wrapAround && t > 1)) return e;
                                            var n = i.modulo(e, t),
                                                o = Math.abs(n - this.selectedIndex),
                                                r = Math.abs(n + t - this.selectedIndex),
                                                a = Math.abs(n - t - this.selectedIndex);
                                            !this.isDragSelect && r < o ? (e += t) : !this.isDragSelect && a < o && (e -= t), e < 0 ? (this.x -= this.slideableWidth) : e >= t && (this.x += this.slideableWidth);
                                        }),
                                        (p.previous = function (e, t) {
                                            this.select(this.selectedIndex - 1, e, t);
                                        }),
                                        (p.next = function (e, t) {
                                            this.select(this.selectedIndex + 1, e, t);
                                        }),
                                        (p.updateSelectedSlide = function () {
                                            var e = this.slides[this.selectedIndex];
                                            e &&
                                                (this.unselectSelectedSlide(),
                                                (this.selectedSlide = e),
                                                e.select(),
                                                (this.selectedCells = e.cells),
                                                (this.selectedElements = e.getCellElements()),
                                                (this.selectedCell = e.cells[0]),
                                                (this.selectedElement = this.selectedElements[0]));
                                        }),
                                        (p.unselectSelectedSlide = function () {
                                            this.selectedSlide && this.selectedSlide.unselect();
                                        }),
                                        (p.selectCell = function (e, t, n) {
                                            var i;
                                            "number" == typeof e ? (i = this.cells[e]) : ("string" == typeof e && (e = this.element.querySelector(e)), (i = this.getCell(e)));
                                            for (var o = 0; i && o < this.slides.length; o++) if (-1 != this.slides[o].cells.indexOf(i)) return void this.select(o, t, n);
                                        }),
                                        (p.getCell = function (e) {
                                            for (var t = 0; t < this.cells.length; t++) {
                                                var n = this.cells[t];
                                                if (n.element == e) return n;
                                            }
                                        }),
                                        (p.getCells = function (e) {
                                            e = i.makeArray(e);
                                            var t = [];
                                            return (
                                                e.forEach(function (e) {
                                                    var n = this.getCell(e);
                                                    n && t.push(n);
                                                }, this),
                                                t
                                            );
                                        }),
                                        (p.getCellElements = function () {
                                            return this.cells.map(function (e) {
                                                return e.element;
                                            });
                                        }),
                                        (p.getParentCell = function (e) {
                                            return this.getCell(e) || ((e = i.getParent(e, ".flickity-slider > *")), this.getCell(e));
                                        }),
                                        (p.getAdjacentCellElements = function (e, t) {
                                            if (!e) return this.selectedSlide.getCellElements();
                                            t = void 0 === t ? this.selectedIndex : t;
                                            var n = this.slides.length;
                                            if (1 + 2 * e >= n) return this.getCellElements();
                                            for (var o = [], r = t - e; r <= t + e; r++) {
                                                var a = this.options.wrapAround ? i.modulo(r, n) : r,
                                                    s = this.slides[a];
                                                s && (o = o.concat(s.getCellElements()));
                                            }
                                            return o;
                                        }),
                                        (p.uiChange = function () {
                                            this.emitEvent("uiChange");
                                        }),
                                        (p.childUIPointerDown = function (e) {
                                            this.emitEvent("childUIPointerDown", [e]);
                                        }),
                                        (p.onresize = function () {
                                            this.watchCSS(), this.resize();
                                        }),
                                        i.debounceMethod(h, "onresize", 150),
                                        (p.resize = function () {
                                            if (this.isActive) {
                                                this.getSize(), this.options.wrapAround && (this.x = i.modulo(this.x, this.slideableWidth)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("resize");
                                                var e = this.selectedElements && this.selectedElements[0];
                                                this.selectCell(e, !1, !0);
                                            }
                                        }),
                                        (p.watchCSS = function () {
                                            this.options.watchCSS && (-1 != c(this.element, ":after").content.indexOf("flickity") ? this.activate() : this.deactivate());
                                        }),
                                        (p.onkeydown = function (e) {
                                            if (this.options.accessibility && (!document.activeElement || document.activeElement == this.element))
                                                if (37 == e.keyCode) {
                                                    var t = this.options.rightToLeft ? "next" : "previous";
                                                    this.uiChange(), this[t]();
                                                } else if (39 == e.keyCode) {
                                                    var n = this.options.rightToLeft ? "previous" : "next";
                                                    this.uiChange(), this[n]();
                                                }
                                        }),
                                        (p.deactivate = function () {
                                            this.isActive &&
                                                (this.element.classList.remove("flickity-enabled"),
                                                this.element.classList.remove("flickity-rtl"),
                                                this.cells.forEach(function (e) {
                                                    e.destroy();
                                                }),
                                                this.unselectSelectedSlide(),
                                                this.element.removeChild(this.viewport),
                                                u(this.slider.children, this.element),
                                                this.options.accessibility && (this.element.removeAttribute("tabIndex"), this.element.removeEventListener("keydown", this)),
                                                (this.isActive = !1),
                                                this.emitEvent("deactivate"));
                                        }),
                                        (p.destroy = function () {
                                            this.deactivate(),
                                                e.removeEventListener("resize", this),
                                                this.emitEvent("destroy"),
                                                s && this.$element && s.removeData(this.element, "flickity"),
                                                delete this.element.flickityGUID,
                                                delete f[this.guid];
                                        }),
                                        i.extend(p, a),
                                        (h.data = function (e) {
                                            var t = (e = i.getQueryElement(e)) && e.flickityGUID;
                                            return t && f[t];
                                        }),
                                        i.htmlInit(h, "flickity"),
                                        s && s.bridget && s.bridget("flickity", h),
                                        (h.setJQuery = function (e) {
                                            s = e;
                                        }),
                                        (h.Cell = o),
                                        h
                                    );
                                })(e, t, n, i, o, r, a);
                            }.apply((b = {}), (U = [i, a, d, h, m, y]))) || (x = b);
                    })(window),
                    (function (e, t) {
                        void 0 !==
                            (_ = function (t) {
                                return (function (e, t) {
                                    function n() {}
                                    var i = (n.prototype = Object.create(t.prototype));
                                    (i.bindStartEvent = function (e) {
                                        this._bindStartEvent(e, !0);
                                    }),
                                        (i.unbindStartEvent = function (e) {
                                            this._bindStartEvent(e, !1);
                                        }),
                                        (i._bindStartEvent = function (t, n) {
                                            var i = (n = void 0 === n || !!n) ? "addEventListener" : "removeEventListener";
                                            e.PointerEvent ? t[i]("pointerdown", this) : (t[i]("mousedown", this), t[i]("touchstart", this));
                                        }),
                                        (i.handleEvent = function (e) {
                                            var t = "on" + e.type;
                                            this[t] && this[t](e);
                                        }),
                                        (i.getTouch = function (e) {
                                            for (var t = 0; t < e.length; t++) {
                                                var n = e[t];
                                                if (n.identifier == this.pointerIdentifier) return n;
                                            }
                                        }),
                                        (i.onmousedown = function (e) {
                                            var t = e.button;
                                            (t && 0 !== t && 1 !== t) || this._pointerDown(e, e);
                                        }),
                                        (i.ontouchstart = function (e) {
                                            this._pointerDown(e, e.changedTouches[0]);
                                        }),
                                        (i.onpointerdown = function (e) {
                                            this._pointerDown(e, e);
                                        }),
                                        (i._pointerDown = function (e, t) {
                                            this.isPointerDown || ((this.isPointerDown = !0), (this.pointerIdentifier = void 0 !== t.pointerId ? t.pointerId : t.identifier), this.pointerDown(e, t));
                                        }),
                                        (i.pointerDown = function (e, t) {
                                            this._bindPostStartEvents(e), this.emitEvent("pointerDown", [e, t]);
                                        });
                                    var o = { mousedown: ["mousemove", "mouseup"], touchstart: ["touchmove", "touchend", "touchcancel"], pointerdown: ["pointermove", "pointerup", "pointercancel"] };
                                    return (
                                        (i._bindPostStartEvents = function (t) {
                                            if (t) {
                                                var n = o[t.type];
                                                n.forEach(function (t) {
                                                    e.addEventListener(t, this);
                                                }, this),
                                                    (this._boundPointerEvents = n);
                                            }
                                        }),
                                        (i._unbindPostStartEvents = function () {
                                            this._boundPointerEvents &&
                                                (this._boundPointerEvents.forEach(function (t) {
                                                    e.removeEventListener(t, this);
                                                }, this),
                                                delete this._boundPointerEvents);
                                        }),
                                        (i.onmousemove = function (e) {
                                            this._pointerMove(e, e);
                                        }),
                                        (i.onpointermove = function (e) {
                                            e.pointerId == this.pointerIdentifier && this._pointerMove(e, e);
                                        }),
                                        (i.ontouchmove = function (e) {
                                            var t = this.getTouch(e.changedTouches);
                                            t && this._pointerMove(e, t);
                                        }),
                                        (i._pointerMove = function (e, t) {
                                            this.pointerMove(e, t);
                                        }),
                                        (i.pointerMove = function (e, t) {
                                            this.emitEvent("pointerMove", [e, t]);
                                        }),
                                        (i.onmouseup = function (e) {
                                            this._pointerUp(e, e);
                                        }),
                                        (i.onpointerup = function (e) {
                                            e.pointerId == this.pointerIdentifier && this._pointerUp(e, e);
                                        }),
                                        (i.ontouchend = function (e) {
                                            var t = this.getTouch(e.changedTouches);
                                            t && this._pointerUp(e, t);
                                        }),
                                        (i._pointerUp = function (e, t) {
                                            this._pointerDone(), this.pointerUp(e, t);
                                        }),
                                        (i.pointerUp = function (e, t) {
                                            this.emitEvent("pointerUp", [e, t]);
                                        }),
                                        (i._pointerDone = function () {
                                            (this.isPointerDown = !1), delete this.pointerIdentifier, this._unbindPostStartEvents(), this.pointerDone();
                                        }),
                                        (i.pointerDone = function () {}),
                                        (i.onpointercancel = function (e) {
                                            e.pointerId == this.pointerIdentifier && this._pointerCancel(e, e);
                                        }),
                                        (i.ontouchcancel = function (e) {
                                            var t = this.getTouch(e.changedTouches);
                                            t && this._pointerCancel(e, t);
                                        }),
                                        (i._pointerCancel = function (e, t) {
                                            this._pointerDone(), this.pointerCancel(e, t);
                                        }),
                                        (i.pointerCancel = function (e, t) {
                                            this.emitEvent("pointerCancel", [e, t]);
                                        }),
                                        (n.getPointerPoint = function (e) {
                                            return { x: e.pageX, y: e.pageY };
                                        }),
                                        n
                                    );
                                })(e, t);
                            }.apply((S = {}), (U = [i]))) || (_ = S);
                    })(window),
                    (function (e, t) {
                        void 0 !==
                            (E = function (t) {
                                return (function (e, t) {
                                    function n() {}
                                    var i = (n.prototype = Object.create(t.prototype));
                                    return (
                                        (i.bindHandles = function () {
                                            this._bindHandles(!0);
                                        }),
                                        (i.unbindHandles = function () {
                                            this._bindHandles(!1);
                                        }),
                                        (i._bindHandles = function (t) {
                                            for (var n = (t = void 0 === t || !!t) ? "addEventListener" : "removeEventListener", i = 0; i < this.handles.length; i++) {
                                                var o = this.handles[i];
                                                this._bindStartEvent(o, t), o[n]("click", this), e.PointerEvent && (o.style.touchAction = t ? this._touchActionValue : "");
                                            }
                                        }),
                                        (i._touchActionValue = "none"),
                                        (i.pointerDown = function (e, t) {
                                            if ("INPUT" == e.target.nodeName && "range" == e.target.type) return (this.isPointerDown = !1), void delete this.pointerIdentifier;
                                            this._dragPointerDown(e, t);
                                            var n = document.activeElement;
                                            n && n.blur && n.blur(), this._bindPostStartEvents(e), this.emitEvent("pointerDown", [e, t]);
                                        }),
                                        (i._dragPointerDown = function (e, n) {
                                            (this.pointerDownPoint = t.getPointerPoint(n)), this.canPreventDefaultOnPointerDown(e, n) && e.preventDefault();
                                        }),
                                        (i.canPreventDefaultOnPointerDown = function (e) {
                                            return "SELECT" != e.target.nodeName;
                                        }),
                                        (i.pointerMove = function (e, t) {
                                            var n = this._dragPointerMove(e, t);
                                            this.emitEvent("pointerMove", [e, t, n]), this._dragMove(e, t, n);
                                        }),
                                        (i._dragPointerMove = function (e, n) {
                                            var i = t.getPointerPoint(n),
                                                o = { x: i.x - this.pointerDownPoint.x, y: i.y - this.pointerDownPoint.y };
                                            return !this.isDragging && this.hasDragStarted(o) && this._dragStart(e, n), o;
                                        }),
                                        (i.hasDragStarted = function (e) {
                                            return Math.abs(e.x) > 3 || Math.abs(e.y) > 3;
                                        }),
                                        (i.pointerUp = function (e, t) {
                                            this.emitEvent("pointerUp", [e, t]), this._dragPointerUp(e, t);
                                        }),
                                        (i._dragPointerUp = function (e, t) {
                                            this.isDragging ? this._dragEnd(e, t) : this._staticClick(e, t);
                                        }),
                                        (i._dragStart = function (e, n) {
                                            (this.isDragging = !0), (this.dragStartPoint = t.getPointerPoint(n)), (this.isPreventingClicks = !0), this.dragStart(e, n);
                                        }),
                                        (i.dragStart = function (e, t) {
                                            this.emitEvent("dragStart", [e, t]);
                                        }),
                                        (i._dragMove = function (e, t, n) {
                                            this.isDragging && this.dragMove(e, t, n);
                                        }),
                                        (i.dragMove = function (e, t, n) {
                                            e.preventDefault(), this.emitEvent("dragMove", [e, t, n]);
                                        }),
                                        (i._dragEnd = function (e, t) {
                                            (this.isDragging = !1),
                                                setTimeout(
                                                    function () {
                                                        delete this.isPreventingClicks;
                                                    }.bind(this)
                                                ),
                                                this.dragEnd(e, t);
                                        }),
                                        (i.dragEnd = function (e, t) {
                                            this.emitEvent("dragEnd", [e, t]);
                                        }),
                                        (i.onclick = function (e) {
                                            this.isPreventingClicks && e.preventDefault();
                                        }),
                                        (i._staticClick = function (e, t) {
                                            if (!this.isIgnoringMouseUp || "mouseup" != e.type) {
                                                var n = e.target.nodeName;
                                                ("INPUT" != n && "TEXTAREA" != n) || e.target.focus(),
                                                    this.staticClick(e, t),
                                                    "mouseup" != e.type &&
                                                        ((this.isIgnoringMouseUp = !0),
                                                        setTimeout(
                                                            function () {
                                                                delete this.isIgnoringMouseUp;
                                                            }.bind(this),
                                                            400
                                                        ));
                                            }
                                        }),
                                        (i.staticClick = function (e, t) {
                                            this.emitEvent("staticClick", [e, t]);
                                        }),
                                        (n.getPointerPoint = t.getPointerPoint),
                                        n
                                    );
                                })(e, t);
                            }.apply((k = {}), (U = [_]))) || (E = k);
                    })(window),
                    (function (e, t) {
                        void 0 !==
                            (C = function (t, n, i) {
                                return (function (e, t, n, i) {
                                    i.extend(t.defaults, { draggable: !0, dragThreshold: 3 }), t.createMethods.push("_createDrag");
                                    var o = t.prototype;
                                    i.extend(o, n.prototype), (o._touchActionValue = "pan-y");
                                    var r = "createTouch" in document,
                                        a = !1;
                                    (o._createDrag = function () {
                                        this.on("activate", this.bindDrag),
                                            this.on("uiChange", this._uiChangeDrag),
                                            this.on("childUIPointerDown", this._childUIPointerDownDrag),
                                            this.on("deactivate", this.unbindDrag),
                                            r && !a && (e.addEventListener("touchmove", function () {}), (a = !0));
                                    }),
                                        (o.bindDrag = function () {
                                            this.options.draggable && !this.isDragBound && (this.element.classList.add("is-draggable"), (this.handles = [this.viewport]), this.bindHandles(), (this.isDragBound = !0));
                                        }),
                                        (o.unbindDrag = function () {
                                            this.isDragBound && (this.element.classList.remove("is-draggable"), this.unbindHandles(), delete this.isDragBound);
                                        }),
                                        (o._uiChangeDrag = function () {
                                            delete this.isFreeScrolling;
                                        }),
                                        (o._childUIPointerDownDrag = function (e) {
                                            e.preventDefault(), this.pointerDownFocus(e);
                                        });
                                    var s = { TEXTAREA: !0, INPUT: !0, OPTION: !0 },
                                        c = { radio: !0, checkbox: !0, button: !0, submit: !0, image: !0, file: !0 };
                                    (o.pointerDown = function (t, n) {
                                        if (s[t.target.nodeName] && !c[t.target.type]) return (this.isPointerDown = !1), void delete this.pointerIdentifier;
                                        this._dragPointerDown(t, n);
                                        var i = document.activeElement;
                                        i && i.blur && i != this.element && i != document.body && i.blur(),
                                            this.pointerDownFocus(t),
                                            (this.dragX = this.x),
                                            this.viewport.classList.add("is-pointer-down"),
                                            this._bindPostStartEvents(t),
                                            (this.pointerDownScroll = d()),
                                            e.addEventListener("scroll", this),
                                            this.dispatchEvent("pointerDown", t, [n]);
                                    }),
                                        (o.pointerDownFocus = function (t) {
                                            var n = u(t);
                                            if (this.options.accessibility && !n) {
                                                var i = e.pageYOffset;
                                                this.element.focus(), e.pageYOffset != i && e.scrollTo(e.pageXOffset, i);
                                            }
                                        });
                                    var l = { INPUT: !0, SELECT: !0 };
                                    function u(e) {
                                        var t = "touchstart" == e.type,
                                            n = "touch" == e.pointerType,
                                            i = l[e.target.nodeName];
                                        return t || n || i;
                                    }
                                    function d() {
                                        return { x: e.pageXOffset, y: e.pageYOffset };
                                    }
                                    return (
                                        (o.canPreventDefaultOnPointerDown = function (e) {
                                            return !u(e);
                                        }),
                                        (o.hasDragStarted = function (e) {
                                            return Math.abs(e.x) > this.options.dragThreshold;
                                        }),
                                        (o.pointerUp = function (e, t) {
                                            delete this.isTouchScrolling, this.viewport.classList.remove("is-pointer-down"), this.dispatchEvent("pointerUp", e, [t]), this._dragPointerUp(e, t);
                                        }),
                                        (o.pointerDone = function () {
                                            e.removeEventListener("scroll", this), delete this.pointerDownScroll;
                                        }),
                                        (o.dragStart = function (t, n) {
                                            (this.dragStartPosition = this.x), this.startAnimation(), e.removeEventListener("scroll", this), this.dispatchEvent("dragStart", t, [n]);
                                        }),
                                        (o.pointerMove = function (e, t) {
                                            var n = this._dragPointerMove(e, t);
                                            this.dispatchEvent("pointerMove", e, [t, n]), this._dragMove(e, t, n);
                                        }),
                                        (o.dragMove = function (e, t, n) {
                                            e.preventDefault(), (this.previousDragX = this.dragX);
                                            var i = this.options.rightToLeft ? -1 : 1,
                                                o = this.dragStartPosition + n.x * i;
                                            if (!this.options.wrapAround && this.slides.length) {
                                                var r = Math.max(-this.slides[0].target, this.dragStartPosition);
                                                o = o > r ? 0.5 * (o + r) : o;
                                                var a = Math.min(-this.getLastSlide().target, this.dragStartPosition);
                                                o = o < a ? 0.5 * (o + a) : o;
                                            }
                                            (this.dragX = o), (this.dragMoveTime = new Date()), this.dispatchEvent("dragMove", e, [t, n]);
                                        }),
                                        (o.dragEnd = function (e, t) {
                                            this.options.freeScroll && (this.isFreeScrolling = !0);
                                            var n = this.dragEndRestingSelect();
                                            if (this.options.freeScroll && !this.options.wrapAround) {
                                                var i = this.getRestingPosition();
                                                this.isFreeScrolling = -i > this.slides[0].target && -i < this.getLastSlide().target;
                                            } else this.options.freeScroll || n != this.selectedIndex || (n += this.dragEndBoostSelect());
                                            delete this.previousDragX, (this.isDragSelect = this.options.wrapAround), this.select(n), delete this.isDragSelect, this.dispatchEvent("dragEnd", e, [t]);
                                        }),
                                        (o.dragEndRestingSelect = function () {
                                            var e = this.getRestingPosition(),
                                                t = Math.abs(this.getSlideDistance(-e, this.selectedIndex)),
                                                n = this._getClosestResting(e, t, 1),
                                                i = this._getClosestResting(e, t, -1);
                                            return n.distance < i.distance ? n.index : i.index;
                                        }),
                                        (o._getClosestResting = function (e, t, n) {
                                            for (
                                                var i = this.selectedIndex,
                                                    o = 1 / 0,
                                                    r =
                                                        this.options.contain && !this.options.wrapAround
                                                            ? function (e, t) {
                                                                  return e <= t;
                                                              }
                                                            : function (e, t) {
                                                                  return e < t;
                                                              };
                                                r(t, o) && ((i += n), (o = t), null !== (t = this.getSlideDistance(-e, i)));

                                            )
                                                t = Math.abs(t);
                                            return { distance: o, index: i - n };
                                        }),
                                        (o.getSlideDistance = function (e, t) {
                                            var n = this.slides.length,
                                                o = this.options.wrapAround && n > 1,
                                                r = o ? i.modulo(t, n) : t,
                                                a = this.slides[r];
                                            if (!a) return null;
                                            var s = o ? this.slideableWidth * Math.floor(t / n) : 0;
                                            return e - (a.target + s);
                                        }),
                                        (o.dragEndBoostSelect = function () {
                                            if (void 0 === this.previousDragX || !this.dragMoveTime || new Date() - this.dragMoveTime > 100) return 0;
                                            var e = this.getSlideDistance(-this.dragX, this.selectedIndex),
                                                t = this.previousDragX - this.dragX;
                                            return e > 0 && t > 0 ? 1 : e < 0 && t < 0 ? -1 : 0;
                                        }),
                                        (o.staticClick = function (e, t) {
                                            var n = this.getParentCell(e.target),
                                                i = n && n.element,
                                                o = n && this.cells.indexOf(n);
                                            this.dispatchEvent("staticClick", e, [t, i, o]);
                                        }),
                                        (o.onscroll = function () {
                                            var e = d(),
                                                t = this.pointerDownScroll.x - e.x,
                                                n = this.pointerDownScroll.y - e.y;
                                            (Math.abs(t) > 3 || Math.abs(n) > 3) && this._pointerDone();
                                        }),
                                        t
                                    );
                                })(e, t, n, i);
                            }.apply((T = {}), (U = [x, E, d]))) || (C = T);
                    })(window),
                    (function (e, t) {
                        void 0 !==
                            (P = function (t) {
                                return (function (e, t) {
                                    function n(e) {
                                        this.bindTap(e);
                                    }
                                    var i = (n.prototype = Object.create(t.prototype));
                                    return (
                                        (i.bindTap = function (e) {
                                            e && (this.unbindTap(), (this.tapElement = e), this._bindStartEvent(e, !0));
                                        }),
                                        (i.unbindTap = function () {
                                            this.tapElement && (this._bindStartEvent(this.tapElement, !0), delete this.tapElement);
                                        }),
                                        (i.pointerUp = function (n, i) {
                                            if (!this.isIgnoringMouseUp || "mouseup" != n.type) {
                                                var o = t.getPointerPoint(i),
                                                    r = this.tapElement.getBoundingClientRect(),
                                                    a = e.pageXOffset,
                                                    s = e.pageYOffset;
                                                if ((o.x >= r.left + a && o.x <= r.right + a && o.y >= r.top + s && o.y <= r.bottom + s && this.emitEvent("tap", [n, i]), "mouseup" != n.type)) {
                                                    this.isIgnoringMouseUp = !0;
                                                    var c = this;
                                                    setTimeout(function () {
                                                        delete c.isIgnoringMouseUp;
                                                    }, 400);
                                                }
                                            }
                                        }),
                                        (i.destroy = function () {
                                            this.pointerDone(), this.unbindTap();
                                        }),
                                        n
                                    );
                                })(e, t);
                            }.apply((L = {}), (U = [_]))) || (P = L);
                    })(window),
                    window,
                    void 0 !==
                        (A = function (e, t, n) {
                            return (function (e, t, n, i) {
                                "use strict";
                                var o = "http://www.w3.org/2000/svg";
                                function r(e, t) {
                                    (this.direction = e), (this.parent = t), this._create();
                                }
                                (r.prototype = new n()),
                                    (r.prototype._create = function () {
                                        (this.isEnabled = !0), (this.isPrevious = -1 == this.direction);
                                        var e = this.parent.options.rightToLeft ? 1 : -1;
                                        this.isLeft = this.direction == e;
                                        var t = (this.element = document.createElement("button"));
                                        (t.className = "flickity-prev-next-button"),
                                            (t.className += this.isPrevious ? " previous" : " next"),
                                            t.setAttribute("type", "button"),
                                            this.disable(),
                                            t.setAttribute("aria-label", this.isPrevious ? "previous" : "next");
                                        var n = this.createSVG();
                                        t.appendChild(n), this.on("tap", this.onTap), this.parent.on("select", this.update.bind(this)), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent));
                                    }),
                                    (r.prototype.activate = function () {
                                        this.bindTap(this.element), this.element.addEventListener("click", this), this.parent.element.appendChild(this.element);
                                    }),
                                    (r.prototype.deactivate = function () {
                                        this.parent.element.removeChild(this.element), n.prototype.destroy.call(this), this.element.removeEventListener("click", this);
                                    }),
                                    (r.prototype.createSVG = function () {
                                        var e = document.createElementNS(o, "svg");
                                        e.setAttribute("viewBox", "0 0 100 100");
                                        var t,
                                            n = document.createElementNS(o, "path"),
                                            i =
                                                "string" == typeof (t = this.parent.options.arrowShape)
                                                    ? t
                                                    : "M " + t.x0 + ",50 L " + t.x1 + "," + (t.y1 + 50) + " L " + t.x2 + "," + (t.y2 + 50) + " L " + t.x3 + ",50  L " + t.x2 + "," + (50 - t.y2) + " L " + t.x1 + "," + (50 - t.y1) + " Z";
                                        return n.setAttribute("d", i), n.setAttribute("class", "arrow"), this.isLeft || n.setAttribute("transform", "translate(100, 100) rotate(180) "), e.appendChild(n), e;
                                    }),
                                    (r.prototype.onTap = function () {
                                        if (this.isEnabled) {
                                            this.parent.uiChange();
                                            var e = this.isPrevious ? "previous" : "next";
                                            this.parent[e]();
                                        }
                                    }),
                                    (r.prototype.handleEvent = i.handleEvent),
                                    (r.prototype.onclick = function () {
                                        var e = document.activeElement;
                                        e && e == this.element && this.onTap();
                                    }),
                                    (r.prototype.enable = function () {
                                        this.isEnabled || ((this.element.disabled = !1), (this.isEnabled = !0));
                                    }),
                                    (r.prototype.disable = function () {
                                        this.isEnabled && ((this.element.disabled = !0), (this.isEnabled = !1));
                                    }),
                                    (r.prototype.update = function () {
                                        var e = this.parent.slides;
                                        if (this.parent.options.wrapAround && e.length > 1) this.enable();
                                        else {
                                            var t = e.length ? e.length - 1 : 0,
                                                n = this.isPrevious ? 0 : t;
                                            this[this.parent.selectedIndex == n ? "disable" : "enable"]();
                                        }
                                    }),
                                    (r.prototype.destroy = function () {
                                        this.deactivate();
                                    }),
                                    i.extend(t.defaults, { prevNextButtons: !0, arrowShape: { x0: 10, x1: 60, y1: 50, x2: 70, y2: 40, x3: 30 } }),
                                    t.createMethods.push("_createPrevNextButtons");
                                var a = t.prototype;
                                return (
                                    (a._createPrevNextButtons = function () {
                                        this.options.prevNextButtons && ((this.prevButton = new r(-1, this)), (this.nextButton = new r(1, this)), this.on("activate", this.activatePrevNextButtons));
                                    }),
                                    (a.activatePrevNextButtons = function () {
                                        this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons);
                                    }),
                                    (a.deactivatePrevNextButtons = function () {
                                        this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons);
                                    }),
                                    (t.PrevNextButton = r),
                                    t
                                );
                            })(0, e, t, n);
                        }.apply((D = {}), (U = [x, P, d]))) || (A = D),
                    window,
                    void 0 !==
                        (j = function (e, t, n) {
                            return (function (e, t, n, i) {
                                function o(e) {
                                    (this.parent = e), this._create();
                                }
                                (o.prototype = new n()),
                                    (o.prototype._create = function () {
                                        (this.holder = document.createElement("ol")),
                                            (this.holder.className = "flickity-page-dots"),
                                            (this.dots = []),
                                            this.on("tap", this.onTap),
                                            this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent));
                                    }),
                                    (o.prototype.activate = function () {
                                        this.setDots(), this.bindTap(this.holder), this.parent.element.appendChild(this.holder);
                                    }),
                                    (o.prototype.deactivate = function () {
                                        this.parent.element.removeChild(this.holder), n.prototype.destroy.call(this);
                                    }),
                                    (o.prototype.setDots = function () {
                                        var e = this.parent.slides.length - this.dots.length;
                                        e > 0 ? this.addDots(e) : e < 0 && this.removeDots(-e);
                                    }),
                                    (o.prototype.addDots = function (e) {
                                        for (var t = document.createDocumentFragment(), n = []; e; ) {
                                            var i = document.createElement("li");
                                            (i.className = "dot"), t.appendChild(i), n.push(i), e--;
                                        }
                                        this.holder.appendChild(t), (this.dots = this.dots.concat(n));
                                    }),
                                    (o.prototype.removeDots = function (e) {
                                        this.dots.splice(this.dots.length - e, e).forEach(function (e) {
                                            this.holder.removeChild(e);
                                        }, this);
                                    }),
                                    (o.prototype.updateSelected = function () {
                                        this.selectedDot && (this.selectedDot.className = "dot"), this.dots.length && ((this.selectedDot = this.dots[this.parent.selectedIndex]), (this.selectedDot.className = "dot is-selected"));
                                    }),
                                    (o.prototype.onTap = function (e) {
                                        var t = e.target;
                                        if ("LI" == t.nodeName) {
                                            this.parent.uiChange();
                                            var n = this.dots.indexOf(t);
                                            this.parent.select(n);
                                        }
                                    }),
                                    (o.prototype.destroy = function () {
                                        this.deactivate();
                                    }),
                                    (t.PageDots = o),
                                    i.extend(t.defaults, { pageDots: !0 }),
                                    t.createMethods.push("_createPageDots");
                                var r = t.prototype;
                                return (
                                    (r._createPageDots = function () {
                                        this.options.pageDots &&
                                            ((this.pageDots = new o(this)),
                                            this.on("activate", this.activatePageDots),
                                            this.on("select", this.updateSelectedPageDots),
                                            this.on("cellChange", this.updatePageDots),
                                            this.on("resize", this.updatePageDots),
                                            this.on("deactivate", this.deactivatePageDots));
                                    }),
                                    (r.activatePageDots = function () {
                                        this.pageDots.activate();
                                    }),
                                    (r.updateSelectedPageDots = function () {
                                        this.pageDots.updateSelected();
                                    }),
                                    (r.updatePageDots = function () {
                                        this.pageDots.setDots();
                                    }),
                                    (r.deactivatePageDots = function () {
                                        this.pageDots.deactivate();
                                    }),
                                    (t.PageDots = o),
                                    t
                                );
                            })(0, e, t, n);
                        }.apply((N = {}), (U = [x, P, d]))) || (j = N),
                    window,
                    void 0 !==
                        (M = function (e, t, n) {
                            return (function (e, t, n) {
                                var i, o;
                                function r(e) {
                                    (this.parent = e),
                                        (this.state = "stopped"),
                                        o &&
                                            ((this.onVisibilityChange = function () {
                                                this.visibilityChange();
                                            }.bind(this)),
                                            (this.onVisibilityPlay = function () {
                                                this.visibilityPlay();
                                            }.bind(this)));
                                }
                                "hidden" in document ? ((i = "hidden"), (o = "visibilitychange")) : "webkitHidden" in document && ((i = "webkitHidden"), (o = "webkitvisibilitychange")),
                                    (r.prototype = Object.create(e.prototype)),
                                    (r.prototype.play = function () {
                                        if ("playing" != this.state) {
                                            var e = document[i];
                                            o && e ? document.addEventListener(o, this.onVisibilityPlay) : ((this.state = "playing"), o && document.addEventListener(o, this.onVisibilityChange), this.tick());
                                        }
                                    }),
                                    (r.prototype.tick = function () {
                                        if ("playing" == this.state) {
                                            var e = this.parent.options.autoPlay;
                                            e = "number" == typeof e ? e : 3e3;
                                            var t = this;
                                            this.clear(),
                                                (this.timeout = setTimeout(function () {
                                                    t.parent.next(!0), t.tick();
                                                }, e));
                                        }
                                    }),
                                    (r.prototype.stop = function () {
                                        (this.state = "stopped"), this.clear(), o && document.removeEventListener(o, this.onVisibilityChange);
                                    }),
                                    (r.prototype.clear = function () {
                                        clearTimeout(this.timeout);
                                    }),
                                    (r.prototype.pause = function () {
                                        "playing" == this.state && ((this.state = "paused"), this.clear());
                                    }),
                                    (r.prototype.unpause = function () {
                                        "paused" == this.state && this.play();
                                    }),
                                    (r.prototype.visibilityChange = function () {
                                        this[document[i] ? "pause" : "unpause"]();
                                    }),
                                    (r.prototype.visibilityPlay = function () {
                                        this.play(), document.removeEventListener(o, this.onVisibilityPlay);
                                    }),
                                    t.extend(n.defaults, { pauseAutoPlayOnHover: !0 }),
                                    n.createMethods.push("_createPlayer");
                                var a = n.prototype;
                                return (
                                    (a._createPlayer = function () {
                                        (this.player = new r(this)), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer);
                                    }),
                                    (a.activatePlayer = function () {
                                        this.options.autoPlay && (this.player.play(), this.element.addEventListener("mouseenter", this));
                                    }),
                                    (a.playPlayer = function () {
                                        this.player.play();
                                    }),
                                    (a.stopPlayer = function () {
                                        this.player.stop();
                                    }),
                                    (a.pausePlayer = function () {
                                        this.player.pause();
                                    }),
                                    (a.unpausePlayer = function () {
                                        this.player.unpause();
                                    }),
                                    (a.deactivatePlayer = function () {
                                        this.player.stop(), this.element.removeEventListener("mouseenter", this);
                                    }),
                                    (a.onmouseenter = function () {
                                        this.options.pauseAutoPlayOnHover && (this.player.pause(), this.element.addEventListener("mouseleave", this));
                                    }),
                                    (a.onmouseleave = function () {
                                        this.player.unpause(), this.element.removeEventListener("mouseleave", this);
                                    }),
                                    (n.Player = r),
                                    n
                                );
                            })(e, t, n);
                        }.apply((q = {}), (U = [i, d, x]))) || (M = q),
                    window,
                    void 0 !==
                        (I = function (e, t) {
                            return (function (e, t, n) {
                                var i = t.prototype;
                                return (
                                    (i.insert = function (e, t) {
                                        var n = this._makeCells(e);
                                        if (n && n.length) {
                                            var i = this.cells.length;
                                            t = void 0 === t ? i : t;
                                            var o = (function (e) {
                                                    var t = document.createDocumentFragment();
                                                    return (
                                                        e.forEach(function (e) {
                                                            t.appendChild(e.element);
                                                        }),
                                                        t
                                                    );
                                                })(n),
                                                r = t == i;
                                            if (r) this.slider.appendChild(o);
                                            else {
                                                var a = this.cells[t].element;
                                                this.slider.insertBefore(o, a);
                                            }
                                            if (0 === t) this.cells = n.concat(this.cells);
                                            else if (r) this.cells = this.cells.concat(n);
                                            else {
                                                var s = this.cells.splice(t, i - t);
                                                this.cells = this.cells.concat(n).concat(s);
                                            }
                                            this._sizeCells(n);
                                            var c = t > this.selectedIndex ? 0 : n.length;
                                            this._cellAddedRemoved(t, c);
                                        }
                                    }),
                                    (i.append = function (e) {
                                        this.insert(e, this.cells.length);
                                    }),
                                    (i.prepend = function (e) {
                                        this.insert(e, 0);
                                    }),
                                    (i.remove = function (e) {
                                        var t,
                                            i,
                                            o = this.getCells(e),
                                            r = 0,
                                            a = o.length;
                                        for (t = 0; t < a; t++) (i = o[t]), (r -= this.cells.indexOf(i) < this.selectedIndex ? 1 : 0);
                                        for (t = 0; t < a; t++) (i = o[t]).remove(), n.removeFrom(this.cells, i);
                                        o.length && this._cellAddedRemoved(0, r);
                                    }),
                                    (i._cellAddedRemoved = function (e, t) {
                                        (t = t || 0), (this.selectedIndex += t), (this.selectedIndex = Math.max(0, Math.min(this.slides.length - 1, this.selectedIndex))), this.cellChange(e, !0), this.emitEvent("cellAddedRemoved", [e, t]);
                                    }),
                                    (i.cellSizeChange = function (e) {
                                        var t = this.getCell(e);
                                        if (t) {
                                            t.getSize();
                                            var n = this.cells.indexOf(t);
                                            this.cellChange(n);
                                        }
                                    }),
                                    (i.cellChange = function (e, t) {
                                        var n = this.slideableWidth;
                                        if ((this._positionCells(e), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("cellChange", [e]), this.options.freeScroll)) {
                                            var i = n - this.slideableWidth;
                                            (this.x += i * this.cellAlign), this.positionSlider();
                                        } else t && this.positionSliderAtSelected(), this.select(this.selectedIndex);
                                    }),
                                    t
                                );
                            })(0, e, t);
                        }.apply((R = {}), (U = [x, d]))) || (I = R),
                    window,
                    void 0 !==
                        (O = function (e, t) {
                            return (function (e, t, n) {
                                "use strict";
                                t.createMethods.push("_createLazyload");
                                var i = t.prototype;
                                function o(e, t) {
                                    (this.img = e), (this.flickity = t), this.load();
                                }
                                return (
                                    (i._createLazyload = function () {
                                        this.on("select", this.lazyLoad);
                                    }),
                                    (i.lazyLoad = function () {
                                        var e = this.options.lazyLoad;
                                        if (e) {
                                            var t = "number" == typeof e ? e : 0,
                                                i = this.getAdjacentCellElements(t),
                                                r = [];
                                            i.forEach(function (e) {
                                                var t = (function (e) {
                                                    if ("IMG" == e.nodeName && e.getAttribute("data-flickity-lazyload")) return [e];
                                                    var t = e.querySelectorAll("img[data-flickity-lazyload]");
                                                    return n.makeArray(t);
                                                })(e);
                                                r = r.concat(t);
                                            }),
                                                r.forEach(function (e) {
                                                    new o(e, this);
                                                }, this);
                                        }
                                    }),
                                    (o.prototype.handleEvent = n.handleEvent),
                                    (o.prototype.load = function () {
                                        this.img.addEventListener("load", this), this.img.addEventListener("error", this), (this.img.src = this.img.getAttribute("data-flickity-lazyload")), this.img.removeAttribute("data-flickity-lazyload");
                                    }),
                                    (o.prototype.onload = function (e) {
                                        this.complete(e, "flickity-lazyloaded");
                                    }),
                                    (o.prototype.onerror = function (e) {
                                        this.complete(e, "flickity-lazyerror");
                                    }),
                                    (o.prototype.complete = function (e, t) {
                                        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
                                        var n = this.flickity.getParentCell(this.img),
                                            i = n && n.element;
                                        this.flickity.cellSizeChange(i), this.img.classList.add(t), this.flickity.dispatchEvent("lazyLoad", e, i);
                                    }),
                                    (t.LazyLoader = o),
                                    t
                                );
                            })(0, e, t);
                        }.apply((H = {}), (U = [x, d]))) || (O = H),
                    window,
                    "function" ==
                    typeof (F = function (e) {
                        return e;
                    })
                        ? void 0 === (V = F.apply((B = {}), [x, C, A, j, M, I, O])) && (V = B)
                        : (V = F),
                    window,
                    (U = [V, d]),
                    void 0 ===
                        (G =
                            "function" ==
                            typeof (W = function (e, t) {
                                e.createMethods.push("_createAsNavFor");
                                var n = e.prototype;
                                return (
                                    (n._createAsNavFor = function () {
                                        this.on("activate", this.activateAsNavFor), this.on("deactivate", this.deactivateAsNavFor), this.on("destroy", this.destroyAsNavFor);
                                        var e = this.options.asNavFor;
                                        if (e) {
                                            var t = this;
                                            setTimeout(function () {
                                                t.setNavCompanion(e);
                                            });
                                        }
                                    }),
                                    (n.setNavCompanion = function (n) {
                                        n = t.getQueryElement(n);
                                        var i = e.data(n);
                                        if (i && i != this) {
                                            this.navCompanion = i;
                                            var o = this;
                                            (this.onNavCompanionSelect = function () {
                                                o.navCompanionSelect();
                                            }),
                                                i.on("select", this.onNavCompanionSelect),
                                                this.on("staticClick", this.onNavStaticClick),
                                                this.navCompanionSelect(!0);
                                        }
                                    }),
                                    (n.navCompanionSelect = function (e) {
                                        if (this.navCompanion) {
                                            var t = this.navCompanion.selectedCells[0],
                                                n = this.navCompanion.cells.indexOf(t),
                                                i = n + this.navCompanion.selectedCells.length - 1,
                                                o = Math.floor(((a = n), (s = i), (c = this.navCompanion.cellAlign), (s - a) * c + a));
                                            if ((this.selectCell(o, !1, e), this.removeNavSelectedElements(), !(o >= this.cells.length))) {
                                                var r = this.cells.slice(n, i + 1);
                                                (this.navSelectedElements = r.map(function (e) {
                                                    return e.element;
                                                })),
                                                    this.changeNavSelectedClass("add");
                                            }
                                        }
                                        var a, s, c;
                                    }),
                                    (n.changeNavSelectedClass = function (e) {
                                        this.navSelectedElements.forEach(function (t) {
                                            t.classList[e]("is-nav-selected");
                                        });
                                    }),
                                    (n.activateAsNavFor = function () {
                                        this.navCompanionSelect(!0);
                                    }),
                                    (n.removeNavSelectedElements = function () {
                                        this.navSelectedElements && (this.changeNavSelectedClass("remove"), delete this.navSelectedElements);
                                    }),
                                    (n.onNavStaticClick = function (e, t, n, i) {
                                        "number" == typeof i && this.navCompanion.selectCell(i);
                                    }),
                                    (n.deactivateAsNavFor = function () {
                                        this.removeNavSelectedElements();
                                    }),
                                    (n.destroyAsNavFor = function () {
                                        this.navCompanion && (this.navCompanion.off("select", this.onNavCompanionSelect), this.off("staticClick", this.onNavStaticClick), delete this.navCompanion);
                                    }),
                                    e
                                );
                            })
                                ? W.apply(t, U)
                                : W) || (e.exports = G),
                    (function (e, t) {
                        "use strict";
                        void 0 !==
                            (z = function (t) {
                                return (function (e, t) {
                                    var n = e.jQuery,
                                        i = e.console;
                                    function o(e, t) {
                                        for (var n in t) e[n] = t[n];
                                        return e;
                                    }
                                    function r(e, t, i) {
                                        if (!(this instanceof r)) return new r(e, t, i);
                                        "string" == typeof e && (e = document.querySelectorAll(e)),
                                            (this.elements = (function (e) {
                                                var t = [];
                                                if (Array.isArray(e)) t = e;
                                                else if ("number" == typeof e.length) for (var n = 0; n < e.length; n++) t.push(e[n]);
                                                else t.push(e);
                                                return t;
                                            })(e)),
                                            (this.options = o({}, this.options)),
                                            "function" == typeof t ? (i = t) : o(this.options, t),
                                            i && this.on("always", i),
                                            this.getImages(),
                                            n && (this.jqDeferred = new n.Deferred()),
                                            setTimeout(
                                                function () {
                                                    this.check();
                                                }.bind(this)
                                            );
                                    }
                                    (r.prototype = Object.create(t.prototype)),
                                        (r.prototype.options = {}),
                                        (r.prototype.getImages = function () {
                                            (this.images = []), this.elements.forEach(this.addElementImages, this);
                                        }),
                                        (r.prototype.addElementImages = function (e) {
                                            "IMG" == e.nodeName && this.addImage(e), !0 === this.options.background && this.addElementBackgroundImages(e);
                                            var t = e.nodeType;
                                            if (t && a[t]) {
                                                for (var n = e.querySelectorAll("img"), i = 0; i < n.length; i++) {
                                                    var o = n[i];
                                                    this.addImage(o);
                                                }
                                                if ("string" == typeof this.options.background) {
                                                    var r = e.querySelectorAll(this.options.background);
                                                    for (i = 0; i < r.length; i++) {
                                                        var s = r[i];
                                                        this.addElementBackgroundImages(s);
                                                    }
                                                }
                                            }
                                        });
                                    var a = { 1: !0, 9: !0, 11: !0 };
                                    function s(e) {
                                        this.img = e;
                                    }
                                    function c(e, t) {
                                        (this.url = e), (this.element = t), (this.img = new Image());
                                    }
                                    return (
                                        (r.prototype.addElementBackgroundImages = function (e) {
                                            var t = getComputedStyle(e);
                                            if (t)
                                                for (var n = /url\((['"])?(.*?)\1\)/gi, i = n.exec(t.backgroundImage); null !== i; ) {
                                                    var o = i && i[2];
                                                    o && this.addBackground(o, e), (i = n.exec(t.backgroundImage));
                                                }
                                        }),
                                        (r.prototype.addImage = function (e) {
                                            var t = new s(e);
                                            this.images.push(t);
                                        }),
                                        (r.prototype.addBackground = function (e, t) {
                                            var n = new c(e, t);
                                            this.images.push(n);
                                        }),
                                        (r.prototype.check = function () {
                                            var e = this;
                                            function t(t, n, i) {
                                                setTimeout(function () {
                                                    e.progress(t, n, i);
                                                });
                                            }
                                            (this.progressedCount = 0),
                                                (this.hasAnyBroken = !1),
                                                this.images.length
                                                    ? this.images.forEach(function (e) {
                                                          e.once("progress", t), e.check();
                                                      })
                                                    : this.complete();
                                        }),
                                        (r.prototype.progress = function (e, t, n) {
                                            this.progressedCount++,
                                                (this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded),
                                                this.emitEvent("progress", [this, e, t]),
                                                this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e),
                                                this.progressedCount == this.images.length && this.complete(),
                                                this.options.debug && i && i.log("progress: " + n, e, t);
                                        }),
                                        (r.prototype.complete = function () {
                                            var e = this.hasAnyBroken ? "fail" : "done";
                                            if (((this.isComplete = !0), this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred)) {
                                                var t = this.hasAnyBroken ? "reject" : "resolve";
                                                this.jqDeferred[t](this);
                                            }
                                        }),
                                        (s.prototype = Object.create(t.prototype)),
                                        (s.prototype.check = function () {
                                            this.getIsImageComplete()
                                                ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
                                                : ((this.proxyImage = new Image()),
                                                  this.proxyImage.addEventListener("load", this),
                                                  this.proxyImage.addEventListener("error", this),
                                                  this.img.addEventListener("load", this),
                                                  this.img.addEventListener("error", this),
                                                  (this.proxyImage.src = this.img.src));
                                        }),
                                        (s.prototype.getIsImageComplete = function () {
                                            return this.img.complete && void 0 !== this.img.naturalWidth;
                                        }),
                                        (s.prototype.confirm = function (e, t) {
                                            (this.isLoaded = e), this.emitEvent("progress", [this, this.img, t]);
                                        }),
                                        (s.prototype.handleEvent = function (e) {
                                            var t = "on" + e.type;
                                            this[t] && this[t](e);
                                        }),
                                        (s.prototype.onload = function () {
                                            this.confirm(!0, "onload"), this.unbindEvents();
                                        }),
                                        (s.prototype.onerror = function () {
                                            this.confirm(!1, "onerror"), this.unbindEvents();
                                        }),
                                        (s.prototype.unbindEvents = function () {
                                            this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
                                        }),
                                        (c.prototype = Object.create(s.prototype)),
                                        (c.prototype.check = function () {
                                            this.img.addEventListener("load", this),
                                                this.img.addEventListener("error", this),
                                                (this.img.src = this.url),
                                                this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents());
                                        }),
                                        (c.prototype.unbindEvents = function () {
                                            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
                                        }),
                                        (c.prototype.confirm = function (e, t) {
                                            (this.isLoaded = e), this.emitEvent("progress", [this, this.element, t]);
                                        }),
                                        (r.makeJQueryPlugin = function (t) {
                                            (t = t || e.jQuery) &&
                                                ((n = t).fn.imagesLoaded = function (e, t) {
                                                    return new r(this, e, t).jqDeferred.promise(n(this));
                                                });
                                        }),
                                        r.makeJQueryPlugin(),
                                        r
                                    );
                                })(e, t);
                            }.apply(($ = {}), (U = [i]))) || (z = $);
                    })("undefined" != typeof window ? window : this),
                    window,
                    void 0 ===
                        (G = function (e, t) {
                            return (function (e, t, n) {
                                "use strict";
                                t.createMethods.push("_createImagesLoaded");
                                var i = t.prototype;
                                return (
                                    (i._createImagesLoaded = function () {
                                        this.on("activate", this.imagesLoaded);
                                    }),
                                    (i.imagesLoaded = function () {
                                        if (this.options.imagesLoaded) {
                                            var e = this;
                                            n(this.slider).on("progress", function (t, n) {
                                                var i = e.getParentCell(n.img);
                                                e.cellSizeChange(i && i.element), e.options.freeScroll || e.positionSliderAtSelected();
                                            });
                                        }
                                    }),
                                    t
                                );
                            })(0, e, t);
                        }.apply(t, (U = [V, z]))) || (e.exports = G);
            },
            1200: function (e, t, n) {
                var i, o, r;
                !(function (e) {
                    function t(e) {
                        var t = e.length,
                            i = n.type(e);
                        return "function" !== i && !n.isWindow(e) && (!(1 !== e.nodeType || !t) || "array" === i || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
                    }
                    if (!e.jQuery) {
                        var n = function (e, t) {
                            return new n.fn.init(e, t);
                        };
                        (n.isWindow = function (e) {
                            return null != e && e == e.window;
                        }),
                            (n.type = function (e) {
                                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? o[a.call(e)] || "object" : typeof e;
                            }),
                            (n.isArray =
                                Array.isArray ||
                                function (e) {
                                    return "array" === n.type(e);
                                }),
                            (n.isPlainObject = function (e) {
                                var t;
                                if (!e || "object" !== n.type(e) || e.nodeType || n.isWindow(e)) return !1;
                                try {
                                    if (e.constructor && !r.call(e, "constructor") && !r.call(e.constructor.prototype, "isPrototypeOf")) return !1;
                                } catch (e) {
                                    return !1;
                                }
                                for (t in e);
                                return void 0 === t || r.call(e, t);
                            }),
                            (n.each = function (e, n, i) {
                                var o = 0,
                                    r = e.length,
                                    a = t(e);
                                if (i) {
                                    if (a) for (; r > o && !1 !== n.apply(e[o], i); o++);
                                    else for (o in e) if (!1 === n.apply(e[o], i)) break;
                                } else if (a) for (; r > o && !1 !== n.call(e[o], o, e[o]); o++);
                                else for (o in e) if (!1 === n.call(e[o], o, e[o])) break;
                                return e;
                            }),
                            (n.data = function (e, t, o) {
                                if (void 0 === o) {
                                    var r = (a = e[n.expando]) && i[a];
                                    if (void 0 === t) return r;
                                    if (r && t in r) return r[t];
                                } else if (void 0 !== t) {
                                    var a = e[n.expando] || (e[n.expando] = ++n.uuid);
                                    return (i[a] = i[a] || {}), (i[a][t] = o), o;
                                }
                            }),
                            (n.removeData = function (e, t) {
                                var o = e[n.expando],
                                    r = o && i[o];
                                r &&
                                    n.each(t, function (e, t) {
                                        delete r[t];
                                    });
                            }),
                            (n.extend = function () {
                                var e,
                                    t,
                                    i,
                                    o,
                                    r,
                                    a,
                                    s = arguments[0] || {},
                                    c = 1,
                                    l = arguments.length,
                                    u = !1;
                                for ("boolean" == typeof s && ((u = s), (s = arguments[c] || {}), c++), "object" != typeof s && "function" !== n.type(s) && (s = {}), c === l && ((s = this), c--); l > c; c++)
                                    if (null != (r = arguments[c]))
                                        for (o in r)
                                            (e = s[o]),
                                                s !== (i = r[o]) &&
                                                    (u && i && (n.isPlainObject(i) || (t = n.isArray(i)))
                                                        ? (t ? ((t = !1), (a = e && n.isArray(e) ? e : [])) : (a = e && n.isPlainObject(e) ? e : {}), (s[o] = n.extend(u, a, i)))
                                                        : void 0 !== i && (s[o] = i));
                                return s;
                            }),
                            (n.queue = function (e, i, o) {
                                if (e) {
                                    i = (i || "fx") + "queue";
                                    var r = n.data(e, i);
                                    return o
                                        ? (!r || n.isArray(o)
                                              ? (r = n.data(
                                                    e,
                                                    i,
                                                    (function (e, n) {
                                                        var i = [];
                                                        return (
                                                            null != e &&
                                                                (t(Object(e))
                                                                    ? (function (e, t) {
                                                                          for (var n = +t.length, i = 0, o = e.length; n > i; ) e[o++] = t[i++];
                                                                          if (n != n) for (; void 0 !== t[i]; ) e[o++] = t[i++];
                                                                          e.length = o;
                                                                      })(i, "string" == typeof e ? [e] : e)
                                                                    : [].push.call(i, e)),
                                                            i
                                                        );
                                                    })(o)
                                                ))
                                              : r.push(o),
                                          r)
                                        : r || [];
                                }
                            }),
                            (n.dequeue = function (e, t) {
                                n.each(e.nodeType ? [e] : e, function (e, i) {
                                    t = t || "fx";
                                    var o = n.queue(i, t),
                                        r = o.shift();
                                    "inprogress" === r && (r = o.shift()),
                                        r &&
                                            ("fx" === t && o.unshift("inprogress"),
                                            r.call(i, function () {
                                                n.dequeue(i, t);
                                            }));
                                });
                            }),
                            (n.fn = n.prototype = {
                                init: function (e) {
                                    if (e.nodeType) return (this[0] = e), this;
                                    throw new Error("Not a DOM node.");
                                },
                                offset: function () {
                                    var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : { top: 0, left: 0 };
                                    return { top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0), left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0) };
                                },
                                position: function () {
                                    function e() {
                                        for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position; ) e = e.offsetParent;
                                        return e || document;
                                    }
                                    var t = this[0],
                                        e = e.apply(t),
                                        i = this.offset(),
                                        o = /^(?:body|html)$/i.test(e.nodeName) ? { top: 0, left: 0 } : n(e).offset();
                                    return (
                                        (i.top -= parseFloat(t.style.marginTop) || 0),
                                        (i.left -= parseFloat(t.style.marginLeft) || 0),
                                        e.style && ((o.top += parseFloat(e.style.borderTopWidth) || 0), (o.left += parseFloat(e.style.borderLeftWidth) || 0)),
                                        { top: i.top - o.top, left: i.left - o.left }
                                    );
                                },
                            });
                        var i = {};
                        (n.expando = "velocity" + new Date().getTime()), (n.uuid = 0);
                        for (var o = {}, r = o.hasOwnProperty, a = o.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), c = 0; c < s.length; c++) o["[object " + s[c] + "]"] = s[c].toLowerCase();
                        (n.fn.init.prototype = n.fn), (e.Velocity = { Utilities: n });
                    }
                })(window),
                    (r = function () {
                        return (function (e, t, n, i) {
                            function o(e) {
                                return p.isWrapped(e) ? (e = [].slice.call(e)) : p.isNode(e) && (e = [e]), e;
                            }
                            function r(e) {
                                var t = d.data(e, "velocity");
                                return null === t ? i : t;
                            }
                            function a(e) {
                                return function (t) {
                                    return Math.round(t * e) * (1 / e);
                                };
                            }
                            function s(e, n, i, o) {
                                function r(e, t) {
                                    return 1 - 3 * t + 3 * e;
                                }
                                function a(e, t) {
                                    return 3 * t - 6 * e;
                                }
                                function s(e) {
                                    return 3 * e;
                                }
                                function c(e, t, n) {
                                    return ((r(t, n) * e + a(t, n)) * e + s(t)) * e;
                                }
                                function l(e, t, n) {
                                    return 3 * r(t, n) * e * e + 2 * a(t, n) * e + s(t);
                                }
                                function u(t, n) {
                                    for (var o = 0; m > o; ++o) {
                                        var r = l(n, e, i);
                                        if (0 === r) return n;
                                        n -= (c(n, e, i) - t) / r;
                                    }
                                    return n;
                                }
                                function d() {
                                    for (var t = 0; w > t; ++t) S[t] = c(t * x, e, i);
                                }
                                function f(t, n, o) {
                                    var r,
                                        a,
                                        s = 0;
                                    do {
                                        (r = c((a = n + (o - n) / 2), e, i) - t) > 0 ? (o = a) : (n = a);
                                    } while (Math.abs(r) > g && ++s < y);
                                    return a;
                                }
                                function h(t) {
                                    for (var n = 0, o = 1, r = w - 1; o != r && S[o] <= t; ++o) n += x;
                                    --o;
                                    var a = n + ((t - S[o]) / (S[o + 1] - S[o])) * x,
                                        s = l(a, e, i);
                                    return s >= v ? u(t, a) : 0 == s ? a : f(t, n, n + x);
                                }
                                function p() {
                                    (E = !0), (e != n || i != o) && d();
                                }
                                var m = 4,
                                    v = 0.001,
                                    g = 1e-7,
                                    y = 10,
                                    w = 11,
                                    x = 1 / (w - 1),
                                    b = "Float32Array" in t;
                                if (4 !== arguments.length) return !1;
                                for (var _ = 0; 4 > _; ++_) if ("number" != typeof arguments[_] || isNaN(arguments[_]) || !isFinite(arguments[_])) return !1;
                                (e = Math.min(e, 1)), (i = Math.min(i, 1)), (e = Math.max(e, 0)), (i = Math.max(i, 0));
                                var S = b ? new Float32Array(w) : new Array(w),
                                    E = !1,
                                    k = function (t) {
                                        return E || p(), e === n && i === o ? t : 0 === t ? 0 : 1 === t ? 1 : c(h(t), n, o);
                                    };
                                k.getControlPoints = function () {
                                    return [
                                        { x: e, y: n },
                                        { x: i, y: o },
                                    ];
                                };
                                var C = "generateBezier(" + [e, n, i, o] + ")";
                                return (
                                    (k.toString = function () {
                                        return C;
                                    }),
                                    k
                                );
                            }
                            function c(e, t) {
                                var n = e;
                                return (
                                    p.isString(e)
                                        ? y.Easings[e] || (n = !1)
                                        : (n = p.isArray(e) && 1 === e.length ? a.apply(null, e) : p.isArray(e) && 2 === e.length ? w.apply(null, e.concat([t])) : !(!p.isArray(e) || 4 !== e.length) && s.apply(null, e)),
                                    !1 === n && (n = y.Easings[y.defaults.easing] ? y.defaults.easing : g),
                                    n
                                );
                            }
                            function l(e) {
                                if (e) {
                                    var t = new Date().getTime(),
                                        n = y.State.calls.length;
                                    n > 1e4 &&
                                        (y.State.calls = (function (e) {
                                            for (var t = -1, n = e ? e.length : 0, i = []; ++t < n; ) {
                                                var o = e[t];
                                                o && i.push(o);
                                            }
                                            return i;
                                        })(y.State.calls));
                                    for (var o = 0; n > o; o++)
                                        if (y.State.calls[o]) {
                                            var a = y.State.calls[o],
                                                s = a[0],
                                                c = a[2],
                                                f = a[3],
                                                h = !!f,
                                                m = null;
                                            f || (f = y.State.calls[o][3] = t - 16);
                                            for (var v = Math.min((t - f) / c.duration, 1), g = 0, w = s.length; w > g; g++) {
                                                var b = s[g],
                                                    S = b.element;
                                                if (r(S)) {
                                                    var E = !1;
                                                    for (var k in (c.display !== i &&
                                                        null !== c.display &&
                                                        "none" !== c.display &&
                                                        ("flex" === c.display &&
                                                            d.each(["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"], function (e, t) {
                                                                x.setPropertyValue(S, "display", t);
                                                            }),
                                                        x.setPropertyValue(S, "display", c.display)),
                                                    c.visibility !== i && "hidden" !== c.visibility && x.setPropertyValue(S, "visibility", c.visibility),
                                                    b))
                                                        if ("element" !== k) {
                                                            var C,
                                                                T = b[k],
                                                                P = p.isString(T.easing) ? y.Easings[T.easing] : T.easing;
                                                            if (1 === v) C = T.endValue;
                                                            else {
                                                                var L = T.endValue - T.startValue;
                                                                if (((C = T.startValue + L * P(v, c, L)), !h && C === T.currentValue)) continue;
                                                            }
                                                            if (((T.currentValue = C), "tween" === k)) m = C;
                                                            else {
                                                                if (x.Hooks.registered[k]) {
                                                                    var A = x.Hooks.getRoot(k),
                                                                        D = r(S).rootPropertyValueCache[A];
                                                                    D && (T.rootPropertyValue = D);
                                                                }
                                                                var j = x.setPropertyValue(S, k, T.currentValue + (0 === parseFloat(C) ? "" : T.unitType), T.rootPropertyValue, T.scrollData);
                                                                x.Hooks.registered[k] && (r(S).rootPropertyValueCache[A] = x.Normalizations.registered[A] ? x.Normalizations.registered[A]("extract", null, j[1]) : j[1]),
                                                                    "transform" === j[0] && (E = !0);
                                                            }
                                                        }
                                                    c.mobileHA && r(S).transformCache.translate3d === i && ((r(S).transformCache.translate3d = "(0px, 0px, 0px)"), (E = !0)), E && x.flushTransformCache(S);
                                                }
                                            }
                                            c.display !== i && "none" !== c.display && (y.State.calls[o][2].display = !1),
                                                c.visibility !== i && "hidden" !== c.visibility && (y.State.calls[o][2].visibility = !1),
                                                c.progress && c.progress.call(a[1], a[1], v, Math.max(0, f + c.duration - t), f, m),
                                                1 === v && u(o);
                                        }
                                }
                                y.State.isTicking && _(l);
                            }
                            function u(e, t) {
                                if (!y.State.calls[e]) return !1;
                                for (var n = y.State.calls[e][0], o = y.State.calls[e][1], a = y.State.calls[e][2], s = y.State.calls[e][4], c = !1, l = 0, u = n.length; u > l; l++) {
                                    var f = n[l].element;
                                    if (
                                        (t || a.loop || ("none" === a.display && x.setPropertyValue(f, "display", a.display), "hidden" === a.visibility && x.setPropertyValue(f, "visibility", a.visibility)),
                                        !0 !== a.loop && (d.queue(f)[1] === i || !/\.velocityQueueEntryFlag/i.test(d.queue(f)[1])) && r(f))
                                    ) {
                                        (r(f).isAnimating = !1), (r(f).rootPropertyValueCache = {});
                                        var h = !1;
                                        d.each(x.Lists.transforms3D, function (e, t) {
                                            var n = /^scale/.test(t) ? 1 : 0,
                                                o = r(f).transformCache[t];
                                            r(f).transformCache[t] !== i && new RegExp("^\\(" + n + "[^.]").test(o) && ((h = !0), delete r(f).transformCache[t]);
                                        }),
                                            a.mobileHA && ((h = !0), delete r(f).transformCache.translate3d),
                                            h && x.flushTransformCache(f),
                                            x.Values.removeClass(f, "velocity-animating");
                                    }
                                    if (!t && a.complete && !a.loop && l === u - 1)
                                        try {
                                            a.complete.call(o, o);
                                        } catch (e) {
                                            setTimeout(function () {
                                                throw e;
                                            }, 1);
                                        }
                                    s && !0 !== a.loop && s(o),
                                        r(f) &&
                                            !0 === a.loop &&
                                            !t &&
                                            (d.each(r(f).tweensContainer, function (e, t) {
                                                /^rotate/.test(e) && 360 === parseFloat(t.endValue) && ((t.endValue = 0), (t.startValue = 360)),
                                                    /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && ((t.endValue = 0), (t.startValue = 100));
                                            }),
                                            y(f, "reverse", { loop: !0, delay: a.delay })),
                                        !1 !== a.queue && d.dequeue(f, a.queue);
                                }
                                y.State.calls[e] = !1;
                                for (var p = 0, m = y.State.calls.length; m > p; p++)
                                    if (!1 !== y.State.calls[p]) {
                                        c = !0;
                                        break;
                                    }
                                !1 === c && ((y.State.isTicking = !1), delete y.State.calls, (y.State.calls = []));
                            }
                            var d,
                                f = (function () {
                                    if (n.documentMode) return n.documentMode;
                                    for (var e = 7; e > 4; e--) {
                                        var t = n.createElement("div");
                                        if (((t.innerHTML = "\x3c!--[if IE " + e + "]><span></span><![endif]--\x3e"), t.getElementsByTagName("span").length)) return (t = null), e;
                                    }
                                    return i;
                                })(),
                                h = (function () {
                                    var e = 0;
                                    return (
                                        t.webkitRequestAnimationFrame ||
                                        t.mozRequestAnimationFrame ||
                                        function (t) {
                                            var n,
                                                i = new Date().getTime();
                                            return (
                                                (n = Math.max(0, 16 - (i - e))),
                                                (e = i + n),
                                                setTimeout(function () {
                                                    t(i + n);
                                                }, n)
                                            );
                                        }
                                    );
                                })(),
                                p = {
                                    isString: function (e) {
                                        return "string" == typeof e;
                                    },
                                    isArray:
                                        Array.isArray ||
                                        function (e) {
                                            return "[object Array]" === Object.prototype.toString.call(e);
                                        },
                                    isFunction: function (e) {
                                        return "[object Function]" === Object.prototype.toString.call(e);
                                    },
                                    isNode: function (e) {
                                        return e && e.nodeType;
                                    },
                                    isNodeList: function (e) {
                                        return (
                                            "object" == typeof e &&
                                            /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) &&
                                            e.length !== i &&
                                            (0 === e.length || ("object" == typeof e[0] && e[0].nodeType > 0))
                                        );
                                    },
                                    isWrapped: function (e) {
                                        return e && (e.jquery || (t.Zepto && t.Zepto.zepto.isZ(e)));
                                    },
                                    isSVG: function (e) {
                                        return t.SVGElement && e instanceof t.SVGElement;
                                    },
                                    isEmptyObject: function (e) {
                                        for (var t in e) return !1;
                                        return !0;
                                    },
                                },
                                m = !1;
                            if ((e.fn && e.fn.jquery ? ((d = e), (m = !0)) : (d = t.Velocity.Utilities), 8 >= f && !m)) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
                            if (!(7 >= f)) {
                                var v = 400,
                                    g = "swing",
                                    y = {
                                        State: {
                                            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                                            isAndroid: /Android/i.test(navigator.userAgent),
                                            isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                                            isChrome: t.chrome,
                                            isFirefox: /Firefox/i.test(navigator.userAgent),
                                            prefixElement: n.createElement("div"),
                                            prefixMatches: {},
                                            scrollAnchor: null,
                                            scrollPropertyLeft: null,
                                            scrollPropertyTop: null,
                                            isTicking: !1,
                                            calls: [],
                                        },
                                        CSS: {},
                                        Utilities: d,
                                        Redirects: {},
                                        Easings: {},
                                        Promise: t.Promise,
                                        defaults: { queue: "", duration: v, easing: g, begin: i, complete: i, progress: i, display: i, visibility: i, loop: !1, delay: !1, mobileHA: !0, _cacheValues: !0 },
                                        init: function (e) {
                                            d.data(e, "velocity", { isSVG: p.isSVG(e), isAnimating: !1, computedStyle: null, tweensContainer: null, rootPropertyValueCache: {}, transformCache: {} });
                                        },
                                        hook: null,
                                        mock: !1,
                                        version: { major: 1, minor: 2, patch: 2 },
                                        debug: !1,
                                    };
                                t.pageYOffset !== i
                                    ? ((y.State.scrollAnchor = t), (y.State.scrollPropertyLeft = "pageXOffset"), (y.State.scrollPropertyTop = "pageYOffset"))
                                    : ((y.State.scrollAnchor = n.documentElement || n.body.parentNode || n.body), (y.State.scrollPropertyLeft = "scrollLeft"), (y.State.scrollPropertyTop = "scrollTop"));
                                var w = (function () {
                                    function e(e) {
                                        return -e.tension * e.x - e.friction * e.v;
                                    }
                                    function t(t, n, i) {
                                        var o = { x: t.x + i.dx * n, v: t.v + i.dv * n, tension: t.tension, friction: t.friction };
                                        return { dx: o.v, dv: e(o) };
                                    }
                                    function n(n, i) {
                                        var o = { dx: n.v, dv: e(n) },
                                            r = t(n, 0.5 * i, o),
                                            a = t(n, 0.5 * i, r),
                                            s = t(n, i, a),
                                            c = (1 / 6) * (o.dx + 2 * (r.dx + a.dx) + s.dx),
                                            l = (1 / 6) * (o.dv + 2 * (r.dv + a.dv) + s.dv);
                                        return (n.x = n.x + c * i), (n.v = n.v + l * i), n;
                                    }
                                    return function e(t, i, o) {
                                        var r,
                                            a,
                                            s,
                                            c = { x: -1, v: 0, tension: null, friction: null },
                                            l = [0],
                                            u = 0,
                                            d = 1e-4;
                                        for (
                                            t = parseFloat(t) || 500, i = parseFloat(i) || 20, o = o || null, c.tension = t, c.friction = i, a = (r = null !== o) ? ((u = e(t, i)) / o) * 0.016 : 0.016;
                                            (s = n(s || c, a)), l.push(1 + s.x), (u += 16), Math.abs(s.x) > d && Math.abs(s.v) > d;

                                        );
                                        return r
                                            ? function (e) {
                                                  return l[(e * (l.length - 1)) | 0];
                                              }
                                            : u;
                                    };
                                })();
                                (y.Easings = {
                                    linear: function (e) {
                                        return e;
                                    },
                                    swing: function (e) {
                                        return 0.5 - Math.cos(e * Math.PI) / 2;
                                    },
                                    spring: function (e) {
                                        return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e);
                                    },
                                }),
                                    d.each(
                                        [
                                            ["ease", [0.25, 0.1, 0.25, 1]],
                                            ["ease-in", [0.42, 0, 1, 1]],
                                            ["ease-out", [0, 0, 0.58, 1]],
                                            ["ease-in-out", [0.42, 0, 0.58, 1]],
                                            ["easeInSine", [0.47, 0, 0.745, 0.715]],
                                            ["easeOutSine", [0.39, 0.575, 0.565, 1]],
                                            ["easeInOutSine", [0.445, 0.05, 0.55, 0.95]],
                                            ["easeInQuad", [0.55, 0.085, 0.68, 0.53]],
                                            ["easeOutQuad", [0.25, 0.46, 0.45, 0.94]],
                                            ["easeInOutQuad", [0.455, 0.03, 0.515, 0.955]],
                                            ["easeInCubic", [0.55, 0.055, 0.675, 0.19]],
                                            ["easeOutCubic", [0.215, 0.61, 0.355, 1]],
                                            ["easeInOutCubic", [0.645, 0.045, 0.355, 1]],
                                            ["easeInQuart", [0.895, 0.03, 0.685, 0.22]],
                                            ["easeOutQuart", [0.165, 0.84, 0.44, 1]],
                                            ["easeInOutQuart", [0.77, 0, 0.175, 1]],
                                            ["easeInQuint", [0.755, 0.05, 0.855, 0.06]],
                                            ["easeOutQuint", [0.23, 1, 0.32, 1]],
                                            ["easeInOutQuint", [0.86, 0, 0.07, 1]],
                                            ["easeInExpo", [0.95, 0.05, 0.795, 0.035]],
                                            ["easeOutExpo", [0.19, 1, 0.22, 1]],
                                            ["easeInOutExpo", [1, 0, 0, 1]],
                                            ["easeInCirc", [0.6, 0.04, 0.98, 0.335]],
                                            ["easeOutCirc", [0.075, 0.82, 0.165, 1]],
                                            ["easeInOutCirc", [0.785, 0.135, 0.15, 0.86]],
                                        ],
                                        function (e, t) {
                                            y.Easings[t[0]] = s.apply(null, t[1]);
                                        }
                                    );
                                var x = (y.CSS = {
                                    RegEx: { isHex: /^#([A-f\d]{3}){1,2}$/i, valueUnwrap: /^[A-z]+\((.*)\)$/i, wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/, valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi },
                                    Lists: {
                                        colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                                        transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                                        transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
                                    },
                                    Hooks: {
                                        templates: {
                                            textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                                            boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                                            clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                                            backgroundPosition: ["X Y", "0% 0%"],
                                            transformOrigin: ["X Y Z", "50% 50% 0px"],
                                            perspectiveOrigin: ["X Y", "50% 50%"],
                                        },
                                        registered: {},
                                        register: function () {
                                            for (var e = 0; e < x.Lists.colors.length; e++) {
                                                var t = "color" === x.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                                                x.Hooks.templates[x.Lists.colors[e]] = ["Red Green Blue Alpha", t];
                                            }
                                            var n, i, o;
                                            if (f)
                                                for (n in x.Hooks.templates) {
                                                    o = (i = x.Hooks.templates[n])[0].split(" ");
                                                    var r = i[1].match(x.RegEx.valueSplit);
                                                    "Color" === o[0] && (o.push(o.shift()), r.push(r.shift()), (x.Hooks.templates[n] = [o.join(" "), r.join(" ")]));
                                                }
                                            for (n in x.Hooks.templates)
                                                for (var e in (o = (i = x.Hooks.templates[n])[0].split(" "))) {
                                                    var a = n + o[e],
                                                        s = e;
                                                    x.Hooks.registered[a] = [n, s];
                                                }
                                        },
                                        getRoot: function (e) {
                                            var t = x.Hooks.registered[e];
                                            return t ? t[0] : e;
                                        },
                                        cleanRootPropertyValue: function (e, t) {
                                            return x.RegEx.valueUnwrap.test(t) && (t = t.match(x.RegEx.valueUnwrap)[1]), x.Values.isCSSNullValue(t) && (t = x.Hooks.templates[e][1]), t;
                                        },
                                        extractValue: function (e, t) {
                                            var n = x.Hooks.registered[e];
                                            if (n) {
                                                var i = n[0],
                                                    o = n[1];
                                                return (t = x.Hooks.cleanRootPropertyValue(i, t)).toString().match(x.RegEx.valueSplit)[o];
                                            }
                                            return t;
                                        },
                                        injectValue: function (e, t, n) {
                                            var i = x.Hooks.registered[e];
                                            if (i) {
                                                var o,
                                                    r = i[0],
                                                    a = i[1];
                                                return ((o = (n = x.Hooks.cleanRootPropertyValue(r, n)).toString().match(x.RegEx.valueSplit))[a] = t), o.join(" ");
                                            }
                                            return n;
                                        },
                                    },
                                    Normalizations: {
                                        registered: {
                                            clip: function (e, t, n) {
                                                switch (e) {
                                                    case "name":
                                                        return "clip";
                                                    case "extract":
                                                        var i;
                                                        return x.RegEx.wrappedValueAlreadyExtracted.test(n) ? n : (i = n.toString().match(x.RegEx.valueUnwrap)) ? i[1].replace(/,(\s+)?/g, " ") : n;
                                                    case "inject":
                                                        return "rect(" + n + ")";
                                                }
                                            },
                                            blur: function (e, t, n) {
                                                switch (e) {
                                                    case "name":
                                                        return y.State.isFirefox ? "filter" : "-webkit-filter";
                                                    case "extract":
                                                        var i = parseFloat(n);
                                                        if (!i && 0 !== i) {
                                                            var o = n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                                            i = o ? o[1] : 0;
                                                        }
                                                        return i;
                                                    case "inject":
                                                        return parseFloat(n) ? "blur(" + n + ")" : "none";
                                                }
                                            },
                                            opacity: function (e, t, n) {
                                                if (8 >= f)
                                                    switch (e) {
                                                        case "name":
                                                            return "filter";
                                                        case "extract":
                                                            var i = n.toString().match(/alpha\(opacity=(.*)\)/i);
                                                            return i ? i[1] / 100 : 1;
                                                        case "inject":
                                                            return (t.style.zoom = 1), parseFloat(n) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(n), 10) + ")";
                                                    }
                                                else
                                                    switch (e) {
                                                        case "name":
                                                            return "opacity";
                                                        case "extract":
                                                        case "inject":
                                                            return n;
                                                    }
                                            },
                                        },
                                        register: function () {
                                            9 >= f || y.State.isGingerbread || (x.Lists.transformsBase = x.Lists.transformsBase.concat(x.Lists.transforms3D));
                                            for (var e = 0; e < x.Lists.transformsBase.length; e++)
                                                !(function () {
                                                    var t = x.Lists.transformsBase[e];
                                                    x.Normalizations.registered[t] = function (e, n, o) {
                                                        switch (e) {
                                                            case "name":
                                                                return "transform";
                                                            case "extract":
                                                                return r(n) === i || r(n).transformCache[t] === i ? (/^scale/i.test(t) ? 1 : 0) : r(n).transformCache[t].replace(/[()]/g, "");
                                                            case "inject":
                                                                var a = !1;
                                                                switch (t.substr(0, t.length - 1)) {
                                                                    case "translate":
                                                                        a = !/(%|px|em|rem|vw|vh|\d)$/i.test(o);
                                                                        break;
                                                                    case "scal":
                                                                    case "scale":
                                                                        y.State.isAndroid && r(n).transformCache[t] === i && 1 > o && (o = 1), (a = !/(\d)$/i.test(o));
                                                                        break;
                                                                    case "skew":
                                                                        a = !/(deg|\d)$/i.test(o);
                                                                        break;
                                                                    case "rotate":
                                                                        a = !/(deg|\d)$/i.test(o);
                                                                }
                                                                return a || (r(n).transformCache[t] = "(" + o + ")"), r(n).transformCache[t];
                                                        }
                                                    };
                                                })();
                                            for (e = 0; e < x.Lists.colors.length; e++)
                                                !(function () {
                                                    var t = x.Lists.colors[e];
                                                    x.Normalizations.registered[t] = function (e, n, o) {
                                                        switch (e) {
                                                            case "name":
                                                                return t;
                                                            case "extract":
                                                                var r;
                                                                if (x.RegEx.wrappedValueAlreadyExtracted.test(o)) r = o;
                                                                else {
                                                                    var a,
                                                                        s = { black: "rgb(0, 0, 0)", blue: "rgb(0, 0, 255)", gray: "rgb(128, 128, 128)", green: "rgb(0, 128, 0)", red: "rgb(255, 0, 0)", white: "rgb(255, 255, 255)" };
                                                                    /^[A-z]+$/i.test(o)
                                                                        ? (a = s[o] !== i ? s[o] : s.black)
                                                                        : x.RegEx.isHex.test(o)
                                                                        ? (a = "rgb(" + x.Values.hexToRgb(o).join(" ") + ")")
                                                                        : /^rgba?\(/i.test(o) || (a = s.black),
                                                                        (r = (a || o)
                                                                            .toString()
                                                                            .match(x.RegEx.valueUnwrap)[1]
                                                                            .replace(/,(\s+)?/g, " "));
                                                                }
                                                                return 8 >= f || 3 !== r.split(" ").length || (r += " 1"), r;
                                                            case "inject":
                                                                return (
                                                                    8 >= f ? 4 === o.split(" ").length && (o = o.split(/\s+/).slice(0, 3).join(" ")) : 3 === o.split(" ").length && (o += " 1"),
                                                                    (8 >= f ? "rgb" : "rgba") + "(" + o.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                                                );
                                                        }
                                                    };
                                                })();
                                        },
                                    },
                                    Names: {
                                        camelCase: function (e) {
                                            return e.replace(/-(\w)/g, function (e, t) {
                                                return t.toUpperCase();
                                            });
                                        },
                                        SVGAttribute: function (e) {
                                            var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                                            return (f || (y.State.isAndroid && !y.State.isChrome)) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e);
                                        },
                                        prefixCheck: function (e) {
                                            if (y.State.prefixMatches[e]) return [y.State.prefixMatches[e], !0];
                                            for (var t = ["", "Webkit", "Moz", "ms", "O"], n = 0, i = t.length; i > n; n++) {
                                                var o;
                                                if (
                                                    ((o =
                                                        0 === n
                                                            ? e
                                                            : t[n] +
                                                              e.replace(/^\w/, function (e) {
                                                                  return e.toUpperCase();
                                                              })),
                                                    p.isString(y.State.prefixElement.style[o]))
                                                )
                                                    return (y.State.prefixMatches[e] = o), [o, !0];
                                            }
                                            return [e, !1];
                                        },
                                    },
                                    Values: {
                                        hexToRgb: function (e) {
                                            var t;
                                            return (
                                                (e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, n, i) {
                                                    return t + t + n + n + i + i;
                                                })),
                                                (t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e)) ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                                            );
                                        },
                                        isCSSNullValue: function (e) {
                                            return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e);
                                        },
                                        getUnitType: function (e) {
                                            return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px";
                                        },
                                        getDisplayType: function (e) {
                                            var t = e && e.tagName.toString().toLowerCase();
                                            return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)
                                                ? "inline"
                                                : /^(li)$/i.test(t)
                                                ? "list-item"
                                                : /^(tr)$/i.test(t)
                                                ? "table-row"
                                                : /^(table)$/i.test(t)
                                                ? "table"
                                                : /^(tbody)$/i.test(t)
                                                ? "table-row-group"
                                                : "block";
                                        },
                                        addClass: function (e, t) {
                                            e.classList ? e.classList.add(t) : (e.className += (e.className.length ? " " : "") + t);
                                        },
                                        removeClass: function (e, t) {
                                            e.classList ? e.classList.remove(t) : (e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " "));
                                        },
                                    },
                                    getPropertyValue: function (e, n, o, a) {
                                        function s(e, n) {
                                            function o() {
                                                u && x.setPropertyValue(e, "display", "none");
                                            }
                                            var c = 0;
                                            if (8 >= f) c = d.css(e, n);
                                            else {
                                                var l,
                                                    u = !1;
                                                if ((/^(width|height)$/.test(n) && 0 === x.getPropertyValue(e, "display") && ((u = !0), x.setPropertyValue(e, "display", x.Values.getDisplayType(e))), !a)) {
                                                    if ("height" === n && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                                        var h =
                                                            e.offsetHeight -
                                                            (parseFloat(x.getPropertyValue(e, "borderTopWidth")) || 0) -
                                                            (parseFloat(x.getPropertyValue(e, "borderBottomWidth")) || 0) -
                                                            (parseFloat(x.getPropertyValue(e, "paddingTop")) || 0) -
                                                            (parseFloat(x.getPropertyValue(e, "paddingBottom")) || 0);
                                                        return o(), h;
                                                    }
                                                    if ("width" === n && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                                        var p =
                                                            e.offsetWidth -
                                                            (parseFloat(x.getPropertyValue(e, "borderLeftWidth")) || 0) -
                                                            (parseFloat(x.getPropertyValue(e, "borderRightWidth")) || 0) -
                                                            (parseFloat(x.getPropertyValue(e, "paddingLeft")) || 0) -
                                                            (parseFloat(x.getPropertyValue(e, "paddingRight")) || 0);
                                                        return o(), p;
                                                    }
                                                }
                                                (l = r(e) === i ? t.getComputedStyle(e, null) : r(e).computedStyle ? r(e).computedStyle : (r(e).computedStyle = t.getComputedStyle(e, null))),
                                                    "borderColor" === n && (n = "borderTopColor"),
                                                    ("" === (c = 9 === f && "filter" === n ? l.getPropertyValue(n) : l[n]) || null === c) && (c = e.style[n]),
                                                    o();
                                            }
                                            if ("auto" === c && /^(top|right|bottom|left)$/i.test(n)) {
                                                var m = s(e, "position");
                                                ("fixed" === m || ("absolute" === m && /top|left/i.test(n))) && (c = d(e).position()[n] + "px");
                                            }
                                            return c;
                                        }
                                        var c;
                                        if (x.Hooks.registered[n]) {
                                            var l = n,
                                                u = x.Hooks.getRoot(l);
                                            o === i && (o = x.getPropertyValue(e, x.Names.prefixCheck(u)[0])), x.Normalizations.registered[u] && (o = x.Normalizations.registered[u]("extract", e, o)), (c = x.Hooks.extractValue(l, o));
                                        } else if (x.Normalizations.registered[n]) {
                                            var h, p;
                                            "transform" !== (h = x.Normalizations.registered[n]("name", e)) && ((p = s(e, x.Names.prefixCheck(h)[0])), x.Values.isCSSNullValue(p) && x.Hooks.templates[n] && (p = x.Hooks.templates[n][1])),
                                                (c = x.Normalizations.registered[n]("extract", e, p));
                                        }
                                        if (!/^[\d-]/.test(c))
                                            if (r(e) && r(e).isSVG && x.Names.SVGAttribute(n))
                                                if (/^(height|width)$/i.test(n))
                                                    try {
                                                        c = e.getBBox()[n];
                                                    } catch (e) {
                                                        c = 0;
                                                    }
                                                else c = e.getAttribute(n);
                                            else c = s(e, x.Names.prefixCheck(n)[0]);
                                        return x.Values.isCSSNullValue(c) && (c = 0), y.debug >= 2 && console.log("Get " + n + ": " + c), c;
                                    },
                                    setPropertyValue: function (e, n, i, o, a) {
                                        var s = n;
                                        if ("scroll" === n) a.container ? (a.container["scroll" + a.direction] = i) : "Left" === a.direction ? t.scrollTo(i, a.alternateValue) : t.scrollTo(a.alternateValue, i);
                                        else if (x.Normalizations.registered[n] && "transform" === x.Normalizations.registered[n]("name", e)) x.Normalizations.registered[n]("inject", e, i), (s = "transform"), (i = r(e).transformCache[n]);
                                        else {
                                            if (x.Hooks.registered[n]) {
                                                var c = n,
                                                    l = x.Hooks.getRoot(n);
                                                (o = o || x.getPropertyValue(e, l)), (i = x.Hooks.injectValue(c, i, o)), (n = l);
                                            }
                                            if ((x.Normalizations.registered[n] && ((i = x.Normalizations.registered[n]("inject", e, i)), (n = x.Normalizations.registered[n]("name", e))), (s = x.Names.prefixCheck(n)[0]), 8 >= f))
                                                try {
                                                    e.style[s] = i;
                                                } catch (e) {
                                                    y.debug && console.log("Browser does not support [" + i + "] for [" + s + "]");
                                                }
                                            else r(e) && r(e).isSVG && x.Names.SVGAttribute(n) ? e.setAttribute(n, i) : (e.style[s] = i);
                                            y.debug >= 2 && console.log("Set " + n + " (" + s + "): " + i);
                                        }
                                        return [s, i];
                                    },
                                    flushTransformCache: function (e) {
                                        function t(t) {
                                            return parseFloat(x.getPropertyValue(e, t));
                                        }
                                        var n = "";
                                        if ((f || (y.State.isAndroid && !y.State.isChrome)) && r(e).isSVG) {
                                            var i = {
                                                translate: [t("translateX"), t("translateY")],
                                                skewX: [t("skewX")],
                                                skewY: [t("skewY")],
                                                scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
                                                rotate: [t("rotateZ"), 0, 0],
                                            };
                                            d.each(r(e).transformCache, function (e) {
                                                /^translate/i.test(e) ? (e = "translate") : /^scale/i.test(e) ? (e = "scale") : /^rotate/i.test(e) && (e = "rotate"), i[e] && ((n += e + "(" + i[e].join(" ") + ") "), delete i[e]);
                                            });
                                        } else {
                                            var o, a;
                                            d.each(r(e).transformCache, function (t) {
                                                return (o = r(e).transformCache[t]), "transformPerspective" === t ? ((a = o), !0) : (9 === f && "rotateZ" === t && (t = "rotate"), void (n += t + o + " "));
                                            }),
                                                a && (n = "perspective" + a + " " + n);
                                        }
                                        x.setPropertyValue(e, "transform", n);
                                    },
                                });
                                x.Hooks.register(),
                                    x.Normalizations.register(),
                                    (y.hook = function (e, t, n) {
                                        var a = i;
                                        return (
                                            (e = o(e)),
                                            d.each(e, function (e, o) {
                                                if ((r(o) === i && y.init(o), n === i)) a === i && (a = y.CSS.getPropertyValue(o, t));
                                                else {
                                                    var s = y.CSS.setPropertyValue(o, t, n);
                                                    "transform" === s[0] && y.CSS.flushTransformCache(o), (a = s);
                                                }
                                            }),
                                            a
                                        );
                                    });
                                var b = function () {
                                    function e() {
                                        return s ? P.promise || null : f;
                                    }
                                    function a() {
                                        function e() {
                                            function e(e, t) {
                                                var n = i,
                                                    o = i,
                                                    r = i;
                                                return (
                                                    p.isArray(e)
                                                        ? ((n = e[0]),
                                                          (!p.isArray(e[1]) && /^[\d-]/.test(e[1])) || p.isFunction(e[1]) || x.RegEx.isHex.test(e[1])
                                                              ? (r = e[1])
                                                              : ((p.isString(e[1]) && !x.RegEx.isHex.test(e[1])) || p.isArray(e[1])) && ((o = t ? e[1] : c(e[1], s.duration)), e[2] !== i && (r = e[2])))
                                                        : (n = e),
                                                    t || (o = o || s.easing),
                                                    p.isFunction(n) && (n = n.call(a, E, S)),
                                                    p.isFunction(r) && (r = r.call(a, E, S)),
                                                    [n || 0, o, r]
                                                );
                                            }
                                            function f(e, t) {
                                                var n, i;
                                                return (
                                                    (i = (t || "0")
                                                        .toString()
                                                        .toLowerCase()
                                                        .replace(/[%A-z]+$/, function (e) {
                                                            return (n = e), "";
                                                        })),
                                                    n || (n = x.Values.getUnitType(e)),
                                                    [i, n]
                                                );
                                            }
                                            function h() {
                                                var e = { myParent: a.parentNode || n.body, position: x.getPropertyValue(a, "position"), fontSize: x.getPropertyValue(a, "fontSize") },
                                                    i = e.position === q.lastPosition && e.myParent === q.lastParent,
                                                    o = e.fontSize === q.lastFontSize;
                                                (q.lastParent = e.myParent), (q.lastPosition = e.position), (q.lastFontSize = e.fontSize);
                                                var s = 100,
                                                    c = {};
                                                if (o && i) (c.emToPx = q.lastEmToPx), (c.percentToPxWidth = q.lastPercentToPxWidth), (c.percentToPxHeight = q.lastPercentToPxHeight);
                                                else {
                                                    var l = r(a).isSVG ? n.createElementNS("http://www.w3.org/2000/svg", "rect") : n.createElement("div");
                                                    y.init(l),
                                                        e.myParent.appendChild(l),
                                                        d.each(["overflow", "overflowX", "overflowY"], function (e, t) {
                                                            y.CSS.setPropertyValue(l, t, "hidden");
                                                        }),
                                                        y.CSS.setPropertyValue(l, "position", e.position),
                                                        y.CSS.setPropertyValue(l, "fontSize", e.fontSize),
                                                        y.CSS.setPropertyValue(l, "boxSizing", "content-box"),
                                                        d.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (e, t) {
                                                            y.CSS.setPropertyValue(l, t, s + "%");
                                                        }),
                                                        y.CSS.setPropertyValue(l, "paddingLeft", s + "em"),
                                                        (c.percentToPxWidth = q.lastPercentToPxWidth = (parseFloat(x.getPropertyValue(l, "width", null, !0)) || 1) / s),
                                                        (c.percentToPxHeight = q.lastPercentToPxHeight = (parseFloat(x.getPropertyValue(l, "height", null, !0)) || 1) / s),
                                                        (c.emToPx = q.lastEmToPx = (parseFloat(x.getPropertyValue(l, "paddingLeft")) || 1) / s),
                                                        e.myParent.removeChild(l);
                                                }
                                                return (
                                                    null === q.remToPx && (q.remToPx = parseFloat(x.getPropertyValue(n.body, "fontSize")) || 16),
                                                    null === q.vwToPx && ((q.vwToPx = parseFloat(t.innerWidth) / 100), (q.vhToPx = parseFloat(t.innerHeight) / 100)),
                                                    (c.remToPx = q.remToPx),
                                                    (c.vwToPx = q.vwToPx),
                                                    (c.vhToPx = q.vhToPx),
                                                    y.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(c), a),
                                                    c
                                                );
                                            }
                                            if (s.begin && 0 === E)
                                                try {
                                                    s.begin.call(m, m);
                                                } catch (e) {
                                                    setTimeout(function () {
                                                        throw e;
                                                    }, 1);
                                                }
                                            if ("scroll" === T) {
                                                var v,
                                                    b,
                                                    _,
                                                    k = /^x$/i.test(s.axis) ? "Left" : "Top",
                                                    C = parseFloat(s.offset) || 0;
                                                s.container
                                                    ? p.isWrapped(s.container) || p.isNode(s.container)
                                                        ? ((s.container = s.container[0] || s.container), (_ = (v = s.container["scroll" + k]) + d(a).position()[k.toLowerCase()] + C))
                                                        : (s.container = null)
                                                    : ((v = y.State.scrollAnchor[y.State["scrollProperty" + k]]),
                                                      (b = y.State.scrollAnchor[y.State["scrollProperty" + ("Left" === k ? "Top" : "Left")]]),
                                                      (_ = d(a).offset()[k.toLowerCase()] + C)),
                                                    (u = {
                                                        scroll: { rootPropertyValue: !1, startValue: v, currentValue: v, endValue: _, unitType: "", easing: s.easing, scrollData: { container: s.container, direction: k, alternateValue: b } },
                                                        element: a,
                                                    }),
                                                    y.debug && console.log("tweensContainer (scroll): ", u.scroll, a);
                                            } else if ("reverse" === T) {
                                                if (!r(a).tweensContainer) return void d.dequeue(a, s.queue);
                                                "none" === r(a).opts.display && (r(a).opts.display = "auto"),
                                                    "hidden" === r(a).opts.visibility && (r(a).opts.visibility = "visible"),
                                                    (r(a).opts.loop = !1),
                                                    (r(a).opts.begin = null),
                                                    (r(a).opts.complete = null),
                                                    w.easing || delete s.easing,
                                                    w.duration || delete s.duration,
                                                    (s = d.extend({}, r(a).opts, s));
                                                var L = d.extend(!0, {}, r(a).tweensContainer);
                                                for (var A in L)
                                                    if ("element" !== A) {
                                                        var D = L[A].startValue;
                                                        (L[A].startValue = L[A].currentValue = L[A].endValue),
                                                            (L[A].endValue = D),
                                                            p.isEmptyObject(w) || (L[A].easing = s.easing),
                                                            y.debug && console.log("reverse tweensContainer (" + A + "): " + JSON.stringify(L[A]), a);
                                                    }
                                                u = L;
                                            } else if ("start" === T) {
                                                for (var j in (r(a).tweensContainer && !0 === r(a).isAnimating && (L = r(a).tweensContainer),
                                                d.each(g, function (t, n) {
                                                    if (RegExp("^" + x.Lists.colors.join("$|^") + "$").test(t)) {
                                                        var o = e(n, !0),
                                                            r = o[0],
                                                            a = o[1],
                                                            s = o[2];
                                                        if (x.RegEx.isHex.test(r)) {
                                                            for (var c = ["Red", "Green", "Blue"], l = x.Values.hexToRgb(r), u = s ? x.Values.hexToRgb(s) : i, d = 0; d < c.length; d++) {
                                                                var f = [l[d]];
                                                                a && f.push(a), u !== i && f.push(u[d]), (g[t + c[d]] = f);
                                                            }
                                                            delete g[t];
                                                        }
                                                    }
                                                }),
                                                g)) {
                                                    var N = e(g[j]),
                                                        M = N[0],
                                                        R = N[1],
                                                        O = N[2];
                                                    j = x.Names.camelCase(j);
                                                    var H = x.Hooks.getRoot(j),
                                                        F = !1;
                                                    if (r(a).isSVG || "tween" === H || !1 !== x.Names.prefixCheck(H)[1] || x.Normalizations.registered[H] !== i) {
                                                        ((s.display !== i && null !== s.display && "none" !== s.display) || (s.visibility !== i && "hidden" !== s.visibility)) && /opacity|filter/.test(j) && !O && 0 !== M && (O = 0),
                                                            s._cacheValues && L && L[j]
                                                                ? (O === i && (O = L[j].endValue + L[j].unitType), (F = r(a).rootPropertyValueCache[H]))
                                                                : x.Hooks.registered[j]
                                                                ? O === i
                                                                    ? ((F = x.getPropertyValue(a, H)), (O = x.getPropertyValue(a, j, F)))
                                                                    : (F = x.Hooks.templates[H][1])
                                                                : O === i && (O = x.getPropertyValue(a, j));
                                                        var B,
                                                            V,
                                                            W,
                                                            z = !1;
                                                        if (
                                                            ((O = (B = f(j, O))[0]),
                                                            (W = B[1]),
                                                            (M = (B = f(j, M))[0].replace(/^([+-\/*])=/, function (e, t) {
                                                                return (z = t), "";
                                                            })),
                                                            (V = B[1]),
                                                            (O = parseFloat(O) || 0),
                                                            (M = parseFloat(M) || 0),
                                                            "%" === V &&
                                                                (/^(fontSize|lineHeight)$/.test(j) ? ((M /= 100), (V = "em")) : /^scale/.test(j) ? ((M /= 100), (V = "")) : /(Red|Green|Blue)$/i.test(j) && ((M = (M / 100) * 255), (V = ""))),
                                                            /[\/*]/.test(z))
                                                        )
                                                            V = W;
                                                        else if (W !== V && 0 !== O)
                                                            if (0 === M) V = W;
                                                            else {
                                                                o = o || h();
                                                                var $ = /margin|padding|left|right|width|text|word|letter/i.test(j) || /X$/.test(j) || "x" === j ? "x" : "y";
                                                                switch (W) {
                                                                    case "%":
                                                                        O *= "x" === $ ? o.percentToPxWidth : o.percentToPxHeight;
                                                                        break;
                                                                    case "px":
                                                                        break;
                                                                    default:
                                                                        O *= o[W + "ToPx"];
                                                                }
                                                                switch (V) {
                                                                    case "%":
                                                                        O *= 1 / ("x" === $ ? o.percentToPxWidth : o.percentToPxHeight);
                                                                        break;
                                                                    case "px":
                                                                        break;
                                                                    default:
                                                                        O *= 1 / o[V + "ToPx"];
                                                                }
                                                            }
                                                        switch (z) {
                                                            case "+":
                                                                M = O + M;
                                                                break;
                                                            case "-":
                                                                M = O - M;
                                                                break;
                                                            case "*":
                                                                M *= O;
                                                                break;
                                                            case "/":
                                                                M = O / M;
                                                        }
                                                        (u[j] = { rootPropertyValue: F, startValue: O, currentValue: O, endValue: M, unitType: V, easing: R }),
                                                            y.debug && console.log("tweensContainer (" + j + "): " + JSON.stringify(u[j]), a);
                                                    } else y.debug && console.log("Skipping [" + H + "] due to a lack of browser support.");
                                                }
                                                u.element = a;
                                            }
                                            u.element &&
                                                (x.Values.addClass(a, "velocity-animating"),
                                                I.push(u),
                                                "" === s.queue && ((r(a).tweensContainer = u), (r(a).opts = s)),
                                                (r(a).isAnimating = !0),
                                                E === S - 1 ? (y.State.calls.push([I, m, s, null, P.resolver]), !1 === y.State.isTicking && ((y.State.isTicking = !0), l())) : E++);
                                        }
                                        var o,
                                            a = this,
                                            s = d.extend({}, y.defaults, w),
                                            u = {};
                                        switch (
                                            (r(a) === i && y.init(a),
                                            parseFloat(s.delay) &&
                                                !1 !== s.queue &&
                                                d.queue(a, s.queue, function (e) {
                                                    (y.velocityQueueEntryFlag = !0), (r(a).delayTimer = { setTimeout: setTimeout(e, parseFloat(s.delay)), next: e });
                                                }),
                                            s.duration.toString().toLowerCase())
                                        ) {
                                            case "fast":
                                                s.duration = 200;
                                                break;
                                            case "normal":
                                                s.duration = v;
                                                break;
                                            case "slow":
                                                s.duration = 600;
                                                break;
                                            default:
                                                s.duration = parseFloat(s.duration) || 1;
                                        }
                                        !1 !== y.mock && (!0 === y.mock ? (s.duration = s.delay = 1) : ((s.duration *= parseFloat(y.mock) || 1), (s.delay *= parseFloat(y.mock) || 1))),
                                            (s.easing = c(s.easing, s.duration)),
                                            s.begin && !p.isFunction(s.begin) && (s.begin = null),
                                            s.progress && !p.isFunction(s.progress) && (s.progress = null),
                                            s.complete && !p.isFunction(s.complete) && (s.complete = null),
                                            s.display !== i && null !== s.display && ((s.display = s.display.toString().toLowerCase()), "auto" === s.display && (s.display = y.CSS.Values.getDisplayType(a))),
                                            s.visibility !== i && null !== s.visibility && (s.visibility = s.visibility.toString().toLowerCase()),
                                            (s.mobileHA = s.mobileHA && y.State.isMobile && !y.State.isGingerbread),
                                            !1 === s.queue
                                                ? s.delay
                                                    ? setTimeout(e, s.delay)
                                                    : e()
                                                : d.queue(a, s.queue, function (t, n) {
                                                      return !0 === n ? (P.promise && P.resolver(m), !0) : ((y.velocityQueueEntryFlag = !0), void e());
                                                  }),
                                            ("" !== s.queue && "fx" !== s.queue) || "inprogress" === d.queue(a)[0] || d.dequeue(a);
                                    }
                                    var s,
                                        f,
                                        h,
                                        m,
                                        g,
                                        w,
                                        _ = arguments[0] && (arguments[0].p || (d.isPlainObject(arguments[0].properties) && !arguments[0].properties.names) || p.isString(arguments[0].properties));
                                    if ((p.isWrapped(this) ? ((s = !1), (h = 0), (m = this), (f = this)) : ((s = !0), (h = 1), (m = _ ? arguments[0].elements || arguments[0].e : arguments[0])), (m = o(m)))) {
                                        _ ? ((g = arguments[0].properties || arguments[0].p), (w = arguments[0].options || arguments[0].o)) : ((g = arguments[h]), (w = arguments[h + 1]));
                                        var S = m.length,
                                            E = 0;
                                        if (!/^(stop|finish|finishAll)$/i.test(g) && !d.isPlainObject(w)) {
                                            var k = h + 1;
                                            w = {};
                                            for (var C = k; C < arguments.length; C++)
                                                p.isArray(arguments[C]) || (!/^(fast|normal|slow)$/i.test(arguments[C]) && !/^\d/.test(arguments[C]))
                                                    ? p.isString(arguments[C]) || p.isArray(arguments[C])
                                                        ? (w.easing = arguments[C])
                                                        : p.isFunction(arguments[C]) && (w.complete = arguments[C])
                                                    : (w.duration = arguments[C]);
                                        }
                                        var T,
                                            P = { promise: null, resolver: null, rejecter: null };
                                        switch (
                                            (s &&
                                                y.Promise &&
                                                (P.promise = new y.Promise(function (e, t) {
                                                    (P.resolver = e), (P.rejecter = t);
                                                })),
                                            g)
                                        ) {
                                            case "scroll":
                                                T = "scroll";
                                                break;
                                            case "reverse":
                                                T = "reverse";
                                                break;
                                            case "finish":
                                            case "finishAll":
                                            case "stop":
                                                d.each(m, function (e, t) {
                                                    r(t) && r(t).delayTimer && (clearTimeout(r(t).delayTimer.setTimeout), r(t).delayTimer.next && r(t).delayTimer.next(), delete r(t).delayTimer),
                                                        "finishAll" !== g ||
                                                            (!0 !== w && !p.isString(w)) ||
                                                            (d.each(d.queue(t, p.isString(w) ? w : ""), function (e, t) {
                                                                p.isFunction(t) && t();
                                                            }),
                                                            d.queue(t, p.isString(w) ? w : "", []));
                                                });
                                                var L = [];
                                                return (
                                                    d.each(y.State.calls, function (e, t) {
                                                        t &&
                                                            d.each(t[1], function (n, o) {
                                                                var a = w === i ? "" : w;
                                                                return (
                                                                    (!0 !== a && t[2].queue !== a && (w !== i || !1 !== t[2].queue)) ||
                                                                    void d.each(m, function (n, i) {
                                                                        i === o &&
                                                                            ((!0 === w || p.isString(w)) &&
                                                                                (d.each(d.queue(i, p.isString(w) ? w : ""), function (e, t) {
                                                                                    p.isFunction(t) && t(null, !0);
                                                                                }),
                                                                                d.queue(i, p.isString(w) ? w : "", [])),
                                                                            "stop" === g
                                                                                ? (r(i) &&
                                                                                      r(i).tweensContainer &&
                                                                                      !1 !== a &&
                                                                                      d.each(r(i).tweensContainer, function (e, t) {
                                                                                          t.endValue = t.currentValue;
                                                                                      }),
                                                                                  L.push(e))
                                                                                : ("finish" === g || "finishAll" === g) && (t[2].duration = 1));
                                                                    })
                                                                );
                                                            });
                                                    }),
                                                    "stop" === g &&
                                                        (d.each(L, function (e, t) {
                                                            u(t, !0);
                                                        }),
                                                        P.promise && P.resolver(m)),
                                                    e()
                                                );
                                            default:
                                                if (!d.isPlainObject(g) || p.isEmptyObject(g)) {
                                                    if (p.isString(g) && y.Redirects[g]) {
                                                        var A = (M = d.extend({}, w)).duration,
                                                            D = M.delay || 0;
                                                        return (
                                                            !0 === M.backwards && (m = d.extend(!0, [], m).reverse()),
                                                            d.each(m, function (e, t) {
                                                                parseFloat(M.stagger) ? (M.delay = D + parseFloat(M.stagger) * e) : p.isFunction(M.stagger) && (M.delay = D + M.stagger.call(t, e, S)),
                                                                    M.drag &&
                                                                        ((M.duration = parseFloat(A) || (/^(callout|transition)/.test(g) ? 1e3 : v)),
                                                                        (M.duration = Math.max(M.duration * (M.backwards ? 1 - e / S : (e + 1) / S), 0.75 * M.duration, 200))),
                                                                    y.Redirects[g].call(t, t, M || {}, e, S, m, P.promise ? P : i);
                                                            }),
                                                            e()
                                                        );
                                                    }
                                                    var j = "Velocity: First argument (" + g + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                                    return P.promise ? P.rejecter(new Error(j)) : console.log(j), e();
                                                }
                                                T = "start";
                                        }
                                        var N,
                                            M,
                                            q = { lastParent: null, lastPosition: null, lastFontSize: null, lastPercentToPxWidth: null, lastPercentToPxHeight: null, lastEmToPx: null, remToPx: null, vwToPx: null, vhToPx: null },
                                            I = [];
                                        if (
                                            (d.each(m, function (e, t) {
                                                p.isNode(t) && a.call(t);
                                            }),
                                            ((M = d.extend({}, y.defaults, w)).loop = parseInt(M.loop)),
                                            (N = 2 * M.loop - 1),
                                            M.loop)
                                        )
                                            for (var R = 0; N > R; R++) {
                                                var O = { delay: M.delay, progress: M.progress };
                                                R === N - 1 && ((O.display = M.display), (O.visibility = M.visibility), (O.complete = M.complete)), b(m, "reverse", O);
                                            }
                                        return e();
                                    }
                                };
                                (y = d.extend(b, y)).animate = b;
                                var _ = t.requestAnimationFrame || h;
                                return (
                                    y.State.isMobile ||
                                        n.hidden === i ||
                                        n.addEventListener("visibilitychange", function () {
                                            n.hidden
                                                ? ((_ = function (e) {
                                                      return setTimeout(function () {
                                                          e(!0);
                                                      }, 16);
                                                  }),
                                                  l())
                                                : (_ = t.requestAnimationFrame || h);
                                        }),
                                    (e.Velocity = y),
                                    e !== t && ((e.fn.velocity = b), (e.fn.velocity.defaults = y.defaults)),
                                    d.each(["Down", "Up"], function (e, t) {
                                        y.Redirects["slide" + t] = function (e, n, o, r, a, s) {
                                            var c = d.extend({}, n),
                                                l = c.begin,
                                                u = c.complete,
                                                f = { height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: "" },
                                                h = {};
                                            c.display === i && (c.display = "Down" === t ? ("inline" === y.CSS.Values.getDisplayType(e) ? "inline-block" : "block") : "none"),
                                                (c.begin = function () {
                                                    for (var n in (l && l.call(a, a), f)) {
                                                        h[n] = e.style[n];
                                                        var i = y.CSS.getPropertyValue(e, n);
                                                        f[n] = "Down" === t ? [i, 0] : [0, i];
                                                    }
                                                    (h.overflow = e.style.overflow), (e.style.overflow = "hidden");
                                                }),
                                                (c.complete = function () {
                                                    for (var t in h) e.style[t] = h[t];
                                                    u && u.call(a, a), s && s.resolver(a);
                                                }),
                                                y(e, f, c);
                                        };
                                    }),
                                    d.each(["In", "Out"], function (e, t) {
                                        y.Redirects["fade" + t] = function (e, n, o, r, a, s) {
                                            var c = d.extend({}, n),
                                                l = { opacity: "In" === t ? 1 : 0 },
                                                u = c.complete;
                                            (c.complete =
                                                o !== r - 1
                                                    ? (c.begin = null)
                                                    : function () {
                                                          u && u.call(a, a), s && s.resolver(a);
                                                      }),
                                                c.display === i && (c.display = "In" === t ? "auto" : "none"),
                                                y(this, l, c);
                                        };
                                    }),
                                    y
                                );
                            }
                            jQuery.fn.velocity = jQuery.fn.animate;
                        })(window.jQuery || window.Zepto || window, window, document);
                    }),
                    "object" == typeof e.exports ? (e.exports = r()) : void 0 === (o = "function" == typeof (i = r) ? i.call(t, n, t, e) : i) || (e.exports = o);
            },
            5150: function (e, t, n) {
                e.exports = (function () {
                    "use strict";
                    function e(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }
                    function t(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
                        }
                    }
                    var i = void 0 !== n.g && "[object global]" === {}.toString.call(n.g);
                    function o(e, t) {
                        return 0 === e.indexOf(t.toLowerCase()) ? e : "".concat(t.toLowerCase()).concat(e.substr(0, 1).toUpperCase()).concat(e.substr(1));
                    }
                    function r(e) {
                        return Boolean(e && 1 === e.nodeType && "nodeName" in e && e.ownerDocument && e.ownerDocument.defaultView);
                    }
                    function a(e) {
                        return !isNaN(parseFloat(e)) && isFinite(e) && Math.floor(e) == e;
                    }
                    function s(e) {
                        return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e);
                    }
                    function c() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.id,
                            n = e.url,
                            i = t || n;
                        if (!i) throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
                        if (a(i)) return "https://vimeo.com/".concat(i);
                        if (s(i)) return i.replace("http:", "https:");
                        if (t) throw new TypeError("“".concat(t, "” is not a valid video id."));
                        throw new TypeError("“".concat(i, "” is not a vimeo.com url."));
                    }
                    var l = void 0 !== Array.prototype.indexOf,
                        u = "undefined" != typeof window && void 0 !== window.postMessage;
                    if (!(i || (l && u))) throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
                    var d = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== n.g ? n.g : "undefined" != typeof self ? self : {};
                    !(function (e) {
                        if (!e.WeakMap) {
                            var t = Object.prototype.hasOwnProperty,
                                n = function (e, t, n) {
                                    Object.defineProperty ? Object.defineProperty(e, t, { configurable: !0, writable: !0, value: n }) : (e[t] = n);
                                };
                            e.WeakMap = (function () {
                                function e() {
                                    if (void 0 === this) throw new TypeError("Constructor WeakMap requires 'new'");
                                    if ((n(this, "_id", r("_WeakMap")), arguments.length > 0)) throw new TypeError("WeakMap iterable is not supported");
                                }
                                function o(e, n) {
                                    if (!i(e) || !t.call(e, "_id")) throw new TypeError(n + " method called on incompatible receiver " + typeof e);
                                }
                                function r(e) {
                                    return e + "_" + a() + "." + a();
                                }
                                function a() {
                                    return Math.random().toString().substring(2);
                                }
                                return (
                                    n(e.prototype, "delete", function (e) {
                                        if ((o(this, "delete"), !i(e))) return !1;
                                        var t = e[this._id];
                                        return !(!t || t[0] !== e || (delete e[this._id], 0));
                                    }),
                                    n(e.prototype, "get", function (e) {
                                        if ((o(this, "get"), i(e))) {
                                            var t = e[this._id];
                                            return t && t[0] === e ? t[1] : void 0;
                                        }
                                    }),
                                    n(e.prototype, "has", function (e) {
                                        if ((o(this, "has"), !i(e))) return !1;
                                        var t = e[this._id];
                                        return !(!t || t[0] !== e);
                                    }),
                                    n(e.prototype, "set", function (e, t) {
                                        if ((o(this, "set"), !i(e))) throw new TypeError("Invalid value used as weak map key");
                                        var r = e[this._id];
                                        return r && r[0] === e ? ((r[1] = t), this) : (n(e, this._id, [e, t]), this);
                                    }),
                                    n(e, "_polyfill", !0),
                                    e
                                );
                            })();
                        }
                        function i(e) {
                            return Object(e) === e;
                        }
                    })("undefined" != typeof self ? self : "undefined" != typeof window ? window : d);
                    var f = (function (e, t) {
                            return e((t = { exports: {} }), t.exports), t.exports;
                        })(function (e) {
                            var t, n, i;
                            (i = function () {
                                var e,
                                    t,
                                    n,
                                    i = Object.prototype.toString,
                                    o =
                                        "undefined" != typeof setImmediate
                                            ? function (e) {
                                                  return setImmediate(e);
                                              }
                                            : setTimeout;
                                try {
                                    Object.defineProperty({}, "x", {}),
                                        (e = function (e, t, n, i) {
                                            return Object.defineProperty(e, t, { value: n, writable: !0, configurable: !1 !== i });
                                        });
                                } catch (t) {
                                    e = function (e, t, n) {
                                        return (e[t] = n), e;
                                    };
                                }
                                function r(e, i) {
                                    n.add(e, i), t || (t = o(n.drain));
                                }
                                function a(e) {
                                    var t,
                                        n = typeof e;
                                    return null == e || ("object" != n && "function" != n) || (t = e.then), "function" == typeof t && t;
                                }
                                function s() {
                                    for (var e = 0; e < this.chain.length; e++) c(this, 1 === this.state ? this.chain[e].success : this.chain[e].failure, this.chain[e]);
                                    this.chain.length = 0;
                                }
                                function c(e, t, n) {
                                    var i, o;
                                    try {
                                        !1 === t ? n.reject(e.msg) : (i = !0 === t ? e.msg : t.call(void 0, e.msg)) === n.promise ? n.reject(TypeError("Promise-chain cycle")) : (o = a(i)) ? o.call(i, n.resolve, n.reject) : n.resolve(i);
                                    } catch (e) {
                                        n.reject(e);
                                    }
                                }
                                function l(e) {
                                    var t,
                                        n = this;
                                    if (!n.triggered) {
                                        (n.triggered = !0), n.def && (n = n.def);
                                        try {
                                            (t = a(e))
                                                ? r(function () {
                                                      var i = new f(n);
                                                      try {
                                                          t.call(
                                                              e,
                                                              function () {
                                                                  l.apply(i, arguments);
                                                              },
                                                              function () {
                                                                  u.apply(i, arguments);
                                                              }
                                                          );
                                                      } catch (e) {
                                                          u.call(i, e);
                                                      }
                                                  })
                                                : ((n.msg = e), (n.state = 1), n.chain.length > 0 && r(s, n));
                                        } catch (e) {
                                            u.call(new f(n), e);
                                        }
                                    }
                                }
                                function u(e) {
                                    var t = this;
                                    t.triggered || ((t.triggered = !0), t.def && (t = t.def), (t.msg = e), (t.state = 2), t.chain.length > 0 && r(s, t));
                                }
                                function d(e, t, n, i) {
                                    for (var o = 0; o < t.length; o++)
                                        !(function (o) {
                                            e.resolve(t[o]).then(function (e) {
                                                n(o, e);
                                            }, i);
                                        })(o);
                                }
                                function f(e) {
                                    (this.def = e), (this.triggered = !1);
                                }
                                function h(e) {
                                    (this.promise = e), (this.state = 0), (this.triggered = !1), (this.chain = []), (this.msg = void 0);
                                }
                                function p(e) {
                                    if ("function" != typeof e) throw TypeError("Not a function");
                                    if (0 !== this.__NPO__) throw TypeError("Not a promise");
                                    this.__NPO__ = 1;
                                    var t = new h(this);
                                    (this.then = function (e, n) {
                                        var i = { success: "function" != typeof e || e, failure: "function" == typeof n && n };
                                        return (
                                            (i.promise = new this.constructor(function (e, t) {
                                                if ("function" != typeof e || "function" != typeof t) throw TypeError("Not a function");
                                                (i.resolve = e), (i.reject = t);
                                            })),
                                            t.chain.push(i),
                                            0 !== t.state && r(s, t),
                                            i.promise
                                        );
                                    }),
                                        (this.catch = function (e) {
                                            return this.then(void 0, e);
                                        });
                                    try {
                                        e.call(
                                            void 0,
                                            function (e) {
                                                l.call(t, e);
                                            },
                                            function (e) {
                                                u.call(t, e);
                                            }
                                        );
                                    } catch (e) {
                                        u.call(t, e);
                                    }
                                }
                                n = (function () {
                                    var e, n, i;
                                    function o(e, t) {
                                        (this.fn = e), (this.self = t), (this.next = void 0);
                                    }
                                    return {
                                        add: function (t, r) {
                                            (i = new o(t, r)), n ? (n.next = i) : (e = i), (n = i), (i = void 0);
                                        },
                                        drain: function () {
                                            var i = e;
                                            for (e = n = t = void 0; i; ) i.fn.call(i.self), (i = i.next);
                                        },
                                    };
                                })();
                                var m = e({}, "constructor", p, !1);
                                return (
                                    (p.prototype = m),
                                    e(m, "__NPO__", 0, !1),
                                    e(p, "resolve", function (e) {
                                        return e && "object" == typeof e && 1 === e.__NPO__
                                            ? e
                                            : new this(function (t, n) {
                                                  if ("function" != typeof t || "function" != typeof n) throw TypeError("Not a function");
                                                  t(e);
                                              });
                                    }),
                                    e(p, "reject", function (e) {
                                        return new this(function (t, n) {
                                            if ("function" != typeof t || "function" != typeof n) throw TypeError("Not a function");
                                            n(e);
                                        });
                                    }),
                                    e(p, "all", function (e) {
                                        var t = this;
                                        return "[object Array]" != i.call(e)
                                            ? t.reject(TypeError("Not an array"))
                                            : 0 === e.length
                                            ? t.resolve([])
                                            : new t(function (n, i) {
                                                  if ("function" != typeof n || "function" != typeof i) throw TypeError("Not a function");
                                                  var o = e.length,
                                                      r = Array(o),
                                                      a = 0;
                                                  d(
                                                      t,
                                                      e,
                                                      function (e, t) {
                                                          (r[e] = t), ++a === o && n(r);
                                                      },
                                                      i
                                                  );
                                              });
                                    }),
                                    e(p, "race", function (e) {
                                        var t = this;
                                        return "[object Array]" != i.call(e)
                                            ? t.reject(TypeError("Not an array"))
                                            : new t(function (n, i) {
                                                  if ("function" != typeof n || "function" != typeof i) throw TypeError("Not a function");
                                                  d(
                                                      t,
                                                      e,
                                                      function (e, t) {
                                                          n(t);
                                                      },
                                                      i
                                                  );
                                              });
                                    }),
                                    p
                                );
                            }),
                                ((n = d)[(t = "Promise")] = n[t] || i()),
                                e.exports && (e.exports = n[t]);
                        }),
                        h = new WeakMap();
                    function p(e, t, n) {
                        var i = h.get(e.element) || {};
                        t in i || (i[t] = []), i[t].push(n), h.set(e.element, i);
                    }
                    function m(e, t) {
                        return (h.get(e.element) || {})[t] || [];
                    }
                    function v(e, t, n) {
                        var i = h.get(e.element) || {};
                        if (!i[t]) return !0;
                        if (!n) return (i[t] = []), h.set(e.element, i), !0;
                        var o = i[t].indexOf(n);
                        return -1 !== o && i[t].splice(o, 1), h.set(e.element, i), i[t] && 0 === i[t].length;
                    }
                    function g(e, t) {
                        var n = h.get(e);
                        h.set(t, n), h.delete(e);
                    }
                    var y = [
                        "autopause",
                        "autoplay",
                        "background",
                        "byline",
                        "color",
                        "controls",
                        "dnt",
                        "height",
                        "id",
                        "loop",
                        "maxheight",
                        "maxwidth",
                        "muted",
                        "playsinline",
                        "portrait",
                        "responsive",
                        "speed",
                        "texttrack",
                        "title",
                        "transparent",
                        "url",
                        "width",
                    ];
                    function w(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return y.reduce(function (t, n) {
                            var i = e.getAttribute("data-vimeo-".concat(n));
                            return (i || "" === i) && (t[n] = "" === i ? 1 : i), t;
                        }, t);
                    }
                    function x(e, t) {
                        var n = e.html;
                        if (!t) throw new TypeError("An element must be provided");
                        if (null !== t.getAttribute("data-vimeo-initialized")) return t.querySelector("iframe");
                        var i = document.createElement("div");
                        return (i.innerHTML = n), t.appendChild(i.firstChild), t.setAttribute("data-vimeo-initialized", "true"), t.querySelector("iframe");
                    }
                    function b(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        return new Promise(function (i, o) {
                            if (!s(e)) throw new TypeError("“".concat(e, "” is not a vimeo.com url."));
                            var r = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e));
                            for (var a in t) t.hasOwnProperty(a) && (r += "&".concat(a, "=").concat(encodeURIComponent(t[a])));
                            var c = "XDomainRequest" in window ? new XDomainRequest() : new XMLHttpRequest();
                            c.open("GET", r, !0),
                                (c.onload = function () {
                                    if (404 !== c.status)
                                        if (403 !== c.status)
                                            try {
                                                var t = JSON.parse(c.responseText);
                                                if (403 === t.domain_status_code) return x(t, n), void o(new Error("“".concat(e, "” is not embeddable.")));
                                                i(t);
                                            } catch (e) {
                                                o(e);
                                            }
                                        else o(new Error("“".concat(e, "” is not embeddable.")));
                                    else o(new Error("“".concat(e, "” was not found.")));
                                }),
                                (c.onerror = function () {
                                    var e = c.status ? " (".concat(c.status, ")") : "";
                                    o(new Error("There was an error fetching the embed code from Vimeo".concat(e, ".")));
                                }),
                                c.send();
                        });
                    }
                    function _(e) {
                        if ("string" == typeof e)
                            try {
                                e = JSON.parse(e);
                            } catch (e) {
                                return console.warn(e), {};
                            }
                        return e;
                    }
                    function S(e, t, n) {
                        if (e.element.contentWindow && e.element.contentWindow.postMessage) {
                            var i = { method: t };
                            void 0 !== n && (i.value = n);
                            var o = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
                            o >= 8 && o < 10 && (i = JSON.stringify(i)), e.element.contentWindow.postMessage(i, e.origin);
                        }
                    }
                    function E(e, t) {
                        var n,
                            i = [];
                        if ((t = _(t)).event)
                            "error" === t.event &&
                                m(e, t.data.method).forEach(function (n) {
                                    var i = new Error(t.data.message);
                                    (i.name = t.data.name), n.reject(i), v(e, t.data.method, n);
                                }),
                                (i = m(e, "event:".concat(t.event))),
                                (n = t.data);
                        else if (t.method) {
                            var o = (function (e, t) {
                                var n = m(e, t);
                                if (n.length < 1) return !1;
                                var i = n.shift();
                                return v(e, t, i), i;
                            })(e, t.method);
                            o && (i.push(o), (n = t.value));
                        }
                        i.forEach(function (t) {
                            try {
                                if ("function" == typeof t) return void t.call(e, n);
                                t.resolve(n);
                            } catch (e) {}
                        });
                    }
                    var k = new WeakMap(),
                        C = new WeakMap(),
                        T = {},
                        P = (function () {
                            function n(t) {
                                var i = this,
                                    o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                if (
                                    (e(this, n),
                                    window.jQuery && t instanceof jQuery && (t.length > 1 && window.console && console.warn && console.warn("A jQuery object with multiple elements was passed, using the first element."), (t = t[0])),
                                    "undefined" != typeof document && "string" == typeof t && (t = document.getElementById(t)),
                                    !r(t))
                                )
                                    throw new TypeError("You must pass either a valid element or a valid id.");
                                if ("IFRAME" !== t.nodeName) {
                                    var a = t.querySelector("iframe");
                                    a && (t = a);
                                }
                                if ("IFRAME" === t.nodeName && !s(t.getAttribute("src") || "")) throw new Error("The player element passed isn’t a Vimeo embed.");
                                if (k.has(t)) return k.get(t);
                                (this._window = t.ownerDocument.defaultView), (this.element = t), (this.origin = "*");
                                var l = new f(function (e, n) {
                                    if (
                                        ((i._onMessage = function (t) {
                                            if (s(t.origin) && i.element.contentWindow === t.source) {
                                                "*" === i.origin && (i.origin = t.origin);
                                                var o = _(t.data);
                                                if (o && "error" === o.event && o.data && "ready" === o.data.method) {
                                                    var r = new Error(o.data.message);
                                                    return (r.name = o.data.name), void n(r);
                                                }
                                                var a = o && "ready" === o.event,
                                                    c = o && "ping" === o.method;
                                                if (a || c) return i.element.setAttribute("data-ready", "true"), void e();
                                                E(i, o);
                                            }
                                        }),
                                        i._window.addEventListener("message", i._onMessage),
                                        "IFRAME" !== i.element.nodeName)
                                    ) {
                                        var r = w(t, o);
                                        b(c(r), r, t)
                                            .then(function (e) {
                                                var n = x(e, t);
                                                return (i.element = n), (i._originalElement = t), g(t, n), k.set(i.element, i), e;
                                            })
                                            .catch(n);
                                    }
                                });
                                if ((C.set(this, l), k.set(this.element, this), "IFRAME" === this.element.nodeName && S(this, "ping"), T.isEnabled)) {
                                    var u = function () {
                                        return T.exit();
                                    };
                                    T.on("fullscreenchange", function () {
                                        T.isFullscreen ? p(i, "event:exitFullscreen", u) : v(i, "event:exitFullscreen", u),
                                            i.ready().then(function () {
                                                S(i, "fullscreenchange", T.isFullscreen);
                                            });
                                    });
                                }
                                return this;
                            }
                            return (
                                (i = n),
                                (a = [
                                    {
                                        key: "callMethod",
                                        value: function (e) {
                                            var t = this,
                                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                            return new f(function (i, o) {
                                                return t
                                                    .ready()
                                                    .then(function () {
                                                        p(t, e, { resolve: i, reject: o }), S(t, e, n);
                                                    })
                                                    .catch(o);
                                            });
                                        },
                                    },
                                    {
                                        key: "get",
                                        value: function (e) {
                                            var t = this;
                                            return new f(function (n, i) {
                                                return (
                                                    (e = o(e, "get")),
                                                    t
                                                        .ready()
                                                        .then(function () {
                                                            p(t, e, { resolve: n, reject: i }), S(t, e);
                                                        })
                                                        .catch(i)
                                                );
                                            });
                                        },
                                    },
                                    {
                                        key: "set",
                                        value: function (e, t) {
                                            var n = this;
                                            return new f(function (i, r) {
                                                if (((e = o(e, "set")), null == t)) throw new TypeError("There must be a value to set.");
                                                return n
                                                    .ready()
                                                    .then(function () {
                                                        p(n, e, { resolve: i, reject: r }), S(n, e, t);
                                                    })
                                                    .catch(r);
                                            });
                                        },
                                    },
                                    {
                                        key: "on",
                                        value: function (e, t) {
                                            if (!e) throw new TypeError("You must pass an event name.");
                                            if (!t) throw new TypeError("You must pass a callback function.");
                                            if ("function" != typeof t) throw new TypeError("The callback must be a function.");
                                            0 === m(this, "event:".concat(e)).length && this.callMethod("addEventListener", e).catch(function () {}), p(this, "event:".concat(e), t);
                                        },
                                    },
                                    {
                                        key: "off",
                                        value: function (e, t) {
                                            if (!e) throw new TypeError("You must pass an event name.");
                                            if (t && "function" != typeof t) throw new TypeError("The callback must be a function.");
                                            v(this, "event:".concat(e), t) && this.callMethod("removeEventListener", e).catch(function (e) {});
                                        },
                                    },
                                    {
                                        key: "loadVideo",
                                        value: function (e) {
                                            return this.callMethod("loadVideo", e);
                                        },
                                    },
                                    {
                                        key: "ready",
                                        value: function () {
                                            var e =
                                                C.get(this) ||
                                                new f(function (e, t) {
                                                    t(new Error("Unknown player. Probably unloaded."));
                                                });
                                            return f.resolve(e);
                                        },
                                    },
                                    {
                                        key: "addCuePoint",
                                        value: function (e) {
                                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                            return this.callMethod("addCuePoint", { time: e, data: t });
                                        },
                                    },
                                    {
                                        key: "removeCuePoint",
                                        value: function (e) {
                                            return this.callMethod("removeCuePoint", e);
                                        },
                                    },
                                    {
                                        key: "enableTextTrack",
                                        value: function (e, t) {
                                            if (!e) throw new TypeError("You must pass a language.");
                                            return this.callMethod("enableTextTrack", { language: e, kind: t });
                                        },
                                    },
                                    {
                                        key: "disableTextTrack",
                                        value: function () {
                                            return this.callMethod("disableTextTrack");
                                        },
                                    },
                                    {
                                        key: "pause",
                                        value: function () {
                                            return this.callMethod("pause");
                                        },
                                    },
                                    {
                                        key: "play",
                                        value: function () {
                                            return this.callMethod("play");
                                        },
                                    },
                                    {
                                        key: "requestFullscreen",
                                        value: function () {
                                            return T.isEnabled ? T.request(this.element) : this.callMethod("requestFullscreen");
                                        },
                                    },
                                    {
                                        key: "exitFullscreen",
                                        value: function () {
                                            return T.isEnabled ? T.exit() : this.callMethod("exitFullscreen");
                                        },
                                    },
                                    {
                                        key: "getFullscreen",
                                        value: function () {
                                            return T.isEnabled ? f.resolve(T.isFullscreen) : this.get("fullscreen");
                                        },
                                    },
                                    {
                                        key: "requestPictureInPicture",
                                        value: function () {
                                            return this.callMethod("requestPictureInPicture");
                                        },
                                    },
                                    {
                                        key: "exitPictureInPicture",
                                        value: function () {
                                            return this.callMethod("exitPictureInPicture");
                                        },
                                    },
                                    {
                                        key: "getPictureInPicture",
                                        value: function () {
                                            return this.get("pictureInPicture");
                                        },
                                    },
                                    {
                                        key: "unload",
                                        value: function () {
                                            return this.callMethod("unload");
                                        },
                                    },
                                    {
                                        key: "destroy",
                                        value: function () {
                                            var e = this;
                                            return new f(function (t) {
                                                if (
                                                    (C.delete(e),
                                                    k.delete(e.element),
                                                    e._originalElement && (k.delete(e._originalElement), e._originalElement.removeAttribute("data-vimeo-initialized")),
                                                    e.element && "IFRAME" === e.element.nodeName && e.element.parentNode && e.element.parentNode.removeChild(e.element),
                                                    e.element && "DIV" === e.element.nodeName && e.element.parentNode)
                                                ) {
                                                    e.element.removeAttribute("data-vimeo-initialized");
                                                    var n = e.element.querySelector("iframe");
                                                    n && n.parentNode && n.parentNode.removeChild(n);
                                                }
                                                e._window.removeEventListener("message", e._onMessage), t();
                                            });
                                        },
                                    },
                                    {
                                        key: "getAutopause",
                                        value: function () {
                                            return this.get("autopause");
                                        },
                                    },
                                    {
                                        key: "setAutopause",
                                        value: function (e) {
                                            return this.set("autopause", e);
                                        },
                                    },
                                    {
                                        key: "getBuffered",
                                        value: function () {
                                            return this.get("buffered");
                                        },
                                    },
                                    {
                                        key: "getCameraProps",
                                        value: function () {
                                            return this.get("cameraProps");
                                        },
                                    },
                                    {
                                        key: "setCameraProps",
                                        value: function (e) {
                                            return this.set("cameraProps", e);
                                        },
                                    },
                                    {
                                        key: "getChapters",
                                        value: function () {
                                            return this.get("chapters");
                                        },
                                    },
                                    {
                                        key: "getCurrentChapter",
                                        value: function () {
                                            return this.get("currentChapter");
                                        },
                                    },
                                    {
                                        key: "getColor",
                                        value: function () {
                                            return this.get("color");
                                        },
                                    },
                                    {
                                        key: "setColor",
                                        value: function (e) {
                                            return this.set("color", e);
                                        },
                                    },
                                    {
                                        key: "getCuePoints",
                                        value: function () {
                                            return this.get("cuePoints");
                                        },
                                    },
                                    {
                                        key: "getCurrentTime",
                                        value: function () {
                                            return this.get("currentTime");
                                        },
                                    },
                                    {
                                        key: "setCurrentTime",
                                        value: function (e) {
                                            return this.set("currentTime", e);
                                        },
                                    },
                                    {
                                        key: "getDuration",
                                        value: function () {
                                            return this.get("duration");
                                        },
                                    },
                                    {
                                        key: "getEnded",
                                        value: function () {
                                            return this.get("ended");
                                        },
                                    },
                                    {
                                        key: "getLoop",
                                        value: function () {
                                            return this.get("loop");
                                        },
                                    },
                                    {
                                        key: "setLoop",
                                        value: function (e) {
                                            return this.set("loop", e);
                                        },
                                    },
                                    {
                                        key: "setMuted",
                                        value: function (e) {
                                            return this.set("muted", e);
                                        },
                                    },
                                    {
                                        key: "getMuted",
                                        value: function () {
                                            return this.get("muted");
                                        },
                                    },
                                    {
                                        key: "getPaused",
                                        value: function () {
                                            return this.get("paused");
                                        },
                                    },
                                    {
                                        key: "getPlaybackRate",
                                        value: function () {
                                            return this.get("playbackRate");
                                        },
                                    },
                                    {
                                        key: "setPlaybackRate",
                                        value: function (e) {
                                            return this.set("playbackRate", e);
                                        },
                                    },
                                    {
                                        key: "getPlayed",
                                        value: function () {
                                            return this.get("played");
                                        },
                                    },
                                    {
                                        key: "getQualities",
                                        value: function () {
                                            return this.get("qualities");
                                        },
                                    },
                                    {
                                        key: "getQuality",
                                        value: function () {
                                            return this.get("quality");
                                        },
                                    },
                                    {
                                        key: "setQuality",
                                        value: function (e) {
                                            return this.set("quality", e);
                                        },
                                    },
                                    {
                                        key: "getSeekable",
                                        value: function () {
                                            return this.get("seekable");
                                        },
                                    },
                                    {
                                        key: "getSeeking",
                                        value: function () {
                                            return this.get("seeking");
                                        },
                                    },
                                    {
                                        key: "getTextTracks",
                                        value: function () {
                                            return this.get("textTracks");
                                        },
                                    },
                                    {
                                        key: "getVideoEmbedCode",
                                        value: function () {
                                            return this.get("videoEmbedCode");
                                        },
                                    },
                                    {
                                        key: "getVideoId",
                                        value: function () {
                                            return this.get("videoId");
                                        },
                                    },
                                    {
                                        key: "getVideoTitle",
                                        value: function () {
                                            return this.get("videoTitle");
                                        },
                                    },
                                    {
                                        key: "getVideoWidth",
                                        value: function () {
                                            return this.get("videoWidth");
                                        },
                                    },
                                    {
                                        key: "getVideoHeight",
                                        value: function () {
                                            return this.get("videoHeight");
                                        },
                                    },
                                    {
                                        key: "getVideoUrl",
                                        value: function () {
                                            return this.get("videoUrl");
                                        },
                                    },
                                    {
                                        key: "getVolume",
                                        value: function () {
                                            return this.get("volume");
                                        },
                                    },
                                    {
                                        key: "setVolume",
                                        value: function (e) {
                                            return this.set("volume", e);
                                        },
                                    },
                                ]) && t(i.prototype, a),
                                l && t(i, l),
                                n
                            );
                            var i, a, l;
                        })();
                    return (
                        i ||
                            ((T = (function () {
                                var e = (function () {
                                        for (
                                            var e,
                                                t = [
                                                    ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                                                    ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                                                    ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                                                    ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                                                    ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"],
                                                ],
                                                n = 0,
                                                i = t.length,
                                                o = {};
                                            n < i;
                                            n++
                                        )
                                            if ((e = t[n]) && e[1] in document) {
                                                for (n = 0; n < e.length; n++) o[t[0][n]] = e[n];
                                                return o;
                                            }
                                        return !1;
                                    })(),
                                    t = { fullscreenchange: e.fullscreenchange, fullscreenerror: e.fullscreenerror },
                                    n = {
                                        request: function (t) {
                                            return new Promise(function (i, o) {
                                                var r = function e() {
                                                    n.off("fullscreenchange", e), i();
                                                };
                                                n.on("fullscreenchange", r);
                                                var a = (t = t || document.documentElement)[e.requestFullscreen]();
                                                a instanceof Promise && a.then(r).catch(o);
                                            });
                                        },
                                        exit: function () {
                                            return new Promise(function (t, i) {
                                                if (n.isFullscreen) {
                                                    var o = function e() {
                                                        n.off("fullscreenchange", e), t();
                                                    };
                                                    n.on("fullscreenchange", o);
                                                    var r = document[e.exitFullscreen]();
                                                    r instanceof Promise && r.then(o).catch(i);
                                                } else t();
                                            });
                                        },
                                        on: function (e, n) {
                                            var i = t[e];
                                            i && document.addEventListener(i, n);
                                        },
                                        off: function (e, n) {
                                            var i = t[e];
                                            i && document.removeEventListener(i, n);
                                        },
                                    };
                                return (
                                    Object.defineProperties(n, {
                                        isFullscreen: {
                                            get: function () {
                                                return Boolean(document[e.fullscreenElement]);
                                            },
                                        },
                                        element: {
                                            enumerable: !0,
                                            get: function () {
                                                return document[e.fullscreenElement];
                                            },
                                        },
                                        isEnabled: {
                                            enumerable: !0,
                                            get: function () {
                                                return Boolean(document[e.fullscreenEnabled]);
                                            },
                                        },
                                    }),
                                    n
                                );
                            })()),
                            (function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
                                    t = [].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),
                                    n = function (e) {
                                        "console" in window && console.error && console.error("There was an error creating an embed: ".concat(e));
                                    };
                                t.forEach(function (e) {
                                    try {
                                        if (null !== e.getAttribute("data-vimeo-defer")) return;
                                        var t = w(e);
                                        b(c(t), t, e)
                                            .then(function (t) {
                                                return x(t, e);
                                            })
                                            .catch(n);
                                    } catch (e) {
                                        n(e);
                                    }
                                });
                            })(),
                            (function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
                                if (!window.VimeoPlayerResizeEmbeds_) {
                                    window.VimeoPlayerResizeEmbeds_ = !0;
                                    var t = function (t) {
                                        if (s(t.origin) && t.data && "spacechange" === t.data.event)
                                            for (var n = e.querySelectorAll("iframe"), i = 0; i < n.length; i++)
                                                if (n[i].contentWindow === t.source) {
                                                    n[i].parentElement.style.paddingBottom = "".concat(t.data.data[0].bottom, "px");
                                                    break;
                                                }
                                    };
                                    window.addEventListener("message", t);
                                }
                            })()),
                        P
                    );
                })();
            },
            9755: function (e, t) {
                var n;
                !(function (t, n) {
                    "use strict";
                    "object" == typeof e.exports
                        ? (e.exports = t.document
                              ? n(t, !0)
                              : function (e) {
                                    if (!e.document) throw new Error("jQuery requires a window with a document");
                                    return n(e);
                                })
                        : n(t);
                })("undefined" != typeof window ? window : this, function (i, o) {
                    "use strict";
                    var r = [],
                        a = Object.getPrototypeOf,
                        s = r.slice,
                        c = r.flat
                            ? function (e) {
                                  return r.flat.call(e);
                              }
                            : function (e) {
                                  return r.concat.apply([], e);
                              },
                        l = r.push,
                        u = r.indexOf,
                        d = {},
                        f = d.toString,
                        h = d.hasOwnProperty,
                        p = h.toString,
                        m = p.call(Object),
                        v = {},
                        g = function (e) {
                            return "function" == typeof e && "number" != typeof e.nodeType;
                        },
                        y = function (e) {
                            return null != e && e === e.window;
                        },
                        w = i.document,
                        x = { type: !0, src: !0, nonce: !0, noModule: !0 };
                    function b(e, t, n) {
                        var i,
                            o,
                            r = (n = n || w).createElement("script");
                        if (((r.text = e), t)) for (i in x) (o = t[i] || (t.getAttribute && t.getAttribute(i))) && r.setAttribute(i, o);
                        n.head.appendChild(r).parentNode.removeChild(r);
                    }
                    function _(e) {
                        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[f.call(e)] || "object" : typeof e;
                    }
                    var S = "3.5.1",
                        E = function (e, t) {
                            return new E.fn.init(e, t);
                        };
                    function k(e) {
                        var t = !!e && "length" in e && e.length,
                            n = _(e);
                        return !g(e) && !y(e) && ("array" === n || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
                    }
                    (E.fn = E.prototype = {
                        jquery: S,
                        constructor: E,
                        length: 0,
                        toArray: function () {
                            return s.call(this);
                        },
                        get: function (e) {
                            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
                        },
                        pushStack: function (e) {
                            var t = E.merge(this.constructor(), e);
                            return (t.prevObject = this), t;
                        },
                        each: function (e) {
                            return E.each(this, e);
                        },
                        map: function (e) {
                            return this.pushStack(
                                E.map(this, function (t, n) {
                                    return e.call(t, n, t);
                                })
                            );
                        },
                        slice: function () {
                            return this.pushStack(s.apply(this, arguments));
                        },
                        first: function () {
                            return this.eq(0);
                        },
                        last: function () {
                            return this.eq(-1);
                        },
                        even: function () {
                            return this.pushStack(
                                E.grep(this, function (e, t) {
                                    return (t + 1) % 2;
                                })
                            );
                        },
                        odd: function () {
                            return this.pushStack(
                                E.grep(this, function (e, t) {
                                    return t % 2;
                                })
                            );
                        },
                        eq: function (e) {
                            var t = this.length,
                                n = +e + (e < 0 ? t : 0);
                            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
                        },
                        end: function () {
                            return this.prevObject || this.constructor();
                        },
                        push: l,
                        sort: r.sort,
                        splice: r.splice,
                    }),
                        (E.extend = E.fn.extend = function () {
                            var e,
                                t,
                                n,
                                i,
                                o,
                                r,
                                a = arguments[0] || {},
                                s = 1,
                                c = arguments.length,
                                l = !1;
                            for ("boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++), "object" == typeof a || g(a) || (a = {}), s === c && ((a = this), s--); s < c; s++)
                                if (null != (e = arguments[s]))
                                    for (t in e)
                                        (i = e[t]),
                                            "__proto__" !== t &&
                                                a !== i &&
                                                (l && i && (E.isPlainObject(i) || (o = Array.isArray(i)))
                                                    ? ((n = a[t]), (r = o && !Array.isArray(n) ? [] : o || E.isPlainObject(n) ? n : {}), (o = !1), (a[t] = E.extend(l, r, i)))
                                                    : void 0 !== i && (a[t] = i));
                            return a;
                        }),
                        E.extend({
                            expando: "jQuery" + (S + Math.random()).replace(/\D/g, ""),
                            isReady: !0,
                            error: function (e) {
                                throw new Error(e);
                            },
                            noop: function () {},
                            isPlainObject: function (e) {
                                var t, n;
                                return !(!e || "[object Object]" !== f.call(e) || ((t = a(e)) && ("function" != typeof (n = h.call(t, "constructor") && t.constructor) || p.call(n) !== m)));
                            },
                            isEmptyObject: function (e) {
                                var t;
                                for (t in e) return !1;
                                return !0;
                            },
                            globalEval: function (e, t, n) {
                                b(e, { nonce: t && t.nonce }, n);
                            },
                            each: function (e, t) {
                                var n,
                                    i = 0;
                                if (k(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                                else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                                return e;
                            },
                            makeArray: function (e, t) {
                                var n = t || [];
                                return null != e && (k(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n;
                            },
                            inArray: function (e, t, n) {
                                return null == t ? -1 : u.call(t, e, n);
                            },
                            merge: function (e, t) {
                                for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
                                return (e.length = o), e;
                            },
                            grep: function (e, t, n) {
                                for (var i = [], o = 0, r = e.length, a = !n; o < r; o++) !t(e[o], o) !== a && i.push(e[o]);
                                return i;
                            },
                            map: function (e, t, n) {
                                var i,
                                    o,
                                    r = 0,
                                    a = [];
                                if (k(e)) for (i = e.length; r < i; r++) null != (o = t(e[r], r, n)) && a.push(o);
                                else for (r in e) null != (o = t(e[r], r, n)) && a.push(o);
                                return c(a);
                            },
                            guid: 1,
                            support: v,
                        }),
                        "function" == typeof Symbol && (E.fn[Symbol.iterator] = r[Symbol.iterator]),
                        E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                            d["[object " + t + "]"] = t.toLowerCase();
                        });
                    var C = (function (e) {
                        var t,
                            n,
                            i,
                            o,
                            r,
                            a,
                            s,
                            c,
                            l,
                            u,
                            d,
                            f,
                            h,
                            p,
                            m,
                            v,
                            g,
                            y,
                            w,
                            x = "sizzle" + 1 * new Date(),
                            b = e.document,
                            _ = 0,
                            S = 0,
                            E = ce(),
                            k = ce(),
                            C = ce(),
                            T = ce(),
                            P = function (e, t) {
                                return e === t && (d = !0), 0;
                            },
                            L = {}.hasOwnProperty,
                            A = [],
                            D = A.pop,
                            j = A.push,
                            N = A.push,
                            M = A.slice,
                            q = function (e, t) {
                                for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
                                return -1;
                            },
                            I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                            R = "[\\x20\\t\\r\\n\\f]",
                            O = "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                            H = "\\[[\\x20\\t\\r\\n\\f]*(" + O + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + R + "*\\]",
                            F = ":(" + O + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
                            B = new RegExp(R + "+", "g"),
                            V = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
                            W = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
                            z = new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),
                            $ = new RegExp(R + "|>"),
                            U = new RegExp(F),
                            G = new RegExp("^" + O + "$"),
                            X = {
                                ID: new RegExp("^#(" + O + ")"),
                                CLASS: new RegExp("^\\.(" + O + ")"),
                                TAG: new RegExp("^(" + O + "|[*])"),
                                ATTR: new RegExp("^" + H),
                                PSEUDO: new RegExp("^" + F),
                                CHILD: new RegExp(
                                    "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                                    "i"
                                ),
                                bool: new RegExp("^(?:" + I + ")$", "i"),
                                needsContext: new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i"),
                            },
                            K = /HTML$/i,
                            Y = /^(?:input|select|textarea|button)$/i,
                            Q = /^h\d$/i,
                            Z = /^[^{]+\{\s*\[native \w/,
                            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                            ee = /[+~]/,
                            te = new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])", "g"),
                            ne = function (e, t) {
                                var n = "0x" + e.slice(1) - 65536;
                                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320));
                            },
                            ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                            oe = function (e, t) {
                                return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
                            },
                            re = function () {
                                f();
                            },
                            ae = xe(
                                function (e) {
                                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
                                },
                                { dir: "parentNode", next: "legend" }
                            );
                        try {
                            N.apply((A = M.call(b.childNodes)), b.childNodes), A[b.childNodes.length].nodeType;
                        } catch (e) {
                            N = {
                                apply: A.length
                                    ? function (e, t) {
                                          j.apply(e, M.call(t));
                                      }
                                    : function (e, t) {
                                          for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                                          e.length = n - 1;
                                      },
                            };
                        }
                        function se(e, t, i, o) {
                            var r,
                                s,
                                l,
                                u,
                                d,
                                p,
                                g,
                                y = t && t.ownerDocument,
                                b = t ? t.nodeType : 9;
                            if (((i = i || []), "string" != typeof e || !e || (1 !== b && 9 !== b && 11 !== b))) return i;
                            if (!o && (f(t), (t = t || h), m)) {
                                if (11 !== b && (d = J.exec(e)))
                                    if ((r = d[1])) {
                                        if (9 === b) {
                                            if (!(l = t.getElementById(r))) return i;
                                            if (l.id === r) return i.push(l), i;
                                        } else if (y && (l = y.getElementById(r)) && w(t, l) && l.id === r) return i.push(l), i;
                                    } else {
                                        if (d[2]) return N.apply(i, t.getElementsByTagName(e)), i;
                                        if ((r = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return N.apply(i, t.getElementsByClassName(r)), i;
                                    }
                                if (n.qsa && !T[e + " "] && (!v || !v.test(e)) && (1 !== b || "object" !== t.nodeName.toLowerCase())) {
                                    if (((g = e), (y = t), 1 === b && ($.test(e) || z.test(e)))) {
                                        for (((y = (ee.test(e) && ge(t.parentNode)) || t) === t && n.scope) || ((u = t.getAttribute("id")) ? (u = u.replace(ie, oe)) : t.setAttribute("id", (u = x))), s = (p = a(e)).length; s--; )
                                            p[s] = (u ? "#" + u : ":scope") + " " + we(p[s]);
                                        g = p.join(",");
                                    }
                                    try {
                                        return N.apply(i, y.querySelectorAll(g)), i;
                                    } catch (t) {
                                        T(e, !0);
                                    } finally {
                                        u === x && t.removeAttribute("id");
                                    }
                                }
                            }
                            return c(e.replace(V, "$1"), t, i, o);
                        }
                        function ce() {
                            var e = [];
                            return function t(n, o) {
                                return e.push(n + " ") > i.cacheLength && delete t[e.shift()], (t[n + " "] = o);
                            };
                        }
                        function le(e) {
                            return (e[x] = !0), e;
                        }
                        function ue(e) {
                            var t = h.createElement("fieldset");
                            try {
                                return !!e(t);
                            } catch (e) {
                                return !1;
                            } finally {
                                t.parentNode && t.parentNode.removeChild(t), (t = null);
                            }
                        }
                        function de(e, t) {
                            for (var n = e.split("|"), o = n.length; o--; ) i.attrHandle[n[o]] = t;
                        }
                        function fe(e, t) {
                            var n = t && e,
                                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                            if (i) return i;
                            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
                            return e ? 1 : -1;
                        }
                        function he(e) {
                            return function (t) {
                                return "input" === t.nodeName.toLowerCase() && t.type === e;
                            };
                        }
                        function pe(e) {
                            return function (t) {
                                var n = t.nodeName.toLowerCase();
                                return ("input" === n || "button" === n) && t.type === e;
                            };
                        }
                        function me(e) {
                            return function (t) {
                                return "form" in t
                                    ? t.parentNode && !1 === t.disabled
                                        ? "label" in t
                                            ? "label" in t.parentNode
                                                ? t.parentNode.disabled === e
                                                : t.disabled === e
                                            : t.isDisabled === e || (t.isDisabled !== !e && ae(t) === e)
                                        : t.disabled === e
                                    : "label" in t && t.disabled === e;
                            };
                        }
                        function ve(e) {
                            return le(function (t) {
                                return (
                                    (t = +t),
                                    le(function (n, i) {
                                        for (var o, r = e([], n.length, t), a = r.length; a--; ) n[(o = r[a])] && (n[o] = !(i[o] = n[o]));
                                    })
                                );
                            });
                        }
                        function ge(e) {
                            return e && void 0 !== e.getElementsByTagName && e;
                        }
                        for (t in ((n = se.support = {}),
                        (r = se.isXML = function (e) {
                            var t = e.namespaceURI,
                                n = (e.ownerDocument || e).documentElement;
                            return !K.test(t || (n && n.nodeName) || "HTML");
                        }),
                        (f = se.setDocument = function (e) {
                            var t,
                                o,
                                a = e ? e.ownerDocument || e : b;
                            return a != h && 9 === a.nodeType && a.documentElement
                                ? ((p = (h = a).documentElement),
                                  (m = !r(h)),
                                  b != h && (o = h.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", re, !1) : o.attachEvent && o.attachEvent("onunload", re)),
                                  (n.scope = ue(function (e) {
                                      return p.appendChild(e).appendChild(h.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
                                  })),
                                  (n.attributes = ue(function (e) {
                                      return (e.className = "i"), !e.getAttribute("className");
                                  })),
                                  (n.getElementsByTagName = ue(function (e) {
                                      return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length;
                                  })),
                                  (n.getElementsByClassName = Z.test(h.getElementsByClassName)),
                                  (n.getById = ue(function (e) {
                                      return (p.appendChild(e).id = x), !h.getElementsByName || !h.getElementsByName(x).length;
                                  })),
                                  n.getById
                                      ? ((i.filter.ID = function (e) {
                                            var t = e.replace(te, ne);
                                            return function (e) {
                                                return e.getAttribute("id") === t;
                                            };
                                        }),
                                        (i.find.ID = function (e, t) {
                                            if (void 0 !== t.getElementById && m) {
                                                var n = t.getElementById(e);
                                                return n ? [n] : [];
                                            }
                                        }))
                                      : ((i.filter.ID = function (e) {
                                            var t = e.replace(te, ne);
                                            return function (e) {
                                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                                return n && n.value === t;
                                            };
                                        }),
                                        (i.find.ID = function (e, t) {
                                            if (void 0 !== t.getElementById && m) {
                                                var n,
                                                    i,
                                                    o,
                                                    r = t.getElementById(e);
                                                if (r) {
                                                    if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                                                    for (o = t.getElementsByName(e), i = 0; (r = o[i++]); ) if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                                                }
                                                return [];
                                            }
                                        })),
                                  (i.find.TAG = n.getElementsByTagName
                                      ? function (e, t) {
                                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
                                        }
                                      : function (e, t) {
                                            var n,
                                                i = [],
                                                o = 0,
                                                r = t.getElementsByTagName(e);
                                            if ("*" === e) {
                                                for (; (n = r[o++]); ) 1 === n.nodeType && i.push(n);
                                                return i;
                                            }
                                            return r;
                                        }),
                                  (i.find.CLASS =
                                      n.getElementsByClassName &&
                                      function (e, t) {
                                          if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e);
                                      }),
                                  (g = []),
                                  (v = []),
                                  (n.qsa = Z.test(h.querySelectorAll)) &&
                                      (ue(function (e) {
                                          var t;
                                          (p.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                              e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                                              e.querySelectorAll("[selected]").length || v.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + I + ")"),
                                              e.querySelectorAll("[id~=" + x + "-]").length || v.push("~="),
                                              (t = h.createElement("input")).setAttribute("name", ""),
                                              e.appendChild(t),
                                              e.querySelectorAll("[name='']").length || v.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                                              e.querySelectorAll(":checked").length || v.push(":checked"),
                                              e.querySelectorAll("a#" + x + "+*").length || v.push(".#.+[+~]"),
                                              e.querySelectorAll("\\\f"),
                                              v.push("[\\r\\n\\f]");
                                      }),
                                      ue(function (e) {
                                          e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                          var t = h.createElement("input");
                                          t.setAttribute("type", "hidden"),
                                              e.appendChild(t).setAttribute("name", "D"),
                                              e.querySelectorAll("[name=d]").length && v.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                                              2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                                              (p.appendChild(e).disabled = !0),
                                              2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                                              e.querySelectorAll("*,:x"),
                                              v.push(",.*:");
                                      })),
                                  (n.matchesSelector = Z.test((y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector))) &&
                                      ue(function (e) {
                                          (n.disconnectedMatch = y.call(e, "*")), y.call(e, "[s!='']:x"), g.push("!=", F);
                                      }),
                                  (v = v.length && new RegExp(v.join("|"))),
                                  (g = g.length && new RegExp(g.join("|"))),
                                  (t = Z.test(p.compareDocumentPosition)),
                                  (w =
                                      t || Z.test(p.contains)
                                          ? function (e, t) {
                                                var n = 9 === e.nodeType ? e.documentElement : e,
                                                    i = t && t.parentNode;
                                                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
                                            }
                                          : function (e, t) {
                                                if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                                                return !1;
                                            }),
                                  (P = t
                                      ? function (e, t) {
                                            if (e === t) return (d = !0), 0;
                                            var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                            return (
                                                i ||
                                                (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!n.sortDetached && t.compareDocumentPosition(e) === i)
                                                    ? e == h || (e.ownerDocument == b && w(b, e))
                                                        ? -1
                                                        : t == h || (t.ownerDocument == b && w(b, t))
                                                        ? 1
                                                        : u
                                                        ? q(u, e) - q(u, t)
                                                        : 0
                                                    : 4 & i
                                                    ? -1
                                                    : 1)
                                            );
                                        }
                                      : function (e, t) {
                                            if (e === t) return (d = !0), 0;
                                            var n,
                                                i = 0,
                                                o = e.parentNode,
                                                r = t.parentNode,
                                                a = [e],
                                                s = [t];
                                            if (!o || !r) return e == h ? -1 : t == h ? 1 : o ? -1 : r ? 1 : u ? q(u, e) - q(u, t) : 0;
                                            if (o === r) return fe(e, t);
                                            for (n = e; (n = n.parentNode); ) a.unshift(n);
                                            for (n = t; (n = n.parentNode); ) s.unshift(n);
                                            for (; a[i] === s[i]; ) i++;
                                            return i ? fe(a[i], s[i]) : a[i] == b ? -1 : s[i] == b ? 1 : 0;
                                        }),
                                  h)
                                : h;
                        }),
                        (se.matches = function (e, t) {
                            return se(e, null, null, t);
                        }),
                        (se.matchesSelector = function (e, t) {
                            if ((f(e), n.matchesSelector && m && !T[t + " "] && (!g || !g.test(t)) && (!v || !v.test(t))))
                                try {
                                    var i = y.call(e, t);
                                    if (i || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return i;
                                } catch (e) {
                                    T(t, !0);
                                }
                            return se(t, h, null, [e]).length > 0;
                        }),
                        (se.contains = function (e, t) {
                            return (e.ownerDocument || e) != h && f(e), w(e, t);
                        }),
                        (se.attr = function (e, t) {
                            (e.ownerDocument || e) != h && f(e);
                            var o = i.attrHandle[t.toLowerCase()],
                                r = o && L.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !m) : void 0;
                            return void 0 !== r ? r : n.attributes || !m ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
                        }),
                        (se.escape = function (e) {
                            return (e + "").replace(ie, oe);
                        }),
                        (se.error = function (e) {
                            throw new Error("Syntax error, unrecognized expression: " + e);
                        }),
                        (se.uniqueSort = function (e) {
                            var t,
                                i = [],
                                o = 0,
                                r = 0;
                            if (((d = !n.detectDuplicates), (u = !n.sortStable && e.slice(0)), e.sort(P), d)) {
                                for (; (t = e[r++]); ) t === e[r] && (o = i.push(r));
                                for (; o--; ) e.splice(i[o], 1);
                            }
                            return (u = null), e;
                        }),
                        (o = se.getText = function (e) {
                            var t,
                                n = "",
                                i = 0,
                                r = e.nodeType;
                            if (r) {
                                if (1 === r || 9 === r || 11 === r) {
                                    if ("string" == typeof e.textContent) return e.textContent;
                                    for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                                } else if (3 === r || 4 === r) return e.nodeValue;
                            } else for (; (t = e[i++]); ) n += o(t);
                            return n;
                        }),
                        ((i = se.selectors = {
                            cacheLength: 50,
                            createPseudo: le,
                            match: X,
                            attrHandle: {},
                            find: {},
                            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                            preFilter: {
                                ATTR: function (e) {
                                    return (e[1] = e[1].replace(te, ne)), (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                                },
                                CHILD: function (e) {
                                    return (
                                        (e[1] = e[1].toLowerCase()),
                                        "nth" === e[1].slice(0, 3)
                                            ? (e[3] || se.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                                            : e[3] && se.error(e[0]),
                                        e
                                    );
                                },
                                PSEUDO: function (e) {
                                    var t,
                                        n = !e[6] && e[2];
                                    return X.CHILD.test(e[0])
                                        ? null
                                        : (e[3] ? (e[2] = e[4] || e[5] || "") : n && U.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                                },
                            },
                            filter: {
                                TAG: function (e) {
                                    var t = e.replace(te, ne).toLowerCase();
                                    return "*" === e
                                        ? function () {
                                              return !0;
                                          }
                                        : function (e) {
                                              return e.nodeName && e.nodeName.toLowerCase() === t;
                                          };
                                },
                                CLASS: function (e) {
                                    var t = E[e + " "];
                                    return (
                                        t ||
                                        ((t = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + e + "(" + R + "|$)")) &&
                                            E(e, function (e) {
                                                return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                                            }))
                                    );
                                },
                                ATTR: function (e, t, n) {
                                    return function (i) {
                                        var o = se.attr(i, e);
                                        return null == o
                                            ? "!=" === t
                                            : !t ||
                                                  ((o += ""),
                                                  "=" === t
                                                      ? o === n
                                                      : "!=" === t
                                                      ? o !== n
                                                      : "^=" === t
                                                      ? n && 0 === o.indexOf(n)
                                                      : "*=" === t
                                                      ? n && o.indexOf(n) > -1
                                                      : "$=" === t
                                                      ? n && o.slice(-n.length) === n
                                                      : "~=" === t
                                                      ? (" " + o.replace(B, " ") + " ").indexOf(n) > -1
                                                      : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"));
                                    };
                                },
                                CHILD: function (e, t, n, i, o) {
                                    var r = "nth" !== e.slice(0, 3),
                                        a = "last" !== e.slice(-4),
                                        s = "of-type" === t;
                                    return 1 === i && 0 === o
                                        ? function (e) {
                                              return !!e.parentNode;
                                          }
                                        : function (t, n, c) {
                                              var l,
                                                  u,
                                                  d,
                                                  f,
                                                  h,
                                                  p,
                                                  m = r !== a ? "nextSibling" : "previousSibling",
                                                  v = t.parentNode,
                                                  g = s && t.nodeName.toLowerCase(),
                                                  y = !c && !s,
                                                  w = !1;
                                              if (v) {
                                                  if (r) {
                                                      for (; m; ) {
                                                          for (f = t; (f = f[m]); ) if (s ? f.nodeName.toLowerCase() === g : 1 === f.nodeType) return !1;
                                                          p = m = "only" === e && !p && "nextSibling";
                                                      }
                                                      return !0;
                                                  }
                                                  if (((p = [a ? v.firstChild : v.lastChild]), a && y)) {
                                                      for (
                                                          w = (h = (l = (u = (d = (f = v)[x] || (f[x] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === _ && l[1]) && l[2], f = h && v.childNodes[h];
                                                          (f = (++h && f && f[m]) || (w = h = 0) || p.pop());

                                                      )
                                                          if (1 === f.nodeType && ++w && f === t) {
                                                              u[e] = [_, h, w];
                                                              break;
                                                          }
                                                  } else if ((y && (w = h = (l = (u = (d = (f = t)[x] || (f[x] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === _ && l[1]), !1 === w))
                                                      for (
                                                          ;
                                                          (f = (++h && f && f[m]) || (w = h = 0) || p.pop()) &&
                                                          ((s ? f.nodeName.toLowerCase() !== g : 1 !== f.nodeType) || !++w || (y && ((u = (d = f[x] || (f[x] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [_, w]), f !== t));

                                                      );
                                                  return (w -= o) === i || (w % i == 0 && w / i >= 0);
                                              }
                                          };
                                },
                                PSEUDO: function (e, t) {
                                    var n,
                                        o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                                    return o[x]
                                        ? o(t)
                                        : o.length > 1
                                        ? ((n = [e, e, "", t]),
                                          i.setFilters.hasOwnProperty(e.toLowerCase())
                                              ? le(function (e, n) {
                                                    for (var i, r = o(e, t), a = r.length; a--; ) e[(i = q(e, r[a]))] = !(n[i] = r[a]);
                                                })
                                              : function (e) {
                                                    return o(e, 0, n);
                                                })
                                        : o;
                                },
                            },
                            pseudos: {
                                not: le(function (e) {
                                    var t = [],
                                        n = [],
                                        i = s(e.replace(V, "$1"));
                                    return i[x]
                                        ? le(function (e, t, n, o) {
                                              for (var r, a = i(e, null, o, []), s = e.length; s--; ) (r = a[s]) && (e[s] = !(t[s] = r));
                                          })
                                        : function (e, o, r) {
                                              return (t[0] = e), i(t, null, r, n), (t[0] = null), !n.pop();
                                          };
                                }),
                                has: le(function (e) {
                                    return function (t) {
                                        return se(e, t).length > 0;
                                    };
                                }),
                                contains: le(function (e) {
                                    return (
                                        (e = e.replace(te, ne)),
                                        function (t) {
                                            return (t.textContent || o(t)).indexOf(e) > -1;
                                        }
                                    );
                                }),
                                lang: le(function (e) {
                                    return (
                                        G.test(e || "") || se.error("unsupported lang: " + e),
                                        (e = e.replace(te, ne).toLowerCase()),
                                        function (t) {
                                            var n;
                                            do {
                                                if ((n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                                            } while ((t = t.parentNode) && 1 === t.nodeType);
                                            return !1;
                                        }
                                    );
                                }),
                                target: function (t) {
                                    var n = e.location && e.location.hash;
                                    return n && n.slice(1) === t.id;
                                },
                                root: function (e) {
                                    return e === p;
                                },
                                focus: function (e) {
                                    return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                                },
                                enabled: me(!1),
                                disabled: me(!0),
                                checked: function (e) {
                                    var t = e.nodeName.toLowerCase();
                                    return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                                },
                                selected: function (e) {
                                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                                },
                                empty: function (e) {
                                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                                    return !0;
                                },
                                parent: function (e) {
                                    return !i.pseudos.empty(e);
                                },
                                header: function (e) {
                                    return Q.test(e.nodeName);
                                },
                                input: function (e) {
                                    return Y.test(e.nodeName);
                                },
                                button: function (e) {
                                    var t = e.nodeName.toLowerCase();
                                    return ("input" === t && "button" === e.type) || "button" === t;
                                },
                                text: function (e) {
                                    var t;
                                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                                },
                                first: ve(function () {
                                    return [0];
                                }),
                                last: ve(function (e, t) {
                                    return [t - 1];
                                }),
                                eq: ve(function (e, t, n) {
                                    return [n < 0 ? n + t : n];
                                }),
                                even: ve(function (e, t) {
                                    for (var n = 0; n < t; n += 2) e.push(n);
                                    return e;
                                }),
                                odd: ve(function (e, t) {
                                    for (var n = 1; n < t; n += 2) e.push(n);
                                    return e;
                                }),
                                lt: ve(function (e, t, n) {
                                    for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0; ) e.push(i);
                                    return e;
                                }),
                                gt: ve(function (e, t, n) {
                                    for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                                    return e;
                                }),
                            },
                        }).pseudos.nth = i.pseudos.eq),
                        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                            i.pseudos[t] = he(t);
                        for (t in { submit: !0, reset: !0 }) i.pseudos[t] = pe(t);
                        function ye() {}
                        function we(e) {
                            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                            return i;
                        }
                        function xe(e, t, n) {
                            var i = t.dir,
                                o = t.next,
                                r = o || i,
                                a = n && "parentNode" === r,
                                s = S++;
                            return t.first
                                ? function (t, n, o) {
                                      for (; (t = t[i]); ) if (1 === t.nodeType || a) return e(t, n, o);
                                      return !1;
                                  }
                                : function (t, n, c) {
                                      var l,
                                          u,
                                          d,
                                          f = [_, s];
                                      if (c) {
                                          for (; (t = t[i]); ) if ((1 === t.nodeType || a) && e(t, n, c)) return !0;
                                      } else
                                          for (; (t = t[i]); )
                                              if (1 === t.nodeType || a)
                                                  if (((u = (d = t[x] || (t[x] = {}))[t.uniqueID] || (d[t.uniqueID] = {})), o && o === t.nodeName.toLowerCase())) t = t[i] || t;
                                                  else {
                                                      if ((l = u[r]) && l[0] === _ && l[1] === s) return (f[2] = l[2]);
                                                      if (((u[r] = f), (f[2] = e(t, n, c)))) return !0;
                                                  }
                                      return !1;
                                  };
                        }
                        function be(e) {
                            return e.length > 1
                                ? function (t, n, i) {
                                      for (var o = e.length; o--; ) if (!e[o](t, n, i)) return !1;
                                      return !0;
                                  }
                                : e[0];
                        }
                        function _e(e, t, n, i, o) {
                            for (var r, a = [], s = 0, c = e.length, l = null != t; s < c; s++) (r = e[s]) && ((n && !n(r, i, o)) || (a.push(r), l && t.push(s)));
                            return a;
                        }
                        function Se(e, t, n, i, o, r) {
                            return (
                                i && !i[x] && (i = Se(i)),
                                o && !o[x] && (o = Se(o, r)),
                                le(function (r, a, s, c) {
                                    var l,
                                        u,
                                        d,
                                        f = [],
                                        h = [],
                                        p = a.length,
                                        m =
                                            r ||
                                            (function (e, t, n) {
                                                for (var i = 0, o = t.length; i < o; i++) se(e, t[i], n);
                                                return n;
                                            })(t || "*", s.nodeType ? [s] : s, []),
                                        v = !e || (!r && t) ? m : _e(m, f, e, s, c),
                                        g = n ? (o || (r ? e : p || i) ? [] : a) : v;
                                    if ((n && n(v, g, s, c), i)) for (l = _e(g, h), i(l, [], s, c), u = l.length; u--; ) (d = l[u]) && (g[h[u]] = !(v[h[u]] = d));
                                    if (r) {
                                        if (o || e) {
                                            if (o) {
                                                for (l = [], u = g.length; u--; ) (d = g[u]) && l.push((v[u] = d));
                                                o(null, (g = []), l, c);
                                            }
                                            for (u = g.length; u--; ) (d = g[u]) && (l = o ? q(r, d) : f[u]) > -1 && (r[l] = !(a[l] = d));
                                        }
                                    } else (g = _e(g === a ? g.splice(p, g.length) : g)), o ? o(null, a, g, c) : N.apply(a, g);
                                })
                            );
                        }
                        function Ee(e) {
                            for (
                                var t,
                                    n,
                                    o,
                                    r = e.length,
                                    a = i.relative[e[0].type],
                                    s = a || i.relative[" "],
                                    c = a ? 1 : 0,
                                    u = xe(
                                        function (e) {
                                            return e === t;
                                        },
                                        s,
                                        !0
                                    ),
                                    d = xe(
                                        function (e) {
                                            return q(t, e) > -1;
                                        },
                                        s,
                                        !0
                                    ),
                                    f = [
                                        function (e, n, i) {
                                            var o = (!a && (i || n !== l)) || ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
                                            return (t = null), o;
                                        },
                                    ];
                                c < r;
                                c++
                            )
                                if ((n = i.relative[e[c].type])) f = [xe(be(f), n)];
                                else {
                                    if ((n = i.filter[e[c].type].apply(null, e[c].matches))[x]) {
                                        for (o = ++c; o < r && !i.relative[e[o].type]; o++);
                                        return Se(
                                            c > 1 && be(f),
                                            c > 1 && we(e.slice(0, c - 1).concat({ value: " " === e[c - 2].type ? "*" : "" })).replace(V, "$1"),
                                            n,
                                            c < o && Ee(e.slice(c, o)),
                                            o < r && Ee((e = e.slice(o))),
                                            o < r && we(e)
                                        );
                                    }
                                    f.push(n);
                                }
                            return be(f);
                        }
                        return (
                            (ye.prototype = i.filters = i.pseudos),
                            (i.setFilters = new ye()),
                            (a = se.tokenize = function (e, t) {
                                var n,
                                    o,
                                    r,
                                    a,
                                    s,
                                    c,
                                    l,
                                    u = k[e + " "];
                                if (u) return t ? 0 : u.slice(0);
                                for (s = e, c = [], l = i.preFilter; s; ) {
                                    for (a in ((n && !(o = W.exec(s))) || (o && (s = s.slice(o[0].length) || s), c.push((r = []))),
                                    (n = !1),
                                    (o = z.exec(s)) && ((n = o.shift()), r.push({ value: n, type: o[0].replace(V, " ") }), (s = s.slice(n.length))),
                                    i.filter))
                                        !(o = X[a].exec(s)) || (l[a] && !(o = l[a](o))) || ((n = o.shift()), r.push({ value: n, type: a, matches: o }), (s = s.slice(n.length)));
                                    if (!n) break;
                                }
                                return t ? s.length : s ? se.error(e) : k(e, c).slice(0);
                            }),
                            (s = se.compile = function (e, t) {
                                var n,
                                    o = [],
                                    r = [],
                                    s = C[e + " "];
                                if (!s) {
                                    for (t || (t = a(e)), n = t.length; n--; ) (s = Ee(t[n]))[x] ? o.push(s) : r.push(s);
                                    (s = C(
                                        e,
                                        (function (e, t) {
                                            var n = t.length > 0,
                                                o = e.length > 0,
                                                r = function (r, a, s, c, u) {
                                                    var d,
                                                        p,
                                                        v,
                                                        g = 0,
                                                        y = "0",
                                                        w = r && [],
                                                        x = [],
                                                        b = l,
                                                        S = r || (o && i.find.TAG("*", u)),
                                                        E = (_ += null == b ? 1 : Math.random() || 0.1),
                                                        k = S.length;
                                                    for (u && (l = a == h || a || u); y !== k && null != (d = S[y]); y++) {
                                                        if (o && d) {
                                                            for (p = 0, a || d.ownerDocument == h || (f(d), (s = !m)); (v = e[p++]); )
                                                                if (v(d, a || h, s)) {
                                                                    c.push(d);
                                                                    break;
                                                                }
                                                            u && (_ = E);
                                                        }
                                                        n && ((d = !v && d) && g--, r && w.push(d));
                                                    }
                                                    if (((g += y), n && y !== g)) {
                                                        for (p = 0; (v = t[p++]); ) v(w, x, a, s);
                                                        if (r) {
                                                            if (g > 0) for (; y--; ) w[y] || x[y] || (x[y] = D.call(c));
                                                            x = _e(x);
                                                        }
                                                        N.apply(c, x), u && !r && x.length > 0 && g + t.length > 1 && se.uniqueSort(c);
                                                    }
                                                    return u && ((_ = E), (l = b)), w;
                                                };
                                            return n ? le(r) : r;
                                        })(r, o)
                                    )).selector = e;
                                }
                                return s;
                            }),
                            (c = se.select = function (e, t, n, o) {
                                var r,
                                    c,
                                    l,
                                    u,
                                    d,
                                    f = "function" == typeof e && e,
                                    h = !o && a((e = f.selector || e));
                                if (((n = n || []), 1 === h.length)) {
                                    if ((c = h[0] = h[0].slice(0)).length > 2 && "ID" === (l = c[0]).type && 9 === t.nodeType && m && i.relative[c[1].type]) {
                                        if (!(t = (i.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return n;
                                        f && (t = t.parentNode), (e = e.slice(c.shift().value.length));
                                    }
                                    for (r = X.needsContext.test(e) ? 0 : c.length; r-- && ((l = c[r]), !i.relative[(u = l.type)]); )
                                        if ((d = i.find[u]) && (o = d(l.matches[0].replace(te, ne), (ee.test(c[0].type) && ge(t.parentNode)) || t))) {
                                            if ((c.splice(r, 1), !(e = o.length && we(c)))) return N.apply(n, o), n;
                                            break;
                                        }
                                }
                                return (f || s(e, h))(o, t, !m, n, !t || (ee.test(e) && ge(t.parentNode)) || t), n;
                            }),
                            (n.sortStable = x.split("").sort(P).join("") === x),
                            (n.detectDuplicates = !!d),
                            f(),
                            (n.sortDetached = ue(function (e) {
                                return 1 & e.compareDocumentPosition(h.createElement("fieldset"));
                            })),
                            ue(function (e) {
                                return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
                            }) ||
                                de("type|href|height|width", function (e, t, n) {
                                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                                }),
                            (n.attributes &&
                                ue(function (e) {
                                    return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                                })) ||
                                de("value", function (e, t, n) {
                                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                                }),
                            ue(function (e) {
                                return null == e.getAttribute("disabled");
                            }) ||
                                de(I, function (e, t, n) {
                                    var i;
                                    if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
                                }),
                            se
                        );
                    })(i);
                    (E.find = C), (E.expr = C.selectors), (E.expr[":"] = E.expr.pseudos), (E.uniqueSort = E.unique = C.uniqueSort), (E.text = C.getText), (E.isXMLDoc = C.isXML), (E.contains = C.contains), (E.escapeSelector = C.escape);
                    var T = function (e, t, n) {
                            for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                                if (1 === e.nodeType) {
                                    if (o && E(e).is(n)) break;
                                    i.push(e);
                                }
                            return i;
                        },
                        P = function (e, t) {
                            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                            return n;
                        },
                        L = E.expr.match.needsContext;
                    function A(e, t) {
                        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
                    }
                    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
                    function j(e, t, n) {
                        return g(t)
                            ? E.grep(e, function (e, i) {
                                  return !!t.call(e, i, e) !== n;
                              })
                            : t.nodeType
                            ? E.grep(e, function (e) {
                                  return (e === t) !== n;
                              })
                            : "string" != typeof t
                            ? E.grep(e, function (e) {
                                  return u.call(t, e) > -1 !== n;
                              })
                            : E.filter(t, e, n);
                    }
                    (E.filter = function (e, t, n) {
                        var i = t[0];
                        return (
                            n && (e = ":not(" + e + ")"),
                            1 === t.length && 1 === i.nodeType
                                ? E.find.matchesSelector(i, e)
                                    ? [i]
                                    : []
                                : E.find.matches(
                                      e,
                                      E.grep(t, function (e) {
                                          return 1 === e.nodeType;
                                      })
                                  )
                        );
                    }),
                        E.fn.extend({
                            find: function (e) {
                                var t,
                                    n,
                                    i = this.length,
                                    o = this;
                                if ("string" != typeof e)
                                    return this.pushStack(
                                        E(e).filter(function () {
                                            for (t = 0; t < i; t++) if (E.contains(o[t], this)) return !0;
                                        })
                                    );
                                for (n = this.pushStack([]), t = 0; t < i; t++) E.find(e, o[t], n);
                                return i > 1 ? E.uniqueSort(n) : n;
                            },
                            filter: function (e) {
                                return this.pushStack(j(this, e || [], !1));
                            },
                            not: function (e) {
                                return this.pushStack(j(this, e || [], !0));
                            },
                            is: function (e) {
                                return !!j(this, "string" == typeof e && L.test(e) ? E(e) : e || [], !1).length;
                            },
                        });
                    var N,
                        M = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                    ((E.fn.init = function (e, t, n) {
                        var i, o;
                        if (!e) return this;
                        if (((n = n || N), "string" == typeof e)) {
                            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : M.exec(e)) || (!i[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                            if (i[1]) {
                                if (((t = t instanceof E ? t[0] : t), E.merge(this, E.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : w, !0)), D.test(i[1]) && E.isPlainObject(t)))
                                    for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                                return this;
                            }
                            return (o = w.getElementById(i[2])) && ((this[0] = o), (this.length = 1)), this;
                        }
                        return e.nodeType ? ((this[0] = e), (this.length = 1), this) : g(e) ? (void 0 !== n.ready ? n.ready(e) : e(E)) : E.makeArray(e, this);
                    }).prototype = E.fn),
                        (N = E(w));
                    var q = /^(?:parents|prev(?:Until|All))/,
                        I = { children: !0, contents: !0, next: !0, prev: !0 };
                    function R(e, t) {
                        for (; (e = e[t]) && 1 !== e.nodeType; );
                        return e;
                    }
                    E.fn.extend({
                        has: function (e) {
                            var t = E(e, this),
                                n = t.length;
                            return this.filter(function () {
                                for (var e = 0; e < n; e++) if (E.contains(this, t[e])) return !0;
                            });
                        },
                        closest: function (e, t) {
                            var n,
                                i = 0,
                                o = this.length,
                                r = [],
                                a = "string" != typeof e && E(e);
                            if (!L.test(e))
                                for (; i < o; i++)
                                    for (n = this[i]; n && n !== t; n = n.parentNode)
                                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                                            r.push(n);
                                            break;
                                        }
                            return this.pushStack(r.length > 1 ? E.uniqueSort(r) : r);
                        },
                        index: function (e) {
                            return e ? ("string" == typeof e ? u.call(E(e), this[0]) : u.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                        },
                        add: function (e, t) {
                            return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))));
                        },
                        addBack: function (e) {
                            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
                        },
                    }),
                        E.each(
                            {
                                parent: function (e) {
                                    var t = e.parentNode;
                                    return t && 11 !== t.nodeType ? t : null;
                                },
                                parents: function (e) {
                                    return T(e, "parentNode");
                                },
                                parentsUntil: function (e, t, n) {
                                    return T(e, "parentNode", n);
                                },
                                next: function (e) {
                                    return R(e, "nextSibling");
                                },
                                prev: function (e) {
                                    return R(e, "previousSibling");
                                },
                                nextAll: function (e) {
                                    return T(e, "nextSibling");
                                },
                                prevAll: function (e) {
                                    return T(e, "previousSibling");
                                },
                                nextUntil: function (e, t, n) {
                                    return T(e, "nextSibling", n);
                                },
                                prevUntil: function (e, t, n) {
                                    return T(e, "previousSibling", n);
                                },
                                siblings: function (e) {
                                    return P((e.parentNode || {}).firstChild, e);
                                },
                                children: function (e) {
                                    return P(e.firstChild);
                                },
                                contents: function (e) {
                                    return null != e.contentDocument && a(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), E.merge([], e.childNodes));
                                },
                            },
                            function (e, t) {
                                E.fn[e] = function (n, i) {
                                    var o = E.map(this, t, n);
                                    return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = E.filter(i, o)), this.length > 1 && (I[e] || E.uniqueSort(o), q.test(e) && o.reverse()), this.pushStack(o);
                                };
                            }
                        );
                    var O = /[^\x20\t\r\n\f]+/g;
                    function H(e) {
                        return e;
                    }
                    function F(e) {
                        throw e;
                    }
                    function B(e, t, n, i) {
                        var o;
                        try {
                            e && g((o = e.promise)) ? o.call(e).done(t).fail(n) : e && g((o = e.then)) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i));
                        } catch (e) {
                            n.apply(void 0, [e]);
                        }
                    }
                    (E.Callbacks = function (e) {
                        e =
                            "string" == typeof e
                                ? (function (e) {
                                      var t = {};
                                      return (
                                          E.each(e.match(O) || [], function (e, n) {
                                              t[n] = !0;
                                          }),
                                          t
                                      );
                                  })(e)
                                : E.extend({}, e);
                        var t,
                            n,
                            i,
                            o,
                            r = [],
                            a = [],
                            s = -1,
                            c = function () {
                                for (o = o || e.once, i = t = !0; a.length; s = -1) for (n = a.shift(); ++s < r.length; ) !1 === r[s].apply(n[0], n[1]) && e.stopOnFalse && ((s = r.length), (n = !1));
                                e.memory || (n = !1), (t = !1), o && (r = n ? [] : "");
                            },
                            l = {
                                add: function () {
                                    return (
                                        r &&
                                            (n && !t && ((s = r.length - 1), a.push(n)),
                                            (function t(n) {
                                                E.each(n, function (n, i) {
                                                    g(i) ? (e.unique && l.has(i)) || r.push(i) : i && i.length && "string" !== _(i) && t(i);
                                                });
                                            })(arguments),
                                            n && !t && c()),
                                        this
                                    );
                                },
                                remove: function () {
                                    return (
                                        E.each(arguments, function (e, t) {
                                            for (var n; (n = E.inArray(t, r, n)) > -1; ) r.splice(n, 1), n <= s && s--;
                                        }),
                                        this
                                    );
                                },
                                has: function (e) {
                                    return e ? E.inArray(e, r) > -1 : r.length > 0;
                                },
                                empty: function () {
                                    return r && (r = []), this;
                                },
                                disable: function () {
                                    return (o = a = []), (r = n = ""), this;
                                },
                                disabled: function () {
                                    return !r;
                                },
                                lock: function () {
                                    return (o = a = []), n || t || (r = n = ""), this;
                                },
                                locked: function () {
                                    return !!o;
                                },
                                fireWith: function (e, n) {
                                    return o || ((n = [e, (n = n || []).slice ? n.slice() : n]), a.push(n), t || c()), this;
                                },
                                fire: function () {
                                    return l.fireWith(this, arguments), this;
                                },
                                fired: function () {
                                    return !!i;
                                },
                            };
                        return l;
                    }),
                        E.extend({
                            Deferred: function (e) {
                                var t = [
                                        ["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2],
                                        ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"],
                                        ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"],
                                    ],
                                    n = "pending",
                                    o = {
                                        state: function () {
                                            return n;
                                        },
                                        always: function () {
                                            return r.done(arguments).fail(arguments), this;
                                        },
                                        catch: function (e) {
                                            return o.then(null, e);
                                        },
                                        pipe: function () {
                                            var e = arguments;
                                            return E.Deferred(function (n) {
                                                E.each(t, function (t, i) {
                                                    var o = g(e[i[4]]) && e[i[4]];
                                                    r[i[1]](function () {
                                                        var e = o && o.apply(this, arguments);
                                                        e && g(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, o ? [e] : arguments);
                                                    });
                                                }),
                                                    (e = null);
                                            }).promise();
                                        },
                                        then: function (e, n, o) {
                                            var r = 0;
                                            function a(e, t, n, o) {
                                                return function () {
                                                    var s = this,
                                                        c = arguments,
                                                        l = function () {
                                                            var i, l;
                                                            if (!(e < r)) {
                                                                if ((i = n.apply(s, c)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                                (l = i && ("object" == typeof i || "function" == typeof i) && i.then),
                                                                    g(l)
                                                                        ? o
                                                                            ? l.call(i, a(r, t, H, o), a(r, t, F, o))
                                                                            : (r++, l.call(i, a(r, t, H, o), a(r, t, F, o), a(r, t, H, t.notifyWith)))
                                                                        : (n !== H && ((s = void 0), (c = [i])), (o || t.resolveWith)(s, c));
                                                            }
                                                        },
                                                        u = o
                                                            ? l
                                                            : function () {
                                                                  try {
                                                                      l();
                                                                  } catch (i) {
                                                                      E.Deferred.exceptionHook && E.Deferred.exceptionHook(i, u.stackTrace), e + 1 >= r && (n !== F && ((s = void 0), (c = [i])), t.rejectWith(s, c));
                                                                  }
                                                              };
                                                    e ? u() : (E.Deferred.getStackHook && (u.stackTrace = E.Deferred.getStackHook()), i.setTimeout(u));
                                                };
                                            }
                                            return E.Deferred(function (i) {
                                                t[0][3].add(a(0, i, g(o) ? o : H, i.notifyWith)), t[1][3].add(a(0, i, g(e) ? e : H)), t[2][3].add(a(0, i, g(n) ? n : F));
                                            }).promise();
                                        },
                                        promise: function (e) {
                                            return null != e ? E.extend(e, o) : o;
                                        },
                                    },
                                    r = {};
                                return (
                                    E.each(t, function (e, i) {
                                        var a = i[2],
                                            s = i[5];
                                        (o[i[1]] = a.add),
                                            s &&
                                                a.add(
                                                    function () {
                                                        n = s;
                                                    },
                                                    t[3 - e][2].disable,
                                                    t[3 - e][3].disable,
                                                    t[0][2].lock,
                                                    t[0][3].lock
                                                ),
                                            a.add(i[3].fire),
                                            (r[i[0]] = function () {
                                                return r[i[0] + "With"](this === r ? void 0 : this, arguments), this;
                                            }),
                                            (r[i[0] + "With"] = a.fireWith);
                                    }),
                                    o.promise(r),
                                    e && e.call(r, r),
                                    r
                                );
                            },
                            when: function (e) {
                                var t = arguments.length,
                                    n = t,
                                    i = Array(n),
                                    o = s.call(arguments),
                                    r = E.Deferred(),
                                    a = function (e) {
                                        return function (n) {
                                            (i[e] = this), (o[e] = arguments.length > 1 ? s.call(arguments) : n), --t || r.resolveWith(i, o);
                                        };
                                    };
                                if (t <= 1 && (B(e, r.done(a(n)).resolve, r.reject, !t), "pending" === r.state() || g(o[n] && o[n].then))) return r.then();
                                for (; n--; ) B(o[n], a(n), r.reject);
                                return r.promise();
                            },
                        });
                    var V = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                    (E.Deferred.exceptionHook = function (e, t) {
                        i.console && i.console.warn && e && V.test(e.name) && i.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
                    }),
                        (E.readyException = function (e) {
                            i.setTimeout(function () {
                                throw e;
                            });
                        });
                    var W = E.Deferred();
                    function z() {
                        w.removeEventListener("DOMContentLoaded", z), i.removeEventListener("load", z), E.ready();
                    }
                    (E.fn.ready = function (e) {
                        return (
                            W.then(e).catch(function (e) {
                                E.readyException(e);
                            }),
                            this
                        );
                    }),
                        E.extend({
                            isReady: !1,
                            readyWait: 1,
                            ready: function (e) {
                                (!0 === e ? --E.readyWait : E.isReady) || ((E.isReady = !0), (!0 !== e && --E.readyWait > 0) || W.resolveWith(w, [E]));
                            },
                        }),
                        (E.ready.then = W.then),
                        "complete" === w.readyState || ("loading" !== w.readyState && !w.documentElement.doScroll) ? i.setTimeout(E.ready) : (w.addEventListener("DOMContentLoaded", z), i.addEventListener("load", z));
                    var $ = function (e, t, n, i, o, r, a) {
                            var s = 0,
                                c = e.length,
                                l = null == n;
                            if ("object" === _(n)) for (s in ((o = !0), n)) $(e, t, s, n[s], !0, r, a);
                            else if (
                                void 0 !== i &&
                                ((o = !0),
                                g(i) || (a = !0),
                                l &&
                                    (a
                                        ? (t.call(e, i), (t = null))
                                        : ((l = t),
                                          (t = function (e, t, n) {
                                              return l.call(E(e), n);
                                          }))),
                                t)
                            )
                                for (; s < c; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
                            return o ? e : l ? t.call(e) : c ? t(e[0], n) : r;
                        },
                        U = /^-ms-/,
                        G = /-([a-z])/g;
                    function X(e, t) {
                        return t.toUpperCase();
                    }
                    function K(e) {
                        return e.replace(U, "ms-").replace(G, X);
                    }
                    var Y = function (e) {
                        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
                    };
                    function Q() {
                        this.expando = E.expando + Q.uid++;
                    }
                    (Q.uid = 1),
                        (Q.prototype = {
                            cache: function (e) {
                                var t = e[this.expando];
                                return t || ((t = {}), Y(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
                            },
                            set: function (e, t, n) {
                                var i,
                                    o = this.cache(e);
                                if ("string" == typeof t) o[K(t)] = n;
                                else for (i in t) o[K(i)] = t[i];
                                return o;
                            },
                            get: function (e, t) {
                                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][K(t)];
                            },
                            access: function (e, t, n) {
                                return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
                            },
                            remove: function (e, t) {
                                var n,
                                    i = e[this.expando];
                                if (void 0 !== i) {
                                    if (void 0 !== t) {
                                        n = (t = Array.isArray(t) ? t.map(K) : (t = K(t)) in i ? [t] : t.match(O) || []).length;
                                        for (; n--; ) delete i[t[n]];
                                    }
                                    (void 0 === t || E.isEmptyObject(i)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                                }
                            },
                            hasData: function (e) {
                                var t = e[this.expando];
                                return void 0 !== t && !E.isEmptyObject(t);
                            },
                        });
                    var Z = new Q(),
                        J = new Q(),
                        ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                        te = /[A-Z]/g;
                    function ne(e, t, n) {
                        var i;
                        if (void 0 === n && 1 === e.nodeType)
                            if (((i = "data-" + t.replace(te, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(i)))) {
                                try {
                                    n = (function (e) {
                                        return "true" === e || ("false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e));
                                    })(n);
                                } catch (e) {}
                                J.set(e, t, n);
                            } else n = void 0;
                        return n;
                    }
                    E.extend({
                        hasData: function (e) {
                            return J.hasData(e) || Z.hasData(e);
                        },
                        data: function (e, t, n) {
                            return J.access(e, t, n);
                        },
                        removeData: function (e, t) {
                            J.remove(e, t);
                        },
                        _data: function (e, t, n) {
                            return Z.access(e, t, n);
                        },
                        _removeData: function (e, t) {
                            Z.remove(e, t);
                        },
                    }),
                        E.fn.extend({
                            data: function (e, t) {
                                var n,
                                    i,
                                    o,
                                    r = this[0],
                                    a = r && r.attributes;
                                if (void 0 === e) {
                                    if (this.length && ((o = J.get(r)), 1 === r.nodeType && !Z.get(r, "hasDataAttrs"))) {
                                        for (n = a.length; n--; ) a[n] && 0 === (i = a[n].name).indexOf("data-") && ((i = K(i.slice(5))), ne(r, i, o[i]));
                                        Z.set(r, "hasDataAttrs", !0);
                                    }
                                    return o;
                                }
                                return "object" == typeof e
                                    ? this.each(function () {
                                          J.set(this, e);
                                      })
                                    : $(
                                          this,
                                          function (t) {
                                              var n;
                                              if (r && void 0 === t) return void 0 !== (n = J.get(r, e)) || void 0 !== (n = ne(r, e)) ? n : void 0;
                                              this.each(function () {
                                                  J.set(this, e, t);
                                              });
                                          },
                                          null,
                                          t,
                                          arguments.length > 1,
                                          null,
                                          !0
                                      );
                            },
                            removeData: function (e) {
                                return this.each(function () {
                                    J.remove(this, e);
                                });
                            },
                        }),
                        E.extend({
                            queue: function (e, t, n) {
                                var i;
                                if (e) return (t = (t || "fx") + "queue"), (i = Z.get(e, t)), n && (!i || Array.isArray(n) ? (i = Z.access(e, t, E.makeArray(n))) : i.push(n)), i || [];
                            },
                            dequeue: function (e, t) {
                                t = t || "fx";
                                var n = E.queue(e, t),
                                    i = n.length,
                                    o = n.shift(),
                                    r = E._queueHooks(e, t);
                                "inprogress" === o && ((o = n.shift()), i--),
                                    o &&
                                        ("fx" === t && n.unshift("inprogress"),
                                        delete r.stop,
                                        o.call(
                                            e,
                                            function () {
                                                E.dequeue(e, t);
                                            },
                                            r
                                        )),
                                    !i && r && r.empty.fire();
                            },
                            _queueHooks: function (e, t) {
                                var n = t + "queueHooks";
                                return (
                                    Z.get(e, n) ||
                                    Z.access(e, n, {
                                        empty: E.Callbacks("once memory").add(function () {
                                            Z.remove(e, [t + "queue", n]);
                                        }),
                                    })
                                );
                            },
                        }),
                        E.fn.extend({
                            queue: function (e, t) {
                                var n = 2;
                                return (
                                    "string" != typeof e && ((t = e), (e = "fx"), n--),
                                    arguments.length < n
                                        ? E.queue(this[0], e)
                                        : void 0 === t
                                        ? this
                                        : this.each(function () {
                                              var n = E.queue(this, e, t);
                                              E._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && E.dequeue(this, e);
                                          })
                                );
                            },
                            dequeue: function (e) {
                                return this.each(function () {
                                    E.dequeue(this, e);
                                });
                            },
                            clearQueue: function (e) {
                                return this.queue(e || "fx", []);
                            },
                            promise: function (e, t) {
                                var n,
                                    i = 1,
                                    o = E.Deferred(),
                                    r = this,
                                    a = this.length,
                                    s = function () {
                                        --i || o.resolveWith(r, [r]);
                                    };
                                for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; a--; ) (n = Z.get(r[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
                                return s(), o.promise(t);
                            },
                        });
                    var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                        oe = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
                        re = ["Top", "Right", "Bottom", "Left"],
                        ae = w.documentElement,
                        se = function (e) {
                            return E.contains(e.ownerDocument, e);
                        },
                        ce = { composed: !0 };
                    ae.getRootNode &&
                        (se = function (e) {
                            return E.contains(e.ownerDocument, e) || e.getRootNode(ce) === e.ownerDocument;
                        });
                    var le = function (e, t) {
                        return "none" === (e = t || e).style.display || ("" === e.style.display && se(e) && "none" === E.css(e, "display"));
                    };
                    function ue(e, t, n, i) {
                        var o,
                            r,
                            a = 20,
                            s = i
                                ? function () {
                                      return i.cur();
                                  }
                                : function () {
                                      return E.css(e, t, "");
                                  },
                            c = s(),
                            l = (n && n[3]) || (E.cssNumber[t] ? "" : "px"),
                            u = e.nodeType && (E.cssNumber[t] || ("px" !== l && +c)) && oe.exec(E.css(e, t));
                        if (u && u[3] !== l) {
                            for (c /= 2, l = l || u[3], u = +c || 1; a--; ) E.style(e, t, u + l), (1 - r) * (1 - (r = s() / c || 0.5)) <= 0 && (a = 0), (u /= r);
                            (u *= 2), E.style(e, t, u + l), (n = n || []);
                        }
                        return n && ((u = +u || +c || 0), (o = n[1] ? u + (n[1] + 1) * n[2] : +n[2]), i && ((i.unit = l), (i.start = u), (i.end = o))), o;
                    }
                    var de = {};
                    function fe(e) {
                        var t,
                            n = e.ownerDocument,
                            i = e.nodeName,
                            o = de[i];
                        return o || ((t = n.body.appendChild(n.createElement(i))), (o = E.css(t, "display")), t.parentNode.removeChild(t), "none" === o && (o = "block"), (de[i] = o), o);
                    }
                    function he(e, t) {
                        for (var n, i, o = [], r = 0, a = e.length; r < a; r++)
                            (i = e[r]).style &&
                                ((n = i.style.display),
                                t ? ("none" === n && ((o[r] = Z.get(i, "display") || null), o[r] || (i.style.display = "")), "" === i.style.display && le(i) && (o[r] = fe(i))) : "none" !== n && ((o[r] = "none"), Z.set(i, "display", n)));
                        for (r = 0; r < a; r++) null != o[r] && (e[r].style.display = o[r]);
                        return e;
                    }
                    E.fn.extend({
                        show: function () {
                            return he(this, !0);
                        },
                        hide: function () {
                            return he(this);
                        },
                        toggle: function (e) {
                            return "boolean" == typeof e
                                ? e
                                    ? this.show()
                                    : this.hide()
                                : this.each(function () {
                                      le(this) ? E(this).show() : E(this).hide();
                                  });
                        },
                    });
                    var pe,
                        me,
                        ve = /^(?:checkbox|radio)$/i,
                        ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                        ye = /^$|^module$|\/(?:java|ecma)script/i;
                    (pe = w.createDocumentFragment().appendChild(w.createElement("div"))),
                        (me = w.createElement("input")).setAttribute("type", "radio"),
                        me.setAttribute("checked", "checked"),
                        me.setAttribute("name", "t"),
                        pe.appendChild(me),
                        (v.checkClone = pe.cloneNode(!0).cloneNode(!0).lastChild.checked),
                        (pe.innerHTML = "<textarea>x</textarea>"),
                        (v.noCloneChecked = !!pe.cloneNode(!0).lastChild.defaultValue),
                        (pe.innerHTML = "<option></option>"),
                        (v.option = !!pe.lastChild);
                    var we = {
                        thead: [1, "<table>", "</table>"],
                        col: [2, "<table><colgroup>", "</colgroup></table>"],
                        tr: [2, "<table><tbody>", "</tbody></table>"],
                        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                        _default: [0, "", ""],
                    };
                    function xe(e, t) {
                        var n;
                        return (n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && A(e, t)) ? E.merge([e], n) : n;
                    }
                    function be(e, t) {
                        for (var n = 0, i = e.length; n < i; n++) Z.set(e[n], "globalEval", !t || Z.get(t[n], "globalEval"));
                    }
                    (we.tbody = we.tfoot = we.colgroup = we.caption = we.thead), (we.th = we.td), v.option || (we.optgroup = we.option = [1, "<select multiple='multiple'>", "</select>"]);
                    var _e = /<|&#?\w+;/;
                    function Se(e, t, n, i, o) {
                        for (var r, a, s, c, l, u, d = t.createDocumentFragment(), f = [], h = 0, p = e.length; h < p; h++)
                            if ((r = e[h]) || 0 === r)
                                if ("object" === _(r)) E.merge(f, r.nodeType ? [r] : r);
                                else if (_e.test(r)) {
                                    for (a = a || d.appendChild(t.createElement("div")), s = (ge.exec(r) || ["", ""])[1].toLowerCase(), c = we[s] || we._default, a.innerHTML = c[1] + E.htmlPrefilter(r) + c[2], u = c[0]; u--; )
                                        a = a.lastChild;
                                    E.merge(f, a.childNodes), ((a = d.firstChild).textContent = "");
                                } else f.push(t.createTextNode(r));
                        for (d.textContent = "", h = 0; (r = f[h++]); )
                            if (i && E.inArray(r, i) > -1) o && o.push(r);
                            else if (((l = se(r)), (a = xe(d.appendChild(r), "script")), l && be(a), n)) for (u = 0; (r = a[u++]); ) ye.test(r.type || "") && n.push(r);
                        return d;
                    }
                    var Ee = /^key/,
                        ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                        Ce = /^([^.]*)(?:\.(.+)|)/;
                    function Te() {
                        return !0;
                    }
                    function Pe() {
                        return !1;
                    }
                    function Le(e, t) {
                        return (
                            (e ===
                                (function () {
                                    try {
                                        return w.activeElement;
                                    } catch (e) {}
                                })()) ==
                            ("focus" === t)
                        );
                    }
                    function Ae(e, t, n, i, o, r) {
                        var a, s;
                        if ("object" == typeof t) {
                            for (s in ("string" != typeof n && ((i = i || n), (n = void 0)), t)) Ae(e, s, n, i, t[s], r);
                            return e;
                        }
                        if ((null == i && null == o ? ((o = n), (i = n = void 0)) : null == o && ("string" == typeof n ? ((o = i), (i = void 0)) : ((o = i), (i = n), (n = void 0))), !1 === o)) o = Pe;
                        else if (!o) return e;
                        return (
                            1 === r &&
                                ((a = o),
                                ((o = function (e) {
                                    return E().off(e), a.apply(this, arguments);
                                }).guid = a.guid || (a.guid = E.guid++))),
                            e.each(function () {
                                E.event.add(this, t, o, i, n);
                            })
                        );
                    }
                    function De(e, t, n) {
                        n
                            ? (Z.set(e, t, !1),
                              E.event.add(e, t, {
                                  namespace: !1,
                                  handler: function (e) {
                                      var i,
                                          o,
                                          r = Z.get(this, t);
                                      if (1 & e.isTrigger && this[t]) {
                                          if (r.length) (E.event.special[t] || {}).delegateType && e.stopPropagation();
                                          else if (((r = s.call(arguments)), Z.set(this, t, r), (i = n(this, t)), this[t](), r !== (o = Z.get(this, t)) || i ? Z.set(this, t, !1) : (o = {}), r !== o))
                                              return e.stopImmediatePropagation(), e.preventDefault(), o.value;
                                      } else r.length && (Z.set(this, t, { value: E.event.trigger(E.extend(r[0], E.Event.prototype), r.slice(1), this) }), e.stopImmediatePropagation());
                                  },
                              }))
                            : void 0 === Z.get(e, t) && E.event.add(e, t, Te);
                    }
                    (E.event = {
                        global: {},
                        add: function (e, t, n, i, o) {
                            var r,
                                a,
                                s,
                                c,
                                l,
                                u,
                                d,
                                f,
                                h,
                                p,
                                m,
                                v = Z.get(e);
                            if (Y(e))
                                for (
                                    n.handler && ((n = (r = n).handler), (o = r.selector)),
                                        o && E.find.matchesSelector(ae, o),
                                        n.guid || (n.guid = E.guid++),
                                        (c = v.events) || (c = v.events = Object.create(null)),
                                        (a = v.handle) ||
                                            (a = v.handle = function (t) {
                                                return void 0 !== E && E.event.triggered !== t.type ? E.event.dispatch.apply(e, arguments) : void 0;
                                            }),
                                        l = (t = (t || "").match(O) || [""]).length;
                                    l--;

                                )
                                    (h = m = (s = Ce.exec(t[l]) || [])[1]),
                                        (p = (s[2] || "").split(".").sort()),
                                        h &&
                                            ((d = E.event.special[h] || {}),
                                            (h = (o ? d.delegateType : d.bindType) || h),
                                            (d = E.event.special[h] || {}),
                                            (u = E.extend({ type: h, origType: m, data: i, handler: n, guid: n.guid, selector: o, needsContext: o && E.expr.match.needsContext.test(o), namespace: p.join(".") }, r)),
                                            (f = c[h]) || (((f = c[h] = []).delegateCount = 0), (d.setup && !1 !== d.setup.call(e, i, p, a)) || (e.addEventListener && e.addEventListener(h, a))),
                                            d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)),
                                            o ? f.splice(f.delegateCount++, 0, u) : f.push(u),
                                            (E.event.global[h] = !0));
                        },
                        remove: function (e, t, n, i, o) {
                            var r,
                                a,
                                s,
                                c,
                                l,
                                u,
                                d,
                                f,
                                h,
                                p,
                                m,
                                v = Z.hasData(e) && Z.get(e);
                            if (v && (c = v.events)) {
                                for (l = (t = (t || "").match(O) || [""]).length; l--; )
                                    if (((h = m = (s = Ce.exec(t[l]) || [])[1]), (p = (s[2] || "").split(".").sort()), h)) {
                                        for (d = E.event.special[h] || {}, f = c[(h = (i ? d.delegateType : d.bindType) || h)] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = f.length; r--; )
                                            (u = f[r]),
                                                (!o && m !== u.origType) ||
                                                    (n && n.guid !== u.guid) ||
                                                    (s && !s.test(u.namespace)) ||
                                                    (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                                                    (f.splice(r, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
                                        a && !f.length && ((d.teardown && !1 !== d.teardown.call(e, p, v.handle)) || E.removeEvent(e, h, v.handle), delete c[h]);
                                    } else for (h in c) E.event.remove(e, h + t[l], n, i, !0);
                                E.isEmptyObject(c) && Z.remove(e, "handle events");
                            }
                        },
                        dispatch: function (e) {
                            var t,
                                n,
                                i,
                                o,
                                r,
                                a,
                                s = new Array(arguments.length),
                                c = E.event.fix(e),
                                l = (Z.get(this, "events") || Object.create(null))[c.type] || [],
                                u = E.event.special[c.type] || {};
                            for (s[0] = c, t = 1; t < arguments.length; t++) s[t] = arguments[t];
                            if (((c.delegateTarget = this), !u.preDispatch || !1 !== u.preDispatch.call(this, c))) {
                                for (a = E.event.handlers.call(this, c, l), t = 0; (o = a[t++]) && !c.isPropagationStopped(); )
                                    for (c.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !c.isImmediatePropagationStopped(); )
                                        (c.rnamespace && !1 !== r.namespace && !c.rnamespace.test(r.namespace)) ||
                                            ((c.handleObj = r),
                                            (c.data = r.data),
                                            void 0 !== (i = ((E.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, s)) && !1 === (c.result = i) && (c.preventDefault(), c.stopPropagation()));
                                return u.postDispatch && u.postDispatch.call(this, c), c.result;
                            }
                        },
                        handlers: function (e, t) {
                            var n,
                                i,
                                o,
                                r,
                                a,
                                s = [],
                                c = t.delegateCount,
                                l = e.target;
                            if (c && l.nodeType && !("click" === e.type && e.button >= 1))
                                for (; l !== this; l = l.parentNode || this)
                                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                                        for (r = [], a = {}, n = 0; n < c; n++) void 0 === a[(o = (i = t[n]).selector + " ")] && (a[o] = i.needsContext ? E(o, this).index(l) > -1 : E.find(o, this, null, [l]).length), a[o] && r.push(i);
                                        r.length && s.push({ elem: l, handlers: r });
                                    }
                            return (l = this), c < t.length && s.push({ elem: l, handlers: t.slice(c) }), s;
                        },
                        addProp: function (e, t) {
                            Object.defineProperty(E.Event.prototype, e, {
                                enumerable: !0,
                                configurable: !0,
                                get: g(t)
                                    ? function () {
                                          if (this.originalEvent) return t(this.originalEvent);
                                      }
                                    : function () {
                                          if (this.originalEvent) return this.originalEvent[e];
                                      },
                                set: function (t) {
                                    Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
                                },
                            });
                        },
                        fix: function (e) {
                            return e[E.expando] ? e : new E.Event(e);
                        },
                        special: {
                            load: { noBubble: !0 },
                            click: {
                                setup: function (e) {
                                    var t = this || e;
                                    return ve.test(t.type) && t.click && A(t, "input") && De(t, "click", Te), !1;
                                },
                                trigger: function (e) {
                                    var t = this || e;
                                    return ve.test(t.type) && t.click && A(t, "input") && De(t, "click"), !0;
                                },
                                _default: function (e) {
                                    var t = e.target;
                                    return (ve.test(t.type) && t.click && A(t, "input") && Z.get(t, "click")) || A(t, "a");
                                },
                            },
                            beforeunload: {
                                postDispatch: function (e) {
                                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                                },
                            },
                        },
                    }),
                        (E.removeEvent = function (e, t, n) {
                            e.removeEventListener && e.removeEventListener(t, n);
                        }),
                        (E.Event = function (e, t) {
                            if (!(this instanceof E.Event)) return new E.Event(e, t);
                            e && e.type
                                ? ((this.originalEvent = e),
                                  (this.type = e.type),
                                  (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? Te : Pe),
                                  (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                                  (this.currentTarget = e.currentTarget),
                                  (this.relatedTarget = e.relatedTarget))
                                : (this.type = e),
                                t && E.extend(this, t),
                                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                                (this[E.expando] = !0);
                        }),
                        (E.Event.prototype = {
                            constructor: E.Event,
                            isDefaultPrevented: Pe,
                            isPropagationStopped: Pe,
                            isImmediatePropagationStopped: Pe,
                            isSimulated: !1,
                            preventDefault: function () {
                                var e = this.originalEvent;
                                (this.isDefaultPrevented = Te), e && !this.isSimulated && e.preventDefault();
                            },
                            stopPropagation: function () {
                                var e = this.originalEvent;
                                (this.isPropagationStopped = Te), e && !this.isSimulated && e.stopPropagation();
                            },
                            stopImmediatePropagation: function () {
                                var e = this.originalEvent;
                                (this.isImmediatePropagationStopped = Te), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
                            },
                        }),
                        E.each(
                            {
                                altKey: !0,
                                bubbles: !0,
                                cancelable: !0,
                                changedTouches: !0,
                                ctrlKey: !0,
                                detail: !0,
                                eventPhase: !0,
                                metaKey: !0,
                                pageX: !0,
                                pageY: !0,
                                shiftKey: !0,
                                view: !0,
                                char: !0,
                                code: !0,
                                charCode: !0,
                                key: !0,
                                keyCode: !0,
                                button: !0,
                                buttons: !0,
                                clientX: !0,
                                clientY: !0,
                                offsetX: !0,
                                offsetY: !0,
                                pointerId: !0,
                                pointerType: !0,
                                screenX: !0,
                                screenY: !0,
                                targetTouches: !0,
                                toElement: !0,
                                touches: !0,
                                which: function (e) {
                                    var t = e.button;
                                    return null == e.which && Ee.test(e.type) ? (null != e.charCode ? e.charCode : e.keyCode) : !e.which && void 0 !== t && ke.test(e.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : e.which;
                                },
                            },
                            E.event.addProp
                        ),
                        E.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                            E.event.special[e] = {
                                setup: function () {
                                    return De(this, e, Le), !1;
                                },
                                trigger: function () {
                                    return De(this, e), !0;
                                },
                                delegateType: t,
                            };
                        }),
                        E.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
                            E.event.special[e] = {
                                delegateType: t,
                                bindType: t,
                                handle: function (e) {
                                    var n,
                                        i = this,
                                        o = e.relatedTarget,
                                        r = e.handleObj;
                                    return (o && (o === i || E.contains(i, o))) || ((e.type = r.origType), (n = r.handler.apply(this, arguments)), (e.type = t)), n;
                                },
                            };
                        }),
                        E.fn.extend({
                            on: function (e, t, n, i) {
                                return Ae(this, e, t, n, i);
                            },
                            one: function (e, t, n, i) {
                                return Ae(this, e, t, n, i, 1);
                            },
                            off: function (e, t, n) {
                                var i, o;
                                if (e && e.preventDefault && e.handleObj) return (i = e.handleObj), E(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                                if ("object" == typeof e) {
                                    for (o in e) this.off(o, t, e[o]);
                                    return this;
                                }
                                return (
                                    (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                                    !1 === n && (n = Pe),
                                    this.each(function () {
                                        E.event.remove(this, e, n, t);
                                    })
                                );
                            },
                        });
                    var je = /<script|<style|<link/i,
                        Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
                        Me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
                    function qe(e, t) {
                        return (A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0]) || e;
                    }
                    function Ie(e) {
                        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
                    }
                    function Re(e) {
                        return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
                    }
                    function Oe(e, t) {
                        var n, i, o, r, a, s;
                        if (1 === t.nodeType) {
                            if (Z.hasData(e) && (s = Z.get(e).events)) for (o in (Z.remove(t, "handle events"), s)) for (n = 0, i = s[o].length; n < i; n++) E.event.add(t, o, s[o][n]);
                            J.hasData(e) && ((r = J.access(e)), (a = E.extend({}, r)), J.set(t, a));
                        }
                    }
                    function He(e, t) {
                        var n = t.nodeName.toLowerCase();
                        "input" === n && ve.test(e.type) ? (t.checked = e.checked) : ("input" !== n && "textarea" !== n) || (t.defaultValue = e.defaultValue);
                    }
                    function Fe(e, t, n, i) {
                        t = c(t);
                        var o,
                            r,
                            a,
                            s,
                            l,
                            u,
                            d = 0,
                            f = e.length,
                            h = f - 1,
                            p = t[0],
                            m = g(p);
                        if (m || (f > 1 && "string" == typeof p && !v.checkClone && Ne.test(p)))
                            return e.each(function (o) {
                                var r = e.eq(o);
                                m && (t[0] = p.call(this, o, r.html())), Fe(r, t, n, i);
                            });
                        if (f && ((r = (o = Se(t, e[0].ownerDocument, !1, e, i)).firstChild), 1 === o.childNodes.length && (o = r), r || i)) {
                            for (s = (a = E.map(xe(o, "script"), Ie)).length; d < f; d++) (l = o), d !== h && ((l = E.clone(l, !0, !0)), s && E.merge(a, xe(l, "script"))), n.call(e[d], l, d);
                            if (s)
                                for (u = a[a.length - 1].ownerDocument, E.map(a, Re), d = 0; d < s; d++)
                                    (l = a[d]),
                                        ye.test(l.type || "") &&
                                            !Z.access(l, "globalEval") &&
                                            E.contains(u, l) &&
                                            (l.src && "module" !== (l.type || "").toLowerCase() ? E._evalUrl && !l.noModule && E._evalUrl(l.src, { nonce: l.nonce || l.getAttribute("nonce") }, u) : b(l.textContent.replace(Me, ""), l, u));
                        }
                        return e;
                    }
                    function Be(e, t, n) {
                        for (var i, o = t ? E.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || E.cleanData(xe(i)), i.parentNode && (n && se(i) && be(xe(i, "script")), i.parentNode.removeChild(i));
                        return e;
                    }
                    E.extend({
                        htmlPrefilter: function (e) {
                            return e;
                        },
                        clone: function (e, t, n) {
                            var i,
                                o,
                                r,
                                a,
                                s = e.cloneNode(!0),
                                c = se(e);
                            if (!(v.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || E.isXMLDoc(e))) for (a = xe(s), i = 0, o = (r = xe(e)).length; i < o; i++) He(r[i], a[i]);
                            if (t)
                                if (n) for (r = r || xe(e), a = a || xe(s), i = 0, o = r.length; i < o; i++) Oe(r[i], a[i]);
                                else Oe(e, s);
                            return (a = xe(s, "script")).length > 0 && be(a, !c && xe(e, "script")), s;
                        },
                        cleanData: function (e) {
                            for (var t, n, i, o = E.event.special, r = 0; void 0 !== (n = e[r]); r++)
                                if (Y(n)) {
                                    if ((t = n[Z.expando])) {
                                        if (t.events) for (i in t.events) o[i] ? E.event.remove(n, i) : E.removeEvent(n, i, t.handle);
                                        n[Z.expando] = void 0;
                                    }
                                    n[J.expando] && (n[J.expando] = void 0);
                                }
                        },
                    }),
                        E.fn.extend({
                            detach: function (e) {
                                return Be(this, e, !0);
                            },
                            remove: function (e) {
                                return Be(this, e);
                            },
                            text: function (e) {
                                return $(
                                    this,
                                    function (e) {
                                        return void 0 === e
                                            ? E.text(this)
                                            : this.empty().each(function () {
                                                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                                              });
                                    },
                                    null,
                                    e,
                                    arguments.length
                                );
                            },
                            append: function () {
                                return Fe(this, arguments, function (e) {
                                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || qe(this, e).appendChild(e);
                                });
                            },
                            prepend: function () {
                                return Fe(this, arguments, function (e) {
                                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                        var t = qe(this, e);
                                        t.insertBefore(e, t.firstChild);
                                    }
                                });
                            },
                            before: function () {
                                return Fe(this, arguments, function (e) {
                                    this.parentNode && this.parentNode.insertBefore(e, this);
                                });
                            },
                            after: function () {
                                return Fe(this, arguments, function (e) {
                                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                                });
                            },
                            empty: function () {
                                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (E.cleanData(xe(e, !1)), (e.textContent = ""));
                                return this;
                            },
                            clone: function (e, t) {
                                return (
                                    (e = null != e && e),
                                    (t = null == t ? e : t),
                                    this.map(function () {
                                        return E.clone(this, e, t);
                                    })
                                );
                            },
                            html: function (e) {
                                return $(
                                    this,
                                    function (e) {
                                        var t = this[0] || {},
                                            n = 0,
                                            i = this.length;
                                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                                        if ("string" == typeof e && !je.test(e) && !we[(ge.exec(e) || ["", ""])[1].toLowerCase()]) {
                                            e = E.htmlPrefilter(e);
                                            try {
                                                for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (E.cleanData(xe(t, !1)), (t.innerHTML = e));
                                                t = 0;
                                            } catch (e) {}
                                        }
                                        t && this.empty().append(e);
                                    },
                                    null,
                                    e,
                                    arguments.length
                                );
                            },
                            replaceWith: function () {
                                var e = [];
                                return Fe(
                                    this,
                                    arguments,
                                    function (t) {
                                        var n = this.parentNode;
                                        E.inArray(this, e) < 0 && (E.cleanData(xe(this)), n && n.replaceChild(t, this));
                                    },
                                    e
                                );
                            },
                        }),
                        E.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
                            E.fn[e] = function (e) {
                                for (var n, i = [], o = E(e), r = o.length - 1, a = 0; a <= r; a++) (n = a === r ? this : this.clone(!0)), E(o[a])[t](n), l.apply(i, n.get());
                                return this.pushStack(i);
                            };
                        });
                    var Ve = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
                        We = function (e) {
                            var t = e.ownerDocument.defaultView;
                            return (t && t.opener) || (t = i), t.getComputedStyle(e);
                        },
                        ze = function (e, t, n) {
                            var i,
                                o,
                                r = {};
                            for (o in t) (r[o] = e.style[o]), (e.style[o] = t[o]);
                            for (o in ((i = n.call(e)), t)) e.style[o] = r[o];
                            return i;
                        },
                        $e = new RegExp(re.join("|"), "i");
                    function Ue(e, t, n) {
                        var i,
                            o,
                            r,
                            a,
                            s = e.style;
                        return (
                            (n = n || We(e)) &&
                                ("" !== (a = n.getPropertyValue(t) || n[t]) || se(e) || (a = E.style(e, t)),
                                !v.pixelBoxStyles() &&
                                    Ve.test(a) &&
                                    $e.test(t) &&
                                    ((i = s.width), (o = s.minWidth), (r = s.maxWidth), (s.minWidth = s.maxWidth = s.width = a), (a = n.width), (s.width = i), (s.minWidth = o), (s.maxWidth = r))),
                            void 0 !== a ? a + "" : a
                        );
                    }
                    function Ge(e, t) {
                        return {
                            get: function () {
                                if (!e()) return (this.get = t).apply(this, arguments);
                                delete this.get;
                            },
                        };
                    }
                    !(function () {
                        function e() {
                            if (u) {
                                (l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                                    (u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                                    ae.appendChild(l).appendChild(u);
                                var e = i.getComputedStyle(u);
                                (n = "1%" !== e.top),
                                    (c = 12 === t(e.marginLeft)),
                                    (u.style.right = "60%"),
                                    (a = 36 === t(e.right)),
                                    (o = 36 === t(e.width)),
                                    (u.style.position = "absolute"),
                                    (r = 12 === t(u.offsetWidth / 3)),
                                    ae.removeChild(l),
                                    (u = null);
                            }
                        }
                        function t(e) {
                            return Math.round(parseFloat(e));
                        }
                        var n,
                            o,
                            r,
                            a,
                            s,
                            c,
                            l = w.createElement("div"),
                            u = w.createElement("div");
                        u.style &&
                            ((u.style.backgroundClip = "content-box"),
                            (u.cloneNode(!0).style.backgroundClip = ""),
                            (v.clearCloneStyle = "content-box" === u.style.backgroundClip),
                            E.extend(v, {
                                boxSizingReliable: function () {
                                    return e(), o;
                                },
                                pixelBoxStyles: function () {
                                    return e(), a;
                                },
                                pixelPosition: function () {
                                    return e(), n;
                                },
                                reliableMarginLeft: function () {
                                    return e(), c;
                                },
                                scrollboxSize: function () {
                                    return e(), r;
                                },
                                reliableTrDimensions: function () {
                                    var e, t, n, o;
                                    return (
                                        null == s &&
                                            ((e = w.createElement("table")),
                                            (t = w.createElement("tr")),
                                            (n = w.createElement("div")),
                                            (e.style.cssText = "position:absolute;left:-11111px"),
                                            (t.style.height = "1px"),
                                            (n.style.height = "9px"),
                                            ae.appendChild(e).appendChild(t).appendChild(n),
                                            (o = i.getComputedStyle(t)),
                                            (s = parseInt(o.height) > 3),
                                            ae.removeChild(e)),
                                        s
                                    );
                                },
                            }));
                    })();
                    var Xe = ["Webkit", "Moz", "ms"],
                        Ke = w.createElement("div").style,
                        Ye = {};
                    function Qe(e) {
                        return (
                            E.cssProps[e] ||
                            Ye[e] ||
                            (e in Ke
                                ? e
                                : (Ye[e] =
                                      (function (e) {
                                          for (var t = e[0].toUpperCase() + e.slice(1), n = Xe.length; n--; ) if ((e = Xe[n] + t) in Ke) return e;
                                      })(e) || e))
                        );
                    }
                    var Ze = /^(none|table(?!-c[ea]).+)/,
                        Je = /^--/,
                        et = { position: "absolute", visibility: "hidden", display: "block" },
                        tt = { letterSpacing: "0", fontWeight: "400" };
                    function nt(e, t, n) {
                        var i = oe.exec(t);
                        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
                    }
                    function it(e, t, n, i, o, r) {
                        var a = "width" === t ? 1 : 0,
                            s = 0,
                            c = 0;
                        if (n === (i ? "border" : "content")) return 0;
                        for (; a < 4; a += 2)
                            "margin" === n && (c += E.css(e, n + re[a], !0, o)),
                                i
                                    ? ("content" === n && (c -= E.css(e, "padding" + re[a], !0, o)), "margin" !== n && (c -= E.css(e, "border" + re[a] + "Width", !0, o)))
                                    : ((c += E.css(e, "padding" + re[a], !0, o)), "padding" !== n ? (c += E.css(e, "border" + re[a] + "Width", !0, o)) : (s += E.css(e, "border" + re[a] + "Width", !0, o)));
                        return !i && r >= 0 && (c += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - c - s - 0.5)) || 0), c;
                    }
                    function ot(e, t, n) {
                        var i = We(e),
                            o = (!v.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, i),
                            r = o,
                            a = Ue(e, t, i),
                            s = "offset" + t[0].toUpperCase() + t.slice(1);
                        if (Ve.test(a)) {
                            if (!n) return a;
                            a = "auto";
                        }
                        return (
                            ((!v.boxSizingReliable() && o) || (!v.reliableTrDimensions() && A(e, "tr")) || "auto" === a || (!parseFloat(a) && "inline" === E.css(e, "display", !1, i))) &&
                                e.getClientRects().length &&
                                ((o = "border-box" === E.css(e, "boxSizing", !1, i)), (r = s in e) && (a = e[s])),
                            (a = parseFloat(a) || 0) + it(e, t, n || (o ? "border" : "content"), r, i, a) + "px"
                        );
                    }
                    function rt(e, t, n, i, o) {
                        return new rt.prototype.init(e, t, n, i, o);
                    }
                    E.extend({
                        cssHooks: {
                            opacity: {
                                get: function (e, t) {
                                    if (t) {
                                        var n = Ue(e, "opacity");
                                        return "" === n ? "1" : n;
                                    }
                                },
                            },
                        },
                        cssNumber: {
                            animationIterationCount: !0,
                            columnCount: !0,
                            fillOpacity: !0,
                            flexGrow: !0,
                            flexShrink: !0,
                            fontWeight: !0,
                            gridArea: !0,
                            gridColumn: !0,
                            gridColumnEnd: !0,
                            gridColumnStart: !0,
                            gridRow: !0,
                            gridRowEnd: !0,
                            gridRowStart: !0,
                            lineHeight: !0,
                            opacity: !0,
                            order: !0,
                            orphans: !0,
                            widows: !0,
                            zIndex: !0,
                            zoom: !0,
                        },
                        cssProps: {},
                        style: function (e, t, n, i) {
                            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                                var o,
                                    r,
                                    a,
                                    s = K(t),
                                    c = Je.test(t),
                                    l = e.style;
                                if ((c || (t = Qe(s)), (a = E.cssHooks[t] || E.cssHooks[s]), void 0 === n)) return a && "get" in a && void 0 !== (o = a.get(e, !1, i)) ? o : l[t];
                                "string" == (r = typeof n) && (o = oe.exec(n)) && o[1] && ((n = ue(e, t, o)), (r = "number")),
                                    null != n &&
                                        n == n &&
                                        ("number" !== r || c || (n += (o && o[3]) || (E.cssNumber[s] ? "" : "px")),
                                        v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                                        (a && "set" in a && void 0 === (n = a.set(e, n, i))) || (c ? l.setProperty(t, n) : (l[t] = n)));
                            }
                        },
                        css: function (e, t, n, i) {
                            var o,
                                r,
                                a,
                                s = K(t);
                            return (
                                Je.test(t) || (t = Qe(s)),
                                (a = E.cssHooks[t] || E.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)),
                                void 0 === o && (o = Ue(e, t, i)),
                                "normal" === o && t in tt && (o = tt[t]),
                                "" === n || n ? ((r = parseFloat(o)), !0 === n || isFinite(r) ? r || 0 : o) : o
                            );
                        },
                    }),
                        E.each(["height", "width"], function (e, t) {
                            E.cssHooks[t] = {
                                get: function (e, n, i) {
                                    if (n)
                                        return !Ze.test(E.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                                            ? ot(e, t, i)
                                            : ze(e, et, function () {
                                                  return ot(e, t, i);
                                              });
                                },
                                set: function (e, n, i) {
                                    var o,
                                        r = We(e),
                                        a = !v.scrollboxSize() && "absolute" === r.position,
                                        s = (a || i) && "border-box" === E.css(e, "boxSizing", !1, r),
                                        c = i ? it(e, t, i, s, r) : 0;
                                    return (
                                        s && a && (c -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - it(e, t, "border", !1, r) - 0.5)),
                                        c && (o = oe.exec(n)) && "px" !== (o[3] || "px") && ((e.style[t] = n), (n = E.css(e, t))),
                                        nt(0, n, c)
                                    );
                                },
                            };
                        }),
                        (E.cssHooks.marginLeft = Ge(v.reliableMarginLeft, function (e, t) {
                            if (t)
                                return (
                                    (parseFloat(Ue(e, "marginLeft")) ||
                                        e.getBoundingClientRect().left -
                                            ze(e, { marginLeft: 0 }, function () {
                                                return e.getBoundingClientRect().left;
                                            })) + "px"
                                );
                        })),
                        E.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
                            (E.cssHooks[e + t] = {
                                expand: function (n) {
                                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + re[i] + t] = r[i] || r[i - 2] || r[0];
                                    return o;
                                },
                            }),
                                "margin" !== e && (E.cssHooks[e + t].set = nt);
                        }),
                        E.fn.extend({
                            css: function (e, t) {
                                return $(
                                    this,
                                    function (e, t, n) {
                                        var i,
                                            o,
                                            r = {},
                                            a = 0;
                                        if (Array.isArray(t)) {
                                            for (i = We(e), o = t.length; a < o; a++) r[t[a]] = E.css(e, t[a], !1, i);
                                            return r;
                                        }
                                        return void 0 !== n ? E.style(e, t, n) : E.css(e, t);
                                    },
                                    e,
                                    t,
                                    arguments.length > 1
                                );
                            },
                        }),
                        (E.Tween = rt),
                        (rt.prototype = {
                            constructor: rt,
                            init: function (e, t, n, i, o, r) {
                                (this.elem = e), (this.prop = n), (this.easing = o || E.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = i), (this.unit = r || (E.cssNumber[n] ? "" : "px"));
                            },
                            cur: function () {
                                var e = rt.propHooks[this.prop];
                                return e && e.get ? e.get(this) : rt.propHooks._default.get(this);
                            },
                            run: function (e) {
                                var t,
                                    n = rt.propHooks[this.prop];
                                return (
                                    this.options.duration ? (this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                                    (this.now = (this.end - this.start) * t + this.start),
                                    this.options.step && this.options.step.call(this.elem, this.now, this),
                                    n && n.set ? n.set(this) : rt.propHooks._default.set(this),
                                    this
                                );
                            },
                        }),
                        (rt.prototype.init.prototype = rt.prototype),
                        (rt.propHooks = {
                            _default: {
                                get: function (e) {
                                    var t;
                                    return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = E.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                                },
                                set: function (e) {
                                    E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (!E.cssHooks[e.prop] && null == e.elem.style[Qe(e.prop)]) ? (e.elem[e.prop] = e.now) : E.style(e.elem, e.prop, e.now + e.unit);
                                },
                            },
                        }),
                        (rt.propHooks.scrollTop = rt.propHooks.scrollLeft = {
                            set: function (e) {
                                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                            },
                        }),
                        (E.easing = {
                            linear: function (e) {
                                return e;
                            },
                            swing: function (e) {
                                return 0.5 - Math.cos(e * Math.PI) / 2;
                            },
                            _default: "swing",
                        }),
                        (E.fx = rt.prototype.init),
                        (E.fx.step = {});
                    var at,
                        st,
                        ct = /^(?:toggle|show|hide)$/,
                        lt = /queueHooks$/;
                    function ut() {
                        st && (!1 === w.hidden && i.requestAnimationFrame ? i.requestAnimationFrame(ut) : i.setTimeout(ut, E.fx.interval), E.fx.tick());
                    }
                    function dt() {
                        return (
                            i.setTimeout(function () {
                                at = void 0;
                            }),
                            (at = Date.now())
                        );
                    }
                    function ft(e, t) {
                        var n,
                            i = 0,
                            o = { height: e };
                        for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = re[i])] = o["padding" + n] = e;
                        return t && (o.opacity = o.width = e), o;
                    }
                    function ht(e, t, n) {
                        for (var i, o = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), r = 0, a = o.length; r < a; r++) if ((i = o[r].call(n, t, e))) return i;
                    }
                    function pt(e, t, n) {
                        var i,
                            o,
                            r = 0,
                            a = pt.prefilters.length,
                            s = E.Deferred().always(function () {
                                delete c.elem;
                            }),
                            c = function () {
                                if (o) return !1;
                                for (var t = at || dt(), n = Math.max(0, l.startTime + l.duration - t), i = 1 - (n / l.duration || 0), r = 0, a = l.tweens.length; r < a; r++) l.tweens[r].run(i);
                                return s.notifyWith(e, [l, i, n]), i < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1);
                            },
                            l = s.promise({
                                elem: e,
                                props: E.extend({}, t),
                                opts: E.extend(!0, { specialEasing: {}, easing: E.easing._default }, n),
                                originalProperties: t,
                                originalOptions: n,
                                startTime: at || dt(),
                                duration: n.duration,
                                tweens: [],
                                createTween: function (t, n) {
                                    var i = E.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                                    return l.tweens.push(i), i;
                                },
                                stop: function (t) {
                                    var n = 0,
                                        i = t ? l.tweens.length : 0;
                                    if (o) return this;
                                    for (o = !0; n < i; n++) l.tweens[n].run(1);
                                    return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
                                },
                            }),
                            u = l.props;
                        for (
                            (function (e, t) {
                                var n, i, o, r, a;
                                for (n in e)
                                    if (((o = t[(i = K(n))]), (r = e[n]), Array.isArray(r) && ((o = r[1]), (r = e[n] = r[0])), n !== i && ((e[i] = r), delete e[n]), (a = E.cssHooks[i]) && ("expand" in a)))
                                        for (n in ((r = a.expand(r)), delete e[i], r)) (n in e) || ((e[n] = r[n]), (t[n] = o));
                                    else t[i] = o;
                            })(u, l.opts.specialEasing);
                            r < a;
                            r++
                        )
                            if ((i = pt.prefilters[r].call(l, e, u, l.opts))) return g(i.stop) && (E._queueHooks(l.elem, l.opts.queue).stop = i.stop.bind(i)), i;
                        return (
                            E.map(u, ht, l),
                            g(l.opts.start) && l.opts.start.call(e, l),
                            l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
                            E.fx.timer(E.extend(c, { elem: e, anim: l, queue: l.opts.queue })),
                            l
                        );
                    }
                    (E.Animation = E.extend(pt, {
                        tweeners: {
                            "*": [
                                function (e, t) {
                                    var n = this.createTween(e, t);
                                    return ue(n.elem, e, oe.exec(t), n), n;
                                },
                            ],
                        },
                        tweener: function (e, t) {
                            g(e) ? ((t = e), (e = ["*"])) : (e = e.match(O));
                            for (var n, i = 0, o = e.length; i < o; i++) (n = e[i]), (pt.tweeners[n] = pt.tweeners[n] || []), pt.tweeners[n].unshift(t);
                        },
                        prefilters: [
                            function (e, t, n) {
                                var i,
                                    o,
                                    r,
                                    a,
                                    s,
                                    c,
                                    l,
                                    u,
                                    d = "width" in t || "height" in t,
                                    f = this,
                                    h = {},
                                    p = e.style,
                                    m = e.nodeType && le(e),
                                    v = Z.get(e, "fxshow");
                                for (i in (n.queue ||
                                    (null == (a = E._queueHooks(e, "fx")).unqueued &&
                                        ((a.unqueued = 0),
                                        (s = a.empty.fire),
                                        (a.empty.fire = function () {
                                            a.unqueued || s();
                                        })),
                                    a.unqueued++,
                                    f.always(function () {
                                        f.always(function () {
                                            a.unqueued--, E.queue(e, "fx").length || a.empty.fire();
                                        });
                                    })),
                                t))
                                    if (((o = t[i]), ct.test(o))) {
                                        if ((delete t[i], (r = r || "toggle" === o), o === (m ? "hide" : "show"))) {
                                            if ("show" !== o || !v || void 0 === v[i]) continue;
                                            m = !0;
                                        }
                                        h[i] = (v && v[i]) || E.style(e, i);
                                    }
                                if ((c = !E.isEmptyObject(t)) || !E.isEmptyObject(h))
                                    for (i in (d &&
                                        1 === e.nodeType &&
                                        ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
                                        null == (l = v && v.display) && (l = Z.get(e, "display")),
                                        "none" === (u = E.css(e, "display")) && (l ? (u = l) : (he([e], !0), (l = e.style.display || l), (u = E.css(e, "display")), he([e]))),
                                        ("inline" === u || ("inline-block" === u && null != l)) &&
                                            "none" === E.css(e, "float") &&
                                            (c ||
                                                (f.done(function () {
                                                    p.display = l;
                                                }),
                                                null == l && ((u = p.display), (l = "none" === u ? "" : u))),
                                            (p.display = "inline-block"))),
                                    n.overflow &&
                                        ((p.overflow = "hidden"),
                                        f.always(function () {
                                            (p.overflow = n.overflow[0]), (p.overflowX = n.overflow[1]), (p.overflowY = n.overflow[2]);
                                        })),
                                    (c = !1),
                                    h))
                                        c ||
                                            (v ? "hidden" in v && (m = v.hidden) : (v = Z.access(e, "fxshow", { display: l })),
                                            r && (v.hidden = !m),
                                            m && he([e], !0),
                                            f.done(function () {
                                                for (i in (m || he([e]), Z.remove(e, "fxshow"), h)) E.style(e, i, h[i]);
                                            })),
                                            (c = ht(m ? v[i] : 0, i, f)),
                                            i in v || ((v[i] = c.start), m && ((c.end = c.start), (c.start = 0)));
                            },
                        ],
                        prefilter: function (e, t) {
                            t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
                        },
                    })),
                        (E.speed = function (e, t, n) {
                            var i = e && "object" == typeof e ? E.extend({}, e) : { complete: n || (!n && t) || (g(e) && e), duration: e, easing: (n && t) || (t && !g(t) && t) };
                            return (
                                E.fx.off ? (i.duration = 0) : "number" != typeof i.duration && (i.duration in E.fx.speeds ? (i.duration = E.fx.speeds[i.duration]) : (i.duration = E.fx.speeds._default)),
                                (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                                (i.old = i.complete),
                                (i.complete = function () {
                                    g(i.old) && i.old.call(this), i.queue && E.dequeue(this, i.queue);
                                }),
                                i
                            );
                        }),
                        E.fn.extend({
                            fadeTo: function (e, t, n, i) {
                                return this.filter(le).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i);
                            },
                            animate: function (e, t, n, i) {
                                var o = E.isEmptyObject(e),
                                    r = E.speed(t, n, i),
                                    a = function () {
                                        var t = pt(this, E.extend({}, e), r);
                                        (o || Z.get(this, "finish")) && t.stop(!0);
                                    };
                                return (a.finish = a), o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a);
                            },
                            stop: function (e, t, n) {
                                var i = function (e) {
                                    var t = e.stop;
                                    delete e.stop, t(n);
                                };
                                return (
                                    "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                                    t && this.queue(e || "fx", []),
                                    this.each(function () {
                                        var t = !0,
                                            o = null != e && e + "queueHooks",
                                            r = E.timers,
                                            a = Z.get(this);
                                        if (o) a[o] && a[o].stop && i(a[o]);
                                        else for (o in a) a[o] && a[o].stop && lt.test(o) && i(a[o]);
                                        for (o = r.length; o--; ) r[o].elem !== this || (null != e && r[o].queue !== e) || (r[o].anim.stop(n), (t = !1), r.splice(o, 1));
                                        (!t && n) || E.dequeue(this, e);
                                    })
                                );
                            },
                            finish: function (e) {
                                return (
                                    !1 !== e && (e = e || "fx"),
                                    this.each(function () {
                                        var t,
                                            n = Z.get(this),
                                            i = n[e + "queue"],
                                            o = n[e + "queueHooks"],
                                            r = E.timers,
                                            a = i ? i.length : 0;
                                        for (n.finish = !0, E.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--; ) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                                        for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
                                        delete n.finish;
                                    })
                                );
                            },
                        }),
                        E.each(["toggle", "show", "hide"], function (e, t) {
                            var n = E.fn[t];
                            E.fn[t] = function (e, i, o) {
                                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ft(t, !0), e, i, o);
                            };
                        }),
                        E.each({ slideDown: ft("show"), slideUp: ft("hide"), slideToggle: ft("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
                            E.fn[e] = function (e, n, i) {
                                return this.animate(t, e, n, i);
                            };
                        }),
                        (E.timers = []),
                        (E.fx.tick = function () {
                            var e,
                                t = 0,
                                n = E.timers;
                            for (at = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                            n.length || E.fx.stop(), (at = void 0);
                        }),
                        (E.fx.timer = function (e) {
                            E.timers.push(e), E.fx.start();
                        }),
                        (E.fx.interval = 13),
                        (E.fx.start = function () {
                            st || ((st = !0), ut());
                        }),
                        (E.fx.stop = function () {
                            st = null;
                        }),
                        (E.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
                        (E.fn.delay = function (e, t) {
                            return (
                                (e = (E.fx && E.fx.speeds[e]) || e),
                                (t = t || "fx"),
                                this.queue(t, function (t, n) {
                                    var o = i.setTimeout(t, e);
                                    n.stop = function () {
                                        i.clearTimeout(o);
                                    };
                                })
                            );
                        }),
                        (function () {
                            var e = w.createElement("input"),
                                t = w.createElement("select").appendChild(w.createElement("option"));
                            (e.type = "checkbox"), (v.checkOn = "" !== e.value), (v.optSelected = t.selected), ((e = w.createElement("input")).value = "t"), (e.type = "radio"), (v.radioValue = "t" === e.value);
                        })();
                    var mt,
                        vt = E.expr.attrHandle;
                    E.fn.extend({
                        attr: function (e, t) {
                            return $(this, E.attr, e, t, arguments.length > 1);
                        },
                        removeAttr: function (e) {
                            return this.each(function () {
                                E.removeAttr(this, e);
                            });
                        },
                    }),
                        E.extend({
                            attr: function (e, t, n) {
                                var i,
                                    o,
                                    r = e.nodeType;
                                if (3 !== r && 8 !== r && 2 !== r)
                                    return void 0 === e.getAttribute
                                        ? E.prop(e, t, n)
                                        : ((1 === r && E.isXMLDoc(e)) || (o = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? mt : void 0)),
                                          void 0 !== n
                                              ? null === n
                                                  ? void E.removeAttr(e, t)
                                                  : o && "set" in o && void 0 !== (i = o.set(e, n, t))
                                                  ? i
                                                  : (e.setAttribute(t, n + ""), n)
                                              : o && "get" in o && null !== (i = o.get(e, t))
                                              ? i
                                              : null == (i = E.find.attr(e, t))
                                              ? void 0
                                              : i);
                            },
                            attrHooks: {
                                type: {
                                    set: function (e, t) {
                                        if (!v.radioValue && "radio" === t && A(e, "input")) {
                                            var n = e.value;
                                            return e.setAttribute("type", t), n && (e.value = n), t;
                                        }
                                    },
                                },
                            },
                            removeAttr: function (e, t) {
                                var n,
                                    i = 0,
                                    o = t && t.match(O);
                                if (o && 1 === e.nodeType) for (; (n = o[i++]); ) e.removeAttribute(n);
                            },
                        }),
                        (mt = {
                            set: function (e, t, n) {
                                return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n;
                            },
                        }),
                        E.each(E.expr.match.bool.source.match(/\w+/g), function (e, t) {
                            var n = vt[t] || E.find.attr;
                            vt[t] = function (e, t, i) {
                                var o,
                                    r,
                                    a = t.toLowerCase();
                                return i || ((r = vt[a]), (vt[a] = o), (o = null != n(e, t, i) ? a : null), (vt[a] = r)), o;
                            };
                        });
                    var gt = /^(?:input|select|textarea|button)$/i,
                        yt = /^(?:a|area)$/i;
                    function wt(e) {
                        return (e.match(O) || []).join(" ");
                    }
                    function xt(e) {
                        return (e.getAttribute && e.getAttribute("class")) || "";
                    }
                    function bt(e) {
                        return Array.isArray(e) ? e : ("string" == typeof e && e.match(O)) || [];
                    }
                    E.fn.extend({
                        prop: function (e, t) {
                            return $(this, E.prop, e, t, arguments.length > 1);
                        },
                        removeProp: function (e) {
                            return this.each(function () {
                                delete this[E.propFix[e] || e];
                            });
                        },
                    }),
                        E.extend({
                            prop: function (e, t, n) {
                                var i,
                                    o,
                                    r = e.nodeType;
                                if (3 !== r && 8 !== r && 2 !== r)
                                    return (
                                        (1 === r && E.isXMLDoc(e)) || ((t = E.propFix[t] || t), (o = E.propHooks[t])),
                                        void 0 !== n ? (o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e[t] = n)) : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
                                    );
                            },
                            propHooks: {
                                tabIndex: {
                                    get: function (e) {
                                        var t = E.find.attr(e, "tabindex");
                                        return t ? parseInt(t, 10) : gt.test(e.nodeName) || (yt.test(e.nodeName) && e.href) ? 0 : -1;
                                    },
                                },
                            },
                            propFix: { for: "htmlFor", class: "className" },
                        }),
                        v.optSelected ||
                            (E.propHooks.selected = {
                                get: function (e) {
                                    var t = e.parentNode;
                                    return t && t.parentNode && t.parentNode.selectedIndex, null;
                                },
                                set: function (e) {
                                    var t = e.parentNode;
                                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                                },
                            }),
                        E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                            E.propFix[this.toLowerCase()] = this;
                        }),
                        E.fn.extend({
                            addClass: function (e) {
                                var t,
                                    n,
                                    i,
                                    o,
                                    r,
                                    a,
                                    s,
                                    c = 0;
                                if (g(e))
                                    return this.each(function (t) {
                                        E(this).addClass(e.call(this, t, xt(this)));
                                    });
                                if ((t = bt(e)).length)
                                    for (; (n = this[c++]); )
                                        if (((o = xt(n)), (i = 1 === n.nodeType && " " + wt(o) + " "))) {
                                            for (a = 0; (r = t[a++]); ) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                                            o !== (s = wt(i)) && n.setAttribute("class", s);
                                        }
                                return this;
                            },
                            removeClass: function (e) {
                                var t,
                                    n,
                                    i,
                                    o,
                                    r,
                                    a,
                                    s,
                                    c = 0;
                                if (g(e))
                                    return this.each(function (t) {
                                        E(this).removeClass(e.call(this, t, xt(this)));
                                    });
                                if (!arguments.length) return this.attr("class", "");
                                if ((t = bt(e)).length)
                                    for (; (n = this[c++]); )
                                        if (((o = xt(n)), (i = 1 === n.nodeType && " " + wt(o) + " "))) {
                                            for (a = 0; (r = t[a++]); ) for (; i.indexOf(" " + r + " ") > -1; ) i = i.replace(" " + r + " ", " ");
                                            o !== (s = wt(i)) && n.setAttribute("class", s);
                                        }
                                return this;
                            },
                            toggleClass: function (e, t) {
                                var n = typeof e,
                                    i = "string" === n || Array.isArray(e);
                                return "boolean" == typeof t && i
                                    ? t
                                        ? this.addClass(e)
                                        : this.removeClass(e)
                                    : g(e)
                                    ? this.each(function (n) {
                                          E(this).toggleClass(e.call(this, n, xt(this), t), t);
                                      })
                                    : this.each(function () {
                                          var t, o, r, a;
                                          if (i) for (o = 0, r = E(this), a = bt(e); (t = a[o++]); ) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                                          else
                                              (void 0 !== e && "boolean" !== n) ||
                                                  ((t = xt(this)) && Z.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Z.get(this, "__className__") || ""));
                                      });
                            },
                            hasClass: function (e) {
                                var t,
                                    n,
                                    i = 0;
                                for (t = " " + e + " "; (n = this[i++]); ) if (1 === n.nodeType && (" " + wt(xt(n)) + " ").indexOf(t) > -1) return !0;
                                return !1;
                            },
                        });
                    var _t = /\r/g;
                    E.fn.extend({
                        val: function (e) {
                            var t,
                                n,
                                i,
                                o = this[0];
                            return arguments.length
                                ? ((i = g(e)),
                                  this.each(function (n) {
                                      var o;
                                      1 === this.nodeType &&
                                          (null == (o = i ? e.call(this, n, E(this).val()) : e)
                                              ? (o = "")
                                              : "number" == typeof o
                                              ? (o += "")
                                              : Array.isArray(o) &&
                                                (o = E.map(o, function (e) {
                                                    return null == e ? "" : e + "";
                                                })),
                                          ((t = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value")) || (this.value = o));
                                  }))
                                : o
                                ? (t = E.valHooks[o.type] || E.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value"))
                                    ? n
                                    : "string" == typeof (n = o.value)
                                    ? n.replace(_t, "")
                                    : null == n
                                    ? ""
                                    : n
                                : void 0;
                        },
                    }),
                        E.extend({
                            valHooks: {
                                option: {
                                    get: function (e) {
                                        var t = E.find.attr(e, "value");
                                        return null != t ? t : wt(E.text(e));
                                    },
                                },
                                select: {
                                    get: function (e) {
                                        var t,
                                            n,
                                            i,
                                            o = e.options,
                                            r = e.selectedIndex,
                                            a = "select-one" === e.type,
                                            s = a ? null : [],
                                            c = a ? r + 1 : o.length;
                                        for (i = r < 0 ? c : a ? r : 0; i < c; i++)
                                            if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                                                if (((t = E(n).val()), a)) return t;
                                                s.push(t);
                                            }
                                        return s;
                                    },
                                    set: function (e, t) {
                                        for (var n, i, o = e.options, r = E.makeArray(t), a = o.length; a--; ) ((i = o[a]).selected = E.inArray(E.valHooks.option.get(i), r) > -1) && (n = !0);
                                        return n || (e.selectedIndex = -1), r;
                                    },
                                },
                            },
                        }),
                        E.each(["radio", "checkbox"], function () {
                            (E.valHooks[this] = {
                                set: function (e, t) {
                                    if (Array.isArray(t)) return (e.checked = E.inArray(E(e).val(), t) > -1);
                                },
                            }),
                                v.checkOn ||
                                    (E.valHooks[this].get = function (e) {
                                        return null === e.getAttribute("value") ? "on" : e.value;
                                    });
                        }),
                        (v.focusin = "onfocusin" in i);
                    var St = /^(?:focusinfocus|focusoutblur)$/,
                        Et = function (e) {
                            e.stopPropagation();
                        };
                    E.extend(E.event, {
                        trigger: function (e, t, n, o) {
                            var r,
                                a,
                                s,
                                c,
                                l,
                                u,
                                d,
                                f,
                                p = [n || w],
                                m = h.call(e, "type") ? e.type : e,
                                v = h.call(e, "namespace") ? e.namespace.split(".") : [];
                            if (
                                ((a = f = s = n = n || w),
                                3 !== n.nodeType &&
                                    8 !== n.nodeType &&
                                    !St.test(m + E.event.triggered) &&
                                    (m.indexOf(".") > -1 && ((v = m.split(".")), (m = v.shift()), v.sort()),
                                    (l = m.indexOf(":") < 0 && "on" + m),
                                    ((e = e[E.expando] ? e : new E.Event(m, "object" == typeof e && e)).isTrigger = o ? 2 : 3),
                                    (e.namespace = v.join(".")),
                                    (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                                    (e.result = void 0),
                                    e.target || (e.target = n),
                                    (t = null == t ? [e] : E.makeArray(t, [e])),
                                    (d = E.event.special[m] || {}),
                                    o || !d.trigger || !1 !== d.trigger.apply(n, t)))
                            ) {
                                if (!o && !d.noBubble && !y(n)) {
                                    for (c = d.delegateType || m, St.test(c + m) || (a = a.parentNode); a; a = a.parentNode) p.push(a), (s = a);
                                    s === (n.ownerDocument || w) && p.push(s.defaultView || s.parentWindow || i);
                                }
                                for (r = 0; (a = p[r++]) && !e.isPropagationStopped(); )
                                    (f = a),
                                        (e.type = r > 1 ? c : d.bindType || m),
                                        (u = (Z.get(a, "events") || Object.create(null))[e.type] && Z.get(a, "handle")) && u.apply(a, t),
                                        (u = l && a[l]) && u.apply && Y(a) && ((e.result = u.apply(a, t)), !1 === e.result && e.preventDefault());
                                return (
                                    (e.type = m),
                                    o ||
                                        e.isDefaultPrevented() ||
                                        (d._default && !1 !== d._default.apply(p.pop(), t)) ||
                                        !Y(n) ||
                                        (l &&
                                            g(n[m]) &&
                                            !y(n) &&
                                            ((s = n[l]) && (n[l] = null),
                                            (E.event.triggered = m),
                                            e.isPropagationStopped() && f.addEventListener(m, Et),
                                            n[m](),
                                            e.isPropagationStopped() && f.removeEventListener(m, Et),
                                            (E.event.triggered = void 0),
                                            s && (n[l] = s))),
                                    e.result
                                );
                            }
                        },
                        simulate: function (e, t, n) {
                            var i = E.extend(new E.Event(), n, { type: e, isSimulated: !0 });
                            E.event.trigger(i, null, t);
                        },
                    }),
                        E.fn.extend({
                            trigger: function (e, t) {
                                return this.each(function () {
                                    E.event.trigger(e, t, this);
                                });
                            },
                            triggerHandler: function (e, t) {
                                var n = this[0];
                                if (n) return E.event.trigger(e, t, n, !0);
                            },
                        }),
                        v.focusin ||
                            E.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                                var n = function (e) {
                                    E.event.simulate(t, e.target, E.event.fix(e));
                                };
                                E.event.special[t] = {
                                    setup: function () {
                                        var i = this.ownerDocument || this.document || this,
                                            o = Z.access(i, t);
                                        o || i.addEventListener(e, n, !0), Z.access(i, t, (o || 0) + 1);
                                    },
                                    teardown: function () {
                                        var i = this.ownerDocument || this.document || this,
                                            o = Z.access(i, t) - 1;
                                        o ? Z.access(i, t, o) : (i.removeEventListener(e, n, !0), Z.remove(i, t));
                                    },
                                };
                            });
                    var kt = i.location,
                        Ct = { guid: Date.now() },
                        Tt = /\?/;
                    E.parseXML = function (e) {
                        var t;
                        if (!e || "string" != typeof e) return null;
                        try {
                            t = new i.DOMParser().parseFromString(e, "text/xml");
                        } catch (e) {
                            t = void 0;
                        }
                        return (t && !t.getElementsByTagName("parsererror").length) || E.error("Invalid XML: " + e), t;
                    };
                    var Pt = /\[\]$/,
                        Lt = /\r?\n/g,
                        At = /^(?:submit|button|image|reset|file)$/i,
                        Dt = /^(?:input|select|textarea|keygen)/i;
                    function jt(e, t, n, i) {
                        var o;
                        if (Array.isArray(t))
                            E.each(t, function (t, o) {
                                n || Pt.test(e) ? i(e, o) : jt(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i);
                            });
                        else if (n || "object" !== _(t)) i(e, t);
                        else for (o in t) jt(e + "[" + o + "]", t[o], n, i);
                    }
                    (E.param = function (e, t) {
                        var n,
                            i = [],
                            o = function (e, t) {
                                var n = g(t) ? t() : t;
                                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
                            };
                        if (null == e) return "";
                        if (Array.isArray(e) || (e.jquery && !E.isPlainObject(e)))
                            E.each(e, function () {
                                o(this.name, this.value);
                            });
                        else for (n in e) jt(n, e[n], t, o);
                        return i.join("&");
                    }),
                        E.fn.extend({
                            serialize: function () {
                                return E.param(this.serializeArray());
                            },
                            serializeArray: function () {
                                return this.map(function () {
                                    var e = E.prop(this, "elements");
                                    return e ? E.makeArray(e) : this;
                                })
                                    .filter(function () {
                                        var e = this.type;
                                        return this.name && !E(this).is(":disabled") && Dt.test(this.nodeName) && !At.test(e) && (this.checked || !ve.test(e));
                                    })
                                    .map(function (e, t) {
                                        var n = E(this).val();
                                        return null == n
                                            ? null
                                            : Array.isArray(n)
                                            ? E.map(n, function (e) {
                                                  return { name: t.name, value: e.replace(Lt, "\r\n") };
                                              })
                                            : { name: t.name, value: n.replace(Lt, "\r\n") };
                                    })
                                    .get();
                            },
                        });
                    var Nt = /%20/g,
                        Mt = /#.*$/,
                        qt = /([?&])_=[^&]*/,
                        It = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                        Rt = /^(?:GET|HEAD)$/,
                        Ot = /^\/\//,
                        Ht = {},
                        Ft = {},
                        Bt = "*/".concat("*"),
                        Vt = w.createElement("a");
                    function Wt(e) {
                        return function (t, n) {
                            "string" != typeof t && ((n = t), (t = "*"));
                            var i,
                                o = 0,
                                r = t.toLowerCase().match(O) || [];
                            if (g(n)) for (; (i = r[o++]); ) "+" === i[0] ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
                        };
                    }
                    function zt(e, t, n, i) {
                        var o = {},
                            r = e === Ft;
                        function a(s) {
                            var c;
                            return (
                                (o[s] = !0),
                                E.each(e[s] || [], function (e, s) {
                                    var l = s(t, n, i);
                                    return "string" != typeof l || r || o[l] ? (r ? !(c = l) : void 0) : (t.dataTypes.unshift(l), a(l), !1);
                                }),
                                c
                            );
                        }
                        return a(t.dataTypes[0]) || (!o["*"] && a("*"));
                    }
                    function $t(e, t) {
                        var n,
                            i,
                            o = E.ajaxSettings.flatOptions || {};
                        for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
                        return i && E.extend(!0, e, i), e;
                    }
                    (Vt.href = kt.href),
                        E.extend({
                            active: 0,
                            lastModified: {},
                            etag: {},
                            ajaxSettings: {
                                url: kt.href,
                                type: "GET",
                                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(kt.protocol),
                                global: !0,
                                processData: !0,
                                async: !0,
                                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                                accepts: { "*": Bt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                                responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                                converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": E.parseXML },
                                flatOptions: { url: !0, context: !0 },
                            },
                            ajaxSetup: function (e, t) {
                                return t ? $t($t(e, E.ajaxSettings), t) : $t(E.ajaxSettings, e);
                            },
                            ajaxPrefilter: Wt(Ht),
                            ajaxTransport: Wt(Ft),
                            ajax: function (e, t) {
                                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                                var n,
                                    o,
                                    r,
                                    a,
                                    s,
                                    c,
                                    l,
                                    u,
                                    d,
                                    f,
                                    h = E.ajaxSetup({}, t),
                                    p = h.context || h,
                                    m = h.context && (p.nodeType || p.jquery) ? E(p) : E.event,
                                    v = E.Deferred(),
                                    g = E.Callbacks("once memory"),
                                    y = h.statusCode || {},
                                    x = {},
                                    b = {},
                                    _ = "canceled",
                                    S = {
                                        readyState: 0,
                                        getResponseHeader: function (e) {
                                            var t;
                                            if (l) {
                                                if (!a) for (a = {}; (t = It.exec(r)); ) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                                t = a[e.toLowerCase() + " "];
                                            }
                                            return null == t ? null : t.join(", ");
                                        },
                                        getAllResponseHeaders: function () {
                                            return l ? r : null;
                                        },
                                        setRequestHeader: function (e, t) {
                                            return null == l && ((e = b[e.toLowerCase()] = b[e.toLowerCase()] || e), (x[e] = t)), this;
                                        },
                                        overrideMimeType: function (e) {
                                            return null == l && (h.mimeType = e), this;
                                        },
                                        statusCode: function (e) {
                                            var t;
                                            if (e)
                                                if (l) S.always(e[S.status]);
                                                else for (t in e) y[t] = [y[t], e[t]];
                                            return this;
                                        },
                                        abort: function (e) {
                                            var t = e || _;
                                            return n && n.abort(t), k(0, t), this;
                                        },
                                    };
                                if (
                                    (v.promise(S),
                                    (h.url = ((e || h.url || kt.href) + "").replace(Ot, kt.protocol + "//")),
                                    (h.type = t.method || t.type || h.method || h.type),
                                    (h.dataTypes = (h.dataType || "*").toLowerCase().match(O) || [""]),
                                    null == h.crossDomain)
                                ) {
                                    c = w.createElement("a");
                                    try {
                                        (c.href = h.url), (c.href = c.href), (h.crossDomain = Vt.protocol + "//" + Vt.host != c.protocol + "//" + c.host);
                                    } catch (e) {
                                        h.crossDomain = !0;
                                    }
                                }
                                if ((h.data && h.processData && "string" != typeof h.data && (h.data = E.param(h.data, h.traditional)), zt(Ht, h, t, S), l)) return S;
                                for (d in ((u = E.event && h.global) && 0 == E.active++ && E.event.trigger("ajaxStart"),
                                (h.type = h.type.toUpperCase()),
                                (h.hasContent = !Rt.test(h.type)),
                                (o = h.url.replace(Mt, "")),
                                h.hasContent
                                    ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Nt, "+"))
                                    : ((f = h.url.slice(o.length)),
                                      h.data && (h.processData || "string" == typeof h.data) && ((o += (Tt.test(o) ? "&" : "?") + h.data), delete h.data),
                                      !1 === h.cache && ((o = o.replace(qt, "$1")), (f = (Tt.test(o) ? "&" : "?") + "_=" + Ct.guid++ + f)),
                                      (h.url = o + f)),
                                h.ifModified && (E.lastModified[o] && S.setRequestHeader("If-Modified-Since", E.lastModified[o]), E.etag[o] && S.setRequestHeader("If-None-Match", E.etag[o])),
                                ((h.data && h.hasContent && !1 !== h.contentType) || t.contentType) && S.setRequestHeader("Content-Type", h.contentType),
                                S.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Bt + "; q=0.01" : "") : h.accepts["*"]),
                                h.headers))
                                    S.setRequestHeader(d, h.headers[d]);
                                if (h.beforeSend && (!1 === h.beforeSend.call(p, S, h) || l)) return S.abort();
                                if (((_ = "abort"), g.add(h.complete), S.done(h.success), S.fail(h.error), (n = zt(Ft, h, t, S)))) {
                                    if (((S.readyState = 1), u && m.trigger("ajaxSend", [S, h]), l)) return S;
                                    h.async &&
                                        h.timeout > 0 &&
                                        (s = i.setTimeout(function () {
                                            S.abort("timeout");
                                        }, h.timeout));
                                    try {
                                        (l = !1), n.send(x, k);
                                    } catch (e) {
                                        if (l) throw e;
                                        k(-1, e);
                                    }
                                } else k(-1, "No Transport");
                                function k(e, t, a, c) {
                                    var d,
                                        f,
                                        w,
                                        x,
                                        b,
                                        _ = t;
                                    l ||
                                        ((l = !0),
                                        s && i.clearTimeout(s),
                                        (n = void 0),
                                        (r = c || ""),
                                        (S.readyState = e > 0 ? 4 : 0),
                                        (d = (e >= 200 && e < 300) || 304 === e),
                                        a &&
                                            (x = (function (e, t, n) {
                                                for (var i, o, r, a, s = e.contents, c = e.dataTypes; "*" === c[0]; ) c.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                                                if (i)
                                                    for (o in s)
                                                        if (s[o] && s[o].test(i)) {
                                                            c.unshift(o);
                                                            break;
                                                        }
                                                if (c[0] in n) r = c[0];
                                                else {
                                                    for (o in n) {
                                                        if (!c[0] || e.converters[o + " " + c[0]]) {
                                                            r = o;
                                                            break;
                                                        }
                                                        a || (a = o);
                                                    }
                                                    r = r || a;
                                                }
                                                if (r) return r !== c[0] && c.unshift(r), n[r];
                                            })(h, S, a)),
                                        !d && E.inArray("script", h.dataTypes) > -1 && (h.converters["text script"] = function () {}),
                                        (x = (function (e, t, n, i) {
                                            var o,
                                                r,
                                                a,
                                                s,
                                                c,
                                                l = {},
                                                u = e.dataTypes.slice();
                                            if (u[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                                            for (r = u.shift(); r; )
                                                if ((e.responseFields[r] && (n[e.responseFields[r]] = t), !c && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (c = r), (r = u.shift())))
                                                    if ("*" === r) r = c;
                                                    else if ("*" !== c && c !== r) {
                                                        if (!(a = l[c + " " + r] || l["* " + r]))
                                                            for (o in l)
                                                                if ((s = o.split(" "))[1] === r && (a = l[c + " " + s[0]] || l["* " + s[0]])) {
                                                                    !0 === a ? (a = l[o]) : !0 !== l[o] && ((r = s[0]), u.unshift(s[1]));
                                                                    break;
                                                                }
                                                        if (!0 !== a)
                                                            if (a && e.throws) t = a(t);
                                                            else
                                                                try {
                                                                    t = a(t);
                                                                } catch (e) {
                                                                    return { state: "parsererror", error: a ? e : "No conversion from " + c + " to " + r };
                                                                }
                                                    }
                                            return { state: "success", data: t };
                                        })(h, x, S, d)),
                                        d
                                            ? (h.ifModified && ((b = S.getResponseHeader("Last-Modified")) && (E.lastModified[o] = b), (b = S.getResponseHeader("etag")) && (E.etag[o] = b)),
                                              204 === e || "HEAD" === h.type ? (_ = "nocontent") : 304 === e ? (_ = "notmodified") : ((_ = x.state), (f = x.data), (d = !(w = x.error))))
                                            : ((w = _), (!e && _) || ((_ = "error"), e < 0 && (e = 0))),
                                        (S.status = e),
                                        (S.statusText = (t || _) + ""),
                                        d ? v.resolveWith(p, [f, _, S]) : v.rejectWith(p, [S, _, w]),
                                        S.statusCode(y),
                                        (y = void 0),
                                        u && m.trigger(d ? "ajaxSuccess" : "ajaxError", [S, h, d ? f : w]),
                                        g.fireWith(p, [S, _]),
                                        u && (m.trigger("ajaxComplete", [S, h]), --E.active || E.event.trigger("ajaxStop")));
                                }
                                return S;
                            },
                            getJSON: function (e, t, n) {
                                return E.get(e, t, n, "json");
                            },
                            getScript: function (e, t) {
                                return E.get(e, void 0, t, "script");
                            },
                        }),
                        E.each(["get", "post"], function (e, t) {
                            E[t] = function (e, n, i, o) {
                                return g(n) && ((o = o || i), (i = n), (n = void 0)), E.ajax(E.extend({ url: e, type: t, dataType: o, data: n, success: i }, E.isPlainObject(e) && e));
                            };
                        }),
                        E.ajaxPrefilter(function (e) {
                            var t;
                            for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
                        }),
                        (E._evalUrl = function (e, t, n) {
                            return E.ajax({
                                url: e,
                                type: "GET",
                                dataType: "script",
                                cache: !0,
                                async: !1,
                                global: !1,
                                converters: { "text script": function () {} },
                                dataFilter: function (e) {
                                    E.globalEval(e, t, n);
                                },
                            });
                        }),
                        E.fn.extend({
                            wrapAll: function (e) {
                                var t;
                                return (
                                    this[0] &&
                                        (g(e) && (e = e.call(this[0])),
                                        (t = E(e, this[0].ownerDocument).eq(0).clone(!0)),
                                        this[0].parentNode && t.insertBefore(this[0]),
                                        t
                                            .map(function () {
                                                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                                                return e;
                                            })
                                            .append(this)),
                                    this
                                );
                            },
                            wrapInner: function (e) {
                                return g(e)
                                    ? this.each(function (t) {
                                          E(this).wrapInner(e.call(this, t));
                                      })
                                    : this.each(function () {
                                          var t = E(this),
                                              n = t.contents();
                                          n.length ? n.wrapAll(e) : t.append(e);
                                      });
                            },
                            wrap: function (e) {
                                var t = g(e);
                                return this.each(function (n) {
                                    E(this).wrapAll(t ? e.call(this, n) : e);
                                });
                            },
                            unwrap: function (e) {
                                return (
                                    this.parent(e)
                                        .not("body")
                                        .each(function () {
                                            E(this).replaceWith(this.childNodes);
                                        }),
                                    this
                                );
                            },
                        }),
                        (E.expr.pseudos.hidden = function (e) {
                            return !E.expr.pseudos.visible(e);
                        }),
                        (E.expr.pseudos.visible = function (e) {
                            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
                        }),
                        (E.ajaxSettings.xhr = function () {
                            try {
                                return new i.XMLHttpRequest();
                            } catch (e) {}
                        });
                    var Ut = { 0: 200, 1223: 204 },
                        Gt = E.ajaxSettings.xhr();
                    (v.cors = !!Gt && "withCredentials" in Gt),
                        (v.ajax = Gt = !!Gt),
                        E.ajaxTransport(function (e) {
                            var t, n;
                            if (v.cors || (Gt && !e.crossDomain))
                                return {
                                    send: function (o, r) {
                                        var a,
                                            s = e.xhr();
                                        if ((s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)) for (a in e.xhrFields) s[a] = e.xhrFields[a];
                                        for (a in (e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o)) s.setRequestHeader(a, o[a]);
                                        (t = function (e) {
                                            return function () {
                                                t &&
                                                    ((t = n = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                                                    "abort" === e
                                                        ? s.abort()
                                                        : "error" === e
                                                        ? "number" != typeof s.status
                                                            ? r(0, "error")
                                                            : r(s.status, s.statusText)
                                                        : r(
                                                              Ut[s.status] || s.status,
                                                              s.statusText,
                                                              "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText },
                                                              s.getAllResponseHeaders()
                                                          ));
                                            };
                                        }),
                                            (s.onload = t()),
                                            (n = s.onerror = s.ontimeout = t("error")),
                                            void 0 !== s.onabort
                                                ? (s.onabort = n)
                                                : (s.onreadystatechange = function () {
                                                      4 === s.readyState &&
                                                          i.setTimeout(function () {
                                                              t && n();
                                                          });
                                                  }),
                                            (t = t("abort"));
                                        try {
                                            s.send((e.hasContent && e.data) || null);
                                        } catch (e) {
                                            if (t) throw e;
                                        }
                                    },
                                    abort: function () {
                                        t && t();
                                    },
                                };
                        }),
                        E.ajaxPrefilter(function (e) {
                            e.crossDomain && (e.contents.script = !1);
                        }),
                        E.ajaxSetup({
                            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
                            contents: { script: /\b(?:java|ecma)script\b/ },
                            converters: {
                                "text script": function (e) {
                                    return E.globalEval(e), e;
                                },
                            },
                        }),
                        E.ajaxPrefilter("script", function (e) {
                            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
                        }),
                        E.ajaxTransport("script", function (e) {
                            var t, n;
                            if (e.crossDomain || e.scriptAttrs)
                                return {
                                    send: function (i, o) {
                                        (t = E("<script>")
                                            .attr(e.scriptAttrs || {})
                                            .prop({ charset: e.scriptCharset, src: e.url })
                                            .on(
                                                "load error",
                                                (n = function (e) {
                                                    t.remove(), (n = null), e && o("error" === e.type ? 404 : 200, e.type);
                                                })
                                            )),
                                            w.head.appendChild(t[0]);
                                    },
                                    abort: function () {
                                        n && n();
                                    },
                                };
                        });
                    var Xt,
                        Kt = [],
                        Yt = /(=)\?(?=&|$)|\?\?/;
                    E.ajaxSetup({
                        jsonp: "callback",
                        jsonpCallback: function () {
                            var e = Kt.pop() || E.expando + "_" + Ct.guid++;
                            return (this[e] = !0), e;
                        },
                    }),
                        E.ajaxPrefilter("json jsonp", function (e, t, n) {
                            var o,
                                r,
                                a,
                                s = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
                            if (s || "jsonp" === e.dataTypes[0])
                                return (
                                    (o = e.jsonpCallback = g(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                                    s ? (e[s] = e[s].replace(Yt, "$1" + o)) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
                                    (e.converters["script json"] = function () {
                                        return a || E.error(o + " was not called"), a[0];
                                    }),
                                    (e.dataTypes[0] = "json"),
                                    (r = i[o]),
                                    (i[o] = function () {
                                        a = arguments;
                                    }),
                                    n.always(function () {
                                        void 0 === r ? E(i).removeProp(o) : (i[o] = r), e[o] && ((e.jsonpCallback = t.jsonpCallback), Kt.push(o)), a && g(r) && r(a[0]), (a = r = void 0);
                                    }),
                                    "script"
                                );
                        }),
                        (v.createHTMLDocument = (((Xt = w.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === Xt.childNodes.length)),
                        (E.parseHTML = function (e, t, n) {
                            return "string" != typeof e
                                ? []
                                : ("boolean" == typeof t && ((n = t), (t = !1)),
                                  t || (v.createHTMLDocument ? (((i = (t = w.implementation.createHTMLDocument("")).createElement("base")).href = w.location.href), t.head.appendChild(i)) : (t = w)),
                                  (r = !n && []),
                                  (o = D.exec(e)) ? [t.createElement(o[1])] : ((o = Se([e], t, r)), r && r.length && E(r).remove(), E.merge([], o.childNodes)));
                            var i, o, r;
                        }),
                        (E.fn.load = function (e, t, n) {
                            var i,
                                o,
                                r,
                                a = this,
                                s = e.indexOf(" ");
                            return (
                                s > -1 && ((i = wt(e.slice(s))), (e = e.slice(0, s))),
                                g(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (o = "POST"),
                                a.length > 0 &&
                                    E.ajax({ url: e, type: o || "GET", dataType: "html", data: t })
                                        .done(function (e) {
                                            (r = arguments), a.html(i ? E("<div>").append(E.parseHTML(e)).find(i) : e);
                                        })
                                        .always(
                                            n &&
                                                function (e, t) {
                                                    a.each(function () {
                                                        n.apply(this, r || [e.responseText, t, e]);
                                                    });
                                                }
                                        ),
                                this
                            );
                        }),
                        (E.expr.pseudos.animated = function (e) {
                            return E.grep(E.timers, function (t) {
                                return e === t.elem;
                            }).length;
                        }),
                        (E.offset = {
                            setOffset: function (e, t, n) {
                                var i,
                                    o,
                                    r,
                                    a,
                                    s,
                                    c,
                                    l = E.css(e, "position"),
                                    u = E(e),
                                    d = {};
                                "static" === l && (e.style.position = "relative"),
                                    (s = u.offset()),
                                    (r = E.css(e, "top")),
                                    (c = E.css(e, "left")),
                                    ("absolute" === l || "fixed" === l) && (r + c).indexOf("auto") > -1 ? ((a = (i = u.position()).top), (o = i.left)) : ((a = parseFloat(r) || 0), (o = parseFloat(c) || 0)),
                                    g(t) && (t = t.call(e, n, E.extend({}, s))),
                                    null != t.top && (d.top = t.top - s.top + a),
                                    null != t.left && (d.left = t.left - s.left + o),
                                    "using" in t ? t.using.call(e, d) : ("number" == typeof d.top && (d.top += "px"), "number" == typeof d.left && (d.left += "px"), u.css(d));
                            },
                        }),
                        E.fn.extend({
                            offset: function (e) {
                                if (arguments.length)
                                    return void 0 === e
                                        ? this
                                        : this.each(function (t) {
                                              E.offset.setOffset(this, e, t);
                                          });
                                var t,
                                    n,
                                    i = this[0];
                                return i ? (i.getClientRects().length ? ((t = i.getBoundingClientRect()), (n = i.ownerDocument.defaultView), { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
                            },
                            position: function () {
                                if (this[0]) {
                                    var e,
                                        t,
                                        n,
                                        i = this[0],
                                        o = { top: 0, left: 0 };
                                    if ("fixed" === E.css(i, "position")) t = i.getBoundingClientRect();
                                    else {
                                        for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position"); ) e = e.parentNode;
                                        e && e !== i && 1 === e.nodeType && (((o = E(e).offset()).top += E.css(e, "borderTopWidth", !0)), (o.left += E.css(e, "borderLeftWidth", !0)));
                                    }
                                    return { top: t.top - o.top - E.css(i, "marginTop", !0), left: t.left - o.left - E.css(i, "marginLeft", !0) };
                                }
                            },
                            offsetParent: function () {
                                return this.map(function () {
                                    for (var e = this.offsetParent; e && "static" === E.css(e, "position"); ) e = e.offsetParent;
                                    return e || ae;
                                });
                            },
                        }),
                        E.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
                            var n = "pageYOffset" === t;
                            E.fn[e] = function (i) {
                                return $(
                                    this,
                                    function (e, i, o) {
                                        var r;
                                        if ((y(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView), void 0 === o)) return r ? r[t] : e[i];
                                        r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : (e[i] = o);
                                    },
                                    e,
                                    i,
                                    arguments.length
                                );
                            };
                        }),
                        E.each(["top", "left"], function (e, t) {
                            E.cssHooks[t] = Ge(v.pixelPosition, function (e, n) {
                                if (n) return (n = Ue(e, t)), Ve.test(n) ? E(e).position()[t] + "px" : n;
                            });
                        }),
                        E.each({ Height: "height", Width: "width" }, function (e, t) {
                            E.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, i) {
                                E.fn[i] = function (o, r) {
                                    var a = arguments.length && (n || "boolean" != typeof o),
                                        s = n || (!0 === o || !0 === r ? "margin" : "border");
                                    return $(
                                        this,
                                        function (t, n, o) {
                                            var r;
                                            return y(t)
                                                ? 0 === i.indexOf("outer")
                                                    ? t["inner" + e]
                                                    : t.document.documentElement["client" + e]
                                                : 9 === t.nodeType
                                                ? ((r = t.documentElement), Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e]))
                                                : void 0 === o
                                                ? E.css(t, n, s)
                                                : E.style(t, n, o, s);
                                        },
                                        t,
                                        a ? o : void 0,
                                        a
                                    );
                                };
                            });
                        }),
                        E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                            E.fn[t] = function (e) {
                                return this.on(t, e);
                            };
                        }),
                        E.fn.extend({
                            bind: function (e, t, n) {
                                return this.on(e, null, t, n);
                            },
                            unbind: function (e, t) {
                                return this.off(e, null, t);
                            },
                            delegate: function (e, t, n, i) {
                                return this.on(t, e, n, i);
                            },
                            undelegate: function (e, t, n) {
                                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
                            },
                            hover: function (e, t) {
                                return this.mouseenter(e).mouseleave(t || e);
                            },
                        }),
                        E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (
                            e,
                            t
                        ) {
                            E.fn[t] = function (e, n) {
                                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
                            };
                        });
                    var Qt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                    (E.proxy = function (e, t) {
                        var n, i, o;
                        if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), g(e)))
                            return (
                                (i = s.call(arguments, 2)),
                                ((o = function () {
                                    return e.apply(t || this, i.concat(s.call(arguments)));
                                }).guid = e.guid = e.guid || E.guid++),
                                o
                            );
                    }),
                        (E.holdReady = function (e) {
                            e ? E.readyWait++ : E.ready(!0);
                        }),
                        (E.isArray = Array.isArray),
                        (E.parseJSON = JSON.parse),
                        (E.nodeName = A),
                        (E.isFunction = g),
                        (E.isWindow = y),
                        (E.camelCase = K),
                        (E.type = _),
                        (E.now = Date.now),
                        (E.isNumeric = function (e) {
                            var t = E.type(e);
                            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
                        }),
                        (E.trim = function (e) {
                            return null == e ? "" : (e + "").replace(Qt, "");
                        }),
                        void 0 ===
                            (n = function () {
                                return E;
                            }.apply(t, [])) || (e.exports = n);
                    var Zt = i.jQuery,
                        Jt = i.$;
                    return (
                        (E.noConflict = function (e) {
                            return i.$ === E && (i.$ = Jt), e && i.jQuery === E && (i.jQuery = Zt), E;
                        }),
                        void 0 === o && (i.jQuery = i.$ = E),
                        E
                    );
                });
            },
        },
        t = {};
    function n(i) {
        if (t[i]) return t[i].exports;
        var o = (t[i] = { exports: {} });
        return e[i].call(o.exports, o, o.exports, n), o.exports;
    }
    (n.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")();
        } catch (e) {
            if ("object" == typeof window) return window;
        }
    })()),
        window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach),
        Promise.resolve()
            .then(function () {
                n(2546);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(7180);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(8969);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(7878);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(9118);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(736);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(4900);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(8494);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(6001);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(669);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(7377);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(8841);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(6974);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(3309);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(3951);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(338);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(5738);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(8381);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(7188);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(7920);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(6611);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(311);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(2354);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(1423);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(4417);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(8034);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(6095);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(2058);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(6517);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(3453);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(4038);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(667);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(5131);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(4343);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(3518);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(441);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(1050);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(8357);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(2976);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(9038);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(6388);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(7913);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(7556);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(4539);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(375);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(10);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(9896);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(343);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(2817);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(2646);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(1289);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(769);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(2427);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(6528);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(2575);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(5171);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(4002);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(9933);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(3203);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(7127);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(7090);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(2008);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(6051);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(3478);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(6522);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(8822);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(6542);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(2378);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(8700);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(7801);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(8146);
            })
            .catch(n.oe),
        Promise.resolve()
            .then(function () {
                n(6330);
            })
            .catch(n.oe);
})();
