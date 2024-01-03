/*! For license information please see 542.e6e857cd.chunk.js.LICENSE.txt */
;(self.webpackChunktruffle_client = self.webpackChunktruffle_client || []).push(
  [
    [542],
    {
      23224: function (t, e, n) {
        'use strict'
        let r = n(56690).default;
          var i = n(89728).default
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.CoinbaseWalletSDK = void 0)
        let o = n(70872);
          var s = n(48170);
          var u = n(80245);
          var c = n(63895);
          var a = n(93731);
          var l = n(69411);
          var h = n(39830);
          var f =
            {
              NODE_ENV: 'production',
              PUBLIC_URL: '',
              WDS_SOCKET_HOST: void 0,
              WDS_SOCKET_PATH: void 0,
              WDS_SOCKET_PORT: void 0,
              FAST_REFRESH: !0,
            }.LINK_API_URL || 'https://www.walletlink.org';
          var d =
            {
              NODE_ENV: 'production',
              PUBLIC_URL: '',
              WDS_SOCKET_HOST: void 0,
              WDS_SOCKET_PATH: void 0,
              WDS_SOCKET_PORT: void 0,
              FAST_REFRESH: !0,
            }.SDK_VERSION ||
            n(40626).i8 ||
            'unknown';
          var p = (function () {
            function t (e) {
              let n, i, o
              r(this, t),
              (this._appName = ''),
              (this._appLogoUrl = null),
              (this._relay = null),
              (this._relayEventManager = null)
              let u;
                var h = e.linkAPIUrl || f
              if (
                ((u = e.uiConstructor
                  ? e.uiConstructor
                  : function (t) {
                    return new c.WalletSDKUI(t)
                  }),
                typeof e.overrideIsMetaMask === 'undefined'
                  ? (this._overrideIsMetaMask = !1)
                  : (this._overrideIsMetaMask = e.overrideIsMetaMask),
                (this._overrideIsCoinbaseWallet =
                  (n = e.overrideIsCoinbaseWallet) === null ||
                  void 0 === n ||
                  n),
                (this._overrideIsCoinbaseBrowser =
                  (i = e.overrideIsCoinbaseBrowser) !== null &&
                  void 0 !== i &&
                  i),
                e.diagnosticLogger && e.eventListener)
              )
                {throw new Error(
                  "Can't have both eventListener and diagnosticLogger options, use only diagnosticLogger",
                )}
              e.eventListener
                ? (this._diagnosticLogger = { log: e.eventListener.onEvent })
                : (this._diagnosticLogger = e.diagnosticLogger),
              (this._reloadOnDisconnect =
                  (o = e.reloadOnDisconnect) === null || void 0 === o || o)
              let p = new URL(h);
                var b = ''.concat(p.protocol, '//').concat(p.host)
              ;(this._storage = new s.ScopedLocalStorage(
                '-walletlink:'.concat(b)
              )),
              this._storage.setItem('version', t.VERSION),
              this.walletExtension ||
                  this.coinbaseBrowser ||
                  ((this._relayEventManager =
                    new l.WalletSDKRelayEventManager()),
                  (this._relay = new a.WalletSDKRelay({
                    linkAPIUrl: h,
                    version: d,
                    darkMode: !!e.darkMode,
                    uiConstructor: u,
                    storage: this._storage,
                    relayEventManager: this._relayEventManager,
                    diagnosticLogger: this._diagnosticLogger
                  })),
                  this.setAppInfo(e.appName, e.appLogoUrl),
                  e.headlessMode || this._relay.attachUI())
            }
            return (
              i(t, [
                {
                  key: 'makeWeb3Provider',
                  value: function () {
                    let t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : '';
                      var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 1;
                      var n = this.walletExtension
                    if (n)
                      {return (
                        this.isCipherProvider(n) || n.setProviderInfo(t, e),
                        !1 === this._reloadOnDisconnect &&
                          'function' === typeof n.disableReloadOnDisconnect &&
                          n.disableReloadOnDisconnect(),
                        n
                      )}
                    let r = this.coinbaseBrowser
                    if (r) return r
                    let i = this._relay
                    if (!i || !this._relayEventManager || !this._storage)
                      {throw new Error(
                        'Relay not initialized, should never happen',
                      )}
                    return (
                      t || i.setConnectDisabled(!0),
                      new u.CoinbaseWalletProvider({
                        relayProvider: function () {
                          return Promise.resolve(i)
                        },
                        relayEventManager: this._relayEventManager,
                        storage: this._storage,
                        jsonRpcUrl: t,
                        chainId: e,
                        qrUrl: this.getQrUrl(),
                        diagnosticLogger: this._diagnosticLogger,
                        overrideIsMetaMask: this._overrideIsMetaMask,
                        overrideIsCoinbaseWallet:
                          this._overrideIsCoinbaseWallet,
                        overrideIsCoinbaseBrowser:
                          this._overrideIsCoinbaseBrowser
                      })
                    )
                  }
                },
                {
                  key: 'setAppInfo',
                  value: function (t, e) {
                    let n
                    ;(this._appName = t || 'DApp'),
                    (this._appLogoUrl = e || (0, h.getFavicon)())
                    let r = this.walletExtension
                    r
                      ? this.isCipherProvider(r) ||
                        r.setAppInfo(this._appName, this._appLogoUrl)
                      : (n = this._relay) === null ||
                        void 0 === n ||
                        n.setAppInfo(this._appName, this._appLogoUrl)
                  }
                },
                {
                  key: 'disconnect',
                  value: function () {
                    let t;
                      var e = this.walletExtension
                    e
                      ? e.close()
                      : (t = this._relay) === null ||
                        void 0 === t ||
                        t.resetAndReload()
                  }
                },
                {
                  key: 'getQrUrl',
                  value: function () {
                    let t, e
                    return (e =
                        null === (t = this._relay) || void 0 === t
                          ? void 0
                          : t.getQRCodeUrl()) !==
                      null && void 0 !== e
                      ? e
                      : null
                  }
                },
                {
                  key: 'getCoinbaseWalletLogo',
                  value: function (t) {
                    let e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 240
                    return (0, o.walletLogo)(t, e)
                  }
                },
                {
                  key: 'walletExtension',
                  get: function () {
                    let t
                    return (t = window.coinbaseWalletExtension) !== null &&
                      void 0 !== t
                      ? t
                      : window.walletLinkExtension
                  }
                },
                {
                  key: 'coinbaseBrowser',
                  get: function () {
                    var t, e
                    try {
                      var n =
                        null !== (t = window.ethereum) && void 0 !== t
                          ? t
                          : null === (e = window.top) || void 0 === e
                            ? void 0
                            : e.ethereum
                      if (!n) return
                      return 'isCoinbaseBrowser' in n && n.isCoinbaseBrowser
                        ? n
                        : void 0
                    } catch (r) {
                      
                    }
                  },
                },
                {
                  key: 'isCipherProvider',
                  value: function (t) {
                    return typeof t.isCipher === 'boolean' && t.isCipher
                  }
                },
              ]),
              t
            )
          })()
        ;(e.CoinbaseWalletSDK = p), (p.VERSION = d)
      },
      70872: function (t, e) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.walletLogo = void 0)
        e.walletLogo = function (t, e) {
          let n
          switch (t) {
            case 'standard':
            default:
              return (
                (n = e),
                "data:image/svg+xml,%3Csvg width='"
                  .concat(e, "' height='")
                  .concat(
                    n,
                    "' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E "
                  )
              )
            case 'circle':
              return (
                (n = e),
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"
                  .concat(e, "' height='")
                  .concat(
                    n,
                    "' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E"
                  )
              )
            case 'text':
              return (
                (n = (0.1 * e).toFixed(2)),
                "data:image/svg+xml,%3Csvg width='"
                  .concat(e, "' height='")
                  .concat(
                    n,
                    "' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E"
                  )
              )
            case 'textWithLogo':
              return (
                (n = (0.25 * e).toFixed(2)),
                "data:image/svg+xml,%3Csvg width='"
                  .concat(e, "' height='")
                  .concat(
                    n,
                    "' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E"
                  )
              )
            case 'textLight':
              return (
                (n = (0.1 * e).toFixed(2)),
                "data:image/svg+xml,%3Csvg width='"
                  .concat(e, "' height='")
                  .concat(
                    n,
                    "' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E"
                  )
              )
            case 'textWithLogoLight':
              return (
                (n = (0.25 * e).toFixed(2)),
                "data:image/svg+xml,%3Csvg width='"
                  .concat(e, "' height='")
                  .concat(
                    n,
                    "' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E"
                  )
              )
          }
        }
      },
      51169: function (t, e) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default =
            '.-cbwsdk-css-reset .-cbwsdk-connect-content{height:430px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-connect-content.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-header{display:flex;align-items:center;justify-content:space-between;margin:0 0 30px}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading{font-style:normal;font-weight:500;font-size:28px;line-height:36px;margin:0}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-layout{display:flex;flex-direction:row}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-left{margin-right:30px;display:flex;flex-direction:column;justify-content:space-between}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-right{flex:25%;margin-right:34px}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-wrapper{width:220px;height:220px;border-radius:12px;display:flex;justify-content:center;align-items:center;background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light{background-color:rgba(255,255,255,.95)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light>p{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark{background-color:rgba(10,11,13,.9)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark>p{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting>p{font-size:12px;font-weight:bold;margin-top:16px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app{border-radius:8px;font-size:14px;line-height:20px;padding:12px;width:339px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.light{background:#eef0f3;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.dark{background:#1e2025;color:#8a919e}.-cbwsdk-css-reset .-cbwsdk-cancel-button{-webkit-appearance:none;border:none;background:none;cursor:pointer;padding:0;margin:0}.-cbwsdk-css-reset .-cbwsdk-cancel-button-x{position:relative;display:block;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-wallet-steps{padding:0 0 0 16px;margin:0;width:100%;list-style:decimal}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item{list-style-type:decimal;display:list-item;font-style:normal;font-weight:400;font-size:16px;line-height:24px;margin-top:20px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item-wrapper{display:flex;align-items:center}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-pad-left{margin-left:6px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon{display:flex;border-radius:50%;height:24px;width:24px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.light{background:#0052ff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.dark{background:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item{align-items:center;display:flex;flex-direction:row;padding:16px 24px;gap:12px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-connect-item.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-item.light.selected{background:#f5f8ff;color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-connect-item.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-item.dark.selected{background:#001033;color:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item.selected{border-radius:100px;font-weight:600}.-cbwsdk-css-reset .-cbwsdk-connect-item-copy-wrapper{margin:0 4px 0 8px}.-cbwsdk-css-reset .-cbwsdk-connect-item-title{margin:0 0 0;font-size:16px;line-height:24px;font-weight:500}.-cbwsdk-css-reset .-cbwsdk-connect-item-description{font-weight:400;font-size:14px;line-height:20px;margin:0}')
      },
      80886: function (t, e, n) {
        'use strict'
        let r = n(27424).default;
          var i =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t }
            }
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.CoinbaseAppSteps =
            e.CoinbaseWalletSteps =
            e.ConnectItem =
            e.ConnectContent =
              void 0)
        let o = i(n(44977));
          var s = n(32347);
          var u = n(55977);
          var c = n(39830);
          var a = n(16174);
          var l = n(11850);
          var h = i(n(50550));
          var f = i(n(97503));
          var d = n(13236);
          var p = i(n(6811));
          var b = i(n(18370));
          var v = n(60544);
          var y = n(72110);
          var g = n(40119);
          var m = i(n(51169));
          var w = {
            'coinbase-wallet-app': {
              title: 'Coinbase Wallet app',
              description: 'Connect with your self-custody wallet',
              icon: f.default,
              steps: S,
            },
            'coinbase-app': {
              title: 'Coinbase app',
              description: 'Connect with your Coinbase account',
              icon: h.default,
              steps: E,
            },
          };
          var _ = function (t) {
            return 'coinbase-app' === t ? p.default : b.default
          };
          var k = function (t) {
            return t === 'light' ? '#FFFFFF' : '#0A0B0D'
          }
        function x (t) {
          let e = t.title;
            var n = t.description;
            var r = t.icon;
            var i = t.selected;
            var u = t.theme;
            var c = t.onClick
          return (0, s.h)(
            'div',
            {
              onClick: c,
              class: (0, o.default)('-cbwsdk-connect-item', u, { selected: i })
            },
            (0, s.h)('div', null, (0, s.h)('img', { src: r, alt: e })),
            (0, s.h)(
              'div',
              { class: '-cbwsdk-connect-item-copy-wrapper' },
              (0, s.h)('h3', { class: '-cbwsdk-connect-item-title' }, e),
              (0, s.h)('p', { class: '-cbwsdk-connect-item-description' }, n)
            ),
          )
        }
        function S (t) {
          let e = t.theme
          return (0, s.h)(
            'ol',
            { class: '-cbwsdk-wallet-steps' },
            (0, s.h)(
              'li',
              { class: (0, o.default)('-cbwsdk-wallet-steps-item', e) },
              (0, s.h)(
                'div',
                { class: '-cbwsdk-wallet-steps-item-wrapper' },
                'Open Coinbase Wallet app'
              ),
            ),
            (0, s.h)(
              'li',
              { class: (0, o.default)('-cbwsdk-wallet-steps-item', e) },
              (0, s.h)(
                'div',
                { class: '-cbwsdk-wallet-steps-item-wrapper' },
                (0, s.h)(
                  'span',
                  null,
                  'Tap ',
                  (0, s.h)('strong', null, 'Scan'),
                  ' '
                ),
                (0, s.h)(
                  'span',
                  {
                    class: (0, o.default)(
                      '-cbwsdk-wallet-steps-pad-left',
                      '-cbwsdk-wallet-steps-icon',
                      e
                    ),
                  },
                  (0, s.h)(d.QRCodeIcon, { fill: k(e) })
                ),
              )
            ),
          )
        }
        function E (t) {
          let e = t.theme
          return (0, s.h)(
            'ol',
            { class: '-cbwsdk-wallet-steps' },
            (0, s.h)(
              'li',
              { class: (0, o.default)('-cbwsdk-wallet-steps-item', e) },
              (0, s.h)(
                'div',
                { class: '-cbwsdk-wallet-steps-item-wrapper' },
                'Open Coinbase app'
              ),
            ),
            (0, s.h)(
              'li',
              { class: (0, o.default)('-cbwsdk-wallet-steps-item', e) },
              (0, s.h)(
                'div',
                { class: '-cbwsdk-wallet-steps-item-wrapper' },
                (0, s.h)(
                  'span',
                  null,
                  'Tap ',
                  (0, s.h)('strong', null, 'More')
                ),
                (0, s.h)(
                  'span',
                  {
                    class: (0, o.default)(
                      '-cbwsdk-wallet-steps-pad-left',
                      '-cbwsdk-wallet-steps-icon',
                      e
                    ),
                  },
                  (0, s.h)(v.StatusDotIcon, { fill: k(e) })
                ),
                (0, s.h)(
                  'span',
                  { class: '-cbwsdk-wallet-steps-pad-left' },
                  'then ',
                  (0, s.h)('strong', null, 'Scan')
                ),
                (0, s.h)(
                  'span',
                  {
                    class: (0, o.default)(
                      '-cbwsdk-wallet-steps-pad-left',
                      '-cbwsdk-wallet-steps-icon',
                      e
                    ),
                  },
                  (0, s.h)(d.QRCodeIcon, { fill: k(e) })
                ),
              )
            ),
          )
        }
        ;(e.ConnectContent = function (t) {
          let e = t.theme;
            var n = (0, u.useState)('coinbase-wallet-app');
            var i = r(n, 2);
            var h = i[0];
            var f = i[1];
            var d = (0, u.useCallback)(function (t) {
              f(t)
            }, []);
            var p = (0, c.createQrUrl)(
              t.sessionId,
              t.sessionSecret,
              t.linkAPIUrl,
              t.isParentConnection,
              t.version,
              t.chainId,
            );
            var b = w[h]
          if (!h) return null
          let v = b.steps;
            var k = h === 'coinbase-app'
          return (0, s.h)(
            'div',
            {
              'data-testid': 'connect-content',
              class: (0, o.default)('-cbwsdk-connect-content', e)
            },
            (0, s.h)('style', null, m.default),
            (0, s.h)(
              'div',
              { class: '-cbwsdk-connect-content-header' },
              (0, s.h)(
                'h2',
                { class: (0, o.default)('-cbwsdk-connect-content-heading', e) },
                'Scan to connect with one of our mobile apps'
              ),
              t.onCancel &&
                (0, s.h)(
                  'button',
                  {
                    type: 'button',
                    class: '-cbwsdk-cancel-button',
                    onClick: t.onCancel
                  },
                  (0, s.h)(l.CloseIcon, {
                    fill: e === 'light' ? '#0A0B0D' : '#FFFFFF'
                  }),
                )
            ),
            (0, s.h)(
              'div',
              { class: '-cbwsdk-connect-content-layout' },
              (0, s.h)(
                'div',
                { class: '-cbwsdk-connect-content-column-left' },
                (0, s.h)(
                  'div',
                  null,
                  Object.entries(w).map(function (t) {
                    let n = r(t, 2);
                      var i = n[0];
                      var o = n[1]
                    return (0, s.h)(x, {
                      key: i,
                      title: o.title,
                      description: o.description,
                      icon: o.icon,
                      selected: h === i,
                      onClick: function () {
                        return d(i)
                      },
                      theme: e
                    })
                  })
                ),
                k &&
                  (0, s.h)(
                    'div',
                    {
                      class: (0, o.default)(
                        '-cbwsdk-connect-content-update-app',
                        e
                      ),
                    },
                    'Don\u2019t see a ',
                    (0, s.h)('strong', null, 'Scan'),
                    ' option? Update your Coinbase app to the latest version and try again.'
                  ),
              ),
              (0, s.h)(
                'div',
                { class: '-cbwsdk-connect-content-column-right' },
                (0, s.h)(
                  'div',
                  { class: '-cbwsdk-connect-content-qr-wrapper' },
                  (0, s.h)(y.QRCode, {
                    content: p,
                    width: 200,
                    height: 200,
                    fgColor: '#000',
                    bgColor: 'transparent',
                    image: { svg: _(h), width: 25, height: 25 }
                  }),
                  (0, s.h)('input', {
                    type: 'hidden',
                    name: 'cbw-cbwsdk-version',
                    value: a.LIB_VERSION
                  }),
                  (0, s.h)('input', { type: 'hidden', value: p })
                ),
                (0, s.h)(v, { theme: e }),
                !t.isConnected &&
                  (0, s.h)(
                    'div',
                    {
                      'data-testid': 'connecting-spinner',
                      class: (0, o.default)(
                        '-cbwsdk-connect-content-qr-connecting',
                        e
                      ),
                    },
                    (0, s.h)(g.Spinner, {
                      size: 36,
                      color: e === 'dark' ? '#FFF' : '#000'
                    }),
                    (0, s.h)('p', null, 'Connecting...')
                  ),
              )
            ),
          )
        }),
        (e.ConnectItem = x),
        (e.CoinbaseWalletSteps = S),
        (e.CoinbaseAppSteps = E)
      },
      28574: function (t, e) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default =
            '.-cbwsdk-css-reset .-cbwsdk-connect-dialog{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.light{background-color:rgba(0,0,0,.5)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.dark{background-color:rgba(50,53,61,.4)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box{display:flex;position:relative;flex-direction:column;transform:scale(1);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box-hidden{opacity:0;transform:scale(0.85)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container{display:block}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container-hidden{display:none}')
      },
      3057: function (t, e, n) {
        'use strict'
        let r = n(27424).default;
          var i =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t }
            }
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.ConnectDialog = void 0)
        let o = i(n(44977));
          var s = n(32347);
          var u = n(55977);
          var c = n(80886);
          var a = n(47508);
          var l = i(n(28574))
        e.ConnectDialog = function (t) {
          let e = t.isOpen;
            var n = t.darkMode;
            var i = (0, u.useState)(!e);
            var h = r(i, 2);
            var f = h[0];
            var d = h[1];
            var p = (0, u.useState)(!e);
            var b = r(p, 2);
            var v = b[0];
            var y = b[1]
          ;(0, u.useEffect)(
            function () {
              let t = [
                window.setTimeout(function () {
                  y(!e)
                }, 10)
              ]
              return (
                e
                  ? d(!1)
                  : t.push(
                    window.setTimeout(function () {
                      d(!0)
                    }, 360)
                    ),
                function () {
                  t.forEach(window.clearTimeout)
                }
              )
            },
            [t.isOpen]
          )
          let g = n ? 'dark' : 'light'
          return (0, s.h)(
            'div',
            {
              class: (0, o.default)(
                '-cbwsdk-connect-dialog-container',
                f && '-cbwsdk-connect-dialog-container-hidden'
              ),
            },
            (0, s.h)('style', null, l.default),
            (0, s.h)('div', {
              class: (0, o.default)(
                '-cbwsdk-connect-dialog-backdrop',
                g,
                v && '-cbwsdk-connect-dialog-backdrop-hidden'
              ),
            }),
            (0, s.h)(
              'div',
              { class: '-cbwsdk-connect-dialog' },
              (0, s.h)(
                'div',
                {
                  class: (0, o.default)(
                    '-cbwsdk-connect-dialog-box',
                    v && '-cbwsdk-connect-dialog-box-hidden'
                  ),
                },
                t.connectDisabled
                  ? null
                  : (0, s.h)(c.ConnectContent, {
                      theme: g,
                      version: t.version,
                      sessionId: t.sessionId,
                      sessionSecret: t.sessionSecret,
                      linkAPIUrl: t.linkAPIUrl,
                      isConnected: t.isConnected,
                      isParentConnection: t.isParentConnection,
                      chainId: t.chainId,
                      onCancel: t.onCancel
                    }),
                (0, s.h)(a.TryExtensionContent, { theme: g })
              ),
            )
          )
        }
      },
      62551: function (t, e, n) {
        'use strict'
        let r = n(56690).default;
          var i = n(89728).default
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.LinkFlow = void 0)
        let o = n(32347);
          var s = n(95471);
          var u = n(3057);
          var c = (function () {
            function t (e) {
              r(this, t),
              (this.extensionUI$ = new s.BehaviorSubject({})),
              (this.subscriptions = new s.Subscription()),
              (this.isConnected = !1),
              (this.chainId = 1),
              (this.isOpen = !1),
              (this.onCancel = null),
              (this.root = null),
              (this.connectDisabled = !1),
              (this.darkMode = e.darkMode),
              (this.version = e.version),
              (this.sessionId = e.sessionId),
              (this.sessionSecret = e.sessionSecret),
              (this.linkAPIUrl = e.linkAPIUrl),
              (this.isParentConnection = e.isParentConnection),
              (this.connected$ = e.connected$),
              (this.chainId$ = e.chainId$)
            }
            return (
              i(t, [
                {
                  key: 'attach',
                  value: function (t) {
                    let e = this
                    ;(this.root = document.createElement('div')),
                    (this.root.className = '-cbwsdk-link-flow-root'),
                    t.appendChild(this.root),
                    this.render(),
                    this.subscriptions.add(
                      this.connected$.subscribe(function (t) {
                        e.isConnected !== t &&
                            ((e.isConnected = t), e.render())
                      })
                      ),
                    this.subscriptions.add(
                      this.chainId$.subscribe(function (t) {
                        e.chainId !== t && ((e.chainId = t), e.render())
                      })
                      )
                  }
                },
                {
                  key: 'detach',
                  value: function () {
                    let t
                    this.root &&
                      (this.subscriptions.unsubscribe(),
                      (0, o.render)(null, this.root),
                      (t = this.root.parentElement) === null ||
                        void 0 === t ||
                        t.removeChild(this.root))
                  }
                },
                {
                  key: 'setConnectDisabled',
                  value: function (t) {
                    this.connectDisabled = t
                  }
                },
                {
                  key: 'open',
                  value: function (t) {
                    ;(this.isOpen = !0),
                    (this.onCancel = t.onCancel),
                    this.render()
                  }
                },
                {
                  key: 'close',
                  value: function () {
                    ;(this.isOpen = !1), (this.onCancel = null), this.render()
                  }
                },
                {
                  key: 'render',
                  value: function () {
                    let t = this
                    if (this.root) {
                      let e = this.extensionUI$.subscribe(function () {
                        t.root &&
                          (0, o.render)(
                            (0, o.h)(u.ConnectDialog, {
                              darkMode: t.darkMode,
                              version: t.version,
                              sessionId: t.sessionId,
                              sessionSecret: t.sessionSecret,
                              linkAPIUrl: t.linkAPIUrl,
                              isOpen: t.isOpen,
                              isConnected: t.isConnected,
                              isParentConnection: t.isParentConnection,
                              chainId: t.chainId,
                              onCancel: t.onCancel,
                              connectDisabled: t.connectDisabled
                            }),
                            t.root
                          )
                      })
                      this.subscriptions.add(e)
                    }
                  }
                },
              ]),
              t
            )
          })()
        e.LinkFlow = c
      },
      72110: function (t, e, n) {
        'use strict'
        let r = n(41999).Buffer;
          var i = n(27424).default;
          var o =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t }
            }
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.QRCode = void 0)
        let s = n(32347);
          var u = n(55977);
          var c = o(n(98319))
        e.QRCode = function (t) {
          let e = (0, u.useState)('');
            var n = i(e, 2);
            var o = n[0];
            var a = n[1]
          return (
            (0, u.useEffect)(function () {
              let e;
                var n;
                var i = new c.default({
                  content: t.content,
                  background: t.bgColor || '#ffffff',
                  color: t.fgColor || '#000000',
                  container: 'svg',
                  ecl: 'M',
                  width: null !== (e = t.width) && void 0 !== e ? e : 256,
                  height: null !== (n = t.height) && void 0 !== n ? n : 256,
                  padding: 0,
                  image: t.image,
                });
                var o = r.from(i.svg(), 'utf8').toString('base64')
              a('data:image/svg+xml;base64,'.concat(o))
            }),
            o ? (0, s.h)('img', { src: o, alt: 'QR Code' }) : null
          )
        }
      },
      74611: function (t, e) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default =
            '.-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}')
      },
      33771: function (t, e, n) {
        'use strict'
        let r = n(27424).default;
          var i = n(56690).default;
          var o = n(89728).default;
          var s =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t }
            }
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.SnackbarInstance = e.SnackbarContainer = e.Snackbar = void 0)
        let u = s(n(44977));
          var c = n(32347);
          var a = n(55977);
          var l = s(n(74611))
        function h (t) {
          return t === 'coinbase-app'
            ? 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE0LjY3NCAxOC44NThjLTIuMDQ1IDAtMy42NDgtMS43MjItMy42NDgtMy44NDVzMS42NTktMy44NDUgMy42NDgtMy44NDVjMS44MjQgMCAzLjMxNyAxLjM3NyAzLjU5MyAzLjIxNGgzLjcwM2MtLjMzMS0zLjk2LTMuNDgyLTcuMDU5LTcuMjk2LTcuMDU5LTQuMDM0IDAtNy4zNSAzLjQ0My03LjM1IDcuNjkgMCA0LjI0NiAzLjI2IDcuNjkgNy4zNSA3LjY5IDMuODcgMCA2Ljk2NS0zLjEgNy4yOTYtNy4wNTloLTMuNzAzYy0uMjc2IDEuODM2LTEuNzY5IDMuMjE0LTMuNTkzIDMuMjE0WiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0wIDEwLjY3OGMwLTMuNzExIDAtNS41OTYuNzQyLTcuMDIzQTYuNTMyIDYuNTMyIDAgMCAxIDMuNjU1Ljc0MkM1LjA4MiAwIDYuOTY3IDAgMTAuNjc4IDBoNy45MzhjMy43MTEgMCA1LjU5NiAwIDcuMDIzLjc0MmE2LjUzMSA2LjUzMSAwIDAgMSAyLjkxMyAyLjkxM2MuNzQyIDEuNDI3Ljc0MiAzLjMxMi43NDIgNy4wMjN2Ny45MzhjMCAzLjcxMSAwIDUuNTk2LS43NDIgNy4wMjNhNi41MzEgNi41MzEgMCAwIDEtMi45MTMgMi45MTNjLTEuNDI3Ljc0Mi0zLjMxMi43NDItNy4wMjMuNzQyaC03LjkzOGMtMy43MTEgMC01LjU5NiAwLTcuMDIzLS43NDJhNi41MzEgNi41MzEgMCAwIDEtMi45MTMtMi45MTNDMCAyNC4yMTIgMCAyMi4zODQgMCAxOC42MTZ2LTcuOTM4WiIgZmlsbD0iIzAwNTJGRiIvPjxwYXRoIGQ9Ik0xNC42ODQgMTkuNzczYy0yLjcyNyAwLTQuODY0LTIuMjk1LTQuODY0LTUuMTI2IDAtMi44MzEgMi4yMS01LjEyNyA0Ljg2NC01LjEyNyAyLjQzMiAwIDQuNDIyIDEuODM3IDQuNzkgNC4yODVoNC45MzhjLS40NDItNS4yOC00LjY0My05LjQxMS05LjcyOC05LjQxMS01LjM4IDAtOS44MDIgNC41OS05LjgwMiAxMC4yNTMgMCA1LjY2MiA0LjM0OCAxMC4yNTMgOS44MDIgMTAuMjUzIDUuMTU5IDAgOS4yODYtNC4xMzIgOS43MjgtOS40MTFoLTQuOTM4Yy0uMzY4IDIuNDQ4LTIuMzU4IDQuMjg0LTQuNzkgNC4yODRaIiBmaWxsPSIjZmZmIi8+PC9zdmc+'
            : 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+'
        }
        let f = (function () {
          function t (e) {
            i(this, t),
            (this.items = new Map()),
            (this.nextItemKey = 0),
            (this.root = null),
            (this.darkMode = e.darkMode)
          }
          return (
            o(t, [
              {
                key: 'attach',
                value: function (t) {
                  ;(this.root = document.createElement('div')),
                  (this.root.className = '-cbwsdk-snackbar-root'),
                  t.appendChild(this.root),
                  this.render()
                }
              },
              {
                key: 'presentItem',
                value: function (t) {
                  let e = this;
                    var n = this.nextItemKey++
                  return (
                    this.items.set(n, t),
                    this.render(),
                    function () {
                      e.items.delete(n), e.render()
                    }
                  )
                }
              },
              {
                key: 'clear',
                value: function () {
                  this.items.clear(), this.render()
                }
              },
              {
                key: 'render',
                value: function () {
                  this.root &&
                    (0, c.render)(
                      (0, c.h)(
                        'div',
                        null,
                        (0, c.h)(
                          e.SnackbarContainer,
                          { darkMode: this.darkMode },
                          Array.from(this.items.entries()).map(function (t) {
                            let n = r(t, 2);
                              var i = n[0];
                              var o = n[1]
                            return (0, c.h)(
                              e.SnackbarInstance,
                              Object.assign({}, o, { key: i })
                            )
                          })
                        ),
                      ),
                      this.root
                    )
                }
              },
            ]),
            t
          )
        })()
        e.Snackbar = f
        e.SnackbarContainer = function (t) {
          return (0, c.h)(
            'div',
            { class: (0, u.default)('-cbwsdk-snackbar-container') },
            (0, c.h)('style', null, l.default),
            (0, c.h)('div', { class: '-cbwsdk-snackbar' }, t.children)
          )
        }
        e.SnackbarInstance = function (t) {
          let e = t.autoExpand;
            var n = t.message;
            var i = t.menuItems;
            var o = t.appSrc;
            var s = (0, a.useState)(!0);
            var l = r(s, 2);
            var f = l[0];
            var d = l[1];
            var p = (0, a.useState)(null !== e && void 0 !== e && e);
            var b = r(p, 2);
            var v = b[0];
            var y = b[1]
          ;(0, a.useEffect)(function () {
            let t = [
              window.setTimeout(function () {
                d(!1)
              }, 1),
              window.setTimeout(function () {
                y(!0)
              }, 1e4)
            ]
            return function () {
              t.forEach(window.clearTimeout)
            }
          })
          return (0, c.h)(
            'div',
            {
              class: (0, u.default)(
                '-cbwsdk-snackbar-instance',
                f && '-cbwsdk-snackbar-instance-hidden',
                v && '-cbwsdk-snackbar-instance-expanded'
              ),
            },
            (0, c.h)(
              'div',
              {
                class: '-cbwsdk-snackbar-instance-header',
                onClick: function () {
                  y(!v)
                }
              },
              (0, c.h)('img', {
                src: h(o),
                class: '-cbwsdk-snackbar-instance-header-cblogo'
              }),
              (0, c.h)(
                'div',
                { class: '-cbwsdk-snackbar-instance-header-message' },
                n
              ),
              (0, c.h)(
                'div',
                { class: '-gear-container' },
                !v &&
                  (0, c.h)(
                    'svg',
                    {
                      width: '24',
                      height: '24',
                      viewBox: '0 0 24 24',
                      fill: 'none',
                      xmlns: 'http://www.w3.org/2000/svg'
                    },
                    (0, c.h)('circle', {
                      cx: '12',
                      cy: '12',
                      r: '12',
                      fill: '#F5F7F8'
                    }),
                  ),
                (0, c.h)('img', {
                  src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=',
                  class: '-gear-icon',
                  title: 'Expand'
                }),
              )
            ),
            i &&
              i.length > 0 &&
              (0, c.h)(
                'div',
                { class: '-cbwsdk-snackbar-instance-menu' },
                i.map(function (t, e) {
                  return (0, c.h)(
                    'div',
                    {
                      class: (0, u.default)(
                        '-cbwsdk-snackbar-instance-menu-item',
                        t.isRed && '-cbwsdk-snackbar-instance-menu-item-is-red'
                      ),
                      onClick: t.onClick,
                      key: e
                    },
                    (0, c.h)(
                      'svg',
                      {
                        width: t.svgWidth,
                        height: t.svgHeight,
                        viewBox: '0 0 10 11',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg'
                      },
                      (0, c.h)('path', {
                        'fill-rule': t.defaultFillRule,
                        'clip-rule': t.defaultClipRule,
                        d: t.path,
                        fill: '#AAAAAA'
                      }),
                    ),
                    (0, c.h)(
                      'span',
                      {
                        class: (0, u.default)(
                          '-cbwsdk-snackbar-instance-menu-item-info',
                          t.isRed &&
                            '-cbwsdk-snackbar-instance-menu-item-info-is-red'
                        ),
                      },
                      t.info
                    ),
                  )
                })
              ),
          )
        }
      },
      89588: function (t, e) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default =
            '.-cbwsdk-css-reset .-cbwsdk-spinner{display:inline-block}.-cbwsdk-css-reset .-cbwsdk-spinner svg{display:inline-block;animation:2s linear infinite -cbwsdk-spinner-svg}.-cbwsdk-css-reset .-cbwsdk-spinner svg circle{animation:1.9s ease-in-out infinite both -cbwsdk-spinner-circle;display:block;fill:rgba(0,0,0,0);stroke-dasharray:283;stroke-dashoffset:280;stroke-linecap:round;stroke-width:10px;transform-origin:50% 50%}@keyframes -cbwsdk-spinner-svg{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}@keyframes -cbwsdk-spinner-circle{0%,25%{stroke-dashoffset:280;transform:rotate(0)}50%,75%{stroke-dashoffset:75;transform:rotate(45deg)}100%{stroke-dashoffset:280;transform:rotate(360deg)}}')
      },
      40119: function (t, e, n) {
        'use strict'
        let r =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t }
          }
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Spinner = void 0)
        let i = n(32347);
          var o = r(n(89588))
        e.Spinner = function (t) {
          let e;
            var n = null !== (e = t.size) && void 0 !== e ? e : 64;
            var r = t.color || '#000'
          return (0, i.h)(
            'div',
            { class: '-cbwsdk-spinner' },
            (0, i.h)('style', null, o.default),
            (0, i.h)(
              'svg',
              {
                viewBox: '0 0 100 100',
                xmlns: 'http://www.w3.org/2000/svg',
                style: { width: n, height: n }
              },
              (0, i.h)('circle', {
                style: { cx: 50, cy: 50, r: 45, stroke: r }
              }),
            )
          )
        }
      },
      90733: function (t, e) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default =
            '.-cbwsdk-css-reset .-cbwsdk-try-extension{display:flex;margin-top:12px;height:202px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-try-extension.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-column-half{flex:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading{font-style:normal;font-weight:500;font-size:25px;line-height:32px;margin:0;max-width:204px}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta{appearance:none;border:none;background:none;color:#0052ff;cursor:pointer;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.light{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.dark{color:#588af5}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-wrapper{display:flex;align-items:center;margin-top:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-icon{display:block;margin-left:4px;height:14px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0;padding:0;list-style:none;height:100%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item{display:flex;align-items:center;flex-flow:nowrap;margin-top:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item:first-of-type{margin-top:0}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon-wrapper{display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon{display:flex;height:32px;width:32px;border-radius:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.light{background:#eef0f3}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.dark{background:#1e2025}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy{display:block;font-weight:400;font-size:14px;line-height:20px;padding-left:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.light{color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.dark{color:#8a919e}')
      },
      47508: function (t, e, n) {
        'use strict'
        let r = n(27424).default;
          var i =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t }
            }
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.TryExtensionContent = void 0)
        let o = i(n(44977));
          var s = n(32347);
          var u = n(55977);
          var c = n(83421);
          var a = n(23373);
          var l = n(24197);
          var h = i(n(90733))
        e.TryExtensionContent = function (t) {
          let e = t.theme;
            var n = (0, u.useState)(!1);
            var i = r(n, 2);
            var f = i[0];
            var d = i[1];
            var p = (0, u.useCallback)(function () {
              window.open(
                'https://api.wallet.coinbase.com/rpc/v2/desktop/chrome',
                '_blank',
              )
            }, []);
            var b = (0, u.useCallback)(
              function () {
                f ? window.location.reload() : (p(), d(!0))
              },
              [p, f]
            )
          return (0, s.h)(
            'div',
            { class: (0, o.default)('-cbwsdk-try-extension', e) },
            (0, s.h)('style', null, h.default),
            (0, s.h)(
              'div',
              { class: '-cbwsdk-try-extension-column-half' },
              (0, s.h)(
                'h3',
                { class: (0, o.default)('-cbwsdk-try-extension-heading', e) },
                'Or try the Coinbase Wallet browser extension'
              ),
              (0, s.h)(
                'div',
                { class: '-cbwsdk-try-extension-cta-wrapper' },
                (0, s.h)(
                  'button',
                  {
                    class: (0, o.default)('-cbwsdk-try-extension-cta', e),
                    onClick: b
                  },
                  f ? 'Refresh' : 'Install'
                ),
                (0, s.h)(
                  'div',
                  null,
                  !f &&
                    (0, s.h)(c.ArrowLeftIcon, {
                      class: '-cbwsdk-try-extension-cta-icon',
                      fill: e === 'light' ? '#0052FF' : '#588AF5'
                    }),
                )
              ),
            ),
            (0, s.h)(
              'div',
              { class: '-cbwsdk-try-extension-column-half' },
              (0, s.h)(
                'ul',
                { class: '-cbwsdk-try-extension-list' },
                (0, s.h)(
                  'li',
                  { class: '-cbwsdk-try-extension-list-item' },
                  (0, s.h)(
                    'div',
                    { class: '-cbwsdk-try-extension-list-item-icon-wrapper' },
                    (0, s.h)(
                      'span',
                      {
                        class: (0, o.default)(
                          '-cbwsdk-try-extension-list-item-icon',
                          e
                        ),
                      },
                      (0, s.h)(a.LaptopIcon, {
                        fill: e === 'light' ? '#0A0B0D' : '#FFFFFF'
                      }),
                    )
                  ),
                  (0, s.h)(
                    'div',
                    {
                      class: (0, o.default)(
                        '-cbwsdk-try-extension-list-item-copy',
                        e
                      ),
                    },
                    'Connect with dapps with just one click on your desktop browser'
                  ),
                ),
                (0, s.h)(
                  'li',
                  { class: '-cbwsdk-try-extension-list-item' },
                  (0, s.h)(
                    'div',
                    { class: '-cbwsdk-try-extension-list-item-icon-wrapper' },
                    (0, s.h)(
                      'span',
                      {
                        class: (0, o.default)(
                          '-cbwsdk-try-extension-list-item-icon',
                          e
                        ),
                      },
                      (0, s.h)(l.SafeIcon, {
                        fill: e === 'light' ? '#0A0B0D' : '#FFFFFF'
                      }),
                    )
                  ),
                  (0, s.h)(
                    'div',
                    {
                      class: (0, o.default)(
                        '-cbwsdk-try-extension-list-item-copy',
                        e
                      ),
                    },
                    'Add an additional layer of security by using a supported Ledger hardware wallet'
                  ),
                )
              ),
            )
          )
        }
      },
      83421: function (t, e, n) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.ArrowLeftIcon = void 0)
        let r = n(32347)
        e.ArrowLeftIcon = function (t) {
          return (0, r.h)(
            'svg',
            Object.assign(
              {
                width: '16',
                height: '16',
                viewBox: '0 0 16 16',
                xmlns: 'http://www.w3.org/2000/svg'
              },
              t
            ),
            (0, r.h)('path', {
              d: 'M8.60675 0.155884L7.37816 1.28209L12.7723 7.16662H0V8.83328H12.6548L6.82149 14.6666L8 15.8451L15.8201 8.02501L8.60675 0.155884Z'
            }),
          )
        }
      },
      11850: function (t, e, n) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.CloseIcon = void 0)
        let r = n(32347)
        e.CloseIcon = function (t) {
          return (0, r.h)(
            'svg',
            Object.assign(
              {
                width: '40',
                height: '40',
                viewBox: '0 0 40 40',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg'
              },
              t
            ),
            (0, r.h)('path', {
              d: 'M13.7677 13L12.3535 14.4142L18.3535 20.4142L12.3535 26.4142L13.7677 27.8284L19.7677 21.8284L25.7677 27.8284L27.1819 26.4142L21.1819 20.4142L27.1819 14.4142L25.7677 13L19.7677 19L13.7677 13Z'
            }),
          )
        }
      },
      23373: function (t, e, n) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.LaptopIcon = void 0)
        let r = n(32347)
        e.LaptopIcon = function (t) {
          return (0, r.h)(
            'svg',
            Object.assign(
              {
                width: '14',
                height: '14',
                viewBox: '0 0 14 14',
                xmlns: 'http://www.w3.org/2000/svg'
              },
              t
            ),
            (0, r.h)('path', {
              d: 'M1.8001 2.2002H12.2001V9.40019H1.8001V2.2002ZM3.4001 3.8002V7.80019H10.6001V3.8002H3.4001Z'
            }),
            (0, r.h)('path', {
              d: 'M13.4001 10.2002H0.600098C0.600098 11.0838 1.31644 11.8002 2.2001 11.8002H11.8001C12.6838 11.8002 13.4001 11.0838 13.4001 10.2002Z'
            }),
          )
        }
      },
      13236: function (t, e, n) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.QRCodeIcon = void 0)
        let r = n(32347)
        e.QRCodeIcon = function (t) {
          return (0, r.h)(
            'svg',
            Object.assign(
              {
                width: '10',
                height: '10',
                viewBox: '0 0 10 10',
                xmlns: 'http://www.w3.org/2000/svg'
              },
              t
            ),
            (0, r.h)('path', {
              d: 'M8.2271 1.77124L7.0271 1.77124V2.97124H8.2271V1.77124Z'
            }),
            (0, r.h)('path', {
              d: 'M5.44922 0.199219L5.44922 4.54922L9.79922 4.54922V0.199219L5.44922 0.199219ZM8.89922 3.64922L6.34922 3.64922L6.34922 1.09922L8.89922 1.09922V3.64922Z'
            }),
            (0, r.h)('path', {
              d: 'M2.97124 1.77124L1.77124 1.77124L1.77124 2.97124H2.97124V1.77124Z'
            }),
            (0, r.h)('path', {
              d: 'M0.199219 4.54922L4.54922 4.54922L4.54922 0.199219L0.199219 0.199219L0.199219 4.54922ZM1.09922 1.09922L3.64922 1.09922L3.64922 3.64922L1.09922 3.64922L1.09922 1.09922Z'
            }),
            (0, r.h)('path', {
              d: 'M2.97124 7.0271H1.77124L1.77124 8.2271H2.97124V7.0271Z'
            }),
            (0, r.h)('path', {
              d: 'M0.199219 9.79922H4.54922L4.54922 5.44922L0.199219 5.44922L0.199219 9.79922ZM1.09922 6.34922L3.64922 6.34922L3.64922 8.89922H1.09922L1.09922 6.34922Z'
            }),
            (0, r.h)('path', {
              d: 'M8.89922 7.39912H7.99922V5.40112H5.44922L5.44922 9.79912H6.34922L6.34922 6.30112H7.09922V8.29912H9.79922V5.40112H8.89922V7.39912Z'
            }),
            (0, r.h)('path', {
              d: 'M7.99912 8.89917H7.09912V9.79917H7.99912V8.89917Z'
            }),
            (0, r.h)('path', {
              d: 'M9.79917 8.89917H8.89917V9.79917H9.79917V8.89917Z'
            }),
          )
        }
      },
      6811: function (t, e) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 })
        e.default =
          '\n    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z" fill="white"/>\n        <path d="M50.512 94C74.2907 94 93.5673 74.5244 93.5673 50.5C93.5673 26.4756 74.2907 7 50.512 7C26.7332 7 7.45667 26.4756 7.45667 50.5C7.45667 74.5244 26.7332 94 50.512 94Z" fill="#0052FF"/>\n        <path d="M50.6248 65.4335C42.3697 65.4335 35.8996 58.7469 35.8996 50.5C35.8996 42.2531 42.5928 35.5664 50.6248 35.5664C57.9873 35.5664 64.0111 40.9157 65.1267 48.0481H80.0749C78.7363 32.6688 66.0191 20.6328 50.6248 20.6328C34.3379 20.6328 20.9514 34.0062 20.9514 50.5C20.9514 66.9936 34.1148 80.3671 50.6248 80.3671C66.2422 80.3671 78.7363 68.331 80.0749 52.9516H65.1267C64.0111 60.0841 57.9873 65.4335 50.6248 65.4335Z" fill="white"/>\n    </svg>\n'
      },
      18370: function (t, e) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default =
            '\n    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <circle cx="50" cy="50" r="50" fill="white"/>\n        <circle cx="49.9996" cy="49.9996" r="43.6363" fill="#1B53E4"/>\n        <circle cx="49.9996" cy="49.9996" r="43.6363" stroke="white"/>\n        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3379 49.9484C19.3379 66.8508 33.04 80.553 49.9425 80.553C66.8449 80.553 80.5471 66.8508 80.5471 49.9484C80.5471 33.0459 66.8449 19.3438 49.9425 19.3438C33.04 19.3438 19.3379 33.0459 19.3379 49.9484ZM44.0817 40.0799C41.8725 40.0799 40.0817 41.8708 40.0817 44.0799V55.8029C40.0817 58.012 41.8725 59.8029 44.0817 59.8029H55.8046C58.0138 59.8029 59.8046 58.012 59.8046 55.8029V44.0799C59.8046 41.8708 58.0138 40.0799 55.8046 40.0799H44.0817Z" fill="white"/>\n    </svg>\n')
      },
      24197: function (t, e, n) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.SafeIcon = void 0)
        let r = n(32347)
        e.SafeIcon = function (t) {
          return (0, r.h)(
            'svg',
            Object.assign(
              {
                width: '14',
                height: '14',
                viewBox: '0 0 14 14',
                xmlns: 'http://www.w3.org/2000/svg'
              },
              t
            ),
            (0, r.h)('path', {
              'fill-rule': 'evenodd',
              'clip-rule': 'evenodd',
              d: 'M0.600098 0.600098V11.8001H13.4001V0.600098H0.600098ZM7.0001 9.2001C5.3441 9.2001 4.0001 7.8561 4.0001 6.2001C4.0001 4.5441 5.3441 3.2001 7.0001 3.2001C8.6561 3.2001 10.0001 4.5441 10.0001 6.2001C10.0001 7.8561 8.6561 9.2001 7.0001 9.2001ZM0.600098 12.6001H3.8001V13.4001H0.600098V12.6001ZM10.2001 12.6001H13.4001V13.4001H10.2001V12.6001ZM8.8001 6.2001C8.8001 7.19421 7.99421 8.0001 7.0001 8.0001C6.00598 8.0001 5.2001 7.19421 5.2001 6.2001C5.2001 5.20598 6.00598 4.4001 7.0001 4.4001C7.99421 4.4001 8.8001 5.20598 8.8001 6.2001Z'
            }),
          )
        }
      },
      60544: function (t, e, n) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.StatusDotIcon = void 0)
        let r = n(32347)
        e.StatusDotIcon = function (t) {
          return (0, r.h)(
            'svg',
            Object.assign(
              {
                width: '10',
                height: '10',
                viewBox: '0 0 10 10',
                xmlns: 'http://www.w3.org/2000/svg'
              },
              t
            ),
            (0, r.h)('path', {
              'fill-rule': 'evenodd',
              'clip-rule': 'evenodd',
              d: 'M2.29995 4.99995C2.29995 5.57985 1.82985 6.04995 1.24995 6.04995C0.670052 6.04995 0.199951 5.57985 0.199951 4.99995C0.199951 4.42005 0.670052 3.94995 1.24995 3.94995C1.82985 3.94995 2.29995 4.42005 2.29995 4.99995ZM4.99995 6.04995C5.57985 6.04995 6.04995 5.57985 6.04995 4.99995C6.04995 4.42005 5.57985 3.94995 4.99995 3.94995C4.42005 3.94995 3.94995 4.42005 3.94995 4.99995C3.94995 5.57985 4.42005 6.04995 4.99995 6.04995ZM8.74995 6.04995C9.32985 6.04995 9.79995 5.57985 9.79995 4.99995C9.79995 4.42005 9.32985 3.94995 8.74995 3.94995C8.17005 3.94995 7.69995 4.42005 7.69995 4.99995C7.69995 5.57985 8.17005 6.04995 8.74995 6.04995Z'
            }),
          )
        }
      },
      50550: function (t, e) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default =
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTQiIGN5PSIxNCIgcj0iMTQiIGZpbGw9IiMwMDUyRkYiLz48cGF0aCBkPSJNMTQuMDM3IDE4LjkyNmMtMi43NSAwLTQuOTA3LTIuMjA1LTQuOTA3LTQuOTI2IDAtMi43MiAyLjIzLTQuOTI2IDQuOTA3LTQuOTI2YTQuODY2IDQuODY2IDAgMCAxIDQuODMzIDQuMTE4aDQuOTgyYy0uNDQ2LTUuMDczLTQuNjg0LTkuMDQ0LTkuODE1LTkuMDQ0QzguNjEgNC4xNDggNC4xNDkgOC41NiA0LjE0OSAxNHM0LjM4NyA5Ljg1MiA5Ljg5IDkuODUyYzUuMjA0IDAgOS4zNjgtMy45NyA5LjgxNC05LjA0M0gxOC44N2E0Ljg2NiA0Ljg2NiAwIDAgMS00LjgzMyA0LjExN1oiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')
      },
      97503: function (t, e) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default =
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTQiIGN5PSIxNCIgcj0iMTQiIGZpbGw9IiMwMDUyRkYiLz48cGF0aCBkPSJNMjMuODUyIDE0QTkuODM0IDkuODM0IDAgMCAxIDE0IDIzLjg1MiA5LjgzNCA5LjgzNCAwIDAgMSA0LjE0OCAxNCA5LjgzNCA5LjgzNCAwIDAgMSAxNCA0LjE0OCA5LjgzNCA5LjgzNCAwIDAgMSAyMy44NTIgMTRaIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTExLjE4NSAxMi41MDRjMC0uNDU2IDAtLjcxLjA5OC0uODYyLjA5OC0uMTUyLjE5Ni0uMzA0LjM0My0uMzU1LjE5Ni0uMTAyLjM5Mi0uMTAyLjg4MS0uMTAyaDIuOTg2Yy40OSAwIC42ODYgMCAuODgyLjEwMi4xNDYuMTAxLjI5My4yMDMuMzQyLjM1NS4wOTguMjAzLjA5OC40MDYuMDk4Ljg2MnYyLjk5MmMwIC40NTcgMCAuNzEtLjA5OC44NjMtLjA5OC4xNTItLjE5NS4zMDQtLjM0Mi4zNTUtLjE5Ni4xMDEtLjM5Mi4xMDEtLjg4Mi4xMDFoLTIuOTg2Yy0uNDkgMC0uNjg1IDAtLjg4LS4xMDEtLjE0OC0uMTAyLS4yOTUtLjIwMy0uMzQ0LS4zNTUtLjA5OC0uMjAzLS4wOTgtLjQwNi0uMDk4LS44NjN2LTIuOTkyWiIgZmlsbD0iIzAwNTJGRiIvPjwvc3ZnPg==')
      },
      31266: function (t, e) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.ClientMessagePublishEvent =
            e.ClientMessageSetSessionConfig =
            e.ClientMessageGetSessionConfig =
            e.ClientMessageIsLinked =
            e.ClientMessageHostSession =
              void 0),
        (e.ClientMessageHostSession = function (t) {
          return Object.assign({ type: 'HostSession' }, t)
        }),
        (e.ClientMessageIsLinked = function (t) {
          return Object.assign({ type: 'IsLinked' }, t)
        }),
        (e.ClientMessageGetSessionConfig = function (t) {
          return Object.assign({ type: 'GetSessionConfig' }, t)
        }),
        (e.ClientMessageSetSessionConfig = function (t) {
          return Object.assign({ type: 'SetSessionConfig' }, t)
        }),
        (e.ClientMessagePublishEvent = function (t) {
          return Object.assign({ type: 'PublishEvent' }, t)
        })
      },
      63606: function (t, e) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.EVENTS = void 0),
        (e.EVENTS = {
          STARTED_CONNECTING: 'walletlink_sdk.started.connecting',
          CONNECTED_STATE_CHANGE: 'walletlink_sdk.connected',
          DISCONNECTED: 'walletlink_sdk.disconnected',
          METADATA_DESTROYED: 'walletlink_sdk_metadata_destroyed',
          LINKED: 'walletlink_sdk.linked',
          FAILURE: 'walletlink_sdk.generic_failure',
          SESSION_CONFIG_RECEIVED:
              'walletlink_sdk.session_config_event_received',
          ETH_ACCOUNTS_STATE: 'walletlink_sdk.eth_accounts_state',
          SESSION_STATE_CHANGE: 'walletlink_sdk.session_state_change',
          UNLINKED_ERROR_STATE: 'walletlink_sdk.unlinked_error_state',
          SKIPPED_CLEARING_SESSION: 'walletlink_sdk.skipped_clearing_session',
          GENERAL_ERROR: 'walletlink_sdk.general_error',
          WEB3_REQUEST: 'walletlink_sdk.web3.request',
          WEB3_REQUEST_PUBLISHED: 'walletlink_sdk.web3.request_published',
          WEB3_RESPONSE: 'walletlink_sdk.web3.response',
          UNKNOWN_ADDRESS_ENCOUNTERED:
              'walletlink_sdk.unknown_address_encountered'
          })
      },
      36904: function (t, e, n) {
        'use strict'
        let r = n(56690).default;
          var i = n(89728).default
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.RxWebSocket = e.ConnectionState = void 0)
        let o;
          var s = n(95471);
          var u = n(84539)
        !(function (t) {
          ;(t[(t.DISCONNECTED = 0)] = 'DISCONNECTED'),
          (t[(t.CONNECTING = 1)] = 'CONNECTING'),
          (t[(t.CONNECTED = 2)] = 'CONNECTED')
        })((o = e.ConnectionState || (e.ConnectionState = {})))
        let c = (function () {
          function t (e) {
            let n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : WebSocket
            r(this, t),
            (this.WebSocketClass = n),
            (this.webSocket = null),
            (this.connectionStateSubject = new s.BehaviorSubject(
              o.DISCONNECTED
              )),
            (this.incomingDataSubject = new s.Subject()),
            (this.url = e.replace(/^http/, 'ws'))
          }
          return (
            i(t, [
              {
                key: 'connect',
                value: function () {
                  let t = this
                  return this.webSocket
                    ? (0, s.throwError)(
                        new Error('webSocket object is not null')
                      )
                    : new s.Observable(function (e) {
                      var n
                      try {
                        t.webSocket = n = new t.WebSocketClass(t.url)
                      } catch (r) {
                        return void e.error(r)
                      }
                      t.connectionStateSubject.next(o.CONNECTING),
                      (n.onclose = function (n) {
                        t.clearWebSocket(),
                        e.error(
                          new Error(
                            'websocket error '
                              .concat(n.code, ': ')
                              .concat(n.reason)
                                ),
                        ),
                        t.connectionStateSubject.next(o.DISCONNECTED)
                      }),
                      (n.onopen = function (n) {
                        e.next(),
                        e.complete(),
                        t.connectionStateSubject.next(o.CONNECTED)
                      }),
                      (n.onmessage = function (e) {
                        t.incomingDataSubject.next(e.data)
                      })
                    }).pipe((0, u.take)(1))
                }
              },
              {
                key: 'disconnect',
                value: function () {
                  let t = this.webSocket
                  if (t) {
                    this.clearWebSocket(),
                    this.connectionStateSubject.next(o.DISCONNECTED)
                    try {
                      t.close()
                    } catch (e) {}
                  }
                }
              },
              {
                key: 'connectionState$',
                get: function () {
                  return this.connectionStateSubject.asObservable()
                }
              },
              {
                key: 'incomingData$',
                get: function () {
                  return this.incomingDataSubject.asObservable()
                }
              },
              {
                key: 'incomingJSONData$',
                get: function () {
                  return this.incomingData$.pipe(
                    (0, u.flatMap)(function (t) {
                      let e
                      try {
                        e = JSON.parse(t)
                      } catch (n) {
                        return (0, s.empty)()
                      }
                      return (0, s.of)(e)
                    })
                  )
                }
              },
              {
                key: 'sendData',
                value: function (t) {
                  let e = this.webSocket
                  if (!e) throw new Error('websocket is not connected')
                  e.send(t)
                }
              },
              {
                key: 'clearWebSocket',
                value: function () {
                  let t = this.webSocket
                  t &&
                    ((this.webSocket = null),
                    (t.onclose = null),
                    (t.onerror = null),
                    (t.onmessage = null),
                    (t.onopen = null))
                }
              },
            ]),
            t
          )
        })()
        e.RxWebSocket = c
      },
      97469: function (t, e) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.isServerMessageFail = void 0),
        (e.isServerMessageFail = function (t) {
          return (
            t &&
              t.type === 'Fail' &&
              typeof t.id === 'number' &&
              typeof t.sessionId === 'string' &&
              typeof t.error === 'string'
          )
        })
      },
      53278: function (t, e, n) {
        'use strict'
        let r = n(38416).default;
          var i = n(56690).default;
          var o = n(89728).default
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.WalletSDKConnection = void 0)
        let s = n(95471);
          var u = n(84539);
          var c = n(60739);
          var a = n(52352);
          var l = n(31266);
          var h = n(63606);
          var f = n(36904);
          var d = n(97469);
          var p = 1e4;
          var b = 6e4;
          var v = (function () {
            function t (e, n, r, o) {
              let l = this;
                var d =
                  arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : WebSocket
              i(this, t),
              (this.sessionId = e),
              (this.sessionKey = n),
              (this.diagnostic = o),
              (this.subscriptions = new s.Subscription()),
              (this.destroyed = !1),
              (this.lastHeartbeatResponse = 0),
              (this.nextReqId = (0, a.IntNumber)(1)),
              (this.connectedSubject = new s.BehaviorSubject(!1)),
              (this.linkedSubject = new s.BehaviorSubject(!1)),
              (this.sessionConfigSubject = new s.ReplaySubject(1))
              let b = new f.RxWebSocket(r + '/rpc', d)
              ;(this.ws = b),
              this.subscriptions.add(
                b.connectionState$
                  .pipe(
                    (0, u.tap)(function (t) {
                      var n
                      return (n = l.diagnostic) === null || void 0 === n
                        ? void 0
                        : n.log(h.EVENTS.CONNECTED_STATE_CHANGE, {
                          state: t,
                          sessionIdHash: c.Session.hash(e)
                            })
                    }),
                    (0, u.skip)(1),
                    (0, u.filter)(function (t) {
                      return (
                        t === f.ConnectionState.DISCONNECTED && !l.destroyed
                      )
                    }),
                    (0, u.delay)(5e3),
                    (0, u.filter)(function (t) {
                      return !l.destroyed
                    }),
                    (0, u.flatMap)(function (t) {
                      return b.connect()
                    }),
                    (0, u.retry)()
                    )
                  .subscribe()
                ),
              this.subscriptions.add(
                b.connectionState$
                  .pipe(
                    (0, u.skip)(2),
                    (0, u.switchMap)(function (t) {
                      return (0, s.iif)(
                        function () {
                          return t === f.ConnectionState.CONNECTED
                        },
                        l.authenticate().pipe(
                          (0, u.tap)(function (t) {
                            return l.sendIsLinked()
                          }),
                          (0, u.tap)(function (t) {
                            return l.sendGetSessionConfig()
                          }),
                          (0, u.map)(function (t) {
                            return !0
                          })
                          ),
                        (0, s.of)(!1)
                        )
                    }),
                    (0, u.distinctUntilChanged)(),
                    (0, u.catchError)(function (t) {
                      return (0, s.of)(!1)
                    })
                    )
                  .subscribe(function (t) {
                    return l.connectedSubject.next(t)
                  })
                ),
              this.subscriptions.add(
                b.connectionState$
                  .pipe(
                    (0, u.skip)(1),
                    (0, u.switchMap)(function (t) {
                      return (0, s.iif)(
                        function () {
                          return t === f.ConnectionState.CONNECTED
                        },
                        (0, s.timer)(0, p)
                        )
                    })
                    )
                  .subscribe(function (t) {
                    return t === 0 ? l.updateLastHeartbeat() : l.heartbeat()
                  })
                ),
              this.subscriptions.add(
                b.incomingData$
                  .pipe(
                    (0, u.filter)(function (t) {
                      return t === 'h'
                    })
                    )
                  .subscribe(function (t) {
                    return l.updateLastHeartbeat()
                  })
                ),
              this.subscriptions.add(
                b.incomingJSONData$
                  .pipe(
                    (0, u.filter)(function (t) {
                      return ['IsLinkedOK', 'Linked'].includes(t.type)
                    })
                    )
                  .subscribe(function (t) {
                    var n;
                        var r = t
                    null === (n = l.diagnostic) ||
                        void 0 === n ||
                        n.log(h.EVENTS.LINKED, {
                          sessionIdHash: c.Session.hash(e),
                          linked: r.linked,
                          type: t.type,
                          onlineGuests: r.onlineGuests
                        }),
                    l.linkedSubject.next(r.linked || r.onlineGuests > 0)
                  })
                ),
              this.subscriptions.add(
                b.incomingJSONData$
                  .pipe(
                    (0, u.filter)(function (t) {
                      return [
                        'GetSessionConfigOK',
                        'SessionConfigUpdated',
                      ].includes(t.type)
                    })
                    )
                  .subscribe(function (t) {
                    var n;
                        var r = t
                    null === (n = l.diagnostic) ||
                        void 0 === n ||
                        n.log(h.EVENTS.SESSION_CONFIG_RECEIVED, {
                          sessionIdHash: c.Session.hash(e),
                          metadata_keys:
                            r && r.metadata ? Object.keys(r.metadata) : void 0
                        }),
                    l.sessionConfigSubject.next({
                      webhookId: r.webhookId,
                      webhookUrl: r.webhookUrl,
                      metadata: r.metadata
                        })
                  })
                )
            }
            return (
              o(t, [
                {
                  key: 'connect',
                  value: function () {
                    let t
                    if (this.destroyed) throw new Error('instance is destroyed')
                    (t = this.diagnostic) === null ||
                      void 0 === t ||
                      t.log(h.EVENTS.STARTED_CONNECTING, {
                        sessionIdHash: c.Session.hash(this.sessionId)
                      }),
                    this.ws.connect().subscribe()
                  }
                },
                {
                  key: 'destroy',
                  value: function () {
                    let t
                    this.subscriptions.unsubscribe(),
                    this.ws.disconnect(),
                    null === (t = this.diagnostic) ||
                        void 0 === t ||
                        t.log(h.EVENTS.DISCONNECTED, {
                          sessionIdHash: c.Session.hash(this.sessionId)
                        }),
                    (this.destroyed = !0)
                  }
                },
                {
                  key: 'isDestroyed',
                  get: function () {
                    return this.destroyed
                  }
                },
                {
                  key: 'connected$',
                  get: function () {
                    return this.connectedSubject.asObservable()
                  }
                },
                {
                  key: 'onceConnected$',
                  get: function () {
                    return this.connected$.pipe(
                      (0, u.filter)(function (t) {
                        return t
                      }),
                      (0, u.take)(1),
                      (0, u.map)(function () {})
                    )
                  }
                },
                {
                  key: 'linked$',
                  get: function () {
                    return this.linkedSubject.asObservable()
                  }
                },
                {
                  key: 'onceLinked$',
                  get: function () {
                    return this.linked$.pipe(
                      (0, u.filter)(function (t) {
                        return t
                      }),
                      (0, u.take)(1),
                      (0, u.map)(function () {})
                    )
                  }
                },
                {
                  key: 'sessionConfig$',
                  get: function () {
                    return this.sessionConfigSubject.asObservable()
                  }
                },
                {
                  key: 'incomingEvent$',
                  get: function () {
                    return this.ws.incomingJSONData$.pipe(
                      (0, u.filter)(function (t) {
                        if (t.type !== 'Event') return !1
                        let e = t
                        return (
                          typeof e.sessionId === 'string' &&
                          typeof e.eventId === 'string' &&
                          typeof e.event === 'string' &&
                          typeof e.data === 'string'
                        )
                      }),
                      (0, u.map)(function (t) {
                        return t
                      })
                    )
                  }
                },
                {
                  key: 'setSessionMetadata',
                  value: function (t, e) {
                    let n = this;
                      var i = (0, l.ClientMessageSetSessionConfig)({
                        id: (0, a.IntNumber)(this.nextReqId++),
                        sessionId: this.sessionId,
                        metadata: r({}, t, e)
                      })
                    return this.onceConnected$.pipe(
                      (0, u.flatMap)(function (t) {
                        return n.makeRequest(i)
                      }),
                      (0, u.map)(function (t) {
                        if ((0, d.isServerMessageFail)(t))
                          {throw new Error(
                            t.error || 'failed to set session metadata',
                          )}
                      })
                    )
                  }
                },
                {
                  key: 'publishEvent',
                  value: function (t, e) {
                    let n = this;
                      var r =
                        arguments.length > 2 &&
                        void 0 !== arguments[2] &&
                        arguments[2];
                      var i = (0, l.ClientMessagePublishEvent)({
                        id: (0, a.IntNumber)(this.nextReqId++),
                        sessionId: this.sessionId,
                        event: t,
                        data: e,
                        callWebhook: r
                      })
                    return this.onceLinked$.pipe(
                      (0, u.flatMap)(function (t) {
                        return n.makeRequest(i)
                      }),
                      (0, u.map)(function (t) {
                        if ((0, d.isServerMessageFail)(t))
                          {throw new Error(t.error || 'failed to publish event')}
                        return t.eventId
                      })
                    )
                  }
                },
                {
                  key: 'sendData',
                  value: function (t) {
                    this.ws.sendData(JSON.stringify(t))
                  }
                },
                {
                  key: 'updateLastHeartbeat',
                  value: function () {
                    this.lastHeartbeatResponse = Date.now()
                  }
                },
                {
                  key: 'heartbeat',
                  value: function () {
                    if (Date.now() - this.lastHeartbeatResponse > 2 * p)
                      {this.ws.disconnect()}
                    else
                      {try {
                        this.ws.sendData('h')
                      } catch (t) {}}
                  }
                },
                {
                  key: 'makeRequest',
                  value: function (t) {
                    let e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : b;
                      var n = t.id
                    try {
                      this.sendData(t)
                    } catch (r) {
                      return (0, s.throwError)(r)
                    }
                    return this.ws.incomingJSONData$.pipe(
                      (0, u.timeoutWith)(
                        e,
                        (0, s.throwError)(
                          new Error('request '.concat(n, ' timed out'))
                        ),
                      ),
                      (0, u.filter)(function (t) {
                        return t.id === n
                      }),
                      (0, u.take)(1)
                    )
                  }
                },
                {
                  key: 'authenticate',
                  value: function () {
                    let t = (0, l.ClientMessageHostSession)({
                      id: (0, a.IntNumber)(this.nextReqId++),
                      sessionId: this.sessionId,
                      sessionKey: this.sessionKey
                    })
                    return this.makeRequest(t).pipe(
                      (0, u.map)(function (t) {
                        if ((0, d.isServerMessageFail)(t))
                          {throw new Error(t.error || 'failed to authentcate')}
                      })
                    )
                  }
                },
                {
                  key: 'sendIsLinked',
                  value: function () {
                    let t = (0, l.ClientMessageIsLinked)({
                      id: (0, a.IntNumber)(this.nextReqId++),
                      sessionId: this.sessionId
                    })
                    this.sendData(t)
                  }
                },
                {
                  key: 'sendGetSessionConfig',
                  value: function () {
                    let t = (0, l.ClientMessageGetSessionConfig)({
                      id: (0, a.IntNumber)(this.nextReqId++),
                      sessionId: this.sessionId
                    })
                    this.sendData(t)
                  }
                },
              ]),
              t
            )
          })()
        e.WalletSDKConnection = v
      },
      36542: function (t, e, n) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.CoinbaseWalletProvider = e.CoinbaseWalletSDK = void 0)
        let r = n(23224);
          var i = n(80245);
          var o = n(23224)
        Object.defineProperty(e, 'CoinbaseWalletSDK', {
          enumerable: !0,
          get: function () {
            return o.CoinbaseWalletSDK
          }
        })
        let s = n(80245)
        Object.defineProperty(e, 'CoinbaseWalletProvider', {
          enumerable: !0,
          get: function () {
            return s.CoinbaseWalletProvider
          }
        }),
        (e.default = r.CoinbaseWalletSDK),
        'undefined' !== typeof window &&
            ((window.CoinbaseWalletSDK = r.CoinbaseWalletSDK),
            (window.CoinbaseWalletProvider = i.CoinbaseWalletProvider),
            (window.WalletLink = r.CoinbaseWalletSDK),
            (window.WalletLinkProvider = i.CoinbaseWalletProvider))
      },
      48170: function (t, e, n) {
        'use strict'
        let r = n(56690).default;
          var i = n(89728).default
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.ScopedLocalStorage = void 0)
        let o = (function () {
          function t (e) {
            r(this, t), (this.scope = e)
          }
          return (
            i(t, [
              {
                key: 'setItem',
                value: function (t, e) {
                  localStorage.setItem(this.scopedKey(t), e)
                }
              },
              {
                key: 'getItem',
                value: function (t) {
                  return localStorage.getItem(this.scopedKey(t))
                }
              },
              {
                key: 'removeItem',
                value: function (t) {
                  localStorage.removeItem(this.scopedKey(t))
                }
              },
              {
                key: 'clear',
                value: function () {
                  for (
                    var t = this.scopedKey(''), e = [], n = 0;
                    n < localStorage.length;
                    n++
                  ) {
                    let r = localStorage.key(n)
                    typeof r === 'string' && r.startsWith(t) && e.push(r)
                  }
                  e.forEach(function (t) {
                    return localStorage.removeItem(t)
                  })
                }
              },
              {
                key: 'scopedKey',
                value: function (t) {
                  return ''.concat(this.scope, ':').concat(t)
                }
              },
            ]),
            t
          )
        })()
        e.ScopedLocalStorage = o
      },
      61150: function (t, e) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default =
            '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}')
      },
      3441: function (t, e, n) {
        'use strict'
        let r =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t }
          }
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.injectCssReset = void 0)
        let i = r(n(61150))
        e.injectCssReset = function () {
          let t = document.createElement('style')
          ;(t.type = 'text/css'),
          t.appendChild(document.createTextNode(i.default)),
          document.documentElement.appendChild(t)
        }
      },
      80245: function (t, e, n) {
        'use strict'
        let r = n(41999).Buffer;
          var i = n(861).default;
          var o = n(17061).default;
          var s = n(17156).default;
          var u = n(56690).default;
          var c = n(89728).default;
          var a = n(66115).default;
          var l = n(61655).default;
          var h = n(26389).default;
          var f =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t }
            }
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.CoinbaseWalletProvider = void 0)
        let d = f(n(2727));
          var p = f(n(57891));
          var b = n(94649);
          var v = n(63606);
          var y = n(60739);
          var g = n(16536);
          var m = n(39830);
          var w = f(n(35633));
          var _ = n(57907);
          var k = n(71339);
          var x = n(24393);
          var S = 'DefaultChainId';
          var E = 'DefaultJsonRpcUrl';
          var C = (function (t) {
            l(n, t)
            let e = h(n)
            function n (t) {
              let r, i, o
              u(this, n),
              ((r = e.call(this))._filterPolyfill = new _.FilterPolyfill(
                a(r)
                )),
              (r._subscriptionManager = new x.SubscriptionManager(a(r))),
              (r._relay = null),
              (r._addresses = []),
              (r.hasMadeFirstChainChangedEmission = !1),
              (r._send = r.send.bind(a(r))),
              (r._sendAsync = r.sendAsync.bind(a(r))),
              (r.setProviderInfo = r.setProviderInfo.bind(a(r))),
              (r.updateProviderInfo = r.updateProviderInfo.bind(a(r))),
              (r.getChainId = r.getChainId.bind(a(r))),
              (r.setAppInfo = r.setAppInfo.bind(a(r))),
              (r.enable = r.enable.bind(a(r))),
              (r.close = r.close.bind(a(r))),
              (r.send = r.send.bind(a(r))),
              (r.sendAsync = r.sendAsync.bind(a(r))),
              (r.request = r.request.bind(a(r))),
              (r._setAddresses = r._setAddresses.bind(a(r))),
              (r.scanQRCode = r.scanQRCode.bind(a(r))),
              (r.genericRequest = r.genericRequest.bind(a(r))),
              (r._chainIdFromOpts = t.chainId),
              (r._jsonRpcUrlFromOpts = t.jsonRpcUrl),
              (r._overrideIsMetaMask = t.overrideIsMetaMask),
              (r._relayProvider = t.relayProvider),
              (r._storage = t.storage),
              (r._relayEventManager = t.relayEventManager),
              (r.diagnostic = t.diagnosticLogger),
              (r.reloadOnDisconnect = !0),
              (r.isCoinbaseWallet =
                  (i = t.overrideIsCoinbaseWallet) === null ||
                  void 0 === i ||
                  i),
              (r.isCoinbaseBrowser =
                  (o = t.overrideIsCoinbaseBrowser) !== null &&
                  void 0 !== o &&
                  o),
              (r.qrUrl = t.qrUrl),
              (r.supportsAddressSwitching = t.supportsAddressSwitching),
              (r.isLedger = t.isLedger)
              let s = r.getChainId();
                var c = (0, m.prepend0x)(s.toString(16))
              r.emit('connect', { chainIdStr: c })
              let l = r._storage.getItem(g.LOCAL_STORAGE_ADDRESSES_KEY)
              if (l) {
                let h = l.split(' ')
                h[0] !== '' &&
                  ((r._addresses = h.map(function (t) {
                    return (0, m.ensureAddressString)(t)
                  })),
                  r.emit('accountsChanged', h))
              }
              return (
                r._subscriptionManager.events.on('notification', function (t) {
                  r.emit('message', { type: t.method, data: t.params })
                }),
                r._addresses.length > 0 && r.initializeRelay(),
                window.addEventListener('message', function (t) {
                  let e
                  if (
                    t.origin === location.origin &&
                    t.source === window &&
                    t.data.type === 'walletLinkMessage'
                  ) {
                    if (
                      t.data.data.action === 'defaultChainChanged' ||
                      t.data.data.action === 'dappChainSwitched'
                    ) {
                      let n = t.data.data.chainId;
                        var i =
                          (e = t.data.data.jsonRpcUrl) !== null && void 0 !== e
                            ? e
                            : r.jsonRpcUrl
                      r.updateProviderInfo(i, Number(n))
                    }
                    t.data.data.action === 'addressChanged' &&
                      r._setAddresses([t.data.data.address])
                  }
                }),
                r
              )
            }
            return (
              c(n, [
                {
                  key: 'selectedAddress',
                  get: function () {
                    return this._addresses[0] || void 0
                  }
                },
                {
                  key: 'networkVersion',
                  get: function () {
                    return this.getChainId().toString(10)
                  }
                },
                {
                  key: 'chainId',
                  get: function () {
                    return (0, m.prepend0x)(this.getChainId().toString(16))
                  }
                },
                {
                  key: 'isWalletLink',
                  get: function () {
                    return !0
                  }
                },
                {
                  key: 'isMetaMask',
                  get: function () {
                    return this._overrideIsMetaMask
                  }
                },
                {
                  key: 'host',
                  get: function () {
                    return this.jsonRpcUrl
                  }
                },
                {
                  key: 'connected',
                  get: function () {
                    return !0
                  }
                },
                {
                  key: 'isConnected',
                  value: function () {
                    return !0
                  }
                },
                {
                  key: 'jsonRpcUrl',
                  get: function () {
                    let t
                    return (t = this._storage.getItem(E)) !== null &&
                      void 0 !== t
                      ? t
                      : this._jsonRpcUrlFromOpts
                  },
                  set: function (t) {
                    this._storage.setItem(E, t)
                  }
                },
                {
                  key: 'disableReloadOnDisconnect',
                  value: function () {
                    this.reloadOnDisconnect = !1
                  }
                },
                {
                  key: 'setProviderInfo',
                  value: function (t, e) {
                    this.isLedger ||
                      this.isCoinbaseBrowser ||
                      ((this._chainIdFromOpts = e),
                      (this._jsonRpcUrlFromOpts = t)),
                    this.updateProviderInfo(
                      this.jsonRpcUrl,
                      this.getChainId()
                      )
                  }
                },
                {
                  key: 'updateProviderInfo',
                  value: function (t, e) {
                    this.jsonRpcUrl = t
                    let n = this.getChainId()
                    this._storage.setItem(S, e.toString(10)),
                    (!((0, m.ensureIntNumber)(e) !== n) &&
                        this.hasMadeFirstChainChangedEmission) ||
                        (this.emit('chainChanged', this.getChainId()),
                        (this.hasMadeFirstChainChangedEmission = !0))
                  }
                },
                {
                  key: 'watchAsset',
                  value: (function () {
                    let t = s(
                      o().mark(function t (e, n, r, i, s, u) {
                        let c, a
                        return o().wrap(
                          function (t) {
                            for (;;)
                              {switch ((t.prev = t.next)) {
                                case 0:
                                  return (t.next = 2), this.initializeRelay()
                                case 2:
                                  return (
                                    (c = t.sent),
                                    (t.next = 5),
                                    c.watchAsset(
                                      e,
                                      n,
                                      r,
                                      i,
                                      s,
                                      null === u || void 0 === u
                                        ? void 0
                                        : u.toString(),
                                    ).promise
                                  )
                                case 5:
                                  return (
                                    (a = t.sent), t.abrupt('return', !!a.result)
                                  )
                                case 7:
                                case 'end':
                                  return t.stop()
                              }}
                          },
                          t,
                          this
                        )
                      })
                    )
                    return function (e, n, r, i, o, s) {
                      return t.apply(this, arguments)
                    }
                  })()
                },
                {
                  key: 'addEthereumChain',
                  value: (function () {
                    let t = s(
                      o().mark(function t (e, n, r, i, s, u) {
                        let c, a, l, h, f
                        return o().wrap(
                          function (t) {
                            for (;;)
                              {switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    (0, m.ensureIntNumber)(e) !==
                                    this.getChainId()
                                  ) {
                                    t.next = 2
                                    break
                                  }
                                  return t.abrupt('return', !1)
                                case 2:
                                  return (t.next = 4), this.initializeRelay()
                                case 4:
                                  if (
                                    ((l = t.sent),
                                    (h = l.inlineAddEthereumChain(
                                      e.toString(),
                                    )),
                                    this._isAuthorized() || h)
                                  ) {
                                    t.next = 9
                                    break
                                  }
                                  return (
                                    (t.next = 9),
                                    l.requestEthereumAccounts().promise
                                  )
                                case 9:
                                  return (
                                    (t.next = 11),
                                    l.addEthereumChain(
                                      e.toString(),
                                      n,
                                      s,
                                      r,
                                      i,
                                      u,
                                    ).promise
                                  )
                                case 11:
                                  return (
                                    (f = t.sent),
                                    !0 ===
                                      (null === (c = f.result) || void 0 === c
                                        ? void 0
                                        : c.isApproved) &&
                                      this.updateProviderInfo(n[0], e),
                                    t.abrupt(
                                      'return',
                                      !0 ===
                                        (null === (a = f.result) || void 0 === a
                                          ? void 0
                                          : a.isApproved),
                                    )
                                  )
                                case 14:
                                case 'end':
                                  return t.stop()
                              }}
                          },
                          t,
                          this
                        )
                      })
                    )
                    return function (e, n, r, i, o, s) {
                      return t.apply(this, arguments)
                    }
                  })()
                },
                {
                  key: 'switchEthereumChain',
                  value: (function () {
                    let t = s(
                      o().mark(function t (e) {
                        let n, r, i
                        return o().wrap(
                          function (t) {
                            for (;;)
                              {switch ((t.prev = t.next)) {
                                case 0:
                                  return (t.next = 2), this.initializeRelay()
                                case 2:
                                  return (
                                    (n = t.sent),
                                    (t.next = 5),
                                    n.switchEthereumChain(
                                      e.toString(10),
                                      this.selectedAddress || void 0,
                                    ).promise
                                  )
                                case 5:
                                  if (!(r = t.sent).errorCode) {
                                    t.next = 8
                                    break
                                  }
                                  throw b.ethErrors.provider.custom({
                                    code: r.errorCode,
                                  })
                                case 8:
                                  ;(i = r.result).isApproved &&
                                    i.rpcUrl.length > 0 &&
                                    this.updateProviderInfo(i.rpcUrl, e)
                                case 10:
                                case 'end':
                                  return t.stop()
                              }}
                          },
                          t,
                          this
                        )
                      })
                    )
                    return function (e) {
                      return t.apply(this, arguments)
                    }
                  })()
                },
                {
                  key: 'setAppInfo',
                  value: function (t, e) {
                    this.initializeRelay().then(function (n) {
                      return n.setAppInfo(t, e)
                    })
                  }
                },
                {
                  key: 'enable',
                  value: (function () {
                    let t = s(
                      o().mark(function t () {
                        let e
                        return o().wrap(
                          function (t) {
                            for (;;)
                              {switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    (null === (e = this.diagnostic) ||
                                      void 0 === e ||
                                      e.log(v.EVENTS.ETH_ACCOUNTS_STATE, {
                                        method: 'provider::enable',
                                        addresses_length:
                                          this._addresses.length,
                                        sessionIdHash: this._relay
                                          ? y.Session.hash(
                                              this._relay.session.id,
                                            )
                                          : void 0,
                                      }),
                                    !(this._addresses.length > 0))
                                  ) {
                                    t.next = 3
                                    break
                                  }
                                  return t.abrupt('return', i(this._addresses))
                                case 3:
                                  return (
                                    (t.next = 5),
                                    this._send(
                                      k.JSONRPCMethod.eth_requestAccounts,
                                    )
                                  )
                                case 5:
                                  return t.abrupt('return', t.sent)
                                case 6:
                                case 'end':
                                  return t.stop()
                              }}
                          },
                          t,
                          this
                        )
                      })
                    )
                    return function () {
                      return t.apply(this, arguments)
                    }
                  })()
                },
                {
                  key: 'close',
                  value: (function () {
                    let t = s(
                      o().mark(function t () {
                        return o().wrap(
                          function (t) {
                            for (;;)
                              {switch ((t.prev = t.next)) {
                                case 0:
                                  return (t.next = 2), this.initializeRelay()
                                case 2:
                                  t.sent.resetAndReload()
                                case 4:
                                case 'end':
                                  return t.stop()
                              }}
                          },
                          t,
                          this
                        )
                      })
                    )
                    return function () {
                      return t.apply(this, arguments)
                    }
                  })()
                },
                {
                  key: 'send',
                  value: function (t, e) {
                    let n = this
                    if (typeof t === 'string') {
                      let r = {
                        jsonrpc: '2.0',
                        id: 0,
                        method: t,
                        params: Array.isArray(e) ? e : void 0 !== e ? [e] : []
                      }
                      return this._sendRequestAsync(r).then(function (t) {
                        return t.result
                      })
                    }
                    if (typeof e === 'function') {
                      let i = t;
                        var o = e
                      return this._sendAsync(i, o)
                    }
                    if (Array.isArray(t))
                      {return t.map(function (t) {
                        return n._sendRequest(t)
                      })}
                    let s = t
                    return this._sendRequest(s)
                  }
                },
                {
                  key: 'sendAsync',
                  value: (function () {
                    let t = s(
                      o().mark(function t (e, n) {
                        let r, i
                        return o().wrap(
                          function (t) {
                            for (;;)
                              {switch ((t.prev = t.next)) {
                                case 0:
                                  if ('function' === typeof n) {
                                    t.next = 2
                                    break
                                  }
                                  throw new Error('callback is required')
                                case 2:
                                  if (!Array.isArray(e)) {
                                    t.next = 6
                                    break
                                  }
                                  return (
                                    (r = n),
                                    this._sendMultipleRequestsAsync(e)
                                      .then(function (t) {
                                        return r(null, t)
                                      })
                                      .catch(function (t) {
                                        return r(t, null)
                                      }),
                                    t.abrupt('return')
                                  )
                                case 6:
                                  return (
                                    (i = n),
                                    t.abrupt(
                                      'return',
                                      this._sendRequestAsync(e)
                                        .then(function (t) {
                                          return i(null, t)
                                        })
                                        .catch(function (t) {
                                          return i(t, null)
                                        }),
                                    )
                                  )
                                case 8:
                                case 'end':
                                  return t.stop()
                              }}
                          },
                          t,
                          this
                        )
                      })
                    )
                    return function (e, n) {
                      return t.apply(this, arguments)
                    }
                  })()
                },
                {
                  key: 'request',
                  value: (function () {
                    let t = s(
                      o().mark(function t (e) {
                        let n, r, i, s, u
                        return o().wrap(
                          function (t) {
                            for (;;)
                              {switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    e &&
                                    'object' === typeof e &&
                                    !Array.isArray(e)
                                  ) {
                                    t.next = 2
                                    break
                                  }
                                  throw b.ethErrors.rpc.invalidRequest({
                                    message:
                                      'Expected a single, non-array, object argument.',
                                    data: e,
                                  })
                                case 2:
                                  if (
                                    ((n = e.method),
                                    (r = e.params),
                                    'string' === typeof n && 0 !== n.length)
                                  ) {
                                    t.next = 5
                                    break
                                  }
                                  throw b.ethErrors.rpc.invalidRequest({
                                    message:
                                      "'args.method' must be a non-empty string.",
                                    data: e,
                                  })
                                case 5:
                                  if (
                                    void 0 === r ||
                                    Array.isArray(r) ||
                                    ('object' === typeof r && null !== r)
                                  ) {
                                    t.next = 7
                                    break
                                  }
                                  throw b.ethErrors.rpc.invalidRequest({
                                    message:
                                      "'args.params' must be an object or array if provided.",
                                    data: e,
                                  })
                                case 7:
                                  return (
                                    (i = void 0 === r ? [] : r),
                                    (s =
                                      this._relayEventManager.makeRequestId()),
                                    (t.next = 11),
                                    this._sendRequestAsync({
                                      method: n,
                                      params: i,
                                      jsonrpc: '2.0',
                                      id: s,
                                    })
                                  )
                                case 11:
                                  return (
                                    (u = t.sent), t.abrupt('return', u.result)
                                  )
                                case 13:
                                case 'end':
                                  return t.stop()
                              }}
                          },
                          t,
                          this
                        )
                      })
                    )
                    return function (e) {
                      return t.apply(this, arguments)
                    }
                  })()
                },
                {
                  key: 'scanQRCode',
                  value: (function () {
                    let t = s(
                      o().mark(function t (e) {
                        let n, r
                        return o().wrap(
                          function (t) {
                            for (;;)
                              {switch ((t.prev = t.next)) {
                                case 0:
                                  return (t.next = 2), this.initializeRelay()
                                case 2:
                                  return (
                                    (n = t.sent),
                                    (t.next = 5),
                                    n.scanQRCode((0, m.ensureRegExpString)(e))
                                      .promise
                                  )
                                case 5:
                                  if ('string' === typeof (r = t.sent).result) {
                                    t.next = 8
                                    break
                                  }
                                  throw new Error('result was not a string')
                                case 8:
                                  return t.abrupt('return', r.result)
                                case 9:
                                case 'end':
                                  return t.stop()
                              }}
                          },
                          t,
                          this
                        )
                      })
                    )
                    return function (e) {
                      return t.apply(this, arguments)
                    }
                  })()
                },
                {
                  key: 'genericRequest',
                  value: (function () {
                    let t = s(
                      o().mark(function t (e, n) {
                        let r, i
                        return o().wrap(
                          function (t) {
                            for (;;)
                              {switch ((t.prev = t.next)) {
                                case 0:
                                  return (t.next = 2), this.initializeRelay()
                                case 2:
                                  return (
                                    (r = t.sent),
                                    (t.next = 5),
                                    r.genericRequest(e, n).promise
                                  )
                                case 5:
                                  if ('string' === typeof (i = t.sent).result) {
                                    t.next = 8
                                    break
                                  }
                                  throw new Error('result was not a string')
                                case 8:
                                  return t.abrupt('return', i.result)
                                case 9:
                                case 'end':
                                  return t.stop()
                              }}
                          },
                          t,
                          this
                        )
                      })
                    )
                    return function (e, n) {
                      return t.apply(this, arguments)
                    }
                  })()
                },
                {
                  key: 'selectProvider',
                  value: (function () {
                    let t = s(
                      o().mark(function t (e) {
                        let n, r
                        return o().wrap(
                          function (t) {
                            for (;;)
                              {switch ((t.prev = t.next)) {
                                case 0:
                                  return (t.next = 2), this.initializeRelay()
                                case 2:
                                  return (
                                    (n = t.sent),
                                    (t.next = 5),
                                    n.selectProvider(e).promise
                                  )
                                case 5:
                                  if ('string' === typeof (r = t.sent).result) {
                                    t.next = 8
                                    break
                                  }
                                  throw new Error('result was not a string')
                                case 8:
                                  return t.abrupt('return', r.result)
                                case 9:
                                case 'end':
                                  return t.stop()
                              }}
                          },
                          t,
                          this
                        )
                      })
                    )
                    return function (e) {
                      return t.apply(this, arguments)
                    }
                  })()
                },
                {
                  key: 'supportsSubscriptions',
                  value: function () {
                    return !1
                  }
                },
                {
                  key: 'subscribe',
                  value: function () {
                    throw new Error('Subscriptions are not supported')
                  }
                },
                {
                  key: 'unsubscribe',
                  value: function () {
                    throw new Error('Subscriptions are not supported')
                  }
                },
                {
                  key: 'disconnect',
                  value: function () {
                    return !0
                  }
                },
                {
                  key: '_sendRequest',
                  value: function (t) {
                    let e = { jsonrpc: '2.0', id: t.id };
                      var n = t.method
                    if (
                      ((e.result = this._handleSynchronousMethods(t)),
                      void 0 === e.result)
                    )
                      {throw new Error(
                        'Coinbase Wallet does not support calling '.concat(
                          n,
                          ' synchronously without ',
                        ) +
                          'a callback. Please provide a callback parameter to call '.concat(
                            n,
                            ' ',
                          ) +
                          'asynchronously.',
                      )}
                    return e
                  }
                },
                {
                  key: '_setAddresses',
                  value: function (t, e) {
                    if (!Array.isArray(t))
                      {throw new Error('addresses is not an array')}
                    let n = t.map(function (t) {
                      return (0, m.ensureAddressString)(t)
                    })
                    JSON.stringify(n) !== JSON.stringify(this._addresses) &&
                      ((this._addresses.length > 0 &&
                        !1 === this.supportsAddressSwitching &&
                        !e) ||
                        ((this._addresses = n),
                        this.emit('accountsChanged', this._addresses),
                        this._storage.setItem(
                          g.LOCAL_STORAGE_ADDRESSES_KEY,
                          n.join(' ')
                        )))
                  }
                },
                {
                  key: '_sendRequestAsync',
                  value: function (t) {
                    let e = this
                    return new Promise(function (n, r) {
                      try {
                        let i = e._handleSynchronousMethods(t)
                        if (void 0 !== i)
                          {return n({ jsonrpc: '2.0', id: t.id, result: i })}
                        let o = e._handleAsynchronousFilterMethods(t)
                        if (void 0 !== o)
                          {return void o
                            .then(function (e) {
                              return n(
                                Object.assign(Object.assign({}, e), {
                                  id: t.id,
                                }),
                              )
                            })
                            .catch(function (t) {
                              return r(t)
                            })}
                        let s = e._handleSubscriptionMethods(t)
                        if (void 0 !== s)
                          {return void s
                            .then(function (e) {
                              return n({
                                jsonrpc: '2.0',
                                id: t.id,
                                result: e.result,
                              })
                            })
                            .catch(function (t) {
                              return r(t)
                            })}
                      } catch (u) {
                        return r(u)
                      }
                      e._handleAsynchronousMethods(t)
                        .then(function (e) {
                          return (
                            e &&
                            n(Object.assign(Object.assign({}, e), { id: t.id }))
                          )
                        })
                        .catch(function (t) {
                          return r(t)
                        })
                    })
                  }
                },
                {
                  key: '_sendMultipleRequestsAsync',
                  value: function (t) {
                    let e = this
                    return Promise.all(
                      t.map(function (t) {
                        return e._sendRequestAsync(t)
                      })
                    )
                  }
                },
                {
                  key: '_handleSynchronousMethods',
                  value: function (t) {
                    var e = t.method,
                      n = t.params || []
                    switch (e) {
                      case k.JSONRPCMethod.eth_accounts:
                        return this._eth_accounts()
                      case k.JSONRPCMethod.eth_coinbase:
                        return this._eth_coinbase()
                      case k.JSONRPCMethod.eth_uninstallFilter:
                        return this._eth_uninstallFilter(n)
                      case k.JSONRPCMethod.net_version:
                        return this._net_version()
                      case k.JSONRPCMethod.eth_chainId:
                        return this._eth_chainId()
                      default:
                        
                    }
                  },
                },
                {
                  key: '_handleAsynchronousMethods',
                  value: (function () {
                    let t = s(
                      o().mark(function t (e) {
                        let n, r, i
                        return o().wrap(
                          function (t) {
                            for (;;)
                              {switch ((t.prev = t.next)) {
                                case 0:
                                  ;(n = e.method),
                                    (r = e.params || []),
                                    (t.t0 = n),
                                    (t.next =
                                      t.t0 ===
                                      k.JSONRPCMethod.eth_requestAccounts
                                        ? 5
                                        : t.t0 === k.JSONRPCMethod.eth_sign
                                          ? 6
                                          : t.t0 ===
                                              k.JSONRPCMethod.eth_ecRecover
                                            ? 7
                                            : t.t0 ===
                                                k.JSONRPCMethod.personal_sign
                                              ? 8
                                              : t.t0 ===
                                                  k.JSONRPCMethod
                                                    .personal_ecRecover
                                                ? 9
                                                : t.t0 ===
                                                    k.JSONRPCMethod
                                                      .eth_signTransaction
                                                  ? 10
                                                  : t.t0 ===
                                                      k.JSONRPCMethod
                                                        .eth_sendRawTransaction
                                                    ? 11
                                                    : t.t0 ===
                                                        k.JSONRPCMethod
                                                          .eth_sendTransaction
                                                      ? 12
                                                      : t.t0 ===
                                                          k.JSONRPCMethod
                                                            .eth_signTypedData_v1
                                                        ? 13
                                                        : t.t0 ===
                                                            k.JSONRPCMethod
                                                              .eth_signTypedData_v2
                                                          ? 14
                                                          : t.t0 ===
                                                              k.JSONRPCMethod
                                                                .eth_signTypedData_v3
                                                            ? 15
                                                            : t.t0 ===
                                                                  k
                                                                    .JSONRPCMethod
                                                                    .eth_signTypedData_v4 ||
                                                                t.t0 ===
                                                                  k
                                                                    .JSONRPCMethod
                                                                    .eth_signTypedData
                                                              ? 16
                                                              : t.t0 ===
                                                                  k
                                                                    .JSONRPCMethod
                                                                    .cbWallet_arbitrary
                                                                ? 17
                                                                : t.t0 ===
                                                                    k
                                                                      .JSONRPCMethod
                                                                      .wallet_addEthereumChain
                                                                  ? 18
                                                                  : t.t0 ===
                                                                      k
                                                                        .JSONRPCMethod
                                                                        .wallet_switchEthereumChain
                                                                    ? 19
                                                                    : t.t0 ===
                                                                        k
                                                                          .JSONRPCMethod
                                                                          .wallet_watchAsset
                                                                      ? 20
                                                                      : 21)
                                  break
                                case 5:
                                  return t.abrupt(
                                    'return',
                                    this._eth_requestAccounts(),
                                  )
                                case 6:
                                  return t.abrupt('return', this._eth_sign(r))
                                case 7:
                                  return t.abrupt(
                                    'return',
                                    this._eth_ecRecover(r),
                                  )
                                case 8:
                                  return t.abrupt(
                                    'return',
                                    this._personal_sign(r),
                                  )
                                case 9:
                                  return t.abrupt(
                                    'return',
                                    this._personal_ecRecover(r),
                                  )
                                case 10:
                                  return t.abrupt(
                                    'return',
                                    this._eth_signTransaction(r),
                                  )
                                case 11:
                                  return t.abrupt(
                                    'return',
                                    this._eth_sendRawTransaction(r),
                                  )
                                case 12:
                                  return t.abrupt(
                                    'return',
                                    this._eth_sendTransaction(r),
                                  )
                                case 13:
                                  return t.abrupt(
                                    'return',
                                    this._eth_signTypedData_v1(r),
                                  )
                                case 14:
                                  return t.abrupt(
                                    'return',
                                    this._throwUnsupportedMethodError(),
                                  )
                                case 15:
                                  return t.abrupt(
                                    'return',
                                    this._eth_signTypedData_v3(r),
                                  )
                                case 16:
                                  return t.abrupt(
                                    'return',
                                    this._eth_signTypedData_v4(r),
                                  )
                                case 17:
                                  return t.abrupt(
                                    'return',
                                    this._cbwallet_arbitrary(r),
                                  )
                                case 18:
                                  return t.abrupt(
                                    'return',
                                    this._wallet_addEthereumChain(r),
                                  )
                                case 19:
                                  return t.abrupt(
                                    'return',
                                    this._wallet_switchEthereumChain(r),
                                  )
                                case 20:
                                  return t.abrupt(
                                    'return',
                                    this._wallet_watchAsset(r),
                                  )
                                case 21:
                                  return (t.next = 23), this.initializeRelay()
                                case 23:
                                  return (
                                    (i = t.sent),
                                    t.abrupt(
                                      'return',
                                      i.makeEthereumJSONRPCRequest(
                                        e,
                                        this.jsonRpcUrl,
                                      ),
                                    )
                                  )
                                case 25:
                                case 'end':
                                  return t.stop()
                              }}
                          },
                          t,
                          this
                        )
                      })
                    )
                    return function (e) {
                      return t.apply(this, arguments)
                    }
                  })()
                },
                {
                  key: '_handleAsynchronousFilterMethods',
                  value: function (t) {
                    let e = t.method;
                      var n = t.params || []
                    switch (e) {
                      case k.JSONRPCMethod.eth_newFilter:
                        return this._eth_newFilter(n)
                      case k.JSONRPCMethod.eth_newBlockFilter:
                        return this._eth_newBlockFilter()
                      case k.JSONRPCMethod.eth_newPendingTransactionFilter:
                        return this._eth_newPendingTransactionFilter()
                      case k.JSONRPCMethod.eth_getFilterChanges:
                        return this._eth_getFilterChanges(n)
                      case k.JSONRPCMethod.eth_getFilterLogs:
                        return this._eth_getFilterLogs(n)
                    }
                  }
                },
                {
                  key: '_handleSubscriptionMethods',
                  value: function (t) {
                    switch (t.method) {
                      case k.JSONRPCMethod.eth_subscribe:
                      case k.JSONRPCMethod.eth_unsubscribe:
                        return this._subscriptionManager.handleRequest(t)
                    }
                  }
                },
                {
                  key: '_isKnownAddress',
                  value: function (t) {
                    try {
                      let e = (0, m.ensureAddressString)(t)
                      return this._addresses
                        .map(function (t) {
                          return (0, m.ensureAddressString)(t)
                        })
                        .includes(e)
                    } catch (n) {}
                    return !1
                  }
                },
                {
                  key: '_ensureKnownAddress',
                  value: function (t) {
                    let e
                    if (!this._isKnownAddress(t))
                      {throw (
                        (null === (e = this.diagnostic) ||
                          void 0 === e ||
                          e.log(v.EVENTS.UNKNOWN_ADDRESS_ENCOUNTERED),
                        new Error('Unknown Ethereum address'))
                      )}
                  }
                },
                {
                  key: '_prepareTransactionParams',
                  value: function (t) {
                    let e = t.from
                      ? (0, m.ensureAddressString)(t.from)
                      : this.selectedAddress
                    if (!e) throw new Error('Ethereum address is unavailable')
                    return (
                      this._ensureKnownAddress(e),
                      {
                        fromAddress: e,
                        toAddress: t.to
                          ? (0, m.ensureAddressString)(t.to)
                          : null,
                        weiValue:
                          t.value != null
                            ? (0, m.ensureBN)(t.value)
                            : new p.default(0),
                        data: t.data ? (0, m.ensureBuffer)(t.data) : r.alloc(0),
                        nonce:
                          t.nonce != null
                            ? (0, m.ensureIntNumber)(t.nonce)
                            : null,
                        gasPriceInWei:
                          t.gasPrice != null
                            ? (0, m.ensureBN)(t.gasPrice)
                            : null,
                        maxFeePerGas:
                          t.maxFeePerGas != null
                            ? (0, m.ensureBN)(t.maxFeePerGas)
                            : null,
                        maxPriorityFeePerGas:
                          t.maxPriorityFeePerGas != null
                            ? (0, m.ensureBN)(t.maxPriorityFeePerGas)
                            : null,
                        gasLimit: t.gas != null ? (0, m.ensureBN)(t.gas) : null,
                        chainId: this.getChainId()
                      }
                    )
                  }
                },
                {
                  key: '_isAuthorized',
                  value: function () {
                    return this._addresses.length > 0
                  }
                },
                {
                  key: '_requireAuthorization',
                  value: function () {
                    if (!this._isAuthorized())
                      {throw b.ethErrors.provider.unauthorized({})}
                  }
                },
                {
                  key: '_throwUnsupportedMethodError',
                  value: function () {
                    throw b.ethErrors.provider.unsupportedMethod({})
                  }
                },
                {
                  key: '_signEthereumMessage',
                  value: (function () {
                    let t = s(
                      o().mark(function t (e, n, r, i) {
                        let s, u
                        return o().wrap(
                          function (t) {
                            for (;;)
                              {switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    this._ensureKnownAddress(n),
                                    (t.prev = 1),
                                    (t.next = 4),
                                    this.initializeRelay()
                                  )
                                case 4:
                                  return (
                                    (s = t.sent),
                                    (t.next = 7),
                                    s.signEthereumMessage(e, n, r, i).promise
                                  )
                                case 7:
                                  return (
                                    (u = t.sent),
                                    t.abrupt('return', {
                                      jsonrpc: '2.0',
                                      id: 0,
                                      result: u.result,
                                    })
                                  )
                                case 11:
                                  if (
                                    ((t.prev = 11),
                                    (t.t0 = t.catch(1)),
                                    'string' !== typeof t.t0.message ||
                                      !t.t0.message.match(/(denied|rejected)/i))
                                  ) {
                                    t.next = 15
                                    break
                                  }
                                  throw b.ethErrors.provider.userRejectedRequest(
                                    'User denied message signature',
                                  )
                                case 15:
                                  throw t.t0
                                case 16:
                                case 'end':
                                  return t.stop()
                              }}
                          },
                          t,
                          this,
                          [[1, 11]]
                        )
                      })
                    )
                    return function (e, n, r, i) {
                      return t.apply(this, arguments)
                    }
                  })()
                },
                {
                  key: '_ethereumAddressFromSignedMessage',
                  value: (function () {
                    let t = s(
                      o().mark(function t (e, n, r) {
                        let i, s
                        return o().wrap(
                          function (t) {
                            for (;;)
                              {switch ((t.prev = t.next)) {
                                case 0:
                                  return (t.next = 2), this.initializeRelay()
                                case 2:
                                  return (
                                    (i = t.sent),
                                    (t.next = 5),
                                    i.ethereumAddressFromSignedMessage(e, n, r)
                                      .promise
                                  )
                                case 5:
                                  return (
                                    (s = t.sent),
                                    t.abrupt('return', {
                                      jsonrpc: '2.0',
                                      id: 0,
                                      result: s.result,
                                    })
                                  )
                                case 7:
                                case 'end':
                                  return t.stop()
                              }}
                          },
                          t,
                          this
                        )
                      })
                    )
                    return function (e, n, r) {
                      return t.apply(this, arguments)
                    }
                  })()
                },
                {
                  key: '_eth_accounts',
                  value: function () {
                    return i(this._addresses)
                  }
                },
                {
                  key: '_eth_coinbase',
                  value: function () {
                    return this.selectedAddress || null
                  }
                },
                {
                  key: '_net_version',
                  value: function () {
                    return this.getChainId().toString(10)
                  }
                },
                {
                  key: '_eth_chainId',
                  value: function () {
                    return (0, m.hexStringFromIntNumber)(this.getChainId())
                  }
                },
                {
                  key: 'getChainId',
                  value: function () {
                    let t = this._storage.getItem(S)
                    if (!t) return (0, m.ensureIntNumber)(this._chainIdFromOpts)
                    let e = parseInt(t, 10)
                    return (0, m.ensureIntNumber)(e)
                  }
                },
                {
                  key: '_eth_requestAccounts',
                  value: (function () {
                    let t = s(
                      o().mark(function t () {
                        let e, n, r
                        return o().wrap(
                          function (t) {
                            for (;;)
                              {switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    (null === (e = this.diagnostic) ||
                                      void 0 === e ||
                                      e.log(v.EVENTS.ETH_ACCOUNTS_STATE, {
                                        method:
                                          'provider::_eth_requestAccounts',
                                        addresses_length:
                                          this._addresses.length,
                                        sessionIdHash: this._relay
                                          ? y.Session.hash(
                                              this._relay.session.id,
                                            )
                                          : void 0,
                                      }),
                                    !(this._addresses.length > 0))
                                  ) {
                                    t.next = 3
                                    break
                                  }
                                  return t.abrupt(
                                    'return',
                                    Promise.resolve({
                                      jsonrpc: '2.0',
                                      id: 0,
                                      result: this._addresses,
                                    }),
                                  )
                                case 3:
                                  return (
                                    (t.prev = 3),
                                    (t.next = 6),
                                    this.initializeRelay()
                                  )
                                case 6:
                                  return (
                                    (r = t.sent),
                                    (t.next = 9),
                                    r.requestEthereumAccounts().promise
                                  )
                                case 9:
                                  ;(n = t.sent), (t.next = 17)
                                  break
                                case 12:
                                  if (
                                    ((t.prev = 12),
                                    (t.t0 = t.catch(3)),
                                    'string' !== typeof t.t0.message ||
                                      !t.t0.message.match(/(denied|rejected)/i))
                                  ) {
                                    t.next = 16
                                    break
                                  }
                                  throw b.ethErrors.provider.userRejectedRequest(
                                    'User denied account authorization',
                                  )
                                case 16:
                                  throw t.t0
                                case 17:
                                  if (n.result) {
                                    t.next = 19
                                    break
                                  }
                                  throw new Error('accounts received is empty')
                                case 19:
                                  if (
                                    (this._setAddresses(n.result),
                                    this.isLedger || this.isCoinbaseBrowser)
                                  ) {
                                    t.next = 23
                                    break
                                  }
                                  return (
                                    (t.next = 23),
                                    this.switchEthereumChain(this.getChainId())
                                  )
                                case 23:
                                  return t.abrupt('return', {
                                    jsonrpc: '2.0',
                                    id: 0,
                                    result: this._addresses,
                                  })
                                case 24:
                                case 'end':
                                  return t.stop()
                              }}
                          },
                          t,
                          this,
                          [[3, 12]]
                        )
                      })
                    )
                    return function () {
                      return t.apply(this, arguments)
                    }
                  })()
                },
                {
                  key: '_eth_sign',
                  value: function (t) {
                    this._requireAuthorization()
                    let e = (0, m.ensureAddressString)(t[0]);
                      var n = (0, m.ensureBuffer)(t[1])
                    return this._signEthereumMessage(n, e, !1)
                  }
                },
                {
                  key: '_eth_ecRecover',
                  value: function (t) {
                    let e = (0, m.ensureBuffer)(t[0]);
                      var n = (0, m.ensureBuffer)(t[1])
                    return this._ethereumAddressFromSignedMessage(e, n, !1)
                  }
                },
                {
                  key: '_personal_sign',
                  value: function (t) {
                    this._requireAuthorization()
                    let e = (0, m.ensureBuffer)(t[0]);
                      var n = (0, m.ensureAddressString)(t[1])
                    return this._signEthereumMessage(e, n, !0)
                  }
                },
                {
                  key: '_personal_ecRecover',
                  value: function (t) {
                    let e = (0, m.ensureBuffer)(t[0]);
                      var n = (0, m.ensureBuffer)(t[1])
                    return this._ethereumAddressFromSignedMessage(e, n, !0)
                  }
                },
                {
                  key: '_eth_signTransaction',
                  value: (function () {
                    let t = s(
                      o().mark(function t (e) {
                        let n, r, i
                        return o().wrap(
                          function (t) {
                            for (;;)
                              {switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    this._requireAuthorization(),
                                    (n = this._prepareTransactionParams(
                                      e[0] || {},
                                    )),
                                    (t.prev = 2),
                                    (t.next = 5),
                                    this.initializeRelay()
                                  )
                                case 5:
                                  return (
                                    (r = t.sent),
                                    (t.next = 8),
                                    r.signEthereumTransaction(n).promise
                                  )
                                case 8:
                                  return (
                                    (i = t.sent),
                                    t.abrupt('return', {
                                      jsonrpc: '2.0',
                                      id: 0,
                                      result: i.result,
                                    })
                                  )
                                case 12:
                                  if (
                                    ((t.prev = 12),
                                    (t.t0 = t.catch(2)),
                                    'string' !== typeof t.t0.message ||
                                      !t.t0.message.match(/(denied|rejected)/i))
                                  ) {
                                    t.next = 16
                                    break
                                  }
                                  throw b.ethErrors.provider.userRejectedRequest(
                                    'User denied transaction signature',
                                  )
                                case 16:
                                  throw t.t0
                                case 17:
                                case 'end':
                                  return t.stop()
                              }}
                          },
                          t,
                          this,
                          [[2, 12]]
                        )
                      })
                    )
                    return function (e) {
                      return t.apply(this, arguments)
                    }
                  })()
                },
                {
                  key: '_eth_sendRawTransaction',
                  value: (function () {
                    let t = s(
                      o().mark(function t (e) {
                        let n, r, i
                        return o().wrap(
                          function (t) {
                            for (;;)
                              {switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (n = (0, m.ensureBuffer)(e[0])),
                                    (t.next = 3),
                                    this.initializeRelay()
                                  )
                                case 3:
                                  return (
                                    (r = t.sent),
                                    (t.next = 6),
                                    r.submitEthereumTransaction(
                                      n,
                                      this.getChainId(),
                                    ).promise
                                  )
                                case 6:
                                  return (
                                    (i = t.sent),
                                    t.abrupt('return', {
                                      jsonrpc: '2.0',
                                      id: 0,
                                      result: i.result,
                                    })
                                  )
                                case 8:
                                case 'end':
                                  return t.stop()
                              }}
                          },
                          t,
                          this
                        )
                      })
                    )
                    return function (e) {
                      return t.apply(this, arguments)
                    }
                  })()
                },
                {
                  key: '_eth_sendTransaction',
                  value: (function () {
                    let t = s(
                      o().mark(function t (e) {
                        let n, r, i
                        return o().wrap(
                          function (t) {
                            for (;;)
                              {switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    this._requireAuthorization(),
                                    (n = this._prepareTransactionParams(
                                      e[0] || {},
                                    )),
                                    (t.prev = 2),
                                    (t.next = 5),
                                    this.initializeRelay()
                                  )
                                case 5:
                                  return (
                                    (r = t.sent),
                                    (t.next = 8),
                                    r.signAndSubmitEthereumTransaction(n)
                                      .promise
                                  )
                                case 8:
                                  return (
                                    (i = t.sent),
                                    t.abrupt('return', {
                                      jsonrpc: '2.0',
                                      id: 0,
                                      result: i.result,
                                    })
                                  )
                                case 12:
                                  if (
                                    ((t.prev = 12),
                                    (t.t0 = t.catch(2)),
                                    'string' !== typeof t.t0.message ||
                                      !t.t0.message.match(/(denied|rejected)/i))
                                  ) {
                                    t.next = 16
                                    break
                                  }
                                  throw b.ethErrors.provider.userRejectedRequest(
                                    'User denied transaction signature',
                                  )
                                case 16:
                                  throw t.t0
                                case 17:
                                case 'end':
                                  return t.stop()
                              }}
                          },
                          t,
                          this,
                          [[2, 12]]
                        )
                      })
                    )
                    return function (e) {
                      return t.apply(this, arguments)
                    }
                  })()
                },
                {
                  key: '_eth_signTypedData_v1',
                  value: (function () {
                    let t = s(
                      o().mark(function t (e) {
                        let n, r, i, s
                        return o().wrap(
                          function (t) {
                            for (;;)
                              {switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    this._requireAuthorization(),
                                    (n = (0, m.ensureParsedJSONObject)(e[0])),
                                    (r = (0, m.ensureAddressString)(e[1])),
                                    this._ensureKnownAddress(r),
                                    (i = w.default.hashForSignTypedDataLegacy({
                                      data: n,
                                    })),
                                    (s = JSON.stringify(n, null, 2)),
                                    t.abrupt(
                                      'return',
                                      this._signEthereumMessage(i, r, !1, s),
                                    )
                                  )
                                case 7:
                                case 'end':
                                  return t.stop()
                              }}
                          },
                          t,
                          this
                        )
                      })
                    )
                    return function (e) {
                      return t.apply(this, arguments)
                    }
                  })()
                },
                {
                  key: '_eth_signTypedData_v3',
                  value: (function () {
                    let t = s(
                      o().mark(function t (e) {
                        let n, r, i, s
                        return o().wrap(
                          function (t) {
                            for (;;)
                              {switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    this._requireAuthorization(),
                                    (n = (0, m.ensureAddressString)(e[0])),
                                    (r = (0, m.ensureParsedJSONObject)(e[1])),
                                    this._ensureKnownAddress(n),
                                    (i = w.default.hashForSignTypedData_v3({
                                      data: r,
                                    })),
                                    (s = JSON.stringify(r, null, 2)),
                                    t.abrupt(
                                      'return',
                                      this._signEthereumMessage(i, n, !1, s),
                                    )
                                  )
                                case 7:
                                case 'end':
                                  return t.stop()
                              }}
                          },
                          t,
                          this
                        )
                      })
                    )
                    return function (e) {
                      return t.apply(this, arguments)
                    }
                  })()
                },
                {
                  key: '_eth_signTypedData_v4',
                  value: (function () {
                    let t = s(
                      o().mark(function t (e) {
                        let n, r, i, s
                        return o().wrap(
                          function (t) {
                            for (;;)
                              {switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    this._requireAuthorization(),
                                    (n = (0, m.ensureAddressString)(e[0])),
                                    (r = (0, m.ensureParsedJSONObject)(e[1])),
                                    this._ensureKnownAddress(n),
                                    (i = w.default.hashForSignTypedData_v4({
                                      data: r,
                                    })),
                                    (s = JSON.stringify(r, null, 2)),
                                    t.abrupt(
                                      'return',
                                      this._signEthereumMessage(i, n, !1, s),
                                    )
                                  )
                                case 7:
                                case 'end':
                                  return t.stop()
                              }}
                          },
                          t,
                          this
                        )
                      })
                    )
                    return function (e) {
                      return t.apply(this, arguments)
                    }
                  })()
                },
                {
                  key: '_cbwallet_arbitrary',
                  value: (function () {
                    let t = s(
                      o().mark(function t (e) {
                        let n, r, i
                        return o().wrap(
                          function (t) {
                            for (;;)
                              {switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    ((n = e[0]), 'string' === typeof (r = e[1]))
                                  ) {
                                    t.next = 4
                                    break
                                  }
                                  throw new Error('parameter must be a string')
                                case 4:
                                  if ('object' === typeof n && null !== n) {
                                    t.next = 6
                                    break
                                  }
                                  throw new Error('parameter must be an object')
                                case 6:
                                  return (t.next = 8), this.genericRequest(n, r)
                                case 8:
                                  return (
                                    (i = t.sent),
                                    t.abrupt('return', {
                                      jsonrpc: '2.0',
                                      id: 0,
                                      result: i,
                                    })
                                  )
                                case 10:
                                case 'end':
                                  return t.stop()
                              }}
                          },
                          t,
                          this
                        )
                      })
                    )
                    return function (e) {
                      return t.apply(this, arguments)
                    }
                  })()
                },
                {
                  key: '_wallet_addEthereumChain',
                  value: (function () {
                    let t = s(
                      o().mark(function t (e) {
                        let n, r, i, s, u, c
                        return o().wrap(
                          function (t) {
                            for (;;)
                              {switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    ((u = e[0]),
                                    0 !==
                                      (null === (n = u.rpcUrls) || void 0 === n
                                        ? void 0
                                        : n.length))
                                  ) {
                                    t.next = 3
                                    break
                                  }
                                  return t.abrupt('return', {
                                    jsonrpc: '2.0',
                                    id: 0,
                                    error: {
                                      code: 2,
                                      message:
                                        'please pass in at least 1 rpcUrl',
                                    },
                                  })
                                case 3:
                                  if (
                                    u.chainName &&
                                    '' !== u.chainName.trim()
                                  ) {
                                    t.next = 5
                                    break
                                  }
                                  throw b.ethErrors.provider.custom({
                                    code: 0,
                                    message: 'chainName is a required field',
                                  })
                                case 5:
                                  if (u.nativeCurrency) {
                                    t.next = 7
                                    break
                                  }
                                  throw b.ethErrors.provider.custom({
                                    code: 0,
                                    message:
                                      'nativeCurrency is a required field',
                                  })
                                case 7:
                                  return (
                                    (c = parseInt(u.chainId, 16)),
                                    (t.next = 10),
                                    this.addEthereumChain(
                                      c,
                                      null !== (r = u.rpcUrls) && void 0 !== r
                                        ? r
                                        : [],
                                      null !== (i = u.blockExplorerUrls) &&
                                        void 0 !== i
                                        ? i
                                        : [],
                                      u.chainName,
                                      null !== (s = u.iconUrls) && void 0 !== s
                                        ? s
                                        : [],
                                      u.nativeCurrency,
                                    )
                                  )
                                case 10:
                                  if (!t.sent) {
                                    t.next = 15
                                    break
                                  }
                                  return t.abrupt('return', {
                                    jsonrpc: '2.0',
                                    id: 0,
                                    result: null,
                                  })
                                case 15:
                                  return t.abrupt('return', {
                                    jsonrpc: '2.0',
                                    id: 0,
                                    error: {
                                      code: 2,
                                      message: 'unable to add ethereum chain',
                                    },
                                  })
                                case 16:
                                case 'end':
                                  return t.stop()
                              }}
                          },
                          t,
                          this
                        )
                      })
                    )
                    return function (e) {
                      return t.apply(this, arguments)
                    }
                  })()
                },
                {
                  key: '_wallet_switchEthereumChain',
                  value: (function () {
                    let t = s(
                      o().mark(function t (e) {
                        let n
                        return o().wrap(
                          function (t) {
                            for (;;)
                              {switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (n = e[0]),
                                    (t.next = 3),
                                    this.switchEthereumChain(
                                      parseInt(n.chainId, 16),
                                    )
                                  )
                                case 3:
                                  return t.abrupt('return', {
                                    jsonrpc: '2.0',
                                    id: 0,
                                    result: null,
                                  })
                                case 4:
                                case 'end':
                                  return t.stop()
                              }}
                          },
                          t,
                          this
                        )
                      })
                    )
                    return function (e) {
                      return t.apply(this, arguments)
                    }
                  })()
                },
                {
                  key: '_wallet_watchAsset',
                  value: (function () {
                    let t = s(
                      o().mark(function t (e) {
                        let n, r, i, s, u, c, a, l
                        return o().wrap(
                          function (t) {
                            for (;;)
                              {switch ((t.prev = t.next)) {
                                case 0:
                                  if ((n = Array.isArray(e) ? e[0] : e).type) {
                                    t.next = 3
                                    break
                                  }
                                  throw b.ethErrors.rpc.invalidParams({
                                    message: 'Type is required',
                                  })
                                case 3:
                                  if (
                                    'ERC20' ===
                                    (null === n || void 0 === n
                                      ? void 0
                                      : n.type)
                                  ) {
                                    t.next = 5
                                    break
                                  }
                                  throw b.ethErrors.rpc.invalidParams({
                                    message: "Asset of type '".concat(
                                      n.type,
                                      "' is not supported",
                                    ),
                                  })
                                case 5:
                                  if (
                                    null === n || void 0 === n
                                      ? void 0
                                      : n.options
                                  ) {
                                    t.next = 7
                                    break
                                  }
                                  throw b.ethErrors.rpc.invalidParams({
                                    message: 'Options are required',
                                  })
                                case 7:
                                  if (
                                    null === n || void 0 === n
                                      ? void 0
                                      : n.options.address
                                  ) {
                                    t.next = 9
                                    break
                                  }
                                  throw b.ethErrors.rpc.invalidParams({
                                    message: 'Address is required',
                                  })
                                case 9:
                                  return (
                                    (r = this.getChainId()),
                                    (i = n.options),
                                    (s = i.address),
                                    (u = i.symbol),
                                    (c = i.image),
                                    (a = i.decimals),
                                    (t.next = 13),
                                    this.watchAsset(n.type, s, u, a, c, r)
                                  )
                                case 13:
                                  return (
                                    (l = t.sent),
                                    t.abrupt('return', {
                                      jsonrpc: '2.0',
                                      id: 0,
                                      result: l,
                                    })
                                  )
                                case 15:
                                case 'end':
                                  return t.stop()
                              }}
                          },
                          t,
                          this
                        )
                      })
                    )
                    return function (e) {
                      return t.apply(this, arguments)
                    }
                  })()
                },
                {
                  key: '_eth_uninstallFilter',
                  value: function (t) {
                    let e = (0, m.ensureHexString)(t[0])
                    return this._filterPolyfill.uninstallFilter(e)
                  }
                },
                {
                  key: '_eth_newFilter',
                  value: (function () {
                    let t = s(
                      o().mark(function t (e) {
                        let n, r
                        return o().wrap(
                          function (t) {
                            for (;;)
                              {switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (n = e[0]),
                                    (t.next = 3),
                                    this._filterPolyfill.newFilter(n)
                                  )
                                case 3:
                                  return (
                                    (r = t.sent),
                                    t.abrupt('return', {
                                      jsonrpc: '2.0',
                                      id: 0,
                                      result: r,
                                    })
                                  )
                                case 5:
                                case 'end':
                                  return t.stop()
                              }}
                          },
                          t,
                          this
                        )
                      })
                    )
                    return function (e) {
                      return t.apply(this, arguments)
                    }
                  })()
                },
                {
                  key: '_eth_newBlockFilter',
                  value: (function () {
                    let t = s(
                      o().mark(function t () {
                        let e
                        return o().wrap(
                          function (t) {
                            for (;;)
                              {switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (t.next = 2),
                                    this._filterPolyfill.newBlockFilter()
                                  )
                                case 2:
                                  return (
                                    (e = t.sent),
                                    t.abrupt('return', {
                                      jsonrpc: '2.0',
                                      id: 0,
                                      result: e,
                                    })
                                  )
                                case 4:
                                case 'end':
                                  return t.stop()
                              }}
                          },
                          t,
                          this
                        )
                      })
                    )
                    return function () {
                      return t.apply(this, arguments)
                    }
                  })()
                },
                {
                  key: '_eth_newPendingTransactionFilter',
                  value: (function () {
                    let t = s(
                      o().mark(function t () {
                        let e
                        return o().wrap(
                          function (t) {
                            for (;;)
                              {switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (t.next = 2),
                                    this._filterPolyfill.newPendingTransactionFilter()
                                  )
                                case 2:
                                  return (
                                    (e = t.sent),
                                    t.abrupt('return', {
                                      jsonrpc: '2.0',
                                      id: 0,
                                      result: e,
                                    })
                                  )
                                case 4:
                                case 'end':
                                  return t.stop()
                              }}
                          },
                          t,
                          this
                        )
                      })
                    )
                    return function () {
                      return t.apply(this, arguments)
                    }
                  })()
                },
                {
                  key: '_eth_getFilterChanges',
                  value: function (t) {
                    let e = (0, m.ensureHexString)(t[0])
                    return this._filterPolyfill.getFilterChanges(e)
                  }
                },
                {
                  key: '_eth_getFilterLogs',
                  value: function (t) {
                    let e = (0, m.ensureHexString)(t[0])
                    return this._filterPolyfill.getFilterLogs(e)
                  }
                },
                {
                  key: 'initializeRelay',
                  value: function () {
                    let t = this
                    return this._relay
                      ? Promise.resolve(this._relay)
                      : this._relayProvider().then(function (e) {
                        return (
                          e.setAccountsCallback(function (e, n) {
                            return t._setAddresses(e, n)
                          }),
                          e.setChainCallback(function (e, n) {
                            t.updateProviderInfo(n, parseInt(e, 10))
                          }),
                          e.setDappDefaultChainCallback(t._chainIdFromOpts),
                          (t._relay = e),
                          e
                        )
                      })
                  }
                },
              ]),
              n
            )
          })(d.default)
        e.CoinbaseWalletProvider = C
      },
      57907: function (t, e, n) {
        'use strict'
        let r = n(861).default;
          var i = n(17061).default;
          var o = n(17156).default;
          var s = n(56690).default;
          var u = n(89728).default
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.filterFromParam = e.FilterPolyfill = void 0)
        let c = n(52352);
          var a = n(39830);
          var l = { jsonrpc: '2.0', id: 0 };
          var h = (function () {
            function t (e) {
              s(this, t),
              (this.logFilters = new Map()),
              (this.blockFilters = new Set()),
              (this.pendingTransactionFilters = new Set()),
              (this.cursors = new Map()),
              (this.timeouts = new Map()),
              (this.nextFilterId = (0, c.IntNumber)(1)),
              (this.provider = e)
            }
            return (
              u(t, [
                {
                  key: 'newFilter',
                  value: (function () {
                    let t = o(
                      i().mark(function t (e) {
                        let n, r, o
                        return i().wrap(
                          function (t) {
                            for (;;)
                              {switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (n = f(e)),
                                    (r = this.makeFilterId()),
                                    (t.next = 4),
                                    this.setInitialCursorPosition(
                                      r,
                                      n.fromBlock,
                                    )
                                  )
                                case 4:
                                  return (
                                    (o = t.sent),
                                    console.log(
                                      'Installing new log filter('.concat(
                                        r,
                                        '):',
                                      ),
                                      n,
                                      'initial cursor position:',
                                      o,
                                    ),
                                    this.logFilters.set(r, n),
                                    this.setFilterTimeout(r),
                                    t.abrupt(
                                      'return',
                                      (0, a.hexStringFromIntNumber)(r),
                                    )
                                  )
                                case 9:
                                case 'end':
                                  return t.stop()
                              }}
                          },
                          t,
                          this
                        )
                      })
                    )
                    return function (e) {
                      return t.apply(this, arguments)
                    }
                  })()
                },
                {
                  key: 'newBlockFilter',
                  value: (function () {
                    let t = o(
                      i().mark(function t () {
                        let e, n
                        return i().wrap(
                          function (t) {
                            for (;;)
                              {switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (e = this.makeFilterId()),
                                    (t.next = 3),
                                    this.setInitialCursorPosition(e, 'latest')
                                  )
                                case 3:
                                  return (
                                    (n = t.sent),
                                    console.log(
                                      'Installing new block filter ('.concat(
                                        e,
                                        ') with initial cursor position:',
                                      ),
                                      n,
                                    ),
                                    this.blockFilters.add(e),
                                    this.setFilterTimeout(e),
                                    t.abrupt(
                                      'return',
                                      (0, a.hexStringFromIntNumber)(e),
                                    )
                                  )
                                case 8:
                                case 'end':
                                  return t.stop()
                              }}
                          },
                          t,
                          this
                        )
                      })
                    )
                    return function () {
                      return t.apply(this, arguments)
                    }
                  })()
                },
                {
                  key: 'newPendingTransactionFilter',
                  value: (function () {
                    let t = o(
                      i().mark(function t () {
                        let e, n
                        return i().wrap(
                          function (t) {
                            for (;;)
                              {switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (e = this.makeFilterId()),
                                    (t.next = 3),
                                    this.setInitialCursorPosition(e, 'latest')
                                  )
                                case 3:
                                  return (
                                    (n = t.sent),
                                    console.log(
                                      'Installing new block filter ('.concat(
                                        e,
                                        ') with initial cursor position:',
                                      ),
                                      n,
                                    ),
                                    this.pendingTransactionFilters.add(e),
                                    this.setFilterTimeout(e),
                                    t.abrupt(
                                      'return',
                                      (0, a.hexStringFromIntNumber)(e),
                                    )
                                  )
                                case 8:
                                case 'end':
                                  return t.stop()
                              }}
                          },
                          t,
                          this
                        )
                      })
                    )
                    return function () {
                      return t.apply(this, arguments)
                    }
                  })()
                },
                {
                  key: 'uninstallFilter',
                  value: function (t) {
                    let e = (0, a.intNumberFromHexString)(t)
                    return (
                      console.log('Uninstalling filter ('.concat(e, ')')),
                      this.deleteFilter(e),
                      !0
                    )
                  }
                },
                {
                  key: 'getFilterChanges',
                  value: function (t) {
                    let e = (0, a.intNumberFromHexString)(t)
                    return (
                      this.timeouts.has(e) && this.setFilterTimeout(e),
                      this.logFilters.has(e)
                        ? this.getLogFilterChanges(e)
                        : this.blockFilters.has(e)
                          ? this.getBlockFilterChanges(e)
                          : this.pendingTransactionFilters.has(e)
                            ? this.getPendingTransactionFilterChanges(e)
                            : Promise.resolve(v())
                    )
                  }
                },
                {
                  key: 'getFilterLogs',
                  value: (function () {
                    let t = o(
                      i().mark(function t (e) {
                        let n, r
                        return i().wrap(
                          function (t) {
                            for (;;)
                              {switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    ((n = (0, a.intNumberFromHexString)(e)),
                                    (r = this.logFilters.get(n)))
                                  ) {
                                    t.next = 4
                                    break
                                  }
                                  return t.abrupt('return', v())
                                case 4:
                                  return t.abrupt(
                                    'return',
                                    this.sendAsyncPromise(
                                      Object.assign(Object.assign({}, l), {
                                        method: 'eth_getLogs',
                                        params: [d(r)],
                                      }),
                                    ),
                                  )
                                case 5:
                                case 'end':
                                  return t.stop()
                              }}
                          },
                          t,
                          this
                        )
                      })
                    )
                    return function (e) {
                      return t.apply(this, arguments)
                    }
                  })()
                },
                {
                  key: 'makeFilterId',
                  value: function () {
                    return (0, c.IntNumber)(++this.nextFilterId)
                  }
                },
                {
                  key: 'sendAsyncPromise',
                  value: function (t) {
                    let e = this
                    return new Promise(function (n, r) {
                      e.provider.sendAsync(t, function (t, e) {
                        return t
                          ? r(t)
                          : Array.isArray(e) || e == null
                            ? r(
                              new Error(
                                'unexpected response received: '.concat(
                                  JSON.stringify(e)
                                  ),
                              ),
                            )
                            : void n(e)
                      })
                    })
                  }
                },
                {
                  key: 'deleteFilter',
                  value: function (t) {
                    console.log('Deleting filter ('.concat(t, ')')),
                    this.logFilters.delete(t),
                    this.blockFilters.delete(t),
                    this.pendingTransactionFilters.delete(t),
                    this.cursors.delete(t),
                    this.timeouts.delete(t)
                  }
                },
                {
                  key: 'getLogFilterChanges',
                  value: (function () {
                    let t = o(
                      i().mark(function t (e) {
                        let n, o, s, u, h, f, p, b
                        return i().wrap(
                          function (t) {
                            for (;;)
                              {switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    ((n = this.logFilters.get(e)),
                                    (o = this.cursors.get(e)) && n)
                                  ) {
                                    t.next = 4
                                    break
                                  }
                                  return t.abrupt('return', v())
                                case 4:
                                  return (
                                    (t.next = 6), this.getCurrentBlockHeight()
                                  )
                                case 6:
                                  if (
                                    ((s = t.sent),
                                    (u =
                                      'latest' === n.toBlock ? s : n.toBlock),
                                    !(o > s))
                                  ) {
                                    t.next = 10
                                    break
                                  }
                                  return t.abrupt('return', y())
                                case 10:
                                  if (!(o > n.toBlock)) {
                                    t.next = 12
                                    break
                                  }
                                  return t.abrupt('return', y())
                                case 12:
                                  return (
                                    console.log(
                                      'Fetching logs from '
                                        .concat(o, ' to ')
                                        .concat(u, ' for filter ')
                                        .concat(e),
                                    ),
                                    (t.next = 15),
                                    this.sendAsyncPromise(
                                      Object.assign(Object.assign({}, l), {
                                        method: 'eth_getLogs',
                                        params: [
                                          d(
                                            Object.assign(
                                              Object.assign({}, n),
                                              { fromBlock: o, toBlock: u },
                                            ),
                                          ),
                                        ],
                                      }),
                                    )
                                  )
                                case 15:
                                  return (
                                    (h = t.sent),
                                    Array.isArray(h.result) &&
                                      ((f = h.result.map(function (t) {
                                        return (0, a.intNumberFromHexString)(
                                          t.blockNumber || '0x0',
                                        )
                                      })),
                                      (p = Math.max.apply(Math, r(f))) &&
                                        p > o &&
                                        ((b = (0, c.IntNumber)(p + 1)),
                                        console.log(
                                          'Moving cursor position for filter ('
                                            .concat(e, ') from ')
                                            .concat(o, ' to ')
                                            .concat(b),
                                        ),
                                        this.cursors.set(e, b))),
                                    t.abrupt('return', h)
                                  )
                                case 18:
                                case 'end':
                                  return t.stop()
                              }}
                          },
                          t,
                          this
                        )
                      })
                    )
                    return function (e) {
                      return t.apply(this, arguments)
                    }
                  })()
                },
                {
                  key: 'getBlockFilterChanges',
                  value: (function () {
                    let t = o(
                      i().mark(function t (e) {
                        let n;
                          var r;
                          var o;
                          var s;
                          var u = this
                        return i().wrap(
                          function (t) {
                            for (;;)
                              {switch ((t.prev = t.next)) {
                                case 0:
                                  if ((n = this.cursors.get(e))) {
                                    t.next = 3
                                    break
                                  }
                                  return t.abrupt('return', v())
                                case 3:
                                  return (
                                    (t.next = 5), this.getCurrentBlockHeight()
                                  )
                                case 5:
                                  if (((r = t.sent), !(n > r))) {
                                    t.next = 8
                                    break
                                  }
                                  return t.abrupt('return', y())
                                case 8:
                                  return (
                                    console.log(
                                      'Fetching blocks from '
                                        .concat(n, ' to ')
                                        .concat(r, ' for filter (')
                                        .concat(e, ')'),
                                    ),
                                    (t.next = 11),
                                    Promise.all(
                                      (0, a.range)(n, r + 1).map(function (t) {
                                        return u.getBlockHashByNumber(
                                          (0, c.IntNumber)(t),
                                        )
                                      }),
                                    )
                                  )
                                case 11:
                                  return (
                                    (o = t.sent.filter(function (t) {
                                      return !!t
                                    })),
                                    (s = (0, c.IntNumber)(n + o.length)),
                                    console.log(
                                      'Moving cursor position for filter ('
                                        .concat(e, ') from ')
                                        .concat(n, ' to ')
                                        .concat(s),
                                    ),
                                    this.cursors.set(e, s),
                                    t.abrupt(
                                      'return',
                                      Object.assign(Object.assign({}, l), {
                                        result: o,
                                      }),
                                    )
                                  )
                                case 16:
                                case 'end':
                                  return t.stop()
                              }}
                          },
                          t,
                          this
                        )
                      })
                    )
                    return function (e) {
                      return t.apply(this, arguments)
                    }
                  })()
                },
                {
                  key: 'getPendingTransactionFilterChanges',
                  value: (function () {
                    let t = o(
                      i().mark(function t (e) {
                        return i().wrap(function (t) {
                          for (;;)
                            {switch ((t.prev = t.next)) {
                              case 0:
                                return t.abrupt('return', Promise.resolve(y()))
                              case 1:
                              case 'end':
                                return t.stop()
                            }}
                        }, t)
                      })
                    )
                    return function (e) {
                      return t.apply(this, arguments)
                    }
                  })()
                },
                {
                  key: 'setInitialCursorPosition',
                  value: (function () {
                    let t = o(
                      i().mark(function t (e, n) {
                        let r, o
                        return i().wrap(
                          function (t) {
                            for (;;)
                              {switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (t.next = 2), this.getCurrentBlockHeight()
                                  )
                                case 2:
                                  return (
                                    (r = t.sent),
                                    (o =
                                      'number' === typeof n && n > r ? n : r),
                                    this.cursors.set(e, o),
                                    t.abrupt('return', o)
                                  )
                                case 6:
                                case 'end':
                                  return t.stop()
                              }}
                          },
                          t,
                          this
                        )
                      })
                    )
                    return function (e, n) {
                      return t.apply(this, arguments)
                    }
                  })()
                },
                {
                  key: 'setFilterTimeout',
                  value: function (t) {
                    let e = this;
                      var n = this.timeouts.get(t)
                    n && window.clearTimeout(n)
                    let r = window.setTimeout(function () {
                      console.log('Filter ('.concat(t, ') timed out')),
                      e.deleteFilter(t)
                    }, 3e5)
                    this.timeouts.set(t, r)
                  }
                },
                {
                  key: 'getCurrentBlockHeight',
                  value: (function () {
                    let t = o(
                      i().mark(function t () {
                        let e, n
                        return i().wrap(
                          function (t) {
                            for (;;)
                              {switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (t.next = 2),
                                    this.sendAsyncPromise(
                                      Object.assign(Object.assign({}, l), {
                                        method: 'eth_blockNumber',
                                        params: [],
                                      }),
                                    )
                                  )
                                case 2:
                                  return (
                                    (e = t.sent),
                                    (n = e.result),
                                    t.abrupt(
                                      'return',
                                      (0, a.intNumberFromHexString)(
                                        (0, a.ensureHexString)(n),
                                      ),
                                    )
                                  )
                                case 5:
                                case 'end':
                                  return t.stop()
                              }}
                          },
                          t,
                          this
                        )
                      })
                    )
                    return function () {
                      return t.apply(this, arguments)
                    }
                  })()
                },
                {
                  key: 'getBlockHashByNumber',
                  value: (function () {
                    let t = o(
                      i().mark(function t (e) {
                        let n
                        return i().wrap(
                          function (t) {
                            for (;;)
                              {switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (t.next = 2),
                                    this.sendAsyncPromise(
                                      Object.assign(Object.assign({}, l), {
                                        method: 'eth_getBlockByNumber',
                                        params: [
                                          (0, a.hexStringFromIntNumber)(e),
                                          !1,
                                        ],
                                      }),
                                    )
                                  )
                                case 2:
                                  if (
                                    !(n = t.sent).result ||
                                    'string' !== typeof n.result.hash
                                  ) {
                                    t.next = 5
                                    break
                                  }
                                  return t.abrupt(
                                    'return',
                                    (0, a.ensureHexString)(n.result.hash),
                                  )
                                case 5:
                                  return t.abrupt('return', null)
                                case 6:
                                case 'end':
                                  return t.stop()
                              }}
                          },
                          t,
                          this
                        )
                      })
                    )
                    return function (e) {
                      return t.apply(this, arguments)
                    }
                  })()
                },
              ]),
              t
            )
          })()
        function f (t) {
          return {
            fromBlock: p(t.fromBlock),
            toBlock: p(t.toBlock),
            addresses:
              void 0 === t.address
                ? null
                : Array.isArray(t.address)
                  ? t.address
                  : [t.address],
            topics: t.topics || []
          }
        }
        function d (t) {
          let e = {
            fromBlock: b(t.fromBlock),
            toBlock: b(t.toBlock),
            topics: t.topics
          }
          return t.addresses !== null && (e.address = t.addresses), e
        }
        function p (t) {
          if (void 0 === t || t === 'latest' || t === 'pending') return 'latest'
          if (t === 'earliest') return (0, c.IntNumber)(0)
          if ((0, a.isHexString)(t)) return (0, a.intNumberFromHexString)(t)
          throw new Error('Invalid block option: '.concat(String(t)))
        }
        function b (t) {
          return t === 'latest' ? t : (0, a.hexStringFromIntNumber)(t)
        }
        function v () {
          return Object.assign(Object.assign({}, l), {
            error: { code: -32e3, message: 'filter not found' }
          })
        }
        function y () {
          return Object.assign(Object.assign({}, l), { result: [] })
        }
        ;(e.FilterPolyfill = h), (e.filterFromParam = f)
      },
      71339: function (t, e) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.JSONRPCMethod = void 0),
        (function (t) {
          ;(t.eth_accounts = 'eth_accounts'),
          (t.eth_coinbase = 'eth_coinbase'),
          (t.net_version = 'net_version'),
          (t.eth_chainId = 'eth_chainId'),
          (t.eth_uninstallFilter = 'eth_uninstallFilter'),
          (t.eth_requestAccounts = 'eth_requestAccounts'),
          (t.eth_sign = 'eth_sign'),
          (t.eth_ecRecover = 'eth_ecRecover'),
          (t.personal_sign = 'personal_sign'),
          (t.personal_ecRecover = 'personal_ecRecover'),
          (t.eth_signTransaction = 'eth_signTransaction'),
          (t.eth_sendRawTransaction = 'eth_sendRawTransaction'),
          (t.eth_sendTransaction = 'eth_sendTransaction'),
          (t.eth_signTypedData_v1 = 'eth_signTypedData_v1'),
          (t.eth_signTypedData_v2 = 'eth_signTypedData_v2'),
          (t.eth_signTypedData_v3 = 'eth_signTypedData_v3'),
          (t.eth_signTypedData_v4 = 'eth_signTypedData_v4'),
          (t.eth_signTypedData = 'eth_signTypedData'),
          (t.cbWallet_arbitrary = 'walletlink_arbitrary'),
          (t.wallet_addEthereumChain = 'wallet_addEthereumChain'),
          (t.wallet_switchEthereumChain = 'wallet_switchEthereumChain'),
          (t.wallet_watchAsset = 'wallet_watchAsset'),
          (t.eth_subscribe = 'eth_subscribe'),
          (t.eth_unsubscribe = 'eth_unsubscribe'),
          (t.eth_newFilter = 'eth_newFilter'),
          (t.eth_newBlockFilter = 'eth_newBlockFilter'),
          (t.eth_newPendingTransactionFilter =
                'eth_newPendingTransactionFilter'),
          (t.eth_getFilterChanges = 'eth_getFilterChanges'),
          (t.eth_getFilterLogs = 'eth_getFilterLogs')
        })(e.JSONRPCMethod || (e.JSONRPCMethod = {}))
      },
      24393: function (t, e, n) {
        'use strict'
        let r = n(17061).default;
          var i = n(17156).default;
          var o = n(56690).default;
          var s = n(89728).default
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.SubscriptionManager = void 0)
        let u = n(87061);
          var c = n(49268);
          var a = function () {};
          var l = (function () {
            function t (e) {
              o(this, t)
              let n = new u({
                  provider: e,
                  pollingInterval: 15e3,
                  setSkipCacheFlag: !0
                });
                var r = c({ blockTracker: n, provider: e });
                var i = r.events;
                var s = r.middleware
              ;(this.events = i), (this.subscriptionMiddleware = s)
            }
            return (
              s(t, [
                {
                  key: 'handleRequest',
                  value: (function () {
                    let t = i(
                      r().mark(function t (e) {
                        let n
                        return r().wrap(
                          function (t) {
                            for (;;)
                              {switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (n = {}),
                                    (t.next = 3),
                                    this.subscriptionMiddleware(e, n, a, a)
                                  )
                                case 3:
                                  return t.abrupt('return', n)
                                case 4:
                                case 'end':
                                  return t.stop()
                              }}
                          },
                          t,
                          this
                        )
                      })
                    )
                    return function (e) {
                      return t.apply(this, arguments)
                    }
                  })()
                },
                {
                  key: 'destroy',
                  value: function () {
                    this.subscriptionMiddleware.destroy()
                  }
                },
              ]),
              t
            )
          })()
        e.SubscriptionManager = l
      },
      63895: function (t, e, n) {
        'use strict'
        let r = n(56690).default;
          var i = n(89728).default
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.WalletSDKUI = void 0)
        let o = n(62551);
          var s = n(33771);
          var u = n(3441);
          var c = (function () {
            function t (e) {
              r(this, t),
              (this.standalone = null),
              (this.attached = !1),
              (this.appSrc = null),
              (this.snackbar = new s.Snackbar({ darkMode: e.darkMode })),
              (this.linkFlow = new o.LinkFlow({
                darkMode: e.darkMode,
                version: e.version,
                sessionId: e.session.id,
                sessionSecret: e.session.secret,
                linkAPIUrl: e.linkAPIUrl,
                connected$: e.connected$,
                chainId$: e.chainId$,
                isParentConnection: !1
                }))
            }
            return (
              i(t, [
                {
                  key: 'attach',
                  value: function () {
                    if (this.attached)
                      {throw new Error(
                        'Coinbase Wallet SDK UI is already attached',
                      )}
                    let t = document.documentElement;
                      var e = document.createElement('div')
                    ;(e.className = '-cbwsdk-css-reset'),
                    t.appendChild(e),
                    this.linkFlow.attach(e),
                    this.snackbar.attach(e),
                    (this.attached = !0),
                    (0, u.injectCssReset)()
                  }
                },
                {
                  key: 'setConnectDisabled',
                  value: function (t) {
                    this.linkFlow.setConnectDisabled(t)
                  }
                },
                { key: 'addEthereumChain', value: function (t) {} },
                { key: 'watchAsset', value: function (t) {} },
                { key: 'switchEthereumChain', value: function (t) {} },
                {
                  key: 'requestEthereumAccounts',
                  value: function (t) {
                    this.linkFlow.open({ onCancel: t.onCancel })
                  }
                },
                {
                  key: 'hideRequestEthereumAccounts',
                  value: function () {
                    this.linkFlow.close()
                  }
                },
                { key: 'signEthereumMessage', value: function (t) {} },
                { key: 'signEthereumTransaction', value: function (t) {} },
                { key: 'submitEthereumTransaction', value: function (t) {} },
                {
                  key: 'ethereumAddressFromSignedMessage',
                  value: function (t) {}
                },
                {
                  key: 'showConnecting',
                  value: function (t) {
                    let e
                    return (
                      (e = t.isUnlinkedErrorState
                        ? {
                            autoExpand: !0,
                            message: 'Connection lost',
                            appSrc: this.appSrc,
                            menuItems: [
                              {
                                isRed: !1,
                                info: 'Reset connection',
                                svgWidth: '10',
                                svgHeight: '11',
                                path: 'M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z',
                                defaultFillRule: 'evenodd',
                                defaultClipRule: 'evenodd',
                                onClick: t.onResetConnection
                              },
                            ]
                          }
                        : {
                            message: 'Confirm on phone',
                            appSrc: this.appSrc,
                            menuItems: [
                              {
                                isRed: !0,
                                info: 'Cancel transaction',
                                svgWidth: '11',
                                svgHeight: '11',
                                path: 'M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z',
                                defaultFillRule: 'inherit',
                                defaultClipRule: 'inherit',
                                onClick: t.onCancel
                              },
                              {
                                isRed: !1,
                                info: 'Reset connection',
                                svgWidth: '10',
                                svgHeight: '11',
                                path: 'M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z',
                                defaultFillRule: 'evenodd',
                                defaultClipRule: 'evenodd',
                                onClick: t.onResetConnection
                              },
                            ]
                          }),
                      this.snackbar.presentItem(e)
                    )
                  }
                },
                {
                  key: 'setAppSrc',
                  value: function (t) {
                    this.appSrc = t
                  }
                },
                {
                  key: 'reloadUI',
                  value: function () {
                    document.location.reload()
                  }
                },
                {
                  key: 'inlineAccountsResponse',
                  value: function () {
                    return !1
                  }
                },
                {
                  key: 'inlineAddEthereumChain',
                  value: function (t) {
                    return !1
                  }
                },
                {
                  key: 'inlineWatchAsset',
                  value: function () {
                    return !1
                  }
                },
                {
                  key: 'inlineSwitchEthereumChain',
                  value: function () {
                    return !1
                  }
                },
                {
                  key: 'setStandalone',
                  value: function (t) {
                    this.standalone = t
                  }
                },
                {
                  key: 'isStandalone',
                  value: function () {
                    let t
                    return (t = this.standalone) !== null && void 0 !== t && t
                  }
                },
              ]),
              t
            )
          })()
        e.WalletSDKUI = c
      },
      56712: function (t, e, n) {
        'use strict'
        let r = n(89728).default;
          var i = n(56690).default;
          var o = n(61655).default;
          var s = n(26389).default;
          var u = n(33496).default
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.WalletUIError = void 0)
        let c = (function (t) {
          o(n, t)
          let e = s(n)
          function n (t, r) {
            let o
            return (
              i(this, n),
              ((o = e.call(this, t)).message = t),
              (o.errorCode = r),
              o
            )
          }
          return r(n)
        })(u(Error))
        ;(e.WalletUIError = c),
        (c.UserRejectedRequest = new c('User rejected request')),
        (c.SwitchEthereumChainUnsupportedChainId = new c(
          'Unsupported chainId',
          4902,
        ))
      },
      83176: function (t, e) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.RelayMessageType = void 0),
        (function (t) {
          ;(t.SESSION_ID_REQUEST = 'SESSION_ID_REQUEST'),
          (t.SESSION_ID_RESPONSE = 'SESSION_ID_RESPONSE'),
          (t.LINKED = 'LINKED'),
          (t.UNLINKED = 'UNLINKED'),
          (t.WEB3_REQUEST = 'WEB3_REQUEST'),
          (t.WEB3_REQUEST_CANCELED = 'WEB3_REQUEST_CANCELED'),
          (t.WEB3_RESPONSE = 'WEB3_RESPONSE')
        })(e.RelayMessageType || (e.RelayMessageType = {}))
      },
      60739: function (t, e, n) {
        'use strict'
        let r = n(56690).default;
          var i = n(89728).default
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Session = void 0)
        let o = n(95471);
          var s = n(84539);
          var u = n(61091);
          var c = n(39830);
          var a = 'session:id';
          var l = 'session:secret';
          var h = 'session:linked';
          var f = (function () {
            function t (e, n, i, o) {
              r(this, t),
              (this._storage = e),
              (this._id = n || (0, c.randomBytesHex)(16)),
              (this._secret = i || (0, c.randomBytesHex)(32)),
              (this._key = new u.sha256()
                .update(
                  ''
                    .concat(this._id, ', ')
                    .concat(this._secret, ' WalletLink')
                  )
                .digest('hex')),
              (this._linked = !!o)
            }
            return (
              i(
                t,
                [
                  {
                    key: 'id',
                    get: function () {
                      return this._id
                    }
                  },
                  {
                    key: 'secret',
                    get: function () {
                      return this._secret
                    }
                  },
                  {
                    key: 'key',
                    get: function () {
                      return this._key
                    }
                  },
                  {
                    key: 'linked',
                    get: function () {
                      return this._linked
                    },
                    set: function (t) {
                      ;(this._linked = t), this.persistLinked()
                    }
                  },
                  {
                    key: 'save',
                    value: function () {
                      return (
                        this._storage.setItem(a, this._id),
                        this._storage.setItem(l, this._secret),
                        this.persistLinked(),
                        this
                      )
                    }
                  },
                  {
                    key: 'persistLinked',
                    value: function () {
                      this._storage.setItem(h, this._linked ? '1' : '0')
                    }
                  },
                ],
                [
                  {
                    key: 'load',
                    value: function (e) {
                      let n = e.getItem(a);
                        var r = e.getItem(h);
                        var i = e.getItem(l)
                      return n && i ? new t(e, n, i, r === '1') : null
                    }
                  },
                  {
                    key: 'persistedSessionIdChange$',
                    get: function () {
                      return (0, o.fromEvent)(window, 'storage').pipe(
                        (0, s.filter)(function (t) {
                          return t.key === a
                        }),
                        (0, s.map)(function (t) {
                          return {
                            oldValue: t.oldValue || null,
                            newValue: t.newValue || null
                          }
                        })
                      )
                    }
                  },
                  {
                    key: 'hash',
                    value: function (t) {
                      return new u.sha256().update(t).digest('hex')
                    }
                  },
                ]
              ),
              t
            )
          })()
        e.Session = f
      },
      93731: function (t, e, n) {
        'use strict'
        let r = n(27424).default;
          var i = n(56690).default;
          var o = n(89728).default;
          var s = n(61655).default;
          var u = n(26389).default;
          var c =
            (this && this.__createBinding) ||
            (Object.create
              ? function (t, e, n, r) {
                  void 0 === r && (r = n),
                    Object.defineProperty(t, r, {
                      enumerable: !0,
                      get: function () {
                        return e[n]
                      },
                    })
                }
              : function (t, e, n, r) {
                  void 0 === r && (r = n), (t[r] = e[n])
                });
          var a =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (t, e) {
                  Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    value: e,
                  })
                }
              : function (t, e) {
                  t.default = e
                });
          var l =
            (this && this.__decorate) ||
            function (t, e, n, r) {
              var i,
                o = arguments.length,
                s =
                  o < 3
                    ? e
                    : null === r
                      ? (r = Object.getOwnPropertyDescriptor(e, n))
                      : r
              if (
                'object' === typeof Reflect &&
                'function' === typeof Reflect.decorate
              )
                s = Reflect.decorate(t, e, n, r)
              else
                for (var u = t.length - 1; u >= 0; u--)
                  (i = t[u]) &&
                    (s = (o < 3 ? i(s) : o > 3 ? i(e, n, s) : i(e, n)) || s)
              return o > 3 && s && Object.defineProperty(e, n, s), s
            };
          var h =
            (this && this.__importStar) ||
            function (t) {
              if (t && t.__esModule) return t
              var e = {}
              if (null != t)
                for (var n in t)
                  'default' !== n &&
                    Object.prototype.hasOwnProperty.call(t, n) &&
                    c(e, t, n)
              return a(e, t), e
            };
          var f =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t }
            }
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.WalletSDKRelay = void 0)
        let d = f(n(41483));
          var p = n(94649);
          var b = n(95471);
          var v = n(84539);
          var y = n(63606);
          var g = n(53278);
          var m = n(56712);
          var w = n(52352);
          var _ = n(39830);
          var k = h(n(23782));
          var x = n(60739);
          var S = n(16536);
          var E = n(38014);
          var C = n(6714);
          var M = n(39545);
          var I = n(34894);
          var N = n(41318);
          var T = (function (t) {
            s(n, t)
            let e = u(n)
            function n (t) {
              let r, o
              i(this, n),
              ((r = e.call(this)).accountsCallback = null),
              (r.chainCallback = null),
              (r.dappDefaultChainSubject = new b.BehaviorSubject(1)),
              (r.dappDefaultChain = 1),
              (r.appName = ''),
              (r.appLogoUrl = null),
              (r.subscriptions = new b.Subscription()),
              (r.linkAPIUrl = t.linkAPIUrl),
              (r.storage = t.storage),
              (r.options = t)
              let s = r.subscribe();
                var u = s.session;
                var c = s.ui;
                var a = s.connection
              if (
                ((r._session = u),
                (r.connection = a),
                (r.relayEventManager = t.relayEventManager),
                t.diagnosticLogger && t.eventListener)
              )
                {throw new Error(
                  "Can't have both eventListener and diagnosticLogger options, use only diagnosticLogger",
                )}
              return (
                t.eventListener
                  ? (r.diagnostic = { log: t.eventListener.onEvent })
                  : (r.diagnostic = t.diagnosticLogger),
                (r._reloadOnDisconnect =
                  (o = t.reloadOnDisconnect) === null || void 0 === o || o),
                (r.ui = c),
                r
              )
            }
            return (
              o(n, [
                {
                  key: 'subscribe',
                  value: function () {
                    let t = this
                    this.subscriptions.add(
                      this.dappDefaultChainSubject.subscribe(function (e) {
                        t.dappDefaultChain !== e && (t.dappDefaultChain = e)
                      })
                    )
                    let e =
                        x.Session.load(this.storage) ||
                        new x.Session(this.storage).save();
                      var i = new g.WalletSDKConnection(
                        e.id,
                        e.key,
                        this.linkAPIUrl,
                        this.diagnostic
                      )
                    this.subscriptions.add(
                      i.sessionConfig$.subscribe({
                        next: function (e) {
                          t.onSessionConfigChanged(e)
                        },
                        error: function () {
                          let e
                          (e = t.diagnostic) === null ||
                            void 0 === e ||
                            e.log(y.EVENTS.GENERAL_ERROR, {
                              message:
                                'error while invoking session config callback'
                            })
                        }
                      }),
                    ),
                    this.subscriptions.add(
                      i.incomingEvent$
                        .pipe(
                          (0, v.filter)(function (t) {
                            return t.event === 'Web3Response'
                          })
                          )
                        .subscribe({ next: this.handleIncomingEvent })
                      ),
                    this.subscriptions.add(
                      i.linked$
                        .pipe(
                          (0, v.skip)(1),
                          (0, v.tap)(function (e) {
                            var n
                            t.isLinked = e
                            var r = t.storage.getItem(
                              S.LOCAL_STORAGE_ADDRESSES_KEY
                              )
                            if (
                              (e && (t.session.linked = e),
                              (t.isUnlinkedErrorState = !1),
                              r)
                            ) {
                              var i = r.split(' ');
                                  var o =
                                    t.storage.getItem('IsStandaloneSigning') ===
                                    'true'
                              if (
                                '' !== i[0] &&
                                  !e &&
                                  t.session.linked &&
                                  !o
                              ) {
                                t.isUnlinkedErrorState = !0
                                var s = t.getSessionIdHash()
                                null === (n = t.diagnostic) ||
                                    void 0 === n ||
                                    n.log(y.EVENTS.UNLINKED_ERROR_STATE, {
                                      sessionIdHash: s
                                    })
                              }
                            }
                          })
                          )
                        .subscribe()
                      ),
                    this.subscriptions.add(
                      i.sessionConfig$
                        .pipe(
                          (0, v.filter)(function (t) {
                            return (
                              !!t.metadata && t.metadata.__destroyed === '1'
                            )
                          })
                          )
                        .subscribe(function () {
                          var e;
                              var n = i.isDestroyed
                          return (
                            null === (e = t.diagnostic) ||
                                void 0 === e ||
                                e.log(y.EVENTS.METADATA_DESTROYED, {
                                  alreadyDestroyed: n,
                                  sessionIdHash: t.getSessionIdHash()
                                }),
                            t.resetAndReload()
                          )
                        })
                      ),
                    this.subscriptions.add(
                      i.sessionConfig$
                        .pipe(
                          (0, v.filter)(function (t) {
                            return (
                              t.metadata &&
                                void 0 !== t.metadata.WalletUsername
                            )
                          })
                          )
                        .pipe(
                          (0, v.mergeMap)(function (t) {
                            return k.decrypt(
                              t.metadata.WalletUsername,
                              e.secret
                              )
                          })
                          )
                        .subscribe({
                          next: function (e) {
                            t.storage.setItem(S.WALLET_USER_NAME_KEY, e)
                          },
                          error: function () {
                            var e
                            null === (e = t.diagnostic) ||
                                void 0 === e ||
                                e.log(y.EVENTS.GENERAL_ERROR, {
                                  message: 'Had error decrypting',
                                  value: 'username'
                                })
                          },
                        })
                      ),
                    this.subscriptions.add(
                      i.sessionConfig$
                        .pipe(
                          (0, v.filter)(function (t) {
                            return (
                              t.metadata && void 0 !== t.metadata.AppVersion
                            )
                          })
                          )
                        .pipe(
                          (0, v.mergeMap)(function (t) {
                            return k.decrypt(t.metadata.AppVersion, e.secret)
                          })
                          )
                        .subscribe({
                          next: function (e) {
                            t.storage.setItem(S.APP_VERSION_KEY, e)
                          },
                          error: function () {
                            var e
                            null === (e = t.diagnostic) ||
                                void 0 === e ||
                                e.log(y.EVENTS.GENERAL_ERROR, {
                                  message: 'Had error decrypting',
                                  value: 'appversion'
                                })
                          },
                        })
                      ),
                    this.subscriptions.add(
                      i.sessionConfig$
                        .pipe(
                          (0, v.filter)(function (t) {
                            return (
                              t.metadata &&
                                void 0 !== t.metadata.ChainId &&
                                void 0 !== t.metadata.JsonRpcUrl
                            )
                          })
                          )
                        .pipe(
                          (0, v.mergeMap)(function (t) {
                            return (0, b.zip)(
                              k.decrypt(t.metadata.ChainId, e.secret),
                              k.decrypt(t.metadata.JsonRpcUrl, e.secret)
                              )
                          })
                          )
                        .pipe((0, v.distinctUntilChanged)())
                        .subscribe({
                          next: function (e) {
                            var n = r(e, 2);
                                var i = n[0];
                                var o = n[1]
                            t.chainCallback && t.chainCallback(i, o)
                          },
                          error: function () {
                            var e
                            null === (e = t.diagnostic) ||
                                void 0 === e ||
                                e.log(y.EVENTS.GENERAL_ERROR, {
                                  message: 'Had error decrypting',
                                  value: 'chainId|jsonRpcUrl'
                                })
                          },
                        })
                      ),
                    this.subscriptions.add(
                      i.sessionConfig$
                        .pipe(
                          (0, v.filter)(function (t) {
                            return (
                              t.metadata &&
                                void 0 !== t.metadata.EthereumAddress
                            )
                          })
                          )
                        .pipe(
                          (0, v.mergeMap)(function (t) {
                            return k.decrypt(
                              t.metadata.EthereumAddress,
                              e.secret
                              )
                          })
                          )
                        .subscribe({
                          next: function (e) {
                            t.accountsCallback && t.accountsCallback([e]),
                            n.accountRequestCallbackIds.size > 0 &&
                                  (Array.from(
                                    n.accountRequestCallbackIds.values()
                                  ).forEach(function (n) {
                                    let r = (0, N.Web3ResponseMessage)({
                                      id: n,
                                      response: (0,
                                      I.RequestEthereumAccountsResponse)([e])
                                    })
                                    t.invokeCallback(
                                      Object.assign(Object.assign({}, r), {
                                        id: n
                                      }),
                                    )
                                  }),
                                  n.accountRequestCallbackIds.clear())
                          },
                          error: function () {
                            var e
                            null === (e = t.diagnostic) ||
                                void 0 === e ||
                                e.log(y.EVENTS.GENERAL_ERROR, {
                                  message: 'Had error decrypting',
                                  value: 'selectedAddress'
                                })
                          },
                        })
                      ),
                    this.subscriptions.add(
                      i.sessionConfig$
                        .pipe(
                          (0, v.filter)(function (t) {
                            return t.metadata && void 0 !== t.metadata.AppSrc
                          })
                          )
                        .pipe(
                          (0, v.mergeMap)(function (t) {
                            return k.decrypt(t.metadata.AppSrc, e.secret)
                          })
                          )
                        .subscribe({
                          next: function (e) {
                            t.ui.setAppSrc(e)
                          },
                          error: function () {
                            var e
                            null === (e = t.diagnostic) ||
                                void 0 === e ||
                                e.log(y.EVENTS.GENERAL_ERROR, {
                                  message: 'Had error decrypting',
                                  value: 'appSrc'
                                })
                          },
                        })
                      )
                    let o = this.options.uiConstructor({
                      linkAPIUrl: this.options.linkAPIUrl,
                      version: this.options.version,
                      darkMode: this.options.darkMode,
                      session: e,
                      connected$: i.connected$,
                      chainId$: this.dappDefaultChainSubject
                    })
                    return i.connect(), { session: e, ui: o, connection: i }
                  }
                },
                {
                  key: 'attachUI',
                  value: function () {
                    this.ui.attach()
                  }
                },
                {
                  key: 'resetAndReload',
                  value: function () {
                    let t = this
                    this.connection
                      .setSessionMetadata('__destroyed', '1')
                      .pipe(
                        (0, v.timeout)(1e3),
                        (0, v.catchError)(function (t) {
                          return (0, b.of)(null)
                        })
                      )
                      .subscribe(
                        function (e) {
                          let n;
                            var r;
                            var i;
                            var o = t.ui.isStandalone()
                          try {
                            t.subscriptions.unsubscribe()
                          } catch (h) {
                            (n = t.diagnostic) === null ||
                              void 0 === n ||
                              n.log(y.EVENTS.GENERAL_ERROR, {
                                message: 'Had error unsubscribing'
                              })
                          }
                          (r = t.diagnostic) === null ||
                            void 0 === r ||
                            r.log(y.EVENTS.SESSION_STATE_CHANGE, {
                              method: 'relay::resetAndReload',
                              sessionMetadataChange: '__destroyed, 1',
                              sessionIdHash: t.getSessionIdHash()
                            }),
                          t.connection.destroy()
                          let s = x.Session.load(t.storage)
                          if (
                            ((s === null || void 0 === s ? void 0 : s.id) ===
                            t._session.id
                              ? t.storage.clear()
                              : s &&
                                ((i = t.diagnostic) === null ||
                                  void 0 === i ||
                                  i.log(y.EVENTS.SKIPPED_CLEARING_SESSION, {
                                    sessionIdHash: t.getSessionIdHash(),
                                    storedSessionIdHash: x.Session.hash(s.id)
                                  })),
                            t._reloadOnDisconnect)
                          )
                            {t.ui.reloadUI()}
                          else {
                            t.accountsCallback && t.accountsCallback([], !0)
                            let u = t.subscribe();
                              var c = u.session;
                              var a = u.ui;
                              var l = u.connection
                            ;(t._session = c),
                            (t.connection = l),
                            (t.ui = a),
                            o && t.ui.setStandalone && t.ui.setStandalone(!0),
                            t.attachUI()
                          }
                        },
                        function (e) {
                          let n
                          (n = t.diagnostic) === null ||
                            void 0 === n ||
                            n.log(y.EVENTS.FAILURE, {
                              method: 'relay::resetAndReload',
                              message:
                                'failed to reset and reload with '.concat(e),
                              sessionIdHash: t.getSessionIdHash()
                            })
                        }
                      )
                  }
                },
                {
                  key: 'setAppInfo',
                  value: function (t, e) {
                    ;(this.appName = t), (this.appLogoUrl = e)
                  }
                },
                {
                  key: 'getStorageItem',
                  value: function (t) {
                    return this.storage.getItem(t)
                  }
                },
                {
                  key: 'session',
                  get: function () {
                    return this._session
                  }
                },
                {
                  key: 'setStorageItem',
                  value: function (t, e) {
                    this.storage.setItem(t, e)
                  }
                },
                {
                  key: 'signEthereumMessage',
                  value: function (t, e, n, r) {
                    return this.sendRequest({
                      method: E.Web3Method.signEthereumMessage,
                      params: {
                        message: (0, _.hexStringFromBuffer)(t, !0),
                        address: e,
                        addPrefix: n,
                        typedDataJson: r || null
                      },
                    })
                  }
                },
                {
                  key: 'ethereumAddressFromSignedMessage',
                  value: function (t, e, n) {
                    return this.sendRequest({
                      method: E.Web3Method.ethereumAddressFromSignedMessage,
                      params: {
                        message: (0, _.hexStringFromBuffer)(t, !0),
                        signature: (0, _.hexStringFromBuffer)(e, !0),
                        addPrefix: n
                      },
                    })
                  }
                },
                {
                  key: 'signEthereumTransaction',
                  value: function (t) {
                    return this.sendRequest({
                      method: E.Web3Method.signEthereumTransaction,
                      params: {
                        fromAddress: t.fromAddress,
                        toAddress: t.toAddress,
                        weiValue: (0, _.bigIntStringFromBN)(t.weiValue),
                        data: (0, _.hexStringFromBuffer)(t.data, !0),
                        nonce: t.nonce,
                        gasPriceInWei: t.gasPriceInWei
                          ? (0, _.bigIntStringFromBN)(t.gasPriceInWei)
                          : null,
                        maxFeePerGas: t.gasPriceInWei
                          ? (0, _.bigIntStringFromBN)(t.gasPriceInWei)
                          : null,
                        maxPriorityFeePerGas: t.gasPriceInWei
                          ? (0, _.bigIntStringFromBN)(t.gasPriceInWei)
                          : null,
                        gasLimit: t.gasLimit
                          ? (0, _.bigIntStringFromBN)(t.gasLimit)
                          : null,
                        chainId: t.chainId,
                        shouldSubmit: !1
                      },
                    })
                  }
                },
                {
                  key: 'signAndSubmitEthereumTransaction',
                  value: function (t) {
                    return this.sendRequest({
                      method: E.Web3Method.signEthereumTransaction,
                      params: {
                        fromAddress: t.fromAddress,
                        toAddress: t.toAddress,
                        weiValue: (0, _.bigIntStringFromBN)(t.weiValue),
                        data: (0, _.hexStringFromBuffer)(t.data, !0),
                        nonce: t.nonce,
                        gasPriceInWei: t.gasPriceInWei
                          ? (0, _.bigIntStringFromBN)(t.gasPriceInWei)
                          : null,
                        maxFeePerGas: t.maxFeePerGas
                          ? (0, _.bigIntStringFromBN)(t.maxFeePerGas)
                          : null,
                        maxPriorityFeePerGas: t.maxPriorityFeePerGas
                          ? (0, _.bigIntStringFromBN)(t.maxPriorityFeePerGas)
                          : null,
                        gasLimit: t.gasLimit
                          ? (0, _.bigIntStringFromBN)(t.gasLimit)
                          : null,
                        chainId: t.chainId,
                        shouldSubmit: !0
                      },
                    })
                  }
                },
                {
                  key: 'submitEthereumTransaction',
                  value: function (t, e) {
                    return this.sendRequest({
                      method: E.Web3Method.submitEthereumTransaction,
                      params: {
                        signedTransaction: (0, _.hexStringFromBuffer)(t, !0),
                        chainId: e
                      },
                    })
                  }
                },
                {
                  key: 'scanQRCode',
                  value: function (t) {
                    return this.sendRequest({
                      method: E.Web3Method.scanQRCode,
                      params: { regExp: t }
                    })
                  }
                },
                {
                  key: 'getQRCodeUrl',
                  value: function () {
                    return (0, _.createQrUrl)(
                      this._session.id,
                      this._session.secret,
                      this.linkAPIUrl,
                      !1,
                      this.options.version,
                      this.dappDefaultChain
                    )
                  }
                },
                {
                  key: 'genericRequest',
                  value: function (t, e) {
                    return this.sendRequest({
                      method: E.Web3Method.generic,
                      params: { action: e, data: t }
                    })
                  }
                },
                {
                  key: 'sendGenericMessage',
                  value: function (t) {
                    return this.sendRequest(t)
                  }
                },
                {
                  key: 'sendRequest',
                  value: function (t) {
                    let e = this;
                      var n = null;
                      var r = (0, _.randomBytesHex)(8);
                      var i = function (i) {
                        e.publishWeb3RequestCanceledEvent(r),
                        e.handleErrorResponse(r, t.method, i),
                        null === n || void 0 === n || n()
                      }
                    return {
                      promise: new Promise(function (o, s) {
                        e.ui.isStandalone() ||
                          (n = e.ui.showConnecting({
                            isUnlinkedErrorState: e.isUnlinkedErrorState,
                            onCancel: i,
                            onResetConnection: e.resetAndReload
                          })),
                        e.relayEventManager.callbacks.set(r, function (t) {
                          if (
                            (n === null || void 0 === n || n(),
                            t.errorMessage)
                          )
                            return s(new Error(t.errorMessage))
                          o(t)
                        }),
                        e.ui.isStandalone()
                          ? e.sendRequestStandalone(r, t)
                          : e.publishWeb3RequestEvent(r, t)
                      }),
                      cancel: i
                    }
                  }
                },
                {
                  key: 'setConnectDisabled',
                  value: function (t) {
                    this.ui.setConnectDisabled(t)
                  }
                },
                {
                  key: 'setAccountsCallback',
                  value: function (t) {
                    this.accountsCallback = t
                  }
                },
                {
                  key: 'setChainCallback',
                  value: function (t) {
                    this.chainCallback = t
                  }
                },
                {
                  key: 'setDappDefaultChainCallback',
                  value: function (t) {
                    this.dappDefaultChainSubject.next(t)
                  }
                },
                {
                  key: 'publishWeb3RequestEvent',
                  value: function (t, e) {
                    let n;
                      var r = this;
                      var i = (0, M.Web3RequestMessage)({ id: t, request: e });
                      var o = x.Session.load(this.storage)
                    (n = this.diagnostic) === null ||
                      void 0 === n ||
                      n.log(y.EVENTS.WEB3_REQUEST, {
                        eventId: i.id,
                        method: 'relay::'.concat(i.request.method),
                        sessionIdHash: this.getSessionIdHash(),
                        storedSessionIdHash: o ? x.Session.hash(o.id) : '',
                        isSessionMismatched: (
                          (o === null || void 0 === o ? void 0 : o.id) !==
                          this._session.id
                        ).toString()
                      }),
                    this.subscriptions.add(
                      this.publishEvent('Web3Request', i, !0).subscribe({
                        next: function (t) {
                          var e
                          null === (e = r.diagnostic) ||
                              void 0 === e ||
                              e.log(y.EVENTS.WEB3_REQUEST_PUBLISHED, {
                                eventId: i.id,
                                method: 'relay::'.concat(i.request.method),
                                sessionIdHash: r.getSessionIdHash(),
                                storedSessionIdHash: o
                                  ? x.Session.hash(o.id)
                                  : '',
                                isSessionMismatched: (
                                  (o === null || void 0 === o
                                    ? void 0
                                    : o.id) !== r._session.id
                                ).toString()
                              })
                        },
                        error: function (t) {
                          r.handleWeb3ResponseMessage(
                            (0, N.Web3ResponseMessage)({
                              id: i.id,
                              response: {
                                method: i.request.method,
                                errorMessage: t.message
                                },
                            })
                            )
                        },
                      })
                      )
                  }
                },
                {
                  key: 'publishWeb3RequestCanceledEvent',
                  value: function (t) {
                    let e = (0, C.Web3RequestCanceledMessage)(t)
                    this.subscriptions.add(
                      this.publishEvent(
                        'Web3RequestCanceled',
                        e,
                        !1
                      ).subscribe()
                    )
                  }
                },
                {
                  key: 'publishEvent',
                  value: function (t, e, n) {
                    let r = this;
                      var i = this.session.secret
                    return new b.Observable(function (t) {
                      k.encrypt(
                        JSON.stringify(
                          Object.assign(Object.assign({}, e), {
                            origin: location.origin
                          }),
                        ),
                        i
                      ).then(function (e) {
                        t.next(e), t.complete()
                      })
                    }).pipe(
                      (0, v.mergeMap)(function (e) {
                        return r.connection.publishEvent(t, e, n)
                      })
                    )
                  }
                },
                {
                  key: 'handleIncomingEvent',
                  value: function (t) {
                    var e = this
                    try {
                      this.subscriptions.add(
                        k
                          .decrypt(t.data, this.session.secret)
                          .pipe(
                            (0, v.map)(function (t) {
                              return JSON.parse(t)
                            }),
                          )
                          .subscribe({
                            next: function (t) {
                              var n = (0, N.isWeb3ResponseMessage)(t) ? t : null
                              n && e.handleWeb3ResponseMessage(n)
                            },
                            error: function () {
                              var t
                              null === (t = e.diagnostic) ||
                                void 0 === t ||
                                t.log(y.EVENTS.GENERAL_ERROR, {
                                  message: 'Had error decrypting',
                                  value: 'incomingEvent',
                                })
                            },
                          }),
                      )
                    } catch (n) {
                      
                    }
                  },
                },
                {
                  key: 'handleWeb3ResponseMessage',
                  value: function (t) {
                    let e;
                      var r = this;
                      var i = t.response
                    if (
                      ((e = this.diagnostic) === null ||
                        void 0 === e ||
                        e.log(y.EVENTS.WEB3_RESPONSE, {
                          eventId: t.id,
                          method: 'relay::'.concat(i.method),
                          sessionIdHash: this.getSessionIdHash()
                        }),
                      (0, I.isRequestEthereumAccountsResponse)(i))
                    )
                      {return (
                        n.accountRequestCallbackIds.forEach(function (e) {
                          return r.invokeCallback(
                            Object.assign(Object.assign({}, t), { id: e }),
                          )
                        }),
                        void n.accountRequestCallbackIds.clear()
                      )}
                    this.invokeCallback(t)
                  }
                },
                {
                  key: 'handleErrorResponse',
                  value: function (t, e, n, r) {
                    this.handleWeb3ResponseMessage(
                      (0, N.Web3ResponseMessage)({
                        id: t,
                        response: (0, I.ErrorResponse)(
                          e,
                          (n !== null && void 0 !== n
                            ? n
                            : m.WalletUIError.UserRejectedRequest
                          ).message,
                          r
                        ),
                      })
                    )
                  }
                },
                {
                  key: 'invokeCallback',
                  value: function (t) {
                    let e = this.relayEventManager.callbacks.get(t.id)
                    e &&
                      (e(t.response),
                      this.relayEventManager.callbacks.delete(t.id))
                  }
                },
                {
                  key: 'requestEthereumAccounts',
                  value: function () {
                    let t = this;
                      var e = {
                        method: E.Web3Method.requestEthereumAccounts,
                        params: {
                          appName: this.appName,
                          appLogoUrl: this.appLogoUrl || null,
                        },
                      };
                      var r = (0, _.randomBytesHex)(8);
                      var i = function (n) {
                        t.publishWeb3RequestCanceledEvent(r),
                        t.handleErrorResponse(r, e.method, n)
                      }
                    return {
                      promise: new Promise(function (o, s) {
                        let u
                        t.relayEventManager.callbacks.set(r, function (e) {
                          if (
                            (t.ui.hideRequestEthereumAccounts(), e.errorMessage)
                          )
                            {return s(new Error(e.errorMessage))}
                          o(e)
                        })
                        let c =
                          ((u =
                              null === window || void 0 === window
                                ? void 0
                                : window.navigator) ===
                            null || void 0 === u
                            ? void 0
                            : u.userAgent) || null
                        if (
                          c &&
                          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                            c
                          )
                        ) {
                          let a
                          try {
                            a =
                              (0, _.isInIFrame)() && window.top
                                ? window.top.location
                                : window.location
                          } catch (h) {
                            a = window.location
                          }
                          a.href =
                            'https://www.coinbase.com/connect-dapp?uri='.concat(
                              encodeURIComponent(a.href)
                            )
                        } else {
                          if (t.ui.inlineAccountsResponse()) {
                            t.ui.requestEthereumAccounts({
                              onCancel: i,
                              onAccounts: function (e) {
                                t.handleWeb3ResponseMessage(
                                  (0, N.Web3ResponseMessage)({
                                    id: r,
                                    response: (0,
                                    I.RequestEthereumAccountsResponse)(e)
                                  }),
                                )
                              }
                            })
                          } else {
                            let l = p.ethErrors.provider.userRejectedRequest(
                              'User denied account authorization'
                            )
                            t.ui.requestEthereumAccounts({
                              onCancel: function () {
                                return i(l)
                              }
                            })
                          }
                          n.accountRequestCallbackIds.add(r),
                          t.ui.inlineAccountsResponse() ||
                              t.ui.isStandalone() ||
                              t.publishWeb3RequestEvent(r, e)
                        }
                      }),
                      cancel: i
                    }
                  }
                },
                {
                  key: 'selectProvider',
                  value: function (t) {
                    let e = this;
                      var n = {
                        method: E.Web3Method.selectProvider,
                        params: { providerOptions: t },
                      };
                      var r = (0, _.randomBytesHex)(8)
                    return {
                      cancel: function (t) {
                        e.publishWeb3RequestCanceledEvent(r),
                        e.handleErrorResponse(r, n.method, t)
                      },
                      promise: new Promise(function (n, i) {
                        e.relayEventManager.callbacks.set(r, function (t) {
                          if (t.errorMessage)
                            {return i(new Error(t.errorMessage))}
                          n(t)
                        })
                        e.ui.selectProvider &&
                          e.ui.selectProvider({
                            onApprove: function (t) {
                              e.handleWeb3ResponseMessage(
                                (0, N.Web3ResponseMessage)({
                                  id: r,
                                  response: (0, I.SelectProviderResponse)(t)
                                }),
                              )
                            },
                            onCancel: function (t) {
                              e.handleWeb3ResponseMessage(
                                (0, N.Web3ResponseMessage)({
                                  id: r,
                                  response: (0, I.SelectProviderResponse)(
                                    w.ProviderType.Unselected
                                  ),
                                })
                              )
                            },
                            providerOptions: t
                          })
                      })
                    }
                  }
                },
                {
                  key: 'watchAsset',
                  value: function (t, e, n, r, i, o) {
                    let s = this;
                      var u = {
                        method: E.Web3Method.watchAsset,
                        params: {
                          type: t,
                          options: {
                            address: e,
                            symbol: n,
                            decimals: r,
                            image: i,
                          },
                          chainId: o,
                        },
                      };
                      var c = null;
                      var a = (0, _.randomBytesHex)(8);
                      var l = function (t) {
                        s.publishWeb3RequestCanceledEvent(a),
                        s.handleErrorResponse(a, u.method, t),
                        null === c || void 0 === c || c()
                      }
                    return (
                      this.ui.inlineWatchAsset() ||
                        (c = this.ui.showConnecting({
                          isUnlinkedErrorState: this.isUnlinkedErrorState,
                          onCancel: l,
                          onResetConnection: this.resetAndReload
                        })),
                      {
                        cancel: l,
                        promise: new Promise(function (l, h) {
                          s.relayEventManager.callbacks.set(a, function (t) {
                            if (
                              (c === null || void 0 === c || c(),
                              t.errorMessage)
                            )
                              {return h(new Error(t.errorMessage))}
                            l(t)
                          })
                          s.ui.inlineWatchAsset() &&
                            s.ui.watchAsset({
                              onApprove: function () {
                                s.handleWeb3ResponseMessage(
                                  (0, N.Web3ResponseMessage)({
                                    id: a,
                                    response: (0, I.WatchAssetReponse)(!0)
                                  }),
                                )
                              },
                              onCancel: function (t) {
                                s.handleWeb3ResponseMessage(
                                  (0, N.Web3ResponseMessage)({
                                    id: a,
                                    response: (0, I.WatchAssetReponse)(!1)
                                  }),
                                )
                              },
                              type: t,
                              address: e,
                              symbol: n,
                              decimals: r,
                              image: i,
                              chainId: o
                            }),
                          s.ui.inlineWatchAsset() ||
                              s.ui.isStandalone() ||
                              s.publishWeb3RequestEvent(a, u)
                        })
                      }
                    )
                  }
                },
                {
                  key: 'addEthereumChain',
                  value: function (t, e, n, r, i, o) {
                    let s = this;
                      var u = {
                        method: E.Web3Method.addEthereumChain,
                        params: {
                          chainId: t,
                          rpcUrls: e,
                          blockExplorerUrls: r,
                          chainName: i,
                          iconUrls: n,
                          nativeCurrency: o,
                        },
                      };
                      var c = null;
                      var a = (0, _.randomBytesHex)(8);
                      var l = function (t) {
                        s.publishWeb3RequestCanceledEvent(a),
                        s.handleErrorResponse(a, u.method, t),
                        null === c || void 0 === c || c()
                      }
                    return (
                      this.ui.inlineAddEthereumChain(t) ||
                        (c = this.ui.showConnecting({
                          isUnlinkedErrorState: this.isUnlinkedErrorState,
                          onCancel: l,
                          onResetConnection: this.resetAndReload
                        })),
                      {
                        promise: new Promise(function (e, n) {
                          s.relayEventManager.callbacks.set(a, function (t) {
                            if (
                              (c === null || void 0 === c || c(),
                              t.errorMessage)
                            )
                              {return n(new Error(t.errorMessage))}
                            e(t)
                          })
                          s.ui.inlineAddEthereumChain(t) &&
                            s.ui.addEthereumChain({
                              onCancel: function (t) {
                                s.handleWeb3ResponseMessage(
                                  (0, N.Web3ResponseMessage)({
                                    id: a,
                                    response: (0, I.AddEthereumChainResponse)({
                                      isApproved: !1,
                                      rpcUrl: ''
                                    }),
                                  })
                                )
                              },
                              onApprove: function (t) {
                                s.handleWeb3ResponseMessage(
                                  (0, N.Web3ResponseMessage)({
                                    id: a,
                                    response: (0, I.AddEthereumChainResponse)({
                                      isApproved: !0,
                                      rpcUrl: t
                                    }),
                                  })
                                )
                              },
                              chainId: u.params.chainId,
                              rpcUrls: u.params.rpcUrls,
                              blockExplorerUrls: u.params.blockExplorerUrls,
                              chainName: u.params.chainName,
                              iconUrls: u.params.iconUrls,
                              nativeCurrency: u.params.nativeCurrency
                            }),
                          s.ui.inlineAddEthereumChain(t) ||
                              s.ui.isStandalone() ||
                              s.publishWeb3RequestEvent(a, u)
                        }),
                        cancel: l
                      }
                    )
                  }
                },
                {
                  key: 'switchEthereumChain',
                  value: function (t, e) {
                    let n = this;
                      var r = {
                        method: E.Web3Method.switchEthereumChain,
                        params: Object.assign({ chainId: t }, { address: e }),
                      };
                      var i = (0, _.randomBytesHex)(8)
                    return {
                      promise: new Promise(function (t, e) {
                        n.relayEventManager.callbacks.set(i, function (n) {
                          return n.errorMessage && n.errorCode
                            ? e(
                              p.ethErrors.provider.custom({
                                code: n.errorCode,
                                message:
                                    'Unrecognized chain ID. Try adding the chain using addEthereumChain first.'
                                }),
                            )
                            : n.errorMessage
                              ? e(new Error(n.errorMessage))
                              : void t(n)
                        })
                        n.ui.switchEthereumChain({
                          onCancel: function (t) {
                            if (typeof t === 'number') {
                              let e = t
                              n.handleWeb3ResponseMessage(
                                (0, N.Web3ResponseMessage)({
                                  id: i,
                                  response: (0, I.ErrorResponse)(
                                    E.Web3Method.switchEthereumChain,
                                    m.WalletUIError
                                      .SwitchEthereumChainUnsupportedChainId
                                      .message,
                                    e
                                  ),
                                })
                              )
                            } else
                              {t instanceof m.WalletUIError
                                ? n.handleErrorResponse(
                                    i,
                                    E.Web3Method.switchEthereumChain,
                                    t,
                                    t.errorCode,
                                  )
                                : n.handleWeb3ResponseMessage(
                                    (0, N.Web3ResponseMessage)({
                                      id: i,
                                      response: (0,
                                      I.SwitchEthereumChainResponse)({
                                        isApproved: !1,
                                        rpcUrl: '',
                                      }),
                                    }),
                                  )}
                          },
                          onApprove: function (t) {
                            n.handleWeb3ResponseMessage(
                              (0, N.Web3ResponseMessage)({
                                id: i,
                                response: (0, I.SwitchEthereumChainResponse)({
                                  isApproved: !0,
                                  rpcUrl: t
                                }),
                              })
                            )
                          },
                          chainId: r.params.chainId,
                          address: r.params.address
                        }),
                        n.ui.inlineSwitchEthereumChain() ||
                            n.ui.isStandalone() ||
                            n.publishWeb3RequestEvent(i, r)
                      }),
                      cancel: function (t) {
                        n.publishWeb3RequestCanceledEvent(i),
                        n.handleErrorResponse(i, r.method, t)
                      }
                    }
                  }
                },
                {
                  key: 'inlineAddEthereumChain',
                  value: function (t) {
                    return this.ui.inlineAddEthereumChain(t)
                  }
                },
                {
                  key: 'getSessionIdHash',
                  value: function () {
                    return x.Session.hash(this._session.id)
                  }
                },
                {
                  key: 'sendRequestStandalone',
                  value: function (t, e) {
                    let n = this;
                      var r = function (r) {
                        n.handleErrorResponse(t, e.method, r)
                      };
                      var i = function (e) {
                        n.handleWeb3ResponseMessage(
                          (0, N.Web3ResponseMessage)({ id: t, response: e })
                        )
                      }
                    switch (e.method) {
                      case E.Web3Method.signEthereumMessage:
                        this.ui.signEthereumMessage({
                          request: e,
                          onSuccess: i,
                          onCancel: r
                        })
                        break
                      case E.Web3Method.signEthereumTransaction:
                        this.ui.signEthereumTransaction({
                          request: e,
                          onSuccess: i,
                          onCancel: r
                        })
                        break
                      case E.Web3Method.submitEthereumTransaction:
                        this.ui.submitEthereumTransaction({
                          request: e,
                          onSuccess: i,
                          onCancel: r
                        })
                        break
                      case E.Web3Method.ethereumAddressFromSignedMessage:
                        this.ui.ethereumAddressFromSignedMessage({
                          request: e,
                          onSuccess: i
                        })
                        break
                      default:
                        r()
                    }
                  }
                },
                { key: 'onSessionConfigChanged', value: function (t) {} }
              ]),
              n
            )
          })(S.WalletSDKRelayAbstract)
        ;(T.accountRequestCallbackIds = new Set()),
        l([d.default], T.prototype, 'resetAndReload', null),
        l([d.default], T.prototype, 'handleIncomingEvent', null),
        (e.WalletSDKRelay = T)
      },
      16536: function (t, e, n) {
        'use strict'
        let r = n(17061).default;
          var i = n(17156).default;
          var o = n(56690).default;
          var s = n(89728).default
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.WalletSDKRelayAbstract =
            e.APP_VERSION_KEY =
            e.LOCAL_STORAGE_ADDRESSES_KEY =
            e.WALLET_USER_NAME_KEY =
              void 0)
        let u = n(94649)
        ;(e.WALLET_USER_NAME_KEY = 'walletUsername'),
        (e.LOCAL_STORAGE_ADDRESSES_KEY = 'Addresses'),
        (e.APP_VERSION_KEY = 'AppVersion')
        let c = (function () {
          function t () {
            o(this, t)
          }
          return (
            s(t, [
              {
                key: 'makeEthereumJSONRPCRequest',
                value: (function () {
                  let t = i(
                    r().mark(function t (e, n) {
                      return r().wrap(function (t) {
                        for (;;)
                          {switch ((t.prev = t.next)) {
                            case 0:
                              if (n) {
                                t.next = 2
                                break
                              }
                              throw new Error('Error: No jsonRpcUrl provided')
                            case 2:
                              return t.abrupt(
                                'return',
                                window
                                  .fetch(n, {
                                    method: 'POST',
                                    body: JSON.stringify(e),
                                    mode: 'cors',
                                    headers: {
                                      'Content-Type': 'application/json',
                                    },
                                  })
                                  .then(function (t) {
                                    return t.json()
                                  })
                                  .then(function (t) {
                                    if (!t) throw u.ethErrors.rpc.parse({})
                                    var e = t,
                                      n = e.error
                                    if (n) throw (0, u.serializeError)(n)
                                    return e
                                  }),
                              )
                            case 3:
                            case 'end':
                              return t.stop()
                          }}
                      }, t)
                    })
                  )
                  return function (e, n) {
                    return t.apply(this, arguments)
                  }
                })()
              },
            ]),
            t
          )
        })()
        e.WalletSDKRelayAbstract = c
      },
      69411: function (t, e, n) {
        'use strict'
        let r = n(56690).default;
          var i = n(89728).default
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.WalletSDKRelayEventManager = void 0)
        let o = n(39830);
          var s = (function () {
            function t () {
              r(this, t),
              (this._nextRequestId = 0),
              (this.callbacks = new Map())
            }
            return (
              i(t, [
                {
                  key: 'makeRequestId',
                  value: function () {
                    this._nextRequestId = (this._nextRequestId + 1) % 2147483647
                    let t = this._nextRequestId;
                      var e = (0, o.prepend0x)(t.toString(16))
                    return this.callbacks.get(e) && this.callbacks.delete(e), t
                  }
                },
              ]),
              t
            )
          })()
        e.WalletSDKRelayEventManager = s
      },
      38014: function (t, e) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Web3Method = void 0),
        (function (t) {
          ;(t.requestEthereumAccounts = 'requestEthereumAccounts'),
          (t.signEthereumMessage = 'signEthereumMessage'),
          (t.signEthereumTransaction = 'signEthereumTransaction'),
          (t.submitEthereumTransaction = 'submitEthereumTransaction'),
          (t.ethereumAddressFromSignedMessage =
                'ethereumAddressFromSignedMessage'),
          (t.scanQRCode = 'scanQRCode'),
          (t.generic = 'generic'),
          (t.childRequestEthereumAccounts = 'childRequestEthereumAccounts'),
          (t.addEthereumChain = 'addEthereumChain'),
          (t.switchEthereumChain = 'switchEthereumChain'),
          (t.makeEthereumJSONRPCRequest = 'makeEthereumJSONRPCRequest'),
          (t.watchAsset = 'watchAsset'),
          (t.selectProvider = 'selectProvider')
        })(e.Web3Method || (e.Web3Method = {}))
      },
      6714: function (t, e, n) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Web3RequestCanceledMessage = void 0)
        let r = n(83176)
        e.Web3RequestCanceledMessage = function (t) {
          return { type: r.RelayMessageType.WEB3_REQUEST_CANCELED, id: t }
        }
      },
      39545: function (t, e, n) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Web3RequestMessage = void 0)
        let r = n(83176)
        e.Web3RequestMessage = function (t) {
          return Object.assign({ type: r.RelayMessageType.WEB3_REQUEST }, t)
        }
      },
      34894: function (t, e, n) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.EthereumAddressFromSignedMessageResponse =
            e.SubmitEthereumTransactionResponse =
            e.SignEthereumTransactionResponse =
            e.SignEthereumMessageResponse =
            e.isRequestEthereumAccountsResponse =
            e.SelectProviderResponse =
            e.WatchAssetReponse =
            e.RequestEthereumAccountsResponse =
            e.SwitchEthereumChainResponse =
            e.AddEthereumChainResponse =
            e.ErrorResponse =
              void 0)
        let r = n(38014)
        ;(e.ErrorResponse = function (t, e, n) {
          return { method: t, errorMessage: e, errorCode: n }
        }),
        (e.AddEthereumChainResponse = function (t) {
          return { method: r.Web3Method.addEthereumChain, result: t }
        }),
        (e.SwitchEthereumChainResponse = function (t) {
          return { method: r.Web3Method.switchEthereumChain, result: t }
        }),
        (e.RequestEthereumAccountsResponse = function (t) {
          return { method: r.Web3Method.requestEthereumAccounts, result: t }
        }),
        (e.WatchAssetReponse = function (t) {
          return { method: r.Web3Method.watchAsset, result: t }
        }),
        (e.SelectProviderResponse = function (t) {
          return { method: r.Web3Method.selectProvider, result: t }
        }),
        (e.isRequestEthereumAccountsResponse = function (t) {
          return t && t.method === r.Web3Method.requestEthereumAccounts
        }),
        (e.SignEthereumMessageResponse = function (t) {
          return { method: r.Web3Method.signEthereumMessage, result: t }
        }),
        (e.SignEthereumTransactionResponse = function (t) {
          return { method: r.Web3Method.signEthereumTransaction, result: t }
        }),
        (e.SubmitEthereumTransactionResponse = function (t) {
          return { method: r.Web3Method.submitEthereumTransaction, result: t }
        }),
        (e.EthereumAddressFromSignedMessageResponse = function (t) {
          return {
            method: r.Web3Method.ethereumAddressFromSignedMessage,
            result: t
            }
        })
      },
      41318: function (t, e, n) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.isWeb3ResponseMessage = e.Web3ResponseMessage = void 0)
        let r = n(83176)
        ;(e.Web3ResponseMessage = function (t) {
          return Object.assign({ type: r.RelayMessageType.WEB3_RESPONSE }, t)
        }),
        (e.isWeb3ResponseMessage = function (t) {
          return t && t.type === r.RelayMessageType.WEB3_RESPONSE
        })
      },
      23782: function (t, e, n) {
        'use strict'
        let r = n(17061).default;
          var i = n(861).default;
          var o = n(17156).default
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.decrypt = e.encrypt = void 0)
        let s = n(95471);
          var u = n(39830)
        function c () {
          return (c = o(
            r().mark(function t (e, n) {
              let o, s, c, a, l, h, f, d, p
              return r().wrap(function (t) {
                for (;;)
                  {switch ((t.prev = t.next)) {
                    case 0:
                      if (64 === n.length) {
                        t.next = 2
                        break
                      }
                      throw Error('secret must be 256 bits')
                    case 2:
                      return (
                        (o = crypto.getRandomValues(new Uint8Array(12))),
                        (t.next = 5),
                        crypto.subtle.importKey(
                          'raw',
                          (0, u.hexStringToUint8Array)(n),
                          { name: 'aes-gcm' },
                          !1,
                          ['encrypt', 'decrypt'],
                        )
                      )
                    case 5:
                      return (
                        (s = t.sent),
                        (c = new TextEncoder()),
                        (t.next = 9),
                        window.crypto.subtle.encrypt(
                          { name: 'AES-GCM', iv: o },
                          s,
                          c.encode(e),
                        )
                      )
                    case 9:
                      return (
                        (a = t.sent),
                        16,
                        (l = a.slice(a.byteLength - 16)),
                        (h = a.slice(0, a.byteLength - 16)),
                        (f = new Uint8Array(l)),
                        (d = new Uint8Array(h)),
                        (p = new Uint8Array([].concat(i(o), i(f), i(d)))),
                        t.abrupt('return', (0, u.uint8ArrayToHex)(p))
                      )
                    case 17:
                    case 'end':
                      return t.stop()
                  }}
              }, t)
            })
          )).apply(this, arguments)
        }
        ;(e.encrypt = function (t, e) {
          return c.apply(this, arguments)
        }),
        (e.decrypt = function (t, e) {
          if (e.length !== 64) throw Error('secret must be 256 bits')
          return new s.Observable(function (n) {
            o(
              r().mark(function o () {
                var s, c, a, l, h, f, d, p, b
                return r().wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (r.next = 2),
                            crypto.subtle.importKey(
                              'raw',
                              (0, u.hexStringToUint8Array)(e),
                              { name: 'aes-gcm' },
                              !1,
                              ['encrypt', 'decrypt']
                              )
                          )
                        case 2:
                          return (
                            (s = r.sent),
                            (c = (0, u.hexStringToUint8Array)(t)),
                            (a = c.slice(0, 12)),
                            (l = c.slice(12, 28)),
                            (h = c.slice(28)),
                            (f = new Uint8Array([].concat(i(h), i(l)))),
                            (d = { name: 'AES-GCM', iv: new Uint8Array(a) }),
                            (r.prev = 9),
                            (r.next = 12),
                            window.crypto.subtle.decrypt(d, s, f)
                          )
                        case 12:
                          ;(p = r.sent),
                          (b = new TextDecoder()),
                          n.next(b.decode(p)),
                          n.complete(),
                          (r.next = 21)
                          break
                        case 18:
                          ;(r.prev = 18), (r.t0 = r.catch(9)), n.error(r.t0)
                        case 21:
                        case 'end':
                          return r.stop()
                      }
                  },
                  o,
                  null,
                  [[9, 18]]
                  )
              })
              )()
          })
        })
      },
      52352: function (t, e) {
        'use strict'
        function n () {
          return function (t) {
            return t
          }
        }
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.ProviderType =
            e.RegExpString =
            e.IntNumber =
            e.BigIntString =
            e.AddressString =
            e.HexString =
            e.OpaqueType =
              void 0),
        (e.OpaqueType = n),
        (e.HexString = function (t) {
          return t
        }),
        (e.AddressString = function (t) {
          return t
        }),
        (e.BigIntString = function (t) {
          return t
        }),
        (e.IntNumber = function (t) {
          return Math.floor(t)
        }),
        (e.RegExpString = function (t) {
          return t
        }),
        (function (t) {
          ;(t.CoinbaseWallet = 'CoinbaseWallet'),
          (t.MetaMask = 'MetaMask'),
          (t.Unselected = '')
        })(e.ProviderType || (e.ProviderType = {}))
      },
      39830: function (t, e, n) {
        'use strict'
        let r = n(41999).Buffer;
          var i = n(38416).default;
          var o = n(861).default;
          var s =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t }
            }
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.isInIFrame =
            e.createQrUrl =
            e.getFavicon =
            e.range =
            e.isBigNumber =
            e.ensureParsedJSONObject =
            e.ensureBN =
            e.ensureRegExpString =
            e.ensureIntNumber =
            e.ensureBuffer =
            e.ensureAddressString =
            e.ensureEvenLengthHexString =
            e.ensureHexString =
            e.isHexString =
            e.prepend0x =
            e.strip0x =
            e.has0xPrefix =
            e.hexStringFromIntNumber =
            e.intNumberFromHexString =
            e.bigIntStringFromBN =
            e.hexStringFromBuffer =
            e.hexStringToUint8Array =
            e.uint8ArrayToHex =
            e.randomBytesHex =
              void 0)
        let u = s(n(57891));
          var c = n(18093);
          var a = n(52352);
          var l = /^[0-9]*$/;
          var h = /^[a-f0-9]*$/
        function f (t) {
          return o(t)
            .map(function (t) {
              return t.toString(16).padStart(2, '0')
            })
            .join('')
        }
        function d (t) {
          return t.startsWith('0x') || t.startsWith('0X')
        }
        function p (t) {
          return d(t) ? t.slice(2) : t
        }
        function b (t) {
          return d(t) ? '0x' + t.slice(2) : '0x' + t
        }
        function v (t) {
          if (typeof t !== 'string') return !1
          let e = p(t).toLowerCase()
          return h.test(e)
        }
        function y (t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          if (typeof t === 'string') {
            let n = p(t).toLowerCase()
            if (h.test(n)) return (0, a.HexString)(e ? '0x' + n : n)
          }
          throw new Error(
            '"'.concat(String(t), '" is not a hexadecimal string')
          )
        }
        function g (t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            var n = y(t, !1)
          return (
            n.length % 2 === 1 && (n = (0, a.HexString)('0' + n)),
            e ? (0, a.HexString)('0x' + n) : n
          )
        }
        function m (t) {
          if (typeof t === 'number' && Number.isInteger(t))
            {return (0, a.IntNumber)(t)}
          if (typeof t === 'string') {
            if (l.test(t)) return (0, a.IntNumber)(Number(t))
            if (v(t))
              {return (0, a.IntNumber)(new u.default(g(t, !1), 16).toNumber())}
          }
          throw new Error('Not an integer: '.concat(String(t)))
        }
        function w (t) {
          if (t == null || typeof t.constructor !== 'function') return !1
          let e = t.constructor
          return typeof e.config === 'function' && typeof e.EUCLID === 'number'
        }
        ;(e.randomBytesHex = function (t) {
          return f(crypto.getRandomValues(new Uint8Array(t)))
        }),
        (e.uint8ArrayToHex = f),
        (e.hexStringToUint8Array = function (t) {
          return new Uint8Array(
            t.match(/.{1,2}/g).map(function (t) {
              return parseInt(t, 16)
            })
            )
        }),
        (e.hexStringFromBuffer = function (t) {
          var e =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              var n = t.toString('hex')
          return (0, a.HexString)(e ? '0x' + n : n)
        }),
        (e.bigIntStringFromBN = function (t) {
          return (0, a.BigIntString)(t.toString(10))
        }),
        (e.intNumberFromHexString = function (t) {
          return (0, a.IntNumber)(new u.default(g(t, !1), 16).toNumber())
        }),
        (e.hexStringFromIntNumber = function (t) {
          return (0, a.HexString)('0x' + new u.default(t).toString(16))
        }),
        (e.has0xPrefix = d),
        (e.strip0x = p),
        (e.prepend0x = b),
        (e.isHexString = v),
        (e.ensureHexString = y),
        (e.ensureEvenLengthHexString = g),
        (e.ensureAddressString = function (t) {
          if (typeof t === 'string') {
            var e = p(t).toLowerCase()
            if (v(e) && e.length === 40) return (0, a.AddressString)(b(e))
          }
          throw new Error('Invalid Ethereum address: '.concat(String(t)))
        }),
        (e.ensureBuffer = function (t) {
          if (r.isBuffer(t)) return t
          if (typeof t === 'string') {
            if (v(t)) {
              var e = g(t, !1)
              return r.from(e, 'hex')
            }
            return r.from(t, 'utf8')
          }
          throw new Error('Not binary data: '.concat(String(t)))
        }),
        (e.ensureIntNumber = m),
        (e.ensureRegExpString = function (t) {
          if (t instanceof RegExp) return (0, a.RegExpString)(t.toString())
          throw new Error('Not a RegExp: '.concat(String(t)))
        }),
        (e.ensureBN = function (t) {
          if (t !== null && (u.default.isBN(t) || w(t)))
            return new u.default(t.toString(10), 10)
          if (typeof t === 'number') return new u.default(m(t))
          if (typeof t === 'string') {
            if (l.test(t)) return new u.default(t, 10)
            if (v(t)) return new u.default(g(t, !1), 16)
          }
          throw new Error('Not an integer: '.concat(String(t)))
        }),
        (e.ensureParsedJSONObject = function (t) {
          if (typeof t === 'string') return JSON.parse(t)
          if (typeof t === 'object') return t
          throw new Error(
            'Not a JSON string or an object: '.concat(String(t))
            )
        }),
        (e.isBigNumber = w),
        (e.range = function (t, e) {
          return Array.from({ length: e - t }, function (e, n) {
            return t + n
          })
        }),
        (e.getFavicon = function () {
          var t =
                document.querySelector('link[sizes="192x192"]') ||
                document.querySelector('link[sizes="180x180"]') ||
                document.querySelector('link[rel="icon"]') ||
                document.querySelector('link[rel="shortcut icon"]');
              var e = document.location;
              var n = e.protocol;
              var r = e.host;
              var i = t ? t.getAttribute('href') : null
          return !i || i.startsWith('javascript:')
            ? null
            : i.startsWith('http://') ||
                  i.startsWith('https://') ||
                  i.startsWith('data:')
              ? i
              : i.startsWith('//')
                ? n + i
                : ''.concat(n, '//').concat(r).concat(i)
        }),
        (e.createQrUrl = function (t, e, n, r, o, s) {
          var u;
              var a = r ? 'parent-id' : 'id';
              var l = (0, c.stringify)(
              (i((u = {}), a, t),
              i(u, 'secret', e),
              i(u, 'server', n),
              i(u, 'v', o),
              i(u, 'chainId', s),
              u)
              )
          return ''.concat(n, '/#/link?').concat(l)
        }),
        (e.isInIFrame = function () {
          try {
            return window.frameElement !== null
          } catch (t) {
            return !1
          }
        })
      },
      20402: function (t, e, n) {
        let r = n(41999).Buffer;
          var i = n(21094);
          var o = n(57891)
        function s (t) {
          return t.startsWith('int[')
            ? 'int256' + t.slice(3)
            : t === 'int'
              ? 'int256'
              : t.startsWith('uint[')
                ? 'uint256' + t.slice(4)
                : t === 'uint'
                  ? 'uint256'
                  : t.startsWith('fixed[')
                    ? 'fixed128x128' + t.slice(5)
                    : t === 'fixed'
                      ? 'fixed128x128'
                      : t.startsWith('ufixed[')
                        ? 'ufixed128x128' + t.slice(6)
                        : t === 'ufixed'
                          ? 'ufixed128x128'
                          : t
        }
        function u (t) {
          return parseInt(/^\D+(\d+)$/.exec(t)[1], 10)
        }
        function c (t) {
          let e = /^\D+(\d+)x(\d+)$/.exec(t)
          return [parseInt(e[1], 10), parseInt(e[2], 10)]
        }
        function a (t) {
          let e = t.match(/(.*)\[(.*?)\]$/)
          return e ? (e[2] === '' ? 'dynamic' : parseInt(e[2], 10)) : null
        }
        function l (t) {
          let e = typeof t
          if (e === 'string')
            {return i.isHexString(t)
              ? new o(i.stripHexPrefix(t), 16)
              : new o(t, 10)}
          if (e === 'number') return new o(t)
          if (t.toArray) return t
          throw new Error('Argument is not a number')
        }
        function h (t, e) {
          let n, s, f, d
          if (t === 'address') return h('uint160', l(e))
          if (t === 'bool') return h('uint8', e ? 1 : 0)
          if (t === 'string') return h('bytes', new r(e, 'utf8'))
          if (
            (function (t) {
              return t.lastIndexOf(']') === t.length - 1
            })(t)
          ) {
            if (typeof e.length === 'undefined')
              {throw new Error('Not an array?')}
            if ((n = a(t)) !== 'dynamic' && n !== 0 && e.length > n)
              {throw new Error('Elements exceed array size: ' + n)}
            for (d in ((f = []),
            (t = t.slice(0, t.lastIndexOf('['))),
            typeof e === 'string' && (e = JSON.parse(e)),
            e))
              {f.push(h(t, e[d]))}
            if (n === 'dynamic') {
              let p = h('uint256', e.length)
              f.unshift(p)
            }
            return r.concat(f)
          }
          if (t === 'bytes')
            {return (
              (e = new r(e)),
              (f = r.concat([h('uint256', e.length), e])),
              e.length % 32 !== 0 &&
                (f = r.concat([f, i.zeros(32 - (e.length % 32))])),
              f
            )}
          if (t.startsWith('bytes')) {
            if ((n = u(t)) < 1 || n > 32)
              {throw new Error('Invalid bytes<N> width: ' + n)}
            return i.setLengthRight(e, 32)
          }
          if (t.startsWith('uint')) {
            if ((n = u(t)) % 8 || n < 8 || n > 256)
              {throw new Error('Invalid uint<N> width: ' + n)}
            if ((s = l(e)).bitLength() > n)
              {throw new Error(
                'Supplied uint exceeds width: ' + n + ' vs ' + s.bitLength(),
              )}
            if (s < 0) throw new Error('Supplied uint is negative')
            return s.toArrayLike(r, 'be', 32)
          }
          if (t.startsWith('int')) {
            if ((n = u(t)) % 8 || n < 8 || n > 256)
              {throw new Error('Invalid int<N> width: ' + n)}
            if ((s = l(e)).bitLength() > n)
              {throw new Error(
                'Supplied int exceeds width: ' + n + ' vs ' + s.bitLength(),
              )}
            return s.toTwos(256).toArrayLike(r, 'be', 32)
          }
          if (t.startsWith('ufixed')) {
            if (((n = c(t)), (s = l(e)) < 0))
              {throw new Error('Supplied ufixed is negative')}
            return h('uint256', s.mul(new o(2).pow(new o(n[1]))))
          }
          if (t.startsWith('fixed'))
            {return (n = c(t)), h('int256', l(e).mul(new o(2).pow(new o(n[1]))))}
          throw new Error('Unsupported or invalid type: ' + t)
        }
        function f (t) {
          return t === 'string' || t === 'bytes' || a(t) === 'dynamic'
        }
        function d (t, e) {
          if (t.length !== e.length)
            {throw new Error('Number of types are not matching the values')}
          for (var n, o, c = [], a = 0; a < t.length; a++) {
            let h = s(t[a]);
              var f = e[a]
            if (h === 'bytes') c.push(f)
            else if (h === 'string') c.push(new r(f, 'utf8'))
            else if (h === 'bool') c.push(new r(f ? '01' : '00', 'hex'))
            else if (h === 'address') c.push(i.setLength(f, 20))
            else if (h.startsWith('bytes')) {
              if ((n = u(h)) < 1 || n > 32)
                {throw new Error('Invalid bytes<N> width: ' + n)}
              c.push(i.setLengthRight(f, n))
            } else if (h.startsWith('uint')) {
              if ((n = u(h)) % 8 || n < 8 || n > 256)
                {throw new Error('Invalid uint<N> width: ' + n)}
              if ((o = l(f)).bitLength() > n)
                {throw new Error(
                  'Supplied uint exceeds width: ' + n + ' vs ' + o.bitLength(),
                )}
              c.push(o.toArrayLike(r, 'be', n / 8))
            } else {
              if (!h.startsWith('int'))
                {throw new Error('Unsupported or invalid type: ' + h)}
              if ((n = u(h)) % 8 || n < 8 || n > 256)
                {throw new Error('Invalid int<N> width: ' + n)}
              if ((o = l(f)).bitLength() > n)
                {throw new Error(
                  'Supplied int exceeds width: ' + n + ' vs ' + o.bitLength(),
                )}
              c.push(o.toTwos(n).toArrayLike(r, 'be', n / 8))
            }
          }
          return r.concat(c)
        }
        t.exports = {
          rawEncode: function (t, e) {
            let n = [];
              var i = [];
              var o = 32 * t.length
            for (let u in t) {
              let c = s(t[u]);
                var a = h(c, e[u])
              f(c)
                ? (n.push(h('uint256', o)), i.push(a), (o += a.length))
                : n.push(a)
            }
            return r.concat(n.concat(i))
          },
          solidityPack: d,
          soliditySHA3: function (t, e) {
            return i.keccak(d(t, e))
          }
        }
      },
      35633: function (t, e, n) {
        let r = n(41999).Buffer;
          var i = n(74704).default;
          var o = n(27424).default;
          var s = n(21094);
          var u = n(20402);
          var c = {
            type: 'object',
            properties: {
              types: {
                type: 'object',
                additionalProperties: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      name: { type: 'string' },
                      type: { type: 'string' },
                    },
                    required: ['name', 'type'],
                  },
                },
              },
              primaryType: { type: 'string' },
              domain: { type: 'object' },
              message: { type: 'object' },
            },
            required: ['types', 'primaryType', 'domain', 'message'],
          };
          var a = {
            encodeData: function (t, e, n) {
              let c = this;
                var a =
                  !(arguments.length > 3 && void 0 !== arguments[3]) ||
                  arguments[3];
                var l = ['bytes32'];
                var h = [this.hashType(t, n)]
              if (a) {
                let f;
                  var d = function t(e, i, l) {
                    if (void 0 !== n[i])
                      return [
                        'bytes32',
                        null == l
                          ? '0x0000000000000000000000000000000000000000000000000000000000000000'
                          : s.keccak(c.encodeData(i, l, n, a)),
                      ]
                    if (void 0 === l)
                      throw new Error(
                        'missing value for field '
                          .concat(e, ' of type ')
                          .concat(i),
                      )
                    if ('bytes' === i) return ['bytes32', s.keccak(l)]
                    if ('string' === i)
                      return (
                        'string' === typeof l && (l = r.from(l, 'utf8')),
                        ['bytes32', s.keccak(l)]
                      )
                    if (i.lastIndexOf(']') === i.length - 1) {
                      var h = i.slice(0, i.lastIndexOf('[')),
                        f = l.map(function (n) {
                          return t(e, h, n)
                        })
                      return [
                        'bytes32',
                        s.keccak(
                          u.rawEncode(
                            f.map(function (t) {
                              return o(t, 1)[0]
                            }),
                            f.map(function (t) {
                              return o(t, 2)[1]
                            }),
                          ),
                        ),
                      ]
                    }
                    return [i, l]
                  };
                  var p = i(n[t])
                try {
                  for (p.s(); !(f = p.n()).done;) {
                    let b = f.value;
                      var v = d(b.name, b.type, e[b.name]);
                      var y = o(v, 2);
                      var g = y[0];
                      var m = y[1]
                    l.push(g), h.push(m)
                  }
                } catch (S) {
                  p.e(S)
                } finally {
                  p.f()
                }
              } else {
                let w;
                  var _ = i(n[t])
                try {
                  for (_.s(); !(w = _.n()).done;) {
                    let k = w.value;
                      var x = e[k.name]
                    if (void 0 !== x)
                      {if ('bytes' === k.type)
                        l.push('bytes32'), (x = s.keccak(x)), h.push(x)
                      else if ('string' === k.type)
                        l.push('bytes32'),
                          'string' === typeof x && (x = r.from(x, 'utf8')),
                          (x = s.keccak(x)),
                          h.push(x)
                      else if (void 0 !== n[k.type])
                        l.push('bytes32'),
                          (x = s.keccak(this.encodeData(k.type, x, n, a))),
                          h.push(x)
                      else {
                        if (k.type.lastIndexOf(']') === k.type.length - 1)
                          throw new Error(
                            'Arrays currently unimplemented in encodeData',
                          )
                        l.push(k.type), h.push(x)
                      }}
                  }
                } catch (S) {
                  _.e(S)
                } finally {
                  _.f()
                }
              }
              return u.rawEncode(l, h)
            },
            encodeType: function (t, e) {
              let n = '';
                var r = this.findTypeDependencies(t, e).filter(function (e) {
                  return e !== t
                })
              r = [t].concat(r.sort())
              let o;
                var s = i(r)
              try {
                for (s.s(); !(o = s.n()).done;) {
                  let u = o.value
                  if (!e[u])
                    {throw new Error('No type definition specified: ' + u)}
                  n +=
                    u +
                    '(' +
                    e[u]
                      .map(function (t) {
                        let e = t.name
                        return t.type + ' ' + e
                      })
                      .join(',') +
                    ')'
                }
              } catch (c) {
                s.e(c)
              } finally {
                s.f()
              }
              return n
            },
            findTypeDependencies: function (t, e) {
              let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : []
              if (((t = t.match(/^\w*/)[0]), n.includes(t) || void 0 === e[t]))
                {return n}
              n.push(t)
              let r;
                var o = i(e[t])
              try {
                for (o.s(); !(r = o.n()).done;) {
                  var s;
                    var u = r.value;
                    var c = i(this.findTypeDependencies(u.type, e, n))
                  try {
                    for (c.s(); !(s = c.n()).done;) {
                      let a = s.value
                      !n.includes(a) && n.push(a)
                    }
                  } catch (l) {
                    c.e(l)
                  } finally {
                    c.f()
                  }
                }
              } catch (l) {
                o.e(l)
              } finally {
                o.f()
              }
              return n
            },
            hashStruct: function (t, e, n) {
              let r =
                !(arguments.length > 3 && void 0 !== arguments[3]) ||
                arguments[3]
              return s.keccak(this.encodeData(t, e, n, r))
            },
            hashType: function (t, e) {
              return s.keccak(this.encodeType(t, e))
            },
            sanitizeData: function (t) {
              let e = {}
              for (let n in c.properties) t[n] && (e[n] = t[n])
              return (
                e.types &&
                  (e.types = Object.assign({ EIP712Domain: [] }, e.types)),
                e
              )
            },
            hash: function (t) {
              let e =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1];
                var n = this.sanitizeData(t);
                var i = [r.from('1901', 'hex')]
              return (
                i.push(this.hashStruct('EIP712Domain', n.domain, n.types, e)),
                n.primaryType !== 'EIP712Domain' &&
                  i.push(this.hashStruct(n.primaryType, n.message, n.types, e)),
                s.keccak(r.concat(i))
              )
            }
          }
        t.exports = {
          TYPED_MESSAGE_SCHEMA: c,
          TypedDataUtils: a,
          hashForSignTypedDataLegacy: function (t) {
            return (function (t) {
              let e = new Error('Expect argument to be non-empty array')
              if (typeof t !== 'object' || !t.length) throw e
              let n = t.map(function (t) {
                  return t.type === 'bytes' ? s.toBuffer(t.value) : t.value
                });
                var r = t.map(function (t) {
                  return t.type
                });
                var i = t.map(function (t) {
                  if (!t.name) throw e
                  return t.type + ' ' + t.name
                })
              return u.soliditySHA3(
                ['bytes32', 'bytes32'],
                [
                  u.soliditySHA3(new Array(t.length).fill('string'), i),
                  u.soliditySHA3(r, n)
                ],
              )
            })(t.data)
          },
          hashForSignTypedData_v3: function (t) {
            return a.hash(t.data, !1)
          },
          hashForSignTypedData_v4: function (t) {
            return a.hash(t.data)
          }
        }
      },
      21094: function (t, e, n) {
        let r = n(41999).Buffer;
          var i = n(19726);
          var o = n(57891)
        function s (t) {
          return r.allocUnsafe(t).fill(0)
        }
        function u (t, e, n) {
          let r = s(e)
          return (
            (t = c(t)),
            n
              ? t.length < e
                ? (t.copy(r), r)
                : t.slice(0, e)
              : t.length < e
                ? (t.copy(r, e - t.length), r)
                : t.slice(-e)
          )
        }
        function c (t) {
          if (!r.isBuffer(t))
            {if (Array.isArray(t)) t = r.from(t)
            else if ('string' === typeof t)
              t = a(t)
                ? r.from((e = l(t)).length % 2 ? '0' + e : e, 'hex')
                : r.from(t)
            else if ('number' === typeof t) t = intToBuffer(t)
            else if (null === t || void 0 === t) t = r.allocUnsafe(0)
            else if (o.isBN(t)) t = t.toArrayLike(r)
            else {
              if (!t.toArray) throw new Error('invalid type')
              t = r.from(t.toArray())
            }}
          let e
          return t
        }
        function a (t) {
          return typeof t === 'string' && t.match(/^0x[0-9A-Fa-f]*$/)
        }
        function l (t) {
          return typeof t === 'string' && t.startsWith('0x') ? t.slice(2) : t
        }
        t.exports = {
          zeros: s,
          setLength: u,
          setLengthRight: function (t, e) {
            return u(t, e, !0)
          },
          isHexString: a,
          stripHexPrefix: l,
          toBuffer: c,
          bufferToHex: function (t) {
            return '0x' + (t = c(t)).toString('hex')
          },
          keccak: function (t, e) {
            return (
              (t = c(t)),
              e || (e = 256),
              i('keccak' + e)
                .update(t)
                .digest()
            )
          }
        }
      },
      98319: function (t) {
        function e (t) {
          ;(this.mode = r.MODE_8BIT_BYTE),
          (this.data = t),
          (this.parsedData = [])
          for (let e = 0, n = this.data.length; e < n; e++) {
            let i = [];
              var o = this.data.charCodeAt(e)
            o > 65536
              ? ((i[0] = 240 | ((1835008 & o) >>> 18)),
                (i[1] = 128 | ((258048 & o) >>> 12)),
                (i[2] = 128 | ((4032 & o) >>> 6)),
                (i[3] = 128 | (63 & o)))
              : o > 2048
                ? ((i[0] = 224 | ((61440 & o) >>> 12)),
                  (i[1] = 128 | ((4032 & o) >>> 6)),
                  (i[2] = 128 | (63 & o)))
                : o > 128
                  ? ((i[0] = 192 | ((1984 & o) >>> 6)), (i[1] = 128 | (63 & o)))
                  : (i[0] = o),
            this.parsedData.push(i)
          }
          ;(this.parsedData = Array.prototype.concat.apply(
            [],
            this.parsedData
          )),
          this.parsedData.length != this.data.length &&
              (this.parsedData.unshift(191),
              this.parsedData.unshift(187),
              this.parsedData.unshift(239))
        }
        function n (t, e) {
          ;(this.typeNumber = t),
          (this.errorCorrectLevel = e),
          (this.modules = null),
          (this.moduleCount = 0),
          (this.dataCache = null),
          (this.dataList = [])
        }
        ;(e.prototype = {
          getLength: function (t) {
            return this.parsedData.length
          },
          write: function (t) {
            for (let e = 0, n = this.parsedData.length; e < n; e++)
              {t.put(this.parsedData[e], 8)}
          }
        }),
        (n.prototype = {
          addData: function (t) {
            var n = new e(t)
            this.dataList.push(n), (this.dataCache = null)
          },
          isDark: function (t, e) {
            if (
              t < 0 ||
                this.moduleCount <= t ||
                e < 0 ||
                this.moduleCount <= e
            )
              throw new Error(t + ',' + e)
            return this.modules[t][e]
          },
          getModuleCount: function () {
            return this.moduleCount
          },
          make: function () {
            this.makeImpl(!1, this.getBestMaskPattern())
          },
          makeImpl: function (t, e) {
            ;(this.moduleCount = 4 * this.typeNumber + 17),
            (this.modules = new Array(this.moduleCount))
            for (let r = 0; r < this.moduleCount; r++) {
              this.modules[r] = new Array(this.moduleCount)
              for (let i = 0; i < this.moduleCount; i++)
                this.modules[r][i] = null
            }
            this.setupPositionProbePattern(0, 0),
            this.setupPositionProbePattern(this.moduleCount - 7, 0),
            this.setupPositionProbePattern(0, this.moduleCount - 7),
            this.setupPositionAdjustPattern(),
            this.setupTimingPattern(),
            this.setupTypeInfo(t, e),
            this.typeNumber >= 7 && this.setupTypeNumber(t),
            null == this.dataCache &&
                  (this.dataCache = n.createData(
                    this.typeNumber,
                    this.errorCorrectLevel,
                    this.dataList
                  )),
            this.mapData(this.dataCache, e)
          },
          setupPositionProbePattern: function (t, e) {
            for (let n = -1; n <= 7; n++)
              if (!(t + n <= -1 || this.moduleCount <= t + n))
                for (let r = -1; r <= 7; r++)
                  e + r <= -1 ||
                      this.moduleCount <= e + r ||
                      (this.modules[t + n][e + r] =
                        (n >= 0 && n <= 6 && (r == 0 || r == 6)) ||
                        (r >= 0 && r <= 6 && (n == 0 || n == 6)) ||
                        (n >= 2 && n <= 4 && r >= 2 && r <= 4))
          },
          getBestMaskPattern: function () {
            for (var t = 0, e = 0, n = 0; n < 8; n++) {
              this.makeImpl(!0, n)
              var r = d.getLostPoint(this)
                ;(n == 0 || t > r) && ((t = r), (e = n))
            }
            return e
          },
          createMovieClip: function (t, e, n) {
            var r = t.createEmptyMovieClip(e, n)
            this.make()
            for (let i = 0; i < this.modules.length; i++)
              for (let o = 1 * i, s = 0; s < this.modules[i].length; s++) {
                var u = 1 * s
                this.modules[i][s] &&
                    (r.beginFill(0, 100),
                    r.moveTo(u, o),
                    r.lineTo(u + 1, o),
                    r.lineTo(u + 1, o + 1),
                    r.lineTo(u, o + 1),
                    r.endFill())
              }
            return r
          },
          setupTimingPattern: function () {
            for (let t = 8; t < this.moduleCount - 8; t++)
              null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0)
            for (let e = 8; e < this.moduleCount - 8; e++)
              null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0)
          },
          setupPositionAdjustPattern: function () {
            for (
              var t = d.getPatternPosition(this.typeNumber), e = 0;
              e < t.length;
              e++
            )
              for (let n = 0; n < t.length; n++) {
                var r = t[e];
                    var i = t[n]
                if (this.modules[r][i] == null)
                  for (let o = -2; o <= 2; o++)
                    for (let s = -2; s <= 2; s++)
                      this.modules[r + o][i + s] =
                          o == -2 ||
                          o == 2 ||
                          s == -2 ||
                          s == 2 ||
                          (o == 0 && s == 0)
              }
          },
          setupTypeNumber: function (t) {
            for (
              var e = d.getBCHTypeNumber(this.typeNumber), n = 0;
              n < 18;
              n++
            ) {
              var r = !t && ((e >> n) & 1) == 1
              this.modules[Math.floor(n / 3)][
                (n % 3) + this.moduleCount - 8 - 3
              ] = r
            }
            for (n = 0; n < 18; n++) {
              r = !t && ((e >> n) & 1) == 1
              this.modules[(n % 3) + this.moduleCount - 8 - 3][
                Math.floor(n / 3)
              ] = r
            }
          },
          setupTypeInfo: function (t, e) {
            for (
              var n = (this.errorCorrectLevel << 3) | e,
                r = d.getBCHTypeInfo(n),
                i = 0;
              i < 15;
              i++
            ) {
              var o = !t && ((r >> i) & 1) == 1
              i < 6
                ? (this.modules[i][8] = o)
                : i < 8
                  ? (this.modules[i + 1][8] = o)
                  : (this.modules[this.moduleCount - 15 + i][8] = o)
            }
            for (i = 0; i < 15; i++) {
              o = !t && ((r >> i) & 1) == 1
              i < 8
                ? (this.modules[8][this.moduleCount - i - 1] = o)
                : i < 9
                  ? (this.modules[8][15 - i - 1 + 1] = o)
                  : (this.modules[8][15 - i - 1] = o)
            }
            this.modules[this.moduleCount - 8][8] = !t
          },
          mapData: function (t, e) {
            for (
              var n = -1,
                r = this.moduleCount - 1,
                i = 7,
                o = 0,
                s = this.moduleCount - 1;
              s > 0;
              s -= 2
            )
              for (s == 6 && s--; ;) {
                for (let u = 0; u < 2; u++)
                  if (this.modules[r][s - u] == null) {
                    var c = !1
                    o < t.length && (c = ((t[o] >>> i) & 1) == 1),
                    d.getMask(e, r, s - u) && (c = !c),
                    (this.modules[r][s - u] = c),
                    -1 == --i && (o++, (i = 7))
                  }
                if ((r += n) < 0 || this.moduleCount <= r) {
                  ;(r -= n), (n = -n)
                  break
                }
              }
          },
        }),
        (n.PAD0 = 236),
        (n.PAD1 = 17),
        (n.createData = function (t, e, r) {
          for (
            var i = y.getRSBlocks(t, e), o = new g(), s = 0;
            s < r.length;
            s++
          ) {
            var u = r[s]
            o.put(u.mode, 4),
            o.put(u.getLength(), d.getLengthInBits(u.mode, t)),
            u.write(o)
          }
          var c = 0
          for (s = 0; s < i.length; s++) c += i[s].dataCount
          if (o.getLengthInBits() > 8 * c)
            throw new Error(
              'code length overflow. (' +
                  o.getLengthInBits() +
                  '>' +
                  8 * c +
                  ')'
              )
          for (
            o.getLengthInBits() + 4 <= 8 * c && o.put(0, 4);
            o.getLengthInBits() % 8 != 0;

          )
            o.putBit(!1)
          for (
            ;
            !(o.getLengthInBits() >= 8 * c) &&
              (o.put(n.PAD0, 8), !(o.getLengthInBits() >= 8 * c));

          )
            o.put(n.PAD1, 8)
          return n.createBytes(o, i)
        }),
        (n.createBytes = function (t, e) {
          for (
            var n = 0,
              r = 0,
              i = 0,
              o = new Array(e.length),
              s = new Array(e.length),
              u = 0;
            u < e.length;
            u++
          ) {
            var c = e[u].dataCount;
                var a = e[u].totalCount - c
              ;(r = Math.max(r, c)), (i = Math.max(i, a)), (o[u] = new Array(c))
            for (var l = 0; l < o[u].length; l++)
              o[u][l] = 255 & t.buffer[l + n]
            n += c
            var h = d.getErrorCorrectPolynomial(a);
                var f = new v(o[u], h.getLength() - 1).mod(h)
            s[u] = new Array(h.getLength() - 1)
            for (l = 0; l < s[u].length; l++) {
              var p = l + f.getLength() - s[u].length
              s[u][l] = p >= 0 ? f.get(p) : 0
            }
          }
          var b = 0
          for (l = 0; l < e.length; l++) b += e[l].totalCount
          var y = new Array(b);
              var g = 0
          for (l = 0; l < r; l++)
            for (u = 0; u < e.length; u++)
              l < o[u].length && (y[g++] = o[u][l])
          for (l = 0; l < i; l++)
            for (u = 0; u < e.length; u++)
              l < s[u].length && (y[g++] = s[u][l])
          return y
        })
        for (
          var r = {
              MODE_NUMBER: 1,
              MODE_ALPHA_NUM: 2,
              MODE_8BIT_BYTE: 4,
              MODE_KANJI: 8
            },
            i = { L: 1, M: 0, Q: 3, H: 2 },
            o = 0,
            s = 1,
            u = 2,
            c = 3,
            a = 4,
            l = 5,
            h = 6,
            f = 7,
            d = {
              PATTERN_POSITION_TABLE: [
                [],
                [6, 18],
                [6, 22],
                [6, 26],
                [6, 30],
                [6, 34],
                [6, 22, 38],
                [6, 24, 42],
                [6, 26, 46],
                [6, 28, 50],
                [6, 30, 54],
                [6, 32, 58],
                [6, 34, 62],
                [6, 26, 46, 66],
                [6, 26, 48, 70],
                [6, 26, 50, 74],
                [6, 30, 54, 78],
                [6, 30, 56, 82],
                [6, 30, 58, 86],
                [6, 34, 62, 90],
                [6, 28, 50, 72, 94],
                [6, 26, 50, 74, 98],
                [6, 30, 54, 78, 102],
                [6, 28, 54, 80, 106],
                [6, 32, 58, 84, 110],
                [6, 30, 58, 86, 114],
                [6, 34, 62, 90, 118],
                [6, 26, 50, 74, 98, 122],
                [6, 30, 54, 78, 102, 126],
                [6, 26, 52, 78, 104, 130],
                [6, 30, 56, 82, 108, 134],
                [6, 34, 60, 86, 112, 138],
                [6, 30, 58, 86, 114, 142],
                [6, 34, 62, 90, 118, 146],
                [6, 30, 54, 78, 102, 126, 150],
                [6, 24, 50, 76, 102, 128, 154],
                [6, 28, 54, 80, 106, 132, 158],
                [6, 32, 58, 84, 110, 136, 162],
                [6, 26, 54, 82, 110, 138, 166],
                [6, 30, 58, 86, 114, 142, 170]
              ],
              G15: 1335,
              G18: 7973,
              G15_MASK: 21522,
              getBCHTypeInfo: function (t) {
                for (
                  var e = t << 10;
                  d.getBCHDigit(e) - d.getBCHDigit(d.G15) >= 0;

                )
                  {e ^= d.G15 << (d.getBCHDigit(e) - d.getBCHDigit(d.G15))}
                return ((t << 10) | e) ^ d.G15_MASK
              },
              getBCHTypeNumber: function (t) {
                for (
                  var e = t << 12;
                  d.getBCHDigit(e) - d.getBCHDigit(d.G18) >= 0;

                )
                  {e ^= d.G18 << (d.getBCHDigit(e) - d.getBCHDigit(d.G18))}
                return (t << 12) | e
              },
              getBCHDigit: function (t) {
                for (var e = 0; t != 0;) e++, (t >>>= 1)
                return e
              },
              getPatternPosition: function (t) {
                return d.PATTERN_POSITION_TABLE[t - 1]
              },
              getMask: function (t, e, n) {
                switch (t) {
                  case o:
                    return (e + n) % 2 == 0
                  case s:
                    return e % 2 == 0
                  case u:
                    return n % 3 == 0
                  case c:
                    return (e + n) % 3 == 0
                  case a:
                    return (Math.floor(e / 2) + Math.floor(n / 3)) % 2 == 0
                  case l:
                    return ((e * n) % 2) + ((e * n) % 3) == 0
                  case h:
                    return (((e * n) % 2) + ((e * n) % 3)) % 2 == 0
                  case f:
                    return (((e * n) % 3) + ((e + n) % 2)) % 2 == 0
                  default:
                    throw new Error('bad maskPattern:' + t)
                }
              },
              getErrorCorrectPolynomial: function (t) {
                for (var e = new v([1], 0), n = 0; n < t; n++)
                  {e = e.multiply(new v([1, p.gexp(n)], 0))}
                return e
              },
              getLengthInBits: function (t, e) {
                if (e >= 1 && e < 10)
                  {switch (t) {
                    case r.MODE_NUMBER:
                      return 10
                    case r.MODE_ALPHA_NUM:
                      return 9
                    case r.MODE_8BIT_BYTE:
                    case r.MODE_KANJI:
                      return 8
                    default:
                      throw new Error('mode:' + t)
                  }}
                else if (e < 27)
                  {switch (t) {
                    case r.MODE_NUMBER:
                      return 12
                    case r.MODE_ALPHA_NUM:
                      return 11
                    case r.MODE_8BIT_BYTE:
                      return 16
                    case r.MODE_KANJI:
                      return 10
                    default:
                      throw new Error('mode:' + t)
                  }}
                else {
                  if (!(e < 41)) throw new Error('type:' + e)
                  switch (t) {
                    case r.MODE_NUMBER:
                      return 14
                    case r.MODE_ALPHA_NUM:
                      return 13
                    case r.MODE_8BIT_BYTE:
                      return 16
                    case r.MODE_KANJI:
                      return 12
                    default:
                      throw new Error('mode:' + t)
                  }
                }
              },
              getLostPoint: function (t) {
                for (var e = t.getModuleCount(), n = 0, r = 0; r < e; r++)
                  {for (var i = 0; i < e; i++) {
                    for (var o = 0, s = t.isDark(r, i), u = -1; u <= 1; u++)
                      if (!(r + u < 0 || e <= r + u))
                        for (var c = -1; c <= 1; c++)
                          i + c < 0 ||
                            e <= i + c ||
                            (0 == u && 0 == c) ||
                            (s == t.isDark(r + u, i + c) && o++)
                    o > 5 && (n += 3 + o - 5)
                  }}
                for (r = 0; r < e - 1; r++)
                  {for (i = 0; i < e - 1; i++) {
                    var a = 0
                    t.isDark(r, i) && a++,
                      t.isDark(r + 1, i) && a++,
                      t.isDark(r, i + 1) && a++,
                      t.isDark(r + 1, i + 1) && a++,
                      (0 != a && 4 != a) || (n += 3)
                  }}
                for (r = 0; r < e; r++)
                  {for (i = 0; i < e - 6; i++)
                    t.isDark(r, i) &&
                      !t.isDark(r, i + 1) &&
                      t.isDark(r, i + 2) &&
                      t.isDark(r, i + 3) &&
                      t.isDark(r, i + 4) &&
                      !t.isDark(r, i + 5) &&
                      t.isDark(r, i + 6) &&
                      (n += 40)}
                for (i = 0; i < e; i++)
                  {for (r = 0; r < e - 6; r++)
                    t.isDark(r, i) &&
                      !t.isDark(r + 1, i) &&
                      t.isDark(r + 2, i) &&
                      t.isDark(r + 3, i) &&
                      t.isDark(r + 4, i) &&
                      !t.isDark(r + 5, i) &&
                      t.isDark(r + 6, i) &&
                      (n += 40)}
                let l = 0
                for (i = 0; i < e; i++)
                  {for (r = 0; r < e; r++) t.isDark(r, i) && l++}
                return (n += 10 * (Math.abs((100 * l) / e / e - 50) / 5))
              }
            },
            p = {
              glog: function (t) {
                if (t < 1) throw new Error('glog(' + t + ')')
                return p.LOG_TABLE[t]
              },
              gexp: function (t) {
                for (; t < 0;) t += 255
                for (; t >= 256;) t -= 255
                return p.EXP_TABLE[t]
              },
              EXP_TABLE: new Array(256),
              LOG_TABLE: new Array(256)
            },
            b = 0;
          b < 8;
          b++
        )
          {p.EXP_TABLE[b] = 1 << b}
        for (b = 8; b < 256; b++)
          {p.EXP_TABLE[b] =
            p.EXP_TABLE[b - 4] ^
            p.EXP_TABLE[b - 5] ^
            p.EXP_TABLE[b - 6] ^
            p.EXP_TABLE[b - 8]}
        for (b = 0; b < 255; b++) p.LOG_TABLE[p.EXP_TABLE[b]] = b
        function v (t, e) {
          if (void 0 == t.length) throw new Error(t.length + '/' + e)
          for (var n = 0; n < t.length && t[n] == 0;) n++
          this.num = new Array(t.length - n + e)
          for (let r = 0; r < t.length - n; r++) this.num[r] = t[r + n]
        }
        function y (t, e) {
          ;(this.totalCount = t), (this.dataCount = e)
        }
        function g () {
          ;(this.buffer = []), (this.length = 0)
        }
        ;(v.prototype = {
          get: function (t) {
            return this.num[t]
          },
          getLength: function () {
            return this.num.length
          },
          multiply: function (t) {
            for (
              var e = new Array(this.getLength() + t.getLength() - 1), n = 0;
              n < this.getLength();
              n++
            )
              {for (var r = 0; r < t.getLength(); r++)
                e[n + r] ^= p.gexp(p.glog(this.get(n)) + p.glog(t.get(r)))}
            return new v(e, 0)
          },
          mod: function (t) {
            if (this.getLength() - t.getLength() < 0) return this
            for (
              var e = p.glog(this.get(0)) - p.glog(t.get(0)),
                n = new Array(this.getLength()),
                r = 0;
              r < this.getLength();
              r++
            )
              {n[r] = this.get(r)}
            for (r = 0; r < t.getLength(); r++)
              {n[r] ^= p.gexp(p.glog(t.get(r)) + e)}
            return new v(n, 0).mod(t)
          }
        }),
        (y.RS_BLOCK_TABLE = [
          [1, 26, 19],
          [1, 26, 16],
          [1, 26, 13],
          [1, 26, 9],
          [1, 44, 34],
          [1, 44, 28],
          [1, 44, 22],
          [1, 44, 16],
          [1, 70, 55],
          [1, 70, 44],
          [2, 35, 17],
          [2, 35, 13],
          [1, 100, 80],
          [2, 50, 32],
          [2, 50, 24],
          [4, 25, 9],
          [1, 134, 108],
          [2, 67, 43],
          [2, 33, 15, 2, 34, 16],
          [2, 33, 11, 2, 34, 12],
          [2, 86, 68],
          [4, 43, 27],
          [4, 43, 19],
          [4, 43, 15],
          [2, 98, 78],
          [4, 49, 31],
          [2, 32, 14, 4, 33, 15],
          [4, 39, 13, 1, 40, 14],
          [2, 121, 97],
          [2, 60, 38, 2, 61, 39],
          [4, 40, 18, 2, 41, 19],
          [4, 40, 14, 2, 41, 15],
          [2, 146, 116],
          [3, 58, 36, 2, 59, 37],
          [4, 36, 16, 4, 37, 17],
          [4, 36, 12, 4, 37, 13],
          [2, 86, 68, 2, 87, 69],
          [4, 69, 43, 1, 70, 44],
          [6, 43, 19, 2, 44, 20],
          [6, 43, 15, 2, 44, 16],
          [4, 101, 81],
          [1, 80, 50, 4, 81, 51],
          [4, 50, 22, 4, 51, 23],
          [3, 36, 12, 8, 37, 13],
          [2, 116, 92, 2, 117, 93],
          [6, 58, 36, 2, 59, 37],
          [4, 46, 20, 6, 47, 21],
          [7, 42, 14, 4, 43, 15],
          [4, 133, 107],
          [8, 59, 37, 1, 60, 38],
          [8, 44, 20, 4, 45, 21],
          [12, 33, 11, 4, 34, 12],
          [3, 145, 115, 1, 146, 116],
          [4, 64, 40, 5, 65, 41],
          [11, 36, 16, 5, 37, 17],
          [11, 36, 12, 5, 37, 13],
          [5, 109, 87, 1, 110, 88],
          [5, 65, 41, 5, 66, 42],
          [5, 54, 24, 7, 55, 25],
          [11, 36, 12],
          [5, 122, 98, 1, 123, 99],
          [7, 73, 45, 3, 74, 46],
          [15, 43, 19, 2, 44, 20],
          [3, 45, 15, 13, 46, 16],
          [1, 135, 107, 5, 136, 108],
          [10, 74, 46, 1, 75, 47],
          [1, 50, 22, 15, 51, 23],
          [2, 42, 14, 17, 43, 15],
          [5, 150, 120, 1, 151, 121],
          [9, 69, 43, 4, 70, 44],
          [17, 50, 22, 1, 51, 23],
          [2, 42, 14, 19, 43, 15],
          [3, 141, 113, 4, 142, 114],
          [3, 70, 44, 11, 71, 45],
          [17, 47, 21, 4, 48, 22],
          [9, 39, 13, 16, 40, 14],
          [3, 135, 107, 5, 136, 108],
          [3, 67, 41, 13, 68, 42],
          [15, 54, 24, 5, 55, 25],
          [15, 43, 15, 10, 44, 16],
          [4, 144, 116, 4, 145, 117],
          [17, 68, 42],
          [17, 50, 22, 6, 51, 23],
          [19, 46, 16, 6, 47, 17],
          [2, 139, 111, 7, 140, 112],
          [17, 74, 46],
          [7, 54, 24, 16, 55, 25],
          [34, 37, 13],
          [4, 151, 121, 5, 152, 122],
          [4, 75, 47, 14, 76, 48],
          [11, 54, 24, 14, 55, 25],
          [16, 45, 15, 14, 46, 16],
          [6, 147, 117, 4, 148, 118],
          [6, 73, 45, 14, 74, 46],
          [11, 54, 24, 16, 55, 25],
          [30, 46, 16, 2, 47, 17],
          [8, 132, 106, 4, 133, 107],
          [8, 75, 47, 13, 76, 48],
          [7, 54, 24, 22, 55, 25],
          [22, 45, 15, 13, 46, 16],
          [10, 142, 114, 2, 143, 115],
          [19, 74, 46, 4, 75, 47],
          [28, 50, 22, 6, 51, 23],
          [33, 46, 16, 4, 47, 17],
          [8, 152, 122, 4, 153, 123],
          [22, 73, 45, 3, 74, 46],
          [8, 53, 23, 26, 54, 24],
          [12, 45, 15, 28, 46, 16],
          [3, 147, 117, 10, 148, 118],
          [3, 73, 45, 23, 74, 46],
          [4, 54, 24, 31, 55, 25],
          [11, 45, 15, 31, 46, 16],
          [7, 146, 116, 7, 147, 117],
          [21, 73, 45, 7, 74, 46],
          [1, 53, 23, 37, 54, 24],
          [19, 45, 15, 26, 46, 16],
          [5, 145, 115, 10, 146, 116],
          [19, 75, 47, 10, 76, 48],
          [15, 54, 24, 25, 55, 25],
          [23, 45, 15, 25, 46, 16],
          [13, 145, 115, 3, 146, 116],
          [2, 74, 46, 29, 75, 47],
          [42, 54, 24, 1, 55, 25],
          [23, 45, 15, 28, 46, 16],
          [17, 145, 115],
          [10, 74, 46, 23, 75, 47],
          [10, 54, 24, 35, 55, 25],
          [19, 45, 15, 35, 46, 16],
          [17, 145, 115, 1, 146, 116],
          [14, 74, 46, 21, 75, 47],
          [29, 54, 24, 19, 55, 25],
          [11, 45, 15, 46, 46, 16],
          [13, 145, 115, 6, 146, 116],
          [14, 74, 46, 23, 75, 47],
          [44, 54, 24, 7, 55, 25],
          [59, 46, 16, 1, 47, 17],
          [12, 151, 121, 7, 152, 122],
          [12, 75, 47, 26, 76, 48],
          [39, 54, 24, 14, 55, 25],
          [22, 45, 15, 41, 46, 16],
          [6, 151, 121, 14, 152, 122],
          [6, 75, 47, 34, 76, 48],
          [46, 54, 24, 10, 55, 25],
          [2, 45, 15, 64, 46, 16],
          [17, 152, 122, 4, 153, 123],
          [29, 74, 46, 14, 75, 47],
          [49, 54, 24, 10, 55, 25],
          [24, 45, 15, 46, 46, 16],
          [4, 152, 122, 18, 153, 123],
          [13, 74, 46, 32, 75, 47],
          [48, 54, 24, 14, 55, 25],
          [42, 45, 15, 32, 46, 16],
          [20, 147, 117, 4, 148, 118],
          [40, 75, 47, 7, 76, 48],
          [43, 54, 24, 22, 55, 25],
          [10, 45, 15, 67, 46, 16],
          [19, 148, 118, 6, 149, 119],
          [18, 75, 47, 31, 76, 48],
          [34, 54, 24, 34, 55, 25],
          [20, 45, 15, 61, 46, 16]
          ]),
        (y.getRSBlocks = function (t, e) {
          var n = y.getRsBlockTable(t, e)
          if (void 0 == n)
            throw new Error(
              'bad rs block @ typeNumber:' + t + '/errorCorrectLevel:' + e
              )
          for (var r = n.length / 3, i = [], o = 0; o < r; o++)
            for (
              var s = n[3 * o + 0], u = n[3 * o + 1], c = n[3 * o + 2], a = 0;
              a < s;
              a++
            )
              i.push(new y(u, c))
          return i
        }),
        (y.getRsBlockTable = function (t, e) {
            switch (e) {
              case i.L:
                return y.RS_BLOCK_TABLE[4 * (t - 1) + 0]
              case i.M:
                return y.RS_BLOCK_TABLE[4 * (t - 1) + 1]
              case i.Q:
                return y.RS_BLOCK_TABLE[4 * (t - 1) + 2]
              case i.H:
                return y.RS_BLOCK_TABLE[4 * (t - 1) + 3]
              default:
                
            }
          }),
        (g.prototype = {
          get: function (t) {
            var e = Math.floor(t / 8)
            return ((this.buffer[e] >>> (7 - (t % 8))) & 1) == 1
          },
          put: function (t, e) {
            for (let n = 0; n < e; n++)
              this.putBit(((t >>> (e - n - 1)) & 1) == 1)
          },
          getLengthInBits: function () {
            return this.length
          },
          putBit: function (t) {
            var e = Math.floor(this.length / 8)
            this.buffer.length <= e && this.buffer.push(0),
            t && (this.buffer[e] |= 128 >>> this.length % 8),
            this.length++
          },
        })
        let m = [
          [17, 14, 11, 7],
          [32, 26, 20, 14],
          [53, 42, 32, 24],
          [78, 62, 46, 34],
          [106, 84, 60, 44],
          [134, 106, 74, 58],
          [154, 122, 86, 64],
          [192, 152, 108, 84],
          [230, 180, 130, 98],
          [271, 213, 151, 119],
          [321, 251, 177, 137],
          [367, 287, 203, 155],
          [425, 331, 241, 177],
          [458, 362, 258, 194],
          [520, 412, 292, 220],
          [586, 450, 322, 250],
          [644, 504, 364, 280],
          [718, 560, 394, 310],
          [792, 624, 442, 338],
          [858, 666, 482, 382],
          [929, 711, 509, 403],
          [1003, 779, 565, 439],
          [1091, 857, 611, 461],
          [1171, 911, 661, 511],
          [1273, 997, 715, 535],
          [1367, 1059, 751, 593],
          [1465, 1125, 805, 625],
          [1528, 1190, 868, 658],
          [1628, 1264, 908, 698],
          [1732, 1370, 982, 742],
          [1840, 1452, 1030, 790],
          [1952, 1538, 1112, 842],
          [2068, 1628, 1168, 898],
          [2188, 1722, 1228, 958],
          [2303, 1809, 1283, 983],
          [2431, 1911, 1351, 1051],
          [2563, 1989, 1423, 1093],
          [2699, 2099, 1499, 1139],
          [2809, 2213, 1579, 1219],
          [2953, 2331, 1663, 1273]
        ]
        function w (t) {
          if (
            ((this.options = {
              padding: 4,
              width: 256,
              height: 256,
              typeNumber: 4,
              color: '#000000',
              background: '#ffffff',
              ecl: 'M',
              image: { svg: '', width: 0, height: 0 }
            }),
            typeof t === 'string' && (t = { content: t }),
            t)
          )
            {for (var e in t) this.options[e] = t[e]}
          if (typeof this.options.content !== 'string')
            {throw new Error("Expected 'content' as string!")}
          if (this.options.content.length === 0)
            {throw new Error("Expected 'content' to be non-empty!")}
          if (!(this.options.padding >= 0))
            {throw new Error("Expected 'padding' value to be non-negative!")}
          if (!(this.options.width > 0) || !(this.options.height > 0))
            {throw new Error(
              "Expected 'width' or 'height' value to be higher than zero!",
            )}
          let r = this.options.content;
            var o = (function (t, e) {
              for (
                var n = (function (t) {
                    var e = encodeURI(t)
                      .toString()
                      .replace(/\%[0-9a-fA-F]{2}/g, 'a')
                    return e.length + (e.length != t ? 3 : 0)
                  })(t),
                  r = 1,
                  i = 0,
                  o = 0,
                  s = m.length;
                o <= s;
                o++
              ) {
                var u = m[o]
                if (!u)
                  throw new Error(
                    'Content too long: expected ' + i + ' but got ' + n,
                  )
                switch (e) {
                  case 'L':
                    i = u[0]
                    break
                  case 'M':
                    i = u[1]
                    break
                  case 'Q':
                    i = u[2]
                    break
                  case 'H':
                    i = u[3]
                    break
                  default:
                    throw new Error('Unknwon error correction level: ' + e)
                }
                if (n <= i) break
                r++
              }
              if (r > m.length) throw new Error('Content too long')
              return r
            })(r, this.options.ecl);
            var s = (function (t) {
              switch (t) {
                case 'L':
                  return i.L
                case 'M':
                  return i.M
                case 'Q':
                  return i.Q
                case 'H':
                  return i.H
                default:
                  throw new Error('Unknwon error correction level: ' + t)
              }
            })(this.options.ecl)
          ;(this.qrcode = new n(o, s)),
          this.qrcode.addData(r),
          this.qrcode.make()
        }
        ;(w.prototype.svg = function (t) {
          let e = this.options || {};
            var n = this.qrcode.modules
          typeof t == 'undefined' && (t = { container: e.container || 'svg' })
          for (
            var r = typeof e.pretty == 'undefined' || !!e.pretty,
              i = r ? '  ' : '',
              o = r ? '\r\n' : '',
              s = e.width,
              u = e.height,
              c = n.length,
              a = s / (c + 2 * e.padding),
              l = u / (c + 2 * e.padding),
              h = typeof e.join != 'undefined' && !!e.join,
              f = typeof e.swap != 'undefined' && !!e.swap,
              d = typeof e.xmlDeclaration == 'undefined' || !!e.xmlDeclaration,
              p = typeof e.predefined != 'undefined' && !!e.predefined,
              b = p
                ? i +
                  '<defs><path id="qrmodule" d="M0 0 h' +
                  l +
                  ' v' +
                  a +
                  ' H0 z" style="fill:' +
                  e.color +
                  ';shape-rendering:crispEdges;" /></defs>' +
                  o
                : '',
              v =
                i +
                '<rect x="0" y="0" width="' +
                s +
                '" height="' +
                u +
                '" style="fill:' +
                e.background +
                ';shape-rendering:crispEdges;"/>' +
                o,
              y = '',
              g = '',
              m = 0;
            m < c;
            m++
          )
            {for (var w = 0; w < c; w++) {
              if (n[w][m]) {
                var _ = w * a + e.padding * a,
                  k = m * l + e.padding * l
                if (f) {
                  var x = _
                  ;(_ = k), (k = x)
                }
                if (h) {
                  var S = a + _,
                    E = l + k
                  ;(_ = Number.isInteger(_) ? Number(_) : _.toFixed(2)),
                    (k = Number.isInteger(k) ? Number(k) : k.toFixed(2)),
                    (S = Number.isInteger(S) ? Number(S) : S.toFixed(2)),
                    (g +=
                      'M' +
                      _ +
                      ',' +
                      k +
                      ' V' +
                      (E = Number.isInteger(E) ? Number(E) : E.toFixed(2)) +
                      ' H' +
                      S +
                      ' V' +
                      k +
                      ' H' +
                      _ +
                      ' Z ')
                } else
                  y += p
                    ? i +
                      '<use x="' +
                      _.toString() +
                      '" y="' +
                      k.toString() +
                      '" href="#qrmodule" />' +
                      o
                    : i +
                      '<rect x="' +
                      _.toString() +
                      '" y="' +
                      k.toString() +
                      '" width="' +
                      a +
                      '" height="' +
                      l +
                      '" style="fill:' +
                      e.color +
                      ';shape-rendering:crispEdges;"/>' +
                      o
              }
            }}
          h &&
            (y =
              i +
              '<path x="0" y="0" style="fill:' +
              e.color +
              ';shape-rendering:crispEdges;" d="' +
              g +
              '" />')
          let C = ''
          if (void 0 !== this.options.image && this.options.image.svg) {
            let M = (s * this.options.image.width) / 100;
              var I = (u * this.options.image.height) / 100;
              var N = u / 2 - I / 2
            ;(C += '<svg x="'
              .concat(s / 2 - M / 2, '" y="')
              .concat(N, '" width="')
              .concat(M, '" height="')
              .concat(
                I,
                '" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">'
              )),
            (C += this.options.image.svg + o),
            (C += '</svg>')
          }
          let T = ''
          switch (t.container) {
            case 'svg':
              d && (T += '<?xml version="1.0" standalone="yes"?>' + o),
              (T +=
                  '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' +
                  s +
                  '" height="' +
                  u +
                  '">' +
                  o),
              (T += b + v + y),
              (T += C),
              (T += '</svg>')
              break
            case 'svg-viewbox':
              d && (T += '<?xml version="1.0" standalone="yes"?>' + o),
              (T +=
                  '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ' +
                  s +
                  ' ' +
                  u +
                  '">' +
                  o),
              (T += b + v + y),
              (T += C),
              (T += '</svg>')
              break
            case 'g':
              ;(T += '<g width="' + s + '" height="' + u + '">' + o),
              (T += b + v + y),
              (T += C),
              (T += '</g>')
              break
            default:
              T += (b + v + y + C).replace(/^\s+/, '')
          }
          return T
        }),
        (t.exports = w)
      },
      16174: function (t, e) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.LIB_VERSION = void 0),
        (e.LIB_VERSION = '3.6.3')
      },
      72531: function (t, e, n) {
        'use strict'
        let r = n(56690).default;
          var i = n(89728).default;
          var o = n(61655).default;
          var s = n(26389).default;
          var u = n(33496).default
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.EthereumProviderError = e.EthereumRpcError = void 0)
        let c = n(72218);
          var a = (function (t) {
            o(n, t)
            let e = s(n)
            function n (t, i, o) {
              let s
              if ((r(this, n), !Number.isInteger(t)))
                {throw new Error('"code" must be an integer.')}
              if (!i || typeof i !== 'string')
                {throw new Error('"message" must be a nonempty string.')}
              return (
                ((s = e.call(this, i)).code = t),
                void 0 !== o && (s.data = o),
                s
              )
            }
            return (
              i(n, [
                {
                  key: 'serialize',
                  value: function () {
                    let t = { code: this.code, message: this.message }
                    return (
                      void 0 !== this.data && (t.data = this.data),
                      this.stack && (t.stack = this.stack),
                      t
                    )
                  }
                },
                {
                  key: 'toString',
                  value: function () {
                    return c.default(this.serialize(), h, 2)
                  }
                },
              ]),
              n
            )
          })(u(Error))
        e.EthereumRpcError = a
        let l = (function (t) {
          o(n, t)
          let e = s(n)
          function n (t, i, o) {
            if (
              (r(this, n),
              !(function (t) {
                return Number.isInteger(t) && t >= 1e3 && t <= 4999
              })(t))
            )
              {throw new Error(
                '"code" must be an integer such that: 1000 <= code <= 4999',
              )}
            return e.call(this, t, i, o)
          }
          return i(n)
        })(a)
        function h (t, e) {
          if (e !== '[Circular]') return e
        }
        e.EthereumProviderError = l
      },
      42394: function (t, e) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.errorValues = e.errorCodes = void 0),
        (e.errorCodes = {
          rpc: {
            invalidInput: -32e3,
            resourceNotFound: -32001,
            resourceUnavailable: -32002,
            transactionRejected: -32003,
            methodNotSupported: -32004,
            limitExceeded: -32005,
            parse: -32700,
            invalidRequest: -32600,
            methodNotFound: -32601,
            invalidParams: -32602,
            internal: -32603
            },
          provider: {
            userRejectedRequest: 4001,
            unauthorized: 4100,
            unsupportedMethod: 4200,
            disconnected: 4900,
            chainDisconnected: 4901
            },
        }),
        (e.errorValues = {
          '-32700': {
            standard: 'JSON RPC 2.0',
            message:
                'Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.'
            },
          '-32600': {
            standard: 'JSON RPC 2.0',
            message: 'The JSON sent is not a valid Request object.'
            },
          '-32601': {
            standard: 'JSON RPC 2.0',
            message: 'The method does not exist / is not available.'
            },
          '-32602': {
            standard: 'JSON RPC 2.0',
            message: 'Invalid method parameter(s).'
            },
          '-32603': {
            standard: 'JSON RPC 2.0',
            message: 'Internal JSON-RPC error.'
            },
          '-32000': { standard: 'EIP-1474', message: 'Invalid input.' },
          '-32001': { standard: 'EIP-1474', message: 'Resource not found.' },
          '-32002': {
            standard: 'EIP-1474',
            message: 'Resource unavailable.'
            },
          '-32003': {
            standard: 'EIP-1474',
            message: 'Transaction rejected.'
            },
          '-32004': {
            standard: 'EIP-1474',
            message: 'Method not supported.'
            },
          '-32005': {
            standard: 'EIP-1474',
            message: 'Request limit exceeded.'
            },
          4001: {
            standard: 'EIP-1193',
            message: 'User rejected the request.'
            },
          4100: {
            standard: 'EIP-1193',
            message:
                'The requested account and/or method has not been authorized by the user.'
            },
          4200: {
            standard: 'EIP-1193',
            message:
                'The requested method is not supported by this Ethereum provider.'
            },
          4900: {
            standard: 'EIP-1193',
            message: 'The provider is disconnected from all chains.'
            },
          4901: {
            standard: 'EIP-1193',
            message: 'The provider is disconnected from the specified chain.'
            },
        })
      },
      52845: function (t, e, n) {
        'use strict'
        let r = n(27424).default
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.ethErrors = void 0)
        let i = n(72531);
          var o = n(57239);
          var s = n(42394)
        function u (t, e) {
          let n = a(e);
            var s = r(n, 2);
            var u = s[0];
            var c = s[1]
          return new i.EthereumRpcError(t, u || o.getMessageFromCode(t), c)
        }
        function c (t, e) {
          let n = a(e);
            var s = r(n, 2);
            var u = s[0];
            var c = s[1]
          return new i.EthereumProviderError(t, u || o.getMessageFromCode(t), c)
        }
        function a (t) {
          if (t) {
            if (typeof t === 'string') return [t]
            if (typeof t === 'object' && !Array.isArray(t)) {
              let e = t.message;
                var n = t.data
              if (e && typeof e !== 'string')
                {throw new Error('Must specify string message.')}
              return [e || void 0, n]
            }
          }
          return []
        }
        e.ethErrors = {
          rpc: {
            parse: function (t) {
              return u(s.errorCodes.rpc.parse, t)
            },
            invalidRequest: function (t) {
              return u(s.errorCodes.rpc.invalidRequest, t)
            },
            invalidParams: function (t) {
              return u(s.errorCodes.rpc.invalidParams, t)
            },
            methodNotFound: function (t) {
              return u(s.errorCodes.rpc.methodNotFound, t)
            },
            internal: function (t) {
              return u(s.errorCodes.rpc.internal, t)
            },
            server: function (t) {
              if (!t || typeof t !== 'object' || Array.isArray(t))
                {throw new Error(
                  'Ethereum RPC Server errors must provide single object argument.',
                )}
              let e = t.code
              if (!Number.isInteger(e) || e > -32005 || e < -32099)
                {throw new Error(
                  '"code" must be an integer such that: -32099 <= code <= -32005',
                )}
              return u(e, t)
            },
            invalidInput: function (t) {
              return u(s.errorCodes.rpc.invalidInput, t)
            },
            resourceNotFound: function (t) {
              return u(s.errorCodes.rpc.resourceNotFound, t)
            },
            resourceUnavailable: function (t) {
              return u(s.errorCodes.rpc.resourceUnavailable, t)
            },
            transactionRejected: function (t) {
              return u(s.errorCodes.rpc.transactionRejected, t)
            },
            methodNotSupported: function (t) {
              return u(s.errorCodes.rpc.methodNotSupported, t)
            },
            limitExceeded: function (t) {
              return u(s.errorCodes.rpc.limitExceeded, t)
            }
          },
          provider: {
            userRejectedRequest: function (t) {
              return c(s.errorCodes.provider.userRejectedRequest, t)
            },
            unauthorized: function (t) {
              return c(s.errorCodes.provider.unauthorized, t)
            },
            unsupportedMethod: function (t) {
              return c(s.errorCodes.provider.unsupportedMethod, t)
            },
            disconnected: function (t) {
              return c(s.errorCodes.provider.disconnected, t)
            },
            chainDisconnected: function (t) {
              return c(s.errorCodes.provider.chainDisconnected, t)
            },
            custom: function (t) {
              if (!t || typeof t !== 'object' || Array.isArray(t))
                {throw new Error(
                  'Ethereum Provider custom errors must provide single object argument.',
                )}
              let e = t.code;
                var n = t.message;
                var r = t.data
              if (!n || typeof n !== 'string')
                {throw new Error('"message" must be a nonempty string')}
              return new i.EthereumProviderError(e, n, r)
            }
          },
        }
      },
      94649: function (t, e, n) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.getMessageFromCode =
            e.serializeError =
            e.EthereumProviderError =
            e.EthereumRpcError =
            e.ethErrors =
            e.errorCodes =
              void 0)
        let r = n(72531)
        Object.defineProperty(e, 'EthereumRpcError', {
          enumerable: !0,
          get: function () {
            return r.EthereumRpcError
          }
        }),
        Object.defineProperty(e, 'EthereumProviderError', {
          enumerable: !0,
          get: function () {
            return r.EthereumProviderError
          },
        })
        let i = n(57239)
        Object.defineProperty(e, 'serializeError', {
          enumerable: !0,
          get: function () {
            return i.serializeError
          }
        }),
        Object.defineProperty(e, 'getMessageFromCode', {
          enumerable: !0,
          get: function () {
            return i.getMessageFromCode
          },
        })
        let o = n(52845)
        Object.defineProperty(e, 'ethErrors', {
          enumerable: !0,
          get: function () {
            return o.ethErrors
          }
        })
        let s = n(42394)
        Object.defineProperty(e, 'errorCodes', {
          enumerable: !0,
          get: function () {
            return s.errorCodes
          }
        })
      },
      57239: function (t, e, n) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.serializeError =
            e.isValidCode =
            e.getMessageFromCode =
            e.JSON_RPC_SERVER_ERROR_MESSAGE =
              void 0)
        let r = n(42394);
          var i = n(72531);
          var o = r.errorCodes.rpc.internal;
          var s = 'Unspecified error message. This is a bug, please report it.';
          var u = { code: o, message: c(o) }
        function c (t) {
          let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s
          if (Number.isInteger(t)) {
            let i = t.toString()
            if (f(r.errorValues, i)) return r.errorValues[i].message
            if (l(t)) return e.JSON_RPC_SERVER_ERROR_MESSAGE
          }
          return n
        }
        function a (t) {
          if (!Number.isInteger(t)) return !1
          let e = t.toString()
          return !!r.errorValues[e] || !!l(t)
        }
        function l (t) {
          return t >= -32099 && t <= -32e3
        }
        function h (t) {
          return t && typeof t === 'object' && !Array.isArray(t)
            ? Object.assign({}, t)
            : t
        }
        function f (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e)
        }
        ;(e.JSON_RPC_SERVER_ERROR_MESSAGE = 'Unspecified server error.'),
        (e.getMessageFromCode = c),
        (e.isValidCode = a),
        (e.serializeError = function (t) {
          var e;
              var n;
              var r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              var o = r.fallbackError;
              var s = void 0 === o ? u : o;
              var l = r.shouldIncludeStack;
              var d = void 0 !== l && l
          if (
            !s ||
              !Number.isInteger(s.code) ||
              typeof s.message !== 'string'
          )
            throw new Error(
              'Must provide fallback error with integer number code and string message.',
            )
          if (t instanceof i.EthereumRpcError) return t.serialize()
          var p = {}
          if (
            t &&
              typeof t === 'object' &&
              !Array.isArray(t) &&
              f(t, 'code') &&
              a(t.code)
          ) {
            var b = t
              ;(p.code = b.code),
            b.message && typeof b.message === 'string'
              ? ((p.message = b.message), f(b, 'data') && (p.data = b.data))
              : ((p.message = c(p.code)),
                (p.data = { originalError: h(t) }))
          } else {
            p.code = s.code
            var v = (e = t) === null || void 0 === e ? void 0 : e.message
              ;(p.message = v && typeof v === 'string' ? v : s.message),
            (p.data = { originalError: h(t) })
          }
          var y = (n = t) === null || void 0 === n ? void 0 : n.stack
          return d && t && y && typeof y === 'string' && (p.stack = y), p
        })
      },
      32347: function (t, e, n) {
        'use strict'
        n.r(e),
        n.d(e, {
          Component: function () {
            return E
          },
          Fragment: function () {
            return w
          },
          cloneElement: function () {
            return z
          },
          createContext: function () {
            return Z
          },
          createElement: function () {
            return y
          },
          createRef: function () {
            return m
          },
          h: function () {
            return y
          },
          hydrate: function () {
            return U
          },
          isValidElement: function () {
            return s
          },
          options: function () {
            return i
          },
          render: function () {
            return H
          },
          toChildArray: function () {
            return j
          },
        })
        let r;
          var i;
          var o;
          var s;
          var u;
          var c;
          var a;
          var l;
          var h;
          var f = {};
          var d = [];
          var p =
            /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i
        function b (t, e) {
          for (let n in e) t[n] = e[n]
          return t
        }
        function v (t) {
          let e = t.parentNode
          e && e.removeChild(t)
        }
        function y (t, e, n) {
          let i;
            var o;
            var s;
            var u = {}
          for (s in e)
            s == 'key' ? (i = e[s]) : s == 'ref' ? (o = e[s]) : (u[s] = e[s])
          if (
            (arguments.length > 2 &&
              (u.children = arguments.length > 3 ? r.call(arguments, 2) : n),
            typeof t == 'function' && t.defaultProps != null)
          )
            {for (s in t.defaultProps)
              void 0 === u[s] && (u[s] = t.defaultProps[s])}
          return g(t, u, i, o, null)
        }
        function g (t, e, n, r, s) {
          let u = {
            type: t,
            props: e,
            key: n,
            ref: r,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            __h: null,
            constructor: void 0,
            __v: s == null ? ++o : s
          }
          return s == null && i.vnode != null && i.vnode(u), u
        }
        function m () {
          return { current: null }
        }
        function w (t) {
          return t.children
        }
        function _ (t, e, n) {
          e[0] === '-'
            ? t.setProperty(e, n == null ? '' : n)
            : (t[e] =
                n == null
                  ? ''
                  : typeof n != 'number' || p.test(e)
                    ? n
                    : n + 'px')
        }
        function k (t, e, n, r, i) {
          let o
          t: if (e === 'style')
            {if ('string' == typeof n) t.style.cssText = n
            else {
              if (('string' == typeof r && (t.style.cssText = r = ''), r))
                for (e in r) (n && e in n) || _(t.style, e, '')
              if (n) for (e in n) (r && n[e] === r[e]) || _(t.style, e, n[e])
            }}
          else if (e[0] === 'o' && e[1] === 'n')
            {(o = e !== (e = e.replace(/Capture$/, ''))),
              (e =
                e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2)),
              t.l || (t.l = {}),
              (t.l[e + o] = n),
              n
                ? r || t.addEventListener(e, o ? S : x, o)
                : t.removeEventListener(e, o ? S : x, o)}
          else if (e !== 'dangerouslySetInnerHTML') {
            if (i) e = e.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's')
            else if (
              e !== 'width' &&
              e !== 'height' &&
              e !== 'href' &&
              e !== 'list' &&
              e !== 'form' &&
              e !== 'tabIndex' &&
              e !== 'download' &&
              e in t
            )
              {try {
                t[e] = null == n ? '' : n
                break t
              } catch (t) {}}
            typeof n == 'function' ||
              (n == null || (!1 === n && e.indexOf('-') == -1)
                ? t.removeAttribute(e)
                : t.setAttribute(e, n))
          }
        }
        function x (t) {
          u = !0
          try {
            return this.l[t.type + !1](i.event ? i.event(t) : t)
          } finally {
            u = !1
          }
        }
        function S (t) {
          u = !0
          try {
            return this.l[t.type + !0](i.event ? i.event(t) : t)
          } finally {
            u = !1
          }
        }
        function E (t, e) {
          ;(this.props = t), (this.context = e)
        }
        function C (t, e) {
          if (e == null) return t.__ ? C(t.__, t.__.__k.indexOf(t) + 1) : null
          for (var n; e < t.__k.length; e++)
            {if (null != (n = t.__k[e]) && null != n.__e) return n.__e}
          return typeof t.type == 'function' ? C(t) : null
        }
        function M (t) {
          let e, n
          if ((t = t.__) != null && t.__c != null) {
            for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
              {if (null != (n = t.__k[e]) && null != n.__e) {
                t.__e = t.__c.base = n.__e
                break
              }}
            return M(t)
          }
        }
        function I (t) {
          u ? setTimeout(t) : l(t)
        }
        function N (t) {
          ;((!t.__d && (t.__d = !0) && c.push(t) && !T.__r++) ||
            a !== i.debounceRendering) &&
            ((a = i.debounceRendering) || I)(T)
        }
        function T () {
          let t, e, n, r, i, o, s, u
          for (
            c.sort(function (t, e) {
              return t.__v.__b - e.__v.__b
            });
            (t = c.shift());

          )
            {t.__d &&
              ((e = c.length),
              (r = void 0),
              (i = void 0),
              (s = (o = (n = t).__v).__e),
              (u = n.__P) &&
                ((r = []),
                ((i = b({}, o)).__v = o.__v + 1),
                R(
                  u,
                  o,
                  i,
                  n.__n,
                  void 0 !== u.ownerSVGElement,
                  null != o.__h ? [s] : null,
                  r,
                  null == s ? C(o) : s,
                  o.__h,
                ),
                P(r, o),
                o.__e != s && M(o)),
              c.length > e &&
                c.sort(function (t, e) {
                  return t.__v.__b - e.__v.__b
                }))}
          T.__r = 0
        }
        function A (t, e, n, r, i, o, s, u, c, a) {
          let l;
            var h;
            var p;
            var b;
            var v;
            var y;
            var m;
            var _ = (r && r.__k) || d;
            var k = _.length
          for (n.__k = [], l = 0; l < e.length; l++)
            {if (
              null !=
              (b = n.__k[l] =
                null == (b = e[l]) || 'boolean' == typeof b
                  ? null
                  : 'string' == typeof b ||
                      'number' == typeof b ||
                      'bigint' == typeof b
                    ? g(null, b, null, null, b)
                    : Array.isArray(b)
                      ? g(w, { children: b }, null, null, null)
                      : b.__b > 0
                        ? g(b.type, b.props, b.key, b.ref ? b.ref : null, b.__v)
                        : b)
            ) {
              if (
                ((b.__ = n),
                (b.__b = n.__b + 1),
                null === (p = _[l]) ||
                  (p && b.key == p.key && b.type === p.type))
              )
                _[l] = void 0
              else
                for (h = 0; h < k; h++) {
                  if ((p = _[h]) && b.key == p.key && b.type === p.type) {
                    _[h] = void 0
                    break
                  }
                  p = null
                }
              R(t, b, (p = p || f), i, o, s, u, c, a),
                (v = b.__e),
                (h = b.ref) &&
                  p.ref != h &&
                  (m || (m = []),
                  p.ref && m.push(p.ref, null, b),
                  m.push(h, b.__c || v, b)),
                null != v
                  ? (null == y && (y = v),
                    'function' == typeof b.type && b.__k === p.__k
                      ? (b.__d = c = L(b, c, t))
                      : (c = O(t, b, p, _, v, c)),
                    'function' == typeof n.type && (n.__d = c))
                  : c && p.__e == c && c.parentNode != t && (c = C(p))
            }}
          for (n.__e = y, l = k; l--;)
            _[l] != null &&
              (typeof n.type == 'function' &&
                _[l].__e != null &&
                _[l].__e == n.__d &&
                (n.__d = D(r).nextSibling),
              V(_[l], _[l]))
          if (m) for (l = 0; l < m.length; l++) F(m[l], m[++l], m[++l])
        }
        function L (t, e, n) {
          for (var r, i = t.__k, o = 0; i && o < i.length; o++)
            {(r = i[o]) &&
              ((r.__ = t),
              (e =
                'function' == typeof r.type
                  ? L(r, e, n)
                  : O(n, r, r, i, r.__e, e)))}
          return e
        }
        function j (t, e) {
          return (
            (e = e || []),
            t == null ||
              typeof t == 'boolean' ||
              (Array.isArray(t)
                ? t.some(function (t) {
                  j(t, e)
                })
                : e.push(t)),
            e
          )
        }
        function O (t, e, n, r, i, o) {
          let s, u, c
          if (void 0 !== e.__d) (s = e.__d), (e.__d = void 0)
          else if (n == null || i != o || i.parentNode == null)
            {t: if (null == o || o.parentNode !== t) t.appendChild(i), (s = null)
            else {
              for (u = o, c = 0; (u = u.nextSibling) && c < r.length; c += 1)
                if (u == i) break t
              t.insertBefore(i, o), (s = o)
            }}
          return void 0 !== s ? s : i.nextSibling
        }
        function D (t) {
          let e, n, r
          if (t.type == null || typeof t.type == 'string') return t.__e
          if (t.__k)
            {for (e = t.__k.length - 1; e >= 0; e--)
              if ((n = t.__k[e]) && (r = D(n))) return r}
          return null
        }
        function R (t, e, n, r, o, s, u, c, a) {
          let l;
            var h;
            var f;
            var d;
            var p;
            var v;
            var y;
            var g;
            var m;
            var _;
            var k;
            var x;
            var S;
            var C;
            var M;
            var I = e.type
          if (void 0 !== e.constructor) return null
          n.__h != null &&
            ((a = n.__h), (c = e.__e = n.__e), (e.__h = null), (s = [c])),
          (l = i.__b) && l(e)
          try {
            t: if (typeof I == 'function') {
              if (
                ((g = e.props),
                (m = (l = I.contextType) && r[l.__c]),
                (_ = l ? (m ? m.props.value : l.__) : r),
                n.__c
                  ? (y = (h = e.__c = n.__c).__ = h.__E)
                  : ('prototype' in I && I.prototype.render
                      ? (e.__c = h = new I(g, _))
                      : ((e.__c = h = new E(g, _)),
                        (h.constructor = I),
                        (h.render = B)),
                    m && m.sub(h),
                    (h.props = g),
                    h.state || (h.state = {}),
                    (h.context = _),
                    (h.__n = r),
                    (f = h.__d = !0),
                    (h.__h = []),
                    (h._sb = [])),
                h.__s == null && (h.__s = h.state),
                I.getDerivedStateFromProps != null &&
                  (h.__s == h.state && (h.__s = b({}, h.__s)),
                  b(h.__s, I.getDerivedStateFromProps(g, h.__s))),
                (d = h.props),
                (p = h.state),
                (h.__v = e),
                f)
              )
                I.getDerivedStateFromProps == null &&
                  h.componentWillMount != null &&
                  h.componentWillMount(),
                null != h.componentDidMount && h.__h.push(h.componentDidMount)
              else {
                if (
                  (I.getDerivedStateFromProps == null &&
                    g !== d &&
                    h.componentWillReceiveProps != null &&
                    h.componentWillReceiveProps(g, _),
                  (!h.__e &&
                    h.shouldComponentUpdate != null &&
                    !1 === h.shouldComponentUpdate(g, h.__s, _)) ||
                    e.__v === n.__v)
                ) {
                  for (
                    e.__v !== n.__v &&
                      ((h.props = g), (h.state = h.__s), (h.__d = !1)),
                    e.__e = n.__e,
                    e.__k = n.__k,
                    e.__k.forEach(function (t) {
                      t && (t.__ = e)
                    }),
                    k = 0;
                    k < h._sb.length;
                    k++
                  )
                    {h.__h.push(h._sb[k])
                  ;}(h._sb = []), h.__h.length && u.push(h)
                  break t
                }
                h.componentWillUpdate != null &&
                  h.componentWillUpdate(g, h.__s, _),
                null != h.componentDidUpdate &&
                    h.__h.push(function () {
                      h.componentDidUpdate(d, p, v)
                    })
              }
              if (
                ((h.context = _),
                (h.props = g),
                (h.__P = t),
                (x = i.__r),
                (S = 0),
                'prototype' in I && I.prototype.render)
              ) {
                for (
                  h.state = h.__s,
                  h.__d = !1,
                  x && x(e),
                  l = h.render(h.props, h.state, h.context),
                  C = 0;
                  C < h._sb.length;
                  C++
                )
                  {h.__h.push(h._sb[C])}
                h._sb = []
              } else
                {do {
                  ;(h.__d = !1),
                    x && x(e),
                    (l = h.render(h.props, h.state, h.context)),
                    (h.state = h.__s)
                } while (h.__d && ++S < 25)
              ;}(h.state = h.__s),
              null != h.getChildContext &&
                  (r = b(b({}, r), h.getChildContext())),
              f ||
                  h.getSnapshotBeforeUpdate == null ||
                  (v = h.getSnapshotBeforeUpdate(d, p)),
              (M =
                  l != null && l.type === w && l.key == null
                    ? l.props.children
                    : l),
              A(t, Array.isArray(M) ? M : [M], e, n, r, o, s, u, c, a),
              (h.base = e.__e),
              (e.__h = null),
              h.__h.length && u.push(h),
              y && (h.__E = h.__ = null),
              (h.__e = !1)
            } else
              s == null && e.__v === n.__v
                ? ((e.__k = n.__k), (e.__e = n.__e))
                : (e.__e = W(n.__e, e, n, r, o, s, u, a))
            ;(l = i.diffed) && l(e)
          } catch (t) {
            ;(e.__v = null),
            (a || s != null) &&
                ((e.__e = c), (e.__h = !!a), (s[s.indexOf(c)] = null)),
            i.__e(t, e, n)
          }
        }
        function P (t, e) {
          i.__c && i.__c(e, t),
          t.some(function (e) {
            try {
              ;(t = e.__h),
              (e.__h = []),
              t.some(function (t) {
                t.call(e)
              })
            } catch (t) {
              i.__e(t, e.__v)
            }
          })
        }
        function W (t, e, n, i, o, s, u, c) {
          let a;
            var l;
            var h;
            var d = n.props;
            var p = e.props;
            var b = e.type;
            var y = 0
          if ((b === 'svg' && (o = !0), s != null))
            {for (; y < s.length; y++)
              if (
                (a = s[y]) &&
                'setAttribute' in a == !!b &&
                (b ? a.localName === b : 3 === a.nodeType)
              ) {
                ;(t = a), (s[y] = null)
                break
              }}
          if (t == null) {
            if (b === null) return document.createTextNode(p)
            ;(t = o
              ? document.createElementNS('http://www.w3.org/2000/svg', b)
              : document.createElement(b, p.is && p)),
            (s = null),
            (c = !1)
          }
          if (b === null) d === p || (c && t.data === p) || (t.data = p)
          else {
            if (
              ((s = s && r.call(t.childNodes)),
              (l = (d = n.props || f).dangerouslySetInnerHTML),
              (h = p.dangerouslySetInnerHTML),
              !c)
            ) {
              if (s != null)
                {for (d = {}, y = 0; y < t.attributes.length; y++)
                  d[t.attributes[y].name] = t.attributes[y].value
              ;}(h || l) &&
                ((h &&
                  ((l && h.__html == l.__html) || h.__html === t.innerHTML)) ||
                  (t.innerHTML = (h && h.__html) || ''))
            }
            if (
              ((function (t, e, n, r, i) {
                let o
                for (o in n)
                  o === 'children' ||
                    o === 'key' ||
                    o in e ||
                    k(t, o, null, n[o], r)
                for (o in e)
                  {(i && 'function' != typeof e[o]) ||
                    'children' === o ||
                    'key' === o ||
                    'value' === o ||
                    'checked' === o ||
                    n[o] === e[o] ||
                    k(t, o, e[o], n[o], r)}
              })(t, p, d, o, c),
              h)
            )
              {e.__k = []}
            else if (
              ((y = e.props.children),
              A(
                t,
                Array.isArray(y) ? y : [y],
                e,
                n,
                i,
                o && b !== 'foreignObject',
                s,
                u,
                s ? s[0] : n.__k && C(n, 0),
                c
              ),
              s != null)
            )
              {for (y = s.length; y--; ) null != s[y] && v(s[y])}
            c ||
              ('value' in p &&
                void 0 !== (y = p.value) &&
                (y !== t.value ||
                  (b === 'progress' && !y) ||
                  (b === 'option' && y !== d.value)) &&
                k(t, 'value', y, d.value, !1),
              'checked' in p &&
                void 0 !== (y = p.checked) &&
                y !== t.checked &&
                k(t, 'checked', y, d.checked, !1))
          }
          return t
        }
        function F (t, e, n) {
          try {
            typeof t == 'function' ? t(e) : (t.current = e)
          } catch (t) {
            i.__e(t, n)
          }
        }
        function V (t, e, n) {
          let r, o
          if (
            (i.unmount && i.unmount(t),
            (r = t.ref) &&
              ((r.current && r.current !== t.__e) || F(r, null, e)),
            (r = t.__c) != null)
          ) {
            if (r.componentWillUnmount)
              {try {
                r.componentWillUnmount()
              } catch (t) {
                i.__e(t, e)
              }}
            ;(r.base = r.__P = null), (t.__c = void 0)
          }
          if ((r = t.__k))
            {for (o = 0; o < r.length; o++)
              r[o] && V(r[o], e, n || 'function' != typeof t.type)}
          n || t.__e == null || v(t.__e), (t.__ = t.__e = t.__d = void 0)
        }
        function B (t, e, n) {
          return this.constructor(t, n)
        }
        function H (t, e, n) {
          let o, s, u
          i.__ && i.__(t, e),
          (s = (o = typeof n == 'function') ? null : (n && n.__k) || e.__k),
          (u = []),
          R(
            e,
            (t = ((!o && n) || e).__k = y(w, null, [t])),
            s || f,
            f,
            void 0 !== e.ownerSVGElement,
            !o && n
              ? [n]
              : s
                ? null
                : e.firstChild
                  ? r.call(e.childNodes)
                  : null,
            u,
            !o && n ? n : s ? s.__e : e.firstChild,
            o,
          ),
          P(u, t)
        }
        function U (t, e) {
          H(t, e, U)
        }
        function z (t, e, n) {
          let i;
            var o;
            var s;
            var u = b({}, t.props)
          for (s in e)
            s == 'key' ? (i = e[s]) : s == 'ref' ? (o = e[s]) : (u[s] = e[s])
          return (
            arguments.length > 2 &&
              (u.children = arguments.length > 3 ? r.call(arguments, 2) : n),
            g(t.type, u, i || t.key, o || t.ref, null)
          )
        }
        function Z (t, e) {
          let n = {
            __c: (e = '__cC' + h++),
            __: t,
            Consumer: function (t, e) {
              return t.children(e)
            },
            Provider: function (t) {
              let n, r
              return (
                this.getChildContext ||
                  ((n = []),
                  ((r = {})[e] = this),
                  (this.getChildContext = function () {
                    return r
                  }),
                  (this.shouldComponentUpdate = function (t) {
                    this.props.value !== t.value &&
                      n.some(function (t) {
                        ;(t.__e = !0), N(t)
                      })
                  }),
                  (this.sub = function (t) {
                    n.push(t)
                    let e = t.componentWillUnmount
                    t.componentWillUnmount = function () {
                      n.splice(n.indexOf(t), 1), e && e.call(t)
                    }
                  })),
                t.children
              )
            }
          }
          return (n.Provider.__ = n.Consumer.contextType = n)
        }
        ;(r = d.slice),
        (i = {
          __e: function (t, e, n, r) {
            for (var i, o, s; (e = e.__);)
              if ((i = e.__c) && !i.__)
                try {
                  if (
                    ((o = i.constructor) &&
                        o.getDerivedStateFromError != null &&
                        (i.setState(o.getDerivedStateFromError(t)),
                        (s = i.__d)),
                    null != i.componentDidCatch &&
                        (i.componentDidCatch(t, r || {}), (s = i.__d)),
                    s)
                  )
                    return (i.__E = i)
                } catch (e) {
                  t = e
                }
            throw t
          },
        }),
        (o = 0),
        (s = function (t) {
          return t != null && void 0 === t.constructor
        }),
        (u = !1),
        (E.prototype.setState = function (t, e) {
          var n
            ;(n =
              this.__s != null && this.__s !== this.state
                ? this.__s
                : (this.__s = b({}, this.state))),
          'function' === typeof t && (t = t(b({}, n), this.props)),
          t && b(n, t),
          null != t && this.__v && (e && this._sb.push(e), N(this))
        }),
        (E.prototype.forceUpdate = function (t) {
          this.__v && ((this.__e = !0), t && this.__h.push(t), N(this))
        }),
        (E.prototype.render = w),
        (c = []),
        (l =
            typeof Promise == 'function'
              ? Promise.prototype.then.bind(Promise.resolve())
              : setTimeout),
        (T.__r = 0),
        (h = 0)
      },
      55977: function (t, e, n) {
        'use strict'
        n.r(e),
        n.d(e, {
          useCallback: function () {
            return S
          },
          useContext: function () {
            return E
          },
          useDebugValue: function () {
            return C
          },
          useEffect: function () {
            return m
          },
          useErrorBoundary: function () {
            return M
          },
          useId: function () {
            return I
          },
          useImperativeHandle: function () {
            return k
          },
          useLayoutEffect: function () {
            return w
          },
          useMemo: function () {
            return x
          },
          useReducer: function () {
            return g
          },
          useRef: function () {
            return _
          },
          useState: function () {
            return y
          },
        })
        let r;
          var i;
          var o;
          var s;
          var u = n(32347);
          var c = 0;
          var a = [];
          var l = [];
          var h = u.options.__b;
          var f = u.options.__r;
          var d = u.options.diffed;
          var p = u.options.__c;
          var b = u.options.unmount
        function v (t, e) {
          u.options.__h && u.options.__h(i, t, c || e), (c = 0)
          let n = i.__H || (i.__H = { __: [], __h: [] })
          return t >= n.__.length && n.__.push({ __V: l }), n.__[t]
        }
        function y (t) {
          return (c = 1), g(D, t)
        }
        function g (t, e, n) {
          let o = v(r++, 2)
          if (
            ((o.t = t),
            !o.__c &&
              ((o.__ = [
                n ? n(e) : D(void 0, e),
                function (t) {
                  let e = o.__N ? o.__N[0] : o.__[0];
                    var n = o.t(e, t)
                  e !== n && ((o.__N = [n, o.__[1]]), o.__c.setState({}))
                }
              ]),
              (o.__c = i),
              !i.u))
          ) {
            i.u = !0
            let s = i.shouldComponentUpdate
            i.shouldComponentUpdate = function (t, e, n) {
              if (!o.__c.__H) return !0
              let r = o.__c.__H.__.filter(function (t) {
                return t.__c
              })
              if (
                r.every(function (t) {
                  return !t.__N
                })
              )
                {return !s || s.call(this, t, e, n)}
              let i = !1
              return (
                r.forEach(function (t) {
                  if (t.__N) {
                    let e = t.__[0]
                    ;(t.__ = t.__N), (t.__N = void 0), e !== t.__[0] && (i = !0)
                  }
                }),
                !(!i && o.__c.props === t) && (!s || s.call(this, t, e, n))
              )
            }
          }
          return o.__N || o.__
        }
        function m (t, e) {
          let n = v(r++, 3)
          !u.options.__s &&
            O(n.__H, e) &&
            ((n.__ = t), (n.i = e), i.__H.__h.push(n))
        }
        function w (t, e) {
          let n = v(r++, 4)
          !u.options.__s &&
            O(n.__H, e) &&
            ((n.__ = t), (n.i = e), i.__h.push(n))
        }
        function _ (t) {
          return (
            (c = 5),
            x(function () {
              return { current: t }
            }, [])
          )
        }
        function k (t, e, n) {
          ;(c = 6),
          w(
            function () {
              return typeof t == 'function'
                ? (t(e()),
                  function () {
                    return t(null)
                  })
                : t
                  ? ((t.current = e()),
                    function () {
                      return (t.current = null)
                    })
                  : void 0
            },
            null == n ? n : n.concat(t)
            )
        }
        function x (t, e) {
          let n = v(r++, 7)
          return O(n.__H, e)
            ? ((n.__V = t()), (n.i = e), (n.__h = t), n.__V)
            : n.__
        }
        function S (t, e) {
          return (
            (c = 8),
            x(function () {
              return t
            }, e)
          )
        }
        function E (t) {
          let e = i.context[t.__c];
            var n = v(r++, 9)
          return (
            (n.c = t),
            e ? (n.__ == null && ((n.__ = !0), e.sub(i)), e.props.value) : t.__
          )
        }
        function C (t, e) {
          u.options.useDebugValue && u.options.useDebugValue(e ? e(t) : t)
        }
        function M (t) {
          let e = v(r++, 10);
            var n = y()
          return (
            (e.__ = t),
            i.componentDidCatch ||
              (i.componentDidCatch = function (t, r) {
                e.__ && e.__(t, r), n[1](t)
              }),
            [
              n[0],
              function () {
                n[1](void 0)
              }
            ]
          )
        }
        function I () {
          let t = v(r++, 11)
          if (!t.__) {
            for (var e = i.__v; e !== null && !e.__m && e.__ !== null;)
              {e = e.__}
            let n = e.__m || (e.__m = [0, 0])
            t.__ = 'P' + n[0] + '-' + n[1]++
          }
          return t.__
        }
        function N () {
          for (var t; (t = a.shift());)
            {if (t.__P && t.__H)
              try {
                t.__H.__h.forEach(L), t.__H.__h.forEach(j), (t.__H.__h = [])
              } catch (i) {
                ;(t.__H.__h = []), u.options.__e(i, t.__v)
              }}
        }
        ;(u.options.__b = function (t) {
          ;(i = null), h && h(t)
        }),
        (u.options.__r = function (t) {
          f && f(t), (r = 0)
          var e = (i = t.__c).__H
          e &&
              (o === i
                ? ((e.__h = []),
                  (i.__h = []),
                  e.__.forEach(function (t) {
                    t.__N && (t.__ = t.__N), (t.__V = l), (t.__N = t.i = void 0)
                  }))
                : (e.__h.forEach(L), e.__h.forEach(j), (e.__h = []))),
          (o = i)
        }),
        (u.options.diffed = function (t) {
          d && d(t)
          var e = t.__c
          e &&
              e.__H &&
              (e.__H.__h.length &&
                ((a.push(e) !== 1 && s === u.options.requestAnimationFrame) ||
                  ((s = u.options.requestAnimationFrame) || A)(N)),
              e.__H.__.forEach(function (t) {
                t.i && (t.__H = t.i),
                t.__V !== l && (t.__ = t.__V),
                (t.i = void 0),
                (t.__V = l)
              })),
          (o = i = null)
        }),
        (u.options.__c = function (t, e) {
          e.some(function (t) {
            try {
              t.__h.forEach(L),
              (t.__h = t.__h.filter(function (t) {
                return !t.__ || j(t)
              }))
            } catch (o) {
              e.some(function (t) {
                t.__h && (t.__h = [])
              }),
              (e = []),
              u.options.__e(o, t.__v)
            }
          }),
          p && p(t, e)
        }),
        (u.options.unmount = function (t) {
          b && b(t)
          var e;
              var n = t.__c
          n &&
              n.__H &&
              (n.__H.__.forEach(function (t) {
                try {
                  L(t)
                } catch (t) {
                  e = t
                }
              }),
              (n.__H = void 0),
              e && u.options.__e(e, n.__v))
        })
        let T = typeof requestAnimationFrame == 'function'
        function A (t) {
          var e;
            var n = function () {
              clearTimeout(r), T && cancelAnimationFrame(e), setTimeout(t)
            };
            var r = setTimeout(n, 100)
          T && (e = requestAnimationFrame(n))
        }
        function L (t) {
          let e = i;
            var n = t.__c
          typeof n == 'function' && ((t.__c = void 0), n()), (i = e)
        }
        function j (t) {
          let e = i
          ;(t.__c = t.__()), (i = e)
        }
        function O (t, e) {
          return (
            !t ||
            t.length !== e.length ||
            e.some(function (e, n) {
              return e !== t[n]
            })
          )
        }
        function D (t, e) {
          return typeof e == 'function' ? e(t) : e
        }
      },
      41483: function (t, e) {
        'use strict'
        let n
        function r (t, e, r) {
          if (!r || typeof r.value !== n.typeOfFunction)
            {throw new TypeError(
              'Only methods can be decorated with @bind. <' +
                e +
                '> is not a method!',
            )}
          return {
            configurable: n.boolTrue,
            get: function () {
              let t = r.value.bind(this)
              return (
                Object.defineProperty(this, e, {
                  value: t,
                  configurable: n.boolTrue,
                  writable: n.boolTrue
                }),
                t
              )
            }
          }
        }
        Object.defineProperty(e, '__esModule', { value: !0 }),
        (function (t) {
          ;(t.typeOfFunction = 'function'), (t.boolTrue = !0)
        })(n || (n = {})),
        (e.bind = r),
        (e.default = r)
      },
      44977: function (t, e, n) {
        'use strict'
        function r (t) {
          let e;
            var n;
            var i = ''
          if (typeof t == 'string' || typeof t == 'number') i += t
          else if (typeof t == 'object')
            {if (Array.isArray(t))
              for (e = 0; e < t.length; e++)
                t[e] && (n = r(t[e])) && (i && (i += ' '), (i += n))
            else for (e in t) t[e] && (i && (i += ' '), (i += e))}
          return i
        }
        function i () {
          for (var t, e, n = 0, i = ''; n < arguments.length;)
            {(t = arguments[n++]) && (e = r(t)) && (i && (i += ' '), (i += e))}
          return i
        }
        n.r(e),
        n.d(e, {
          clsx: function () {
            return i
          },
        }),
        (e.default = i)
      },
      35190: function (t, e, n) {
        let r = typeof Map === 'function' && Map.prototype;
          var i =
            Object.getOwnPropertyDescriptor && r
              ? Object.getOwnPropertyDescriptor(Map.prototype, 'size')
              : null;
          var o = r && i && 'function' === typeof i.get ? i.get : null;
          var s = r && Map.prototype.forEach;
          var u = 'function' === typeof Set && Set.prototype;
          var c =
            Object.getOwnPropertyDescriptor && u
              ? Object.getOwnPropertyDescriptor(Set.prototype, 'size')
              : null;
          var a = u && c && 'function' === typeof c.get ? c.get : null;
          var l = u && Set.prototype.forEach;
          var h =
            'function' === typeof WeakMap && WeakMap.prototype
              ? WeakMap.prototype.has
              : null;
          var f =
            'function' === typeof WeakSet && WeakSet.prototype
              ? WeakSet.prototype.has
              : null;
          var d =
            'function' === typeof WeakRef && WeakRef.prototype
              ? WeakRef.prototype.deref
              : null;
          var p = Boolean.prototype.valueOf;
          var b = Object.prototype.toString;
          var v = Function.prototype.toString;
          var y = String.prototype.match;
          var g = String.prototype.slice;
          var m = String.prototype.replace;
          var w = String.prototype.toUpperCase;
          var _ = String.prototype.toLowerCase;
          var k = RegExp.prototype.test;
          var x = Array.prototype.concat;
          var S = Array.prototype.join;
          var E = Array.prototype.slice;
          var C = Math.floor;
          var M = 'function' === typeof BigInt ? BigInt.prototype.valueOf : null;
          var I = Object.getOwnPropertySymbols;
          var N =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? Symbol.prototype.toString
              : null;
          var T =
            'function' === typeof Symbol && 'object' === typeof Symbol.iterator;
          var A =
            'function' === typeof Symbol &&
            Symbol.toStringTag &&
            (typeof Symbol.toStringTag === T || 'symbol')
              ? Symbol.toStringTag
              : null;
          var L = Object.prototype.propertyIsEnumerable;
          var j =
            (typeof Reflect === 'function'
              ? Reflect.getPrototypeOf
              : Object.getPrototypeOf) ||
            ([].__proto__ === Array.prototype
              ? function (t) {
                return t.__proto__
              }
              : null)
        function O (t, e) {
          if (
            t === 1 / 0 ||
            t === -1 / 0 ||
            t !== t ||
            (t && t > -1e3 && t < 1e3) ||
            k.call(/e/, e)
          )
            {return e}
          let n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g
          if (typeof t === 'number') {
            let r = t < 0 ? -C(-t) : C(t)
            if (r !== t) {
              let i = String(r);
                var o = g.call(e, i.length + 1)
              return (
                m.call(i, n, '$&_') +
                '.' +
                m.call(m.call(o, /([0-9]{3})/g, '$&_'), /_$/, '')
              )
            }
          }
          return m.call(e, n, '$&_')
        }
        let D = n(24654);
          var R = D.custom;
          var P = H(R) ? R : null
        function W (t, e, n) {
          let r = (n.quoteStyle || e) === 'double' ? '"' : "'"
          return r + t + r
        }
        function F (t) {
          return m.call(String(t), /"/g, '&quot;')
        }
        function V (t) {
          return (
            Z(t) === '[object Array]' &&
            (!A || !(typeof t === 'object' && A in t))
          )
        }
        function B (t) {
          return (
            Z(t) === '[object RegExp]' &&
            (!A || !(typeof t === 'object' && A in t))
          )
        }
        function H (t) {
          if (T) return t && typeof t === 'object' && t instanceof Symbol
          if (typeof t === 'symbol') return !0
          if (!t || typeof t !== 'object' || !N) return !1
          try {
            return N.call(t), !0
          } catch (e) {}
          return !1
        }
        t.exports = function t (e, n, r, i) {
          let u = n || {}
          if (
            z(u, 'quoteStyle') &&
            u.quoteStyle !== 'single' &&
            u.quoteStyle !== 'double'
          )
            {throw new TypeError(
              'option "quoteStyle" must be "single" or "double"',
            )}
          if (
            z(u, 'maxStringLength') &&
            (typeof u.maxStringLength === 'number'
              ? u.maxStringLength < 0 && u.maxStringLength !== 1 / 0
              : u.maxStringLength !== null)
          )
            {throw new TypeError(
              'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`',
            )}
          let c = !z(u, 'customInspect') || u.customInspect
          if (typeof c !== 'boolean' && c !== 'symbol')
            {throw new TypeError(
              'option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`',
            )}
          if (
            z(u, 'indent') &&
            u.indent !== null &&
            u.indent !== '\t' &&
            !(parseInt(u.indent, 10) === u.indent && u.indent > 0)
          )
            {throw new TypeError(
              'option "indent" must be "\\t", an integer > 0, or `null`',
            )}
          if (
            z(u, 'numericSeparator') &&
            typeof u.numericSeparator !== 'boolean'
          )
            {throw new TypeError(
              'option "numericSeparator", if provided, must be `true` or `false`',
            )}
          let b = u.numericSeparator
          if (typeof e === 'undefined') return 'undefined'
          if (e === null) return 'null'
          if (typeof e === 'boolean') return e ? 'true' : 'false'
          if (typeof e === 'string') return Q(e, u)
          if (typeof e === 'number') {
            if (e === 0) return 1 / 0 / e > 0 ? '0' : '-0'
            let w = String(e)
            return b ? O(e, w) : w
          }
          if (typeof e === 'bigint') {
            let k = String(e) + 'n'
            return b ? O(e, k) : k
          }
          let C = typeof u.depth === 'undefined' ? 5 : u.depth
          if (
            (typeof r === 'undefined' && (r = 0),
            r >= C && C > 0 && typeof e === 'object')
          )
            {return V(e) ? '[Array]' : '[Object]'}
          let I = (function (t, e) {
            let n
            if (t.indent === '\t') n = '\t'
            else {
              if (!(typeof t.indent === 'number' && t.indent > 0)) return null
              n = S.call(Array(t.indent + 1), ' ')
            }
            return { base: n, prev: S.call(Array(e + 1), n) }
          })(u, r)
          if (typeof i === 'undefined') i = []
          else if (q(i, e) >= 0) return '[Circular]'
          function R (e, n, o) {
            if ((n && (i = E.call(i)).push(n), o)) {
              let s = { depth: u.depth }
              return (
                z(u, 'quoteStyle') && (s.quoteStyle = u.quoteStyle),
                t(e, s, r + 1, i)
              )
            }
            return t(e, u, r + 1, i)
          }
          if (typeof e === 'function' && !B(e)) {
            let U = (function (t) {
                if (t.name) return t.name
                let e = y.call(v.call(t), /^function\s*([\w$]+)/)
                if (e) return e[1]
                return null
              })(e);
              var Y = X(e, R)
            return (
              '[Function' +
              (U ? ': ' + U : ' (anonymous)') +
              ']' +
              (Y.length > 0 ? ' { ' + S.call(Y, ', ') + ' }' : '')
            )
          }
          if (H(e)) {
            let tt = T
              ? m.call(String(e), /^(Symbol\(.*\))_[^)]*$/, '$1')
              : N.call(e)
            return typeof e !== 'object' || T ? tt : G(tt)
          }
          if (
            (function (t) {
              if (!t || typeof t !== 'object') return !1
              if (
                typeof HTMLElement !== 'undefined' &&
                t instanceof HTMLElement
              )
                {return !0}
              return (
                typeof t.nodeName === 'string' &&
                typeof t.getAttribute === 'function'
              )
            })(e)
          ) {
            for (
              var et = '<' + _.call(String(e.nodeName)),
                nt = e.attributes || [],
                rt = 0;
              rt < nt.length;
              rt++
            )
              {et += ' ' + nt[rt].name + '=' + W(F(nt[rt].value), 'double', u)}
            return (
              (et += '>'),
              e.childNodes && e.childNodes.length && (et += '...'),
              (et += '</' + _.call(String(e.nodeName)) + '>')
            )
          }
          if (V(e)) {
            if (e.length === 0) return '[]'
            let it = X(e, R)
            return I &&
              !(function (t) {
                for (let e = 0; e < t.length; e++)
                  {if (q(t[e], '\n') >= 0) return !1}
                return !0
              })(it)
              ? '[' + $(it, I) + ']'
              : '[ ' + S.call(it, ', ') + ' ]'
          }
          if (
            (function (t) {
              return (
                Z(t) === '[object Error]' &&
                (!A || !(typeof t === 'object' && A in t))
              )
            })(e)
          ) {
            let ot = X(e, R)
            return 'cause' in Error.prototype ||
              !('cause' in e) ||
              L.call(e, 'cause')
              ? ot.length === 0
                ? '[' + String(e) + ']'
                : '{ [' + String(e) + '] ' + S.call(ot, ', ') + ' }'
              : '{ [' +
                  String(e) +
                  '] ' +
                  S.call(x.call('[cause]: ' + R(e.cause), ot), ', ') +
                  ' }'
          }
          if (typeof e === 'object' && c) {
            if (P && typeof e[P] === 'function' && D)
              {return D(e, { depth: C - r })}
            if (c !== 'symbol' && typeof e.inspect === 'function')
              {return e.inspect()}
          }
          if (
            (function (t) {
              if (!o || !t || typeof t !== 'object') return !1
              try {
                o.call(t)
                try {
                  a.call(t)
                } catch (et) {
                  return !0
                }
                return t instanceof Map
              } catch (e) {}
              return !1
            })(e)
          ) {
            let st = []
            return (
              s &&
                s.call(e, function (t, n) {
                  st.push(R(n, e, !0) + ' => ' + R(t, e))
                }),
              J('Map', o.call(e), st, I)
            )
          }
          if (
            (function (t) {
              if (!a || !t || typeof t !== 'object') return !1
              try {
                a.call(t)
                try {
                  o.call(t)
                } catch (e) {
                  return !0
                }
                return t instanceof Set
              } catch (n) {}
              return !1
            })(e)
          ) {
            let ut = []
            return (
              l &&
                l.call(e, function (t) {
                  ut.push(R(t, e))
                }),
              J('Set', a.call(e), ut, I)
            )
          }
          if (
            (function (t) {
              if (!h || !t || typeof t !== 'object') return !1
              try {
                h.call(t, h)
                try {
                  f.call(t, f)
                } catch (et) {
                  return !0
                }
                return t instanceof WeakMap
              } catch (e) {}
              return !1
            })(e)
          )
            {return K('WeakMap')}
          if (
            (function (t) {
              if (!f || !t || typeof t !== 'object') return !1
              try {
                f.call(t, f)
                try {
                  h.call(t, h)
                } catch (et) {
                  return !0
                }
                return t instanceof WeakSet
              } catch (e) {}
              return !1
            })(e)
          )
            {return K('WeakSet')}
          if (
            (function (t) {
              if (!d || !t || typeof t !== 'object') return !1
              try {
                return d.call(t), !0
              } catch (e) {}
              return !1
            })(e)
          )
            {return K('WeakRef')}
          if (
            (function (t) {
              return (
                Z(t) === '[object Number]' &&
                (!A || !(typeof t === 'object' && A in t))
              )
            })(e)
          )
            {return G(R(Number(e)))}
          if (
            (function (t) {
              if (!t || typeof t !== 'object' || !M) return !1
              try {
                return M.call(t), !0
              } catch (e) {}
              return !1
            })(e)
          )
            {return G(R(M.call(e)))}
          if (
            (function (t) {
              return (
                Z(t) === '[object Boolean]' &&
                (!A || !(typeof t === 'object' && A in t))
              )
            })(e)
          )
            {return G(p.call(e))}
          if (
            (function (t) {
              return (
                Z(t) === '[object String]' &&
                (!A || !(typeof t === 'object' && A in t))
              )
            })(e)
          )
            {return G(R(String(e)))}
          if (
            !(function (t) {
              return (
                Z(t) === '[object Date]' &&
                (!A || !(typeof t === 'object' && A in t))
              )
            })(e) &&
            !B(e)
          ) {
            let ct = X(e, R);
              var at = j
                ? j(e) === Object.prototype
                : e instanceof Object || e.constructor === Object;
              var lt = e instanceof Object ? '' : 'null prototype';
              var ht =
                !at && A && Object(e) === e && A in e
                  ? g.call(Z(e), 8, -1)
                  : lt
                    ? 'Object'
                    : '';
              var ft =
                (at || typeof e.constructor !== 'function'
                  ? ''
                  : e.constructor.name
                    ? e.constructor.name + ' '
                    : '') +
                (ht || lt
                  ? '[' + S.call(x.call([], ht || [], lt || []), ': ') + '] '
                  : '')
            return ct.length === 0
              ? ft + '{}'
              : I
                ? ft + '{' + $(ct, I) + '}'
                : ft + '{ ' + S.call(ct, ', ') + ' }'
          }
          return String(e)
        }
        let U =
          Object.prototype.hasOwnProperty ||
          function (t) {
            return t in this
          }
        function z (t, e) {
          return U.call(t, e)
        }
        function Z (t) {
          return b.call(t)
        }
        function q (t, e) {
          if (t.indexOf) return t.indexOf(e)
          for (let n = 0, r = t.length; n < r; n++) if (t[n] === e) return n
          return -1
        }
        function Q (t, e) {
          if (t.length > e.maxStringLength) {
            let n = t.length - e.maxStringLength;
              var r = '... ' + n + ' more character' + (n > 1 ? 's' : '')
            return Q(g.call(t, 0, e.maxStringLength), e) + r
          }
          return W(
            m.call(m.call(t, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, Y),
            'single',
            e
          )
        }
        function Y (t) {
          let e = t.charCodeAt(0);
            var n = { 8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r' }[e]
          return n
            ? '\\' + n
            : '\\x' + (e < 16 ? '0' : '') + w.call(e.toString(16))
        }
        function G (t) {
          return 'Object(' + t + ')'
        }
        function K (t) {
          return t + ' { ? }'
        }
        function J (t, e, n, r) {
          return t + ' (' + e + ') {' + (r ? $(n, r) : S.call(n, ', ')) + '}'
        }
        function $ (t, e) {
          if (t.length === 0) return ''
          let n = '\n' + e.prev + e.base
          return n + S.call(t, ',' + n) + '\n' + e.prev
        }
        function X (t, e) {
          let n = V(t);
            var r = []
          if (n) {
            r.length = t.length
            for (let i = 0; i < t.length; i++) r[i] = z(t, i) ? e(t[i], t) : ''
          }
          let o;
            var s = typeof I === 'function' ? I(t) : []
          if (T) {
            o = {}
            for (let u = 0; u < s.length; u++) o['$' + s[u]] = s[u]
          }
          for (let c in t)
            {z(t, c) &&
              ((n && String(Number(c)) === c && c < t.length) ||
                (T && o['$' + c] instanceof Symbol) ||
                (k.call(/[^\w$]/, c)
                  ? r.push(e(c, t) + ': ' + e(t[c], t))
                  : r.push(c + ': ' + e(t[c], t))))}
          if (typeof I === 'function')
            {for (var a = 0; a < s.length; a++)
              L.call(t, s[a]) && r.push('[' + e(s[a]) + ']: ' + e(t[s[a]], t))}
          return r
        }
      },
      23120: function (t) {
        'use strict'
        let e = String.prototype.replace;
          var n = /%20/g;
          var r = 'RFC1738';
          var i = 'RFC3986'
        t.exports = {
          default: i,
          formatters: {
            RFC1738: function (t) {
              return e.call(t, n, '+')
            },
            RFC3986: function (t) {
              return String(t)
            }
          },
          RFC1738: r,
          RFC3986: i
        }
      },
      18093: function (t, e, n) {
        'use strict'
        let r = n(83717);
          var i = n(42495);
          var o = n(23120)
        t.exports = { formats: o, parse: i, stringify: r }
      },
      42495: function (t, e, n) {
        'use strict'
        let r = n(76296);
          var i = Object.prototype.hasOwnProperty;
          var o = Array.isArray;
          var s = {
            allowDots: !1,
            allowPrototypes: !1,
            allowSparse: !1,
            arrayLimit: 20,
            charset: 'utf-8',
            charsetSentinel: !1,
            comma: !1,
            decoder: r.decode,
            delimiter: '&',
            depth: 5,
            ignoreQueryPrefix: !1,
            interpretNumericEntities: !1,
            parameterLimit: 1e3,
            parseArrays: !0,
            plainObjects: !1,
            strictNullHandling: !1,
          };
          var u = function (t) {
            return t.replace(/&#(\d+);/g, function (t, e) {
              return String.fromCharCode(parseInt(e, 10))
            })
          };
          var c = function (t, e) {
            return t && 'string' === typeof t && e.comma && t.indexOf(',') > -1
              ? t.split(',')
              : t
          };
          var a = function (t, e, n, r) {
            if (t) {
              let o = n.allowDots ? t.replace(/\.([^.[]+)/g, '[$1]') : t;
                var s = /(\[[^[\]]*])/g;
                var u = n.depth > 0 && /(\[[^[\]]*])/.exec(o);
                var a = u ? o.slice(0, u.index) : o;
                var l = []
              if (a) {
                if (
                  !n.plainObjects &&
                  i.call(Object.prototype, a) &&
                  !n.allowPrototypes
                )
                  {return}
                l.push(a)
              }
              for (
                let h = 0;
                n.depth > 0 && (u = s.exec(o)) !== null && h < n.depth;

              ) {
                if (
                  ((h += 1),
                  !n.plainObjects &&
                    i.call(Object.prototype, u[1].slice(1, -1)) &&
                    !n.allowPrototypes)
                )
                  {return}
                l.push(u[1])
              }
              return (
                u && l.push('[' + o.slice(u.index) + ']'),
                (function (t, e, n, r) {
                  for (var i = r ? e : c(e, n), o = t.length - 1; o >= 0; --o) {
                    var s;
                      var u = t[o]
                    if (u === '[]' && n.parseArrays) s = [].concat(i)
                    else {
                      s = n.plainObjects ? Object.create(null) : {}
                      let a =
                          u.charAt(0) === '[' && u.charAt(u.length - 1) === ']'
                            ? u.slice(1, -1)
                            : u;
                        var l = parseInt(a, 10)
                      n.parseArrays || a !== ''
                        ? !isNaN(l) &&
                          u !== a &&
                          String(l) === a &&
                          l >= 0 &&
                          n.parseArrays &&
                          l <= n.arrayLimit
                            ? ((s = [])[l] = i)
                            : a !== '__proto__' && (s[a] = i)
                        : (s = { 0: i })
                    }
                    i = s
                  }
                  return i
                })(l, e, n, r)
              )
            }
          }
        t.exports = function (t, e) {
          let n = (function (t) {
            if (!t) return s
            if (
              t.decoder !== null &&
              void 0 !== t.decoder &&
              typeof t.decoder !== 'function'
            )
              {throw new TypeError('Decoder has to be a function.')}
            if (
              typeof t.charset !== 'undefined' &&
              t.charset !== 'utf-8' &&
              t.charset !== 'iso-8859-1'
            )
              {throw new TypeError(
                'The charset option must be either utf-8, iso-8859-1, or undefined',
              )}
            let e = typeof t.charset === 'undefined' ? s.charset : t.charset
            return {
              allowDots:
                typeof t.allowDots === 'undefined'
                  ? s.allowDots
                  : !!t.allowDots,
              allowPrototypes:
                typeof t.allowPrototypes === 'boolean'
                  ? t.allowPrototypes
                  : s.allowPrototypes,
              allowSparse:
                typeof t.allowSparse === 'boolean'
                  ? t.allowSparse
                  : s.allowSparse,
              arrayLimit:
                typeof t.arrayLimit === 'number' ? t.arrayLimit : s.arrayLimit,
              charset: e,
              charsetSentinel:
                typeof t.charsetSentinel === 'boolean'
                  ? t.charsetSentinel
                  : s.charsetSentinel,
              comma: typeof t.comma === 'boolean' ? t.comma : s.comma,
              decoder: typeof t.decoder === 'function' ? t.decoder : s.decoder,
              delimiter:
                typeof t.delimiter === 'string' || r.isRegExp(t.delimiter)
                  ? t.delimiter
                  : s.delimiter,
              depth:
                typeof t.depth === 'number' || !1 === t.depth
                  ? +t.depth
                  : s.depth,
              ignoreQueryPrefix: !0 === t.ignoreQueryPrefix,
              interpretNumericEntities:
                typeof t.interpretNumericEntities === 'boolean'
                  ? t.interpretNumericEntities
                  : s.interpretNumericEntities,
              parameterLimit:
                typeof t.parameterLimit === 'number'
                  ? t.parameterLimit
                  : s.parameterLimit,
              parseArrays: !1 !== t.parseArrays,
              plainObjects:
                typeof t.plainObjects === 'boolean'
                  ? t.plainObjects
                  : s.plainObjects,
              strictNullHandling:
                typeof t.strictNullHandling === 'boolean'
                  ? t.strictNullHandling
                  : s.strictNullHandling
            }
          })(e)
          if (t === '' || t === null || typeof t === 'undefined')
            {return n.plainObjects ? Object.create(null) : {}}
          for (
            var l =
                typeof t === 'string'
                  ? (function (t, e) {
                      let n;
                        var a = {};
                        var l = e.ignoreQueryPrefix ? t.replace(/^\?/, '') : t;
                        var h =
                          e.parameterLimit === 1 / 0
                            ? void 0
                            : e.parameterLimit;
                        var f = l.split(e.delimiter, h);
                        var d = -1;
                        var p = e.charset
                      if (e.charsetSentinel)
                        {for (n = 0; n < f.length; ++n)
                          0 === f[n].indexOf('utf8=') &&
                            ('utf8=%E2%9C%93' === f[n]
                              ? (p = 'utf-8')
                              : 'utf8=%26%2310003%3B' === f[n] &&
                                (p = 'iso-8859-1'),
                            (d = n),
                            (n = f.length))}
                      for (n = 0; n < f.length; ++n)
                        {if (n !== d) {
                          var b,
                            v,
                            y = f[n],
                            g = y.indexOf(']='),
                            m = -1 === g ? y.indexOf('=') : g + 1
                          ;-1 === m
                            ? ((b = e.decoder(y, s.decoder, p, 'key')),
                              (v = e.strictNullHandling ? null : ''))
                            : ((b = e.decoder(
                                y.slice(0, m),
                                s.decoder,
                                p,
                                'key',
                              )),
                              (v = r.maybeMap(
                                c(y.slice(m + 1), e),
                                function (t) {
                                  return e.decoder(t, s.decoder, p, 'value')
                                },
                              ))),
                            v &&
                              e.interpretNumericEntities &&
                              'iso-8859-1' === p &&
                              (v = u(v)),
                            y.indexOf('[]=') > -1 && (v = o(v) ? [v] : v),
                            i.call(a, b)
                              ? (a[b] = r.combine(a[b], v))
                              : (a[b] = v)
                        }}
                      return a
                    })(t, n)
                  : t,
              h = n.plainObjects ? Object.create(null) : {},
              f = Object.keys(l),
              d = 0;
            d < f.length;
            ++d
          ) {
            let p = f[d];
              var b = a(p, l[p], n, typeof t === 'string')
            h = r.merge(h, b, n)
          }
          return !0 === n.allowSparse ? h : r.compact(h)
        }
      },
      83717: function (t, e, n) {
        'use strict'
        let r = n(76738);
          var i = n(76296);
          var o = n(23120);
          var s = Object.prototype.hasOwnProperty;
          var u = {
            brackets: function (t) {
              return t + '[]'
            },
            comma: 'comma',
            indices: function (t, e) {
              return t + '[' + e + ']'
            },
            repeat: function (t) {
              return t
            },
          };
          var c = Array.isArray;
          var a = String.prototype.split;
          var l = Array.prototype.push;
          var h = function (t, e) {
            l.apply(t, c(e) ? e : [e])
          };
          var f = Date.prototype.toISOString;
          var d = o.default;
          var p = {
            addQueryPrefix: !1,
            allowDots: !1,
            charset: 'utf-8',
            charsetSentinel: !1,
            delimiter: '&',
            encode: !0,
            encoder: i.encode,
            encodeValuesOnly: !1,
            format: d,
            formatter: o.formatters[d],
            indices: !1,
            serializeDate: function (t) {
              return f.call(t)
            },
            skipNulls: !1,
            strictNullHandling: !1,
          };
          var b = {};
          var v = function t (e, n, o, s, u, l, f, d, v, y, g, m, w, _, k, x) {
            for (
              var S, E = e, C = x, M = 0, I = !1;
              void 0 !== (C = C.get(b)) && !I;

            ) {
              let N = C.get(e)
              if (((M += 1), typeof N !== 'undefined')) {
                if (N === M) throw new RangeError('Cyclic object value')
                I = !0
              }
              typeof C.get(b) === 'undefined' && (M = 0)
            }
            if (
              (typeof d === 'function'
                ? (E = d(n, E))
                : E instanceof Date
                  ? (E = g(E))
                  : o === 'comma' &&
                    c(E) &&
                    (E = i.maybeMap(E, function (t) {
                      return t instanceof Date ? g(t) : t
                    })),
              E === null)
            ) {
              if (u) return f && !_ ? f(n, p.encoder, k, 'key', m) : n
              E = ''
            }
            if (
              typeof (S = E) === 'string' ||
              typeof S === 'number' ||
              typeof S === 'boolean' ||
              typeof S === 'symbol' ||
              typeof S === 'bigint' ||
              i.isBuffer(E)
            ) {
              if (f) {
                let T = _ ? n : f(n, p.encoder, k, 'key', m)
                if (o === 'comma' && _) {
                  for (
                    var A = a.call(String(E), ','), L = '', j = 0;
                    j < A.length;
                    ++j
                  )
                    {L +=
                      (0 === j ? '' : ',') +
                      w(f(A[j], p.encoder, k, 'value', m))}
                  return [
                    w(T) + (s && c(E) && A.length === 1 ? '[]' : '') + '=' + L
                  ]
                }
                return [w(T) + '=' + w(f(E, p.encoder, k, 'value', m))]
              }
              return [w(n) + '=' + w(String(E))]
            }
            let O;
              var D = []
            if (typeof E === 'undefined') return D
            if (o === 'comma' && c(E))
              {O = [{ value: E.length > 0 ? E.join(',') || null : void 0 }]}
            else if (c(d)) O = d
            else {
              let R = Object.keys(E)
              O = v ? R.sort(v) : R
            }
            for (
              let P = s && c(E) && E.length === 1 ? n + '[]' : n, W = 0;
              W < O.length;
              ++W
            ) {
              let F = O[W];
                var V =
                  typeof F === 'object' && typeof F.value !== 'undefined'
                    ? F.value
                    : E[F]
              if (!l || V !== null) {
                let B = c(E)
                  ? typeof o === 'function'
                    ? o(P, F)
                    : P
                  : P + (y ? '.' + F : '[' + F + ']')
                x.set(e, M)
                let H = r()
                H.set(b, x),
                h(D, t(V, B, o, s, u, l, f, d, v, y, g, m, w, _, k, H))
              }
            }
            return D
          }
        t.exports = function (t, e) {
          let n;
            var i = t;
            var a = (function (t) {
              if (!t) return p
              if (
                t.encoder !== null &&
                typeof t.encoder !== 'undefined' &&
                typeof t.encoder !== 'function'
              )
                {throw new TypeError('Encoder has to be a function.')}
              let e = t.charset || p.charset
              if (
                typeof t.charset !== 'undefined' &&
                t.charset !== 'utf-8' &&
                t.charset !== 'iso-8859-1'
              )
                {throw new TypeError(
                  'The charset option must be either utf-8, iso-8859-1, or undefined',
                )}
              let n = o.default
              if (typeof t.format !== 'undefined') {
                if (!s.call(o.formatters, t.format))
                  {throw new TypeError('Unknown format option provided.')}
                n = t.format
              }
              let r = o.formatters[n];
                var i = p.filter
              return (
                (typeof t.filter === 'function' || c(t.filter)) &&
                  (i = t.filter),
                {
                  addQueryPrefix:
                    typeof t.addQueryPrefix === 'boolean'
                      ? t.addQueryPrefix
                      : p.addQueryPrefix,
                  allowDots:
                    typeof t.allowDots === 'undefined'
                      ? p.allowDots
                      : !!t.allowDots,
                  charset: e,
                  charsetSentinel:
                    typeof t.charsetSentinel === 'boolean'
                      ? t.charsetSentinel
                      : p.charsetSentinel,
                  delimiter:
                    typeof t.delimiter === 'undefined'
                      ? p.delimiter
                      : t.delimiter,
                  encode: typeof t.encode === 'boolean' ? t.encode : p.encode,
                  encoder:
                    typeof t.encoder === 'function' ? t.encoder : p.encoder,
                  encodeValuesOnly:
                    typeof t.encodeValuesOnly === 'boolean'
                      ? t.encodeValuesOnly
                      : p.encodeValuesOnly,
                  filter: i,
                  format: n,
                  formatter: r,
                  serializeDate:
                    typeof t.serializeDate === 'function'
                      ? t.serializeDate
                      : p.serializeDate,
                  skipNulls:
                    typeof t.skipNulls === 'boolean'
                      ? t.skipNulls
                      : p.skipNulls,
                  sort: typeof t.sort === 'function' ? t.sort : null,
                  strictNullHandling:
                    typeof t.strictNullHandling === 'boolean'
                      ? t.strictNullHandling
                      : p.strictNullHandling
                }
              )
            })(e)
          typeof a.filter === 'function'
            ? (i = (0, a.filter)('', i))
            : c(a.filter) && (n = a.filter)
          let l;
            var f = []
          if (typeof i !== 'object' || i === null) return ''
          l =
            e && e.arrayFormat in u
              ? e.arrayFormat
              : e && 'indices' in e
                ? e.indices
                  ? 'indices'
                  : 'repeat'
                : 'indices'
          let d = u[l]
          if (
            e &&
            'commaRoundTrip' in e &&
            typeof e.commaRoundTrip !== 'boolean'
          )
            {throw new TypeError('`commaRoundTrip` must be a boolean, or absent')}
          let b = d === 'comma' && e && e.commaRoundTrip
          n || (n = Object.keys(i)), a.sort && n.sort(a.sort)
          for (let y = r(), g = 0; g < n.length; ++g) {
            let m = n[g]
            ;(a.skipNulls && i[m] === null) ||
              h(
                f,
                v(
                  i[m],
                  m,
                  d,
                  b,
                  a.strictNullHandling,
                  a.skipNulls,
                  a.encode ? a.encoder : null,
                  a.filter,
                  a.sort,
                  a.allowDots,
                  a.serializeDate,
                  a.format,
                  a.formatter,
                  a.encodeValuesOnly,
                  a.charset,
                  y
                ),
              )
          }
          let w = f.join(a.delimiter);
            var _ = !0 === a.addQueryPrefix ? '?' : ''
          return (
            a.charsetSentinel &&
              (a.charset === 'iso-8859-1'
                ? (_ += 'utf8=%26%2310003%3B&')
                : (_ += 'utf8=%E2%9C%93&')),
            w.length > 0 ? _ + w : ''
          )
        }
      },
      76296: function (t, e, n) {
        'use strict'
        let r = n(23120);
          var i = Object.prototype.hasOwnProperty;
          var o = Array.isArray;
          var s = (function () {
            for (var t = [], e = 0; e < 256; ++e)
              t.push('%' + ((e < 16 ? '0' : '') + e.toString(16)).toUpperCase())
            return t
          })();
          var u = function (t, e) {
            for (
              var n = e && e.plainObjects ? Object.create(null) : {}, r = 0;
              r < t.length;
              ++r
            )
              typeof t[r] !== 'undefined' && (n[r] = t[r])
            return n
          }
        t.exports = {
          arrayToObject: u,
          assign: function (t, e) {
            return Object.keys(e).reduce(function (t, n) {
              return (t[n] = e[n]), t
            }, t)
          },
          combine: function (t, e) {
            return [].concat(t, e)
          },
          compact: function (t) {
            for (
              var e = [{ obj: { o: t }, prop: 'o' }], n = [], r = 0;
              r < e.length;
              ++r
            )
              {for (
                var i = e[r], s = i.obj[i.prop], u = Object.keys(s), c = 0;
                c < u.length;
                ++c
              ) {
                var a = u[c],
                  l = s[a]
                'object' === typeof l &&
                  null !== l &&
                  -1 === n.indexOf(l) &&
                  (e.push({ obj: s, prop: a }), n.push(l))
              }}
            return (
              (function (t) {
                for (; t.length > 1;) {
                  let e = t.pop();
                    var n = e.obj[e.prop]
                  if (o(n)) {
                    for (var r = [], i = 0; i < n.length; ++i)
                      typeof n[i] !== 'undefined' && r.push(n[i])
                    e.obj[e.prop] = r
                  }
                }
              })(e),
              t
            )
          },
          decode: function (t, e, n) {
            let r = t.replace(/\+/g, ' ')
            if (n === 'iso-8859-1') return r.replace(/%[0-9a-f]{2}/gi, unescape)
            try {
              return decodeURIComponent(r)
            } catch (i) {
              return r
            }
          },
          encode: function (t, e, n, i, o) {
            if (t.length === 0) return t
            let u = t
            if (
              (typeof t === 'symbol'
                ? (u = Symbol.prototype.toString.call(t))
                : typeof t !== 'string' && (u = String(t)),
              n === 'iso-8859-1')
            )
              {return escape(u).replace(/%u[0-9a-f]{4}/gi, function (t) {
                return '%26%23' + parseInt(t.slice(2), 16) + '%3B'
              })}
            for (var c = '', a = 0; a < u.length; ++a) {
              let l = u.charCodeAt(a)
              l === 45 ||
              l === 46 ||
              l === 95 ||
              l === 126 ||
              (l >= 48 && l <= 57) ||
              (l >= 65 && l <= 90) ||
              (l >= 97 && l <= 122) ||
              (o === r.RFC1738 && (l === 40 || l === 41))
                ? (c += u.charAt(a))
                : l < 128
                  ? (c += s[l])
                  : l < 2048
                    ? (c += s[192 | (l >> 6)] + s[128 | (63 & l)])
                    : l < 55296 || l >= 57344
                      ? (c +=
                          s[224 | (l >> 12)] +
                          s[128 | ((l >> 6) & 63)] +
                          s[128 | (63 & l)])
                      : ((a += 1),
                        (l =
                          65536 +
                          (((1023 & l) << 10) | (1023 & u.charCodeAt(a)))),
                        (c +=
                          s[240 | (l >> 18)] +
                          s[128 | ((l >> 12) & 63)] +
                          s[128 | ((l >> 6) & 63)] +
                          s[128 | (63 & l)]))
            }
            return c
          },
          isBuffer: function (t) {
            return (
              !(!t || typeof t !== 'object') &&
              !!(
                t.constructor &&
                t.constructor.isBuffer &&
                t.constructor.isBuffer(t)
              )
            )
          },
          isRegExp: function (t) {
            return Object.prototype.toString.call(t) === '[object RegExp]'
          },
          maybeMap: function (t, e) {
            if (o(t)) {
              for (var n = [], r = 0; r < t.length; r += 1) n.push(e(t[r]))
              return n
            }
            return e(t)
          },
          merge: function t (e, n, r) {
            if (!n) return e
            if (typeof n !== 'object') {
              if (o(e)) e.push(n)
              else {
                if (!e || typeof e !== 'object') return [e, n]
                ;((r && (r.plainObjects || r.allowPrototypes)) ||
                  !i.call(Object.prototype, n)) &&
                  (e[n] = !0)
              }
              return e
            }
            if (!e || typeof e !== 'object') return [e].concat(n)
            let s = e
            return (
              o(e) && !o(n) && (s = u(e, r)),
              o(e) && o(n)
                ? (n.forEach(function (n, o) {
                    if (i.call(e, o)) {
                      let s = e[o]
                      s && typeof s === 'object' && n && typeof n === 'object'
                        ? (e[o] = t(s, n, r))
                        : e.push(n)
                    } else e[o] = n
                  }),
                  e)
                : Object.keys(n).reduce(function (e, o) {
                  var s = n[o]
                  return i.call(e, o) ? (e[o] = t(e[o], s, r)) : (e[o] = s), e
                }, s)
            )
          }
        }
      },
      95471: function (t, e, n) {
        'use strict'
        n.r(e),
        n.d(e, {
          ArgumentOutOfRangeError: function () {
            return A.W
          },
          AsyncSubject: function () {
            return l.c
          },
          BehaviorSubject: function () {
            return c.X
          },
          ConnectableObservable: function () {
            return i.c
          },
          EMPTY: function () {
            return K.E
          },
          EmptyError: function () {
            return L.K
          },
          GroupedObservable: function () {
            return o.T
          },
          NEVER: function () {
            return ft
          },
          Notification: function () {
            return C.P
          },
          NotificationKind: function () {
            return C.W
          },
          ObjectUnsubscribedError: function () {
            return j.N
          },
          Observable: function () {
            return r.y
          },
          ReplaySubject: function () {
            return a.t
          },
          Scheduler: function () {
            return x.b
          },
          Subject: function () {
            return u.xQ
          },
          Subscriber: function () {
            return E.L
          },
          Subscription: function () {
            return S.w
          },
          TimeoutError: function () {
            return D.W
          },
          UnsubscriptionError: function () {
            return O.B
          },
          VirtualAction: function () {
            return k
          },
          VirtualTimeScheduler: function () {
            return _
          },
          animationFrame: function () {
            return w
          },
          animationFrameScheduler: function () {
            return m
          },
          asap: function () {
            return h.e
          },
          asapScheduler: function () {
            return h.E
          },
          async: function () {
            return f.P
          },
          asyncScheduler: function () {
            return f.z
          },
          bindCallback: function () {
            return V
          },
          bindNodeCallback: function () {
            return U
          },
          combineLatest: function () {
            return Q.aj
          },
          concat: function () {
            return Y.z
          },
          config: function () {
            return Tt.v
          },
          defer: function () {
            return G.P
          },
          empty: function () {
            return K.c
          },
          forkJoin: function () {
            return X
          },
          from: function () {
            return $.D
          },
          fromEvent: function () {
            return nt
          },
          fromEventPattern: function () {
            return it
          },
          generate: function () {
            return ot
          },
          identity: function () {
            return N.y
          },
          iif: function () {
            return ut
          },
          interval: function () {
            return at
          },
          isObservable: function () {
            return T
          },
          merge: function () {
            return ht.T
          },
          never: function () {
            return dt
          },
          noop: function () {
            return I.Z
          },
          observable: function () {
            return s.L
          },
          of: function () {
            return pt.of
          },
          onErrorResumeNext: function () {
            return bt
          },
          pairs: function () {
            return vt
          },
          partition: function () {
            return _t
          },
          pipe: function () {
            return M.z
          },
          queue: function () {
            return d.c
          },
          queueScheduler: function () {
            return d.N
          },
          race: function () {
            return kt.S3
          },
          range: function () {
            return xt
          },
          scheduled: function () {
            return Nt.x
          },
          throwError: function () {
            return Et._
          },
          timer: function () {
            return Ct.H
          },
          using: function () {
            return Mt
          },
          zip: function () {
            return It.$R
          },
        })
        var r = n(32870);
          var i = n(190);
          var o = n(4208);
          var s = n(3422);
          var u = n(54096);
          var c = n(49681);
          var a = n(10126);
          var l = n(18688);
          var h = n(32931);
          var f = n(10972);
          var d = n(78989);
          var p = n(71108);
          var b = n(45544);
          var v = (function (t) {
            function e(e, n) {
              var r = t.call(this, e, n) || this
              return (r.scheduler = e), (r.work = n), r
            }
            return (
              p.ZT(e, t),
              (e.prototype.requestAsyncId = function (e, n, r) {
                return (
                  void 0 === r && (r = 0),
                  null !== r && r > 0
                    ? t.prototype.requestAsyncId.call(this, e, n, r)
                    : (e.actions.push(this),
                      e.scheduled ||
                        (e.scheduled = requestAnimationFrame(function () {
                          return e.flush(null)
                        })))
                )
              }),
              (e.prototype.recycleAsyncId = function (e, n, r) {
                if (
                  (void 0 === r && (r = 0),
                  (null !== r && r > 0) || (null === r && this.delay > 0))
                )
                  return t.prototype.recycleAsyncId.call(this, e, n, r)
                0 === e.actions.length &&
                  (cancelAnimationFrame(n), (e.scheduled = void 0))
              }),
              e
            )
          })(b.o);
          var y = n(40636);
          var g = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this
            }
            return (
              p.ZT(e, t),
              (e.prototype.flush = function (t) {
                ;(this.active = !0), (this.scheduled = void 0)
                var e,
                  n = this.actions,
                  r = -1,
                  i = n.length
                t = t || n.shift()
                do {
                  if ((e = t.execute(t.state, t.delay))) break
                } while (++r < i && (t = n.shift()))
                if (((this.active = !1), e)) {
                  for (; ++r < i && (t = n.shift()); ) t.unsubscribe()
                  throw e
                }
              }),
              e
            )
          })(y.v);
          var m = new g(v);
          var w = m;
          var _ = (function (t) {
            function e(e, n) {
              void 0 === e && (e = k),
                void 0 === n && (n = Number.POSITIVE_INFINITY)
              var r =
                t.call(this, e, function () {
                  return r.frame
                }) || this
              return (r.maxFrames = n), (r.frame = 0), (r.index = -1), r
            }
            return (
              p.ZT(e, t),
              (e.prototype.flush = function () {
                for (
                  var t, e, n = this.actions, r = this.maxFrames;
                  (e = n[0]) &&
                  e.delay <= r &&
                  (n.shift(),
                  (this.frame = e.delay),
                  !(t = e.execute(e.state, e.delay)));

                );
                if (t) {
                  for (; (e = n.shift()); ) e.unsubscribe()
                  throw t
                }
              }),
              (e.frameTimeFactor = 10),
              e
            )
          })(y.v);
          var k = (function (t) {
            function e(e, n, r) {
              void 0 === r && (r = e.index += 1)
              var i = t.call(this, e, n) || this
              return (
                (i.scheduler = e),
                (i.work = n),
                (i.index = r),
                (i.active = !0),
                (i.index = e.index = r),
                i
              )
            }
            return (
              p.ZT(e, t),
              (e.prototype.schedule = function (n, r) {
                if ((void 0 === r && (r = 0), !this.id))
                  return t.prototype.schedule.call(this, n, r)
                this.active = !1
                var i = new e(this.scheduler, this.work)
                return this.add(i), i.schedule(n, r)
              }),
              (e.prototype.requestAsyncId = function (t, n, r) {
                void 0 === r && (r = 0), (this.delay = t.frame + r)
                var i = t.actions
                return i.push(this), i.sort(e.sortActions), !0
              }),
              (e.prototype.recycleAsyncId = function (t, e, n) {
                void 0 === n && (n = 0)
              }),
              (e.prototype._execute = function (e, n) {
                if (!0 === this.active)
                  return t.prototype._execute.call(this, e, n)
              }),
              (e.sortActions = function (t, e) {
                return t.delay === e.delay
                  ? t.index === e.index
                    ? 0
                    : t.index > e.index
                      ? 1
                      : -1
                  : t.delay > e.delay
                    ? 1
                    : -1
              }),
              e
            )
          })(b.o);
          var x = n(88988);
          var S = n(78e3);
          var E = n(61260);
          var C = n(12841);
          var M = n(93250);
          var I = n(37576);
          var N = n(66220)
        function T (t) {
          return (
            !!t &&
            (t instanceof r.y ||
              (typeof t.lift === 'function' &&
                typeof t.subscribe === 'function'))
          )
        }
        var A = n(52319);
          var L = n(63e3);
          var j = n(33827);
          var O = n(43995);
          var D = n(43268);
          var R = n(70840);
          var P = n(3476);
          var W = n(24465);
          var F = n(71905)
        function V (t, e, n) {
          if (e) {
            if (!(0, F.K)(e))
              {return function () {
                for (var r = [], i = 0; i < arguments.length; i++)
                  r[i] = arguments[i]
                return V(t, n)
                  .apply(void 0, r)
                  .pipe(
                    (0, R.U)(function (t) {
                      return (0, W.k)(t) ? e.apply(void 0, t) : e(t)
                    }),
                  )
              }}
            n = e
          }
          return function () {
            for (var e = [], i = 0; i < arguments.length; i++)
              {e[i] = arguments[i]}
            let o;
              var s = this;
              var u = { context: s, subject: o, callbackFunc: t, scheduler: n }
            return new r.y(function (r) {
              if (n) {
                let i = { args: e, subscriber: r, params: u }
                return n.schedule(B, 0, i)
              }
              if (!o) {
                o = new l.c()
                try {
                  t.apply(
                    s,
                    e.concat([
                      function () {
                        for (var t = [], e = 0; e < arguments.length; e++)
                          {t[e] = arguments[e]}
                        o.next(t.length <= 1 ? t[0] : t), o.complete()
                      }
                    ]),
                  )
                } catch (c) {
                  ;(0, P._)(o) ? o.error(c) : console.warn(c)
                }
              }
              return o.subscribe(r)
            })
          }
        }
        function B (t) {
          let e = this;
            var n = t.args;
            var r = t.subscriber;
            var i = t.params;
            var o = i.callbackFunc;
            var s = i.context;
            var u = i.scheduler;
            var c = i.subject
          if (!c) {
            c = i.subject = new l.c()
            try {
              o.apply(
                s,
                n.concat([
                  function () {
                    for (var t = [], n = 0; n < arguments.length; n++)
                      {t[n] = arguments[n]}
                    let r = t.length <= 1 ? t[0] : t
                    e.add(u.schedule(H, 0, { value: r, subject: c }))
                  }
                ]),
              )
            } catch (a) {
              c.error(a)
            }
          }
          this.add(c.subscribe(r))
        }
        function H (t) {
          let e = t.value;
            var n = t.subject
          n.next(e), n.complete()
        }
        function U (t, e, n) {
          if (e) {
            if (!(0, F.K)(e))
              {return function () {
                for (var r = [], i = 0; i < arguments.length; i++)
                  r[i] = arguments[i]
                return U(t, n)
                  .apply(void 0, r)
                  .pipe(
                    (0, R.U)(function (t) {
                      return (0, W.k)(t) ? e.apply(void 0, t) : e(t)
                    }),
                  )
              }}
            n = e
          }
          return function () {
            for (var e = [], i = 0; i < arguments.length; i++)
              {e[i] = arguments[i]}
            let o = {
              subject: void 0,
              args: e,
              callbackFunc: t,
              scheduler: n,
              context: this
            }
            return new r.y(function (r) {
              let i = o.context;
                var s = o.subject
              if (n)
                {return n.schedule(z, 0, {
                  params: o,
                  subscriber: r,
                  context: i,
                })}
              if (!s) {
                s = o.subject = new l.c()
                try {
                  t.apply(
                    i,
                    e.concat([
                      function () {
                        for (var t = [], e = 0; e < arguments.length; e++)
                          {t[e] = arguments[e]}
                        let n = t.shift()
                        n
                          ? s.error(n)
                          : (s.next(t.length <= 1 ? t[0] : t), s.complete())
                      }
                    ]),
                  )
                } catch (u) {
                  ;(0, P._)(s) ? s.error(u) : console.warn(u)
                }
              }
              return s.subscribe(r)
            })
          }
        }
        function z (t) {
          let e = this;
            var n = t.params;
            var r = t.subscriber;
            var i = t.context;
            var o = n.callbackFunc;
            var s = n.args;
            var u = n.scheduler;
            var c = n.subject
          if (!c) {
            c = n.subject = new l.c()
            try {
              o.apply(
                i,
                s.concat([
                  function () {
                    for (var t = [], n = 0; n < arguments.length; n++)
                      {t[n] = arguments[n]}
                    let r = t.shift()
                    if (r) e.add(u.schedule(q, 0, { err: r, subject: c }))
                    else {
                      let i = t.length <= 1 ? t[0] : t
                      e.add(u.schedule(Z, 0, { value: i, subject: c }))
                    }
                  }
                ]),
              )
            } catch (a) {
              this.add(u.schedule(q, 0, { err: a, subject: c }))
            }
          }
          this.add(c.subscribe(r))
        }
        function Z (t) {
          let e = t.value;
            var n = t.subject
          n.next(e), n.complete()
        }
        function q (t) {
          let e = t.err
          t.subject.error(e)
        }
        var Q = n(75750);
          var Y = n(51038);
          var G = n(21457);
          var K = n(10245);
          var J = n(20208);
          var $ = n(36736)
        function X () {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
          if (t.length === 1) {
            let n = t[0]
            if ((0, W.k)(n)) return tt(n, null)
            if ((0, J.K)(n) && Object.getPrototypeOf(n) === Object.prototype) {
              let r = Object.keys(n)
              return tt(
                r.map(function (t) {
                  return n[t]
                }),
                r
              )
            }
          }
          if (typeof t[t.length - 1] === 'function') {
            let i = t.pop()
            return tt(
              (t = t.length === 1 && (0, W.k)(t[0]) ? t[0] : t),
              null
            ).pipe(
              (0, R.U)(function (t) {
                return i.apply(void 0, t)
              })
            )
          }
          return tt(t, null)
        }
        function tt (t, e) {
          return new r.y(function (n) {
            let r = t.length
            if (r !== 0)
              {for (
                var i = new Array(r),
                  o = 0,
                  s = 0,
                  u = function (u) {
                    var c = (0, $.D)(t[u]),
                      a = !1
                    n.add(
                      c.subscribe({
                        next: function (t) {
                          a || ((a = !0), s++), (i[u] = t)
                        },
                        error: function (t) {
                          return n.error(t)
                        },
                        complete: function () {
                          ;(++o !== r && a) ||
                            (s === r &&
                              n.next(
                                e
                                  ? e.reduce(function (t, e, n) {
                                      return (t[e] = i[n]), t
                                    }, {})
                                  : i,
                              ),
                            n.complete())
                        },
                      }),
                    )
                  },
                  c = 0;
                c < r;
                c++
              )
                u(c)}
            else n.complete()
          })
        }
        let et = n(49390)
        function nt (t, e, n, i) {
          return (
            (0, et.m)(n) && ((i = n), (n = void 0)),
            i
              ? nt(t, e, n).pipe(
                (0, R.U)(function (t) {
                  return (0, W.k)(t) ? i.apply(void 0, t) : i(t)
                })
                )
              : new r.y(function (r) {
                rt(
                  t,
                  e,
                  function (t) {
                    arguments.length > 1
                      ? r.next(Array.prototype.slice.call(arguments))
                      : r.next(t)
                  },
                  r,
                  n,
                )
              })
          )
        }
        function rt (t, e, n, r, i) {
          let o
          if (
            (function (t) {
              return (
                t &&
                typeof t.addEventListener === 'function' &&
                typeof t.removeEventListener === 'function'
              )
            })(t)
          ) {
            let s = t
            t.addEventListener(e, n, i),
            (o = function () {
              return s.removeEventListener(e, n, i)
            })
          } else if (
            (function (t) {
              return (
                t && typeof t.on === 'function' && typeof t.off === 'function'
              )
            })(t)
          ) {
            let u = t
            t.on(e, n),
            (o = function () {
              return u.off(e, n)
            })
          } else if (
            (function (t) {
              return (
                t &&
                typeof t.addListener === 'function' &&
                typeof t.removeListener === 'function'
              )
            })(t)
          ) {
            let c = t
            t.addListener(e, n),
            (o = function () {
              return c.removeListener(e, n)
            })
          } else {
            if (!t || !t.length) throw new TypeError('Invalid event target')
            for (let a = 0, l = t.length; a < l; a++) rt(t[a], e, n, r, i)
          }
          r.add(o)
        }
        function it (t, e, n) {
          return n
            ? it(t, e).pipe(
              (0, R.U)(function (t) {
                return (0, W.k)(t) ? n.apply(void 0, t) : n(t)
              })
              )
            : new r.y(function (n) {
              var r;
                  var i = function () {
                  for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e]
                  return n.next(t.length === 1 ? t[0] : t)
                }
              try {
                r = t(i)
              } catch (o) {
                return void n.error(o)
              }
              if ((0, et.m)(e))
                return function () {
                  return e(i, r)
                }
            })
        }
        function ot (t, e, n, i, o) {
          let s, u
          if (arguments.length == 1) {
            let c = t
            ;(u = c.initialState),
            (e = c.condition),
            (n = c.iterate),
            (s = c.resultSelector || N.y),
            (o = c.scheduler)
          } else
            {void 0 === i || (0, F.K)(i)
              ? ((u = t), (s = N.y), (o = i))
              : ((u = t), (s = i))}
          return new r.y(function (t) {
            let r = u
            if (o)
              {return o.schedule(st, 0, {
                subscriber: t,
                iterate: n,
                condition: e,
                resultSelector: s,
                state: r,
              })}
            for (;;) {
              if (e) {
                let i = void 0
                try {
                  i = e(r)
                } catch (a) {
                  return void t.error(a)
                }
                if (!i) {
                  t.complete()
                  break
                }
              }
              let c = void 0
              try {
                c = s(r)
              } catch (a) {
                return void t.error(a)
              }
              if ((t.next(c), t.closed)) break
              try {
                r = n(r)
              } catch (a) {
                return void t.error(a)
              }
            }
          })
        }
        function st (t) {
          let e = t.subscriber;
            var n = t.condition
          if (!e.closed) {
            if (t.needIterate)
              {try {
                t.state = t.iterate(t.state)
              } catch (o) {
                return void e.error(o)
              }}
            else t.needIterate = !0
            if (n) {
              let r = void 0
              try {
                r = n(t.state)
              } catch (o) {
                return void e.error(o)
              }
              if (!r) return void e.complete()
              if (e.closed) return
            }
            let i
            try {
              i = t.resultSelector(t.state)
            } catch (o) {
              return void e.error(o)
            }
            if (!e.closed && (e.next(i), !e.closed)) return this.schedule(t)
          }
        }
        function ut (t, e, n) {
          return (
            void 0 === e && (e = K.E),
            void 0 === n && (n = K.E),
            (0, G.P)(function () {
              return t() ? e : n
            })
          )
        }
        let ct = n(37764)
        function at (t, e) {
          return (
            void 0 === t && (t = 0),
            void 0 === e && (e = f.P),
            (!(0, ct.k)(t) || t < 0) && (t = 0),
            (e && typeof e.schedule === 'function') || (e = f.P),
            new r.y(function (n) {
              return (
                n.add(
                  e.schedule(lt, t, { subscriber: n, counter: 0, period: t })
                ),
                n
              )
            })
          )
        }
        function lt (t) {
          let e = t.subscriber;
            var n = t.counter;
            var r = t.period
          e.next(n),
          this.schedule({ subscriber: e, counter: n + 1, period: r }, r)
        }
        var ht = n(70195);
          var ft = new r.y(I.Z)
        function dt () {
          return ft
        }
        var pt = n(5695)
        function bt () {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
          if (t.length === 0) return K.E
          let n = t[0];
            var i = t.slice(1)
          return t.length === 1 && (0, W.k)(n)
            ? bt.apply(void 0, n)
            : new r.y(function (t) {
              var e = function () {
                return t.add(bt.apply(void 0, i).subscribe(t))
              }
              return (0, $.D)(n).subscribe({
                next: function (e) {
                  t.next(e)
                },
                error: e,
                complete: e
                })
            })
        }
        function vt (t, e) {
          return e
            ? new r.y(function (n) {
              var r = Object.keys(t);
                  var i = new S.w()
              return (
                i.add(
                  e.schedule(yt, 0, {
                    keys: r,
                    index: 0,
                    subscriber: n,
                    subscription: i,
                    obj: t
                    }),
                ),
                i
              )
            })
            : new r.y(function (e) {
              for (
                var n = Object.keys(t), r = 0;
                r < n.length && !e.closed;
                r++
              ) {
                var i = n[r]
                t.hasOwnProperty(i) && e.next([i, t[i]])
              }
              e.complete()
            })
        }
        function yt (t) {
          let e = t.keys;
            var n = t.index;
            var r = t.subscriber;
            var i = t.subscription;
            var o = t.obj
          if (!r.closed)
            {if (n < e.length) {
              var s = e[n]
              r.next([s, o[s]]),
                i.add(
                  this.schedule({
                    keys: e,
                    index: n + 1,
                    subscriber: r,
                    subscription: i,
                    obj: o,
                  }),
                )
            } else r.complete()}
        }
        let gt = n(81665);
          var mt = n(57299);
          var wt = n(57535)
        function _t (t, e, n) {
          return [
            (0, wt.h)(e, n)(new r.y((0, mt.s)(t))),
            (0, wt.h)((0, gt.f)(e, n))(new r.y((0, mt.s)(t)))
          ]
        }
        var kt = n(56719)
        function xt (t, e, n) {
          return (
            void 0 === t && (t = 0),
            new r.y(function (r) {
              void 0 === e && ((e = t), (t = 0))
              let i = 0;
                var o = t
              if (n)
                {return n.schedule(St, 0, {
                  index: i,
                  count: e,
                  start: t,
                  subscriber: r,
                })}
              for (;;) {
                if (i++ >= e) {
                  r.complete()
                  break
                }
                if ((r.next(o++), r.closed)) break
              }
            })
          )
        }
        function St (t) {
          let e = t.start;
            var n = t.index;
            var r = t.count;
            var i = t.subscriber
          n >= r
            ? i.complete()
            : (i.next(e),
              i.closed ||
                ((t.index = n + 1), (t.start = e + 1), this.schedule(t)))
        }
        var Et = n(97594);
          var Ct = n(14199)
        function Mt (t, e) {
          return new r.y(function (n) {
            let r, i
            try {
              r = t()
            } catch (s) {
              return void n.error(s)
            }
            try {
              i = e(r)
            } catch (s) {
              return void n.error(s)
            }
            let o = (i ? (0, $.D)(i) : K.E).subscribe(n)
            return function () {
              o.unsubscribe(), r && r.unsubscribe()
            }
          })
        }
        var It = n(89513);
          var Nt = n(20312);
          var Tt = n(49846)
      },
      18688: function (t, e, n) {
        'use strict'
        n.d(e, {
          c: function () {
            return s
          }
        })
        var r = n(71108);
          var i = n(54096);
          var o = n(78e3);
          var s = (function (t) {
            function e () {
              let e = (t !== null && t.apply(this, arguments)) || this
              return (
                (e.value = null), (e.hasNext = !1), (e.hasCompleted = !1), e
              )
            }
            return (
              r.ZT(e, t),
              (e.prototype._subscribe = function (e) {
                return this.hasError
                  ? (e.error(this.thrownError), o.w.EMPTY)
                  : this.hasCompleted && this.hasNext
                    ? (e.next(this.value), e.complete(), o.w.EMPTY)
                    : t.prototype._subscribe.call(this, e)
              }),
              (e.prototype.next = function (t) {
                this.hasCompleted || ((this.value = t), (this.hasNext = !0))
              }),
              (e.prototype.error = function (e) {
                this.hasCompleted || t.prototype.error.call(this, e)
              }),
              (e.prototype.complete = function () {
                ;(this.hasCompleted = !0),
                this.hasNext && t.prototype.next.call(this, this.value),
                t.prototype.complete.call(this)
              }),
              e
            )
          })(i.xQ)
      },
      49681: function (t, e, n) {
        'use strict'
        n.d(e, {
          X: function () {
            return s
          }
        })
        var r = n(71108);
          var i = n(54096);
          var o = n(33827);
          var s = (function (t) {
            function e (e) {
              let n = t.call(this) || this
              return (n._value = e), n
            }
            return (
              r.ZT(e, t),
              Object.defineProperty(e.prototype, 'value', {
                get: function () {
                  return this.getValue()
                },
                enumerable: !0,
                configurable: !0
              }),
              (e.prototype._subscribe = function (e) {
                let n = t.prototype._subscribe.call(this, e)
                return n && !n.closed && e.next(this._value), n
              }),
              (e.prototype.getValue = function () {
                if (this.hasError) throw this.thrownError
                if (this.closed) throw new o.N()
                return this._value
              }),
              (e.prototype.next = function (e) {
                t.prototype.next.call(this, (this._value = e))
              }),
              e
            )
          })(i.xQ)
      },
      12841: function (t, e, n) {
        'use strict'
        n.d(e, {
          P: function () {
            return u
          },
          W: function () {
            return r
          }
        })
        let r;
          var i = n(10245);
          var o = n(5695);
          var s = n(97594)
        r || (r = {})
        var u = (function () {
          function t (t, e, n) {
            ;(this.kind = t),
            (this.value = e),
            (this.error = n),
            (this.hasValue = t === 'N')
          }
          return (
            (t.prototype.observe = function (t) {
              switch (this.kind) {
                case 'N':
                  return t.next && t.next(this.value)
                case 'E':
                  return t.error && t.error(this.error)
                case 'C':
                  return t.complete && t.complete()
              }
            }),
            (t.prototype.do = function (t, e, n) {
              switch (this.kind) {
                case 'N':
                  return t && t(this.value)
                case 'E':
                  return e && e(this.error)
                case 'C':
                  return n && n()
              }
            }),
            (t.prototype.accept = function (t, e, n) {
              return t && typeof t.next === 'function'
                ? this.observe(t)
                : this.do(t, e, n)
            }),
            (t.prototype.toObservable = function () {
              switch (this.kind) {
                case 'N':
                  return (0, o.of)(this.value)
                case 'E':
                  return (0, s._)(this.error)
                case 'C':
                  return (0, i.c)()
              }
              throw new Error('unexpected notification kind value')
            }),
            (t.createNext = function (e) {
              return typeof e !== 'undefined'
                ? new t('N', e)
                : t.undefinedValueNotification
            }),
            (t.createError = function (e) {
              return new t('E', void 0, e)
            }),
            (t.createComplete = function () {
              return t.completeNotification
            }),
            (t.completeNotification = new t('C')),
            (t.undefinedValueNotification = new t('N', void 0)),
            t
          )
        })()
      },
      32870: function (t, e, n) {
        'use strict'
        n.d(e, {
          y: function () {
            return l
          }
        })
        let r = n(3476);
          var i = n(61260);
          var o = n(35822);
          var s = n(76062)
        var u = n(3422);
          var c = n(93250);
          var a = n(49846);
          var l = (function () {
            function t (t) {
              ;(this._isScalar = !1), t && (this._subscribe = t)
            }
            return (
              (t.prototype.lift = function (e) {
                let n = new t()
                return (n.source = this), (n.operator = e), n
              }),
              (t.prototype.subscribe = function (t, e, n) {
                let r = this.operator;
                  var u = (function (t, e, n) {
                    if (t) {
                      if (t instanceof i.L) return t
                      if (t[o.b]) return t[o.b]()
                    }
                    return t || e || n ? new i.L(t, e, n) : new i.L(s.c)
                  })(t, e, n)
                if (
                  (r
                    ? u.add(r.call(u, this.source))
                    : u.add(
                      this.source ||
                          (a.v.useDeprecatedSynchronousErrorHandling &&
                            !u.syncErrorThrowable)
                        ? this._subscribe(u)
                        : this._trySubscribe(u)
                      ),
                  a.v.useDeprecatedSynchronousErrorHandling &&
                    u.syncErrorThrowable &&
                    ((u.syncErrorThrowable = !1), u.syncErrorThrown))
                )
                  {throw u.syncErrorValue}
                return u
              }),
              (t.prototype._trySubscribe = function (t) {
                try {
                  return this._subscribe(t)
                } catch (e) {
                  a.v.useDeprecatedSynchronousErrorHandling &&
                    ((t.syncErrorThrown = !0), (t.syncErrorValue = e)),
                  (0, r._)(t) ? t.error(e) : console.warn(e)
                }
              }),
              (t.prototype.forEach = function (t, e) {
                let n = this
                return new (e = h(e))(function (e, r) {
                  let i
                  i = n.subscribe(
                    function (e) {
                      try {
                        t(e)
                      } catch (n) {
                        r(n), i && i.unsubscribe()
                      }
                    },
                    r,
                    e
                  )
                })
              }),
              (t.prototype._subscribe = function (t) {
                let e = this.source
                return e && e.subscribe(t)
              }),
              (t.prototype[u.L] = function () {
                return this
              }),
              (t.prototype.pipe = function () {
                for (var t = [], e = 0; e < arguments.length; e++)
                  {t[e] = arguments[e]}
                return t.length === 0 ? this : (0, c.U)(t)(this)
              }),
              (t.prototype.toPromise = function (t) {
                let e = this
                return new (t = h(t))(function (t, n) {
                  let r
                  e.subscribe(
                    function (t) {
                      return (r = t)
                    },
                    function (t) {
                      return n(t)
                    },
                    function () {
                      return t(r)
                    }
                  )
                })
              }),
              (t.create = function (e) {
                return new t(e)
              }),
              t
            )
          })()
        function h (t) {
          if ((t || (t = a.v.Promise || Promise), !t))
            {throw new Error('no Promise impl found')}
          return t
        }
      },
      76062: function (t, e, n) {
        'use strict'
        n.d(e, {
          c: function () {
            return o
          }
        })
        var r = n(49846);
          var i = n(60576);
          var o = {
            closed: !0,
            next: function (t) {},
            error: function (t) {
              if (r.v.useDeprecatedSynchronousErrorHandling) throw t
              ;(0, i.z)(t)
            },
            complete: function () {}
          }
      },
      88666: function (t, e, n) {
        'use strict'
        n.d(e, {
          L: function () {
            return i
          }
        })
        var r = n(71108);
          var i = (function (t) {
            function e () {
              return (t !== null && t.apply(this, arguments)) || this
            }
            return (
              r.ZT(e, t),
              (e.prototype.notifyNext = function (t, e, n, r, i) {
                this.destination.next(e)
              }),
              (e.prototype.notifyError = function (t, e) {
                this.destination.error(t)
              }),
              (e.prototype.notifyComplete = function (t) {
                this.destination.complete()
              }),
              e
            )
          })(n(61260).L)
      },
      10126: function (t, e, n) {
        'use strict'
        n.d(e, {
          t: function () {
            return l
          }
        })
        var r = n(71108);
          var i = n(54096);
          var o = n(78989);
          var s = n(78e3);
          var u = n(63548);
          var c = n(33827);
          var a = n(4343);
          var l = (function (t) {
            function e(e, n, r) {
              void 0 === e && (e = Number.POSITIVE_INFINITY),
                void 0 === n && (n = Number.POSITIVE_INFINITY)
              var i = t.call(this) || this
              return (
                (i.scheduler = r),
                (i._events = []),
                (i._infiniteTimeWindow = !1),
                (i._bufferSize = e < 1 ? 1 : e),
                (i._windowTime = n < 1 ? 1 : n),
                n === Number.POSITIVE_INFINITY
                  ? ((i._infiniteTimeWindow = !0),
                    (i.next = i.nextInfiniteTimeWindow))
                  : (i.next = i.nextTimeWindow),
                i
              )
            }
            return (
              r.ZT(e, t),
              (e.prototype.nextInfiniteTimeWindow = function (e) {
                if (!this.isStopped) {
                  var n = this._events
                  n.push(e), n.length > this._bufferSize && n.shift()
                }
                t.prototype.next.call(this, e)
              }),
              (e.prototype.nextTimeWindow = function (e) {
                this.isStopped ||
                  (this._events.push(new h(this._getNow(), e)),
                  this._trimBufferThenGetEvents()),
                  t.prototype.next.call(this, e)
              }),
              (e.prototype._subscribe = function (t) {
                var e,
                  n = this._infiniteTimeWindow,
                  r = n ? this._events : this._trimBufferThenGetEvents(),
                  i = this.scheduler,
                  o = r.length
                if (this.closed) throw new c.N()
                if (
                  (this.isStopped || this.hasError
                    ? (e = s.w.EMPTY)
                    : (this.observers.push(t), (e = new a.W(this, t))),
                  i && t.add((t = new u.ht(t, i))),
                  n)
                )
                  for (var l = 0; l < o && !t.closed; l++) t.next(r[l])
                else for (l = 0; l < o && !t.closed; l++) t.next(r[l].value)
                return (
                  this.hasError
                    ? t.error(this.thrownError)
                    : this.isStopped && t.complete(),
                  e
                )
              }),
              (e.prototype._getNow = function () {
                return (this.scheduler || o.c).now()
              }),
              (e.prototype._trimBufferThenGetEvents = function () {
                for (
                  var t = this._getNow(),
                    e = this._bufferSize,
                    n = this._windowTime,
                    r = this._events,
                    i = r.length,
                    o = 0;
                  o < i && !(t - r[o].time < n);

                )
                  o++
                return (
                  i > e && (o = Math.max(o, i - e)), o > 0 && r.splice(0, o), r
                )
              }),
              e
            )
          })(i.xQ);
          var h = (function () {
            return function (t, e) {
              ;(this.time = t), (this.value = e)
            }
          })()
      },
      88988: function (t, e, n) {
        'use strict'
        n.d(e, {
          b: function () {
            return r
          }
        })
        var r = (function () {
          function t (e, n) {
            void 0 === n && (n = t.now),
            (this.SchedulerAction = e),
            (this.now = n)
          }
          return (
            (t.prototype.schedule = function (t, e, n) {
              return (
                void 0 === e && (e = 0),
                new this.SchedulerAction(this, t).schedule(n, e)
              )
            }),
            (t.now = function () {
              return Date.now()
            }),
            t
          )
        })()
      },
      54096: function (t, e, n) {
        'use strict'
        n.d(e, {
          Yc: function () {
            return l
          },
          xQ: function () {
            return h
          }
        })
        var r = n(71108);
          var i = n(32870);
          var o = n(61260);
          var s = n(78e3);
          var u = n(33827);
          var c = n(4343);
          var a = n(35822);
          var l = (function (t) {
            function e(e) {
              var n = t.call(this, e) || this
              return (n.destination = e), n
            }
            return r.ZT(e, t), e
          })(o.L);
          var h = (function (t) {
            function e() {
              var e = t.call(this) || this
              return (
                (e.observers = []),
                (e.closed = !1),
                (e.isStopped = !1),
                (e.hasError = !1),
                (e.thrownError = null),
                e
              )
            }
            return (
              r.ZT(e, t),
              (e.prototype[a.b] = function () {
                return new l(this)
              }),
              (e.prototype.lift = function (t) {
                var e = new f(this, this)
                return (e.operator = t), e
              }),
              (e.prototype.next = function (t) {
                if (this.closed) throw new u.N()
                if (!this.isStopped)
                  for (
                    var e = this.observers, n = e.length, r = e.slice(), i = 0;
                    i < n;
                    i++
                  )
                    r[i].next(t)
              }),
              (e.prototype.error = function (t) {
                if (this.closed) throw new u.N()
                ;(this.hasError = !0),
                  (this.thrownError = t),
                  (this.isStopped = !0)
                for (
                  var e = this.observers, n = e.length, r = e.slice(), i = 0;
                  i < n;
                  i++
                )
                  r[i].error(t)
                this.observers.length = 0
              }),
              (e.prototype.complete = function () {
                if (this.closed) throw new u.N()
                this.isStopped = !0
                for (
                  var t = this.observers, e = t.length, n = t.slice(), r = 0;
                  r < e;
                  r++
                )
                  n[r].complete()
                this.observers.length = 0
              }),
              (e.prototype.unsubscribe = function () {
                ;(this.isStopped = !0),
                  (this.closed = !0),
                  (this.observers = null)
              }),
              (e.prototype._trySubscribe = function (e) {
                if (this.closed) throw new u.N()
                return t.prototype._trySubscribe.call(this, e)
              }),
              (e.prototype._subscribe = function (t) {
                if (this.closed) throw new u.N()
                return this.hasError
                  ? (t.error(this.thrownError), s.w.EMPTY)
                  : this.isStopped
                    ? (t.complete(), s.w.EMPTY)
                    : (this.observers.push(t), new c.W(this, t))
              }),
              (e.prototype.asObservable = function () {
                var t = new i.y()
                return (t.source = this), t
              }),
              (e.create = function (t, e) {
                return new f(t, e)
              }),
              e
            )
          })(i.y);
          var f = (function (t) {
            function e (e, n) {
              let r = t.call(this) || this
              return (r.destination = e), (r.source = n), r
            }
            return (
              r.ZT(e, t),
              (e.prototype.next = function (t) {
                let e = this.destination
                e && e.next && e.next(t)
              }),
              (e.prototype.error = function (t) {
                let e = this.destination
                e && e.error && this.destination.error(t)
              }),
              (e.prototype.complete = function () {
                let t = this.destination
                t && t.complete && this.destination.complete()
              }),
              (e.prototype._subscribe = function (t) {
                return this.source ? this.source.subscribe(t) : s.w.EMPTY
              }),
              e
            )
          })(h)
      },
      4343: function (t, e, n) {
        'use strict'
        n.d(e, {
          W: function () {
            return i
          }
        })
        var r = n(71108);
          var i = (function (t) {
            function e (e, n) {
              let r = t.call(this) || this
              return (r.subject = e), (r.subscriber = n), (r.closed = !1), r
            }
            return (
              r.ZT(e, t),
              (e.prototype.unsubscribe = function () {
                if (!this.closed) {
                  this.closed = !0
                  let t = this.subject;
                    var e = t.observers
                  if (
                    ((this.subject = null),
                    e && e.length !== 0 && !t.isStopped && !t.closed)
                  ) {
                    let n = e.indexOf(this.subscriber)
                    ;n !== -1 && e.splice(n, 1)
                  }
                }
              }),
              e
            )
          })(n(78e3).w)
      },
      61260: function (t, e, n) {
        'use strict'
        n.d(e, {
          L: function () {
            return l
          }
        })
        var r = n(71108);
          var i = n(49390);
          var o = n(76062);
          var s = n(78e3);
          var u = n(35822);
          var c = n(49846);
          var a = n(60576);
          var l = (function (t) {
            function e(n, r, i) {
              var s = t.call(this) || this
              switch (
                ((s.syncErrorValue = null),
                (s.syncErrorThrown = !1),
                (s.syncErrorThrowable = !1),
                (s.isStopped = !1),
                arguments.length)
              ) {
                case 0:
                  s.destination = o.c
                  break
                case 1:
                  if (!n) {
                    s.destination = o.c
                    break
                  }
                  if ('object' === typeof n) {
                    n instanceof e
                      ? ((s.syncErrorThrowable = n.syncErrorThrowable),
                        (s.destination = n),
                        n.add(s))
                      : ((s.syncErrorThrowable = !0),
                        (s.destination = new h(s, n)))
                    break
                  }
                default:
                  ;(s.syncErrorThrowable = !0),
                    (s.destination = new h(s, n, r, i))
              }
              return s
            }
            return (
              r.ZT(e, t),
              (e.prototype[u.b] = function () {
                return this
              }),
              (e.create = function (t, n, r) {
                var i = new e(t, n, r)
                return (i.syncErrorThrowable = !1), i
              }),
              (e.prototype.next = function (t) {
                this.isStopped || this._next(t)
              }),
              (e.prototype.error = function (t) {
                this.isStopped || ((this.isStopped = !0), this._error(t))
              }),
              (e.prototype.complete = function () {
                this.isStopped || ((this.isStopped = !0), this._complete())
              }),
              (e.prototype.unsubscribe = function () {
                this.closed ||
                  ((this.isStopped = !0), t.prototype.unsubscribe.call(this))
              }),
              (e.prototype._next = function (t) {
                this.destination.next(t)
              }),
              (e.prototype._error = function (t) {
                this.destination.error(t), this.unsubscribe()
              }),
              (e.prototype._complete = function () {
                this.destination.complete(), this.unsubscribe()
              }),
              (e.prototype._unsubscribeAndRecycle = function () {
                var t = this._parentOrParents
                return (
                  (this._parentOrParents = null),
                  this.unsubscribe(),
                  (this.closed = !1),
                  (this.isStopped = !1),
                  (this._parentOrParents = t),
                  this
                )
              }),
              e
            )
          })(s.w);
          var h = (function (t) {
            function e (e, n, r, s) {
              let u;
                var c = t.call(this) || this
              c._parentSubscriber = e
              let a = c
              return (
                (0, i.m)(n)
                  ? (u = n)
                  : n &&
                    ((u = n.next),
                    (r = n.error),
                    (s = n.complete),
                    n !== o.c &&
                      ((a = Object.create(n)),
                      (0, i.m)(a.unsubscribe) && c.add(a.unsubscribe.bind(a)),
                      (a.unsubscribe = c.unsubscribe.bind(c)))),
                (c._context = a),
                (c._next = u),
                (c._error = r),
                (c._complete = s),
                c
              )
            }
            return (
              r.ZT(e, t),
              (e.prototype.next = function (t) {
                if (!this.isStopped && this._next) {
                  let e = this._parentSubscriber
                  c.v.useDeprecatedSynchronousErrorHandling &&
                  e.syncErrorThrowable
                    ? this.__tryOrSetError(e, this._next, t) &&
                      this.unsubscribe()
                    : this.__tryOrUnsub(this._next, t)
                }
              }),
              (e.prototype.error = function (t) {
                if (!this.isStopped) {
                  let e = this._parentSubscriber;
                    var n = c.v.useDeprecatedSynchronousErrorHandling
                  if (this._error)
                    {n && e.syncErrorThrowable
                      ? (this.__tryOrSetError(e, this._error, t),
                        this.unsubscribe())
                      : (this.__tryOrUnsub(this._error, t), this.unsubscribe())}
                  else if (e.syncErrorThrowable)
                    {n
                      ? ((e.syncErrorValue = t), (e.syncErrorThrown = !0))
                      : (0, a.z)(t),
                      this.unsubscribe()}
                  else {
                    if ((this.unsubscribe(), n)) throw t
                    ;(0, a.z)(t)
                  }
                }
              }),
              (e.prototype.complete = function () {
                let t = this
                if (!this.isStopped) {
                  let e = this._parentSubscriber
                  if (this._complete) {
                    let n = function () {
                      return t._complete.call(t._context)
                    }
                    c.v.useDeprecatedSynchronousErrorHandling &&
                    e.syncErrorThrowable
                      ? (this.__tryOrSetError(e, n), this.unsubscribe())
                      : (this.__tryOrUnsub(n), this.unsubscribe())
                  } else this.unsubscribe()
                }
              }),
              (e.prototype.__tryOrUnsub = function (t, e) {
                try {
                  t.call(this._context, e)
                } catch (n) {
                  if (
                    (this.unsubscribe(),
                    c.v.useDeprecatedSynchronousErrorHandling)
                  )
                    {throw n
                  ;}(0, a.z)(n)
                }
              }),
              (e.prototype.__tryOrSetError = function (t, e, n) {
                if (!c.v.useDeprecatedSynchronousErrorHandling)
                  {throw new Error('bad call')}
                try {
                  e.call(this._context, n)
                } catch (r) {
                  return c.v.useDeprecatedSynchronousErrorHandling
                    ? ((t.syncErrorValue = r), (t.syncErrorThrown = !0), !0)
                    : ((0, a.z)(r), !0)
                }
                return !1
              }),
              (e.prototype._unsubscribe = function () {
                let t = this._parentSubscriber
                ;(this._context = null),
                (this._parentSubscriber = null),
                t.unsubscribe()
              }),
              e
            )
          })(l)
      },
      78e3: function (t, e, n) {
        'use strict'
        n.d(e, {
          w: function () {
            return u
          }
        })
        var r = n(24465);
          var i = n(20208);
          var o = n(49390);
          var s = n(43995);
          var u = (function () {
            function t (t) {
              ;(this.closed = !1),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              t && ((this._ctorUnsubscribe = !0), (this._unsubscribe = t))
            }
            let e
            return (
              (t.prototype.unsubscribe = function () {
                let e
                if (!this.closed) {
                  let n = this;
                    var u = n._parentOrParents;
                    var a = n._ctorUnsubscribe;
                    var l = n._unsubscribe;
                    var h = n._subscriptions
                  if (
                    ((this.closed = !0),
                    (this._parentOrParents = null),
                    (this._subscriptions = null),
                    u instanceof t)
                  )
                    {u.remove(this)}
                  else if (u !== null)
                    {for (var f = 0; f < u.length; ++f) {
                      u[f].remove(this)
                    }}
                  if ((0, o.m)(l)) {
                    a && (this._unsubscribe = void 0)
                    try {
                      l.call(this)
                    } catch (b) {
                      e = b instanceof s.B ? c(b.errors) : [b]
                    }
                  }
                  if ((0, r.k)(h)) {
                    f = -1
                    for (let d = h.length; ++f < d;) {
                      let p = h[f]
                      if ((0, i.K)(p))
                        {try {
                          p.unsubscribe()
                        } catch (b) {
                          ;(e = e || []),
                            b instanceof s.B
                              ? (e = e.concat(c(b.errors)))
                              : e.push(b)
                        }}
                    }
                  }
                  if (e) throw new s.B(e)
                }
              }),
              (t.prototype.add = function (e) {
                let n = e
                if (!e) return t.EMPTY
                switch (typeof e) {
                  case 'function':
                    n = new t(e)
                  case 'object':
                    if (
                      n === this ||
                      n.closed ||
                      typeof n.unsubscribe !== 'function'
                    )
                      {return n}
                    if (this.closed) return n.unsubscribe(), n
                    if (!(n instanceof t)) {
                      let r = n
                      ;(n = new t())._subscriptions = [r]
                    }
                    break
                  default:
                    throw new Error(
                      'unrecognized teardown ' + e + ' added to Subscription.'
                    )
                }
                let i = n._parentOrParents
                if (i === null) n._parentOrParents = this
                else if (i instanceof t) {
                  if (i === this) return n
                  n._parentOrParents = [i, this]
                } else {
                  if (i.indexOf(this) !== -1) return n
                  i.push(this)
                }
                let o = this._subscriptions
                return o === null ? (this._subscriptions = [n]) : o.push(n), n
              }),
              (t.prototype.remove = function (t) {
                let e = this._subscriptions
                if (e) {
                  let n = e.indexOf(t)
                  ;n !== -1 && e.splice(n, 1)
                }
              }),
              (t.EMPTY = (((e = new t()).closed = !0), e)),
              t
            )
          })()
        function c (t) {
          return t.reduce(function (t, e) {
            return t.concat(e instanceof s.B ? e.errors : e)
          }, [])
        }
      },
      49846: function (t, e, n) {
        'use strict'
        n.d(e, {
          v: function () {
            return i
          }
        })
        var r = !1;
          var i = {
            Promise: void 0,
            set useDeprecatedSynchronousErrorHandling (t) {
              t && new Error().stack
              r = t
            },
            get useDeprecatedSynchronousErrorHandling () {
              return r
            }
          }
      },
      19957: function (t, e, n) {
        'use strict'
        n.d(e, {
          Ds: function () {
            return c
          },
          IY: function () {
            return u
          },
          ft: function () {
            return a
          }
        })
        var r = n(71108);
          var i = n(61260);
          var o = n(32870);
          var s = n(57299);
          var u = (function (t) {
            function e(e) {
              var n = t.call(this) || this
              return (n.parent = e), n
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                this.parent.notifyNext(t)
              }),
              (e.prototype._error = function (t) {
                this.parent.notifyError(t), this.unsubscribe()
              }),
              (e.prototype._complete = function () {
                this.parent.notifyComplete(), this.unsubscribe()
              }),
              e
            )
          })(i.L);
          var c =
            (i.L,
            (function (t) {
              function e () {
                return (t !== null && t.apply(this, arguments)) || this
              }
              return (
                r.ZT(e, t),
                (e.prototype.notifyNext = function (t) {
                  this.destination.next(t)
                }),
                (e.prototype.notifyError = function (t) {
                  this.destination.error(t)
                }),
                (e.prototype.notifyComplete = function () {
                  this.destination.complete()
                }),
                e
              )
            })(i.L))
        i.L
        function a (t, e) {
          if (!e.closed) {
            if (t instanceof o.y) return t.subscribe(e)
            let n
            try {
              n = (0, s.s)(t)(e)
            } catch (r) {
              e.error(r)
            }
            return n
          }
        }
      },
      190: function (t, e, n) {
        'use strict'
        n.d(e, {
          N: function () {
            return l
          },
          c: function () {
            return a
          }
        })
        var r = n(71108);
          var i = n(54096);
          var o = n(32870);
          var s = n(61260);
          var u = n(78e3);
          var c = n(56801);
          var a = (function (t) {
            function e(e, n) {
              var r = t.call(this) || this
              return (
                (r.source = e),
                (r.subjectFactory = n),
                (r._refCount = 0),
                (r._isComplete = !1),
                r
              )
            }
            return (
              r.ZT(e, t),
              (e.prototype._subscribe = function (t) {
                return this.getSubject().subscribe(t)
              }),
              (e.prototype.getSubject = function () {
                var t = this._subject
                return (
                  (t && !t.isStopped) ||
                    (this._subject = this.subjectFactory()),
                  this._subject
                )
              }),
              (e.prototype.connect = function () {
                var t = this._connection
                return (
                  t ||
                    ((this._isComplete = !1),
                    (t = this._connection = new u.w()).add(
                      this.source.subscribe(new h(this.getSubject(), this)),
                    ),
                    t.closed && ((this._connection = null), (t = u.w.EMPTY))),
                  t
                )
              }),
              (e.prototype.refCount = function () {
                return (0, c.x)()(this)
              }),
              e
            )
          })(o.y);
          var l = (function () {
            var t = a.prototype
            return {
              operator: { value: null },
              _refCount: { value: 0, writable: !0 },
              _subject: { value: null, writable: !0 },
              _connection: { value: null, writable: !0 },
              _subscribe: { value: t._subscribe },
              _isComplete: { value: t._isComplete, writable: !0 },
              getSubject: { value: t.getSubject },
              connect: { value: t.connect },
              refCount: { value: t.refCount },
            }
          })();
          var h = (function (t) {
            function e (e, n) {
              let r = t.call(this, e) || this
              return (r.connectable = n), r
            }
            return (
              r.ZT(e, t),
              (e.prototype._error = function (e) {
                this._unsubscribe(), t.prototype._error.call(this, e)
              }),
              (e.prototype._complete = function () {
                ;(this.connectable._isComplete = !0),
                this._unsubscribe(),
                t.prototype._complete.call(this)
              }),
              (e.prototype._unsubscribe = function () {
                let t = this.connectable
                if (t) {
                  this.connectable = null
                  let e = t._connection
                  ;(t._refCount = 0),
                  (t._subject = null),
                  (t._connection = null),
                  e && e.unsubscribe()
                }
              }),
              e
            )
          })(i.Yc)
        s.L
      },
      75750: function (t, e, n) {
        'use strict'
        n.d(e, {
          Ms: function () {
            return h
          },
          aj: function () {
            return l
          }
        })
        let r = n(71108);
          var i = n(71905);
          var o = n(24465);
          var s = n(88666);
          var u = n(19900);
          var c = n(34115);
          var a = {}
        function l () {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
          let n = void 0;
            var r = void 0
          return (
            (0, i.K)(t[t.length - 1]) && (r = t.pop()),
            typeof t[t.length - 1] === 'function' && (n = t.pop()),
            t.length === 1 && (0, o.k)(t[0]) && (t = t[0]),
            (0, c.n)(t, r).lift(new h(n))
          )
        }
        var h = (function () {
            function t (t) {
              this.resultSelector = t
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new f(t, this.resultSelector))
              }),
              t
            )
          })();
          var f = (function (t) {
            function e (e, n) {
              let r = t.call(this, e) || this
              return (
                (r.resultSelector = n),
                (r.active = 0),
                (r.values = []),
                (r.observables = []),
                r
              )
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                this.values.push(a), this.observables.push(t)
              }),
              (e.prototype._complete = function () {
                let t = this.observables;
                  var e = t.length
                if (e === 0) this.destination.complete()
                else {
                  ;(this.active = e), (this.toRespond = e)
                  for (let n = 0; n < e; n++) {
                    let r = t[n]
                    this.add((0, u.D)(this, r, void 0, n))
                  }
                }
              }),
              (e.prototype.notifyComplete = function (t) {
                (this.active -= 1) === 0 && this.destination.complete()
              }),
              (e.prototype.notifyNext = function (t, e, n) {
                let r = this.values;
                  var i = r[n];
                  var o = this.toRespond
                    ? i === a
                      ? --this.toRespond
                      : this.toRespond
                    : 0
                ;(r[n] = e),
                0 === o &&
                    (this.resultSelector
                      ? this._tryResultSelector(r)
                      : this.destination.next(r.slice()))
              }),
              (e.prototype._tryResultSelector = function (t) {
                let e
                try {
                  e = this.resultSelector.apply(this, t)
                } catch (n) {
                  return void this.destination.error(n)
                }
                this.destination.next(e)
              }),
              e
            )
          })(s.L)
      },
      51038: function (t, e, n) {
        'use strict'
        n.d(e, {
          z: function () {
            return o
          }
        })
        let r = n(5695);
          var i = n(12996)
        function o () {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
          return (0, i.u)()(r.of.apply(void 0, t))
        }
      },
      21457: function (t, e, n) {
        'use strict'
        n.d(e, {
          P: function () {
            return s
          }
        })
        let r = n(32870);
          var i = n(36736);
          var o = n(10245)
        function s (t) {
          return new r.y(function (e) {
            let n
            try {
              n = t()
            } catch (r) {
              return void e.error(r)
            }
            return (n ? (0, i.D)(n) : (0, o.c)()).subscribe(e)
          })
        }
      },
      10245: function (t, e, n) {
        'use strict'
        n.d(e, {
          E: function () {
            return i
          },
          c: function () {
            return o
          }
        })
        var r = n(32870);
          var i = new r.y(function (t) {
            return t.complete()
          })
        function o (t) {
          return t
            ? (function (t) {
                return new r.y(function (e) {
                  return t.schedule(function () {
                    return e.complete()
                  })
                })
              })(t)
            : i
        }
      },
      36736: function (t, e, n) {
        'use strict'
        n.d(e, {
          D: function () {
            return s
          }
        })
        let r = n(32870);
          var i = n(57299);
          var o = n(20312)
        function s (t, e) {
          return e
            ? (0, o.x)(t, e)
            : t instanceof r.y
              ? t
              : new r.y((0, i.s)(t))
        }
      },
      34115: function (t, e, n) {
        'use strict'
        n.d(e, {
          n: function () {
            return s
          }
        })
        let r = n(32870);
          var i = n(11090);
          var o = n(39646)
        function s (t, e) {
          return e ? (0, o.r)(t, e) : new r.y((0, i.V)(t))
        }
      },
      70195: function (t, e, n) {
        'use strict'
        n.d(e, {
          T: function () {
            return u
          }
        })
        let r = n(32870);
          var i = n(71905);
          var o = n(4389);
          var s = n(34115)
        function u () {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
          let n = Number.POSITIVE_INFINITY;
            var u = null;
            var c = t[t.length - 1]
          return (
            (0, i.K)(c)
              ? ((u = t.pop()),
                t.length > 1 &&
                  typeof t[t.length - 1] === 'number' &&
                  (n = t.pop()))
              : typeof c === 'number' && (n = t.pop()),
            u === null && t.length === 1 && t[0] instanceof r.y
              ? t[0]
              : (0, o.J)(n)((0, s.n)(t, u))
          )
        }
      },
      5695: function (t, e, n) {
        'use strict'
        n.d(e, {
          of: function () {
            return s
          }
        })
        let r = n(71905);
          var i = n(34115);
          var o = n(39646)
        function s () {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
          let n = t[t.length - 1]
          return (0, r.K)(n) ? (t.pop(), (0, o.r)(t, n)) : (0, i.n)(t)
        }
      },
      56719: function (t, e, n) {
        'use strict'
        n.d(e, {
          S3: function () {
            return c
          }
        })
        let r = n(71108);
          var i = n(24465);
          var o = n(34115);
          var s = n(88666);
          var u = n(19900)
        function c () {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
          if (t.length === 1) {
            if (!(0, i.k)(t[0])) return t[0]
            t = t[0]
          }
          return (0, o.n)(t, void 0).lift(new a())
        }
        var a = (function () {
            function t () {}
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new l(t))
              }),
              t
            )
          })();
          var l = (function (t) {
            function e (e) {
              let n = t.call(this, e) || this
              return (
                (n.hasFirst = !1),
                (n.observables = []),
                (n.subscriptions = []),
                n
              )
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                this.observables.push(t)
              }),
              (e.prototype._complete = function () {
                let t = this.observables;
                  var e = t.length
                if (e === 0) this.destination.complete()
                else {
                  for (let n = 0; n < e && !this.hasFirst; n++) {
                    let r = t[n];
                      var i = (0, u.D)(this, r, void 0, n)
                    this.subscriptions && this.subscriptions.push(i),
                    this.add(i)
                  }
                  this.observables = null
                }
              }),
              (e.prototype.notifyNext = function (t, e, n) {
                if (!this.hasFirst) {
                  this.hasFirst = !0
                  for (let r = 0; r < this.subscriptions.length; r++)
                    {if (r !== n) {
                      var i = this.subscriptions[r]
                      i.unsubscribe(), this.remove(i)
                    }}
                  this.subscriptions = null
                }
                this.destination.next(e)
              }),
              e
            )
          })(s.L)
      },
      97594: function (t, e, n) {
        'use strict'
        n.d(e, {
          _: function () {
            return i
          }
        })
        let r = n(32870)
        function i (t, e) {
          return e
            ? new r.y(function (n) {
              return e.schedule(o, 0, { error: t, subscriber: n })
            })
            : new r.y(function (e) {
              return e.error(t)
            })
        }
        function o (t) {
          let e = t.error
          t.subscriber.error(e)
        }
      },
      14199: function (t, e, n) {
        'use strict'
        n.d(e, {
          H: function () {
            return u
          }
        })
        let r = n(32870);
          var i = n(10972);
          var o = n(37764);
          var s = n(71905)
        function u (t, e, n) {
          void 0 === t && (t = 0)
          let u = -1
          return (
            (0, o.k)(e)
              ? (u = Number(e) < 1 ? 1 : Number(e))
              : (0, s.K)(e) && (n = e),
            (0, s.K)(n) || (n = i.P),
            new r.y(function (e) {
              let r = (0, o.k)(t) ? t : +t - n.now()
              return n.schedule(c, r, { index: 0, period: u, subscriber: e })
            })
          )
        }
        function c (t) {
          let e = t.index;
            var n = t.period;
            var r = t.subscriber
          if ((r.next(e), !r.closed)) {
            if (n === -1) return r.complete()
            ;(t.index = e + 1), this.schedule(t, n)
          }
        }
      },
      89513: function (t, e, n) {
        'use strict'
        n.d(e, {
          $R: function () {
            return a
          },
          mx: function () {
            return l
          }
        })
        let r = n(71108);
          var i = n(34115);
          var o = n(24465);
          var s = n(61260);
          var u = n(39821);
          var c = n(19957)
        function a () {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
          let n = t[t.length - 1]
          return (
            typeof n === 'function' && t.pop(),
            (0, i.n)(t, void 0).lift(new l(n))
          )
        }
        var l = (function () {
            function t (t) {
              this.resultSelector = t
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new h(t, this.resultSelector))
              }),
              t
            )
          })();
          var h = (function (t) {
            function e(e, n, r) {
              void 0 === r && (r = Object.create(null))
              var i = t.call(this, e) || this
              return (
                (i.resultSelector = n),
                (i.iterators = []),
                (i.active = 0),
                (i.resultSelector = 'function' === typeof n ? n : void 0),
                i
              )
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                var e = this.iterators
                ;(0, o.k)(t)
                  ? e.push(new d(t))
                  : 'function' === typeof t[u.hZ]
                    ? e.push(new f(t[u.hZ]()))
                    : e.push(new p(this.destination, this, t))
              }),
              (e.prototype._complete = function () {
                var t = this.iterators,
                  e = t.length
                if ((this.unsubscribe(), 0 !== e)) {
                  this.active = e
                  for (var n = 0; n < e; n++) {
                    var r = t[n]
                    if (r.stillUnsubscribed) this.destination.add(r.subscribe())
                    else this.active--
                  }
                } else this.destination.complete()
              }),
              (e.prototype.notifyInactive = function () {
                this.active--, 0 === this.active && this.destination.complete()
              }),
              (e.prototype.checkIterators = function () {
                for (
                  var t = this.iterators,
                    e = t.length,
                    n = this.destination,
                    r = 0;
                  r < e;
                  r++
                ) {
                  if (
                    'function' === typeof (s = t[r]).hasValue &&
                    !s.hasValue()
                  )
                    return
                }
                var i = !1,
                  o = []
                for (r = 0; r < e; r++) {
                  var s,
                    u = (s = t[r]).next()
                  if ((s.hasCompleted() && (i = !0), u.done))
                    return void n.complete()
                  o.push(u.value)
                }
                this.resultSelector ? this._tryresultSelector(o) : n.next(o),
                  i && n.complete()
              }),
              (e.prototype._tryresultSelector = function (t) {
                var e
                try {
                  e = this.resultSelector.apply(this, t)
                } catch (n) {
                  return void this.destination.error(n)
                }
                this.destination.next(e)
              }),
              e
            )
          })(s.L);
          var f = (function () {
            function t(t) {
              ;(this.iterator = t), (this.nextResult = t.next())
            }
            return (
              (t.prototype.hasValue = function () {
                return !0
              }),
              (t.prototype.next = function () {
                var t = this.nextResult
                return (this.nextResult = this.iterator.next()), t
              }),
              (t.prototype.hasCompleted = function () {
                var t = this.nextResult
                return Boolean(t && t.done)
              }),
              t
            )
          })();
          var d = (function () {
            function t(t) {
              ;(this.array = t),
                (this.index = 0),
                (this.length = 0),
                (this.length = t.length)
            }
            return (
              (t.prototype[u.hZ] = function () {
                return this
              }),
              (t.prototype.next = function (t) {
                var e = this.index++,
                  n = this.array
                return e < this.length
                  ? { value: n[e], done: !1 }
                  : { value: null, done: !0 }
              }),
              (t.prototype.hasValue = function () {
                return this.array.length > this.index
              }),
              (t.prototype.hasCompleted = function () {
                return this.array.length === this.index
              }),
              t
            )
          })();
          var p = (function (t) {
            function e (e, n, r) {
              let i = t.call(this, e) || this
              return (
                (i.parent = n),
                (i.observable = r),
                (i.stillUnsubscribed = !0),
                (i.buffer = []),
                (i.isComplete = !1),
                i
              )
            }
            return (
              r.ZT(e, t),
              (e.prototype[u.hZ] = function () {
                return this
              }),
              (e.prototype.next = function () {
                let t = this.buffer
                return t.length === 0 && this.isComplete
                  ? { value: null, done: !0 }
                  : { value: t.shift(), done: !1 }
              }),
              (e.prototype.hasValue = function () {
                return this.buffer.length > 0
              }),
              (e.prototype.hasCompleted = function () {
                return this.buffer.length === 0 && this.isComplete
              }),
              (e.prototype.notifyComplete = function () {
                this.buffer.length > 0
                  ? ((this.isComplete = !0), this.parent.notifyInactive())
                  : this.destination.complete()
              }),
              (e.prototype.notifyNext = function (t) {
                this.buffer.push(t), this.parent.checkIterators()
              }),
              (e.prototype.subscribe = function () {
                return (0, c.ft)(this.observable, new c.IY(this))
              }),
              e
            )
          })(c.Ds)
      },
      12996: function (t, e, n) {
        'use strict'
        n.d(e, {
          u: function () {
            return i
          }
        })
        let r = n(4389)
        function i () {
          return (0, r.J)(1)
        }
      },
      57535: function (t, e, n) {
        'use strict'
        n.d(e, {
          h: function () {
            return o
          }
        })
        let r = n(71108);
          var i = n(61260)
        function o (t, e) {
          return function (n) {
            return n.lift(new s(t, e))
          }
        }
        var s = (function () {
            function t (t, e) {
              ;(this.predicate = t), (this.thisArg = e)
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new u(t, this.predicate, this.thisArg))
              }),
              t
            )
          })();
          var u = (function (t) {
            function e (e, n, r) {
              let i = t.call(this, e) || this
              return (i.predicate = n), (i.thisArg = r), (i.count = 0), i
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                let e
                try {
                  e = this.predicate.call(this.thisArg, t, this.count++)
                } catch (n) {
                  return void this.destination.error(n)
                }
                e && this.destination.next(t)
              }),
              e
            )
          })(i.L)
      },
      4208: function (t, e, n) {
        'use strict'
        n.d(e, {
          T: function () {
            return f
          },
          v: function () {
            return c
          }
        })
        let r = n(71108);
          var i = n(61260);
          var o = n(78e3);
          var s = n(32870);
          var u = n(54096)
        function c (t, e, n, r) {
          return function (i) {
            return i.lift(new a(t, e, n, r))
          }
        }
        var a = (function () {
            function t (t, e, n, r) {
              ;(this.keySelector = t),
              (this.elementSelector = e),
              (this.durationSelector = n),
              (this.subjectSelector = r)
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(
                  new l(
                    t,
                    this.keySelector,
                    this.elementSelector,
                    this.durationSelector,
                    this.subjectSelector
                  ),
                )
              }),
              t
            )
          })();
          var l = (function (t) {
            function e(e, n, r, i, o) {
              var s = t.call(this, e) || this
              return (
                (s.keySelector = n),
                (s.elementSelector = r),
                (s.durationSelector = i),
                (s.subjectSelector = o),
                (s.groups = null),
                (s.attemptedToUnsubscribe = !1),
                (s.count = 0),
                s
              )
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                var e
                try {
                  e = this.keySelector(t)
                } catch (n) {
                  return void this.error(n)
                }
                this._group(t, e)
              }),
              (e.prototype._group = function (t, e) {
                var n = this.groups
                n || (n = this.groups = new Map())
                var r,
                  i = n.get(e)
                if (this.elementSelector)
                  try {
                    r = this.elementSelector(t)
                  } catch (c) {
                    this.error(c)
                  }
                else r = t
                if (!i) {
                  ;(i = this.subjectSelector
                    ? this.subjectSelector()
                    : new u.xQ()),
                    n.set(e, i)
                  var o = new f(e, i, this)
                  if ((this.destination.next(o), this.durationSelector)) {
                    var s = void 0
                    try {
                      s = this.durationSelector(new f(e, i))
                    } catch (c) {
                      return void this.error(c)
                    }
                    this.add(s.subscribe(new h(e, i, this)))
                  }
                }
                i.closed || i.next(r)
              }),
              (e.prototype._error = function (t) {
                var e = this.groups
                e &&
                  (e.forEach(function (e, n) {
                    e.error(t)
                  }),
                  e.clear()),
                  this.destination.error(t)
              }),
              (e.prototype._complete = function () {
                var t = this.groups
                t &&
                  (t.forEach(function (t, e) {
                    t.complete()
                  }),
                  t.clear()),
                  this.destination.complete()
              }),
              (e.prototype.removeGroup = function (t) {
                this.groups.delete(t)
              }),
              (e.prototype.unsubscribe = function () {
                this.closed ||
                  ((this.attemptedToUnsubscribe = !0),
                  0 === this.count && t.prototype.unsubscribe.call(this))
              }),
              e
            )
          })(i.L);
          var h = (function (t) {
            function e(e, n, r) {
              var i = t.call(this, n) || this
              return (i.key = e), (i.group = n), (i.parent = r), i
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                this.complete()
              }),
              (e.prototype._unsubscribe = function () {
                var t = this.parent,
                  e = this.key
                ;(this.key = this.parent = null), t && t.removeGroup(e)
              }),
              e
            )
          })(i.L);
          var f = (function (t) {
            function e(e, n, r) {
              var i = t.call(this) || this
              return (
                (i.key = e),
                (i.groupSubject = n),
                (i.refCountSubscription = r),
                i
              )
            }
            return (
              r.ZT(e, t),
              (e.prototype._subscribe = function (t) {
                var e = new o.w(),
                  n = this.refCountSubscription,
                  r = this.groupSubject
                return (
                  n && !n.closed && e.add(new d(n)), e.add(r.subscribe(t)), e
                )
              }),
              e
            )
          })(s.y);
          var d = (function (t) {
            function e (e) {
              let n = t.call(this) || this
              return (n.parent = e), e.count++, n
            }
            return (
              r.ZT(e, t),
              (e.prototype.unsubscribe = function () {
                let e = this.parent
                e.closed ||
                  this.closed ||
                  (t.prototype.unsubscribe.call(this),
                  (e.count -= 1),
                  e.count === 0 && e.attemptedToUnsubscribe && e.unsubscribe())
              }),
              e
            )
          })(o.w)
      },
      70840: function (t, e, n) {
        'use strict'
        n.d(e, {
          U: function () {
            return o
          }
        })
        let r = n(71108);
          var i = n(61260)
        function o (t, e) {
          return function (n) {
            if (typeof t !== 'function')
              {throw new TypeError(
                'argument is not a function. Are you looking for `mapTo()`?',
              )}
            return n.lift(new s(t, e))
          }
        }
        var s = (function () {
            function t (t, e) {
              ;(this.project = t), (this.thisArg = e)
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new u(t, this.project, this.thisArg))
              }),
              t
            )
          })();
          var u = (function (t) {
            function e (e, n, r) {
              let i = t.call(this, e) || this
              return (i.project = n), (i.count = 0), (i.thisArg = r || i), i
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                let e
                try {
                  e = this.project.call(this.thisArg, t, this.count++)
                } catch (n) {
                  return void this.destination.error(n)
                }
                this.destination.next(e)
              }),
              e
            )
          })(i.L)
      },
      4389: function (t, e, n) {
        'use strict'
        n.d(e, {
          J: function () {
            return o
          }
        })
        let r = n(36414);
          var i = n(66220)
        function o (t) {
          return (
            void 0 === t && (t = Number.POSITIVE_INFINITY), (0, r.zg)(i.y, t)
          )
        }
      },
      36414: function (t, e, n) {
        'use strict'
        n.d(e, {
          VS: function () {
            return l
          },
          zg: function () {
            return u
          }
        })
        let r = n(71108);
          var i = n(70840);
          var o = n(36736);
          var s = n(19957)
        function u (t, e, n) {
          return (
            void 0 === n && (n = Number.POSITIVE_INFINITY),
            typeof e === 'function'
              ? function (r) {
                return r.pipe(
                  u(function (n, r) {
                    return (0, o.D)(t(n, r)).pipe(
                      (0, i.U)(function (t, i) {
                        return e(n, t, r, i)
                      })
                      )
                  }, n)
                  )
              }
              : (typeof e === 'number' && (n = e),
                function (e) {
                  return e.lift(new c(t, n))
                })
          )
        }
        var c = (function () {
            function t (t, e) {
              void 0 === e && (e = Number.POSITIVE_INFINITY),
              (this.project = t),
              (this.concurrent = e)
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new a(t, this.project, this.concurrent))
              }),
              t
            )
          })();
          var a = (function (t) {
            function e(e, n, r) {
              void 0 === r && (r = Number.POSITIVE_INFINITY)
              var i = t.call(this, e) || this
              return (
                (i.project = n),
                (i.concurrent = r),
                (i.hasCompleted = !1),
                (i.buffer = []),
                (i.active = 0),
                (i.index = 0),
                i
              )
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                this.active < this.concurrent
                  ? this._tryNext(t)
                  : this.buffer.push(t)
              }),
              (e.prototype._tryNext = function (t) {
                var e,
                  n = this.index++
                try {
                  e = this.project(t, n)
                } catch (r) {
                  return void this.destination.error(r)
                }
                this.active++, this._innerSub(e)
              }),
              (e.prototype._innerSub = function (t) {
                var e = new s.IY(this),
                  n = this.destination
                n.add(e)
                var r = (0, s.ft)(t, e)
                r !== e && n.add(r)
              }),
              (e.prototype._complete = function () {
                ;(this.hasCompleted = !0),
                  0 === this.active &&
                    0 === this.buffer.length &&
                    this.destination.complete(),
                  this.unsubscribe()
              }),
              (e.prototype.notifyNext = function (t) {
                this.destination.next(t)
              }),
              (e.prototype.notifyComplete = function () {
                var t = this.buffer
                this.active--,
                  t.length > 0
                    ? this._next(t.shift())
                    : 0 === this.active &&
                      this.hasCompleted &&
                      this.destination.complete()
              }),
              e
            )
          })(s.Ds);
          var l = u
      },
      63548: function (t, e, n) {
        'use strict'
        n.d(e, {
          QV: function () {
            return s
          },
          ht: function () {
            return c
          }
        })
        let r = n(71108);
          var i = n(61260);
          var o = n(12841)
        function s (t, e) {
          return (
            void 0 === e && (e = 0),
            function (n) {
              return n.lift(new u(t, e))
            }
          )
        }
        var u = (function () {
            function t (t, e) {
              void 0 === e && (e = 0), (this.scheduler = t), (this.delay = e)
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new c(t, this.scheduler, this.delay))
              }),
              t
            )
          })();
          var c = (function (t) {
            function e(e, n, r) {
              void 0 === r && (r = 0)
              var i = t.call(this, e) || this
              return (i.scheduler = n), (i.delay = r), i
            }
            return (
              r.ZT(e, t),
              (e.dispatch = function (t) {
                var e = t.notification,
                  n = t.destination
                e.observe(n), this.unsubscribe()
              }),
              (e.prototype.scheduleMessage = function (t) {
                this.destination.add(
                  this.scheduler.schedule(
                    e.dispatch,
                    this.delay,
                    new a(t, this.destination),
                  ),
                )
              }),
              (e.prototype._next = function (t) {
                this.scheduleMessage(o.P.createNext(t))
              }),
              (e.prototype._error = function (t) {
                this.scheduleMessage(o.P.createError(t)), this.unsubscribe()
              }),
              (e.prototype._complete = function () {
                this.scheduleMessage(o.P.createComplete()), this.unsubscribe()
              }),
              e
            )
          })(i.L);
          var a = (function () {
            return function (t, e) {
              ;(this.notification = t), (this.destination = e)
            }
          })()
      },
      56801: function (t, e, n) {
        'use strict'
        n.d(e, {
          x: function () {
            return o
          }
        })
        let r = n(71108);
          var i = n(61260)
        function o () {
          return function (t) {
            return t.lift(new s(t))
          }
        }
        var s = (function () {
            function t (t) {
              this.connectable = t
            }
            return (
              (t.prototype.call = function (t, e) {
                let n = this.connectable
                n._refCount++
                let r = new u(t, n);
                  var i = e.subscribe(r)
                return r.closed || (r.connection = n.connect()), i
              }),
              t
            )
          })();
          var u = (function (t) {
            function e (e, n) {
              let r = t.call(this, e) || this
              return (r.connectable = n), r
            }
            return (
              r.ZT(e, t),
              (e.prototype._unsubscribe = function () {
                let t = this.connectable
                if (t) {
                  this.connectable = null
                  let e = t._refCount
                  if (e <= 0) this.connection = null
                  else if (((t._refCount = e - 1), e > 1))
                    {this.connection = null}
                  else {
                    let n = this.connection;
                      var r = t._connection
                    ;(this.connection = null),
                    !r || (n && r !== n) || r.unsubscribe()
                  }
                } else this.connection = null
              }),
              e
            )
          })(i.L)
      },
      39646: function (t, e, n) {
        'use strict'
        n.d(e, {
          r: function () {
            return o
          }
        })
        let r = n(32870);
          var i = n(78e3)
        function o (t, e) {
          return new r.y(function (n) {
            let r = new i.w();
              var o = 0
            return (
              r.add(
                e.schedule(function () {
                  o !== t.length
                    ? (n.next(t[o++]), n.closed || r.add(this.schedule()))
                    : n.complete()
                })
              ),
              r
            )
          })
        }
      },
      20312: function (t, e, n) {
        'use strict'
        n.d(e, {
          x: function () {
            return l
          }
        })
        let r = n(32870);
          var i = n(78e3);
          var o = n(3422)
        let s = n(39646);
          var u = n(39821)
        let c = n(39973);
          var a = n(1366)
        function l (t, e) {
          if (t != null) {
            if (
              (function (t) {
                return t && typeof t[o.L] === 'function'
              })(t)
            )
              {return (function (t, e) {
                return new r.y(function (n) {
                  var r = new i.w()
                  return (
                    r.add(
                      e.schedule(function () {
                        var i = t[o.L]()
                        r.add(
                          i.subscribe({
                            next: function (t) {
                              r.add(
                                e.schedule(function () {
                                  return n.next(t)
                                }),
                              )
                            },
                            error: function (t) {
                              r.add(
                                e.schedule(function () {
                                  return n.error(t)
                                }),
                              )
                            },
                            complete: function () {
                              r.add(
                                e.schedule(function () {
                                  return n.complete()
                                }),
                              )
                            },
                          }),
                        )
                      }),
                    ),
                    r
                  )
                })
              })(t, e)}
            if ((0, c.t)(t))
              {return (function (t, e) {
                return new r.y(function (n) {
                  var r = new i.w()
                  return (
                    r.add(
                      e.schedule(function () {
                        return t.then(
                          function (t) {
                            r.add(
                              e.schedule(function () {
                                n.next(t),
                                  r.add(
                                    e.schedule(function () {
                                      return n.complete()
                                    }),
                                  )
                              }),
                            )
                          },
                          function (t) {
                            r.add(
                              e.schedule(function () {
                                return n.error(t)
                              }),
                            )
                          },
                        )
                      }),
                    ),
                    r
                  )
                })
              })(t, e)}
            if ((0, a.z)(t)) return (0, s.r)(t, e)
            if (
              (function (t) {
                return t && typeof t[u.hZ] === 'function'
              })(t) ||
              typeof t === 'string'
            )
              {return (function (t, e) {
                if (!t) throw new Error('Iterable cannot be null')
                return new r.y(function (n) {
                  var r,
                    o = new i.w()
                  return (
                    o.add(function () {
                      r && 'function' === typeof r.return && r.return()
                    }),
                    o.add(
                      e.schedule(function () {
                        ;(r = t[u.hZ]()),
                          o.add(
                            e.schedule(function () {
                              if (!n.closed) {
                                var t, e
                                try {
                                  var i = r.next()
                                  ;(t = i.value), (e = i.done)
                                } catch (o) {
                                  return void n.error(o)
                                }
                                e ? n.complete() : (n.next(t), this.schedule())
                              }
                            }),
                          )
                      }),
                    ),
                    o
                  )
                })
              })(t, e)}
          }
          throw new TypeError(
            ((t !== null && typeof t) || t) + ' is not observable'
          )
        }
      },
      45544: function (t, e, n) {
        'use strict'
        n.d(e, {
          o: function () {
            return i
          }
        })
        var r = n(71108);
          var i = (function (t) {
            function e (e, n) {
              let r = t.call(this, e, n) || this
              return (r.scheduler = e), (r.work = n), (r.pending = !1), r
            }
            return (
              r.ZT(e, t),
              (e.prototype.schedule = function (t, e) {
                if ((void 0 === e && (e = 0), this.closed)) return this
                this.state = t
                let n = this.id;
                  var r = this.scheduler
                return (
                  n != null && (this.id = this.recycleAsyncId(r, n, e)),
                  (this.pending = !0),
                  (this.delay = e),
                  (this.id = this.id || this.requestAsyncId(r, this.id, e)),
                  this
                )
              }),
              (e.prototype.requestAsyncId = function (t, e, n) {
                return (
                  void 0 === n && (n = 0), setInterval(t.flush.bind(t, this), n)
                )
              }),
              (e.prototype.recycleAsyncId = function (t, e, n) {
                if (
                  (void 0 === n && (n = 0),
                  n !== null && this.delay === n && !1 === this.pending)
                )
                  {return e}
                clearInterval(e)
              }),
              (e.prototype.execute = function (t, e) {
                if (this.closed)
                  {return new Error('executing a cancelled action')}
                this.pending = !1
                let n = this._execute(t, e)
                if (n) return n
                !1 === this.pending &&
                  this.id != null &&
                  (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
              }),
              (e.prototype._execute = function (t, e) {
                let n = !1;
                  var r = void 0
                try {
                  this.work(t)
                } catch (i) {
                  ;(n = !0), (r = (!!i && i) || new Error(i))
                }
                if (n) return this.unsubscribe(), r
              }),
              (e.prototype._unsubscribe = function () {
                let t = this.id;
                  var e = this.scheduler;
                  var n = e.actions;
                  var r = n.indexOf(this)
                ;(this.work = null),
                (this.state = null),
                (this.pending = !1),
                (this.scheduler = null),
                -1 !== r && n.splice(r, 1),
                null != t && (this.id = this.recycleAsyncId(e, t, null)),
                (this.delay = null)
              }),
              e
            )
          })(
            (function (t) {
              function e (e, n) {
                return t.call(this) || this
              }
              return (
                r.ZT(e, t),
                (e.prototype.schedule = function (t, e) {
                  return void 0 === e && (e = 0), this
                }),
                e
              )
            })(n(78e3).w)
          )
      },
      40636: function (t, e, n) {
        'use strict'
        n.d(e, {
          v: function () {
            return o
          }
        })
        var r = n(71108);
          var i = n(88988);
          var o = (function (t) {
            function e (n, r) {
              void 0 === r && (r = i.b.now)
              var o =
                t.call(this, n, function () {
                  return e.delegate && e.delegate !== o ? e.delegate.now() : r()
                }) || this
              return (
                (o.actions = []), (o.active = !1), (o.scheduled = void 0), o
              )
            }
            return (
              r.ZT(e, t),
              (e.prototype.schedule = function (n, r, i) {
                return (
                  void 0 === r && (r = 0),
                  e.delegate && e.delegate !== this
                    ? e.delegate.schedule(n, r, i)
                    : t.prototype.schedule.call(this, n, r, i)
                )
              }),
              (e.prototype.flush = function (t) {
                let e = this.actions
                if (this.active) e.push(t)
                else {
                  let n
                  this.active = !0
                  do {
                    if ((n = t.execute(t.state, t.delay))) break
                  } while ((t = e.shift()))
                  if (((this.active = !1), n)) {
                    for (; (t = e.shift());) t.unsubscribe()
                    throw n
                  }
                }
              }),
              e
            )
          })(i.b)
      },
      32931: function (t, e, n) {
        'use strict'
        n.d(e, {
          e: function () {
            return d
          },
          E: function () {
            return f
          }
        })
        let r = n(71108);
          var i = 1;
          var o = (function () {
            return Promise.resolve()
          })();
          var s = {}
        function u (t) {
          return t in s && (delete s[t], !0)
        }
        var c = function (t) {
            let e = i++
            return (
              (s[e] = !0),
              o.then(function () {
                return u(e) && t()
              }),
              e
            )
          };
          var a = function (t) {
            u(t)
          };
          var l = (function (t) {
            function e(e, n) {
              var r = t.call(this, e, n) || this
              return (r.scheduler = e), (r.work = n), r
            }
            return (
              r.ZT(e, t),
              (e.prototype.requestAsyncId = function (e, n, r) {
                return (
                  void 0 === r && (r = 0),
                  null !== r && r > 0
                    ? t.prototype.requestAsyncId.call(this, e, n, r)
                    : (e.actions.push(this),
                      e.scheduled || (e.scheduled = c(e.flush.bind(e, null))))
                )
              }),
              (e.prototype.recycleAsyncId = function (e, n, r) {
                if (
                  (void 0 === r && (r = 0),
                  (null !== r && r > 0) || (null === r && this.delay > 0))
                )
                  return t.prototype.recycleAsyncId.call(this, e, n, r)
                0 === e.actions.length && (a(n), (e.scheduled = void 0))
              }),
              e
            )
          })(n(45544).o);
          var h = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this
            }
            return (
              r.ZT(e, t),
              (e.prototype.flush = function (t) {
                ;(this.active = !0), (this.scheduled = void 0)
                var e,
                  n = this.actions,
                  r = -1,
                  i = n.length
                t = t || n.shift()
                do {
                  if ((e = t.execute(t.state, t.delay))) break
                } while (++r < i && (t = n.shift()))
                if (((this.active = !1), e)) {
                  for (; ++r < i && (t = n.shift()); ) t.unsubscribe()
                  throw e
                }
              }),
              e
            )
          })(n(40636).v);
          var f = new h(l);
          var d = f
      },
      10972: function (t, e, n) {
        'use strict'
        n.d(e, {
          P: function () {
            return o
          },
          z: function () {
            return i
          }
        })
        var r = n(45544);
          var i = new (n(40636).v)(r.o);
          var o = i
      },
      78989: function (t, e, n) {
        'use strict'
        n.d(e, {
          c: function () {
            return u
          },
          N: function () {
            return s
          }
        })
        var r = n(71108);
          var i = (function (t) {
            function e(e, n) {
              var r = t.call(this, e, n) || this
              return (r.scheduler = e), (r.work = n), r
            }
            return (
              r.ZT(e, t),
              (e.prototype.schedule = function (e, n) {
                return (
                  void 0 === n && (n = 0),
                  n > 0
                    ? t.prototype.schedule.call(this, e, n)
                    : ((this.delay = n),
                      (this.state = e),
                      this.scheduler.flush(this),
                      this)
                )
              }),
              (e.prototype.execute = function (e, n) {
                return n > 0 || this.closed
                  ? t.prototype.execute.call(this, e, n)
                  : this._execute(e, n)
              }),
              (e.prototype.requestAsyncId = function (e, n, r) {
                return (
                  void 0 === r && (r = 0),
                  (null !== r && r > 0) || (null === r && this.delay > 0)
                    ? t.prototype.requestAsyncId.call(this, e, n, r)
                    : e.flush(this)
                )
              }),
              e
            )
          })(n(45544).o);
          var o = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this
            }
            return r.ZT(e, t), e
          })(n(40636).v);
          var s = new o(i);
          var u = s
      },
      39821: function (t, e, n) {
        'use strict'
        function r () {
          return typeof Symbol === 'function' && Symbol.iterator
            ? Symbol.iterator
            : '@@iterator'
        }
        n.d(e, {
          hZ: function () {
            return i
          }
        })
        var i = r()
      },
      3422: function (t, e, n) {
        'use strict'
        n.d(e, {
          L: function () {
            return r
          }
        })
        var r = (function () {
          return (
            (typeof Symbol === 'function' && Symbol.observable) ||
            '@@observable'
          )
        })()
      },
      35822: function (t, e, n) {
        'use strict'
        n.d(e, {
          b: function () {
            return r
          }
        })
        var r = (function () {
          return typeof Symbol === 'function'
            ? Symbol('rxSubscriber')
            : '@@rxSubscriber_' + Math.random()
        })()
      },
      52319: function (t, e, n) {
        'use strict'
        n.d(e, {
          W: function () {
            return r
          }
        })
        var r = (function () {
          function t () {
            return (
              Error.call(this),
              (this.message = 'argument out of range'),
              (this.name = 'ArgumentOutOfRangeError'),
              this
            )
          }
          return (t.prototype = Object.create(Error.prototype)), t
        })()
      },
      63e3: function (t, e, n) {
        'use strict'
        n.d(e, {
          K: function () {
            return r
          }
        })
        var r = (function () {
          function t () {
            return (
              Error.call(this),
              (this.message = 'no elements in sequence'),
              (this.name = 'EmptyError'),
              this
            )
          }
          return (t.prototype = Object.create(Error.prototype)), t
        })()
      },
      33827: function (t, e, n) {
        'use strict'
        n.d(e, {
          N: function () {
            return r
          }
        })
        var r = (function () {
          function t () {
            return (
              Error.call(this),
              (this.message = 'object unsubscribed'),
              (this.name = 'ObjectUnsubscribedError'),
              this
            )
          }
          return (t.prototype = Object.create(Error.prototype)), t
        })()
      },
      43268: function (t, e, n) {
        'use strict'
        n.d(e, {
          W: function () {
            return r
          }
        })
        var r = (function () {
          function t () {
            return (
              Error.call(this),
              (this.message = 'Timeout has occurred'),
              (this.name = 'TimeoutError'),
              this
            )
          }
          return (t.prototype = Object.create(Error.prototype)), t
        })()
      },
      43995: function (t, e, n) {
        'use strict'
        n.d(e, {
          B: function () {
            return r
          }
        })
        var r = (function () {
          function t (t) {
            return (
              Error.call(this),
              (this.message = t
                ? t.length +
                  ' errors occurred during unsubscription:\n' +
                  t
                    .map(function (t, e) {
                      return e + 1 + ') ' + t.toString()
                    })
                    .join('\n  ')
                : ''),
              (this.name = 'UnsubscriptionError'),
              (this.errors = t),
              this
            )
          }
          return (t.prototype = Object.create(Error.prototype)), t
        })()
      },
      3476: function (t, e, n) {
        'use strict'
        n.d(e, {
          _: function () {
            return i
          }
        })
        let r = n(61260)
        function i (t) {
          for (; t;) {
            let e = t;
              var n = e.closed;
              var i = e.destination;
              var o = e.isStopped
            if (n || o) return !1
            t = i && i instanceof r.L ? i : null
          }
          return !0
        }
      },
      60576: function (t, e, n) {
        'use strict'
        function r (t) {
          setTimeout(function () {
            throw t
          }, 0)
        }
        n.d(e, {
          z: function () {
            return r
          }
        })
      },
      66220: function (t, e, n) {
        'use strict'
        function r (t) {
          return t
        }
        n.d(e, {
          y: function () {
            return r
          }
        })
      },
      24465: function (t, e, n) {
        'use strict'
        n.d(e, {
          k: function () {
            return r
          }
        })
        var r = (function () {
          return (
            Array.isArray ||
            function (t) {
              return t && typeof t.length === 'number'
            }
          )
        })()
      },
      1366: function (t, e, n) {
        'use strict'
        n.d(e, {
          z: function () {
            return r
          }
        })
        var r = function (t) {
          return t && typeof t.length === 'number' && typeof t !== 'function'
        }
      },
      49390: function (t, e, n) {
        'use strict'
        function r (t) {
          return typeof t === 'function'
        }
        n.d(e, {
          m: function () {
            return r
          }
        })
      },
      37764: function (t, e, n) {
        'use strict'
        n.d(e, {
          k: function () {
            return i
          }
        })
        let r = n(24465)
        function i (t) {
          return !(0, r.k)(t) && t - parseFloat(t) + 1 >= 0
        }
      },
      20208: function (t, e, n) {
        'use strict'
        function r (t) {
          return t !== null && typeof t === 'object'
        }
        n.d(e, {
          K: function () {
            return r
          }
        })
      },
      39973: function (t, e, n) {
        'use strict'
        function r (t) {
          return (
            !!t &&
            typeof t.subscribe !== 'function' &&
            typeof t.then === 'function'
          )
        }
        n.d(e, {
          t: function () {
            return r
          }
        })
      },
      71905: function (t, e, n) {
        'use strict'
        function r (t) {
          return t && typeof t.schedule === 'function'
        }
        n.d(e, {
          K: function () {
            return r
          }
        })
      },
      37576: function (t, e, n) {
        'use strict'
        function r () {}
        n.d(e, {
          Z: function () {
            return r
          }
        })
      },
      81665: function (t, e, n) {
        'use strict'
        function r (t, e) {
          function n () {
            return !n.pred.apply(n.thisArg, arguments)
          }
          return (n.pred = t), (n.thisArg = e), n
        }
        n.d(e, {
          f: function () {
            return r
          }
        })
      },
      93250: function (t, e, n) {
        'use strict'
        n.d(e, {
          U: function () {
            return o
          },
          z: function () {
            return i
          }
        })
        let r = n(66220)
        function i () {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
          return o(t)
        }
        function o (t) {
          return t.length === 0
            ? r.y
            : t.length === 1
              ? t[0]
              : function (e) {
                return t.reduce(function (t, e) {
                  return e(t)
                }, e)
              }
        }
      },
      57299: function (t, e, n) {
        'use strict'
        n.d(e, {
          s: function () {
            return l
          }
        })
        var r = n(11090);
          var i = n(60576);
          var o = n(39821);
          var s = n(3422);
          var u = n(1366);
          var c = n(39973);
          var a = n(20208);
          var l = function (t) {
            if (t && typeof t[s.L] === 'function')
              {return (
                (l = t),
                function (t) {
                  var e = l[s.L]()
                  if ('function' !== typeof e.subscribe)
                    throw new TypeError(
                      'Provided object does not correctly implement Symbol.observable',
                    )
                  return e.subscribe(t)
                }
              )}
            if ((0, u.z)(t)) return (0, r.V)(t)
            if ((0, c.t)(t))
              {return (
                (n = t),
                function (t) {
                  return (
                    n
                      .then(
                        function (e) {
                          t.closed || (t.next(e), t.complete())
                        },
                        function (e) {
                          return t.error(e)
                        },
                      )
                      .then(null, i.z),
                    t
                  )
                }
              )}
            if (t && typeof t[o.hZ] === 'function')
              {return (
                (e = t),
                function (t) {
                  for (var n = e[o.hZ](); ; ) {
                    var r = void 0
                    try {
                      r = n.next()
                    } catch (i) {
                      return t.error(i), t
                    }
                    if (r.done) {
                      t.complete()
                      break
                    }
                    if ((t.next(r.value), t.closed)) break
                  }
                  return (
                    'function' === typeof n.return &&
                      t.add(function () {
                        n.return && n.return()
                      }),
                    t
                  )
                }
              )}
            let e;
              var n;
              var l;
              var h = (0, a.K)(t) ? 'an invalid object' : "'" + t + "'"
            throw new TypeError(
              'You provided ' +
                h +
                ' where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.'
            )
          }
      },
      11090: function (t, e, n) {
        'use strict'
        n.d(e, {
          V: function () {
            return r
          }
        })
        var r = function (t) {
          return function (e) {
            for (let n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n])
            e.complete()
          }
        }
      },
      19900: function (t, e, n) {
        'use strict'
        n.d(e, {
          D: function () {
            return u
          }
        })
        let r = n(71108);
          var i = (function (t) {
            function e(e, n, r) {
              var i = t.call(this) || this
              return (
                (i.parent = e),
                (i.outerValue = n),
                (i.outerIndex = r),
                (i.index = 0),
                i
              )
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                this.parent.notifyNext(
                  this.outerValue,
                  t,
                  this.outerIndex,
                  this.index++,
                  this,
                )
              }),
              (e.prototype._error = function (t) {
                this.parent.notifyError(t, this), this.unsubscribe()
              }),
              (e.prototype._complete = function () {
                this.parent.notifyComplete(this), this.unsubscribe()
              }),
              e
            )
          })(n(61260).L);
          var o = n(57299);
          var s = n(32870)
        function u (t, e, n, r, u) {
          if ((void 0 === u && (u = new i(t, n, r)), !u.closed))
            {return e instanceof s.y ? e.subscribe(u) : (0, o.s)(e)(u)}
        }
      },
      84539: function (t, e, n) {
        'use strict'
        n.r(e),
        n.d(e, {
          audit: function () {
            return o
          },
          auditTime: function () {
            return l
          },
          buffer: function () {
            return h
          },
          bufferCount: function () {
            return b
          },
          bufferTime: function () {
            return w
          },
          bufferToggle: function () {
            return T
          },
          bufferWhen: function () {
            return j
          },
          catchError: function () {
            return R
          },
          combineAll: function () {
            return V
          },
          combineLatest: function () {
            return U
          },
          concat: function () {
            return Z
          },
          concatAll: function () {
            return q.u
          },
          concatMap: function () {
            return Y
          },
          concatMapTo: function () {
            return G
          },
          count: function () {
            return K
          },
          debounce: function () {
            return X
          },
          debounceTime: function () {
            return nt
          },
          defaultIfEmpty: function () {
            return st
          },
          delay: function () {
            return ht
          },
          delayWhen: function () {
            return vt
          },
          dematerialize: function () {
            return _t
          },
          distinct: function () {
            return St
          },
          distinctUntilChanged: function () {
            return Mt
          },
          distinctUntilKeyChanged: function () {
            return Tt
          },
          elementAt: function () {
            return Ht
          },
          endWith: function () {
            return zt
          },
          every: function () {
            return Zt
          },
          exhaust: function () {
            return Yt
          },
          exhaustMap: function () {
            return $t
          },
          expand: function () {
            return ee
          },
          filter: function () {
            return Lt.h
          },
          finalize: function () {
            return ie
          },
          find: function () {
            return ue
          },
          findIndex: function () {
            return le
          },
          first: function () {
            return fe
          },
          flatMap: function () {
            return Q.VS
          },
          groupBy: function () {
            return de.v
          },
          ignoreElements: function () {
            return pe
          },
          isEmpty: function () {
            return ye
          },
          last: function () {
            return xe
          },
          map: function () {
            return Jt.U
          },
          mapTo: function () {
            return Se
          },
          materialize: function () {
            return Me
          },
          max: function () {
            return De
          },
          merge: function () {
            return Pe
          },
          mergeAll: function () {
            return We.J
          },
          mergeMap: function () {
            return Q.zg
          },
          mergeMapTo: function () {
            return Fe
          },
          mergeScan: function () {
            return Ve
          },
          min: function () {
            return Ue
          },
          multicast: function () {
            return Ze
          },
          observeOn: function () {
            return Qe.QV
          },
          onErrorResumeNext: function () {
            return Ye
          },
          pairwise: function () {
            return Je
          },
          partition: function () {
            return en
          },
          pluck: function () {
            return nn
          },
          publish: function () {
            return on
          },
          publishBehavior: function () {
            return un
          },
          publishLast: function () {
            return an
          },
          publishReplay: function () {
            return hn
          },
          race: function () {
            return dn
          },
          reduce: function () {
            return Oe
          },
          refCount: function () {
            return Cn.x
          },
          repeat: function () {
            return pn
          },
          repeatWhen: function () {
            return yn
          },
          retry: function () {
            return wn
          },
          retryWhen: function () {
            return xn
          },
          sample: function () {
            return Mn
          },
          sampleTime: function () {
            return Tn
          },
          scan: function () {
            return Te
          },
          sequenceEqual: function () {
            return On
          },
          share: function () {
            return Fn
          },
          shareReplay: function () {
            return Vn
          },
          single: function () {
            return Bn
          },
          skip: function () {
            return zn
          },
          skipLast: function () {
            return Qn
          },
          skipUntil: function () {
            return Kn
          },
          skipWhile: function () {
            return Xn
          },
          startWith: function () {
            return nr
          },
          subscribeOn: function () {
            return sr
          },
          switchAll: function () {
            return hr
          },
          switchMap: function () {
            return cr
          },
          switchMapTo: function () {
            return fr
          },
          take: function () {
            return Ft
          },
          takeLast: function () {
            return we
          },
          takeUntil: function () {
            return dr
          },
          takeWhile: function () {
            return vr
          },
          tap: function () {
            return _r
          },
          throttle: function () {
            return Er
          },
          throttleTime: function () {
            return Ir
          },
          throwIfEmpty: function () {
            return Ot
          },
          timeInterval: function () {
            return jr
          },
          timeout: function () {
            return Vr
          },
          timeoutWith: function () {
            return Rr
          },
          timestamp: function () {
            return Br
          },
          toArray: function () {
            return zr
          },
          window: function () {
            return Zr
          },
          windowCount: function () {
            return Yr
          },
          windowTime: function () {
            return Jr
          },
          windowToggle: function () {
            return ii
          },
          windowWhen: function () {
            return ui
          },
          withLatestFrom: function () {
            return li
          },
          zip: function () {
            return pi
          },
          zipAll: function () {
            return bi
          },
        })
        let r = n(71108);
          var i = n(19957)
        function o (t) {
          return function (e) {
            return e.lift(new s(t))
          }
        }
        var s = (function () {
            function t (t) {
              this.durationSelector = t
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new u(t, this.durationSelector))
              }),
              t
            )
          })();
          var u = (function (t) {
            function e(e, n) {
              var r = t.call(this, e) || this
              return (r.durationSelector = n), (r.hasValue = !1), r
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                if (((this.value = t), (this.hasValue = !0), !this.throttled)) {
                  var e = void 0
                  try {
                    e = (0, this.durationSelector)(t)
                  } catch (r) {
                    return this.destination.error(r)
                  }
                  var n = (0, i.ft)(e, new i.IY(this))
                  !n || n.closed
                    ? this.clearThrottle()
                    : this.add((this.throttled = n))
                }
              }),
              (e.prototype.clearThrottle = function () {
                var t = this,
                  e = t.value,
                  n = t.hasValue,
                  r = t.throttled
                r &&
                  (this.remove(r), (this.throttled = void 0), r.unsubscribe()),
                  n &&
                    ((this.value = void 0),
                    (this.hasValue = !1),
                    this.destination.next(e))
              }),
              (e.prototype.notifyNext = function () {
                this.clearThrottle()
              }),
              (e.prototype.notifyComplete = function () {
                this.clearThrottle()
              }),
              e
            )
          })(i.Ds);
          var c = n(10972);
          var a = n(14199)
        function l (t, e) {
          return (
            void 0 === e && (e = c.P),
            o(function () {
              return (0, a.H)(t, e)
            })
          )
        }
        function h (t) {
          return function (e) {
            return e.lift(new f(t))
          }
        }
        var f = (function () {
            function t (t) {
              this.closingNotifier = t
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new d(t, this.closingNotifier))
              }),
              t
            )
          })();
          var d = (function (t) {
            function e(e, n) {
              var r = t.call(this, e) || this
              return (r.buffer = []), r.add((0, i.ft)(n, new i.IY(r))), r
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                this.buffer.push(t)
              }),
              (e.prototype.notifyNext = function () {
                var t = this.buffer
                ;(this.buffer = []), this.destination.next(t)
              }),
              e
            )
          })(i.Ds);
          var p = n(61260)
        function b (t, e) {
          return (
            void 0 === e && (e = null),
            function (n) {
              return n.lift(new v(t, e))
            }
          )
        }
        var v = (function () {
            function t (t, e) {
              ;(this.bufferSize = t),
              (this.startBufferEvery = e),
              (this.subscriberClass = e && t !== e ? g : y)
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(
                  new this.subscriberClass(
                    t,
                    this.bufferSize,
                    this.startBufferEvery
                  ),
                )
              }),
              t
            )
          })();
          var y = (function (t) {
            function e(e, n) {
              var r = t.call(this, e) || this
              return (r.bufferSize = n), (r.buffer = []), r
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                var e = this.buffer
                e.push(t),
                  e.length == this.bufferSize &&
                    (this.destination.next(e), (this.buffer = []))
              }),
              (e.prototype._complete = function () {
                var e = this.buffer
                e.length > 0 && this.destination.next(e),
                  t.prototype._complete.call(this)
              }),
              e
            )
          })(p.L);
          var g = (function (t) {
            function e(e, n, r) {
              var i = t.call(this, e) || this
              return (
                (i.bufferSize = n),
                (i.startBufferEvery = r),
                (i.buffers = []),
                (i.count = 0),
                i
              )
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                var e = this,
                  n = e.bufferSize,
                  r = e.startBufferEvery,
                  i = e.buffers,
                  o = e.count
                this.count++, o % r === 0 && i.push([])
                for (var s = i.length; s--; ) {
                  var u = i[s]
                  u.push(t),
                    u.length === n && (i.splice(s, 1), this.destination.next(u))
                }
              }),
              (e.prototype._complete = function () {
                for (
                  var e = this.buffers, n = this.destination;
                  e.length > 0;

                ) {
                  var r = e.shift()
                  r.length > 0 && n.next(r)
                }
                t.prototype._complete.call(this)
              }),
              e
            )
          })(p.L);
          var m = n(71905)
        function w (t) {
          let e = arguments.length;
            var n = c.P
          ;(0, m.K)(arguments[arguments.length - 1]) &&
            ((n = arguments[arguments.length - 1]), e--)
          let r = null
          e >= 2 && (r = arguments[1])
          let i = Number.POSITIVE_INFINITY
          return (
            e >= 3 && (i = arguments[2]),
            function (e) {
              return e.lift(new _(t, r, i, n))
            }
          )
        }
        var _ = (function () {
            function t (t, e, n, r) {
              ;(this.bufferTimeSpan = t),
              (this.bufferCreationInterval = e),
              (this.maxBufferSize = n),
              (this.scheduler = r)
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(
                  new x(
                    t,
                    this.bufferTimeSpan,
                    this.bufferCreationInterval,
                    this.maxBufferSize,
                    this.scheduler
                  ),
                )
              }),
              t
            )
          })();
          var k = (function () {
            return function () {
              this.buffer = []
            }
          })();
          var x = (function (t) {
            function e (e, n, r, i, o) {
              let s = t.call(this, e) || this
              ;(s.bufferTimeSpan = n),
              (s.bufferCreationInterval = r),
              (s.maxBufferSize = i),
              (s.scheduler = o),
              (s.contexts = [])
              let u = s.openContext()
              if (((s.timespanOnly = r == null || r < 0), s.timespanOnly)) {
                let c = { subscriber: s, context: u, bufferTimeSpan: n }
                s.add((u.closeAction = o.schedule(S, n, c)))
              } else {
                let a = { subscriber: s, context: u };
                  var l = {
                    bufferTimeSpan: n,
                    bufferCreationInterval: r,
                    subscriber: s,
                    scheduler: o
                  }
                s.add((u.closeAction = o.schedule(C, n, a))),
                s.add(o.schedule(E, r, l))
              }
              return s
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                for (
                  var e, n = this.contexts, r = n.length, i = 0;
                  i < r;
                  i++
                ) {
                  let o = n[i];
                    var s = o.buffer
                  s.push(t), s.length == this.maxBufferSize && (e = o)
                }
                e && this.onBufferFull(e)
              }),
              (e.prototype._error = function (e) {
                ;(this.contexts.length = 0), t.prototype._error.call(this, e)
              }),
              (e.prototype._complete = function () {
                for (
                  let e = this.contexts, n = this.destination;
                  e.length > 0;

                ) {
                  let r = e.shift()
                  n.next(r.buffer)
                }
                t.prototype._complete.call(this)
              }),
              (e.prototype._unsubscribe = function () {
                this.contexts = null
              }),
              (e.prototype.onBufferFull = function (t) {
                this.closeContext(t)
                let e = t.closeAction
                if (
                  (e.unsubscribe(),
                  this.remove(e),
                  !this.closed && this.timespanOnly)
                ) {
                  t = this.openContext()
                  let n = this.bufferTimeSpan;
                    var r = { subscriber: this, context: t, bufferTimeSpan: n }
                  this.add((t.closeAction = this.scheduler.schedule(S, n, r)))
                }
              }),
              (e.prototype.openContext = function () {
                let t = new k()
                return this.contexts.push(t), t
              }),
              (e.prototype.closeContext = function (t) {
                this.destination.next(t.buffer)
                let e = this.contexts
                ;(e ? e.indexOf(t) : -1) >= 0 && e.splice(e.indexOf(t), 1)
              }),
              e
            )
          })(p.L)
        function S (t) {
          let e = t.subscriber;
            var n = t.context
          n && e.closeContext(n),
          e.closed ||
              ((t.context = e.openContext()),
              (t.context.closeAction = this.schedule(t, t.bufferTimeSpan)))
        }
        function E (t) {
          let e = t.bufferCreationInterval;
            var n = t.bufferTimeSpan;
            var r = t.subscriber;
            var i = t.scheduler;
            var o = r.openContext()
          r.closed ||
            (r.add(
              (o.closeAction = i.schedule(C, n, { subscriber: r, context: o }))
            ),
            this.schedule(t, e))
        }
        function C (t) {
          let e = t.subscriber;
            var n = t.context
          e.closeContext(n)
        }
        let M = n(78e3);
          var I = n(19900);
          var N = n(88666)
        function T (t, e) {
          return function (n) {
            return n.lift(new A(t, e))
          }
        }
        var A = (function () {
            function t (t, e) {
              ;(this.openings = t), (this.closingSelector = e)
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(
                  new L(t, this.openings, this.closingSelector)
                )
              }),
              t
            )
          })();
          var L = (function (t) {
            function e (e, n, r) {
              let i = t.call(this, e) || this
              return (
                (i.closingSelector = r),
                (i.contexts = []),
                i.add((0, I.D)(i, n)),
                i
              )
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                for (let e = this.contexts, n = e.length, r = 0; r < n; r++)
                  {e[r].buffer.push(t)}
              }),
              (e.prototype._error = function (e) {
                for (let n = this.contexts; n.length > 0;) {
                  let r = n.shift()
                  r.subscription.unsubscribe(),
                  (r.buffer = null),
                  (r.subscription = null)
                }
                ;(this.contexts = null), t.prototype._error.call(this, e)
              }),
              (e.prototype._complete = function () {
                for (let e = this.contexts; e.length > 0;) {
                  let n = e.shift()
                  this.destination.next(n.buffer),
                  n.subscription.unsubscribe(),
                  (n.buffer = null),
                  (n.subscription = null)
                }
                ;(this.contexts = null), t.prototype._complete.call(this)
              }),
              (e.prototype.notifyNext = function (t, e) {
                t ? this.closeBuffer(t) : this.openBuffer(e)
              }),
              (e.prototype.notifyComplete = function (t) {
                this.closeBuffer(t.context)
              }),
              (e.prototype.openBuffer = function (t) {
                try {
                  let e = this.closingSelector.call(this, t)
                  e && this.trySubscribe(e)
                } catch (n) {
                  this._error(n)
                }
              }),
              (e.prototype.closeBuffer = function (t) {
                let e = this.contexts
                if (e && t) {
                  let n = t.buffer;
                    var r = t.subscription
                  this.destination.next(n),
                  e.splice(e.indexOf(t), 1),
                  this.remove(r),
                  r.unsubscribe()
                }
              }),
              (e.prototype.trySubscribe = function (t) {
                let e = this.contexts;
                  var n = new M.w();
                  var r = { buffer: [], subscription: n }
                e.push(r)
                let i = (0, I.D)(this, t, r)
                !i || i.closed
                  ? this.closeBuffer(r)
                  : ((i.context = r), this.add(i), n.add(i))
              }),
              e
            )
          })(N.L)
        function j (t) {
          return function (e) {
            return e.lift(new O(t))
          }
        }
        var O = (function () {
            function t (t) {
              this.closingSelector = t
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new D(t, this.closingSelector))
              }),
              t
            )
          })();
          var D = (function (t) {
            function e (e, n) {
              let r = t.call(this, e) || this
              return (
                (r.closingSelector = n), (r.subscribing = !1), r.openBuffer(), r
              )
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                this.buffer.push(t)
              }),
              (e.prototype._complete = function () {
                let e = this.buffer
                e && this.destination.next(e), t.prototype._complete.call(this)
              }),
              (e.prototype._unsubscribe = function () {
                ;(this.buffer = void 0), (this.subscribing = !1)
              }),
              (e.prototype.notifyNext = function () {
                this.openBuffer()
              }),
              (e.prototype.notifyComplete = function () {
                this.subscribing ? this.complete() : this.openBuffer()
              }),
              (e.prototype.openBuffer = function () {
                let t = this.closingSubscription
                t && (this.remove(t), t.unsubscribe())
                let e;
                  var n = this.buffer
                this.buffer && this.destination.next(n), (this.buffer = [])
                try {
                  e = (0, this.closingSelector)()
                } catch (r) {
                  return this.error(r)
                }
                ;(t = new M.w()),
                (this.closingSubscription = t),
                this.add(t),
                (this.subscribing = !0),
                t.add((0, i.ft)(e, new i.IY(this))),
                (this.subscribing = !1)
              }),
              e
            )
          })(i.Ds)
        function R (t) {
          return function (e) {
            let n = new P(t);
              var r = e.lift(n)
            return (n.caught = r)
          }
        }
        var P = (function () {
            function t (t) {
              this.selector = t
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new W(t, this.selector, this.caught))
              }),
              t
            )
          })();
          var W = (function (t) {
            function e(e, n, r) {
              var i = t.call(this, e) || this
              return (i.selector = n), (i.caught = r), i
            }
            return (
              r.ZT(e, t),
              (e.prototype.error = function (e) {
                if (!this.isStopped) {
                  var n = void 0
                  try {
                    n = this.selector(e, this.caught)
                  } catch (s) {
                    return void t.prototype.error.call(this, s)
                  }
                  this._unsubscribeAndRecycle()
                  var r = new i.IY(this)
                  this.add(r)
                  var o = (0, i.ft)(n, r)
                  o !== r && this.add(o)
                }
              }),
              e
            )
          })(i.Ds);
          var F = n(75750)
        function V (t) {
          return function (e) {
            return e.lift(new F.Ms(t))
          }
        }
        let B = n(24465);
          var H = n(36736)
        function U () {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
          let n = null
          return (
            typeof t[t.length - 1] === 'function' && (n = t.pop()),
            t.length === 1 && (0, B.k)(t[0]) && (t = t[0].slice()),
            function (e) {
              return e.lift.call((0, H.D)([e].concat(t)), new F.Ms(n))
            }
          )
        }
        let z = n(51038)
        function Z () {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
          return function (e) {
            return e.lift.call(z.z.apply(void 0, [e].concat(t)))
          }
        }
        var q = n(12996);
          var Q = n(36414)
        function Y (t, e) {
          return (0, Q.zg)(t, e, 1)
        }
        function G (t, e) {
          return Y(function () {
            return t
          }, e)
        }
        function K (t) {
          return function (e) {
            return e.lift(new J(t, e))
          }
        }
        var J = (function () {
            function t (t, e) {
              ;(this.predicate = t), (this.source = e)
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new $(t, this.predicate, this.source))
              }),
              t
            )
          })();
          var $ = (function (t) {
            function e (e, n, r) {
              let i = t.call(this, e) || this
              return (
                (i.predicate = n),
                (i.source = r),
                (i.count = 0),
                (i.index = 0),
                i
              )
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                this.predicate ? this._tryPredicate(t) : this.count++
              }),
              (e.prototype._tryPredicate = function (t) {
                let e
                try {
                  e = this.predicate(t, this.index++, this.source)
                } catch (n) {
                  return void this.destination.error(n)
                }
                e && this.count++
              }),
              (e.prototype._complete = function () {
                this.destination.next(this.count), this.destination.complete()
              }),
              e
            )
          })(p.L)
        function X (t) {
          return function (e) {
            return e.lift(new tt(t))
          }
        }
        var tt = (function () {
            function t (t) {
              this.durationSelector = t
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new et(t, this.durationSelector))
              }),
              t
            )
          })();
          var et = (function (t) {
            function e (e, n) {
              let r = t.call(this, e) || this
              return (r.durationSelector = n), (r.hasValue = !1), r
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                try {
                  let e = this.durationSelector.call(this, t)
                  e && this._tryNext(t, e)
                } catch (n) {
                  this.destination.error(n)
                }
              }),
              (e.prototype._complete = function () {
                this.emitValue(), this.destination.complete()
              }),
              (e.prototype._tryNext = function (t, e) {
                let n = this.durationSubscription
                ;(this.value = t),
                (this.hasValue = !0),
                n && (n.unsubscribe(), this.remove(n)),
                (n = (0, i.ft)(e, new i.IY(this))) &&
                    !n.closed &&
                    this.add((this.durationSubscription = n))
              }),
              (e.prototype.notifyNext = function () {
                this.emitValue()
              }),
              (e.prototype.notifyComplete = function () {
                this.emitValue()
              }),
              (e.prototype.emitValue = function () {
                if (this.hasValue) {
                  let e = this.value;
                    var n = this.durationSubscription
                  n &&
                    ((this.durationSubscription = void 0),
                    n.unsubscribe(),
                    this.remove(n)),
                  (this.value = void 0),
                  (this.hasValue = !1),
                  t.prototype._next.call(this, e)
                }
              }),
              e
            )
          })(i.Ds)
        function nt (t, e) {
          return (
            void 0 === e && (e = c.P),
            function (n) {
              return n.lift(new rt(t, e))
            }
          )
        }
        var rt = (function () {
            function t (t, e) {
              ;(this.dueTime = t), (this.scheduler = e)
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new it(t, this.dueTime, this.scheduler))
              }),
              t
            )
          })();
          var it = (function (t) {
            function e (e, n, r) {
              let i = t.call(this, e) || this
              return (
                (i.dueTime = n),
                (i.scheduler = r),
                (i.debouncedSubscription = null),
                (i.lastValue = null),
                (i.hasValue = !1),
                i
              )
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                this.clearDebounce(),
                (this.lastValue = t),
                (this.hasValue = !0),
                this.add(
                  (this.debouncedSubscription = this.scheduler.schedule(
                    ot,
                    this.dueTime,
                    this,
                  ))
                  )
              }),
              (e.prototype._complete = function () {
                this.debouncedNext(), this.destination.complete()
              }),
              (e.prototype.debouncedNext = function () {
                if ((this.clearDebounce(), this.hasValue)) {
                  let t = this.lastValue
                  ;(this.lastValue = null),
                  (this.hasValue = !1),
                  this.destination.next(t)
                }
              }),
              (e.prototype.clearDebounce = function () {
                let t = this.debouncedSubscription
                t !== null &&
                  (this.remove(t),
                  t.unsubscribe(),
                  (this.debouncedSubscription = null))
              }),
              e
            )
          })(p.L)
        function ot (t) {
          t.debouncedNext()
        }
        function st (t) {
          return (
            void 0 === t && (t = null),
            function (e) {
              return e.lift(new ut(t))
            }
          )
        }
        var ut = (function () {
            function t (t) {
              this.defaultValue = t
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new ct(t, this.defaultValue))
              }),
              t
            )
          })();
          var ct = (function (t) {
            function e (e, n) {
              let r = t.call(this, e) || this
              return (r.defaultValue = n), (r.isEmpty = !0), r
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                ;(this.isEmpty = !1), this.destination.next(t)
              }),
              (e.prototype._complete = function () {
                this.isEmpty && this.destination.next(this.defaultValue),
                this.destination.complete()
              }),
              e
            )
          })(p.L)
        function at (t) {
          return t instanceof Date && !isNaN(+t)
        }
        let lt = n(12841)
        function ht (t, e) {
          void 0 === e && (e = c.P)
          let n = at(t) ? +t - e.now() : Math.abs(t)
          return function (t) {
            return t.lift(new ft(n, e))
          }
        }
        var ft = (function () {
            function t (t, e) {
              ;(this.delay = t), (this.scheduler = e)
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new dt(t, this.delay, this.scheduler))
              }),
              t
            )
          })();
          var dt = (function (t) {
            function e(e, n, r) {
              var i = t.call(this, e) || this
              return (
                (i.delay = n),
                (i.scheduler = r),
                (i.queue = []),
                (i.active = !1),
                (i.errored = !1),
                i
              )
            }
            return (
              r.ZT(e, t),
              (e.dispatch = function (t) {
                for (
                  var e = t.source,
                    n = e.queue,
                    r = t.scheduler,
                    i = t.destination;
                  n.length > 0 && n[0].time - r.now() <= 0;

                )
                  n.shift().notification.observe(i)
                if (n.length > 0) {
                  var o = Math.max(0, n[0].time - r.now())
                  this.schedule(t, o)
                } else this.unsubscribe(), (e.active = !1)
              }),
              (e.prototype._schedule = function (t) {
                ;(this.active = !0),
                  this.destination.add(
                    t.schedule(e.dispatch, this.delay, {
                      source: this,
                      destination: this.destination,
                      scheduler: t,
                    }),
                  )
              }),
              (e.prototype.scheduleNotification = function (t) {
                if (!0 !== this.errored) {
                  var e = this.scheduler,
                    n = new pt(e.now() + this.delay, t)
                  this.queue.push(n), !1 === this.active && this._schedule(e)
                }
              }),
              (e.prototype._next = function (t) {
                this.scheduleNotification(lt.P.createNext(t))
              }),
              (e.prototype._error = function (t) {
                ;(this.errored = !0),
                  (this.queue = []),
                  this.destination.error(t),
                  this.unsubscribe()
              }),
              (e.prototype._complete = function () {
                this.scheduleNotification(lt.P.createComplete()),
                  this.unsubscribe()
              }),
              e
            )
          })(p.L);
          var pt = (function () {
            return function (t, e) {
              ;(this.time = t), (this.notification = e)
            }
          })();
          var bt = n(32870)
        function vt (t, e) {
          return e
            ? function (n) {
              return new mt(n, e).lift(new yt(t))
            }
            : function (e) {
              return e.lift(new yt(t))
            }
        }
        var yt = (function () {
            function t (t) {
              this.delayDurationSelector = t
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new gt(t, this.delayDurationSelector))
              }),
              t
            )
          })();
          var gt = (function (t) {
            function e(e, n) {
              var r = t.call(this, e) || this
              return (
                (r.delayDurationSelector = n),
                (r.completed = !1),
                (r.delayNotifierSubscriptions = []),
                (r.index = 0),
                r
              )
            }
            return (
              r.ZT(e, t),
              (e.prototype.notifyNext = function (t, e, n, r, i) {
                this.destination.next(t),
                  this.removeSubscription(i),
                  this.tryComplete()
              }),
              (e.prototype.notifyError = function (t, e) {
                this._error(t)
              }),
              (e.prototype.notifyComplete = function (t) {
                var e = this.removeSubscription(t)
                e && this.destination.next(e), this.tryComplete()
              }),
              (e.prototype._next = function (t) {
                var e = this.index++
                try {
                  var n = this.delayDurationSelector(t, e)
                  n && this.tryDelay(n, t)
                } catch (r) {
                  this.destination.error(r)
                }
              }),
              (e.prototype._complete = function () {
                ;(this.completed = !0), this.tryComplete(), this.unsubscribe()
              }),
              (e.prototype.removeSubscription = function (t) {
                t.unsubscribe()
                var e = this.delayNotifierSubscriptions.indexOf(t)
                return (
                  -1 !== e && this.delayNotifierSubscriptions.splice(e, 1),
                  t.outerValue
                )
              }),
              (e.prototype.tryDelay = function (t, e) {
                var n = (0, I.D)(this, t, e)
                n &&
                  !n.closed &&
                  (this.destination.add(n),
                  this.delayNotifierSubscriptions.push(n))
              }),
              (e.prototype.tryComplete = function () {
                this.completed &&
                  0 === this.delayNotifierSubscriptions.length &&
                  this.destination.complete()
              }),
              e
            )
          })(N.L);
          var mt = (function (t) {
            function e(e, n) {
              var r = t.call(this) || this
              return (r.source = e), (r.subscriptionDelay = n), r
            }
            return (
              r.ZT(e, t),
              (e.prototype._subscribe = function (t) {
                this.subscriptionDelay.subscribe(new wt(t, this.source))
              }),
              e
            )
          })(bt.y);
          var wt = (function (t) {
            function e (e, n) {
              let r = t.call(this) || this
              return (
                (r.parent = e), (r.source = n), (r.sourceSubscribed = !1), r
              )
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                this.subscribeToSource()
              }),
              (e.prototype._error = function (t) {
                this.unsubscribe(), this.parent.error(t)
              }),
              (e.prototype._complete = function () {
                this.unsubscribe(), this.subscribeToSource()
              }),
              (e.prototype.subscribeToSource = function () {
                this.sourceSubscribed ||
                  ((this.sourceSubscribed = !0),
                  this.unsubscribe(),
                  this.source.subscribe(this.parent))
              }),
              e
            )
          })(p.L)
        function _t () {
          return function (t) {
            return t.lift(new kt())
          }
        }
        var kt = (function () {
            function t () {}
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new xt(t))
              }),
              t
            )
          })();
          var xt = (function (t) {
            function e (e) {
              return t.call(this, e) || this
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                t.observe(this.destination)
              }),
              e
            )
          })(p.L)
        function St (t, e) {
          return function (n) {
            return n.lift(new Et(t, e))
          }
        }
        var Et = (function () {
            function t (t, e) {
              ;(this.keySelector = t), (this.flushes = e)
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new Ct(t, this.keySelector, this.flushes))
              }),
              t
            )
          })();
          var Ct = (function (t) {
            function e (e, n, r) {
              let o = t.call(this, e) || this
              return (
                (o.keySelector = n),
                (o.values = new Set()),
                r && o.add((0, i.ft)(r, new i.IY(o))),
                o
              )
            }
            return (
              r.ZT(e, t),
              (e.prototype.notifyNext = function () {
                this.values.clear()
              }),
              (e.prototype.notifyError = function (t) {
                this._error(t)
              }),
              (e.prototype._next = function (t) {
                this.keySelector
                  ? this._useKeySelector(t)
                  : this._finalizeNext(t, t)
              }),
              (e.prototype._useKeySelector = function (t) {
                let e;
                  var n = this.destination
                try {
                  e = this.keySelector(t)
                } catch (r) {
                  return void n.error(r)
                }
                this._finalizeNext(e, t)
              }),
              (e.prototype._finalizeNext = function (t, e) {
                let n = this.values
                n.has(t) || (n.add(t), this.destination.next(e))
              }),
              e
            )
          })(i.Ds)
        function Mt (t, e) {
          return function (n) {
            return n.lift(new It(t, e))
          }
        }
        var It = (function () {
            function t (t, e) {
              ;(this.compare = t), (this.keySelector = e)
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new Nt(t, this.compare, this.keySelector))
              }),
              t
            )
          })();
          var Nt = (function (t) {
            function e (e, n, r) {
              let i = t.call(this, e) || this
              return (
                (i.keySelector = r),
                (i.hasKey = !1),
                typeof n === 'function' && (i.compare = n),
                i
              )
            }
            return (
              r.ZT(e, t),
              (e.prototype.compare = function (t, e) {
                return t === e
              }),
              (e.prototype._next = function (t) {
                let e
                try {
                  let n = this.keySelector
                  e = n ? n(t) : t
                } catch (i) {
                  return this.destination.error(i)
                }
                let r = !1
                if (this.hasKey)
                  {try {
                    r = (0, this.compare)(this.key, e)
                  } catch (i) {
                    return this.destination.error(i)
                  }}
                else this.hasKey = !0
                r || ((this.key = e), this.destination.next(t))
              }),
              e
            )
          })(p.L)
        function Tt (t, e) {
          return Mt(function (n, r) {
            return e ? e(n[t], r[t]) : n[t] === r[t]
          })
        }
        var At = n(52319);
          var Lt = n(57535);
          var jt = n(63e3)
        function Ot (t) {
          return (
            void 0 === t && (t = Pt),
            function (e) {
              return e.lift(new Dt(t))
            }
          )
        }
        var Dt = (function () {
            function t (t) {
              this.errorFactory = t
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new Rt(t, this.errorFactory))
              }),
              t
            )
          })();
          var Rt = (function (t) {
            function e (e, n) {
              let r = t.call(this, e) || this
              return (r.errorFactory = n), (r.hasValue = !1), r
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                ;(this.hasValue = !0), this.destination.next(t)
              }),
              (e.prototype._complete = function () {
                if (this.hasValue) return this.destination.complete()
                let t = void 0
                try {
                  t = this.errorFactory()
                } catch (e) {
                  t = e
                }
                this.destination.error(t)
              }),
              e
            )
          })(p.L)
        function Pt () {
          return new jt.K()
        }
        let Wt = n(10245)
        function Ft (t) {
          return function (e) {
            return t === 0 ? (0, Wt.c)() : e.lift(new Vt(t))
          }
        }
        var Vt = (function () {
            function t (t) {
              if (((this.total = t), this.total < 0)) throw new At.W()
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new Bt(t, this.total))
              }),
              t
            )
          })();
          var Bt = (function (t) {
            function e (e, n) {
              let r = t.call(this, e) || this
              return (r.total = n), (r.count = 0), r
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                let e = this.total;
                  var n = ++this.count
                n <= e &&
                  (this.destination.next(t),
                  n === e && (this.destination.complete(), this.unsubscribe()))
              }),
              e
            )
          })(p.L)
        function Ht (t, e) {
          if (t < 0) throw new At.W()
          let n = arguments.length >= 2
          return function (r) {
            return r.pipe(
              (0, Lt.h)(function (e, n) {
                return n === t
              }),
              Ft(1),
              n
                ? st(e)
                : Ot(function () {
                  return new At.W()
                })
            )
          }
        }
        let Ut = n(5695)
        function zt () {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
          return function (e) {
            return (0, z.z)(e, Ut.of.apply(void 0, t))
          }
        }
        function Zt (t, e) {
          return function (n) {
            return n.lift(new qt(t, e, n))
          }
        }
        var qt = (function () {
            function t (t, e, n) {
              ;(this.predicate = t), (this.thisArg = e), (this.source = n)
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(
                  new Qt(t, this.predicate, this.thisArg, this.source)
                )
              }),
              t
            )
          })();
          var Qt = (function (t) {
            function e (e, n, r, i) {
              let o = t.call(this, e) || this
              return (
                (o.predicate = n),
                (o.thisArg = r),
                (o.source = i),
                (o.index = 0),
                (o.thisArg = r || o),
                o
              )
            }
            return (
              r.ZT(e, t),
              (e.prototype.notifyComplete = function (t) {
                this.destination.next(t), this.destination.complete()
              }),
              (e.prototype._next = function (t) {
                let e = !1
                try {
                  e = this.predicate.call(
                    this.thisArg,
                    t,
                    this.index++,
                    this.source
                  )
                } catch (n) {
                  return void this.destination.error(n)
                }
                e || this.notifyComplete(!1)
              }),
              (e.prototype._complete = function () {
                this.notifyComplete(!0)
              }),
              e
            )
          })(p.L)
        function Yt () {
          return function (t) {
            return t.lift(new Gt())
          }
        }
        var Gt = (function () {
            function t () {}
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new Kt(t))
              }),
              t
            )
          })();
          var Kt = (function (t) {
            function e(e) {
              var n = t.call(this, e) || this
              return (n.hasCompleted = !1), (n.hasSubscription = !1), n
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                this.hasSubscription ||
                  ((this.hasSubscription = !0),
                  this.add((0, i.ft)(t, new i.IY(this))))
              }),
              (e.prototype._complete = function () {
                ;(this.hasCompleted = !0),
                  this.hasSubscription || this.destination.complete()
              }),
              (e.prototype.notifyComplete = function () {
                ;(this.hasSubscription = !1),
                  this.hasCompleted && this.destination.complete()
              }),
              e
            )
          })(i.Ds);
          var Jt = n(70840)
        function $t (t, e) {
          return e
            ? function (n) {
              return n.pipe(
                $t(function (n, r) {
                  return (0, H.D)(t(n, r)).pipe(
                    (0, Jt.U)(function (t, i) {
                      return e(n, t, r, i)
                    })
                    )
                })
                )
            }
            : function (e) {
              return e.lift(new Xt(t))
            }
        }
        var Xt = (function () {
            function t (t) {
              this.project = t
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new te(t, this.project))
              }),
              t
            )
          })();
          var te = (function (t) {
            function e (e, n) {
              let r = t.call(this, e) || this
              return (
                (r.project = n),
                (r.hasSubscription = !1),
                (r.hasCompleted = !1),
                (r.index = 0),
                r
              )
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                this.hasSubscription || this.tryNext(t)
              }),
              (e.prototype.tryNext = function (t) {
                let e;
                  var n = this.index++
                try {
                  e = this.project(t, n)
                } catch (r) {
                  return void this.destination.error(r)
                }
                ;(this.hasSubscription = !0), this._innerSub(e)
              }),
              (e.prototype._innerSub = function (t) {
                let e = new i.IY(this);
                  var n = this.destination
                n.add(e)
                let r = (0, i.ft)(t, e)
                r !== e && n.add(r)
              }),
              (e.prototype._complete = function () {
                ;(this.hasCompleted = !0),
                this.hasSubscription || this.destination.complete(),
                this.unsubscribe()
              }),
              (e.prototype.notifyNext = function (t) {
                this.destination.next(t)
              }),
              (e.prototype.notifyError = function (t) {
                this.destination.error(t)
              }),
              (e.prototype.notifyComplete = function () {
                ;(this.hasSubscription = !1),
                this.hasCompleted && this.destination.complete()
              }),
              e
            )
          })(i.Ds)
        function ee (t, e, n) {
          return (
            void 0 === e && (e = Number.POSITIVE_INFINITY),
            (e = (e || 0) < 1 ? Number.POSITIVE_INFINITY : e),
            function (r) {
              return r.lift(new ne(t, e, n))
            }
          )
        }
        var ne = (function () {
            function t (t, e, n) {
              ;(this.project = t), (this.concurrent = e), (this.scheduler = n)
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(
                  new re(t, this.project, this.concurrent, this.scheduler)
                )
              }),
              t
            )
          })();
          var re = (function (t) {
            function e (e, n, r, i) {
              let o = t.call(this, e) || this
              return (
                (o.project = n),
                (o.concurrent = r),
                (o.scheduler = i),
                (o.index = 0),
                (o.active = 0),
                (o.hasCompleted = !1),
                r < Number.POSITIVE_INFINITY && (o.buffer = []),
                o
              )
            }
            return (
              r.ZT(e, t),
              (e.dispatch = function (t) {
                let e = t.subscriber;
                  var n = t.result;
                  var r = t.value;
                  var i = t.index
                e.subscribeToProjection(n, r, i)
              }),
              (e.prototype._next = function (t) {
                let n = this.destination
                if (n.closed) this._complete()
                else {
                  let r = this.index++
                  if (this.active < this.concurrent) {
                    n.next(t)
                    try {
                      let i = (0, this.project)(t, r)
                      if (this.scheduler) {
                        let o = {
                          subscriber: this,
                          result: i,
                          value: t,
                          index: r
                        }
                        this.destination.add(
                          this.scheduler.schedule(e.dispatch, 0, o)
                        )
                      } else this.subscribeToProjection(i, t, r)
                    } catch (s) {
                      n.error(s)
                    }
                  } else this.buffer.push(t)
                }
              }),
              (e.prototype.subscribeToProjection = function (t, e, n) {
                this.active++,
                this.destination.add((0, i.ft)(t, new i.IY(this)))
              }),
              (e.prototype._complete = function () {
                ;(this.hasCompleted = !0),
                this.hasCompleted &&
                    this.active === 0 &&
                    this.destination.complete(),
                this.unsubscribe()
              }),
              (e.prototype.notifyNext = function (t) {
                this._next(t)
              }),
              (e.prototype.notifyComplete = function () {
                let t = this.buffer
                this.active--,
                t && t.length > 0 && this._next(t.shift()),
                this.hasCompleted &&
                    this.active === 0 &&
                    this.destination.complete()
              }),
              e
            )
          })(i.Ds)
        function ie (t) {
          return function (e) {
            return e.lift(new oe(t))
          }
        }
        var oe = (function () {
            function t (t) {
              this.callback = t
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new se(t, this.callback))
              }),
              t
            )
          })();
          var se = (function (t) {
            function e (e, n) {
              let r = t.call(this, e) || this
              return r.add(new M.w(n)), r
            }
            return r.ZT(e, t), e
          })(p.L)
        function ue (t, e) {
          if (typeof t !== 'function')
            {throw new TypeError('predicate is not a function')}
          return function (n) {
            return n.lift(new ce(t, n, !1, e))
          }
        }
        var ce = (function () {
            function t (t, e, n, r) {
              ;(this.predicate = t),
              (this.source = e),
              (this.yieldIndex = n),
              (this.thisArg = r)
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(
                  new ae(
                    t,
                    this.predicate,
                    this.source,
                    this.yieldIndex,
                    this.thisArg
                  ),
                )
              }),
              t
            )
          })();
          var ae = (function (t) {
            function e (e, n, r, i, o) {
              let s = t.call(this, e) || this
              return (
                (s.predicate = n),
                (s.source = r),
                (s.yieldIndex = i),
                (s.thisArg = o),
                (s.index = 0),
                s
              )
            }
            return (
              r.ZT(e, t),
              (e.prototype.notifyComplete = function (t) {
                let e = this.destination
                e.next(t), e.complete(), this.unsubscribe()
              }),
              (e.prototype._next = function (t) {
                let e = this.predicate;
                  var n = this.thisArg;
                  var r = this.index++
                try {
                  e.call(n || this, t, r, this.source) &&
                    this.notifyComplete(this.yieldIndex ? r : t)
                } catch (i) {
                  this.destination.error(i)
                }
              }),
              (e.prototype._complete = function () {
                this.notifyComplete(this.yieldIndex ? -1 : void 0)
              }),
              e
            )
          })(p.L)
        function le (t, e) {
          return function (n) {
            return n.lift(new ce(t, n, !0, e))
          }
        }
        let he = n(66220)
        function fe (t, e) {
          let n = arguments.length >= 2
          return function (r) {
            return r.pipe(
              t
                ? (0, Lt.h)(function (e, n) {
                    return t(e, n, r)
                  })
                : he.y,
              Ft(1),
              n
                ? st(e)
                : Ot(function () {
                  return new jt.K()
                })
            )
          }
        }
        var de = n(4208)
        function pe () {
          return function (t) {
            return t.lift(new be())
          }
        }
        var be = (function () {
            function t () {}
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new ve(t))
              }),
              t
            )
          })();
          var ve = (function (t) {
            function e () {
              return (t !== null && t.apply(this, arguments)) || this
            }
            return r.ZT(e, t), (e.prototype._next = function (t) {}), e
          })(p.L)
        function ye () {
          return function (t) {
            return t.lift(new ge())
          }
        }
        var ge = (function () {
            function t () {}
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new me(t))
              }),
              t
            )
          })();
          var me = (function (t) {
            function e (e) {
              return t.call(this, e) || this
            }
            return (
              r.ZT(e, t),
              (e.prototype.notifyComplete = function (t) {
                let e = this.destination
                e.next(t), e.complete()
              }),
              (e.prototype._next = function (t) {
                this.notifyComplete(!1)
              }),
              (e.prototype._complete = function () {
                this.notifyComplete(!0)
              }),
              e
            )
          })(p.L)
        function we (t) {
          return function (e) {
            return t === 0 ? (0, Wt.c)() : e.lift(new _e(t))
          }
        }
        var _e = (function () {
            function t (t) {
              if (((this.total = t), this.total < 0)) throw new At.W()
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new ke(t, this.total))
              }),
              t
            )
          })();
          var ke = (function (t) {
            function e (e, n) {
              let r = t.call(this, e) || this
              return (r.total = n), (r.ring = new Array()), (r.count = 0), r
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                let e = this.ring;
                  var n = this.total;
                  var r = this.count++
                e.length < n ? e.push(t) : (e[r % n] = t)
              }),
              (e.prototype._complete = function () {
                let t = this.destination;
                  var e = this.count
                if (e > 0)
                  {for (
                    var n = this.count >= this.total ? this.total : this.count,
                      r = this.ring,
                      i = 0;
                    i < n;
                    i++
                  ) {
                    var o = e++ % n
                    t.next(r[o])
                  }}
                t.complete()
              }),
              e
            )
          })(p.L)
        function xe (t, e) {
          let n = arguments.length >= 2
          return function (r) {
            return r.pipe(
              t
                ? (0, Lt.h)(function (e, n) {
                    return t(e, n, r)
                  })
                : he.y,
              we(1),
              n
                ? st(e)
                : Ot(function () {
                  return new jt.K()
                })
            )
          }
        }
        function Se (t) {
          return function (e) {
            return e.lift(new Ee(t))
          }
        }
        var Ee = (function () {
            function t (t) {
              this.value = t
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new Ce(t, this.value))
              }),
              t
            )
          })();
          var Ce = (function (t) {
            function e (e, n) {
              let r = t.call(this, e) || this
              return (r.value = n), r
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                this.destination.next(this.value)
              }),
              e
            )
          })(p.L)
        function Me () {
          return function (t) {
            return t.lift(new Ie())
          }
        }
        var Ie = (function () {
            function t () {}
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new Ne(t))
              }),
              t
            )
          })();
          var Ne = (function (t) {
            function e (e) {
              return t.call(this, e) || this
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                this.destination.next(lt.P.createNext(t))
              }),
              (e.prototype._error = function (t) {
                let e = this.destination
                e.next(lt.P.createError(t)), e.complete()
              }),
              (e.prototype._complete = function () {
                let t = this.destination
                t.next(lt.P.createComplete()), t.complete()
              }),
              e
            )
          })(p.L)
        function Te (t, e) {
          let n = !1
          return (
            arguments.length >= 2 && (n = !0),
            function (r) {
              return r.lift(new Ae(t, e, n))
            }
          )
        }
        var Ae = (function () {
            function t (t, e, n) {
              void 0 === n && (n = !1),
              (this.accumulator = t),
              (this.seed = e),
              (this.hasSeed = n)
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(
                  new Le(t, this.accumulator, this.seed, this.hasSeed)
                )
              }),
              t
            )
          })();
          var Le = (function (t) {
            function e(e, n, r, i) {
              var o = t.call(this, e) || this
              return (
                (o.accumulator = n),
                (o._seed = r),
                (o.hasSeed = i),
                (o.index = 0),
                o
              )
            }
            return (
              r.ZT(e, t),
              Object.defineProperty(e.prototype, 'seed', {
                get: function () {
                  return this._seed
                },
                set: function (t) {
                  ;(this.hasSeed = !0), (this._seed = t)
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype._next = function (t) {
                if (this.hasSeed) return this._tryNext(t)
                ;(this.seed = t), this.destination.next(t)
              }),
              (e.prototype._tryNext = function (t) {
                var e,
                  n = this.index++
                try {
                  e = this.accumulator(this.seed, t, n)
                } catch (r) {
                  this.destination.error(r)
                }
                ;(this.seed = e), this.destination.next(e)
              }),
              e
            )
          })(p.L);
          var je = n(93250)
        function Oe (t, e) {
          return arguments.length >= 2
            ? function (n) {
              return (0, je.z)(Te(t, e), we(1), st(e))(n)
            }
            : function (e) {
              return (0, je.z)(
                Te(function (e, n, r) {
                  return t(e, n, r + 1)
                }),
                we(1)
                )(e)
            }
        }
        function De (t) {
          return Oe(
            typeof t === 'function'
              ? function (e, n) {
                return t(e, n) > 0 ? e : n
              }
              : function (t, e) {
                return t > e ? t : e
              },
          )
        }
        let Re = n(70195)
        function Pe () {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
          return function (e) {
            return e.lift.call(Re.T.apply(void 0, [e].concat(t)))
          }
        }
        var We = n(4389)
        function Fe (t, e, n) {
          return (
            void 0 === n && (n = Number.POSITIVE_INFINITY),
            typeof e === 'function'
              ? (0, Q.zg)(
                  function () {
                    return t
                  },
                  e,
                  n
                )
              : (typeof e === 'number' && (n = e),
                (0, Q.zg)(function () {
                  return t
                }, n))
          )
        }
        function Ve (t, e, n) {
          return (
            void 0 === n && (n = Number.POSITIVE_INFINITY),
            function (r) {
              return r.lift(new Be(t, e, n))
            }
          )
        }
        var Be = (function () {
            function t (t, e, n) {
              ;(this.accumulator = t), (this.seed = e), (this.concurrent = n)
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(
                  new He(t, this.accumulator, this.seed, this.concurrent)
                )
              }),
              t
            )
          })();
          var He = (function (t) {
            function e (e, n, r, i) {
              let o = t.call(this, e) || this
              return (
                (o.accumulator = n),
                (o.acc = r),
                (o.concurrent = i),
                (o.hasValue = !1),
                (o.hasCompleted = !1),
                (o.buffer = []),
                (o.active = 0),
                (o.index = 0),
                o
              )
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                if (this.active < this.concurrent) {
                  let e = this.index++;
                    var n = this.destination;
                    var r = void 0
                  try {
                    r = (0, this.accumulator)(this.acc, t, e)
                  } catch (i) {
                    return n.error(i)
                  }
                  this.active++, this._innerSub(r)
                } else this.buffer.push(t)
              }),
              (e.prototype._innerSub = function (t) {
                let e = new i.IY(this);
                  var n = this.destination
                n.add(e)
                let r = (0, i.ft)(t, e)
                r !== e && n.add(r)
              }),
              (e.prototype._complete = function () {
                ;(this.hasCompleted = !0),
                0 === this.active &&
                    this.buffer.length === 0 &&
                    (!1 === this.hasValue && this.destination.next(this.acc),
                    this.destination.complete()),
                this.unsubscribe()
              }),
              (e.prototype.notifyNext = function (t) {
                let e = this.destination
                ;(this.acc = t), (this.hasValue = !0), e.next(t)
              }),
              (e.prototype.notifyComplete = function () {
                let t = this.buffer
                this.active--,
                t.length > 0
                  ? this._next(t.shift())
                  : this.active === 0 &&
                      this.hasCompleted &&
                      (!1 === this.hasValue && this.destination.next(this.acc),
                      this.destination.complete())
              }),
              e
            )
          })(i.Ds)
        function Ue (t) {
          return Oe(
            typeof t === 'function'
              ? function (e, n) {
                return t(e, n) < 0 ? e : n
              }
              : function (t, e) {
                return t < e ? t : e
              },
          )
        }
        let ze = n(190)
        function Ze (t, e) {
          return function (n) {
            let r
            if (
              ((r =
                typeof t === 'function'
                  ? t
                  : function () {
                    return t
                  }),
              typeof e === 'function')
            )
              {return n.lift(new qe(r, e))}
            let i = Object.create(n, ze.N)
            return (i.source = n), (i.subjectFactory = r), i
          }
        }
        var qe = (function () {
            function t (t, e) {
              ;(this.subjectFactory = t), (this.selector = e)
            }
            return (
              (t.prototype.call = function (t, e) {
                let n = this.selector;
                  var r = this.subjectFactory();
                  var i = n(r).subscribe(t)
                return i.add(e.subscribe(r)), i
              }),
              t
            )
          })();
          var Qe = n(63548)
        function Ye () {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
          return (
            t.length === 1 && (0, B.k)(t[0]) && (t = t[0]),
            function (e) {
              return e.lift(new Ge(t))
            }
          )
        }
        var Ge = (function () {
            function t (t) {
              this.nextSources = t
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new Ke(t, this.nextSources))
              }),
              t
            )
          })();
          var Ke = (function (t) {
            function e (e, n) {
              let r = t.call(this, e) || this
              return (r.destination = e), (r.nextSources = n), r
            }
            return (
              r.ZT(e, t),
              (e.prototype.notifyError = function () {
                this.subscribeToNextSource()
              }),
              (e.prototype.notifyComplete = function () {
                this.subscribeToNextSource()
              }),
              (e.prototype._error = function (t) {
                this.subscribeToNextSource(), this.unsubscribe()
              }),
              (e.prototype._complete = function () {
                this.subscribeToNextSource(), this.unsubscribe()
              }),
              (e.prototype.subscribeToNextSource = function () {
                let t = this.nextSources.shift()
                if (t) {
                  let e = new i.IY(this);
                    var n = this.destination
                  n.add(e)
                  let r = (0, i.ft)(t, e)
                  r !== e && n.add(r)
                } else this.destination.complete()
              }),
              e
            )
          })(i.Ds)
        function Je () {
          return function (t) {
            return t.lift(new $e())
          }
        }
        var $e = (function () {
            function t () {}
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new Xe(t))
              }),
              t
            )
          })();
          var Xe = (function (t) {
            function e(e) {
              var n = t.call(this, e) || this
              return (n.hasPrev = !1), n
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                var e
                this.hasPrev ? (e = [this.prev, t]) : (this.hasPrev = !0),
                  (this.prev = t),
                  e && this.destination.next(e)
              }),
              e
            )
          })(p.L);
          var tn = n(81665)
        function en (t, e) {
          return function (n) {
            return [(0, Lt.h)(t, e)(n), (0, Lt.h)((0, tn.f)(t, e))(n)]
          }
        }
        function nn () {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
          let n = t.length
          if (n === 0) throw new Error('list of properties cannot be empty.')
          return function (e) {
            return (0, Jt.U)(
              (function (t, e) {
                let n = function (n) {
                  for (var r = n, i = 0; i < e; i++) {
                    let o = r != null ? r[t[i]] : void 0
                    if (void 0 === o) return
                    r = o
                  }
                  return r
                }
                return n
              })(t, n)
            )(e)
          }
        }
        let rn = n(54096)
        function on (t) {
          return t
            ? Ze(function () {
              return new rn.xQ()
            }, t)
            : Ze(new rn.xQ())
        }
        let sn = n(49681)
        function un (t) {
          return function (e) {
            return Ze(new sn.X(t))(e)
          }
        }
        let cn = n(18688)
        function an () {
          return function (t) {
            return Ze(new cn.c())(t)
          }
        }
        let ln = n(10126)
        function hn (t, e, n, r) {
          n && typeof n !== 'function' && (r = n)
          let i = typeof n === 'function' ? n : void 0;
            var o = new ln.t(t, e, r)
          return function (t) {
            return Ze(function () {
              return o
            }, i)(t)
          }
        }
        let fn = n(56719)
        function dn () {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
          return function (e) {
            return (
              t.length === 1 && (0, B.k)(t[0]) && (t = t[0]),
              e.lift.call(fn.S3.apply(void 0, [e].concat(t)))
            )
          }
        }
        function pn (t) {
          return (
            void 0 === t && (t = -1),
            function (e) {
              return t === 0
                ? (0, Wt.c)()
                : t < 0
                  ? e.lift(new bn(-1, e))
                  : e.lift(new bn(t - 1, e))
            }
          )
        }
        var bn = (function () {
            function t (t, e) {
              ;(this.count = t), (this.source = e)
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new vn(t, this.count, this.source))
              }),
              t
            )
          })();
          var vn = (function (t) {
            function e (e, n, r) {
              let i = t.call(this, e) || this
              return (i.count = n), (i.source = r), i
            }
            return (
              r.ZT(e, t),
              (e.prototype.complete = function () {
                if (!this.isStopped) {
                  let e = this.source;
                    var n = this.count
                  if (n === 0) return t.prototype.complete.call(this)
                  n > -1 && (this.count = n - 1),
                  e.subscribe(this._unsubscribeAndRecycle())
                }
              }),
              e
            )
          })(p.L)
        function yn (t) {
          return function (e) {
            return e.lift(new gn(t))
          }
        }
        var gn = (function () {
            function t (t) {
              this.notifier = t
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new mn(t, this.notifier, e))
              }),
              t
            )
          })();
          var mn = (function (t) {
            function e (e, n, r) {
              let i = t.call(this, e) || this
              return (
                (i.notifier = n),
                (i.source = r),
                (i.sourceIsBeingSubscribedTo = !0),
                i
              )
            }
            return (
              r.ZT(e, t),
              (e.prototype.notifyNext = function () {
                ;(this.sourceIsBeingSubscribedTo = !0),
                this.source.subscribe(this)
              }),
              (e.prototype.notifyComplete = function () {
                if (!1 === this.sourceIsBeingSubscribedTo)
                  {return t.prototype.complete.call(this)}
              }),
              (e.prototype.complete = function () {
                if (((this.sourceIsBeingSubscribedTo = !1), !this.isStopped)) {
                  if (
                    (this.retries || this.subscribeToRetries(),
                    !this.retriesSubscription ||
                      this.retriesSubscription.closed)
                  )
                    {return t.prototype.complete.call(this)}
                  this._unsubscribeAndRecycle(), this.notifications.next(void 0)
                }
              }),
              (e.prototype._unsubscribe = function () {
                let t = this.notifications;
                  var e = this.retriesSubscription
                t && (t.unsubscribe(), (this.notifications = void 0)),
                e && (e.unsubscribe(), (this.retriesSubscription = void 0)),
                (this.retries = void 0)
              }),
              (e.prototype._unsubscribeAndRecycle = function () {
                let e = this._unsubscribe
                return (
                  (this._unsubscribe = null),
                  t.prototype._unsubscribeAndRecycle.call(this),
                  (this._unsubscribe = e),
                  this
                )
              }),
              (e.prototype.subscribeToRetries = function () {
                let e
                this.notifications = new rn.xQ()
                try {
                  e = (0, this.notifier)(this.notifications)
                } catch (n) {
                  return t.prototype.complete.call(this)
                }
                ;(this.retries = e),
                (this.retriesSubscription = (0, i.ft)(e, new i.IY(this)))
              }),
              e
            )
          })(i.Ds)
        function wn (t) {
          return (
            void 0 === t && (t = -1),
            function (e) {
              return e.lift(new _n(t, e))
            }
          )
        }
        var _n = (function () {
            function t (t, e) {
              ;(this.count = t), (this.source = e)
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new kn(t, this.count, this.source))
              }),
              t
            )
          })();
          var kn = (function (t) {
            function e (e, n, r) {
              let i = t.call(this, e) || this
              return (i.count = n), (i.source = r), i
            }
            return (
              r.ZT(e, t),
              (e.prototype.error = function (e) {
                if (!this.isStopped) {
                  let n = this.source;
                    var r = this.count
                  if (r === 0) return t.prototype.error.call(this, e)
                  r > -1 && (this.count = r - 1),
                  n.subscribe(this._unsubscribeAndRecycle())
                }
              }),
              e
            )
          })(p.L)
        function xn (t) {
          return function (e) {
            return e.lift(new Sn(t, e))
          }
        }
        var Sn = (function () {
            function t (t, e) {
              ;(this.notifier = t), (this.source = e)
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new En(t, this.notifier, this.source))
              }),
              t
            )
          })();
          var En = (function (t) {
            function e(e, n, r) {
              var i = t.call(this, e) || this
              return (i.notifier = n), (i.source = r), i
            }
            return (
              r.ZT(e, t),
              (e.prototype.error = function (e) {
                if (!this.isStopped) {
                  var n = this.errors,
                    r = this.retries,
                    o = this.retriesSubscription
                  if (r)
                    (this.errors = void 0), (this.retriesSubscription = void 0)
                  else {
                    n = new rn.xQ()
                    try {
                      r = (0, this.notifier)(n)
                    } catch (s) {
                      return t.prototype.error.call(this, s)
                    }
                    o = (0, i.ft)(r, new i.IY(this))
                  }
                  this._unsubscribeAndRecycle(),
                    (this.errors = n),
                    (this.retries = r),
                    (this.retriesSubscription = o),
                    n.next(e)
                }
              }),
              (e.prototype._unsubscribe = function () {
                var t = this.errors,
                  e = this.retriesSubscription
                t && (t.unsubscribe(), (this.errors = void 0)),
                  e && (e.unsubscribe(), (this.retriesSubscription = void 0)),
                  (this.retries = void 0)
              }),
              (e.prototype.notifyNext = function () {
                var t = this._unsubscribe
                ;(this._unsubscribe = null),
                  this._unsubscribeAndRecycle(),
                  (this._unsubscribe = t),
                  this.source.subscribe(this)
              }),
              e
            )
          })(i.Ds);
          var Cn = n(56801)
        function Mn (t) {
          return function (e) {
            return e.lift(new In(t))
          }
        }
        var In = (function () {
            function t (t) {
              this.notifier = t
            }
            return (
              (t.prototype.call = function (t, e) {
                let n = new Nn(t);
                  var r = e.subscribe(n)
                return r.add((0, i.ft)(this.notifier, new i.IY(n))), r
              }),
              t
            )
          })();
          var Nn = (function (t) {
            function e () {
              let e = (t !== null && t.apply(this, arguments)) || this
              return (e.hasValue = !1), e
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                ;(this.value = t), (this.hasValue = !0)
              }),
              (e.prototype.notifyNext = function () {
                this.emitValue()
              }),
              (e.prototype.notifyComplete = function () {
                this.emitValue()
              }),
              (e.prototype.emitValue = function () {
                this.hasValue &&
                  ((this.hasValue = !1), this.destination.next(this.value))
              }),
              e
            )
          })(i.Ds)
        function Tn (t, e) {
          return (
            void 0 === e && (e = c.P),
            function (n) {
              return n.lift(new An(t, e))
            }
          )
        }
        var An = (function () {
            function t (t, e) {
              ;(this.period = t), (this.scheduler = e)
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new Ln(t, this.period, this.scheduler))
              }),
              t
            )
          })();
          var Ln = (function (t) {
            function e (e, n, r) {
              let i = t.call(this, e) || this
              return (
                (i.period = n),
                (i.scheduler = r),
                (i.hasValue = !1),
                i.add(r.schedule(jn, n, { subscriber: i, period: n })),
                i
              )
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                ;(this.lastValue = t), (this.hasValue = !0)
              }),
              (e.prototype.notifyNext = function () {
                this.hasValue &&
                  ((this.hasValue = !1), this.destination.next(this.lastValue))
              }),
              e
            )
          })(p.L)
        function jn (t) {
          let e = t.subscriber;
            var n = t.period
          e.notifyNext(), this.schedule(t, n)
        }
        function On (t, e) {
          return function (n) {
            return n.lift(new Dn(t, e))
          }
        }
        var Dn = (function () {
            function t (t, e) {
              ;(this.compareTo = t), (this.comparator = e)
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new Rn(t, this.compareTo, this.comparator))
              }),
              t
            )
          })();
          var Rn = (function (t) {
            function e(e, n, r) {
              var i = t.call(this, e) || this
              return (
                (i.compareTo = n),
                (i.comparator = r),
                (i._a = []),
                (i._b = []),
                (i._oneComplete = !1),
                i.destination.add(n.subscribe(new Pn(e, i))),
                i
              )
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                this._oneComplete && 0 === this._b.length
                  ? this.emit(!1)
                  : (this._a.push(t), this.checkValues())
              }),
              (e.prototype._complete = function () {
                this._oneComplete
                  ? this.emit(0 === this._a.length && 0 === this._b.length)
                  : (this._oneComplete = !0),
                  this.unsubscribe()
              }),
              (e.prototype.checkValues = function () {
                for (
                  var t = this, e = t._a, n = t._b, r = t.comparator;
                  e.length > 0 && n.length > 0;

                ) {
                  var i = e.shift(),
                    o = n.shift(),
                    s = !1
                  try {
                    s = r ? r(i, o) : i === o
                  } catch (u) {
                    this.destination.error(u)
                  }
                  s || this.emit(!1)
                }
              }),
              (e.prototype.emit = function (t) {
                var e = this.destination
                e.next(t), e.complete()
              }),
              (e.prototype.nextB = function (t) {
                this._oneComplete && 0 === this._a.length
                  ? this.emit(!1)
                  : (this._b.push(t), this.checkValues())
              }),
              (e.prototype.completeB = function () {
                this._oneComplete
                  ? this.emit(0 === this._a.length && 0 === this._b.length)
                  : (this._oneComplete = !0)
              }),
              e
            )
          })(p.L);
          var Pn = (function (t) {
            function e (e, n) {
              let r = t.call(this, e) || this
              return (r.parent = n), r
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                this.parent.nextB(t)
              }),
              (e.prototype._error = function (t) {
                this.parent.error(t), this.unsubscribe()
              }),
              (e.prototype._complete = function () {
                this.parent.completeB(), this.unsubscribe()
              }),
              e
            )
          })(p.L)
        function Wn () {
          return new rn.xQ()
        }
        function Fn () {
          return function (t) {
            return (0, Cn.x)()(Ze(Wn)(t))
          }
        }
        function Vn (t, e, n) {
          let r
          return (
            (r =
              t && typeof t === 'object'
                ? t
                : { bufferSize: t, windowTime: e, refCount: !1, scheduler: n }),
            function (t) {
              return t.lift(
                (function (t) {
                  let e;
                    var n;
                    var r = t.bufferSize;
                    var i = void 0 === r ? Number.POSITIVE_INFINITY : r;
                    var o = t.windowTime;
                    var s = void 0 === o ? Number.POSITIVE_INFINITY : o;
                    var u = t.refCount;
                    var c = t.scheduler;
                    var a = 0;
                    var l = !1;
                    var h = !1
                  return function (t) {
                    let r
                    a++,
                    !e || l
                      ? ((l = !1),
                        (e = new ln.t(i, s, c)),
                        (r = e.subscribe(this)),
                        (n = t.subscribe({
                          next: function (t) {
                            e.next(t)
                          },
                          error: function (t) {
                            ;(l = !0), e.error(t)
                          },
                          complete: function () {
                            ;(h = !0), (n = void 0), e.complete()
                          },
                        })),
                        h && (n = void 0))
                      : (r = e.subscribe(this)),
                    this.add(function () {
                      a--,
                      r.unsubscribe(),
                      (r = void 0),
                      n &&
                            !h &&
                            u &&
                            a === 0 &&
                            (n.unsubscribe(), (n = void 0), (e = void 0))
                    })
                  }
                })(r)
              )
            }
          )
        }
        function Bn (t) {
          return function (e) {
            return e.lift(new Hn(t, e))
          }
        }
        var Hn = (function () {
            function t (t, e) {
              ;(this.predicate = t), (this.source = e)
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new Un(t, this.predicate, this.source))
              }),
              t
            )
          })();
          var Un = (function (t) {
            function e (e, n, r) {
              let i = t.call(this, e) || this
              return (
                (i.predicate = n),
                (i.source = r),
                (i.seenValue = !1),
                (i.index = 0),
                i
              )
            }
            return (
              r.ZT(e, t),
              (e.prototype.applySingleValue = function (t) {
                this.seenValue
                  ? this.destination.error(
                    'Sequence contains more than one element',
                  )
                  : ((this.seenValue = !0), (this.singleValue = t))
              }),
              (e.prototype._next = function (t) {
                let e = this.index++
                this.predicate ? this.tryNext(t, e) : this.applySingleValue(t)
              }),
              (e.prototype.tryNext = function (t, e) {
                try {
                  this.predicate(t, e, this.source) && this.applySingleValue(t)
                } catch (n) {
                  this.destination.error(n)
                }
              }),
              (e.prototype._complete = function () {
                let t = this.destination
                this.index > 0
                  ? (t.next(this.seenValue ? this.singleValue : void 0),
                    t.complete())
                  : t.error(new jt.K())
              }),
              e
            )
          })(p.L)
        function zn (t) {
          return function (e) {
            return e.lift(new Zn(t))
          }
        }
        var Zn = (function () {
            function t (t) {
              this.total = t
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new qn(t, this.total))
              }),
              t
            )
          })();
          var qn = (function (t) {
            function e (e, n) {
              let r = t.call(this, e) || this
              return (r.total = n), (r.count = 0), r
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                ++this.count > this.total && this.destination.next(t)
              }),
              e
            )
          })(p.L)
        function Qn (t) {
          return function (e) {
            return e.lift(new Yn(t))
          }
        }
        var Yn = (function () {
            function t (t) {
              if (((this._skipCount = t), this._skipCount < 0)) throw new At.W()
            }
            return (
              (t.prototype.call = function (t, e) {
                return this._skipCount === 0
                  ? e.subscribe(new p.L(t))
                  : e.subscribe(new Gn(t, this._skipCount))
              }),
              t
            )
          })();
          var Gn = (function (t) {
            function e (e, n) {
              let r = t.call(this, e) || this
              return (
                (r._skipCount = n), (r._count = 0), (r._ring = new Array(n)), r
              )
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                let e = this._skipCount;
                  var n = this._count++
                if (n < e) this._ring[n] = t
                else {
                  let r = n % e;
                    var i = this._ring;
                    var o = i[r]
                  ;(i[r] = t), this.destination.next(o)
                }
              }),
              e
            )
          })(p.L)
        function Kn (t) {
          return function (e) {
            return e.lift(new Jn(t))
          }
        }
        var Jn = (function () {
            function t (t) {
              this.notifier = t
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new $n(t, this.notifier))
              }),
              t
            )
          })();
          var $n = (function (t) {
            function e (e, n) {
              let r = t.call(this, e) || this
              r.hasValue = !1
              let o = new i.IY(r)
              r.add(o), (r.innerSubscription = o)
              let s = (0, i.ft)(n, o)
              return s !== o && (r.add(s), (r.innerSubscription = s)), r
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (e) {
                this.hasValue && t.prototype._next.call(this, e)
              }),
              (e.prototype.notifyNext = function () {
                ;(this.hasValue = !0),
                this.innerSubscription && this.innerSubscription.unsubscribe()
              }),
              (e.prototype.notifyComplete = function () {}),
              e
            )
          })(i.Ds)
        function Xn (t) {
          return function (e) {
            return e.lift(new tr(t))
          }
        }
        var tr = (function () {
            function t (t) {
              this.predicate = t
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new er(t, this.predicate))
              }),
              t
            )
          })();
          var er = (function (t) {
            function e (e, n) {
              let r = t.call(this, e) || this
              return (r.predicate = n), (r.skipping = !0), (r.index = 0), r
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                let e = this.destination
                this.skipping && this.tryCallPredicate(t),
                this.skipping || e.next(t)
              }),
              (e.prototype.tryCallPredicate = function (t) {
                try {
                  let e = this.predicate(t, this.index++)
                  this.skipping = Boolean(e)
                } catch (n) {
                  this.destination.error(n)
                }
              }),
              e
            )
          })(p.L)
        function nr () {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
          let n = t[t.length - 1]
          return (0, m.K)(n)
            ? (t.pop(),
              function (e) {
                return (0, z.z)(t, e, n)
              })
            : function (e) {
              return (0, z.z)(t, e)
            }
        }
        let rr = n(32931);
          var ir = n(37764);
          var or = (function (t) {
            function e (e, n, r) {
              void 0 === n && (n = 0), void 0 === r && (r = rr.e)
              let i = t.call(this) || this
              return (
                (i.source = e),
                (i.delayTime = n),
                (i.scheduler = r),
                (!(0, ir.k)(n) || n < 0) && (i.delayTime = 0),
                (r && typeof r.schedule === 'function') || (i.scheduler = rr.e),
                i
              )
            }
            return (
              r.ZT(e, t),
              (e.create = function (t, n, r) {
                return (
                  void 0 === n && (n = 0),
                  void 0 === r && (r = rr.e),
                  new e(t, n, r)
                )
              }),
              (e.dispatch = function (t) {
                let e = t.source;
                  var n = t.subscriber
                return this.add(e.subscribe(n))
              }),
              (e.prototype._subscribe = function (t) {
                let n = this.delayTime;
                  var r = this.source
                return this.scheduler.schedule(e.dispatch, n, {
                  source: r,
                  subscriber: t
                })
              }),
              e
            )
          })(bt.y)
        function sr (t, e) {
          return (
            void 0 === e && (e = 0),
            function (n) {
              return n.lift(new ur(t, e))
            }
          )
        }
        var ur = (function () {
          function t (t, e) {
            ;(this.scheduler = t), (this.delay = e)
          }
          return (
            (t.prototype.call = function (t, e) {
              return new or(e, this.delay, this.scheduler).subscribe(t)
            }),
            t
          )
        })()
        function cr (t, e) {
          return typeof e === 'function'
            ? function (n) {
              return n.pipe(
                cr(function (n, r) {
                  return (0, H.D)(t(n, r)).pipe(
                    (0, Jt.U)(function (t, i) {
                      return e(n, t, r, i)
                    })
                    )
                })
                )
            }
            : function (e) {
              return e.lift(new ar(t))
            }
        }
        var ar = (function () {
            function t (t) {
              this.project = t
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new lr(t, this.project))
              }),
              t
            )
          })();
          var lr = (function (t) {
            function e (e, n) {
              let r = t.call(this, e) || this
              return (r.project = n), (r.index = 0), r
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                let e;
                  var n = this.index++
                try {
                  e = this.project(t, n)
                } catch (r) {
                  return void this.destination.error(r)
                }
                this._innerSub(e)
              }),
              (e.prototype._innerSub = function (t) {
                let e = this.innerSubscription
                e && e.unsubscribe()
                let n = new i.IY(this);
                  var r = this.destination
                r.add(n),
                (this.innerSubscription = (0, i.ft)(t, n)),
                this.innerSubscription !== n && r.add(this.innerSubscription)
              }),
              (e.prototype._complete = function () {
                let e = this.innerSubscription
                ;(e && !e.closed) || t.prototype._complete.call(this),
                this.unsubscribe()
              }),
              (e.prototype._unsubscribe = function () {
                this.innerSubscription = void 0
              }),
              (e.prototype.notifyComplete = function () {
                ;(this.innerSubscription = void 0),
                this.isStopped && t.prototype._complete.call(this)
              }),
              (e.prototype.notifyNext = function (t) {
                this.destination.next(t)
              }),
              e
            )
          })(i.Ds)
        function hr () {
          return cr(he.y)
        }
        function fr (t, e) {
          return e
            ? cr(function () {
              return t
            }, e)
            : cr(function () {
              return t
            })
        }
        function dr (t) {
          return function (e) {
            return e.lift(new pr(t))
          }
        }
        var pr = (function () {
            function t (t) {
              this.notifier = t
            }
            return (
              (t.prototype.call = function (t, e) {
                let n = new br(t);
                  var r = (0, i.ft)(this.notifier, new i.IY(n))
                return r && !n.seenValue ? (n.add(r), e.subscribe(n)) : n
              }),
              t
            )
          })();
          var br = (function (t) {
            function e (e) {
              let n = t.call(this, e) || this
              return (n.seenValue = !1), n
            }
            return (
              r.ZT(e, t),
              (e.prototype.notifyNext = function () {
                ;(this.seenValue = !0), this.complete()
              }),
              (e.prototype.notifyComplete = function () {}),
              e
            )
          })(i.Ds)
        function vr (t, e) {
          return (
            void 0 === e && (e = !1),
            function (n) {
              return n.lift(new yr(t, e))
            }
          )
        }
        var yr = (function () {
            function t (t, e) {
              ;(this.predicate = t), (this.inclusive = e)
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new gr(t, this.predicate, this.inclusive))
              }),
              t
            )
          })();
          var gr = (function (t) {
            function e(e, n, r) {
              var i = t.call(this, e) || this
              return (i.predicate = n), (i.inclusive = r), (i.index = 0), i
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                var e,
                  n = this.destination
                try {
                  e = this.predicate(t, this.index++)
                } catch (r) {
                  return void n.error(r)
                }
                this.nextOrComplete(t, e)
              }),
              (e.prototype.nextOrComplete = function (t, e) {
                var n = this.destination
                Boolean(e)
                  ? n.next(t)
                  : (this.inclusive && n.next(t), n.complete())
              }),
              e
            )
          })(p.L);
          var mr = n(37576);
          var wr = n(49390)
        function _r (t, e, n) {
          return function (r) {
            return r.lift(new kr(t, e, n))
          }
        }
        var kr = (function () {
            function t (t, e, n) {
              ;(this.nextOrObserver = t), (this.error = e), (this.complete = n)
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(
                  new xr(t, this.nextOrObserver, this.error, this.complete)
                )
              }),
              t
            )
          })();
          var xr = (function (t) {
            function e(e, n, r, i) {
              var o = t.call(this, e) || this
              return (
                (o._tapNext = mr.Z),
                (o._tapError = mr.Z),
                (o._tapComplete = mr.Z),
                (o._tapError = r || mr.Z),
                (o._tapComplete = i || mr.Z),
                (0, wr.m)(n)
                  ? ((o._context = o), (o._tapNext = n))
                  : n &&
                    ((o._context = n),
                    (o._tapNext = n.next || mr.Z),
                    (o._tapError = n.error || mr.Z),
                    (o._tapComplete = n.complete || mr.Z)),
                o
              )
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                try {
                  this._tapNext.call(this._context, t)
                } catch (e) {
                  return void this.destination.error(e)
                }
                this.destination.next(t)
              }),
              (e.prototype._error = function (t) {
                try {
                  this._tapError.call(this._context, t)
                } catch (t) {
                  return void this.destination.error(t)
                }
                this.destination.error(t)
              }),
              (e.prototype._complete = function () {
                try {
                  this._tapComplete.call(this._context)
                } catch (t) {
                  return void this.destination.error(t)
                }
                return this.destination.complete()
              }),
              e
            )
          })(p.L);
          var Sr = { leading: !0, trailing: !1 }
        function Er (t, e) {
          return (
            void 0 === e && (e = Sr),
            function (n) {
              return n.lift(new Cr(t, !!e.leading, !!e.trailing))
            }
          )
        }
        var Cr = (function () {
            function t (t, e, n) {
              ;(this.durationSelector = t),
              (this.leading = e),
              (this.trailing = n)
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(
                  new Mr(t, this.durationSelector, this.leading, this.trailing)
                )
              }),
              t
            )
          })();
          var Mr = (function (t) {
            function e (e, n, r, i) {
              let o = t.call(this, e) || this
              return (
                (o.destination = e),
                (o.durationSelector = n),
                (o._leading = r),
                (o._trailing = i),
                (o._hasValue = !1),
                o
              )
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                ;(this._hasValue = !0),
                (this._sendValue = t),
                this._throttled ||
                    (this._leading ? this.send() : this.throttle(t))
              }),
              (e.prototype.send = function () {
                let t = this._hasValue;
                  var e = this._sendValue
                t && (this.destination.next(e), this.throttle(e)),
                (this._hasValue = !1),
                (this._sendValue = void 0)
              }),
              (e.prototype.throttle = function (t) {
                let e = this.tryDurationSelector(t)
                e && this.add((this._throttled = (0, i.ft)(e, new i.IY(this))))
              }),
              (e.prototype.tryDurationSelector = function (t) {
                try {
                  return this.durationSelector(t)
                } catch (e) {
                  return this.destination.error(e), null
                }
              }),
              (e.prototype.throttlingDone = function () {
                let t = this._throttled;
                  var e = this._trailing
                t && t.unsubscribe(),
                (this._throttled = void 0),
                e && this.send()
              }),
              (e.prototype.notifyNext = function () {
                this.throttlingDone()
              }),
              (e.prototype.notifyComplete = function () {
                this.throttlingDone()
              }),
              e
            )
          })(i.Ds)
        function Ir (t, e, n) {
          return (
            void 0 === e && (e = c.P),
            void 0 === n && (n = Sr),
            function (r) {
              return r.lift(new Nr(t, e, n.leading, n.trailing))
            }
          )
        }
        var Nr = (function () {
            function t (t, e, n, r) {
              ;(this.duration = t),
              (this.scheduler = e),
              (this.leading = n),
              (this.trailing = r)
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(
                  new Tr(
                    t,
                    this.duration,
                    this.scheduler,
                    this.leading,
                    this.trailing
                  ),
                )
              }),
              t
            )
          })();
          var Tr = (function (t) {
            function e (e, n, r, i, o) {
              let s = t.call(this, e) || this
              return (
                (s.duration = n),
                (s.scheduler = r),
                (s.leading = i),
                (s.trailing = o),
                (s._hasTrailingValue = !1),
                (s._trailingValue = null),
                s
              )
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                this.throttled
                  ? this.trailing &&
                    ((this._trailingValue = t), (this._hasTrailingValue = !0))
                  : (this.add(
                      (this.throttled = this.scheduler.schedule(
                        Ar,
                        this.duration,
                        { subscriber: this }
                      )),
                    ),
                    this.leading
                      ? this.destination.next(t)
                      : this.trailing &&
                        ((this._trailingValue = t),
                        (this._hasTrailingValue = !0)))
              }),
              (e.prototype._complete = function () {
                this._hasTrailingValue
                  ? (this.destination.next(this._trailingValue),
                    this.destination.complete())
                  : this.destination.complete()
              }),
              (e.prototype.clearThrottle = function () {
                let t = this.throttled
                t &&
                  (this.trailing &&
                    this._hasTrailingValue &&
                    (this.destination.next(this._trailingValue),
                    (this._trailingValue = null),
                    (this._hasTrailingValue = !1)),
                  t.unsubscribe(),
                  this.remove(t),
                  (this.throttled = null))
              }),
              e
            )
          })(p.L)
        function Ar (t) {
          t.subscriber.clearThrottle()
        }
        let Lr = n(21457)
        function jr (t) {
          return (
            void 0 === t && (t = c.P),
            function (e) {
              return (0, Lr.P)(function () {
                return e.pipe(
                  Te(
                    function (e, n) {
                      let r = e.current
                      return { value: n, current: t.now(), last: r }
                    },
                    { current: t.now(), value: void 0, last: void 0 }
                  ),
                  (0, Jt.U)(function (t) {
                    let e = t.current;
                      var n = t.last;
                      var r = t.value
                    return new Or(r, e - n)
                  })
                )
              })
            }
          )
        }
        var Or = (function () {
            return function (t, e) {
              ;(this.value = t), (this.interval = e)
            }
          })();
          var Dr = n(43268)
        function Rr (t, e, n) {
          return (
            void 0 === n && (n = c.P),
            function (r) {
              let i = at(t);
                var o = i ? +t - n.now() : Math.abs(t)
              return r.lift(new Pr(o, i, e, n))
            }
          )
        }
        var Pr = (function () {
            function t (t, e, n, r) {
              ;(this.waitFor = t),
              (this.absoluteTimeout = e),
              (this.withObservable = n),
              (this.scheduler = r)
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(
                  new Wr(
                    t,
                    this.absoluteTimeout,
                    this.waitFor,
                    this.withObservable,
                    this.scheduler
                  ),
                )
              }),
              t
            )
          })();
          var Wr = (function (t) {
            function e(e, n, r, i, o) {
              var s = t.call(this, e) || this
              return (
                (s.absoluteTimeout = n),
                (s.waitFor = r),
                (s.withObservable = i),
                (s.scheduler = o),
                s.scheduleTimeout(),
                s
              )
            }
            return (
              r.ZT(e, t),
              (e.dispatchTimeout = function (t) {
                var e = t.withObservable
                t._unsubscribeAndRecycle(), t.add((0, i.ft)(e, new i.IY(t)))
              }),
              (e.prototype.scheduleTimeout = function () {
                var t = this.action
                t
                  ? (this.action = t.schedule(this, this.waitFor))
                  : this.add(
                      (this.action = this.scheduler.schedule(
                        e.dispatchTimeout,
                        this.waitFor,
                        this,
                      )),
                    )
              }),
              (e.prototype._next = function (e) {
                this.absoluteTimeout || this.scheduleTimeout(),
                  t.prototype._next.call(this, e)
              }),
              (e.prototype._unsubscribe = function () {
                ;(this.action = void 0),
                  (this.scheduler = null),
                  (this.withObservable = null)
              }),
              e
            )
          })(i.Ds);
          var Fr = n(97594)
        function Vr (t, e) {
          return void 0 === e && (e = c.P), Rr(t, (0, Fr._)(new Dr.W()), e)
        }
        function Br (t) {
          return (
            void 0 === t && (t = c.P),
            (0, Jt.U)(function (e) {
              return new Hr(e, t.now())
            })
          )
        }
        var Hr = (function () {
          return function (t, e) {
            ;(this.value = t), (this.timestamp = e)
          }
        })()
        function Ur (t, e, n) {
          return n === 0 ? [e] : (t.push(e), t)
        }
        function zr () {
          return Oe(Ur, [])
        }
        function Zr (t) {
          return function (e) {
            return e.lift(new qr(t))
          }
        }
        var qr = (function () {
            function t (t) {
              this.windowBoundaries = t
            }
            return (
              (t.prototype.call = function (t, e) {
                let n = new Qr(t);
                  var r = e.subscribe(n)
                return (
                  r.closed ||
                    n.add((0, i.ft)(this.windowBoundaries, new i.IY(n))),
                  r
                )
              }),
              t
            )
          })();
          var Qr = (function (t) {
            function e (e) {
              let n = t.call(this, e) || this
              return (n.window = new rn.xQ()), e.next(n.window), n
            }
            return (
              r.ZT(e, t),
              (e.prototype.notifyNext = function () {
                this.openWindow()
              }),
              (e.prototype.notifyError = function (t) {
                this._error(t)
              }),
              (e.prototype.notifyComplete = function () {
                this._complete()
              }),
              (e.prototype._next = function (t) {
                this.window.next(t)
              }),
              (e.prototype._error = function (t) {
                this.window.error(t), this.destination.error(t)
              }),
              (e.prototype._complete = function () {
                this.window.complete(), this.destination.complete()
              }),
              (e.prototype._unsubscribe = function () {
                this.window = null
              }),
              (e.prototype.openWindow = function () {
                let t = this.window
                t && t.complete()
                let e = this.destination;
                  var n = (this.window = new rn.xQ())
                e.next(n)
              }),
              e
            )
          })(i.Ds)
        function Yr (t, e) {
          return (
            void 0 === e && (e = 0),
            function (n) {
              return n.lift(new Gr(t, e))
            }
          )
        }
        var Gr = (function () {
            function t (t, e) {
              ;(this.windowSize = t), (this.startWindowEvery = e)
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(
                  new Kr(t, this.windowSize, this.startWindowEvery)
                )
              }),
              t
            )
          })();
          var Kr = (function (t) {
            function e (e, n, r) {
              let i = t.call(this, e) || this
              return (
                (i.destination = e),
                (i.windowSize = n),
                (i.startWindowEvery = r),
                (i.windows = [new rn.xQ()]),
                (i.count = 0),
                e.next(i.windows[0]),
                i
              )
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                for (
                  var e =
                      this.startWindowEvery > 0
                        ? this.startWindowEvery
                        : this.windowSize,
                    n = this.destination,
                    r = this.windowSize,
                    i = this.windows,
                    o = i.length,
                    s = 0;
                  s < o && !this.closed;
                  s++
                )
                  {i[s].next(t)}
                let u = this.count - r + 1
                if (
                  (u >= 0 &&
                    u % e === 0 &&
                    !this.closed &&
                    i.shift().complete(),
                  ++this.count % e === 0 && !this.closed)
                ) {
                  let c = new rn.xQ()
                  i.push(c), n.next(c)
                }
              }),
              (e.prototype._error = function (t) {
                let e = this.windows
                if (e) for (; e.length > 0 && !this.closed;) e.shift().error(t)
                this.destination.error(t)
              }),
              (e.prototype._complete = function () {
                let t = this.windows
                if (t)
                  {for (; t.length > 0 && !this.closed; ) t.shift().complete()}
                this.destination.complete()
              }),
              (e.prototype._unsubscribe = function () {
                ;(this.count = 0), (this.windows = null)
              }),
              e
            )
          })(p.L)
        function Jr (t) {
          let e = c.P;
            var n = null;
            var r = Number.POSITIVE_INFINITY
          return (
            (0, m.K)(arguments[3]) && (e = arguments[3]),
            (0, m.K)(arguments[2])
              ? (e = arguments[2])
              : (0, ir.k)(arguments[2]) && (r = Number(arguments[2])),
            (0, m.K)(arguments[1])
              ? (e = arguments[1])
              : (0, ir.k)(arguments[1]) && (n = Number(arguments[1])),
            function (i) {
              return i.lift(new $r(t, n, r, e))
            }
          )
        }
        var $r = (function () {
            function t (t, e, n, r) {
              ;(this.windowTimeSpan = t),
              (this.windowCreationInterval = e),
              (this.maxWindowSize = n),
              (this.scheduler = r)
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(
                  new ti(
                    t,
                    this.windowTimeSpan,
                    this.windowCreationInterval,
                    this.maxWindowSize,
                    this.scheduler
                  ),
                )
              }),
              t
            )
          })();
          var Xr = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this
              return (e._numberOfNextedValues = 0), e
            }
            return (
              r.ZT(e, t),
              (e.prototype.next = function (e) {
                this._numberOfNextedValues++, t.prototype.next.call(this, e)
              }),
              Object.defineProperty(e.prototype, 'numberOfNextedValues', {
                get: function () {
                  return this._numberOfNextedValues
                },
                enumerable: !0,
                configurable: !0,
              }),
              e
            )
          })(rn.xQ);
          var ti = (function (t) {
            function e (e, n, r, i, o) {
              let s = t.call(this, e) || this
              ;(s.destination = e),
              (s.windowTimeSpan = n),
              (s.windowCreationInterval = r),
              (s.maxWindowSize = i),
              (s.scheduler = o),
              (s.windows = [])
              let u = s.openWindow()
              if (r !== null && r >= 0) {
                let c = { subscriber: s, window: u, context: null };
                  var a = {
                    windowTimeSpan: n,
                    windowCreationInterval: r,
                    subscriber: s,
                    scheduler: o
                  }
                s.add(o.schedule(ri, n, c)), s.add(o.schedule(ni, r, a))
              } else {
                let l = { subscriber: s, window: u, windowTimeSpan: n }
                s.add(o.schedule(ei, n, l))
              }
              return s
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                for (let e = this.windows, n = e.length, r = 0; r < n; r++) {
                  let i = e[r]
                  i.closed ||
                    (i.next(t),
                    i.numberOfNextedValues >= this.maxWindowSize &&
                      this.closeWindow(i))
                }
              }),
              (e.prototype._error = function (t) {
                for (let e = this.windows; e.length > 0;) e.shift().error(t)
                this.destination.error(t)
              }),
              (e.prototype._complete = function () {
                for (let t = this.windows; t.length > 0;) {
                  let e = t.shift()
                  e.closed || e.complete()
                }
                this.destination.complete()
              }),
              (e.prototype.openWindow = function () {
                let t = new Xr()
                return this.windows.push(t), this.destination.next(t), t
              }),
              (e.prototype.closeWindow = function (t) {
                t.complete()
                let e = this.windows
                e.splice(e.indexOf(t), 1)
              }),
              e
            )
          })(p.L)
        function ei (t) {
          let e = t.subscriber;
            var n = t.windowTimeSpan;
            var r = t.window
          r && e.closeWindow(r),
          (t.window = e.openWindow()),
          this.schedule(t, n)
        }
        function ni (t) {
          let e = t.windowTimeSpan;
            var n = t.subscriber;
            var r = t.scheduler;
            var i = t.windowCreationInterval;
            var o = n.openWindow();
            var s = this;
            var u = { action: s, subscription: null };
            var c = { subscriber: n, window: o, context: u }
          ;(u.subscription = r.schedule(ri, e, c)),
          s.add(u.subscription),
          s.schedule(t, i)
        }
        function ri (t) {
          let e = t.subscriber;
            var n = t.window;
            var r = t.context
          r && r.action && r.subscription && r.action.remove(r.subscription),
          e.closeWindow(n)
        }
        function ii (t, e) {
          return function (n) {
            return n.lift(new oi(t, e))
          }
        }
        var oi = (function () {
            function t (t, e) {
              ;(this.openings = t), (this.closingSelector = e)
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(
                  new si(t, this.openings, this.closingSelector)
                )
              }),
              t
            )
          })();
          var si = (function (t) {
            function e (e, n, r) {
              let i = t.call(this, e) || this
              return (
                (i.openings = n),
                (i.closingSelector = r),
                (i.contexts = []),
                i.add((i.openSubscription = (0, I.D)(i, n, n))),
                i
              )
            }
            return (
              r.ZT(e, t),
              (e.prototype._next = function (t) {
                let e = this.contexts
                if (e)
                  {for (var n = e.length, r = 0; r < n; r++) e[r].window.next(t)}
              }),
              (e.prototype._error = function (e) {
                let n = this.contexts
                if (((this.contexts = null), n))
                  {for (var r = n.length, i = -1; ++i < r; ) {
                    var o = n[i]
                    o.window.error(e), o.subscription.unsubscribe()
                  }}
                t.prototype._error.call(this, e)
              }),
              (e.prototype._complete = function () {
                let e = this.contexts
                if (((this.contexts = null), e))
                  {for (var n = e.length, r = -1; ++r < n; ) {
                    var i = e[r]
                    i.window.complete(), i.subscription.unsubscribe()
                  }}
                t.prototype._complete.call(this)
              }),
              (e.prototype._unsubscribe = function () {
                let t = this.contexts
                if (((this.contexts = null), t))
                  {for (var e = t.length, n = -1; ++n < e; ) {
                    var r = t[n]
                    r.window.unsubscribe(), r.subscription.unsubscribe()
                  }}
              }),
              (e.prototype.notifyNext = function (t, e, n, r, i) {
                if (t === this.openings) {
                  let o = void 0
                  try {
                    o = (0, this.closingSelector)(e)
                  } catch (l) {
                    return this.error(l)
                  }
                  let s = new rn.xQ();
                    var u = new M.w();
                    var c = { window: s, subscription: u }
                  this.contexts.push(c)
                  let a = (0, I.D)(this, o, c)
                  a.closed
                    ? this.closeWindow(this.contexts.length - 1)
                    : ((a.context = c), u.add(a)),
                  this.destination.next(s)
                } else this.closeWindow(this.contexts.indexOf(t))
              }),
              (e.prototype.notifyError = function (t) {
                this.error(t)
              }),
              (e.prototype.notifyComplete = function (t) {
                t !== this.openSubscription &&
                  this.closeWindow(this.contexts.indexOf(t.context))
              }),
              (e.prototype.closeWindow = function (t) {
                if (t !== -1) {
                  let e = this.contexts;
                    var n = e[t];
                    var r = n.window;
                    var i = n.subscription
                  e.splice(t, 1), r.complete(), i.unsubscribe()
                }
              }),
              e
            )
          })(N.L)
        function ui (t) {
          return function (e) {
            return e.lift(new ci(t))
          }
        }
        var ci = (function () {
            function t (t) {
              this.closingSelector = t
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new ai(t, this.closingSelector))
              }),
              t
            )
          })();
          var ai = (function (t) {
            function e (e, n) {
              let r = t.call(this, e) || this
              return (
                (r.destination = e), (r.closingSelector = n), r.openWindow(), r
              )
            }
            return (
              r.ZT(e, t),
              (e.prototype.notifyNext = function (t, e, n, r, i) {
                this.openWindow(i)
              }),
              (e.prototype.notifyError = function (t) {
                this._error(t)
              }),
              (e.prototype.notifyComplete = function (t) {
                this.openWindow(t)
              }),
              (e.prototype._next = function (t) {
                this.window.next(t)
              }),
              (e.prototype._error = function (t) {
                this.window.error(t),
                this.destination.error(t),
                this.unsubscribeClosingNotification()
              }),
              (e.prototype._complete = function () {
                this.window.complete(),
                this.destination.complete(),
                this.unsubscribeClosingNotification()
              }),
              (e.prototype.unsubscribeClosingNotification = function () {
                this.closingNotification &&
                  this.closingNotification.unsubscribe()
              }),
              (e.prototype.openWindow = function (t) {
                void 0 === t && (t = null),
                t && (this.remove(t), t.unsubscribe())
                let e = this.window
                e && e.complete()
                let n;
                  var r = (this.window = new rn.xQ())
                this.destination.next(r)
                try {
                  n = (0, this.closingSelector)()
                } catch (i) {
                  return this.destination.error(i), void this.window.error(i)
                }
                this.add((this.closingNotification = (0, I.D)(this, n)))
              }),
              e
            )
          })(N.L)
        function li () {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
          return function (e) {
            let n
            typeof t[t.length - 1] === 'function' && (n = t.pop())
            let r = t
            return e.lift(new hi(r, n))
          }
        }
        var hi = (function () {
            function t (t, e) {
              ;(this.observables = t), (this.project = e)
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(new fi(t, this.observables, this.project))
              }),
              t
            )
          })();
          var fi = (function (t) {
            function e(e, n, r) {
              var i = t.call(this, e) || this
              ;(i.observables = n), (i.project = r), (i.toRespond = [])
              var o = n.length
              i.values = new Array(o)
              for (var s = 0; s < o; s++) i.toRespond.push(s)
              for (s = 0; s < o; s++) {
                var u = n[s]
                i.add((0, I.D)(i, u, void 0, s))
              }
              return i
            }
            return (
              r.ZT(e, t),
              (e.prototype.notifyNext = function (t, e, n) {
                this.values[n] = e
                var r = this.toRespond
                if (r.length > 0) {
                  var i = r.indexOf(n)
                  ;-1 !== i && r.splice(i, 1)
                }
              }),
              (e.prototype.notifyComplete = function () {}),
              (e.prototype._next = function (t) {
                if (0 === this.toRespond.length) {
                  var e = [t].concat(this.values)
                  this.project ? this._tryProject(e) : this.destination.next(e)
                }
              }),
              (e.prototype._tryProject = function (t) {
                var e
                try {
                  e = this.project.apply(this, t)
                } catch (n) {
                  return void this.destination.error(n)
                }
                this.destination.next(e)
              }),
              e
            )
          })(N.L);
          var di = n(89513)
        function pi () {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
          return function (e) {
            return e.lift.call(di.$R.apply(void 0, [e].concat(t)))
          }
        }
        function bi (t) {
          return function (e) {
            return e.lift(new di.mx(t))
          }
        }
      },
      71108: function (t, e, n) {
        'use strict'
        n.d(e, {
          ZT: function () {
            return i
          }
        })
        let r = function (t, e) {
          return (
            (r =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e
                }) ||
              function (t, e) {
                for (let n in e) e.hasOwnProperty(n) && (t[n] = e[n])
              }),
            r(t, e)
          )
        }
        function i (t, e) {
          function n () {
            this.constructor = t
          }
          r(t, e),
          (t.prototype =
              e === null
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()))
        }
      },
      76738: function (t, e, n) {
        'use strict'
        let r = n(49793);
          var i = n(83829);
          var o = n(35190);
          var s = r('%TypeError%');
          var u = r('%WeakMap%', !0);
          var c = r('%Map%', !0);
          var a = i('WeakMap.prototype.get', !0);
          var l = i('WeakMap.prototype.set', !0);
          var h = i('WeakMap.prototype.has', !0);
          var f = i('Map.prototype.get', !0);
          var d = i('Map.prototype.set', !0);
          var p = i('Map.prototype.has', !0);
          var b = function (t, e) {
            for (var n, r = t; (n = r.next) !== null; r = n)
              {if (n.key === e)
                return (r.next = n.next), (n.next = t.next), (t.next = n), n}
          }
        t.exports = function () {
          var t;
            var e;
            var n;
            var r = {
              assert: function (t) {
                if (!r.has(t))
                  {throw new s('Side channel does not contain ' + o(t))}
              },
              get: function (r) {
                if (
                  u &&
                  r &&
                  (typeof r === 'object' || typeof r === 'function')
                ) {
                  if (t) return a(t, r)
                } else if (c) {
                  if (e) return f(e, r)
                } else if (n)
                  {return (function (t, e) {
                    var n = b(t, e)
                    return n && n.value
                  })(n, r)}
              },
              has: function (r) {
                if (
                  u &&
                  r &&
                  (typeof r === 'object' || typeof r === 'function')
                ) {
                  if (t) return h(t, r)
                } else if (c) {
                  if (e) return p(e, r)
                } else if (n)
                  {return (function (t, e) {
                    return !!b(t, e)
                  })(n, r)}
                return !1
              },
              set: function (r, i) {
                u && r && (typeof r === 'object' || typeof r === 'function')
                  ? (t || (t = new u()), l(t, r, i))
                  : c
                    ? (e || (e = new c()), d(e, r, i))
                    : (n || (n = { key: {}, next: null }),
                      (function (t, e, n) {
                        let r = b(t, e)
                        r
                          ? (r.value = n)
                          : (t.next = { key: e, next: t.next, value: n })
                      })(n, r, i))
              }
            }
          return r
        }
      },
      40626: function (t) {
        'use strict'
        t.exports = { i8: '3.6.3' }
      }
    },
  ]
)
// # sourceMappingURL=542.e6e857cd.chunk.js.map