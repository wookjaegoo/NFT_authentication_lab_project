;(self.webpackChunktruffle_client = self.webpackChunktruffle_client || []).push(
  [
    [485],
    {
      82177: function (e, t, n) {
        'use strict'
        n.d(t, {
          k: function () {
            return l
          },
          Z: function () {
            return d
          }
        })
        const r = n(74165)
        const o = n(15861)
        const i = n(15671)
        const s = n(43144)
        const a = n(77708)
        const c = n(86547)
        const u = n.n(c)
        function h (e) {
          return typeof e === 'string' ? e : JSON.stringify(e)
        }
        const f = n(21420)
        const p = {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'POST'
        }
        var l = (function () {
          function e (t) {
            if (
              ((0, i.Z)(this, e),
              (this.url = t),
              (this.events = new a.EventEmitter()),
              (this.isAvailable = !1),
              (this.registering = !1),
              !(0, f.isHttpUrl)(t))
            ) {
              throw new Error(
                'Provided URL is not compatible with HTTP connection: '.concat(
                  t
                )
              )
            }
            this.url = t
          }
          return (
            (0, s.Z)(e, [
              {
                key: 'connected',
                get: function () {
                  return this.isAvailable
                }
              },
              {
                key: 'connecting',
                get: function () {
                  return this.registering
                }
              },
              {
                key: 'on',
                value: function (e, t) {
                  this.events.on(e, t)
                }
              },
              {
                key: 'once',
                value: function (e, t) {
                  this.events.once(e, t)
                }
              },
              {
                key: 'off',
                value: function (e, t) {
                  this.events.off(e, t)
                }
              },
              {
                key: 'removeListener',
                value: function (e, t) {
                  this.events.removeListener(e, t)
                }
              },
              {
                key: 'open',
                value: (function () {
                  const e = (0, o.Z)(
                    (0, r.Z)().mark(function e () {
                      let t
                      const n = arguments
                      return (0, r.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t =
                                      n.length > 0 && void 0 !== n[0]
                                        ? n[0]
                                        : this.url),
                                  (e.next = 3),
                                  this.register(t)
                                )
                              case 3:
                              case 'end':
                                return e.stop()
                            }
                          }
                        },
                        e,
                        this
                      )
                    })
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'close',
                value: (function () {
                  const e = (0, o.Z)(
                    (0, r.Z)().mark(function e () {
                      return (0, r.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this.isAvailable) {
                                  e.next = 2
                                  break
                                }
                                throw new Error('Connection already closed')
                              case 2:
                                this.onClose()
                              case 3:
                              case 'end':
                                return e.stop()
                            }
                          }
                        },
                        e,
                        this
                      )
                    })
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'send',
                value: (function () {
                  const e = (0, o.Z)(
                    (0, r.Z)().mark(function e (t, n) {
                      let o, i, s
                      return (0, r.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this.isAvailable) {
                                  e.next = 3
                                  break
                                }
                                return (e.next = 3), this.register()
                              case 3:
                                return (
                                  (e.prev = 3),
                                  (o = h(t)),
                                  (e.next = 7),
                                  u()(
                                    this.url,
                                    Object.assign(Object.assign({}, p), {
                                      body: o
                                    })
                                  )
                                )
                              case 7:
                                return (i = e.sent), (e.next = 10), i.json()
                              case 10:
                                ;(s = e.sent),
                                this.onPayload({ data: s }),
                                (e.next = 17)
                                break
                              case 14:
                                ;(e.prev = 14),
                                (e.t0 = e.catch(3)),
                                this.onError(t.id, e.t0)
                              case 17:
                              case 'end':
                                return e.stop()
                            }
                          }
                        },
                        e,
                        this,
                        [[3, 14]]
                      )
                    })
                  )
                  return function (t, n) {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'register',
                value: (function () {
                  const e = (0, o.Z)(
                    (0, r.Z)().mark(function e () {
                      let t
                      let n
                      let o
                      let i
                      const s = this
                      const a = arguments
                      return (0, r.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((t =
                                      a.length > 0 && void 0 !== a[0]
                                        ? a[0]
                                        : this.url),
                                  (0, f.isHttpUrl)(t))
                                ) {
                                  e.next = 3
                                  break
                                }
                                throw new Error(
                                  'Provided URL is not compatible with HTTP connection: '.concat(
                                    t
                                  )
                                )
                              case 3:
                                if (!this.registering) {
                                  e.next = 7
                                  break
                                }
                                return (
                                  (n = this.events.getMaxListeners()),
                                  (this.events.listenerCount(
                                    'register_error'
                                  ) >= n ||
                                      this.events.listenerCount('open') >= n) &&
                                      this.events.setMaxListeners(n + 1),
                                  e.abrupt(
                                    'return',
                                    new Promise(function (e, t) {
                                      s.events.once(
                                        'register_error',
                                        function (e) {
                                          s.resetMaxListeners(), t(e)
                                        }
                                      ),
                                      s.events.once('open', function () {
                                        if (
                                          (s.resetMaxListeners(),
                                          typeof s.isAvailable ===
                                                'undefined')
                                        ) {
                                          return t(
                                            new Error(
                                              'HTTP connection is missing or invalid'
                                            )
                                          )
                                        }
                                        e()
                                      })
                                    })
                                  )
                                )
                              case 7:
                                return (
                                  (this.url = t),
                                  (this.registering = !0),
                                  (e.prev = 9),
                                  (o = h({
                                    id: 1,
                                    jsonrpc: '2.0',
                                    method: 'test',
                                    params: []
                                  })),
                                  (e.next = 13),
                                  u()(
                                    t,
                                    Object.assign(Object.assign({}, p), {
                                      body: o
                                    })
                                  )
                                )
                              case 13:
                                this.onOpen(), (e.next = 22)
                                break
                              case 16:
                                throw (
                                  ((e.prev = 16),
                                  (e.t0 = e.catch(9)),
                                  (i = this.parseError(e.t0)),
                                  this.events.emit('register_error', i),
                                  this.onClose(),
                                  i)
                                )
                              case 22:
                              case 'end':
                                return e.stop()
                            }
                          }
                        },
                        e,
                        this,
                        [[9, 16]]
                      )
                    })
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'onOpen',
                value: function () {
                  ;(this.isAvailable = !0),
                  (this.registering = !1),
                  this.events.emit('open')
                }
              },
              {
                key: 'onClose',
                value: function () {
                  ;(this.isAvailable = !1),
                  (this.registering = !1),
                  this.events.emit('close')
                }
              },
              {
                key: 'onPayload',
                value: function (e) {
                  if (typeof e.data !== 'undefined') {
                    const t =
                        typeof e.data === 'string'
                          ? (function (e) {
                              if (typeof e !== 'string') {
                                throw new Error(
                                  'Cannot safe json parse value of type '.concat(
                                    typeof e
                                  )
                                )
                              }
                              try {
                                return JSON.parse(e)
                              } catch (t) {
                                return e
                              }
                            })(e.data)
                          : e.data
                    this.events.emit('payload', t)
                  }
                }
              },
              {
                key: 'onError',
                value: function (e, t) {
                  const n = this.parseError(t)
                  const r = n.message || n.toString()
                  const o = (0, f.formatJsonRpcError)(e, r)
                  this.events.emit('payload', o)
                }
              },
              {
                key: 'parseError',
                value: function (e) {
                  const t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : this.url
                  return (0, f.parseConnectionError)(e, t, 'HTTP')
                }
              },
              {
                key: 'resetMaxListeners',
                value: function () {
                  this.events.getMaxListeners() > 10 &&
                      this.events.setMaxListeners(10)
                }
              }
            ]),
            e
          )
        })()
        var d = l
      },
      86547: function (e, t) {
        const n = typeof self !== 'undefined' ? self : this
        const r = (function () {
          function e () {
            ;(this.fetch = !1), (this.DOMException = n.DOMException)
          }
          return (e.prototype = n), new e()
        })()
        !(function (e) {
          !(function (t) {
            const n = {
              searchParams: 'URLSearchParams' in e,
              iterable: 'Symbol' in e && 'iterator' in Symbol,
              blob:
                'FileReader' in e &&
                'Blob' in e &&
                (function () {
                  try {
                    return new Blob(), !0
                  } catch (e) {
                    return !1
                  }
                })(),
              formData: 'FormData' in e,
              arrayBuffer: 'ArrayBuffer' in e
            }
            if (n.arrayBuffer) {
              const r = [
                '[object Int8Array]',
                '[object Uint8Array]',
                '[object Uint8ClampedArray]',
                '[object Int16Array]',
                '[object Uint16Array]',
                '[object Int32Array]',
                '[object Uint32Array]',
                '[object Float32Array]',
                '[object Float64Array]'
              ]
              var o =
                  ArrayBuffer.isView ||
                  function (e) {
                    return (
                      e && r.indexOf(Object.prototype.toString.call(e)) > -1
                    )
                  }
            }
            function i (e) {
              if (
                (typeof e !== 'string' && (e = String(e)),
                /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))
              ) { throw new TypeError('Invalid character in header field name') }
              return e.toLowerCase()
            }
            function s (e) {
              return typeof e !== 'string' && (e = String(e)), e
            }
            function a (e) {
              const t = {
                next: function () {
                  const t = e.shift()
                  return { done: void 0 === t, value: t }
                }
              }
              return (
                n.iterable &&
                  (t[Symbol.iterator] = function () {
                    return t
                  }),
                t
              )
            }
            function c (e) {
              ;(this.map = {}),
              e instanceof c
                ? e.forEach(function (e, t) {
                  this.append(t, e)
                }, this)
                : Array.isArray(e)
                  ? e.forEach(function (e) {
                    this.append(e[0], e[1])
                  }, this)
                  : e &&
                      Object.getOwnPropertyNames(e).forEach(function (t) {
                        this.append(t, e[t])
                      }, this)
            }
            function u (e) {
              if (e.bodyUsed) { return Promise.reject(new TypeError('Already read')) }
              e.bodyUsed = !0
            }
            function h (e) {
              return new Promise(function (t, n) {
                ;(e.onload = function () {
                  t(e.result)
                }),
                (e.onerror = function () {
                  n(e.error)
                })
              })
            }
            function f (e) {
              const t = new FileReader()
              const n = h(t)
              return t.readAsArrayBuffer(e), n
            }
            function p (e) {
              if (e.slice) return e.slice(0)
              const t = new Uint8Array(e.byteLength)
              return t.set(new Uint8Array(e)), t.buffer
            }
            function l () {
              return (
                (this.bodyUsed = !1),
                (this._initBody = function (e) {
                  let t
                  ;(this._bodyInit = e),
                  e
                    ? typeof e === 'string'
                      ? (this._bodyText = e)
                      : n.blob && Blob.prototype.isPrototypeOf(e)
                        ? (this._bodyBlob = e)
                        : n.formData && FormData.prototype.isPrototypeOf(e)
                          ? (this._bodyFormData = e)
                          : n.searchParams &&
                                URLSearchParams.prototype.isPrototypeOf(e)
                            ? (this._bodyText = e.toString())
                            : n.arrayBuffer &&
                                  n.blob &&
                                  (t = e) &&
                                  DataView.prototype.isPrototypeOf(t)
                              ? ((this._bodyArrayBuffer = p(e.buffer)),
                                (this._bodyInit = new Blob([
                                  this._bodyArrayBuffer
                                ])))
                              : n.arrayBuffer &&
                                    (ArrayBuffer.prototype.isPrototypeOf(e) ||
                                      o(e))
                                ? (this._bodyArrayBuffer = p(e))
                                : (this._bodyText = e =
                                      Object.prototype.toString.call(e))
                    : (this._bodyText = ''),
                  this.headers.get('content-type') ||
                      (typeof e === 'string'
                        ? this.headers.set(
                          'content-type',
                          'text/plain;charset=UTF-8'
                        )
                        : this._bodyBlob && this._bodyBlob.type
                          ? this.headers.set(
                            'content-type',
                            this._bodyBlob.type
                          )
                          : n.searchParams &&
                            URLSearchParams.prototype.isPrototypeOf(e) &&
                            this.headers.set(
                              'content-type',
                              'application/x-www-form-urlencoded;charset=UTF-8'
                            ))
                }),
                n.blob &&
                  ((this.blob = function () {
                    const e = u(this)
                    if (e) return e
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob)
                    if (this._bodyArrayBuffer) { return Promise.resolve(new Blob([this._bodyArrayBuffer])) }
                    if (this._bodyFormData) { throw new Error('could not read FormData body as blob') }
                    return Promise.resolve(new Blob([this._bodyText]))
                  }),
                  (this.arrayBuffer = function () {
                    return this._bodyArrayBuffer
                      ? u(this) || Promise.resolve(this._bodyArrayBuffer)
                      : this.blob().then(f)
                  })),
                (this.text = function () {
                  const e = u(this)
                  if (e) return e
                  if (this._bodyBlob) {
                    return (function (e) {
                      const t = new FileReader()
                      const n = h(t)
                      return t.readAsText(e), n
                    })(this._bodyBlob)
                  }
                  if (this._bodyArrayBuffer) {
                    return Promise.resolve(
                      (function (e) {
                        for (
                          var t = new Uint8Array(e),
                            n = new Array(t.length),
                            r = 0;
                          r < t.length;
                          r++
                        ) { n[r] = String.fromCharCode(t[r]) }
                        return n.join('')
                      })(this._bodyArrayBuffer)
                    )
                  }
                  if (this._bodyFormData) { throw new Error('could not read FormData body as text') }
                  return Promise.resolve(this._bodyText)
                }),
                n.formData &&
                  (this.formData = function () {
                    return this.text().then(v)
                  }),
                (this.json = function () {
                  return this.text().then(JSON.parse)
                }),
                this
              )
            }
            ;(c.prototype.append = function (e, t) {
              ;(e = i(e)), (t = s(t))
              const n = this.map[e]
              this.map[e] = n ? n + ', ' + t : t
            }),
            (c.prototype.delete = function (e) {
              delete this.map[i(e)]
            }),
            (c.prototype.get = function (e) {
              return (e = i(e)), this.has(e) ? this.map[e] : null
            }),
            (c.prototype.has = function (e) {
              return this.map.hasOwnProperty(i(e))
            }),
            (c.prototype.set = function (e, t) {
              this.map[i(e)] = s(t)
            }),
            (c.prototype.forEach = function (e, t) {
              for (const n in this.map) { this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this) }
            }),
            (c.prototype.keys = function () {
              const e = []
              return (
                this.forEach(function (t, n) {
                  e.push(n)
                }),
                a(e)
              )
            }),
            (c.prototype.values = function () {
              const e = []
              return (
                this.forEach(function (t) {
                  e.push(t)
                }),
                a(e)
              )
            }),
            (c.prototype.entries = function () {
              const e = []
              return (
                this.forEach(function (t, n) {
                  e.push([n, t])
                }),
                a(e)
              )
            }),
            n.iterable && (c.prototype[Symbol.iterator] = c.prototype.entries)
            const d = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']
            function y (e, t) {
              let n = (t = t || {}).body
              if (e instanceof y) {
                if (e.bodyUsed) throw new TypeError('Already read')
                ;(this.url = e.url),
                (this.credentials = e.credentials),
                t.headers || (this.headers = new c(e.headers)),
                (this.method = e.method),
                (this.mode = e.mode),
                (this.signal = e.signal),
                n ||
                    e._bodyInit == null ||
                    ((n = e._bodyInit), (e.bodyUsed = !0))
              } else this.url = String(e)
              if (
                ((this.credentials =
                  t.credentials || this.credentials || 'same-origin'),
                (!t.headers && this.headers) ||
                  (this.headers = new c(t.headers)),
                (this.method = (function (e) {
                  const t = e.toUpperCase()
                  return d.indexOf(t) > -1 ? t : e
                })(t.method || this.method || 'GET')),
                (this.mode = t.mode || this.mode || null),
                (this.signal = t.signal || this.signal),
                (this.referrer = null),
                (this.method === 'GET' || this.method === 'HEAD') && n)
              ) { throw new TypeError('Body not allowed for GET or HEAD requests') }
              this._initBody(n)
            }
            function v (e) {
              const t = new FormData()
              return (
                e
                  .trim()
                  .split('&')
                  .forEach(function (e) {
                    if (e) {
                      const n = e.split('=')
                      const r = n.shift().replace(/\+/g, ' ')
                      const o = n.join('=').replace(/\+/g, ' ')
                      t.append(decodeURIComponent(r), decodeURIComponent(o))
                    }
                  }),
                t
              )
            }
            function b (e) {
              const t = new c()
              return (
                e
                  .replace(/\r?\n[\t ]+/g, ' ')
                  .split(/\r?\n/)
                  .forEach(function (e) {
                    const n = e.split(':')
                    const r = n.shift().trim()
                    if (r) {
                      const o = n.join(':').trim()
                      t.append(r, o)
                    }
                  }),
                t
              )
            }
            function m (e, t) {
              t || (t = {}),
              (this.type = 'default'),
              (this.status = void 0 === t.status ? 200 : t.status),
              (this.ok = this.status >= 200 && this.status < 300),
              (this.statusText = 'statusText' in t ? t.statusText : 'OK'),
              (this.headers = new c(t.headers)),
              (this.url = t.url || ''),
              this._initBody(e)
            }
            ;(y.prototype.clone = function () {
              return new y(this, { body: this._bodyInit })
            }),
            l.call(y.prototype),
            l.call(m.prototype),
            (m.prototype.clone = function () {
              return new m(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new c(this.headers),
                url: this.url
              })
            }),
            (m.error = function () {
              const e = new m(null, { status: 0, statusText: '' })
              return (e.type = 'error'), e
            })
            const w = [301, 302, 303, 307, 308]
            ;(m.redirect = function (e, t) {
              if (w.indexOf(t) === -1) { throw new RangeError('Invalid status code') }
              return new m(null, { status: t, headers: { location: e } })
            }),
            (t.DOMException = e.DOMException)
            try {
              new t.DOMException()
            } catch (x) {
              ;(t.DOMException = function (e, t) {
                ;(this.message = e), (this.name = t)
                const n = Error(e)
                this.stack = n.stack
              }),
              (t.DOMException.prototype = Object.create(Error.prototype)),
              (t.DOMException.prototype.constructor = t.DOMException)
            }
            function g (e, r) {
              return new Promise(function (o, i) {
                const s = new y(e, r)
                if (s.signal && s.signal.aborted) { return i(new t.DOMException('Aborted', 'AbortError')) }
                const a = new XMLHttpRequest()
                function c () {
                  a.abort()
                }
                ;(a.onload = function () {
                  const e = {
                    status: a.status,
                    statusText: a.statusText,
                    headers: b(a.getAllResponseHeaders() || '')
                  }
                  e.url =
                    'responseURL' in a
                      ? a.responseURL
                      : e.headers.get('X-Request-URL')
                  const t = 'response' in a ? a.response : a.responseText
                  o(new m(t, e))
                }),
                (a.onerror = function () {
                  i(new TypeError('Network request failed'))
                }),
                (a.ontimeout = function () {
                  i(new TypeError('Network request failed'))
                }),
                (a.onabort = function () {
                  i(new t.DOMException('Aborted', 'AbortError'))
                }),
                a.open(s.method, s.url, !0),
                s.credentials === 'include'
                  ? (a.withCredentials = !0)
                  : s.credentials === 'omit' && (a.withCredentials = !1),
                'responseType' in a && n.blob && (a.responseType = 'blob'),
                s.headers.forEach(function (e, t) {
                  a.setRequestHeader(t, e)
                }),
                s.signal &&
                    (s.signal.addEventListener('abort', c),
                    (a.onreadystatechange = function () {
                      a.readyState === 4 &&
                        s.signal.removeEventListener('abort', c)
                    })),
                a.send(
                  typeof s._bodyInit === 'undefined' ? null : s._bodyInit
                )
              })
            }
            ;(g.polyfill = !0),
            e.fetch ||
                ((e.fetch = g),
                (e.Headers = c),
                (e.Request = y),
                (e.Response = m)),
            (t.Headers = c),
            (t.Request = y),
            (t.Response = m),
            (t.fetch = g),
            Object.defineProperty(t, '__esModule', { value: !0 })
          })({})
        })(r),
        (r.fetch.ponyfill = !0),
        delete r.fetch.polyfill
        const o = r
        ;((t = o.fetch).default = o.fetch),
        (t.fetch = o.fetch),
        (t.Headers = o.Headers),
        (t.Request = o.Request),
        (t.Response = o.Response),
        (e.exports = t)
      },
      96153: function (e, t, n) {
        'use strict'
        n.d(t, {
          r: function () {
            return f
          }
        })
        const r = n(74165)
        const o = n(15861)
        const i = n(15671)
        const s = n(43144)
        const a = n(60136)
        const c = n(29388)
        const u = n(77708)
        const h = n(21420)
        var f = (function (e) {
          ;(0, a.Z)(n, e)
          const t = (0, c.Z)(n)
          function n (e) {
            let r
            return (
              (0, i.Z)(this, n),
              ((r = t.call(this, e)).events = new u.EventEmitter()),
              (r.hasRegisteredEventListeners = !1),
              (r.connection = r.setConnection(e)),
              r.connection.connected && r.registerEventListeners(),
              r
            )
          }
          return (
            (0, s.Z)(n, [
              {
                key: 'connect',
                value: (function () {
                  const e = (0, o.Z)(
                    (0, r.Z)().mark(function e () {
                      let t
                      const n = arguments
                      return (0, r.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t =
                                      n.length > 0 && void 0 !== n[0]
                                        ? n[0]
                                        : this.connection),
                                  (e.next = 3),
                                  this.open(t)
                                )
                              case 3:
                              case 'end':
                                return e.stop()
                            }
                          }
                        },
                        e,
                        this
                      )
                    })
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'disconnect',
                value: (function () {
                  const e = (0, o.Z)(
                    (0, r.Z)().mark(function e () {
                      return (0, r.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.close()
                              case 2:
                              case 'end':
                                return e.stop()
                            }
                          }
                        },
                        e,
                        this
                      )
                    })
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'on',
                value: function (e, t) {
                  this.events.on(e, t)
                }
              },
              {
                key: 'once',
                value: function (e, t) {
                  this.events.once(e, t)
                }
              },
              {
                key: 'off',
                value: function (e, t) {
                  this.events.off(e, t)
                }
              },
              {
                key: 'removeListener',
                value: function (e, t) {
                  this.events.removeListener(e, t)
                }
              },
              {
                key: 'request',
                value: (function () {
                  const e = (0, o.Z)(
                    (0, r.Z)().mark(function e (t, n) {
                      return (0, r.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return e.abrupt(
                                  'return',
                                  this.requestStrict(
                                    (0, h.formatJsonRpcRequest)(
                                      t.method,
                                      t.params || []
                                    ),
                                    n
                                  )
                                )
                              case 1:
                              case 'end':
                                return e.stop()
                            }
                          }
                        },
                        e,
                        this
                      )
                    })
                  )
                  return function (t, n) {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'requestStrict',
                value: (function () {
                  const e = (0, o.Z)(
                    (0, r.Z)().mark(function e (t, n) {
                      const i = this
                      return (0, r.Z)().wrap(function (e) {
                        for (;;) {
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt(
                                'return',
                                new Promise(
                                  (function () {
                                    const e = (0, o.Z)(
                                      (0, r.Z)().mark(function e (o, s) {
                                        return (0, r.Z)().wrap(
                                          function (e) {
                                            for (;;) {
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  if (
                                                    i.connection.connected
                                                  ) {
                                                    e.next = 9
                                                    break
                                                  }
                                                  return (
                                                    (e.prev = 1),
                                                    (e.next = 4),
                                                    i.open()
                                                  )
                                                case 4:
                                                  e.next = 9
                                                  break
                                                case 6:
                                                  ;(e.prev = 6),
                                                  (e.t0 = e.catch(1)),
                                                  s(e.t0)
                                                case 9:
                                                  return (
                                                    i.events.on(
                                                      ''.concat(t.id),
                                                      function (e) {
                                                        ;(0,
                                                        h.isJsonRpcError)(e)
                                                          ? s(e.error)
                                                          : o(e.result)
                                                      }
                                                    ),
                                                    (e.prev = 10),
                                                    (e.next = 13),
                                                    i.connection.send(t, n)
                                                  )
                                                case 13:
                                                  e.next = 18
                                                  break
                                                case 15:
                                                  ;(e.prev = 15),
                                                  (e.t1 = e.catch(10)),
                                                  s(e.t1)
                                                case 18:
                                                case 'end':
                                                  return e.stop()
                                              }
                                            }
                                          },
                                          e,
                                          null,
                                          [
                                            [1, 6],
                                            [10, 15]
                                          ]
                                        )
                                      })
                                    )
                                    return function (t, n) {
                                      return e.apply(this, arguments)
                                    }
                                  })()
                                )
                              )
                            case 1:
                            case 'end':
                              return e.stop()
                          }
                        }
                      }, e)
                    })
                  )
                  return function (t, n) {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'setConnection',
                value: function () {
                  return arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : this.connection
                }
              },
              {
                key: 'onPayload',
                value: function (e) {
                  this.events.emit('payload', e),
                  (0, h.isJsonRpcResponse)(e)
                    ? this.events.emit(''.concat(e.id), e)
                    : this.events.emit('message', {
                      type: e.method,
                      data: e.params
                    })
                }
              },
              {
                key: 'open',
                value: (function () {
                  const e = (0, o.Z)(
                    (0, r.Z)().mark(function e () {
                      let t
                      const n = arguments
                      return (0, r.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((t =
                                      n.length > 0 && void 0 !== n[0]
                                        ? n[0]
                                        : this.connection),
                                  this.connection !== t ||
                                      !this.connection.connected)
                                ) {
                                  e.next = 3
                                  break
                                }
                                return e.abrupt('return')
                              case 3:
                                if (
                                  (this.connection.connected && this.close(),
                                  typeof t !== 'string')
                                ) {
                                  e.next = 8
                                  break
                                }
                                return (e.next = 7), this.connection.open(t)
                              case 7:
                                t = this.connection
                              case 8:
                                return (
                                  (this.connection = this.setConnection(t)),
                                  (e.next = 11),
                                  this.connection.open()
                                )
                              case 11:
                                this.registerEventListeners(),
                                this.events.emit('connect')
                              case 13:
                              case 'end':
                                return e.stop()
                            }
                          }
                        },
                        e,
                        this
                      )
                    })
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'close',
                value: (function () {
                  const e = (0, o.Z)(
                    (0, r.Z)().mark(function e () {
                      return (0, r.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.connection.close()
                              case 2:
                              case 'end':
                                return e.stop()
                            }
                          }
                        },
                        e,
                        this
                      )
                    })
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'registerEventListeners',
                value: function () {
                  const e = this
                  this.hasRegisteredEventListeners ||
                      (this.connection.on('payload', function (t) {
                        return e.onPayload(t)
                      }),
                      this.connection.on('close', function () {
                        return e.events.emit('disconnect')
                      }),
                      this.connection.on('error', function (t) {
                        return e.events.emit('error', t)
                      }),
                      (this.hasRegisteredEventListeners = !0))
                }
              }
            ]),
            n
          )
        })(h.IJsonRpcProvider)
      }
    }
  ]
)
// # sourceMappingURL=485.c3b08048.chunk.js.map
