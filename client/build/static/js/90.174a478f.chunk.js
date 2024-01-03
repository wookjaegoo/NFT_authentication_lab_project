'use strict'
;(self.webpackChunktruffle_client = self.webpackChunktruffle_client || []).push(
  [
    [90],
    {
      52090: function (e, t, n) {
        n.r(t),
        n.d(t, {
          Web3Modal: function () {
            return h
          }
        })
        const r = n(74165)
        const o = n(15861)
        const i = n(15671)
        const a = n(43144)
        const c = n(37762)
        const u = n(63475)
        const s = Object.defineProperty
        const l = Object.getOwnPropertySymbols
        const f = Object.prototype.hasOwnProperty
        const b = Object.prototype.propertyIsEnumerable
        const d = function (e, t, n) {
          return t in e
            ? s(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n
            })
            : (e[t] = n)
        }
        const p = function (e, t) {
          for (var n in t || (t = {})) f.call(t, n) && d(e, n, t[n])
          if (l) {
            let r
            const o = (0, c.Z)(l(t))
            try {
              for (o.s(); !(r = o.n()).done;) {
                n = r.value
                b.call(t, n) && d(e, n, t[n])
              }
            } catch (i) {
              o.e(i)
            } finally {
              o.f()
            }
          }
          return e
        }
        var h = (function () {
          function e (t) {
            ;(0, i.Z)(this, e),
            (this.openModal = u.jb.open),
            (this.closeModal = u.jb.close),
            (this.subscribeModal = u.jb.subscribe),
            (this.setTheme = u.t0.setThemeConfig),
            u.t0.setConfig(p({ enableStandaloneMode: !0 }, t)),
            this.initUi()
          }
          return (
            (0, a.Z)(e, [
              {
                key: 'initUi',
                value: (function () {
                  const e = (0, o.Z)(
                    (0, r.Z)().mark(function e () {
                      let t
                      return (0, r.Z)().wrap(function (e) {
                        for (;;) {
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!(typeof window < 'u')) {
                                e.next = 5
                                break
                              }
                              return (
                                (e.next = 3), n.e(265).then(n.bind(n, 22265))
                              )
                            case 3:
                              ;(t = document.createElement('w3m-modal')),
                              document.body.insertAdjacentElement(
                                'beforeend',
                                t
                              ),
                              u.zb.setIsUiLoaded(!0)
                            case 5:
                            case 'end':
                              return e.stop()
                          }
                        }
                      }, e)
                    })
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })()
              }
            ]),
            e
          )
        })()
      }
    }
  ]
)
// # sourceMappingURL=90.174a478f.chunk.js.map
