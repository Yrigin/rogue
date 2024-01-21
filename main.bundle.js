/*! For license information please see main.bundle.js.LICENSE.txt */
(() => {
  var e = {
      639: (e, n, t) => {
        'use strict';
        t.d(n, { Z: () => s });
        var r = t(81),
          o = t.n(r),
          a = t(645),
          i = t.n(a)()(o());
        i.push([
          e.id,
          '.Modal {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 100;\n  background-color: rgba(0, 0, 0, 0.8);\n  display: none;\n}\n.Modal-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  height: 100%;\n  width: 100%;\n}\n.Modal-content {\n  min-width: 400px;\n  /* min-height: 400px; */\n\n  padding: 30px;\n\n  border-radius: 20px;\n\n  background-color: var(--background_grey);\n  box-shadow: 10px 10px 20px var(--background_grey);\n}\n.Modal-content button {\n  /* width: 80%; */\n  height: 30px;\n}\n',
          '',
        ]);
        const s = i;
      },
      174: (e, n, t) => {
        'use strict';
        t.d(n, { Z: () => k });
        var r = t(81),
          o = t.n(r),
          a = t(645),
          i = t.n(a),
          s = t(667),
          u = t.n(s),
          d = new URL(t(423), t.b),
          c = new URL(t(534), t.b),
          l = new URL(t(315), t.b),
          p = new URL(t(597), t.b),
          _ = new URL(t(178), t.b),
          f = new URL(t(738), t.b),
          g = i()(o()),
          m = u()(d),
          h = u()(c),
          v = u()(l),
          y = u()(p),
          b = u()(_),
          w = u()(f);
        g.push([
          e.id,
          `* {\n  box-sizing: border-box;\n}\nbody,\nhtml {\n  height: 100%;\n  --background_grey: #282828;\n  --border-color: #303030\n  \n  --background_black: rgba(0, 0, 0, 0);\n  --accent: #ff6347;\n}\nbody {\n  background-color: #000000;\n  color: #ffffff;\n}\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nh1 {\n  font-family: "Playfair Display";\n  font-size: 30px;\n  padding: 10px 0px;\n  margin: 0px;\n}\n.cooldown-box {\n  display: flex;\n  align-items: center;\n  font-family: "Playfair Display";\n  font-size: 20px;\n\n  margin: 0px;\n}\n.field-box {\n  border: 2px solid #d0d0d0;\n  float: left;\n}\n.field {\n  position: relative;\n  width: 1024px;\n  height: 640px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.row {\n  display: flex;\n}\n.field .tile {\n  position: relative;\n  width: 25px;\n  height: 25px;\n  background-size: 100%;\n  background-image: url(${m});\n  z-index: 5;\n}\n.field .tileW {\n  background-image: url(${h});\n}\n.field .tileE {\n  background-image: url(${v});\n  z-index: 10;\n}\n.field .tileP {\n  background-image: url(${y});\n  z-index: 10;\n}\n.field .tileHP {\n  background-image: url(${b});\n  z-index: 9;\n}\n.field .tileSW {\n  background-image: url(${w});\n  z-index: 9;\n}\n.field .tile .health {\n  background-color: #ff0000;\n  z-index: 11;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  height: 3px;\n}\n.field .tileP .health {\n  background-color: #00ff00;\n  z-index: 11;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  height: 3px;\n}\n.inventory-box {\n  border: 2px solid #d0d0d0;\n  float: left;\n}\n.inventory {\n  position: relative;\n  width: 800px;\n  height: 32px;\n}\n.inventory-item {\n  display: flex;\n  align-items: center;\n  background-color: var(--accent);\n}\n.inventory-item-count {\n  margin-left: 10px;\n}\n.inventory .tileHP {\n  height: 32px;\n  width: 32px;\n  background-image: url(${b});\n  z-index: 9;\n}\n.cl {\n  clear: both;\n  display: block;\n}\n\n.progress-radial {\n  position: relative;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: 2px solid var(--background_grey);\n  background-color: tomato;\n}\n\n/* -------------------------------------\n * Optional centered circle w/text\n * ------------------------------------- */\n.progress-radial .overlay {\n  position: absolute;\n  width: 60px;\n  height: 60px;\n  background-color: #fffde8;\n  border-radius: 50%;\n  margin-left: 20px;\n  margin-top: 20px;\n  text-align: center;\n  line-height: 60px;\n  font-size: 16px;\n}\n\n/* .progress-0 {\n  background-image: var(--background_grey),\n    linear-gradient(\n      90deg,\n      var(--accent) 50%,\n      var(--background_grey) 50%,\n      var(--background_grey)\n    );\n}\n\n.progress-5 {\n  background-image: var(--background_grey),\n    linear-gradient(\n      108deg,\n      var(--accent) 50%,\n      var(--background_grey) 50%,\n      var(--background_grey)\n    );\n}\n\n.progress-10 {\n  background-image: var(--background_grey),\n    linear-gradient(\n      126deg,\n      var(--accent) 50%,\n      var(--background_grey) 50%,\n      var(--background_grey)\n    );\n}\n\n.progress-15 {\n  background-image: var(--background_grey),\n    linear-gradient(\n      144deg,\n      var(--accent) 50%,\n      var(--background_grey) 50%,\n      var(--background_grey)\n    );\n}\n\n.progress-20 {\n  background-image: var(--background_grey),\n    linear-gradient(\n      162deg,\n      var(--accent) 50%,\n      var(--background_grey) 50%,\n      var(--background_grey)\n    );\n}\n\n.progress-25 {\n  background-image: var(--background_grey),\n    linear-gradient(\n      180deg,\n      var(--accent) 50%,\n      var(--background_grey) 50%,\n      var(--background_grey)\n    );\n}\n\n.progress-30 {\n  background-image: var(--background_grey),\n    linear-gradient(\n      198deg,\n      var(--accent) 50%,\n      var(--background_grey) 50%,\n      var(--background_grey)\n    );\n}\n\n.progress-35 {\n  background-image: var(--background_grey),\n    linear-gradient(\n      216deg,\n      var(--accent) 50%,\n      var(--background_grey) 50%,\n      var(--background_grey)\n    );\n}\n\n.progress-40 {\n  background-image: var(--background_grey),\n    linear-gradient(\n      234deg,\n      var(--accent) 50%,\n      var(--background_grey) 50%,\n      var(--background_grey)\n    );\n}\n\n.progress-45 {\n  background-image: var(--background_grey),\n    linear-gradient(\n      252deg,\n      var(--accent) 50%,\n      var(--background_grey) 50%,\n      var(--background_grey)\n    );\n}\n\n.progress-50 {\n  background-image: linear-gradient(\n      -90deg,\n      var(--accent) 50%,\n      rgba(0, 0, 0, 0) 50%,\n      rgba(0, 0, 0, 0)\n    ),\n    linear-gradient(\n      270deg,\n      var(--accent) 50%,\n      var(--background_grey) 50%,\n      var(--background_grey)\n    );\n}\n\n.progress-55 {\n  background-image: linear-gradient(\n      -72deg,\n      var(--accent) 50%,\n      rgba(0, 0, 0, 0) 50%,\n      rgba(0, 0, 0, 0)\n    ),\n    linear-gradient(\n      270deg,\n      var(--accent) 50%,\n      var(--background_grey) 50%,\n      var(--background_grey)\n    );\n}\n\n.progress-60 {\n  background-image: linear-gradient(\n      -54deg,\n      var(--accent) 50%,\n      rgba(0, 0, 0, 0) 50%,\n      rgba(0, 0, 0, 0)\n    ),\n    linear-gradient(\n      270deg,\n      var(--accent) 50%,\n      var(--background_grey) 50%,\n      var(--background_grey)\n    );\n}\n\n.progress-65 {\n  background-image: linear-gradient(\n      -36deg,\n      var(--accent) 50%,\n      rgba(0, 0, 0, 0) 50%,\n      rgba(0, 0, 0, 0)\n    ),\n    linear-gradient(\n      270deg,\n      var(--accent) 50%,\n      var(--background_grey) 50%,\n      var(--background_grey)\n    );\n}\n\n.progress-70 {\n  background-image: linear-gradient(\n      -18deg,\n      var(--accent) 50%,\n      rgba(0, 0, 0, 0) 50%,\n      rgba(0, 0, 0, 0)\n    ),\n    linear-gradient(\n      270deg,\n      var(--accent) 50%,\n      var(--background_grey) 50%,\n      var(--background_grey)\n    );\n}\n\n.progress-75 {\n  background-image: linear-gradient(\n      0deg,\n      var(--accent) 50%,\n      rgba(0, 0, 0, 0) 50%,\n      rgba(0, 0, 0, 0)\n    ),\n    linear-gradient(\n      270deg,\n      var(--accent) 50%,\n      var(--background_grey) 50%,\n      var(--background_grey)\n    );\n}\n\n.progress-80 {\n  background-image: linear-gradient(\n      18deg,\n      var(--accent) 50%,\n      rgba(0, 0, 0, 0) 50%,\n      rgba(0, 0, 0, 0)\n    ),\n    linear-gradient(\n      270deg,\n      var(--accent) 50%,\n      var(--background_grey) 50%,\n      var(--background_grey)\n    );\n}\n\n.progress-85 {\n  background-image: linear-gradient(\n      36deg,\n      var(--accent) 50%,\n      rgba(0, 0, 0, 0) 50%,\n      rgba(0, 0, 0, 0)\n    ),\n    linear-gradient(\n      270deg,\n      var(--accent) 50%,\n      var(--background_grey) 50%,\n      var(--background_grey)\n    );\n}\n\n.progress-90 {\n  background-image: linear-gradient(\n      54deg,\n      var(--accent) 50%,\n      rgba(0, 0, 0, 0) 50%,\n      rgba(0, 0, 0, 0)\n    ),\n    linear-gradient(\n      270deg,\n      var(--accent) 50%,\n      var(--background_grey) 50%,\n      var(--background_grey)\n    );\n}\n\n.progress-95 {\n  background-image: linear-gradient(\n      72deg,\n      var(--accent) 50%,\n      rgba(0, 0, 0, 0) 50%,\n      rgba(0, 0, 0, 0)\n    ),\n    linear-gradient(\n      270deg,\n      var(--accent) 50%,\n      var(--background_grey) 50%,\n      var(--background_grey)\n    );\n}\n\n.progress-100 {\n  background-image: linear-gradient(\n      90deg,\n      var(--accent) 50%,\n      rgba(0, 0, 0, 0) 50%,\n      rgba(0, 0, 0, 0)\n    ),\n    linear-gradient(\n      270deg,\n      var(--accent) 50%,\n      var(--background_grey) 50%,\n      var(--background_grey)\n    );\n} */\nprogress-0 {\n  background-image: linear-gradient(\n      90deg,\n      #2f3439 50%,\n      rgba(0, 0, 0, 0) 50%,\n      rgba(0, 0, 0, 0)\n    ),\n    linear-gradient(90deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-5 {\n  background-image: linear-gradient(\n      90deg,\n      #2f3439 50%,\n      rgba(0, 0, 0, 0) 50%,\n      rgba(0, 0, 0, 0)\n    ),\n    linear-gradient(108deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-10 {\n  background-image: linear-gradient(\n      90deg,\n      #2f3439 50%,\n      rgba(0, 0, 0, 0) 50%,\n      rgba(0, 0, 0, 0)\n    ),\n    linear-gradient(126deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-15 {\n  background-image: linear-gradient(\n      90deg,\n      #2f3439 50%,\n      rgba(0, 0, 0, 0) 50%,\n      rgba(0, 0, 0, 0)\n    ),\n    linear-gradient(144deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-20 {\n  background-image: linear-gradient(\n      90deg,\n      #2f3439 50%,\n      rgba(0, 0, 0, 0) 50%,\n      rgba(0, 0, 0, 0)\n    ),\n    linear-gradient(162deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-25 {\n  background-image: linear-gradient(\n      90deg,\n      #2f3439 50%,\n      rgba(0, 0, 0, 0) 50%,\n      rgba(0, 0, 0, 0)\n    ),\n    linear-gradient(180deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-30 {\n  background-image: linear-gradient(\n      90deg,\n      #2f3439 50%,\n      rgba(0, 0, 0, 0) 50%,\n      rgba(0, 0, 0, 0)\n    ),\n    linear-gradient(198deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-35 {\n  background-image: linear-gradient(\n      90deg,\n      #2f3439 50%,\n      rgba(0, 0, 0, 0) 50%,\n      rgba(0, 0, 0, 0)\n    ),\n    linear-gradient(216deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-40 {\n  background-image: linear-gradient(\n      90deg,\n      #2f3439 50%,\n      rgba(0, 0, 0, 0) 50%,\n      rgba(0, 0, 0, 0)\n    ),\n    linear-gradient(234deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-45 {\n  background-image: linear-gradient(\n      90deg,\n      #2f3439 50%,\n      rgba(0, 0, 0, 0) 50%,\n      rgba(0, 0, 0, 0)\n    ),\n    linear-gradient(252deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-50 {\n  background-image: linear-gradient(\n      -90deg,\n      #ff6347 50%,\n      rgba(0, 0, 0, 0) 50%,\n      rgba(0, 0, 0, 0)\n    ),\n    linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-55 {\n  background-image: linear-gradient(\n      -72deg,\n      #ff6347 50%,\n      rgba(0, 0, 0, 0) 50%,\n      rgba(0, 0, 0, 0)\n    ),\n    linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-60 {\n  background-image: linear-gradient(\n      -54deg,\n      #ff6347 50%,\n      rgba(0, 0, 0, 0) 50%,\n      rgba(0, 0, 0, 0)\n    ),\n    linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-65 {\n  background-image: linear-gradient(\n      -36deg,\n      #ff6347 50%,\n      rgba(0, 0, 0, 0) 50%,\n      rgba(0, 0, 0, 0)\n    ),\n    linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-70 {\n  background-image: linear-gradient(\n      -18deg,\n      #ff6347 50%,\n      rgba(0, 0, 0, 0) 50%,\n      rgba(0, 0, 0, 0)\n    ),\n    linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-75 {\n  background-image: linear-gradient(\n      0deg,\n      #ff6347 50%,\n      rgba(0, 0, 0, 0) 50%,\n      rgba(0, 0, 0, 0)\n    ),\n    linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-80 {\n  background-image: linear-gradient(\n      18deg,\n      #ff6347 50%,\n      rgba(0, 0, 0, 0) 50%,\n      rgba(0, 0, 0, 0)\n    ),\n    linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-85 {\n  background-image: linear-gradient(\n      36deg,\n      #ff6347 50%,\n      rgba(0, 0, 0, 0) 50%,\n      rgba(0, 0, 0, 0)\n    ),\n    linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-90 {\n  background-image: linear-gradient(\n      54deg,\n      #ff6347 50%,\n      rgba(0, 0, 0, 0) 50%,\n      rgba(0, 0, 0, 0)\n    ),\n    linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-95 {\n  background-image: linear-gradient(\n      72deg,\n      #ff6347 50%,\n      rgba(0, 0, 0, 0) 50%,\n      rgba(0, 0, 0, 0)\n    ),\n    linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n\n.progress-100 {\n  background-image: linear-gradient(\n      90deg,\n      #ff6347 50%,\n      rgba(0, 0, 0, 0) 50%,\n      rgba(0, 0, 0, 0)\n    ),\n    linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);\n}\n`,
          '',
        ]);
        const k = g;
      },
      645: (e) => {
        'use strict';
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = '',
                  r = void 0 !== n[5];
                return (
                  n[4] && (t += '@supports ('.concat(n[4], ') {')),
                  n[2] && (t += '@media '.concat(n[2], ' {')),
                  r &&
                    (t += '@layer'.concat(
                      n[5].length > 0 ? ' '.concat(n[5]) : '',
                      ' {',
                    )),
                  (t += e(n)),
                  r && (t += '}'),
                  n[2] && (t += '}'),
                  n[4] && (t += '}'),
                  t
                );
              }).join('');
            }),
            (n.i = function (e, t, r, o, a) {
              'string' == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var u = this[s][0];
                  null != u && (i[u] = !0);
                }
              for (var d = 0; d < e.length; d++) {
                var c = [].concat(e[d]);
                (r && i[c[0]]) ||
                  (void 0 !== a &&
                    (void 0 === c[5] ||
                      (c[1] = '@layer'
                        .concat(c[5].length > 0 ? ' '.concat(c[5]) : '', ' {')
                        .concat(c[1], '}')),
                    (c[5] = a)),
                  t &&
                    (c[2]
                      ? ((c[1] = '@media '
                          .concat(c[2], ' {')
                          .concat(c[1], '}')),
                        (c[2] = t))
                      : (c[2] = t)),
                  o &&
                    (c[4]
                      ? ((c[1] = '@supports ('
                          .concat(c[4], ') {')
                          .concat(c[1], '}')),
                        (c[4] = o))
                      : (c[4] = ''.concat(o))),
                  n.push(c));
              }
            }),
            n
          );
        };
      },
      667: (e) => {
        'use strict';
        e.exports = function (e, n) {
          return (
            n || (n = {}),
            e
              ? ((e = String(e.__esModule ? e.default : e)),
                /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                n.hash && (e += n.hash),
                /["'() \t\n]|(%20)/.test(e) || n.needQuotes
                  ? '"'.concat(
                      e.replace(/"/g, '\\"').replace(/\n/g, '\\n'),
                      '"',
                    )
                  : e)
              : e
          );
        };
      },
      81: (e) => {
        'use strict';
        e.exports = function (e) {
          return e[1];
        };
      },
      766: (e, n, t) => {
        var r;
        !(function () {
          'use strict';
          var o = function () {
            this.init();
          };
          o.prototype = {
            init: function () {
              var e = this || a;
              return (
                (e._counter = 1e3),
                (e._html5AudioPool = []),
                (e.html5PoolSize = 10),
                (e._codecs = {}),
                (e._howls = []),
                (e._muted = !1),
                (e._volume = 1),
                (e._canPlayEvent = 'canplaythrough'),
                (e._navigator =
                  'undefined' != typeof window && window.navigator
                    ? window.navigator
                    : null),
                (e.masterGain = null),
                (e.noAudio = !1),
                (e.usingWebAudio = !0),
                (e.autoSuspend = !0),
                (e.ctx = null),
                (e.autoUnlock = !0),
                e._setup(),
                e
              );
            },
            volume: function (e) {
              var n = this || a;
              if (
                ((e = parseFloat(e)),
                n.ctx || _(),
                void 0 !== e && e >= 0 && e <= 1)
              ) {
                if (((n._volume = e), n._muted)) return n;
                n.usingWebAudio &&
                  n.masterGain.gain.setValueAtTime(e, a.ctx.currentTime);
                for (var t = 0; t < n._howls.length; t++)
                  if (!n._howls[t]._webAudio)
                    for (
                      var r = n._howls[t]._getSoundIds(), o = 0;
                      o < r.length;
                      o++
                    ) {
                      var i = n._howls[t]._soundById(r[o]);
                      i && i._node && (i._node.volume = i._volume * e);
                    }
                return n;
              }
              return n._volume;
            },
            mute: function (e) {
              var n = this || a;
              n.ctx || _(),
                (n._muted = e),
                n.usingWebAudio &&
                  n.masterGain.gain.setValueAtTime(
                    e ? 0 : n._volume,
                    a.ctx.currentTime,
                  );
              for (var t = 0; t < n._howls.length; t++)
                if (!n._howls[t]._webAudio)
                  for (
                    var r = n._howls[t]._getSoundIds(), o = 0;
                    o < r.length;
                    o++
                  ) {
                    var i = n._howls[t]._soundById(r[o]);
                    i && i._node && (i._node.muted = !!e || i._muted);
                  }
              return n;
            },
            stop: function () {
              for (var e = this || a, n = 0; n < e._howls.length; n++)
                e._howls[n].stop();
              return e;
            },
            unload: function () {
              for (var e = this || a, n = e._howls.length - 1; n >= 0; n--)
                e._howls[n].unload();
              return (
                e.usingWebAudio &&
                  e.ctx &&
                  void 0 !== e.ctx.close &&
                  (e.ctx.close(), (e.ctx = null), _()),
                e
              );
            },
            codecs: function (e) {
              return (this || a)._codecs[e.replace(/^x-/, '')];
            },
            _setup: function () {
              var e = this || a;
              if (
                ((e.state = (e.ctx && e.ctx.state) || 'suspended'),
                e._autoSuspend(),
                !e.usingWebAudio)
              )
                if ('undefined' != typeof Audio)
                  try {
                    void 0 === new Audio().oncanplaythrough &&
                      (e._canPlayEvent = 'canplay');
                  } catch (n) {
                    e.noAudio = !0;
                  }
                else e.noAudio = !0;
              try {
                new Audio().muted && (e.noAudio = !0);
              } catch (e) {}
              return e.noAudio || e._setupCodecs(), e;
            },
            _setupCodecs: function () {
              var e = this || a,
                n = null;
              try {
                n = 'undefined' != typeof Audio ? new Audio() : null;
              } catch (n) {
                return e;
              }
              if (!n || 'function' != typeof n.canPlayType) return e;
              var t = n.canPlayType('audio/mpeg;').replace(/^no$/, ''),
                r = e._navigator ? e._navigator.userAgent : '',
                o = r.match(/OPR\/(\d+)/g),
                i = o && parseInt(o[0].split('/')[1], 10) < 33,
                s = -1 !== r.indexOf('Safari') && -1 === r.indexOf('Chrome'),
                u = r.match(/Version\/(.*?) /),
                d = s && u && parseInt(u[1], 10) < 15;
              return (
                (e._codecs = {
                  mp3: !(
                    i ||
                    (!t && !n.canPlayType('audio/mp3;').replace(/^no$/, ''))
                  ),
                  mpeg: !!t,
                  opus: !!n
                    .canPlayType('audio/ogg; codecs="opus"')
                    .replace(/^no$/, ''),
                  ogg: !!n
                    .canPlayType('audio/ogg; codecs="vorbis"')
                    .replace(/^no$/, ''),
                  oga: !!n
                    .canPlayType('audio/ogg; codecs="vorbis"')
                    .replace(/^no$/, ''),
                  wav: !!(
                    n.canPlayType('audio/wav; codecs="1"') ||
                    n.canPlayType('audio/wav')
                  ).replace(/^no$/, ''),
                  aac: !!n.canPlayType('audio/aac;').replace(/^no$/, ''),
                  caf: !!n.canPlayType('audio/x-caf;').replace(/^no$/, ''),
                  m4a: !!(
                    n.canPlayType('audio/x-m4a;') ||
                    n.canPlayType('audio/m4a;') ||
                    n.canPlayType('audio/aac;')
                  ).replace(/^no$/, ''),
                  m4b: !!(
                    n.canPlayType('audio/x-m4b;') ||
                    n.canPlayType('audio/m4b;') ||
                    n.canPlayType('audio/aac;')
                  ).replace(/^no$/, ''),
                  mp4: !!(
                    n.canPlayType('audio/x-mp4;') ||
                    n.canPlayType('audio/mp4;') ||
                    n.canPlayType('audio/aac;')
                  ).replace(/^no$/, ''),
                  weba: !(
                    d ||
                    !n
                      .canPlayType('audio/webm; codecs="vorbis"')
                      .replace(/^no$/, '')
                  ),
                  webm: !(
                    d ||
                    !n
                      .canPlayType('audio/webm; codecs="vorbis"')
                      .replace(/^no$/, '')
                  ),
                  dolby: !!n
                    .canPlayType('audio/mp4; codecs="ec-3"')
                    .replace(/^no$/, ''),
                  flac: !!(
                    n.canPlayType('audio/x-flac;') ||
                    n.canPlayType('audio/flac;')
                  ).replace(/^no$/, ''),
                }),
                e
              );
            },
            _unlockAudio: function () {
              var e = this || a;
              if (!e._audioUnlocked && e.ctx) {
                (e._audioUnlocked = !1),
                  (e.autoUnlock = !1),
                  e._mobileUnloaded ||
                    44100 === e.ctx.sampleRate ||
                    ((e._mobileUnloaded = !0), e.unload()),
                  (e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050));
                var n = function (t) {
                  for (; e._html5AudioPool.length < e.html5PoolSize; )
                    try {
                      var r = new Audio();
                      (r._unlocked = !0), e._releaseHtml5Audio(r);
                    } catch (t) {
                      e.noAudio = !0;
                      break;
                    }
                  for (var o = 0; o < e._howls.length; o++)
                    if (!e._howls[o]._webAudio)
                      for (
                        var a = e._howls[o]._getSoundIds(), i = 0;
                        i < a.length;
                        i++
                      ) {
                        var s = e._howls[o]._soundById(a[i]);
                        s &&
                          s._node &&
                          !s._node._unlocked &&
                          ((s._node._unlocked = !0), s._node.load());
                      }
                  e._autoResume();
                  var u = e.ctx.createBufferSource();
                  (u.buffer = e._scratchBuffer),
                    u.connect(e.ctx.destination),
                    void 0 === u.start ? u.noteOn(0) : u.start(0),
                    'function' == typeof e.ctx.resume && e.ctx.resume(),
                    (u.onended = function () {
                      u.disconnect(0),
                        (e._audioUnlocked = !0),
                        document.removeEventListener('touchstart', n, !0),
                        document.removeEventListener('touchend', n, !0),
                        document.removeEventListener('click', n, !0),
                        document.removeEventListener('keydown', n, !0);
                      for (var t = 0; t < e._howls.length; t++)
                        e._howls[t]._emit('unlock');
                    });
                };
                return (
                  document.addEventListener('touchstart', n, !0),
                  document.addEventListener('touchend', n, !0),
                  document.addEventListener('click', n, !0),
                  document.addEventListener('keydown', n, !0),
                  e
                );
              }
            },
            _obtainHtml5Audio: function () {
              var e = this || a;
              if (e._html5AudioPool.length) return e._html5AudioPool.pop();
              var n = new Audio().play();
              return (
                n &&
                  'undefined' != typeof Promise &&
                  (n instanceof Promise || 'function' == typeof n.then) &&
                  n.catch(function () {
                    console.warn(
                      'HTML5 Audio pool exhausted, returning potentially locked audio object.',
                    );
                  }),
                new Audio()
              );
            },
            _releaseHtml5Audio: function (e) {
              var n = this || a;
              return e._unlocked && n._html5AudioPool.push(e), n;
            },
            _autoSuspend: function () {
              var e = this;
              if (
                e.autoSuspend &&
                e.ctx &&
                void 0 !== e.ctx.suspend &&
                a.usingWebAudio
              ) {
                for (var n = 0; n < e._howls.length; n++)
                  if (e._howls[n]._webAudio)
                    for (var t = 0; t < e._howls[n]._sounds.length; t++)
                      if (!e._howls[n]._sounds[t]._paused) return e;
                return (
                  e._suspendTimer && clearTimeout(e._suspendTimer),
                  (e._suspendTimer = setTimeout(function () {
                    if (e.autoSuspend) {
                      (e._suspendTimer = null), (e.state = 'suspending');
                      var n = function () {
                        (e.state = 'suspended'),
                          e._resumeAfterSuspend &&
                            (delete e._resumeAfterSuspend, e._autoResume());
                      };
                      e.ctx.suspend().then(n, n);
                    }
                  }, 3e4)),
                  e
                );
              }
            },
            _autoResume: function () {
              var e = this;
              if (e.ctx && void 0 !== e.ctx.resume && a.usingWebAudio)
                return (
                  'running' === e.state &&
                  'interrupted' !== e.ctx.state &&
                  e._suspendTimer
                    ? (clearTimeout(e._suspendTimer), (e._suspendTimer = null))
                    : 'suspended' === e.state ||
                        ('running' === e.state && 'interrupted' === e.ctx.state)
                      ? (e.ctx.resume().then(function () {
                          e.state = 'running';
                          for (var n = 0; n < e._howls.length; n++)
                            e._howls[n]._emit('resume');
                        }),
                        e._suspendTimer &&
                          (clearTimeout(e._suspendTimer),
                          (e._suspendTimer = null)))
                      : 'suspending' === e.state &&
                        (e._resumeAfterSuspend = !0),
                  e
                );
            },
          };
          var a = new o(),
            i = function (e) {
              e.src && 0 !== e.src.length
                ? this.init(e)
                : console.error(
                    'An array of source files must be passed with any new Howl.',
                  );
            };
          i.prototype = {
            init: function (e) {
              var n = this;
              return (
                a.ctx || _(),
                (n._autoplay = e.autoplay || !1),
                (n._format =
                  'string' != typeof e.format ? e.format : [e.format]),
                (n._html5 = e.html5 || !1),
                (n._muted = e.mute || !1),
                (n._loop = e.loop || !1),
                (n._pool = e.pool || 5),
                (n._preload =
                  ('boolean' != typeof e.preload && 'metadata' !== e.preload) ||
                  e.preload),
                (n._rate = e.rate || 1),
                (n._sprite = e.sprite || {}),
                (n._src = 'string' != typeof e.src ? e.src : [e.src]),
                (n._volume = void 0 !== e.volume ? e.volume : 1),
                (n._xhr = {
                  method: e.xhr && e.xhr.method ? e.xhr.method : 'GET',
                  headers: e.xhr && e.xhr.headers ? e.xhr.headers : null,
                  withCredentials:
                    !(!e.xhr || !e.xhr.withCredentials) &&
                    e.xhr.withCredentials,
                }),
                (n._duration = 0),
                (n._state = 'unloaded'),
                (n._sounds = []),
                (n._endTimers = {}),
                (n._queue = []),
                (n._playLock = !1),
                (n._onend = e.onend ? [{ fn: e.onend }] : []),
                (n._onfade = e.onfade ? [{ fn: e.onfade }] : []),
                (n._onload = e.onload ? [{ fn: e.onload }] : []),
                (n._onloaderror = e.onloaderror ? [{ fn: e.onloaderror }] : []),
                (n._onplayerror = e.onplayerror ? [{ fn: e.onplayerror }] : []),
                (n._onpause = e.onpause ? [{ fn: e.onpause }] : []),
                (n._onplay = e.onplay ? [{ fn: e.onplay }] : []),
                (n._onstop = e.onstop ? [{ fn: e.onstop }] : []),
                (n._onmute = e.onmute ? [{ fn: e.onmute }] : []),
                (n._onvolume = e.onvolume ? [{ fn: e.onvolume }] : []),
                (n._onrate = e.onrate ? [{ fn: e.onrate }] : []),
                (n._onseek = e.onseek ? [{ fn: e.onseek }] : []),
                (n._onunlock = e.onunlock ? [{ fn: e.onunlock }] : []),
                (n._onresume = []),
                (n._webAudio = a.usingWebAudio && !n._html5),
                void 0 !== a.ctx && a.ctx && a.autoUnlock && a._unlockAudio(),
                a._howls.push(n),
                n._autoplay &&
                  n._queue.push({
                    event: 'play',
                    action: function () {
                      n.play();
                    },
                  }),
                n._preload && 'none' !== n._preload && n.load(),
                n
              );
            },
            load: function () {
              var e = this,
                n = null;
              if (a.noAudio) e._emit('loaderror', null, 'No audio support.');
              else {
                'string' == typeof e._src && (e._src = [e._src]);
                for (var t = 0; t < e._src.length; t++) {
                  var r, o;
                  if (e._format && e._format[t]) r = e._format[t];
                  else {
                    if ('string' != typeof (o = e._src[t])) {
                      e._emit(
                        'loaderror',
                        null,
                        'Non-string found in selected audio sources - ignoring.',
                      );
                      continue;
                    }
                    (r = /^data:audio\/([^;,]+);/i.exec(o)) ||
                      (r = /\.([^.]+)$/.exec(o.split('?', 1)[0])),
                      r && (r = r[1].toLowerCase());
                  }
                  if (
                    (r ||
                      console.warn(
                        'No file extension was found. Consider using the "format" property or specify an extension.',
                      ),
                    r && a.codecs(r))
                  ) {
                    n = e._src[t];
                    break;
                  }
                }
                if (n)
                  return (
                    (e._src = n),
                    (e._state = 'loading'),
                    'https:' === window.location.protocol &&
                      'http:' === n.slice(0, 5) &&
                      ((e._html5 = !0), (e._webAudio = !1)),
                    new s(e),
                    e._webAudio && d(e),
                    e
                  );
                e._emit(
                  'loaderror',
                  null,
                  'No codec support for selected audio sources.',
                );
              }
            },
            play: function (e, n) {
              var t = this,
                r = null;
              if ('number' == typeof e) (r = e), (e = null);
              else {
                if (
                  'string' == typeof e &&
                  'loaded' === t._state &&
                  !t._sprite[e]
                )
                  return null;
                if (void 0 === e && ((e = '__default'), !t._playLock)) {
                  for (var o = 0, i = 0; i < t._sounds.length; i++)
                    t._sounds[i]._paused &&
                      !t._sounds[i]._ended &&
                      (o++, (r = t._sounds[i]._id));
                  1 === o ? (e = null) : (r = null);
                }
              }
              var s = r ? t._soundById(r) : t._inactiveSound();
              if (!s) return null;
              if (
                (r && !e && (e = s._sprite || '__default'),
                'loaded' !== t._state)
              ) {
                (s._sprite = e), (s._ended = !1);
                var u = s._id;
                return (
                  t._queue.push({
                    event: 'play',
                    action: function () {
                      t.play(u);
                    },
                  }),
                  u
                );
              }
              if (r && !s._paused) return n || t._loadQueue('play'), s._id;
              t._webAudio && a._autoResume();
              var d = Math.max(
                  0,
                  s._seek > 0 ? s._seek : t._sprite[e][0] / 1e3,
                ),
                c = Math.max(0, (t._sprite[e][0] + t._sprite[e][1]) / 1e3 - d),
                l = (1e3 * c) / Math.abs(s._rate),
                p = t._sprite[e][0] / 1e3,
                _ = (t._sprite[e][0] + t._sprite[e][1]) / 1e3;
              (s._sprite = e), (s._ended = !1);
              var f = function () {
                (s._paused = !1),
                  (s._seek = d),
                  (s._start = p),
                  (s._stop = _),
                  (s._loop = !(!s._loop && !t._sprite[e][2]));
              };
              if (!(d >= _)) {
                var g = s._node;
                if (t._webAudio) {
                  var m = function () {
                    (t._playLock = !1), f(), t._refreshBuffer(s);
                    var e = s._muted || t._muted ? 0 : s._volume;
                    g.gain.setValueAtTime(e, a.ctx.currentTime),
                      (s._playStart = a.ctx.currentTime),
                      void 0 === g.bufferSource.start
                        ? s._loop
                          ? g.bufferSource.noteGrainOn(0, d, 86400)
                          : g.bufferSource.noteGrainOn(0, d, c)
                        : s._loop
                          ? g.bufferSource.start(0, d, 86400)
                          : g.bufferSource.start(0, d, c),
                      l !== 1 / 0 &&
                        (t._endTimers[s._id] = setTimeout(
                          t._ended.bind(t, s),
                          l,
                        )),
                      n ||
                        setTimeout(function () {
                          t._emit('play', s._id), t._loadQueue();
                        }, 0);
                  };
                  'running' === a.state && 'interrupted' !== a.ctx.state
                    ? m()
                    : ((t._playLock = !0),
                      t.once('resume', m),
                      t._clearTimer(s._id));
                } else {
                  var h = function () {
                    (g.currentTime = d),
                      (g.muted = s._muted || t._muted || a._muted || g.muted),
                      (g.volume = s._volume * a.volume()),
                      (g.playbackRate = s._rate);
                    try {
                      var r = g.play();
                      if (
                        (r &&
                        'undefined' != typeof Promise &&
                        (r instanceof Promise || 'function' == typeof r.then)
                          ? ((t._playLock = !0),
                            f(),
                            r
                              .then(function () {
                                (t._playLock = !1),
                                  (g._unlocked = !0),
                                  n ? t._loadQueue() : t._emit('play', s._id);
                              })
                              .catch(function () {
                                (t._playLock = !1),
                                  t._emit(
                                    'playerror',
                                    s._id,
                                    'Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.',
                                  ),
                                  (s._ended = !0),
                                  (s._paused = !0);
                              }))
                          : n ||
                            ((t._playLock = !1), f(), t._emit('play', s._id)),
                        (g.playbackRate = s._rate),
                        g.paused)
                      )
                        return void t._emit(
                          'playerror',
                          s._id,
                          'Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.',
                        );
                      '__default' !== e || s._loop
                        ? (t._endTimers[s._id] = setTimeout(
                            t._ended.bind(t, s),
                            l,
                          ))
                        : ((t._endTimers[s._id] = function () {
                            t._ended(s),
                              g.removeEventListener(
                                'ended',
                                t._endTimers[s._id],
                                !1,
                              );
                          }),
                          g.addEventListener('ended', t._endTimers[s._id], !1));
                    } catch (e) {
                      t._emit('playerror', s._id, e);
                    }
                  };
                  'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA' ===
                    g.src && ((g.src = t._src), g.load());
                  var v =
                    (window && window.ejecta) ||
                    (!g.readyState && a._navigator.isCocoonJS);
                  if (g.readyState >= 3 || v) h();
                  else {
                    (t._playLock = !0), (t._state = 'loading');
                    var y = function () {
                      (t._state = 'loaded'),
                        h(),
                        g.removeEventListener(a._canPlayEvent, y, !1);
                    };
                    g.addEventListener(a._canPlayEvent, y, !1),
                      t._clearTimer(s._id);
                  }
                }
                return s._id;
              }
              t._ended(s);
            },
            pause: function (e) {
              var n = this;
              if ('loaded' !== n._state || n._playLock)
                return (
                  n._queue.push({
                    event: 'pause',
                    action: function () {
                      n.pause(e);
                    },
                  }),
                  n
                );
              for (var t = n._getSoundIds(e), r = 0; r < t.length; r++) {
                n._clearTimer(t[r]);
                var o = n._soundById(t[r]);
                if (
                  o &&
                  !o._paused &&
                  ((o._seek = n.seek(t[r])),
                  (o._rateSeek = 0),
                  (o._paused = !0),
                  n._stopFade(t[r]),
                  o._node)
                )
                  if (n._webAudio) {
                    if (!o._node.bufferSource) continue;
                    void 0 === o._node.bufferSource.stop
                      ? o._node.bufferSource.noteOff(0)
                      : o._node.bufferSource.stop(0),
                      n._cleanBuffer(o._node);
                  } else
                    (isNaN(o._node.duration) && o._node.duration !== 1 / 0) ||
                      o._node.pause();
                arguments[1] || n._emit('pause', o ? o._id : null);
              }
              return n;
            },
            stop: function (e, n) {
              var t = this;
              if ('loaded' !== t._state || t._playLock)
                return (
                  t._queue.push({
                    event: 'stop',
                    action: function () {
                      t.stop(e);
                    },
                  }),
                  t
                );
              for (var r = t._getSoundIds(e), o = 0; o < r.length; o++) {
                t._clearTimer(r[o]);
                var a = t._soundById(r[o]);
                a &&
                  ((a._seek = a._start || 0),
                  (a._rateSeek = 0),
                  (a._paused = !0),
                  (a._ended = !0),
                  t._stopFade(r[o]),
                  a._node &&
                    (t._webAudio
                      ? a._node.bufferSource &&
                        (void 0 === a._node.bufferSource.stop
                          ? a._node.bufferSource.noteOff(0)
                          : a._node.bufferSource.stop(0),
                        t._cleanBuffer(a._node))
                      : (isNaN(a._node.duration) &&
                          a._node.duration !== 1 / 0) ||
                        ((a._node.currentTime = a._start || 0),
                        a._node.pause(),
                        a._node.duration === 1 / 0 && t._clearSound(a._node))),
                  n || t._emit('stop', a._id));
              }
              return t;
            },
            mute: function (e, n) {
              var t = this;
              if ('loaded' !== t._state || t._playLock)
                return (
                  t._queue.push({
                    event: 'mute',
                    action: function () {
                      t.mute(e, n);
                    },
                  }),
                  t
                );
              if (void 0 === n) {
                if ('boolean' != typeof e) return t._muted;
                t._muted = e;
              }
              for (var r = t._getSoundIds(n), o = 0; o < r.length; o++) {
                var i = t._soundById(r[o]);
                i &&
                  ((i._muted = e),
                  i._interval && t._stopFade(i._id),
                  t._webAudio && i._node
                    ? i._node.gain.setValueAtTime(
                        e ? 0 : i._volume,
                        a.ctx.currentTime,
                      )
                    : i._node && (i._node.muted = !!a._muted || e),
                  t._emit('mute', i._id));
              }
              return t;
            },
            volume: function () {
              var e,
                n,
                t,
                r = this,
                o = arguments;
              if (0 === o.length) return r._volume;
              if (
                (1 === o.length || (2 === o.length && void 0 === o[1])
                  ? r._getSoundIds().indexOf(o[0]) >= 0
                    ? (n = parseInt(o[0], 10))
                    : (e = parseFloat(o[0]))
                  : o.length >= 2 &&
                    ((e = parseFloat(o[0])), (n = parseInt(o[1], 10))),
                !(void 0 !== e && e >= 0 && e <= 1))
              )
                return (t = n ? r._soundById(n) : r._sounds[0]) ? t._volume : 0;
              if ('loaded' !== r._state || r._playLock)
                return (
                  r._queue.push({
                    event: 'volume',
                    action: function () {
                      r.volume.apply(r, o);
                    },
                  }),
                  r
                );
              void 0 === n && (r._volume = e), (n = r._getSoundIds(n));
              for (var i = 0; i < n.length; i++)
                (t = r._soundById(n[i])) &&
                  ((t._volume = e),
                  o[2] || r._stopFade(n[i]),
                  r._webAudio && t._node && !t._muted
                    ? t._node.gain.setValueAtTime(e, a.ctx.currentTime)
                    : t._node && !t._muted && (t._node.volume = e * a.volume()),
                  r._emit('volume', t._id));
              return r;
            },
            fade: function (e, n, t, r) {
              var o = this;
              if ('loaded' !== o._state || o._playLock)
                return (
                  o._queue.push({
                    event: 'fade',
                    action: function () {
                      o.fade(e, n, t, r);
                    },
                  }),
                  o
                );
              (e = Math.min(Math.max(0, parseFloat(e)), 1)),
                (n = Math.min(Math.max(0, parseFloat(n)), 1)),
                (t = parseFloat(t)),
                o.volume(e, r);
              for (var i = o._getSoundIds(r), s = 0; s < i.length; s++) {
                var u = o._soundById(i[s]);
                if (u) {
                  if ((r || o._stopFade(i[s]), o._webAudio && !u._muted)) {
                    var d = a.ctx.currentTime,
                      c = d + t / 1e3;
                    (u._volume = e),
                      u._node.gain.setValueAtTime(e, d),
                      u._node.gain.linearRampToValueAtTime(n, c);
                  }
                  o._startFadeInterval(u, e, n, t, i[s], void 0 === r);
                }
              }
              return o;
            },
            _startFadeInterval: function (e, n, t, r, o, a) {
              var i = this,
                s = n,
                u = t - n,
                d = Math.abs(u / 0.01),
                c = Math.max(4, d > 0 ? r / d : r),
                l = Date.now();
              (e._fadeTo = t),
                (e._interval = setInterval(function () {
                  var o = (Date.now() - l) / r;
                  (l = Date.now()),
                    (s += u * o),
                    (s = Math.round(100 * s) / 100),
                    (s = u < 0 ? Math.max(t, s) : Math.min(t, s)),
                    i._webAudio ? (e._volume = s) : i.volume(s, e._id, !0),
                    a && (i._volume = s),
                    ((t < n && s <= t) || (t > n && s >= t)) &&
                      (clearInterval(e._interval),
                      (e._interval = null),
                      (e._fadeTo = null),
                      i.volume(t, e._id),
                      i._emit('fade', e._id));
                }, c));
            },
            _stopFade: function (e) {
              var n = this,
                t = n._soundById(e);
              return (
                t &&
                  t._interval &&
                  (n._webAudio &&
                    t._node.gain.cancelScheduledValues(a.ctx.currentTime),
                  clearInterval(t._interval),
                  (t._interval = null),
                  n.volume(t._fadeTo, e),
                  (t._fadeTo = null),
                  n._emit('fade', e)),
                n
              );
            },
            loop: function () {
              var e,
                n,
                t,
                r = this,
                o = arguments;
              if (0 === o.length) return r._loop;
              if (1 === o.length) {
                if ('boolean' != typeof o[0])
                  return !!(t = r._soundById(parseInt(o[0], 10))) && t._loop;
                (e = o[0]), (r._loop = e);
              } else 2 === o.length && ((e = o[0]), (n = parseInt(o[1], 10)));
              for (var a = r._getSoundIds(n), i = 0; i < a.length; i++)
                (t = r._soundById(a[i])) &&
                  ((t._loop = e),
                  r._webAudio &&
                    t._node &&
                    t._node.bufferSource &&
                    ((t._node.bufferSource.loop = e),
                    e &&
                      ((t._node.bufferSource.loopStart = t._start || 0),
                      (t._node.bufferSource.loopEnd = t._stop),
                      r.playing(a[i]) &&
                        (r.pause(a[i], !0), r.play(a[i], !0)))));
              return r;
            },
            rate: function () {
              var e,
                n,
                t,
                r = this,
                o = arguments;
              if (
                (0 === o.length
                  ? (n = r._sounds[0]._id)
                  : 1 === o.length
                    ? r._getSoundIds().indexOf(o[0]) >= 0
                      ? (n = parseInt(o[0], 10))
                      : (e = parseFloat(o[0]))
                    : 2 === o.length &&
                      ((e = parseFloat(o[0])), (n = parseInt(o[1], 10))),
                'number' != typeof e)
              )
                return (t = r._soundById(n)) ? t._rate : r._rate;
              if ('loaded' !== r._state || r._playLock)
                return (
                  r._queue.push({
                    event: 'rate',
                    action: function () {
                      r.rate.apply(r, o);
                    },
                  }),
                  r
                );
              void 0 === n && (r._rate = e), (n = r._getSoundIds(n));
              for (var i = 0; i < n.length; i++)
                if ((t = r._soundById(n[i]))) {
                  r.playing(n[i]) &&
                    ((t._rateSeek = r.seek(n[i])),
                    (t._playStart = r._webAudio
                      ? a.ctx.currentTime
                      : t._playStart)),
                    (t._rate = e),
                    r._webAudio && t._node && t._node.bufferSource
                      ? t._node.bufferSource.playbackRate.setValueAtTime(
                          e,
                          a.ctx.currentTime,
                        )
                      : t._node && (t._node.playbackRate = e);
                  var s = r.seek(n[i]),
                    u =
                      (1e3 *
                        ((r._sprite[t._sprite][0] + r._sprite[t._sprite][1]) /
                          1e3 -
                          s)) /
                      Math.abs(t._rate);
                  (!r._endTimers[n[i]] && t._paused) ||
                    (r._clearTimer(n[i]),
                    (r._endTimers[n[i]] = setTimeout(r._ended.bind(r, t), u))),
                    r._emit('rate', t._id);
                }
              return r;
            },
            seek: function () {
              var e,
                n,
                t = this,
                r = arguments;
              if (
                (0 === r.length
                  ? t._sounds.length && (n = t._sounds[0]._id)
                  : 1 === r.length
                    ? t._getSoundIds().indexOf(r[0]) >= 0
                      ? (n = parseInt(r[0], 10))
                      : t._sounds.length &&
                        ((n = t._sounds[0]._id), (e = parseFloat(r[0])))
                    : 2 === r.length &&
                      ((e = parseFloat(r[0])), (n = parseInt(r[1], 10))),
                void 0 === n)
              )
                return 0;
              if (
                'number' == typeof e &&
                ('loaded' !== t._state || t._playLock)
              )
                return (
                  t._queue.push({
                    event: 'seek',
                    action: function () {
                      t.seek.apply(t, r);
                    },
                  }),
                  t
                );
              var o = t._soundById(n);
              if (o) {
                if (!('number' == typeof e && e >= 0)) {
                  if (t._webAudio) {
                    var i = t.playing(n) ? a.ctx.currentTime - o._playStart : 0,
                      s = o._rateSeek ? o._rateSeek - o._seek : 0;
                    return o._seek + (s + i * Math.abs(o._rate));
                  }
                  return o._node.currentTime;
                }
                var u = t.playing(n);
                u && t.pause(n, !0),
                  (o._seek = e),
                  (o._ended = !1),
                  t._clearTimer(n),
                  t._webAudio ||
                    !o._node ||
                    isNaN(o._node.duration) ||
                    (o._node.currentTime = e);
                var d = function () {
                  u && t.play(n, !0), t._emit('seek', n);
                };
                if (u && !t._webAudio) {
                  var c = function () {
                    t._playLock ? setTimeout(c, 0) : d();
                  };
                  setTimeout(c, 0);
                } else d();
              }
              return t;
            },
            playing: function (e) {
              var n = this;
              if ('number' == typeof e) {
                var t = n._soundById(e);
                return !!t && !t._paused;
              }
              for (var r = 0; r < n._sounds.length; r++)
                if (!n._sounds[r]._paused) return !0;
              return !1;
            },
            duration: function (e) {
              var n = this,
                t = n._duration,
                r = n._soundById(e);
              return r && (t = n._sprite[r._sprite][1] / 1e3), t;
            },
            state: function () {
              return this._state;
            },
            unload: function () {
              for (var e = this, n = e._sounds, t = 0; t < n.length; t++)
                n[t]._paused || e.stop(n[t]._id),
                  e._webAudio ||
                    (e._clearSound(n[t]._node),
                    n[t]._node.removeEventListener('error', n[t]._errorFn, !1),
                    n[t]._node.removeEventListener(
                      a._canPlayEvent,
                      n[t]._loadFn,
                      !1,
                    ),
                    n[t]._node.removeEventListener('ended', n[t]._endFn, !1),
                    a._releaseHtml5Audio(n[t]._node)),
                  delete n[t]._node,
                  e._clearTimer(n[t]._id);
              var r = a._howls.indexOf(e);
              r >= 0 && a._howls.splice(r, 1);
              var o = !0;
              for (t = 0; t < a._howls.length; t++)
                if (
                  a._howls[t]._src === e._src ||
                  e._src.indexOf(a._howls[t]._src) >= 0
                ) {
                  o = !1;
                  break;
                }
              return (
                u && o && delete u[e._src],
                (a.noAudio = !1),
                (e._state = 'unloaded'),
                (e._sounds = []),
                (e = null),
                null
              );
            },
            on: function (e, n, t, r) {
              var o = this['_on' + e];
              return (
                'function' == typeof n &&
                  o.push(r ? { id: t, fn: n, once: r } : { id: t, fn: n }),
                this
              );
            },
            off: function (e, n, t) {
              var r = this,
                o = r['_on' + e],
                a = 0;
              if (('number' == typeof n && ((t = n), (n = null)), n || t))
                for (a = 0; a < o.length; a++) {
                  var i = t === o[a].id;
                  if ((n === o[a].fn && i) || (!n && i)) {
                    o.splice(a, 1);
                    break;
                  }
                }
              else if (e) r['_on' + e] = [];
              else {
                var s = Object.keys(r);
                for (a = 0; a < s.length; a++)
                  0 === s[a].indexOf('_on') &&
                    Array.isArray(r[s[a]]) &&
                    (r[s[a]] = []);
              }
              return r;
            },
            once: function (e, n, t) {
              return this.on(e, n, t, 1), this;
            },
            _emit: function (e, n, t) {
              for (
                var r = this, o = r['_on' + e], a = o.length - 1;
                a >= 0;
                a--
              )
                (o[a].id && o[a].id !== n && 'load' !== e) ||
                  (setTimeout(
                    function (e) {
                      e.call(this, n, t);
                    }.bind(r, o[a].fn),
                    0,
                  ),
                  o[a].once && r.off(e, o[a].fn, o[a].id));
              return r._loadQueue(e), r;
            },
            _loadQueue: function (e) {
              var n = this;
              if (n._queue.length > 0) {
                var t = n._queue[0];
                t.event === e && (n._queue.shift(), n._loadQueue()),
                  e || t.action();
              }
              return n;
            },
            _ended: function (e) {
              var n = this,
                t = e._sprite;
              if (
                !n._webAudio &&
                e._node &&
                !e._node.paused &&
                !e._node.ended &&
                e._node.currentTime < e._stop
              )
                return setTimeout(n._ended.bind(n, e), 100), n;
              var r = !(!e._loop && !n._sprite[t][2]);
              if (
                (n._emit('end', e._id),
                !n._webAudio && r && n.stop(e._id, !0).play(e._id),
                n._webAudio && r)
              ) {
                n._emit('play', e._id),
                  (e._seek = e._start || 0),
                  (e._rateSeek = 0),
                  (e._playStart = a.ctx.currentTime);
                var o = (1e3 * (e._stop - e._start)) / Math.abs(e._rate);
                n._endTimers[e._id] = setTimeout(n._ended.bind(n, e), o);
              }
              return (
                n._webAudio &&
                  !r &&
                  ((e._paused = !0),
                  (e._ended = !0),
                  (e._seek = e._start || 0),
                  (e._rateSeek = 0),
                  n._clearTimer(e._id),
                  n._cleanBuffer(e._node),
                  a._autoSuspend()),
                n._webAudio || r || n.stop(e._id, !0),
                n
              );
            },
            _clearTimer: function (e) {
              var n = this;
              if (n._endTimers[e]) {
                if ('function' != typeof n._endTimers[e])
                  clearTimeout(n._endTimers[e]);
                else {
                  var t = n._soundById(e);
                  t &&
                    t._node &&
                    t._node.removeEventListener('ended', n._endTimers[e], !1);
                }
                delete n._endTimers[e];
              }
              return n;
            },
            _soundById: function (e) {
              for (var n = this, t = 0; t < n._sounds.length; t++)
                if (e === n._sounds[t]._id) return n._sounds[t];
              return null;
            },
            _inactiveSound: function () {
              var e = this;
              e._drain();
              for (var n = 0; n < e._sounds.length; n++)
                if (e._sounds[n]._ended) return e._sounds[n].reset();
              return new s(e);
            },
            _drain: function () {
              var e = this,
                n = e._pool,
                t = 0,
                r = 0;
              if (!(e._sounds.length < n)) {
                for (r = 0; r < e._sounds.length; r++)
                  e._sounds[r]._ended && t++;
                for (r = e._sounds.length - 1; r >= 0; r--) {
                  if (t <= n) return;
                  e._sounds[r]._ended &&
                    (e._webAudio &&
                      e._sounds[r]._node &&
                      e._sounds[r]._node.disconnect(0),
                    e._sounds.splice(r, 1),
                    t--);
                }
              }
            },
            _getSoundIds: function (e) {
              if (void 0 === e) {
                for (var n = [], t = 0; t < this._sounds.length; t++)
                  n.push(this._sounds[t]._id);
                return n;
              }
              return [e];
            },
            _refreshBuffer: function (e) {
              return (
                (e._node.bufferSource = a.ctx.createBufferSource()),
                (e._node.bufferSource.buffer = u[this._src]),
                e._panner
                  ? e._node.bufferSource.connect(e._panner)
                  : e._node.bufferSource.connect(e._node),
                (e._node.bufferSource.loop = e._loop),
                e._loop &&
                  ((e._node.bufferSource.loopStart = e._start || 0),
                  (e._node.bufferSource.loopEnd = e._stop || 0)),
                e._node.bufferSource.playbackRate.setValueAtTime(
                  e._rate,
                  a.ctx.currentTime,
                ),
                this
              );
            },
            _cleanBuffer: function (e) {
              var n = a._navigator && a._navigator.vendor.indexOf('Apple') >= 0;
              if (!e.bufferSource) return this;
              if (
                a._scratchBuffer &&
                e.bufferSource &&
                ((e.bufferSource.onended = null),
                e.bufferSource.disconnect(0),
                n)
              )
                try {
                  e.bufferSource.buffer = a._scratchBuffer;
                } catch (e) {}
              return (e.bufferSource = null), this;
            },
            _clearSound: function (e) {
              /MSIE |Trident\//.test(a._navigator && a._navigator.userAgent) ||
                (e.src =
                  'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA');
            },
          };
          var s = function (e) {
            (this._parent = e), this.init();
          };
          s.prototype = {
            init: function () {
              var e = this,
                n = e._parent;
              return (
                (e._muted = n._muted),
                (e._loop = n._loop),
                (e._volume = n._volume),
                (e._rate = n._rate),
                (e._seek = 0),
                (e._paused = !0),
                (e._ended = !0),
                (e._sprite = '__default'),
                (e._id = ++a._counter),
                n._sounds.push(e),
                e.create(),
                e
              );
            },
            create: function () {
              var e = this,
                n = e._parent,
                t = a._muted || e._muted || e._parent._muted ? 0 : e._volume;
              return (
                n._webAudio
                  ? ((e._node =
                      void 0 === a.ctx.createGain
                        ? a.ctx.createGainNode()
                        : a.ctx.createGain()),
                    e._node.gain.setValueAtTime(t, a.ctx.currentTime),
                    (e._node.paused = !0),
                    e._node.connect(a.masterGain))
                  : a.noAudio ||
                    ((e._node = a._obtainHtml5Audio()),
                    (e._errorFn = e._errorListener.bind(e)),
                    e._node.addEventListener('error', e._errorFn, !1),
                    (e._loadFn = e._loadListener.bind(e)),
                    e._node.addEventListener(a._canPlayEvent, e._loadFn, !1),
                    (e._endFn = e._endListener.bind(e)),
                    e._node.addEventListener('ended', e._endFn, !1),
                    (e._node.src = n._src),
                    (e._node.preload = !0 === n._preload ? 'auto' : n._preload),
                    (e._node.volume = t * a.volume()),
                    e._node.load()),
                e
              );
            },
            reset: function () {
              var e = this,
                n = e._parent;
              return (
                (e._muted = n._muted),
                (e._loop = n._loop),
                (e._volume = n._volume),
                (e._rate = n._rate),
                (e._seek = 0),
                (e._rateSeek = 0),
                (e._paused = !0),
                (e._ended = !0),
                (e._sprite = '__default'),
                (e._id = ++a._counter),
                e
              );
            },
            _errorListener: function () {
              var e = this;
              e._parent._emit(
                'loaderror',
                e._id,
                e._node.error ? e._node.error.code : 0,
              ),
                e._node.removeEventListener('error', e._errorFn, !1);
            },
            _loadListener: function () {
              var e = this,
                n = e._parent;
              (n._duration = Math.ceil(10 * e._node.duration) / 10),
                0 === Object.keys(n._sprite).length &&
                  (n._sprite = { __default: [0, 1e3 * n._duration] }),
                'loaded' !== n._state &&
                  ((n._state = 'loaded'), n._emit('load'), n._loadQueue()),
                e._node.removeEventListener(a._canPlayEvent, e._loadFn, !1);
            },
            _endListener: function () {
              var e = this,
                n = e._parent;
              n._duration === 1 / 0 &&
                ((n._duration = Math.ceil(10 * e._node.duration) / 10),
                n._sprite.__default[1] === 1 / 0 &&
                  (n._sprite.__default[1] = 1e3 * n._duration),
                n._ended(e)),
                e._node.removeEventListener('ended', e._endFn, !1);
            },
          };
          var u = {},
            d = function (e) {
              var n = e._src;
              if (u[n]) return (e._duration = u[n].duration), void p(e);
              if (/^data:[^;]+;base64,/.test(n)) {
                for (
                  var t = atob(n.split(',')[1]),
                    r = new Uint8Array(t.length),
                    o = 0;
                  o < t.length;
                  ++o
                )
                  r[o] = t.charCodeAt(o);
                l(r.buffer, e);
              } else {
                var a = new XMLHttpRequest();
                a.open(e._xhr.method, n, !0),
                  (a.withCredentials = e._xhr.withCredentials),
                  (a.responseType = 'arraybuffer'),
                  e._xhr.headers &&
                    Object.keys(e._xhr.headers).forEach(function (n) {
                      a.setRequestHeader(n, e._xhr.headers[n]);
                    }),
                  (a.onload = function () {
                    var n = (a.status + '')[0];
                    '0' === n || '2' === n || '3' === n
                      ? l(a.response, e)
                      : e._emit(
                          'loaderror',
                          null,
                          'Failed loading audio file with status: ' +
                            a.status +
                            '.',
                        );
                  }),
                  (a.onerror = function () {
                    e._webAudio &&
                      ((e._html5 = !0),
                      (e._webAudio = !1),
                      (e._sounds = []),
                      delete u[n],
                      e.load());
                  }),
                  c(a);
              }
            },
            c = function (e) {
              try {
                e.send();
              } catch (n) {
                e.onerror();
              }
            },
            l = function (e, n) {
              var t = function () {
                  n._emit('loaderror', null, 'Decoding audio data failed.');
                },
                r = function (e) {
                  e && n._sounds.length > 0 ? ((u[n._src] = e), p(n, e)) : t();
                };
              'undefined' != typeof Promise &&
              1 === a.ctx.decodeAudioData.length
                ? a.ctx.decodeAudioData(e).then(r).catch(t)
                : a.ctx.decodeAudioData(e, r, t);
            },
            p = function (e, n) {
              n && !e._duration && (e._duration = n.duration),
                0 === Object.keys(e._sprite).length &&
                  (e._sprite = { __default: [0, 1e3 * e._duration] }),
                'loaded' !== e._state &&
                  ((e._state = 'loaded'), e._emit('load'), e._loadQueue());
            },
            _ = function () {
              if (a.usingWebAudio) {
                try {
                  'undefined' != typeof AudioContext
                    ? (a.ctx = new AudioContext())
                    : 'undefined' != typeof webkitAudioContext
                      ? (a.ctx = new webkitAudioContext())
                      : (a.usingWebAudio = !1);
                } catch (e) {
                  a.usingWebAudio = !1;
                }
                a.ctx || (a.usingWebAudio = !1);
                var e = /iP(hone|od|ad)/.test(
                    a._navigator && a._navigator.platform,
                  ),
                  n =
                    a._navigator &&
                    a._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                  t = n ? parseInt(n[1], 10) : null;
                if (e && t && t < 9) {
                  var r = /safari/.test(
                    a._navigator && a._navigator.userAgent.toLowerCase(),
                  );
                  a._navigator && !r && (a.usingWebAudio = !1);
                }
                a.usingWebAudio &&
                  ((a.masterGain =
                    void 0 === a.ctx.createGain
                      ? a.ctx.createGainNode()
                      : a.ctx.createGain()),
                  a.masterGain.gain.setValueAtTime(
                    a._muted ? 0 : a._volume,
                    a.ctx.currentTime,
                  ),
                  a.masterGain.connect(a.ctx.destination)),
                  a._setup();
              }
            };
          void 0 ===
            (r = function () {
              return { Howler: a, Howl: i };
            }.apply(n, [])) || (e.exports = r),
            (n.Howler = a),
            (n.Howl = i),
            void 0 !== t.g
              ? ((t.g.HowlerGlobal = o),
                (t.g.Howler = a),
                (t.g.Howl = i),
                (t.g.Sound = s))
              : 'undefined' != typeof window &&
                ((window.HowlerGlobal = o),
                (window.Howler = a),
                (window.Howl = i),
                (window.Sound = s));
        })(),
          (function () {
            'use strict';
            var e;
            (HowlerGlobal.prototype._pos = [0, 0, 0]),
              (HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0]),
              (HowlerGlobal.prototype.stereo = function (e) {
                var n = this;
                if (!n.ctx || !n.ctx.listener) return n;
                for (var t = n._howls.length - 1; t >= 0; t--)
                  n._howls[t].stereo(e);
                return n;
              }),
              (HowlerGlobal.prototype.pos = function (e, n, t) {
                var r = this;
                return r.ctx && r.ctx.listener
                  ? ((n = 'number' != typeof n ? r._pos[1] : n),
                    (t = 'number' != typeof t ? r._pos[2] : t),
                    'number' != typeof e
                      ? r._pos
                      : ((r._pos = [e, n, t]),
                        void 0 !== r.ctx.listener.positionX
                          ? (r.ctx.listener.positionX.setTargetAtTime(
                              r._pos[0],
                              Howler.ctx.currentTime,
                              0.1,
                            ),
                            r.ctx.listener.positionY.setTargetAtTime(
                              r._pos[1],
                              Howler.ctx.currentTime,
                              0.1,
                            ),
                            r.ctx.listener.positionZ.setTargetAtTime(
                              r._pos[2],
                              Howler.ctx.currentTime,
                              0.1,
                            ))
                          : r.ctx.listener.setPosition(
                              r._pos[0],
                              r._pos[1],
                              r._pos[2],
                            ),
                        r))
                  : r;
              }),
              (HowlerGlobal.prototype.orientation = function (
                e,
                n,
                t,
                r,
                o,
                a,
              ) {
                var i = this;
                if (!i.ctx || !i.ctx.listener) return i;
                var s = i._orientation;
                return (
                  (n = 'number' != typeof n ? s[1] : n),
                  (t = 'number' != typeof t ? s[2] : t),
                  (r = 'number' != typeof r ? s[3] : r),
                  (o = 'number' != typeof o ? s[4] : o),
                  (a = 'number' != typeof a ? s[5] : a),
                  'number' != typeof e
                    ? s
                    : ((i._orientation = [e, n, t, r, o, a]),
                      void 0 !== i.ctx.listener.forwardX
                        ? (i.ctx.listener.forwardX.setTargetAtTime(
                            e,
                            Howler.ctx.currentTime,
                            0.1,
                          ),
                          i.ctx.listener.forwardY.setTargetAtTime(
                            n,
                            Howler.ctx.currentTime,
                            0.1,
                          ),
                          i.ctx.listener.forwardZ.setTargetAtTime(
                            t,
                            Howler.ctx.currentTime,
                            0.1,
                          ),
                          i.ctx.listener.upX.setTargetAtTime(
                            r,
                            Howler.ctx.currentTime,
                            0.1,
                          ),
                          i.ctx.listener.upY.setTargetAtTime(
                            o,
                            Howler.ctx.currentTime,
                            0.1,
                          ),
                          i.ctx.listener.upZ.setTargetAtTime(
                            a,
                            Howler.ctx.currentTime,
                            0.1,
                          ))
                        : i.ctx.listener.setOrientation(e, n, t, r, o, a),
                      i)
                );
              }),
              (Howl.prototype.init =
                ((e = Howl.prototype.init),
                function (n) {
                  var t = this;
                  return (
                    (t._orientation = n.orientation || [1, 0, 0]),
                    (t._stereo = n.stereo || null),
                    (t._pos = n.pos || null),
                    (t._pannerAttr = {
                      coneInnerAngle:
                        void 0 !== n.coneInnerAngle ? n.coneInnerAngle : 360,
                      coneOuterAngle:
                        void 0 !== n.coneOuterAngle ? n.coneOuterAngle : 360,
                      coneOuterGain:
                        void 0 !== n.coneOuterGain ? n.coneOuterGain : 0,
                      distanceModel:
                        void 0 !== n.distanceModel
                          ? n.distanceModel
                          : 'inverse',
                      maxDistance:
                        void 0 !== n.maxDistance ? n.maxDistance : 1e4,
                      panningModel:
                        void 0 !== n.panningModel ? n.panningModel : 'HRTF',
                      refDistance: void 0 !== n.refDistance ? n.refDistance : 1,
                      rolloffFactor:
                        void 0 !== n.rolloffFactor ? n.rolloffFactor : 1,
                    }),
                    (t._onstereo = n.onstereo ? [{ fn: n.onstereo }] : []),
                    (t._onpos = n.onpos ? [{ fn: n.onpos }] : []),
                    (t._onorientation = n.onorientation
                      ? [{ fn: n.onorientation }]
                      : []),
                    e.call(this, n)
                  );
                })),
              (Howl.prototype.stereo = function (e, t) {
                var r = this;
                if (!r._webAudio) return r;
                if ('loaded' !== r._state)
                  return (
                    r._queue.push({
                      event: 'stereo',
                      action: function () {
                        r.stereo(e, t);
                      },
                    }),
                    r
                  );
                var o =
                  void 0 === Howler.ctx.createStereoPanner
                    ? 'spatial'
                    : 'stereo';
                if (void 0 === t) {
                  if ('number' != typeof e) return r._stereo;
                  (r._stereo = e), (r._pos = [e, 0, 0]);
                }
                for (var a = r._getSoundIds(t), i = 0; i < a.length; i++) {
                  var s = r._soundById(a[i]);
                  if (s) {
                    if ('number' != typeof e) return s._stereo;
                    (s._stereo = e),
                      (s._pos = [e, 0, 0]),
                      s._node &&
                        ((s._pannerAttr.panningModel = 'equalpower'),
                        (s._panner && s._panner.pan) || n(s, o),
                        'spatial' === o
                          ? void 0 !== s._panner.positionX
                            ? (s._panner.positionX.setValueAtTime(
                                e,
                                Howler.ctx.currentTime,
                              ),
                              s._panner.positionY.setValueAtTime(
                                0,
                                Howler.ctx.currentTime,
                              ),
                              s._panner.positionZ.setValueAtTime(
                                0,
                                Howler.ctx.currentTime,
                              ))
                            : s._panner.setPosition(e, 0, 0)
                          : s._panner.pan.setValueAtTime(
                              e,
                              Howler.ctx.currentTime,
                            )),
                      r._emit('stereo', s._id);
                  }
                }
                return r;
              }),
              (Howl.prototype.pos = function (e, t, r, o) {
                var a = this;
                if (!a._webAudio) return a;
                if ('loaded' !== a._state)
                  return (
                    a._queue.push({
                      event: 'pos',
                      action: function () {
                        a.pos(e, t, r, o);
                      },
                    }),
                    a
                  );
                if (
                  ((t = 'number' != typeof t ? 0 : t),
                  (r = 'number' != typeof r ? -0.5 : r),
                  void 0 === o)
                ) {
                  if ('number' != typeof e) return a._pos;
                  a._pos = [e, t, r];
                }
                for (var i = a._getSoundIds(o), s = 0; s < i.length; s++) {
                  var u = a._soundById(i[s]);
                  if (u) {
                    if ('number' != typeof e) return u._pos;
                    (u._pos = [e, t, r]),
                      u._node &&
                        ((u._panner && !u._panner.pan) || n(u, 'spatial'),
                        void 0 !== u._panner.positionX
                          ? (u._panner.positionX.setValueAtTime(
                              e,
                              Howler.ctx.currentTime,
                            ),
                            u._panner.positionY.setValueAtTime(
                              t,
                              Howler.ctx.currentTime,
                            ),
                            u._panner.positionZ.setValueAtTime(
                              r,
                              Howler.ctx.currentTime,
                            ))
                          : u._panner.setPosition(e, t, r)),
                      a._emit('pos', u._id);
                  }
                }
                return a;
              }),
              (Howl.prototype.orientation = function (e, t, r, o) {
                var a = this;
                if (!a._webAudio) return a;
                if ('loaded' !== a._state)
                  return (
                    a._queue.push({
                      event: 'orientation',
                      action: function () {
                        a.orientation(e, t, r, o);
                      },
                    }),
                    a
                  );
                if (
                  ((t = 'number' != typeof t ? a._orientation[1] : t),
                  (r = 'number' != typeof r ? a._orientation[2] : r),
                  void 0 === o)
                ) {
                  if ('number' != typeof e) return a._orientation;
                  a._orientation = [e, t, r];
                }
                for (var i = a._getSoundIds(o), s = 0; s < i.length; s++) {
                  var u = a._soundById(i[s]);
                  if (u) {
                    if ('number' != typeof e) return u._orientation;
                    (u._orientation = [e, t, r]),
                      u._node &&
                        (u._panner ||
                          (u._pos || (u._pos = a._pos || [0, 0, -0.5]),
                          n(u, 'spatial')),
                        void 0 !== u._panner.orientationX
                          ? (u._panner.orientationX.setValueAtTime(
                              e,
                              Howler.ctx.currentTime,
                            ),
                            u._panner.orientationY.setValueAtTime(
                              t,
                              Howler.ctx.currentTime,
                            ),
                            u._panner.orientationZ.setValueAtTime(
                              r,
                              Howler.ctx.currentTime,
                            ))
                          : u._panner.setOrientation(e, t, r)),
                      a._emit('orientation', u._id);
                  }
                }
                return a;
              }),
              (Howl.prototype.pannerAttr = function () {
                var e,
                  t,
                  r,
                  o = this,
                  a = arguments;
                if (!o._webAudio) return o;
                if (0 === a.length) return o._pannerAttr;
                if (1 === a.length) {
                  if ('object' != typeof a[0])
                    return (r = o._soundById(parseInt(a[0], 10)))
                      ? r._pannerAttr
                      : o._pannerAttr;
                  (e = a[0]),
                    void 0 === t &&
                      (e.pannerAttr ||
                        (e.pannerAttr = {
                          coneInnerAngle: e.coneInnerAngle,
                          coneOuterAngle: e.coneOuterAngle,
                          coneOuterGain: e.coneOuterGain,
                          distanceModel: e.distanceModel,
                          maxDistance: e.maxDistance,
                          refDistance: e.refDistance,
                          rolloffFactor: e.rolloffFactor,
                          panningModel: e.panningModel,
                        }),
                      (o._pannerAttr = {
                        coneInnerAngle:
                          void 0 !== e.pannerAttr.coneInnerAngle
                            ? e.pannerAttr.coneInnerAngle
                            : o._coneInnerAngle,
                        coneOuterAngle:
                          void 0 !== e.pannerAttr.coneOuterAngle
                            ? e.pannerAttr.coneOuterAngle
                            : o._coneOuterAngle,
                        coneOuterGain:
                          void 0 !== e.pannerAttr.coneOuterGain
                            ? e.pannerAttr.coneOuterGain
                            : o._coneOuterGain,
                        distanceModel:
                          void 0 !== e.pannerAttr.distanceModel
                            ? e.pannerAttr.distanceModel
                            : o._distanceModel,
                        maxDistance:
                          void 0 !== e.pannerAttr.maxDistance
                            ? e.pannerAttr.maxDistance
                            : o._maxDistance,
                        refDistance:
                          void 0 !== e.pannerAttr.refDistance
                            ? e.pannerAttr.refDistance
                            : o._refDistance,
                        rolloffFactor:
                          void 0 !== e.pannerAttr.rolloffFactor
                            ? e.pannerAttr.rolloffFactor
                            : o._rolloffFactor,
                        panningModel:
                          void 0 !== e.pannerAttr.panningModel
                            ? e.pannerAttr.panningModel
                            : o._panningModel,
                      }));
                } else 2 === a.length && ((e = a[0]), (t = parseInt(a[1], 10)));
                for (var i = o._getSoundIds(t), s = 0; s < i.length; s++)
                  if ((r = o._soundById(i[s]))) {
                    var u = r._pannerAttr;
                    u = {
                      coneInnerAngle:
                        void 0 !== e.coneInnerAngle
                          ? e.coneInnerAngle
                          : u.coneInnerAngle,
                      coneOuterAngle:
                        void 0 !== e.coneOuterAngle
                          ? e.coneOuterAngle
                          : u.coneOuterAngle,
                      coneOuterGain:
                        void 0 !== e.coneOuterGain
                          ? e.coneOuterGain
                          : u.coneOuterGain,
                      distanceModel:
                        void 0 !== e.distanceModel
                          ? e.distanceModel
                          : u.distanceModel,
                      maxDistance:
                        void 0 !== e.maxDistance
                          ? e.maxDistance
                          : u.maxDistance,
                      refDistance:
                        void 0 !== e.refDistance
                          ? e.refDistance
                          : u.refDistance,
                      rolloffFactor:
                        void 0 !== e.rolloffFactor
                          ? e.rolloffFactor
                          : u.rolloffFactor,
                      panningModel:
                        void 0 !== e.panningModel
                          ? e.panningModel
                          : u.panningModel,
                    };
                    var d = r._panner;
                    d ||
                      (r._pos || (r._pos = o._pos || [0, 0, -0.5]),
                      n(r, 'spatial'),
                      (d = r._panner)),
                      (d.coneInnerAngle = u.coneInnerAngle),
                      (d.coneOuterAngle = u.coneOuterAngle),
                      (d.coneOuterGain = u.coneOuterGain),
                      (d.distanceModel = u.distanceModel),
                      (d.maxDistance = u.maxDistance),
                      (d.refDistance = u.refDistance),
                      (d.rolloffFactor = u.rolloffFactor),
                      (d.panningModel = u.panningModel);
                  }
                return o;
              }),
              (Sound.prototype.init = (function (e) {
                return function () {
                  var n = this,
                    t = n._parent;
                  (n._orientation = t._orientation),
                    (n._stereo = t._stereo),
                    (n._pos = t._pos),
                    (n._pannerAttr = t._pannerAttr),
                    e.call(this),
                    n._stereo
                      ? t.stereo(n._stereo)
                      : n._pos && t.pos(n._pos[0], n._pos[1], n._pos[2], n._id);
                };
              })(Sound.prototype.init)),
              (Sound.prototype.reset = (function (e) {
                return function () {
                  var n = this,
                    t = n._parent;
                  return (
                    (n._orientation = t._orientation),
                    (n._stereo = t._stereo),
                    (n._pos = t._pos),
                    (n._pannerAttr = t._pannerAttr),
                    n._stereo
                      ? t.stereo(n._stereo)
                      : n._pos
                        ? t.pos(n._pos[0], n._pos[1], n._pos[2], n._id)
                        : n._panner &&
                          (n._panner.disconnect(0),
                          (n._panner = void 0),
                          t._refreshBuffer(n)),
                    e.call(this)
                  );
                };
              })(Sound.prototype.reset));
            var n = function (e, n) {
              'spatial' === (n = n || 'spatial')
                ? ((e._panner = Howler.ctx.createPanner()),
                  (e._panner.coneInnerAngle = e._pannerAttr.coneInnerAngle),
                  (e._panner.coneOuterAngle = e._pannerAttr.coneOuterAngle),
                  (e._panner.coneOuterGain = e._pannerAttr.coneOuterGain),
                  (e._panner.distanceModel = e._pannerAttr.distanceModel),
                  (e._panner.maxDistance = e._pannerAttr.maxDistance),
                  (e._panner.refDistance = e._pannerAttr.refDistance),
                  (e._panner.rolloffFactor = e._pannerAttr.rolloffFactor),
                  (e._panner.panningModel = e._pannerAttr.panningModel),
                  void 0 !== e._panner.positionX
                    ? (e._panner.positionX.setValueAtTime(
                        e._pos[0],
                        Howler.ctx.currentTime,
                      ),
                      e._panner.positionY.setValueAtTime(
                        e._pos[1],
                        Howler.ctx.currentTime,
                      ),
                      e._panner.positionZ.setValueAtTime(
                        e._pos[2],
                        Howler.ctx.currentTime,
                      ))
                    : e._panner.setPosition(e._pos[0], e._pos[1], e._pos[2]),
                  void 0 !== e._panner.orientationX
                    ? (e._panner.orientationX.setValueAtTime(
                        e._orientation[0],
                        Howler.ctx.currentTime,
                      ),
                      e._panner.orientationY.setValueAtTime(
                        e._orientation[1],
                        Howler.ctx.currentTime,
                      ),
                      e._panner.orientationZ.setValueAtTime(
                        e._orientation[2],
                        Howler.ctx.currentTime,
                      ))
                    : e._panner.setOrientation(
                        e._orientation[0],
                        e._orientation[1],
                        e._orientation[2],
                      ))
                : ((e._panner = Howler.ctx.createStereoPanner()),
                  e._panner.pan.setValueAtTime(
                    e._stereo,
                    Howler.ctx.currentTime,
                  )),
                e._panner.connect(e._node),
                e._paused || e._parent.pause(e._id, !0).play(e._id, !0);
            };
          })();
      },
      379: (e) => {
        'use strict';
        var n = [];
        function t(e) {
          for (var t = -1, r = 0; r < n.length; r++)
            if (n[r].identifier === e) {
              t = r;
              break;
            }
          return t;
        }
        function r(e, r) {
          for (var a = {}, i = [], s = 0; s < e.length; s++) {
            var u = e[s],
              d = r.base ? u[0] + r.base : u[0],
              c = a[d] || 0,
              l = ''.concat(d, ' ').concat(c);
            a[d] = c + 1;
            var p = t(l),
              _ = {
                css: u[1],
                media: u[2],
                sourceMap: u[3],
                supports: u[4],
                layer: u[5],
              };
            if (-1 !== p) n[p].references++, n[p].updater(_);
            else {
              var f = o(_, r);
              (r.byIndex = s),
                n.splice(s, 0, { identifier: l, updater: f, references: 1 });
            }
            i.push(l);
          }
          return i;
        }
        function o(e, n) {
          var t = n.domAPI(n);
          return (
            t.update(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap &&
                  n.supports === e.supports &&
                  n.layer === e.layer
                )
                  return;
                t.update((e = n));
              } else t.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var a = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < a.length; i++) {
              var s = t(a[i]);
              n[s].references--;
            }
            for (var u = r(e, o), d = 0; d < a.length; d++) {
              var c = t(a[d]);
              0 === n[c].references && (n[c].updater(), n.splice(c, 1));
            }
            a = u;
          };
        };
      },
      569: (e) => {
        'use strict';
        var n = {};
        e.exports = function (e, t) {
          var r = (function (e) {
            if (void 0 === n[e]) {
              var t = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (e) {
                  t = null;
                }
              n[e] = t;
            }
            return n[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(t);
        };
      },
      216: (e) => {
        'use strict';
        e.exports = function (e) {
          var n = document.createElement('style');
          return e.setAttributes(n, e.attributes), e.insert(n, e.options), n;
        };
      },
      565: (e, n, t) => {
        'use strict';
        e.exports = function (e) {
          var n = t.nc;
          n && e.setAttribute('nonce', n);
        };
      },
      795: (e) => {
        'use strict';
        e.exports = function (e) {
          if ('undefined' == typeof document)
            return { update: function () {}, remove: function () {} };
          var n = e.insertStyleElement(e);
          return {
            update: function (t) {
              !(function (e, n, t) {
                var r = '';
                t.supports && (r += '@supports ('.concat(t.supports, ') {')),
                  t.media && (r += '@media '.concat(t.media, ' {'));
                var o = void 0 !== t.layer;
                o &&
                  (r += '@layer'.concat(
                    t.layer.length > 0 ? ' '.concat(t.layer) : '',
                    ' {',
                  )),
                  (r += t.css),
                  o && (r += '}'),
                  t.media && (r += '}'),
                  t.supports && (r += '}');
                var a = t.sourceMap;
                a &&
                  'undefined' != typeof btoa &&
                  (r +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      ' */',
                    )),
                  n.styleTagTransform(r, e, n.options);
              })(n, e, t);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            },
          };
        };
      },
      589: (e) => {
        'use strict';
        e.exports = function (e, n) {
          if (n.styleSheet) n.styleSheet.cssText = e;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(e));
          }
        };
      },
      423: (e, n, t) => {
        'use strict';
        e.exports = t.p + 'assets/7643b64bd1475f205ac9.png';
      },
      315: (e, n, t) => {
        'use strict';
        e.exports = t.p + 'assets/f6ef142943c21ab9afd8.png';
      },
      178: (e, n, t) => {
        'use strict';
        e.exports = t.p + 'assets/6145a0628bbb5050067a.png';
      },
      597: (e, n, t) => {
        'use strict';
        e.exports = t.p + 'assets/cbe4f28c7d4e0e736477.png';
      },
      738: (e, n, t) => {
        'use strict';
        e.exports = t.p + 'assets/1257d90628e5ffd4ace1.png';
      },
      534: (e, n, t) => {
        'use strict';
        e.exports = t.p + 'assets/8bafdad0cb8a3ee78044.png';
      },
    },
    n = {};
  function t(r) {
    var o = n[r];
    if (void 0 !== o) return o.exports;
    var a = (n[r] = { id: r, exports: {} });
    return e[r](a, a.exports, t), a.exports;
  }
  (t.m = e),
    (t.n = (e) => {
      var n = e && e.__esModule ? () => e.default : () => e;
      return t.d(n, { a: n }), n;
    }),
    (t.d = (e, n) => {
      for (var r in n)
        t.o(n, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
    }),
    (t.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (() => {
      var e;
      t.g.importScripts && (e = t.g.location + '');
      var n = t.g.document;
      if (!e && n && (n.currentScript && (e = n.currentScript.src), !e)) {
        var r = n.getElementsByTagName('script');
        if (r.length) for (var o = r.length - 1; o > -1 && !e; ) e = r[o--].src;
      }
      if (!e)
        throw new Error(
          'Automatic publicPath is not supported in this browser',
        );
      (e = e
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (t.p = e);
    })(),
    (t.b = document.baseURI || self.location.href),
    (t.nc = void 0),
    (() => {
      'use strict';
      const e = t.p + 'assets/382cbbe1560a76be3a4a.wav',
        n = t.p + 'assets/1c88ce856810962a5a5d.mp3',
        r = t.p + 'assets/6c9343ee291a496f5e62.wav',
        o = t.p + 'assets/f4df88c38202033bb05a.wav';
      var a = t(766);
      function i(e) {
        return (
          (i =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          i(e)
        );
      }
      function s(e, n) {
        for (var t = 0; t < n.length; t++) {
          var r = n[t];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, u(r.key), r);
        }
      }
      function u(e) {
        var n = (function (e, n) {
          if ('object' != i(e) || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, 'string');
            if ('object' != i(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(e);
        })(e);
        return 'symbol' == i(n) ? n : String(n);
      }
      var d = (function () {
          function t() {
            !(function (e, n) {
              if (!(e instanceof n))
                throw new TypeError('Cannot call a class as a function');
            })(this, t),
              (this._music = new a.Howl({
                src: e,
                loop: !0,
                volume: 0.5,
                preload: !1,
              })),
              (this._bounce = new a.Howl({ src: n, preload: !1 })),
              (this._shoot = new a.Howl({ src: r, preload: !1 })),
              (this._explosion = new a.Howl({ src: o, preload: !1 }));
          }
          var i, u;
          return (
            (i = t),
            (u = [
              {
                key: 'init',
                value: function () {
                  this._music.load(),
                    this._bounce.load(),
                    this._shoot.load(),
                    this._explosion.load();
                },
              },
              {
                key: 'playMusic',
                value: function () {
                  this._music.play();
                },
              },
              {
                key: 'stopMusic',
                value: function () {
                  this._music.stop();
                },
              },
              {
                key: 'bounce',
                value: function () {
                  this._bounce.play();
                },
              },
              {
                key: 'shot',
                value: function () {
                  this._shoot.play();
                },
              },
              {
                key: 'explosion',
                value: function () {
                  this._explosion.play();
                },
              },
            ]) && s(i.prototype, u),
            Object.defineProperty(i, 'prototype', { writable: !1 }),
            t
          );
        })(),
        c = t(379),
        l = t.n(c),
        p = t(795),
        _ = t.n(p),
        f = t(569),
        g = t.n(f),
        m = t(565),
        h = t.n(m),
        v = t(216),
        y = t.n(v),
        b = t(589),
        w = t.n(b),
        k = t(174),
        x = {};
      (x.styleTagTransform = w()),
        (x.setAttributes = h()),
        (x.insert = g().bind(null, 'head')),
        (x.domAPI = _()),
        (x.insertStyleElement = y()),
        l()(k.Z, x),
        k.Z && k.Z.locals && k.Z.locals;
      var A = t(639),
        T = {};
      function S(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
        return r;
      }
      function E(e, n, t) {
        return (
          (n = I(n)),
          (function (e, n) {
            if (n && ('object' === H(n) || 'function' == typeof n)) return n;
            if (void 0 !== n)
              throw new TypeError(
                'Derived constructors may only return object or undefined',
              );
            return (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return e;
            })(e);
          })(
            e,
            M()
              ? Reflect.construct(n, t || [], I(e).constructor)
              : n.apply(e, t),
          )
        );
      }
      function M() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (e) {}
        return (M = function () {
          return !!e;
        })();
      }
      function I(e) {
        return (
          (I = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          I(e)
        );
      }
      function P(e, n) {
        if ('function' != typeof n && null !== n)
          throw new TypeError(
            'Super expression must either be null or a function',
          );
        (e.prototype = Object.create(n && n.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          n && O(e, n);
      }
      function O(e, n) {
        return (
          (O = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, n) {
                return (e.__proto__ = n), e;
              }),
          O(e, n)
        );
      }
      function H(e) {
        return (
          (H =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          H(e)
        );
      }
      function L(e, n) {
        if (!(e instanceof n))
          throw new TypeError('Cannot call a class as a function');
      }
      function D(e, n) {
        for (var t = 0; t < n.length; t++) {
          var r = n[t];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, B(r.key), r);
        }
      }
      function G(e, n, t) {
        return (
          n && D(e.prototype, n),
          t && D(e, t),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          e
        );
      }
      function B(e) {
        var n = (function (e, n) {
          if ('object' != H(e) || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, 'string');
            if ('object' != H(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(e);
        })(e);
        return 'symbol' == H(n) ? n : String(n);
      }
      (T.styleTagTransform = w()),
        (T.setAttributes = h()),
        (T.insert = g().bind(null, 'head')),
        (T.domAPI = _()),
        (T.insertStyleElement = y()),
        l()(A.Z, T),
        A.Z && A.Z.locals && A.Z.locals;
      var F = {
          LEFT: { x: -1, y: 0 },
          RIGHT: { x: 1, y: 0 },
          UP: { x: 0, y: -1 },
          DOWN: { x: 0, y: 1 },
          ZERO: { x: 0, y: 0 },
        },
        C = {
          mapSize: { w: 40, h: 24 },
          passages: { min: 3, max: 5 },
          rooms: { min: 5, max: 10, minSize: 3, maxSize: 8 },
          boosts: { health: 50, attack: 50 },
          entity: { playerAttack: 50, enemyAttack: 10 },
          gameSpeed: 200,
        },
        R = {
          mapSize: { w: 40, h: 24 },
          passages: { min: 3, max: 5 },
          rooms: { min: 5, max: 10, minSize: 3, maxSize: 8 },
          boosts: { health: 50, attack: 25 },
          entity: { playerAttack: 25, enemyAttack: 25 },
          gameSpeed: 100,
        },
        z = function (e, n) {
          return Math.floor(Math.random() * (n - e) + e);
        },
        j = (function () {
          function e(n, t, r) {
            L(this, e), (this.cellType = n), (this.posX = t), (this.posY = r);
          }
          return (
            G(e, [
              {
                key: 'type',
                get: function () {
                  return this.cellType;
                },
              },
              {
                key: 'x',
                get: function () {
                  return this.posX;
                },
              },
              {
                key: 'y',
                get: function () {
                  return this.posY;
                },
              },
              {
                key: 'pos',
                get: function () {
                  return { x: this.posX, y: this.posY };
                },
              },
              {
                key: 'setPosition',
                value: function (e, n) {
                  (this.posX = e), (this.posY = n);
                },
              },
            ]),
            e
          );
        })(),
        V = (function (e) {
          function n(e, t) {
            return L(this, n), E(this, n, ['tileW', e, t]);
          }
          return P(n, e), G(n);
        })(j),
        U = (function (e) {
          function n(e, t) {
            return L(this, n), E(this, n, ['tile', e, t]);
          }
          return P(n, e), G(n);
        })(j),
        $ = (function (e) {
          function n(e, t, r, o, a, i) {
            var s;
            return (
              L(this, n),
              ((s = E(this, n, [e, t, r]))._health = o),
              (s._attack = a),
              (s.moveHandler = i),
              s
            );
          }
          return (
            P(n, e),
            G(n, [
              {
                key: 'attack',
                get: function () {
                  return this._attack;
                },
              },
              {
                key: 'health',
                get: function () {
                  return this._health;
                },
              },
              {
                key: 'boostAttack',
                value: function (e) {
                  this._attack = Math.min(100, e + this.attack);
                },
              },
              {
                key: 'boostHealth',
                value: function (e) {
                  this._health = Math.min(100, e + this.health);
                },
              },
              {
                key: 'damage',
                value: function (e) {
                  this._health -= e;
                },
              },
              {
                key: 'isAlive',
                value: function () {
                  return this._health > 0;
                },
              },
              {
                key: 'move',
                value: function (e, n) {
                  this.moveHandler(e, n), this.setPosition(e, n);
                },
              },
            ]),
            n
          );
        })(j),
        N = (function (e) {
          function n(e, t, r, o, a) {
            var i;
            return (
              L(this, n),
              ((i = E(this, n, ['tileP', e, t, r, o, a])).lastAttack =
                Date.now()),
              i
            );
          }
          return (
            P(n, e),
            G(n, [
              {
                key: 'attack',
                get: function () {
                  var e = Date.now();
                  return e - this.lastAttack > 500
                    ? ((this.lastAttack = e), this._attack)
                    : 0;
                },
              },
              {
                key: 'coolDown',
                get: function () {
                  return Date.now() - this.lastAttack;
                },
              },
            ]),
            n
          );
        })($),
        Z = (function (e) {
          function n(e, t, r, o, a, i, s) {
            var u;
            return (
              L(this, n),
              ((u = E(this, n, ['tileE', e, t, r, o, i]))._id = a),
              (u._onDespawn = s),
              (u.moveHandler = i),
              (u.lastAttack = Date.now()),
              u
            );
          }
          return (
            P(n, e),
            G(n, [
              {
                key: 'id',
                get: function () {
                  return this._id;
                },
                set: function (e) {
                  this._id = e;
                },
              },
              {
                key: 'attack',
                get: function () {
                  var e = Date.now();
                  return e - this.lastAttack > 250
                    ? ((this.lastAttack = e), this._attack)
                    : Math.round(this._attack / 2);
                },
              },
              {
                key: 'move',
                value: function (e, n) {
                  this.moveHandler(this.id, e, n), this.setPosition(e, n);
                },
              },
              {
                key: 'despawn',
                value: function () {
                  this._onDespawn(this.id);
                },
              },
            ]),
            n
          );
        })($),
        W = (function (e) {
          function n(e, t, r, o) {
            var a;
            return L(this, n), ((a = E(this, n, [e, t, r])).boostValue = o), a;
          }
          return (
            P(n, e),
            G(n, [
              {
                key: 'value',
                get: function () {
                  return this.boostValue;
                },
              },
            ]),
            n
          );
        })(j),
        X = (function (e) {
          function n(e, t, r) {
            return L(this, n), E(this, n, ['tileHP', e, t, r]);
          }
          return P(n, e), G(n);
        })(W),
        q = (function (e) {
          function n(e, t, r) {
            return L(this, n), E(this, n, ['tileSW', e, t, r]);
          }
          return P(n, e), G(n);
        })(W),
        Y = (function () {
          function e(n, t, r, o, a) {
            L(this, e),
              (this.mapSize = n),
              (this.passages = t),
              (this.rooms = r),
              (this.boostConfig = o),
              (this.entityСonfig = a),
              (this.gameMap = []),
              (this.player = null),
              (this.enemys = []),
              (this.onMovePlayer = this.onMovePlayer.bind(this)),
              (this.onMoveEnemy = this.onMoveEnemy.bind(this)),
              (this.onDespawnEnemy = this.onDespawnEnemy.bind(this));
          }
          return (
            G(e, [
              {
                key: 'generate',
                value: function () {
                  var e = this;
                  this.gameMap = Array.from(Array(this.mapSize.h), function () {
                    return new Array(e.mapSize.w).fill(new V());
                  });
                  for (
                    var n = z(this.rooms.min, this.rooms.max), t = [], r = 0;
                    r < n;
                    r++
                  ) {
                    var o = z(this.rooms.minSize, this.rooms.maxSize),
                      a = z(this.rooms.minSize, this.rooms.maxSize),
                      i = z(0, this.mapSize.h - a - 1),
                      s = z(0, this.mapSize.w - o - 1);
                    t.push({ width: o, height: a, row: i, col: s });
                    for (var u = i; u < i + a; u++)
                      for (var d = s; d < s + o; d++)
                        this.gameMap[u][d] = new U(d, u);
                  }
                  var c = function (n) {
                      e.gameMap = e.gameMap.map(function (e, t) {
                        return e.map(function (e, r) {
                          return r === n ? new U(r, t) : e;
                        });
                      });
                    },
                    l = function (n) {
                      e.gameMap = e.gameMap.map(function (t, r) {
                        return r === n
                          ? new Array(e.mapSize.w).fill(new U())
                          : t;
                      });
                    },
                    p = z(this.passages.min, this.passages.max),
                    _ = z(this.passages.min, this.passages.max);
                  t.forEach(function (e) {
                    if (0 === z(0, 2)) {
                      var n = z(e.col + 1, e.col + e.width - 1);
                      c(n), p--;
                    } else {
                      var t = z(e.row + 1, e.row + e.height - 1);
                      l(t), _--;
                    }
                  });
                  for (var f = 0; f < p; f++) {
                    var g = z(0, this.mapSize.w);
                    c(g);
                  }
                  for (var m = 0; m < _; m++) {
                    var h = z(0, this.mapSize.h);
                    l(h);
                  }
                },
              },
              {
                key: 'spawnEntity',
                value: function () {
                  var e = this._getEmptyCells();
                  !(function (e) {
                    for (var n = e.length - 1; n > 0; n--) {
                      var t = Math.floor(Math.random() * (n + 1)),
                        r = [e[t], e[n]];
                      (e[n] = r[0]), (e[t] = r[1]);
                    }
                  })(e);
                  for (var n = 0; n < 10; n++) {
                    var t = e.pop(),
                      r = t.x,
                      o = t.y;
                    this.gameMap[o][r] = new X(r, o, this.boostConfig.health);
                  }
                  for (var a = 0; a < 2; a++) {
                    var i = e.pop(),
                      s = i.x,
                      u = i.y;
                    this.gameMap[u][s] = new q(s, u, this.boostConfig.attack);
                  }
                  for (var d = 0; d < 10; d++) {
                    var c = e.pop(),
                      l = c.x,
                      p = c.y,
                      _ = new Z(
                        l,
                        p,
                        100,
                        this.entityСonfig.enemyAttack,
                        d,
                        this.onMoveEnemy,
                        this.onDespawnEnemy,
                      );
                    (this.gameMap[p][l] = _), this.enemys.push(_);
                  }
                  var f = e.pop(),
                    g = f.x,
                    m = f.y;
                  (this.player = new N(
                    g,
                    m,
                    100,
                    this.entityСonfig.playerAttack,
                    this.onMovePlayer,
                  )),
                    (this.gameMap[m][g] = this.player);
                },
              },
              {
                key: 'onMovePlayer',
                value: function (e, n) {
                  var t = this.player.pos,
                    r = t.x,
                    o = t.y;
                  (this.gameMap[o][r] = new U(r, o)),
                    (this.gameMap[n][e] = this.player);
                },
              },
              {
                key: 'onMoveEnemy',
                value: function (e, n, t) {
                  var r = this.enemys[e].pos,
                    o = r.x,
                    a = r.y;
                  (this.gameMap[a][o] = new U(o, a)),
                    (this.gameMap[t][n] = this.enemys[e]);
                },
              },
              {
                key: 'onDespawnEnemy',
                value: function (e) {
                  var n = this.enemys[e],
                    t = n.x,
                    r = n.y;
                  (this.gameMap[r][t] = new U(t, r)),
                    (this.enemys = this.enemys.filter(function (n) {
                      return n.id !== e;
                    })),
                    this.enemys.forEach(function (e, n) {
                      return (e.id = n);
                    });
                },
              },
              {
                key: 'existCell',
                value: function (e, n) {
                  return (
                    e >= 0 && e < this.mapSize.w && n >= 0 && n < this.mapSize.h
                  );
                },
              },
              {
                key: '_getEmptyCells',
                value: function () {
                  var e = [];
                  return (
                    this.gameMap.forEach(function (n, t) {
                      return n.forEach(function (n, r) {
                        return 'tile' === n.cellType && e.push({ x: r, y: t });
                      });
                    }),
                    e
                  );
                },
              },
              {
                key: 'getCell',
                value: function (e, n) {
                  return this.gameMap[n][e];
                },
              },
              {
                key: 'getAroundEntity',
                value: function (e, n) {
                  var t = this,
                    r = [];
                  return (
                    [F.DOWN, F.UP, F.RIGHT, F.LEFT].forEach(function (o) {
                      var a = o.x + e,
                        i = o.y + n;
                      if (t.existCell(a, i)) {
                        var s = t.getCell(a, i);
                        ('tileP' !== s.type && 'tileE' !== s.type) || r.push(s);
                      }
                    }),
                    r
                  );
                },
              },
              {
                key: 'map',
                get: function () {
                  return this.gameMap;
                },
              },
              {
                key: 'enemysCount',
                get: function () {
                  return this.enemys.length;
                },
              },
            ]),
            e
          );
        })(),
        Q = (function () {
          function e(n, t) {
            L(this, e),
              (this.map = new Y(
                n.mapSize,
                n.passages,
                n.rooms,
                n.boosts,
                n.entity,
              )),
              (this.soundEngine = new d()),
              (this.playerDirection = F.ZERO),
              (this.playerAttack = !1),
              (this.onEndGame = t),
              (this.gameLoopInterval = null),
              (this.gameSpeed = n.gameSpeed),
              (this.gameLoop = this.gameLoop.bind(this)),
              (this.keyUp = this.keyUp.bind(this)),
              (this.keyDown = this.keyDown.bind(this)),
              (this.render = this.render.bind(this));
          }
          return (
            G(e, [
              {
                key: 'init',
                value: function () {
                  this.soundEngine.init(),
                    this.soundEngine.playMusic(),
                    this.map.generate(),
                    this.map.spawnEntity(),
                    this.render(),
                    document.addEventListener('keyup', this.keyUp),
                    document.addEventListener('keydown', this.keyDown),
                    (this.gameLoopInterval = setInterval(
                      this.gameLoop,
                      this.gameSpeed,
                    ));
                },
              },
              {
                key: 'movePlayer',
                value: function (e) {
                  var n = this,
                    t = this.map.player,
                    r = t.x + e.x,
                    o = t.y + e.y;
                  this.map.existCell(r, o) &&
                    'tileW' !== this.map.getCell(r, o).type &&
                    'tileE' !== this.map.getCell(r, o).type &&
                    ('tileHP' === this.map.getCell(r, o).type &&
                      (t.boostHealth(this.map.getCell(r, o).value),
                      this.soundEngine.bounce()),
                    'tileSW' === this.map.getCell(r, o).type &&
                      (t.boostAttack(this.map.getCell(r, o).value),
                      this.soundEngine.bounce()),
                    t.move(r, o),
                    this.playerAttack &&
                      this.map.getAroundEntity(r, o).forEach(function (e) {
                        'tileE' === e.type &&
                          (e.damage(t.attack),
                          e.health <= 0 && (e.despawn(), n.soundEngine.shot()));
                      }));
                },
              },
              {
                key: 'moveEnemys',
                value: function () {
                  var e = this;
                  this.map.enemys.forEach(function (n) {
                    var t = (function () {
                        switch (z(0, 4)) {
                          case 0:
                            return F.LEFT;
                          case 1:
                            return F.RIGHT;
                          case 2:
                            return F.UP;
                          case 3:
                            return F.DOWN;
                        }
                      })(),
                      r = n.x + t.x,
                      o = n.y + t.y;
                    e.map.existCell(r, o) &&
                      'tile' === e.map.getCell(r, o).type &&
                      (n.move(r, o),
                      e.map.getAroundEntity(r, o).forEach(function (e) {
                        'tileP' === e.type && e.damage(n.attack);
                      }));
                  });
                },
              },
              {
                key: 'gameLoop',
                value: function () {
                  this.movePlayer(this.playerDirection),
                    this.moveEnemys(),
                    this.map.player.health <= 0
                      ? this.stopGame(!1)
                      : 0 === this.map.enemysCount
                        ? this.stopGame(!0)
                        : this.render();
                },
              },
              {
                key: 'stopGame',
                value: function (e) {
                  e || this.soundEngine.explosion(),
                    this.soundEngine.stopMusic(),
                    clearInterval(this.gameLoopInterval),
                    this.onEndGame(e);
                },
              },
              {
                key: 'keyUp',
                value: function () {
                  (this.playerDirection = F.ZERO), (this.playerAttack = !1);
                },
              },
              {
                key: 'keyDown',
                value: function (e) {
                  switch (e.key) {
                    case 'w':
                      this.playerDirection = F.UP;
                      break;
                    case 's':
                      this.playerDirection = F.DOWN;
                      break;
                    case 'a':
                      this.playerDirection = F.LEFT;
                      break;
                    case 'd':
                      this.playerDirection = F.RIGHT;
                      break;
                    case ' ':
                      this.playerAttack = !0;
                  }
                  console.log(this.playerDirection);
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    n = document.getElementById('field');
                  (n.textContent = ''),
                    this.map.map.forEach(function (t) {
                      var r = document.createElement('div');
                      (r.className = 'row'),
                        t.forEach(function (e) {
                          var n = document.createElement('div');
                          (n.className = 'tile '.concat(e.cellType)),
                            ('tileP' !== e.type && 'tileE' !== e.type) ||
                              (n.innerHTML =
                                '<div class="health" style="width: '.concat(
                                  e.health,
                                  '%;"></div> ',
                                )),
                            r.appendChild(n);
                        }),
                        n.appendChild(r);
                      var o = document.getElementById('cooldown'),
                        a =
                          5 *
                          Math.round((0.2 * e.map.player.coolDown * 100) / 1e3);
                      (o.className = 'progress-radial progress-'.concat(a)),
                        (document.getElementById('player-health').innerText =
                          e.map.player.health);
                      var i = document.getElementById('player-attack');
                      (i.innerText = e.map.player._attack),
                        (i.style.color = e.playerAttack ? 'red' : 'white');
                    });
                },
              },
            ]),
            e
          );
        })();
      new ((function () {
        function e() {
          L(this, e),
            (this.modal = null),
            (this.gameConfig = {}),
            (this.game = null),
            (this.hardcore = !1),
            (this.nextRound = this.nextRound.bind(this)),
            (this.startGame = this.startGame.bind(this)),
            (this.onEndGame = this.onEndGame.bind(this)),
            (this.changeGameModeHandler =
              this.changeGameModeHandler.bind(this));
        }
        return (
          G(e, [
            {
              key: 'init',
              value: function () {
                this.showModal('start'),
                  document
                    .getElementById('start-game')
                    .addEventListener('click', this.startGame);
                var e,
                  n = (function (e, n) {
                    var t =
                      ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                      e['@@iterator'];
                    if (!t) {
                      if (
                        Array.isArray(e) ||
                        (t = (function (e, n) {
                          if (e) {
                            if ('string' == typeof e) return S(e, n);
                            var t = Object.prototype.toString
                              .call(e)
                              .slice(8, -1);
                            return (
                              'Object' === t &&
                                e.constructor &&
                                (t = e.constructor.name),
                              'Map' === t || 'Set' === t
                                ? Array.from(e)
                                : 'Arguments' === t ||
                                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                      t,
                                    )
                                  ? S(e, n)
                                  : void 0
                            );
                          }
                        })(e)) ||
                        (n && e && 'number' == typeof e.length)
                      ) {
                        t && (e = t);
                        var r = 0,
                          o = function () {};
                        return {
                          s: o,
                          n: function () {
                            return r >= e.length
                              ? { done: !0 }
                              : { done: !1, value: e[r++] };
                          },
                          e: function (e) {
                            throw e;
                          },
                          f: o,
                        };
                      }
                      throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                      );
                    }
                    var a,
                      i = !0,
                      s = !1;
                    return {
                      s: function () {
                        t = t.call(e);
                      },
                      n: function () {
                        var e = t.next();
                        return (i = e.done), e;
                      },
                      e: function (e) {
                        (s = !0), (a = e);
                      },
                      f: function () {
                        try {
                          i || null == t.return || t.return();
                        } finally {
                          if (s) throw a;
                        }
                      },
                    };
                  })(document.getElementsByClassName('modal-button-nextround'));
                try {
                  for (n.s(); !(e = n.n()).done; )
                    e.value.addEventListener('click', this.nextRound);
                } catch (e) {
                  n.e(e);
                } finally {
                  n.f();
                }
                document
                  .getElementById('hardcore')
                  .addEventListener('change', this.changeGameModeHandler);
              },
            },
            {
              key: 'changeGameModeHandler',
              value: function (e) {
                this.hardcore = e.currentTarget.checked;
              },
            },
            {
              key: 'nextRound',
              value: function () {
                this.showModal('start');
              },
            },
            {
              key: 'startGame',
              value: function () {
                this.closeModal();
                var e = this.hardcore ? R : C;
                (this.game = new Q(e, this.onEndGame)), this.game.init();
              },
            },
            {
              key: 'onEndGame',
              value: function (e) {
                e ? this.showModal('win') : this.showModal('loss');
              },
            },
            {
              key: 'showModal',
              value: function (e) {
                null !== this.modal && this.closeModal(),
                  (this.modal = e),
                  (document.getElementById('modal-'.concat(e)).style.display =
                    'block');
              },
            },
            {
              key: 'closeModal',
              value: function () {
                document.getElementById(
                  'modal-'.concat(this.modal),
                ).style.display = 'none';
              },
            },
          ]),
          e
        );
      })())().init();
    })();
})();
