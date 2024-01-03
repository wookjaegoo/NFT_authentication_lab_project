'use strict'
;(self.webpackChunktruffle_client = self.webpackChunktruffle_client || []).push(
  [
    [597],
    {
      71597: function (e, n, t) {
        t.r(n),
        t.d(n, {
          default: function () {
            return I
          }
        })
        const i = t(74165)
        const r = t(15861)
        const c = t(15671)
        const o = t(43144)
        const s = t(95904)
        const u = t.n(s)
        const a = t(96153)
        const h = t(82177)
        const d = t(40995)
        const f = t(60136)
        const v = t(29388)
        const l = t(2098)
        const p = t(48468)
        const g = t.n(p)
        const w = t(68809)
        const y = t(21420)
        const k = (function (e) {
          ;(0, f.Z)(t, e)
          const n = (0, v.Z)(t)
          function t (e) {
            let i
            return (
              (0, c.Z)(this, t),
              ((i = n.call(this)).events = new (u())()),
              (i.accounts = []),
              (i.chainId = 1),
              (i.pending = !1),
              (i.bridge = 'https://bridge.walletconnect.org'),
              (i.qrcode = !0),
              (i.qrcodeModalOptions = void 0),
              (i.opts = e),
              (i.chainId =
                  (e === null || void 0 === e ? void 0 : e.chainId) ||
                  i.chainId),
              (i.wc = i.register(e)),
              i
            )
          }
          return (
            (0, o.Z)(t, [
              {
                key: 'connected',
                get: function () {
                  return typeof this.wc !== 'undefined' && this.wc.connected
                }
              },
              {
                key: 'connecting',
                get: function () {
                  return this.pending
                }
              },
              {
                key: 'connector',
                get: function () {
                  return (this.wc = this.register(this.opts)), this.wc
                }
              },
              {
                key: 'on',
                value: function (e, n) {
                  this.events.on(e, n)
                }
              },
              {
                key: 'once',
                value: function (e, n) {
                  this.events.once(e, n)
                }
              },
              {
                key: 'off',
                value: function (e, n) {
                  this.events.off(e, n)
                }
              },
              {
                key: 'removeListener',
                value: function (e, n) {
                  this.events.removeListener(e, n)
                }
              },
              {
                key: 'open',
                value: (function () {
                  const e = (0, r.Z)(
                    (0, i.Z)().mark(function e (n) {
                      const t = this
                      return (0, i.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!this.connected) {
                                  e.next = 3
                                  break
                                }
                                return this.onOpen(), e.abrupt('return')
                              case 3:
                                return e.abrupt(
                                  'return',
                                  new Promise(function (e, i) {
                                    t.on('error', function (e) {
                                      i(e)
                                    }),
                                    t.on('open', function () {
                                      e()
                                    }),
                                    t.create(n)
                                  })
                                )
                              case 4:
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
                  return function (n) {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'close',
                value: (function () {
                  const e = (0, r.Z)(
                    (0, i.Z)().mark(function e () {
                      return (0, i.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (typeof this.wc !== 'undefined') {
                                  e.next = 2
                                  break
                                }
                                return e.abrupt('return')
                              case 2:
                                this.wc.connected && this.wc.killSession(),
                                this.onClose()
                              case 4:
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
                  const e = (0, r.Z)(
                    (0, i.Z)().mark(function e (n) {
                      const t = this
                      return (0, i.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((this.wc = this.register(this.opts)),
                                  this.connected)
                                ) {
                                  e.next = 4
                                  break
                                }
                                return (e.next = 4), this.open()
                              case 4:
                                this.sendPayload(n)
                                  .then(function (e) {
                                    return t.events.emit('payload', e)
                                  })
                                  .catch(function (e) {
                                    return t.events.emit(
                                      'payload',
                                      (0, y.formatJsonRpcError)(
                                        n.id,
                                        e.message
                                      )
                                    )
                                  })
                              case 5:
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
                  return function (n) {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'register',
                value: function (e) {
                  if (this.wc) return this.wc
                  ;(this.opts = e || this.opts),
                  (this.bridge = (
                    e === null || void 0 === e ? void 0 : e.connector
                  )
                    ? e.connector.bridge
                    : (e === null || void 0 === e ? void 0 : e.bridge) ||
                          'https://bridge.walletconnect.org'),
                  (this.qrcode =
                        typeof (e === null || void 0 === e
                          ? void 0
                          : e.qrcode) ===
                          'undefined' || !1 !== e.qrcode),
                  (this.chainId =
                        typeof (e === null || void 0 === e ? void 0 : e.chainId) !==
                        'undefined'
                          ? e.chainId
                          : this.chainId),
                  (this.qrcodeModalOptions =
                        e === null || void 0 === e
                          ? void 0
                          : e.qrcodeModalOptions)
                  const n = {
                    bridge: this.bridge,
                    qrcodeModal: this.qrcode ? g() : void 0,
                    qrcodeModalOptions: this.qrcodeModalOptions,
                    storageId:
                        e === null || void 0 === e ? void 0 : e.storageId,
                    signingMethods:
                        e === null || void 0 === e ? void 0 : e.signingMethods,
                    clientMeta:
                        e === null || void 0 === e ? void 0 : e.clientMeta
                  }
                  if (
                    ((this.wc =
                        typeof (e === null || void 0 === e
                          ? void 0
                          : e.connector) !==
                        'undefined'
                          ? e.connector
                          : new l.Z(n)),
                    typeof this.wc === 'undefined')
                  ) {
                    throw new Error(
                      'Failed to register WalletConnect connector'
                    )
                  }
                  return (
                    this.wc.accounts.length &&
                        (this.accounts = this.wc.accounts),
                    this.wc.chainId && (this.chainId = this.wc.chainId),
                    this.registerConnectorEvents(),
                    this.wc
                  )
                }
              },
              {
                key: 'onOpen',
                value: function (e) {
                  ;(this.pending = !1),
                  e && (this.wc = e),
                  this.events.emit('open')
                }
              },
              {
                key: 'onClose',
                value: function () {
                  ;(this.pending = !1),
                  this.wc && (this.wc = void 0),
                  this.events.emit('close')
                }
              },
              {
                key: 'onError',
                value: function (e) {
                  const n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 'Failed or Rejected Request'
                  const t =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : -32e3
                  const i = arguments.length > 3 ? arguments[3] : void 0
                  const r = {
                    id: e.id,
                    jsonrpc: e.jsonrpc,
                    error: { code: t, message: n }
                  }
                  return (
                    typeof i !== 'undefined' && (r.error.data = i),
                    this.events.emit('payload', r),
                    r
                  )
                }
              },
              {
                key: 'create',
                value: function (e) {
                  const n = this
                    ;(this.wc = this.register(this.opts)),
                  (this.chainId = e || this.chainId),
                  this.connected ||
                        this.pending ||
                        ((this.pending = !0),
                        this.registerConnectorEvents(),
                        this.wc
                          .createSession({ chainId: this.chainId })
                          .then(function () {
                            return n.events.emit('created')
                          })
                          .catch(function (e) {
                            return n.events.emit('error', e)
                          }))
                }
              },
              {
                key: 'registerConnectorEvents',
                value: function () {
                  const e = this
                    ;(this.wc = this.register(this.opts)),
                  this.wc.on('connect', function (n) {
                    let t, i
                    n
                      ? e.events.emit('error', n)
                      : ((e.accounts =
                              ((t = e.wc) === null || void 0 === t
                                ? void 0
                                : t.accounts) || []),
                        (e.chainId =
                              ((i = e.wc) === null || void 0 === i
                                ? void 0
                                : i.chainId) || e.chainId),
                        e.onOpen())
                  }),
                  this.wc.on('disconnect', function (n) {
                    n ? e.events.emit('error', n) : e.onClose()
                  }),
                  this.wc.on('modal_closed', function () {
                    e.events.emit('error', new Error('User closed modal'))
                  }),
                  this.wc.on('session_update', function (n, t) {
                    const i = t.params[0]
                    const r = i.accounts
                    const c = i.chainId
                        ;(!e.accounts || (r && e.accounts !== r)) &&
                          ((e.accounts = r),
                          e.events.emit('accountsChanged', r)),
                    (!e.chainId || (c && e.chainId !== c)) &&
                            ((e.chainId = c), e.events.emit('chainChanged', c))
                  })
                }
              },
              {
                key: 'sendPayload',
                value: (function () {
                  const e = (0, r.Z)(
                    (0, i.Z)().mark(function e (n) {
                      let t
                      return (0, i.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (this.wc = this.register(this.opts)),
                                  (e.prev = 1),
                                  (e.next = 4),
                                  this.wc.unsafeSend(n)
                                )
                              case 4:
                                return (
                                  (t = e.sent),
                                  e.abrupt('return', this.sanitizeResponse(t))
                                )
                              case 8:
                                return (
                                  (e.prev = 8),
                                  (e.t0 = e.catch(1)),
                                  e.abrupt(
                                    'return',
                                    this.onError(n, e.t0.message)
                                  )
                                )
                              case 11:
                              case 'end':
                                return e.stop()
                            }
                          }
                        },
                        e,
                        this,
                        [[1, 8]]
                      )
                    })
                  )
                  return function (n) {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'sanitizeResponse',
                value: function (e) {
                  return typeof e.error !== 'undefined' &&
                      typeof e.error.code === 'undefined'
                    ? (0, y.formatJsonRpcError)(
                        e.id,
                        e.error.message,
                        e.error.data
                      )
                    : e
                }
              }
            ]),
            t
          )
        })(w.XR)
        const m = (function () {
          function e (n) {
            ;(0, c.Z)(this, e),
            (this.events = new (u())()),
            (this.rpc = {
              infuraId: n === null || void 0 === n ? void 0 : n.infuraId,
              custom: n === null || void 0 === n ? void 0 : n.rpc
            }),
            (this.signer = new a.r(new k(n)))
            const t =
                this.signer.connection.chainId ||
                (n === null || void 0 === n ? void 0 : n.chainId) ||
                1
              ;(this.http = this.setHttpProvider(t)),
            this.registerEventListeners()
          }
          return (
            (0, o.Z)(e, [
              {
                key: 'connected',
                get: function () {
                  return this.signer.connection.connected
                }
              },
              {
                key: 'connector',
                get: function () {
                  return this.signer.connection.connector
                }
              },
              {
                key: 'accounts',
                get: function () {
                  return this.signer.connection.accounts
                }
              },
              {
                key: 'chainId',
                get: function () {
                  return this.signer.connection.chainId
                }
              },
              {
                key: 'rpcUrl',
                get: function () {
                  let e
                  return (
                    ((e = this.http) === null || void 0 === e
                      ? void 0
                      : e.connection
                    ).url || ''
                  )
                }
              },
              {
                key: 'request',
                value: (function () {
                  const e = (0, r.Z)(
                    (0, i.Z)().mark(function e (n) {
                      return (0, i.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                ;(e.t0 = n.method),
                                (e.next =
                                      e.t0 === 'eth_requestAccounts'
                                        ? 3
                                        : e.t0 === 'eth_accounts'
                                          ? 6
                                          : e.t0 === 'eth_chainId'
                                            ? 7
                                            : 8)
                                break
                              case 3:
                                return (e.next = 5), this.connect()
                              case 5:
                              case 6:
                                return e.abrupt(
                                  'return',
                                  this.signer.connection.accounts
                                )
                              case 7:
                                return e.abrupt(
                                  'return',
                                  this.signer.connection.chainId
                                )
                              case 8:
                                return e.abrupt('break', 9)
                              case 9:
                                if (!d.V7.includes(n.method)) {
                                  e.next = 11
                                  break
                                }
                                return e.abrupt(
                                  'return',
                                  this.signer.request(n)
                                )
                              case 11:
                                if (typeof this.http !== 'undefined') {
                                  e.next = 13
                                  break
                                }
                                throw new Error(
                                  'Cannot request JSON-RPC method ('.concat(
                                    n.method,
                                    ') without provided rpc url'
                                  )
                                )
                              case 13:
                                return e.abrupt(
                                  'return',
                                  this.http.request(n)
                                )
                              case 14:
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
                  return function (n) {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'sendAsync',
                value: function (e, n) {
                  this.request(e)
                    .then(function (e) {
                      return n(null, e)
                    })
                    .catch(function (e) {
                      return n(e, void 0)
                    })
                }
              },
              {
                key: 'enable',
                value: (function () {
                  const e = (0, r.Z)(
                    (0, i.Z)().mark(function e () {
                      let n
                      return (0, i.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.request({
                                    method: 'eth_requestAccounts'
                                  })
                                )
                              case 2:
                                return (n = e.sent), e.abrupt('return', n)
                              case 4:
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
                key: 'connect',
                value: (function () {
                  const e = (0, r.Z)(
                    (0, i.Z)().mark(function e () {
                      return (0, i.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this.signer.connection.connected) {
                                  e.next = 3
                                  break
                                }
                                return (e.next = 3), this.signer.connect()
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
                  const e = (0, r.Z)(
                    (0, i.Z)().mark(function e () {
                      return (0, i.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!this.signer.connection.connected) {
                                  e.next = 3
                                  break
                                }
                                return (e.next = 3), this.signer.disconnect()
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
                key: 'on',
                value: function (e, n) {
                  this.events.on(e, n)
                }
              },
              {
                key: 'once',
                value: function (e, n) {
                  this.events.once(e, n)
                }
              },
              {
                key: 'removeListener',
                value: function (e, n) {
                  this.events.removeListener(e, n)
                }
              },
              {
                key: 'off',
                value: function (e, n) {
                  this.events.off(e, n)
                }
              },
              {
                key: 'isWalletConnect',
                get: function () {
                  return !0
                }
              },
              {
                key: 'registerEventListeners',
                value: function () {
                  const e = this
                  this.signer.connection.on('accountsChanged', function (n) {
                    e.events.emit('accountsChanged', n)
                  }),
                  this.signer.connection.on('chainChanged', function (n) {
                    ;(e.http = e.setHttpProvider(n)),
                    e.events.emit('chainChanged', n)
                  }),
                  this.signer.on('disconnect', function () {
                    e.events.emit('disconnect')
                  })
                }
              },
              {
                key: 'setHttpProvider',
                value: function (e) {
                  const n = (0, d.RM)(e, this.rpc)
                  if (typeof n !== 'undefined') return new a.r(new h.k(n))
                }
              }
            ]),
            e
          )
        })()
        var I = m
      }
    }
  ]
)
// # sourceMappingURL=597.f4c29cfc.chunk.js.map
