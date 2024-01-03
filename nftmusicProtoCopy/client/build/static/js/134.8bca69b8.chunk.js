/*! For license information please see 134.8bca69b8.chunk.js.LICENSE.txt */
;(self.webpackChunktruffle_client = self.webpackChunktruffle_client || []).push(
  [
    [134],
    {
      40646: function (e, t, r) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 })
        const n = r(42893)
        function i (e, t, r) {
          return (
            void 0 === t && (t = new Uint8Array(2)),
            void 0 === r && (r = 0),
            (t[r + 0] = e >>> 8),
            (t[r + 1] = e >>> 0),
            t
          )
        }
        function o (e, t, r) {
          return (
            void 0 === t && (t = new Uint8Array(2)),
            void 0 === r && (r = 0),
            (t[r + 0] = e >>> 0),
            (t[r + 1] = e >>> 8),
            t
          )
        }
        function s (e, t) {
          return (
            void 0 === t && (t = 0),
            (e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]
          )
        }
        function a (e, t) {
          return (
            void 0 === t && (t = 0),
            ((e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]) >>> 0
          )
        }
        function c (e, t) {
          return (
            void 0 === t && (t = 0),
            (e[t + 3] << 24) | (e[t + 2] << 16) | (e[t + 1] << 8) | e[t]
          )
        }
        function u (e, t) {
          return (
            void 0 === t && (t = 0),
            ((e[t + 3] << 24) | (e[t + 2] << 16) | (e[t + 1] << 8) | e[t]) >>> 0
          )
        }
        function f (e, t, r) {
          return (
            void 0 === t && (t = new Uint8Array(4)),
            void 0 === r && (r = 0),
            (t[r + 0] = e >>> 24),
            (t[r + 1] = e >>> 16),
            (t[r + 2] = e >>> 8),
            (t[r + 3] = e >>> 0),
            t
          )
        }
        function l (e, t, r) {
          return (
            void 0 === t && (t = new Uint8Array(4)),
            void 0 === r && (r = 0),
            (t[r + 0] = e >>> 0),
            (t[r + 1] = e >>> 8),
            (t[r + 2] = e >>> 16),
            (t[r + 3] = e >>> 24),
            t
          )
        }
        function p (e, t, r) {
          return (
            void 0 === t && (t = new Uint8Array(8)),
            void 0 === r && (r = 0),
            f((e / 4294967296) >>> 0, t, r),
            f(e >>> 0, t, r + 4),
            t
          )
        }
        function h (e, t, r) {
          return (
            void 0 === t && (t = new Uint8Array(8)),
            void 0 === r && (r = 0),
            l(e >>> 0, t, r),
            l((e / 4294967296) >>> 0, t, r + 4),
            t
          )
        }
        ;(t.readInt16BE = function (e, t) {
          return (
            void 0 === t && (t = 0), (((e[t + 0] << 8) | e[t + 1]) << 16) >> 16
          )
        }),
        (t.readUint16BE = function (e, t) {
          return void 0 === t && (t = 0), ((e[t + 0] << 8) | e[t + 1]) >>> 0
        }),
        (t.readInt16LE = function (e, t) {
          return (
            void 0 === t && (t = 0), (((e[t + 1] << 8) | e[t]) << 16) >> 16
          )
        }),
        (t.readUint16LE = function (e, t) {
          return void 0 === t && (t = 0), ((e[t + 1] << 8) | e[t]) >>> 0
        }),
        (t.writeUint16BE = i),
        (t.writeInt16BE = i),
        (t.writeUint16LE = o),
        (t.writeInt16LE = o),
        (t.readInt32BE = s),
        (t.readUint32BE = a),
        (t.readInt32LE = c),
        (t.readUint32LE = u),
        (t.writeUint32BE = f),
        (t.writeInt32BE = f),
        (t.writeUint32LE = l),
        (t.writeInt32LE = l),
        (t.readInt64BE = function (e, t) {
          void 0 === t && (t = 0)
          const r = s(e, t)
          const n = s(e, t + 4)
          return 4294967296 * r + n - 4294967296 * (n >> 31)
        }),
        (t.readUint64BE = function (e, t) {
          return void 0 === t && (t = 0), 4294967296 * a(e, t) + a(e, t + 4)
        }),
        (t.readInt64LE = function (e, t) {
          void 0 === t && (t = 0)
          const r = c(e, t)
          return 4294967296 * c(e, t + 4) + r - 4294967296 * (r >> 31)
        }),
        (t.readUint64LE = function (e, t) {
          void 0 === t && (t = 0)
          const r = u(e, t)
          return 4294967296 * u(e, t + 4) + r
        }),
        (t.writeUint64BE = p),
        (t.writeInt64BE = p),
        (t.writeUint64LE = h),
        (t.writeInt64LE = h),
        (t.readUintBE = function (e, t, r) {
          if ((void 0 === r && (r = 0), e % 8 !== 0)) {
            throw new Error(
              'readUintBE supports only bitLengths divisible by 8'
            )
          }
          if (e / 8 > t.length - r) {
            throw new Error(
              'readUintBE: array is too short for the given bitLength'
            )
          }
          for (var n = 0, i = 1, o = e / 8 + r - 1; o >= r; o--) { (n += t[o] * i), (i *= 256) }
          return n
        }),
        (t.readUintLE = function (e, t, r) {
          if ((void 0 === r && (r = 0), e % 8 !== 0)) {
            throw new Error(
              'readUintLE supports only bitLengths divisible by 8'
            )
          }
          if (e / 8 > t.length - r) {
            throw new Error(
              'readUintLE: array is too short for the given bitLength'
            )
          }
          for (var n = 0, i = 1, o = r; o < r + e / 8; o++) { (n += t[o] * i), (i *= 256) }
          return n
        }),
        (t.writeUintBE = function (e, t, r, i) {
          if (
            (void 0 === r && (r = new Uint8Array(e / 8)),
            void 0 === i && (i = 0),
            e % 8 !== 0)
          ) {
            throw new Error(
              'writeUintBE supports only bitLengths divisible by 8'
            )
          }
          if (!n.isSafeInteger(t)) { throw new Error('writeUintBE value must be an integer') }
          for (let o = 1, s = e / 8 + i - 1; s >= i; s--) { (r[s] = (t / o) & 255), (o *= 256) }
          return r
        }),
        (t.writeUintLE = function (e, t, r, i) {
          if (
            (void 0 === r && (r = new Uint8Array(e / 8)),
            void 0 === i && (i = 0),
            e % 8 !== 0)
          ) {
            throw new Error(
              'writeUintLE supports only bitLengths divisible by 8'
            )
          }
          if (!n.isSafeInteger(t)) { throw new Error('writeUintLE value must be an integer') }
          for (let o = 1, s = i; s < i + e / 8; s++) { (r[s] = (t / o) & 255), (o *= 256) }
          return r
        }),
        (t.readFloat32BE = function (e, t) {
          return (
            void 0 === t && (t = 0),
            new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat32(t)
          )
        }),
        (t.readFloat32LE = function (e, t) {
          return (
            void 0 === t && (t = 0),
            new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat32(
              t,
              !0
            )
          )
        }),
        (t.readFloat64BE = function (e, t) {
          return (
            void 0 === t && (t = 0),
            new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat64(t)
          )
        }),
        (t.readFloat64LE = function (e, t) {
          return (
            void 0 === t && (t = 0),
            new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat64(
              t,
              !0
            )
          )
        }),
        (t.writeFloat32BE = function (e, t, r) {
          return (
            void 0 === t && (t = new Uint8Array(4)),
            void 0 === r && (r = 0),
            new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat32(
              r,
              e
            ),
            t
          )
        }),
        (t.writeFloat32LE = function (e, t, r) {
          return (
            void 0 === t && (t = new Uint8Array(4)),
            void 0 === r && (r = 0),
            new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat32(
              r,
              e,
              !0
            ),
            t
          )
        }),
        (t.writeFloat64BE = function (e, t, r) {
          return (
            void 0 === t && (t = new Uint8Array(8)),
            void 0 === r && (r = 0),
            new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat64(
              r,
              e
            ),
            t
          )
        }),
        (t.writeFloat64LE = function (e, t, r) {
          return (
            void 0 === t && (t = new Uint8Array(8)),
            void 0 === r && (r = 0),
            new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat64(
              r,
              e,
              !0
            ),
            t
          )
        })
      },
      6374: function (e, t, r) {
        'use strict'
        const n = r(7709)
        const i = r(52367)
        const o = r(7121)
        const s = r(40646)
        const a = r(25167)
        ;(t.Cv = 32), (t.WH = 12), (t.pg = 16)
        const c = new Uint8Array(16)
        const u = (function () {
          function e (e) {
            if (
              ((this.nonceLength = t.WH),
              (this.tagLength = t.pg),
              e.length !== t.Cv)
            ) { throw new Error('ChaCha20Poly1305 needs 32-byte key') }
            this._key = new Uint8Array(e)
          }
          return (
            (e.prototype.seal = function (e, t, r, i) {
              if (e.length > 16) { throw new Error('ChaCha20Poly1305: incorrect nonce length') }
              const s = new Uint8Array(16)
              s.set(e, s.length - e.length)
              const a = new Uint8Array(32)
              n.stream(this._key, s, a, 4)
              let c
              const u = t.length + this.tagLength
              if (i) {
                if (i.length !== u) {
                  throw new Error(
                    'ChaCha20Poly1305: incorrect destination length'
                  )
                }
                c = i
              } else c = new Uint8Array(u)
              return (
                n.streamXOR(this._key, s, t, c, 4),
                this._authenticate(
                  c.subarray(c.length - this.tagLength, c.length),
                  a,
                  c.subarray(0, c.length - this.tagLength),
                  r
                ),
                o.wipe(s),
                c
              )
            }),
            (e.prototype.open = function (e, t, r, i) {
              if (e.length > 16) { throw new Error('ChaCha20Poly1305: incorrect nonce length') }
              if (t.length < this.tagLength) return null
              const s = new Uint8Array(16)
              s.set(e, s.length - e.length)
              const c = new Uint8Array(32)
              n.stream(this._key, s, c, 4)
              const u = new Uint8Array(this.tagLength)
              if (
                (this._authenticate(
                  u,
                  c,
                  t.subarray(0, t.length - this.tagLength),
                  r
                ),
                !a.equal(u, t.subarray(t.length - this.tagLength, t.length)))
              ) { return null }
              let f
              const l = t.length - this.tagLength
              if (i) {
                if (i.length !== l) {
                  throw new Error(
                    'ChaCha20Poly1305: incorrect destination length'
                  )
                }
                f = i
              } else f = new Uint8Array(l)
              return (
                n.streamXOR(
                  this._key,
                  s,
                  t.subarray(0, t.length - this.tagLength),
                  f,
                  4
                ),
                o.wipe(s),
                f
              )
            }),
            (e.prototype.clean = function () {
              return o.wipe(this._key), this
            }),
            (e.prototype._authenticate = function (e, t, r, n) {
              const a = new i.Poly1305(t)
              n &&
                  (a.update(n),
                  n.length % 16 > 0 && a.update(c.subarray(n.length % 16))),
              a.update(r),
              r.length % 16 > 0 && a.update(c.subarray(r.length % 16))
              const u = new Uint8Array(8)
              n && s.writeUint64LE(n.length, u),
              a.update(u),
              s.writeUint64LE(r.length, u),
              a.update(u)
              for (var f = a.digest(), l = 0; l < f.length; l++) e[l] = f[l]
              a.clean(), o.wipe(f), o.wipe(u)
            }),
            e
          )
        })()
        t.OK = u
      },
      7709: function (e, t, r) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 })
        const n = r(40646)
        const i = r(7121)
        const o = 20
        function s (e, t, r) {
          for (
            var i = 1634760805,
              s = 857760878,
              a = 2036477234,
              c = 1797285236,
              u = (r[3] << 24) | (r[2] << 16) | (r[1] << 8) | r[0],
              f = (r[7] << 24) | (r[6] << 16) | (r[5] << 8) | r[4],
              l = (r[11] << 24) | (r[10] << 16) | (r[9] << 8) | r[8],
              p = (r[15] << 24) | (r[14] << 16) | (r[13] << 8) | r[12],
              h = (r[19] << 24) | (r[18] << 16) | (r[17] << 8) | r[16],
              d = (r[23] << 24) | (r[22] << 16) | (r[21] << 8) | r[20],
              v = (r[27] << 24) | (r[26] << 16) | (r[25] << 8) | r[24],
              g = (r[31] << 24) | (r[30] << 16) | (r[29] << 8) | r[28],
              y = (t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0],
              m = (t[7] << 24) | (t[6] << 16) | (t[5] << 8) | t[4],
              b = (t[11] << 24) | (t[10] << 16) | (t[9] << 8) | t[8],
              w = (t[15] << 24) | (t[14] << 16) | (t[13] << 8) | t[12],
              _ = i,
              x = s,
              E = a,
              k = c,
              S = u,
              Z = f,
              O = l,
              I = p,
              P = h,
              N = d,
              R = v,
              T = g,
              A = y,
              U = m,
              j = b,
              L = w,
              M = 0;
            M < o;
            M += 2
          ) {
            (S =
              ((S ^= P =
                (P + (A = ((A ^= _ = (_ + S) | 0) >>> 16) | (A << 16))) | 0) >>>
                20) |
              (S << 12)),
            (Z =
                ((Z ^= N =
                  (N + (U = ((U ^= x = (x + Z) | 0) >>> 16) | (U << 16))) |
                  0) >>>
                  20) |
                (Z << 12)),
            (O =
                ((O ^= R =
                  (R + (j = ((j ^= E = (E + O) | 0) >>> 16) | (j << 16))) |
                  0) >>>
                  20) |
                (O << 12)),
            (I =
                ((I ^= T =
                  (T + (L = ((L ^= k = (k + I) | 0) >>> 16) | (L << 16))) |
                  0) >>>
                  20) |
                (I << 12)),
            (O =
                ((O ^= R =
                  (R + (j = ((j ^= E = (E + O) | 0) >>> 24) | (j << 8))) |
                  0) >>>
                  25) |
                (O << 7)),
            (I =
                ((I ^= T =
                  (T + (L = ((L ^= k = (k + I) | 0) >>> 24) | (L << 8))) |
                  0) >>>
                  25) |
                (I << 7)),
            (Z =
                ((Z ^= N =
                  (N + (U = ((U ^= x = (x + Z) | 0) >>> 24) | (U << 8))) |
                  0) >>>
                  25) |
                (Z << 7)),
            (S =
                ((S ^= P =
                  (P + (A = ((A ^= _ = (_ + S) | 0) >>> 24) | (A << 8))) |
                  0) >>>
                  25) |
                (S << 7)),
            (Z =
                ((Z ^= R =
                  (R + (L = ((L ^= _ = (_ + Z) | 0) >>> 16) | (L << 16))) |
                  0) >>>
                  20) |
                (Z << 12)),
            (O =
                ((O ^= T =
                  (T + (A = ((A ^= x = (x + O) | 0) >>> 16) | (A << 16))) |
                  0) >>>
                  20) |
                (O << 12)),
            (I =
                ((I ^= P =
                  (P + (U = ((U ^= E = (E + I) | 0) >>> 16) | (U << 16))) |
                  0) >>>
                  20) |
                (I << 12)),
            (S =
                ((S ^= N =
                  (N + (j = ((j ^= k = (k + S) | 0) >>> 16) | (j << 16))) |
                  0) >>>
                  20) |
                (S << 12)),
            (I =
                ((I ^= P =
                  (P + (U = ((U ^= E = (E + I) | 0) >>> 24) | (U << 8))) |
                  0) >>>
                  25) |
                (I << 7)),
            (S =
                ((S ^= N =
                  (N + (j = ((j ^= k = (k + S) | 0) >>> 24) | (j << 8))) |
                  0) >>>
                  25) |
                (S << 7)),
            (O =
                ((O ^= T =
                  (T + (A = ((A ^= x = (x + O) | 0) >>> 24) | (A << 8))) |
                  0) >>>
                  25) |
                (O << 7)),
            (Z =
                ((Z ^= R =
                  (R + (L = ((L ^= _ = (_ + Z) | 0) >>> 24) | (L << 8))) |
                  0) >>>
                  25) |
                (Z << 7))
          }
          n.writeUint32LE((_ + i) | 0, e, 0),
          n.writeUint32LE((x + s) | 0, e, 4),
          n.writeUint32LE((E + a) | 0, e, 8),
          n.writeUint32LE((k + c) | 0, e, 12),
          n.writeUint32LE((S + u) | 0, e, 16),
          n.writeUint32LE((Z + f) | 0, e, 20),
          n.writeUint32LE((O + l) | 0, e, 24),
          n.writeUint32LE((I + p) | 0, e, 28),
          n.writeUint32LE((P + h) | 0, e, 32),
          n.writeUint32LE((N + d) | 0, e, 36),
          n.writeUint32LE((R + v) | 0, e, 40),
          n.writeUint32LE((T + g) | 0, e, 44),
          n.writeUint32LE((A + y) | 0, e, 48),
          n.writeUint32LE((U + m) | 0, e, 52),
          n.writeUint32LE((j + b) | 0, e, 56),
          n.writeUint32LE((L + w) | 0, e, 60)
        }
        function a (e, t, r, n, o) {
          if ((void 0 === o && (o = 0), e.length !== 32)) { throw new Error('ChaCha: key size must be 32 bytes') }
          if (n.length < r.length) { throw new Error('ChaCha: destination is shorter than source') }
          let a, u
          if (o === 0) {
            if (t.length !== 8 && t.length !== 12) {
              throw new Error('ChaCha nonce must be 8 or 12 bytes')
            }(u = (a = new Uint8Array(16)).length - t.length), a.set(t, u)
          } else {
            if (t.length !== 16) {
              throw new Error('ChaCha nonce with counter must be 16 bytes')
            }(a = t), (u = o)
          }
          for (var f = new Uint8Array(64), l = 0; l < r.length; l += 64) {
            s(f, a, e)
            for (let p = l; p < l + 64 && p < r.length; p++) { n[p] = r[p] ^ f[p - l] }
            c(a, 0, u)
          }
          return i.wipe(f), o === 0 && i.wipe(a), n
        }
        function c (e, t, r) {
          for (var n = 1; r--;) { (n = (n + (255 & e[t])) | 0), (e[t] = 255 & n), (n >>>= 8), t++ }
          if (n > 0) throw new Error('ChaCha: counter overflow')
        }
        ;(t.streamXOR = a),
        (t.stream = function (e, t, r, n) {
          return void 0 === n && (n = 0), i.wipe(r), a(e, t, r, r, n)
        })
      },
      25167: function (e, t) {
        'use strict'
        function r (e, t) {
          if (e.length !== t.length) return 0
          for (var r = 0, n = 0; n < e.length; n++) r |= e[n] ^ t[n]
          return 1 & ((r - 1) >>> 8)
        }
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.select = function (e, t, r) {
          return (~(e - 1) & t) | ((e - 1) & r)
        }),
        (t.lessOrEqual = function (e, t) {
          return (((0 | e) - (0 | t) - 1) >>> 31) & 1
        }),
        (t.compare = r),
        (t.equal = function (e, t) {
          return e.length !== 0 && t.length !== 0 && r(e, t) !== 0
        })
      },
      66102: function (e, t, r) {
        'use strict'
        t.Xx = t._w = t.aP = t.KS = t.jQ = void 0
        const n = r(88557)
        const i = r(91154)
        const o = r(7121)
        function s (e) {
          const t = new Float64Array(16)
          if (e) for (let r = 0; r < e.length; r++) t[r] = e[r]
          return t
        }
        ;(t.jQ = 64), (t.KS = 64), (t.aP = 32), (new Uint8Array(32)[0] = 9)
        const a = s()
        const c = s([1])
        const u = s([
          30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585,
          16505, 36039, 65139, 11119, 27886, 20995
        ])
        const f = s([
          61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171,
          33010, 6542, 64743, 22239, 55772, 9222
        ])
        const l = s([
          54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412,
          64982, 57905, 49316, 21502, 52590, 14035, 8553
        ])
        const p = s([
          26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
          26214, 26214, 26214, 26214, 26214, 26214, 26214
        ])
        const h = s([
          41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867,
          153, 11085, 57099, 20417, 9344, 11139
        ])
        function d (e, t) {
          for (let r = 0; r < 16; r++) e[r] = 0 | t[r]
        }
        function v (e) {
          for (var t = 1, r = 0; r < 16; r++) {
            const n = e[r] + t + 65535
            ;(t = Math.floor(n / 65536)), (e[r] = n - 65536 * t)
          }
          e[0] += t - 1 + 37 * (t - 1)
        }
        function g (e, t, r) {
          for (let n = ~(r - 1), i = 0; i < 16; i++) {
            const o = n & (e[i] ^ t[i])
            ;(e[i] ^= o), (t[i] ^= o)
          }
        }
        function y (e, t) {
          for (var r = s(), n = s(), i = 0; i < 16; i++) n[i] = t[i]
          v(n), v(n), v(n)
          for (let o = 0; o < 2; o++) {
            r[0] = n[0] - 65517
            for (let a = 1; a < 15; a++) {
              (r[a] = n[a] - 65535 - ((r[a - 1] >> 16) & 1)),
              (r[a - 1] &= 65535)
            }
            r[15] = n[15] - 32767 - ((r[14] >> 16) & 1)
            const c = (r[15] >> 16) & 1
            ;(r[14] &= 65535), g(n, r, 1 - c)
          }
          for (let u = 0; u < 16; u++) { (e[2 * u] = 255 & n[u]), (e[2 * u + 1] = n[u] >> 8) }
        }
        function m (e, t) {
          for (var r = 0, n = 0; n < 32; n++) r |= e[n] ^ t[n]
          return (1 & ((r - 1) >>> 8)) - 1
        }
        function b (e, t) {
          const r = new Uint8Array(32)
          const n = new Uint8Array(32)
          return y(r, e), y(n, t), m(r, n)
        }
        function w (e) {
          const t = new Uint8Array(32)
          return y(t, e), 1 & t[0]
        }
        function _ (e, t, r) {
          for (let n = 0; n < 16; n++) e[n] = t[n] + r[n]
        }
        function x (e, t, r) {
          for (let n = 0; n < 16; n++) e[n] = t[n] - r[n]
        }
        function E (e, t, r) {
          let n
          let i
          let o = 0
          let s = 0
          let a = 0
          let c = 0
          let u = 0
          let f = 0
          let l = 0
          let p = 0
          let h = 0
          let d = 0
          let v = 0
          let g = 0
          let y = 0
          let m = 0
          let b = 0
          let w = 0
          let _ = 0
          let x = 0
          let E = 0
          let k = 0
          let S = 0
          let Z = 0
          let O = 0
          let I = 0
          let P = 0
          let N = 0
          let R = 0
          let T = 0
          let A = 0
          let U = 0
          let j = 0
          const L = r[0]
          const M = r[1]
          const C = r[2]
          const D = r[3]
          const z = r[4]
          const q = r[5]
          const H = r[6]
          const V = r[7]
          const K = r[8]
          const F = r[9]
          const B = r[10]
          const W = r[11]
          const G = r[12]
          const Y = r[13]
          const J = r[14]
          const X = r[15]
          ;(o += (n = t[0]) * L),
          (s += n * M),
          (a += n * C),
          (c += n * D),
          (u += n * z),
          (f += n * q),
          (l += n * H),
          (p += n * V),
          (h += n * K),
          (d += n * F),
          (v += n * B),
          (g += n * W),
          (y += n * G),
          (m += n * Y),
          (b += n * J),
          (w += n * X),
          (s += (n = t[1]) * L),
          (a += n * M),
          (c += n * C),
          (u += n * D),
          (f += n * z),
          (l += n * q),
          (p += n * H),
          (h += n * V),
          (d += n * K),
          (v += n * F),
          (g += n * B),
          (y += n * W),
          (m += n * G),
          (b += n * Y),
          (w += n * J),
          (_ += n * X),
          (a += (n = t[2]) * L),
          (c += n * M),
          (u += n * C),
          (f += n * D),
          (l += n * z),
          (p += n * q),
          (h += n * H),
          (d += n * V),
          (v += n * K),
          (g += n * F),
          (y += n * B),
          (m += n * W),
          (b += n * G),
          (w += n * Y),
          (_ += n * J),
          (x += n * X),
          (c += (n = t[3]) * L),
          (u += n * M),
          (f += n * C),
          (l += n * D),
          (p += n * z),
          (h += n * q),
          (d += n * H),
          (v += n * V),
          (g += n * K),
          (y += n * F),
          (m += n * B),
          (b += n * W),
          (w += n * G),
          (_ += n * Y),
          (x += n * J),
          (E += n * X),
          (u += (n = t[4]) * L),
          (f += n * M),
          (l += n * C),
          (p += n * D),
          (h += n * z),
          (d += n * q),
          (v += n * H),
          (g += n * V),
          (y += n * K),
          (m += n * F),
          (b += n * B),
          (w += n * W),
          (_ += n * G),
          (x += n * Y),
          (E += n * J),
          (k += n * X),
          (f += (n = t[5]) * L),
          (l += n * M),
          (p += n * C),
          (h += n * D),
          (d += n * z),
          (v += n * q),
          (g += n * H),
          (y += n * V),
          (m += n * K),
          (b += n * F),
          (w += n * B),
          (_ += n * W),
          (x += n * G),
          (E += n * Y),
          (k += n * J),
          (S += n * X),
          (l += (n = t[6]) * L),
          (p += n * M),
          (h += n * C),
          (d += n * D),
          (v += n * z),
          (g += n * q),
          (y += n * H),
          (m += n * V),
          (b += n * K),
          (w += n * F),
          (_ += n * B),
          (x += n * W),
          (E += n * G),
          (k += n * Y),
          (S += n * J),
          (Z += n * X),
          (p += (n = t[7]) * L),
          (h += n * M),
          (d += n * C),
          (v += n * D),
          (g += n * z),
          (y += n * q),
          (m += n * H),
          (b += n * V),
          (w += n * K),
          (_ += n * F),
          (x += n * B),
          (E += n * W),
          (k += n * G),
          (S += n * Y),
          (Z += n * J),
          (O += n * X),
          (h += (n = t[8]) * L),
          (d += n * M),
          (v += n * C),
          (g += n * D),
          (y += n * z),
          (m += n * q),
          (b += n * H),
          (w += n * V),
          (_ += n * K),
          (x += n * F),
          (E += n * B),
          (k += n * W),
          (S += n * G),
          (Z += n * Y),
          (O += n * J),
          (I += n * X),
          (d += (n = t[9]) * L),
          (v += n * M),
          (g += n * C),
          (y += n * D),
          (m += n * z),
          (b += n * q),
          (w += n * H),
          (_ += n * V),
          (x += n * K),
          (E += n * F),
          (k += n * B),
          (S += n * W),
          (Z += n * G),
          (O += n * Y),
          (I += n * J),
          (P += n * X),
          (v += (n = t[10]) * L),
          (g += n * M),
          (y += n * C),
          (m += n * D),
          (b += n * z),
          (w += n * q),
          (_ += n * H),
          (x += n * V),
          (E += n * K),
          (k += n * F),
          (S += n * B),
          (Z += n * W),
          (O += n * G),
          (I += n * Y),
          (P += n * J),
          (N += n * X),
          (g += (n = t[11]) * L),
          (y += n * M),
          (m += n * C),
          (b += n * D),
          (w += n * z),
          (_ += n * q),
          (x += n * H),
          (E += n * V),
          (k += n * K),
          (S += n * F),
          (Z += n * B),
          (O += n * W),
          (I += n * G),
          (P += n * Y),
          (N += n * J),
          (R += n * X),
          (y += (n = t[12]) * L),
          (m += n * M),
          (b += n * C),
          (w += n * D),
          (_ += n * z),
          (x += n * q),
          (E += n * H),
          (k += n * V),
          (S += n * K),
          (Z += n * F),
          (O += n * B),
          (I += n * W),
          (P += n * G),
          (N += n * Y),
          (R += n * J),
          (T += n * X),
          (m += (n = t[13]) * L),
          (b += n * M),
          (w += n * C),
          (_ += n * D),
          (x += n * z),
          (E += n * q),
          (k += n * H),
          (S += n * V),
          (Z += n * K),
          (O += n * F),
          (I += n * B),
          (P += n * W),
          (N += n * G),
          (R += n * Y),
          (T += n * J),
          (A += n * X),
          (b += (n = t[14]) * L),
          (w += n * M),
          (_ += n * C),
          (x += n * D),
          (E += n * z),
          (k += n * q),
          (S += n * H),
          (Z += n * V),
          (O += n * K),
          (I += n * F),
          (P += n * B),
          (N += n * W),
          (R += n * G),
          (T += n * Y),
          (A += n * J),
          (U += n * X),
          (w += (n = t[15]) * L),
          (s += 38 * (x += n * C)),
          (a += 38 * (E += n * D)),
          (c += 38 * (k += n * z)),
          (u += 38 * (S += n * q)),
          (f += 38 * (Z += n * H)),
          (l += 38 * (O += n * V)),
          (p += 38 * (I += n * K)),
          (h += 38 * (P += n * F)),
          (d += 38 * (N += n * B)),
          (v += 38 * (R += n * W)),
          (g += 38 * (T += n * G)),
          (y += 38 * (A += n * Y)),
          (m += 38 * (U += n * J)),
          (b += 38 * (j += n * X)),
          (o =
              (n = (o += 38 * (_ += n * M)) + (i = 1) + 65535) -
              65536 * (i = Math.floor(n / 65536))),
          (s = (n = s + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (a = (n = a + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (c = (n = c + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (u = (n = u + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (f = (n = f + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (l = (n = l + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (p = (n = p + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (h = (n = h + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (d = (n = d + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (v = (n = v + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (g = (n = g + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (y = (n = y + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (m = (n = m + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (b = (n = b + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (w = (n = w + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (o =
              (n = (o += i - 1 + 37 * (i - 1)) + (i = 1) + 65535) -
              65536 * (i = Math.floor(n / 65536))),
          (s = (n = s + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (a = (n = a + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (c = (n = c + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (u = (n = u + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (f = (n = f + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (l = (n = l + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (p = (n = p + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (h = (n = h + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (d = (n = d + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (v = (n = v + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (g = (n = g + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (y = (n = y + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (m = (n = m + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (b = (n = b + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (w = (n = w + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (o += i - 1 + 37 * (i - 1)),
          (e[0] = o),
          (e[1] = s),
          (e[2] = a),
          (e[3] = c),
          (e[4] = u),
          (e[5] = f),
          (e[6] = l),
          (e[7] = p),
          (e[8] = h),
          (e[9] = d),
          (e[10] = v),
          (e[11] = g),
          (e[12] = y),
          (e[13] = m),
          (e[14] = b),
          (e[15] = w)
        }
        function k (e, t) {
          E(e, t, t)
        }
        function S (e, t) {
          let r
          const n = s()
          for (r = 0; r < 16; r++) n[r] = t[r]
          for (r = 253; r >= 0; r--) k(n, n), r !== 2 && r !== 4 && E(n, n, t)
          for (r = 0; r < 16; r++) e[r] = n[r]
        }
        function Z (e, t) {
          const r = s()
          const n = s()
          const i = s()
          const o = s()
          const a = s()
          const c = s()
          const u = s()
          const l = s()
          const p = s()
          x(r, e[1], e[0]),
          x(p, t[1], t[0]),
          E(r, r, p),
          _(n, e[0], e[1]),
          _(p, t[0], t[1]),
          E(n, n, p),
          E(i, e[3], t[3]),
          E(i, i, f),
          E(o, e[2], t[2]),
          _(o, o, o),
          x(a, n, r),
          x(c, o, i),
          _(u, o, i),
          _(l, n, r),
          E(e[0], a, c),
          E(e[1], l, u),
          E(e[2], u, c),
          E(e[3], a, l)
        }
        function O (e, t, r) {
          for (let n = 0; n < 4; n++) g(e[n], t[n], r)
        }
        function I (e, t) {
          const r = s()
          const n = s()
          const i = s()
          S(i, t[2]),
          E(r, t[0], i),
          E(n, t[1], i),
          y(e, n),
          (e[31] ^= w(r) << 7)
        }
        function P (e, t, r) {
          d(e[0], a), d(e[1], c), d(e[2], c), d(e[3], a)
          for (let n = 255; n >= 0; --n) {
            const i = (r[(n / 8) | 0] >> (7 & n)) & 1
            O(e, t, i), Z(t, e), Z(e, e), O(e, t, i)
          }
        }
        function N (e, t) {
          const r = [s(), s(), s(), s()]
          d(r[0], l), d(r[1], p), d(r[2], c), E(r[3], l, p), P(e, r, t)
        }
        function R (e) {
          if (e.length !== t.aP) { throw new Error('ed25519: seed must be '.concat(t.aP, ' bytes')) }
          const r = (0, i.hash)(e)
          ;(r[0] &= 248), (r[31] &= 127), (r[31] |= 64)
          const n = new Uint8Array(32)
          const o = [s(), s(), s(), s()]
          N(o, r), I(n, o)
          const a = new Uint8Array(64)
          return a.set(e), a.set(n, 32), { publicKey: n, secretKey: a }
        }
        t._w = R
        const T = new Float64Array([
          237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222,
          20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16
        ])
        function A (e, t) {
          let r, n, i, o
          for (n = 63; n >= 32; --n) {
            for (r = 0, i = n - 32, o = n - 12; i < o; ++i) {
              (t[i] += r - 16 * t[n] * T[i - (n - 32)]),
              (r = Math.floor((t[i] + 128) / 256)),
              (t[i] -= 256 * r)
            }(t[i] += r), (t[n] = 0)
          }
          for (r = 0, i = 0; i < 32; i++) { (t[i] += r - (t[31] >> 4) * T[i]), (r = t[i] >> 8), (t[i] &= 255) }
          for (i = 0; i < 32; i++) t[i] -= r * T[i]
          for (n = 0; n < 32; n++) (t[n + 1] += t[n] >> 8), (e[n] = 255 & t[n])
        }
        function U (e) {
          for (var t = new Float64Array(64), r = 0; r < 64; r++) t[r] = e[r]
          for (let n = 0; n < 64; n++) e[n] = 0
          A(e, t)
        }
        function j (e, t) {
          const r = s()
          const n = s()
          const i = s()
          const o = s()
          const f = s()
          const l = s()
          const p = s()
          return (
            d(e[2], c),
            (function (e, t) {
              for (let r = 0; r < 16; r++) e[r] = t[2 * r] + (t[2 * r + 1] << 8)
              e[15] &= 32767
            })(e[1], t),
            k(i, e[1]),
            E(o, i, u),
            x(i, i, e[2]),
            _(o, e[2], o),
            k(f, o),
            k(l, f),
            E(p, l, f),
            E(r, p, i),
            E(r, r, o),
            (function (e, t) {
              let r
              const n = s()
              for (r = 0; r < 16; r++) n[r] = t[r]
              for (r = 250; r >= 0; r--) k(n, n), r !== 1 && E(n, n, t)
              for (r = 0; r < 16; r++) e[r] = n[r]
            })(r, r),
            E(r, r, i),
            E(r, r, o),
            E(r, r, o),
            E(e[0], r, o),
            k(n, e[0]),
            E(n, n, o),
            b(n, i) && E(e[0], e[0], h),
            k(n, e[0]),
            E(n, n, o),
            b(n, i)
              ? -1
              : (w(e[0]) === t[31] >> 7 && x(e[0], a, e[0]),
                E(e[3], e[0], e[1]),
                0)
          )
        }
        t.Xx = function (e, t) {
          const r = new Float64Array(64)
          const n = [s(), s(), s(), s()]
          const o = (0, i.hash)(e.subarray(0, 32))
          ;(o[0] &= 248), (o[31] &= 127), (o[31] |= 64)
          const a = new Uint8Array(64)
          a.set(o.subarray(32), 32)
          const c = new i.SHA512()
          c.update(a.subarray(32)), c.update(t)
          const u = c.digest()
          c.clean(),
          U(u),
          N(n, u),
          I(a, n),
          c.reset(),
          c.update(a.subarray(0, 32)),
          c.update(e.subarray(32)),
          c.update(t)
          const f = c.digest()
          U(f)
          for (let l = 0; l < 32; l++) r[l] = u[l]
          for (let p = 0; p < 32; p++) { for (let h = 0; h < 32; h++) r[p + h] += f[p] * o[h] }
          return A(a.subarray(32), r), a
        }
      },
      20358: function (e, t) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.isSerializableHash = function (e) {
          return (
            typeof e.saveState !== 'undefined' &&
              typeof e.restoreState !== 'undefined' &&
              typeof e.cleanSavedState !== 'undefined'
          )
        })
      },
      33035: function (e, t, r) {
        'use strict'
        const n = r(88034)
        const i = r(7121)
        const o = (function () {
          function e (e, t, r, i) {
            void 0 === r && (r = new Uint8Array(0)),
            (this._counter = new Uint8Array(1)),
            (this._hash = e),
            (this._info = i)
            const o = n.hmac(this._hash, r, t)
              ;(this._hmac = new n.HMAC(e, o)),
            (this._buffer = new Uint8Array(this._hmac.digestLength)),
            (this._bufpos = this._buffer.length)
          }
          return (
            (e.prototype._fillBuffer = function () {
              this._counter[0]++
              const e = this._counter[0]
              if (e === 0) throw new Error('hkdf: cannot expand more')
              this._hmac.reset(),
              e > 1 && this._hmac.update(this._buffer),
              this._info && this._hmac.update(this._info),
              this._hmac.update(this._counter),
              this._hmac.finish(this._buffer),
              (this._bufpos = 0)
            }),
            (e.prototype.expand = function (e) {
              for (var t = new Uint8Array(e), r = 0; r < t.length; r++) {
                this._bufpos === this._buffer.length && this._fillBuffer(),
                (t[r] = this._buffer[this._bufpos++])
              }
              return t
            }),
            (e.prototype.clean = function () {
              this._hmac.clean(),
              i.wipe(this._buffer),
              i.wipe(this._counter),
              (this._bufpos = 0)
            }),
            e
          )
        })()
        t.t = o
      },
      88034: function (e, t, r) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 })
        const n = r(20358)
        const i = r(25167)
        const o = r(7121)
        const s = (function () {
          function e (e, t) {
            ;(this._finished = !1),
            (this._inner = new e()),
            (this._outer = new e()),
            (this.blockSize = this._outer.blockSize),
            (this.digestLength = this._outer.digestLength)
            const r = new Uint8Array(this.blockSize)
            t.length > this.blockSize
              ? this._inner.update(t).finish(r).clean()
              : r.set(t)
            for (var i = 0; i < r.length; i++) r[i] ^= 54
            this._inner.update(r)
            for (i = 0; i < r.length; i++) r[i] ^= 106
            this._outer.update(r),
            n.isSerializableHash(this._inner) &&
                  n.isSerializableHash(this._outer) &&
                  ((this._innerKeyedState = this._inner.saveState()),
                  (this._outerKeyedState = this._outer.saveState())),
            o.wipe(r)
          }
          return (
            (e.prototype.reset = function () {
              if (
                !n.isSerializableHash(this._inner) ||
                  !n.isSerializableHash(this._outer)
              ) {
                throw new Error(
                  "hmac: can't reset() because hash doesn't implement restoreState()"
                )
              }
              return (
                this._inner.restoreState(this._innerKeyedState),
                this._outer.restoreState(this._outerKeyedState),
                (this._finished = !1),
                this
              )
            }),
            (e.prototype.clean = function () {
              n.isSerializableHash(this._inner) &&
                  this._inner.cleanSavedState(this._innerKeyedState),
              n.isSerializableHash(this._outer) &&
                    this._outer.cleanSavedState(this._outerKeyedState),
              this._inner.clean(),
              this._outer.clean()
            }),
            (e.prototype.update = function (e) {
              return this._inner.update(e), this
            }),
            (e.prototype.finish = function (e) {
              return this._finished
                ? (this._outer.finish(e), this)
                : (this._inner.finish(e),
                  this._outer
                    .update(e.subarray(0, this.digestLength))
                    .finish(e),
                  (this._finished = !0),
                  this)
            }),
            (e.prototype.digest = function () {
              const e = new Uint8Array(this.digestLength)
              return this.finish(e), e
            }),
            (e.prototype.saveState = function () {
              if (!n.isSerializableHash(this._inner)) {
                throw new Error(
                  "hmac: can't saveState() because hash doesn't implement it"
                )
              }
              return this._inner.saveState()
            }),
            (e.prototype.restoreState = function (e) {
              if (
                !n.isSerializableHash(this._inner) ||
                  !n.isSerializableHash(this._outer)
              ) {
                throw new Error(
                  "hmac: can't restoreState() because hash doesn't implement it"
                )
              }
              return (
                this._inner.restoreState(e),
                this._outer.restoreState(this._outerKeyedState),
                (this._finished = !1),
                this
              )
            }),
            (e.prototype.cleanSavedState = function (e) {
              if (!n.isSerializableHash(this._inner)) {
                throw new Error(
                  "hmac: can't cleanSavedState() because hash doesn't implement it"
                )
              }
              this._inner.cleanSavedState(e)
            }),
            e
          )
        })()
        ;(t.HMAC = s),
        (t.hmac = function (e, t, r) {
          const n = new s(e, t)
          n.update(r)
          const i = n.digest()
          return n.clean(), i
        }),
        (t.equal = i.equal)
      },
      42893: function (e, t) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.mul =
            Math.imul ||
            function (e, t) {
              const r = 65535 & e
              const n = 65535 & t
              return (
                (r * n +
                  (((((e >>> 16) & 65535) * n + r * ((t >>> 16) & 65535)) <<
                    16) >>>
                    0)) |
                0
              )
            }),
        (t.add = function (e, t) {
          return (e + t) | 0
        }),
        (t.sub = function (e, t) {
          return (e - t) | 0
        }),
        (t.rotl = function (e, t) {
          return (e << t) | (e >>> (32 - t))
        }),
        (t.rotr = function (e, t) {
          return (e << (32 - t)) | (e >>> t)
        }),
        (t.isInteger =
            Number.isInteger ||
            function (e) {
              return typeof e === 'number' && isFinite(e) && Math.floor(e) === e
            }),
        (t.MAX_SAFE_INTEGER = 9007199254740991),
        (t.isSafeInteger = function (e) {
          return (
            t.isInteger(e) &&
              e >= -t.MAX_SAFE_INTEGER &&
              e <= t.MAX_SAFE_INTEGER
          )
        })
      },
      52367: function (e, t, r) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 })
        const n = r(25167)
        const i = r(7121)
        t.DIGEST_LENGTH = 16
        const o = (function () {
          function e (e) {
            ;(this.digestLength = t.DIGEST_LENGTH),
            (this._buffer = new Uint8Array(16)),
            (this._r = new Uint16Array(10)),
            (this._h = new Uint16Array(10)),
            (this._pad = new Uint16Array(8)),
            (this._leftover = 0),
            (this._fin = 0),
            (this._finished = !1)
            const r = e[0] | (e[1] << 8)
            this._r[0] = 8191 & r
            const n = e[2] | (e[3] << 8)
            this._r[1] = 8191 & ((r >>> 13) | (n << 3))
            const i = e[4] | (e[5] << 8)
            this._r[2] = 7939 & ((n >>> 10) | (i << 6))
            const o = e[6] | (e[7] << 8)
            this._r[3] = 8191 & ((i >>> 7) | (o << 9))
            const s = e[8] | (e[9] << 8)
            ;(this._r[4] = 255 & ((o >>> 4) | (s << 12))),
            (this._r[5] = (s >>> 1) & 8190)
            const a = e[10] | (e[11] << 8)
            this._r[6] = 8191 & ((s >>> 14) | (a << 2))
            const c = e[12] | (e[13] << 8)
            this._r[7] = 8065 & ((a >>> 11) | (c << 5))
            const u = e[14] | (e[15] << 8)
            ;(this._r[8] = 8191 & ((c >>> 8) | (u << 8))),
            (this._r[9] = (u >>> 5) & 127),
            (this._pad[0] = e[16] | (e[17] << 8)),
            (this._pad[1] = e[18] | (e[19] << 8)),
            (this._pad[2] = e[20] | (e[21] << 8)),
            (this._pad[3] = e[22] | (e[23] << 8)),
            (this._pad[4] = e[24] | (e[25] << 8)),
            (this._pad[5] = e[26] | (e[27] << 8)),
            (this._pad[6] = e[28] | (e[29] << 8)),
            (this._pad[7] = e[30] | (e[31] << 8))
          }
          return (
            (e.prototype._blocks = function (e, t, r) {
              for (
                var n = this._fin ? 0 : 2048,
                  i = this._h[0],
                  o = this._h[1],
                  s = this._h[2],
                  a = this._h[3],
                  c = this._h[4],
                  u = this._h[5],
                  f = this._h[6],
                  l = this._h[7],
                  p = this._h[8],
                  h = this._h[9],
                  d = this._r[0],
                  v = this._r[1],
                  g = this._r[2],
                  y = this._r[3],
                  m = this._r[4],
                  b = this._r[5],
                  w = this._r[6],
                  _ = this._r[7],
                  x = this._r[8],
                  E = this._r[9];
                r >= 16;

              ) {
                const k = e[t + 0] | (e[t + 1] << 8)
                i += 8191 & k
                const S = e[t + 2] | (e[t + 3] << 8)
                o += 8191 & ((k >>> 13) | (S << 3))
                const Z = e[t + 4] | (e[t + 5] << 8)
                s += 8191 & ((S >>> 10) | (Z << 6))
                const O = e[t + 6] | (e[t + 7] << 8)
                a += 8191 & ((Z >>> 7) | (O << 9))
                const I = e[t + 8] | (e[t + 9] << 8)
                ;(c += 8191 & ((O >>> 4) | (I << 12))), (u += (I >>> 1) & 8191)
                const P = e[t + 10] | (e[t + 11] << 8)
                f += 8191 & ((I >>> 14) | (P << 2))
                const N = e[t + 12] | (e[t + 13] << 8)
                l += 8191 & ((P >>> 11) | (N << 5))
                const R = e[t + 14] | (e[t + 15] << 8)
                let T = 0
                let A = T
                ;(A += i * d),
                (A += o * (5 * E)),
                (A += s * (5 * x)),
                (A += a * (5 * _)),
                (T = (A += c * (5 * w)) >>> 13),
                (A &= 8191),
                (A += u * (5 * b)),
                (A += f * (5 * m)),
                (A += l * (5 * y)),
                (A += (p += 8191 & ((N >>> 8) | (R << 8))) * (5 * g))
                let U = (T += (A += (h += (R >>> 5) | n) * (5 * v)) >>> 13)
                ;(U += i * v),
                (U += o * d),
                (U += s * (5 * E)),
                (U += a * (5 * x)),
                (T = (U += c * (5 * _)) >>> 13),
                (U &= 8191),
                (U += u * (5 * w)),
                (U += f * (5 * b)),
                (U += l * (5 * m)),
                (U += p * (5 * y)),
                (T += (U += h * (5 * g)) >>> 13),
                (U &= 8191)
                let j = T
                ;(j += i * g),
                (j += o * v),
                (j += s * d),
                (j += a * (5 * E)),
                (T = (j += c * (5 * x)) >>> 13),
                (j &= 8191),
                (j += u * (5 * _)),
                (j += f * (5 * w)),
                (j += l * (5 * b)),
                (j += p * (5 * m))
                let L = (T += (j += h * (5 * y)) >>> 13)
                ;(L += i * y),
                (L += o * g),
                (L += s * v),
                (L += a * d),
                (T = (L += c * (5 * E)) >>> 13),
                (L &= 8191),
                (L += u * (5 * x)),
                (L += f * (5 * _)),
                (L += l * (5 * w)),
                (L += p * (5 * b))
                let M = (T += (L += h * (5 * m)) >>> 13)
                ;(M += i * m),
                (M += o * y),
                (M += s * g),
                (M += a * v),
                (T = (M += c * d) >>> 13),
                (M &= 8191),
                (M += u * (5 * E)),
                (M += f * (5 * x)),
                (M += l * (5 * _)),
                (M += p * (5 * w))
                let C = (T += (M += h * (5 * b)) >>> 13)
                ;(C += i * b),
                (C += o * m),
                (C += s * y),
                (C += a * g),
                (T = (C += c * v) >>> 13),
                (C &= 8191),
                (C += u * d),
                (C += f * (5 * E)),
                (C += l * (5 * x)),
                (C += p * (5 * _))
                let D = (T += (C += h * (5 * w)) >>> 13)
                ;(D += i * w),
                (D += o * b),
                (D += s * m),
                (D += a * y),
                (T = (D += c * g) >>> 13),
                (D &= 8191),
                (D += u * v),
                (D += f * d),
                (D += l * (5 * E)),
                (D += p * (5 * x))
                let z = (T += (D += h * (5 * _)) >>> 13)
                ;(z += i * _),
                (z += o * w),
                (z += s * b),
                (z += a * m),
                (T = (z += c * y) >>> 13),
                (z &= 8191),
                (z += u * g),
                (z += f * v),
                (z += l * d),
                (z += p * (5 * E))
                let q = (T += (z += h * (5 * x)) >>> 13)
                ;(q += i * x),
                (q += o * _),
                (q += s * w),
                (q += a * b),
                (T = (q += c * m) >>> 13),
                (q &= 8191),
                (q += u * y),
                (q += f * g),
                (q += l * v),
                (q += p * d)
                let H = (T += (q += h * (5 * E)) >>> 13)
                ;(H += i * E),
                (H += o * x),
                (H += s * _),
                (H += a * w),
                (T = (H += c * b) >>> 13),
                (H &= 8191),
                (H += u * m),
                (H += f * y),
                (H += l * g),
                (H += p * v),
                (i = A =
                    8191 &
                    (T =
                      ((T = (((T += (H += h * d) >>> 13) << 2) + T) | 0) +
                        (A &= 8191)) |
                      0)),
                (o = U += T >>>= 13),
                (s = j &= 8191),
                (a = L &= 8191),
                (c = M &= 8191),
                (u = C &= 8191),
                (f = D &= 8191),
                (l = z &= 8191),
                (p = q &= 8191),
                (h = H &= 8191),
                (t += 16),
                (r -= 16)
              }
              ;(this._h[0] = i),
              (this._h[1] = o),
              (this._h[2] = s),
              (this._h[3] = a),
              (this._h[4] = c),
              (this._h[5] = u),
              (this._h[6] = f),
              (this._h[7] = l),
              (this._h[8] = p),
              (this._h[9] = h)
            }),
            (e.prototype.finish = function (e, t) {
              void 0 === t && (t = 0)
              let r
              let n
              let i
              let o
              const s = new Uint16Array(10)
              if (this._leftover) {
                for (o = this._leftover, this._buffer[o++] = 1; o < 16; o++) {
                  this._buffer[o] = 0
                }(this._fin = 1), this._blocks(this._buffer, 0, 16)
              }
              for (
                r = this._h[1] >>> 13, this._h[1] &= 8191, o = 2;
                o < 10;
                o++
              ) { (this._h[o] += r), (r = this._h[o] >>> 13), (this._h[o] &= 8191) }
              for (
                this._h[0] += 5 * r,
                r = this._h[0] >>> 13,
                this._h[0] &= 8191,
                this._h[1] += r,
                r = this._h[1] >>> 13,
                this._h[1] &= 8191,
                this._h[2] += r,
                s[0] = this._h[0] + 5,
                r = s[0] >>> 13,
                s[0] &= 8191,
                o = 1;
                o < 10;
                o++
              ) { (s[o] = this._h[o] + r), (r = s[o] >>> 13), (s[o] &= 8191) }
              for (s[9] -= 8192, n = (1 ^ r) - 1, o = 0; o < 10; o++) s[o] &= n
              for (n = ~n, o = 0; o < 10; o++) { this._h[o] = (this._h[o] & n) | s[o] }
              for (
                this._h[0] = 65535 & (this._h[0] | (this._h[1] << 13)),
                this._h[1] =
                    65535 & ((this._h[1] >>> 3) | (this._h[2] << 10)),
                this._h[2] = 65535 & ((this._h[2] >>> 6) | (this._h[3] << 7)),
                this._h[3] = 65535 & ((this._h[3] >>> 9) | (this._h[4] << 4)),
                this._h[4] =
                    65535 &
                    ((this._h[4] >>> 12) |
                      (this._h[5] << 1) |
                      (this._h[6] << 14)),
                this._h[5] =
                    65535 & ((this._h[6] >>> 2) | (this._h[7] << 11)),
                this._h[6] = 65535 & ((this._h[7] >>> 5) | (this._h[8] << 8)),
                this._h[7] = 65535 & ((this._h[8] >>> 8) | (this._h[9] << 5)),
                i = this._h[0] + this._pad[0],
                this._h[0] = 65535 & i,
                o = 1;
                o < 8;
                o++
              ) {
                (i = (((this._h[o] + this._pad[o]) | 0) + (i >>> 16)) | 0),
                (this._h[o] = 65535 & i)
              }
              return (
                (e[t + 0] = this._h[0] >>> 0),
                (e[t + 1] = this._h[0] >>> 8),
                (e[t + 2] = this._h[1] >>> 0),
                (e[t + 3] = this._h[1] >>> 8),
                (e[t + 4] = this._h[2] >>> 0),
                (e[t + 5] = this._h[2] >>> 8),
                (e[t + 6] = this._h[3] >>> 0),
                (e[t + 7] = this._h[3] >>> 8),
                (e[t + 8] = this._h[4] >>> 0),
                (e[t + 9] = this._h[4] >>> 8),
                (e[t + 10] = this._h[5] >>> 0),
                (e[t + 11] = this._h[5] >>> 8),
                (e[t + 12] = this._h[6] >>> 0),
                (e[t + 13] = this._h[6] >>> 8),
                (e[t + 14] = this._h[7] >>> 0),
                (e[t + 15] = this._h[7] >>> 8),
                (this._finished = !0),
                this
              )
            }),
            (e.prototype.update = function (e) {
              let t
              let r = 0
              let n = e.length
              if (this._leftover) {
                ;(t = 16 - this._leftover) > n && (t = n)
                for (var i = 0; i < t; i++) { this._buffer[this._leftover + i] = e[r + i] }
                if (
                  ((n -= t),
                  (r += t),
                  (this._leftover += t),
                  this._leftover < 16)
                ) { return this }
                this._blocks(this._buffer, 0, 16), (this._leftover = 0)
              }
              if (
                (n >= 16 &&
                  ((t = n - (n % 16)),
                  this._blocks(e, r, t),
                  (r += t),
                  (n -= t)),
                n)
              ) {
                for (i = 0; i < n; i++) { this._buffer[this._leftover + i] = e[r + i] }
                this._leftover += n
              }
              return this
            }),
            (e.prototype.digest = function () {
              if (this._finished) throw new Error('Poly1305 was finished')
              const e = new Uint8Array(16)
              return this.finish(e), e
            }),
            (e.prototype.clean = function () {
              return (
                i.wipe(this._buffer),
                i.wipe(this._r),
                i.wipe(this._h),
                i.wipe(this._pad),
                (this._leftover = 0),
                (this._fin = 0),
                (this._finished = !0),
                this
              )
            }),
            e
          )
        })()
        ;(t.Poly1305 = o),
        (t.oneTimeAuth = function (e, t) {
          const r = new o(e)
          r.update(t)
          const n = r.digest()
          return r.clean(), n
        }),
        (t.equal = function (e, r) {
          return (
            e.length === t.DIGEST_LENGTH &&
              r.length === t.DIGEST_LENGTH &&
              n.equal(e, r)
          )
        })
      },
      88557: function (e, t, r) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.randomStringForEntropy =
            t.randomString =
            t.randomUint32 =
            t.randomBytes =
            t.defaultRandomSource =
              void 0)
        const n = r(17435)
        const i = r(40646)
        const o = r(7121)
        function s (e) {
          return (
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : t.defaultRandomSource
          ).randomBytes(e)
        }
        ;(t.defaultRandomSource = new n.SystemRandomSource()),
        (t.randomBytes = s),
        (t.randomUint32 = function () {
          const e = s(
            4,
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : t.defaultRandomSource
          )
          const r = (0, i.readUint32LE)(e)
          return (0, o.wipe)(e), r
        })
        const a = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        function c (e) {
          const r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : a
          const n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : t.defaultRandomSource
          if (r.length < 2) throw new Error('randomString charset is too short')
          if (r.length > 256) { throw new Error('randomString charset is too long') }
          for (var i = '', c = r.length, u = 256 - (256 % c); e > 0;) {
            for (
              var f = s(Math.ceil((256 * e) / u), n), l = 0;
              l < f.length && e > 0;
              l++
            ) {
              const p = f[l]
              p < u && ((i += r.charAt(p % c)), e--)
            }
            ;(0, o.wipe)(f)
          }
          return i
        }
        ;(t.randomString = c),
        (t.randomStringForEntropy = function (e) {
          const r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : a
          const n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : t.defaultRandomSource
          return c(Math.ceil(e / (Math.log(r.length) / Math.LN2)), r, n)
        })
      },
      88450: function (e, t, r) {
        'use strict'
        const n = r(56690).default
        const i = r(89728).default
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.BrowserRandomSource = void 0)
        const o = (function () {
          function e () {
            n(this, e), (this.isAvailable = !1), (this.isInstantiated = !1)
            const t =
              typeof self !== 'undefined' ? self.crypto || self.msCrypto : null
            t &&
              void 0 !== t.getRandomValues &&
              ((this._crypto = t),
              (this.isAvailable = !0),
              (this.isInstantiated = !0))
          }
          return (
            i(e, [
              {
                key: 'randomBytes',
                value: function (e) {
                  if (!this.isAvailable || !this._crypto) {
                    throw new Error(
                      'Browser random byte generator is not available.'
                    )
                  }
                  for (
                    var t = new Uint8Array(e), r = 0;
                    r < t.length;
                    r += 65536
                  ) {
                    this._crypto.getRandomValues(
                      t.subarray(r, r + Math.min(t.length - r, 65536))
                    )
                  }
                  return t
                }
              }
            ]),
            e
          )
        })()
        t.BrowserRandomSource = o
      },
      82978: function (e, t, r) {
        'use strict'
        const n = r(56690).default
        const i = r(89728).default
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.NodeRandomSource = void 0)
        const o = r(7121)
        const s = (function () {
          function e () {
            n(this, e), (this.isAvailable = !1), (this.isInstantiated = !1)
            const t = r(35883)
            t &&
                t.randomBytes &&
                ((this._crypto = t),
                (this.isAvailable = !0),
                (this.isInstantiated = !0))
          }
          return (
            i(e, [
              {
                key: 'randomBytes',
                value: function (e) {
                  if (!this.isAvailable || !this._crypto) {
                    throw new Error(
                      'Node.js random byte generator is not available.'
                    )
                  }
                  const t = this._crypto.randomBytes(e)
                  if (t.length !== e) {
                    throw new Error(
                      'NodeRandomSource: got fewer bytes than requested'
                    )
                  }
                  for (var r = new Uint8Array(e), n = 0; n < r.length; n++) { r[n] = t[n] }
                  return (0, o.wipe)(t), r
                }
              }
            ]),
            e
          )
        })()
        t.NodeRandomSource = s
      },
      17435: function (e, t, r) {
        'use strict'
        const n = r(56690).default
        const i = r(89728).default
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.SystemRandomSource = void 0)
        const o = r(88450)
        const s = r(82978)
        const a = (function () {
          function e () {
            return (
              n(this, e),
              (this.isAvailable = !1),
              (this.name = ''),
              (this._source = new o.BrowserRandomSource()),
              this._source.isAvailable
                ? ((this.isAvailable = !0), void (this.name = 'Browser'))
                : ((this._source = new s.NodeRandomSource()),
                  this._source.isAvailable
                    ? ((this.isAvailable = !0), void (this.name = 'Node'))
                    : void 0)
            )
          }
          return (
            i(e, [
              {
                key: 'randomBytes',
                value: function (e) {
                  if (!this.isAvailable) {
                    throw new Error(
                      'System random byte generator is not available.'
                    )
                  }
                  return this._source.randomBytes(e)
                }
              }
            ]),
            e
          )
        })()
        t.SystemRandomSource = a
      },
      1643: function (e, t, r) {
        'use strict'
        const n = r(40646)
        const i = r(7121)
        ;(t.k = 32), (t.cn = 64)
        const o = (function () {
          function e () {
            ;(this.digestLength = t.k),
            (this.blockSize = t.cn),
            (this._state = new Int32Array(8)),
            (this._temp = new Int32Array(64)),
            (this._buffer = new Uint8Array(128)),
            (this._bufferLength = 0),
            (this._bytesHashed = 0),
            (this._finished = !1),
            this.reset()
          }
          return (
            (e.prototype._initState = function () {
              ;(this._state[0] = 1779033703),
              (this._state[1] = 3144134277),
              (this._state[2] = 1013904242),
              (this._state[3] = 2773480762),
              (this._state[4] = 1359893119),
              (this._state[5] = 2600822924),
              (this._state[6] = 528734635),
              (this._state[7] = 1541459225)
            }),
            (e.prototype.reset = function () {
              return (
                this._initState(),
                (this._bufferLength = 0),
                (this._bytesHashed = 0),
                (this._finished = !1),
                this
              )
            }),
            (e.prototype.clean = function () {
              i.wipe(this._buffer), i.wipe(this._temp), this.reset()
            }),
            (e.prototype.update = function (e, t) {
              if ((void 0 === t && (t = e.length), this._finished)) {
                throw new Error(
                  "SHA256: can't update because hash was finished."
                )
              }
              let r = 0
              if (((this._bytesHashed += t), this._bufferLength > 0)) {
                for (; this._bufferLength < this.blockSize && t > 0;) { (this._buffer[this._bufferLength++] = e[r++]), t-- }
                this._bufferLength === this.blockSize &&
                  (a(this._temp, this._state, this._buffer, 0, this.blockSize),
                  (this._bufferLength = 0))
              }
              for (
                t >= this.blockSize &&
                ((r = a(this._temp, this._state, e, r, t)),
                (t %= this.blockSize));
                t > 0;

              ) { (this._buffer[this._bufferLength++] = e[r++]), t-- }
              return this
            }),
            (e.prototype.finish = function (e) {
              if (!this._finished) {
                const t = this._bytesHashed
                const r = this._bufferLength
                const i = (t / 536870912) | 0
                const o = t << 3
                const s = t % 64 < 56 ? 64 : 128
                this._buffer[r] = 128
                for (var c = r + 1; c < s - 8; c++) this._buffer[c] = 0
                n.writeUint32BE(i, this._buffer, s - 8),
                n.writeUint32BE(o, this._buffer, s - 4),
                a(this._temp, this._state, this._buffer, 0, s),
                (this._finished = !0)
              }
              for (c = 0; c < this.digestLength / 4; c++) { n.writeUint32BE(this._state[c], e, 4 * c) }
              return this
            }),
            (e.prototype.digest = function () {
              const e = new Uint8Array(this.digestLength)
              return this.finish(e), e
            }),
            (e.prototype.saveState = function () {
              if (this._finished) { throw new Error('SHA256: cannot save finished state') }
              return {
                state: new Int32Array(this._state),
                buffer:
                  this._bufferLength > 0
                    ? new Uint8Array(this._buffer)
                    : void 0,
                bufferLength: this._bufferLength,
                bytesHashed: this._bytesHashed
              }
            }),
            (e.prototype.restoreState = function (e) {
              return (
                this._state.set(e.state),
                (this._bufferLength = e.bufferLength),
                e.buffer && this._buffer.set(e.buffer),
                (this._bytesHashed = e.bytesHashed),
                (this._finished = !1),
                this
              )
            }),
            (e.prototype.cleanSavedState = function (e) {
              i.wipe(e.state),
              e.buffer && i.wipe(e.buffer),
              (e.bufferLength = 0),
              (e.bytesHashed = 0)
            }),
            e
          )
        })()
        t.mE = o
        const s = new Int32Array([
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298
        ])
        function a (e, t, r, i, o) {
          for (; o >= 64;) {
            for (
              var a = t[0],
                c = t[1],
                u = t[2],
                f = t[3],
                l = t[4],
                p = t[5],
                h = t[6],
                d = t[7],
                v = 0;
              v < 16;
              v++
            ) {
              const g = i + 4 * v
              e[v] = n.readUint32BE(r, g)
            }
            for (v = 16; v < 64; v++) {
              let y = e[v - 2]
              var m =
                  ((y >>> 17) | (y << 15)) ^
                  ((y >>> 19) | (y << 13)) ^
                  (y >>> 10)
              var b =
                  (((y = e[v - 15]) >>> 7) | (y << 25)) ^
                  ((y >>> 18) | (y << 14)) ^
                  (y >>> 3)
              e[v] = ((m + e[v - 7]) | 0) + ((b + e[v - 16]) | 0)
            }
            for (v = 0; v < 64; v++) {
              ;(m =
                ((((((l >>> 6) | (l << 26)) ^
                  ((l >>> 11) | (l << 21)) ^
                  ((l >>> 25) | (l << 7))) +
                  ((l & p) ^ (~l & h))) |
                  0) +
                  ((d + ((s[v] + e[v]) | 0)) | 0)) |
                0),
              (b =
                  ((((a >>> 2) | (a << 30)) ^
                    ((a >>> 13) | (a << 19)) ^
                    ((a >>> 22) | (a << 10))) +
                    ((a & c) ^ (a & u) ^ (c & u))) |
                  0)
              ;(d = h),
              (h = p),
              (p = l),
              (l = (f + m) | 0),
              (f = u),
              (u = c),
              (c = a),
              (a = (m + b) | 0)
            }
            ;(t[0] += a),
            (t[1] += c),
            (t[2] += u),
            (t[3] += f),
            (t[4] += l),
            (t[5] += p),
            (t[6] += h),
            (t[7] += d),
            (i += 64),
            (o -= 64)
          }
          return i
        }
        t.vp = function (e) {
          const t = new o()
          t.update(e)
          const r = t.digest()
          return t.clean(), r
        }
      },
      91154: function (e, t, r) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 })
        const n = r(40646)
        const i = r(7121)
        ;(t.DIGEST_LENGTH = 64), (t.BLOCK_SIZE = 128)
        const o = (function () {
          function e () {
            ;(this.digestLength = t.DIGEST_LENGTH),
            (this.blockSize = t.BLOCK_SIZE),
            (this._stateHi = new Int32Array(8)),
            (this._stateLo = new Int32Array(8)),
            (this._tempHi = new Int32Array(16)),
            (this._tempLo = new Int32Array(16)),
            (this._buffer = new Uint8Array(256)),
            (this._bufferLength = 0),
            (this._bytesHashed = 0),
            (this._finished = !1),
            this.reset()
          }
          return (
            (e.prototype._initState = function () {
              ;(this._stateHi[0] = 1779033703),
              (this._stateHi[1] = 3144134277),
              (this._stateHi[2] = 1013904242),
              (this._stateHi[3] = 2773480762),
              (this._stateHi[4] = 1359893119),
              (this._stateHi[5] = 2600822924),
              (this._stateHi[6] = 528734635),
              (this._stateHi[7] = 1541459225),
              (this._stateLo[0] = 4089235720),
              (this._stateLo[1] = 2227873595),
              (this._stateLo[2] = 4271175723),
              (this._stateLo[3] = 1595750129),
              (this._stateLo[4] = 2917565137),
              (this._stateLo[5] = 725511199),
              (this._stateLo[6] = 4215389547),
              (this._stateLo[7] = 327033209)
            }),
            (e.prototype.reset = function () {
              return (
                this._initState(),
                (this._bufferLength = 0),
                (this._bytesHashed = 0),
                (this._finished = !1),
                this
              )
            }),
            (e.prototype.clean = function () {
              i.wipe(this._buffer),
              i.wipe(this._tempHi),
              i.wipe(this._tempLo),
              this.reset()
            }),
            (e.prototype.update = function (e, r) {
              if ((void 0 === r && (r = e.length), this._finished)) {
                throw new Error(
                  "SHA512: can't update because hash was finished."
                )
              }
              let n = 0
              if (((this._bytesHashed += r), this._bufferLength > 0)) {
                for (; this._bufferLength < t.BLOCK_SIZE && r > 0;) { (this._buffer[this._bufferLength++] = e[n++]), r-- }
                this._bufferLength === this.blockSize &&
                  (a(
                    this._tempHi,
                    this._tempLo,
                    this._stateHi,
                    this._stateLo,
                    this._buffer,
                    0,
                    this.blockSize
                  ),
                  (this._bufferLength = 0))
              }
              for (
                r >= this.blockSize &&
                ((n = a(
                  this._tempHi,
                  this._tempLo,
                  this._stateHi,
                  this._stateLo,
                  e,
                  n,
                  r
                )),
                (r %= this.blockSize));
                r > 0;

              ) { (this._buffer[this._bufferLength++] = e[n++]), r-- }
              return this
            }),
            (e.prototype.finish = function (e) {
              if (!this._finished) {
                const t = this._bytesHashed
                const r = this._bufferLength
                const i = (t / 536870912) | 0
                const o = t << 3
                const s = t % 128 < 112 ? 128 : 256
                this._buffer[r] = 128
                for (var c = r + 1; c < s - 8; c++) this._buffer[c] = 0
                n.writeUint32BE(i, this._buffer, s - 8),
                n.writeUint32BE(o, this._buffer, s - 4),
                a(
                  this._tempHi,
                  this._tempLo,
                  this._stateHi,
                  this._stateLo,
                  this._buffer,
                  0,
                  s
                ),
                (this._finished = !0)
              }
              for (c = 0; c < this.digestLength / 8; c++) {
                n.writeUint32BE(this._stateHi[c], e, 8 * c),
                n.writeUint32BE(this._stateLo[c], e, 8 * c + 4)
              }
              return this
            }),
            (e.prototype.digest = function () {
              const e = new Uint8Array(this.digestLength)
              return this.finish(e), e
            }),
            (e.prototype.saveState = function () {
              if (this._finished) { throw new Error('SHA256: cannot save finished state') }
              return {
                stateHi: new Int32Array(this._stateHi),
                stateLo: new Int32Array(this._stateLo),
                buffer:
                  this._bufferLength > 0
                    ? new Uint8Array(this._buffer)
                    : void 0,
                bufferLength: this._bufferLength,
                bytesHashed: this._bytesHashed
              }
            }),
            (e.prototype.restoreState = function (e) {
              return (
                this._stateHi.set(e.stateHi),
                this._stateLo.set(e.stateLo),
                (this._bufferLength = e.bufferLength),
                e.buffer && this._buffer.set(e.buffer),
                (this._bytesHashed = e.bytesHashed),
                (this._finished = !1),
                this
              )
            }),
            (e.prototype.cleanSavedState = function (e) {
              i.wipe(e.stateHi),
              i.wipe(e.stateLo),
              e.buffer && i.wipe(e.buffer),
              (e.bufferLength = 0),
              (e.bytesHashed = 0)
            }),
            e
          )
        })()
        t.SHA512 = o
        const s = new Int32Array([
          1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
          3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
          2453635748, 2937671579, 2870763221, 3664609560, 3624381080,
          2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987,
          3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103,
          633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774,
          944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983,
          1495990901, 1249150122, 1856431235, 1555081692, 3175218132,
          1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016,
          2952996808, 2566594879, 3210313671, 3203337956, 3336571891,
          1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895,
          168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372,
          1522805485, 1396182291, 2643833823, 1695183700, 2343527390,
          1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627,
          2730485921, 1290863460, 2820302411, 3158454273, 3259730800,
          3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804,
          1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734,
          3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877,
          3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063,
          2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
          2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
          2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
          3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
          3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
          174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
          685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
          1126000580, 2618297676, 1288033470, 3409855158, 1501505948,
          4234509866, 1607167915, 987167468, 1816402316, 1246189591
        ])
        function a (e, t, r, i, o, a, c) {
          for (
            var u,
              f,
              l,
              p,
              h,
              d,
              v,
              g,
              y = r[0],
              m = r[1],
              b = r[2],
              w = r[3],
              _ = r[4],
              x = r[5],
              E = r[6],
              k = r[7],
              S = i[0],
              Z = i[1],
              O = i[2],
              I = i[3],
              P = i[4],
              N = i[5],
              R = i[6],
              T = i[7];
            c >= 128;

          ) {
            for (var A = 0; A < 16; A++) {
              var U = 8 * A + a
              ;(e[A] = n.readUint32BE(o, U)), (t[A] = n.readUint32BE(o, U + 4))
            }
            for (A = 0; A < 80; A++) {
              var j
              var L
              const M = y
              const C = m
              const D = b
              let z = w
              const q = _
              const H = x
              const V = E
              const K = S
              const F = Z
              const B = O
              let W = I
              const G = P
              const Y = N
              const J = R
              if (
                ((h = 65535 & (f = T)),
                (d = f >>> 16),
                (v = 65535 & (u = k)),
                (g = u >>> 16),
                (h +=
                  65535 &
                  (f =
                    ((P >>> 14) | (_ << 18)) ^
                    ((P >>> 18) | (_ << 14)) ^
                    ((_ >>> 9) | (P << 23)))),
                (d += f >>> 16),
                (v +=
                  65535 &
                  (u =
                    ((_ >>> 14) | (P << 18)) ^
                    ((_ >>> 18) | (P << 14)) ^
                    ((P >>> 9) | (_ << 23)))),
                (g += u >>> 16),
                (h += 65535 & (f = (P & N) ^ (~P & R))),
                (d += f >>> 16),
                (v += 65535 & (u = (_ & x) ^ (~_ & E))),
                (g += u >>> 16),
                (u = s[2 * A]),
                (h += 65535 & (f = s[2 * A + 1])),
                (d += f >>> 16),
                (v += 65535 & u),
                (g += u >>> 16),
                (u = e[A % 16]),
                (d += (f = t[A % 16]) >>> 16),
                (v += 65535 & u),
                (g += u >>> 16),
                (v += (d += (h += 65535 & f) >>> 16) >>> 16),
                (h = 65535 & (f = p = (65535 & h) | (d << 16))),
                (d = f >>> 16),
                (v = 65535 & (u = l = (65535 & v) | ((g += v >>> 16) << 16))),
                (g = u >>> 16),
                (h +=
                  65535 &
                  (f =
                    ((S >>> 28) | (y << 4)) ^
                    ((y >>> 2) | (S << 30)) ^
                    ((y >>> 7) | (S << 25)))),
                (d += f >>> 16),
                (v +=
                  65535 &
                  (u =
                    ((y >>> 28) | (S << 4)) ^
                    ((S >>> 2) | (y << 30)) ^
                    ((S >>> 7) | (y << 25)))),
                (g += u >>> 16),
                (d += (f = (S & Z) ^ (S & O) ^ (Z & O)) >>> 16),
                (v += 65535 & (u = (y & m) ^ (y & b) ^ (m & b))),
                (g += u >>> 16),
                (j =
                  (65535 & (v += (d += (h += 65535 & f) >>> 16) >>> 16)) |
                  ((g += v >>> 16) << 16)),
                (L = (65535 & h) | (d << 16)),
                (h = 65535 & (f = W)),
                (d = f >>> 16),
                (v = 65535 & (u = z)),
                (g = u >>> 16),
                (d += (f = p) >>> 16),
                (v += 65535 & (u = l)),
                (g += u >>> 16),
                (m = M),
                (b = C),
                (w = D),
                (_ = z =
                  (65535 & (v += (d += (h += 65535 & f) >>> 16) >>> 16)) |
                  ((g += v >>> 16) << 16)),
                (x = q),
                (E = H),
                (k = V),
                (y = j),
                (Z = K),
                (O = F),
                (I = B),
                (P = W = (65535 & h) | (d << 16)),
                (N = G),
                (R = Y),
                (T = J),
                (S = L),
                A % 16 === 15)
              ) {
                for (U = 0; U < 16; U++) {
                  (u = e[U]),
                  (h = 65535 & (f = t[U])),
                  (d = f >>> 16),
                  (v = 65535 & u),
                  (g = u >>> 16),
                  (u = e[(U + 9) % 16]),
                  (h += 65535 & (f = t[(U + 9) % 16])),
                  (d += f >>> 16),
                  (v += 65535 & u),
                  (g += u >>> 16),
                  (l = e[(U + 1) % 16]),
                  (h +=
                      65535 &
                      (f =
                        (((p = t[(U + 1) % 16]) >>> 1) | (l << 31)) ^
                        ((p >>> 8) | (l << 24)) ^
                        ((p >>> 7) | (l << 25)))),
                  (d += f >>> 16),
                  (v +=
                      65535 &
                      (u =
                        ((l >>> 1) | (p << 31)) ^
                        ((l >>> 8) | (p << 24)) ^
                        (l >>> 7))),
                  (g += u >>> 16),
                  (l = e[(U + 14) % 16]),
                  (d +=
                      (f =
                        (((p = t[(U + 14) % 16]) >>> 19) | (l << 13)) ^
                        ((l >>> 29) | (p << 3)) ^
                        ((p >>> 6) | (l << 26))) >>> 16),
                  (v +=
                      65535 &
                      (u =
                        ((l >>> 19) | (p << 13)) ^
                        ((p >>> 29) | (l << 3)) ^
                        (l >>> 6))),
                  (g += u >>> 16),
                  (g += (v += (d += (h += 65535 & f) >>> 16) >>> 16) >>> 16),
                  (e[U] = (65535 & v) | (g << 16)),
                  (t[U] = (65535 & h) | (d << 16))
                }
              }
            }
            ;(h = 65535 & (f = S)),
            (d = f >>> 16),
            (v = 65535 & (u = y)),
            (g = u >>> 16),
            (u = r[0]),
            (d += (f = i[0]) >>> 16),
            (v += 65535 & u),
            (g += u >>> 16),
            (g += (v += (d += (h += 65535 & f) >>> 16) >>> 16) >>> 16),
            (r[0] = y = (65535 & v) | (g << 16)),
            (i[0] = S = (65535 & h) | (d << 16)),
            (h = 65535 & (f = Z)),
            (d = f >>> 16),
            (v = 65535 & (u = m)),
            (g = u >>> 16),
            (u = r[1]),
            (d += (f = i[1]) >>> 16),
            (v += 65535 & u),
            (g += u >>> 16),
            (g += (v += (d += (h += 65535 & f) >>> 16) >>> 16) >>> 16),
            (r[1] = m = (65535 & v) | (g << 16)),
            (i[1] = Z = (65535 & h) | (d << 16)),
            (h = 65535 & (f = O)),
            (d = f >>> 16),
            (v = 65535 & (u = b)),
            (g = u >>> 16),
            (u = r[2]),
            (d += (f = i[2]) >>> 16),
            (v += 65535 & u),
            (g += u >>> 16),
            (g += (v += (d += (h += 65535 & f) >>> 16) >>> 16) >>> 16),
            (r[2] = b = (65535 & v) | (g << 16)),
            (i[2] = O = (65535 & h) | (d << 16)),
            (h = 65535 & (f = I)),
            (d = f >>> 16),
            (v = 65535 & (u = w)),
            (g = u >>> 16),
            (u = r[3]),
            (d += (f = i[3]) >>> 16),
            (v += 65535 & u),
            (g += u >>> 16),
            (g += (v += (d += (h += 65535 & f) >>> 16) >>> 16) >>> 16),
            (r[3] = w = (65535 & v) | (g << 16)),
            (i[3] = I = (65535 & h) | (d << 16)),
            (h = 65535 & (f = P)),
            (d = f >>> 16),
            (v = 65535 & (u = _)),
            (g = u >>> 16),
            (u = r[4]),
            (d += (f = i[4]) >>> 16),
            (v += 65535 & u),
            (g += u >>> 16),
            (g += (v += (d += (h += 65535 & f) >>> 16) >>> 16) >>> 16),
            (r[4] = _ = (65535 & v) | (g << 16)),
            (i[4] = P = (65535 & h) | (d << 16)),
            (h = 65535 & (f = N)),
            (d = f >>> 16),
            (v = 65535 & (u = x)),
            (g = u >>> 16),
            (u = r[5]),
            (d += (f = i[5]) >>> 16),
            (v += 65535 & u),
            (g += u >>> 16),
            (g += (v += (d += (h += 65535 & f) >>> 16) >>> 16) >>> 16),
            (r[5] = x = (65535 & v) | (g << 16)),
            (i[5] = N = (65535 & h) | (d << 16)),
            (h = 65535 & (f = R)),
            (d = f >>> 16),
            (v = 65535 & (u = E)),
            (g = u >>> 16),
            (u = r[6]),
            (d += (f = i[6]) >>> 16),
            (v += 65535 & u),
            (g += u >>> 16),
            (g += (v += (d += (h += 65535 & f) >>> 16) >>> 16) >>> 16),
            (r[6] = E = (65535 & v) | (g << 16)),
            (i[6] = R = (65535 & h) | (d << 16)),
            (h = 65535 & (f = T)),
            (d = f >>> 16),
            (v = 65535 & (u = k)),
            (g = u >>> 16),
            (u = r[7]),
            (d += (f = i[7]) >>> 16),
            (v += 65535 & u),
            (g += u >>> 16),
            (g += (v += (d += (h += 65535 & f) >>> 16) >>> 16) >>> 16),
            (r[7] = k = (65535 & v) | (g << 16)),
            (i[7] = T = (65535 & h) | (d << 16)),
            (a += 128),
            (c -= 128)
          }
          return a
        }
        t.hash = function (e) {
          const t = new o()
          t.update(e)
          const r = t.digest()
          return t.clean(), r
        }
      },
      7121: function (e, t) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.wipe = function (e) {
          for (let t = 0; t < e.length; t++) e[t] = 0
          return e
        })
      },
      25995: function (e, t, r) {
        'use strict'
        t.gi = t.Au = t.KS = t.kz = void 0
        const n = r(88557)
        const i = r(7121)
        function o (e) {
          const t = new Float64Array(16)
          if (e) for (let r = 0; r < e.length; r++) t[r] = e[r]
          return t
        }
        ;(t.kz = 32), (t.KS = 32)
        const s = new Uint8Array(32)
        s[0] = 9
        const a = o([56129, 1])
        function c (e) {
          for (var t = 1, r = 0; r < 16; r++) {
            const n = e[r] + t + 65535
            ;(t = Math.floor(n / 65536)), (e[r] = n - 65536 * t)
          }
          e[0] += t - 1 + 37 * (t - 1)
        }
        function u (e, t, r) {
          for (let n = ~(r - 1), i = 0; i < 16; i++) {
            const o = n & (e[i] ^ t[i])
            ;(e[i] ^= o), (t[i] ^= o)
          }
        }
        function f (e, t, r) {
          for (let n = 0; n < 16; n++) e[n] = t[n] + r[n]
        }
        function l (e, t, r) {
          for (let n = 0; n < 16; n++) e[n] = t[n] - r[n]
        }
        function p (e, t, r) {
          let n
          let i
          let o = 0
          let s = 0
          let a = 0
          let c = 0
          let u = 0
          let f = 0
          let l = 0
          let p = 0
          let h = 0
          let d = 0
          let v = 0
          let g = 0
          let y = 0
          let m = 0
          let b = 0
          let w = 0
          let _ = 0
          let x = 0
          let E = 0
          let k = 0
          let S = 0
          let Z = 0
          let O = 0
          let I = 0
          let P = 0
          let N = 0
          let R = 0
          let T = 0
          let A = 0
          let U = 0
          let j = 0
          const L = r[0]
          const M = r[1]
          const C = r[2]
          const D = r[3]
          const z = r[4]
          const q = r[5]
          const H = r[6]
          const V = r[7]
          const K = r[8]
          const F = r[9]
          const B = r[10]
          const W = r[11]
          const G = r[12]
          const Y = r[13]
          const J = r[14]
          const X = r[15]
          ;(o += (n = t[0]) * L),
          (s += n * M),
          (a += n * C),
          (c += n * D),
          (u += n * z),
          (f += n * q),
          (l += n * H),
          (p += n * V),
          (h += n * K),
          (d += n * F),
          (v += n * B),
          (g += n * W),
          (y += n * G),
          (m += n * Y),
          (b += n * J),
          (w += n * X),
          (s += (n = t[1]) * L),
          (a += n * M),
          (c += n * C),
          (u += n * D),
          (f += n * z),
          (l += n * q),
          (p += n * H),
          (h += n * V),
          (d += n * K),
          (v += n * F),
          (g += n * B),
          (y += n * W),
          (m += n * G),
          (b += n * Y),
          (w += n * J),
          (_ += n * X),
          (a += (n = t[2]) * L),
          (c += n * M),
          (u += n * C),
          (f += n * D),
          (l += n * z),
          (p += n * q),
          (h += n * H),
          (d += n * V),
          (v += n * K),
          (g += n * F),
          (y += n * B),
          (m += n * W),
          (b += n * G),
          (w += n * Y),
          (_ += n * J),
          (x += n * X),
          (c += (n = t[3]) * L),
          (u += n * M),
          (f += n * C),
          (l += n * D),
          (p += n * z),
          (h += n * q),
          (d += n * H),
          (v += n * V),
          (g += n * K),
          (y += n * F),
          (m += n * B),
          (b += n * W),
          (w += n * G),
          (_ += n * Y),
          (x += n * J),
          (E += n * X),
          (u += (n = t[4]) * L),
          (f += n * M),
          (l += n * C),
          (p += n * D),
          (h += n * z),
          (d += n * q),
          (v += n * H),
          (g += n * V),
          (y += n * K),
          (m += n * F),
          (b += n * B),
          (w += n * W),
          (_ += n * G),
          (x += n * Y),
          (E += n * J),
          (k += n * X),
          (f += (n = t[5]) * L),
          (l += n * M),
          (p += n * C),
          (h += n * D),
          (d += n * z),
          (v += n * q),
          (g += n * H),
          (y += n * V),
          (m += n * K),
          (b += n * F),
          (w += n * B),
          (_ += n * W),
          (x += n * G),
          (E += n * Y),
          (k += n * J),
          (S += n * X),
          (l += (n = t[6]) * L),
          (p += n * M),
          (h += n * C),
          (d += n * D),
          (v += n * z),
          (g += n * q),
          (y += n * H),
          (m += n * V),
          (b += n * K),
          (w += n * F),
          (_ += n * B),
          (x += n * W),
          (E += n * G),
          (k += n * Y),
          (S += n * J),
          (Z += n * X),
          (p += (n = t[7]) * L),
          (h += n * M),
          (d += n * C),
          (v += n * D),
          (g += n * z),
          (y += n * q),
          (m += n * H),
          (b += n * V),
          (w += n * K),
          (_ += n * F),
          (x += n * B),
          (E += n * W),
          (k += n * G),
          (S += n * Y),
          (Z += n * J),
          (O += n * X),
          (h += (n = t[8]) * L),
          (d += n * M),
          (v += n * C),
          (g += n * D),
          (y += n * z),
          (m += n * q),
          (b += n * H),
          (w += n * V),
          (_ += n * K),
          (x += n * F),
          (E += n * B),
          (k += n * W),
          (S += n * G),
          (Z += n * Y),
          (O += n * J),
          (I += n * X),
          (d += (n = t[9]) * L),
          (v += n * M),
          (g += n * C),
          (y += n * D),
          (m += n * z),
          (b += n * q),
          (w += n * H),
          (_ += n * V),
          (x += n * K),
          (E += n * F),
          (k += n * B),
          (S += n * W),
          (Z += n * G),
          (O += n * Y),
          (I += n * J),
          (P += n * X),
          (v += (n = t[10]) * L),
          (g += n * M),
          (y += n * C),
          (m += n * D),
          (b += n * z),
          (w += n * q),
          (_ += n * H),
          (x += n * V),
          (E += n * K),
          (k += n * F),
          (S += n * B),
          (Z += n * W),
          (O += n * G),
          (I += n * Y),
          (P += n * J),
          (N += n * X),
          (g += (n = t[11]) * L),
          (y += n * M),
          (m += n * C),
          (b += n * D),
          (w += n * z),
          (_ += n * q),
          (x += n * H),
          (E += n * V),
          (k += n * K),
          (S += n * F),
          (Z += n * B),
          (O += n * W),
          (I += n * G),
          (P += n * Y),
          (N += n * J),
          (R += n * X),
          (y += (n = t[12]) * L),
          (m += n * M),
          (b += n * C),
          (w += n * D),
          (_ += n * z),
          (x += n * q),
          (E += n * H),
          (k += n * V),
          (S += n * K),
          (Z += n * F),
          (O += n * B),
          (I += n * W),
          (P += n * G),
          (N += n * Y),
          (R += n * J),
          (T += n * X),
          (m += (n = t[13]) * L),
          (b += n * M),
          (w += n * C),
          (_ += n * D),
          (x += n * z),
          (E += n * q),
          (k += n * H),
          (S += n * V),
          (Z += n * K),
          (O += n * F),
          (I += n * B),
          (P += n * W),
          (N += n * G),
          (R += n * Y),
          (T += n * J),
          (A += n * X),
          (b += (n = t[14]) * L),
          (w += n * M),
          (_ += n * C),
          (x += n * D),
          (E += n * z),
          (k += n * q),
          (S += n * H),
          (Z += n * V),
          (O += n * K),
          (I += n * F),
          (P += n * B),
          (N += n * W),
          (R += n * G),
          (T += n * Y),
          (A += n * J),
          (U += n * X),
          (w += (n = t[15]) * L),
          (s += 38 * (x += n * C)),
          (a += 38 * (E += n * D)),
          (c += 38 * (k += n * z)),
          (u += 38 * (S += n * q)),
          (f += 38 * (Z += n * H)),
          (l += 38 * (O += n * V)),
          (p += 38 * (I += n * K)),
          (h += 38 * (P += n * F)),
          (d += 38 * (N += n * B)),
          (v += 38 * (R += n * W)),
          (g += 38 * (T += n * G)),
          (y += 38 * (A += n * Y)),
          (m += 38 * (U += n * J)),
          (b += 38 * (j += n * X)),
          (o =
              (n = (o += 38 * (_ += n * M)) + (i = 1) + 65535) -
              65536 * (i = Math.floor(n / 65536))),
          (s = (n = s + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (a = (n = a + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (c = (n = c + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (u = (n = u + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (f = (n = f + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (l = (n = l + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (p = (n = p + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (h = (n = h + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (d = (n = d + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (v = (n = v + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (g = (n = g + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (y = (n = y + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (m = (n = m + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (b = (n = b + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (w = (n = w + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (o =
              (n = (o += i - 1 + 37 * (i - 1)) + (i = 1) + 65535) -
              65536 * (i = Math.floor(n / 65536))),
          (s = (n = s + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (a = (n = a + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (c = (n = c + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (u = (n = u + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (f = (n = f + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (l = (n = l + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (p = (n = p + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (h = (n = h + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (d = (n = d + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (v = (n = v + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (g = (n = g + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (y = (n = y + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (m = (n = m + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (b = (n = b + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (w = (n = w + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
          (o += i - 1 + 37 * (i - 1)),
          (e[0] = o),
          (e[1] = s),
          (e[2] = a),
          (e[3] = c),
          (e[4] = u),
          (e[5] = f),
          (e[6] = l),
          (e[7] = p),
          (e[8] = h),
          (e[9] = d),
          (e[10] = v),
          (e[11] = g),
          (e[12] = y),
          (e[13] = m),
          (e[14] = b),
          (e[15] = w)
        }
        function h (e, t) {
          p(e, t, t)
        }
        function d (e, t) {
          for (
            var r = new Uint8Array(32),
              n = new Float64Array(80),
              i = o(),
              s = o(),
              d = o(),
              v = o(),
              g = o(),
              y = o(),
              m = 0;
            m < 31;
            m++
          ) {
            r[m] = e[m]
          }(r[31] = (127 & e[31]) | 64),
          (r[0] &= 248),
          (function (e, t) {
            for (let r = 0; r < 16; r++) e[r] = t[2 * r] + (t[2 * r + 1] << 8)
            e[15] &= 32767
          })(n, t)
          for (let b = 0; b < 16; b++) s[b] = n[b]
          i[0] = v[0] = 1
          for (let w = 254; w >= 0; --w) {
            const _ = (r[w >>> 3] >>> (7 & w)) & 1
            u(i, s, _),
            u(d, v, _),
            f(g, i, d),
            l(i, i, d),
            f(d, s, v),
            l(s, s, v),
            h(v, g),
            h(y, i),
            p(i, d, i),
            p(d, s, g),
            f(g, i, d),
            l(i, i, d),
            h(s, i),
            l(d, v, y),
            p(i, d, a),
            f(i, i, v),
            p(d, d, i),
            p(i, v, y),
            p(v, s, n),
            h(s, g),
            u(i, s, _),
            u(d, v, _)
          }
          for (let x = 0; x < 16; x++) {
            (n[x + 16] = i[x]),
            (n[x + 32] = d[x]),
            (n[x + 48] = s[x]),
            (n[x + 64] = v[x])
          }
          const E = n.subarray(32)
          const k = n.subarray(16)
          !(function (e, t) {
            for (var r = o(), n = 0; n < 16; n++) r[n] = t[n]
            for (let i = 253; i >= 0; i--) { h(r, r), i !== 2 && i !== 4 && p(r, r, t) }
            for (let s = 0; s < 16; s++) e[s] = r[s]
          })(E, E),
          p(k, k, E)
          const S = new Uint8Array(32)
          return (
            (function (e, t) {
              for (var r = o(), n = o(), i = 0; i < 16; i++) n[i] = t[i]
              c(n), c(n), c(n)
              for (let s = 0; s < 2; s++) {
                r[0] = n[0] - 65517
                for (let a = 1; a < 15; a++) {
                  (r[a] = n[a] - 65535 - ((r[a - 1] >> 16) & 1)),
                  (r[a - 1] &= 65535)
                }
                r[15] = n[15] - 32767 - ((r[14] >> 16) & 1)
                const f = (r[15] >> 16) & 1
                ;(r[14] &= 65535), u(n, r, 1 - f)
              }
              for (let l = 0; l < 16; l++) { (e[2 * l] = 255 & n[l]), (e[2 * l + 1] = n[l] >> 8) }
            })(S, k),
            S
          )
        }
        function v (e) {
          return d(e, s)
        }
        function g (e) {
          if (e.length !== t.KS) { throw new Error('x25519: seed must be '.concat(t.KS, ' bytes')) }
          const r = new Uint8Array(e)
          return { publicKey: v(r), secretKey: r }
        }
        ;(t.Au = function (e) {
          const t = (0, n.randomBytes)(32, e)
          const r = g(t)
          return (0, i.wipe)(t), r
        }),
        (t.gi = function (e, r) {
          const n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          if (e.length !== t.kz) { throw new Error('X25519: incorrect secret key length') }
          if (r.length !== t.kz) { throw new Error('X25519: incorrect public key length') }
          const i = d(e, r)
          if (n) {
            for (var o = 0, s = 0; s < i.length; s++) o |= i[s]
            if (o === 0) throw new Error('X25519: invalid shared key')
          }
          return i
        })
      },
      75221: function (e, t, r) {
        'use strict'
        r.d(t, {
          q: function () {
            return o
          }
        })
        const n = r(43144)
        const i = r(15671)
        var o = (0, n.Z)(function e () {
          ;(0, i.Z)(this, e)
        })
      },
      22299: function (e, t, r) {
        'use strict'
        r.r(t),
        r.d(t, {
          IEvents: function () {
            return n.q
          }
        })
        var n = r(75221)
      },
      2644: function (e, t, r) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.HEARTBEAT_EVENTS = t.HEARTBEAT_INTERVAL = void 0)
        const n = r(19096)
        ;(t.HEARTBEAT_INTERVAL = n.FIVE_SECONDS),
        (t.HEARTBEAT_EVENTS = { pulse: 'heartbeat_pulse' })
      },
      78880: function (e, t, r) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
        r(6537).__exportStar(r(2644), t)
      },
      91872: function (e, t, r) {
        'use strict'
        const n = r(17061).default
        const i = r(56690).default
        const o = r(89728).default
        const s = r(61655).default
        const a = r(26389).default
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.HeartBeat = void 0)
        const c = r(6537)
        const u = r(77708)
        const f = r(19096)
        const l = r(18735)
        const p = r(78880)
        const h = (function (e) {
          s(r, e)
          const t = a(r)
          function r (e) {
            let n
            return (
              i(this, r),
              ((n = t.call(this, e)).events = new u.EventEmitter()),
              (n.interval = p.HEARTBEAT_INTERVAL),
              (n.interval =
                  (e === null || void 0 === e ? void 0 : e.interval) ||
                  p.HEARTBEAT_INTERVAL),
              n
            )
          }
          return (
            o(
              r,
              [
                {
                  key: 'init',
                  value: function () {
                    return c.__awaiter(
                      this,
                      void 0,
                      void 0,
                      n().mark(function e () {
                        return n().wrap(
                          function (e) {
                            for (;;) {
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (e.next = 2), this.initialize()
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
                  }
                },
                {
                  key: 'stop',
                  value: function () {
                    clearInterval(this.intervalRef)
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
                  key: 'initialize',
                  value: function () {
                    return c.__awaiter(
                      this,
                      void 0,
                      void 0,
                      n().mark(function e () {
                        const t = this
                        return n().wrap(
                          function (e) {
                            for (;;) {
                              switch ((e.prev = e.next)) {
                                case 0:
                                  this.intervalRef = setInterval(function () {
                                    return t.pulse()
                                  }, f.toMiliseconds(this.interval))
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
                  }
                },
                {
                  key: 'pulse',
                  value: function () {
                    this.events.emit(p.HEARTBEAT_EVENTS.pulse)
                  }
                }
              ],
              [
                {
                  key: 'init',
                  value: function (e) {
                    return c.__awaiter(
                      this,
                      void 0,
                      void 0,
                      n().mark(function t () {
                        let i
                        return n().wrap(function (t) {
                          for (;;) {
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (i = new r(e)), (t.next = 3), i.init()
                              case 3:
                                return t.abrupt('return', i)
                              case 4:
                              case 'end':
                                return t.stop()
                            }
                          }
                        }, t)
                      })
                    )
                  }
                }
              ]
            ),
            r
          )
        })(l.IHeartBeat)
        t.HeartBeat = h
      },
      46967: function (e, t, r) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 })
        const n = r(6537)
        n.__exportStar(r(91872), t),
        n.__exportStar(r(18735), t),
        n.__exportStar(r(78880), t)
      },
      97158: function (e, t, r) {
        'use strict'
        const n = r(89728).default
        const i = r(56690).default
        const o = r(61655).default
        const s = r(26389).default
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.IHeartBeat = void 0)
        const a = (function (e) {
          o(r, e)
          const t = s(r)
          function r (e) {
            return i(this, r), t.call(this)
          }
          return n(r)
        })(r(22299).IEvents)
        t.IHeartBeat = a
      },
      18735: function (e, t, r) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
        r(6537).__exportStar(r(97158), t)
      },
      6537: function (e, t, r) {
        'use strict'
        r.r(t),
        r.d(t, {
          __assign: function () {
            return o
          },
          __asyncDelegator: function () {
            return w
          },
          __asyncGenerator: function () {
            return b
          },
          __asyncValues: function () {
            return _
          },
          __await: function () {
            return m
          },
          __awaiter: function () {
            return f
          },
          __classPrivateFieldGet: function () {
            return S
          },
          __classPrivateFieldSet: function () {
            return Z
          },
          __createBinding: function () {
            return p
          },
          __decorate: function () {
            return a
          },
          __exportStar: function () {
            return h
          },
          __extends: function () {
            return i
          },
          __generator: function () {
            return l
          },
          __importDefault: function () {
            return k
          },
          __importStar: function () {
            return E
          },
          __makeTemplateObject: function () {
            return x
          },
          __metadata: function () {
            return u
          },
          __param: function () {
            return c
          },
          __read: function () {
            return v
          },
          __rest: function () {
            return s
          },
          __spread: function () {
            return g
          },
          __spreadArrays: function () {
            return y
          },
          __values: function () {
            return d
          }
        })
        let n = function (e, t) {
          return (
            (n =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t
                }) ||
              function (e, t) {
                for (const r in t) t.hasOwnProperty(r) && (e[r] = t[r])
              }),
            n(e, t)
          )
        }
        function i (e, t) {
          function r () {
            this.constructor = e
          }
          n(e, t),
          (e.prototype =
              t === null
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()))
        }
        var o = function () {
          return (
            (o =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++) {
                  for (const i in (t = arguments[r])) { Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]) }
                }
                return e
              }),
            o.apply(this, arguments)
          )
        }
        function s (e, t) {
          const r = {}
          for (var n in e) {
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.indexOf(n) < 0 &&
              (r[n] = e[n])
          }
          if (e != null && typeof Object.getOwnPropertySymbols === 'function') {
            let i = 0
            for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) {
              t.indexOf(n[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
                (r[n[i]] = e[n[i]])
            }
          }
          return r
        }
        function a (e, t, r, n) {
          let i
          const o = arguments.length
          let s =
              o < 3
                ? t
                : n === null
                  ? (n = Object.getOwnPropertyDescriptor(t, r))
                  : n
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          ) { s = Reflect.decorate(e, t, r, n) } else {
            for (let a = e.length - 1; a >= 0; a--) {
              (i = e[a]) &&
                (s = (o < 3 ? i(s) : o > 3 ? i(t, r, s) : i(t, r)) || s)
            }
          }
          return o > 3 && s && Object.defineProperty(t, r, s), s
        }
        function c (e, t) {
          return function (r, n) {
            t(r, n, e)
          }
        }
        function u (e, t) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          ) { return Reflect.metadata(e, t) }
        }
        function f (e, t, r, n) {
          return new (r || (r = Promise))(function (i, o) {
            function s (e) {
              try {
                c(n.next(e))
              } catch (t) {
                o(t)
              }
            }
            function a (e) {
              try {
                c(n.throw(e))
              } catch (t) {
                o(t)
              }
            }
            function c (e) {
              let t
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function (e) {
                      e(t)
                    })).then(s, a)
            }
            c((n = n.apply(e, t || [])).next())
          })
        }
        function l (e, t) {
          let r
          let n
          let i
          let o
          let s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1]
              return i[1]
            },
            trys: [],
            ops: []
          }
          return (
            (o = { next: a(0), throw: a(1), return: a(2) }),
            typeof Symbol === 'function' &&
              (o[Symbol.iterator] = function () {
                return this
              }),
            o
          )
          function a (o) {
            return function (a) {
              return (function (o) {
                if (r) throw new TypeError('Generator is already executing.')
                for (; s;) {
                  try {
                    if (
                      ((r = 1),
                      n &&
                        (i =
                          2 & o[0]
                            ? n.return
                            : o[0]
                              ? n.throw || ((i = n.return) && i.call(n), 0)
                              : n.next) &&
                        !(i = i.call(n, o[1])).done)
                    ) { return i }
                    switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o
                        break
                      case 4:
                        return s.label++, { value: o[1], done: !1 }
                      case 5:
                        s.label++, (n = o[1]), (o = [0])
                        continue
                      case 7:
                        ;(o = s.ops.pop()), s.trys.pop()
                        continue
                      default:
                        if (
                          !(i = (i = s.trys).length > 0 && i[i.length - 1]) &&
                          (o[0] === 6 || o[0] === 2)
                        ) {
                          s = 0
                          continue
                        }
                        if (
                          o[0] === 3 &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          s.label = o[1]
                          break
                        }
                        if (o[0] === 6 && s.label < i[1]) {
                          ;(s.label = i[1]), (i = o)
                          break
                        }
                        if (i && s.label < i[2]) {
                          ;(s.label = i[2]), s.ops.push(o)
                          break
                        }
                        i[2] && s.ops.pop(), s.trys.pop()
                        continue
                    }
                    o = t.call(e, s)
                  } catch (a) {
                    ;(o = [6, a]), (n = 0)
                  } finally {
                    r = i = 0
                  }
                }
                if (5 & o[0]) throw o[1]
                return { value: o[0] ? o[1] : void 0, done: !0 }
              })([o, a])
            }
          }
        }
        function p (e, t, r, n) {
          void 0 === n && (n = r), (e[n] = t[r])
        }
        function h (e, t) {
          for (const r in e) { r === 'default' || t.hasOwnProperty(r) || (t[r] = e[r]) }
        }
        function d (e) {
          const t = typeof Symbol === 'function' && Symbol.iterator
          const r = t && e[t]
          let n = 0
          if (r) return r.call(e)
          if (e && typeof e.length === 'number') {
            return {
              next: function () {
                return (
                  e && n >= e.length && (e = void 0),
                  { value: e && e[n++], done: !e }
                )
              }
            }
          }
          throw new TypeError(
            t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
          )
        }
        function v (e, t) {
          let r = typeof Symbol === 'function' && e[Symbol.iterator]
          if (!r) return e
          let n
          let i
          const o = r.call(e)
          const s = []
          try {
            for (; (void 0 === t || t-- > 0) && !(n = o.next()).done;) { s.push(n.value) }
          } catch (a) {
            i = { error: a }
          } finally {
            try {
              n && !n.done && (r = o.return) && r.call(o)
            } finally {
              if (i) throw i.error
            }
          }
          return s
        }
        function g () {
          for (var e = [], t = 0; t < arguments.length; t++) { e = e.concat(v(arguments[t])) }
          return e
        }
        function y () {
          for (var e = 0, t = 0, r = arguments.length; t < r; t++) { e += arguments[t].length }
          const n = Array(e)
          let i = 0
          for (t = 0; t < r; t++) {
            for (let o = arguments[t], s = 0, a = o.length; s < a; s++, i++) { n[i] = o[s] }
          }
          return n
        }
        function m (e) {
          return this instanceof m ? ((this.v = e), this) : new m(e)
        }
        function b (e, t, r) {
          if (!Symbol.asyncIterator) { throw new TypeError('Symbol.asyncIterator is not defined.') }
          let n
          const i = r.apply(e, t || [])
          const o = []
          return (
            (n = {}),
            s('next'),
            s('throw'),
            s('return'),
            (n[Symbol.asyncIterator] = function () {
              return this
            }),
            n
          )
          function s (e) {
            i[e] &&
              (n[e] = function (t) {
                return new Promise(function (r, n) {
                  o.push([e, t, r, n]) > 1 || a(e, t)
                })
              })
          }
          function a (e, t) {
            try {
              ;(r = i[e](t)).value instanceof m
                ? Promise.resolve(r.value.v).then(c, u)
                : f(o[0][2], r)
            } catch (n) {
              f(o[0][3], n)
            }
            let r
          }
          function c (e) {
            a('next', e)
          }
          function u (e) {
            a('throw', e)
          }
          function f (e, t) {
            e(t), o.shift(), o.length && a(o[0][0], o[0][1])
          }
        }
        function w (e) {
          let t, r
          return (
            (t = {}),
            n('next'),
            n('throw', function (e) {
              throw e
            }),
            n('return'),
            (t[Symbol.iterator] = function () {
              return this
            }),
            t
          )
          function n (n, i) {
            t[n] = e[n]
              ? function (t) {
                return (r = !r)
                  ? { value: m(e[n](t)), done: n === 'return' }
                  : i
                    ? i(t)
                    : t
              }
              : i
          }
        }
        function _ (e) {
          if (!Symbol.asyncIterator) { throw new TypeError('Symbol.asyncIterator is not defined.') }
          let t
          const r = e[Symbol.asyncIterator]
          return r
            ? r.call(e)
            : ((e = d(e)),
              (t = {}),
              n('next'),
              n('throw'),
              n('return'),
              (t[Symbol.asyncIterator] = function () {
                return this
              }),
              t)
          function n (r) {
            t[r] =
              e[r] &&
              function (t) {
                return new Promise(function (n, i) {
                  ;(function (e, t, r, n) {
                    Promise.resolve(n).then(function (t) {
                      e({ value: t, done: r })
                    }, t)
                  })(n, i, (t = e[r](t)).done, t.value)
                })
              }
          }
        }
        function x (e, t) {
          return (
            Object.defineProperty
              ? Object.defineProperty(e, 'raw', { value: t })
              : (e.raw = t),
            e
          )
        }
        function E (e) {
          if (e && e.__esModule) return e
          const t = {}
          if (e != null) { for (const r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]) }
          return (t.default = e), t
        }
        function k (e) {
          return e && e.__esModule ? e : { default: e }
        }
        function S (e, t) {
          if (!t.has(e)) {
            throw new TypeError(
              'attempted to get private field on non-instance'
            )
          }
          return t.get(e)
        }
        function Z (e, t, r) {
          if (!t.has(e)) {
            throw new TypeError(
              'attempted to set private field on non-instance'
            )
          }
          return t.set(e, r), r
        }
      },
      62271: function (e, t, r) {
        'use strict'
        const n = r(17061).default
        const i = r(56690).default
        const o = r(89728).default
        const s = r(78646)
        const a = r(86160)
        const c = s.__importDefault(r(8119))
        const u = r(30246)
        const f = (function () {
          function e () {
            i(this, e), (this.localStorage = c.default)
          }
          return (
            o(e, [
              {
                key: 'getKeys',
                value: function () {
                  return s.__awaiter(
                    this,
                    void 0,
                    void 0,
                    n().mark(function e () {
                      return n().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return e.abrupt(
                                  'return',
                                  Object.keys(this.localStorage)
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
                }
              },
              {
                key: 'getEntries',
                value: function () {
                  return s.__awaiter(
                    this,
                    void 0,
                    void 0,
                    n().mark(function e () {
                      return n().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return e.abrupt(
                                  'return',
                                  Object.entries(this.localStorage).map(
                                    u.parseEntry
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
                }
              },
              {
                key: 'getItem',
                value: function (e) {
                  return s.__awaiter(
                    this,
                    void 0,
                    void 0,
                    n().mark(function t () {
                      let r
                      return n().wrap(
                        function (t) {
                          for (;;) {
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  (r = this.localStorage.getItem(e)) !== null
                                ) {
                                  t.next = 3
                                  break
                                }
                                return t.abrupt('return', void 0)
                              case 3:
                                return t.abrupt('return', a.safeJsonParse(r))
                              case 4:
                              case 'end':
                                return t.stop()
                            }
                          }
                        },
                        t,
                        this
                      )
                    })
                  )
                }
              },
              {
                key: 'setItem',
                value: function (e, t) {
                  return s.__awaiter(
                    this,
                    void 0,
                    void 0,
                    n().mark(function r () {
                      return n().wrap(
                        function (r) {
                          for (;;) {
                            switch ((r.prev = r.next)) {
                              case 0:
                                this.localStorage.setItem(
                                  e,
                                  a.safeJsonStringify(t)
                                )
                              case 1:
                              case 'end':
                                return r.stop()
                            }
                          }
                        },
                        r,
                        this
                      )
                    })
                  )
                }
              },
              {
                key: 'removeItem',
                value: function (e) {
                  return s.__awaiter(
                    this,
                    void 0,
                    void 0,
                    n().mark(function t () {
                      return n().wrap(
                        function (t) {
                          for (;;) {
                            switch ((t.prev = t.next)) {
                              case 0:
                                this.localStorage.removeItem(e)
                              case 1:
                              case 'end':
                                return t.stop()
                            }
                          }
                        },
                        t,
                        this
                      )
                    })
                  )
                }
              }
            ]),
            e
          )
        })()
        t.ZP = f
      },
      8119: function (e, t, r) {
        'use strict'
        !(function () {
          let t
          function n () {}
          ;((t = n).prototype.getItem = function (e) {
            return this.hasOwnProperty(e) ? String(this[e]) : null
          }),
          (t.prototype.setItem = function (e, t) {
            this[e] = String(t)
          }),
          (t.prototype.removeItem = function (e) {
            delete this[e]
          }),
          (t.prototype.clear = function () {
            const e = this
            Object.keys(e).forEach(function (t) {
              ;(e[t] = void 0), delete e[t]
            })
          }),
          (t.prototype.key = function (e) {
            return (e = e || 0), Object.keys(this)[e]
          }),
          t.prototype.__defineGetter__('length', function () {
            return Object.keys(this).length
          }),
          typeof r.g !== 'undefined' && r.g.localStorage
            ? (e.exports = r.g.localStorage)
            : typeof window !== 'undefined' && window.localStorage
              ? (e.exports = window.localStorage)
              : (e.exports = new n())
        })()
      },
      30246: function (e, t, r) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 })
        const n = r(78646)
        n.__exportStar(r(31717), t), n.__exportStar(r(36340), t)
      },
      31717: function (e, t, r) {
        'use strict'
        const n = r(89728).default
        const i = r(56690).default
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.IKeyValueStorage = void 0)
        const o = n(function e () {
          i(this, e)
        })
        t.IKeyValueStorage = o
      },
      36340: function (e, t, r) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.parseEntry = void 0)
        const n = r(86160)
        t.parseEntry = function (e) {
          let t
          return [
            e[0],
            n.safeJsonParse((t = e[1]) !== null && void 0 !== t ? t : '')
          ]
        }
      },
      78646: function (e, t, r) {
        'use strict'
        r.r(t),
        r.d(t, {
          __assign: function () {
            return o
          },
          __asyncDelegator: function () {
            return w
          },
          __asyncGenerator: function () {
            return b
          },
          __asyncValues: function () {
            return _
          },
          __await: function () {
            return m
          },
          __awaiter: function () {
            return f
          },
          __classPrivateFieldGet: function () {
            return S
          },
          __classPrivateFieldSet: function () {
            return Z
          },
          __createBinding: function () {
            return p
          },
          __decorate: function () {
            return a
          },
          __exportStar: function () {
            return h
          },
          __extends: function () {
            return i
          },
          __generator: function () {
            return l
          },
          __importDefault: function () {
            return k
          },
          __importStar: function () {
            return E
          },
          __makeTemplateObject: function () {
            return x
          },
          __metadata: function () {
            return u
          },
          __param: function () {
            return c
          },
          __read: function () {
            return v
          },
          __rest: function () {
            return s
          },
          __spread: function () {
            return g
          },
          __spreadArrays: function () {
            return y
          },
          __values: function () {
            return d
          }
        })
        let n = function (e, t) {
          return (
            (n =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t
                }) ||
              function (e, t) {
                for (const r in t) t.hasOwnProperty(r) && (e[r] = t[r])
              }),
            n(e, t)
          )
        }
        function i (e, t) {
          function r () {
            this.constructor = e
          }
          n(e, t),
          (e.prototype =
              t === null
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()))
        }
        var o = function () {
          return (
            (o =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++) {
                  for (const i in (t = arguments[r])) { Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]) }
                }
                return e
              }),
            o.apply(this, arguments)
          )
        }
        function s (e, t) {
          const r = {}
          for (var n in e) {
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.indexOf(n) < 0 &&
              (r[n] = e[n])
          }
          if (e != null && typeof Object.getOwnPropertySymbols === 'function') {
            let i = 0
            for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) {
              t.indexOf(n[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
                (r[n[i]] = e[n[i]])
            }
          }
          return r
        }
        function a (e, t, r, n) {
          let i
          const o = arguments.length
          let s =
              o < 3
                ? t
                : n === null
                  ? (n = Object.getOwnPropertyDescriptor(t, r))
                  : n
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          ) { s = Reflect.decorate(e, t, r, n) } else {
            for (let a = e.length - 1; a >= 0; a--) {
              (i = e[a]) &&
                (s = (o < 3 ? i(s) : o > 3 ? i(t, r, s) : i(t, r)) || s)
            }
          }
          return o > 3 && s && Object.defineProperty(t, r, s), s
        }
        function c (e, t) {
          return function (r, n) {
            t(r, n, e)
          }
        }
        function u (e, t) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          ) { return Reflect.metadata(e, t) }
        }
        function f (e, t, r, n) {
          return new (r || (r = Promise))(function (i, o) {
            function s (e) {
              try {
                c(n.next(e))
              } catch (t) {
                o(t)
              }
            }
            function a (e) {
              try {
                c(n.throw(e))
              } catch (t) {
                o(t)
              }
            }
            function c (e) {
              let t
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function (e) {
                      e(t)
                    })).then(s, a)
            }
            c((n = n.apply(e, t || [])).next())
          })
        }
        function l (e, t) {
          let r
          let n
          let i
          let o
          let s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1]
              return i[1]
            },
            trys: [],
            ops: []
          }
          return (
            (o = { next: a(0), throw: a(1), return: a(2) }),
            typeof Symbol === 'function' &&
              (o[Symbol.iterator] = function () {
                return this
              }),
            o
          )
          function a (o) {
            return function (a) {
              return (function (o) {
                if (r) throw new TypeError('Generator is already executing.')
                for (; s;) {
                  try {
                    if (
                      ((r = 1),
                      n &&
                        (i =
                          2 & o[0]
                            ? n.return
                            : o[0]
                              ? n.throw || ((i = n.return) && i.call(n), 0)
                              : n.next) &&
                        !(i = i.call(n, o[1])).done)
                    ) { return i }
                    switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o
                        break
                      case 4:
                        return s.label++, { value: o[1], done: !1 }
                      case 5:
                        s.label++, (n = o[1]), (o = [0])
                        continue
                      case 7:
                        ;(o = s.ops.pop()), s.trys.pop()
                        continue
                      default:
                        if (
                          !(i = (i = s.trys).length > 0 && i[i.length - 1]) &&
                          (o[0] === 6 || o[0] === 2)
                        ) {
                          s = 0
                          continue
                        }
                        if (
                          o[0] === 3 &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          s.label = o[1]
                          break
                        }
                        if (o[0] === 6 && s.label < i[1]) {
                          ;(s.label = i[1]), (i = o)
                          break
                        }
                        if (i && s.label < i[2]) {
                          ;(s.label = i[2]), s.ops.push(o)
                          break
                        }
                        i[2] && s.ops.pop(), s.trys.pop()
                        continue
                    }
                    o = t.call(e, s)
                  } catch (a) {
                    ;(o = [6, a]), (n = 0)
                  } finally {
                    r = i = 0
                  }
                }
                if (5 & o[0]) throw o[1]
                return { value: o[0] ? o[1] : void 0, done: !0 }
              })([o, a])
            }
          }
        }
        function p (e, t, r, n) {
          void 0 === n && (n = r), (e[n] = t[r])
        }
        function h (e, t) {
          for (const r in e) { r === 'default' || t.hasOwnProperty(r) || (t[r] = e[r]) }
        }
        function d (e) {
          const t = typeof Symbol === 'function' && Symbol.iterator
          const r = t && e[t]
          let n = 0
          if (r) return r.call(e)
          if (e && typeof e.length === 'number') {
            return {
              next: function () {
                return (
                  e && n >= e.length && (e = void 0),
                  { value: e && e[n++], done: !e }
                )
              }
            }
          }
          throw new TypeError(
            t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
          )
        }
        function v (e, t) {
          let r = typeof Symbol === 'function' && e[Symbol.iterator]
          if (!r) return e
          let n
          let i
          const o = r.call(e)
          const s = []
          try {
            for (; (void 0 === t || t-- > 0) && !(n = o.next()).done;) { s.push(n.value) }
          } catch (a) {
            i = { error: a }
          } finally {
            try {
              n && !n.done && (r = o.return) && r.call(o)
            } finally {
              if (i) throw i.error
            }
          }
          return s
        }
        function g () {
          for (var e = [], t = 0; t < arguments.length; t++) { e = e.concat(v(arguments[t])) }
          return e
        }
        function y () {
          for (var e = 0, t = 0, r = arguments.length; t < r; t++) { e += arguments[t].length }
          const n = Array(e)
          let i = 0
          for (t = 0; t < r; t++) {
            for (let o = arguments[t], s = 0, a = o.length; s < a; s++, i++) { n[i] = o[s] }
          }
          return n
        }
        function m (e) {
          return this instanceof m ? ((this.v = e), this) : new m(e)
        }
        function b (e, t, r) {
          if (!Symbol.asyncIterator) { throw new TypeError('Symbol.asyncIterator is not defined.') }
          let n
          const i = r.apply(e, t || [])
          const o = []
          return (
            (n = {}),
            s('next'),
            s('throw'),
            s('return'),
            (n[Symbol.asyncIterator] = function () {
              return this
            }),
            n
          )
          function s (e) {
            i[e] &&
              (n[e] = function (t) {
                return new Promise(function (r, n) {
                  o.push([e, t, r, n]) > 1 || a(e, t)
                })
              })
          }
          function a (e, t) {
            try {
              ;(r = i[e](t)).value instanceof m
                ? Promise.resolve(r.value.v).then(c, u)
                : f(o[0][2], r)
            } catch (n) {
              f(o[0][3], n)
            }
            let r
          }
          function c (e) {
            a('next', e)
          }
          function u (e) {
            a('throw', e)
          }
          function f (e, t) {
            e(t), o.shift(), o.length && a(o[0][0], o[0][1])
          }
        }
        function w (e) {
          let t, r
          return (
            (t = {}),
            n('next'),
            n('throw', function (e) {
              throw e
            }),
            n('return'),
            (t[Symbol.iterator] = function () {
              return this
            }),
            t
          )
          function n (n, i) {
            t[n] = e[n]
              ? function (t) {
                return (r = !r)
                  ? { value: m(e[n](t)), done: n === 'return' }
                  : i
                    ? i(t)
                    : t
              }
              : i
          }
        }
        function _ (e) {
          if (!Symbol.asyncIterator) { throw new TypeError('Symbol.asyncIterator is not defined.') }
          let t
          const r = e[Symbol.asyncIterator]
          return r
            ? r.call(e)
            : ((e = d(e)),
              (t = {}),
              n('next'),
              n('throw'),
              n('return'),
              (t[Symbol.asyncIterator] = function () {
                return this
              }),
              t)
          function n (r) {
            t[r] =
              e[r] &&
              function (t) {
                return new Promise(function (n, i) {
                  ;(function (e, t, r, n) {
                    Promise.resolve(n).then(function (t) {
                      e({ value: t, done: r })
                    }, t)
                  })(n, i, (t = e[r](t)).done, t.value)
                })
              }
          }
        }
        function x (e, t) {
          return (
            Object.defineProperty
              ? Object.defineProperty(e, 'raw', { value: t })
              : (e.raw = t),
            e
          )
        }
        function E (e) {
          if (e && e.__esModule) return e
          const t = {}
          if (e != null) { for (const r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]) }
          return (t.default = e), t
        }
        function k (e) {
          return e && e.__esModule ? e : { default: e }
        }
        function S (e, t) {
          if (!t.has(e)) {
            throw new TypeError(
              'attempted to get private field on non-instance'
            )
          }
          return t.get(e)
        }
        function Z (e, t, r) {
          if (!t.has(e)) {
            throw new TypeError(
              'attempted to set private field on non-instance'
            )
          }
          return t.set(e, r), r
        }
      },
      50790: function (e, t) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.PINO_CUSTOM_CONTEXT_KEY = t.PINO_LOGGER_DEFAULTS = void 0),
        (t.PINO_LOGGER_DEFAULTS = { level: 'info' }),
        (t.PINO_CUSTOM_CONTEXT_KEY = 'custom_context')
      },
      97087: function (e, t, r) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.pino = void 0)
        const n = r(61263)
        const i = n.__importDefault(r(94527))
        Object.defineProperty(t, 'pino', {
          enumerable: !0,
          get: function () {
            return i.default
          }
        }),
        n.__exportStar(r(50790), t),
        n.__exportStar(r(21090), t)
      },
      21090: function (e, t, r) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.generateChildLogger =
            t.formatChildLoggerContext =
            t.getLoggerContext =
            t.setBrowserLoggerContext =
            t.getBrowserLoggerContext =
            t.getDefaultLoggerOptions =
              void 0)
        const n = r(50790)
        function i (e) {
          return (
            e[
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : n.PINO_CUSTOM_CONTEXT_KEY
            ] || ''
          )
        }
        function o (e, t) {
          return (
            (e[
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : n.PINO_CUSTOM_CONTEXT_KEY
            ] = t),
            e
          )
        }
        function s (e) {
          const t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : n.PINO_CUSTOM_CONTEXT_KEY
          return typeof e.bindings === 'undefined'
            ? i(e, t)
            : e.bindings().context || ''
        }
        function a (e, t) {
          const r = s(
            e,
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : n.PINO_CUSTOM_CONTEXT_KEY
          )
          return r.trim() ? ''.concat(r, '/').concat(t) : t
        }
        ;(t.getDefaultLoggerOptions = function (e) {
          return Object.assign(Object.assign({}, e), {
            level:
              (e === null || void 0 === e ? void 0 : e.level) ||
              n.PINO_LOGGER_DEFAULTS.level
          })
        }),
        (t.getBrowserLoggerContext = i),
        (t.setBrowserLoggerContext = o),
        (t.getLoggerContext = s),
        (t.formatChildLoggerContext = a),
        (t.generateChildLogger = function (e, t) {
          const r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : n.PINO_CUSTOM_CONTEXT_KEY
          const i = a(e, t, r)
          return o(e.child({ context: i }), i, r)
        })
      },
      61263: function (e, t, r) {
        'use strict'
        r.r(t),
        r.d(t, {
          __assign: function () {
            return o
          },
          __asyncDelegator: function () {
            return w
          },
          __asyncGenerator: function () {
            return b
          },
          __asyncValues: function () {
            return _
          },
          __await: function () {
            return m
          },
          __awaiter: function () {
            return f
          },
          __classPrivateFieldGet: function () {
            return S
          },
          __classPrivateFieldSet: function () {
            return Z
          },
          __createBinding: function () {
            return p
          },
          __decorate: function () {
            return a
          },
          __exportStar: function () {
            return h
          },
          __extends: function () {
            return i
          },
          __generator: function () {
            return l
          },
          __importDefault: function () {
            return k
          },
          __importStar: function () {
            return E
          },
          __makeTemplateObject: function () {
            return x
          },
          __metadata: function () {
            return u
          },
          __param: function () {
            return c
          },
          __read: function () {
            return v
          },
          __rest: function () {
            return s
          },
          __spread: function () {
            return g
          },
          __spreadArrays: function () {
            return y
          },
          __values: function () {
            return d
          }
        })
        let n = function (e, t) {
          return (
            (n =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t
                }) ||
              function (e, t) {
                for (const r in t) t.hasOwnProperty(r) && (e[r] = t[r])
              }),
            n(e, t)
          )
        }
        function i (e, t) {
          function r () {
            this.constructor = e
          }
          n(e, t),
          (e.prototype =
              t === null
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()))
        }
        var o = function () {
          return (
            (o =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++) {
                  for (const i in (t = arguments[r])) { Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]) }
                }
                return e
              }),
            o.apply(this, arguments)
          )
        }
        function s (e, t) {
          const r = {}
          for (var n in e) {
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.indexOf(n) < 0 &&
              (r[n] = e[n])
          }
          if (e != null && typeof Object.getOwnPropertySymbols === 'function') {
            let i = 0
            for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) {
              t.indexOf(n[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
                (r[n[i]] = e[n[i]])
            }
          }
          return r
        }
        function a (e, t, r, n) {
          let i
          const o = arguments.length
          let s =
              o < 3
                ? t
                : n === null
                  ? (n = Object.getOwnPropertyDescriptor(t, r))
                  : n
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          ) { s = Reflect.decorate(e, t, r, n) } else {
            for (let a = e.length - 1; a >= 0; a--) {
              (i = e[a]) &&
                (s = (o < 3 ? i(s) : o > 3 ? i(t, r, s) : i(t, r)) || s)
            }
          }
          return o > 3 && s && Object.defineProperty(t, r, s), s
        }
        function c (e, t) {
          return function (r, n) {
            t(r, n, e)
          }
        }
        function u (e, t) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          ) { return Reflect.metadata(e, t) }
        }
        function f (e, t, r, n) {
          return new (r || (r = Promise))(function (i, o) {
            function s (e) {
              try {
                c(n.next(e))
              } catch (t) {
                o(t)
              }
            }
            function a (e) {
              try {
                c(n.throw(e))
              } catch (t) {
                o(t)
              }
            }
            function c (e) {
              let t
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function (e) {
                      e(t)
                    })).then(s, a)
            }
            c((n = n.apply(e, t || [])).next())
          })
        }
        function l (e, t) {
          let r
          let n
          let i
          let o
          let s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1]
              return i[1]
            },
            trys: [],
            ops: []
          }
          return (
            (o = { next: a(0), throw: a(1), return: a(2) }),
            typeof Symbol === 'function' &&
              (o[Symbol.iterator] = function () {
                return this
              }),
            o
          )
          function a (o) {
            return function (a) {
              return (function (o) {
                if (r) throw new TypeError('Generator is already executing.')
                for (; s;) {
                  try {
                    if (
                      ((r = 1),
                      n &&
                        (i =
                          2 & o[0]
                            ? n.return
                            : o[0]
                              ? n.throw || ((i = n.return) && i.call(n), 0)
                              : n.next) &&
                        !(i = i.call(n, o[1])).done)
                    ) { return i }
                    switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o
                        break
                      case 4:
                        return s.label++, { value: o[1], done: !1 }
                      case 5:
                        s.label++, (n = o[1]), (o = [0])
                        continue
                      case 7:
                        ;(o = s.ops.pop()), s.trys.pop()
                        continue
                      default:
                        if (
                          !(i = (i = s.trys).length > 0 && i[i.length - 1]) &&
                          (o[0] === 6 || o[0] === 2)
                        ) {
                          s = 0
                          continue
                        }
                        if (
                          o[0] === 3 &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          s.label = o[1]
                          break
                        }
                        if (o[0] === 6 && s.label < i[1]) {
                          ;(s.label = i[1]), (i = o)
                          break
                        }
                        if (i && s.label < i[2]) {
                          ;(s.label = i[2]), s.ops.push(o)
                          break
                        }
                        i[2] && s.ops.pop(), s.trys.pop()
                        continue
                    }
                    o = t.call(e, s)
                  } catch (a) {
                    ;(o = [6, a]), (n = 0)
                  } finally {
                    r = i = 0
                  }
                }
                if (5 & o[0]) throw o[1]
                return { value: o[0] ? o[1] : void 0, done: !0 }
              })([o, a])
            }
          }
        }
        function p (e, t, r, n) {
          void 0 === n && (n = r), (e[n] = t[r])
        }
        function h (e, t) {
          for (const r in e) { r === 'default' || t.hasOwnProperty(r) || (t[r] = e[r]) }
        }
        function d (e) {
          const t = typeof Symbol === 'function' && Symbol.iterator
          const r = t && e[t]
          let n = 0
          if (r) return r.call(e)
          if (e && typeof e.length === 'number') {
            return {
              next: function () {
                return (
                  e && n >= e.length && (e = void 0),
                  { value: e && e[n++], done: !e }
                )
              }
            }
          }
          throw new TypeError(
            t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
          )
        }
        function v (e, t) {
          let r = typeof Symbol === 'function' && e[Symbol.iterator]
          if (!r) return e
          let n
          let i
          const o = r.call(e)
          const s = []
          try {
            for (; (void 0 === t || t-- > 0) && !(n = o.next()).done;) { s.push(n.value) }
          } catch (a) {
            i = { error: a }
          } finally {
            try {
              n && !n.done && (r = o.return) && r.call(o)
            } finally {
              if (i) throw i.error
            }
          }
          return s
        }
        function g () {
          for (var e = [], t = 0; t < arguments.length; t++) { e = e.concat(v(arguments[t])) }
          return e
        }
        function y () {
          for (var e = 0, t = 0, r = arguments.length; t < r; t++) { e += arguments[t].length }
          const n = Array(e)
          let i = 0
          for (t = 0; t < r; t++) {
            for (let o = arguments[t], s = 0, a = o.length; s < a; s++, i++) { n[i] = o[s] }
          }
          return n
        }
        function m (e) {
          return this instanceof m ? ((this.v = e), this) : new m(e)
        }
        function b (e, t, r) {
          if (!Symbol.asyncIterator) { throw new TypeError('Symbol.asyncIterator is not defined.') }
          let n
          const i = r.apply(e, t || [])
          const o = []
          return (
            (n = {}),
            s('next'),
            s('throw'),
            s('return'),
            (n[Symbol.asyncIterator] = function () {
              return this
            }),
            n
          )
          function s (e) {
            i[e] &&
              (n[e] = function (t) {
                return new Promise(function (r, n) {
                  o.push([e, t, r, n]) > 1 || a(e, t)
                })
              })
          }
          function a (e, t) {
            try {
              ;(r = i[e](t)).value instanceof m
                ? Promise.resolve(r.value.v).then(c, u)
                : f(o[0][2], r)
            } catch (n) {
              f(o[0][3], n)
            }
            let r
          }
          function c (e) {
            a('next', e)
          }
          function u (e) {
            a('throw', e)
          }
          function f (e, t) {
            e(t), o.shift(), o.length && a(o[0][0], o[0][1])
          }
        }
        function w (e) {
          let t, r
          return (
            (t = {}),
            n('next'),
            n('throw', function (e) {
              throw e
            }),
            n('return'),
            (t[Symbol.iterator] = function () {
              return this
            }),
            t
          )
          function n (n, i) {
            t[n] = e[n]
              ? function (t) {
                return (r = !r)
                  ? { value: m(e[n](t)), done: n === 'return' }
                  : i
                    ? i(t)
                    : t
              }
              : i
          }
        }
        function _ (e) {
          if (!Symbol.asyncIterator) { throw new TypeError('Symbol.asyncIterator is not defined.') }
          let t
          const r = e[Symbol.asyncIterator]
          return r
            ? r.call(e)
            : ((e = d(e)),
              (t = {}),
              n('next'),
              n('throw'),
              n('return'),
              (t[Symbol.asyncIterator] = function () {
                return this
              }),
              t)
          function n (r) {
            t[r] =
              e[r] &&
              function (t) {
                return new Promise(function (n, i) {
                  ;(function (e, t, r, n) {
                    Promise.resolve(n).then(function (t) {
                      e({ value: t, done: r })
                    }, t)
                  })(n, i, (t = e[r](t)).done, t.value)
                })
              }
          }
        }
        function x (e, t) {
          return (
            Object.defineProperty
              ? Object.defineProperty(e, 'raw', { value: t })
              : (e.raw = t),
            e
          )
        }
        function E (e) {
          if (e && e.__esModule) return e
          const t = {}
          if (e != null) { for (const r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]) }
          return (t.default = e), t
        }
        function k (e) {
          return e && e.__esModule ? e : { default: e }
        }
        function S (e, t) {
          if (!t.has(e)) {
            throw new TypeError(
              'attempted to get private field on non-instance'
            )
          }
          return t.get(e)
        }
        function Z (e, t, r) {
          if (!t.has(e)) {
            throw new TypeError(
              'attempted to set private field on non-instance'
            )
          }
          return t.set(e, r), r
        }
      },
      97382: function () {},
      58785: function () {},
      38183: function (e, t) {
        'use strict'
        function r (e) {
          let t = void 0
          return (
            typeof window !== 'undefined' &&
              typeof window[e] !== 'undefined' &&
              (t = window[e]),
            t
          )
        }
        function n (e) {
          const t = r(e)
          if (!t) throw new Error(''.concat(e, ' is not defined in Window'))
          return t
        }
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.getLocalStorage =
            t.getLocalStorageOrThrow =
            t.getCrypto =
            t.getCryptoOrThrow =
            t.getLocation =
            t.getLocationOrThrow =
            t.getNavigator =
            t.getNavigatorOrThrow =
            t.getDocument =
            t.getDocumentOrThrow =
            t.getFromWindowOrThrow =
            t.getFromWindow =
              void 0),
        (t.getFromWindow = r),
        (t.getFromWindowOrThrow = n),
        (t.getDocumentOrThrow = function () {
          return n('document')
        }),
        (t.getDocument = function () {
          return r('document')
        }),
        (t.getNavigatorOrThrow = function () {
          return n('navigator')
        }),
        (t.getNavigator = function () {
          return r('navigator')
        }),
        (t.getLocationOrThrow = function () {
          return n('location')
        }),
        (t.getLocation = function () {
          return r('location')
        }),
        (t.getCryptoOrThrow = function () {
          return n('crypto')
        }),
        (t.getCrypto = function () {
          return r('crypto')
        }),
        (t.getLocalStorageOrThrow = function () {
          return n('localStorage')
        }),
        (t.getLocalStorage = function () {
          return r('localStorage')
        })
      },
      73328: function (e, t, r) {
        'use strict'
        t.D = void 0
        const n = r(38183)
        t.D = function () {
          let e, t
          try {
            ;(e = n.getDocumentOrThrow()), (t = n.getLocationOrThrow())
          } catch (o) {
            return null
          }
          function r () {
            for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) { r[n] = arguments[n] }
            for (
              var i = e.getElementsByTagName('meta'),
                o = function () {
                  const e = i[s]
                  const t = ['itemprop', 'property', 'name']
                    .map(function (t) {
                      return e.getAttribute(t)
                    })
                    .filter(function (e) {
                      return !!e && r.includes(e)
                    })
                  if (t.length && t) {
                    const n = e.getAttribute('content')
                    if (n) return { v: n }
                  }
                },
                s = 0;
              s < i.length;
              s++
            ) {
              const a = o()
              if (typeof a === 'object') return a.v
            }
            return ''
          }
          const i = (function () {
            let t = r('name', 'og:site_name', 'og:title', 'twitter:title')
            return t || (t = e.title), t
          })()
          return {
            description: r(
              'description',
              'og:description',
              'twitter:description',
              'keywords'
            ),
            url: t.origin,
            icons: (function () {
              for (
                var r = e.getElementsByTagName('link'), n = [], i = 0;
                i < r.length;
                i++
              ) {
                const o = r[i]
                const s = o.getAttribute('rel')
                if (s && s.toLowerCase().indexOf('icon') > -1) {
                  const a = o.getAttribute('href')
                  if (a) {
                    if (
                      a.toLowerCase().indexOf('https:') === -1 &&
                      a.toLowerCase().indexOf('http:') === -1 &&
                      a.indexOf('//') !== 0
                    ) {
                      let c = t.protocol + '//' + t.host
                      if (a.indexOf('/') === 0) c += a
                      else {
                        const u = t.pathname.split('/')
                        u.pop(), (c += u.join('/') + '/' + a)
                      }
                      n.push(c)
                    } else if (a.indexOf('//') === 0) {
                      const f = t.protocol + a
                      n.push(f)
                    } else n.push(a)
                  }
                }
              }
              return n
            })(),
            name: i
          }
        }
      },
      24904: function (e) {
        'use strict'
        e.exports = function (e, t) {
          for (
            var r = {}, n = Object.keys(e), i = Array.isArray(t), o = 0;
            o < n.length;
            o++
          ) {
            const s = n[o]
            const a = e[s]
            ;(i ? t.indexOf(s) !== -1 : t(s, a, e)) && (r[s] = a)
          }
          return r
        }
      },
      54464: function (e, t, r) {
        'use strict'
        const n = r(38416).default
        const i = r(27424).default
        const o = r(74704).default
        const s = r(861).default
        const a = r(71199)
        const c = r(17388)
        const u = r(89953)
        const f = r(24904)
        const l = Symbol('encodeFragmentIdentifier')
        function p (e) {
          if (typeof e !== 'string' || e.length !== 1) {
            throw new TypeError(
              'arrayFormatSeparator must be single character string'
            )
          }
        }
        function h (e, t) {
          return t.encode ? (t.strict ? a(e) : encodeURIComponent(e)) : e
        }
        function d (e, t) {
          return t.decode ? c(e) : e
        }
        function v (e) {
          return Array.isArray(e)
            ? e.sort()
            : typeof e === 'object'
              ? v(Object.keys(e))
                .sort(function (e, t) {
                  return Number(e) - Number(t)
                })
                .map(function (t) {
                  return e[t]
                })
              : e
        }
        function g (e) {
          const t = e.indexOf('#')
          return t !== -1 && (e = e.slice(0, t)), e
        }
        function y (e) {
          const t = (e = g(e)).indexOf('?')
          return t === -1 ? '' : e.slice(t + 1)
        }
        function m (e, t) {
          return (
            t.parseNumbers &&
            !Number.isNaN(Number(e)) &&
            typeof e === 'string' &&
            e.trim() !== ''
              ? (e = Number(e))
              : !t.parseBooleans ||
                e === null ||
                (e.toLowerCase() !== 'true' && e.toLowerCase() !== 'false') ||
                (e = e.toLowerCase() === 'true'),
            e
          )
        }
        function b (e, t) {
          p(
            (t = Object.assign(
              {
                decode: !0,
                sort: !0,
                arrayFormat: 'none',
                arrayFormatSeparator: ',',
                parseNumbers: !1,
                parseBooleans: !1
              },
              t
            )).arrayFormatSeparator
          )
          const r = (function (e) {
            let t
            switch (e.arrayFormat) {
              case 'index':
                return function (e, r, n) {
                  ;(t = /\[(\d*)\]$/.exec(e)),
                  (e = e.replace(/\[\d*\]$/, '')),
                  t
                    ? (void 0 === n[e] && (n[e] = {}), (n[e][t[1]] = r))
                    : (n[e] = r)
                }
              case 'bracket':
                return function (e, r, n) {
                  ;(t = /(\[\])$/.exec(e)),
                  (e = e.replace(/\[\]$/, '')),
                  t
                    ? void 0 !== n[e]
                      ? (n[e] = [].concat(n[e], r))
                      : (n[e] = [r])
                    : (n[e] = r)
                }
              case 'colon-list-separator':
                return function (e, r, n) {
                  ;(t = /(:list)$/.exec(e)),
                  (e = e.replace(/:list$/, '')),
                  t
                    ? void 0 !== n[e]
                      ? (n[e] = [].concat(n[e], r))
                      : (n[e] = [r])
                    : (n[e] = r)
                }
              case 'comma':
              case 'separator':
                return function (t, r, n) {
                  const i =
                        typeof r === 'string' &&
                        r.includes(e.arrayFormatSeparator)
                  const o =
                        typeof r === 'string' &&
                        !i &&
                        d(r, e).includes(e.arrayFormatSeparator)
                  r = o ? d(r, e) : r
                  const s =
                      i || o
                        ? r.split(e.arrayFormatSeparator).map(function (t) {
                          return d(t, e)
                        })
                        : r === null
                          ? r
                          : d(r, e)
                  n[t] = s
                }
              case 'bracket-separator':
                return function (t, r, n) {
                  const i = /(\[\])$/.test(t)
                  if (((t = t.replace(/\[\]$/, '')), i)) {
                    const o =
                        r === null
                          ? []
                          : r.split(e.arrayFormatSeparator).map(function (t) {
                            return d(t, e)
                          })
                    void 0 !== n[t] ? (n[t] = [].concat(n[t], o)) : (n[t] = o)
                  } else n[t] = r ? d(r, e) : r
                }
              default:
                return function (e, t, r) {
                  void 0 !== r[e] ? (r[e] = [].concat(r[e], t)) : (r[e] = t)
                }
            }
          })(t)
          const n = Object.create(null)
          if (typeof e !== 'string') return n
          if (!(e = e.trim().replace(/^[?#&]/, ''))) return n
          let s
          const a = o(e.split('&'))
          try {
            for (a.s(); !(s = a.n()).done;) {
              const c = s.value
              if (c !== '') {
                const f = u(t.decode ? c.replace(/\+/g, ' ') : c, '=')
                const l = i(f, 2)
                const h = l[0]
                let g = l[1]
                ;(g =
                  void 0 === g
                    ? null
                    : ['comma', 'separator', 'bracket-separator'].includes(
                        t.arrayFormat
                      )
                        ? g
                        : d(g, t)),
                r(d(h, t), g, n)
              }
            }
          } catch (S) {
            a.e(S)
          } finally {
            a.f()
          }
          for (let y = 0, b = Object.keys(n); y < b.length; y++) {
            const w = b[y]
            const _ = n[w]
            if (typeof _ === 'object' && _ !== null) {
              for (let x = 0, E = Object.keys(_); x < E.length; x++) {
                const k = E[x]
                _[k] = m(_[k], t)
              }
            } else n[w] = m(_, t)
          }
          return !1 === t.sort
            ? n
            : (!0 === t.sort
                ? Object.keys(n).sort()
                : Object.keys(n).sort(t.sort)
              ).reduce(function (e, t) {
                const r = n[t]
                return (
                  Boolean(r) && typeof r === 'object' && !Array.isArray(r)
                    ? (e[t] = v(r))
                    : (e[t] = r),
                  e
                )
              }, Object.create(null))
        }
        ;(t.extract = y),
        (t.parse = b),
        (t.stringify = function (e, t) {
          if (!e) return ''
          p(
            (t = Object.assign(
              {
                encode: !0,
                strict: !0,
                arrayFormat: 'none',
                arrayFormatSeparator: ','
              },
              t
            )).arrayFormatSeparator
          )
          for (
            var r = function (r) {
                return (
                  (t.skipNull && ((n = e[r]) === null || void 0 === n)) ||
                    (t.skipEmptyString && e[r] === '')
                )
                let n
              },
              n = (function (e) {
                switch (e.arrayFormat) {
                  case 'index':
                    return function (t) {
                      return function (r, n) {
                        const i = r.length
                        return void 0 === n ||
                            (e.skipNull && n === null) ||
                            (e.skipEmptyString && n === '')
                          ? r
                          : [].concat(
                              s(r),
                              n === null
                                ? [[h(t, e), '[', i, ']'].join('')]
                                : [
                                    [
                                      h(t, e),
                                      '[',
                                      h(i, e),
                                      ']=',
                                      h(n, e)
                                    ].join('')
                                  ]
                            )
                      }
                    }
                  case 'bracket':
                    return function (t) {
                      return function (r, n) {
                        return void 0 === n ||
                            (e.skipNull && n === null) ||
                            (e.skipEmptyString && n === '')
                          ? r
                          : [].concat(
                              s(r),
                              n === null
                                ? [[h(t, e), '[]'].join('')]
                                : [[h(t, e), '[]=', h(n, e)].join('')]
                            )
                      }
                    }
                  case 'colon-list-separator':
                    return function (t) {
                      return function (r, n) {
                        return void 0 === n ||
                            (e.skipNull && n === null) ||
                            (e.skipEmptyString && n === '')
                          ? r
                          : [].concat(
                              s(r),
                              n === null
                                ? [[h(t, e), ':list='].join('')]
                                : [[h(t, e), ':list=', h(n, e)].join('')]
                            )
                      }
                    }
                  case 'comma':
                  case 'separator':
                  case 'bracket-separator':
                    var t =
                        e.arrayFormat === 'bracket-separator' ? '[]=' : '='
                    return function (r) {
                      return function (n, i) {
                        return void 0 === i ||
                            (e.skipNull && i === null) ||
                            (e.skipEmptyString && i === '')
                          ? n
                          : ((i = i === null ? '' : i),
                            n.length === 0
                              ? [[h(r, e), t, h(i, e)].join('')]
                              : [[n, h(i, e)].join(e.arrayFormatSeparator)])
                      }
                    }
                  default:
                    return function (t) {
                      return function (r, n) {
                        return void 0 === n ||
                            (e.skipNull && n === null) ||
                            (e.skipEmptyString && n === '')
                          ? r
                          : [].concat(
                              s(r),
                              n === null
                                ? [h(t, e)]
                                : [[h(t, e), '=', h(n, e)].join('')]
                            )
                      }
                    }
                }
              })(t),
              i = {},
              o = 0,
              a = Object.keys(e);
            o < a.length;
            o++
          ) {
            const c = a[o]
            r(c) || (i[c] = e[c])
          }
          const u = Object.keys(i)
          return (
            !1 !== t.sort && u.sort(t.sort),
            u
              .map(function (r) {
                const i = e[r]
                return void 0 === i
                  ? ''
                  : i === null
                    ? h(r, t)
                    : Array.isArray(i)
                      ? i.length === 0 &&
                          t.arrayFormat === 'bracket-separator'
                        ? h(r, t) + '[]'
                        : i.reduce(n(r), []).join('&')
                      : h(r, t) + '=' + h(i, t)
              })
              .filter(function (e) {
                return e.length > 0
              })
              .join('&')
          )
        }),
        (t.parseUrl = function (e, t) {
          t = Object.assign({ decode: !0 }, t)
          const r = u(e, '#')
          const n = i(r, 2)
          const o = n[0]
          const s = n[1]
          return Object.assign(
            { url: o.split('?')[0] || '', query: b(y(e), t) },
            t && t.parseFragmentIdentifier && s
              ? { fragmentIdentifier: d(s, t) }
              : {}
          )
        }),
        (t.stringifyUrl = function (e, r) {
          r = Object.assign(n({ encode: !0, strict: !0 }, l, !0), r)
          const i = g(e.url).split('?')[0] || ''
          const o = t.extract(e.url)
          const s = t.parse(o, { sort: !1 })
          const a = Object.assign(s, e.query)
          let c = t.stringify(a, r)
          c && (c = '?'.concat(c))
          let u = (function (e) {
            let t = ''
            const r = e.indexOf('#')
            return r !== -1 && (t = e.slice(r)), t
          })(e.url)
          return (
            e.fragmentIdentifier &&
                (u = '#'.concat(
                  r[l] ? h(e.fragmentIdentifier, r) : e.fragmentIdentifier
                )),
            ''.concat(i).concat(c).concat(u)
          )
        }),
        (t.pick = function (e, r, i) {
          i = Object.assign(n({ parseFragmentIdentifier: !0 }, l, !1), i)
          const o = t.parseUrl(e, i)
          const s = o.url
          const a = o.query
          const c = o.fragmentIdentifier
          return t.stringifyUrl(
            { url: s, query: f(a, r), fragmentIdentifier: c },
            i
          )
        }),
        (t.exclude = function (e, r, n) {
          const i = Array.isArray(r)
            ? function (e) {
              return !r.includes(e)
            }
            : function (e, t) {
              return !r(e, t)
            }
          return t.pick(e, i, n)
        })
      },
      17168: function (e, t, r) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 })
        const n = r(58511)
        n.__exportStar(r(89288), t), n.__exportStar(r(91892), t)
      },
      89288: function (e, t) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.ONE_THOUSAND = t.ONE_HUNDRED = void 0),
        (t.ONE_HUNDRED = 100),
        (t.ONE_THOUSAND = 1e3)
      },
      91892: function (e, t) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.ONE_YEAR =
            t.FOUR_WEEKS =
            t.THREE_WEEKS =
            t.TWO_WEEKS =
            t.ONE_WEEK =
            t.THIRTY_DAYS =
            t.SEVEN_DAYS =
            t.FIVE_DAYS =
            t.THREE_DAYS =
            t.ONE_DAY =
            t.TWENTY_FOUR_HOURS =
            t.TWELVE_HOURS =
            t.SIX_HOURS =
            t.THREE_HOURS =
            t.ONE_HOUR =
            t.SIXTY_MINUTES =
            t.THIRTY_MINUTES =
            t.TEN_MINUTES =
            t.FIVE_MINUTES =
            t.ONE_MINUTE =
            t.SIXTY_SECONDS =
            t.THIRTY_SECONDS =
            t.TEN_SECONDS =
            t.FIVE_SECONDS =
            t.ONE_SECOND =
              void 0),
        (t.ONE_SECOND = 1),
        (t.FIVE_SECONDS = 5),
        (t.TEN_SECONDS = 10),
        (t.THIRTY_SECONDS = 30),
        (t.SIXTY_SECONDS = 60),
        (t.ONE_MINUTE = t.SIXTY_SECONDS),
        (t.FIVE_MINUTES = 5 * t.ONE_MINUTE),
        (t.TEN_MINUTES = 10 * t.ONE_MINUTE),
        (t.THIRTY_MINUTES = 30 * t.ONE_MINUTE),
        (t.SIXTY_MINUTES = 60 * t.ONE_MINUTE),
        (t.ONE_HOUR = t.SIXTY_MINUTES),
        (t.THREE_HOURS = 3 * t.ONE_HOUR),
        (t.SIX_HOURS = 6 * t.ONE_HOUR),
        (t.TWELVE_HOURS = 12 * t.ONE_HOUR),
        (t.TWENTY_FOUR_HOURS = 24 * t.ONE_HOUR),
        (t.ONE_DAY = t.TWENTY_FOUR_HOURS),
        (t.THREE_DAYS = 3 * t.ONE_DAY),
        (t.FIVE_DAYS = 5 * t.ONE_DAY),
        (t.SEVEN_DAYS = 7 * t.ONE_DAY),
        (t.THIRTY_DAYS = 30 * t.ONE_DAY),
        (t.ONE_WEEK = t.SEVEN_DAYS),
        (t.TWO_WEEKS = 2 * t.ONE_WEEK),
        (t.THREE_WEEKS = 3 * t.ONE_WEEK),
        (t.FOUR_WEEKS = 4 * t.ONE_WEEK),
        (t.ONE_YEAR = 365 * t.ONE_DAY)
      },
      19096: function (e, t, r) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 })
        const n = r(58511)
        n.__exportStar(r(61405), t),
        n.__exportStar(r(15454), t),
        n.__exportStar(r(70595), t),
        n.__exportStar(r(17168), t)
      },
      70595: function (e, t, r) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
        r(58511).__exportStar(r(72886), t)
      },
      72886: function (e, t, r) {
        'use strict'
        const n = r(89728).default
        const i = r(56690).default
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.IWatch = void 0)
        const o = n(function e () {
          i(this, e)
        })
        t.IWatch = o
      },
      38773: function (e, t, r) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.fromMiliseconds = t.toMiliseconds = void 0)
        const n = r(17168)
        ;(t.toMiliseconds = function (e) {
          return e * n.ONE_THOUSAND
        }),
        (t.fromMiliseconds = function (e) {
          return Math.floor(e / n.ONE_THOUSAND)
        })
      },
      77468: function (e, t) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.delay = void 0),
        (t.delay = function (e) {
          return new Promise(function (t) {
            setTimeout(function () {
              t(!0)
            }, e)
          })
        })
      },
      61405: function (e, t, r) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 })
        const n = r(58511)
        n.__exportStar(r(77468), t), n.__exportStar(r(38773), t)
      },
      15454: function (e, t, r) {
        'use strict'
        const n = r(56690).default
        const i = r(89728).default
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.Watch = void 0)
        const o = (function () {
          function e () {
            n(this, e), (this.timestamps = new Map())
          }
          return (
            i(e, [
              {
                key: 'start',
                value: function (e) {
                  if (this.timestamps.has(e)) {
                    throw new Error(
                      'Watch already started for label: '.concat(e)
                    )
                  }
                  this.timestamps.set(e, { started: Date.now() })
                }
              },
              {
                key: 'stop',
                value: function (e) {
                  const t = this.get(e)
                  if (typeof t.elapsed !== 'undefined') {
                    throw new Error(
                      'Watch already stopped for label: '.concat(e)
                    )
                  }
                  const r = Date.now() - t.started
                  this.timestamps.set(e, { started: t.started, elapsed: r })
                }
              },
              {
                key: 'get',
                value: function (e) {
                  const t = this.timestamps.get(e)
                  if (typeof t === 'undefined') { throw new Error('No timestamp found for label: '.concat(e)) }
                  return t
                }
              },
              {
                key: 'elapsed',
                value: function (e) {
                  const t = this.get(e)
                  const r = t.elapsed || Date.now() - t.started
                  return r
                }
              }
            ]),
            e
          )
        })()
        ;(t.Watch = o), (t.default = o)
      },
      58511: function (e, t, r) {
        'use strict'
        r.r(t),
        r.d(t, {
          __assign: function () {
            return o
          },
          __asyncDelegator: function () {
            return w
          },
          __asyncGenerator: function () {
            return b
          },
          __asyncValues: function () {
            return _
          },
          __await: function () {
            return m
          },
          __awaiter: function () {
            return f
          },
          __classPrivateFieldGet: function () {
            return S
          },
          __classPrivateFieldSet: function () {
            return Z
          },
          __createBinding: function () {
            return p
          },
          __decorate: function () {
            return a
          },
          __exportStar: function () {
            return h
          },
          __extends: function () {
            return i
          },
          __generator: function () {
            return l
          },
          __importDefault: function () {
            return k
          },
          __importStar: function () {
            return E
          },
          __makeTemplateObject: function () {
            return x
          },
          __metadata: function () {
            return u
          },
          __param: function () {
            return c
          },
          __read: function () {
            return v
          },
          __rest: function () {
            return s
          },
          __spread: function () {
            return g
          },
          __spreadArrays: function () {
            return y
          },
          __values: function () {
            return d
          }
        })
        let n = function (e, t) {
          return (
            (n =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t
                }) ||
              function (e, t) {
                for (const r in t) t.hasOwnProperty(r) && (e[r] = t[r])
              }),
            n(e, t)
          )
        }
        function i (e, t) {
          function r () {
            this.constructor = e
          }
          n(e, t),
          (e.prototype =
              t === null
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()))
        }
        var o = function () {
          return (
            (o =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++) {
                  for (const i in (t = arguments[r])) { Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]) }
                }
                return e
              }),
            o.apply(this, arguments)
          )
        }
        function s (e, t) {
          const r = {}
          for (var n in e) {
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.indexOf(n) < 0 &&
              (r[n] = e[n])
          }
          if (e != null && typeof Object.getOwnPropertySymbols === 'function') {
            let i = 0
            for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) {
              t.indexOf(n[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
                (r[n[i]] = e[n[i]])
            }
          }
          return r
        }
        function a (e, t, r, n) {
          let i
          const o = arguments.length
          let s =
              o < 3
                ? t
                : n === null
                  ? (n = Object.getOwnPropertyDescriptor(t, r))
                  : n
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          ) { s = Reflect.decorate(e, t, r, n) } else {
            for (let a = e.length - 1; a >= 0; a--) {
              (i = e[a]) &&
                (s = (o < 3 ? i(s) : o > 3 ? i(t, r, s) : i(t, r)) || s)
            }
          }
          return o > 3 && s && Object.defineProperty(t, r, s), s
        }
        function c (e, t) {
          return function (r, n) {
            t(r, n, e)
          }
        }
        function u (e, t) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          ) { return Reflect.metadata(e, t) }
        }
        function f (e, t, r, n) {
          return new (r || (r = Promise))(function (i, o) {
            function s (e) {
              try {
                c(n.next(e))
              } catch (t) {
                o(t)
              }
            }
            function a (e) {
              try {
                c(n.throw(e))
              } catch (t) {
                o(t)
              }
            }
            function c (e) {
              let t
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function (e) {
                      e(t)
                    })).then(s, a)
            }
            c((n = n.apply(e, t || [])).next())
          })
        }
        function l (e, t) {
          let r
          let n
          let i
          let o
          let s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1]
              return i[1]
            },
            trys: [],
            ops: []
          }
          return (
            (o = { next: a(0), throw: a(1), return: a(2) }),
            typeof Symbol === 'function' &&
              (o[Symbol.iterator] = function () {
                return this
              }),
            o
          )
          function a (o) {
            return function (a) {
              return (function (o) {
                if (r) throw new TypeError('Generator is already executing.')
                for (; s;) {
                  try {
                    if (
                      ((r = 1),
                      n &&
                        (i =
                          2 & o[0]
                            ? n.return
                            : o[0]
                              ? n.throw || ((i = n.return) && i.call(n), 0)
                              : n.next) &&
                        !(i = i.call(n, o[1])).done)
                    ) { return i }
                    switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o
                        break
                      case 4:
                        return s.label++, { value: o[1], done: !1 }
                      case 5:
                        s.label++, (n = o[1]), (o = [0])
                        continue
                      case 7:
                        ;(o = s.ops.pop()), s.trys.pop()
                        continue
                      default:
                        if (
                          !(i = (i = s.trys).length > 0 && i[i.length - 1]) &&
                          (o[0] === 6 || o[0] === 2)
                        ) {
                          s = 0
                          continue
                        }
                        if (
                          o[0] === 3 &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          s.label = o[1]
                          break
                        }
                        if (o[0] === 6 && s.label < i[1]) {
                          ;(s.label = i[1]), (i = o)
                          break
                        }
                        if (i && s.label < i[2]) {
                          ;(s.label = i[2]), s.ops.push(o)
                          break
                        }
                        i[2] && s.ops.pop(), s.trys.pop()
                        continue
                    }
                    o = t.call(e, s)
                  } catch (a) {
                    ;(o = [6, a]), (n = 0)
                  } finally {
                    r = i = 0
                  }
                }
                if (5 & o[0]) throw o[1]
                return { value: o[0] ? o[1] : void 0, done: !0 }
              })([o, a])
            }
          }
        }
        function p (e, t, r, n) {
          void 0 === n && (n = r), (e[n] = t[r])
        }
        function h (e, t) {
          for (const r in e) { r === 'default' || t.hasOwnProperty(r) || (t[r] = e[r]) }
        }
        function d (e) {
          const t = typeof Symbol === 'function' && Symbol.iterator
          const r = t && e[t]
          let n = 0
          if (r) return r.call(e)
          if (e && typeof e.length === 'number') {
            return {
              next: function () {
                return (
                  e && n >= e.length && (e = void 0),
                  { value: e && e[n++], done: !e }
                )
              }
            }
          }
          throw new TypeError(
            t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
          )
        }
        function v (e, t) {
          let r = typeof Symbol === 'function' && e[Symbol.iterator]
          if (!r) return e
          let n
          let i
          const o = r.call(e)
          const s = []
          try {
            for (; (void 0 === t || t-- > 0) && !(n = o.next()).done;) { s.push(n.value) }
          } catch (a) {
            i = { error: a }
          } finally {
            try {
              n && !n.done && (r = o.return) && r.call(o)
            } finally {
              if (i) throw i.error
            }
          }
          return s
        }
        function g () {
          for (var e = [], t = 0; t < arguments.length; t++) { e = e.concat(v(arguments[t])) }
          return e
        }
        function y () {
          for (var e = 0, t = 0, r = arguments.length; t < r; t++) { e += arguments[t].length }
          const n = Array(e)
          let i = 0
          for (t = 0; t < r; t++) {
            for (let o = arguments[t], s = 0, a = o.length; s < a; s++, i++) { n[i] = o[s] }
          }
          return n
        }
        function m (e) {
          return this instanceof m ? ((this.v = e), this) : new m(e)
        }
        function b (e, t, r) {
          if (!Symbol.asyncIterator) { throw new TypeError('Symbol.asyncIterator is not defined.') }
          let n
          const i = r.apply(e, t || [])
          const o = []
          return (
            (n = {}),
            s('next'),
            s('throw'),
            s('return'),
            (n[Symbol.asyncIterator] = function () {
              return this
            }),
            n
          )
          function s (e) {
            i[e] &&
              (n[e] = function (t) {
                return new Promise(function (r, n) {
                  o.push([e, t, r, n]) > 1 || a(e, t)
                })
              })
          }
          function a (e, t) {
            try {
              ;(r = i[e](t)).value instanceof m
                ? Promise.resolve(r.value.v).then(c, u)
                : f(o[0][2], r)
            } catch (n) {
              f(o[0][3], n)
            }
            let r
          }
          function c (e) {
            a('next', e)
          }
          function u (e) {
            a('throw', e)
          }
          function f (e, t) {
            e(t), o.shift(), o.length && a(o[0][0], o[0][1])
          }
        }
        function w (e) {
          let t, r
          return (
            (t = {}),
            n('next'),
            n('throw', function (e) {
              throw e
            }),
            n('return'),
            (t[Symbol.iterator] = function () {
              return this
            }),
            t
          )
          function n (n, i) {
            t[n] = e[n]
              ? function (t) {
                return (r = !r)
                  ? { value: m(e[n](t)), done: n === 'return' }
                  : i
                    ? i(t)
                    : t
              }
              : i
          }
        }
        function _ (e) {
          if (!Symbol.asyncIterator) { throw new TypeError('Symbol.asyncIterator is not defined.') }
          let t
          const r = e[Symbol.asyncIterator]
          return r
            ? r.call(e)
            : ((e = d(e)),
              (t = {}),
              n('next'),
              n('throw'),
              n('return'),
              (t[Symbol.asyncIterator] = function () {
                return this
              }),
              t)
          function n (r) {
            t[r] =
              e[r] &&
              function (t) {
                return new Promise(function (n, i) {
                  ;(function (e, t, r, n) {
                    Promise.resolve(n).then(function (t) {
                      e({ value: t, done: r })
                    }, t)
                  })(n, i, (t = e[r](t)).done, t.value)
                })
              }
          }
        }
        function x (e, t) {
          return (
            Object.defineProperty
              ? Object.defineProperty(e, 'raw', { value: t })
              : (e.raw = t),
            e
          )
        }
        function E (e) {
          if (e && e.__esModule) return e
          const t = {}
          if (e != null) { for (const r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]) }
          return (t.default = e), t
        }
        function k (e) {
          return e && e.__esModule ? e : { default: e }
        }
        function S (e, t) {
          if (!t.has(e)) {
            throw new TypeError(
              'attempted to get private field on non-instance'
            )
          }
          return t.get(e)
        }
        function Z (e, t, r) {
          if (!t.has(e)) {
            throw new TypeError(
              'attempted to set private field on non-instance'
            )
          }
          return t.set(e, r), r
        }
      },
      34134: function (e, t, r) {
        'use strict'
        r.r(t),
        r.d(t, {
          UniversalProvider: function () {
            return Os
          },
          default: function () {
            return Zs
          }
        })
        const n = r(29439)
        const i = r(37762)
        const o = r(74165)
        const s = r(15861)
        const a = r(15671)
        const c = r(43144)
        const u = r(94527)
        const f = r.n(u)
        const l = r(97326)
        const p = r(93433)
        const h = r(60136)
        const d = r(29388)
        const v = r(4942)
        const g = r(1413)
        const y = r(77708)
        const m = r.n(y)
        const b = r(62271)
        const w = r(46967)
        const _ = r(97087)
        const x = r(75221)
        const E = (function (e) {
          ;(0, h.Z)(r, e)
          const t = (0, d.Z)(r)
          function r (e) {
            let n
            return (
              (0, a.Z)(this, r),
              ((n = t.call(this)).opts = e),
              (n.protocol = 'wc'),
              (n.version = 2),
              n
            )
          }
          return (0, c.Z)(r)
        })(x.q)
        const k = (function (e) {
          ;(0, h.Z)(r, e)
          const t = (0, d.Z)(r)
          function r (e, n) {
            let i
            return (
              (0, a.Z)(this, r),
              ((i = t.call(this)).core = e),
              (i.logger = n),
              (i.records = new Map()),
              i
            )
          }
          return (0, c.Z)(r)
        })(x.q)
        const S = (0, c.Z)(function e (t, r) {
          ;(0, a.Z)(this, e), (this.logger = t), (this.core = r)
        })
        const Z = (function (e) {
          ;(0, h.Z)(r, e)
          const t = (0, d.Z)(r)
          function r (e, n) {
            let i
            return (
              (0, a.Z)(this, r),
              ((i = t.call(this)).relayer = e),
              (i.logger = n),
              i
            )
          }
          return (0, c.Z)(r)
        })(x.q)
        const O = (function (e) {
          ;(0, h.Z)(r, e)
          const t = (0, d.Z)(r)
          function r (e) {
            return (0, a.Z)(this, r), t.call(this)
          }
          return (0, c.Z)(r)
        })(x.q)
        const I = (0, c.Z)(function e (t, r, n, i) {
          ;(0, a.Z)(this, e),
          (this.core = t),
          (this.logger = r),
          (this.name = n)
        })
        const P = (function (e) {
          ;(0, h.Z)(r, e)
          const t = (0, d.Z)(r)
          function r (e, n) {
            let i
            return (
              (0, a.Z)(this, r),
              ((i = t.call(this)).relayer = e),
              (i.logger = n),
              i
            )
          }
          return (0, c.Z)(r)
        })(x.q)
        const N = (function (e) {
          ;(0, h.Z)(r, e)
          const t = (0, d.Z)(r)
          function r (e, n) {
            let i
            return (
              (0, a.Z)(this, r),
              ((i = t.call(this)).core = e),
              (i.logger = n),
              i
            )
          }
          return (0, c.Z)(r)
        })(x.q)
        const R =
            (m(),
            (0, c.Z)(function e (t) {
              ;(0, a.Z)(this, e),
              (this.opts = t),
              (this.protocol = 'wc'),
              (this.version = 2)
            }))
        const T =
            (y.EventEmitter,
            (0, c.Z)(function e (t) {
              ;(0, a.Z)(this, e), (this.client = t)
            }))
        function A (e) {
          if (typeof e !== 'string') {
            throw new Error(
              'Cannot safe json parse value of type '.concat(typeof e)
            )
          }
          try {
            return JSON.parse(e)
          } catch (t) {
            return e
          }
        }
        const U = r(66102)
        const j = r(88557)
        const L = r(19096)
        const M = 'EdDSA'
        const C = 'JWT'
        const D = '.'
        const z = 'base64url'
        const q = 'utf8'
        const H = 'utf8'
        const V = ':'
        const K = 'did'
        const F = 'key'
        const B = 'base58btc'
        const W = 'z'
        const G = 'K36'
        const Y = 32
        const J = r(10155)
        const X = r(68218)
        const $ = r(52039)
        function Q (e) {
          return (0, X.toString)(
            (0, $.fromString)(
              typeof (t = e) === 'string' ? t : JSON.stringify(t),
              q
            ),
            z
          )
          let t
        }
        function ee (e) {
          const t = (0, $.fromString)(G, B)
          const r = W + (0, X.toString)((0, J.concat)([t, e]), B)
          return [K, F, r].join(V)
        }
        function te (e) {
          return [
            Q(e.header),
            Q(e.payload),
            ((t = e.signature), (0, X.toString)(t, z))
          ].join(D)
          let t
        }
        function re () {
          const e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : (0, j.randomBytes)(Y)
          return U._w(e)
        }
        function ne (e, t, r, n) {
          return ie.apply(this, arguments)
        }
        function ie () {
          return (
            (ie = (0, s.Z)(
              (0, o.Z)().mark(function e (t, r, n, i) {
                let s
                let a
                let c
                let u
                let f
                let l
                const p = arguments
                return (0, o.Z)().wrap(function (e) {
                  for (;;) {
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (s =
                            p.length > 4 && void 0 !== p[4]
                              ? p[4]
                              : (0, L.fromMiliseconds)(Date.now())),
                          (a = { alg: M, typ: C }),
                          (c = ee(i.publicKey)),
                          (o = {
                            header: a,
                            payload: (u = {
                              iss: c,
                              sub: t,
                              aud: r,
                              iat: s,
                              exp: s + n
                            })
                          }),
                          (f = (0, $.fromString)(
                            [Q(o.header), Q(o.payload)].join(D),
                            H
                          )),
                          (l = U.Xx(i.secretKey, f)),
                          e.abrupt(
                            'return',
                            te({ header: a, payload: u, signature: l })
                          )
                        )
                      case 8:
                      case 'end':
                        return e.stop()
                    }
                  }
                  let o
                }, e)
              })
            )),
            ie.apply(this, arguments)
          )
        }
        r(58785)
        const oe = r(6374)
        const se = r(33035)
        const ae = r(1643)
        const ce = r(25995)
        function ue () {
          const e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
          return globalThis.Buffer != null &&
            globalThis.Buffer.allocUnsafe != null
            ? globalThis.Buffer.allocUnsafe(e)
            : new Uint8Array(e)
        }
        function fe (e, t) {
          t ||
            (t = e.reduce(function (e, t) {
              return e + t.length
            }, 0))
          let r
          const n = ue(t)
          let o = 0
          const s = (0, i.Z)(e)
          try {
            for (s.s(); !(r = s.n()).done;) {
              const a = r.value
              n.set(a, o), (o += a.length)
            }
          } catch (c) {
            s.e(c)
          } finally {
            s.f()
          }
          return n
        }
        const le = r(20042)
        function pe (e, t, r, n) {
          return {
            name: e,
            prefix: t,
            encoder: { name: e, prefix: t, encode: r },
            decoder: { decode: n }
          }
        }
        const he = pe(
          'utf8',
          'u',
          function (e) {
            return 'u' + new TextDecoder('utf8').decode(e)
          },
          function (e) {
            return new TextEncoder().encode(e.substring(1))
          }
        )
        const de = pe(
          'ascii',
          'a',
          function (e) {
            for (var t = 'a', r = 0; r < e.length; r++) { t += String.fromCharCode(e[r]) }
            return t
          },
          function (e) {
            for (
              var t = ue((e = e.substring(1)).length), r = 0;
              r < e.length;
              r++
            ) { t[r] = e.charCodeAt(r) }
            return t
          }
        )
        const ve = (0, g.Z)(
          {
            utf8: he,
            'utf-8': he,
            hex: le.bases.base16,
            latin1: de,
            ascii: de,
            binary: de
          },
          le.bases
        )
        function ge (e) {
          const t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 'utf8'
          const r = ve[t]
          if (!r) throw new Error('Unsupported encoding "'.concat(t, '"'))
          return (t !== 'utf8' && t !== 'utf-8') ||
            globalThis.Buffer == null ||
            globalThis.Buffer.from == null
            ? r.decoder.decode(''.concat(r.prefix).concat(e))
            : globalThis.Buffer.from(e, 'utf8')
        }
        function ye (e) {
          const t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 'utf8'
          const r = ve[t]
          if (!r) throw new Error('Unsupported encoding "'.concat(t, '"'))
          return (t !== 'utf8' && t !== 'utf-8') ||
            globalThis.Buffer == null ||
            globalThis.Buffer.from == null
            ? r.encoder.encode(e).substring(1)
            : globalThis.Buffer.from(
              e.buffer,
              e.byteOffset,
              e.byteLength
            ).toString('utf8')
        }
        const me = r(49524)
        const be = function (e, t, r) {
          if (r || arguments.length === 2) {
            for (var n, i = 0, o = t.length; i < o; i++) {
              (!n && i in t) ||
                  (n || (n = Array.prototype.slice.call(t, 0, i)),
                  (n[i] = t[i]))
            }
          }
          return e.concat(n || Array.prototype.slice.call(t))
        }
        const we = function (e, t, r) {
          ;(this.name = e),
          (this.version = t),
          (this.os = r),
          (this.type = 'browser')
        }
        const _e = function (e) {
          ;(this.version = e),
          (this.type = 'node'),
          (this.name = 'node'),
          (this.os = me.platform)
        }
        const xe = function (e, t, r, n) {
          ;(this.name = e),
          (this.version = t),
          (this.os = r),
          (this.bot = n),
          (this.type = 'bot-device')
        }
        const Ee = function () {
          ;(this.type = 'bot'),
          (this.bot = !0),
          (this.name = 'bot'),
          (this.version = null),
          (this.os = null)
        }
        const ke = function () {
          ;(this.type = 'react-native'),
          (this.name = 'react-native'),
          (this.version = null),
          (this.os = null)
        }
        const Se =
            /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/
        const Ze = 3
        const Oe = [
          ['aol', /AOLShield\/([0-9\._]+)/],
          ['edge', /Edge\/([0-9\._]+)/],
          ['edge-ios', /EdgiOS\/([0-9\._]+)/],
          ['yandexbrowser', /YaBrowser\/([0-9\._]+)/],
          ['kakaotalk', /KAKAOTALK\s([0-9\.]+)/],
          ['samsung', /SamsungBrowser\/([0-9\.]+)/],
          ['silk', /\bSilk\/([0-9._-]+)\b/],
          ['miui', /MiuiBrowser\/([0-9\.]+)$/],
          ['beaker', /BeakerBrowser\/([0-9\.]+)/],
          ['edge-chromium', /EdgA?\/([0-9\.]+)/],
          [
            'chromium-webview',
            /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
          ],
          ['chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
          ['phantomjs', /PhantomJS\/([0-9\.]+)(:?\s|$)/],
          ['crios', /CriOS\/([0-9\.]+)(:?\s|$)/],
          ['firefox', /Firefox\/([0-9\.]+)(?:\s|$)/],
          ['fxios', /FxiOS\/([0-9\.]+)/],
          ['opera-mini', /Opera Mini.*Version\/([0-9\.]+)/],
          ['opera', /Opera\/([0-9\.]+)(?:\s|$)/],
          ['opera', /OPR\/([0-9\.]+)(:?\s|$)/],
          ['pie', /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
          [
            'pie',
            /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/
          ],
          ['netfront', /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
          ['ie', /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
          ['ie', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
          ['ie', /MSIE\s(7\.0)/],
          ['bb10', /BB10;\sTouch.*Version\/([0-9\.]+)/],
          ['android', /Android\s([0-9\.]+)/],
          ['ios', /Version\/([0-9\._]+).*Mobile.*Safari.*/],
          ['safari', /Version\/([0-9\._]+).*Safari/],
          ['facebook', /FB[AS]V\/([0-9\.]+)/],
          ['instagram', /Instagram\s([0-9\.]+)/],
          ['ios-webview', /AppleWebKit\/([0-9\.]+).*Mobile/],
          ['ios-webview', /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
          ['curl', /^curl\/([0-9\.]+)$/],
          [
            'searchbot',
            /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/
          ]
        ]
        const Ie = [
          ['iOS', /iP(hone|od|ad)/],
          ['Android OS', /Android/],
          ['BlackBerry OS', /BlackBerry|BB10/],
          ['Windows Mobile', /IEMobile/],
          ['Amazon OS', /Kindle/],
          ['Windows 3.11', /Win16/],
          ['Windows 95', /(Windows 95)|(Win95)|(Windows_95)/],
          ['Windows 98', /(Windows 98)|(Win98)/],
          ['Windows 2000', /(Windows NT 5.0)|(Windows 2000)/],
          ['Windows XP', /(Windows NT 5.1)|(Windows XP)/],
          ['Windows Server 2003', /(Windows NT 5.2)/],
          ['Windows Vista', /(Windows NT 6.0)/],
          ['Windows 7', /(Windows NT 6.1)/],
          ['Windows 8', /(Windows NT 6.2)/],
          ['Windows 8.1', /(Windows NT 6.3)/],
          ['Windows 10', /(Windows NT 10.0)/],
          ['Windows ME', /Windows ME/],
          [
            'Windows CE',
            /Windows CE|WinCE|Microsoft Pocket Internet Explorer/
          ],
          ['Open BSD', /OpenBSD/],
          ['Sun OS', /SunOS/],
          ['Chrome OS', /CrOS/],
          ['Linux', /(Linux)|(X11)/],
          ['Mac OS', /(Mac_PowerPC)|(Macintosh)/],
          ['QNX', /QNX/],
          ['BeOS', /BeOS/],
          ['OS/2', /OS\/2/]
        ]
        function Pe (e) {
          return e
            ? Re(e)
            : typeof document === 'undefined' &&
                typeof navigator !== 'undefined' &&
                navigator.product === 'ReactNative'
              ? new ke()
              : typeof navigator !== 'undefined'
                ? Re(navigator.userAgent)
                : typeof me !== 'undefined' && me.version
                  ? new _e(me.version.slice(1))
                  : null
        }
        function Ne (e) {
          return (
            e !== '' &&
            Oe.reduce(function (t, r) {
              const n = r[0]
              const i = r[1]
              if (t) return t
              const o = i.exec(e)
              return !!o && [n, o]
            }, !1)
          )
        }
        function Re (e) {
          const t = Ne(e)
          if (!t) return null
          const r = t[0]
          const n = t[1]
          if (r === 'searchbot') return new Ee()
          let i = n[1] && n[1].split('.').join('_').split('_').slice(0, 3)
          i
            ? i.length < Ze &&
              (i = be(
                be([], i, !0),
                (function (e) {
                  for (var t = [], r = 0; r < e; r++) t.push('0')
                  return t
                })(Ze - i.length),
                !0
              ))
            : (i = [])
          const o = i.join('.')
          const s = (function (e) {
            for (let t = 0, r = Ie.length; t < r; t++) {
              const n = Ie[t]
              const i = n[0]
              if (n[1].exec(e)) return i
            }
            return null
          })(e)
          const a = Se.exec(e)
          return a && a[1] ? new xe(r, o, s, a[1]) : new we(r, o, s)
        }
        const Te = r(38183)
        const Ae = r(73328)
        const Ue = r(54464)
        const je =
            (r(97382),
            {
              waku: {
                publish: 'waku_publish',
                subscribe: 'waku_subscribe',
                subscription: 'waku_subscription',
                unsubscribe: 'waku_unsubscribe'
              },
              irn: {
                publish: 'irn_publish',
                subscribe: 'irn_subscribe',
                subscription: 'irn_subscription',
                unsubscribe: 'irn_unsubscribe'
              },
              iridium: {
                publish: 'iridium_publish',
                subscribe: 'iridium_subscribe',
                subscription: 'iridium_subscription',
                unsubscribe: 'iridium_unsubscribe'
              }
            })
        const Le = r(49524)
        const Me = 'base10'
        const Ce = 'base16'
        const De = 'base64pad'
        const ze = 'utf8'
        const qe = 0
        const He = 1
        const Ve = 0
        const Ke = 1
        const Fe = 12
        const Be = 32
        function We () {
          return ye((0, j.randomBytes)(Be), Ce)
        }
        function Ge (e) {
          return ye((0, ae.vp)(ge(e, Ce)), Ce)
        }
        function Ye (e) {
          return ye((0, ae.vp)(ge(e, ze)), Ce)
        }
        function Je (e) {
          return Number(ye(e, Me))
        }
        function Xe (e) {
          const t = (function (e) {
            return ge(''.concat(e), Me)
          })(typeof e.type < 'u' ? e.type : qe)
          if (Je(t) === He && typeof e.senderPublicKey > 'u') { throw new Error('Missing sender public key for type 1 envelope') }
          const r =
              typeof e.senderPublicKey < 'u'
                ? ge(e.senderPublicKey, Ce)
                : void 0
          const n = typeof e.iv < 'u' ? ge(e.iv, Ce) : (0, j.randomBytes)(Fe)
          return (function (e) {
            if (Je(e.type) === He) {
              if (typeof e.senderPublicKey > 'u') { throw new Error('Missing sender public key for type 1 envelope') }
              return ye(fe([e.type, e.senderPublicKey, e.iv, e.sealed]), De)
            }
            return ye(fe([e.type, e.iv, e.sealed]), De)
          })({
            type: t,
            sealed: new oe.OK(ge(e.symKey, Ce)).seal(n, ge(e.message, ze)),
            iv: n,
            senderPublicKey: r
          })
        }
        function $e (e) {
          const t = new oe.OK(ge(e.symKey, Ce))
          const r = Qe(e.encoded)
          const n = r.sealed
          const i = r.iv
          const o = t.open(i, n)
          if (o === null) throw new Error('Failed to decrypt')
          return ye(o, ze)
        }
        function Qe (e) {
          const t = ge(e, De)
          const r = t.slice(Ve, Ke)
          const n = Ke
          if (Je(r) === He) {
            const i = n + Be
            const o = i + Fe
            const s = t.slice(n, i)
            const a = t.slice(i, o)
            return { type: r, sealed: t.slice(o), iv: a, senderPublicKey: s }
          }
          const c = n + Fe
          const u = t.slice(n, c)
          return { type: r, sealed: t.slice(c), iv: u }
        }
        function et (e, t) {
          const r = Qe(e)
          return tt({
            type: Je(r.type),
            senderPublicKey:
              typeof r.senderPublicKey < 'u'
                ? ye(r.senderPublicKey, Ce)
                : void 0,
            receiverPublicKey:
              t === null || void 0 === t ? void 0 : t.receiverPublicKey
          })
        }
        function tt (e) {
          const t = (e === null || void 0 === e ? void 0 : e.type) || qe
          if (t === He) {
            if (
              typeof (e === null || void 0 === e ? void 0 : e.senderPublicKey) >
              'u'
            ) { throw new Error('missing sender public key') }
            if (
              typeof (e === null || void 0 === e
                ? void 0
                : e.receiverPublicKey) > 'u'
            ) { throw new Error('missing receiver public key') }
          }
          return {
            type: t,
            senderPublicKey:
              e === null || void 0 === e ? void 0 : e.senderPublicKey,
            receiverPublicKey:
              e === null || void 0 === e ? void 0 : e.receiverPublicKey
          }
        }
        function rt (e) {
          return (
            e.type === He &&
            typeof e.senderPublicKey === 'string' &&
            typeof e.receiverPublicKey === 'string'
          )
        }
        const nt = Object.defineProperty
        const it = Object.getOwnPropertySymbols
        const ot = Object.prototype.hasOwnProperty
        const st = Object.prototype.propertyIsEnumerable
        const at = function (e, t, r) {
          return t in e
            ? nt(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: r
            })
            : (e[t] = r)
        }
        const ct = function (e, t) {
          for (var r in t || (t = {})) ot.call(t, r) && at(e, r, t[r])
          if (it) {
            let n
            const o = (0, i.Z)(it(t))
            try {
              for (o.s(); !(n = o.n()).done;) {
                r = n.value
                st.call(t, r) && at(e, r, t[r])
              }
            } catch (s) {
              o.e(s)
            } finally {
              o.f()
            }
          }
          return e
        }
        const ut = 'ReactNative'
        const ft = {
          reactNative: 'react-native',
          node: 'node',
          browser: 'browser',
          unknown: 'unknown'
        }
        const lt = 'js'
        function pt () {
          return (
            typeof Le < 'u' &&
            typeof Le.versions < 'u' &&
            typeof Le.versions.node < 'u'
          )
        }
        function ht () {
          return !(0, Te.getDocument)() &&
            (0, Te.getNavigator)() &&
            navigator.product === ut
            ? ft.reactNative
            : pt()
              ? ft.node
              : !pt() && (0, Te.getNavigator)()
                  ? ft.browser
                  : ft.unknown
        }
        function dt (e, t, r) {
          const n = (function () {
            const e = Pe()
            if (e === null) return 'unknown'
            const t = e.os ? e.os.replace(' ', '').toLowerCase() : 'unknown'
            return e.type === 'browser'
              ? [t, e.name, e.version].join('-')
              : [t, e.version].join('-')
          })()
          const i = (function () {
            let e
            const t = ht()
            return t === ft.browser
              ? [
                  t,
                  ((e = (0, Te.getLocation)()) == null ? void 0 : e.host) ||
                      'unknown'
                ].join(':')
              : t
          })()
          return [[e, t].join('-'), [lt, r].join('-'), n, i].join('/')
        }
        function vt (e) {
          const t = e.protocol
          const r = e.version
          const n = e.relayUrl
          const i = e.sdkVersion
          const o = e.auth
          const s = e.projectId
          const a = n.split('?')
          const c = { auth: o, ua: dt(t, r, i), projectId: s }
          const u = (function (e, t) {
            let r = Ue.parse(e)
            return (r = ct(ct({}, r), t)), Ue.stringify(r)
          })(a[1] || '', c)
          return a[0] + '?' + u
        }
        function gt (e, t) {
          return (
            e.filter(function (e) {
              return t.includes(e)
            }).length === e.length
          )
        }
        function yt (e) {
          return Object.fromEntries(e.entries())
        }
        function mt (e) {
          return new Map(Object.entries(e))
        }
        function bt (e, t) {
          return (0, L.fromMiliseconds)(
            (t || Date.now()) + (0, L.toMiliseconds)(e)
          )
        }
        function wt (e) {
          return (0, L.fromMiliseconds)(Date.now()) >= (0, L.toMiliseconds)(e)
        }
        function _t (e) {
          let t
          let r
          let n
          const i = (0, L.toMiliseconds)(e || L.FIVE_MINUTES)
          return {
            resolve: function (e) {
              n && t && (clearTimeout(n), t(e))
            },
            reject: function (e) {
              n && r && (clearTimeout(n), r(e))
            },
            done: function () {
              return new Promise(function (e, o) {
                ;(n = setTimeout(o, i)), (t = e), (r = o)
              })
            }
          }
        }
        function xt (e, t) {
          return new Promise(
            (function () {
              const r = (0, s.Z)(
                (0, o.Z)().mark(function r (n, i) {
                  let s, a
                  return (0, o.Z)().wrap(function (r) {
                    for (;;) {
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (s = setTimeout(function () {
                              return i()
                            }, t)),
                            (r.next = 3),
                            e
                          )
                        case 3:
                          ;(a = r.sent), clearTimeout(s), n(a)
                        case 5:
                        case 'end':
                          return r.stop()
                      }
                    }
                  }, r)
                })
              )
              return function (e, t) {
                return r.apply(this, arguments)
              }
            })()
          )
        }
        function Et (e, t) {
          if (typeof t === 'string' && t.startsWith(''.concat(e, ':'))) return t
          if (e.toLowerCase() === 'topic') {
            if (typeof t !== 'string') {
              throw new Error(
                'Value must be "string" for expirer target type: topic'
              )
            }
            return 'topic:'.concat(t)
          }
          if (e.toLowerCase() === 'id') {
            if (typeof t !== 'number') {
              throw new Error(
                'Value must be "number" for expirer target type: id'
              )
            }
            return 'id:'.concat(t)
          }
          throw new Error('Unknown expirer target type: '.concat(e))
        }
        function kt (e) {
          const t = e.split(':')
          const r = (0, n.Z)(t, 2)
          const i = r[0]
          const o = r[1]
          const s = { id: void 0, topic: void 0 }
          if (i === 'topic' && typeof o === 'string') s.topic = o
          else {
            if (i !== 'id' || !Number.isInteger(Number(o))) {
              throw new Error(
                'Invalid target, expected id:number or topic:string, got '
                  .concat(i, ':')
                  .concat(o)
              )
            }
            s.id = Number(o)
          }
          return s
        }
        function St (e, t) {
          return ''.concat(e).concat(t ? ':'.concat(t) : '')
        }
        const Zt = 'irn'
        function Ot (e) {
          return (
            (e === null || void 0 === e ? void 0 : e.relay) || { protocol: Zt }
          )
        }
        function It (e) {
          const t = je[e]
          if (typeof t > 'u') { throw new Error('Relay Protocol not supported: '.concat(e)) }
          return t
        }
        const Pt = Object.defineProperty
        const Nt = Object.getOwnPropertySymbols
        const Rt = Object.prototype.hasOwnProperty
        const Tt = Object.prototype.propertyIsEnumerable
        const At = function (e, t, r) {
          return t in e
            ? Pt(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: r
            })
            : (e[t] = r)
        }
        const Ut = function (e, t) {
          for (var r in t || (t = {})) Rt.call(t, r) && At(e, r, t[r])
          if (Nt) {
            let n
            const o = (0, i.Z)(Nt(t))
            try {
              for (o.s(); !(n = o.n()).done;) {
                r = n.value
                Tt.call(t, r) && At(e, r, t[r])
              }
            } catch (s) {
              o.e(s)
            } finally {
              o.f()
            }
          }
          return e
        }
        function jt (e) {
          const t = {}
          const r =
              'relay' +
              (arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : '-')
          return (
            Object.keys(e).forEach(function (n) {
              if (n.startsWith(r)) {
                const i = n.replace(r, '')
                const o = e[n]
                t[i] = o
              }
            }),
            t
          )
        }
        function Lt (e) {
          const t = e.indexOf(':')
          const r = e.indexOf('?') !== -1 ? e.indexOf('?') : void 0
          const n = e.substring(0, t)
          const i = e.substring(t + 1, r).split('@')
          const o = typeof r < 'u' ? e.substring(r) : ''
          const s = Ue.parse(o)
          return {
            protocol: n,
            topic: i[0],
            version: parseInt(i[1], 10),
            symKey: s.symKey,
            relay: jt(s)
          }
        }
        function Mt (e) {
          return (
            ''
              .concat(e.protocol, ':')
              .concat(e.topic, '@')
              .concat(e.version, '?') +
            Ue.stringify(
              Ut(
                { symKey: e.symKey },
                (function (e) {
                  const t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : '-'
                  const r = {}
                  return (
                    Object.keys(e).forEach(function (n) {
                      const i = 'relay' + t + n
                      e[n] && (r[i] = e[n])
                    }),
                    r
                  )
                })(e.relay)
              )
            )
          )
        }
        function Ct (e) {
          const t = []
          return (
            e.forEach(function (e) {
              const r = e.split(':')
              const i = (0, n.Z)(r, 2)
              const o = i[0]
              const s = i[1]
              t.push(''.concat(o, ':').concat(s))
            }),
            t
          )
        }
        function Dt (e, t) {
          const r = nr(e, t)
          if (r) throw new Error(r.message)
          for (var i = {}, o = 0, s = Object.entries(e); o < s.length; o++) {
            const a = (0, n.Z)(s[o], 2)
            const c = a[0]
            const u = a[1]
            i[c] = {
              methods: u.methods,
              events: u.events,
              chains: u.accounts.map(function (e) {
                return ''.concat(e.split(':')[0], ':').concat(e.split(':')[1])
              })
            }
          }
          return i
        }
        const zt = {
          INVALID_METHOD: { message: 'Invalid method.', code: 1001 },
          INVALID_EVENT: { message: 'Invalid event.', code: 1002 },
          INVALID_UPDATE_REQUEST: {
            message: 'Invalid update request.',
            code: 1003
          },
          INVALID_EXTEND_REQUEST: {
            message: 'Invalid extend request.',
            code: 1004
          },
          INVALID_SESSION_SETTLE_REQUEST: {
            message: 'Invalid session settle request.',
            code: 1005
          },
          UNAUTHORIZED_METHOD: {
            message: 'Unauthorized method.',
            code: 3001
          },
          UNAUTHORIZED_EVENT: { message: 'Unauthorized event.', code: 3002 },
          UNAUTHORIZED_UPDATE_REQUEST: {
            message: 'Unauthorized update request.',
            code: 3003
          },
          UNAUTHORIZED_EXTEND_REQUEST: {
            message: 'Unauthorized extend request.',
            code: 3004
          },
          USER_REJECTED: { message: 'User rejected.', code: 5e3 },
          USER_REJECTED_CHAINS: {
            message: 'User rejected chains.',
            code: 5001
          },
          USER_REJECTED_METHODS: {
            message: 'User rejected methods.',
            code: 5002
          },
          USER_REJECTED_EVENTS: {
            message: 'User rejected events.',
            code: 5003
          },
          UNSUPPORTED_CHAINS: { message: 'Unsupported chains.', code: 5100 },
          UNSUPPORTED_METHODS: {
            message: 'Unsupported methods.',
            code: 5101
          },
          UNSUPPORTED_EVENTS: { message: 'Unsupported events.', code: 5102 },
          UNSUPPORTED_ACCOUNTS: {
            message: 'Unsupported accounts.',
            code: 5103
          },
          UNSUPPORTED_NAMESPACE_KEY: {
            message: 'Unsupported namespace key.',
            code: 5104
          },
          USER_DISCONNECTED: { message: 'User disconnected.', code: 6e3 },
          SESSION_SETTLEMENT_FAILED: {
            message: 'Session settlement failed.',
            code: 7e3
          },
          WC_METHOD_UNSUPPORTED: {
            message: 'Unsupported wc_ method.',
            code: 10001
          }
        }
        const qt = {
          NOT_INITIALIZED: { message: 'Not initialized.', code: 1 },
          NO_MATCHING_KEY: { message: 'No matching key.', code: 2 },
          RESTORE_WILL_OVERRIDE: {
            message: 'Restore will override.',
            code: 3
          },
          RESUBSCRIBED: { message: 'Resubscribed.', code: 4 },
          MISSING_OR_INVALID: { message: 'Missing or invalid.', code: 5 },
          EXPIRED: { message: 'Expired.', code: 6 },
          UNKNOWN_TYPE: { message: 'Unknown type.', code: 7 },
          MISMATCHED_TOPIC: { message: 'Mismatched topic.', code: 8 },
          NON_CONFORMING_NAMESPACES: {
            message: 'Non conforming namespaces.',
            code: 9
          }
        }
        function Ht (e, t) {
          const r = qt[e]
          const n = r.message
          const i = r.code
          return { message: t ? ''.concat(n, ' ').concat(t) : n, code: i }
        }
        function Vt (e, t) {
          const r = zt[e]
          const n = r.message
          const i = r.code
          return { message: t ? ''.concat(n, ' ').concat(t) : n, code: i }
        }
        function Kt (e, t) {
          return (
            !!Array.isArray(e) && (!(typeof t < 'u' && e.length) || e.every(t))
          )
        }
        function Ft (e) {
          return (
            Object.getPrototypeOf(e) === Object.prototype &&
            Object.keys(e).length
          )
        }
        function Bt (e) {
          return typeof e > 'u'
        }
        function Wt (e, t) {
          return (
            !(!t || !Bt(e)) ||
            (typeof e === 'string' && Boolean(e.trim().length))
          )
        }
        function Gt (e, t) {
          return !(!t || !Bt(e)) || (typeof e === 'number' && !isNaN(e))
        }
        function Yt (e) {
          return !(!Wt(e, !1) || !e.includes(':')) && e.split(':').length === 2
        }
        function Jt (e) {
          let t
          return (t = e === null || void 0 === e ? void 0 : e.proposer) == null
            ? void 0
            : t.publicKey
        }
        function Xt (e) {
          return e === null || void 0 === e ? void 0 : e.topic
        }
        function $t (e) {
          let t = !0
          return (
            Kt(e)
              ? e.length &&
                (t = e.every(function (e) {
                  return Wt(e, !1)
                }))
              : (t = !1),
            t
          )
        }
        function Qt (e, t) {
          let r = null
          return (
            Object.entries(e).forEach(function (e) {
              const i = (0, n.Z)(e, 2)
              const o = i[0]
              const s = i[1]
              if (!r) {
                const a = (function (e, t, r) {
                  let n = null
                  return (
                    Kt(t)
                      ? t.forEach(function (t) {
                        n ||
                            ((!Yt(t) || !t.includes(e)) &&
                              (n = Vt(
                                'UNSUPPORTED_CHAINS',
                                ''
                                  .concat(r, ', chain ')
                                  .concat(
                                    t,
                                    ' should be a string and conform to "namespace:chainId" format'
                                  )
                              )))
                      })
                      : (n = Vt(
                          'UNSUPPORTED_CHAINS',
                          ''
                            .concat(r, ', chains ')
                            .concat(
                              t,
                              ' should be an array of strings conforming to "namespace:chainId" format'
                            )
                        )),
                    n
                  )
                })(
                  o,
                  s === null || void 0 === s ? void 0 : s.chains,
                  ''.concat(t, ' requiredNamespace')
                )
                a && (r = a)
              }
            }),
            r
          )
        }
        function er (e, t) {
          let r = null
          return (
            Kt(e)
              ? e.forEach(function (e) {
                r ||
                    (function (e) {
                      if (Wt(e, !1) && e.includes(':')) {
                        const t = e.split(':')
                        if (t.length === 3) {
                          const r = t[0] + ':' + t[1]
                          return !!t[2] && Yt(r)
                        }
                      }
                      return !1
                    })(e) ||
                    (r = Vt(
                      'UNSUPPORTED_ACCOUNTS',
                      ''
                        .concat(t, ', account ')
                        .concat(
                          e,
                          ' should be a string and conform to "namespace:chainId:address" format'
                        )
                    ))
              })
              : (r = Vt(
                  'UNSUPPORTED_ACCOUNTS',
                  ''.concat(
                    t,
                    ', accounts should be an array of strings conforming to "namespace:chainId:address" format'
                  )
                )),
            r
          )
        }
        function tr (e, t) {
          let r = null
          return (
            Object.values(e).forEach(function (e) {
              if (!r) {
                const n = (function (e, t) {
                  let r = null
                  return (
                    $t(e === null || void 0 === e ? void 0 : e.methods)
                      ? $t(e === null || void 0 === e ? void 0 : e.events) ||
                        (r = Vt(
                          'UNSUPPORTED_EVENTS',
                          ''.concat(
                            t,
                            ', events should be an array of strings or empty array for no events'
                          )
                        ))
                      : (r = Vt(
                          'UNSUPPORTED_METHODS',
                          ''.concat(
                            t,
                            ', methods should be an array of strings or empty array for no methods'
                          )
                        )),
                    r
                  )
                })(e, ''.concat(t, ', namespace'))
                n && (r = n)
              }
            }),
            r
          )
        }
        function rr (e, t) {
          let r = null
          if (e && Ft(e)) {
            const n = tr(e, t)
            n && (r = n)
            const i = Qt(e, t)
            i && (r = i)
          } else {
            r = Ht(
              'MISSING_OR_INVALID',
              ''.concat(
                t,
                ', requiredNamespaces should be an object with data'
              )
            )
          }
          return r
        }
        function nr (e, t) {
          let r = null
          if (e && Ft(e)) {
            const n = tr(e, t)
            n && (r = n)
            const i = (function (e, t) {
              let r = null
              return (
                Object.values(e).forEach(function (e) {
                  if (!r) {
                    const n = er(
                      e === null || void 0 === e ? void 0 : e.accounts,
                      ''.concat(t, ' namespace')
                    )
                    n && (r = n)
                  }
                }),
                r
              )
            })(e, t)
            i && (r = i)
          } else {
            r = Ht(
              'MISSING_OR_INVALID',
              ''.concat(t, ', namespaces should be an object with data')
            )
          }
          return r
        }
        function ir (e) {
          return Wt(e.protocol, !0)
        }
        function or (e, t) {
          let r = !1
          return (
            t && !e
              ? (r = !0)
              : e &&
                Kt(e) &&
                e.length &&
                e.forEach(function (e) {
                  r = ir(e)
                }),
            r
          )
        }
        function sr (e) {
          return typeof e === 'number'
        }
        function ar (e) {
          return typeof e < 'u' && typeof e !== null
        }
        function cr (e) {
          return !(
            !e ||
            typeof e !== 'object' ||
            !e.code ||
            !Gt(e.code, !1) ||
            !e.message ||
            !Wt(e.message, !1)
          )
        }
        function ur (e) {
          return !(Bt(e) || !Wt(e.method, !1))
        }
        function fr (e) {
          return !(
            Bt(e) ||
            (Bt(e.result) && Bt(e.error)) ||
            !Gt(e.id, !1) ||
            !Wt(e.jsonrpc, !1)
          )
        }
        function lr (e) {
          return !(Bt(e) || !Wt(e.name, !1))
        }
        function pr (e, t) {
          return !(
            !Yt(t) ||
            !(function (e) {
              const t = []
              return (
                Object.values(e).forEach(function (e) {
                  t.push.apply(t, (0, p.Z)(Ct(e.accounts)))
                }),
                t
              )
            })(e).includes(t)
          )
        }
        function hr (e, t, r) {
          return (
            !!Wt(r, !1) &&
            (function (e, t) {
              const r = []
              return (
                Object.values(e).forEach(function (e) {
                  Ct(e.accounts).includes(t) &&
                    r.push.apply(r, (0, p.Z)(e.methods))
                }),
                r
              )
            })(e, t).includes(r)
          )
        }
        function dr (e, t, r) {
          return (
            !!Wt(r, !1) &&
            (function (e, t) {
              const r = []
              return (
                Object.values(e).forEach(function (e) {
                  Ct(e.accounts).includes(t) &&
                    r.push.apply(r, (0, p.Z)(e.events))
                }),
                r
              )
            })(e, t).includes(r)
          )
        }
        function vr (e, t, r) {
          let n = null
          const i = Object.keys(e)
          return (
            gt(i, Object.keys(t))
              ? i.forEach(function (i) {
                n ||
                    (gt(e[i].chains, Ct(t[i].accounts))
                      ? gt(e[i].methods, t[i].methods)
                        ? gt(e[i].events, t[i].events) ||
                          (n = Ht(
                            'NON_CONFORMING_NAMESPACES',
                            ''
                              .concat(
                                r,
                                " namespaces events don't satisfy requiredNamespaces events for "
                              )
                              .concat(i)
                          ))
                        : (n = Ht(
                            'NON_CONFORMING_NAMESPACES',
                            ''
                              .concat(
                                r,
                                " namespaces methods don't satisfy requiredNamespaces methods for "
                              )
                              .concat(i)
                          ))
                      : (n = Ht(
                          'NON_CONFORMING_NAMESPACES',
                          ''
                            .concat(
                              r,
                              " namespaces accounts don't satisfy requiredNamespaces chains for "
                            )
                            .concat(i)
                        )))
              })
              : (n = Ht(
                  'NON_CONFORMING_NAMESPACES',
                  ''.concat(
                    r,
                    " namespaces keys don't satisfy requiredNamespaces"
                  )
                )),
            n
          )
        }
        function gr (e, t) {
          return Gt(e, !1) && e <= t.max && e >= t.min
        }
        const yr = r(96153)
        const mr = r(21420)
        const br = function () {
          return typeof window !== 'undefined'
        }
        const wr =
            typeof r.g !== 'undefined' && typeof r.g.WebSocket !== 'undefined'
              ? r.g.WebSocket
              : typeof window !== 'undefined' &&
                  typeof window.WebSocket !== 'undefined'
                ? window.WebSocket
                : r(6304)
        const _r = (function () {
          function e (t) {
            if (
              ((0, a.Z)(this, e),
              (this.url = t),
              (this.events = new y.EventEmitter()),
              (this.registering = !1),
              !(0, mr.isWsUrl)(t))
            ) {
              throw new Error(
                'Provided URL is not compatible with WebSocket connection: '.concat(
                  t
                )
              )
            }
            this.url = t
          }
          return (
            (0, c.Z)(e, [
              {
                key: 'connected',
                get: function () {
                  return typeof this.socket !== 'undefined'
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
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e () {
                      let t
                      const r = arguments
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t =
                                      r.length > 0 && void 0 !== r[0]
                                        ? r[0]
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
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e () {
                      const t = this
                      return (0, o.Z)().wrap(function (e) {
                        for (;;) {
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt(
                                'return',
                                new Promise(function (e, r) {
                                  typeof t.socket !== 'undefined'
                                    ? ((t.socket.onclose = function () {
                                        t.onClose(), e()
                                      }),
                                      t.socket.close())
                                    : r(
                                      new Error(
                                        'Connection already closed'
                                      )
                                    )
                                })
                              )
                            case 1:
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
              },
              {
                key: 'send',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e (t, r) {
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (typeof this.socket !== 'undefined') {
                                  e.next = 4
                                  break
                                }
                                return (e.next = 3), this.register()
                              case 3:
                                this.socket = e.sent
                              case 4:
                                try {
                                  this.socket.send(
                                    typeof (r = t) === 'string'
                                      ? r
                                      : JSON.stringify(r)
                                  )
                                } catch (n) {
                                  this.onError(t.id, n)
                                }
                              case 5:
                              case 'end':
                                return e.stop()
                            }
                          }
                          let r
                        },
                        e,
                        this
                      )
                    })
                  )
                  return function (t, r) {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'register',
                value: function () {
                  const e = this
                  const t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : this.url
                  if (!(0, mr.isWsUrl)(t)) {
                    throw new Error(
                      'Provided URL is not compatible with WebSocket connection: '.concat(
                        t
                      )
                    )
                  }
                  if (this.registering) {
                    const r = this.events.getMaxListeners()
                    return (
                      (this.events.listenerCount('register_error') >= r ||
                          this.events.listenerCount('open') >= r) &&
                          this.events.setMaxListeners(r + 1),
                      new Promise(function (t, r) {
                        e.events.once('register_error', function (t) {
                          e.resetMaxListeners(), r(t)
                        }),
                        e.events.once('open', function () {
                          if (
                            (e.resetMaxListeners(),
                            typeof e.socket === 'undefined')
                          ) {
                            return r(
                              new Error(
                                'WebSocket connection is missing or invalid'
                              )
                            )
                          }
                          t(e.socket)
                        })
                      })
                    )
                  }
                  return (
                    (this.url = t),
                    (this.registering = !0),
                    new Promise(function (r, n) {
                      const i = (0, mr.isReactNative)()
                        ? void 0
                        : {
                            rejectUnauthorized: !(0, mr.isLocalhostUrl)(t)
                          }
                      const o = new wr(t, [], i)
                      br()
                        ? (o.onerror = function (t) {
                            const r = t
                            n(e.emitError(r.error))
                          })
                        : o.on('error', function (t) {
                          n(e.emitError(t))
                        }),
                      (o.onopen = function () {
                        e.onOpen(o), r(o)
                      })
                    })
                  )
                }
              },
              {
                key: 'onOpen',
                value: function (e) {
                  const t = this
                    ;(e.onmessage = function (e) {
                    return t.onPayload(e)
                  }),
                  (e.onclose = function () {
                    return t.onClose()
                  }),
                  (this.socket = e),
                  (this.registering = !1),
                  this.events.emit('open')
                }
              },
              {
                key: 'onClose',
                value: function () {
                  ;(this.socket = void 0),
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
                  const r = this.parseError(t)
                  const n = r.message || r.toString()
                  const i = (0, mr.formatJsonRpcError)(e, n)
                  this.events.emit('payload', i)
                }
              },
              {
                key: 'parseError',
                value: function (e) {
                  const t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : this.url
                  return (0, mr.parseConnectionError)(e, t, 'WS')
                }
              },
              {
                key: 'resetMaxListeners',
                value: function () {
                  this.events.getMaxListeners() > 10 &&
                      this.events.setMaxListeners(10)
                }
              },
              {
                key: 'emitError',
                value: function (e) {
                  const t = this.parseError(
                    new Error(
                      (e === null || void 0 === e ? void 0 : e.message) ||
                          'WebSocket connection failed for URL: '.concat(
                            this.url
                          )
                    )
                  )
                  return this.events.emit('register_error', t), t
                }
              }
            ]),
            e
          )
        })()
        const xr = _r
        const Er = r(85601)
        const kr = r.n(Er)
        const Sr = function (e, t) {
          if (e.length >= 255) throw new TypeError('Alphabet too long')
          for (var r = new Uint8Array(256), n = 0; n < r.length; n++) { r[n] = 255 }
          for (let i = 0; i < e.length; i++) {
            const o = e.charAt(i)
            const s = o.charCodeAt(0)
            if (r[s] !== 255) throw new TypeError(o + ' is ambiguous')
            r[s] = i
          }
          const a = e.length
          const c = e.charAt(0)
          const u = Math.log(a) / Math.log(256)
          const f = Math.log(256) / Math.log(a)
          function l (e) {
            if (typeof e !== 'string') throw new TypeError('Expected String')
            if (e.length === 0) return new Uint8Array()
            let t = 0
            if (e[t] !== ' ') {
              for (var n = 0, i = 0; e[t] === c;) n++, t++
              for (
                var o = ((e.length - t) * u + 1) >>> 0, s = new Uint8Array(o);
                e[t];

              ) {
                let f = r[e.charCodeAt(t)]
                if (f === 255) return
                for (
                  var l = 0, p = o - 1;
                  (f !== 0 || l < i) && p !== -1;
                  p--, l++
                ) {
                  (f += (a * s[p]) >>> 0),
                  (s[p] = f % 256 >>> 0),
                  (f = (f / 256) >>> 0)
                }
                if (f !== 0) throw new Error('Non-zero carry')
                ;(i = l), t++
              }
              if (e[t] !== ' ') {
                for (var h = o - i; h !== o && s[h] === 0;) h++
                for (var d = new Uint8Array(n + (o - h)), v = n; h !== o;) { d[v++] = s[h++] }
                return d
              }
            }
          }
          return {
            encode: function (t) {
              if (
                (t instanceof Uint8Array ||
                    (ArrayBuffer.isView(t)
                      ? (t = new Uint8Array(
                          t.buffer,
                          t.byteOffset,
                          t.byteLength
                        ))
                      : Array.isArray(t) && (t = Uint8Array.from(t))),
                !(t instanceof Uint8Array))
              ) { throw new TypeError('Expected Uint8Array') }
              if (t.length === 0) return ''
              for (
                var r = 0, n = 0, i = 0, o = t.length;
                i !== o && t[i] === 0;

              ) { i++, r++ }
              for (
                var s = ((o - i) * f + 1) >>> 0, u = new Uint8Array(s);
                i !== o;

              ) {
                for (
                  var l = t[i], p = 0, h = s - 1;
                  (l !== 0 || p < n) && h !== -1;
                  h--, p++
                ) {
                  (l += (256 * u[h]) >>> 0),
                  (u[h] = l % a >>> 0),
                  (l = (l / a) >>> 0)
                }
                if (l !== 0) throw new Error('Non-zero carry')
                ;(n = p), i++
              }
              for (var d = s - n; d !== s && u[d] === 0;) d++
              for (var v = c.repeat(r); d < s; ++d) v += e.charAt(u[d])
              return v
            },
            decodeUnsafe: l,
            decode: function (e) {
              const r = l(e)
              if (r) return r
              throw new Error('Non-'.concat(t, ' character'))
            }
          }
        }
        const Zr = Sr
        const Or = function (e) {
          if (e instanceof Uint8Array && e.constructor.name === 'Uint8Array') { return e }
          if (e instanceof ArrayBuffer) return new Uint8Array(e)
          if (ArrayBuffer.isView(e)) { return new Uint8Array(e.buffer, e.byteOffset, e.byteLength) }
          throw new Error('Unknown type, must be binary type')
        }
        const Ir = (function () {
          function e (t, r, n) {
            ;(0, a.Z)(this, e),
            (this.name = t),
            (this.prefix = r),
            (this.baseEncode = n)
          }
          return (
            (0, c.Z)(e, [
              {
                key: 'encode',
                value: function (e) {
                  if (e instanceof Uint8Array) { return ''.concat(this.prefix).concat(this.baseEncode(e)) }
                  throw Error('Unknown type, must be binary type')
                }
              }
            ]),
            e
          )
        })()
        const Pr = (function () {
          function e (t, r, n) {
            if (
              ((0, a.Z)(this, e),
              (this.name = t),
              (this.prefix = r),
              void 0 === r.codePointAt(0))
            ) {
              throw new Error('Invalid prefix character')
            }(this.prefixCodePoint = r.codePointAt(0)), (this.baseDecode = n)
          }
          return (
            (0, c.Z)(e, [
              {
                key: 'decode',
                value: function (e) {
                  if (typeof e === 'string') {
                    if (e.codePointAt(0) !== this.prefixCodePoint) {
                      throw Error(
                        'Unable to decode multibase string '
                          .concat(JSON.stringify(e), ', ')
                          .concat(
                            this.name,
                            ' decoder only supports inputs prefixed with '
                          )
                          .concat(this.prefix)
                      )
                    }
                    return this.baseDecode(e.slice(this.prefix.length))
                  }
                  throw Error('Can only multibase decode strings')
                }
              },
              {
                key: 'or',
                value: function (e) {
                  return Rr(this, e)
                }
              }
            ]),
            e
          )
        })()
        const Nr = (function () {
          function e (t) {
            ;(0, a.Z)(this, e), (this.decoders = t)
          }
          return (
            (0, c.Z)(e, [
              {
                key: 'or',
                value: function (e) {
                  return Rr(this, e)
                }
              },
              {
                key: 'decode',
                value: function (e) {
                  const t = e[0]
                  const r = this.decoders[t]
                  if (r) return r.decode(e)
                  throw RangeError(
                    'Unable to decode multibase string '
                      .concat(
                        JSON.stringify(e),
                        ', only inputs prefixed with '
                      )
                      .concat(Object.keys(this.decoders), ' are supported')
                  )
                }
              }
            ]),
            e
          )
        })()
        var Rr = function (e, t) {
          return new Nr(
            (0, g.Z)(
              (0, g.Z)({}, e.decoders || (0, v.Z)({}, e.prefix, e)),
              t.decoders || (0, v.Z)({}, t.prefix, t)
            )
          )
        }
        const Tr = (function () {
          function e (t, r, n, i) {
            ;(0, a.Z)(this, e),
            (this.name = t),
            (this.prefix = r),
            (this.baseEncode = n),
            (this.baseDecode = i),
            (this.encoder = new Ir(t, r, n)),
            (this.decoder = new Pr(t, r, i))
          }
          return (
            (0, c.Z)(e, [
              {
                key: 'encode',
                value: function (e) {
                  return this.encoder.encode(e)
                }
              },
              {
                key: 'decode',
                value: function (e) {
                  return this.decoder.decode(e)
                }
              }
            ]),
            e
          )
        })()
        const Ar = function (e) {
          const t = e.name
          const r = e.prefix
          const n = e.encode
          const i = e.decode
          return new Tr(t, r, n, i)
        }
        const Ur = function (e) {
          const t = e.prefix
          const r = e.name
          const n = e.alphabet
          const i = Zr(n, r)
          const o = i.encode
          const s = i.decode
          return Ar({
            prefix: t,
            name: r,
            encode: o,
            decode: function (e) {
              return Or(s(e))
            }
          })
        }
        const jr = function (e) {
          const t = e.name
          const r = e.prefix
          const n = e.bitsPerChar
          const i = e.alphabet
          return Ar({
            prefix: r,
            name: t,
            encode: function (e) {
              return (function (e, t, r) {
                for (
                  var n = t[t.length - 1] === '=',
                    i = (1 << r) - 1,
                    o = '',
                    s = 0,
                    a = 0,
                    c = 0;
                  c < e.length;
                  ++c
                ) {
                  for (a = (a << 8) | e[c], s += 8; s > r;) { o += t[i & (a >> (s -= r))] }
                }
                if ((s && (o += t[i & (a << (r - s))]), n)) { for (; (o.length * r) & 7;) o += '=' }
                return o
              })(e, i, n)
            },
            decode: function (e) {
              return (function (e, t, r, n) {
                for (var i = {}, o = 0; o < t.length; ++o) i[t[o]] = o
                for (var s = e.length; e[s - 1] === '=';) --s
                for (
                  var a = new Uint8Array(((s * r) / 8) | 0),
                    c = 0,
                    u = 0,
                    f = 0,
                    l = 0;
                  l < s;
                  ++l
                ) {
                  const p = i[e[l]]
                  if (void 0 === p) {
                    throw new SyntaxError('Non-'.concat(n, ' character'))
                  }(u = (u << r) | p),
                  (c += r) >= 8 && ((c -= 8), (a[f++] = 255 & (u >> c)))
                }
                if (c >= r || 255 & (u << (8 - c))) { throw new SyntaxError('Unexpected end of data') }
                return a
              })(e, i, n, t)
            }
          })
        }
        const Lr = Ar({
          prefix: '\0',
          name: 'identity',
          encode: function (e) {
            return (function (e) {
              return new TextDecoder().decode(e)
            })(e)
          },
          decode: function (e) {
            return (function (e) {
              return new TextEncoder().encode(e)
            })(e)
          }
        })
        const Mr = Object.freeze({ __proto__: null, identity: Lr })
        const Cr = jr({
          prefix: '0',
          name: 'base2',
          alphabet: '01',
          bitsPerChar: 1
        })
        const Dr = Object.freeze({ __proto__: null, base2: Cr })
        const zr = jr({
          prefix: '7',
          name: 'base8',
          alphabet: '01234567',
          bitsPerChar: 3
        })
        const qr = Object.freeze({ __proto__: null, base8: zr })
        const Hr = Ur({ prefix: '9', name: 'base10', alphabet: '0123456789' })
        const Vr = Object.freeze({ __proto__: null, base10: Hr })
        const Kr = jr({
          prefix: 'f',
          name: 'base16',
          alphabet: '0123456789abcdef',
          bitsPerChar: 4
        })
        const Fr = jr({
          prefix: 'F',
          name: 'base16upper',
          alphabet: '0123456789ABCDEF',
          bitsPerChar: 4
        })
        const Br = Object.freeze({ __proto__: null, base16: Kr, base16upper: Fr })
        const Wr = jr({
          prefix: 'b',
          name: 'base32',
          alphabet: 'abcdefghijklmnopqrstuvwxyz234567',
          bitsPerChar: 5
        })
        const Gr = jr({
          prefix: 'B',
          name: 'base32upper',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
          bitsPerChar: 5
        })
        const Yr = jr({
          prefix: 'c',
          name: 'base32pad',
          alphabet: 'abcdefghijklmnopqrstuvwxyz234567=',
          bitsPerChar: 5
        })
        const Jr = jr({
          prefix: 'C',
          name: 'base32padupper',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=',
          bitsPerChar: 5
        })
        const Xr = jr({
          prefix: 'v',
          name: 'base32hex',
          alphabet: '0123456789abcdefghijklmnopqrstuv',
          bitsPerChar: 5
        })
        const $r = jr({
          prefix: 'V',
          name: 'base32hexupper',
          alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV',
          bitsPerChar: 5
        })
        const Qr = jr({
          prefix: 't',
          name: 'base32hexpad',
          alphabet: '0123456789abcdefghijklmnopqrstuv=',
          bitsPerChar: 5
        })
        const en = jr({
          prefix: 'T',
          name: 'base32hexpadupper',
          alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV=',
          bitsPerChar: 5
        })
        const tn = jr({
          prefix: 'h',
          name: 'base32z',
          alphabet: 'ybndrfg8ejkmcpqxot1uwisza345h769',
          bitsPerChar: 5
        })
        const rn = Object.freeze({
          __proto__: null,
          base32: Wr,
          base32upper: Gr,
          base32pad: Yr,
          base32padupper: Jr,
          base32hex: Xr,
          base32hexupper: $r,
          base32hexpad: Qr,
          base32hexpadupper: en,
          base32z: tn
        })
        const nn = Ur({
          prefix: 'k',
          name: 'base36',
          alphabet: '0123456789abcdefghijklmnopqrstuvwxyz'
        })
        const on = Ur({
          prefix: 'K',
          name: 'base36upper',
          alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        })
        const sn = Object.freeze({ __proto__: null, base36: nn, base36upper: on })
        const an = Ur({
          name: 'base58btc',
          prefix: 'z',
          alphabet:
              '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
        })
        const cn = Ur({
          name: 'base58flickr',
          prefix: 'Z',
          alphabet:
              '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'
        })
        const un = Object.freeze({
          __proto__: null,
          base58btc: an,
          base58flickr: cn
        })
        const fn = jr({
          prefix: 'm',
          name: 'base64',
          alphabet:
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          bitsPerChar: 6
        })
        const ln = jr({
          prefix: 'M',
          name: 'base64pad',
          alphabet:
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
          bitsPerChar: 6
        })
        const pn = jr({
          prefix: 'u',
          name: 'base64url',
          alphabet:
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
          bitsPerChar: 6
        })
        const hn = jr({
          prefix: 'U',
          name: 'base64urlpad',
          alphabet:
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=',
          bitsPerChar: 6
        })
        const dn = Object.freeze({
          __proto__: null,
          base64: fn,
          base64pad: ln,
          base64url: pn,
          base64urlpad: hn
        })
        const vn = Array.from(
          '\ud83d\ude80\ud83e\ude90\u2604\ud83d\udef0\ud83c\udf0c\ud83c\udf11\ud83c\udf12\ud83c\udf13\ud83c\udf14\ud83c\udf15\ud83c\udf16\ud83c\udf17\ud83c\udf18\ud83c\udf0d\ud83c\udf0f\ud83c\udf0e\ud83d\udc09\u2600\ud83d\udcbb\ud83d\udda5\ud83d\udcbe\ud83d\udcbf\ud83d\ude02\u2764\ud83d\ude0d\ud83e\udd23\ud83d\ude0a\ud83d\ude4f\ud83d\udc95\ud83d\ude2d\ud83d\ude18\ud83d\udc4d\ud83d\ude05\ud83d\udc4f\ud83d\ude01\ud83d\udd25\ud83e\udd70\ud83d\udc94\ud83d\udc96\ud83d\udc99\ud83d\ude22\ud83e\udd14\ud83d\ude06\ud83d\ude44\ud83d\udcaa\ud83d\ude09\u263a\ud83d\udc4c\ud83e\udd17\ud83d\udc9c\ud83d\ude14\ud83d\ude0e\ud83d\ude07\ud83c\udf39\ud83e\udd26\ud83c\udf89\ud83d\udc9e\u270c\u2728\ud83e\udd37\ud83d\ude31\ud83d\ude0c\ud83c\udf38\ud83d\ude4c\ud83d\ude0b\ud83d\udc97\ud83d\udc9a\ud83d\ude0f\ud83d\udc9b\ud83d\ude42\ud83d\udc93\ud83e\udd29\ud83d\ude04\ud83d\ude00\ud83d\udda4\ud83d\ude03\ud83d\udcaf\ud83d\ude48\ud83d\udc47\ud83c\udfb6\ud83d\ude12\ud83e\udd2d\u2763\ud83d\ude1c\ud83d\udc8b\ud83d\udc40\ud83d\ude2a\ud83d\ude11\ud83d\udca5\ud83d\ude4b\ud83d\ude1e\ud83d\ude29\ud83d\ude21\ud83e\udd2a\ud83d\udc4a\ud83e\udd73\ud83d\ude25\ud83e\udd24\ud83d\udc49\ud83d\udc83\ud83d\ude33\u270b\ud83d\ude1a\ud83d\ude1d\ud83d\ude34\ud83c\udf1f\ud83d\ude2c\ud83d\ude43\ud83c\udf40\ud83c\udf37\ud83d\ude3b\ud83d\ude13\u2b50\u2705\ud83e\udd7a\ud83c\udf08\ud83d\ude08\ud83e\udd18\ud83d\udca6\u2714\ud83d\ude23\ud83c\udfc3\ud83d\udc90\u2639\ud83c\udf8a\ud83d\udc98\ud83d\ude20\u261d\ud83d\ude15\ud83c\udf3a\ud83c\udf82\ud83c\udf3b\ud83d\ude10\ud83d\udd95\ud83d\udc9d\ud83d\ude4a\ud83d\ude39\ud83d\udde3\ud83d\udcab\ud83d\udc80\ud83d\udc51\ud83c\udfb5\ud83e\udd1e\ud83d\ude1b\ud83d\udd34\ud83d\ude24\ud83c\udf3c\ud83d\ude2b\u26bd\ud83e\udd19\u2615\ud83c\udfc6\ud83e\udd2b\ud83d\udc48\ud83d\ude2e\ud83d\ude46\ud83c\udf7b\ud83c\udf43\ud83d\udc36\ud83d\udc81\ud83d\ude32\ud83c\udf3f\ud83e\udde1\ud83c\udf81\u26a1\ud83c\udf1e\ud83c\udf88\u274c\u270a\ud83d\udc4b\ud83d\ude30\ud83e\udd28\ud83d\ude36\ud83e\udd1d\ud83d\udeb6\ud83d\udcb0\ud83c\udf53\ud83d\udca2\ud83e\udd1f\ud83d\ude41\ud83d\udea8\ud83d\udca8\ud83e\udd2c\u2708\ud83c\udf80\ud83c\udf7a\ud83e\udd13\ud83d\ude19\ud83d\udc9f\ud83c\udf31\ud83d\ude16\ud83d\udc76\ud83e\udd74\u25b6\u27a1\u2753\ud83d\udc8e\ud83d\udcb8\u2b07\ud83d\ude28\ud83c\udf1a\ud83e\udd8b\ud83d\ude37\ud83d\udd7a\u26a0\ud83d\ude45\ud83d\ude1f\ud83d\ude35\ud83d\udc4e\ud83e\udd32\ud83e\udd20\ud83e\udd27\ud83d\udccc\ud83d\udd35\ud83d\udc85\ud83e\uddd0\ud83d\udc3e\ud83c\udf52\ud83d\ude17\ud83e\udd11\ud83c\udf0a\ud83e\udd2f\ud83d\udc37\u260e\ud83d\udca7\ud83d\ude2f\ud83d\udc86\ud83d\udc46\ud83c\udfa4\ud83d\ude47\ud83c\udf51\u2744\ud83c\udf34\ud83d\udca3\ud83d\udc38\ud83d\udc8c\ud83d\udccd\ud83e\udd40\ud83e\udd22\ud83d\udc45\ud83d\udca1\ud83d\udca9\ud83d\udc50\ud83d\udcf8\ud83d\udc7b\ud83e\udd10\ud83e\udd2e\ud83c\udfbc\ud83e\udd75\ud83d\udea9\ud83c\udf4e\ud83c\udf4a\ud83d\udc7c\ud83d\udc8d\ud83d\udce3\ud83e\udd42'
        )
        const gn = vn.reduce(function (e, t, r) {
          return (e[r] = t), e
        }, [])
        const yn = vn.reduce(function (e, t, r) {
          return (e[t.codePointAt(0)] = r), e
        }, [])
        const mn = Ar({
          prefix: '\ud83d\ude80',
          name: 'base256emoji',
          encode: function (e) {
            return e.reduce(function (e, t) {
              return (e += gn[t])
            }, '')
          },
          decode: function (e) {
            let t
            const r = []
            const n = (0, i.Z)(e)
            try {
              for (n.s(); !(t = n.n()).done;) {
                const o = t.value
                const s = yn[o.codePointAt(0)]
                if (void 0 === s) { throw new Error('Non-base256emoji character: '.concat(o)) }
                r.push(s)
              }
            } catch (a) {
              n.e(a)
            } finally {
              n.f()
            }
            return new Uint8Array(r)
          }
        })
        const bn = Object.freeze({ __proto__: null, base256emoji: mn })
        const wn = function e (t, r, n) {
          r = r || []
          for (var i = (n = n || 0); t >= En;) { (r[n++] = (255 & t) | _n), (t /= 128) }
          for (; t & xn;) (r[n++] = (255 & t) | _n), (t >>>= 7)
          return (r[n] = 0 | t), (e.bytes = n - i + 1), r
        }
        var _n = 128
        var xn = -128
        var En = Math.pow(2, 31)
        const kn = function e (t, r) {
          let n
          let i = 0
          let o = 0
          let s = (r = r || 0)
          const a = t.length
          do {
            if (s >= a) {
              throw ((e.bytes = 0), new RangeError('Could not decode varint'))
            }(n = t[s++]),
            (i += o < 28 ? (n & Zn) << o : (n & Zn) * Math.pow(2, o)),
            (o += 7)
          } while (n >= Sn)
          return (e.bytes = s - r), i
        }
        var Sn = 128
        var Zn = 127
        const On = Math.pow(2, 7)
        const In = Math.pow(2, 14)
        const Pn = Math.pow(2, 21)
        const Nn = Math.pow(2, 28)
        const Rn = Math.pow(2, 35)
        const Tn = Math.pow(2, 42)
        const An = Math.pow(2, 49)
        const Un = Math.pow(2, 56)
        const jn = Math.pow(2, 63)
        const Ln = {
          encode: wn,
          decode: kn,
          encodingLength: function (e) {
            return e < On
              ? 1
              : e < In
                ? 2
                : e < Pn
                  ? 3
                  : e < Nn
                    ? 4
                    : e < Rn
                      ? 5
                      : e < Tn
                        ? 6
                        : e < An
                          ? 7
                          : e < Un
                            ? 8
                            : e < jn
                              ? 9
                              : 10
          }
        }
        const Mn = Ln
        const Cn = function (e, t) {
          const r =
              arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
          return Mn.encode(e, t, r), t
        }
        const Dn = function (e) {
          return Mn.encodingLength(e)
        }
        const zn = function (e, t) {
          const r = t.byteLength
          const n = Dn(e)
          const i = n + Dn(r)
          const o = new Uint8Array(i + r)
          return Cn(e, o, 0), Cn(r, o, n), o.set(t, i), new qn(e, r, t, o)
        }
        var qn = (0, c.Z)(function e (t, r, n, i) {
          ;(0, a.Z)(this, e),
          (this.code = t),
          (this.size = r),
          (this.digest = n),
          (this.bytes = i)
        })
        const Hn = function (e) {
          const t = e.name
          const r = e.code
          const n = e.encode
          return new Vn(t, r, n)
        }
        var Vn = (function () {
          function e (t, r, n) {
            ;(0, a.Z)(this, e),
            (this.name = t),
            (this.code = r),
            (this.encode = n)
          }
          return (
            (0, c.Z)(e, [
              {
                key: 'digest',
                value: function (e) {
                  const t = this
                  if (e instanceof Uint8Array) {
                    const r = this.encode(e)
                    return r instanceof Uint8Array
                      ? zn(this.code, r)
                      : r.then(function (e) {
                        return zn(t.code, e)
                      })
                  }
                  throw Error('Unknown type, must be binary type')
                }
              }
            ]),
            e
          )
        })()
        const Kn = function (e) {
          return (function () {
            const t = (0, s.Z)(
              (0, o.Z)().mark(function t (r) {
                return (0, o.Z)().wrap(function (t) {
                  for (;;) {
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.t0 = Uint8Array),
                          (t.next = 3),
                          crypto.subtle.digest(e, r)
                        )
                      case 3:
                        return (
                          (t.t1 = t.sent), t.abrupt('return', new t.t0(t.t1))
                        )
                      case 5:
                      case 'end':
                        return t.stop()
                    }
                  }
                }, t)
              })
            )
            return function (e) {
              return t.apply(this, arguments)
            }
          })()
        }
        const Fn = Hn({ name: 'sha2-256', code: 18, encode: Kn('SHA-256') })
        const Bn = Hn({ name: 'sha2-512', code: 19, encode: Kn('SHA-512') })
        const Wn = Object.freeze({ __proto__: null, sha256: Fn, sha512: Bn })
        const Gn = Or
        const Yn = {
          code: 0,
          name: 'identity',
          encode: Gn,
          digest: function (e) {
            return zn(0, Gn(e))
          }
        }
        const Jn = Object.freeze({ __proto__: null, identity: Yn })
        new TextEncoder(), new TextDecoder()
        const Xn = (0, g.Z)(
          (0, g.Z)(
            (0, g.Z)(
              (0, g.Z)(
                (0, g.Z)(
                  (0, g.Z)(
                    (0, g.Z)((0, g.Z)((0, g.Z)((0, g.Z)({}, Mr), Dr), qr), Vr),
                    Br
                  ),
                  rn
                ),
                sn
              ),
              un
            ),
            dn
          ),
          bn
        )
        function $n (e, t, r, n) {
          return {
            name: e,
            prefix: t,
            encoder: { name: e, prefix: t, encode: r },
            decoder: { decode: n }
          }
        }
        ;(0, g.Z)((0, g.Z)({}, Wn), Jn)
        const Qn = $n(
          'utf8',
          'u',
          function (e) {
            return 'u' + new TextDecoder('utf8').decode(e)
          },
          function (e) {
            return new TextEncoder().encode(e.substring(1))
          }
        )
        const ei = $n(
          'ascii',
          'a',
          function (e) {
            for (var t = 'a', r = 0; r < e.length; r++) { t += String.fromCharCode(e[r]) }
            return t
          },
          function (e) {
            for (
              var t = (function () {
                  const e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0
                  return globalThis.Buffer != null &&
                      globalThis.Buffer.allocUnsafe != null
                    ? globalThis.Buffer.allocUnsafe(e)
                    : new Uint8Array(e)
                })((e = e.substring(1)).length),
                r = 0;
              r < e.length;
              r++
            ) { t[r] = e.charCodeAt(r) }
            return t
          }
        )
        const ti = (0, g.Z)(
          {
            utf8: Qn,
            'utf-8': Qn,
            hex: Xn.base16,
            latin1: ei,
            ascii: ei,
            binary: ei
          },
          Xn
        )
        function ri (e) {
          const t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 'utf8'
          const r = ti[t]
          if (!r) throw new Error('Unsupported encoding "'.concat(t, '"'))
          return (t !== 'utf8' && t !== 'utf-8') ||
            globalThis.Buffer == null ||
            globalThis.Buffer.from == null
            ? r.decoder.decode(''.concat(r.prefix).concat(e))
            : globalThis.Buffer.from(e, 'utf8')
        }
        const ni = 'wc'
        const ii = 2
        const oi = 'core'
        const si = ''.concat(ni, '@', 2, ':').concat(oi, ':')
        const ai = { name: oi, logger: 'error' }
        const ci = { database: ':memory:' }
        const ui = 'crypto'
        const fi = 'client_ed25519_seed'
        const li = L.ONE_DAY
        const pi = 'keychain'
        const hi = '0.3'
        const di = 'messages'
        const vi = '0.3'
        const gi = L.SIX_HOURS
        const yi = 'publisher'
        const mi = 'irn'
        const bi = 'error'
        const wi = 'wss://relay.walletconnect.com'
        const _i = 'relayer'
        const xi = {
          message: 'relayer_message',
          connect: 'relayer_connect',
          disconnect: 'relayer_disconnect',
          error: 'relayer_error',
          connection_stalled: 'relayer_connection_stalled',
          transport_closed: 'relayer_transport_closed',
          publish: 'relayer_publish'
        }
        const Ei = 'payload'
        const ki = 'connect'
        const Si = 'disconnect'
        const Zi = 'error'
        const Oi = L.ONE_SECOND
        const Ii = '0.3'
        const Pi = 'subscription_created'
        const Ni = 'subscription_deleted'
        const Ri = 'subscription_sync'
        const Ti = 'subscription_resubscribed'
        const Ai = (L.THIRTY_DAYS, 'subscription')
        const Ui = '0.3'
        const ji = 1e3 * L.FIVE_SECONDS
        const Li = 'pairing'
        const Mi = '0.3'
        const Ci =
            (L.THIRTY_DAYS,
            {
              wc_pairingDelete: {
                req: { ttl: L.ONE_DAY, prompt: !1, tag: 1e3 },
                res: { ttl: L.ONE_DAY, prompt: !1, tag: 1001 }
              },
              wc_pairingPing: {
                req: { ttl: L.THIRTY_SECONDS, prompt: !1, tag: 1002 },
                res: { ttl: L.THIRTY_SECONDS, prompt: !1, tag: 1003 }
              },
              unregistered_method: {
                req: { ttl: L.ONE_DAY, prompt: !1, tag: 0 },
                res: { ttl: L.ONE_DAY, prompt: !1, tag: 0 }
              }
            })
        const Di = {
          created: 'history_created',
          updated: 'history_updated',
          deleted: 'history_deleted',
          sync: 'history_sync'
        }
        const zi = 'history'
        const qi = '0.3'
        const Hi = 'expirer'
        const Vi = {
          created: 'expirer_created',
          deleted: 'expirer_deleted',
          expired: 'expirer_expired',
          sync: 'expirer_sync'
        }
        const Ki = '0.3'
        const Fi =
            (L.ONE_DAY,
            (function () {
              function e (t, r) {
                const n = this
                ;(0, a.Z)(this, e),
                (this.core = t),
                (this.logger = r),
                (this.keychain = new Map()),
                (this.name = pi),
                (this.version = hi),
                (this.initialized = !1),
                (this.storagePrefix = si),
                (this.init = (0, s.Z)(
                  (0, o.Z)().mark(function e () {
                    let t
                    return (0, o.Z)().wrap(function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (n.initialized) {
                              e.next = 5
                              break
                            }
                            return (e.next = 3), n.getKeyChain()
                          case 3:
                            typeof (t = e.sent) < 'u' && (n.keychain = t),
                            (n.initialized = !0)
                          case 5:
                          case 'end':
                            return e.stop()
                        }
                      }
                    }, e)
                  })
                )),
                (this.has = function (e) {
                  return n.isInitialized(), n.keychain.has(e)
                }),
                (this.set = (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e (t, r) {
                      return (0, o.Z)().wrap(function (e) {
                        for (;;) {
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                n.isInitialized(),
                                n.keychain.set(t, r),
                                (e.next = 4),
                                n.persist()
                              )
                            case 4:
                            case 'end':
                              return e.stop()
                          }
                        }
                      }, e)
                    })
                  )
                  return function (t, r) {
                    return e.apply(this, arguments)
                  }
                })()),
                (this.get = function (e) {
                  n.isInitialized()
                  const t = n.keychain.get(e)
                  if (typeof t > 'u') {
                    const r = Ht(
                      'NO_MATCHING_KEY',
                      ''.concat(n.name, ': ').concat(e)
                    ).message
                    throw new Error(r)
                  }
                  return t
                }),
                (this.del = (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e (t) {
                      return (0, o.Z)().wrap(function (e) {
                        for (;;) {
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                n.isInitialized(),
                                n.keychain.delete(t),
                                (e.next = 4),
                                n.persist()
                              )
                            case 4:
                            case 'end':
                              return e.stop()
                          }
                        }
                      }, e)
                    })
                  )
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })()),
                (this.core = t),
                (this.logger = (0, _.generateChildLogger)(r, this.name))
              }
              return (
                (0, c.Z)(e, [
                  {
                    key: 'context',
                    get: function () {
                      return (0, _.getLoggerContext)(this.logger)
                    }
                  },
                  {
                    key: 'storageKey',
                    get: function () {
                      return (
                        this.storagePrefix + this.version + '//' + this.name
                      )
                    }
                  },
                  {
                    key: 'setKeyChain',
                    value: (function () {
                      const e = (0, s.Z)(
                        (0, o.Z)().mark(function e (t) {
                          return (0, o.Z)().wrap(
                            function (e) {
                              for (;;) {
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.next = 2),
                                      this.core.storage.setItem(
                                        this.storageKey,
                                        yt(t)
                                      )
                                    )
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
                      return function (t) {
                        return e.apply(this, arguments)
                      }
                    })()
                  },
                  {
                    key: 'getKeyChain',
                    value: (function () {
                      const e = (0, s.Z)(
                        (0, o.Z)().mark(function e () {
                          let t
                          return (0, o.Z)().wrap(
                            function (e) {
                              for (;;) {
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.next = 2),
                                      this.core.storage.getItem(this.storageKey)
                                    )
                                  case 2:
                                    return (
                                      (t = e.sent),
                                      e.abrupt(
                                        'return',
                                        typeof t < 'u' ? mt(t) : void 0
                                      )
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
                      return function () {
                        return e.apply(this, arguments)
                      }
                    })()
                  },
                  {
                    key: 'persist',
                    value: (function () {
                      const e = (0, s.Z)(
                        (0, o.Z)().mark(function e () {
                          return (0, o.Z)().wrap(
                            function (e) {
                              for (;;) {
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.next = 2),
                                      this.setKeyChain(this.keychain)
                                    )
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
                    key: 'isInitialized',
                    value: function () {
                      if (!this.initialized) {
                        const e = Ht('NOT_INITIALIZED', this.name).message
                        throw new Error(e)
                      }
                    }
                  }
                ]),
                e
              )
            })())
        const Bi = (function () {
          function e (t, r, n) {
            const i = this
              ;(0, a.Z)(this, e),
            (this.core = t),
            (this.logger = r),
            (this.name = ui),
            (this.initialized = !1),
            (this.init = (0, s.Z)(
              (0, o.Z)().mark(function e () {
                return (0, o.Z)().wrap(function (e) {
                  for (;;) {
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (((e.t0 = i.initialized), e.t0)) {
                          e.next = 5
                          break
                        }
                        return (e.next = 4), i.keychain.init()
                      case 4:
                        i.initialized = !0
                      case 5:
                      case 'end':
                        return e.stop()
                    }
                  }
                }, e)
              })
            )),
            (this.hasKeys = function (e) {
              return i.isInitialized(), i.keychain.has(e)
            }),
            (this.getClientId = (0, s.Z)(
              (0, o.Z)().mark(function e () {
                let t, r
                return (0, o.Z)().wrap(function (e) {
                  for (;;) {
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          i.isInitialized(), (e.next = 3), i.getClientSeed()
                        )
                      case 3:
                        return (
                          (t = e.sent),
                          (r = re(t)),
                          e.abrupt('return', ee(r.publicKey))
                        )
                      case 6:
                      case 'end':
                        return e.stop()
                    }
                  }
                }, e)
              })
            )),
            (this.generateKeyPair = function () {
              i.isInitialized()
              const e = (function () {
                const e = ce.Au()
                return {
                  privateKey: ye(e.secretKey, Ce),
                  publicKey: ye(e.publicKey, Ce)
                }
              })()
              return i.setPrivateKey(e.publicKey, e.privateKey)
            }),
            (this.signJWT = (function () {
              const e = (0, s.Z)(
                (0, o.Z)().mark(function e (t) {
                  let r, n, s, a
                  return (0, o.Z)().wrap(function (e) {
                    for (;;) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            i.isInitialized(),
                            (e.next = 3),
                            i.getClientSeed()
                          )
                        case 3:
                          return (
                            (r = e.sent),
                            (n = re(r)),
                            (s = We()),
                            (a = li),
                            (e.next = 9),
                            ne(s, t, a, n)
                          )
                        case 9:
                          return e.abrupt('return', e.sent)
                        case 10:
                        case 'end':
                          return e.stop()
                      }
                    }
                  }, e)
                })
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })()),
            (this.generateSharedKey = function (e, t, r) {
              i.isInitialized()
              const n = (function (e, t) {
                const r = ce.gi(ge(e, Ce), ge(t, Ce))
                return ye(new se.t(ae.mE, r).expand(Be), Ce)
              })(i.getPrivateKey(e), t)
              return i.setSymKey(n, r)
            }),
            (this.setSymKey = (function () {
              const e = (0, s.Z)(
                (0, o.Z)().mark(function e (t, r) {
                  let n
                  return (0, o.Z)().wrap(function (e) {
                    for (;;) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            i.isInitialized(),
                            (n = r || Ge(t)),
                            (e.next = 4),
                            i.keychain.set(n, t)
                          )
                        case 4:
                          return e.abrupt('return', n)
                        case 5:
                        case 'end':
                          return e.stop()
                      }
                    }
                  }, e)
                })
              )
              return function (t, r) {
                return e.apply(this, arguments)
              }
            })()),
            (this.deleteKeyPair = (function () {
              const e = (0, s.Z)(
                (0, o.Z)().mark(function e (t) {
                  return (0, o.Z)().wrap(function (e) {
                    for (;;) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            i.isInitialized(),
                            (e.next = 3),
                            i.keychain.del(t)
                          )
                        case 3:
                        case 'end':
                          return e.stop()
                      }
                    }
                  }, e)
                })
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })()),
            (this.deleteSymKey = (function () {
              const e = (0, s.Z)(
                (0, o.Z)().mark(function e (t) {
                  return (0, o.Z)().wrap(function (e) {
                    for (;;) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            i.isInitialized(),
                            (e.next = 3),
                            i.keychain.del(t)
                          )
                        case 3:
                        case 'end':
                          return e.stop()
                      }
                    }
                  }, e)
                })
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })()),
            (this.encode = (function () {
              const e = (0, s.Z)(
                (0, o.Z)().mark(function e (t, r, n) {
                  let s, a, c, u, f, l, p
                  return (0, o.Z)().wrap(function (e) {
                    for (;;) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            (i.isInitialized(),
                            (s = tt(n)),
                            (a =
                                  typeof (o = r) === 'string'
                                    ? o
                                    : JSON.stringify(o)),
                            !rt(s))
                          ) {
                            e.next = 7
                            break
                          }
                          return (
                            (c = s.senderPublicKey),
                            (u = s.receiverPublicKey),
                            (e.next = 6),
                            i.generateSharedKey(c, u)
                          )
                        case 6:
                          t = e.sent
                        case 7:
                          return (
                            (f = i.getSymKey(t)),
                            (l = s.type),
                            (p = s.senderPublicKey),
                            e.abrupt(
                              'return',
                              Xe({
                                type: l,
                                symKey: f,
                                message: a,
                                senderPublicKey: p
                              })
                            )
                          )
                        case 9:
                        case 'end':
                          return e.stop()
                      }
                    }
                    let o
                  }, e)
                })
              )
              return function (t, r, n) {
                return e.apply(this, arguments)
              }
            })()),
            (this.decode = (function () {
              const e = (0, s.Z)(
                (0, o.Z)().mark(function e (t, r, n) {
                  let s, a, c, u, f
                  return (0, o.Z)().wrap(function (e) {
                    for (;;) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((i.isInitialized(), !rt((s = et(r, n))))) {
                            e.next = 7
                            break
                          }
                          return (
                            (a = s.receiverPublicKey),
                            (c = s.senderPublicKey),
                            (e.next = 6),
                            i.generateSharedKey(a, c)
                          )
                        case 6:
                          t = e.sent
                        case 7:
                          return (
                            (u = i.getSymKey(t)),
                            (f = $e({ symKey: u, encoded: r })),
                            e.abrupt('return', A(f))
                          )
                        case 9:
                        case 'end':
                          return e.stop()
                      }
                    }
                  }, e)
                })
              )
              return function (t, r, n) {
                return e.apply(this, arguments)
              }
            })()),
            (this.core = t),
            (this.logger = (0, _.generateChildLogger)(r, this.name)),
            (this.keychain = n || new Fi(this.core, this.logger))
          }
          return (
            (0, c.Z)(e, [
              {
                key: 'context',
                get: function () {
                  return (0, _.getLoggerContext)(this.logger)
                }
              },
              {
                key: 'getPayloadType',
                value: function (e) {
                  return Je(Qe(e).type)
                }
              },
              {
                key: 'setPrivateKey',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e (t, r) {
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.keychain.set(t, r)
                              case 2:
                                return e.abrupt('return', t)
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
                  return function (t, r) {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'getPrivateKey',
                value: function (e) {
                  return this.keychain.get(e)
                }
              },
              {
                key: 'getClientSeed',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e () {
                      let t
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                ;(t = ''),
                                (e.prev = 1),
                                (t = this.keychain.get(fi)),
                                (e.next = 10)
                                break
                              case 5:
                                return (
                                  (e.prev = 5),
                                  (e.t0 = e.catch(1)),
                                  (t = We()),
                                  (e.next = 10),
                                  this.keychain.set(fi, t)
                                )
                              case 10:
                                return e.abrupt('return', ri(t, 'base16'))
                              case 11:
                              case 'end':
                                return e.stop()
                            }
                          }
                        },
                        e,
                        this,
                        [[1, 5]]
                      )
                    })
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'getSymKey',
                value: function (e) {
                  return this.keychain.get(e)
                }
              },
              {
                key: 'isInitialized',
                value: function () {
                  if (!this.initialized) {
                    const e = Ht('NOT_INITIALIZED', this.name).message
                    throw new Error(e)
                  }
                }
              }
            ]),
            e
          )
        })()
        const Wi = (function (e) {
          ;(0, h.Z)(r, e)
          const t = (0, d.Z)(r)
          function r (e, n) {
            let i
            return (
              (0, a.Z)(this, r),
              ((i = t.call(this, e, n)).logger = e),
              (i.core = n),
              (i.messages = new Map()),
              (i.name = di),
              (i.version = vi),
              (i.initialized = !1),
              (i.storagePrefix = si),
              (i.init = (0, s.Z)(
                (0, o.Z)().mark(function e () {
                  let t
                  return (0, o.Z)().wrap(
                    function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (i.initialized) {
                              e.next = 15
                              break
                            }
                            return (
                              i.logger.trace('Initialized'),
                              (e.prev = 2),
                              (e.next = 5),
                              i.getRelayerMessages()
                            )
                          case 5:
                            typeof (t = e.sent) < 'u' && (i.messages = t),
                            i.logger.debug(
                              'Successfully Restored records for '.concat(
                                i.name
                              )
                            ),
                            i.logger.trace({
                              type: 'method',
                              method: 'restore',
                              size: i.messages.size
                            }),
                            (e.next = 12)
                            break
                          case 9:
                            ;(e.prev = 9),
                            (e.t0 = e.catch(2)),
                            i.logger.debug(
                              'Failed to Restore records for '.concat(
                                i.name
                              )
                            ),
                            i.logger.error(e.t0)
                          case 12:
                            return (
                              (e.prev = 12),
                              (i.initialized = !0),
                              e.finish(12)
                            )
                          case 15:
                          case 'end':
                            return e.stop()
                        }
                      }
                    },
                    e,
                    null,
                    [[2, 9, 12, 15]]
                  )
                })
              )),
              (i.set = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t, r) {
                    let n, s
                    return (0, o.Z)().wrap(function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              (i.isInitialized(),
                              (n = Ye(r)),
                              typeof (s = i.messages.get(t)) > 'u' &&
                                  (s = {}),
                              (e.t0 = typeof s[n] < 'u'),
                              e.t0)
                            ) {
                              e.next = 10
                              break
                            }
                            return (
                              (s[n] = r),
                              i.messages.set(t, s),
                              (e.next = 10),
                              i.persist()
                            )
                          case 10:
                            return e.abrupt('return', n)
                          case 11:
                          case 'end':
                            return e.stop()
                        }
                      }
                    }, e)
                  })
                )
                return function (t, r) {
                  return e.apply(this, arguments)
                }
              })()),
              (i.get = function (e) {
                i.isInitialized()
                let t = i.messages.get(e)
                return typeof t > 'u' && (t = {}), t
              }),
              (i.has = function (e, t) {
                return i.isInitialized(), typeof i.get(e)[Ye(t)] < 'u'
              }),
              (i.del = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t) {
                    return (0, o.Z)().wrap(function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              i.isInitialized(),
                              i.messages.delete(t),
                              (e.next = 4),
                              i.persist()
                            )
                          case 4:
                          case 'end':
                            return e.stop()
                        }
                      }
                    }, e)
                  })
                )
                return function (t) {
                  return e.apply(this, arguments)
                }
              })()),
              (i.logger = (0, _.generateChildLogger)(e, i.name)),
              (i.core = n),
              i
            )
          }
          return (
            (0, c.Z)(r, [
              {
                key: 'context',
                get: function () {
                  return (0, _.getLoggerContext)(this.logger)
                }
              },
              {
                key: 'storageKey',
                get: function () {
                  return this.storagePrefix + this.version + '//' + this.name
                }
              },
              {
                key: 'setRelayerMessages',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e (t) {
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.core.storage.setItem(
                                    this.storageKey,
                                    yt(t)
                                  )
                                )
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
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'getRelayerMessages',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e () {
                      let t
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.core.storage.getItem(this.storageKey)
                                )
                              case 2:
                                return (
                                  (t = e.sent),
                                  e.abrupt(
                                    'return',
                                    typeof t < 'u' ? mt(t) : void 0
                                  )
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
                  return function () {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'persist',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e () {
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.setRelayerMessages(this.messages)
                                )
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
                key: 'isInitialized',
                value: function () {
                  if (!this.initialized) {
                    const e = Ht('NOT_INITIALIZED', this.name).message
                    throw new Error(e)
                  }
                }
              }
            ]),
            r
          )
        })(S)
        const Gi = (function (e) {
          ;(0, h.Z)(r, e)
          const t = (0, d.Z)(r)
          function r (e, n) {
            let i
            return (
              (0, a.Z)(this, r),
              ((i = t.call(this, e, n)).relayer = e),
              (i.logger = n),
              (i.events = new y.EventEmitter()),
              (i.name = yi),
              (i.queue = new Map()),
              (i.publishTimeout = 1e4),
              (i.publish = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t, r, n) {
                    let s, a, c, u, f, l
                    return (0, o.Z)().wrap(
                      function (e) {
                        for (;;) {
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                i.logger.debug('Publishing Payload'),
                                i.logger.trace({
                                  type: 'method',
                                  method: 'publish',
                                  params: { topic: t, message: r, opts: n }
                                }),
                                (e.prev = 1),
                                (s =
                                    (n === null || void 0 === n
                                      ? void 0
                                      : n.ttl) || gi),
                                (a = Ot(n)),
                                (c =
                                    (n === null || void 0 === n
                                      ? void 0
                                      : n.prompt) || !1),
                                (u =
                                    (n === null || void 0 === n
                                      ? void 0
                                      : n.tag) || 0),
                                (f = {
                                  topic: t,
                                  message: r,
                                  opts: {
                                    ttl: s,
                                    relay: a,
                                    prompt: c,
                                    tag: u
                                  }
                                }),
                                (l = Ye(r)),
                                i.queue.set(l, f),
                                (e.prev = 4),
                                (e.next = 7),
                                xt(
                                  i.rpcPublish(t, r, s, a, c, u),
                                  i.publishTimeout
                                )
                              )
                            case 7:
                              return (e.next = 9), e.sent
                            case 9:
                              i.relayer.events.emit(xi.publish, f),
                              (e.next = 16)
                              break
                            case 12:
                              return (
                                (e.prev = 12),
                                (e.t0 = e.catch(4)),
                                i.logger.debug('Publishing Payload stalled'),
                                i.relayer.events.emit(xi.connection_stalled),
                                e.abrupt('return')
                              )
                            case 16:
                              i.onPublish(l, f),
                              i.logger.debug(
                                'Successfully Published Payload'
                              ),
                              i.logger.trace({
                                type: 'method',
                                method: 'publish',
                                params: { topic: t, message: r, opts: n }
                              }),
                              (e.next = 22)
                              break
                            case 19:
                              throw (
                                ((e.prev = 19),
                                (e.t1 = e.catch(1)),
                                i.logger.debug('Failed to Publish Payload'),
                                i.logger.error(e.t1),
                                e.t1)
                              )
                            case 22:
                            case 'end':
                              return e.stop()
                          }
                        }
                      },
                      e,
                      null,
                      [
                        [1, 19],
                        [4, 12]
                      ]
                    )
                  })
                )
                return function (t, r, n) {
                  return e.apply(this, arguments)
                }
              })()),
              (i.on = function (e, t) {
                i.events.on(e, t)
              }),
              (i.once = function (e, t) {
                i.events.once(e, t)
              }),
              (i.off = function (e, t) {
                i.events.off(e, t)
              }),
              (i.removeListener = function (e, t) {
                i.events.removeListener(e, t)
              }),
              (i.relayer = e),
              (i.logger = (0, _.generateChildLogger)(n, i.name)),
              i.registerEventListeners(),
              i
            )
          }
          return (
            (0, c.Z)(r, [
              {
                key: 'context',
                get: function () {
                  return (0, _.getLoggerContext)(this.logger)
                }
              },
              {
                key: 'rpcPublish',
                value: function (e, t, r, n, i, o) {
                  let s
                  let a
                  let c
                  let u
                  const f = {
                    method: It(n.protocol).publish,
                    params: {
                      topic: e,
                      message: t,
                      ttl: r,
                      prompt: i,
                      tag: o
                    }
                  }
                  return (
                    Bt((s = f.params) == null ? void 0 : s.prompt) &&
                        ((a = f.params) == null || delete a.prompt),
                    Bt((c = f.params) == null ? void 0 : c.tag) &&
                        ((u = f.params) == null || delete u.tag),
                    this.logger.debug('Outgoing Relay Payload'),
                    this.logger.trace({
                      type: 'message',
                      direction: 'outgoing',
                      request: f
                    }),
                    this.relayer.provider.request(f)
                  )
                }
              },
              {
                key: 'onPublish',
                value: function (e, t) {
                  this.queue.delete(e)
                }
              },
              {
                key: 'checkQueue',
                value: function () {
                  const e = this
                  this.queue.forEach(
                    (function () {
                      const t = (0, s.Z)(
                        (0, o.Z)().mark(function t (r) {
                          let n, i, s
                          return (0, o.Z)().wrap(function (t) {
                            for (;;) {
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (n = r.topic),
                                    (i = r.message),
                                    (s = r.opts),
                                    (t.next = 3),
                                    e.publish(n, i, s)
                                  )
                                case 3:
                                case 'end':
                                  return t.stop()
                              }
                            }
                          }, t)
                        })
                      )
                      return function (e) {
                        return t.apply(this, arguments)
                      }
                    })()
                  )
                }
              },
              {
                key: 'registerEventListeners',
                value: function () {
                  const e = this
                  this.relayer.core.heartbeat.on(
                    w.HEARTBEAT_EVENTS.pulse,
                    function () {
                      e.checkQueue()
                    }
                  )
                }
              }
            ]),
            r
          )
        })(Z)
        const Yi = (function () {
          function e () {
            const t = this
              ;(0, a.Z)(this, e),
            (this.map = new Map()),
            (this.set = function (e, r) {
              const n = t.get(e)
              t.exists(e, r) || t.map.set(e, [].concat((0, p.Z)(n), [r]))
            }),
            (this.get = function (e) {
              return t.map.get(e) || []
            }),
            (this.exists = function (e, r) {
              return t.get(e).includes(r)
            }),
            (this.delete = function (e, r) {
              if (typeof r > 'u') t.map.delete(e)
              else if (t.map.has(e)) {
                const n = t.get(e)
                if (t.exists(e, r)) {
                  const i = n.filter(function (e) {
                    return e !== r
                  })
                  i.length ? t.map.set(e, i) : t.map.delete(e)
                }
              }
            }),
            (this.clear = function () {
              t.map.clear()
            })
          }
          return (
            (0, c.Z)(e, [
              {
                key: 'topics',
                get: function () {
                  return Array.from(this.map.keys())
                }
              }
            ]),
            e
          )
        })()
        const Ji = Object.defineProperty
        const Xi = Object.defineProperties
        const $i = Object.getOwnPropertyDescriptors
        const Qi = Object.getOwnPropertySymbols
        const eo = Object.prototype.hasOwnProperty
        const to = Object.prototype.propertyIsEnumerable
        const ro = function (e, t, r) {
          return t in e
            ? Ji(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: r
            })
            : (e[t] = r)
        }
        const no = function (e, t) {
          for (var r in t || (t = {})) eo.call(t, r) && ro(e, r, t[r])
          if (Qi) {
            let n
            const o = (0, i.Z)(Qi(t))
            try {
              for (o.s(); !(n = o.n()).done;) {
                r = n.value
                to.call(t, r) && ro(e, r, t[r])
              }
            } catch (s) {
              o.e(s)
            } finally {
              o.f()
            }
          }
          return e
        }
        const io = function (e, t) {
          return Xi(e, $i(t))
        }
        const oo = (function (e) {
          ;(0, h.Z)(r, e)
          const t = (0, d.Z)(r)
          function r (e, n) {
            let i
            return (
              (0, a.Z)(this, r),
              ((i = t.call(this, e, n)).relayer = e),
              (i.logger = n),
              (i.subscriptions = new Map()),
              (i.topicMap = new Yi()),
              (i.events = new y.EventEmitter()),
              (i.name = Ai),
              (i.version = Ui),
              (i.pending = new Map()),
              (i.cached = []),
              (i.initialized = !1),
              (i.pendingSubscriptionWatchLabel = 'pending_sub_watch_label'),
              (i.pendingSubInterval = 20),
              (i.storagePrefix = si),
              (i.subscribeTimeout = 1e4),
              (i.init = (0, s.Z)(
                (0, o.Z)().mark(function e () {
                  return (0, o.Z)().wrap(function (e) {
                    for (;;) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (((e.t0 = i.initialized), e.t0)) {
                            e.next = 7
                            break
                          }
                          return (
                            i.logger.trace('Initialized'),
                            (e.next = 5),
                            i.restart()
                          )
                        case 5:
                          i.registerEventListeners(), i.onEnable()
                        case 7:
                        case 'end':
                          return e.stop()
                      }
                    }
                  }, e)
                })
              )),
              (i.subscribe = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t, r) {
                    let n, s, a
                    return (0, o.Z)().wrap(
                      function (e) {
                        for (;;) {
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                i.isInitialized(),
                                i.logger.debug('Subscribing Topic'),
                                i.logger.trace({
                                  type: 'method',
                                  method: 'subscribe',
                                  params: { topic: t, opts: r }
                                }),
                                (e.prev = 1),
                                (n = Ot(r)),
                                (s = { topic: t, relay: n }),
                                i.pending.set(t, s),
                                (e.next = 6),
                                i.rpcSubscribe(t, n)
                              )
                            case 6:
                              return (
                                (a = e.sent),
                                e.abrupt(
                                  'return',
                                  (i.onSubscribe(a, s),
                                  i.logger.debug(
                                    'Successfully Subscribed Topic'
                                  ),
                                  i.logger.trace({
                                    type: 'method',
                                    method: 'subscribe',
                                    params: { topic: t, opts: r }
                                  }),
                                  a)
                                )
                              )
                            case 10:
                              throw (
                                ((e.prev = 10),
                                (e.t0 = e.catch(1)),
                                i.logger.debug('Failed to Subscribe Topic'),
                                i.logger.error(e.t0),
                                e.t0)
                              )
                            case 13:
                            case 'end':
                              return e.stop()
                          }
                        }
                      },
                      e,
                      null,
                      [[1, 10]]
                    )
                  })
                )
                return function (t, r) {
                  return e.apply(this, arguments)
                }
              })()),
              (i.unsubscribe = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t, r) {
                    return (0, o.Z)().wrap(function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              (i.isInitialized(),
                              !(
                                typeof (r === null || void 0 === r
                                  ? void 0
                                  : r.id) < 'u'
                              ))
                            ) {
                              e.next = 6
                              break
                            }
                            return (e.next = 4), i.unsubscribeById(t, r.id, r)
                          case 4:
                            e.next = 8
                            break
                          case 6:
                            return (e.next = 8), i.unsubscribeByTopic(t, r)
                          case 8:
                          case 'end':
                            return e.stop()
                        }
                      }
                    }, e)
                  })
                )
                return function (t, r) {
                  return e.apply(this, arguments)
                }
              })()),
              (i.isSubscribed = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t) {
                    return (0, o.Z)().wrap(function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!i.topics.includes(t)) {
                              e.next = 4
                              break
                            }
                            ;(e.t0 = !0), (e.next = 7)
                            break
                          case 4:
                            return (
                              (e.next = 6),
                              new Promise(function (e, r) {
                                const n = new L.Watch()
                                n.start(i.pendingSubscriptionWatchLabel)
                                var o = setInterval(function () {
                                  !i.pending.has(t) &&
                                      i.topics.includes(t) &&
                                      (clearInterval(o),
                                      n.stop(i.pendingSubscriptionWatchLabel),
                                      e(!0)),
                                  n.elapsed(
                                    i.pendingSubscriptionWatchLabel
                                  ) >= ji &&
                                        (clearInterval(o),
                                        n.stop(i.pendingSubscriptionWatchLabel),
                                        r(!1))
                                }, i.pendingSubInterval)
                              })
                            )
                          case 6:
                            e.t0 = e.sent
                          case 7:
                            return e.abrupt('return', e.t0)
                          case 8:
                          case 'end':
                            return e.stop()
                        }
                      }
                    }, e)
                  })
                )
                return function (t) {
                  return e.apply(this, arguments)
                }
              })()),
              (i.on = function (e, t) {
                i.events.on(e, t)
              }),
              (i.once = function (e, t) {
                i.events.once(e, t)
              }),
              (i.off = function (e, t) {
                i.events.off(e, t)
              }),
              (i.removeListener = function (e, t) {
                i.events.removeListener(e, t)
              }),
              (i.restart = (0, s.Z)(
                (0, o.Z)().mark(function e () {
                  return (0, o.Z)().wrap(function (e) {
                    for (;;) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), i.restore()
                        case 2:
                          return (e.next = 4), i.reset()
                        case 4:
                        case 'end':
                          return e.stop()
                      }
                    }
                  }, e)
                })
              )),
              (i.relayer = e),
              (i.logger = (0, _.generateChildLogger)(n, i.name)),
              i
            )
          }
          return (
            (0, c.Z)(r, [
              {
                key: 'context',
                get: function () {
                  return (0, _.getLoggerContext)(this.logger)
                }
              },
              {
                key: 'storageKey',
                get: function () {
                  return this.storagePrefix + this.version + '//' + this.name
                }
              },
              {
                key: 'length',
                get: function () {
                  return this.subscriptions.size
                }
              },
              {
                key: 'ids',
                get: function () {
                  return Array.from(this.subscriptions.keys())
                }
              },
              {
                key: 'values',
                get: function () {
                  return Array.from(this.subscriptions.values())
                }
              },
              {
                key: 'topics',
                get: function () {
                  return this.topicMap.topics
                }
              },
              {
                key: 'hasSubscription',
                value: function (e, t) {
                  let r = !1
                  try {
                    r = this.getSubscription(e).topic === t
                  } catch (n) {}
                  return r
                }
              },
              {
                key: 'onEnable',
                value: function () {
                  ;(this.cached = []), (this.initialized = !0)
                }
              },
              {
                key: 'onDisable',
                value: function () {
                  ;(this.cached = this.values),
                  this.subscriptions.clear(),
                  this.topicMap.clear(),
                  (this.initialized = !1)
                }
              },
              {
                key: 'unsubscribeByTopic',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e (t, r) {
                      let n
                      const i = this
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = this.topicMap.get(t)),
                                  (e.next = 3),
                                  Promise.all(
                                    n.map(
                                      (function () {
                                        const e = (0, s.Z)(
                                          (0, o.Z)().mark(function e (n) {
                                            return (0, o.Z)().wrap(function (
                                              e
                                            ) {
                                              for (;;) {
 switch ((e.prev = e.next)) {
                                                case 0:
                                                  return (
                                                    (e.next = 2),
                                                    i.unsubscribeById(
                                                      t,
                                                      n,
                                                      r
                                                    )
                                                  )
                                                case 2:
                                                  return e.abrupt(
                                                    'return',
                                                    e.sent
                                                  )
                                                case 3:
                                                case 'end':
                                                  return e.stop()
                                              } 
}
                                            }, e)
                                          })
                                        )
                                        return function (t) {
                                          return e.apply(this, arguments)
                                        }
                                      })()
                                    )
                                  )
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
                  return function (t, r) {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'unsubscribeById',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e (t, r, n) {
                      let i, s
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  this.logger.debug('Unsubscribing Topic'),
                                  this.logger.trace({
                                    type: 'method',
                                    method: 'unsubscribe',
                                    params: { topic: t, id: r, opts: n }
                                  }),
                                  (e.prev = 1),
                                  (i = Ot(n)),
                                  (e.next = 5),
                                  this.rpcUnsubscribe(t, r, i)
                                )
                              case 5:
                                return (
                                  (s = Vt(
                                    'USER_DISCONNECTED',
                                    ''.concat(this.name, ', ').concat(t)
                                  )),
                                  (e.next = 8),
                                  this.onUnsubscribe(t, r, s)
                                )
                              case 8:
                                this.logger.debug(
                                  'Successfully Unsubscribed Topic'
                                ),
                                this.logger.trace({
                                  type: 'method',
                                  method: 'unsubscribe',
                                  params: { topic: t, id: r, opts: n }
                                }),
                                (e.next = 15)
                                break
                              case 12:
                                throw (
                                  ((e.prev = 12),
                                  (e.t0 = e.catch(1)),
                                  this.logger.debug(
                                    'Failed to Unsubscribe Topic'
                                  ),
                                  this.logger.error(e.t0),
                                  e.t0)
                                )
                              case 15:
                              case 'end':
                                return e.stop()
                            }
                          }
                        },
                        e,
                        this,
                        [[1, 12]]
                      )
                    })
                  )
                  return function (t, r, n) {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'rpcSubscribe',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e (t, r) {
                      let n, i
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = {
                                    method: It(r.protocol).subscribe,
                                    params: { topic: t }
                                  }),
                                  this.logger.debug('Outgoing Relay Payload'),
                                  this.logger.trace({
                                    type: 'payload',
                                    direction: 'outgoing',
                                    request: n
                                  }),
                                  (e.prev = 2),
                                  (e.next = 5),
                                  xt(
                                    this.relayer.provider.request(n),
                                    this.subscribeTimeout
                                  )
                                )
                              case 5:
                                return (e.next = 7), e.sent
                              case 7:
                                ;(i = e.sent), (e.next = 13)
                                break
                              case 10:
                                ;(e.prev = 10),
                                (e.t0 = e.catch(2)),
                                this.logger.debug(
                                  'Outgoing Relay Payload stalled'
                                ),
                                this.relayer.events.emit(
                                  xi.connection_stalled
                                )
                              case 13:
                                return e.abrupt('return', i)
                              case 14:
                              case 'end':
                                return e.stop()
                            }
                          }
                        },
                        e,
                        this,
                        [[2, 10]]
                      )
                    })
                  )
                  return function (t, r) {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'rpcUnsubscribe',
                value: function (e, t, r) {
                  const n = {
                    method: It(r.protocol).unsubscribe,
                    params: { topic: e, id: t }
                  }
                  return (
                    this.logger.debug('Outgoing Relay Payload'),
                    this.logger.trace({
                      type: 'payload',
                      direction: 'outgoing',
                      request: n
                    }),
                    this.relayer.provider.request(n)
                  )
                }
              },
              {
                key: 'onSubscribe',
                value: function (e, t) {
                  this.setSubscription(e, io(no({}, t), { id: e })),
                  this.pending.delete(t.topic)
                }
              },
              {
                key: 'onResubscribe',
                value: function (e, t) {
                  this.addSubscription(e, io(no({}, t), { id: e })),
                  this.pending.delete(t.topic)
                }
              },
              {
                key: 'onUnsubscribe',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e (t, r, n) {
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  this.events.removeAllListeners(r),
                                  this.hasSubscription(r, t) &&
                                      this.deleteSubscription(r, n),
                                  (e.next = 4),
                                  this.relayer.messages.del(t)
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
                  return function (t, r, n) {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'setRelayerSubscriptions',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e (t) {
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.relayer.core.storage.setItem(
                                    this.storageKey,
                                    t
                                  )
                                )
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
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'getRelayerSubscriptions',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e () {
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.relayer.core.storage.getItem(
                                    this.storageKey
                                  )
                                )
                              case 2:
                                return e.abrupt('return', e.sent)
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
                key: 'setSubscription',
                value: function (e, t) {
                  this.subscriptions.has(e) ||
                      (this.logger.debug('Setting subscription'),
                      this.logger.trace({
                        type: 'method',
                        method: 'setSubscription',
                        id: e,
                        subscription: t
                      }),
                      this.addSubscription(e, t))
                }
              },
              {
                key: 'addSubscription',
                value: function (e, t) {
                  this.subscriptions.set(e, no({}, t)),
                  this.topicMap.set(t.topic, e),
                  this.events.emit(Pi, t)
                }
              },
              {
                key: 'getSubscription',
                value: function (e) {
                  this.logger.debug('Getting subscription'),
                  this.logger.trace({
                    type: 'method',
                    method: 'getSubscription',
                    id: e
                  })
                  const t = this.subscriptions.get(e)
                  if (!t) {
                    const r = Ht(
                      'NO_MATCHING_KEY',
                      ''.concat(this.name, ': ').concat(e)
                    ).message
                    throw new Error(r)
                  }
                  return t
                }
              },
              {
                key: 'deleteSubscription',
                value: function (e, t) {
                  this.logger.debug('Deleting subscription'),
                  this.logger.trace({
                    type: 'method',
                    method: 'deleteSubscription',
                    id: e,
                    reason: t
                  })
                  const r = this.getSubscription(e)
                  this.subscriptions.delete(e),
                  this.topicMap.delete(r.topic, e),
                  this.events.emit(Ni, io(no({}, r), { reason: t }))
                }
              },
              {
                key: 'persist',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e () {
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.setRelayerSubscriptions(this.values)
                                )
                              case 2:
                                this.events.emit(Ri)
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
                key: 'reset',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e () {
                      const t = this
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (((e.t0 = this.cached.length), !e.t0)) {
                                  e.next = 4
                                  break
                                }
                                return (
                                  (e.next = 4),
                                  Promise.all(
                                    this.cached.map(
                                      (function () {
                                        const e = (0, s.Z)(
                                          (0, o.Z)().mark(function e (r) {
                                            return (0, o.Z)().wrap(function (
                                              e
                                            ) {
                                              for (;;) {
 switch ((e.prev = e.next)) {
                                                case 0:
                                                  return (
                                                    (e.next = 2),
                                                    t.resubscribe(r)
                                                  )
                                                case 2:
                                                  return e.abrupt(
                                                    'return',
                                                    e.sent
                                                  )
                                                case 3:
                                                case 'end':
                                                  return e.stop()
                                              } 
}
                                            }, e)
                                          })
                                        )
                                        return function (t) {
                                          return e.apply(this, arguments)
                                        }
                                      })()
                                    )
                                  )
                                )
                              case 4:
                                this.events.emit(Ti)
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
                  return function () {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'restore',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e () {
                      let t, r, n
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  this.getRelayerSubscriptions()
                                )
                              case 3:
                                if (
                                  !(typeof (t = e.sent) > 'u') &&
                                    t.length
                                ) {
                                  e.next = 6
                                  break
                                }
                                return e.abrupt('return')
                              case 6:
                                if (!this.subscriptions.size) {
                                  e.next = 9
                                  break
                                }
                                throw (
                                  ((r = Ht(
                                    'RESTORE_WILL_OVERRIDE',
                                    this.name
                                  )),
                                  (n = r.message),
                                  this.logger.error(n),
                                  new Error(n))
                                )
                              case 9:
                                ;(this.cached = t),
                                this.logger.debug(
                                  'Successfully Restored subscriptions for '.concat(
                                    this.name
                                  )
                                ),
                                this.logger.trace({
                                  type: 'method',
                                  method: 'restore',
                                  subscriptions: this.values
                                }),
                                (e.next = 15)
                                break
                              case 12:
                                ;(e.prev = 12),
                                (e.t0 = e.catch(0)),
                                this.logger.debug(
                                  'Failed to Restore subscriptions for '.concat(
                                    this.name
                                  )
                                ),
                                this.logger.error(e.t0)
                              case 15:
                              case 'end':
                                return e.stop()
                            }
                          }
                        },
                        e,
                        this,
                        [[0, 12]]
                      )
                    })
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'resubscribe',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e (t) {
                      let r, n, i, s
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this.ids.includes(t.id)) {
                                  e.next = 7
                                  break
                                }
                                return (
                                  (r = t.topic),
                                  (n = t.relay),
                                  (i = { topic: r, relay: n }),
                                  this.pending.set(i.topic, i),
                                  (e.next = 5),
                                  this.rpcSubscribe(i.topic, i.relay)
                                )
                              case 5:
                                ;(s = e.sent), this.onResubscribe(s, i)
                              case 7:
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
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'onConnect',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e () {
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.restart()
                              case 2:
                                this.onEnable()
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
                key: 'onDisconnect',
                value: function () {
                  this.onDisable()
                }
              },
              {
                key: 'checkPending',
                value: function () {
                  const e = this
                  this.relayer.transportExplicitlyClosed ||
                      this.pending.forEach(
                        (function () {
                          const t = (0, s.Z)(
                            (0, o.Z)().mark(function t (r) {
                              let n
                              return (0, o.Z)().wrap(function (t) {
                                for (;;) {
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return (
                                        (t.next = 2),
                                        e.rpcSubscribe(r.topic, r.relay)
                                      )
                                    case 2:
                                      ;(n = t.sent), e.onSubscribe(n, r)
                                    case 4:
                                    case 'end':
                                      return t.stop()
                                  }
                                }
                              }, t)
                            })
                          )
                          return function (e) {
                            return t.apply(this, arguments)
                          }
                        })()
                      )
                }
              },
              {
                key: 'registerEventListeners',
                value: function () {
                  const e = this
                  this.relayer.core.heartbeat.on(
                    w.HEARTBEAT_EVENTS.pulse,
                    function () {
                      e.checkPending()
                    }
                  ),
                  this.relayer.on(
                    xi.connect,
                    (0, s.Z)(
                      (0, o.Z)().mark(function t () {
                        return (0, o.Z)().wrap(function (t) {
                          for (;;) {
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), e.onConnect()
                              case 2:
                              case 'end':
                                return t.stop()
                            }
                          }
                        }, t)
                      })
                    )
                  ),
                  this.relayer.on(xi.disconnect, function () {
                    e.onDisconnect()
                  }),
                  this.events.on(
                    Pi,
                    (function () {
                      const t = (0, s.Z)(
                        (0, o.Z)().mark(function t (r) {
                          let n
                          return (0, o.Z)().wrap(function (t) {
                            for (;;) {
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (n = Pi),
                                    e.logger.info('Emitting '.concat(n)),
                                    e.logger.debug({
                                      type: 'event',
                                      event: n,
                                      data: r
                                    }),
                                    (t.next = 5),
                                    e.persist()
                                  )
                                case 5:
                                case 'end':
                                  return t.stop()
                              }
                            }
                          }, t)
                        })
                      )
                      return function (e) {
                        return t.apply(this, arguments)
                      }
                    })()
                  ),
                  this.events.on(
                    Ni,
                    (function () {
                      const t = (0, s.Z)(
                        (0, o.Z)().mark(function t (r) {
                          let n
                          return (0, o.Z)().wrap(function (t) {
                            for (;;) {
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (n = Ni),
                                    e.logger.info('Emitting '.concat(n)),
                                    e.logger.debug({
                                      type: 'event',
                                      event: n,
                                      data: r
                                    }),
                                    (t.next = 5),
                                    e.persist()
                                  )
                                case 5:
                                case 'end':
                                  return t.stop()
                              }
                            }
                          }, t)
                        })
                      )
                      return function (e) {
                        return t.apply(this, arguments)
                      }
                    })()
                  )
                }
              },
              {
                key: 'isInitialized',
                value: function () {
                  if (!this.initialized) {
                    const e = Ht('NOT_INITIALIZED', this.name).message
                    throw new Error(e)
                  }
                }
              }
            ]),
            r
          )
        })(P)
        const so = Object.defineProperty
        const ao = Object.getOwnPropertySymbols
        const co = Object.prototype.hasOwnProperty
        const uo = Object.prototype.propertyIsEnumerable
        const fo = function (e, t, r) {
          return t in e
            ? so(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: r
            })
            : (e[t] = r)
        }
        const lo = function (e, t) {
          for (var r in t || (t = {})) co.call(t, r) && fo(e, r, t[r])
          if (ao) {
            let n
            const o = (0, i.Z)(ao(t))
            try {
              for (o.s(); !(n = o.n()).done;) {
                r = n.value
                uo.call(t, r) && fo(e, r, t[r])
              }
            } catch (s) {
              o.e(s)
            } finally {
              o.f()
            }
          }
          return e
        }
        const po = (function (e) {
          ;(0, h.Z)(r, e)
          const t = (0, d.Z)(r)
          function r (e) {
            let n
            return (
              (0, a.Z)(this, r),
              ((n = t.call(this, e)).protocol = 'wc'),
              (n.version = 2),
              (n.events = new y.EventEmitter()),
              (n.name = _i),
              (n.transportExplicitlyClosed = !1),
              (n.initialized = !1),
              (n.core = e.core),
              (n.logger =
                  typeof e.logger < 'u' && typeof e.logger !== 'string'
                    ? (0, _.generateChildLogger)(e.logger, n.name)
                    : f()(
                      (0, _.getDefaultLoggerOptions)({
                        level: e.logger || bi
                      })
                    )),
              (n.messages = new Wi(n.logger, e.core)),
              (n.subscriber = new oo((0, l.Z)(n), n.logger)),
              (n.publisher = new Gi((0, l.Z)(n), n.logger)),
              (n.relayUrl =
                  (e === null || void 0 === e ? void 0 : e.relayUrl) || wi),
              (n.projectId = e.projectId),
              (n.provider = {}),
              n
            )
          }
          return (
            (0, c.Z)(r, [
              {
                key: 'init',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e () {
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  this.logger.trace('Initialized'),
                                  (e.next = 3),
                                  this.createProvider()
                                )
                              case 3:
                                return (
                                  (this.provider = e.sent),
                                  (e.next = 6),
                                  Promise.all([
                                    this.messages.init(),
                                    this.transportOpen(),
                                    this.subscriber.init()
                                  ])
                                )
                              case 6:
                                this.registerEventListeners(),
                                (this.initialized = !0)
                              case 8:
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
                key: 'context',
                get: function () {
                  return (0, _.getLoggerContext)(this.logger)
                }
              },
              {
                key: 'connected',
                get: function () {
                  return this.provider.connection.connected
                }
              },
              {
                key: 'connecting',
                get: function () {
                  return this.provider.connection.connecting
                }
              },
              {
                key: 'publish',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e (t, r, n) {
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  this.isInitialized(),
                                  (e.next = 3),
                                  this.publisher.publish(t, r, n)
                                )
                              case 3:
                                return (
                                  (e.next = 5),
                                  this.recordMessageEvent({
                                    topic: t,
                                    message: r
                                  })
                                )
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
                  return function (t, r, n) {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'subscribe',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e (t, r) {
                      let n
                      const i = this
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  this.isInitialized(),
                                  (n = ''),
                                  (e.next = 4),
                                  Promise.all([
                                    new Promise(function (e) {
                                      i.subscriber.once(Pi, function (r) {
                                        r.topic === t && e()
                                      })
                                    }),
                                    new Promise(
                                      (function () {
                                        const e = (0, s.Z)(
                                          (0, o.Z)().mark(function e (s) {
                                            return (0, o.Z)().wrap(function (
                                              e
                                            ) {
                                              for (;;) {
 switch ((e.prev = e.next)) {
                                                case 0:
                                                  return (
                                                    (e.next = 2),
                                                    i.subscriber.subscribe(
                                                      t,
                                                      r
                                                    )
                                                  )
                                                case 2:
                                                  ;(n = e.sent), s()
                                                case 4:
                                                case 'end':
                                                  return e.stop()
                                              } 
}
                                            }, e)
                                          })
                                        )
                                        return function (t) {
                                          return e.apply(this, arguments)
                                        }
                                      })()
                                    )
                                  ])
                                )
                              case 4:
                                return e.abrupt('return', n)
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
                  return function (t, r) {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'unsubscribe',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e (t, r) {
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  this.isInitialized(),
                                  (e.next = 3),
                                  this.subscriber.unsubscribe(t, r)
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
                  return function (t, r) {
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
                key: 'transportClose',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e () {
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((this.transportExplicitlyClosed = !0),
                                  (e.t0 = this.connected),
                                  !e.t0)
                                ) {
                                  e.next = 6
                                  break
                                }
                                return (
                                  (e.next = 5), this.provider.disconnect()
                                )
                              case 5:
                                this.events.emit(xi.transport_closed)
                              case 6:
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
                key: 'transportOpen',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e (t) {
                      let r
                      const n = this
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (this.relayUrl = t || this.relayUrl),
                                  (this.transportExplicitlyClosed = !1),
                                  (e.prev = 1),
                                  (e.t0 = Promise),
                                  (e.t1 = new Promise(function (e) {
                                    n.initialized || e(),
                                    n.subscriber.once(Ti, function () {
                                      e()
                                    })
                                  })),
                                  (e.next = 6),
                                  Promise.race([
                                    this.provider.connect(),
                                    new Promise(function (e, t) {
                                      return n.once(
                                        xi.transport_closed,
                                        function () {
                                          t(
                                            new Error(
                                              'closeTransport called before connection was established'
                                            )
                                          )
                                        }
                                      )
                                    })
                                  ])
                                )
                              case 6:
                                return (
                                  (e.t2 = e.sent),
                                  (e.t3 = [e.t1, e.t2]),
                                  (e.next = 10),
                                  e.t0.all.call(e.t0, e.t3)
                                )
                              case 10:
                                e.next = 18
                                break
                              case 12:
                                if (
                                  ((e.prev = 12),
                                  (e.t4 = e.catch(1)),
                                  (r = e.t4),
                                  /socket hang up/i.test(r.message))
                                ) {
                                  e.next = 17
                                  break
                                }
                                throw new Error(r.message)
                              case 17:
                                this.logger.error(r),
                                this.events.emit(xi.transport_closed)
                              case 18:
                              case 'end':
                                return e.stop()
                            }
                          }
                        },
                        e,
                        this,
                        [[1, 12]]
                      )
                    })
                  )
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'restartTransport',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e (t) {
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.transportClose()
                              case 2:
                                return (
                                  (e.next = 4),
                                  new Promise(function (e) {
                                    return setTimeout(e, Oi)
                                  })
                                )
                              case 4:
                                return (e.next = 6), this.transportOpen(t)
                              case 6:
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
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'createProvider',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e () {
                      let t
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.core.crypto.signJWT(this.relayUrl)
                                )
                              case 2:
                                return (
                                  (t = e.sent),
                                  e.abrupt(
                                    'return',
                                    new yr.r(
                                      new xr(
                                        vt({
                                          sdkVersion: '2.3.3',
                                          protocol: this.protocol,
                                          version: this.version,
                                          relayUrl: this.relayUrl,
                                          projectId: this.projectId,
                                          auth: t
                                        })
                                      )
                                    )
                                  )
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
                  return function () {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'recordMessageEvent',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e (t) {
                      let r, n
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (r = t.topic),
                                  (n = t.message),
                                  (e.next = 3),
                                  this.messages.set(r, n)
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
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'shouldIgnoreMessageEvent',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e (t) {
                      let r, n
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (r = t.topic),
                                  (n = t.message),
                                  (e.next = 3),
                                  this.subscriber.isSubscribed(r)
                                )
                              case 3:
                                if (!e.sent) {
                                  e.next = 7
                                  break
                                }
                                ;(e.t0 = this.messages.has(r, n)),
                                (e.next = 8)
                                break
                              case 7:
                                e.t0 = !0
                              case 8:
                                return e.abrupt('return', e.t0)
                              case 9:
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
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'onProviderPayload',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e (t) {
                      let r, n, i, s, a
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  (this.logger.debug(
                                    'Incoming Relay Payload'
                                  ),
                                  this.logger.trace({
                                    type: 'payload',
                                    direction: 'incoming',
                                    payload: t
                                  }),
                                  !(0, mr.isJsonRpcRequest)(t))
                                ) {
                                  e.next = 11
                                  break
                                }
                                if (t.method.endsWith('_subscription')) {
                                  e.next = 3
                                  break
                                }
                                return e.abrupt('return')
                              case 3:
                                return (
                                  (r = t.params),
                                  (n = r.data),
                                  (i = n.topic),
                                  (s = n.message),
                                  (a = { topic: i, message: s }),
                                  this.logger.debug(
                                    'Emitting Relayer Payload'
                                  ),
                                  this.logger.trace(
                                    lo({ type: 'event', event: r.id }, a)
                                  ),
                                  this.events.emit(r.id, a),
                                  (e.next = 9),
                                  this.acknowledgePayload(t)
                                )
                              case 9:
                                return (e.next = 11), this.onMessageEvent(a)
                              case 11:
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
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'onMessageEvent',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e (t) {
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.shouldIgnoreMessageEvent(t)
                                )
                              case 2:
                                if (((e.t0 = e.sent), e.t0)) {
                                  e.next = 7
                                  break
                                }
                                return (
                                  this.events.emit(xi.message, t),
                                  (e.next = 7),
                                  this.recordMessageEvent(t)
                                )
                              case 7:
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
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'acknowledgePayload',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e (t) {
                      let r
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (r = (0, mr.formatJsonRpcResult)(t.id, !0)),
                                  (e.next = 3),
                                  this.provider.connection.send(r)
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
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'registerEventListeners',
                value: function () {
                  const e = this
                  this.provider.on(Ei, function (t) {
                    return e.onProviderPayload(t)
                  }),
                  this.provider.on(ki, function () {
                    e.events.emit(xi.connect)
                  }),
                  this.provider.on(Si, function () {
                    e.events.emit(xi.disconnect), e.attemptToReconnect()
                  }),
                  this.provider.on(Zi, function (t) {
                    return e.events.emit(xi.error, t)
                  }),
                  this.events.on(
                    xi.connection_stalled,
                    (0, s.Z)(
                      (0, o.Z)().mark(function t () {
                        return (0, o.Z)().wrap(function (t) {
                          for (;;) {
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), e.restartTransport()
                              case 2:
                              case 'end':
                                return t.stop()
                            }
                          }
                        }, t)
                      })
                    )
                  )
                }
              },
              {
                key: 'attemptToReconnect',
                value: function () {
                  const e = this
                  this.transportExplicitlyClosed ||
                      setTimeout(
                        (0, s.Z)(
                          (0, o.Z)().mark(function t () {
                            return (0, o.Z)().wrap(function (t) {
                              for (;;) {
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (t.next = 2), e.transportOpen()
                                  case 2:
                                  case 'end':
                                    return t.stop()
                                }
                              }
                            }, t)
                          })
                        ),
                        (0, L.toMiliseconds)(Oi)
                      )
                }
              },
              {
                key: 'isInitialized',
                value: function () {
                  if (!this.initialized) {
                    const e = Ht('NOT_INITIALIZED', this.name).message
                    throw new Error(e)
                  }
                }
              }
            ]),
            r
          )
        })(O)
        const ho = Object.defineProperty
        const vo = Object.getOwnPropertySymbols
        const go = Object.prototype.hasOwnProperty
        const yo = Object.prototype.propertyIsEnumerable
        const mo = function (e, t, r) {
          return t in e
            ? ho(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: r
            })
            : (e[t] = r)
        }
        const bo = function (e, t) {
          for (var r in t || (t = {})) go.call(t, r) && mo(e, r, t[r])
          if (vo) {
            let n
            const o = (0, i.Z)(vo(t))
            try {
              for (o.s(); !(n = o.n()).done;) {
                r = n.value
                yo.call(t, r) && mo(e, r, t[r])
              }
            } catch (s) {
              o.e(s)
            } finally {
              o.f()
            }
          }
          return e
        }
        const wo = (function (e) {
          ;(0, h.Z)(r, e)
          const t = (0, d.Z)(r)
          function r (e, n, i) {
            let c
            const u =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : si
            const f =
                  arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : void 0
            return (
              (0, a.Z)(this, r),
              ((c = t.call(this, e, n, i, u)).core = e),
              (c.logger = n),
              (c.name = i),
              (c.map = new Map()),
              (c.version = Ii),
              (c.cached = []),
              (c.initialized = !1),
              (c.storagePrefix = si),
              (c.init = (0, s.Z)(
                (0, o.Z)().mark(function e () {
                  return (0, o.Z)().wrap(function (e) {
                    for (;;) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (((e.t0 = c.initialized), e.t0)) {
                            e.next = 8
                            break
                          }
                          return (
                            c.logger.trace('Initialized'),
                            (e.next = 5),
                            c.restore()
                          )
                        case 5:
                          c.cached.forEach(function (e) {
                            Jt(e)
                              ? c.map.set(e.id, e)
                              : Xt(e)
                                ? c.map.set(e.topic, e)
                                : c.getKey &&
                                    e !== null &&
                                    !Bt(e) &&
                                    c.map.set(c.getKey(e), e)
                          }),
                          (c.cached = []),
                          (c.initialized = !0)
                        case 8:
                        case 'end':
                          return e.stop()
                      }
                    }
                  }, e)
                })
              )),
              (c.set = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t, r) {
                    return (0, o.Z)().wrap(function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((c.isInitialized(), !c.map.has(t))) {
                              e.next = 6
                              break
                            }
                            return (e.next = 4), c.update(t, r)
                          case 4:
                            e.next = 11
                            break
                          case 6:
                            return (
                              c.logger.debug('Setting value'),
                              c.logger.trace({
                                type: 'method',
                                method: 'set',
                                key: t,
                                value: r
                              }),
                              c.map.set(t, r),
                              (e.next = 11),
                              c.persist()
                            )
                          case 11:
                          case 'end':
                            return e.stop()
                        }
                      }
                    }, e)
                  })
                )
                return function (t, r) {
                  return e.apply(this, arguments)
                }
              })()),
              (c.get = function (e) {
                return (
                  c.isInitialized(),
                  c.logger.debug('Getting value'),
                  c.logger.trace({ type: 'method', method: 'get', key: e }),
                  c.getData(e)
                )
              }),
              (c.getAll = function (e) {
                return (
                  c.isInitialized(),
                  e
                    ? c.values.filter(function (t) {
                      return Object.keys(e).every(function (r) {
                        return kr()(t[r], e[r])
                      })
                    })
                    : c.values
                )
              }),
              (c.update = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t, r) {
                    let n
                    return (0, o.Z)().wrap(function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              c.isInitialized(),
                              c.logger.debug('Updating value'),
                              c.logger.trace({
                                type: 'method',
                                method: 'update',
                                key: t,
                                update: r
                              }),
                              (n = bo(bo({}, c.getData(t)), r)),
                              c.map.set(t, n),
                              (e.next = 5),
                              c.persist()
                            )
                          case 5:
                          case 'end':
                            return e.stop()
                        }
                      }
                    }, e)
                  })
                )
                return function (t, r) {
                  return e.apply(this, arguments)
                }
              })()),
              (c.delete = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t, r) {
                    return (0, o.Z)().wrap(function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              (c.isInitialized(),
                              (e.t0 = c.map.has(t)),
                              !e.t0)
                            ) {
                              e.next = 8
                              break
                            }
                            return (
                              c.logger.debug('Deleting value'),
                              c.logger.trace({
                                type: 'method',
                                method: 'delete',
                                key: t,
                                reason: r
                              }),
                              c.map.delete(t),
                              (e.next = 8),
                              c.persist()
                            )
                          case 8:
                          case 'end':
                            return e.stop()
                        }
                      }
                    }, e)
                  })
                )
                return function (t, r) {
                  return e.apply(this, arguments)
                }
              })()),
              (c.logger = (0, _.generateChildLogger)(n, c.name)),
              (c.storagePrefix = u),
              (c.getKey = f),
              c
            )
          }
          return (
            (0, c.Z)(r, [
              {
                key: 'context',
                get: function () {
                  return (0, _.getLoggerContext)(this.logger)
                }
              },
              {
                key: 'storageKey',
                get: function () {
                  return this.storagePrefix + this.version + '//' + this.name
                }
              },
              {
                key: 'length',
                get: function () {
                  return this.map.size
                }
              },
              {
                key: 'keys',
                get: function () {
                  return Array.from(this.map.keys())
                }
              },
              {
                key: 'values',
                get: function () {
                  return Array.from(this.map.values())
                }
              },
              {
                key: 'setDataStore',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e (t) {
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.core.storage.setItem(
                                    this.storageKey,
                                    t
                                  )
                                )
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
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'getDataStore',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e () {
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.core.storage.getItem(this.storageKey)
                                )
                              case 2:
                                return e.abrupt('return', e.sent)
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
                key: 'getData',
                value: function (e) {
                  const t = this.map.get(e)
                  if (!t) {
                    const r = Ht(
                      'NO_MATCHING_KEY',
                      ''.concat(this.name, ': ').concat(e)
                    ).message
                    throw (this.logger.error(r), new Error(r))
                  }
                  return t
                }
              },
              {
                key: 'persist',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e () {
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2), this.setDataStore(this.values)
                                )
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
                key: 'restore',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e () {
                      let t, r, n
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  this.getDataStore()
                                )
                              case 3:
                                if (
                                  !(typeof (t = e.sent) > 'u') &&
                                    t.length
                                ) {
                                  e.next = 6
                                  break
                                }
                                return e.abrupt('return')
                              case 6:
                                if (!this.map.size) {
                                  e.next = 9
                                  break
                                }
                                throw (
                                  ((r = Ht(
                                    'RESTORE_WILL_OVERRIDE',
                                    this.name
                                  )),
                                  (n = r.message),
                                  this.logger.error(n),
                                  new Error(n))
                                )
                              case 9:
                                ;(this.cached = t),
                                this.logger.debug(
                                  'Successfully Restored value for '.concat(
                                    this.name
                                  )
                                ),
                                this.logger.trace({
                                  type: 'method',
                                  method: 'restore',
                                  value: this.values
                                }),
                                (e.next = 15)
                                break
                              case 12:
                                ;(e.prev = 12),
                                (e.t0 = e.catch(0)),
                                this.logger.debug(
                                  'Failed to Restore value for '.concat(
                                    this.name
                                  )
                                ),
                                this.logger.error(e.t0)
                              case 15:
                              case 'end':
                                return e.stop()
                            }
                          }
                        },
                        e,
                        this,
                        [[0, 12]]
                      )
                    })
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'isInitialized',
                value: function () {
                  if (!this.initialized) {
                    const e = Ht('NOT_INITIALIZED', this.name).message
                    throw new Error(e)
                  }
                }
              }
            ]),
            r
          )
        })(I)
        const _o = (function () {
          function e (t, r) {
            const n = this
              ;(0, a.Z)(this, e),
            (this.core = t),
            (this.logger = r),
            (this.name = Li),
            (this.version = Mi),
            (this.events = new (m())()),
            (this.initialized = !1),
            (this.storagePrefix = si),
            (this.ignoredPayloadTypes = [He]),
            (this.registeredMethods = []),
            (this.init = (0, s.Z)(
              (0, o.Z)().mark(function e () {
                return (0, o.Z)().wrap(function (e) {
                  for (;;) {
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (((e.t0 = n.initialized), e.t0)) {
                          e.next = 10
                          break
                        }
                        return (e.next = 4), n.pairings.init()
                      case 4:
                        return (e.next = 6), n.cleanup()
                      case 6:
                        n.registerRelayerEvents(),
                        n.registerExpirerEvents(),
                        (n.initialized = !0),
                        n.logger.trace('Initialized')
                      case 10:
                      case 'end':
                        return e.stop()
                    }
                  }
                }, e)
              })
            )),
            (this.register = function (e) {
              const t = e.methods
              n.isInitialized(),
              (n.registeredMethods = (0, p.Z)(
                new Set(
                  [].concat((0, p.Z)(n.registeredMethods), (0, p.Z)(t))
                )
              ))
            }),
            (this.create = (0, s.Z)(
              (0, o.Z)().mark(function e () {
                let t, r, i, s, a, c
                return (0, o.Z)().wrap(function (e) {
                  for (;;) {
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          n.isInitialized(),
                          (t = We()),
                          (e.next = 4),
                          n.core.crypto.setSymKey(t)
                        )
                      case 4:
                        return (
                          (r = e.sent),
                          (i = bt(L.FIVE_MINUTES)),
                          (a = {
                            topic: r,
                            expiry: i,
                            relay: (s = { protocol: mi }),
                            active: !1
                          }),
                          (c = Mt({
                            protocol: n.core.protocol,
                            version: n.core.version,
                            topic: r,
                            symKey: t,
                            relay: s
                          })),
                          (e.next = 11),
                          n.pairings.set(r, a)
                        )
                      case 11:
                        return (e.next = 13), n.core.relayer.subscribe(r)
                      case 13:
                        return (
                          n.core.expirer.set(r, i),
                          e.abrupt('return', { topic: r, uri: c })
                        )
                      case 15:
                      case 'end':
                        return e.stop()
                    }
                  }
                }, e)
              })
            )),
            (this.pair = (function () {
              const e = (0, s.Z)(
                (0, o.Z)().mark(function e (t) {
                  let r, i, s, a, c, u
                  return (0, o.Z)().wrap(function (e) {
                    for (;;) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            n.isInitialized(),
                            n.isValidPair(t),
                            (r = Lt(t.uri)),
                            (i = r.topic),
                            (s = r.symKey),
                            (a = r.relay),
                            (c = bt(L.FIVE_MINUTES)),
                            (u = {
                              topic: i,
                              relay: a,
                              expiry: c,
                              active: !1
                            }),
                            (e.next = 4),
                            n.pairings.set(i, u)
                          )
                        case 4:
                          return (e.next = 6), n.core.crypto.setSymKey(s, i)
                        case 6:
                          return (
                            (e.next = 8),
                            n.core.relayer.subscribe(i, { relay: a })
                          )
                        case 8:
                          if (
                            (n.core.expirer.set(i, c),
                            (e.t0 = t.activatePairing),
                            !e.t0)
                          ) {
                            e.next = 13
                            break
                          }
                          return (e.next = 13), n.activate({ topic: i })
                        case 13:
                          return e.abrupt('return', u)
                        case 14:
                        case 'end':
                          return e.stop()
                      }
                    }
                  }, e)
                })
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })()),
            (this.activate = (function () {
              const e = (0, s.Z)(
                (0, o.Z)().mark(function e (t) {
                  let r, i
                  return (0, o.Z)().wrap(function (e) {
                    for (;;) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (r = t.topic),
                            n.isInitialized(),
                            (i = bt(L.THIRTY_DAYS)),
                            (e.next = 5),
                            n.pairings.update(r, { active: !0, expiry: i })
                          )
                        case 5:
                          n.core.expirer.set(r, i)
                        case 6:
                        case 'end':
                          return e.stop()
                      }
                    }
                  }, e)
                })
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })()),
            (this.ping = (function () {
              const e = (0, s.Z)(
                (0, o.Z)().mark(function e (t) {
                  let r, i, s, a, c, u
                  return (0, o.Z)().wrap(function (e) {
                    for (;;) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            n.isInitialized(),
                            (e.next = 3),
                            n.isValidPing(t)
                          )
                        case 3:
                          if (
                            ((r = t.topic), !n.pairings.keys.includes(r))
                          ) {
                            e.next = 15
                            break
                          }
                          return (
                            (e.next = 7),
                            n.sendRequest(r, 'wc_pairingPing', {})
                          )
                        case 7:
                          return (
                            (i = e.sent),
                            (s = _t()),
                            (a = s.done),
                            (c = s.resolve),
                            (u = s.reject),
                            n.events.once(
                              St('pairing_ping', i),
                              function (e) {
                                const t = e.error
                                t ? u(t) : c()
                              }
                            ),
                            (e.next = 15),
                            a()
                          )
                        case 15:
                        case 'end':
                          return e.stop()
                      }
                    }
                  }, e)
                })
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })()),
            (this.updateExpiry = (function () {
              const e = (0, s.Z)(
                (0, o.Z)().mark(function e (t) {
                  let r, i
                  return (0, o.Z)().wrap(function (e) {
                    for (;;) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (r = t.topic),
                            (i = t.expiry),
                            n.isInitialized(),
                            (e.next = 4),
                            n.pairings.update(r, { expiry: i })
                          )
                        case 4:
                        case 'end':
                          return e.stop()
                      }
                    }
                  }, e)
                })
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })()),
            (this.updateMetadata = (function () {
              const e = (0, s.Z)(
                (0, o.Z)().mark(function e (t) {
                  let r, i
                  return (0, o.Z)().wrap(function (e) {
                    for (;;) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (r = t.topic),
                            (i = t.metadata),
                            n.isInitialized(),
                            (e.next = 4),
                            n.pairings.update(r, { peerMetadata: i })
                          )
                        case 4:
                        case 'end':
                          return e.stop()
                      }
                    }
                  }, e)
                })
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })()),
            (this.getPairings = function () {
              return n.isInitialized(), n.pairings.values
            }),
            (this.disconnect = (function () {
              const e = (0, s.Z)(
                (0, o.Z)().mark(function e (t) {
                  let r
                  return (0, o.Z)().wrap(function (e) {
                    for (;;) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            n.isInitialized(),
                            (e.next = 3),
                            n.isValidDisconnect(t)
                          )
                        case 3:
                          if (
                            ((r = t.topic),
                            (e.t0 = n.pairings.keys.includes(r)),
                            !e.t0)
                          ) {
                            e.next = 10
                            break
                          }
                          return (
                            (e.next = 8),
                            n.sendRequest(
                              r,
                              'wc_pairingDelete',
                              Vt('USER_DISCONNECTED')
                            )
                          )
                        case 8:
                          return (e.next = 10), n.deletePairing(r)
                        case 10:
                        case 'end':
                          return e.stop()
                      }
                    }
                  }, e)
                })
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })()),
            (this.sendRequest = (function () {
              const e = (0, s.Z)(
                (0, o.Z)().mark(function e (t, r, i) {
                  let s, a, c
                  return (0, o.Z)().wrap(function (e) {
                    for (;;) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (s = (0, mr.formatJsonRpcRequest)(r, i)),
                            (e.next = 3),
                            n.core.crypto.encode(t, s)
                          )
                        case 3:
                          return (
                            (a = e.sent),
                            (c = Ci[r].req),
                            n.core.history.set(t, s),
                            (e.next = 8),
                            n.core.relayer.publish(t, a, c)
                          )
                        case 8:
                          return e.abrupt('return', s.id)
                        case 9:
                        case 'end':
                          return e.stop()
                      }
                    }
                  }, e)
                })
              )
              return function (t, r, n) {
                return e.apply(this, arguments)
              }
            })()),
            (this.sendResult = (function () {
              const e = (0, s.Z)(
                (0, o.Z)().mark(function e (t, r, i) {
                  let s, a, c, u
                  return (0, o.Z)().wrap(function (e) {
                    for (;;) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (s = (0, mr.formatJsonRpcResult)(t, i)),
                            (e.next = 3),
                            n.core.crypto.encode(r, s)
                          )
                        case 3:
                          return (
                            (a = e.sent),
                            (e.next = 6),
                            n.core.history.get(r, t)
                          )
                        case 6:
                          return (
                            (c = e.sent),
                            (u = Ci[c.request.method].res),
                            (e.next = 10),
                            n.core.relayer.publish(r, a, u)
                          )
                        case 10:
                          return (e.next = 12), n.core.history.resolve(s)
                        case 12:
                        case 'end':
                          return e.stop()
                      }
                    }
                  }, e)
                })
              )
              return function (t, r, n) {
                return e.apply(this, arguments)
              }
            })()),
            (this.sendError = (function () {
              const e = (0, s.Z)(
                (0, o.Z)().mark(function e (t, r, i) {
                  let s, a, c, u
                  return (0, o.Z)().wrap(function (e) {
                    for (;;) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (s = (0, mr.formatJsonRpcError)(t, i)),
                            (e.next = 3),
                            n.core.crypto.encode(r, s)
                          )
                        case 3:
                          return (
                            (a = e.sent),
                            (e.next = 6),
                            n.core.history.get(r, t)
                          )
                        case 6:
                          return (
                            (c = e.sent),
                            (u = Ci[c.request.method]
                              ? Ci[c.request.method].res
                              : Ci.unregistered_method.res),
                            (e.next = 10),
                            n.core.relayer.publish(r, a, u)
                          )
                        case 10:
                          return (e.next = 12), n.core.history.resolve(s)
                        case 12:
                        case 'end':
                          return e.stop()
                      }
                    }
                  }, e)
                })
              )
              return function (t, r, n) {
                return e.apply(this, arguments)
              }
            })()),
            (this.deletePairing = (function () {
              const e = (0, s.Z)(
                (0, o.Z)().mark(function e (t, r) {
                  return (0, o.Z)().wrap(function (e) {
                    for (;;) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), n.core.relayer.unsubscribe(t)
                        case 2:
                          return (
                            (e.next = 4),
                            Promise.all([
                              n.pairings.delete(t, Vt('USER_DISCONNECTED')),
                              n.core.crypto.deleteSymKey(t),
                              r ? Promise.resolve() : n.core.expirer.del(t)
                            ])
                          )
                        case 4:
                        case 'end':
                          return e.stop()
                      }
                    }
                  }, e)
                })
              )
              return function (t, r) {
                return e.apply(this, arguments)
              }
            })()),
            (this.cleanup = (0, s.Z)(
              (0, o.Z)().mark(function e () {
                let t
                return (0, o.Z)().wrap(function (e) {
                  for (;;) {
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = n.pairings.getAll().filter(function (e) {
                            return wt(e.expiry)
                          })),
                          (e.next = 3),
                          Promise.all(
                            t.map(function (e) {
                              return n.deletePairing(e.topic)
                            })
                          )
                        )
                      case 3:
                      case 'end':
                        return e.stop()
                    }
                  }
                }, e)
              })
            )),
            (this.onRelayEventRequest = function (e) {
              const t = e.topic
              const r = e.payload
              const i = r.method
              if (n.pairings.keys.includes(t)) {
                switch (i) {
                  case 'wc_pairingPing':
                    return n.onPairingPingRequest(t, r)
                  case 'wc_pairingDelete':
                    return n.onPairingDeleteRequest(t, r)
                  default:
                    return n.onUnknownRpcMethodRequest(t, r)
                }
              }
            }),
            (this.onRelayEventResponse = (function () {
              const e = (0, s.Z)(
                (0, o.Z)().mark(function e (t) {
                  let r, i, s
                  return (0, o.Z)().wrap(function (e) {
                    for (;;) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (r = t.topic),
                            (i = t.payload),
                            (e.next = 4),
                            n.core.history.get(r, i.id)
                          )
                        case 4:
                          if (
                            ((s = e.sent.request.method),
                            !n.pairings.keys.includes(r))
                          ) {
                            e.next = 11
                            break
                          }
                          ;(e.t0 = s),
                          (e.next = e.t0 === 'wc_pairingPing' ? 9 : 10)
                          break
                        case 9:
                          return e.abrupt(
                            'return',
                            n.onPairingPingResponse(r, i)
                          )
                        case 10:
                          return e.abrupt(
                            'return',
                            n.onUnknownRpcMethodResponse(s)
                          )
                        case 11:
                        case 'end':
                          return e.stop()
                      }
                    }
                  }, e)
                })
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })()),
            (this.onPairingPingRequest = (function () {
              const e = (0, s.Z)(
                (0, o.Z)().mark(function e (t, r) {
                  let i
                  return (0, o.Z)().wrap(
                    function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (i = r.id),
                              (e.prev = 1),
                              n.isValidPing({ topic: t }),
                              (e.next = 5),
                              n.sendResult(i, t, !0)
                            )
                          case 5:
                            n.events.emit('pairing_ping', {
                              id: i,
                              topic: t
                            }),
                            (e.next = 13)
                            break
                          case 8:
                            return (
                              (e.prev = 8),
                              (e.t0 = e.catch(1)),
                              (e.next = 12),
                              n.sendError(i, t, e.t0)
                            )
                          case 12:
                            n.logger.error(e.t0)
                          case 13:
                          case 'end':
                            return e.stop()
                        }
                      }
                    },
                    e,
                    null,
                    [[1, 8]]
                  )
                })
              )
              return function (t, r) {
                return e.apply(this, arguments)
              }
            })()),
            (this.onPairingPingResponse = function (e, t) {
              const r = t.id
              setTimeout(function () {
                ;(0, mr.isJsonRpcResult)(t)
                  ? n.events.emit(St('pairing_ping', r), {})
                  : (0, mr.isJsonRpcError)(t) &&
                        n.events.emit(St('pairing_ping', r), { error: t.error })
              }, 500)
            }),
            (this.onPairingDeleteRequest = (function () {
              const e = (0, s.Z)(
                (0, o.Z)().mark(function e (t, r) {
                  let i
                  return (0, o.Z)().wrap(
                    function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (i = r.id),
                              (e.prev = 1),
                              n.isValidDisconnect({ topic: t }),
                              (e.next = 5),
                              n.sendResult(i, t, !0)
                            )
                          case 5:
                            return (e.next = 7), n.deletePairing(t)
                          case 7:
                            n.events.emit('pairing_delete', {
                              id: i,
                              topic: t
                            }),
                            (e.next = 15)
                            break
                          case 10:
                            return (
                              (e.prev = 10),
                              (e.t0 = e.catch(1)),
                              (e.next = 14),
                              n.sendError(i, t, e.t0)
                            )
                          case 14:
                            n.logger.error(e.t0)
                          case 15:
                          case 'end':
                            return e.stop()
                        }
                      }
                    },
                    e,
                    null,
                    [[1, 10]]
                  )
                })
              )
              return function (t, r) {
                return e.apply(this, arguments)
              }
            })()),
            (this.onUnknownRpcMethodRequest = (function () {
              const e = (0, s.Z)(
                (0, o.Z)().mark(function e (t, r) {
                  let i, s, a
                  return (0, o.Z)().wrap(
                    function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((i = r.id),
                              (s = r.method),
                              (e.prev = 1),
                              !n.registeredMethods.includes(s))
                            ) {
                              e.next = 4
                              break
                            }
                            return e.abrupt('return')
                          case 4:
                            return (
                              (a = Vt('WC_METHOD_UNSUPPORTED', s)),
                              (e.next = 7),
                              n.sendError(i, t, a)
                            )
                          case 7:
                            n.logger.error(a), (e.next = 15)
                            break
                          case 10:
                            return (
                              (e.prev = 10),
                              (e.t0 = e.catch(1)),
                              (e.next = 14),
                              n.sendError(i, t, e.t0)
                            )
                          case 14:
                            n.logger.error(e.t0)
                          case 15:
                          case 'end':
                            return e.stop()
                        }
                      }
                    },
                    e,
                    null,
                    [[1, 10]]
                  )
                })
              )
              return function (t, r) {
                return e.apply(this, arguments)
              }
            })()),
            (this.onUnknownRpcMethodResponse = function (e) {
              n.registeredMethods.includes(e) ||
                    n.logger.error(Vt('WC_METHOD_UNSUPPORTED', e))
            }),
            (this.isValidPair = function (e) {
              if (!ar(e)) {
                const t = Ht(
                  'MISSING_OR_INVALID',
                  'pair() params: '.concat(e)
                ).message
                throw new Error(t)
              }
              if (
                !(function (e) {
                  if (Wt(e, !1)) {
                    try {
                      return typeof new URL(e) < 'u'
                    } catch (t) {
                      return !1
                    }
                  }
                  return !1
                })(e.uri)
              ) {
                const r = Ht(
                  'MISSING_OR_INVALID',
                  'pair() uri: '.concat(e.uri)
                ).message
                throw new Error(r)
              }
            }),
            (this.isValidPing = (function () {
              const e = (0, s.Z)(
                (0, o.Z)().mark(function e (t) {
                  let r, i, s
                  return (0, o.Z)().wrap(function (e) {
                    for (;;) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (ar(t)) {
                            e.next = 3
                            break
                          }
                          throw (
                            ((r = Ht(
                              'MISSING_OR_INVALID',
                              'ping() params: '.concat(t)
                            )),
                            (i = r.message),
                            new Error(i))
                          )
                        case 3:
                          return (
                            (s = t.topic),
                            (e.next = 6),
                            n.isValidPairingTopic(s)
                          )
                        case 6:
                        case 'end':
                          return e.stop()
                      }
                    }
                  }, e)
                })
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })()),
            (this.isValidDisconnect = (function () {
              const e = (0, s.Z)(
                (0, o.Z)().mark(function e (t) {
                  let r, i, s
                  return (0, o.Z)().wrap(function (e) {
                    for (;;) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (ar(t)) {
                            e.next = 3
                            break
                          }
                          throw (
                            ((r = Ht(
                              'MISSING_OR_INVALID',
                              'disconnect() params: '.concat(t)
                            )),
                            (i = r.message),
                            new Error(i))
                          )
                        case 3:
                          return (
                            (s = t.topic),
                            (e.next = 6),
                            n.isValidPairingTopic(s)
                          )
                        case 6:
                        case 'end':
                          return e.stop()
                      }
                    }
                  }, e)
                })
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })()),
            (this.isValidPairingTopic = (function () {
              const e = (0, s.Z)(
                (0, o.Z)().mark(function e (t) {
                  let r, i, s, a, c, u
                  return (0, o.Z)().wrap(function (e) {
                    for (;;) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (Wt(t, !1)) {
                            e.next = 3
                            break
                          }
                          throw (
                            ((r = Ht(
                              'MISSING_OR_INVALID',
                              'pairing topic should be a string: '.concat(
                                t
                              )
                            )),
                            (i = r.message),
                            new Error(i))
                          )
                        case 3:
                          if (n.pairings.keys.includes(t)) {
                            e.next = 6
                            break
                          }
                          throw (
                            ((s = Ht(
                              'NO_MATCHING_KEY',
                              "pairing topic doesn't exist: ".concat(t)
                            )),
                            (a = s.message),
                            new Error(a))
                          )
                        case 6:
                          if (!wt(n.pairings.get(t).expiry)) {
                            e.next = 11
                            break
                          }
                          return (e.next = 9), n.deletePairing(t)
                        case 9:
                          throw (
                            ((c = Ht(
                              'EXPIRED',
                              'pairing topic: '.concat(t)
                            )),
                            (u = c.message),
                            new Error(u))
                          )
                        case 11:
                        case 'end':
                          return e.stop()
                      }
                    }
                  }, e)
                })
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })()),
            (this.core = t),
            (this.logger = (0, _.generateChildLogger)(r, this.name)),
            (this.pairings = new wo(
              this.core,
              this.logger,
              this.name,
              this.storagePrefix
            ))
          }
          return (
            (0, c.Z)(e, [
              {
                key: 'context',
                get: function () {
                  return (0, _.getLoggerContext)(this.logger)
                }
              },
              {
                key: 'isInitialized',
                value: function () {
                  if (!this.initialized) {
                    const e = Ht('NOT_INITIALIZED', this.name).message
                    throw new Error(e)
                  }
                }
              },
              {
                key: 'registerRelayerEvents',
                value: function () {
                  const e = this
                  this.core.relayer.on(
                    xi.message,
                    (function () {
                      const t = (0, s.Z)(
                        (0, o.Z)().mark(function t (r) {
                          let n, i, s
                          return (0, o.Z)().wrap(function (t) {
                            for (;;) {
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    ((n = r.topic),
                                    (i = r.message),
                                    !e.ignoredPayloadTypes.includes(
                                      e.core.crypto.getPayloadType(i)
                                    ))
                                  ) {
                                    t.next = 3
                                    break
                                  }
                                  return t.abrupt('return')
                                case 3:
                                  return (
                                    (t.next = 5), e.core.crypto.decode(n, i)
                                  )
                                case 5:
                                  if (
                                    ((s = t.sent),
                                    !(0, mr.isJsonRpcRequest)(s))
                                  ) {
                                    t.next = 10
                                    break
                                  }
                                  e.core.history.set(n, s),
                                  e.onRelayEventRequest({
                                    topic: n,
                                    payload: s
                                  }),
                                  (t.next = 15)
                                  break
                                case 10:
                                  if (
                                    ((t.t0 = (0, mr.isJsonRpcResponse)(s)),
                                    !t.t0)
                                  ) {
                                    t.next = 15
                                    break
                                  }
                                  return (
                                    (t.next = 14), e.core.history.resolve(s)
                                  )
                                case 14:
                                  e.onRelayEventResponse({
                                    topic: n,
                                    payload: s
                                  })
                                case 15:
                                case 'end':
                                  return t.stop()
                              }
                            }
                          }, t)
                        })
                      )
                      return function (e) {
                        return t.apply(this, arguments)
                      }
                    })()
                  )
                }
              },
              {
                key: 'registerExpirerEvents',
                value: function () {
                  const e = this
                  this.core.expirer.on(
                    Vi.expired,
                    (function () {
                      const t = (0, s.Z)(
                        (0, o.Z)().mark(function t (r) {
                          let n, i
                          return (0, o.Z)().wrap(function (t) {
                            for (;;) {
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    ((n = kt(r.target)),
                                    (i = n.topic),
                                    (t.t0 = i && e.pairings.keys.includes(i)),
                                    !t.t0)
                                  ) {
                                    t.next = 6
                                    break
                                  }
                                  return (t.next = 5), e.deletePairing(i, !0)
                                case 5:
                                  e.events.emit('pairing_expire', {
                                    topic: i
                                  })
                                case 6:
                                case 'end':
                                  return t.stop()
                              }
                            }
                          }, t)
                        })
                      )
                      return function (e) {
                        return t.apply(this, arguments)
                      }
                    })()
                  )
                }
              }
            ]),
            e
          )
        })()
        const xo = (function (e) {
          ;(0, h.Z)(r, e)
          const t = (0, d.Z)(r)
          function r (e, n) {
            let i
            return (
              (0, a.Z)(this, r),
              ((i = t.call(this, e, n)).core = e),
              (i.logger = n),
              (i.records = new Map()),
              (i.events = new y.EventEmitter()),
              (i.name = zi),
              (i.version = qi),
              (i.cached = []),
              (i.initialized = !1),
              (i.storagePrefix = si),
              (i.init = (0, s.Z)(
                (0, o.Z)().mark(function e () {
                  return (0, o.Z)().wrap(function (e) {
                    for (;;) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (((e.t0 = i.initialized), e.t0)) {
                            e.next = 9
                            break
                          }
                          return (
                            i.logger.trace('Initialized'),
                            (e.next = 5),
                            i.restore()
                          )
                        case 5:
                          i.cached.forEach(function (e) {
                            return i.records.set(e.id, e)
                          }),
                          (i.cached = []),
                          i.registerEventListeners(),
                          (i.initialized = !0)
                        case 9:
                        case 'end':
                          return e.stop()
                      }
                    }
                  }, e)
                })
              )),
              (i.set = function (e, t, r) {
                if (
                  (i.isInitialized(),
                  i.logger.debug('Setting JSON-RPC request history record'),
                  i.logger.trace({
                    type: 'method',
                    method: 'set',
                    topic: e,
                    request: t,
                    chainId: r
                  }),
                  !i.records.has(t.id))
                ) {
                  const n = {
                    id: t.id,
                    topic: e,
                    request: { method: t.method, params: t.params || null },
                    chainId: r
                  }
                  i.records.set(n.id, n), i.events.emit(Di.created, n)
                }
              }),
              (i.resolve = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t) {
                    let r
                    return (0, o.Z)().wrap(function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              (i.isInitialized(),
                              i.logger.debug(
                                'Updating JSON-RPC response history record'
                              ),
                              i.logger.trace({
                                type: 'method',
                                method: 'update',
                                response: t
                              }),
                              i.records.has(t.id))
                            ) {
                              e.next = 2
                              break
                            }
                            return e.abrupt('return')
                          case 2:
                            return (e.next = 4), i.getRecord(t.id)
                          case 4:
                            typeof (r = e.sent).response > 'u' &&
                                ((r.response = (0, mr.isJsonRpcError)(t)
                                  ? { error: t.error }
                                  : { result: t.result }),
                                i.records.set(r.id, r),
                                i.events.emit(Di.updated, r))
                          case 6:
                          case 'end':
                            return e.stop()
                        }
                      }
                    }, e)
                  })
                )
                return function (t) {
                  return e.apply(this, arguments)
                }
              })()),
              (i.get = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t, r) {
                    return (0, o.Z)().wrap(function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              i.isInitialized(),
                              i.logger.debug('Getting record'),
                              i.logger.trace({
                                type: 'method',
                                method: 'get',
                                topic: t,
                                id: r
                              }),
                              (e.next = 5),
                              i.getRecord(r)
                            )
                          case 5:
                            return e.abrupt('return', e.sent)
                          case 6:
                          case 'end':
                            return e.stop()
                        }
                      }
                    }, e)
                  })
                )
                return function (t, r) {
                  return e.apply(this, arguments)
                }
              })()),
              (i.delete = function (e, t) {
                i.isInitialized(),
                i.logger.debug('Deleting record'),
                i.logger.trace({ type: 'method', method: 'delete', id: t }),
                i.values.forEach(function (r) {
                  if (r.topic === e) {
                    if (typeof t < 'u' && r.id !== t) return
                    i.records.delete(r.id), i.events.emit(Di.deleted, r)
                  }
                })
              }),
              (i.exists = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t, r) {
                    return (0, o.Z)().wrap(function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((i.isInitialized(), !i.records.has(r))) {
                              e.next = 9
                              break
                            }
                            return (e.next = 4), i.getRecord(r)
                          case 4:
                            ;(e.t1 = e.sent.topic),
                            (e.t2 = t),
                            (e.t0 = e.t1 === e.t2),
                            (e.next = 10)
                            break
                          case 9:
                            e.t0 = !1
                          case 10:
                            return e.abrupt('return', e.t0)
                          case 11:
                          case 'end':
                            return e.stop()
                        }
                      }
                    }, e)
                  })
                )
                return function (t, r) {
                  return e.apply(this, arguments)
                }
              })()),
              (i.on = function (e, t) {
                i.events.on(e, t)
              }),
              (i.once = function (e, t) {
                i.events.once(e, t)
              }),
              (i.off = function (e, t) {
                i.events.off(e, t)
              }),
              (i.removeListener = function (e, t) {
                i.events.removeListener(e, t)
              }),
              (i.logger = (0, _.generateChildLogger)(n, i.name)),
              i
            )
          }
          return (
            (0, c.Z)(r, [
              {
                key: 'context',
                get: function () {
                  return (0, _.getLoggerContext)(this.logger)
                }
              },
              {
                key: 'storageKey',
                get: function () {
                  return this.storagePrefix + this.version + '//' + this.name
                }
              },
              {
                key: 'size',
                get: function () {
                  return this.records.size
                }
              },
              {
                key: 'keys',
                get: function () {
                  return Array.from(this.records.keys())
                }
              },
              {
                key: 'values',
                get: function () {
                  return Array.from(this.records.values())
                }
              },
              {
                key: 'pending',
                get: function () {
                  const e = []
                  return (
                    this.values.forEach(function (t) {
                      if (!(typeof t.response < 'u')) {
                        const r = {
                          topic: t.topic,
                          request: (0, mr.formatJsonRpcRequest)(
                            t.request.method,
                            t.request.params,
                            t.id
                          ),
                          chainId: t.chainId
                        }
                        return e.push(r)
                      }
                    }),
                    e
                  )
                }
              },
              {
                key: 'setJsonRpcRecords',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e (t) {
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.core.storage.setItem(
                                    this.storageKey,
                                    t
                                  )
                                )
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
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'getJsonRpcRecords',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e () {
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.core.storage.getItem(this.storageKey)
                                )
                              case 2:
                                return e.abrupt('return', e.sent)
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
                key: 'getRecord',
                value: function (e) {
                  this.isInitialized()
                  const t = this.records.get(e)
                  if (!t) {
                    const r = Ht(
                      'NO_MATCHING_KEY',
                      ''.concat(this.name, ': ').concat(e)
                    ).message
                    throw new Error(r)
                  }
                  return t
                }
              },
              {
                key: 'persist',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e () {
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.setJsonRpcRecords(this.values)
                                )
                              case 2:
                                this.events.emit(Di.sync)
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
                key: 'restore',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e () {
                      let t, r, n
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  this.getJsonRpcRecords()
                                )
                              case 3:
                                if (
                                  !(typeof (t = e.sent) > 'u') &&
                                    t.length
                                ) {
                                  e.next = 6
                                  break
                                }
                                return e.abrupt('return')
                              case 6:
                                if (!this.records.size) {
                                  e.next = 9
                                  break
                                }
                                throw (
                                  ((r = Ht(
                                    'RESTORE_WILL_OVERRIDE',
                                    this.name
                                  )),
                                  (n = r.message),
                                  this.logger.error(n),
                                  new Error(n))
                                )
                              case 9:
                                ;(this.cached = t),
                                this.logger.debug(
                                  'Successfully Restored records for '.concat(
                                    this.name
                                  )
                                ),
                                this.logger.trace({
                                  type: 'method',
                                  method: 'restore',
                                  records: this.values
                                }),
                                (e.next = 15)
                                break
                              case 12:
                                ;(e.prev = 12),
                                (e.t0 = e.catch(0)),
                                this.logger.debug(
                                  'Failed to Restore records for '.concat(
                                    this.name
                                  )
                                ),
                                this.logger.error(e.t0)
                              case 15:
                              case 'end':
                                return e.stop()
                            }
                          }
                        },
                        e,
                        this,
                        [[0, 12]]
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
                  this.events.on(Di.created, function (t) {
                    const r = Di.created
                    e.logger.info('Emitting '.concat(r)),
                    e.logger.debug({ type: 'event', event: r, record: t }),
                    e.persist()
                  }),
                  this.events.on(Di.updated, function (t) {
                    const r = Di.updated
                    e.logger.info('Emitting '.concat(r)),
                    e.logger.debug({
                      type: 'event',
                      event: r,
                      record: t
                    }),
                    e.persist()
                  }),
                  this.events.on(Di.deleted, function (t) {
                    const r = Di.deleted
                    e.logger.info('Emitting '.concat(r)),
                    e.logger.debug({
                      type: 'event',
                      event: r,
                      record: t
                    }),
                    e.persist()
                  })
                }
              },
              {
                key: 'isInitialized',
                value: function () {
                  if (!this.initialized) {
                    const e = Ht('NOT_INITIALIZED', this.name).message
                    throw new Error(e)
                  }
                }
              }
            ]),
            r
          )
        })(k)
        const Eo = (function (e) {
          ;(0, h.Z)(r, e)
          const t = (0, d.Z)(r)
          function r (e, n) {
            let i
            return (
              (0, a.Z)(this, r),
              ((i = t.call(this, e, n)).core = e),
              (i.logger = n),
              (i.expirations = new Map()),
              (i.events = new y.EventEmitter()),
              (i.name = Hi),
              (i.version = Ki),
              (i.cached = []),
              (i.initialized = !1),
              (i.storagePrefix = si),
              (i.init = (0, s.Z)(
                (0, o.Z)().mark(function e () {
                  return (0, o.Z)().wrap(function (e) {
                    for (;;) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (((e.t0 = i.initialized), e.t0)) {
                            e.next = 9
                            break
                          }
                          return (
                            i.logger.trace('Initialized'),
                            (e.next = 5),
                            i.restore()
                          )
                        case 5:
                          i.cached.forEach(function (e) {
                            return i.expirations.set(e.target, e)
                          }),
                          (i.cached = []),
                          i.registerEventListeners(),
                          (i.initialized = !0)
                        case 9:
                        case 'end':
                          return e.stop()
                      }
                    }
                  }, e)
                })
              )),
              (i.has = function (e) {
                try {
                  const t = i.formatTarget(e)
                  return typeof i.getExpiration(t) < 'u'
                } catch (r) {
                  return !1
                }
              }),
              (i.set = function (e, t) {
                i.isInitialized()
                const r = i.formatTarget(e)
                const n = { target: r, expiry: t }
                i.expirations.set(r, n),
                i.checkExpiry(r, n),
                i.events.emit(Vi.created, { target: r, expiration: n })
              }),
              (i.get = function (e) {
                i.isInitialized()
                const t = i.formatTarget(e)
                return i.getExpiration(t)
              }),
              (i.del = function (e) {
                if ((i.isInitialized(), i.has(e))) {
                  const t = i.formatTarget(e)
                  const r = i.getExpiration(t)
                  i.expirations.delete(t),
                  i.events.emit(Vi.deleted, { target: t, expiration: r })
                }
              }),
              (i.on = function (e, t) {
                i.events.on(e, t)
              }),
              (i.once = function (e, t) {
                i.events.once(e, t)
              }),
              (i.off = function (e, t) {
                i.events.off(e, t)
              }),
              (i.removeListener = function (e, t) {
                i.events.removeListener(e, t)
              }),
              (i.logger = (0, _.generateChildLogger)(n, i.name)),
              i
            )
          }
          return (
            (0, c.Z)(r, [
              {
                key: 'context',
                get: function () {
                  return (0, _.getLoggerContext)(this.logger)
                }
              },
              {
                key: 'storageKey',
                get: function () {
                  return this.storagePrefix + this.version + '//' + this.name
                }
              },
              {
                key: 'length',
                get: function () {
                  return this.expirations.size
                }
              },
              {
                key: 'keys',
                get: function () {
                  return Array.from(this.expirations.keys())
                }
              },
              {
                key: 'values',
                get: function () {
                  return Array.from(this.expirations.values())
                }
              },
              {
                key: 'formatTarget',
                value: function (e) {
                  if (typeof e === 'string') {
                    return (function (e) {
                      return Et('topic', e)
                    })(e)
                  }
                  if (typeof e === 'number') {
                    return (function (e) {
                      return Et('id', e)
                    })(e)
                  }
                  const t = Ht(
                    'UNKNOWN_TYPE',
                    'Target type: '.concat(typeof e)
                  ).message
                  throw new Error(t)
                }
              },
              {
                key: 'setExpirations',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e (t) {
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.core.storage.setItem(
                                    this.storageKey,
                                    t
                                  )
                                )
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
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'getExpirations',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e () {
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.core.storage.getItem(this.storageKey)
                                )
                              case 2:
                                return e.abrupt('return', e.sent)
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
                key: 'persist',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e () {
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.setExpirations(this.values)
                                )
                              case 2:
                                this.events.emit(Vi.sync)
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
                key: 'restore',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e () {
                      let t, r, n
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  this.getExpirations()
                                )
                              case 3:
                                if (
                                  !(typeof (t = e.sent) > 'u') &&
                                    t.length
                                ) {
                                  e.next = 6
                                  break
                                }
                                return e.abrupt('return')
                              case 6:
                                if (!this.expirations.size) {
                                  e.next = 9
                                  break
                                }
                                throw (
                                  ((r = Ht(
                                    'RESTORE_WILL_OVERRIDE',
                                    this.name
                                  )),
                                  (n = r.message),
                                  this.logger.error(n),
                                  new Error(n))
                                )
                              case 9:
                                ;(this.cached = t),
                                this.logger.debug(
                                  'Successfully Restored expirations for '.concat(
                                    this.name
                                  )
                                ),
                                this.logger.trace({
                                  type: 'method',
                                  method: 'restore',
                                  expirations: this.values
                                }),
                                (e.next = 15)
                                break
                              case 12:
                                ;(e.prev = 12),
                                (e.t0 = e.catch(0)),
                                this.logger.debug(
                                  'Failed to Restore expirations for '.concat(
                                    this.name
                                  )
                                ),
                                this.logger.error(e.t0)
                              case 15:
                              case 'end':
                                return e.stop()
                            }
                          }
                        },
                        e,
                        this,
                        [[0, 12]]
                      )
                    })
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'getExpiration',
                value: function (e) {
                  const t = this.expirations.get(e)
                  if (!t) {
                    const r = Ht(
                      'NO_MATCHING_KEY',
                      ''.concat(this.name, ': ').concat(e)
                    ).message
                    throw (this.logger.error(r), new Error(r))
                  }
                  return t
                }
              },
              {
                key: 'checkExpiry',
                value: function (e, t) {
                  const r = t.expiry
                    ;(0, L.toMiliseconds)(r) - Date.now() <= 0 &&
                      this.expire(e, t)
                }
              },
              {
                key: 'expire',
                value: function (e, t) {
                  this.expirations.delete(e),
                  this.events.emit(Vi.expired, { target: e, expiration: t })
                }
              },
              {
                key: 'checkExpirations',
                value: function () {
                  const e = this
                  this.expirations.forEach(function (t, r) {
                    return e.checkExpiry(r, t)
                  })
                }
              },
              {
                key: 'registerEventListeners',
                value: function () {
                  const e = this
                  this.core.heartbeat.on(
                    w.HEARTBEAT_EVENTS.pulse,
                    function () {
                      return e.checkExpirations()
                    }
                  ),
                  this.events.on(Vi.created, function (t) {
                    const r = Vi.created
                    e.logger.info('Emitting '.concat(r)),
                    e.logger.debug({ type: 'event', event: r, data: t }),
                    e.persist()
                  }),
                  this.events.on(Vi.expired, function (t) {
                    const r = Vi.expired
                    e.logger.info('Emitting '.concat(r)),
                    e.logger.debug({ type: 'event', event: r, data: t }),
                    e.persist()
                  }),
                  this.events.on(Vi.deleted, function (t) {
                    const r = Vi.deleted
                    e.logger.info('Emitting '.concat(r)),
                    e.logger.debug({ type: 'event', event: r, data: t }),
                    e.persist()
                  })
                }
              },
              {
                key: 'isInitialized',
                value: function () {
                  if (!this.initialized) {
                    const e = Ht('NOT_INITIALIZED', this.name).message
                    throw new Error(e)
                  }
                }
              }
            ]),
            r
          )
        })(N)
        const ko = Object.defineProperty
        const So = Object.getOwnPropertySymbols
        const Zo = Object.prototype.hasOwnProperty
        const Oo = Object.prototype.propertyIsEnumerable
        const Io = function (e, t, r) {
          return t in e
            ? ko(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: r
            })
            : (e[t] = r)
        }
        const Po = function (e, t) {
          for (var r in t || (t = {})) Zo.call(t, r) && Io(e, r, t[r])
          if (So) {
            let n
            const o = (0, i.Z)(So(t))
            try {
              for (o.s(); !(n = o.n()).done;) {
                r = n.value
                Oo.call(t, r) && Io(e, r, t[r])
              }
            } catch (s) {
              o.e(s)
            } finally {
              o.f()
            }
          }
          return e
        }
        const No = (function (e) {
          ;(0, h.Z)(r, e)
          const t = (0, d.Z)(r)
          function r (e) {
            let n
              ;(0, a.Z)(this, r),
            ((n = t.call(this, e)).protocol = ni),
            (n.version = ii),
            (n.name = oi),
            (n.events = new y.EventEmitter()),
            (n.initialized = !1),
            (n.on = function (e, t) {
              return n.events.on(e, t)
            }),
            (n.once = function (e, t) {
              return n.events.once(e, t)
            }),
            (n.off = function (e, t) {
              return n.events.off(e, t)
            }),
            (n.removeListener = function (e, t) {
              return n.events.removeListener(e, t)
            }),
            (n.projectId =
                  e === null || void 0 === e ? void 0 : e.projectId)
            const i =
                typeof (e === null || void 0 === e ? void 0 : e.logger) < 'u' &&
                typeof (e === null || void 0 === e ? void 0 : e.logger) !==
                  'string'
                  ? e.logger
                  : f()(
                    (0, _.getDefaultLoggerOptions)({
                      level:
                          (e === null || void 0 === e ? void 0 : e.logger) ||
                          ai.logger
                    })
                  )
            return (
              (n.logger = (0, _.generateChildLogger)(i, n.name)),
              (n.heartbeat = new w.HeartBeat()),
              (n.crypto = new Bi(
                (0, l.Z)(n),
                n.logger,
                e === null || void 0 === e ? void 0 : e.keychain
              )),
              (n.history = new xo((0, l.Z)(n), n.logger)),
              (n.expirer = new Eo((0, l.Z)(n), n.logger)),
              (n.storage =
                  e != null && e.storage
                    ? e.storage
                    : new b.ZP(
                      Po(
                        Po({}, ci),
                        e === null || void 0 === e
                          ? void 0
                          : e.storageOptions
                      )
                    )),
              (n.relayer = new po({
                core: (0, l.Z)(n),
                logger: n.logger,
                relayUrl: e === null || void 0 === e ? void 0 : e.relayUrl,
                projectId: n.projectId
              })),
              (n.pairing = new _o((0, l.Z)(n), n.logger)),
              n
            )
          }
          return (
            (0, c.Z)(
              r,
              [
                {
                  key: 'context',
                  get: function () {
                    return (0, _.getLoggerContext)(this.logger)
                  }
                },
                {
                  key: 'start',
                  value: (function () {
                    const e = (0, s.Z)(
                      (0, o.Z)().mark(function e () {
                        return (0, o.Z)().wrap(
                          function (e) {
                            for (;;) {
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (((e.t0 = this.initialized), e.t0)) {
                                    e.next = 4
                                    break
                                  }
                                  return (e.next = 4), this.initialize()
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
                  key: 'initialize',
                  value: (function () {
                    const e = (0, s.Z)(
                      (0, o.Z)().mark(function e () {
                        return (0, o.Z)().wrap(
                          function (e) {
                            for (;;) {
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    this.logger.trace('Initialized'),
                                    (e.prev = 1),
                                    (e.next = 4),
                                    this.crypto.init()
                                  )
                                case 4:
                                  return (e.next = 6), this.history.init()
                                case 6:
                                  return (e.next = 8), this.expirer.init()
                                case 8:
                                  return (e.next = 10), this.relayer.init()
                                case 10:
                                  return (e.next = 12), this.heartbeat.init()
                                case 12:
                                  return (e.next = 14), this.pairing.init()
                                case 14:
                                  ;(this.initialized = !0),
                                  this.logger.info(
                                    'Core Initialization Success'
                                  ),
                                  (e.next = 21)
                                  break
                                case 18:
                                  throw (
                                    ((e.prev = 18),
                                    (e.t0 = e.catch(1)),
                                    this.logger.warn(
                                      'Core Initialization Failure at epoch '.concat(
                                        Date.now()
                                      ),
                                      e.t0
                                    ),
                                    this.logger.error(e.t0.message),
                                    e.t0)
                                  )
                                case 21:
                                case 'end':
                                  return e.stop()
                              }
                            }
                          },
                          e,
                          this,
                          [[1, 18]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })()
                }
              ],
              [
                {
                  key: 'init',
                  value: (function () {
                    const e = (0, s.Z)(
                      (0, o.Z)().mark(function e (t) {
                        let n
                        return (0, o.Z)().wrap(function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = new r(t)), (e.next = 3), n.initialize()
                                )
                              case 3:
                                return e.abrupt('return', n)
                              case 4:
                              case 'end':
                                return e.stop()
                            }
                          }
                        }, e)
                      })
                    )
                    return function (t) {
                      return e.apply(this, arguments)
                    }
                  })()
                }
              ]
            ),
            r
          )
        })(E)
        const Ro = No
        const To = 'wc'
        const Ao = 2
        const Uo = 'client'
        const jo = ''.concat(To, '@').concat(Ao, ':').concat(Uo, ':')
        const Lo = {
          name: Uo,
          logger: 'error',
          controller: !1,
          relayUrl: 'wss://relay.walletconnect.com'
        }
        const Mo = 'proposal'
        const Co = (L.THIRTY_DAYS, 'session')
        const Do = L.SEVEN_DAYS
        const zo = 'engine'
        const qo = {
          wc_sessionPropose: {
            req: { ttl: L.FIVE_MINUTES, prompt: !0, tag: 1100 },
            res: { ttl: L.FIVE_MINUTES, prompt: !1, tag: 1101 }
          },
          wc_sessionSettle: {
            req: { ttl: L.FIVE_MINUTES, prompt: !1, tag: 1102 },
            res: { ttl: L.FIVE_MINUTES, prompt: !1, tag: 1103 }
          },
          wc_sessionUpdate: {
            req: { ttl: L.ONE_DAY, prompt: !1, tag: 1104 },
            res: { ttl: L.ONE_DAY, prompt: !1, tag: 1105 }
          },
          wc_sessionExtend: {
            req: { ttl: L.ONE_DAY, prompt: !1, tag: 1106 },
            res: { ttl: L.ONE_DAY, prompt: !1, tag: 1107 }
          },
          wc_sessionRequest: {
            req: { ttl: L.FIVE_MINUTES, prompt: !0, tag: 1108 },
            res: { ttl: L.FIVE_MINUTES, prompt: !1, tag: 1109 }
          },
          wc_sessionEvent: {
            req: { ttl: L.FIVE_MINUTES, prompt: !0, tag: 1110 },
            res: { ttl: L.FIVE_MINUTES, prompt: !1, tag: 1111 }
          },
          wc_sessionDelete: {
            req: { ttl: L.ONE_DAY, prompt: !1, tag: 1112 },
            res: { ttl: L.ONE_DAY, prompt: !1, tag: 1113 }
          },
          wc_sessionPing: {
            req: { ttl: L.THIRTY_SECONDS, prompt: !1, tag: 1114 },
            res: { ttl: L.THIRTY_SECONDS, prompt: !1, tag: 1115 }
          }
        }
        const Ho = { min: L.FIVE_MINUTES, max: L.SEVEN_DAYS }
        const Vo = 'request'
        const Ko = Object.defineProperty
        const Fo = Object.defineProperties
        const Bo = Object.getOwnPropertyDescriptors
        const Wo = Object.getOwnPropertySymbols
        const Go = Object.prototype.hasOwnProperty
        const Yo = Object.prototype.propertyIsEnumerable
        const Jo = function (e, t, r) {
          return t in e
            ? Ko(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: r
            })
            : (e[t] = r)
        }
        const Xo = function (e, t) {
          for (var r in t || (t = {})) Go.call(t, r) && Jo(e, r, t[r])
          if (Wo) {
            let n
            const o = (0, i.Z)(Wo(t))
            try {
              for (o.s(); !(n = o.n()).done;) {
                r = n.value
                Yo.call(t, r) && Jo(e, r, t[r])
              }
            } catch (s) {
              o.e(s)
            } finally {
              o.f()
            }
          }
          return e
        }
        const $o = function (e, t) {
          return Fo(e, Bo(t))
        }
        const Qo = (function (e) {
          ;(0, h.Z)(r, e)
          const t = (0, d.Z)(r)
          function r (e) {
            let n
            return (
              (0, a.Z)(this, r),
              ((n = t.call(this, e)).name = zo),
              (n.events = new (m())()),
              (n.initialized = !1),
              (n.ignoredPayloadTypes = [He]),
              (n.init = (0, s.Z)(
                (0, o.Z)().mark(function e () {
                  return (0, o.Z)().wrap(function (e) {
                    for (;;) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (((e.t0 = n.initialized), e.t0)) {
                            e.next = 8
                            break
                          }
                          return (e.next = 4), n.cleanup()
                        case 4:
                          n.registerRelayerEvents(),
                          n.registerExpirerEvents(),
                          n.client.core.pairing.register({
                            methods: Object.keys(qo)
                          }),
                          (n.initialized = !0)
                        case 8:
                        case 'end':
                          return e.stop()
                      }
                    }
                  }, e)
                })
              )),
              (n.connect = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t) {
                    let r,
                      i,
                      a,
                      c,
                      u,
                      f,
                      l,
                      p,
                      h,
                      d,
                      v,
                      g,
                      y,
                      m,
                      b,
                      w,
                      _,
                      x,
                      E
                    return (0, o.Z)().wrap(function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              n.isInitialized(),
                              (e.next = 3),
                              n.isValidConnect(t)
                            )
                          case 3:
                            if (
                              ((r = t.pairingTopic),
                              (i = t.requiredNamespaces),
                              (a = t.relays),
                              (f = !1),
                              (c = r) &&
                                  (f =
                                    n.client.core.pairing.pairings.get(
                                      c
                                    ).active),
                              c && f)
                            ) {
                              e.next = 12
                              break
                            }
                            return (
                              (e.next = 8), n.client.core.pairing.create()
                            )
                          case 8:
                            ;(l = e.sent),
                            (p = l.topic),
                            (h = l.uri),
                            (c = p),
                            (u = h)
                          case 12:
                            return (
                              (e.next = 14),
                              n.client.core.crypto.generateKeyPair()
                            )
                          case 14:
                            if (
                              ((d = e.sent),
                              (v = {
                                requiredNamespaces: i,
                                relays:
                                    a !== null && void 0 !== a
                                      ? a
                                      : [{ protocol: mi }],
                                proposer: {
                                  publicKey: d,
                                  metadata: n.client.metadata
                                }
                              }),
                              (g = _t()),
                              (y = g.reject),
                              (m = g.resolve),
                              (b = g.done),
                              n.events.once(
                                St('session_connect'),
                                (function () {
                                  const e = (0, s.Z)(
                                    (0, o.Z)().mark(function e (t) {
                                      let r, i, s
                                      return (0, o.Z)().wrap(function (e) {
                                        for (;;) {
 switch ((e.prev = e.next)) {
                                          case 0:
                                            if (
                                              ((r = t.error),
                                              (i = t.session),
                                              !r)
                                            ) {
                                              e.next = 5
                                              break
                                            }
                                            y(r), (e.next = 17)
                                            break
                                          case 5:
                                            if (!i) {
                                              e.next = 17
                                              break
                                            }
                                            return (
                                              (i.self.publicKey = d),
                                              (s = $o(Xo({}, i), {
                                                requiredNamespaces:
                                                      i.requiredNamespaces
                                              })),
                                              (e.next = 10),
                                              n.client.session.set(
                                                i.topic,
                                                s
                                              )
                                            )
                                          case 10:
                                            return (
                                              (e.next = 12),
                                              n.setExpiry(i.topic, i.expiry)
                                            )
                                          case 12:
                                            if (((e.t0 = c), !e.t0)) {
                                              e.next = 16
                                              break
                                            }
                                            return (
                                              (e.next = 16),
                                              n.client.core.pairing.updateMetadata(
                                                {
                                                  topic: c,
                                                  metadata: i.peer.metadata
                                                }
                                              )
                                            )
                                          case 16:
                                            m(s)
                                          case 17:
                                          case 'end':
                                            return e.stop()
                                        } 
}
                                      }, e)
                                    })
                                  )
                                  return function (t) {
                                    return e.apply(this, arguments)
                                  }
                                })()
                              ),
                              c)
                            ) {
                              e.next = 23
                              break
                            }
                            throw (
                              ((w = Ht(
                                'NO_MATCHING_KEY',
                                'connect() pairing topic: '.concat(c)
                              )),
                              (_ = w.message),
                              new Error(_))
                            )
                          case 23:
                            return (
                              (e.next = 25),
                              n.sendRequest(c, 'wc_sessionPropose', v)
                            )
                          case 25:
                            return (
                              (x = e.sent),
                              (E = bt(L.FIVE_MINUTES)),
                              (e.next = 29),
                              n.setProposal(x, Xo({ id: x, expiry: E }, v))
                            )
                          case 29:
                            return e.abrupt('return', { uri: u, approval: b })
                          case 30:
                          case 'end':
                            return e.stop()
                        }
                      }
                    }, e)
                  })
                )
                return function (t) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.pair = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t) {
                    return (0, o.Z)().wrap(function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              n.isInitialized(),
                              (e.next = 3),
                              n.client.core.pairing.pair(t)
                            )
                          case 3:
                            return e.abrupt('return', e.sent)
                          case 4:
                          case 'end':
                            return e.stop()
                        }
                      }
                    }, e)
                  })
                )
                return function (t) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.approve = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t) {
                    let r, i, s, a, c, u, f, l, p, h, d, v, g, y, m, b, w
                    return (0, o.Z)().wrap(function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              n.isInitialized(),
                              (e.next = 3),
                              n.isValidApprove(t)
                            )
                          case 3:
                            return (
                              (r = t.id),
                              (i = t.relayProtocol),
                              (s = t.namespaces),
                              (a = n.client.proposal.get(r)),
                              (c = a.pairingTopic),
                              (u = a.proposer),
                              Ft((f = a.requiredNamespaces)) ||
                                  ((f = Dt(s, 'approve()')),
                                  n.client.proposal.set(
                                    r,
                                    $o(Xo({}, a), { requiredNamespaces: f })
                                  )),
                              (e.next = 8),
                              n.client.core.crypto.generateKeyPair()
                            )
                          case 8:
                            return (
                              (l = e.sent),
                              (p = u.publicKey),
                              (e.next = 12),
                              n.client.core.crypto.generateSharedKey(l, p)
                            )
                          case 12:
                            return (
                              (h = e.sent),
                              (d = {
                                relay: {
                                  protocol:
                                      i !== null && void 0 !== i ? i : 'irn'
                                },
                                namespaces: s,
                                requiredNamespaces: f,
                                controller: {
                                  publicKey: l,
                                  metadata: n.client.metadata
                                },
                                expiry: bt(Do)
                              }),
                              (e.next = 16),
                              n.client.core.relayer.subscribe(h)
                            )
                          case 16:
                            return (
                              (e.next = 18),
                              n.sendRequest(h, 'wc_sessionSettle', d)
                            )
                          case 18:
                            return (
                              (v = e.sent),
                              (g = _t()),
                              (y = g.done),
                              (m = g.resolve),
                              (b = g.reject),
                              n.events.once(
                                St('session_approve', v),
                                function (e) {
                                  const t = e.error
                                  t ? b(t) : m(n.client.session.get(h))
                                }
                              ),
                              (w = $o(Xo({}, d), {
                                topic: h,
                                acknowledged: !1,
                                self: d.controller,
                                peer: {
                                  publicKey: u.publicKey,
                                  metadata: u.metadata
                                },
                                controller: l
                              })),
                              (e.next = 27),
                              n.client.session.set(h, w)
                            )
                          case 27:
                            return (e.next = 29), n.setExpiry(h, bt(Do))
                          case 29:
                            if (((e.t0 = c), !e.t0)) {
                              e.next = 33
                              break
                            }
                            return (
                              (e.next = 33),
                              n.client.core.pairing.updateMetadata({
                                topic: c,
                                metadata: w.peer.metadata
                              })
                            )
                          case 33:
                            if (((e.t1 = c && r), !e.t1)) {
                              e.next = 41
                              break
                            }
                            return (
                              (e.next = 37),
                              n.sendResult(r, c, {
                                relay: {
                                  protocol:
                                      i !== null && void 0 !== i ? i : 'irn'
                                },
                                responderPublicKey: l
                              })
                            )
                          case 37:
                            return (
                              (e.next = 39),
                              n.client.proposal.delete(
                                r,
                                Vt('USER_DISCONNECTED')
                              )
                            )
                          case 39:
                            return (
                              (e.next = 41),
                              n.client.core.pairing.activate({ topic: c })
                            )
                          case 41:
                            return e.abrupt('return', {
                              topic: h,
                              acknowledged: y
                            })
                          case 42:
                          case 'end':
                            return e.stop()
                        }
                      }
                    }, e)
                  })
                )
                return function (t) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.reject = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t) {
                    let r, i, s, a
                    return (0, o.Z)().wrap(function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              n.isInitialized(),
                              (e.next = 3),
                              n.isValidReject(t)
                            )
                          case 3:
                            if (
                              ((r = t.id),
                              (i = t.reason),
                              (s = n.client.proposal.get(r)),
                              (a = s.pairingTopic),
                              (e.t0 = a),
                              !e.t0)
                            ) {
                              e.next = 10
                              break
                            }
                            return (e.next = 8), n.sendError(r, a, i)
                          case 8:
                            return (
                              (e.next = 10),
                              n.client.proposal.delete(
                                r,
                                Vt('USER_DISCONNECTED')
                              )
                            )
                          case 10:
                          case 'end':
                            return e.stop()
                        }
                      }
                    }, e)
                  })
                )
                return function (t) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.update = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t) {
                    let r, i, s, a, c, u, f
                    return (0, o.Z)().wrap(function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              n.isInitialized(),
                              (e.next = 3),
                              n.isValidUpdate(t)
                            )
                          case 3:
                            return (
                              (r = t.topic),
                              (i = t.namespaces),
                              (e.next = 7),
                              n.sendRequest(r, 'wc_sessionUpdate', {
                                namespaces: i
                              })
                            )
                          case 7:
                            return (
                              (s = e.sent),
                              (a = _t()),
                              (c = a.done),
                              (u = a.resolve),
                              (f = a.reject),
                              n.events.once(
                                St('session_update', s),
                                function (e) {
                                  const t = e.error
                                  t ? f(t) : u()
                                }
                              ),
                              (e.next = 15),
                              n.client.session.update(r, { namespaces: i })
                            )
                          case 15:
                            return e.abrupt('return', { acknowledged: c })
                          case 16:
                          case 'end':
                            return e.stop()
                        }
                      }
                    }, e)
                  })
                )
                return function (t) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.extend = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t) {
                    let r, i, s, a, c, u
                    return (0, o.Z)().wrap(function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              n.isInitialized(),
                              (e.next = 3),
                              n.isValidExtend(t)
                            )
                          case 3:
                            return (
                              (r = t.topic),
                              (e.next = 6),
                              n.sendRequest(r, 'wc_sessionExtend', {})
                            )
                          case 6:
                            return (
                              (i = e.sent),
                              (s = _t()),
                              (a = s.done),
                              (c = s.resolve),
                              (u = s.reject),
                              n.events.once(
                                St('session_extend', i),
                                function (e) {
                                  const t = e.error
                                  t ? u(t) : c()
                                }
                              ),
                              (e.next = 14),
                              n.setExpiry(r, bt(Do))
                            )
                          case 14:
                            return e.abrupt('return', { acknowledged: a })
                          case 15:
                          case 'end':
                            return e.stop()
                        }
                      }
                    }, e)
                  })
                )
                return function (t) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.request = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t) {
                    let r, i, s, a, c, u, f, l, p
                    return (0, o.Z)().wrap(function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              n.isInitialized(),
                              (e.next = 3),
                              n.isValidRequest(t)
                            )
                          case 3:
                            return (
                              (r = t.chainId),
                              (i = t.request),
                              (s = t.topic),
                              (a = t.expiry),
                              (e.next = 9),
                              n.sendRequest(
                                s,
                                'wc_sessionRequest',
                                { request: i, chainId: r },
                                a
                              )
                            )
                          case 9:
                            return (
                              (c = e.sent),
                              (u = _t(a)),
                              (f = u.done),
                              (l = u.resolve),
                              (p = u.reject),
                              n.events.once(
                                St('session_request', c),
                                function (e) {
                                  const t = e.error
                                  const r = e.result
                                  t ? p(t) : l(r)
                                }
                              ),
                              (e.next = 17),
                              f()
                            )
                          case 17:
                            return e.abrupt('return', e.sent)
                          case 18:
                          case 'end':
                            return e.stop()
                        }
                      }
                    }, e)
                  })
                )
                return function (t) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.respond = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t) {
                    let r, i, s
                    return (0, o.Z)().wrap(function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              n.isInitialized(),
                              (e.next = 3),
                              n.isValidRespond(t)
                            )
                          case 3:
                            if (
                              ((r = t.topic),
                              (i = t.response),
                              (s = i.id),
                              !(0, mr.isJsonRpcResult)(i))
                            ) {
                              e.next = 9
                              break
                            }
                            return (e.next = 7), n.sendResult(s, r, i.result)
                          case 7:
                            e.next = 13
                            break
                          case 9:
                            if (((e.t0 = (0, mr.isJsonRpcError)(i)), !e.t0)) {
                              e.next = 13
                              break
                            }
                            return (e.next = 13), n.sendError(s, r, i.error)
                          case 13:
                            n.deletePendingSessionRequest(t.response.id, {
                              message: 'fulfilled',
                              code: 0
                            })
                          case 14:
                          case 'end':
                            return e.stop()
                        }
                      }
                    }, e)
                  })
                )
                return function (t) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.ping = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t) {
                    let r, i, s, a, c, u
                    return (0, o.Z)().wrap(function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              n.isInitialized(),
                              (e.next = 3),
                              n.isValidPing(t)
                            )
                          case 3:
                            if (
                              ((r = t.topic),
                              !n.client.session.keys.includes(r))
                            ) {
                              e.next = 17
                              break
                            }
                            return (
                              (e.next = 7),
                              n.sendRequest(r, 'wc_sessionPing', {})
                            )
                          case 7:
                            return (
                              (i = e.sent),
                              (s = _t()),
                              (a = s.done),
                              (c = s.resolve),
                              (u = s.reject),
                              n.events.once(
                                St('session_ping', i),
                                function (e) {
                                  const t = e.error
                                  t ? u(t) : c()
                                }
                              ),
                              (e.next = 15),
                              a()
                            )
                          case 15:
                            e.next = 21
                            break
                          case 17:
                            if (
                              ((e.t0 =
                                  n.client.core.pairing.pairings.keys.includes(
                                    r
                                  )),
                              !e.t0)
                            ) {
                              e.next = 21
                              break
                            }
                            return (
                              (e.next = 21),
                              n.client.core.pairing.ping({ topic: r })
                            )
                          case 21:
                          case 'end':
                            return e.stop()
                        }
                      }
                    }, e)
                  })
                )
                return function (t) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.emit = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t) {
                    let r, i, s
                    return (0, o.Z)().wrap(function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              n.isInitialized(),
                              (e.next = 3),
                              n.isValidEmit(t)
                            )
                          case 3:
                            return (
                              (r = t.topic),
                              (i = t.event),
                              (s = t.chainId),
                              (e.next = 6),
                              n.sendRequest(r, 'wc_sessionEvent', {
                                event: i,
                                chainId: s
                              })
                            )
                          case 6:
                          case 'end':
                            return e.stop()
                        }
                      }
                    }, e)
                  })
                )
                return function (t) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.disconnect = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t) {
                    let r
                    return (0, o.Z)().wrap(function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              n.isInitialized(),
                              (e.next = 3),
                              n.isValidDisconnect(t)
                            )
                          case 3:
                            if (
                              ((r = t.topic),
                              !n.client.session.keys.includes(r))
                            ) {
                              e.next = 11
                              break
                            }
                            return (
                              (e.next = 7),
                              n.sendRequest(
                                r,
                                'wc_sessionDelete',
                                Vt('USER_DISCONNECTED')
                              )
                            )
                          case 7:
                            return (e.next = 9), n.deleteSession(r)
                          case 9:
                            e.next = 13
                            break
                          case 11:
                            return (
                              (e.next = 13),
                              n.client.core.pairing.disconnect({ topic: r })
                            )
                          case 13:
                          case 'end':
                            return e.stop()
                        }
                      }
                    }, e)
                  })
                )
                return function (t) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.find = function (e) {
                return (
                  n.isInitialized(),
                  n.client.session.getAll().filter(function (t) {
                    return (function (e, t) {
                      const r = t.requiredNamespaces
                      const n = Object.keys(e.namespaces)
                      const i = Object.keys(r)
                      let o = !0
                      return (
                        !!gt(i, n) &&
                          (n.forEach(function (t) {
                            const n = e.namespaces[t]
                            const i = n.accounts
                            const s = n.methods
                            const a = n.events
                            const c = Ct(i)
                            const u = r[t]
                            ;(!gt(u.chains, c) ||
                              !gt(u.methods, s) ||
                              !gt(u.events, a)) &&
                              (o = !1)
                          }),
                          o)
                      )
                    })(t, e)
                  })
                )
              }),
              (n.getPendingSessionRequests = function () {
                return n.isInitialized(), n.client.pendingRequest.getAll()
              }),
              (n.deleteSession = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t, r) {
                    let i, s
                    return (0, o.Z)().wrap(function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (i = n.client.session.get(t)),
                              (s = i.self),
                              (e.next = 3),
                              n.client.core.relayer.unsubscribe(t)
                            )
                          case 3:
                            return (
                              (e.next = 5),
                              Promise.all([
                                n.client.session.delete(
                                  t,
                                  Vt('USER_DISCONNECTED')
                                ),
                                n.client.core.crypto.deleteKeyPair(
                                  s.publicKey
                                ),
                                n.client.core.crypto.deleteSymKey(t),
                                r
                                  ? Promise.resolve()
                                  : n.client.core.expirer.del(t)
                              ])
                            )
                          case 5:
                          case 'end':
                            return e.stop()
                        }
                      }
                    }, e)
                  })
                )
                return function (t, r) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.deleteProposal = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t, r) {
                    return (0, o.Z)().wrap(function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              Promise.all([
                                n.client.proposal.delete(
                                  t,
                                  Vt('USER_DISCONNECTED')
                                ),
                                r
                                  ? Promise.resolve()
                                  : n.client.core.expirer.del(t)
                              ])
                            )
                          case 2:
                          case 'end':
                            return e.stop()
                        }
                      }
                    }, e)
                  })
                )
                return function (t, r) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.deletePendingSessionRequest = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t, r) {
                    let i
                    const s = arguments
                    return (0, o.Z)().wrap(function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (i = s.length > 2 && void 0 !== s[2] && s[2]),
                              (e.next = 3),
                              Promise.all([
                                n.client.pendingRequest.delete(t, r),
                                i
                                  ? Promise.resolve()
                                  : n.client.core.expirer.del(t)
                              ])
                            )
                          case 3:
                          case 'end':
                            return e.stop()
                        }
                      }
                    }, e)
                  })
                )
                return function (t, r) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.setExpiry = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t, r) {
                    return (0, o.Z)().wrap(function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((e.t0 = n.client.session.keys.includes(t)),
                              !e.t0)
                            ) {
                              e.next = 4
                              break
                            }
                            return (
                              (e.next = 4),
                              n.client.session.update(t, { expiry: r })
                            )
                          case 4:
                            n.client.core.expirer.set(t, r)
                          case 5:
                          case 'end':
                            return e.stop()
                        }
                      }
                    }, e)
                  })
                )
                return function (t, r) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.setProposal = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t, r) {
                    return (0, o.Z)().wrap(function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), n.client.proposal.set(t, r)
                          case 2:
                            n.client.core.expirer.set(t, r.expiry)
                          case 3:
                          case 'end':
                            return e.stop()
                        }
                      }
                    }, e)
                  })
                )
                return function (t, r) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.setPendingSessionRequest = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t) {
                    let r, i, s, a
                    return (0, o.Z)().wrap(function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (r = qo.wc_sessionRequest.req.ttl),
                              (i = t.id),
                              (s = t.topic),
                              (a = t.params),
                              (e.next = 3),
                              n.client.pendingRequest.set(i, {
                                id: i,
                                topic: s,
                                params: a
                              })
                            )
                          case 3:
                            r && n.client.core.expirer.set(i, bt(r))
                          case 4:
                          case 'end':
                            return e.stop()
                        }
                      }
                    }, e)
                  })
                )
                return function (t) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.sendRequest = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t, r, i, s) {
                    let a, c, u
                    return (0, o.Z)().wrap(function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = (0, mr.formatJsonRpcRequest)(r, i)),
                              (e.next = 3),
                              n.client.core.crypto.encode(t, a)
                            )
                          case 3:
                            return (
                              (c = e.sent),
                              (u = qo[r].req),
                              e.abrupt(
                                'return',
                                (s && (u.ttl = s),
                                n.client.core.history.set(t, a),
                                n.client.core.relayer.publish(t, c, u),
                                a.id)
                              )
                            )
                          case 6:
                          case 'end':
                            return e.stop()
                        }
                      }
                    }, e)
                  })
                )
                return function (t, r, n, i) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.sendResult = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t, r, i) {
                    let s, a, c, u
                    return (0, o.Z)().wrap(function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (s = (0, mr.formatJsonRpcResult)(t, i)),
                              (e.next = 3),
                              n.client.core.crypto.encode(r, s)
                            )
                          case 3:
                            return (
                              (a = e.sent),
                              (e.next = 6),
                              n.client.core.history.get(r, t)
                            )
                          case 6:
                            return (
                              (c = e.sent),
                              (u = qo[c.request.method].res),
                              n.client.core.relayer.publish(r, a, u),
                              (e.next = 11),
                              n.client.core.history.resolve(s)
                            )
                          case 11:
                          case 'end':
                            return e.stop()
                        }
                      }
                    }, e)
                  })
                )
                return function (t, r, n) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.sendError = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t, r, i) {
                    let s, a, c, u
                    return (0, o.Z)().wrap(function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (s = (0, mr.formatJsonRpcError)(t, i)),
                              (e.next = 3),
                              n.client.core.crypto.encode(r, s)
                            )
                          case 3:
                            return (
                              (a = e.sent),
                              (e.next = 6),
                              n.client.core.history.get(r, t)
                            )
                          case 6:
                            return (
                              (c = e.sent),
                              (u = qo[c.request.method].res),
                              n.client.core.relayer.publish(r, a, u),
                              (e.next = 11),
                              n.client.core.history.resolve(s)
                            )
                          case 11:
                          case 'end':
                            return e.stop()
                        }
                      }
                    }, e)
                  })
                )
                return function (t, r, n) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.cleanup = (0, s.Z)(
                (0, o.Z)().mark(function e () {
                  let t, r
                  return (0, o.Z)().wrap(function (e) {
                    for (;;) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = []),
                            (r = []),
                            n.client.session.getAll().forEach(function (e) {
                              wt(e.expiry) && t.push(e.topic)
                            }),
                            n.client.proposal.getAll().forEach(function (e) {
                              wt(e.expiry) && r.push(e.id)
                            }),
                            (e.next = 5),
                            Promise.all(
                              [].concat(
                                (0, p.Z)(
                                  t.map(function (e) {
                                    return n.deleteSession(e)
                                  })
                                ),
                                (0, p.Z)(
                                  r.map(function (e) {
                                    return n.deleteProposal(e)
                                  })
                                )
                              )
                            )
                          )
                        case 5:
                        case 'end':
                          return e.stop()
                      }
                    }
                  }, e)
                })
              )),
              (n.onRelayEventRequest = function (e) {
                const t = e.topic
                const r = e.payload
                const i = r.method
                switch (i) {
                  case 'wc_sessionPropose':
                    return n.onSessionProposeRequest(t, r)
                  case 'wc_sessionSettle':
                    return n.onSessionSettleRequest(t, r)
                  case 'wc_sessionUpdate':
                    return n.onSessionUpdateRequest(t, r)
                  case 'wc_sessionExtend':
                    return n.onSessionExtendRequest(t, r)
                  case 'wc_sessionPing':
                    return n.onSessionPingRequest(t, r)
                  case 'wc_sessionDelete':
                    return n.onSessionDeleteRequest(t, r)
                  case 'wc_sessionRequest':
                    return n.onSessionRequest(t, r)
                  case 'wc_sessionEvent':
                    return n.onSessionEventRequest(t, r)
                  default:
                    return n.client.logger.info(
                      'Unsupported request method '.concat(i)
                    )
                }
              }),
              (n.onRelayEventResponse = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t) {
                    let r, i, s
                    return (0, o.Z)().wrap(function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (r = t.topic),
                              (i = t.payload),
                              (e.next = 4),
                              n.client.core.history.get(r, i.id)
                            )
                          case 4:
                            ;(s = e.sent.request.method),
                            (e.t0 = s),
                            (e.next =
                                  e.t0 === 'wc_sessionPropose'
                                    ? 8
                                    : e.t0 === 'wc_sessionSettle'
                                      ? 9
                                      : e.t0 === 'wc_sessionUpdate'
                                        ? 10
                                        : e.t0 === 'wc_sessionExtend'
                                          ? 11
                                          : e.t0 === 'wc_sessionPing'
                                            ? 12
                                            : e.t0 === 'wc_sessionRequest'
                                              ? 13
                                              : 14)
                            break
                          case 8:
                            return e.abrupt(
                              'return',
                              n.onSessionProposeResponse(r, i)
                            )
                          case 9:
                            return e.abrupt(
                              'return',
                              n.onSessionSettleResponse(r, i)
                            )
                          case 10:
                            return e.abrupt(
                              'return',
                              n.onSessionUpdateResponse(r, i)
                            )
                          case 11:
                            return e.abrupt(
                              'return',
                              n.onSessionExtendResponse(r, i)
                            )
                          case 12:
                            return e.abrupt(
                              'return',
                              n.onSessionPingResponse(r, i)
                            )
                          case 13:
                            return e.abrupt(
                              'return',
                              n.onSessionRequestResponse(r, i)
                            )
                          case 14:
                            return e.abrupt(
                              'return',
                              n.client.logger.info(
                                'Unsupported response method '.concat(s)
                              )
                            )
                          case 15:
                          case 'end':
                            return e.stop()
                        }
                      }
                    }, e)
                  })
                )
                return function (t) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.onSessionProposeRequest = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t, r) {
                    let i, s, a, c
                    return (0, o.Z)().wrap(
                      function (e) {
                        for (;;) {
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (i = r.params),
                                (s = r.id),
                                (e.prev = 1),
                                n.isValidConnect(Xo({}, r.params)),
                                (a = bt(L.FIVE_MINUTES)),
                                (c = Xo(
                                  { id: s, pairingTopic: t, expiry: a },
                                  i
                                )),
                                (e.next = 6),
                                n.setProposal(s, c)
                              )
                            case 6:
                              n.client.events.emit('session_proposal', {
                                id: s,
                                params: c
                              }),
                              (e.next = 14)
                              break
                            case 9:
                              return (
                                (e.prev = 9),
                                (e.t0 = e.catch(1)),
                                (e.next = 13),
                                n.sendError(s, t, e.t0)
                              )
                            case 13:
                              n.client.logger.error(e.t0)
                            case 14:
                            case 'end':
                              return e.stop()
                          }
                        }
                      },
                      e,
                      null,
                      [[1, 9]]
                    )
                  })
                )
                return function (t, r) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.onSessionProposeResponse = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t, r) {
                    let i, s, a, c, u, f, l
                    return (0, o.Z)().wrap(function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((i = r.id), !(0, mr.isJsonRpcResult)(r))) {
                              e.next = 22
                              break
                            }
                            return (
                              (s = r.result),
                              n.client.logger.trace({
                                type: 'method',
                                method: 'onSessionProposeResponse',
                                result: s
                              }),
                              (a = n.client.proposal.get(i)),
                              n.client.logger.trace({
                                type: 'method',
                                method: 'onSessionProposeResponse',
                                proposal: a
                              }),
                              (c = a.proposer.publicKey),
                              n.client.logger.trace({
                                type: 'method',
                                method: 'onSessionProposeResponse',
                                selfPublicKey: c
                              }),
                              (u = s.responderPublicKey),
                              n.client.logger.trace({
                                type: 'method',
                                method: 'onSessionProposeResponse',
                                peerPublicKey: u
                              }),
                              (e.next = 12),
                              n.client.core.crypto.generateSharedKey(c, u)
                            )
                          case 12:
                            return (
                              (f = e.sent),
                              n.client.logger.trace({
                                type: 'method',
                                method: 'onSessionProposeResponse',
                                sessionTopic: f
                              }),
                              (e.next = 16),
                              n.client.core.relayer.subscribe(f)
                            )
                          case 16:
                            return (
                              (l = e.sent),
                              n.client.logger.trace({
                                type: 'method',
                                method: 'onSessionProposeResponse',
                                subscriptionId: l
                              }),
                              (e.next = 20),
                              n.client.core.pairing.activate({ topic: t })
                            )
                          case 20:
                            e.next = 27
                            break
                          case 22:
                            if (((e.t0 = (0, mr.isJsonRpcError)(r)), !e.t0)) {
                              e.next = 27
                              break
                            }
                            return (
                              (e.next = 26),
                              n.client.proposal.delete(
                                i,
                                Vt('USER_DISCONNECTED')
                              )
                            )
                          case 26:
                            n.events.emit(St('session_connect'), {
                              error: r.error
                            })
                          case 27:
                          case 'end':
                            return e.stop()
                        }
                      }
                    }, e)
                  })
                )
                return function (t, r) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.onSessionSettleRequest = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t, r) {
                    let i, s, a, c, u, f, l, p, h
                    return (0, o.Z)().wrap(
                      function (e) {
                        for (;;) {
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (i = r.id),
                                (s = r.params),
                                (e.prev = 1),
                                n.isValidSessionSettleRequest(s),
                                (a = r.params),
                                (c = a.relay),
                                (u = a.controller),
                                (f = a.expiry),
                                (l = a.namespaces),
                                (p = a.requiredNamespaces),
                                (h = {
                                  topic: t,
                                  relay: c,
                                  expiry: f,
                                  namespaces: l,
                                  acknowledged: !0,
                                  requiredNamespaces: p,
                                  controller: u.publicKey,
                                  self: {
                                    publicKey: '',
                                    metadata: n.client.metadata
                                  },
                                  peer: {
                                    publicKey: u.publicKey,
                                    metadata: u.metadata
                                  }
                                }),
                                (e.next = 6),
                                n.sendResult(r.id, t, !0)
                              )
                            case 6:
                              n.events.emit(St('session_connect'), {
                                session: h
                              }),
                              (e.next = 14)
                              break
                            case 9:
                              return (
                                (e.prev = 9),
                                (e.t0 = e.catch(1)),
                                (e.next = 13),
                                n.sendError(i, t, e.t0)
                              )
                            case 13:
                              n.client.logger.error(e.t0)
                            case 14:
                            case 'end':
                              return e.stop()
                          }
                        }
                      },
                      e,
                      null,
                      [[1, 9]]
                    )
                  })
                )
                return function (t, r) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.onSessionSettleResponse = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t, r) {
                    let i
                    return (0, o.Z)().wrap(function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((i = r.id), !(0, mr.isJsonRpcResult)(r))) {
                              e.next = 7
                              break
                            }
                            return (
                              (e.next = 4),
                              n.client.session.update(t, { acknowledged: !0 })
                            )
                          case 4:
                            n.events.emit(St('session_approve', i), {}),
                            (e.next = 12)
                            break
                          case 7:
                            if (((e.t0 = (0, mr.isJsonRpcError)(r)), !e.t0)) {
                              e.next = 12
                              break
                            }
                            return (
                              (e.next = 11),
                              n.client.session.delete(
                                t,
                                Vt('USER_DISCONNECTED')
                              )
                            )
                          case 11:
                            n.events.emit(St('session_approve', i), {
                              error: r.error
                            })
                          case 12:
                          case 'end':
                            return e.stop()
                        }
                      }
                    }, e)
                  })
                )
                return function (t, r) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.onSessionUpdateRequest = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t, r) {
                    let i, s
                    return (0, o.Z)().wrap(
                      function (e) {
                        for (;;) {
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (i = r.params),
                                (s = r.id),
                                (e.prev = 1),
                                n.isValidUpdate(Xo({ topic: t }, i)),
                                (e.next = 5),
                                n.client.session.update(t, {
                                  namespaces: i.namespaces
                                })
                              )
                            case 5:
                              return (e.next = 7), n.sendResult(s, t, !0)
                            case 7:
                              n.client.events.emit('session_update', {
                                id: s,
                                topic: t,
                                params: i
                              }),
                              (e.next = 15)
                              break
                            case 10:
                              return (
                                (e.prev = 10),
                                (e.t0 = e.catch(1)),
                                (e.next = 14),
                                n.sendError(s, t, e.t0)
                              )
                            case 14:
                              n.client.logger.error(e.t0)
                            case 15:
                            case 'end':
                              return e.stop()
                          }
                        }
                      },
                      e,
                      null,
                      [[1, 10]]
                    )
                  })
                )
                return function (t, r) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.onSessionUpdateResponse = function (e, t) {
                const r = t.id
                  ;(0, mr.isJsonRpcResult)(t)
                  ? n.events.emit(St('session_update', r), {})
                  : (0, mr.isJsonRpcError)(t) &&
                      n.events.emit(St('session_update', r), { error: t.error })
              }),
              (n.onSessionExtendRequest = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t, r) {
                    let i
                    return (0, o.Z)().wrap(
                      function (e) {
                        for (;;) {
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (i = r.id),
                                (e.prev = 1),
                                n.isValidExtend({ topic: t }),
                                (e.next = 5),
                                n.setExpiry(t, bt(Do))
                              )
                            case 5:
                              return (e.next = 7), n.sendResult(i, t, !0)
                            case 7:
                              n.client.events.emit('session_extend', {
                                id: i,
                                topic: t
                              }),
                              (e.next = 15)
                              break
                            case 10:
                              return (
                                (e.prev = 10),
                                (e.t0 = e.catch(1)),
                                (e.next = 14),
                                n.sendError(i, t, e.t0)
                              )
                            case 14:
                              n.client.logger.error(e.t0)
                            case 15:
                            case 'end':
                              return e.stop()
                          }
                        }
                      },
                      e,
                      null,
                      [[1, 10]]
                    )
                  })
                )
                return function (t, r) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.onSessionExtendResponse = function (e, t) {
                const r = t.id
                  ;(0, mr.isJsonRpcResult)(t)
                  ? n.events.emit(St('session_extend', r), {})
                  : (0, mr.isJsonRpcError)(t) &&
                      n.events.emit(St('session_extend', r), { error: t.error })
              }),
              (n.onSessionPingRequest = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t, r) {
                    let i
                    return (0, o.Z)().wrap(
                      function (e) {
                        for (;;) {
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (i = r.id),
                                (e.prev = 1),
                                n.isValidPing({ topic: t }),
                                (e.next = 5),
                                n.sendResult(i, t, !0)
                              )
                            case 5:
                              n.client.events.emit('session_ping', {
                                id: i,
                                topic: t
                              }),
                              (e.next = 13)
                              break
                            case 8:
                              return (
                                (e.prev = 8),
                                (e.t0 = e.catch(1)),
                                (e.next = 12),
                                n.sendError(i, t, e.t0)
                              )
                            case 12:
                              n.client.logger.error(e.t0)
                            case 13:
                            case 'end':
                              return e.stop()
                          }
                        }
                      },
                      e,
                      null,
                      [[1, 8]]
                    )
                  })
                )
                return function (t, r) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.onSessionPingResponse = function (e, t) {
                const r = t.id
                setTimeout(function () {
                  ;(0, mr.isJsonRpcResult)(t)
                    ? n.events.emit(St('session_ping', r), {})
                    : (0, mr.isJsonRpcError)(t) &&
                        n.events.emit(St('session_ping', r), { error: t.error })
                }, 500)
              }),
              (n.onSessionDeleteRequest = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t, r) {
                    let i
                    return (0, o.Z)().wrap(
                      function (e) {
                        for (;;) {
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (i = r.id),
                                (e.prev = 1),
                                n.isValidDisconnect({
                                  topic: t,
                                  reason: r.params
                                }),
                                n.client.core.relayer.once(
                                  xi.publish,
                                  (0, s.Z)(
                                    (0, o.Z)().mark(function e () {
                                      return (0, o.Z)().wrap(function (e) {
                                        for (;;) {
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                (e.next = 2),
                                                n.deleteSession(t)
                                              )
                                            case 2:
                                            case 'end':
                                              return e.stop()
                                          }
                                        }
                                      }, e)
                                    })
                                  )
                                ),
                                (e.next = 6),
                                n.sendResult(i, t, !0)
                              )
                            case 6:
                              n.client.events.emit('session_delete', {
                                id: i,
                                topic: t
                              }),
                              (e.next = 14)
                              break
                            case 9:
                              return (
                                (e.prev = 9),
                                (e.t0 = e.catch(1)),
                                (e.next = 13),
                                n.sendError(i, t, e.t0)
                              )
                            case 13:
                              n.client.logger.error(e.t0)
                            case 14:
                            case 'end':
                              return e.stop()
                          }
                        }
                      },
                      e,
                      null,
                      [[1, 9]]
                    )
                  })
                )
                return function (t, r) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.onSessionRequest = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t, r) {
                    let i, s
                    return (0, o.Z)().wrap(
                      function (e) {
                        for (;;) {
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (i = r.id),
                                (s = r.params),
                                (e.prev = 1),
                                n.isValidRequest(Xo({ topic: t }, s)),
                                (e.next = 5),
                                n.setPendingSessionRequest({
                                  id: i,
                                  topic: t,
                                  params: s
                                })
                              )
                            case 5:
                              n.client.events.emit('session_request', {
                                id: i,
                                topic: t,
                                params: s
                              }),
                              (e.next = 13)
                              break
                            case 8:
                              return (
                                (e.prev = 8),
                                (e.t0 = e.catch(1)),
                                (e.next = 12),
                                n.sendError(i, t, e.t0)
                              )
                            case 12:
                              n.client.logger.error(e.t0)
                            case 13:
                            case 'end':
                              return e.stop()
                          }
                        }
                      },
                      e,
                      null,
                      [[1, 8]]
                    )
                  })
                )
                return function (t, r) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.onSessionRequestResponse = function (e, t) {
                const r = t.id
                  ;(0, mr.isJsonRpcResult)(t)
                  ? n.events.emit(St('session_request', r), {
                    result: t.result
                  })
                  : (0, mr.isJsonRpcError)(t) &&
                      n.events.emit(St('session_request', r), {
                        error: t.error
                      })
              }),
              (n.onSessionEventRequest = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t, r) {
                    let i, s
                    return (0, o.Z)().wrap(
                      function (e) {
                        for (;;) {
                          switch ((e.prev = e.next)) {
                            case 0:
                              ;(i = r.id),
                              (s = r.params),
                              (e.prev = 1),
                              n.isValidEmit(Xo({ topic: t }, s)),
                              n.client.events.emit('session_event', {
                                id: i,
                                topic: t,
                                params: s
                              }),
                              (e.next = 10)
                              break
                            case 5:
                              return (
                                (e.prev = 5),
                                (e.t0 = e.catch(1)),
                                (e.next = 9),
                                n.sendError(i, t, e.t0)
                              )
                            case 9:
                              n.client.logger.error(e.t0)
                            case 10:
                            case 'end':
                              return e.stop()
                          }
                        }
                      },
                      e,
                      null,
                      [[1, 5]]
                    )
                  })
                )
                return function (t, r) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.isValidConnect = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t) {
                    let r, i, s, a, c, u, f, l
                    return (0, o.Z)().wrap(function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (ar(t)) {
                              e.next = 3
                              break
                            }
                            throw (
                              ((r = Ht(
                                'MISSING_OR_INVALID',
                                'connect() params: '.concat(
                                  JSON.stringify(t)
                                )
                              )),
                              (i = r.message),
                              new Error(i))
                            )
                          case 3:
                            if (
                              ((s = t.pairingTopic),
                              (a = t.requiredNamespaces),
                              (c = t.relays),
                              (e.t0 = Bt(s)),
                              e.t0)
                            ) {
                              e.next = 8
                              break
                            }
                            return (e.next = 8), n.isValidPairingTopic(s)
                          case 8:
                            if (Bt(a) || Ft(a) !== 0) {
                              e.next = 10
                              break
                            }
                            return e.abrupt('return')
                          case 10:
                            if (!(u = rr(a, 'connect()'))) {
                              e.next = 13
                              break
                            }
                            throw new Error(u.message)
                          case 13:
                            if (or(c, !0)) {
                              e.next = 16
                              break
                            }
                            throw (
                              ((f = Ht(
                                'MISSING_OR_INVALID',
                                'connect() relays: '.concat(c)
                              )),
                              (l = f.message),
                              new Error(l))
                            )
                          case 16:
                          case 'end':
                            return e.stop()
                        }
                      }
                    }, e)
                  })
                )
                return function (t) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.isValidApprove = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t) {
                    let r, i, s, a, c, u, f, l
                    return (0, o.Z)().wrap(function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (ar(t)) {
                              e.next = 2
                              break
                            }
                            throw new Error(
                              Ht(
                                'MISSING_OR_INVALID',
                                'approve() params: '.concat(t)
                              ).message
                            )
                          case 2:
                            return (
                              (r = t.id),
                              (i = t.namespaces),
                              (s = t.relayProtocol),
                              (e.next = 5),
                              n.isValidProposalId(r)
                            )
                          case 5:
                            if (
                              ((a = n.client.proposal.get(r)),
                              !(c = nr(i, 'approve()')))
                            ) {
                              e.next = 8
                              break
                            }
                            throw new Error(c.message)
                          case 8:
                            if (
                              !(u = vr(a.requiredNamespaces, i, 'update()'))
                            ) {
                              e.next = 11
                              break
                            }
                            throw new Error(u.message)
                          case 11:
                            if (Wt(s, !0)) {
                              e.next = 14
                              break
                            }
                            throw (
                              ((f = Ht(
                                'MISSING_OR_INVALID',
                                'approve() relayProtocol: '.concat(s)
                              )),
                              (l = f.message),
                              new Error(l))
                            )
                          case 14:
                          case 'end':
                            return e.stop()
                        }
                      }
                    }, e)
                  })
                )
                return function (t) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.isValidReject = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t) {
                    let r, i, s, a, c, u
                    return (0, o.Z)().wrap(function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (ar(t)) {
                              e.next = 3
                              break
                            }
                            throw (
                              ((r = Ht(
                                'MISSING_OR_INVALID',
                                'reject() params: '.concat(t)
                              )),
                              (i = r.message),
                              new Error(i))
                            )
                          case 3:
                            return (
                              (s = t.id),
                              (a = t.reason),
                              (e.next = 6),
                              n.isValidProposalId(s)
                            )
                          case 6:
                            if (cr(a)) {
                              e.next = 9
                              break
                            }
                            throw (
                              ((c = Ht(
                                'MISSING_OR_INVALID',
                                'reject() reason: '.concat(JSON.stringify(a))
                              )),
                              (u = c.message),
                              new Error(u))
                            )
                          case 9:
                          case 'end':
                            return e.stop()
                        }
                      }
                    }, e)
                  })
                )
                return function (t) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.isValidSessionSettleRequest = function (e) {
                if (!ar(e)) {
                  const t = Ht(
                    'MISSING_OR_INVALID',
                    'onSessionSettleRequest() params: '.concat(e)
                  ).message
                  throw new Error(t)
                }
                const r = e.relay
                const n = e.controller
                const i = e.namespaces
                const o = e.expiry
                if (!ir(r)) {
                  const s = Ht(
                    'MISSING_OR_INVALID',
                    'onSessionSettleRequest() relay protocol should be a string'
                  ).message
                  throw new Error(s)
                }
                const a = (function (e, t) {
                  let r = null
                  return (
                    Wt(
                      e === null || void 0 === e ? void 0 : e.publicKey,
                      !1
                    ) ||
                        (r = Ht(
                          'MISSING_OR_INVALID',
                          ''.concat(
                            t,
                            ' controller public key should be a string'
                          )
                        )),
                    r
                  )
                })(n, 'onSessionSettleRequest()')
                if (a) throw new Error(a.message)
                const c = nr(i, 'onSessionSettleRequest()')
                if (c) throw new Error(c.message)
                if (wt(o)) {
                  const u = Ht('EXPIRED', 'onSessionSettleRequest()').message
                  throw new Error(u)
                }
              }),
              (n.isValidUpdate = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t) {
                    let r, i, s, a, c, u, f
                    return (0, o.Z)().wrap(function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (ar(t)) {
                              e.next = 3
                              break
                            }
                            throw (
                              ((r = Ht(
                                'MISSING_OR_INVALID',
                                'update() params: '.concat(t)
                              )),
                              (i = r.message),
                              new Error(i))
                            )
                          case 3:
                            return (
                              (s = t.topic),
                              (a = t.namespaces),
                              (e.next = 6),
                              n.isValidSessionTopic(s)
                            )
                          case 6:
                            if (
                              ((c = n.client.session.get(s)),
                              !(u = nr(a, 'update()')))
                            ) {
                              e.next = 9
                              break
                            }
                            throw new Error(u.message)
                          case 9:
                            if (
                              !(f = vr(c.requiredNamespaces, a, 'update()'))
                            ) {
                              e.next = 12
                              break
                            }
                            throw new Error(f.message)
                          case 12:
                          case 'end':
                            return e.stop()
                        }
                      }
                    }, e)
                  })
                )
                return function (t) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.isValidExtend = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t) {
                    let r, i, s
                    return (0, o.Z)().wrap(function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (ar(t)) {
                              e.next = 3
                              break
                            }
                            throw (
                              ((r = Ht(
                                'MISSING_OR_INVALID',
                                'extend() params: '.concat(t)
                              )),
                              (i = r.message),
                              new Error(i))
                            )
                          case 3:
                            return (
                              (s = t.topic),
                              (e.next = 6),
                              n.isValidSessionTopic(s)
                            )
                          case 6:
                          case 'end':
                            return e.stop()
                        }
                      }
                    }, e)
                  })
                )
                return function (t) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.isValidRequest = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t) {
                    let r, i, s, a, c, u, f, l, p, h, d, v, g, y, m, b
                    return (0, o.Z)().wrap(function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (ar(t)) {
                              e.next = 3
                              break
                            }
                            throw (
                              ((r = Ht(
                                'MISSING_OR_INVALID',
                                'request() params: '.concat(t)
                              )),
                              (i = r.message),
                              new Error(i))
                            )
                          case 3:
                            return (
                              (s = t.topic),
                              (a = t.request),
                              (c = t.chainId),
                              (u = t.expiry),
                              (e.next = 6),
                              n.isValidSessionTopic(s)
                            )
                          case 6:
                            if (
                              ((f = n.client.session.get(s)),
                              pr((l = f.namespaces), c))
                            ) {
                              e.next = 10
                              break
                            }
                            throw (
                              ((p = Ht(
                                'MISSING_OR_INVALID',
                                'request() chainId: '.concat(c)
                              )),
                              (h = p.message),
                              new Error(h))
                            )
                          case 10:
                            if (ur(a)) {
                              e.next = 13
                              break
                            }
                            throw (
                              ((d = Ht(
                                'MISSING_OR_INVALID',
                                'request() '.concat(JSON.stringify(a))
                              )),
                              (v = d.message),
                              new Error(v))
                            )
                          case 13:
                            if (hr(l, c, a.method)) {
                              e.next = 16
                              break
                            }
                            throw (
                              ((g = Ht(
                                'MISSING_OR_INVALID',
                                'request() method: '.concat(a.method)
                              )),
                              (y = g.message),
                              new Error(y))
                            )
                          case 16:
                            if (!u || gr(u, Ho)) {
                              e.next = 19
                              break
                            }
                            throw (
                              ((m = Ht(
                                'MISSING_OR_INVALID',
                                'request() expiry: '
                                  .concat(
                                    u,
                                    '. Expiry must be a number (in seconds) between '
                                  )
                                  .concat(Ho.min, ' and ')
                                  .concat(Ho.max)
                              )),
                              (b = m.message),
                              new Error(b))
                            )
                          case 19:
                          case 'end':
                            return e.stop()
                        }
                      }
                    }, e)
                  })
                )
                return function (t) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.isValidRespond = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t) {
                    let r, i, s, a, c, u
                    return (0, o.Z)().wrap(function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (ar(t)) {
                              e.next = 3
                              break
                            }
                            throw (
                              ((r = Ht(
                                'MISSING_OR_INVALID',
                                'respond() params: '.concat(t)
                              )),
                              (i = r.message),
                              new Error(i))
                            )
                          case 3:
                            return (
                              (s = t.topic),
                              (a = t.response),
                              (e.next = 6),
                              n.isValidSessionTopic(s)
                            )
                          case 6:
                            if (fr(a)) {
                              e.next = 9
                              break
                            }
                            throw (
                              ((c = Ht(
                                'MISSING_OR_INVALID',
                                'respond() response: '.concat(
                                  JSON.stringify(a)
                                )
                              )),
                              (u = c.message),
                              new Error(u))
                            )
                          case 9:
                          case 'end':
                            return e.stop()
                        }
                      }
                    }, e)
                  })
                )
                return function (t) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.isValidPing = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t) {
                    let r, i, s
                    return (0, o.Z)().wrap(function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (ar(t)) {
                              e.next = 3
                              break
                            }
                            throw (
                              ((r = Ht(
                                'MISSING_OR_INVALID',
                                'ping() params: '.concat(t)
                              )),
                              (i = r.message),
                              new Error(i))
                            )
                          case 3:
                            return (
                              (s = t.topic),
                              (e.next = 6),
                              n.isValidSessionOrPairingTopic(s)
                            )
                          case 6:
                          case 'end':
                            return e.stop()
                        }
                      }
                    }, e)
                  })
                )
                return function (t) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.isValidEmit = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t) {
                    let r, i, s, a, c, u, f, l, p, h, d, v, g
                    return (0, o.Z)().wrap(function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (ar(t)) {
                              e.next = 3
                              break
                            }
                            throw (
                              ((r = Ht(
                                'MISSING_OR_INVALID',
                                'emit() params: '.concat(t)
                              )),
                              (i = r.message),
                              new Error(i))
                            )
                          case 3:
                            return (
                              (s = t.topic),
                              (a = t.event),
                              (c = t.chainId),
                              (e.next = 6),
                              n.isValidSessionTopic(s)
                            )
                          case 6:
                            if (
                              ((u = n.client.session.get(s)),
                              pr((f = u.namespaces), c))
                            ) {
                              e.next = 10
                              break
                            }
                            throw (
                              ((l = Ht(
                                'MISSING_OR_INVALID',
                                'emit() chainId: '.concat(c)
                              )),
                              (p = l.message),
                              new Error(p))
                            )
                          case 10:
                            if (lr(a)) {
                              e.next = 13
                              break
                            }
                            throw (
                              ((h = Ht(
                                'MISSING_OR_INVALID',
                                'emit() event: '.concat(JSON.stringify(a))
                              )),
                              (d = h.message),
                              new Error(d))
                            )
                          case 13:
                            if (dr(f, c, a.name)) {
                              e.next = 16
                              break
                            }
                            throw (
                              ((v = Ht(
                                'MISSING_OR_INVALID',
                                'emit() event: '.concat(JSON.stringify(a))
                              )),
                              (g = v.message),
                              new Error(g))
                            )
                          case 16:
                          case 'end':
                            return e.stop()
                        }
                      }
                    }, e)
                  })
                )
                return function (t) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.isValidDisconnect = (function () {
                const e = (0, s.Z)(
                  (0, o.Z)().mark(function e (t) {
                    let r, i, s
                    return (0, o.Z)().wrap(function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (ar(t)) {
                              e.next = 3
                              break
                            }
                            throw (
                              ((r = Ht(
                                'MISSING_OR_INVALID',
                                'disconnect() params: '.concat(t)
                              )),
                              (i = r.message),
                              new Error(i))
                            )
                          case 3:
                            return (
                              (s = t.topic),
                              (e.next = 6),
                              n.isValidSessionOrPairingTopic(s)
                            )
                          case 6:
                          case 'end':
                            return e.stop()
                        }
                      }
                    }, e)
                  })
                )
                return function (t) {
                  return e.apply(this, arguments)
                }
              })()),
              n
            )
          }
          return (
            (0, c.Z)(r, [
              {
                key: 'isInitialized',
                value: function () {
                  if (!this.initialized) {
                    const e = Ht('NOT_INITIALIZED', this.name).message
                    throw new Error(e)
                  }
                }
              },
              {
                key: 'registerRelayerEvents',
                value: function () {
                  const e = this
                  this.client.core.relayer.on(
                    xi.message,
                    (function () {
                      const t = (0, s.Z)(
                        (0, o.Z)().mark(function t (r) {
                          let n, i, s
                          return (0, o.Z)().wrap(function (t) {
                            for (;;) {
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    ((n = r.topic),
                                    (i = r.message),
                                    !e.ignoredPayloadTypes.includes(
                                      e.client.core.crypto.getPayloadType(i)
                                    ))
                                  ) {
                                    t.next = 3
                                    break
                                  }
                                  return t.abrupt('return')
                                case 3:
                                  return (
                                    (t.next = 5),
                                    e.client.core.crypto.decode(n, i)
                                  )
                                case 5:
                                  if (
                                    ((s = t.sent),
                                    !(0, mr.isJsonRpcRequest)(s))
                                  ) {
                                    t.next = 10
                                    break
                                  }
                                  e.client.core.history.set(n, s),
                                  e.onRelayEventRequest({
                                    topic: n,
                                    payload: s
                                  }),
                                  (t.next = 15)
                                  break
                                case 10:
                                  if (
                                    ((t.t0 = (0, mr.isJsonRpcResponse)(s)),
                                    !t.t0)
                                  ) {
                                    t.next = 15
                                    break
                                  }
                                  return (
                                    (t.next = 14),
                                    e.client.core.history.resolve(s)
                                  )
                                case 14:
                                  e.onRelayEventResponse({
                                    topic: n,
                                    payload: s
                                  })
                                case 15:
                                case 'end':
                                  return t.stop()
                              }
                            }
                          }, t)
                        })
                      )
                      return function (e) {
                        return t.apply(this, arguments)
                      }
                    })()
                  )
                }
              },
              {
                key: 'registerExpirerEvents',
                value: function () {
                  const e = this
                  this.client.core.expirer.on(
                    Vi.expired,
                    (function () {
                      const t = (0, s.Z)(
                        (0, o.Z)().mark(function t (r) {
                          let n, i, s
                          return (0, o.Z)().wrap(function (t) {
                            for (;;) {
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    ((n = kt(r.target)),
                                    (i = n.topic),
                                    !(s = n.id) ||
                                        !e.client.pendingRequest.keys.includes(
                                          s
                                        ))
                                  ) {
                                    t.next = 5
                                    break
                                  }
                                  return (
                                    (t.next = 4),
                                    e.deletePendingSessionRequest(
                                      s,
                                      Ht('EXPIRED'),
                                      !0
                                    )
                                  )
                                case 4:
                                  return t.abrupt('return', t.sent)
                                case 5:
                                  if (!i) {
                                    t.next = 13
                                    break
                                  }
                                  if (
                                    ((t.t0 =
                                        e.client.session.keys.includes(i)),
                                    !t.t0)
                                  ) {
                                    t.next = 11
                                    break
                                  }
                                  return (t.next = 10), e.deleteSession(i, !0)
                                case 10:
                                  e.client.events.emit('session_expire', {
                                    topic: i
                                  })
                                case 11:
                                  t.next = 18
                                  break
                                case 13:
                                  if (((t.t1 = s), !t.t1)) {
                                    t.next = 18
                                    break
                                  }
                                  return (
                                    (t.next = 17), e.deleteProposal(s, !0)
                                  )
                                case 17:
                                  e.client.events.emit('proposal_expire', {
                                    id: s
                                  })
                                case 18:
                                case 'end':
                                  return t.stop()
                              }
                            }
                          }, t)
                        })
                      )
                      return function (e) {
                        return t.apply(this, arguments)
                      }
                    })()
                  )
                }
              },
              {
                key: 'isValidPairingTopic',
                value: function (e) {
                  if (!Wt(e, !1)) {
                    const t = Ht(
                      'MISSING_OR_INVALID',
                      'pairing topic should be a string: '.concat(e)
                    ).message
                    throw new Error(t)
                  }
                  if (!this.client.core.pairing.pairings.keys.includes(e)) {
                    const r = Ht(
                      'NO_MATCHING_KEY',
                      "pairing topic doesn't exist: ".concat(e)
                    ).message
                    throw new Error(r)
                  }
                  if (wt(this.client.core.pairing.pairings.get(e).expiry)) {
                    const n = Ht('EXPIRED', 'pairing topic: '.concat(e)).message
                    throw new Error(n)
                  }
                }
              },
              {
                key: 'isValidSessionTopic',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e (t) {
                      let r, n, i, s, a, c
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (Wt(t, !1)) {
                                  e.next = 3
                                  break
                                }
                                throw (
                                  ((r = Ht(
                                    'MISSING_OR_INVALID',
                                    'session topic should be a string: '.concat(
                                      t
                                    )
                                  )),
                                  (n = r.message),
                                  new Error(n))
                                )
                              case 3:
                                if (this.client.session.keys.includes(t)) {
                                  e.next = 6
                                  break
                                }
                                throw (
                                  ((i = Ht(
                                    'NO_MATCHING_KEY',
                                    "session topic doesn't exist: ".concat(t)
                                  )),
                                  (s = i.message),
                                  new Error(s))
                                )
                              case 6:
                                if (!wt(this.client.session.get(t).expiry)) {
                                  e.next = 11
                                  break
                                }
                                return (e.next = 9), this.deleteSession(t)
                              case 9:
                                throw (
                                  ((a = Ht(
                                    'EXPIRED',
                                    'session topic: '.concat(t)
                                  )),
                                  (c = a.message),
                                  new Error(c))
                                )
                              case 11:
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
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'isValidSessionOrPairingTopic',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e (t) {
                      let r, n, i, s
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!this.client.session.keys.includes(t)) {
                                  e.next = 5
                                  break
                                }
                                return (
                                  (e.next = 3), this.isValidSessionTopic(t)
                                )
                              case 3:
                                e.next = 16
                                break
                              case 5:
                                if (
                                  !this.client.core.pairing.pairings.keys.includes(
                                    t
                                  )
                                ) {
                                  e.next = 9
                                  break
                                }
                                this.isValidPairingTopic(t), (e.next = 16)
                                break
                              case 9:
                                if (!Wt(t, !1)) {
                                  e.next = 14
                                  break
                                }
                                throw (
                                  ((r = Ht(
                                    'NO_MATCHING_KEY',
                                    "session or pairing topic doesn't exist: ".concat(
                                      t
                                    )
                                  )),
                                  (n = r.message),
                                  new Error(n))
                                )
                              case 14:
                                throw (
                                  ((i = Ht(
                                    'MISSING_OR_INVALID',
                                    'session or pairing topic should be a string: '.concat(
                                      t
                                    )
                                  )),
                                  (s = i.message),
                                  new Error(s))
                                )
                              case 16:
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
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'isValidProposalId',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e (t) {
                      let r, n, i, s, a, c
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (sr(t)) {
                                  e.next = 3
                                  break
                                }
                                throw (
                                  ((r = Ht(
                                    'MISSING_OR_INVALID',
                                    'proposal id should be a number: '.concat(
                                      t
                                    )
                                  )),
                                  (n = r.message),
                                  new Error(n))
                                )
                              case 3:
                                if (this.client.proposal.keys.includes(t)) {
                                  e.next = 6
                                  break
                                }
                                throw (
                                  ((i = Ht(
                                    'NO_MATCHING_KEY',
                                    "proposal id doesn't exist: ".concat(t)
                                  )),
                                  (s = i.message),
                                  new Error(s))
                                )
                              case 6:
                                if (!wt(this.client.proposal.get(t).expiry)) {
                                  e.next = 11
                                  break
                                }
                                return (e.next = 9), this.deleteProposal(t)
                              case 9:
                                throw (
                                  ((a = Ht(
                                    'EXPIRED',
                                    'proposal id: '.concat(t)
                                  )),
                                  (c = a.message),
                                  new Error(c))
                                )
                              case 11:
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
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })()
              }
            ]),
            r
          )
        })(T)
        const es = (function (e) {
          ;(0, h.Z)(r, e)
          const t = (0, d.Z)(r)
          function r (e, n) {
            let i
            return (
              (0, a.Z)(this, r),
              ((i = t.call(this, e, n, Mo, jo)).core = e),
              (i.logger = n),
              i
            )
          }
          return (0, c.Z)(r)
        })(wo)
        const ts = (function (e) {
          ;(0, h.Z)(r, e)
          const t = (0, d.Z)(r)
          function r (e, n) {
            let i
            return (
              (0, a.Z)(this, r),
              ((i = t.call(this, e, n, Co, jo)).core = e),
              (i.logger = n),
              i
            )
          }
          return (0, c.Z)(r)
        })(wo)
        const rs = (function (e) {
          ;(0, h.Z)(r, e)
          const t = (0, d.Z)(r)
          function r (e, n) {
            let i
            return (
              (0, a.Z)(this, r),
              ((i = t.call(this, e, n, Vo, jo)).core = e),
              (i.logger = n),
              i
            )
          }
          return (0, c.Z)(r)
        })(wo)
        const ns = (function (e) {
          ;(0, h.Z)(r, e)
          const t = (0, d.Z)(r)
          function r (e) {
            let n
              ;(0, a.Z)(this, r),
            ((n = t.call(this, e)).protocol = To),
            (n.version = Ao),
            (n.name = Lo.name),
            (n.events = new y.EventEmitter()),
            (n.on = function (e, t) {
              return n.events.on(e, t)
            }),
            (n.once = function (e, t) {
              return n.events.once(e, t)
            }),
            (n.off = function (e, t) {
              return n.events.off(e, t)
            }),
            (n.removeListener = function (e, t) {
              return n.events.removeListener(e, t)
            }),
            (n.removeAllListeners = function (e) {
              return n.events.removeAllListeners(e)
            }),
            (n.connect = (function () {
              const e = (0, s.Z)(
                (0, o.Z)().mark(function e (t) {
                  return (0, o.Z)().wrap(
                    function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              n.engine.connect(t)
                            )
                          case 3:
                            return e.abrupt('return', e.sent)
                          case 6:
                            throw (
                              ((e.prev = 6),
                              (e.t0 = e.catch(0)),
                              n.logger.error(e.t0.message),
                              e.t0)
                            )
                          case 9:
                          case 'end':
                            return e.stop()
                        }
                      }
                    },
                    e,
                    null,
                    [[0, 6]]
                  )
                })
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })()),
            (n.pair = (function () {
              const e = (0, s.Z)(
                (0, o.Z)().mark(function e (t) {
                  return (0, o.Z)().wrap(
                    function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0), (e.next = 3), n.engine.pair(t)
                            )
                          case 3:
                            return e.abrupt('return', e.sent)
                          case 6:
                            throw (
                              ((e.prev = 6),
                              (e.t0 = e.catch(0)),
                              n.logger.error(e.t0.message),
                              e.t0)
                            )
                          case 9:
                          case 'end':
                            return e.stop()
                        }
                      }
                    },
                    e,
                    null,
                    [[0, 6]]
                  )
                })
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })()),
            (n.approve = (function () {
              const e = (0, s.Z)(
                (0, o.Z)().mark(function e (t) {
                  return (0, o.Z)().wrap(
                    function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              n.engine.approve(t)
                            )
                          case 3:
                            return e.abrupt('return', e.sent)
                          case 6:
                            throw (
                              ((e.prev = 6),
                              (e.t0 = e.catch(0)),
                              n.logger.error(e.t0.message),
                              e.t0)
                            )
                          case 9:
                          case 'end':
                            return e.stop()
                        }
                      }
                    },
                    e,
                    null,
                    [[0, 6]]
                  )
                })
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })()),
            (n.reject = (function () {
              const e = (0, s.Z)(
                (0, o.Z)().mark(function e (t) {
                  return (0, o.Z)().wrap(
                    function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0), (e.next = 3), n.engine.reject(t)
                            )
                          case 3:
                            return e.abrupt('return', e.sent)
                          case 6:
                            throw (
                              ((e.prev = 6),
                              (e.t0 = e.catch(0)),
                              n.logger.error(e.t0.message),
                              e.t0)
                            )
                          case 9:
                          case 'end':
                            return e.stop()
                        }
                      }
                    },
                    e,
                    null,
                    [[0, 6]]
                  )
                })
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })()),
            (n.update = (function () {
              const e = (0, s.Z)(
                (0, o.Z)().mark(function e (t) {
                  return (0, o.Z)().wrap(
                    function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0), (e.next = 3), n.engine.update(t)
                            )
                          case 3:
                            return e.abrupt('return', e.sent)
                          case 6:
                            throw (
                              ((e.prev = 6),
                              (e.t0 = e.catch(0)),
                              n.logger.error(e.t0.message),
                              e.t0)
                            )
                          case 9:
                          case 'end':
                            return e.stop()
                        }
                      }
                    },
                    e,
                    null,
                    [[0, 6]]
                  )
                })
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })()),
            (n.extend = (function () {
              const e = (0, s.Z)(
                (0, o.Z)().mark(function e (t) {
                  return (0, o.Z)().wrap(
                    function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0), (e.next = 3), n.engine.extend(t)
                            )
                          case 3:
                            return e.abrupt('return', e.sent)
                          case 6:
                            throw (
                              ((e.prev = 6),
                              (e.t0 = e.catch(0)),
                              n.logger.error(e.t0.message),
                              e.t0)
                            )
                          case 9:
                          case 'end':
                            return e.stop()
                        }
                      }
                    },
                    e,
                    null,
                    [[0, 6]]
                  )
                })
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })()),
            (n.request = (function () {
              const e = (0, s.Z)(
                (0, o.Z)().mark(function e (t) {
                  return (0, o.Z)().wrap(
                    function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              n.engine.request(t)
                            )
                          case 3:
                            return e.abrupt('return', e.sent)
                          case 6:
                            throw (
                              ((e.prev = 6),
                              (e.t0 = e.catch(0)),
                              n.logger.error(e.t0.message),
                              e.t0)
                            )
                          case 9:
                          case 'end':
                            return e.stop()
                        }
                      }
                    },
                    e,
                    null,
                    [[0, 6]]
                  )
                })
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })()),
            (n.respond = (function () {
              const e = (0, s.Z)(
                (0, o.Z)().mark(function e (t) {
                  return (0, o.Z)().wrap(
                    function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              n.engine.respond(t)
                            )
                          case 3:
                            return e.abrupt('return', e.sent)
                          case 6:
                            throw (
                              ((e.prev = 6),
                              (e.t0 = e.catch(0)),
                              n.logger.error(e.t0.message),
                              e.t0)
                            )
                          case 9:
                          case 'end':
                            return e.stop()
                        }
                      }
                    },
                    e,
                    null,
                    [[0, 6]]
                  )
                })
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })()),
            (n.ping = (function () {
              const e = (0, s.Z)(
                (0, o.Z)().mark(function e (t) {
                  return (0, o.Z)().wrap(
                    function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0), (e.next = 3), n.engine.ping(t)
                            )
                          case 3:
                            return e.abrupt('return', e.sent)
                          case 6:
                            throw (
                              ((e.prev = 6),
                              (e.t0 = e.catch(0)),
                              n.logger.error(e.t0.message),
                              e.t0)
                            )
                          case 9:
                          case 'end':
                            return e.stop()
                        }
                      }
                    },
                    e,
                    null,
                    [[0, 6]]
                  )
                })
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })()),
            (n.emit = (function () {
              const e = (0, s.Z)(
                (0, o.Z)().mark(function e (t) {
                  return (0, o.Z)().wrap(
                    function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0), (e.next = 3), n.engine.emit(t)
                            )
                          case 3:
                            return e.abrupt('return', e.sent)
                          case 6:
                            throw (
                              ((e.prev = 6),
                              (e.t0 = e.catch(0)),
                              n.logger.error(e.t0.message),
                              e.t0)
                            )
                          case 9:
                          case 'end':
                            return e.stop()
                        }
                      }
                    },
                    e,
                    null,
                    [[0, 6]]
                  )
                })
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })()),
            (n.disconnect = (function () {
              const e = (0, s.Z)(
                (0, o.Z)().mark(function e (t) {
                  return (0, o.Z)().wrap(
                    function (e) {
                      for (;;) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              n.engine.disconnect(t)
                            )
                          case 3:
                            return e.abrupt('return', e.sent)
                          case 6:
                            throw (
                              ((e.prev = 6),
                              (e.t0 = e.catch(0)),
                              n.logger.error(e.t0.message),
                              e.t0)
                            )
                          case 9:
                          case 'end':
                            return e.stop()
                        }
                      }
                    },
                    e,
                    null,
                    [[0, 6]]
                  )
                })
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })()),
            (n.find = function (e) {
              try {
                return n.engine.find(e)
              } catch (t) {
                throw (n.logger.error(t.message), t)
              }
            }),
            (n.getPendingSessionRequests = function () {
              try {
                return n.engine.getPendingSessionRequests()
              } catch (e) {
                throw (n.logger.error(e.message), e)
              }
            }),
            (n.name =
                  (e === null || void 0 === e ? void 0 : e.name) || Lo.name),
            (n.metadata = (e === null || void 0 === e
              ? void 0
              : e.metadata) ||
                  (0, Ae.D)() || {
              name: '',
              description: '',
              url: '',
              icons: ['']
            })
            const i =
                typeof (e === null || void 0 === e ? void 0 : e.logger) < 'u' &&
                typeof (e === null || void 0 === e ? void 0 : e.logger) !==
                  'string'
                  ? e.logger
                  : f()(
                    (0, _.getDefaultLoggerOptions)({
                      level:
                          (e === null || void 0 === e ? void 0 : e.logger) ||
                          Lo.logger
                    })
                  )
            return (
              (n.core =
                  (e === null || void 0 === e ? void 0 : e.core) || new Ro(e)),
              (n.logger = (0, _.generateChildLogger)(i, n.name)),
              (n.session = new ts(n.core, n.logger)),
              (n.proposal = new es(n.core, n.logger)),
              (n.pendingRequest = new rs(n.core, n.logger)),
              (n.engine = new Qo((0, l.Z)(n))),
              n
            )
          }
          return (
            (0, c.Z)(
              r,
              [
                {
                  key: 'context',
                  get: function () {
                    return (0, _.getLoggerContext)(this.logger)
                  }
                },
                {
                  key: 'pairing',
                  get: function () {
                    return this.core.pairing.pairings
                  }
                },
                {
                  key: 'initialize',
                  value: (function () {
                    const e = (0, s.Z)(
                      (0, o.Z)().mark(function e () {
                        return (0, o.Z)().wrap(
                          function (e) {
                            for (;;) {
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    this.logger.trace('Initialized'),
                                    (e.prev = 1),
                                    (e.next = 4),
                                    this.core.start()
                                  )
                                case 4:
                                  return (e.next = 6), this.session.init()
                                case 6:
                                  return (e.next = 8), this.proposal.init()
                                case 8:
                                  return (
                                    (e.next = 10), this.pendingRequest.init()
                                  )
                                case 10:
                                  return (e.next = 12), this.engine.init()
                                case 12:
                                  this.logger.info(
                                    'SignClient Initialization Success'
                                  ),
                                  (e.next = 18)
                                  break
                                case 15:
                                  throw (
                                    ((e.prev = 15),
                                    (e.t0 = e.catch(1)),
                                    this.logger.info(
                                      'SignClient Initialization Failure'
                                    ),
                                    this.logger.error(e.t0.message),
                                    e.t0)
                                  )
                                case 18:
                                case 'end':
                                  return e.stop()
                              }
                            }
                          },
                          e,
                          this,
                          [[1, 15]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })()
                }
              ],
              [
                {
                  key: 'init',
                  value: (function () {
                    const e = (0, s.Z)(
                      (0, o.Z)().mark(function e (t) {
                        let n
                        return (0, o.Z)().wrap(function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = new r(t)), (e.next = 3), n.initialize()
                                )
                              case 3:
                                return e.abrupt('return', n)
                              case 4:
                              case 'end':
                                return e.stop()
                            }
                          }
                        }, e)
                      })
                    )
                    return function (t) {
                      return e.apply(this, arguments)
                    }
                  })()
                }
              ]
            ),
            r
          )
        })(R)
        function is (e, t, r, n) {
          return {
            name: e,
            prefix: t,
            encoder: { name: e, prefix: t, encode: r },
            decoder: { decode: n }
          }
        }
        const os = is(
          'utf8',
          'u',
          function (e) {
            return 'u' + new TextDecoder('utf8').decode(e)
          },
          function (e) {
            return new TextEncoder().encode(e.substring(1))
          }
        )
        const ss = is(
          'ascii',
          'a',
          function (e) {
            for (var t = 'a', r = 0; r < e.length; r++) { t += String.fromCharCode(e[r]) }
            return t
          },
          function (e) {
            for (
              var t = (function () {
                  const e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0
                  return globalThis.Buffer != null &&
                      globalThis.Buffer.allocUnsafe != null
                    ? globalThis.Buffer.allocUnsafe(e)
                    : new Uint8Array(e)
                })((e = e.substring(1)).length),
                r = 0;
              r < e.length;
              r++
            ) { t[r] = e.charCodeAt(r) }
            return t
          }
        )
        ;(0, g.Z)(
          {
            utf8: os,
            'utf-8': os,
            hex: le.bases.base16,
            latin1: ss,
            ascii: ss,
            binary: ss
          },
          le.bases
        )
        r(92340), r(2378), r(80957), r(49524)
        Object.defineProperty,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable
        Object.defineProperty,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable
        const as = {
          INVALID_METHOD: { message: 'Invalid method.', code: 1001 },
          INVALID_EVENT: { message: 'Invalid event.', code: 1002 },
          INVALID_UPDATE_REQUEST: {
            message: 'Invalid update request.',
            code: 1003
          },
          INVALID_EXTEND_REQUEST: {
            message: 'Invalid extend request.',
            code: 1004
          },
          INVALID_SESSION_SETTLE_REQUEST: {
            message: 'Invalid session settle request.',
            code: 1005
          },
          UNAUTHORIZED_METHOD: { message: 'Unauthorized method.', code: 3001 },
          UNAUTHORIZED_EVENT: { message: 'Unauthorized event.', code: 3002 },
          UNAUTHORIZED_UPDATE_REQUEST: {
            message: 'Unauthorized update request.',
            code: 3003
          },
          UNAUTHORIZED_EXTEND_REQUEST: {
            message: 'Unauthorized extend request.',
            code: 3004
          },
          USER_REJECTED: { message: 'User rejected.', code: 5e3 },
          USER_REJECTED_CHAINS: {
            message: 'User rejected chains.',
            code: 5001
          },
          USER_REJECTED_METHODS: {
            message: 'User rejected methods.',
            code: 5002
          },
          USER_REJECTED_EVENTS: {
            message: 'User rejected events.',
            code: 5003
          },
          UNSUPPORTED_CHAINS: { message: 'Unsupported chains.', code: 5100 },
          UNSUPPORTED_METHODS: { message: 'Unsupported methods.', code: 5101 },
          UNSUPPORTED_EVENTS: { message: 'Unsupported events.', code: 5102 },
          UNSUPPORTED_ACCOUNTS: {
            message: 'Unsupported accounts.',
            code: 5103
          },
          UNSUPPORTED_NAMESPACE_KEY: {
            message: 'Unsupported namespace key.',
            code: 5104
          },
          USER_DISCONNECTED: { message: 'User disconnected.', code: 6e3 },
          SESSION_SETTLEMENT_FAILED: {
            message: 'Session settlement failed.',
            code: 7e3
          },
          WC_METHOD_UNSUPPORTED: {
            message: 'Unsupported wc_ method.',
            code: 10001
          }
        }
        function cs (e, t) {
          const r = as[e]
          const n = r.message
          const i = r.code
          return { message: t ? ''.concat(n, ' ').concat(t) : n, code: i }
        }
        function us (e, t) {
          return (
            !!Array.isArray(e) && (!(typeof t < 'u' && e.length) || e.every(t))
          )
        }
        const fs = r(82177)
        function ls (e, t) {
          let r
          return (
            t.rpcMap &&
              (r =
                t.rpcMap[
                  (function (e) {
                    return Number(e[0].split(':')[1])
                  })([e])
                ]),
            r
          )
        }
        const ps = (function () {
          function e (t) {
            ;(0, a.Z)(this, e),
            (this.name = 'eip155'),
            (this.namespace = t.namespace),
            (this.client = t.client),
            (this.events = t.events),
            (this.httpProviders = this.createHttpProviders()),
            (this.chainId = this.getDefaultChainId())
          }
          return (
            (0, c.Z)(e, [
              {
                key: 'request',
                value: (function () {
                  const e = (0, s.Z)(
                    (0, o.Z)().mark(function e (t) {
                      let r, n
                      return (0, o.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                ;(e.t0 = t.request.method),
                                (e.next =
                                      e.t0 === 'eth_requestAccounts'
                                        ? 3
                                        : e.t0 === 'eth_accounts'
                                          ? 4
                                          : e.t0 ===
                                              'wallet_switchEthereumChain'
                                            ? 5
                                            : e.t0 === 'eth_chainId'
                                              ? 7
                                              : 8)
                                break
                              case 3:
                              case 4:
                                return e.abrupt('return', this.getAccounts())
                              case 5:
                                return (
                                  (n = t.request.params
                                    ? (r = t.request.params[0]) == null
                                        ? void 0
                                        : r.chainId
                                    : '0x0'),
                                  e.abrupt(
                                    'return',
                                    (this.setDefaultChain(
                                      parseInt(n, 16).toString()
                                    ),
                                    null)
                                  )
                                )
                              case 7:
                                return e.abrupt(
                                  'return',
                                  this.getDefaultChainId()
                                )
                              case 8:
                                if (
                                  !this.namespace.methods.includes(
                                    t.request.method
                                  )
                                ) {
                                  e.next = 14
                                  break
                                }
                                return (e.next = 11), this.client.request(t)
                              case 11:
                                ;(e.t1 = e.sent), (e.next = 15)
                                break
                              case 14:
                                e.t1 = this.getHttpProvider().request(
                                  t.request
                                )
                              case 15:
                                return e.abrupt('return', e.t1)
                              case 16:
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
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'updateNamespace',
                value: function (e) {
                  this.namespace = Object.assign(this.namespace, e)
                }
              },
              {
                key: 'setDefaultChain',
                value: function (e, t) {
                  if (
                    ((this.chainId = parseInt(e)), !this.httpProviders[e])
                  ) {
                    const r =
                        t ||
                        ls(''.concat(this.name, ':').concat(e), this.namespace)
                    if (!r) {
                      throw new Error(
                        'No RPC url provided for chainId: '.concat(e)
                      )
                    }
                    this.setHttpProvider(e, r)
                  }
                  this.events.emit('chainChanged', this.chainId)
                }
              },
              {
                key: 'requestAccounts',
                value: function () {
                  return this.getAccounts()
                }
              },
              {
                key: 'createHttpProvider',
                value: function (e, t) {
                  const r = t || ls(e, this.namespace)
                  return typeof r > 'u' ? void 0 : new yr.r(new fs.k(r))
                }
              },
              {
                key: 'setHttpProvider',
                value: function (e, t) {
                  const r = this.createHttpProvider(e, t)
                  r && (this.httpProviders[e] = r)
                }
              },
              {
                key: 'createHttpProviders',
                value: function () {
                  const e = this
                  const t = {}
                  return (
                    this.namespace.chains.forEach(function (r) {
                      t[r] = e.createHttpProvider(r)
                    }),
                    t
                  )
                }
              },
              {
                key: 'getAccounts',
                value: function () {
                  const e = this
                  const t = this.namespace.accounts
                  return (
                    (t &&
                        t
                          .filter(function (t) {
                            return t.split(':')[1] === e.chainId.toString()
                          })
                          .map(function (e) {
                            return e.split(':')[2]
                          })) ||
                      []
                  )
                }
              },
              {
                key: 'getDefaultChainId',
                value: function () {
                  if (this.chainId) return this.chainId
                  const e = this.namespace.chains[0]
                  if (!e) throw new Error('ChainId not found')
                  return parseInt(e.split(':')[1])
                }
              },
              {
                key: 'getHttpProvider',
                value: function () {
                  const e = ''.concat(this.name, ':').concat(this.chainId)
                  const t = this.httpProviders[e]
                  if (typeof t > 'u') {
                    throw new Error(
                      'JSON-RPC provider for '.concat(e, ' not found')
                    )
                  }
                  return t
                }
              }
            ]),
            e
          )
        })()
        const hs = (function () {
          function e (t) {
            ;(0, a.Z)(this, e),
            (this.name = 'solana'),
            (this.namespace = t.namespace),
            (this.events = t.events),
            (this.client = t.client),
            (this.chainId = this.getDefaultChainId()),
            (this.httpProviders = this.createHttpProviders())
          }
          return (
            (0, c.Z)(e, [
              {
                key: 'updateNamespace',
                value: function (e) {
                  this.namespace = Object.assign(this.namespace, e)
                }
              },
              {
                key: 'requestAccounts',
                value: function () {
                  return this.getAccounts()
                }
              },
              {
                key: 'getAccounts',
                value: function () {
                  const e = this
                  const t = this.namespace.accounts
                  return (
                    (t &&
                        t
                          .filter(function (t) {
                            return t.split(':')[1] === e.chainId.toString()
                          })
                          .map(function (e) {
                            return e.split(':')[2]
                          })) ||
                      []
                  )
                }
              },
              {
                key: 'createHttpProviders',
                value: function () {
                  const e = this
                  const t = {}
                  return (
                    this.namespace.chains.forEach(function (r) {
                      t[r] = e.createHttpProvider(r)
                    }),
                    t
                  )
                }
              },
              {
                key: 'getDefaultChainId',
                value: function () {
                  if (this.chainId) return this.chainId
                  const e = this.namespace.chains[0]
                  if (!e) throw new Error('ChainId not found')
                  return e.split(':')[1]
                }
              },
              {
                key: 'request',
                value: function (e) {
                  return this.namespace.methods.includes(e.request.method)
                    ? this.client.request(e)
                    : this.getHttpProvider().request(e.request)
                }
              },
              {
                key: 'getHttpProvider',
                value: function () {
                  const e = ''.concat(this.name, ':').concat(this.chainId)
                  const t = this.httpProviders[e]
                  if (typeof t > 'u') {
                    throw new Error(
                      'JSON-RPC provider for '.concat(e, ' not found')
                    )
                  }
                  return t
                }
              },
              {
                key: 'setDefaultChain',
                value: function (e, t) {
                  if (((this.chainId = e), !this.httpProviders[e])) {
                    const r =
                        t ||
                        ls(''.concat(this.name, ':').concat(e), this.namespace)
                    if (!r) {
                      throw new Error(
                        'No RPC url provided for chainId: '.concat(e)
                      )
                    }
                    this.setHttpProvider(e, r)
                  }
                  this.events.emit('chainChanged', this.chainId)
                }
              },
              {
                key: 'setHttpProvider',
                value: function (e, t) {
                  const r = this.createHttpProvider(e, t)
                  r && (this.httpProviders[e] = r)
                }
              },
              {
                key: 'createHttpProvider',
                value: function (e, t) {
                  const r = t || ls(e, this.namespace)
                  return typeof r > 'u' ? void 0 : new yr.r(new fs.Z(r))
                }
              }
            ]),
            e
          )
        })()
        const ds = (function () {
          function e (t) {
            ;(0, a.Z)(this, e),
            (this.name = 'cosmos'),
            (this.namespace = t.namespace),
            (this.events = t.events),
            (this.client = t.client),
            (this.chainId = this.getDefaultChainId()),
            (this.httpProviders = this.createHttpProviders())
          }
          return (
            (0, c.Z)(e, [
              {
                key: 'updateNamespace',
                value: function (e) {
                  this.namespace = Object.assign(this.namespace, e)
                }
              },
              {
                key: 'requestAccounts',
                value: function () {
                  return this.getAccounts()
                }
              },
              {
                key: 'getAccounts',
                value: function () {
                  const e = this
                  const t = this.namespace.accounts
                  return (
                    (t &&
                        t
                          .filter(function (t) {
                            return t.split(':')[1] === e.chainId.toString()
                          })
                          .map(function (e) {
                            return e.split(':')[2]
                          })) ||
                      []
                  )
                }
              },
              {
                key: 'createHttpProviders',
                value: function () {
                  const e = this
                  const t = {}
                  return (
                    this.namespace.chains.forEach(function (r) {
                      t[r] = e.createHttpProvider(r)
                    }),
                    t
                  )
                }
              },
              {
                key: 'getDefaultChainId',
                value: function () {
                  if (this.chainId) return this.chainId
                  const e = this.namespace.chains[0]
                  if (!e) throw new Error('ChainId not found')
                  return e.split(':')[1]
                }
              },
              {
                key: 'request',
                value: function (e) {
                  return this.namespace.methods.includes(e.request.method)
                    ? this.client.request(e)
                    : this.getHttpProvider().request(e.request)
                }
              },
              {
                key: 'getHttpProvider',
                value: function () {
                  const e = ''.concat(this.name, ':').concat(this.chainId)
                  const t = this.httpProviders[e]
                  if (typeof t > 'u') {
                    throw new Error(
                      'JSON-RPC provider for '.concat(e, ' not found')
                    )
                  }
                  return t
                }
              },
              {
                key: 'setDefaultChain',
                value: function (e, t) {
                  if (((this.chainId = e), !this.httpProviders[e])) {
                    const r =
                        t ||
                        ls(''.concat(this.name, ':').concat(e), this.namespace)
                    if (!r) {
                      throw new Error(
                        'No RPC url provided for chainId: '.concat(e)
                      )
                    }
                    this.setHttpProvider(e, r)
                  }
                  this.events.emit('chainChanged', this.chainId)
                }
              },
              {
                key: 'setHttpProvider',
                value: function (e, t) {
                  const r = this.createHttpProvider(e, t)
                  r && (this.httpProviders[e] = r)
                }
              },
              {
                key: 'createHttpProvider',
                value: function (e, t) {
                  const r = t || ls(e, this.namespace)
                  return typeof r > 'u' ? void 0 : new yr.r(new fs.Z(r))
                }
              }
            ]),
            e
          )
        })()
        const vs = (function () {
          function e (t) {
            ;(0, a.Z)(this, e),
            (this.name = 'cip34'),
            (this.namespace = t.namespace),
            (this.events = t.events),
            (this.client = t.client),
            (this.chainId = this.getDefaultChainId()),
            (this.httpProviders = this.createHttpProviders())
          }
          return (
            (0, c.Z)(e, [
              {
                key: 'updateNamespace',
                value: function (e) {
                  this.namespace = Object.assign(this.namespace, e)
                }
              },
              {
                key: 'requestAccounts',
                value: function () {
                  return this.getAccounts()
                }
              },
              {
                key: 'getAccounts',
                value: function () {
                  const e = this
                  const t = this.namespace.accounts
                  return (
                    (t &&
                        t
                          .filter(function (t) {
                            return t.split(':')[1] === e.chainId.toString()
                          })
                          .map(function (e) {
                            return e.split(':')[2]
                          })) ||
                      []
                  )
                }
              },
              {
                key: 'createHttpProviders',
                value: function () {
                  const e = this
                  const t = {}
                  return (
                    this.namespace.chains.forEach(function (r) {
                      t[r] = e.createHttpProvider(r)
                    }),
                    t
                  )
                }
              },
              {
                key: 'getDefaultChainId',
                value: function () {
                  if (this.chainId) return this.chainId
                  const e = this.namespace.chains[0]
                  if (!e) throw new Error('ChainId not found')
                  return e.split(':')[1]
                }
              },
              {
                key: 'request',
                value: function (e) {
                  return this.namespace.methods.includes(e.request.method)
                    ? this.client.request(e)
                    : this.getHttpProvider().request(e.request)
                }
              },
              {
                key: 'getHttpProvider',
                value: function () {
                  const e = ''.concat(this.name, ':').concat(this.chainId)
                  const t = this.httpProviders[e]
                  if (typeof t > 'u') {
                    throw new Error(
                      'JSON-RPC provider for '.concat(e, ' not found')
                    )
                  }
                  return t
                }
              },
              {
                key: 'setDefaultChain',
                value: function (e, t) {
                  if (((this.chainId = e), !this.httpProviders[e])) {
                    const r =
                        t ||
                        ls(''.concat(this.name, ':').concat(e), this.namespace)
                    if (!r) {
                      throw new Error(
                        'No RPC url provided for chainId: '.concat(e)
                      )
                    }
                    this.setHttpProvider(e, r)
                  }
                  this.events.emit('chainChanged', this.chainId)
                }
              },
              {
                key: 'setHttpProvider',
                value: function (e, t) {
                  const r = this.createHttpProvider(e, t)
                  r && (this.httpProviders[e] = r)
                }
              },
              {
                key: 'createHttpProvider',
                value: function (e, t) {
                  const r = t || ls(e, this.namespace)
                  return typeof r > 'u' ? void 0 : new yr.r(new fs.Z(r))
                }
              }
            ]),
            e
          )
        })()
        const gs = 'error'
        const ys = ''.concat('wc', '@', 2, ':').concat('universal_provider', ':')
        const ms = Object.defineProperty
        const bs = Object.defineProperties
        const ws = Object.getOwnPropertyDescriptors
        const _s = Object.getOwnPropertySymbols
        const xs = Object.prototype.hasOwnProperty
        const Es = Object.prototype.propertyIsEnumerable
        const ks = function (e, t, r) {
          return t in e
            ? ms(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: r
            })
            : (e[t] = r)
        }
        const Ss = function (e, t) {
          for (var r in t || (t = {})) xs.call(t, r) && ks(e, r, t[r])
          if (_s) {
            let n
            const o = (0, i.Z)(_s(t))
            try {
              for (o.s(); !(n = o.n()).done;) {
                r = n.value
                Es.call(t, r) && ks(e, r, t[r])
              }
            } catch (s) {
              o.e(s)
            } finally {
              o.f()
            }
          }
          return e
        }
        var Zs = (function () {
          function e (t) {
            ;(0, a.Z)(this, e),
            (this.events = new (m())()),
            (this.rpcProviders = {}),
            (this.providerOpts = t),
            (this.logger =
                  typeof (t === null || void 0 === t ? void 0 : t.logger) <
                    'u' &&
                  typeof (t === null || void 0 === t ? void 0 : t.logger) !==
                    'string'
                    ? t.logger
                    : f()(
                      (0, _.getDefaultLoggerOptions)({
                        level:
                            (t === null || void 0 === t ? void 0 : t.logger) ||
                            gs
                      })
                    ))
          }
          return (
            (0, c.Z)(
              e,
              [
                {
                  key: 'request',
                  value: (function () {
                    const e = (0, s.Z)(
                      (0, o.Z)().mark(function e (t, r) {
                        let i, s, a, c
                        return (0, o.Z)().wrap(
                          function (e) {
                            for (;;) {
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((i = this.validateChain(r)),
                                    (s = (0, n.Z)(i, 2)),
                                    (a = s[0]),
                                    (c = s[1]),
                                    this.session)
                                  ) {
                                    e.next = 3
                                    break
                                  }
                                  throw new Error(
                                    'Please call connect() before request()'
                                  )
                                case 3:
                                  return (
                                    (e.next = 5),
                                    this.getProvider(a).request({
                                      request: Ss({}, t),
                                      chainId: ''.concat(a, ':').concat(c),
                                      topic: this.session.topic
                                    })
                                  )
                                case 5:
                                  return e.abrupt('return', e.sent)
                                case 6:
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
                    return function (t, r) {
                      return e.apply(this, arguments)
                    }
                  })()
                },
                {
                  key: 'sendAsync',
                  value: function (e, t, r) {
                    this.request(e, r)
                      .then(function (e) {
                        return t(null, e)
                      })
                      .catch(function (e) {
                        return t(e, void 0)
                      })
                  }
                },
                {
                  key: 'enable',
                  value: (function () {
                    const e = (0, s.Z)(
                      (0, o.Z)().mark(function e () {
                        return (0, o.Z)().wrap(
                          function (e) {
                            for (;;) {
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (this.client) {
                                    e.next = 2
                                    break
                                  }
                                  throw new Error(
                                    'Sign Client not initialized'
                                  )
                                case 2:
                                  if (((e.t0 = this.session), e.t0)) {
                                    e.next = 6
                                    break
                                  }
                                  return (
                                    (e.next = 6),
                                    this.connect({
                                      namespaces: this.namespaces
                                    })
                                  )
                                case 6:
                                  return (e.next = 8), this.requestAccounts()
                                case 8:
                                  return e.abrupt('return', e.sent)
                                case 9:
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
                    const e = (0, s.Z)(
                      (0, o.Z)().mark(function e () {
                        let t
                        return (0, o.Z)().wrap(
                          function (e) {
                            for (;;) {
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (this.session) {
                                    e.next = 2
                                    break
                                  }
                                  throw new Error(
                                    'Please call connect() before enable()'
                                  )
                                case 2:
                                  return (
                                    (e.next = 4),
                                    this.client.disconnect({
                                      topic:
                                          (t = this.session) == null
                                            ? void 0
                                            : t.topic,
                                      reason: cs('USER_DISCONNECTED')
                                    })
                                  )
                                case 4:
                                  return (e.next = 6), this.cleanup()
                                case 6:
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
                    const e = (0, s.Z)(
                      (0, o.Z)().mark(function e (t) {
                        let r
                        return (0, o.Z)().wrap(
                          function (e) {
                            for (;;) {
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (this.client) {
                                    e.next = 2
                                    break
                                  }
                                  throw new Error(
                                    'Sign Client not initialized'
                                  )
                                case 2:
                                  return (
                                    (r = t.namespaces),
                                    this.setNamespaces(r),
                                    this.createProviders(),
                                    (e.next = 7),
                                    this.cleanupPendingPairings()
                                  )
                                case 7:
                                  if (!0 !== t.skipPairing) {
                                    e.next = 11
                                    break
                                  }
                                  ;(e.t0 = void 0), (e.next = 14)
                                  break
                                case 11:
                                  return (
                                    (e.next = 13), this.pair(t.pairingTopic)
                                  )
                                case 13:
                                  e.t0 = e.sent
                                case 14:
                                  return e.abrupt('return', e.t0)
                                case 15:
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
                    return function (t) {
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
                  key: 'removeListener',
                  value: function (e, t) {
                    this.events.removeListener(e, t)
                  }
                },
                {
                  key: 'off',
                  value: function (e, t) {
                    this.events.off(e, t)
                  }
                },
                {
                  key: 'isWalletConnect',
                  get: function () {
                    return !0
                  }
                },
                {
                  key: 'pair',
                  value: (function () {
                    const e = (0, s.Z)(
                      (0, o.Z)().mark(function e (t) {
                        let r, n, i
                        return (0, o.Z)().wrap(
                          function (e) {
                            for (;;) {
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.client.connect({
                                      pairingTopic: t,
                                      requiredNamespaces: this.namespaces
                                    })
                                  )
                                case 2:
                                  return (
                                    (r = e.sent),
                                    (n = r.uri),
                                    (i = r.approval),
                                    n &&
                                        ((this.uri = n),
                                        this.events.emit('display_uri', n)),
                                    (e.next = 8),
                                    i()
                                  )
                                case 8:
                                  return (
                                    (this.session = e.sent),
                                    this.onSessionUpdate(),
                                    this.onConnect(),
                                    e.abrupt('return', this.session)
                                  )
                                case 12:
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
                    return function (t) {
                      return e.apply(this, arguments)
                    }
                  })()
                },
                {
                  key: 'setDefaultChain',
                  value: function (e, t) {
                    try {
                      const r = this.validateChain(e)
                      const i = (0, n.Z)(r, 2)
                      const o = i[0]
                      const s = i[1]
                      this.getProvider(o).setDefaultChain(s, t)
                    } catch (o) {
                      if (!/Please call connect/.test(o.message)) throw o
                    }
                  }
                },
                {
                  key: 'cleanupPendingPairings',
                  value: (function () {
                    const e = (0, s.Z)(
                      (0, o.Z)().mark(function e () {
                        let t
                        let r
                        let n
                        let s
                        let a
                        const c = arguments
                        return (0, o.Z)().wrap(
                          function (e) {
                            for (;;) {
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((t =
                                        c.length > 0 && void 0 !== c[0]
                                          ? c[0]
                                          : {}),
                                    this.logger.info(
                                      'Cleaning up inactive pairings...'
                                    ),
                                    !us((r = this.client.pairing.getAll())))
                                  ) {
                                    e.next = 26
                                    break
                                  }
                                  ;(n = (0, i.Z)(r)), (e.prev = 5), n.s()
                                case 7:
                                  if ((s = n.n()).done) {
                                    e.next = 17
                                    break
                                  }
                                  if (((a = s.value), !t.deletePairings)) {
                                    e.next = 13
                                    break
                                  }
                                  this.client.core.expirer.set(a.topic, 0),
                                  (e.next = 15)
                                  break
                                case 13:
                                  return (
                                    (e.next = 15),
                                    this.client.core.relayer.subscriber.unsubscribe(
                                      a.topic
                                    )
                                  )
                                case 15:
                                  e.next = 7
                                  break
                                case 17:
                                  e.next = 22
                                  break
                                case 19:
                                  ;(e.prev = 19),
                                  (e.t0 = e.catch(5)),
                                  n.e(e.t0)
                                case 22:
                                  return (e.prev = 22), n.f(), e.finish(22)
                                case 25:
                                  this.logger.info(
                                    'Inactive pairings cleared: '.concat(
                                      r.length
                                    )
                                  )
                                case 26:
                                case 'end':
                                  return e.stop()
                              }
                            }
                          },
                          e,
                          this,
                          [[5, 19, 22, 25]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })()
                },
                {
                  key: 'checkStorage',
                  value: (function () {
                    const e = (0, s.Z)(
                      (0, o.Z)().mark(function e () {
                        let t
                        return (0, o.Z)().wrap(
                          function (e) {
                            for (;;) {
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.client.core.storage.getItem(
                                      ''.concat(ys, '/namespaces')
                                    )
                                  )
                                case 2:
                                  if (((e.t0 = e.sent), e.t0)) {
                                    e.next = 5
                                    break
                                  }
                                  e.t0 = {}
                                case 5:
                                  if (
                                    ((this.namespaces = e.t0),
                                    this.namespaces && this.createProviders(),
                                    !this.client.session.length)
                                  ) {
                                    e.next = 10
                                    break
                                  }
                                  ;(t = this.client.session.keys.length - 1),
                                  (this.session = this.client.session.get(
                                    this.client.session.keys[t]
                                  )),
                                  this.onSessionUpdate()
                                case 10:
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
                  key: 'initialize',
                  value: (function () {
                    const e = (0, s.Z)(
                      (0, o.Z)().mark(function e () {
                        return (0, o.Z)().wrap(
                          function (e) {
                            for (;;) {
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    this.logger.trace('Initialized'),
                                    (e.next = 3),
                                    this.createClient()
                                  )
                                case 3:
                                  this.checkStorage(),
                                  this.registerEventListeners()
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
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })()
                },
                {
                  key: 'createClient',
                  value: (function () {
                    const e = (0, s.Z)(
                      (0, o.Z)().mark(function e () {
                        return (0, o.Z)().wrap(
                          function (e) {
                            for (;;) {
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((e.t0 = this.providerOpts.client), e.t0)
                                  ) {
                                    e.next = 5
                                    break
                                  }
                                  return (
                                    (e.next = 4),
                                    ns.init({
                                      logger: this.providerOpts.logger || gs,
                                      relayUrl:
                                          this.providerOpts.relayUrl ||
                                          'wss://relay.walletconnect.com',
                                      projectId: this.providerOpts.projectId,
                                      metadata: this.providerOpts.metadata,
                                      storageOptions:
                                          this.providerOpts.storageOptions,
                                      name: this.providerOpts.name
                                    })
                                  )
                                case 4:
                                  e.t0 = e.sent
                                case 5:
                                  ;(this.client = e.t0),
                                  this.logger.trace(
                                    'SignClient Initialized'
                                  )
                                case 7:
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
                  key: 'createProviders',
                  value: function () {
                    const e = this
                    if (!this.client) { throw new Error('Sign Client not initialized') }
                    Object.keys(this.namespaces).forEach(function (t) {
                      switch (t) {
                        case 'eip155':
                          e.rpcProviders[t] = new ps({
                            client: e.client,
                            namespace: e.namespaces[t],
                            events: e.events
                          })
                          break
                        case 'solana':
                          e.rpcProviders[t] = new hs({
                            client: e.client,
                            namespace: e.namespaces[t],
                            events: e.events
                          })
                          break
                        case 'cosmos':
                          e.rpcProviders[t] = new ds({
                            client: e.client,
                            namespace: e.namespaces[t],
                            events: e.events
                          })
                          break
                        case 'polkadot':
                          break
                        case 'cip34':
                          e.rpcProviders[t] = new vs({
                            client: e.client,
                            namespace: e.namespaces[t],
                            events: e.events
                          })
                      }
                    })
                  }
                },
                {
                  key: 'registerEventListeners',
                  value: function () {
                    const e = this
                    if (typeof this.client > 'u') { throw new Error('Sign Client is not initialized') }
                    this.client.on('session_ping', function (t) {
                      e.events.emit('session_ping', t)
                    }),
                    this.client.on('session_event', function (t) {
                      const r = t.params
                      const n = r.event
                      n.name === 'accountsChanged'
                        ? e.events.emit('accountsChanged', n.data)
                        : n.name === 'chainChanged'
                          ? e.onChainChanged(n.data, r.chainId)
                          : e.events.emit(n.name, n.data),
                      e.events.emit('session_event', t)
                    }),
                    this.client.on('session_update', function (t) {
                      let r
                      const n = t.topic
                      const i = t.params
                      const o = i.namespaces
                      const s =
                              (r = e.client) == null ? void 0 : r.session.get(n)
                          ;(e.session = (function (e, t) {
                        return bs(e, ws(t))
                      })(Ss({}, s), { namespaces: o })),
                      e.onSessionUpdate(),
                      e.events.emit('session_update', {
                        topic: n,
                        params: i
                      })
                    }),
                    this.client.on(
                      'session_delete',
                      (function () {
                        const t = (0, s.Z)(
                          (0, o.Z)().mark(function t (r) {
                            return (0, o.Z)().wrap(function (t) {
                              for (;;) {
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (t.next = 2), e.cleanup()
                                  case 2:
                                    e.events.emit('session_delete', r)
                                  case 3:
                                  case 'end':
                                    return t.stop()
                                }
                              }
                            }, t)
                          })
                        )
                        return function (e) {
                          return t.apply(this, arguments)
                        }
                      })()
                    )
                  }
                },
                {
                  key: 'getProvider',
                  value: function (e) {
                    if (!this.rpcProviders[e]) { throw new Error('Provider not found: '.concat(e)) }
                    return this.rpcProviders[e]
                  }
                },
                {
                  key: 'onSessionUpdate',
                  value: function () {
                    const e = this
                    Object.keys(this.rpcProviders).forEach(function (t) {
                      let r
                      e.getProvider(t).updateNamespace(
                        (r = e.session) == null ? void 0 : r.namespaces[t]
                      )
                    })
                  }
                },
                {
                  key: 'setNamespaces',
                  value: function (e) {
                    if (!e || !Object.keys(e).length) { throw new Error('Namespaces must be not empty') }
                    this.client.core.storage.setItem(
                      ''.concat(ys, '/namespaces'),
                      e
                    ),
                    (this.namespaces = e)
                  }
                },
                {
                  key: 'validateChain',
                  value: function (e) {
                    const t = (e === null || void 0 === e
                      ? void 0
                      : e.split(':')) || ['', '']
                    const r = (0, n.Z)(t, 2)
                    const i = r[0]
                    const o = r[1]
                    if (i && !Object.keys(this.namespaces).includes(i)) {
                      throw new Error(
                        "Namespace '".concat(
                          i,
                          "' is not configured. Please call connect() first with namespace config."
                        )
                      )
                    }
                    return i && o
                      ? [i, o]
                      : (function (e) {
                          let t
                          const r =
                                (t = e[Object.keys(e)[0]]) == null
                                  ? void 0
                                  : t.chains[0]
                          return [r.split(':')[0], r.split(':')[1]]
                        })(this.namespaces)
                  }
                },
                {
                  key: 'requestAccounts',
                  value: (function () {
                    const e = (0, s.Z)(
                      (0, o.Z)().mark(function e () {
                        let t, r, i
                        return (0, o.Z)().wrap(
                          function (e) {
                            for (;;) {
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (t = this.validateChain()),
                                    (r = (0, n.Z)(t, 1)),
                                    (i = r[0]),
                                    (e.next = 3),
                                    this.getProvider(i).requestAccounts()
                                  )
                                case 3:
                                  return e.abrupt('return', e.sent)
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
                  key: 'onChainChanged',
                  value: function (e, t) {
                    const r = this.validateChain(t)
                    const i = (0, n.Z)(r, 2)
                    const o = i[0]
                    const s = i[1]
                    this.getProvider(o).setDefaultChain(s),
                    this.events.emit('chainChanged', e)
                  }
                },
                {
                  key: 'onConnect',
                  value: function () {
                    this.events.emit('connect', { session: this.session })
                  }
                },
                {
                  key: 'cleanup',
                  value: (function () {
                    const e = (0, s.Z)(
                      (0, o.Z)().mark(function e () {
                        return (0, o.Z)().wrap(
                          function (e) {
                            for (;;) {
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.session = void 0),
                                    (e.next = 3),
                                    this.cleanupPendingPairings({
                                      deletePairings: !0
                                    })
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
                }
              ],
              [
                {
                  key: 'init',
                  value: (function () {
                    const t = (0, s.Z)(
                      (0, o.Z)().mark(function t (r) {
                        let n
                        return (0, o.Z)().wrap(function (t) {
                          for (;;) {
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (n = new e(r)), (t.next = 3), n.initialize()
                                )
                              case 3:
                                return t.abrupt('return', n)
                              case 4:
                              case 'end':
                                return t.stop()
                            }
                          }
                        }, t)
                      })
                    )
                    return function (e) {
                      return t.apply(this, arguments)
                    }
                  })()
                }
              ]
            ),
            e
          )
        })()
        var Os = Zs
      },
      92340: function (e, t) {
        'use strict'
        function r (e) {
          let t = void 0
          return (
            typeof window !== 'undefined' &&
              typeof window[e] !== 'undefined' &&
              (t = window[e]),
            t
          )
        }
        function n (e) {
          const t = r(e)
          if (!t) throw new Error(''.concat(e, ' is not defined in Window'))
          return t
        }
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.getLocalStorage =
            t.getLocalStorageOrThrow =
            t.getCrypto =
            t.getCryptoOrThrow =
            t.getLocation =
            t.getLocationOrThrow =
            t.getNavigator =
            t.getNavigatorOrThrow =
            t.getDocument =
            t.getDocumentOrThrow =
            t.getFromWindowOrThrow =
            t.getFromWindow =
              void 0),
        (t.getFromWindow = r),
        (t.getFromWindowOrThrow = n),
        (t.getDocumentOrThrow = function () {
          return n('document')
        }),
        (t.getDocument = function () {
          return r('document')
        }),
        (t.getNavigatorOrThrow = function () {
          return n('navigator')
        }),
        (t.getNavigator = function () {
          return r('navigator')
        }),
        (t.getLocationOrThrow = function () {
          return n('location')
        }),
        (t.getLocation = function () {
          return r('location')
        }),
        (t.getCryptoOrThrow = function () {
          return n('crypto')
        }),
        (t.getCrypto = function () {
          return r('crypto')
        }),
        (t.getLocalStorageOrThrow = function () {
          return n('localStorage')
        }),
        (t.getLocalStorage = function () {
          return r('localStorage')
        })
      },
      2378: function (e, t, r) {
        'use strict'
        const n = r(92340)
      },
      29212: function (e) {
        'use strict'
        e.exports = function (e, t) {
          for (
            var r = {}, n = Object.keys(e), i = Array.isArray(t), o = 0;
            o < n.length;
            o++
          ) {
            const s = n[o]
            const a = e[s]
            ;(i ? t.indexOf(s) !== -1 : t(s, a, e)) && (r[s] = a)
          }
          return r
        }
      },
      80957: function (e, t, r) {
        'use strict'
        const n = r(38416).default
        const i = r(27424).default
        const o = r(74704).default
        const s = r(861).default
        const a = r(71199)
        const c = r(17388)
        const u = r(89953)
        const f = r(29212)
        const l = Symbol('encodeFragmentIdentifier')
        function p (e) {
          if (typeof e !== 'string' || e.length !== 1) {
            throw new TypeError(
              'arrayFormatSeparator must be single character string'
            )
          }
        }
        function h (e, t) {
          return t.encode ? (t.strict ? a(e) : encodeURIComponent(e)) : e
        }
        function d (e, t) {
          return t.decode ? c(e) : e
        }
        function v (e) {
          return Array.isArray(e)
            ? e.sort()
            : typeof e === 'object'
              ? v(Object.keys(e))
                .sort(function (e, t) {
                  return Number(e) - Number(t)
                })
                .map(function (t) {
                  return e[t]
                })
              : e
        }
        function g (e) {
          const t = e.indexOf('#')
          return t !== -1 && (e = e.slice(0, t)), e
        }
        function y (e) {
          const t = (e = g(e)).indexOf('?')
          return t === -1 ? '' : e.slice(t + 1)
        }
        function m (e, t) {
          return (
            t.parseNumbers &&
            !Number.isNaN(Number(e)) &&
            typeof e === 'string' &&
            e.trim() !== ''
              ? (e = Number(e))
              : !t.parseBooleans ||
                e === null ||
                (e.toLowerCase() !== 'true' && e.toLowerCase() !== 'false') ||
                (e = e.toLowerCase() === 'true'),
            e
          )
        }
        function b (e, t) {
          p(
            (t = Object.assign(
              {
                decode: !0,
                sort: !0,
                arrayFormat: 'none',
                arrayFormatSeparator: ',',
                parseNumbers: !1,
                parseBooleans: !1
              },
              t
            )).arrayFormatSeparator
          )
          const r = (function (e) {
            let t
            switch (e.arrayFormat) {
              case 'index':
                return function (e, r, n) {
                  ;(t = /\[(\d*)\]$/.exec(e)),
                  (e = e.replace(/\[\d*\]$/, '')),
                  t
                    ? (void 0 === n[e] && (n[e] = {}), (n[e][t[1]] = r))
                    : (n[e] = r)
                }
              case 'bracket':
                return function (e, r, n) {
                  ;(t = /(\[\])$/.exec(e)),
                  (e = e.replace(/\[\]$/, '')),
                  t
                    ? void 0 !== n[e]
                      ? (n[e] = [].concat(n[e], r))
                      : (n[e] = [r])
                    : (n[e] = r)
                }
              case 'colon-list-separator':
                return function (e, r, n) {
                  ;(t = /(:list)$/.exec(e)),
                  (e = e.replace(/:list$/, '')),
                  t
                    ? void 0 !== n[e]
                      ? (n[e] = [].concat(n[e], r))
                      : (n[e] = [r])
                    : (n[e] = r)
                }
              case 'comma':
              case 'separator':
                return function (t, r, n) {
                  const i =
                        typeof r === 'string' &&
                        r.includes(e.arrayFormatSeparator)
                  const o =
                        typeof r === 'string' &&
                        !i &&
                        d(r, e).includes(e.arrayFormatSeparator)
                  r = o ? d(r, e) : r
                  const s =
                      i || o
                        ? r.split(e.arrayFormatSeparator).map(function (t) {
                          return d(t, e)
                        })
                        : r === null
                          ? r
                          : d(r, e)
                  n[t] = s
                }
              case 'bracket-separator':
                return function (t, r, n) {
                  const i = /(\[\])$/.test(t)
                  if (((t = t.replace(/\[\]$/, '')), i)) {
                    const o =
                        r === null
                          ? []
                          : r.split(e.arrayFormatSeparator).map(function (t) {
                            return d(t, e)
                          })
                    void 0 !== n[t] ? (n[t] = [].concat(n[t], o)) : (n[t] = o)
                  } else n[t] = r ? d(r, e) : r
                }
              default:
                return function (e, t, r) {
                  void 0 !== r[e] ? (r[e] = [].concat(r[e], t)) : (r[e] = t)
                }
            }
          })(t)
          const n = Object.create(null)
          if (typeof e !== 'string') return n
          if (!(e = e.trim().replace(/^[?#&]/, ''))) return n
          let s
          const a = o(e.split('&'))
          try {
            for (a.s(); !(s = a.n()).done;) {
              const c = s.value
              if (c !== '') {
                const f = u(t.decode ? c.replace(/\+/g, ' ') : c, '=')
                const l = i(f, 2)
                const h = l[0]
                let g = l[1]
                ;(g =
                  void 0 === g
                    ? null
                    : ['comma', 'separator', 'bracket-separator'].includes(
                        t.arrayFormat
                      )
                        ? g
                        : d(g, t)),
                r(d(h, t), g, n)
              }
            }
          } catch (S) {
            a.e(S)
          } finally {
            a.f()
          }
          for (let y = 0, b = Object.keys(n); y < b.length; y++) {
            const w = b[y]
            const _ = n[w]
            if (typeof _ === 'object' && _ !== null) {
              for (let x = 0, E = Object.keys(_); x < E.length; x++) {
                const k = E[x]
                _[k] = m(_[k], t)
              }
            } else n[w] = m(_, t)
          }
          return !1 === t.sort
            ? n
            : (!0 === t.sort
                ? Object.keys(n).sort()
                : Object.keys(n).sort(t.sort)
              ).reduce(function (e, t) {
                const r = n[t]
                return (
                  Boolean(r) && typeof r === 'object' && !Array.isArray(r)
                    ? (e[t] = v(r))
                    : (e[t] = r),
                  e
                )
              }, Object.create(null))
        }
        ;(t.extract = y),
        (t.parse = b),
        (t.stringify = function (e, t) {
          if (!e) return ''
          p(
            (t = Object.assign(
              {
                encode: !0,
                strict: !0,
                arrayFormat: 'none',
                arrayFormatSeparator: ','
              },
              t
            )).arrayFormatSeparator
          )
          for (
            var r = function (r) {
                return (
                  (t.skipNull && ((n = e[r]) === null || void 0 === n)) ||
                    (t.skipEmptyString && e[r] === '')
                )
                let n
              },
              n = (function (e) {
                switch (e.arrayFormat) {
                  case 'index':
                    return function (t) {
                      return function (r, n) {
                        const i = r.length
                        return void 0 === n ||
                            (e.skipNull && n === null) ||
                            (e.skipEmptyString && n === '')
                          ? r
                          : [].concat(
                              s(r),
                              n === null
                                ? [[h(t, e), '[', i, ']'].join('')]
                                : [
                                    [
                                      h(t, e),
                                      '[',
                                      h(i, e),
                                      ']=',
                                      h(n, e)
                                    ].join('')
                                  ]
                            )
                      }
                    }
                  case 'bracket':
                    return function (t) {
                      return function (r, n) {
                        return void 0 === n ||
                            (e.skipNull && n === null) ||
                            (e.skipEmptyString && n === '')
                          ? r
                          : [].concat(
                              s(r),
                              n === null
                                ? [[h(t, e), '[]'].join('')]
                                : [[h(t, e), '[]=', h(n, e)].join('')]
                            )
                      }
                    }
                  case 'colon-list-separator':
                    return function (t) {
                      return function (r, n) {
                        return void 0 === n ||
                            (e.skipNull && n === null) ||
                            (e.skipEmptyString && n === '')
                          ? r
                          : [].concat(
                              s(r),
                              n === null
                                ? [[h(t, e), ':list='].join('')]
                                : [[h(t, e), ':list=', h(n, e)].join('')]
                            )
                      }
                    }
                  case 'comma':
                  case 'separator':
                  case 'bracket-separator':
                    var t =
                        e.arrayFormat === 'bracket-separator' ? '[]=' : '='
                    return function (r) {
                      return function (n, i) {
                        return void 0 === i ||
                            (e.skipNull && i === null) ||
                            (e.skipEmptyString && i === '')
                          ? n
                          : ((i = i === null ? '' : i),
                            n.length === 0
                              ? [[h(r, e), t, h(i, e)].join('')]
                              : [[n, h(i, e)].join(e.arrayFormatSeparator)])
                      }
                    }
                  default:
                    return function (t) {
                      return function (r, n) {
                        return void 0 === n ||
                            (e.skipNull && n === null) ||
                            (e.skipEmptyString && n === '')
                          ? r
                          : [].concat(
                              s(r),
                              n === null
                                ? [h(t, e)]
                                : [[h(t, e), '=', h(n, e)].join('')]
                            )
                      }
                    }
                }
              })(t),
              i = {},
              o = 0,
              a = Object.keys(e);
            o < a.length;
            o++
          ) {
            const c = a[o]
            r(c) || (i[c] = e[c])
          }
          const u = Object.keys(i)
          return (
            !1 !== t.sort && u.sort(t.sort),
            u
              .map(function (r) {
                const i = e[r]
                return void 0 === i
                  ? ''
                  : i === null
                    ? h(r, t)
                    : Array.isArray(i)
                      ? i.length === 0 &&
                          t.arrayFormat === 'bracket-separator'
                        ? h(r, t) + '[]'
                        : i.reduce(n(r), []).join('&')
                      : h(r, t) + '=' + h(i, t)
              })
              .filter(function (e) {
                return e.length > 0
              })
              .join('&')
          )
        }),
        (t.parseUrl = function (e, t) {
          t = Object.assign({ decode: !0 }, t)
          const r = u(e, '#')
          const n = i(r, 2)
          const o = n[0]
          const s = n[1]
          return Object.assign(
            { url: o.split('?')[0] || '', query: b(y(e), t) },
            t && t.parseFragmentIdentifier && s
              ? { fragmentIdentifier: d(s, t) }
              : {}
          )
        }),
        (t.stringifyUrl = function (e, r) {
          r = Object.assign(n({ encode: !0, strict: !0 }, l, !0), r)
          const i = g(e.url).split('?')[0] || ''
          const o = t.extract(e.url)
          const s = t.parse(o, { sort: !1 })
          const a = Object.assign(s, e.query)
          let c = t.stringify(a, r)
          c && (c = '?'.concat(c))
          let u = (function (e) {
            let t = ''
            const r = e.indexOf('#')
            return r !== -1 && (t = e.slice(r)), t
          })(e.url)
          return (
            e.fragmentIdentifier &&
                (u = '#'.concat(
                  r[l] ? h(e.fragmentIdentifier, r) : e.fragmentIdentifier
                )),
            ''.concat(i).concat(c).concat(u)
          )
        }),
        (t.pick = function (e, r, i) {
          i = Object.assign(n({ parseFragmentIdentifier: !0 }, l, !1), i)
          const o = t.parseUrl(e, i)
          const s = o.url
          const a = o.query
          const c = o.fragmentIdentifier
          return t.stringifyUrl(
            { url: s, query: f(a, r), fragmentIdentifier: c },
            i
          )
        }),
        (t.exclude = function (e, r, n) {
          const i = Array.isArray(r)
            ? function (e) {
              return !r.includes(e)
            }
            : function (e, t) {
              return !r(e, t)
            }
          return t.pick(e, i, n)
        })
      },
      85601: function (e, t, r) {
        e = r.nmd(e)
        const n = 200
        const i = '__lodash_hash_undefined__'
        const o = 1
        const s = 2
        const a = 9007199254740991
        const c = '[object Arguments]'
        const u = '[object Array]'
        const f = '[object AsyncFunction]'
        const l = '[object Boolean]'
        const p = '[object Date]'
        const h = '[object Error]'
        const d = '[object Function]'
        const v = '[object GeneratorFunction]'
        const g = '[object Map]'
        const y = '[object Number]'
        const m = '[object Null]'
        const b = '[object Object]'
        const w = '[object Promise]'
        const _ = '[object Proxy]'
        const x = '[object RegExp]'
        const E = '[object Set]'
        const k = '[object String]'
        const S = '[object Symbol]'
        const Z = '[object Undefined]'
        const O = '[object WeakMap]'
        const I = '[object ArrayBuffer]'
        const P = '[object DataView]'
        const N = /^\[object .+?Constructor\]$/
        const R = /^(?:0|[1-9]\d*)$/
        const T = {}
        ;(T['[object Float32Array]'] =
          T['[object Float64Array]'] =
          T['[object Int8Array]'] =
          T['[object Int16Array]'] =
          T['[object Int32Array]'] =
          T['[object Uint8Array]'] =
          T['[object Uint8ClampedArray]'] =
          T['[object Uint16Array]'] =
          T['[object Uint32Array]'] =
            !0),
        (T[c] =
            T[u] =
            T[I] =
            T[l] =
            T[P] =
            T[p] =
            T[h] =
            T[d] =
            T[g] =
            T[y] =
            T[b] =
            T[x] =
            T[E] =
            T[k] =
            T[O] =
              !1)
        const A = typeof r.g === 'object' && r.g && r.g.Object === Object && r.g
        const U = typeof self === 'object' && self && self.Object === Object && self
        const j = A || U || Function('return this')()
        const L = t && !t.nodeType && t
        const M = L && e && !e.nodeType && e
        const C = M && M.exports === L
        const D = C && A.process
        const z = (function () {
          try {
            return D && D.binding && D.binding('util')
          } catch (e) {}
        })()
        const q = z && z.isTypedArray
        function H (e, t) {
          for (let r = -1, n = e == null ? 0 : e.length; ++r < n;) { if (t(e[r], r, e)) return !0 }
          return !1
        }
        function V (e) {
          let t = -1
          const r = Array(e.size)
          return (
            e.forEach(function (e, n) {
              r[++t] = [n, e]
            }),
            r
          )
        }
        function K (e) {
          let t = -1
          const r = Array(e.size)
          return (
            e.forEach(function (e) {
              r[++t] = e
            }),
            r
          )
        }
        let F
        let B
        const W = Array.prototype
        const G = Function.prototype
        const Y = Object.prototype
        const J = j['__core-js_shared__']
        const X = G.toString
        const $ = Y.hasOwnProperty
        const Q = (function () {
          const e = /[^.]+$/.exec((J && J.keys && J.keys.IE_PROTO) || '')
          return e ? 'Symbol(src)_1.' + e : ''
        })()
        const ee = Y.toString
        const te = RegExp(
          '^' +
              X.call($)
                .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  '$1.*?'
                ) +
              '$'
        )
        const re = C ? j.Buffer : void 0
        const ne = j.Symbol
        const ie = j.Uint8Array
        const oe = Y.propertyIsEnumerable
        const se = W.splice
        const ae = ne ? ne.toStringTag : void 0
        const ce = Object.getOwnPropertySymbols
        const ue = re ? re.isBuffer : void 0
        const fe =
            ((F = Object.keys),
            (B = Object),
            function (e) {
              return F(B(e))
            })
        const le = De(j, 'DataView')
        const pe = De(j, 'Map')
        const he = De(j, 'Promise')
        const de = De(j, 'Set')
        const ve = De(j, 'WeakMap')
        const ge = De(Object, 'create')
        const ye = Ve(le)
        const me = Ve(pe)
        const be = Ve(he)
        const we = Ve(de)
        const _e = Ve(ve)
        const xe = ne ? ne.prototype : void 0
        const Ee = xe ? xe.valueOf : void 0
        function ke (e) {
          let t = -1
          const r = e == null ? 0 : e.length
          for (this.clear(); ++t < r;) {
            const n = e[t]
            this.set(n[0], n[1])
          }
        }
        function Se (e) {
          let t = -1
          const r = e == null ? 0 : e.length
          for (this.clear(); ++t < r;) {
            const n = e[t]
            this.set(n[0], n[1])
          }
        }
        function Ze (e) {
          let t = -1
          const r = e == null ? 0 : e.length
          for (this.clear(); ++t < r;) {
            const n = e[t]
            this.set(n[0], n[1])
          }
        }
        function Oe (e) {
          let t = -1
          const r = e == null ? 0 : e.length
          for (this.__data__ = new Ze(); ++t < r;) this.add(e[t])
        }
        function Ie (e) {
          const t = (this.__data__ = new Se(e))
          this.size = t.size
        }
        function Pe (e, t) {
          const r = Be(e)
          const n = !r && Fe(e)
          const i = !r && !n && We(e)
          const o = !r && !n && !i && $e(e)
          const s = r || n || i || o
          const a = s
            ? (function (e, t) {
                for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r)
                return n
              })(e.length, String)
            : []
          const c = a.length
          for (const u in e) {
            (!t && !$.call(e, u)) ||
              (s &&
                (u == 'length' ||
                  (i && (u == 'offset' || u == 'parent')) ||
                  (o &&
                    (u == 'buffer' ||
                      u == 'byteLength' ||
                      u == 'byteOffset')) ||
                  He(u, c))) ||
              a.push(u)
          }
          return a
        }
        function Ne (e, t) {
          for (let r = e.length; r--;) if (Ke(e[r][0], t)) return r
          return -1
        }
        function Re (e) {
          return e == null
            ? void 0 === e
              ? Z
              : m
            : ae && ae in Object(e)
              ? (function (e) {
                  const t = $.call(e, ae)
                  const r = e[ae]
                  try {
                    e[ae] = void 0
                    var n = !0
                  } catch (o) {}
                  const i = ee.call(e)
                  n && (t ? (e[ae] = r) : delete e[ae])
                  return i
                })(e)
              : (function (e) {
                  return ee.call(e)
                })(e)
        }
        function Te (e) {
          return Xe(e) && Re(e) == c
        }
        function Ae (e, t, r, n, i) {
          return (
            e === t ||
            (e == null || t == null || (!Xe(e) && !Xe(t))
              ? e !== e && t !== t
              : (function (e, t, r, n, i, a) {
                  let f = Be(e)
                  const d = Be(t)
                  let v = f ? u : qe(e)
                  let m = d ? u : qe(t)
                  let w = (v = v == c ? b : v) == b
                  const _ = (m = m == c ? b : m) == b
                  const Z = v == m
                  if (Z && We(e)) {
                    if (!We(t)) return !1
                    ;(f = !0), (w = !1)
                  }
                  if (Z && !w) {
                    return (
                      a || (a = new Ie()),
                      f || $e(e)
                        ? Le(e, t, r, n, i, a)
                        : (function (e, t, r, n, i, a, c) {
                            switch (r) {
                              case P:
                                if (
                                  e.byteLength != t.byteLength ||
                                  e.byteOffset != t.byteOffset
                                ) {
                                  return !1
                                }(e = e.buffer), (t = t.buffer)
                              case I:
                                return !(
                                  e.byteLength != t.byteLength ||
                                  !a(new ie(e), new ie(t))
                                )
                              case l:
                              case p:
                              case y:
                                return Ke(+e, +t)
                              case h:
                                return (
                                  e.name == t.name && e.message == t.message
                                )
                              case x:
                              case k:
                                return e == t + ''
                              case g:
                                var u = V
                              case E:
                                var f = n & o
                                if ((u || (u = K), e.size != t.size && !f)) { return !1 }
                                var d = c.get(e)
                                if (d) return d == t
                                ;(n |= s), c.set(e, t)
                                var v = Le(u(e), u(t), n, i, a, c)
                                return c.delete(e), v
                              case S:
                                if (Ee) return Ee.call(e) == Ee.call(t)
                            }
                            return !1
                          })(e, t, v, r, n, i, a)
                    )
                  }
                  if (!(r & o)) {
                    const O = w && $.call(e, '__wrapped__')
                    const N = _ && $.call(t, '__wrapped__')
                    if (O || N) {
                      const R = O ? e.value() : e
                      const T = N ? t.value() : t
                      return a || (a = new Ie()), i(R, T, r, n, a)
                    }
                  }
                  if (!Z) return !1
                  return (
                    a || (a = new Ie()),
                    (function (e, t, r, n, i, s) {
                      const a = r & o
                      const c = Me(e)
                      const u = c.length
                      const f = Me(t)
                      const l = f.length
                      if (u != l && !a) return !1
                      let p = u
                      for (; p--;) {
                        var h = c[p]
                        if (!(a ? h in t : $.call(t, h))) return !1
                      }
                      const d = s.get(e)
                      if (d && s.get(t)) return d == t
                      let v = !0
                      s.set(e, t), s.set(t, e)
                      let g = a
                      for (; ++p < u;) {
                        const y = e[(h = c[p])]
                        const m = t[h]
                        if (n) { var b = a ? n(m, y, h, t, e, s) : n(y, m, h, e, t, s) }
                        if (!(void 0 === b ? y === m || i(y, m, r, n, s) : b)) {
                          v = !1
                          break
                        }
                        g || (g = h == 'constructor')
                      }
                      if (v && !g) {
                        const w = e.constructor
                        const _ = t.constructor
                        w == _ ||
                          !('constructor' in e) ||
                          !('constructor' in t) ||
                          (typeof w === 'function' &&
                            w instanceof w &&
                            typeof _ === 'function' &&
                            _ instanceof _) ||
                          (v = !1)
                      }
                      return s.delete(e), s.delete(t), v
                    })(e, t, r, n, i, a)
                  )
                })(e, t, r, n, Ae, i))
          )
        }
        function Ue (e) {
          return (
            !(
              !Je(e) ||
              (function (e) {
                return !!Q && Q in e
              })(e)
            ) && (Ge(e) ? te : N).test(Ve(e))
          )
        }
        function je (e) {
          if (
            !(function (e) {
              const t = e && e.constructor
              const r = (typeof t === 'function' && t.prototype) || Y
              return e === r
            })(e)
          ) { return fe(e) }
          const t = []
          for (const r in Object(e)) { $.call(e, r) && r != 'constructor' && t.push(r) }
          return t
        }
        function Le (e, t, r, n, i, a) {
          const c = r & o
          const u = e.length
          const f = t.length
          if (u != f && !(c && f > u)) return !1
          const l = a.get(e)
          if (l && a.get(t)) return l == t
          let p = -1
          let h = !0
          const d = r & s ? new Oe() : void 0
          for (a.set(e, t), a.set(t, e); ++p < u;) {
            var v = e[p]
            const g = t[p]
            if (n) var y = c ? n(g, v, p, t, e, a) : n(v, g, p, e, t, a)
            if (void 0 !== y) {
              if (y) continue
              h = !1
              break
            }
            if (d) {
              if (
                !H(t, function (e, t) {
                  if (((o = t), !d.has(o) && (v === e || i(v, e, r, n, a)))) { return d.push(t) }
                  let o
                })
              ) {
                h = !1
                break
              }
            } else if (v !== g && !i(v, g, r, n, a)) {
              h = !1
              break
            }
          }
          return a.delete(e), a.delete(t), h
        }
        function Me (e) {
          return (function (e, t, r) {
            const n = t(e)
            return Be(e)
              ? n
              : (function (e, t) {
                  for (let r = -1, n = t.length, i = e.length; ++r < n;) { e[i + r] = t[r] }
                  return e
                })(n, r(e))
          })(e, Qe, ze)
        }
        function Ce (e, t) {
          const r = e.__data__
          return (function (e) {
            const t = typeof e
            return t == 'string' ||
              t == 'number' ||
              t == 'symbol' ||
              t == 'boolean'
              ? e !== '__proto__'
              : e === null
          })(t)
            ? r[typeof t === 'string' ? 'string' : 'hash']
            : r.map
        }
        function De (e, t) {
          const r = (function (e, t) {
            return e == null ? void 0 : e[t]
          })(e, t)
          return Ue(r) ? r : void 0
        }
        ;(ke.prototype.clear = function () {
          ;(this.__data__ = ge ? ge(null) : {}), (this.size = 0)
        }),
        (ke.prototype.delete = function (e) {
          const t = this.has(e) && delete this.__data__[e]
          return (this.size -= t ? 1 : 0), t
        }),
        (ke.prototype.get = function (e) {
          const t = this.__data__
          if (ge) {
            const r = t[e]
            return r === i ? void 0 : r
          }
          return $.call(t, e) ? t[e] : void 0
        }),
        (ke.prototype.has = function (e) {
          const t = this.__data__
          return ge ? void 0 !== t[e] : $.call(t, e)
        }),
        (ke.prototype.set = function (e, t) {
          const r = this.__data__
          return (
            (this.size += this.has(e) ? 0 : 1),
            (r[e] = ge && void 0 === t ? i : t),
            this
          )
        }),
        (Se.prototype.clear = function () {
          ;(this.__data__ = []), (this.size = 0)
        }),
        (Se.prototype.delete = function (e) {
          const t = this.__data__
          const r = Ne(t, e)
          return (
            !(r < 0) &&
              (r == t.length - 1 ? t.pop() : se.call(t, r, 1), --this.size, !0)
          )
        }),
        (Se.prototype.get = function (e) {
          const t = this.__data__
          const r = Ne(t, e)
          return r < 0 ? void 0 : t[r][1]
        }),
        (Se.prototype.has = function (e) {
          return Ne(this.__data__, e) > -1
        }),
        (Se.prototype.set = function (e, t) {
          const r = this.__data__
          const n = Ne(r, e)
          return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this
        }),
        (Ze.prototype.clear = function () {
          ;(this.size = 0),
          (this.__data__ = {
            hash: new ke(),
            map: new (pe || Se)(),
            string: new ke()
          })
        }),
        (Ze.prototype.delete = function (e) {
          const t = Ce(this, e).delete(e)
          return (this.size -= t ? 1 : 0), t
        }),
        (Ze.prototype.get = function (e) {
          return Ce(this, e).get(e)
        }),
        (Ze.prototype.has = function (e) {
          return Ce(this, e).has(e)
        }),
        (Ze.prototype.set = function (e, t) {
          const r = Ce(this, e)
          const n = r.size
          return r.set(e, t), (this.size += r.size == n ? 0 : 1), this
        }),
        (Oe.prototype.add = Oe.prototype.push =
            function (e) {
              return this.__data__.set(e, i), this
            }),
        (Oe.prototype.has = function (e) {
          return this.__data__.has(e)
        }),
        (Ie.prototype.clear = function () {
          ;(this.__data__ = new Se()), (this.size = 0)
        }),
        (Ie.prototype.delete = function (e) {
          const t = this.__data__
          const r = t.delete(e)
          return (this.size = t.size), r
        }),
        (Ie.prototype.get = function (e) {
          return this.__data__.get(e)
        }),
        (Ie.prototype.has = function (e) {
          return this.__data__.has(e)
        }),
        (Ie.prototype.set = function (e, t) {
          let r = this.__data__
          if (r instanceof Se) {
            const i = r.__data__
            if (!pe || i.length < n - 1) { return i.push([e, t]), (this.size = ++r.size), this }
            r = this.__data__ = new Ze(i)
          }
          return r.set(e, t), (this.size = r.size), this
        })
        var ze = ce
          ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                (function (e, t) {
                  for (
                    var r = -1, n = e == null ? 0 : e.length, i = 0, o = [];
                    ++r < n;

                  ) {
                    const s = e[r]
                    t(s, r, e) && (o[i++] = s)
                  }
                  return o
                })(ce(e), function (t) {
                  return oe.call(e, t)
                }))
          }
          : function () {
            return []
          }
        var qe = Re
        function He (e, t) {
          return (
            !!(t = t == null ? a : t) &&
            (typeof e === 'number' || R.test(e)) &&
            e > -1 &&
            e % 1 == 0 &&
            e < t
          )
        }
        function Ve (e) {
          if (e != null) {
            try {
              return X.call(e)
            } catch (t) {}
            try {
              return e + ''
            } catch (t) {}
          }
          return ''
        }
        function Ke (e, t) {
          return e === t || (e !== e && t !== t)
        }
        ;((le && qe(new le(new ArrayBuffer(1))) != P) ||
          (pe && qe(new pe()) != g) ||
          (he && qe(he.resolve()) != w) ||
          (de && qe(new de()) != E) ||
          (ve && qe(new ve()) != O)) &&
          (qe = function (e) {
            const t = Re(e)
            const r = t == b ? e.constructor : void 0
            const n = r ? Ve(r) : ''
            if (n) {
              switch (n) {
                case ye:
                  return P
                case me:
                  return g
                case be:
                  return w
                case we:
                  return E
                case _e:
                  return O
              }
            }
            return t
          })
        var Fe = Te(
          (function () {
            return arguments
          })()
        )
          ? Te
          : function (e) {
            return Xe(e) && $.call(e, 'callee') && !oe.call(e, 'callee')
          }
        var Be = Array.isArray
        var We =
          ue ||
          function () {
            return !1
          }
        function Ge (e) {
          if (!Je(e)) return !1
          const t = Re(e)
          return t == d || t == v || t == f || t == _
        }
        function Ye (e) {
          return typeof e === 'number' && e > -1 && e % 1 == 0 && e <= a
        }
        function Je (e) {
          const t = typeof e
          return e != null && (t == 'object' || t == 'function')
        }
        function Xe (e) {
          return e != null && typeof e === 'object'
        }
        var $e = q
          ? (function (e) {
              return function (t) {
                return e(t)
              }
            })(q)
          : function (e) {
            return Xe(e) && Ye(e.length) && !!T[Re(e)]
          }
        function Qe (e) {
          return (t = e) != null && Ye(t.length) && !Ge(t) ? Pe(e) : je(e)
          let t
        }
        e.exports = function (e, t) {
          return Ae(e, t)
        }
      },
      32293: function (e) {
        'use strict'
        function t (e) {
          try {
            return JSON.stringify(e)
          } catch (t) {
            return '"[Circular]"'
          }
        }
        e.exports = function (e, r, n) {
          const i = (n && n.stringify) || t
          if (typeof e === 'object' && e !== null) {
            const o = r.length + 1
            if (o === 1) return e
            const s = new Array(o)
            s[0] = i(e)
            for (let a = 1; a < o; a++) s[a] = i(r[a])
            return s.join(' ')
          }
          if (typeof e !== 'string') return e
          const c = r.length
          if (c === 0) return e
          for (
            var u = '', f = 0, l = -1, p = (e && e.length) || 0, h = 0;
            h < p;

          ) {
            if (e.charCodeAt(h) === 37 && h + 1 < p) {
              switch (((l = l > -1 ? l : 0), e.charCodeAt(h + 1))) {
                case 100:
                case 102:
                  if (f >= c) break
                  if (r[f] == null) break
                  l < h && (u += e.slice(l, h)),
                  (u += Number(r[f])),
                  (l = h + 2),
                  h++
                  break
                case 105:
                  if (f >= c) break
                  if (r[f] == null) break
                  l < h && (u += e.slice(l, h)),
                  (u += Math.floor(Number(r[f]))),
                  (l = h + 2),
                  h++
                  break
                case 79:
                case 111:
                case 106:
                  if (f >= c) break
                  if (void 0 === r[f]) break
                  l < h && (u += e.slice(l, h))
                  var d = typeof r[f]
                  if (d === 'string') {
                    ;(u += "'" + r[f] + "'"), (l = h + 2), h++
                    break
                  }
                  if (d === 'function') {
                    ;(u += r[f].name || '<anonymous>'), (l = h + 2), h++
                    break
                  }
                  ;(u += i(r[f])), (l = h + 2), h++
                  break
                case 115:
                  if (f >= c) break
                  l < h && (u += e.slice(l, h)),
                  (u += String(r[f])),
                  (l = h + 2),
                  h++
                  break
                case 37:
                  l < h && (u += e.slice(l, h)),
                  (u += '%'),
                  (l = h + 2),
                  h++,
                  f--
              }
              ++f
            }
            ++h
          }
          if (l === -1) return e
          l < p && (u += e.slice(l))
          return u
        }
      },
      86160: function (e, t) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.safeJsonParse = function (e) {
          if (typeof e !== 'string') {
            throw new Error(
              'Cannot safe json parse value of type '.concat(typeof e)
            )
          }
          try {
            return JSON.parse(e)
          } catch (t) {
            return e
          }
        }),
        (t.safeJsonStringify = function (e) {
          return typeof e === 'string'
            ? e
            : JSON.stringify(e, function (e, t) {
              return typeof t === 'undefined' ? null : t
            })
        })
      },
      6304: function (e) {
        'use strict'
        e.exports = function () {
          throw new Error(
            'ws does not work in the browser. Browser clients must use the native WebSocket object'
          )
        }
      },
      94527: function (e, t, r) {
        'use strict'
        const n = r(32293)
        e.exports = s
        const i =
            (function () {
              function e (e) {
                return typeof e !== 'undefined' && e
              }
              try {
                return (
                  typeof globalThis !== 'undefined' ||
                    Object.defineProperty(Object.prototype, 'globalThis', {
                      get: function () {
                        return (
                          delete Object.prototype.globalThis,
                          (this.globalThis = this)
                        )
                      },
                      configurable: !0
                    }),
                  globalThis
                )
              } catch (t) {
                return e(self) || e(window) || e(this) || {}
              }
            })().console || {}
        const o = {
          mapHttpRequest: p,
          mapHttpResponse: p,
          wrapRequestSerializer: h,
          wrapResponseSerializer: h,
          wrapErrorSerializer: h,
          req: p,
          res: p,
          err: function (e) {
            const t = {
              type: e.constructor.name,
              msg: e.message,
              stack: e.stack
            }
            for (const r in e) void 0 === t[r] && (t[r] = e[r])
            return t
          }
        }
        function s (e) {
          ;(e = e || {}).browser = e.browser || {}
          const t = e.browser.transmit
          if (t && typeof t.send !== 'function') { throw Error('pino: transmit option must have a send function') }
          const r = e.browser.write || i
          e.browser.write && (e.browser.asObject = !0)
          const n = e.serializers || {}
          const o = (function (e, t) {
            return Array.isArray(e)
              ? e.filter(function (e) {
                return e !== '!stdSerializers.err'
              })
              : !0 === e && Object.keys(t)
          })(e.browser.serialize, n)
          let p = e.browser.serialize
          Array.isArray(e.browser.serialize) &&
            e.browser.serialize.indexOf('!stdSerializers.err') > -1 &&
            (p = !1)
          typeof r === 'function' &&
            (r.error = r.fatal = r.warn = r.info = r.debug = r.trace = r),
          !1 === e.enabled && (e.level = 'silent')
          const h = e.level || 'info'
          const v = Object.create(r)
          v.log || (v.log = d),
          Object.defineProperty(v, 'levelVal', {
            get: function () {
              return this.level === 'silent'
                ? 1 / 0
                : this.levels.values[this.level]
            }
          }),
          Object.defineProperty(v, 'level', {
            get: function () {
              return this._level
            },
            set: function (e) {
              if (e !== 'silent' && !this.levels.values[e]) {
                throw Error('unknown level ' + e)
              }(this._level = e),
              a(g, v, 'error', 'log'),
              a(g, v, 'fatal', 'error'),
              a(g, v, 'warn', 'error'),
              a(g, v, 'info', 'log'),
              a(g, v, 'debug', 'log'),
              a(g, v, 'trace', 'log')
            }
          })
          var g = {
            transmit: t,
            serialize: o,
            asObject: e.browser.asObject,
            levels: ['error', 'fatal', 'warn', 'info', 'debug', 'trace'],
            timestamp: l(e)
          }
          return (
            (v.levels = s.levels),
            (v.level = h),
            (v.setMaxListeners =
              v.getMaxListeners =
              v.emit =
              v.addListener =
              v.on =
              v.prependListener =
              v.once =
              v.prependOnceListener =
              v.removeListener =
              v.removeAllListeners =
              v.listeners =
              v.listenerCount =
              v.eventNames =
              v.write =
              v.flush =
                d),
            (v.serializers = n),
            (v._serialize = o),
            (v._stdErrSerialize = p),
            (v.child = function (r, i) {
              if (!r) throw new Error('missing bindings for child Pino')
              ;(i = i || {}),
              o && r.serializers && (i.serializers = r.serializers)
              const s = i.serializers
              if (o && s) {
                var a = Object.assign({}, n, s)
                var l = !0 === e.browser.serialize ? Object.keys(a) : o
                delete r.serializers, c([r], l, a, this._stdErrSerialize)
              }
              function p (e) {
                ;(this._childLevel = 1 + (0 | e._childLevel)),
                (this.error = u(e, r, 'error')),
                (this.fatal = u(e, r, 'fatal')),
                (this.warn = u(e, r, 'warn')),
                (this.info = u(e, r, 'info')),
                (this.debug = u(e, r, 'debug')),
                (this.trace = u(e, r, 'trace')),
                a && ((this.serializers = a), (this._serialize = l)),
                t && (this._logEvent = f([].concat(e._logEvent.bindings, r)))
              }
              return (p.prototype = this), new p(this)
            }),
            t && (v._logEvent = f()),
            v
          )
        }
        function a (e, t, r, o) {
          const a = Object.getPrototypeOf(t)
          ;(t[r] =
            t.levelVal > t.levels.values[r]
              ? d
              : a[r]
                ? a[r]
                : i[r] || i[o] || d),
          (function (e, t, r) {
            if (!e.transmit && t[r] === d) return
            t[r] =
                ((o = t[r]),
                function () {
                  for (
                    var a = e.timestamp(),
                      u = new Array(arguments.length),
                      l =
                        Object.getPrototypeOf &&
                        Object.getPrototypeOf(this) === i
                          ? i
                          : this,
                      p = 0;
                    p < u.length;
                    p++
                  ) { u[p] = arguments[p] }
                  if (
                    (e.serialize &&
                      !e.asObject &&
                      c(
                        u,
                        this._serialize,
                        this.serializers,
                        this._stdErrSerialize
                      ),
                    e.asObject
                      ? o.call(
                        l,
                        (function (e, t, r, i) {
                          e._serialize &&
                              c(
                                r,
                                e._serialize,
                                e.serializers,
                                e._stdErrSerialize
                              )
                          const o = r.slice()
                          let a = o[0]
                          const u = {}
                          i && (u.time = i), (u.level = s.levels.values[t])
                          let f = 1 + (0 | e._childLevel)
                          if (
                            (f < 1 && (f = 1),
                            a !== null && typeof a === 'object')
                          ) {
                            for (; f-- && typeof o[0] === 'object';) { Object.assign(u, o.shift()) }
                            a = o.length ? n(o.shift(), o) : void 0
                          } else { typeof a === 'string' && (a = n(o.shift(), o)) }
                          return void 0 !== a && (u.msg = a), u
                        })(this, r, u, a)
                      )
                      : o.apply(l, u),
                    e.transmit)
                  ) {
                    const h = e.transmit.level || t.level
                    const d = s.levels.values[h]
                    const v = s.levels.values[r]
                    if (v < d) return
                    !(function (e, t, r) {
                      const n = t.send
                      const i = t.ts
                      const o = t.methodLevel
                      const s = t.methodValue
                      const a = t.val
                      const u = e._logEvent.bindings
                      c(
                        r,
                        e._serialize || Object.keys(e.serializers),
                        e.serializers,
                        void 0 === e._stdErrSerialize || e._stdErrSerialize
                      ),
                      (e._logEvent.ts = i),
                      (e._logEvent.messages = r.filter(function (e) {
                        return u.indexOf(e) === -1
                      })),
                      (e._logEvent.level.label = o),
                      (e._logEvent.level.value = s),
                      n(o, e._logEvent, a),
                      (e._logEvent = f(u))
                    })(
                      this,
                      {
                        ts: a,
                        methodLevel: r,
                        methodValue: v,
                        transmitLevel: h,
                        transmitValue:
                          s.levels.values[e.transmit.level || t.level],
                        send: e.transmit.send,
                        val: t.levelVal
                      },
                      u
                    )
                  }
                })
            let o
          })(e, t, r)
        }
        function c (e, t, r, n) {
          for (const i in e) {
            if (n && e[i] instanceof Error) e[i] = s.stdSerializers.err(e[i])
            else if (typeof e[i] === 'object' && !Array.isArray(e[i])) {
              for (const o in e[i]) { t && t.indexOf(o) > -1 && o in r && (e[i][o] = r[o](e[i][o])) }
            }
          }
        }
        function u (e, t, r) {
          return function () {
            const n = new Array(1 + arguments.length)
            n[0] = t
            for (let i = 1; i < n.length; i++) n[i] = arguments[i - 1]
            return e[r].apply(this, n)
          }
        }
        function f (e) {
          return {
            ts: 0,
            messages: [],
            bindings: e || [],
            level: { label: '', value: 0 }
          }
        }
        function l (e) {
          return typeof e.timestamp === 'function'
            ? e.timestamp
            : !1 === e.timestamp
                ? v
                : g
        }
        function p () {
          return {}
        }
        function h (e) {
          return e
        }
        function d () {}
        function v () {
          return !1
        }
        function g () {
          return Date.now()
        }
        ;(s.levels = {
          values: {
            fatal: 60,
            error: 50,
            warn: 40,
            info: 30,
            debug: 20,
            trace: 10
          },
          labels: {
            10: 'trace',
            20: 'debug',
            30: 'info',
            40: 'warn',
            50: 'error',
            60: 'fatal'
          }
        }),
        (s.stdSerializers = o),
        (s.stdTimeFunctions = Object.assign(
          {},
          {
            nullTime: v,
            epochTime: g,
            unixTime: function () {
              return Math.round(Date.now() / 1e3)
            },
            isoTime: function () {
              return new Date(Date.now()).toISOString()
            }
          }
        ))
      }
    }
  ]
)
// # sourceMappingURL=134.8bca69b8.chunk.js.map
