/*! For license information please see 265.170cbc3b.chunk.js.LICENSE.txt */
;(self.webpackChunktruffle_client = self.webpackChunktruffle_client || []).push(
  [
    [265],
    {
      67185: function (e, t, n) {
        const r = n(40949)
        const i = n(23610)
        const a = n(85639)
        const o = n(89032)
        function l (e, t, n, a, o) {
          const l = [].slice.call(arguments, 1)
          const s = l.length
          const c = typeof l[s - 1] === 'function'
          if (!c && !r()) throw new Error('Callback required as last argument')
          if (!c) {
            if (s < 1) throw new Error('Too few arguments provided')
            return (
              s === 1
                ? ((n = t), (t = a = void 0))
                : s !== 2 || t.getContext || ((a = n), (n = t), (t = void 0)),
              new Promise(function (r, o) {
                try {
                  const l = i.create(n, a)
                  r(e(l, t, a))
                } catch (s) {
                  o(s)
                }
              })
            )
          }
          if (s < 2) throw new Error('Too few arguments provided')
          s === 2
            ? ((o = n), (n = t), (t = a = void 0))
            : s === 3 &&
              (t.getContext && typeof o === 'undefined'
                ? ((o = a), (a = void 0))
                : ((o = a), (a = n), (n = t), (t = void 0)))
          try {
            const u = i.create(n, a)
            o(null, e(u, t, a))
          } catch (d) {
            o(d)
          }
        }
        ;(t.create = i.create),
        (t.toCanvas = l.bind(null, a.render)),
        (t.toDataURL = l.bind(null, a.renderToDataURL)),
        (t.toString = l.bind(null, function (e, t, n) {
          return o.render(e, n)
        }))
      },
      40949: function (e) {
        e.exports = function () {
          return (
            typeof Promise === 'function' &&
            Promise.prototype &&
            Promise.prototype.then
          )
        }
      },
      64735: function (e, t, n) {
        const r = n(51957).getSymbolSize
        ;(t.getRowColCoords = function (e) {
          if (e === 1) return []
          for (
            var t = Math.floor(e / 7) + 2,
              n = r(e),
              i = n === 145 ? 26 : 2 * Math.ceil((n - 13) / (2 * t - 2)),
              a = [n - 7],
              o = 1;
            o < t - 1;
            o++
          ) { a[o] = a[o - 1] - i }
          return a.push(6), a.reverse()
        }),
        (t.getPositions = function (e) {
          for (
            var n = [], r = t.getRowColCoords(e), i = r.length, a = 0;
            a < i;
            a++
          ) {
            for (let o = 0; o < i; o++) {
              (a === 0 && o === 0) ||
                  (a === 0 && o === i - 1) ||
                  (a === i - 1 && o === 0) ||
                  n.push([r[a], r[o]])
            }
          }
          return n
        })
      },
      16643: function (e, t, n) {
        const r = n(93)
        const i = [
          '0',
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          'A',
          'B',
          'C',
          'D',
          'E',
          'F',
          'G',
          'H',
          'I',
          'J',
          'K',
          'L',
          'M',
          'N',
          'O',
          'P',
          'Q',
          'R',
          'S',
          'T',
          'U',
          'V',
          'W',
          'X',
          'Y',
          'Z',
          ' ',
          '$',
          '%',
          '*',
          '+',
          '-',
          '.',
          '/',
          ':'
        ]
        function a (e) {
          ;(this.mode = r.ALPHANUMERIC), (this.data = e)
        }
        ;(a.getBitsLength = function (e) {
          return 11 * Math.floor(e / 2) + (e % 2) * 6
        }),
        (a.prototype.getLength = function () {
          return this.data.length
        }),
        (a.prototype.getBitsLength = function () {
          return a.getBitsLength(this.data.length)
        }),
        (a.prototype.write = function (e) {
          let t
          for (t = 0; t + 2 <= this.data.length; t += 2) {
            let n = 45 * i.indexOf(this.data[t])
              ;(n += i.indexOf(this.data[t + 1])), e.put(n, 11)
          }
          this.data.length % 2 && e.put(i.indexOf(this.data[t]), 6)
        }),
        (e.exports = a)
      },
      93850: function (e) {
        function t () {
          ;(this.buffer = []), (this.length = 0)
        }
        ;(t.prototype = {
          get: function (e) {
            const t = Math.floor(e / 8)
            return ((this.buffer[t] >>> (7 - (e % 8))) & 1) === 1
          },
          put: function (e, t) {
            for (let n = 0; n < t; n++) { this.putBit(((e >>> (t - n - 1)) & 1) === 1) }
          },
          getLengthInBits: function () {
            return this.length
          },
          putBit: function (e) {
            const t = Math.floor(this.length / 8)
            this.buffer.length <= t && this.buffer.push(0),
            e && (this.buffer[t] |= 128 >>> this.length % 8),
            this.length++
          }
        }),
        (e.exports = t)
      },
      77007: function (e) {
        function t (e) {
          if (!e || e < 1) {
            throw new Error('BitMatrix size must be defined and greater than 0')
          }(this.size = e),
          (this.data = new Uint8Array(e * e)),
          (this.reservedBit = new Uint8Array(e * e))
        }
        ;(t.prototype.set = function (e, t, n, r) {
          const i = e * this.size + t
          ;(this.data[i] = n), r && (this.reservedBit[i] = !0)
        }),
        (t.prototype.get = function (e, t) {
          return this.data[e * this.size + t]
        }),
        (t.prototype.xor = function (e, t, n) {
          this.data[e * this.size + t] ^= n
        }),
        (t.prototype.isReserved = function (e, t) {
          return this.reservedBit[e * this.size + t]
        }),
        (e.exports = t)
      },
      81788: function (e, t, n) {
        const r = n(69847)
        const i = n(93)
        function a (e) {
          ;(this.mode = i.BYTE),
          typeof e === 'string' && (e = r(e)),
          (this.data = new Uint8Array(e))
        }
        ;(a.getBitsLength = function (e) {
          return 8 * e
        }),
        (a.prototype.getLength = function () {
          return this.data.length
        }),
        (a.prototype.getBitsLength = function () {
          return a.getBitsLength(this.data.length)
        }),
        (a.prototype.write = function (e) {
          for (let t = 0, n = this.data.length; t < n; t++) { e.put(this.data[t], 8) }
        }),
        (e.exports = a)
      },
      35711: function (e, t, n) {
        const r = n(93905)
        const i = [
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4,
          4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4,
          8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16,
          6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17,
          23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29,
          35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45,
          15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19,
          37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45,
          62, 74, 24, 47, 65, 77, 25, 49, 68, 81
        ]
        const a = [
          7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26,
          48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60,
          110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260,
          308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432,
          144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196,
          364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476,
          690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870,
          1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050,
          1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290,
          1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530,
          1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770,
          2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040,
          2430
        ]
        ;(t.getBlocksCount = function (e, t) {
          switch (t) {
            case r.L:
              return i[4 * (e - 1) + 0]
            case r.M:
              return i[4 * (e - 1) + 1]
            case r.Q:
              return i[4 * (e - 1) + 2]
            case r.H:
              return i[4 * (e - 1) + 3]
            default:
          }
        }),
        (t.getTotalCodewordsCount = function (e, t) {
          switch (t) {
            case r.L:
              return a[4 * (e - 1) + 0]
            case r.M:
              return a[4 * (e - 1) + 1]
            case r.Q:
              return a[4 * (e - 1) + 2]
            case r.H:
              return a[4 * (e - 1) + 3]
            default:
          }
        })
      },
      93905: function (e, t) {
        ;(t.L = { bit: 1 }),
        (t.M = { bit: 0 }),
        (t.Q = { bit: 3 }),
        (t.H = { bit: 2 }),
        (t.isValid = function (e) {
          return e && typeof e.bit !== 'undefined' && e.bit >= 0 && e.bit < 4
        }),
        (t.from = function (e, n) {
          if (t.isValid(e)) return e
          try {
            return (function (e) {
              if (typeof e !== 'string') { throw new Error('Param is not a string') }
              switch (e.toLowerCase()) {
                case 'l':
                case 'low':
                  return t.L
                case 'm':
                case 'medium':
                  return t.M
                case 'q':
                case 'quartile':
                  return t.Q
                case 'h':
                case 'high':
                  return t.H
                default:
                  throw new Error('Unknown EC Level: ' + e)
              }
            })(e)
          } catch (r) {
            return n
          }
        })
      },
      90585: function (e, t, n) {
        const r = n(51957).getSymbolSize
        t.getPositions = function (e) {
          const t = r(e)
          return [
            [0, 0],
            [t - 7, 0],
            [0, t - 7]
          ]
        }
      },
      34162: function (e, t, n) {
        const r = n(51957)
        const i = r.getBCHDigit(1335)
        t.getEncodedBits = function (e, t) {
          for (
            var n = (e.bit << 3) | t, a = n << 10;
            r.getBCHDigit(a) - i >= 0;

          ) { a ^= 1335 << (r.getBCHDigit(a) - i) }
          return 21522 ^ ((n << 10) | a)
        }
      },
      78958: function (e, t) {
        const n = new Uint8Array(512)
        const r = new Uint8Array(256)
        !(function () {
          for (let e = 1, t = 0; t < 255; t++) { (n[t] = e), (r[e] = t), 256 & (e <<= 1) && (e ^= 285) }
          for (let i = 255; i < 512; i++) n[i] = n[i - 255]
        })(),
        (t.log = function (e) {
          if (e < 1) throw new Error('log(' + e + ')')
          return r[e]
        }),
        (t.exp = function (e) {
          return n[e]
        }),
        (t.mul = function (e, t) {
          return e === 0 || t === 0 ? 0 : n[r[e] + r[t]]
        })
      },
      34572: function (e, t, n) {
        const r = n(93)
        const i = n(51957)
        function a (e) {
          ;(this.mode = r.KANJI), (this.data = e)
        }
        ;(a.getBitsLength = function (e) {
          return 13 * e
        }),
        (a.prototype.getLength = function () {
          return this.data.length
        }),
        (a.prototype.getBitsLength = function () {
          return a.getBitsLength(this.data.length)
        }),
        (a.prototype.write = function (e) {
          let t
          for (t = 0; t < this.data.length; t++) {
            let n = i.toSJIS(this.data[t])
            if (n >= 33088 && n <= 40956) n -= 33088
            else {
              if (!(n >= 57408 && n <= 60351)) {
                throw new Error(
                  'Invalid SJIS character: ' +
                      this.data[t] +
                      '\nMake sure your charset is UTF-8'
                )
              }
              n -= 49472
            }
            ;(n = 192 * ((n >>> 8) & 255) + (255 & n)), e.put(n, 13)
          }
        }),
        (e.exports = a)
      },
      82792: function (e, t) {
        t.Patterns = {
          PATTERN000: 0,
          PATTERN001: 1,
          PATTERN010: 2,
          PATTERN011: 3,
          PATTERN100: 4,
          PATTERN101: 5,
          PATTERN110: 6,
          PATTERN111: 7
        }
        const n = 3
        const r = 3
        const i = 40
        const a = 10
        function o (e, n, r) {
          switch (e) {
            case t.Patterns.PATTERN000:
              return (n + r) % 2 === 0
            case t.Patterns.PATTERN001:
              return n % 2 === 0
            case t.Patterns.PATTERN010:
              return r % 3 === 0
            case t.Patterns.PATTERN011:
              return (n + r) % 3 === 0
            case t.Patterns.PATTERN100:
              return (Math.floor(n / 2) + Math.floor(r / 3)) % 2 === 0
            case t.Patterns.PATTERN101:
              return ((n * r) % 2) + ((n * r) % 3) === 0
            case t.Patterns.PATTERN110:
              return (((n * r) % 2) + ((n * r) % 3)) % 2 === 0
            case t.Patterns.PATTERN111:
              return (((n * r) % 3) + ((n + r) % 2)) % 2 === 0
            default:
              throw new Error('bad maskPattern:' + e)
          }
        }
        ;(t.isValid = function (e) {
          return e != null && e !== '' && !isNaN(e) && e >= 0 && e <= 7
        }),
        (t.from = function (e) {
          return t.isValid(e) ? parseInt(e, 10) : void 0
        }),
        (t.getPenaltyN1 = function (e) {
          for (
            var t = e.size, r = 0, i = 0, a = 0, o = null, l = null, s = 0;
            s < t;
            s++
          ) {
            ;(i = a = 0), (o = l = null)
            for (let c = 0; c < t; c++) {
              let u = e.get(s, c)
              u === o
                ? i++
                : (i >= 5 && (r += n + (i - 5)), (o = u), (i = 1)),
              (u = e.get(c, s)) === l
                ? a++
                : (a >= 5 && (r += n + (a - 5)), (l = u), (a = 1))
            }
            i >= 5 && (r += n + (i - 5)), a >= 5 && (r += n + (a - 5))
          }
          return r
        }),
        (t.getPenaltyN2 = function (e) {
          for (var t = e.size, n = 0, i = 0; i < t - 1; i++) {
            for (let a = 0; a < t - 1; a++) {
              const o =
                  e.get(i, a) +
                  e.get(i, a + 1) +
                  e.get(i + 1, a) +
                  e.get(i + 1, a + 1)
                ;(o !== 4 && o !== 0) || n++
            }
          }
          return n * r
        }),
        (t.getPenaltyN3 = function (e) {
          for (var t = e.size, n = 0, r = 0, a = 0, o = 0; o < t; o++) {
            r = a = 0
            for (let l = 0; l < t; l++) {
              (r = ((r << 1) & 2047) | e.get(o, l)),
              l >= 10 && (r === 1488 || r === 93) && n++,
              (a = ((a << 1) & 2047) | e.get(l, o)),
              l >= 10 && (a === 1488 || a === 93) && n++
            }
          }
          return n * i
        }),
        (t.getPenaltyN4 = function (e) {
          for (var t = 0, n = e.data.length, r = 0; r < n; r++) t += e.data[r]
          return Math.abs(Math.ceil((100 * t) / n / 5) - 10) * a
        }),
        (t.applyMask = function (e, t) {
          for (let n = t.size, r = 0; r < n; r++) {
            for (let i = 0; i < n; i++) { t.isReserved(i, r) || t.xor(i, r, o(e, i, r)) }
          }
        }),
        (t.getBestMask = function (e, n) {
          for (
            var r = Object.keys(t.Patterns).length, i = 0, a = 1 / 0, o = 0;
            o < r;
            o++
          ) {
            n(o), t.applyMask(o, e)
            const l =
                t.getPenaltyN1(e) +
                t.getPenaltyN2(e) +
                t.getPenaltyN3(e) +
                t.getPenaltyN4(e)
            t.applyMask(o, e), l < a && ((a = l), (i = o))
          }
          return i
        })
      },
      93: function (e, t, n) {
        const r = n(83298)
        const i = n(71493)
        ;(t.NUMERIC = { id: 'Numeric', bit: 1, ccBits: [10, 12, 14] }),
        (t.ALPHANUMERIC = {
          id: 'Alphanumeric',
          bit: 2,
          ccBits: [9, 11, 13]
        }),
        (t.BYTE = { id: 'Byte', bit: 4, ccBits: [8, 16, 16] }),
        (t.KANJI = { id: 'Kanji', bit: 8, ccBits: [8, 10, 12] }),
        (t.MIXED = { bit: -1 }),
        (t.getCharCountIndicator = function (e, t) {
          if (!e.ccBits) throw new Error('Invalid mode: ' + e)
          if (!r.isValid(t)) throw new Error('Invalid version: ' + t)
          return t >= 1 && t < 10
            ? e.ccBits[0]
            : t < 27
              ? e.ccBits[1]
              : e.ccBits[2]
        }),
        (t.getBestModeForData = function (e) {
          return i.testNumeric(e)
            ? t.NUMERIC
            : i.testAlphanumeric(e)
              ? t.ALPHANUMERIC
              : i.testKanji(e)
                ? t.KANJI
                : t.BYTE
        }),
        (t.toString = function (e) {
          if (e && e.id) return e.id
          throw new Error('Invalid mode')
        }),
        (t.isValid = function (e) {
          return e && e.bit && e.ccBits
        }),
        (t.from = function (e, n) {
          if (t.isValid(e)) return e
          try {
            return (function (e) {
              if (typeof e !== 'string') { throw new Error('Param is not a string') }
              switch (e.toLowerCase()) {
                case 'numeric':
                  return t.NUMERIC
                case 'alphanumeric':
                  return t.ALPHANUMERIC
                case 'kanji':
                  return t.KANJI
                case 'byte':
                  return t.BYTE
                default:
                  throw new Error('Unknown mode: ' + e)
              }
            })(e)
          } catch (r) {
            return n
          }
        })
      },
      45768: function (e, t, n) {
        const r = n(93)
        function i (e) {
          ;(this.mode = r.NUMERIC), (this.data = e.toString())
        }
        ;(i.getBitsLength = function (e) {
          return 10 * Math.floor(e / 3) + (e % 3 ? (e % 3) * 3 + 1 : 0)
        }),
        (i.prototype.getLength = function () {
          return this.data.length
        }),
        (i.prototype.getBitsLength = function () {
          return i.getBitsLength(this.data.length)
        }),
        (i.prototype.write = function (e) {
          let t, n, r
          for (t = 0; t + 3 <= this.data.length; t += 3) { (n = this.data.substr(t, 3)), (r = parseInt(n, 10)), e.put(r, 10) }
          const i = this.data.length - t
          i > 0 &&
              ((n = this.data.substr(t)),
              (r = parseInt(n, 10)),
              e.put(r, 3 * i + 1))
        }),
        (e.exports = i)
      },
      67117: function (e, t, n) {
        const r = n(78958)
        ;(t.mul = function (e, t) {
          for (
            var n = new Uint8Array(e.length + t.length - 1), i = 0;
            i < e.length;
            i++
          ) { for (let a = 0; a < t.length; a++) n[i + a] ^= r.mul(e[i], t[a]) }
          return n
        }),
        (t.mod = function (e, t) {
          for (var n = new Uint8Array(e); n.length - t.length >= 0;) {
            for (let i = n[0], a = 0; a < t.length; a++) { n[a] ^= r.mul(t[a], i) }
            for (var o = 0; o < n.length && n[o] === 0;) o++
            n = n.slice(o)
          }
          return n
        }),
        (t.generateECPolynomial = function (e) {
          for (var n = new Uint8Array([1]), i = 0; i < e; i++) { n = t.mul(n, new Uint8Array([1, r.exp(i)])) }
          return n
        })
      },
      23610: function (e, t, n) {
        const r = n(51957)
        const i = n(93905)
        const a = n(93850)
        const o = n(77007)
        const l = n(64735)
        const s = n(90585)
        const c = n(82792)
        const u = n(35711)
        const d = n(35958)
        const h = n(51736)
        const v = n(34162)
        const f = n(93)
        const p = n(45249)
        function m (e, t, n) {
          let r
          let i
          const a = e.size
          const o = v.getEncodedBits(t, n)
          for (r = 0; r < 15; r++) {
            (i = ((o >> r) & 1) === 1),
            r < 6
              ? e.set(r, 8, i, !0)
              : r < 8
                ? e.set(r + 1, 8, i, !0)
                : e.set(a - 15 + r, 8, i, !0),
            r < 8
              ? e.set(8, a - r - 1, i, !0)
              : r < 9
                ? e.set(8, 15 - r - 1 + 1, i, !0)
                : e.set(8, 15 - r - 1, i, !0)
          }
          e.set(a - 8, 8, 1, !0)
        }
        function g (e, t, n) {
          const i = new a()
          n.forEach(function (t) {
            i.put(t.mode.bit, 4),
            i.put(t.getLength(), f.getCharCountIndicator(t.mode, e)),
            t.write(i)
          })
          const o =
            8 * (r.getSymbolTotalCodewords(e) - u.getTotalCodewordsCount(e, t))
          for (
            i.getLengthInBits() + 4 <= o && i.put(0, 4);
            i.getLengthInBits() % 8 !== 0;

          ) { i.putBit(0) }
          for (let l = (o - i.getLengthInBits()) / 8, s = 0; s < l; s++) { i.put(s % 2 ? 17 : 236, 8) }
          return (function (e, t, n) {
            for (
              var i = r.getSymbolTotalCodewords(t),
                a = u.getTotalCodewordsCount(t, n),
                o = i - a,
                l = u.getBlocksCount(t, n),
                s = l - (i % l),
                c = Math.floor(i / l),
                h = Math.floor(o / l),
                v = h + 1,
                f = c - h,
                p = new d(f),
                m = 0,
                g = new Array(l),
                w = new Array(l),
                b = 0,
                y = new Uint8Array(e.buffer),
                x = 0;
              x < l;
              x++
            ) {
              const k = x < s ? h : v
              ;(g[x] = y.slice(m, m + k)),
              (w[x] = p.encode(g[x])),
              (m += k),
              (b = Math.max(b, k))
            }
            let C
            let Z
            const A = new Uint8Array(i)
            let E = 0
            for (C = 0; C < b; C++) { for (Z = 0; Z < l; Z++) C < g[Z].length && (A[E++] = g[Z][C]) }
            for (C = 0; C < f; C++) for (Z = 0; Z < l; Z++) A[E++] = w[Z][C]
            return A
          })(i, e, t)
        }
        function w (e, t, n, i) {
          let a
          if (Array.isArray(e)) a = p.fromArray(e)
          else {
            if (typeof e !== 'string') throw new Error('Invalid data')
            let u = t
            if (!u) {
              const d = p.rawSplit(e)
              u = h.getBestVersionForData(d, n)
            }
            a = p.fromString(e, u || 40)
          }
          const v = h.getBestVersionForData(a, n)
          if (!v) {
            throw new Error(
              'The amount of data is too big to be stored in a QR Code'
            )
          }
          if (t) {
            if (t < v) {
              throw new Error(
                '\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: ' +
                  v +
                  '.\n'
              )
            }
          } else t = v
          const f = g(t, n, a)
          const w = r.getSymbolSize(t)
          const b = new o(w)
          return (
            (function (e, t) {
              for (
                let n = e.size, r = s.getPositions(t), i = 0;
                i < r.length;
                i++
              ) {
                for (let a = r[i][0], o = r[i][1], l = -1; l <= 7; l++) {
                  if (!(a + l <= -1 || n <= a + l)) {
                    for (let c = -1; c <= 7; c++) {
 o + c <= -1 ||
                        n <= o + c ||
                        ((l >= 0 && l <= 6 && (c === 0 || c === 6)) ||
                        (c >= 0 && c <= 6 && (l === 0 || l === 6)) ||
                        (l >= 2 && l <= 4 && c >= 2 && c <= 4)
                          ? e.set(a + l, o + c, !0, !0)
                          : e.set(a + l, o + c, !1, !0)) 
}
                  }
                }
              }
            })(b, t),
            (function (e) {
              for (let t = e.size, n = 8; n < t - 8; n++) {
                const r = n % 2 === 0
                e.set(n, 6, r, !0), e.set(6, n, r, !0)
              }
            })(b),
            (function (e, t) {
              for (let n = l.getPositions(t), r = 0; r < n.length; r++) {
                for (let i = n[r][0], a = n[r][1], o = -2; o <= 2; o++) {
                  for (let s = -2; s <= 2; s++) {
                    o === -2 ||
                    o === 2 ||
                    s === -2 ||
                    s === 2 ||
                    (o === 0 && s === 0)
                      ? e.set(i + o, a + s, !0, !0)
                      : e.set(i + o, a + s, !1, !0)
                  }
                }
              }
            })(b, t),
            m(b, n, 0),
            t >= 7 &&
              (function (e, t) {
                for (
                  var n, r, i, a = e.size, o = h.getEncodedBits(t), l = 0;
                  l < 18;
                  l++
                ) {
                  (n = Math.floor(l / 3)),
                  (r = (l % 3) + a - 8 - 3),
                  (i = ((o >> l) & 1) === 1),
                  e.set(n, r, i, !0),
                  e.set(r, n, i, !0)
                }
              })(b, t),
            (function (e, t) {
              for (
                let n = e.size, r = -1, i = n - 1, a = 7, o = 0, l = n - 1;
                l > 0;
                l -= 2
              ) {
                for (l === 6 && l--; ;) {
                  for (let s = 0; s < 2; s++) {
                    if (!e.isReserved(i, l - s)) {
                      let c = !1
                      o < t.length && (c = ((t[o] >>> a) & 1) === 1),
                      e.set(i, l - s, c),
                      --a === -1 && (o++, (a = 7))
                    }
                  }
                  if ((i += r) < 0 || n <= i) {
                    ;(i -= r), (r = -r)
                    break
                  }
                }
              }
            })(b, f),
            isNaN(i) && (i = c.getBestMask(b, m.bind(null, b, n))),
            c.applyMask(i, b),
            m(b, n, i),
            {
              modules: b,
              version: t,
              errorCorrectionLevel: n,
              maskPattern: i,
              segments: a
            }
          )
        }
        t.create = function (e, t) {
          if (typeof e === 'undefined' || e === '') { throw new Error('No input text') }
          let n
          let a
          let o = i.M
          return (
            typeof t !== 'undefined' &&
              ((o = i.from(t.errorCorrectionLevel, i.M)),
              (n = h.from(t.version)),
              (a = c.from(t.maskPattern)),
              t.toSJISFunc && r.setToSJISFunction(t.toSJISFunc)),
            w(e, n, o, a)
          )
        }
      },
      35958: function (e, t, n) {
        const r = n(67117)
        function i (e) {
          ;(this.genPoly = void 0),
          (this.degree = e),
          this.degree && this.initialize(this.degree)
        }
        ;(i.prototype.initialize = function (e) {
          ;(this.degree = e),
          (this.genPoly = r.generateECPolynomial(this.degree))
        }),
        (i.prototype.encode = function (e) {
          if (!this.genPoly) throw new Error('Encoder not initialized')
          const t = new Uint8Array(e.length + this.degree)
          t.set(e)
          const n = r.mod(t, this.genPoly)
          const i = this.degree - n.length
          if (i > 0) {
            const a = new Uint8Array(this.degree)
            return a.set(n, i), a
          }
          return n
        }),
        (e.exports = i)
      },
      71493: function (e, t) {
        const n = '[0-9]+'
        let r =
            '(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+'
        const i =
            '(?:(?![A-Z0-9 $%*+\\-./:]|' +
            (r = r.replace(/u/g, '\\u')) +
            ')(?:.|[\r\n]))+'
        ;(t.KANJI = new RegExp(r, 'g')),
        (t.BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g')),
        (t.BYTE = new RegExp(i, 'g')),
        (t.NUMERIC = new RegExp(n, 'g')),
        (t.ALPHANUMERIC = new RegExp('[A-Z $%*+\\-./:]+', 'g'))
        const a = new RegExp('^' + r + '$')
        const o = new RegExp('^' + n + '$')
        const l = new RegExp('^[A-Z0-9 $%*+\\-./:]+$')
        ;(t.testKanji = function (e) {
          return a.test(e)
        }),
        (t.testNumeric = function (e) {
          return o.test(e)
        }),
        (t.testAlphanumeric = function (e) {
          return l.test(e)
        })
      },
      45249: function (e, t, n) {
        const r = n(93)
        const i = n(45768)
        const a = n(16643)
        const o = n(81788)
        const l = n(34572)
        const s = n(71493)
        const c = n(51957)
        const u = n(72260)
        function d (e) {
          return unescape(encodeURIComponent(e)).length
        }
        function h (e, t, n) {
          for (var r, i = []; (r = e.exec(n)) !== null;) { i.push({ data: r[0], index: r.index, mode: t, length: r[0].length }) }
          return i
        }
        function v (e) {
          let t
          let n
          const i = h(s.NUMERIC, r.NUMERIC, e)
          const a = h(s.ALPHANUMERIC, r.ALPHANUMERIC, e)
          return (
            c.isKanjiModeEnabled()
              ? ((t = h(s.BYTE, r.BYTE, e)), (n = h(s.KANJI, r.KANJI, e)))
              : ((t = h(s.BYTE_KANJI, r.BYTE, e)), (n = [])),
            i
              .concat(a, t, n)
              .sort(function (e, t) {
                return e.index - t.index
              })
              .map(function (e) {
                return { data: e.data, mode: e.mode, length: e.length }
              })
          )
        }
        function f (e, t) {
          switch (t) {
            case r.NUMERIC:
              return i.getBitsLength(e)
            case r.ALPHANUMERIC:
              return a.getBitsLength(e)
            case r.KANJI:
              return l.getBitsLength(e)
            case r.BYTE:
              return o.getBitsLength(e)
          }
        }
        function p (e, t) {
          let n
          const s = r.getBestModeForData(e)
          if ((n = r.from(t, s)) !== r.BYTE && n.bit < s.bit) {
            throw new Error(
              '"' +
                e +
                '" cannot be encoded with mode ' +
                r.toString(n) +
                '.\n Suggested mode is: ' +
                r.toString(s)
            )
          }
          switch (
            (n !== r.KANJI || c.isKanjiModeEnabled() || (n = r.BYTE), n)
          ) {
            case r.NUMERIC:
              return new i(e)
            case r.ALPHANUMERIC:
              return new a(e)
            case r.KANJI:
              return new l(e)
            case r.BYTE:
              return new o(e)
          }
        }
        ;(t.fromArray = function (e) {
          return e.reduce(function (e, t) {
            return (
              typeof t === 'string'
                ? e.push(p(t, null))
                : t.data && e.push(p(t.data, t.mode)),
              e
            )
          }, [])
        }),
        (t.fromString = function (e, n) {
          for (
            var i = (function (e) {
                for (var t = [], n = 0; n < e.length; n++) {
                  const i = e[n]
                  switch (i.mode) {
                    case r.NUMERIC:
                      t.push([
                        i,
                        {
                          data: i.data,
                          mode: r.ALPHANUMERIC,
                          length: i.length
                        },
                        { data: i.data, mode: r.BYTE, length: i.length }
                      ])
                      break
                    case r.ALPHANUMERIC:
                      t.push([
                        i,
                        { data: i.data, mode: r.BYTE, length: i.length }
                      ])
                      break
                    case r.KANJI:
                      t.push([
                        i,
                        { data: i.data, mode: r.BYTE, length: d(i.data) }
                      ])
                      break
                    case r.BYTE:
                      t.push([
                        { data: i.data, mode: r.BYTE, length: d(i.data) }
                      ])
                  }
                }
                return t
              })(v(e, c.isKanjiModeEnabled())),
              a = (function (e, t) {
                for (
                  var n = {}, i = { start: {} }, a = ['start'], o = 0;
                  o < e.length;
                  o++
                ) {
                  for (var l = e[o], s = [], c = 0; c < l.length; c++) {
                    const u = l[c]
                    const d = '' + o + c
                    s.push(d), (n[d] = { node: u, lastCount: 0 }), (i[d] = {})
                    for (let h = 0; h < a.length; h++) {
                      const v = a[h]
                      n[v] && n[v].node.mode === u.mode
                        ? ((i[v][d] =
                              f(n[v].lastCount + u.length, u.mode) -
                              f(n[v].lastCount, u.mode)),
                          (n[v].lastCount += u.length))
                        : (n[v] && (n[v].lastCount = u.length),
                          (i[v][d] =
                              f(u.length, u.mode) +
                              4 +
                              r.getCharCountIndicator(u.mode, t)))
                    }
                  }
                  a = s
                }
                for (let p = 0; p < a.length; p++) i[a[p]].end = 0
                return { map: i, table: n }
              })(i, n),
              o = u.find_path(a.map, 'start', 'end'),
              l = [],
              s = 1;
            s < o.length - 1;
            s++
          ) { l.push(a.table[o[s]].node) }
          return t.fromArray(
            (function (e) {
              return e.reduce(function (e, t) {
                const n = e.length - 1 >= 0 ? e[e.length - 1] : null
                return n && n.mode === t.mode
                  ? ((e[e.length - 1].data += t.data), e)
                  : (e.push(t), e)
              }, [])
            })(l)
          )
        }),
        (t.rawSplit = function (e) {
          return t.fromArray(v(e, c.isKanjiModeEnabled()))
        })
      },
      51957: function (e, t) {
        let n
        const r = [
          0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532,
          581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588,
          1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034,
          3196, 3362, 3532, 3706
        ]
        ;(t.getSymbolSize = function (e) {
          if (!e) throw new Error('"version" cannot be null or undefined')
          if (e < 1 || e > 40) { throw new Error('"version" should be in range from 1 to 40') }
          return 4 * e + 17
        }),
        (t.getSymbolTotalCodewords = function (e) {
          return r[e]
        }),
        (t.getBCHDigit = function (e) {
          for (var t = 0; e !== 0;) t++, (e >>>= 1)
          return t
        }),
        (t.setToSJISFunction = function (e) {
          if (typeof e !== 'function') { throw new Error('"toSJISFunc" is not a valid function.') }
          n = e
        }),
        (t.isKanjiModeEnabled = function () {
          return typeof n !== 'undefined'
        }),
        (t.toSJIS = function (e) {
          return n(e)
        })
      },
      83298: function (e, t) {
        t.isValid = function (e) {
          return !isNaN(e) && e >= 1 && e <= 40
        }
      },
      51736: function (e, t, n) {
        const r = n(51957)
        const i = n(35711)
        const a = n(93905)
        const o = n(93)
        const l = n(83298)
        const s = r.getBCHDigit(7973)
        function c (e, t) {
          return o.getCharCountIndicator(e, t) + 4
        }
        function u (e, t) {
          let n = 0
          return (
            e.forEach(function (e) {
              const r = c(e.mode, t)
              n += r + e.getBitsLength()
            }),
            n
          )
        }
        ;(t.from = function (e, t) {
          return l.isValid(e) ? parseInt(e, 10) : t
        }),
        (t.getCapacity = function (e, t, n) {
          if (!l.isValid(e)) throw new Error('Invalid QR Code version')
          typeof n === 'undefined' && (n = o.BYTE)
          const a =
              8 *
              (r.getSymbolTotalCodewords(e) - i.getTotalCodewordsCount(e, t))
          if (n === o.MIXED) return a
          const s = a - c(n, e)
          switch (n) {
            case o.NUMERIC:
              return Math.floor((s / 10) * 3)
            case o.ALPHANUMERIC:
              return Math.floor((s / 11) * 2)
            case o.KANJI:
              return Math.floor(s / 13)
            case o.BYTE:
            default:
              return Math.floor(s / 8)
          }
        }),
        (t.getBestVersionForData = function (e, n) {
          let r
          const i = a.from(n, a.M)
          if (Array.isArray(e)) {
            if (e.length > 1) {
              return (function (e, n) {
                for (let r = 1; r <= 40; r++) { if (u(e, r) <= t.getCapacity(r, n, o.MIXED)) return r }
              })(e, i)
            }
            if (e.length === 0) return 1
            r = e[0]
          } else r = e
          return (function (e, n, r) {
            for (let i = 1; i <= 40; i++) { if (n <= t.getCapacity(i, r, e)) return i }
          })(r.mode, r.getLength(), i)
        }),
        (t.getEncodedBits = function (e) {
          if (!l.isValid(e) || e < 7) { throw new Error('Invalid QR Code version') }
          for (var t = e << 12; r.getBCHDigit(t) - s >= 0;) { t ^= 7973 << (r.getBCHDigit(t) - s) }
          return (e << 12) | t
        })
      },
      85639: function (e, t, n) {
        const r = n(56764)
        ;(t.render = function (e, t, n) {
          let i = n
          let a = t
          typeof i !== 'undefined' ||
            (t && t.getContext) ||
            ((i = t), (t = void 0)),
          t ||
              (a = (function () {
                try {
                  return document.createElement('canvas')
                } catch (e) {
                  throw new Error('You need to specify a canvas element')
                }
              })()),
          (i = r.getOptions(i))
          const o = r.getImageWidth(e.modules.size, i)
          const l = a.getContext('2d')
          const s = l.createImageData(o, o)
          return (
            r.qrToImageData(s.data, e, i),
            (function (e, t, n) {
              e.clearRect(0, 0, t.width, t.height),
              t.style || (t.style = {}),
              (t.height = n),
              (t.width = n),
              (t.style.height = n + 'px'),
              (t.style.width = n + 'px')
            })(l, a, o),
            l.putImageData(s, 0, 0),
            a
          )
        }),
        (t.renderToDataURL = function (e, n, r) {
          let i = r
          typeof i !== 'undefined' ||
              (n && n.getContext) ||
              ((i = n), (n = void 0)),
          i || (i = {})
          const a = t.render(e, n, i)
          const o = i.type || 'image/png'
          const l = i.rendererOpts || {}
          return a.toDataURL(o, l.quality)
        })
      },
      89032: function (e, t, n) {
        const r = n(56764)
        function i (e, t) {
          const n = e.a / 255
          const r = t + '="' + e.hex + '"'
          return n < 1
            ? r + ' ' + t + '-opacity="' + n.toFixed(2).slice(1) + '"'
            : r
        }
        function a (e, t, n) {
          let r = e + t
          return typeof n !== 'undefined' && (r += ' ' + n), r
        }
        t.render = function (e, t, n) {
          const o = r.getOptions(t)
          const l = e.modules.size
          const s = e.modules.data
          const c = l + 2 * o.margin
          const u = o.color.light.a
            ? '<path ' +
                i(o.color.light, 'fill') +
                ' d="M0 0h' +
                c +
                'v' +
                c +
                'H0z"/>'
            : ''
          const d =
              '<path ' +
              i(o.color.dark, 'stroke') +
              ' d="' +
              (function (e, t, n) {
                for (
                  var r = '', i = 0, o = !1, l = 0, s = 0;
                  s < e.length;
                  s++
                ) {
                  const c = Math.floor(s % t)
                  const u = Math.floor(s / t)
                  c || o || (o = !0),
                  e[s]
                    ? (l++,
                      (s > 0 && c > 0 && e[s - 1]) ||
                          ((r += o ? a('M', c + n, 0.5 + u + n) : a('m', i, 0)),
                          (i = 0),
                          (o = !1)),
                      (c + 1 < t && e[s + 1]) || ((r += a('h', l)), (l = 0)))
                    : i++
                }
                return r
              })(s, l, o.margin) +
              '"/>'
          const h = 'viewBox="0 0 ' + c + ' ' + c + '"'
          const v =
              '<svg xmlns="http://www.w3.org/2000/svg" ' +
              (o.width
                ? 'width="' + o.width + '" height="' + o.width + '" '
                : '') +
              h +
              ' shape-rendering="crispEdges">' +
              u +
              d +
              '</svg>\n'
          return typeof n === 'function' && n(null, v), v
        }
      },
      56764: function (e, t) {
        function n (e) {
          if (
            (typeof e === 'number' && (e = e.toString()), typeof e !== 'string')
          ) { throw new Error('Color should be defined as hex string') }
          let t = e.slice().replace('#', '').split('')
          if (t.length < 3 || t.length === 5 || t.length > 8) {
            throw new Error('Invalid hex color: ' + e)
          }(t.length !== 3 && t.length !== 4) ||
            (t = Array.prototype.concat.apply(
              [],
              t.map(function (e) {
                return [e, e]
              })
            )),
          t.length === 6 && t.push('F', 'F')
          const n = parseInt(t.join(''), 16)
          return {
            r: (n >> 24) & 255,
            g: (n >> 16) & 255,
            b: (n >> 8) & 255,
            a: 255 & n,
            hex: '#' + t.slice(0, 6).join('')
          }
        }
        ;(t.getOptions = function (e) {
          e || (e = {}), e.color || (e.color = {})
          const t =
              typeof e.margin === 'undefined' ||
              e.margin === null ||
              e.margin < 0
                ? 4
                : e.margin
          const r = e.width && e.width >= 21 ? e.width : void 0
          const i = e.scale || 4
          return {
            width: r,
            scale: r ? 4 : i,
            margin: t,
            color: {
              dark: n(e.color.dark || '#000000ff'),
              light: n(e.color.light || '#ffffffff')
            },
            type: e.type,
            rendererOpts: e.rendererOpts || {}
          }
        }),
        (t.getScale = function (e, t) {
          return t.width && t.width >= e + 2 * t.margin
            ? t.width / (e + 2 * t.margin)
            : t.scale
        }),
        (t.getImageWidth = function (e, n) {
          const r = t.getScale(e, n)
          return Math.floor((e + 2 * n.margin) * r)
        }),
        (t.qrToImageData = function (e, n, r) {
          for (
            let i = n.modules.size,
              a = n.modules.data,
              o = t.getScale(i, r),
              l = Math.floor((i + 2 * r.margin) * o),
              s = r.margin * o,
              c = [r.color.light, r.color.dark],
              u = 0;
            u < l;
            u++
          ) {
            for (let d = 0; d < l; d++) {
              let h = 4 * (u * l + d)
              let v = r.color.light
              if (u >= s && d >= s && u < l - s && d < l - s) {
                v =
                    c[
                      a[Math.floor((u - s) / o) * i + Math.floor((d - s) / o)]
                        ? 1
                        : 0
                    ]
              }(e[h++] = v.r), (e[h++] = v.g), (e[h++] = v.b), (e[h] = v.a)
            }
          }
        })
      },
      69847: function (e) {
        'use strict'
        e.exports = function (e) {
          for (var t = [], n = e.length, r = 0; r < n; r++) {
            let i = e.charCodeAt(r)
            if (i >= 55296 && i <= 56319 && n > r + 1) {
              const a = e.charCodeAt(r + 1)
              a >= 56320 &&
                a <= 57343 &&
                ((i = 1024 * (i - 55296) + a - 56320 + 65536), (r += 1))
            }
            i < 128
              ? t.push(i)
              : i < 2048
                ? (t.push((i >> 6) | 192), t.push((63 & i) | 128))
                : i < 55296 || (i >= 57344 && i < 65536)
                  ? (t.push((i >> 12) | 224),
                    t.push(((i >> 6) & 63) | 128),
                    t.push((63 & i) | 128))
                  : i >= 65536 && i <= 1114111
                    ? (t.push((i >> 18) | 240),
                      t.push(((i >> 12) & 63) | 128),
                      t.push(((i >> 6) & 63) | 128),
                      t.push((63 & i) | 128))
                    : t.push(239, 191, 189)
          }
          return new Uint8Array(t).buffer
        }
      },
      22265: function (e, t, n) {
        'use strict'
        n.r(t),
        n.d(t, {
          W3mAccountButton: function () {
            return Kl
          },
          W3mConnectButton: function () {
            return Zs
          },
          W3mCoreButton: function () {
            return _s
          },
          W3mModal: function () {
            return Ys
          },
          W3mNetworkSwitch: function () {
            return tc
          }
        })
        let r
        let i
        const a = n(82963)
        const o = n(93433)
        const l = n(4942)
        const s = n(74165)
        const c = n(15861)
        const u = n(15671)
        const d = n(43144)
        const h = n(60136)
        const v = n(29388)
        const f = n(30168)
        const p = n(29439)
        const m = n(37762)
        const g = n(98737)
        const w = window
        const b =
            w.ShadowRoot &&
            (void 0 === w.ShadyCSS || w.ShadyCSS.nativeShadow) &&
            'adoptedStyleSheets' in Document.prototype &&
            'replace' in CSSStyleSheet.prototype
        const y = Symbol()
        const x = new WeakMap()
        const k = (function () {
          function e (t, n, r) {
            if (((0, u.Z)(this, e), (this._$cssResult$ = !0), r !== y)) {
              throw Error(
                'CSSResult is not constructable. Use `unsafeCSS` or `css` instead.'
              )
            }(this.cssText = t), (this.t = n)
          }
          return (
            (0, d.Z)(e, [
              {
                key: 'styleSheet',
                get: function () {
                  let e = this.o
                  const t = this.t
                  if (b && void 0 === e) {
                    const n = void 0 !== t && t.length === 1
                    n && (e = x.get(t)),
                    void 0 === e &&
                          ((this.o = e = new CSSStyleSheet()).replaceSync(
                            this.cssText
                          ),
                          n && x.set(t, e))
                  }
                  return e
                }
              },
              {
                key: 'toString',
                value: function () {
                  return this.cssText
                }
              }
            ]),
            e
          )
        })()
        const C = function (e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          ) { n[r - 1] = arguments[r] }
          const i =
              e.length === 1
                ? e[0]
                : n.reduce(function (t, n, r) {
                  return (
                    t +
                      (function (e) {
                        if (!0 === e._$cssResult$) return e.cssText
                        if (typeof e === 'number') return e
                        throw Error(
                          "Value passed to 'css' function must be a 'css' function result: " +
                            e +
                            ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                        )
                      })(n) +
                      e[r + 1]
                  )
                }, e[0])
          return new k(i, e, y)
        }
        const Z = b
          ? function (e) {
            return e
          }
          : function (e) {
            return e instanceof CSSStyleSheet
              ? (function (e) {
                  let t
                  let n = ''
                  const r = (0, m.Z)(e.cssRules)
                  try {
                    for (r.s(); !(t = r.n()).done;) {
                      n += t.value.cssText
                    }
                  } catch (i) {
                    r.e(i)
                  } finally {
                    r.f()
                  }
                  return (function (e) {
                    return new k(
                      typeof e === 'string' ? e : e + '',
                      void 0,
                      y
                    )
                  })(n)
                })(e)
              : e
          }
        const A = window
        const E = A.trustedTypes
        const I = E ? E.emptyScript : ''
        const _ = A.reactiveElementPolyfillSupport
        const M = {
          toAttribute: function (e, t) {
            switch (t) {
              case Boolean:
                e = e ? I : null
                break
              case Object:
              case Array:
                e = e == null ? e : JSON.stringify(e)
            }
            return e
          },
          fromAttribute: function (e, t) {
            let n = e
            switch (t) {
              case Boolean:
                n = e !== null
                break
              case Number:
                n = e === null ? null : Number(e)
                break
              case Object:
              case Array:
                try {
                  n = JSON.parse(e)
                } catch (e) {
                  n = null
                }
            }
            return n
          }
        }
        const O = function (e, t) {
          return t !== e && (t == t || e == e)
        }
        const S = {
          attribute: !0,
          type: String,
          converter: M,
          reflect: !1,
          hasChanged: O
        }
        const P = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            let e
            return (
              (0, u.Z)(this, n),
              ((e = t.call(this))._$Ei = new Map()),
              (e.isUpdatePending = !1),
              (e.hasUpdated = !1),
              (e._$El = null),
              e.u(),
              e
            )
          }
          return (
            (0, d.Z)(
              n,
              [
                {
                  key: 'u',
                  value: function () {
                    let e
                    const t = this
                      ;(this._$E_ = new Promise(function (e) {
                      return (t.enableUpdating = e)
                    })),
                    (this._$AL = new Map()),
                    this._$Eg(),
                    this.requestUpdate(),
                    (e = this.constructor.h) === null ||
                          void 0 === e ||
                          e.forEach(function (e) {
                            return e(t)
                          })
                  }
                },
                {
                  key: 'addController',
                  value: function (e) {
                    let t, n
                      ;((t = this._$ES) !== null && void 0 !== t
                      ? t
                      : (this._$ES = [])
                    ).push(e),
                    void 0 !== this.renderRoot &&
                          this.isConnected &&
                          ((n = e.hostConnected) === null ||
                            void 0 === n ||
                            n.call(e))
                  }
                },
                {
                  key: 'removeController',
                  value: function (e) {
                    let t
                    (t = this._$ES) === null ||
                        void 0 === t ||
                        t.splice(this._$ES.indexOf(e) >>> 0, 1)
                  }
                },
                {
                  key: '_$Eg',
                  value: function () {
                    const e = this
                    this.constructor.elementProperties.forEach(
                      function (t, n) {
                        e.hasOwnProperty(n) &&
                            (e._$Ei.set(n, e[n]), delete e[n])
                      }
                    )
                  }
                },
                {
                  key: 'createRenderRoot',
                  value: function () {
                    let e
                    const t =
                          (e = this.shadowRoot) !== null && void 0 !== e
                            ? e
                            : this.attachShadow(
                              this.constructor.shadowRootOptions
                            )
                    return (
                      (function (e, t) {
                        b
                          ? (e.adoptedStyleSheets = t.map(function (e) {
                              return e instanceof CSSStyleSheet
                                ? e
                                : e.styleSheet
                            }))
                          : t.forEach(function (t) {
                            const n = document.createElement('style')
                            const r = w.litNonce
                            void 0 !== r && n.setAttribute('nonce', r),
                            (n.textContent = t.cssText),
                            e.appendChild(n)
                          })
                      })(t, this.constructor.elementStyles),
                      t
                    )
                  }
                },
                {
                  key: 'connectedCallback',
                  value: function () {
                    let e
                    void 0 === this.renderRoot &&
                        (this.renderRoot = this.createRenderRoot()),
                    this.enableUpdating(!0),
                    (e = this._$ES) === null ||
                          void 0 === e ||
                          e.forEach(function (e) {
                            let t
                            return (t = e.hostConnected) === null ||
                              void 0 === t
                              ? void 0
                              : t.call(e)
                          })
                  }
                },
                { key: 'enableUpdating', value: function (e) {} },
                {
                  key: 'disconnectedCallback',
                  value: function () {
                    let e
                    (e = this._$ES) === null ||
                        void 0 === e ||
                        e.forEach(function (e) {
                          let t
                          return (t = e.hostDisconnected) === null ||
                            void 0 === t
                            ? void 0
                            : t.call(e)
                        })
                  }
                },
                {
                  key: 'attributeChangedCallback',
                  value: function (e, t, n) {
                    this._$AK(e, n)
                  }
                },
                {
                  key: '_$EO',
                  value: function (e, t) {
                    let n
                    const r =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : S
                    const i = this.constructor._$Ep(e, r)
                    if (void 0 !== i && !0 === r.reflect) {
                      const a = (
                        void 0 !==
                          ((n = r.converter) === null || void 0 === n
                            ? void 0
                            : n.toAttribute)
                          ? r.converter
                          : M
                      ).toAttribute(t, r.type)
                        ;(this._$El = e),
                      a == null
                        ? this.removeAttribute(i)
                        : this.setAttribute(i, a),
                      (this._$El = null)
                    }
                  }
                },
                {
                  key: '_$AK',
                  value: function (e, t) {
                    let n
                    const r = this.constructor
                    const i = r._$Ev.get(e)
                    if (void 0 !== i && this._$El !== i) {
                      const a = r.getPropertyOptions(i)
                      const o =
                            typeof a.converter === 'function'
                              ? { fromAttribute: a.converter }
                              : void 0 !==
                                  ((n = a.converter) === null || void 0 === n
                                    ? void 0
                                    : n.fromAttribute)
                                ? a.converter
                                : M
                        ;(this._$El = i),
                      (this[i] = o.fromAttribute(t, a.type)),
                      (this._$El = null)
                    }
                  }
                },
                {
                  key: 'requestUpdate',
                  value: function (e, t, n) {
                    let r = !0
                    void 0 !== e &&
                        ((
                          (n = n || this.constructor.getPropertyOptions(e))
                            .hasChanged || O
                        )(this[e], t)
                          ? (this._$AL.has(e) || this._$AL.set(e, t),
                            !0 === n.reflect &&
                              this._$El !== e &&
                              (void 0 === this._$EC && (this._$EC = new Map()),
                              this._$EC.set(e, n)))
                          : (r = !1)),
                    !this.isUpdatePending && r && (this._$E_ = this._$Ej())
                  }
                },
                {
                  key: '_$Ej',
                  value: (function () {
                    const e = (0, c.Z)(
                      (0, s.Z)().mark(function e () {
                        let t
                        return (0, s.Z)().wrap(
                          function (e) {
                            for (;;) {
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.isUpdatePending = !0),
                                    (e.prev = 1),
                                    (e.next = 4),
                                    this._$E_
                                  )
                                case 4:
                                  e.next = 9
                                  break
                                case 6:
                                  ;(e.prev = 6),
                                  (e.t0 = e.catch(1)),
                                  Promise.reject(e.t0)
                                case 9:
                                  if (
                                    ((t = this.scheduleUpdate()),
                                    (e.t1 = t != null),
                                    !e.t1)
                                  ) {
                                    e.next = 14
                                    break
                                  }
                                  return (e.next = 14), t
                                case 14:
                                  return e.abrupt(
                                    'return',
                                    !this.isUpdatePending
                                  )
                                case 15:
                                case 'end':
                                  return e.stop()
                              }
                            }
                          },
                          e,
                          this,
                          [[1, 6]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })()
                },
                {
                  key: 'scheduleUpdate',
                  value: function () {
                    return this.performUpdate()
                  }
                },
                {
                  key: 'performUpdate',
                  value: function () {
                    let e
                    const t = this
                    if (this.isUpdatePending) {
                      this.hasUpdated,
                      this._$Ei &&
                            (this._$Ei.forEach(function (e, n) {
                              return (t[n] = e)
                            }),
                            (this._$Ei = void 0))
                      let n = !1
                      const r = this._$AL
                      try {
                        ;(n = this.shouldUpdate(r))
                          ? (this.willUpdate(r),
                            (e = this._$ES) === null ||
                                void 0 === e ||
                                e.forEach(function (e) {
                                  let t
                                  return (t = e.hostUpdate) === null ||
                                    void 0 === t
                                    ? void 0
                                    : t.call(e)
                                }),
                            this.update(r))
                          : this._$Ek()
                      } catch (e) {
                        throw ((n = !1), this._$Ek(), e)
                      }
                      n && this._$AE(r)
                    }
                  }
                },
                { key: 'willUpdate', value: function (e) {} },
                {
                  key: '_$AE',
                  value: function (e) {
                    let t
                    (t = this._$ES) === null ||
                        void 0 === t ||
                        t.forEach(function (e) {
                          let t
                          return (t = e.hostUpdated) === null || void 0 === t
                            ? void 0
                            : t.call(e)
                        }),
                    this.hasUpdated ||
                          ((this.hasUpdated = !0), this.firstUpdated(e)),
                    this.updated(e)
                  }
                },
                {
                  key: '_$Ek',
                  value: function () {
                    ;(this._$AL = new Map()), (this.isUpdatePending = !1)
                  }
                },
                {
                  key: 'updateComplete',
                  get: function () {
                    return this.getUpdateComplete()
                  }
                },
                {
                  key: 'getUpdateComplete',
                  value: function () {
                    return this._$E_
                  }
                },
                {
                  key: 'shouldUpdate',
                  value: function (e) {
                    return !0
                  }
                },
                {
                  key: 'update',
                  value: function (e) {
                    const t = this
                    void 0 !== this._$EC &&
                        (this._$EC.forEach(function (e, n) {
                          return t._$EO(n, t[n], e)
                        }),
                        (this._$EC = void 0)),
                    this._$Ek()
                  }
                },
                { key: 'updated', value: function (e) {} },
                { key: 'firstUpdated', value: function (e) {} }
              ],
              [
                {
                  key: 'addInitializer',
                  value: function (e) {
                    let t
                    this.finalize(),
                    ((t = this.h) !== null && void 0 !== t
                      ? t
                      : (this.h = [])
                    ).push(e)
                  }
                },
                {
                  key: 'observedAttributes',
                  get: function () {
                    const e = this
                    this.finalize()
                    const t = []
                    return (
                      this.elementProperties.forEach(function (n, r) {
                        const i = e._$Ep(r, n)
                        void 0 !== i && (e._$Ev.set(i, r), t.push(i))
                      }),
                      t
                    )
                  }
                },
                {
                  key: 'createProperty',
                  value: function (e) {
                    const t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : S
                    if (
                      (t.state && (t.attribute = !1),
                      this.finalize(),
                      this.elementProperties.set(e, t),
                      !t.noAccessor && !this.prototype.hasOwnProperty(e))
                    ) {
                      const n = typeof e === 'symbol' ? Symbol() : '__' + e
                      const r = this.getPropertyDescriptor(e, n, t)
                      void 0 !== r &&
                          Object.defineProperty(this.prototype, e, r)
                    }
                  }
                },
                {
                  key: 'getPropertyDescriptor',
                  value: function (e, t, n) {
                    return {
                      get: function () {
                        return this[t]
                      },
                      set: function (r) {
                        const i = this[e]
                          ;(this[t] = r), this.requestUpdate(e, i, n)
                      },
                      configurable: !0,
                      enumerable: !0
                    }
                  }
                },
                {
                  key: 'getPropertyOptions',
                  value: function (e) {
                    return this.elementProperties.get(e) || S
                  }
                },
                {
                  key: 'finalize',
                  value: function () {
                    if (this.hasOwnProperty('finalized')) return !1
                    this.finalized = !0
                    const e = Object.getPrototypeOf(this)
                    if (
                      (e.finalize(),
                      void 0 !== e.h && (this.h = (0, o.Z)(e.h)),
                      (this.elementProperties = new Map(e.elementProperties)),
                      (this._$Ev = new Map()),
                      this.hasOwnProperty('properties'))
                    ) {
                      let t
                      const n = this.properties
                      const r = [].concat(
                        (0, o.Z)(Object.getOwnPropertyNames(n)),
                        (0, o.Z)(Object.getOwnPropertySymbols(n))
                      )
                      const i = (0, m.Z)(r)
                      try {
                        for (i.s(); !(t = i.n()).done;) {
                          const a = t.value
                          this.createProperty(a, n[a])
                        }
                      } catch (l) {
                        i.e(l)
                      } finally {
                        i.f()
                      }
                    }
                    return (
                      (this.elementStyles = this.finalizeStyles(this.styles)),
                      !0
                    )
                  }
                },
                {
                  key: 'finalizeStyles',
                  value: function (e) {
                    const t = []
                    if (Array.isArray(e)) {
                      let n
                      const r = new Set(e.flat(1 / 0).reverse())
                      const i = (0, m.Z)(r)
                      try {
                        for (i.s(); !(n = i.n()).done;) {
                          const a = n.value
                          t.unshift(Z(a))
                        }
                      } catch (o) {
                        i.e(o)
                      } finally {
                        i.f()
                      }
                    } else void 0 !== e && t.push(Z(e))
                    return t
                  }
                },
                {
                  key: '_$Ep',
                  value: function (e, t) {
                    const n = t.attribute
                    return !1 === n
                      ? void 0
                      : typeof n === 'string'
                        ? n
                        : typeof e === 'string'
                          ? e.toLowerCase()
                          : void 0
                  }
                }
              ]
            ),
            n
          )
        })((0, g.Z)(HTMLElement))
        ;(P.finalized = !0),
        (P.elementProperties = new Map()),
        (P.elementStyles = []),
        (P.shadowRootOptions = { mode: 'open' }),
        _ == null || _({ ReactiveElement: P }),
        ((r = A.reactiveElementVersions) !== null && void 0 !== r
          ? r
          : (A.reactiveElementVersions = [])
        ).push('1.6.1')
        const T = window
        const L = T.trustedTypes
        const j = L
          ? L.createPolicy('lit-html', {
            createHTML: function (e) {
              return e
            }
          })
          : void 0
        const N = 'lit$'.concat((Math.random() + '').slice(9), '$')
        const R = '?' + N
        const D = '<'.concat(R, '>')
        const B = document
        const z = function () {
          const e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : ''
          return B.createComment(e)
        }
        const U = function (e) {
          return (
            e === null || (typeof e !== 'object' && typeof e !== 'function')
          )
        }
        const W = Array.isArray
        const $ = function (e) {
          return (
            W(e) ||
              typeof (e == null ? void 0 : e[Symbol.iterator]) === 'function'
          )
        }
        const H = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g
        const V = /-->/g
        const F = />/g
        const q = RegExp(
          '>|[ \t\n\f\r](?:([^\\s"\'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r"\'`<>=]|("|\')|))|$)',
          'g'
        )
        const G = /'/g
        const K = /"/g
        const Y = /^(?:script|style|textarea|title)$/i
        const J = function (e) {
          return function (t) {
            for (
              var n = arguments.length,
                r = new Array(n > 1 ? n - 1 : 0),
                i = 1;
              i < n;
              i++
            ) { r[i - 1] = arguments[i] }
            return { _$litType$: e, strings: t, values: r }
          }
        }
        const X = J(1)
        const Q = J(2)
        const ee = Symbol.for('lit-noChange')
        const te = Symbol.for('lit-nothing')
        const ne = new WeakMap()
        const re = B.createTreeWalker(B, 129, null, !1)
        const ie = function (e, t) {
          for (
            var n,
              r = e.length - 1,
              i = [],
              a = t === 2 ? '<svg>' : '',
              o = H,
              l = 0;
            l < r;
            l++
          ) {
            for (
              var s = e[l], c = void 0, u = void 0, d = -1, h = 0;
              h < s.length && ((o.lastIndex = h), (u = o.exec(s)) !== null);

            ) {
              (h = o.lastIndex),
              o === H
                ? u[1] === '!--'
                  ? (o = V)
                  : void 0 !== u[1]
                    ? (o = F)
                    : void 0 !== u[2]
                      ? (Y.test(u[2]) && (n = RegExp('</' + u[2], 'g')),
                        (o = q))
                      : void 0 !== u[3] && (o = q)
                : o === q
                  ? u[0] === '>'
                    ? ((o = n != null ? n : H), (d = -1))
                    : void 0 === u[1]
                      ? (d = -2)
                      : ((d = o.lastIndex - u[2].length),
                        (c = u[1]),
                        (o = void 0 === u[3] ? q : u[3] === '"' ? K : G))
                  : o === K || o === G
                    ? (o = q)
                    : o === V || o === F
                      ? (o = H)
                      : ((o = q), (n = void 0))
            }
            const v = o === q && e[l + 1].startsWith('/>') ? ' ' : ''
            a +=
                o === H
                  ? s + D
                  : d >= 0
                    ? (i.push(c), s.slice(0, d) + '$lit$' + s.slice(d) + N + v)
                    : s + N + (d === -2 ? (i.push(void 0), l) : v)
          }
          const f = a + (e[r] || '<?>') + (t === 2 ? '</svg>' : '')
          if (!Array.isArray(e) || !e.hasOwnProperty('raw')) { throw Error('invalid template strings array') }
          return [void 0 !== j ? j.createHTML(f) : f, i]
        }
        const ae = (function () {
          function e (t, n) {
            let r
            const i = t.strings
            const a = t._$litType$
              ;(0, u.Z)(this, e), (this.parts = [])
            let l = 0
            let s = 0
            const c = i.length - 1
            const d = this.parts
            const h = ie(i, a)
            const v = (0, p.Z)(h, 2)
            const f = v[0]
            const g = v[1]
            if (
              ((this.el = e.createElement(f, n)),
              (re.currentNode = this.el.content),
              a === 2)
            ) {
              const w = this.el.content
              const b = w.firstChild
              b.remove(), w.append.apply(w, (0, o.Z)(b.childNodes))
            }
            for (; (r = re.nextNode()) !== null && d.length < c;) {
              if (r.nodeType === 1) {
                if (r.hasAttributes()) {
                  var y
                  const x = []
                  const k = (0, m.Z)(r.getAttributeNames())
                  try {
                    for (k.s(); !(y = k.n()).done;) {
                      const C = y.value
                      if (C.endsWith('$lit$') || C.startsWith(N)) {
                        const Z = g[s++]
                        if ((x.push(C), void 0 !== Z)) {
                          const A = r
                            .getAttribute(Z.toLowerCase() + '$lit$')
                            .split(N)
                          const E = /([.?@])?(.*)/.exec(Z)
                          d.push({
                            type: 1,
                            index: l,
                            name: E[2],
                            strings: A,
                            ctor:
                                E[1] === '.'
                                  ? ue
                                  : E[1] === '?'
                                    ? he
                                    : E[1] === '@'
                                      ? ve
                                      : ce
                          })
                        } else d.push({ type: 6, index: l })
                      }
                    }
                  } catch (j) {
                    k.e(j)
                  } finally {
                    k.f()
                  }
                  for (let I = 0, _ = x; I < _.length; I++) {
                    const M = _[I]
                    r.removeAttribute(M)
                  }
                }
                if (Y.test(r.tagName)) {
                  const O = r.textContent.split(N)
                  const S = O.length - 1
                  if (S > 0) {
                    r.textContent = L ? L.emptyScript : ''
                    for (let P = 0; P < S; P++) {
                      r.append(O[P], z()),
                      re.nextNode(),
                      d.push({ type: 2, index: ++l })
                    }
                    r.append(O[S], z())
                  }
                }
              } else if (r.nodeType === 8) {
                if (r.data === R) d.push({ type: 2, index: l })
                else {
                  for (let T = -1; (T = r.data.indexOf(N, T + 1)) !== -1;) { d.push({ type: 7, index: l }), (T += N.length - 1) }
                }
              }
              l++
            }
          }
          return (
            (0, d.Z)(e, null, [
              {
                key: 'createElement',
                value: function (e, t) {
                  const n = B.createElement('template')
                  return (n.innerHTML = e), n
                }
              }
            ]),
            e
          )
        })()
        function oe (e, t) {
          let n
          let r
          let i
          let a
          const o =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : e
          const l = arguments.length > 3 ? arguments[3] : void 0
          if (t === ee) return t
          let s =
              void 0 !== l
                ? (n = o._$Co) === null || void 0 === n
                    ? void 0
                    : n[l]
                : o._$Cl
          const c = U(t) ? void 0 : t._$litDirective$
          return (
            (s == null ? void 0 : s.constructor) !== c &&
              ((r = s == null ? void 0 : s._$AO) === null ||
                void 0 === r ||
                r.call(s, !1),
              void 0 === c ? (s = void 0) : (s = new c(e))._$AT(e, o, l),
              void 0 !== l
                ? (((i = (a = o)._$Co) !== null && void 0 !== i
                    ? i
                    : (a._$Co = []))[l] = s)
                : (o._$Cl = s)),
            void 0 !== s && (t = oe(e, s._$AS(e, t.values), s, l)),
            t
          )
        }
        const le = (function () {
          function e (t, n) {
            ;(0, u.Z)(this, e),
            (this.u = []),
            (this._$AN = void 0),
            (this._$AD = t),
            (this._$AM = n)
          }
          return (
            (0, d.Z)(e, [
              {
                key: 'parentNode',
                get: function () {
                  return this._$AM.parentNode
                }
              },
              {
                key: '_$AU',
                get: function () {
                  return this._$AM._$AU
                }
              },
              {
                key: 'v',
                value: function (e) {
                  let t
                  const n = this._$AD
                  const r = n.el.content
                  const i = n.parts
                  const a = (
                    (t = e == null ? void 0 : e.creationScope) !== null &&
                        void 0 !== t
                      ? t
                      : B
                  ).importNode(r, !0)
                  re.currentNode = a
                  for (
                    let o = re.nextNode(), l = 0, s = 0, c = i[0];
                    void 0 !== c;

                  ) {
                    if (l === c.index) {
                      let u = void 0
                      c.type === 2
                        ? (u = new se(o, o.nextSibling, this, e))
                        : c.type === 1
                          ? (u = new c.ctor(o, c.name, c.strings, this, e))
                          : c.type === 6 && (u = new fe(o, this, e)),
                      this.u.push(u),
                      (c = i[++s])
                    }
                    l !== (c == null ? void 0 : c.index) &&
                        ((o = re.nextNode()), l++)
                  }
                  return a
                }
              },
              {
                key: 'p',
                value: function (e) {
                  let t
                  let n = 0
                  const r = (0, m.Z)(this.u)
                  try {
                    for (r.s(); !(t = r.n()).done;) {
                      const i = t.value
                      void 0 !== i &&
                          (void 0 !== i.strings
                            ? (i._$AI(e, i, n), (n += i.strings.length - 2))
                            : i._$AI(e[n])),
                      n++
                    }
                  } catch (a) {
                    r.e(a)
                  } finally {
                    r.f()
                  }
                }
              }
            ]),
            e
          )
        })()
        var se = (function () {
          function e (t, n, r, i) {
            let a
              ;(0, u.Z)(this, e),
            (this.type = 2),
            (this._$AH = te),
            (this._$AN = void 0),
            (this._$AA = t),
            (this._$AB = n),
            (this._$AM = r),
            (this.options = i),
            (this._$Cm =
                  (a = i == null ? void 0 : i.isConnected) === null ||
                  void 0 === a ||
                  a)
          }
          return (
            (0, d.Z)(e, [
              {
                key: '_$AU',
                get: function () {
                  let e, t
                  return (t =
                        (e = this._$AM) === null || void 0 === e
                          ? void 0
                          : e._$AU) !==
                      null && void 0 !== t
                    ? t
                    : this._$Cm
                }
              },
              {
                key: 'parentNode',
                get: function () {
                  let e = this._$AA.parentNode
                  const t = this._$AM
                  return (
                    void 0 !== t && e.nodeType === 11 && (e = t.parentNode), e
                  )
                }
              },
              {
                key: 'startNode',
                get: function () {
                  return this._$AA
                }
              },
              {
                key: 'endNode',
                get: function () {
                  return this._$AB
                }
              },
              {
                key: '_$AI',
                value: function (e) {
                  ;(e = oe(
                    this,
                    e,
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : this
                  )),
                  U(e)
                    ? e === te || e == null || e === ''
                      ? (this._$AH !== te && this._$AR(), (this._$AH = te))
                      : e !== this._$AH && e !== ee && this.g(e)
                    : void 0 !== e._$litType$
                      ? this.$(e)
                      : void 0 !== e.nodeType
                        ? this.T(e)
                        : $(e)
                          ? this.k(e)
                          : this.g(e)
                }
              },
              {
                key: 'O',
                value: function (e) {
                  const t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : this._$AB
                  return this._$AA.parentNode.insertBefore(e, t)
                }
              },
              {
                key: 'T',
                value: function (e) {
                  this._$AH !== e && (this._$AR(), (this._$AH = this.O(e)))
                }
              },
              {
                key: 'g',
                value: function (e) {
                  this._$AH !== te && U(this._$AH)
                    ? (this._$AA.nextSibling.data = e)
                    : this.T(B.createTextNode(e)),
                  (this._$AH = e)
                }
              },
              {
                key: '$',
                value: function (e) {
                  let t
                  const n = e.values
                  const r = e._$litType$
                  const i =
                        typeof r === 'number'
                          ? this._$AC(e)
                          : (void 0 === r.el &&
                              (r.el = ae.createElement(r.h, this.options)),
                            r)
                  if (
                    ((t = this._$AH) === null || void 0 === t
                      ? void 0
                      : t._$AD) === i
                  ) { this._$AH.p(n) } else {
                    const a = new le(i, this)
                    const o = a.v(this.options)
                    a.p(n), this.T(o), (this._$AH = a)
                  }
                }
              },
              {
                key: '_$AC',
                value: function (e) {
                  let t = ne.get(e.strings)
                  return void 0 === t && ne.set(e.strings, (t = new ae(e))), t
                }
              },
              {
                key: 'k',
                value: function (t) {
                  W(this._$AH) || ((this._$AH = []), this._$AR())
                  let n
                  let r
                  const i = this._$AH
                  let a = 0
                  const o = (0, m.Z)(t)
                  try {
                    for (o.s(); !(r = o.n()).done;) {
                      const l = r.value
                      a === i.length
                        ? i.push(
                          (n = new e(
                            this.O(z()),
                            this.O(z()),
                            this,
                            this.options
                          ))
                        )
                        : (n = i[a]),
                      n._$AI(l),
                      a++
                    }
                  } catch (s) {
                    o.e(s)
                  } finally {
                    o.f()
                  }
                  a < i.length &&
                      (this._$AR(n && n._$AB.nextSibling, a), (i.length = a))
                }
              },
              {
                key: '_$AR',
                value: function () {
                  let e
                  let t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : this._$AA.nextSibling
                  const n = arguments.length > 1 ? arguments[1] : void 0
                  for (
                    (e = this._$AP) === null ||
                      void 0 === e ||
                      e.call(this, !1, !0, n);
                    t && t !== this._$AB;

                  ) {
                    const r = t.nextSibling
                    t.remove(), (t = r)
                  }
                }
              },
              {
                key: 'setConnected',
                value: function (e) {
                  let t
                  void 0 === this._$AM &&
                      ((this._$Cm = e),
                      (t = this._$AP) === null ||
                        void 0 === t ||
                        t.call(this, e))
                }
              }
            ]),
            e
          )
        })()
        var ce = (function () {
          function e (t, n, r, i, a) {
            ;(0, u.Z)(this, e),
            (this.type = 1),
            (this._$AH = te),
            (this._$AN = void 0),
            (this.element = t),
            (this.name = n),
            (this._$AM = i),
            (this.options = a),
            r.length > 2 || r[0] !== '' || r[1] !== ''
              ? ((this._$AH = Array(r.length - 1).fill(new String())),
                (this.strings = r))
              : (this._$AH = te)
          }
          return (
            (0, d.Z)(e, [
              {
                key: 'tagName',
                get: function () {
                  return this.element.tagName
                }
              },
              {
                key: '_$AU',
                get: function () {
                  return this._$AM._$AU
                }
              },
              {
                key: '_$AI',
                value: function (e) {
                  const t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : this
                  const n = arguments.length > 2 ? arguments[2] : void 0
                  const r = arguments.length > 3 ? arguments[3] : void 0
                  const i = this.strings
                  let a = !1
                  if (void 0 === i) {
                    (e = oe(this, e, t, 0)),
                    (a = !U(e) || (e !== this._$AH && e !== ee)) &&
                          (this._$AH = e)
                  } else {
                    let o
                    let l
                    const s = e
                    for (e = i[0], o = 0; o < i.length - 1; o++) {
                      (l = oe(this, s[n + o], t, o)) === ee &&
                          (l = this._$AH[o]),
                      a || (a = !U(l) || l !== this._$AH[o]),
                      l === te
                        ? (e = te)
                        : e !== te &&
                              (e += (l != null ? l : '') + i[o + 1]),
                      (this._$AH[o] = l)
                    }
                  }
                  a && !r && this.j(e)
                }
              },
              {
                key: 'j',
                value: function (e) {
                  e === te
                    ? this.element.removeAttribute(this.name)
                    : this.element.setAttribute(this.name, e != null ? e : '')
                }
              }
            ]),
            e
          )
        })()
        var ue = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            let e
            return (
              (0, u.Z)(this, n), ((e = t.apply(this, arguments)).type = 3), e
            )
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'j',
                value: function (e) {
                  this.element[this.name] = e === te ? void 0 : e
                }
              }
            ]),
            n
          )
        })(ce)
        const de = L ? L.emptyScript : ''
        var he = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            let e
            return (
              (0, u.Z)(this, n), ((e = t.apply(this, arguments)).type = 4), e
            )
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'j',
                value: function (e) {
                  e && e !== te
                    ? this.element.setAttribute(this.name, de)
                    : this.element.removeAttribute(this.name)
                }
              }
            ]),
            n
          )
        })(ce)
        var ve = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n (e, r, i, a, o) {
            let l
            return (
              (0, u.Z)(this, n),
              ((l = t.call(this, e, r, i, a, o)).type = 5),
              l
            )
          }
          return (
            (0, d.Z)(n, [
              {
                key: '_$AI',
                value: function (e) {
                  let t
                  if (
                    (e =
                        (t = oe(
                          this,
                          e,
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : this,
                          0
                        )) !==
                          null && void 0 !== t
                          ? t
                          : te) !== ee
                  ) {
                    const n = this._$AH
                    const r =
                          (e === te && n !== te) ||
                          e.capture !== n.capture ||
                          e.once !== n.once ||
                          e.passive !== n.passive
                    const i = e !== te && (n === te || r)
                    r && this.element.removeEventListener(this.name, this, n),
                    i && this.element.addEventListener(this.name, this, e),
                    (this._$AH = e)
                  }
                }
              },
              {
                key: 'handleEvent',
                value: function (e) {
                  let t, n
                  typeof this._$AH === 'function'
                    ? this._$AH.call(
                      (n =
                              (t = this.options) === null || void 0 === t
                                ? void 0
                                : t.host) !==
                            null && void 0 !== n
                        ? n
                        : this.element,
                      e
                    )
                    : this._$AH.handleEvent(e)
                }
              }
            ]),
            n
          )
        })(ce)
        var fe = (function () {
          function e (t, n, r) {
            ;(0, u.Z)(this, e),
            (this.element = t),
            (this.type = 6),
            (this._$AN = void 0),
            (this._$AM = n),
            (this.options = r)
          }
          return (
            (0, d.Z)(e, [
              {
                key: '_$AU',
                get: function () {
                  return this._$AM._$AU
                }
              },
              {
                key: '_$AI',
                value: function (e) {
                  oe(this, e)
                }
              }
            ]),
            e
          )
        })()
        const pe = T.litHtmlPolyfillSupport
        pe == null || pe(ae, se),
        ((i = T.litHtmlVersions) !== null && void 0 !== i
          ? i
          : (T.litHtmlVersions = [])
        ).push('2.6.1')
        let me
        let ge
        const we = n(97326)
        const be = n(11752)
        const ye = n(61120)
        const xe = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            let e
            return (
              (0, u.Z)(this, n),
              ((e = t.apply(this, arguments)).renderOptions = {
                host: (0, we.Z)(e)
              }),
              (e._$Do = void 0),
              e
            )
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'createRenderRoot',
                value: function () {
                  let e
                  let t
                  const r = (0, be.Z)(
                    (0, ye.Z)(n.prototype),
                    'createRenderRoot',
                    this
                  ).call(this)
                  return (
                    ((e = (t = this.renderOptions).renderBefore) !== null &&
                        void 0 !== e) ||
                        (t.renderBefore = r.firstChild),
                    r
                  )
                }
              },
              {
                key: 'update',
                value: function (e) {
                  const t = this.render()
                  this.hasUpdated ||
                      (this.renderOptions.isConnected = this.isConnected),
                  (0, be.Z)((0, ye.Z)(n.prototype), 'update', this).call(
                    this,
                    e
                  ),
                  (this._$Do = (function (e, t, n) {
                    let r
                    let i
                    const a =
                            (r = n == null ? void 0 : n.renderBefore) !==
                              null &&
                            void 0 !== r
                              ? r
                              : t
                    let o = a._$litPart$
                    if (void 0 === o) {
                      const l =
                            (i = n == null ? void 0 : n.renderBefore) !==
                              null &&
                            void 0 !== i
                              ? i
                              : null
                      a._$litPart$ = o = new se(
                        t.insertBefore(z(), l),
                        l,
                        void 0,
                        n != null ? n : {}
                      )
                    }
                    return o._$AI(e), o
                  })(t, this.renderRoot, this.renderOptions))
                }
              },
              {
                key: 'connectedCallback',
                value: function () {
                  let e
                    ;(0, be.Z)(
                    (0, ye.Z)(n.prototype),
                    'connectedCallback',
                    this
                  ).call(this),
                  (e = this._$Do) === null ||
                        void 0 === e ||
                        e.setConnected(!0)
                }
              },
              {
                key: 'disconnectedCallback',
                value: function () {
                  let e
                    ;(0, be.Z)(
                    (0, ye.Z)(n.prototype),
                    'disconnectedCallback',
                    this
                  ).call(this),
                  (e = this._$Do) === null ||
                        void 0 === e ||
                        e.setConnected(!1)
                }
              },
              {
                key: 'render',
                value: function () {
                  return ee
                }
              }
            ]),
            n
          )
        })(P)
        ;(xe.finalized = !0),
        (xe._$litElement$ = !0),
        (me = globalThis.litElementHydrateSupport) === null ||
            void 0 === me ||
            me.call(globalThis, { LitElement: xe })
        const ke = globalThis.litElementPolyfillSupport
        ke == null || ke({ LitElement: xe })
        ;((ge = globalThis.litElementVersions) !== null && void 0 !== ge
          ? ge
          : (globalThis.litElementVersions = [])
        ).push('3.2.2')
        let Ce
        const Ze = function (e) {
          return function (t) {
            return typeof t === 'function'
              ? (function (e, t) {
                  return customElements.define(e, t), t
                })(e, t)
              : (function (e, t) {
                  return {
                    kind: t.kind,
                    elements: t.elements,
                    finisher: function (t) {
                      customElements.define(e, t)
                    }
                  }
                })(e, t)
          }
        }
        const Ae = n(1413)
        const Ee = function (e, t) {
          return t.kind === 'method' &&
              t.descriptor &&
              !('value' in t.descriptor)
            ? (0, Ae.Z)(
                (0, Ae.Z)({}, t),
                {},
                {
                  finisher: function (n) {
                    n.createProperty(t.key, e)
                  }
                }
              )
            : {
                kind: 'field',
                key: Symbol(),
                placement: 'own',
                descriptor: {},
                originalKey: t.key,
                initializer: function () {
                  typeof t.initializer === 'function' &&
                      (this[t.key] = t.initializer.call(this))
                },
                finisher: function (n) {
                  n.createProperty(t.key, e)
                }
              }
        }
        function Ie (e) {
          return function (t, n) {
            return void 0 !== n
              ? (function (e, t, n) {
                  t.constructor.createProperty(n, e)
                })(e, t, n)
              : Ee(e, t)
          }
        }
        function _e (e) {
          return Ie((0, Ae.Z)((0, Ae.Z)({}, e), {}, { state: !0 }))
        }
        (Ce = window.HTMLSlotElement) === null ||
          void 0 === Ce ||
          Ce.prototype.assignedElements
        const Me = n(63475)
        const Oe = {
          ATTRIBUTE: 1,
          CHILD: 2,
          PROPERTY: 3,
          BOOLEAN_ATTRIBUTE: 4,
          EVENT: 5,
          ELEMENT: 6
        }
        const Se = (function () {
          function e (t) {
            ;(0, u.Z)(this, e)
          }
          return (
            (0, d.Z)(e, [
              {
                key: '_$AU',
                get: function () {
                  return this._$AM._$AU
                }
              },
              {
                key: '_$AT',
                value: function (e, t, n) {
                  ;(this._$Ct = e), (this._$AM = t), (this._$Ci = n)
                }
              },
              {
                key: '_$AS',
                value: function (e, t) {
                  return this.update(e, t)
                }
              },
              {
                key: 'update',
                value: function (e, t) {
                  return this.render.apply(this, (0, o.Z)(t))
                }
              }
            ]),
            e
          )
        })()
        const Pe = (function (e) {
          return function () {
            for (
              var t = arguments.length, n = new Array(t), r = 0;
              r < t;
              r++
            ) { n[r] = arguments[r] }
            return { _$litDirective$: e, values: n }
          }
        })(
          (function (e) {
            ;(0, h.Z)(n, e)
            const t = (0, v.Z)(n)
            function n (e) {
              let r, i
              if (
                ((0, u.Z)(this, n),
                (r = t.call(this, e)),
                e.type !== Oe.ATTRIBUTE ||
                    e.name !== 'class' ||
                    ((i = e.strings) === null || void 0 === i
                      ? void 0
                      : i.length) > 2)
              ) {
                throw Error(
                  '`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.'
                )
              }
              return (0, a.Z)(r)
            }
            return (
              (0, d.Z)(n, [
                {
                  key: 'render',
                  value: function (e) {
                    return (
                      ' ' +
                        Object.keys(e)
                          .filter(function (t) {
                            return e[t]
                          })
                          .join(' ') +
                        ' '
                    )
                  }
                },
                {
                  key: 'update',
                  value: function (e, t) {
                    let n
                    let r
                    const i = this
                    const a = (0, p.Z)(t, 1)[0]
                    if (void 0 === this.nt) {
                      for (const o in ((this.nt = new Set()),
                      void 0 !== e.strings &&
                          (this.st = new Set(
                            e.strings
                              .join(' ')
                              .split(/\s/)
                              .filter(function (e) {
                                return e !== ''
                              })
                          )),
                      a)) {
                        a[o] &&
                            !((n = this.st) === null || void 0 === n
                              ? void 0
                              : n.has(o)) &&
                            this.nt.add(o)
                      }
                      return this.render(a)
                    }
                    const l = e.element.classList
                    for (const s in (this.nt.forEach(function (e) {
                      e in a || (l.remove(e), i.nt.delete(e))
                    }),
                    a)) {
                      const c = !!a[s]
                      c === this.nt.has(s) ||
                          ((r = this.st) === null || void 0 === r
                            ? void 0
                            : r.has(s)) ||
                          (c
                            ? (l.add(s), this.nt.add(s))
                            : (l.remove(s), this.nt.delete(s)))
                    }
                    return ee
                  }
                }
              ]),
              n
            )
          })(Se)
        )
        const Te = {
          duration: 0.3,
          delay: 0,
          endDelay: 0,
          repeat: 0,
          easing: 'ease'
        }
        const Le = {
          ms: function (e) {
            return 1e3 * e
          },
          s: function (e) {
            return e / 1e3
          }
        }
        const je = function () {}
        const Ne = function (e) {
          return e
        }
        function Re (e) {
          const t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
          if (e && e.playState !== 'finished') {
            try {
              e.stop ? e.stop() : (t && e.commitStyles(), e.cancel())
            } catch (n) {}
          }
        }
        const De = function (e) {
          return e()
        }
        const Be = function (e, t) {
          const n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : Te.duration
          return new Proxy(
            {
              animations: e.map(De).filter(Boolean),
              duration: n,
              options: t
            },
            ze
          )
        }
        var ze = {
          get: function (e, t) {
            const n = e.animations[0]
            switch (t) {
              case 'duration':
                return e.duration
              case 'currentTime':
                return Le.s((n === null || void 0 === n ? void 0 : n[t]) || 0)
              case 'playbackRate':
              case 'playState':
                return n === null || void 0 === n ? void 0 : n[t]
              case 'finished':
                return (
                  e.finished ||
                      (e.finished = Promise.all(e.animations.map(Ue)).catch(
                        je
                      )),
                  e.finished
                )
              case 'stop':
                return function () {
                  e.animations.forEach(function (e) {
                    return Re(e)
                  })
                }
              case 'forEachNative':
                return function (t) {
                  e.animations.forEach(function (n) {
                    return t(n, e)
                  })
                }
              default:
                return typeof (n === null || void 0 === n ? void 0 : n[t]) ===
                    'undefined'
                  ? void 0
                  : function () {
                    return e.animations.forEach(function (e) {
                      return e[t]()
                    })
                  }
            }
          },
          set: function (e, t, n) {
            switch (t) {
              case 'currentTime':
                n = Le.ms(n)
              case 'currentTime':
              case 'playbackRate':
                for (let r = 0; r < e.animations.length; r++) { e.animations[r][t] = n }
                return !0
            }
            return !1
          }
        }
        var Ue = function (e) {
          return e.finished
        }
        const We = function (e) {
          return typeof e === 'object' && Boolean(e.createAnimation)
        }
        const $e = function (e) {
          return typeof e === 'number'
        }
        const He = function (e) {
          return Array.isArray(e) && !$e(e[0])
        }
        const Ve = function (e, t, n) {
          return -n * e + n * t + e
        }
        const Fe = function (e, t, n) {
          return t - e === 0 ? 1 : (n - e) / (t - e)
        }
        function qe (e, t) {
          for (let n = e[e.length - 1], r = 1; r <= t; r++) {
            const i = Fe(0, t, r)
            e.push(Ve(n, 1, i))
          }
        }
        const Ge = function (e, t, n) {
          const r = t - e
          return ((((n - e) % r) + r) % r) + e
        }
        const Ke = function (e, t, n) {
          return Math.min(Math.max(n, e), t)
        }
        function Ye (e) {
          const t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : (function (e) {
                    const t = [0]
                    return qe(t, e - 1), t
                  })(e.length)
          const n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : Ne
          const r = e.length
          const i = r - t.length
          return (
            i > 0 && qe(t, i),
            function (i) {
              for (var a = 0; a < r - 2 && !(i < t[a + 1]); a++);
              let o = Ke(0, 1, Fe(t[a], t[a + 1], i))
              const l = (function (e, t) {
                return He(e) ? e[Ge(0, e.length, t)] : e
              })(n, a)
              return (o = l(o)), Ve(e[a], e[a + 1], o)
            }
          )
        }
        const Je = function (e, t, n) {
          return (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
        }
        const Xe = 1e-7
        const Qe = 12
        function et (e, t, n, r) {
          if (e === t && n === r) return Ne
          const i = function (t) {
            return (function (e, t, n, r, i) {
              let a
              let o
              let l = 0
              do {
                ;(a = Je((o = t + (n - t) / 2), r, i) - e) > 0
                  ? (n = o)
                  : (t = o)
              } while (Math.abs(a) > Xe && ++l < Qe)
              return o
            })(t, 0, 1, e, n)
          }
          return function (e) {
            return e === 0 || e === 1 ? e : Je(i(e), t, r)
          }
        }
        const tt = function (e) {
          const t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 'end'
          return function (n) {
            const r =
                  (n = t === 'end' ? Math.min(n, 0.999) : Math.max(n, 0.001)) *
                  e
            const i = t === 'end' ? Math.floor(r) : Math.ceil(r)
            return Ke(0, 1, i / e)
          }
        }
        const nt = function (e) {
          return typeof e === 'function'
        }
        const rt = function (e) {
          return Array.isArray(e) && $e(e[0])
        }
        const it = {
          ease: et(0.25, 0.1, 0.25, 1),
          'ease-in': et(0.42, 0, 1, 1),
          'ease-in-out': et(0.42, 0, 0.58, 1),
          'ease-out': et(0, 0, 0.58, 1)
        }
        const at = /\((.*?)\)/
        function ot (e) {
          if (nt(e)) return e
          if (rt(e)) return et.apply(void 0, (0, o.Z)(e))
          if (it[e]) return it[e]
          if (e.startsWith('steps')) {
            const t = at.exec(e)
            if (t) {
              const n = t[1].split(',')
              return tt(parseFloat(n[0]), n[1].trim())
            }
          }
          return Ne
        }
        const lt = (function () {
          function e (t) {
            const n = this
            let r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [0, 1]
            const i =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {}
            let a = i.easing
            const o = i.duration
            let l = void 0 === o ? Te.duration : o
            const s = i.delay
            const c = void 0 === s ? Te.delay : s
            const d = i.endDelay
            const h = void 0 === d ? Te.endDelay : d
            const v = i.repeat
            const f = void 0 === v ? Te.repeat : v
            const p = i.offset
            const m = i.direction
            const g = void 0 === m ? 'normal' : m
            if (
              ((0, u.Z)(this, e),
              (this.startTime = null),
              (this.rate = 1),
              (this.t = 0),
              (this.cancelTimestamp = null),
              (this.easing = Ne),
              (this.duration = 0),
              (this.totalDuration = 0),
              (this.repeat = 0),
              (this.playState = 'idle'),
              (this.finished = new Promise(function (e, t) {
                ;(n.resolve = e), (n.reject = t)
              })),
              (a = a || Te.easing),
              We(a))
            ) {
              const w = a.createAnimation(r)
                ;(a = w.easing), (r = w.keyframes || r), (l = w.duration || l)
            }
            ;(this.repeat = f),
            (this.easing = He(a) ? Ne : ot(a)),
            this.updateDuration(l)
            const b = Ye(r, p, He(a) ? a.map(ot) : Ne)
              ;(this.tick = function (e) {
              let r
              let i = 0
                ;(i =
                  void 0 !== n.pauseTime
                    ? n.pauseTime
                    : (e - n.startTime) * n.rate),
              (n.t = i),
              (i /= 1e3),
              (i = Math.max(i - c, 0)),
              n.playState === 'finished' &&
                    void 0 === n.pauseTime &&
                    (i = n.totalDuration)
              const a = i / n.duration
              let o = Math.floor(a)
              let l = a % 1
              !l && a >= 1 && (l = 1), l === 1 && o--
              const s = o % 2
                ;(g === 'reverse' ||
                  (g === 'alternate' && s) ||
                  (g === 'alternate-reverse' && !s)) &&
                  (l = 1 - l)
              const u = i >= n.totalDuration ? 1 : Math.min(l, 1)
              const d = b(n.easing(u))
              t(d),
              void 0 === n.pauseTime &&
                  (n.playState === 'finished' || i >= n.totalDuration + h)
                ? ((n.playState = 'finished'),
                  (r = n.resolve) === null || void 0 === r || r.call(n, d))
                : n.playState !== 'idle' &&
                      (n.frameRequestId = requestAnimationFrame(n.tick))
            }),
            this.play()
          }
          return (
            (0, d.Z)(e, [
              {
                key: 'play',
                value: function () {
                  const e = performance.now()
                    ;(this.playState = 'running'),
                  void 0 !== this.pauseTime
                    ? (this.startTime = e - this.pauseTime)
                    : this.startTime || (this.startTime = e),
                  (this.cancelTimestamp = this.startTime),
                  (this.pauseTime = void 0),
                  (this.frameRequestId = requestAnimationFrame(this.tick))
                }
              },
              {
                key: 'pause',
                value: function () {
                  ;(this.playState = 'paused'), (this.pauseTime = this.t)
                }
              },
              {
                key: 'finish',
                value: function () {
                  ;(this.playState = 'finished'), this.tick(0)
                }
              },
              {
                key: 'stop',
                value: function () {
                  let e
                    ;(this.playState = 'idle'),
                  void 0 !== this.frameRequestId &&
                        cancelAnimationFrame(this.frameRequestId),
                  (e = this.reject) === null ||
                        void 0 === e ||
                        e.call(this, !1)
                }
              },
              {
                key: 'cancel',
                value: function () {
                  this.stop(), this.tick(this.cancelTimestamp)
                }
              },
              {
                key: 'reverse',
                value: function () {
                  this.rate *= -1
                }
              },
              { key: 'commitStyles', value: function () {} },
              {
                key: 'updateDuration',
                value: function (e) {
                  ;(this.duration = e),
                  (this.totalDuration = e * (this.repeat + 1))
                }
              },
              {
                key: 'currentTime',
                get: function () {
                  return this.t
                },
                set: function (e) {
                  void 0 !== this.pauseTime || this.rate === 0
                    ? (this.pauseTime = e)
                    : (this.startTime = performance.now() - e / this.rate)
                }
              },
              {
                key: 'playbackRate',
                get: function () {
                  return this.rate
                },
                set: function (e) {
                  this.rate = e
                }
              }
            ]),
            e
          )
        })()
        const st = function () {}
        const ct = (function () {
          function e () {
            ;(0, u.Z)(this, e)
          }
          return (
            (0, d.Z)(e, [
              {
                key: 'setAnimation',
                value: function (e) {
                  const t = this
                    ;(this.animation = e),
                  e === null ||
                        void 0 === e ||
                        e.finished
                          .then(function () {
                            return t.clearAnimation()
                          })
                          .catch(function () {})
                }
              },
              {
                key: 'clearAnimation',
                value: function () {
                  this.animation = this.generator = void 0
                }
              }
            ]),
            e
          )
        })()
        const ut = new WeakMap()
        function dt (e) {
          return (
            ut.has(e) || ut.set(e, { transforms: [], values: new Map() }),
            ut.get(e)
          )
        }
        const ht = ['', 'X', 'Y', 'Z']
        const vt = { x: 'translateX', y: 'translateY', z: 'translateZ' }
        const ft = {
          syntax: '<angle>',
          initialValue: '0deg',
          toDefaultUnit: function (e) {
            return e + 'deg'
          }
        }
        const pt = {
          translate: {
            syntax: '<length-percentage>',
            initialValue: '0px',
            toDefaultUnit: function (e) {
              return e + 'px'
            }
          },
          rotate: ft,
          scale: { syntax: '<number>', initialValue: 1, toDefaultUnit: Ne },
          skew: ft
        }
        const mt = new Map()
        const gt = function (e) {
          return '--motion-'.concat(e)
        }
        const wt = ['x', 'y', 'z']
        ;['translate', 'scale', 'rotate', 'skew'].forEach(function (e) {
          ht.forEach(function (t) {
            wt.push(e + t), mt.set(gt(e + t), pt[e])
          })
        })
        const bt = function (e, t) {
          return wt.indexOf(e) - wt.indexOf(t)
        }
        const yt = new Set(wt)
        const xt = function (e) {
          return yt.has(e)
        }
        const kt = function (e, t) {
          vt[t] && (t = vt[t])
          let n
          let r
          const i = dt(e).transforms
            ;(r = t),
          (n = i).indexOf(r) === -1 && n.push(r),
          (e.style.transform = Ct(i))
        }
        var Ct = function (e) {
          return e.sort(bt).reduce(Zt, '').trim()
        }
        var Zt = function (e, t) {
          return ''.concat(e, ' ').concat(t, '(var(').concat(gt(t), '))')
        }
        const At = function (e) {
          return e.startsWith('--')
        }
        const Et = new Set()
        const It = function (e, t) {
          return document.createElement('div').animate(e, t)
        }
        const _t = {
          cssRegisterProperty: function () {
            return (
              typeof CSS !== 'undefined' &&
                Object.hasOwnProperty.call(CSS, 'registerProperty')
            )
          },
          waapi: function () {
            return Object.hasOwnProperty.call(Element.prototype, 'animate')
          },
          partialKeyframes: function () {
            try {
              It({ opacity: [1] })
            } catch (e) {
              return !1
            }
            return !0
          },
          finished: function () {
            return Boolean(
              It({ opacity: [0, 1] }, { duration: 0.001 }).finished
            )
          },
          linearEasing: function () {
            try {
              It({ opacity: 0 }, { easing: 'linear(0, 1)' })
            } catch (e) {
              return !1
            }
            return !0
          }
        }
        const Mt = {}
        const Ot = {}
        const St = function (e) {
          Ot[e] = function () {
            return void 0 === Mt[e] && (Mt[e] = _t[e]()), Mt[e]
          }
        }
        for (const Pt in _t) St(Pt)
        const Tt = function (e, t) {
          return nt(e)
            ? Ot.linearEasing()
              ? 'linear('.concat(
                (function (e, t) {
                  for (
                    var n = '', r = Math.round(t / 0.015), i = 0;
                    i < r;
                    i++
                  ) { n += e(Fe(0, r - 1, i)) + ', ' }
                  return n.substring(0, n.length - 2)
                })(e, t),
                ')'
              )
              : Te.easing
            : rt(e)
              ? Lt(e)
              : e
        }
        var Lt = function (e) {
          const t = (0, p.Z)(e, 4)
          const n = t[0]
          const r = t[1]
          const i = t[2]
          const a = t[3]
          return 'cubic-bezier('
            .concat(n, ', ')
            .concat(r, ', ')
            .concat(i, ', ')
            .concat(a, ')')
        }
        const jt = function (e) {
          return Array.isArray(e) ? e : [e]
        }
        function Nt (e) {
          return vt[e] && (e = vt[e]), xt(e) ? gt(e) : e
        }
        const Rt = {
          get: function (e, t) {
            t = Nt(t)
            let n = At(t)
              ? e.style.getPropertyValue(t)
              : getComputedStyle(e)[t]
            if (!n && n !== 0) {
              const r = mt.get(t)
              r && (n = r.initialValue)
            }
            return n
          },
          set: function (e, t, n) {
            ;(t = Nt(t)), At(t) ? e.style.setProperty(t, n) : (e.style[t] = n)
          }
        }
        const Dt = function (e) {
          return typeof e === 'string'
        }
        function Bt (e, t) {
          let n
          let r = (t === null || void 0 === t ? void 0 : t.toDefaultUnit) || Ne
          const i = e[e.length - 1]
          if (Dt(i)) {
            const a =
              ((n = i.match(/(-?[\d.]+)([a-z%]*)/)) === null || void 0 === n
                ? void 0
                : n[2]) || ''
            a &&
              (r = function (e) {
                return e + a
              })
          }
          return r
        }
        function zt (e, t, n) {
          let r
          const i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {}
          const a = arguments.length > 4 ? arguments[4] : void 0
          const o = window.__MOTION_DEV_TOOLS_RECORD
          const s = !1 !== i.record && o
          const c = i.duration
          let u = void 0 === c ? Te.duration : c
          const d = i.delay
          const h = void 0 === d ? Te.delay : d
          const v = i.endDelay
          const f = void 0 === v ? Te.endDelay : v
          const p = i.repeat
          const m = void 0 === p ? Te.repeat : p
          const g = i.easing
          let w = void 0 === g ? Te.easing : g
          const b = i.persist
          const y = void 0 !== b && b
          const x = i.direction
          const k = i.offset
          const C = i.allowWebkitAcceleration
          const Z = void 0 !== C && C
          const A = dt(e)
          const E = xt(t)
          let I = Ot.waapi()
          E && kt(e, t)
          const _ = Nt(t)
          const M = (function (e, t) {
            return e.has(t) || e.set(t, new ct()), e.get(t)
          })(A.values, _)
          const O = mt.get(_)
          return (
            Re(M.animation, !(We(w) && M.generator) && !1 !== i.record),
            function () {
              const c = function () {
                let t, n
                return (n =
                      (t = Rt.get(e, _)) !== null && void 0 !== t
                        ? t
                        : O === null || void 0 === O
                          ? void 0
                          : O.initialValue) !==
                    null && void 0 !== n
                  ? n
                  : 0
              }
              let d = (function (e, t) {
                for (let n = 0; n < e.length; n++) { e[n] === null && (e[n] = n ? e[n - 1] : t()) }
                return e
              })(jt(n), c)
              const v = Bt(d, O)
              if (We(w)) {
                const p = w.createAnimation(d, t !== 'opacity', c, _, M)
                ;(w = p.easing), (d = p.keyframes || d), (u = p.duration || u)
              }
              if (
                (At(_) &&
                  (Ot.cssRegisterProperty()
                    ? (function (e) {
                        if (!Et.has(e)) {
                          Et.add(e)
                          try {
                            const t = mt.has(e) ? mt.get(e) : {}
                            const n = t.syntax
                            const r = t.initialValue
                            CSS.registerProperty({
                              name: e,
                              inherits: !1,
                              syntax: n,
                              initialValue: r
                            })
                          } catch (i) {}
                        }
                      })(_)
                    : (I = !1)),
                E &&
                  !Ot.linearEasing() &&
                  (nt(w) || (He(w) && w.some(nt))) &&
                  (I = !1),
                I)
              ) {
                let g
                O &&
                  (d = d.map(function (e) {
                    return $e(e) ? O.toDefaultUnit(e) : e
                  })),
                d.length !== 1 ||
                    (Ot.partialKeyframes() && !s) ||
                    d.unshift(c())
                const b = {
                  delay: Le.ms(h),
                  duration: Le.ms(u),
                  endDelay: Le.ms(f),
                  easing: He(w) ? void 0 : Tt(w, u),
                  direction: x,
                  iterations: m + 1,
                  fill: 'both'
                }
                ;(r = e.animate(
                  ((g = {}),
                  (0, l.Z)(g, _, d),
                  (0, l.Z)(g, 'offset', k),
                  (0, l.Z)(
                    g,
                    'easing',
                    He(w)
                      ? w.map(function (e) {
                        return Tt(e, u)
                      })
                      : void 0
                  ),
                  g),
                  b
                )).finished ||
                  (r.finished = new Promise(function (e, t) {
                    ;(r.onfinish = e), (r.oncancel = t)
                  }))
                const C = d[d.length - 1]
                r.finished
                  .then(function () {
                    y || (Rt.set(e, _, C), r.cancel())
                  })
                  .catch(je),
                Z || (r.playbackRate = 1.000001)
              } else if (a && E) {
                (d = d.map(function (e) {
                  return typeof e === 'string' ? parseFloat(e) : e
                })).length ===
                  1 && d.unshift(parseFloat(c())),
                (r = new a(
                  function (t) {
                    Rt.set(e, _, v ? v(t) : t)
                  },
                  d,
                  Object.assign(Object.assign({}, i), {
                    duration: u,
                    easing: w
                  })
                ))
              } else {
                const A = d[d.length - 1]
                Rt.set(e, _, O && $e(A) ? O.toDefaultUnit(A) : A)
              }
              return (
                s &&
                  o(
                    e,
                    t,
                    d,
                    { duration: u, delay: h, easing: w, repeat: m, offset: k },
                    'motion-one'
                  ),
                M.setAnimation(r),
                r
              )
            }
          )
        }
        const Ut = function (e, t) {
          return e[t]
            ? Object.assign(Object.assign({}, e), e[t])
            : Object.assign({}, e)
        }
        function Wt (e, t, n) {
          return nt(e) ? e(t, n) : e
        }
        let $t
        const Ht =
            (($t = lt),
            function (e, t) {
              const n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {}
              e = (function (e, t) {
                let n
                return (
                  typeof e === 'string'
                    ? t
                      ? (((n = t[e]) !== null && void 0 !== n) ||
                          (t[e] = document.querySelectorAll(e)),
                        (e = t[e]))
                      : (e = document.querySelectorAll(e))
                    : e instanceof Element && (e = [e]),
                  Array.from(e || [])
                )
              })(e)
              const r = e.length
              st(Boolean(r), 'No valid element provided.'),
              st(Boolean(t), 'No keyframes defined.')
              for (var i = [], a = 0; a < r; a++) {
                const o = e[a]
                for (const l in t) {
                  const s = Ut(n, l)
                  s.delay = Wt(s.delay, a, r)
                  const c = zt(o, l, t[l], s, $t)
                  i.push(c)
                }
              }
              return Be(i, n, n.duration)
            })
        function Vt (e) {
          const t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          return Be(
            [
              function () {
                const n = new lt(e, [0, 1], t)
                return n.finished.catch(function () {}), n
              }
            ],
            t,
            t.duration
          )
        }
        function Ft (e, t, n) {
          return (nt(e) ? Vt : Ht)(e, t, n)
        }
        const qt = { stiffness: 100, damping: 10, mass: 1 }
        const Gt = function () {
          const e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : qt.stiffness
          const t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : qt.damping
          const n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : qt.mass
          return t / (2 * Math.sqrt(e * n))
        }
        const Kt = 5
        function Yt (e, t, n) {
          let r
          let i
          const a = Math.max(t - Kt, 0)
          return (r = n - e(a)), (i = t - a) ? r * (1e3 / i) : 0
        }
        const Jt = 10
        const Xt = 1e4
        function Qt (e) {
          return $e(e) && !isNaN(e)
        }
        function en (e) {
          return Dt(e) ? parseFloat(e) : e
        }
        let tn
        let nn
        let rn
        let an
        let on
        let ln
        let sn
        let cn
        let un
        let dn
        let hn
        let vn
        let fn
        let pn
        let mn
        let gn
        let wn
        let bn
        let yn
        let xn
        let kn
        let Cn
        let Zn
        let An
        let En
        let In
        let _n
        let Mn
        let On
        let Sn
        let Pn
        let Tn
        let Ln
        let jn
        let Nn
        let Rn
        let Dn
        let Bn
        let zn
        let Un
        let Wn
        let $n
        let Hn
        let Vn
        let Fn
        let qn
        let Gn
        let Kn
        let Yn
        let Jn
        let Xn
        let Qn
        let er
        let tr
        let nr
        let rr
        let ir
        let ar
        let or
        let lr
        let sr
        let cr
        let ur
        let dr
        let hr
        let vr
        let fr
        let pr
        let mr
        let gr
        let wr
        let br
        let yr
        let xr
        let kr
        let Cr
        let Zr
        let Ar
        let Er
        let Ir
        let _r
        let Mr
        let Or
        let Sr
        let Pr
        let Tr
        let Lr
        let jr
        let Nr
        let Rr
        let Dr
        let Br
        let zr
        let Ur
        let Wr
        let $r
        let Hr
        let Vr
        let Fr
        let qr
        let Gr
        let Kr
        let Yr
        let Jr
        let Xr
        let Qr
        let ei
        let ti
        let ni
        let ri
        let ii
        let ai
        let oi
        let li
        let si
        let ci
        let ui
        let di
        let hi
        let vi
        let fi
        let pi
        let mi
        let gi
        let wi
        let bi
        let yi
        let xi
        let ki
        let Ci
        let Zi
        let Ai
        let Ei
        let Ii
        let _i
        let Mi
        let Oi
        let Si
        let Pi
        let Ti
        let Li
        let ji
        let Ni
        let Ri
        let Di
        let Bi
        let zi
        let Ui
        let Wi
        let $i
        let Hi
        let Vi
        let Fi
        let qi
        let Gi
        let Ki
        let Yi
        let Ji
        let Xi
        let Qi
        let ea
        let ta
        let na
        let ra
        let ia
        let aa
        let oa
        let la
        let sa
        let ca
        let ua
        let da
        let ha
        let va
        let fa
        let pa
        let ma
        let ga
        let wa
        let ba
        let ya
        let xa
        let ka
        let Ca
        let Za
        let Aa
        let Ea
        let Ia
        let _a
        let Ma
        let Oa
        let Sa
        let Pa
        let Ta
        let La
        const ja = (function (e) {
          const t = new WeakMap()
          return function () {
            const n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {}
            const r = new Map()
            const i = function () {
              const t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0
              const i =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 100
              const a =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 0
              const o =
                      arguments.length > 3 &&
                      void 0 !== arguments[3] &&
                      arguments[3]
              const l = ''
                .concat(t, '-')
                .concat(i, '-')
                .concat(a, '-')
                .concat(o)
              return (
                r.has(l) ||
                      r.set(
                        l,
                        e(
                          Object.assign(
                            {
                              from: t,
                              to: i,
                              velocity: a,
                              restSpeed: o ? 0.05 : 2,
                              restDistance: o ? 0.01 : 0.5
                            },
                            n
                          )
                        )
                      ),
                r.get(l)
              )
            }
            const a = function (e, n) {
              return (
                t.has(e) ||
                      t.set(
                        e,
                        (function (e) {
                          for (
                            var t =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : Ne,
                              n = void 0,
                              r = Jt,
                              i = e(0),
                              a = [t(i.current)];
                            !i.done && r < Xt;

                          ) {
                            (i = e(r)),
                            a.push(t(i.done ? i.target : i.current)),
                            void 0 === n && i.hasReachedTarget && (n = r),
                            (r += Jt)
                          }
                          const o = r - Jt
                          return (
                            a.length === 1 && a.push(i.current),
                            {
                              keyframes: a,
                              duration: o / 1e3,
                              overshootDuration:
                                (n !== null && void 0 !== n ? n : o) / 1e3
                            }
                          )
                        })(e, n)
                      ),
                t.get(e)
              )
            }
            return {
              createAnimation: function (e) {
                let t
                let n
                let r
                const o =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1]
                const l = arguments.length > 2 ? arguments[2] : void 0
                const s = arguments.length > 3 ? arguments[3] : void 0
                const c = arguments.length > 4 ? arguments[4] : void 0
                let u = 0
                let d = Ne
                const h = e.length
                if (o) {
                  if (
                    ((d = Bt(e, s ? mt.get(Nt(s)) : void 0)),
                    (r = en(e[h - 1])),
                    h > 1 && e[0] !== null)
                  ) { n = en(e[0]) } else {
                    const v = c === null || void 0 === c ? void 0 : c.generator
                    if (v) {
                      const f = c.animation
                      const p = c.generatorStartTime
                      const m =
                            (f === null || void 0 === f
                              ? void 0
                              : f.startTime) ||
                            p ||
                            0
                      const g =
                            (f === null || void 0 === f
                              ? void 0
                              : f.currentTime) || performance.now() - m
                      const w = v(g).current
                        ;(n = w),
                      (u = Yt(
                        function (e) {
                          return v(e).current
                        },
                        g,
                        w
                      ))
                    } else l && (n = en(l()))
                  }
                }
                if (Qt(n) && Qt(r)) {
                  const b = i(
                    n,
                    r,
                    u,
                    s === null || void 0 === s ? void 0 : s.includes('scale')
                  )
                    ;(t = Object.assign(Object.assign({}, a(b, d)), {
                    easing: 'linear'
                  })),
                  c &&
                        ((c.generator = b),
                        (c.generatorStartTime = performance.now()))
                }
                t ||
                    (t = {
                      easing: 'ease',
                      duration: a(i(0, 100)).overshootDuration
                    })
                return t
              }
            }
          }
        })(function () {
          const e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {}
          const t = e.stiffness
          const n = void 0 === t ? qt.stiffness : t
          const r = e.damping
          const i = void 0 === r ? qt.damping : r
          const a = e.mass
          const o = void 0 === a ? qt.mass : a
          const l = e.from
          const s = void 0 === l ? 0 : l
          const c = e.to
          const u = void 0 === c ? 1 : c
          const d = e.velocity
          let h = void 0 === d ? 0 : d
          const v = e.restSpeed
          const f = void 0 === v ? 2 : v
          const p = e.restDistance
          const m = void 0 === p ? 0.5 : p
          h = h ? Le.s(h) : 0
          let g
          const w = { done: !1, hasReachedTarget: !1, current: s, target: u }
          const b = u - s
          const y = Math.sqrt(n / o) / 1e3
          const x = Gt(n, i, o)
          if (x < 1) {
            const k = y * Math.sqrt(1 - x * x)
            g = function (e) {
              return (
                u -
                  Math.exp(-x * y * e) *
                    (((x * y * b - h) / k) * Math.sin(k * e) +
                      b * Math.cos(k * e))
              )
            }
          } else {
            g = function (e) {
              return u - Math.exp(-y * e) * (b + (y * b - h) * e)
            }
          }
          return function (e) {
            w.current = g(e)
            let t
            let n
            let r
            const i = e === 0 ? h : Yt(g, e, w.current)
            const a = Math.abs(i) <= f
            const o = Math.abs(u - w.current) <= m
            return (
              (w.done = a && o),
              (w.hasReachedTarget =
                  ((t = s),
                  (n = u),
                  (r = w.current),
                  (t < n && r >= n) || (t > n && r <= n))),
              w
            )
          }
        })
        const Na = function (e) {
          return e != null ? e : te
        }
        const Ra = n(67185)
        const Da = Object.defineProperty
        const Ba = Object.getOwnPropertySymbols
        const za = Object.prototype.hasOwnProperty
        const Ua = Object.prototype.propertyIsEnumerable
        const Wa = function (e, t, n) {
          return t in e
            ? Da(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n
            })
            : (e[t] = n)
        }
        const $a = function (e, t) {
          for (var n in t || (t = {})) za.call(t, n) && Wa(e, n, t[n])
          if (Ba) {
            let r
            const i = (0, m.Z)(Ba(t))
            try {
              for (i.s(); !(r = i.n()).done;) {
                n = r.value
                Ua.call(t, n) && Wa(e, n, t[n])
              }
            } catch (a) {
              i.e(a)
            } finally {
              i.f()
            }
          }
          return e
        }
        var Ha = {
          color: function () {
            let e
            let t
            const n = (e = Me.t0.state.themeColor) != null ? e : 'default'
            const r = (t = Me.t0.state.themeMode) != null ? t : 'dark'
            const i = {
              default: {
                light: {
                  inverse: 'rgb(255,255,255)',
                  foreground: 'rgb(51,150,255)',
                  background: 'rgb(232,242,252)'
                },
                dark: {
                  inverse: 'rgb(255,255,255)',
                  foreground: 'rgb(71,161,255)',
                  background: 'rgb(21,38,55)'
                }
              },
              magenta: {
                light: {
                  inverse: 'rgb(255,255,255)',
                  foreground: 'rgb(198,83,128)',
                  background: 'rgb(244,221,230)'
                },
                dark: {
                  inverse: 'rgb(255,255,255)',
                  foreground: 'rgb(203,77,140)',
                  background: 'rgb(57,35,43)'
                }
              },
              blue: {
                light: {
                  inverse: 'rgb(255,255,255)',
                  foreground: 'rgb(61,92,245)',
                  background: 'rgb(232,235,252)'
                },
                dark: {
                  inverse: 'rgb(255,255,255)',
                  foreground: 'rgb(81,109,251)',
                  background: 'rgb(28,33,59)'
                }
              },
              orange: {
                light: {
                  inverse: 'rgb(255,255,255)',
                  foreground: 'rgb(234,140,46)',
                  background: 'rgb(244,236,221)'
                },
                dark: {
                  inverse: 'rgb(0,0,0)',
                  foreground: 'rgb(255,166,76)',
                  background: 'rgb(57,50,34)'
                }
              },
              green: {
                light: {
                  inverse: 'rgb(255,255,255)',
                  foreground: 'rgb(38,181,98)',
                  background: 'rgb(218,246,218)'
                },
                dark: {
                  inverse: 'rgb(0,0,0)',
                  foreground: 'rgb(38,217,98)',
                  background: 'rgb(35,52,40)'
                }
              },
              purple: {
                light: {
                  inverse: 'rgb(255,255,255)',
                  foreground: 'rgb(121,76,255)',
                  background: 'rgb(225,218,246)'
                },
                dark: {
                  inverse: 'rgb(255,255,255)',
                  foreground: 'rgb(144,110,247)',
                  background: 'rgb(36,31,51)'
                }
              },
              teal: {
                light: {
                  inverse: 'rgb(255,255,255)',
                  foreground: 'rgb(43,182,182)',
                  background: 'rgb(217,242,238)'
                },
                dark: {
                  inverse: 'rgb(0,0,0)',
                  foreground: 'rgb(54,226,226)',
                  background: 'rgb(29,48,52)'
                }
              },
              blackWhite: {
                light: {
                  inverse: 'rgb(255,255,255)',
                  foreground: 'rgb(20,20,20)',
                  background: 'rgb(255,255,255)'
                },
                dark: {
                  inverse: 'rgb(0,0,0)',
                  foreground: 'rgb(255,255,255)',
                  background: 'rgb(20,20,20)'
                }
              }
            }[n][r]
            const a = {
              light: {
                foreground: {
                  1: 'rgb(20,20,20)',
                  2: 'rgb(121,134,134)',
                  3: 'rgb(158,169,169)'
                },
                background: {
                  1: 'rgb(255,255,255)',
                  2: 'rgb(241,243,243)',
                  3: 'rgb(228,231,231)'
                },
                overlay: 'rgba(0,0,0,0.1)'
              },
              dark: {
                foreground: {
                  1: 'rgb(228,231,231)',
                  2: 'rgb(148,158,158)',
                  3: 'rgb(110,119,119)'
                },
                background: {
                  1: 'rgb(20,20,20)',
                  2: 'rgb(39,42,42)',
                  3: 'rgb(59,64,64)'
                },
                overlay: 'rgba(255,255,255,0.1'
              }
            }[r]
            const o = {
              default: {
                1: '#B6B9C9',
                2: '#C653C6',
                3: '#794DFF',
                4: '#2EB8B8'
              },
              blue: {
                1: '#E8EBFD',
                2: '#C653C6',
                3: '#2DD2C5',
                4: '#3D5CF5'
              },
              magenta: {
                1: '#F4DDE6',
                2: '#E0D452',
                3: '#F09475',
                4: '#D1618D'
              },
              orange: {
                1: '#F4ECDD',
                2: '#B4EB47',
                3: '#3075E8',
                4: '#EB9947'
              },
              green: {
                1: '#DAF6DA',
                2: '#E06B92',
                3: '#99E54D',
                4: '#26B562'
              },
              purple: {
                1: '#E1DAF6',
                2: '#EB9947',
                3: '#E06B92',
                4: '#794DFF'
              },
              teal: {
                1: '#D9F2EE',
                2: '#F09475',
                3: '#794DFF',
                4: '#2EB8B8'
              },
              blackWhite: {
                1: '#E3E8E8',
                2: '#98AEAE',
                3: '#516767',
                4: '#242E2E'
              }
            }[n]
            return {
              foreground: $a(
                { accent: i.foreground, inverse: i.inverse },
                a.foreground
              ),
              background: $a({ accent: i.background }, a.background),
              gradient: o,
              overlay: a.overlay,
              error: 'rgb(242, 90, 103)'
            }
          },
          setTheme: function () {
            const e = document.querySelector(':root')
            const t = Me.t0.state.themeZIndex
            if (e) {
              const n = {
                '--w3m-color-fg-accent': Ha.color().foreground.accent,
                '--w3m-color-fg-inverse': Ha.color().foreground.inverse,
                '--w3m-color-fg-1': Ha.color().foreground[1],
                '--w3m-color-fg-2': Ha.color().foreground[2],
                '--w3m-color-fg-3': Ha.color().foreground[3],
                '--w3m-color-bg-1': Ha.color().background[1],
                '--w3m-color-bg-2': Ha.color().background[2],
                '--w3m-color-bg-3': Ha.color().background[3],
                '--w3m-color-overlay': Ha.color().overlay,
                '--w3m-color-err': Ha.color().error,
                '--w3m-color-success': 'rgb(38,181,98)',
                '--w3m-gradient-1': Ha.color().gradient[1],
                '--w3m-gradient-2': Ha.color().gradient[2],
                '--w3m-gradient-3': Ha.color().gradient[3],
                '--w3m-gradient-4': Ha.color().gradient[4],
                '--w3m-modal-z-index': ''.concat(t)
              }
              Object.entries(n).forEach(function (t) {
                const n = (0, p.Z)(t, 2)
                const r = n[0]
                const i = n[1]
                return e.style.setProperty(r, i)
              })
            }
          },
          globalCss: C(
            tn ||
                (tn = (0, f.Z)([
                  "*,::after,::before{margin:0;padding:0;box-sizing:border-box;font-style:normal;text-rendering:optimizeSpeed;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;backface-visibility:hidden}button{cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;border:none;background-color:transparent}button::after{content:'';position:absolute;inset:0;transition:background-color,.2s ease}button:disabled{cursor:not-allowed}button svg,button w3m-text{position:relative;z-index:1}input{border:none;outline:0;appearance:none}img{display:block}::selection{color:var(--w3m-color-fg-inverse);background:var(--w3m-color-fg-accent)}"
                ]))
          )
        }
        const Va = C(
          nn ||
              (nn = (0, f.Z)([
                'button{display:flex;border-radius:10px;flex-direction:column;transition:background-color .2s ease;justify-content:center;padding:5px;width:100px}button:hover{background-color:var(--w3m-color-overlay)}button>div{display:flex;justify-content:center;align-items:center;width:32px;height:32px;box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);background-color:var(--w3m-color-fg-accent);border-radius:50%;margin-bottom:4px}button path{fill:var(--w3m-color-fg-inverse)}'
              ]))
        )
        const Fa = Object.defineProperty
        const qa = Object.getOwnPropertyDescriptor
        const Ga = function (e, t, n, r) {
          for (
            var i, a = r > 1 ? void 0 : r ? qa(t, n) : t, o = e.length - 1;
            o >= 0;
            o--
          ) { (i = e[o]) && (a = (r ? i(t, n, a) : i(a)) || a) }
          return r && a && Fa(t, n, a), a
        }
        let Ka = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            let e
            return (
              (0, u.Z)(this, n),
              ((e = t.apply(this, arguments)).icon = void 0),
              (e.label = ''),
              (e.onClick = function () {
                return null
              }),
              e
            )
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'render',
                value: function () {
                  return X(
                    rn ||
                        (rn = (0, f.Z)([
                          '<button @click="',
                          '"><div>',
                          '</div><w3m-text variant="xsmall-normal" color="accent">',
                          '</w3m-text></button>'
                        ])),
                    this.onClick,
                    this.icon,
                    this.label
                  )
                }
              }
            ]),
            n
          )
        })(xe)
        ;(Ka.styles = [Ha.globalCss, Va]),
        Ga([Ie()], Ka.prototype, 'icon', 2),
        Ga([Ie()], Ka.prototype, 'label', 2),
        Ga([Ie()], Ka.prototype, 'onClick', 2),
        (Ka = Ga([Ze('w3m-box-button')], Ka))
        const Ya = C(
          an ||
              (an = (0, f.Z)([
                'button{border-radius:28px;height:28px;padding:0 10px;background-color:var(--w3m-color-fg-accent)}button path{fill:var(--w3m-color-fg-inverse)}button::after{border-radius:inherit;border:1px solid var(--w3m-color-overlay)}button:disabled::after{background-color:transparent}.w3m-icon-left svg{margin-right:5px}.w3m-icon-right svg{margin-left:5px}button:hover::after{background-color:var(--w3m-color-overlay)}button:disabled{background-color:var(--w3m-color-bg-3)}'
              ]))
        )
        const Ja = Object.defineProperty
        const Xa = Object.getOwnPropertyDescriptor
        const Qa = function (e, t, n, r) {
          for (
            var i, a = r > 1 ? void 0 : r ? Xa(t, n) : t, o = e.length - 1;
            o >= 0;
            o--
          ) { (i = e[o]) && (a = (r ? i(t, n, a) : i(a)) || a) }
          return r && a && Ja(t, n, a), a
        }
        let eo = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            let e
            return (
              (0, u.Z)(this, n),
              ((e = t.apply(this, arguments)).disabled = !1),
              (e.iconLeft = void 0),
              (e.iconRight = void 0),
              (e.onClick = function () {
                return null
              }),
              e
            )
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'render',
                value: function () {
                  const e = {
                    'w3m-icon-left': void 0 !== this.iconLeft,
                    'w3m-icon-right': void 0 !== this.iconRight
                  }
                  return X(
                    on ||
                        (on = (0, f.Z)([
                          '<button class="',
                          '" ?disabled="',
                          '" @click="',
                          '">',
                          '<w3m-text variant="small-normal" color="inverse"><slot></slot></w3m-text>',
                          '</button>'
                        ])),
                    Pe(e),
                    this.disabled,
                    this.onClick,
                    this.iconLeft,
                    this.iconRight
                  )
                }
              }
            ]),
            n
          )
        })(xe)
        ;(eo.styles = [Ha.globalCss, Ya]),
        Qa([Ie()], eo.prototype, 'disabled', 2),
        Qa([Ie()], eo.prototype, 'iconLeft', 2),
        Qa([Ie()], eo.prototype, 'iconRight', 2),
        Qa([Ie()], eo.prototype, 'onClick', 2),
        (eo = Qa([Ze('w3m-button')], eo))
        const to = C(
          ln ||
              (ln = (0, f.Z)([
                ":host{display:inline-block}button{padding:0 15px 1px;height:40px;border-radius:10px;color:var(--w3m-color-fg-inverse);background-color:var(--w3m-color-fg-accent)}button::after{content:'';inset:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--w3m-color-overlay)}button:hover::after{background-color:var(--w3m-color-overlay)}button:disabled{padding-bottom:0;background-color:var(--w3m-color-bg-3);color:var(--w3m-color-fg-3)}.w3m-secondary{color:var(--w3m-color-fg-accent);background-color:transparent}.w3m-secondary::after{display:none}"
              ]))
        )
        const no = Object.defineProperty
        const ro = Object.getOwnPropertyDescriptor
        const io = function (e, t, n, r) {
          for (
            var i, a = r > 1 ? void 0 : r ? ro(t, n) : t, o = e.length - 1;
            o >= 0;
            o--
          ) { (i = e[o]) && (a = (r ? i(t, n, a) : i(a)) || a) }
          return r && a && no(t, n, a), a
        }
        let ao = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            let e
            return (
              (0, u.Z)(this, n),
              ((e = t.apply(this, arguments)).disabled = !1),
              (e.variant = 'primary'),
              e
            )
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'render',
                value: function () {
                  const e = { 'w3m-secondary': this.variant === 'secondary' }
                  return X(
                    sn ||
                        (sn = (0, f.Z)([
                          '<button ?disabled="',
                          '" class="',
                          '"><slot></slot></button>'
                        ])),
                    this.disabled,
                    Pe(e)
                  )
                }
              }
            ]),
            n
          )
        })(xe)
        ;(ao.styles = [Ha.globalCss, to]),
        io([Ie()], ao.prototype, 'disabled', 2),
        io([Ie()], ao.prototype, 'variant', 2),
        (ao = io([Ze('w3m-button-big')], ao))
        const oo = (function () {
          function e () {
            const t = this
            ;(0, u.Z)(this, e),
            (this.angle = 0),
            (this.t = 1253106),
            (this.last = 0),
            (this.height = 500),
            (this.amp = 300),
            (this.seed = 15),
            (this.freqX = 14e-5),
            (this.freqY = 29e-5),
            (this.freqDelta = 1e-5),
            (this.activeColors = [1, 1, 1, 1]),
            (this.isMetaKey = !1),
            (this.playing = !1),
            so(this, 'resize', function () {
              ;(t.width = window.innerWidth),
              t.minigl.setSize(t.width, t.height),
              t.minigl.setOrthographicCamera(),
              (t.xSegCount = Math.ceil(t.width * t.conf.density[0])),
              (t.ySegCount = Math.ceil(t.height * t.conf.density[1])),
              t.mesh.geometry.setTopology(t.xSegCount, t.ySegCount),
              t.mesh.geometry.setSize(t.width, t.height),
              (t.mesh.material.uniforms.u_shadow_power.value =
                    t.width < 550 ? 5 : 6)
            }),
            so(this, 'animate', function (e) {
              if (t.playing) {
                if (
                  (t.shouldSkipFrame(e) ||
                      ((t.t += Math.min(e - t.last, 1e3 / 15)),
                      (t.last = e),
                      (t.mesh.material.uniforms.u_time.value = t.t),
                      t.minigl.render()),
                  t.last !== 0 && t.isStatic)
                ) { return t.minigl.render() }
                requestAnimationFrame(t.animate)
              }
            })
          }
          return (
            (0, d.Z)(e, [
              {
                key: 'play',
                value: function (e) {
                  ;(this.el = e), this.connect()
                }
              },
              {
                key: 'stop',
                value: function () {
                  this.playing = !1
                }
              },
              {
                key: 'connect',
                value: (function () {
                  const e = (0, c.Z)(
                    (0, s.Z)().mark(function e () {
                      const t = this
                      return (0, s.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                ;(this.shaderFiles = {
                                  vertex:
                                    'varying vec3 v_color;void main(){float time=u_time*u_global.noiseSpeed;vec2 noiseCoord=resolution*uvNorm*u_global.noiseFreq;vec2 st=1.-uvNorm.xy;float tilt=resolution.y/2.0*uvNorm.y;float incline=resolution.x*uvNorm.x/2.0*u_vertDeform.incline;float offset=resolution.x/2.0*u_vertDeform.incline*mix(u_vertDeform.offsetBottom,u_vertDeform.offsetTop,uv.y);float noise=snoise(vec3(noiseCoord.x*u_vertDeform.noiseFreq.x+time*u_vertDeform.noiseFlow,noiseCoord.y*u_vertDeform.noiseFreq.y,time*u_vertDeform.noiseSpeed+u_vertDeform.noiseSeed))*u_vertDeform.noiseAmp;noise*=1.0-pow(abs(uvNorm.y),2.0);noise=max(0.0,noise);vec3 pos=vec3(position.x,position.y+tilt+incline+noise-offset,position.z);if(u_active_colors[0]==1.){v_color=u_baseColor;}for(int i=0;i<u_waveLayers_length;i++){if(u_active_colors[i+1]==1.){WaveLayers layer=u_waveLayers[i];float noise=smoothstep(layer.noiseFloor,layer.noiseCeil,snoise(vec3(noiseCoord.x*layer.noiseFreq.x+time*layer.noiseFlow,noiseCoord.y*layer.noiseFreq.y,time*layer.noiseSpeed+layer.noiseSeed))/2.0+0.5);v_color=blendNormal(v_color,layer.color,pow(noise,4.));}}gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.0);}',
                                  noise:
                                    '\n// MIT License: Copyright (C) 2011 Ashima Arts. All rights reserved. https://github.com/ashima/webgl-noise, https://github.com/stegu/webgl-noise\nvec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}float snoise(vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}',
                                  blend:
                                    '\n// MIT Licence: Copyright (C) 2015 Jamie Owen. All rights reserved. https://github.com/jamieowen/glsl-blend\nvec3 blendNormal(vec3 base, vec3 blend){return blend;}vec3 blendNormal(vec3 base,vec3 blend,float opacity){return (blendNormal(base,blend)*opacity+base*(1.0-opacity));}float blendScreen(float base,float blend){return 1.0-((1.0-base)*(1.0-blend));}vec3 blendScreen(vec3 base,vec3 blend){return vec3(blendScreen(base.r,blend.r),blendScreen(base.g,blend.g),blendScreen(base.b,blend.b));}vec3 blendScreen(vec3 base,vec3 blend,float opacity){return (blendScreen(base, blend)*opacity+base*(1.0-opacity));}vec3 blendMultiply(vec3 base,vec3 blend){return base*blend;}vec3 blendMultiply(vec3 base,vec3 blend,float opacity){return (blendMultiply(base,blend)*opacity+base*(1.0-opacity));}float blendOverlay(float base,float blend){return base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));}vec3 blendOverlay(vec3 base,vec3 blend){return vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));}vec3 blendOverlay(vec3 base,vec3 blend,float opacity){return (blendOverlay(base,blend)*opacity+base*(1.0-opacity));}vec3 blendHardLight(vec3 base,vec3 blend){return blendOverlay(blend,base);}vec3 blendHardLight(vec3 base,vec3 blend,float opacity){return (blendHardLight(base,blend)*opacity+base*(1.0-opacity));}float blendSoftLight(float base,float blend){return (blend<0.5)?(2.0*base*blend+base*base*(1.0-2.0*blend)):(sqrt(base)*(2.0*blend-1.0)+2.0*base*(1.0-blend));}vec3 blendSoftLight(vec3 base,vec3 blend){return vec3(blendSoftLight(base.r,blend.r),blendSoftLight(base.g,blend.g),blendSoftLight(base.b,blend.b));}vec3 blendSoftLight(vec3 base,vec3 blend,float opacity){return (blendSoftLight(base,blend)*opacity+base*(1.0-opacity));}float blendColorDodge(float base,float blend){return (blend==1.0)?blend:min(base/(1.0-blend),1.0);}vec3 blendColorDodge(vec3 base,vec3 blend){return vec3(blendColorDodge(base.r,blend.r),blendColorDodge(base.g,blend.g),blendColorDodge(base.b,blend.b));}vec3 blendColorDodge(vec3 base,vec3 blend,float opacity){return (blendColorDodge(base, blend)*opacity+base*(1.0-opacity));}float blendColorBurn(float base,float blend){return (blend==0.0)?blend:max((1.0-((1.0-base)/blend)),0.0);}vec3 blendColorBurn(vec3 base,vec3 blend){return vec3(blendColorBurn(base.r,blend.r),blendColorBurn(base.g,blend.g),blendColorBurn(base.b,blend.b));}vec3 blendColorBurn(vec3 base,vec3 blend,float opacity){return (blendColorBurn(base, blend)*opacity+base*(1.0-opacity));}float blendVividLight(float base,float blend){return (blend<0.5)?blendColorBurn(base,(2.0*blend)):blendColorDodge(base,(2.0*(blend-0.5)));}vec3 blendVividLight(vec3 base,vec3 blend){return vec3(blendVividLight(base.r,blend.r),blendVividLight(base.g,blend.g),blendVividLight(base.b,blend.b));}vec3 blendVividLight(vec3 base,vec3 blend,float opacity){return (blendVividLight(base,blend)*opacity+base*(1.0-opacity));}float blendLighten(float base,float blend){return max(blend,base);}vec3 blendLighten(vec3 base,vec3 blend){return vec3(blendLighten(base.r,blend.r),blendLighten(base.g,blend.g),blendLighten(base.b,blend.b));}vec3 blendLighten(vec3 base,vec3 blend,float opacity){return (blendLighten(base,blend)*opacity+base*(1.0-opacity));}float blendLinearBurn(float base,float blend){return max(base+blend-1.0,0.0);}vec3 blendLinearBurn(vec3 base,vec3 blend){return max(base+blend-vec3(1.0),vec3(0.0));}vec3 blendLinearBurn(vec3 base,vec3 blend,float opacity){return (blendLinearBurn(base, blend)*opacity+base*(1.0-opacity));}float blendLinearDodge(float base,float blend){return min(base+blend,1.0);}vec3 blendLinearDodge(vec3 base,vec3 blend){return min(base+blend,vec3(1.0));}vec3 blendLinearDodge(vec3 base,vec3 blend,float opacity){return (blendLinearDodge(base,blend)*opacity+base*(1.0-opacity));}float blendLinearLight(float base,float blend){return blend<0.5?blendLinearBurn(base,(2.0*blend)):blendLinearDodge(base,(2.0*(blend-0.5)));}vec3 blendLinearLight(vec3 base,vec3 blend){return vec3(blendLinearLight(base.r,blend.r),blendLinearLight(base.g,blend.g),blendLinearLight(base.b,blend.b));}vec3 blendLinearLight(vec3 base,vec3 blend,float opacity){return (blendLinearLight(base,blend)*opacity+base*(1.0-opacity));}',
                                  fragment:
                                    'varying vec3 v_color;void main(){vec3 color=v_color;if(u_darken_top==1.0){vec2 st=gl_FragCoord.xy/resolution.xy;color.g-=pow(st.y+sin(-12.0)*st.x,u_shadow_power)*0.4;}gl_FragColor=vec4(color,1.0);}'
                                }),
                                (this.conf = { density: [0.06, 0.16] }),
                                (this.minigl = new co(
                                  this.el,
                                  null,
                                  null,
                                  !0
                                )),
                                requestAnimationFrame(function () {
                                  t.el &&
                                      ((t.computedCanvasStyle =
                                        getComputedStyle(t.el)),
                                      t.waitForCssVars())
                                })
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
                  return function () {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'initMaterial',
                value: function () {
                  this.uniforms = {
                    u_time: new this.minigl.Uniform({ value: 0 }),
                    u_shadow_power: new this.minigl.Uniform({ value: 5 }),
                    u_darken_top: new this.minigl.Uniform({
                      value: this.el.dataset.jsDarkenTop === '' ? 1 : 0
                    }),
                    u_active_colors: new this.minigl.Uniform({
                      value: this.activeColors,
                      type: 'vec4'
                    }),
                    u_global: new this.minigl.Uniform({
                      value: {
                        noiseFreq: new this.minigl.Uniform({
                          value: [this.freqX, this.freqY],
                          type: 'vec2'
                        }),
                        noiseSpeed: new this.minigl.Uniform({ value: 5e-6 })
                      },
                      type: 'struct'
                    }),
                    u_vertDeform: new this.minigl.Uniform({
                      value: {
                        incline: new this.minigl.Uniform({
                          value: Math.sin(this.angle) / Math.cos(this.angle)
                        }),
                        offsetTop: new this.minigl.Uniform({ value: -0.5 }),
                        offsetBottom: new this.minigl.Uniform({ value: -0.5 }),
                        noiseFreq: new this.minigl.Uniform({
                          value: [3, 4],
                          type: 'vec2'
                        }),
                        noiseAmp: new this.minigl.Uniform({ value: this.amp }),
                        noiseSpeed: new this.minigl.Uniform({ value: 10 }),
                        noiseFlow: new this.minigl.Uniform({ value: 3 }),
                        noiseSeed: new this.minigl.Uniform({
                          value: this.seed
                        })
                      },
                      type: 'struct',
                      excludeFrom: 'fragment'
                    }),
                    u_baseColor: new this.minigl.Uniform({
                      value: this.sectionColors[0],
                      type: 'vec3',
                      excludeFrom: 'fragment'
                    }),
                    u_waveLayers: new this.minigl.Uniform({
                      value: [],
                      excludeFrom: 'fragment',
                      type: 'array'
                    })
                  }
                  for (let e = 1; e < this.sectionColors.length; e += 1) {
                    this.uniforms.u_waveLayers.value.push(
                      new this.minigl.Uniform({
                        value: {
                          color: new this.minigl.Uniform({
                            value: this.sectionColors[e],
                            type: 'vec3'
                          }),
                          noiseFreq: new this.minigl.Uniform({
                            value: [
                              2 + e / this.sectionColors.length,
                              3 + e / this.sectionColors.length
                            ],
                            type: 'vec2'
                          }),
                          noiseSpeed: new this.minigl.Uniform({
                            value: 11 + 0.3 * e
                          }),
                          noiseFlow: new this.minigl.Uniform({
                            value: 6.5 + 0.3 * e
                          }),
                          noiseSeed: new this.minigl.Uniform({
                            value: this.seed + 10 * e
                          }),
                          noiseFloor: new this.minigl.Uniform({ value: 0.1 }),
                          noiseCeil: new this.minigl.Uniform({
                            value: 0.63 + 0.07 * e
                          })
                        },
                        type: 'struct'
                      })
                    )
                  }
                  return (
                    (this.vertexShader = [
                      this.shaderFiles.noise,
                      this.shaderFiles.blend,
                      this.shaderFiles.vertex
                    ].join('')),
                    new this.minigl.Material(
                      this.vertexShader,
                      this.shaderFiles.fragment,
                      this.uniforms
                    )
                  )
                }
              },
              {
                key: 'initMesh',
                value: function () {
                  ;(this.material = this.initMaterial()),
                  (this.geometry = new this.minigl.PlaneGeometry()),
                  (this.mesh = new this.minigl.Mesh(
                    this.geometry,
                    this.material
                  ))
                }
              },
              {
                key: 'shouldSkipFrame',
                value: function (e) {
                  return (
                    !!window.document.hidden ||
                    parseInt(e, 10) % 2 == 0 ||
                    void 0
                  )
                }
              },
              {
                key: 'updateFrequency',
                value: function (e) {
                  ;(this.freqX += e), (this.freqY += e)
                }
              },
              {
                key: 'toggleColor',
                value: function (e) {
                  this.activeColors[e] = this.activeColors[e] === 0 ? 1 : 0
                }
              },
              {
                key: 'init',
                value: function () {
                  ;(this.playing = !0),
                  this.initGradientColors(),
                  this.initMesh(),
                  this.resize(),
                  requestAnimationFrame(this.animate)
                }
              },
              {
                key: 'waitForCssVars',
                value: function () {
                  this.computedCanvasStyle &&
                    this.computedCanvasStyle
                      .getPropertyValue('--w3m-gradient-1')
                      .indexOf('#'),
                  this.init()
                }
              },
              {
                key: 'initGradientColors',
                value: function () {
                  const e = this
                  this.sectionColors = [
                    '--w3m-gradient-1',
                    '--w3m-gradient-2',
                    '--w3m-gradient-3',
                    '--w3m-gradient-4'
                  ]
                    .map(function (t) {
                      let n = e.computedCanvasStyle.getPropertyValue(t).trim()
                      return (
                        n.length === 4 &&
                          (n = '#'.concat(
                            n
                              .substr(1)
                              .split('')
                              .map(function (e) {
                                return e + e
                              })
                              .join('')
                          )),
                        n && '0x'.concat(n.substr(1))
                      )
                    })
                    .filter(Boolean)
                    .map(lo)
                }
              }
            ]),
            e
          )
        })()
        function lo (e) {
          return [
            ((e >> 16) & 255) / 255,
            ((e >> 8) & 255) / 255,
            (255 & e) / 255
          ]
        }
        function so (e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
              : (e[t] = n),
            e
          )
        }
        var co = (function () {
          function e (t, n, r) {
            ;(0, u.Z)(this, e)
            const i = this
              ;(i.canvas = t),
            (i.gl = i.canvas.getContext('webgl', { antialias: !0 })),
            (i.meshes = [])
            const a = i.gl
            n && r && this.setSize(n, r),
            Object.defineProperties(i, {
              Material: {
                enumerable: !1,
                value: (function () {
                  function e (t, n) {
                    const r =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {}
                        ;(0, u.Z)(this, e)
                    const o = this
                    function l (e, t) {
                      const n = a.createShader(e)
                      return (
                        a.shaderSource(n, t),
                        a.compileShader(n),
                        a.getShaderParameter(n, a.COMPILE_STATUS) ||
                              console.error(a.getShaderInfoLog(n)),
                        n
                      )
                    }
                    function s (e, t) {
                      return Object.entries(e)
                        .map(function (e) {
                          const n = (0, p.Z)(e, 2)
                          const r = n[0]
                          return n[1].getDeclaration(r, t)
                        })
                        .join('')
                    }
                    ;(o.uniforms = r), (o.uniformInstances = [])
                    const c = 'precision highp float;'
                        ;(o.vertexSource = ''
                      .concat(
                        c,
                        ' attribute vec4 position;attribute vec2 uv;attribute vec2 uvNorm;'
                      )
                      .concat(s(i.commonUniforms, 'vertex'), ' ')
                      .concat(s(r, 'vertex'), ' ')
                      .concat(t)),
                    (o.Source = ''
                      .concat(c, ' ')
                      .concat(s(i.commonUniforms, 'fragment'), ' ')
                      .concat(s(r, 'fragment'), ' ')
                      .concat(n, ' ')),
                    (o.vertexShader = l(a.VERTEX_SHADER, o.vertexSource)),
                    (o.fragmentShader = l(a.FRAGMENT_SHADER, o.Source)),
                    (o.program = a.createProgram()),
                    a.attachShader(o.program, o.vertexShader),
                    a.attachShader(o.program, o.fragmentShader),
                    a.linkProgram(o.program),
                    a.getProgramParameter(o.program, a.LINK_STATUS) ||
                            console.error(a.getProgramInfoLog(o.program)),
                    a.useProgram(o.program),
                    o.attachUniforms(void 0, i.commonUniforms),
                    o.attachUniforms(void 0, o.uniforms)
                  }
                  return (
                    (0, d.Z)(e, [
                      {
                        key: 'attachUniforms',
                        value: function (e, t) {
                          const n = this
                          void 0 === e
                            ? Object.entries(t).forEach(function (e) {
                              const t = (0, p.Z)(e, 2)
                              const r = t[0]
                              const i = t[1]
                              n.attachUniforms(r, i)
                            })
                            : t.type == 'array'
                              ? t.value.forEach(function (t, r) {
                                return n.attachUniforms(
                                  ''.concat(e, '[').concat(r, ']'),
                                  t
                                )
                              })
                              : t.type == 'struct'
                                ? Object.entries(t.value).forEach(
                                  function (t) {
                                    const r = (0, p.Z)(t, 2)
                                    const i = r[0]
                                    const a = r[1]
                                    return n.attachUniforms(
                                      ''.concat(e, '.').concat(i),
                                      a
                                    )
                                  }
                                )
                                : n.uniformInstances.push({
                                  uniform: t,
                                  location: a.getUniformLocation(
                                    n.program,
                                    e
                                  )
                                })
                        }
                      }
                    ]),
                    e
                  )
                })()
              },
              Uniform: {
                enumerable: !1,
                value: (function () {
                  function e (t) {
                    ;(0, u.Z)(this, e),
                    (this.type = 'float'),
                    Object.assign(this, t),
                    (this.typeFn =
                            {
                              float: '1f',
                              int: '1i',
                              vec2: '2fv',
                              vec3: '3fv',
                              vec4: '4fv',
                              mat4: 'Matrix4fv'
                            }[this.type] || '1f'),
                    this.update()
                  }
                  return (
                    (0, d.Z)(e, [
                      {
                        key: 'update',
                        value: function (e) {
                          void 0 !== this.value &&
                                a['uniform'.concat(this.typeFn)](
                                  e,
                                  this.typeFn.indexOf('Matrix') === 0
                                    ? this.transpose
                                    : this.value,
                                  this.typeFn.indexOf('Matrix') === 0
                                    ? this.value
                                    : null
                                )
                        }
                      },
                      {
                        key: 'getDeclaration',
                        value: function (e, t, n) {
                          const r = this
                          if (r.excludeFrom !== t) {
                            if (r.type === 'array') {
                              return (
                                r.value[0].getDeclaration(
                                  e,
                                  t,
                                  r.value.length
                                ) +
                                    'const int '
                                      .concat(e, '_length=')
                                      .concat(r.value.length, ';')
                              )
                            }
                            if (r.type === 'struct') {
                              let i = e.replace('u_', '')
                              return (
                                (i =
                                      i.charAt(0).toUpperCase() + i.slice(1)),
                                'uniform struct '.concat(i, ' {') +
                                      Object.entries(r.value)
                                        .map(function (e) {
                                          const n = (0, p.Z)(e, 2)
                                          const r = n[0]
                                          return n[1]
                                            .getDeclaration(r, t)
                                            .replace(/^uniform/, '')
                                        })
                                        .join('') +
                                      '} '
                                        .concat(e)
                                        .concat(
                                          n > 0 ? '['.concat(n, ']') : '',
                                          ';'
                                        )
                              )
                            }
                            return 'uniform '
                              .concat(r.type, ' ')
                              .concat(e)
                              .concat(n > 0 ? '['.concat(n, ']') : '', ';')
                          }
                        }
                      }
                    ]),
                    e
                  )
                })()
              },
              PlaneGeometry: {
                enumerable: !1,
                value: (function () {
                  function e (t, n, r, o, l) {
                    ;(0, u.Z)(this, e),
                    a.createBuffer(),
                    (this.attributes = {
                      position: new i.Attribute({
                        target: a.ARRAY_BUFFER,
                        size: 3
                      }),
                      uv: new i.Attribute({
                        target: a.ARRAY_BUFFER,
                        size: 2
                      }),
                      uvNorm: new i.Attribute({
                        target: a.ARRAY_BUFFER,
                        size: 2
                      }),
                      index: new i.Attribute({
                        target: a.ELEMENT_ARRAY_BUFFER,
                        size: 3,
                        type: a.UNSIGNED_SHORT
                      })
                    }),
                    this.setTopology(r, o),
                    this.setSize(t, n, l)
                  }
                  return (
                    (0, d.Z)(e, [
                      {
                        key: 'setTopology',
                        value: function () {
                          const e =
                                  arguments.length > 0 &&
                                  void 0 !== arguments[0]
                                    ? arguments[0]
                                    : 1
                          const t =
                                  arguments.length > 1 &&
                                  void 0 !== arguments[1]
                                    ? arguments[1]
                                    : 1
                          const n = this
                              ;(n.xSegCount = e),
                          (n.ySegCount = t),
                          (n.vertexCount =
                                  (n.xSegCount + 1) * (n.ySegCount + 1)),
                          (n.quadCount = n.xSegCount * n.ySegCount * 2),
                          (n.attributes.uv.values = new Float32Array(
                            2 * n.vertexCount
                          )),
                          (n.attributes.uvNorm.values = new Float32Array(
                            2 * n.vertexCount
                          )),
                          (n.attributes.index.values = new Uint16Array(
                            3 * n.quadCount
                          ))
                          for (let r = 0; r <= n.ySegCount; r++) {
                            for (let i = 0; i <= n.xSegCount; i++) {
                              const a = r * (n.xSegCount + 1) + i
                              if (
                                ((n.attributes.uv.values[2 * a] =
                                      i / n.xSegCount),
                                (n.attributes.uv.values[2 * a + 1] =
                                      1 - r / n.ySegCount),
                                (n.attributes.uvNorm.values[2 * a] =
                                      (i / n.xSegCount) * 2 - 1),
                                (n.attributes.uvNorm.values[2 * a + 1] =
                                      1 - (r / n.ySegCount) * 2),
                                i < n.xSegCount && r < n.ySegCount)
                              ) {
                                const o = r * n.xSegCount + i
                                    ;(n.attributes.index.values[6 * o] = a),
                                (n.attributes.index.values[6 * o + 1] =
                                        a + 1 + n.xSegCount),
                                (n.attributes.index.values[6 * o + 2] =
                                        a + 1),
                                (n.attributes.index.values[6 * o + 3] =
                                        a + 1),
                                (n.attributes.index.values[6 * o + 4] =
                                        a + 1 + n.xSegCount),
                                (n.attributes.index.values[6 * o + 5] =
                                        a + 2 + n.xSegCount)
                              }
                            }
                          }
                          n.attributes.uv.update(),
                          n.attributes.uvNorm.update(),
                          n.attributes.index.update()
                        }
                      },
                      {
                        key: 'setSize',
                        value: function () {
                          const e =
                                  arguments.length > 0 &&
                                  void 0 !== arguments[0]
                                    ? arguments[0]
                                    : 1
                          const t =
                                  arguments.length > 1 &&
                                  void 0 !== arguments[1]
                                    ? arguments[1]
                                    : 1
                          const n =
                                  arguments.length > 2 &&
                                  void 0 !== arguments[2]
                                    ? arguments[2]
                                    : 'xz'
                          const r = this
                              ;(r.width = e),
                          (r.height = t),
                          (r.orientation = n),
                          (r.attributes.position.values &&
                                  r.attributes.position.values.length ===
                                    3 * r.vertexCount) ||
                                  (r.attributes.position.values =
                                    new Float32Array(3 * r.vertexCount))
                          for (
                            let i = e / -2,
                              a = t / -2,
                              o = e / r.xSegCount,
                              l = t / r.ySegCount,
                              s = 0;
                            s <= r.ySegCount;
                            s++
                          ) {
                            for (
                              let c = a + s * l, u = 0;
                              u <= r.xSegCount;
                              u++
                            ) {
                              const d = i + u * o
                              const h = s * (r.xSegCount + 1) + u
                                  ;(r.attributes.position.values[
                                3 * h + 'xyz'.indexOf(n[0])
                              ] = d),
                              (r.attributes.position.values[
                                3 * h + 'xyz'.indexOf(n[1])
                              ] = -c)
                            }
                          }
                          r.attributes.position.update()
                        }
                      }
                    ]),
                    e
                  )
                })()
              },
              Mesh: {
                enumerable: !1,
                value: (function () {
                  function e (t, n) {
                    ;(0, u.Z)(this, e)
                    const r = this
                        ;(r.geometry = t),
                    (r.material = n),
                    (r.attributeInstances = []),
                    Object.entries(r.geometry.attributes).forEach(
                      function (e) {
                        const t = (0, p.Z)(e, 2)
                        const n = t[0]
                        const i = t[1]
                        r.attributeInstances.push({
                          attribute: i,
                          location: i.attach(n, r.material.program)
                        })
                      }
                    ),
                    i.meshes.push(r)
                  }
                  return (
                    (0, d.Z)(e, [
                      {
                        key: 'draw',
                        value: function () {
                          a.useProgram(this.material.program),
                          this.material.uniformInstances.forEach(
                            function (e) {
                              const t = e.uniform
                              const n = e.location
                              return t.update(n)
                            }
                          ),
                          this.attributeInstances.forEach(function (e) {
                            const t = e.attribute
                            const n = e.location
                            return t.use(n)
                          }),
                          a.drawElements(
                            a.TRIANGLES,
                            this.geometry.attributes.index.values.length,
                            a.UNSIGNED_SHORT,
                            0
                          )
                        }
                      },
                      {
                        key: 'remove',
                        value: function () {
                          const e = this
                          i.meshes = i.meshes.filter(function (t) {
                            return t != e
                          })
                        }
                      }
                    ]),
                    e
                  )
                })()
              },
              Attribute: {
                enumerable: !1,
                value: (function () {
                  function e (t) {
                    ;(0, u.Z)(this, e),
                    (this.type = a.FLOAT),
                    (this.normalized = !1),
                    (this.buffer = a.createBuffer()),
                    Object.assign(this, t),
                    this.update()
                  }
                  return (
                    (0, d.Z)(e, [
                      {
                        key: 'update',
                        value: function () {
                          void 0 !== this.values &&
                                (a.bindBuffer(this.target, this.buffer),
                                a.bufferData(
                                  this.target,
                                  this.values,
                                  a.STATIC_DRAW
                                ))
                        }
                      },
                      {
                        key: 'attach',
                        value: function (e, t) {
                          const n = a.getAttribLocation(t, e)
                          return (
                            this.target === a.ARRAY_BUFFER &&
                                  (a.enableVertexAttribArray(n),
                                  a.vertexAttribPointer(
                                    n,
                                    this.size,
                                    this.type,
                                    this.normalized,
                                    0,
                                    0
                                  )),
                            n
                          )
                        }
                      },
                      {
                        key: 'use',
                        value: function (e) {
                          a.bindBuffer(this.target, this.buffer),
                          this.target === a.ARRAY_BUFFER &&
                                  (a.enableVertexAttribArray(e),
                                  a.vertexAttribPointer(
                                    e,
                                    this.size,
                                    this.type,
                                    this.normalized,
                                    0,
                                    0
                                  ))
                        }
                      }
                    ]),
                    e
                  )
                })()
              }
            })
            const o = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
            i.commonUniforms = {
              projectionMatrix: new i.Uniform({ type: 'mat4', value: o }),
              modelViewMatrix: new i.Uniform({ type: 'mat4', value: o }),
              resolution: new i.Uniform({ type: 'vec2', value: [1, 1] }),
              aspectRatio: new i.Uniform({ type: 'float', value: 1 })
            }
          }
          return (
            (0, d.Z)(e, [
              {
                key: 'setSize',
                value: function () {
                  const e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 640
                  const t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 480
                    ;(this.width = e),
                  (this.height = t),
                  (this.canvas.width = e),
                  (this.canvas.height = t),
                  this.gl.viewport(0, 0, e, t),
                  (this.commonUniforms.resolution.value = [e, t]),
                  (this.commonUniforms.aspectRatio.value = e / t)
                }
              },
              {
                key: 'setOrthographicCamera',
                value: function () {
                  const e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 0
                  const t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0
                  const n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 0
                  const r =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : -2e3
                  const i =
                        arguments.length > 4 && void 0 !== arguments[4]
                          ? arguments[4]
                          : 2e3
                  this.commonUniforms.projectionMatrix.value = [
                    2 / this.width,
                    0,
                    0,
                    0,
                    0,
                    2 / this.height,
                    0,
                    0,
                    0,
                    0,
                    2 / (r - i),
                    0,
                    e,
                    t,
                    n,
                    1
                  ]
                }
              },
              {
                key: 'render',
                value: function () {
                  this.gl.clearColor(0, 0, 0, 0),
                  this.gl.clearDepth(1),
                  this.meshes.forEach(function (e) {
                    return e.draw()
                  })
                }
              }
            ]),
            e
          )
        })()
        const uo = {
          CROSS_ICON: Q(
            cn ||
                (cn = (0, f.Z)([
                  '<svg width="12" height="12" viewBox="0 0 12 12"><path d="M9.94 11A.75.75 0 1 0 11 9.94L7.414 6.353a.5.5 0 0 1 0-.708L11 2.061A.75.75 0 1 0 9.94 1L6.353 4.586a.5.5 0 0 1-.708 0L2.061 1A.75.75 0 0 0 1 2.06l3.586 3.586a.5.5 0 0 1 0 .708L1 9.939A.75.75 0 1 0 2.06 11l3.586-3.586a.5.5 0 0 1 .708 0L9.939 11Z" fill="#fff"/></svg>'
                ]))
          ),
          NOISE_TEXTURE: Q(
            un ||
                (un = (0, f.Z)([
                  '<svg id="w3m-transparent-noise"><filter id="w3m-noise"><feTurbulence type="fractalNoise" baseFrequency="0.8"/></filter><rect width="100%" height="100%" filter="url(#w3m-noise)"/></svg>'
                ]))
          ),
          WALLET_CONNECT_LOGO: Q(
            dn ||
                (dn = (0, f.Z)([
                  '<svg width="178" height="29" viewBox="0 0 178 29" id="w3m-wc-logo"><path d="M10.683 7.926c5.284-5.17 13.85-5.17 19.134 0l.636.623a.652.652 0 0 1 0 .936l-2.176 2.129a.343.343 0 0 1-.478 0l-.875-.857c-3.686-3.607-9.662-3.607-13.348 0l-.937.918a.343.343 0 0 1-.479 0l-2.175-2.13a.652.652 0 0 1 0-.936l.698-.683Zm23.633 4.403 1.935 1.895a.652.652 0 0 1 0 .936l-8.73 8.543a.687.687 0 0 1-.956 0L20.37 17.64a.172.172 0 0 0-.239 0l-6.195 6.063a.687.687 0 0 1-.957 0l-8.73-8.543a.652.652 0 0 1 0-.936l1.936-1.895a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .239 0l6.195-6.064a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .24 0l6.195-6.064a.687.687 0 0 1 .956 0ZM48.093 20.948l2.338-9.355c.139-.515.258-1.07.416-1.942.12.872.258 1.427.357 1.942l2.022 9.355h4.181l3.528-13.874h-3.21l-1.943 8.523a24.825 24.825 0 0 0-.456 2.457c-.158-.931-.317-1.625-.495-2.438l-1.883-8.542h-4.201l-2.042 8.542a41.204 41.204 0 0 0-.475 2.438 41.208 41.208 0 0 0-.476-2.438l-1.903-8.542h-3.349l3.508 13.874h4.083ZM63.33 21.304c1.585 0 2.596-.654 3.11-1.605-.059.297-.078.595-.078.892v.357h2.655V15.22c0-2.735-1.248-4.32-4.3-4.32-2.636 0-4.36 1.466-4.52 3.487h2.914c.1-.891.734-1.426 1.705-1.426.911 0 1.407.515 1.407 1.11 0 .435-.258.693-1.03.792l-1.388.159c-2.061.257-3.825 1.01-3.825 3.19 0 1.982 1.645 3.092 3.35 3.092Zm.891-2.041c-.773 0-1.348-.436-1.348-1.19 0-.733.655-1.09 1.645-1.268l.674-.119c.575-.118.892-.218 1.09-.396v.912c0 1.228-.892 2.06-2.06 2.06ZM70.398 7.074v13.874h2.874V7.074h-2.874ZM74.934 7.074v13.874h2.874V7.074h-2.874ZM84.08 21.304c2.735 0 4.5-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922H81.92ZM94.92 21.146c.633 0 1.248-.1 1.525-.179v-2.18c-.218.04-.475.06-.693.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.338v-2.24h-2.338V7.788H91.47v3.448H89.37v2.24h2.1v4.201c0 2.3 1.15 3.469 3.45 3.469ZM104.62 21.304c3.924 0 6.302-2.299 6.599-5.608h-3.111c-.238 1.803-1.506 3.032-3.369 3.032-2.2 0-3.746-1.784-3.746-4.796 0-2.953 1.605-4.638 3.805-4.638 1.883 0 2.953 1.15 3.171 2.834h3.191c-.317-3.448-2.854-5.41-6.342-5.41-3.984 0-7.036 2.695-7.036 7.214 0 4.677 2.676 7.372 6.838 7.372ZM117.449 21.304c2.993 0 5.114-1.882 5.114-5.172 0-3.23-2.121-5.233-5.114-5.233-2.972 0-5.093 2.002-5.093 5.233 0 3.29 2.101 5.172 5.093 5.172Zm0-2.22c-1.327 0-2.18-1.09-2.18-2.952 0-1.903.892-2.973 2.18-2.973 1.308 0 2.2 1.07 2.2 2.973 0 1.862-.872 2.953-2.2 2.953ZM126.569 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.229-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM137.464 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.228-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM149.949 21.304c2.735 0 4.499-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922h-3.984ZM160.876 21.304c3.013 0 4.658-1.645 4.975-4.201h-2.874c-.099 1.07-.713 1.982-2.001 1.982-1.309 0-2.2-1.21-2.2-2.993 0-1.942 1.03-2.933 2.259-2.933 1.209 0 1.803.872 1.883 1.882h2.873c-.218-2.358-1.823-4.142-4.776-4.142-2.874 0-5.153 1.903-5.153 5.193 0 3.25 1.923 5.212 5.014 5.212ZM172.067 21.146c.634 0 1.248-.1 1.526-.179v-2.18c-.218.04-.476.06-.694.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.339v-2.24h-2.339V7.788h-2.854v3.448h-2.1v2.24h2.1v4.201c0 2.3 1.15 3.469 3.449 3.469Z" fill="#fff"/></svg>'
                ]))
          ),
          WALLET_CONNECT_ICON: Q(
            hn ||
                (hn = (0, f.Z)([
                  '<svg width="28" height="20" viewBox="0 0 28 20"><g clip-path="url(#a)"><path d="M7.386 6.482c3.653-3.576 9.575-3.576 13.228 0l.44.43a.451.451 0 0 1 0 .648L19.55 9.033a.237.237 0 0 1-.33 0l-.606-.592c-2.548-2.496-6.68-2.496-9.228 0l-.648.634a.237.237 0 0 1-.33 0L6.902 7.602a.451.451 0 0 1 0-.647l.483-.473Zm16.338 3.046 1.339 1.31a.451.451 0 0 1 0 .648l-6.035 5.909a.475.475 0 0 1-.662 0L14.083 13.2a.119.119 0 0 0-.166 0l-4.283 4.194a.475.475 0 0 1-.662 0l-6.035-5.91a.451.451 0 0 1 0-.647l1.338-1.31a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0Z" fill="#000000"/></g><defs><clipPath id="a"><path fill="#ffffff" d="M0 0h28v20H0z"/></clipPath></defs></svg>'
                ]))
          ),
          WALLET_CONNECT_ICON_COLORED: Q(
            vn ||
                (vn = (0, f.Z)([
                  '<svg width="96" height="96" fill="none"><path fill="#fff" d="M25.322 33.597c12.525-12.263 32.83-12.263 45.355 0l1.507 1.476a1.547 1.547 0 0 1 0 2.22l-5.156 5.048a.814.814 0 0 1-1.134 0l-2.074-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.654-1.62Zm56.019 10.44 4.589 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.267 0L48.283 56.632a.407.407 0 0 0-.567 0L33.03 71.012a1.628 1.628 0 0 1-2.268 0L10.07 50.75a1.547 1.547 0 0 1 0-2.22l4.59-4.494a1.628 1.628 0 0 1 2.267 0l14.687 14.38c.156.153.41.153.567 0l14.685-14.38a1.628 1.628 0 0 1 2.268 0l14.687 14.38c.156.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"/><path stroke="#000" d="M25.672 33.954c12.33-12.072 32.325-12.072 44.655 0l1.508 1.476a1.047 1.047 0 0 1 0 1.506l-5.157 5.048a.314.314 0 0 1-.434 0l-2.074-2.03c-8.932-8.746-23.409-8.746-32.34 0l-2.222 2.174a.314.314 0 0 1-.434 0l-5.157-5.048a1.047 1.047 0 0 1 0-1.506l1.655-1.62Zm55.319 10.44 4.59 4.494a1.047 1.047 0 0 1 0 1.506l-20.694 20.26a1.128 1.128 0 0 1-1.568 0l-14.686-14.38a.907.907 0 0 0-1.267 0L32.68 70.655a1.128 1.128 0 0 1-1.568 0L10.42 50.394a1.047 1.047 0 0 1 0-1.506l4.59-4.493a1.128 1.128 0 0 1 1.567 0l14.687 14.379a.907.907 0 0 0 1.266 0l-.35-.357.35.357 14.686-14.38a1.128 1.128 0 0 1 1.568 0l14.687 14.38a.907.907 0 0 0 1.267 0l14.686-14.38a1.128 1.128 0 0 1 1.568 0Z"/></svg>'
                ]))
          ),
          BACK_ICON: Q(
            fn ||
                (fn = (0, f.Z)([
                  '<svg width="10" height="18" viewBox="0 0 10 18"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.735.179a.75.75 0 0 1 .087 1.057L2.92 8.192a1.25 1.25 0 0 0 0 1.617l5.902 6.956a.75.75 0 1 1-1.144.97L1.776 10.78a2.75 2.75 0 0 1 0-3.559L7.678.265A.75.75 0 0 1 8.735.18Z" fill="#fff"/></svg>'
                ]))
          ),
          COPY_ICON: Q(
            pn ||
                (pn = (0, f.Z)([
                  '<svg width="24" height="24" fill="none"><path fill="#fff" fill-rule="evenodd" d="M7.01 7.01c.03-1.545.138-2.5.535-3.28A5 5 0 0 1 9.73 1.545C10.8 1 12.2 1 15 1c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C23 4.8 23 6.2 23 9c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185c-.78.397-1.735.505-3.28.534l-.001.01c-.03 1.54-.138 2.493-.534 3.27a5 5 0 0 1-2.185 2.186C13.2 23 11.8 23 9 23c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C1 19.2 1 17.8 1 15c0-2.8 0-4.2.545-5.27A5 5 0 0 1 3.73 7.545C4.508 7.149 5.46 7.04 7 7.01h.01ZM15 15.5c-1.425 0-2.403-.001-3.162-.063-.74-.06-1.139-.172-1.427-.319a3.5 3.5 0 0 1-1.53-1.529c-.146-.288-.257-.686-.318-1.427C8.501 11.403 8.5 10.425 8.5 9c0-1.425.001-2.403.063-3.162.06-.74.172-1.139.318-1.427a3.5 3.5 0 0 1 1.53-1.53c.288-.146.686-.257 1.427-.318.759-.062 1.737-.063 3.162-.063 1.425 0 2.403.001 3.162.063.74.06 1.139.172 1.427.318a3.5 3.5 0 0 1 1.53 1.53c.146.288.257.686.318 1.427.062.759.063 1.737.063 3.162 0 1.425-.001 2.403-.063 3.162-.06.74-.172 1.139-.319 1.427a3.5 3.5 0 0 1-1.529 1.53c-.288.146-.686.257-1.427.318-.759.062-1.737.063-3.162.063ZM7 8.511c-.444.009-.825.025-1.162.052-.74.06-1.139.172-1.427.318a3.5 3.5 0 0 0-1.53 1.53c-.146.288-.257.686-.318 1.427-.062.759-.063 1.737-.063 3.162 0 1.425.001 2.403.063 3.162.06.74.172 1.139.318 1.427a3.5 3.5 0 0 0 1.53 1.53c.288.146.686.257 1.427.318.759.062 1.737.063 3.162.063 1.425 0 2.403-.001 3.162-.063.74-.06 1.139-.172 1.427-.319a3.5 3.5 0 0 0 1.53-1.53c.146-.287.257-.685.318-1.426.027-.337.043-.718.052-1.162H15c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C7 13.2 7 11.8 7 9v-.489Z" clip-rule="evenodd"/></svg>'
                ]))
          ),
          RETRY_ICON: Q(
            mn ||
                (mn = (0, f.Z)([
                  '<svg width="15" height="16" viewBox="0 0 15 16"><path d="M6.464 2.03A.75.75 0 0 0 5.403.97L2.08 4.293a1 1 0 0 0 0 1.414L5.403 9.03a.75.75 0 0 0 1.06-1.06L4.672 6.177a.25.25 0 0 1 .177-.427h2.085a4 4 0 1 1-3.93 4.746c-.077-.407-.405-.746-.82-.746-.414 0-.755.338-.7.748a5.501 5.501 0 1 0 5.45-6.248H4.848a.25.25 0 0 1-.177-.427L6.464 2.03Z" fill="#fff"/></svg>'
                ]))
          ),
          DESKTOP_ICON: Q(
            gn ||
                (gn = (0, f.Z)([
                  '<svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C2.204 1 3.13 1 4.98 1h6.04c1.85 0 2.775 0 3.466.394a3 3 0 0 1 1.12 1.12C16 3.204 16 4.13 16 5.98v1.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C13.796 12 12.87 12 11.02 12H4.98c-1.85 0-2.775 0-3.466-.394a3 3 0 0 1-1.12-1.12C0 9.796 0 8.87 0 7.02V5.98ZM4.98 2.5h6.04c.953 0 1.568.001 2.034.043.446.04.608.108.69.154a1.5 1.5 0 0 1 .559.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033v1.04c0 .952-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.046-.243.114-.69.154-.466.042-1.08.043-2.033.043H4.98c-.952 0-1.568-.001-2.034-.043-.446-.04-.608-.108-.69-.154a1.5 1.5 0 0 1-.559-.56c-.046-.08-.114-.243-.154-.69-.042-.465-.043-1.08-.043-2.033V5.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.046.243-.114.69-.154.465-.042 1.08-.043 2.033-.043Z" fill="#fff"/><path d="M4 14.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>'
                ]))
          ),
          MOBILE_ICON: Q(
            wn ||
                (wn = (0, f.Z)([
                  '<svg width="16" height="16" viewBox="0 0 16 16"><path d="M6.75 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C5.204 0 6.136 0 8 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C13 2.204 13 3.13 13 4.98v6.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C10.796 16 9.864 16 8 16s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C3 13.796 3 12.87 3 11.02V4.98Zm8.5 0v6.04c0 .953-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.046-.08-.114-.243-.154-.69-.042-.466-.043-1.08-.043-2.033V4.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.045.243-.113.693-.154C6.42 1.501 7.041 1.5 8 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033Z" fill="#fff"/></svg>'
                ]))
          ),
          ARROW_DOWN_ICON: Q(
            bn ||
                (bn = (0, f.Z)([
                  '<svg width="14" height="14" viewBox="0 0 14 14"><path d="M2.28 7.47a.75.75 0 0 0-1.06 1.06l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0-1.06-1.06l-3.544 3.543a.25.25 0 0 1-.426-.177V.75a.75.75 0 0 0-1.5 0v10.086a.25.25 0 0 1-.427.176L2.28 7.47Z" fill="#fff"/></svg>'
                ]))
          ),
          ARROW_UP_RIGHT_ICON: Q(
            yn ||
                (yn = (0, f.Z)([
                  '<svg width="15" height="14" fill="none"><path d="M4.5 1.75A.75.75 0 0 1 5.25 1H12a1.5 1.5 0 0 1 1.5 1.5v6.75a.75.75 0 0 1-1.5 0V4.164a.25.25 0 0 0-.427-.176L4.061 11.5A.75.75 0 0 1 3 10.44l7.513-7.513a.25.25 0 0 0-.177-.427H5.25a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>'
                ]))
          ),
          ARROW_RIGHT_ICON: Q(
            xn ||
                (xn = (0, f.Z)([
                  '<svg width="6" height="14" viewBox="0 0 6 14"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.181 1.099a.75.75 0 0 1 1.024.279l2.433 4.258a2.75 2.75 0 0 1 0 2.729l-2.433 4.257a.75.75 0 1 1-1.303-.744L4.335 7.62a1.25 1.25 0 0 0 0-1.24L1.902 2.122a.75.75 0 0 1 .28-1.023Z" fill="#fff"/></svg>'
                ]))
          ),
          QRCODE_ICON: Q(
            kn ||
                (kn = (0, f.Z)([
                  '<svg width="25" height="24" viewBox="0 0 25 24"><path d="M23.748 9a.748.748 0 0 0 .748-.752c-.018-2.596-.128-4.07-.784-5.22a6 6 0 0 0-2.24-2.24c-1.15-.656-2.624-.766-5.22-.784a.748.748 0 0 0-.752.748c0 .414.335.749.748.752 1.015.007 1.82.028 2.494.088.995.09 1.561.256 1.988.5.7.398 1.28.978 1.679 1.678.243.427.41.993.498 1.988.061.675.082 1.479.09 2.493a.753.753 0 0 0 .75.749ZM3.527.788C4.677.132 6.152.022 8.747.004A.748.748 0 0 1 9.5.752a.753.753 0 0 1-.749.752c-1.014.007-1.818.028-2.493.088-.995.09-1.561.256-1.988.5-.7.398-1.28.978-1.679 1.678-.243.427-.41.993-.499 1.988-.06.675-.081 1.479-.088 2.493A.753.753 0 0 1 1.252 9a.748.748 0 0 1-.748-.752c.018-2.596.128-4.07.784-5.22a6 6 0 0 1 2.24-2.24ZM1.252 15a.748.748 0 0 0-.748.752c.018 2.596.128 4.07.784 5.22a6 6 0 0 0 2.24 2.24c1.15.656 2.624.766 5.22.784a.748.748 0 0 0 .752-.748.753.753 0 0 0-.749-.752c-1.014-.007-1.818-.028-2.493-.089-.995-.089-1.561-.255-1.988-.498a4.5 4.5 0 0 1-1.679-1.68c-.243-.426-.41-.992-.499-1.987-.06-.675-.081-1.479-.088-2.493A.753.753 0 0 0 1.252 15ZM22.996 15.749a.753.753 0 0 1 .752-.749c.415 0 .751.338.748.752-.018 2.596-.128 4.07-.784 5.22a6 6 0 0 1-2.24 2.24c-1.15.656-2.624.766-5.22.784a.748.748 0 0 1-.752-.748c0-.414.335-.749.748-.752 1.015-.007 1.82-.028 2.494-.089.995-.089 1.561-.255 1.988-.498a4.5 4.5 0 0 0 1.679-1.68c.243-.426.41-.992.498-1.987.061-.675.082-1.479.09-2.493Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 4a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 11h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 4H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM13.5 6.5A2.5 2.5 0 0 1 16 4h2a2.5 2.5 0 0 1 2.5 2.5v2A2.5 2.5 0 0 1 18 11h-2a2.5 2.5 0 0 1-2.5-2.5v-2Zm2.5-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1ZM7 13a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 20h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 13H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" fill="#fff"/><path d="M13.5 15.5c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C15.303 13 15.535 13 16 13v2.5h-2.5ZM18 13c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89H18V13ZM18 17.5h2.5c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C18.697 20 18.465 20 18 20v-2.5ZM13.5 17.5H16V20c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572c-.038-.193-.038-.425-.038-.89Z" fill="#fff"/></svg>'
                ]))
          ),
          SCAN_ICON: Q(
            Cn ||
                (Cn = (0, f.Z)([
                  '<svg width="16" height="16" fill="none"><path fill="#fff" d="M10 15.216c0 .422.347.763.768.74 1.202-.064 2.025-.222 2.71-.613a5.001 5.001 0 0 0 1.865-1.866c.39-.684.549-1.507.613-2.709a.735.735 0 0 0-.74-.768.768.768 0 0 0-.76.732c-.009.157-.02.306-.032.447-.073.812-.206 1.244-.384 1.555-.31.545-.761.996-1.306 1.306-.311.178-.743.311-1.555.384-.141.013-.29.023-.447.032a.768.768 0 0 0-.732.76ZM10 .784c0 .407.325.737.732.76.157.009.306.02.447.032.812.073 1.244.206 1.555.384a3.5 3.5 0 0 1 1.306 1.306c.178.311.311.743.384 1.555.013.142.023.29.032.447a.768.768 0 0 0 .76.732.734.734 0 0 0 .74-.768c-.064-1.202-.222-2.025-.613-2.71A5 5 0 0 0 13.477.658c-.684-.39-1.507-.549-2.709-.613a.735.735 0 0 0-.768.74ZM5.232.044A.735.735 0 0 1 6 .784a.768.768 0 0 1-.732.76c-.157.009-.305.02-.447.032-.812.073-1.244.206-1.555.384A3.5 3.5 0 0 0 1.96 3.266c-.178.311-.311.743-.384 1.555-.013.142-.023.29-.032.447A.768.768 0 0 1 .784 6a.735.735 0 0 1-.74-.768c.064-1.202.222-2.025.613-2.71A5 5 0 0 1 2.523.658C3.207.267 4.03.108 5.233.044ZM5.268 14.456a.768.768 0 0 1 .732.76.734.734 0 0 1-.768.74c-1.202-.064-2.025-.222-2.71-.613a5 5 0 0 1-1.865-1.866c-.39-.684-.549-1.507-.613-2.709A.735.735 0 0 1 .784 10c.407 0 .737.325.76.732.009.157.02.306.032.447.073.812.206 1.244.384 1.555a3.5 3.5 0 0 0 1.306 1.306c.311.178.743.311 1.555.384.142.013.29.023.447.032Z"/></svg>'
                ]))
          ),
          CHECKMARK_ICON: Q(
            Zn ||
                (Zn = (0, f.Z)([
                  '<svg width="13" height="12" viewBox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.155.132a.75.75 0 0 1 .232 1.035L5.821 11.535a1 1 0 0 1-1.626.09L.665 7.21a.75.75 0 1 1 1.17-.937L4.71 9.867a.25.25 0 0 0 .406-.023L11.12.364a.75.75 0 0 1 1.035-.232Z" fill="#fff"/></svg>'
                ]))
          ),
          HELP_ETH_IMG: Q(
            An ||
                (An = (0, f.Z)([
                  '<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#j)"><rect width="60" height="60" rx="30" fill="#987DE8"/><path fill-rule="evenodd" clip-rule="evenodd" d="m15.48 28.367 11.966-19.3c1.174-1.892 3.927-1.892 5.1 0l11.97 19.306a6 6 0 0 1 .9 3.142v.028a6 6 0 0 1-1.154 3.56L33.227 50.208c-1.599 2.188-4.864 2.188-6.461 0L15.733 35.095a6 6 0 0 1-1.154-3.538v-.029a6 6 0 0 1 .9-3.161Z" fill="#fff"/><path d="M30.84 10.112a.992.992 0 0 0-.844-.464V24.5l12.598 5.53c.081-.466-.001-.963-.27-1.398L30.84 10.112Z" fill="#643CDD"/><path d="M29.996 9.648a.991.991 0 0 0-.845.465l-11.489 18.53a1.991 1.991 0 0 0-.264 1.387l12.598-5.53V9.648Z" fill="#BDADEB"/><path d="M29.996 50.544a.994.994 0 0 0 .808-.41l11.235-15.38c.307-.434-.193-.988-.658-.72L31.49 39.71a2.998 2.998 0 0 1-1.494.398v10.437Z" fill="#643CDD"/><path d="M17.966 34.762 29.19 50.134c.2.274.503.41.807.41V40.108a2.998 2.998 0 0 1-1.493-.398l-9.884-5.676c-.468-.27-.971.292-.653.728Z" fill="#BDADEB"/><path d="M42.594 30.03 29.996 24.5v13.138a3 3 0 0 0 1.495-.399l10.149-5.83c.525-.31.856-.823.954-1.38Z" fill="#401AB3"/><path d="M29.996 37.638V24.462l-12.598 5.566c.098.564.437 1.083.974 1.392l10.13 5.82c.462.265.978.398 1.494.398Z" fill="#7C5AE2"/></g><rect class="help-img-highlight" x=".5" y=".5" width="59" height="59" rx="29.5"/><defs><clipPath id="j"><rect width="60" height="60" rx="30" fill="#fff"/></clipPath></defs></svg>'
                ]))
          ),
          HELP_PAINTING_IMG: Q(
            En ||
                (En = (0, f.Z)([
                  '<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#k)"><rect width="60" height="60" rx="3" fill="#C653C6"/><path d="M52.094 47.344c0-4.246-1.436-9.557-5.885-12.4a2.876 2.876 0 0 0-1.615-3.891v-.819a4.037 4.037 0 0 0-1.34-3.007 4.75 4.75 0 0 0-2.41-6.252v-5.506c0-6.248-5.065-11.313-11.313-11.313-6.247 0-11.312 5.065-11.312 11.313v2.152a3.343 3.343 0 0 0-1.18 5.045 4.738 4.738 0 0 0-1.633 3.584 4.73 4.73 0 0 0 .956 2.858 5.218 5.218 0 0 0-2.358 6.815c-3.06 4.129-6.098 8.298-6.098 15.64 0 2.668.364 4.856.731 6.385.184.765.368 1.366.509 1.78a12.721 12.721 0 0 0 .225.611l.015.037.005.011.001.004v.002h.001l.92-.393-.92.394.26.606h38.26l.291-.49-.86-.51.86.51v-.001l.002-.002.002-.005.01-.017.035-.06.127-.225c.108-.195.26-.477.441-.835.363-.714.845-1.732 1.328-2.953.959-2.427 1.945-5.725 1.945-9.068Z" fill="#E87DE8" stroke="#fff" stroke-width="2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M26.5 29.5c-3-.5-5.5-3-5.503-7l.002-7c0-.466 0-.698.026-.893a3 3 0 0 1 2.582-2.582c.195-.026.428-.026.893-.026 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.398 0 2.097 0 2.648.229a3 3 0 0 1 1.624 1.623c.228.552.228 1.25.228 2.649v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.495 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z" fill="#fff"/></g><rect class="help-img-highlight" x=".5" y=".5" width="59" height="59" rx="2.5"/><defs><clipPath id="k"><rect width="60" height="60" rx="3" fill="#fff"/></clipPath></defs></svg>'
                ]))
          ),
          HELP_CHART_IMG: Q(
            In ||
                (In = (0, f.Z)([
                  '<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#l)"><path d="M0 25.01C0 15.76 0 11.133 1.97 7.678a15 15 0 0 1 5.598-5.597C11.023.11 15.648.11 24.9.11h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.597C60 11.133 60 15.758 60 25.01v10.2c0 9.252 0 13.877-1.97 17.332a15 15 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a14.999 14.999 0 0 1-5.597-5.598C0 49.087 0 44.462 0 35.21v-10.2Z" fill="#1DC956"/><path d="M.5 25.01c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.289a14.5 14.5 0 0 1 5.412-5.41c1.639-.936 3.579-1.418 6.289-1.661C16.822.61 20.265.61 24.9.61h10.2c4.635 0 8.078 0 10.795.245 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.579 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.795-.244 2.71-.726 4.65-1.66 6.29a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.412C1.47 50.655.988 48.716.745 46.005.5 43.288.5 39.845.5 35.21v-10.2Z" stroke="#fff" stroke-opacity=".1"/><path d="M16.109 60c-3.833-.179-6.41-.645-8.541-1.86a15 15 0 0 1-5.598-5.598C.553 50.057.155 46.967.043 41.985l4.146-1.382a4 4 0 0 0 2.48-2.39l4.654-12.409a2 2 0 0 1 2.505-1.195l2.526.842a2 2 0 0 0 2.422-1.003l2.968-5.938c.81-1.62 3.185-1.415 3.705.32l3.774 12.581a2 2 0 0 0 3.025 1.09l3.342-2.228c.27-.18.49-.422.646-.706l5.297-9.712a2 2 0 0 1 1.428-1.016l4.134-.689a2 2 0 0 1 1.61.437l3.892 3.243a2 2 0 0 0 2.694-.122l4.633-4.632C60 19.28 60 21.88 60 25.01v10.2c0 9.252 0 13.877-1.97 17.332a14.998 14.998 0 0 1-5.598 5.598c-2.131 1.215-4.708 1.681-8.54 1.86H16.108Z" fill="#2BEE6C"/><path d="M.072 43.03a112.37 112.37 0 0 1-.048-2.093l3.85-1.283a3 3 0 0 0 1.86-1.793l4.653-12.408a3 3 0 0 1 3.758-1.793l2.526.842a1 1 0 0 0 1.21-.501l2.97-5.938c1.214-2.43 4.775-2.123 5.556.48l3.774 12.58a1 1 0 0 0 1.513.545l3.341-2.227a1 1 0 0 0 .323-.353l5.298-9.712a3 3 0 0 1 2.14-1.523l4.135-.69a3 3 0 0 1 2.414.655l3.892 3.244a1 1 0 0 0 1.347-.061l5.28-5.28c.046.845.077 1.752.097 2.732l-3.962 3.962a3 3 0 0 1-4.042.183l-3.893-3.243a1 1 0 0 0-.804-.218l-4.135.689a1 1 0 0 0-.714.507l-5.297 9.712c-.233.427-.565.79-.97 1.06l-3.34 2.228a3 3 0 0 1-4.538-1.635l-3.775-12.58c-.26-.868-1.447-.97-1.852-.16l-2.969 5.937a3 3 0 0 1-3.632 1.505l-2.526-.842a1 1 0 0 0-1.252.597L7.606 38.564a5 5 0 0 1-3.1 2.988L.072 43.029Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z" fill="#2BEE6C"/><path d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" fill="#fff"/><path d="M45 .283v59.654c-.63.042-1.294.074-2 .098V.185c.706.025 1.37.056 2 .098Z" fill="#fff"/><path class="help-img-highlight" d="M.5 25.01c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.289a14.5 14.5 0 0 1 5.412-5.41c1.639-.936 3.579-1.418 6.289-1.661C16.822.61 20.265.61 24.9.61h10.2c4.635 0 8.078 0 10.795.245 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.579 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.795-.244 2.71-.726 4.65-1.66 6.29a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.412C1.47 50.655.988 48.716.745 46.005.5 43.288.5 39.845.5 35.21v-10.2Z"/></g><defs><clipPath id="l"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>'
                ]))
          ),
          HELP_KEY_IMG: Q(
            _n ||
                (_n = (0, f.Z)([
                  '<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#m)"><path fill="#EB8B47" d="M0 24.9c0-9.252 0-13.878 1.97-17.332A15 15 0 0 1 7.569 1.97C11.023 0 15.648 0 24.9 0h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.022 60 15.648 60 24.899v10.2c0 9.252 0 13.878-1.97 17.332a15.001 15.001 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.351 0 35.1V24.9Z"/><path class="help-img-highlight" d="M.5 24.9c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.29a14.5 14.5 0 0 1 5.412-5.41C9.455 1.468 11.395.986 14.105.743 16.822.5 20.265.5 24.9.5h10.2c4.635 0 8.078 0 10.795.244 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.58 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.796-.244 2.71-.726 4.65-1.66 6.289a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.411c-.935-1.64-1.417-3.58-1.66-6.29C.5 43.178.5 39.734.5 35.1V24.9Z"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M39.192 29.192c5.077-5.077 5.077-13.308 0-18.385-5.076-5.077-13.308-5.077-18.384 0-5.077 5.077-5.077 13.308 0 18.385l1.287 1.291c1.137 1.142 1.706 1.712 2.097 2.387.267.462.472.957.608 1.473.2.755.2 1.56.2 3.171V48.75c0 1.077 0 1.615.134 2.119a4 4 0 0 0 .407.984c.262.45.643.831 1.404 1.592l.294.295c.654.654.982.981 1.365 1.086.26.07.533.07.792 0 .383-.105.71-.432 1.365-1.086l3.478-3.479c.655-.654.982-.981 1.087-1.365a1.5 1.5 0 0 0 0-.791c-.105-.384-.432-.711-1.087-1.365l-.478-.479c-.655-.654-.982-.981-1.087-1.365a1.5 1.5 0 0 1 0-.791c.105-.384.432-.711 1.087-1.365l.478-.479c.655-.654.982-.981 1.087-1.365a1.5 1.5 0 0 0 0-.791c-.105-.384-.432-.711-1.087-1.365l-.492-.493c-.65-.65-.974-.974-1.08-1.355a1.5 1.5 0 0 1-.003-.788c.102-.382.425-.71 1.069-1.364l5.46-5.547Z"/><circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/></g><defs><clipPath id="m"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>'
                ]))
          ),
          HELP_USER_IMG: Q(
            Mn ||
                (Mn = (0, f.Z)([
                  '<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#n)"><rect width="60" height="60" fill="#00ACE6" rx="30"/><path fill="#1AC6FF" stroke="#fff" stroke-width="2" d="M59 73c0 16.016-12.984 29-29 29S1 89.016 1 73c0-16.017 11-29 29-29s29 12.983 29 29ZM18.69 19.902a11 11 0 0 1 9.281-8.692 14.842 14.842 0 0 1 4.058 0 11 11 0 0 1 9.28 8.692c.178.866.322 1.75.44 2.625.132.977.132 1.968 0 2.945a39.467 39.467 0 0 1-.44 2.625 11 11 0 0 1-9.28 8.692 14.862 14.862 0 0 1-4.058 0 11 11 0 0 1-9.28-8.692 39.467 39.467 0 0 1-.44-2.625 11.004 11.004 0 0 1 0-2.945c.118-.876.262-1.759.44-2.625Z"/><circle cx="24.5" cy="23.5" r="1.5" fill="#fff"/><circle cx="35.5" cy="23.5" r="1.5" fill="#fff"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m31 20-3 8h4"/></g><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="29.5"/><defs><clipPath id="n"><rect width="60" height="60" fill="#fff" rx="30"/></clipPath></defs></svg>'
                ]))
          ),
          HELP_LOCK_IMG: Q(
            On ||
                (On = (0, f.Z)([
                  '<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#C653C6" rx="3"/><path fill="#fff" d="M20.034 15.216C20 15.607 20 16.07 20 17v2.808c0 1.13 0 1.696-.2 2.11a1.78 1.78 0 0 1-.584.714c-.366.28-1.051.42-2.423.7a7.076 7.076 0 0 0-1.597.511 9.001 9.001 0 0 0-4.353 4.353C10 30.005 10 32.336 10 37c0 4.663 0 6.995.843 8.804a9.001 9.001 0 0 0 4.353 4.353C17.005 51 19.336 51 24 51h12c4.663 0 6.995 0 8.804-.843a9.001 9.001 0 0 0 4.353-4.353C50 43.995 50 41.664 50 37c0-4.663 0-6.995-.843-8.804a9.001 9.001 0 0 0-4.353-4.353 7.076 7.076 0 0 0-1.597-.511c-1.372-.28-2.057-.42-2.423-.7a1.78 1.78 0 0 1-.583-.715C40 21.505 40 20.94 40 19.809V17c0-.929 0-1.393-.034-1.784a9 9 0 0 0-8.182-8.182C31.393 7 30.93 7 30 7s-1.393 0-1.784.034a9 9 0 0 0-8.182 8.182Z"/><path fill="#E87DE8" d="M22 17c0-.929 0-1.393.044-1.784a7 7 0 0 1 6.172-6.172C28.606 9 29.071 9 30 9s1.393 0 1.784.044a7 7 0 0 1 6.172 6.172c.044.39.044.855.044 1.784v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.394-.077-1.78a4 4 0 0 0-3.143-3.143C31.394 12 30.93 12 30 12s-1.394 0-1.78.077a4 4 0 0 0-3.143 3.143C25 15.606 25 16.07 25 17v4.5a1.5 1.5 0 0 1-3 0V17Z"/><path fill="#E87DE8" fill-rule="evenodd" d="M12 36.62c0-4.317 0-6.476.92-8.088a7 7 0 0 1 2.612-2.612c1.612-.92 3.77-.92 8.088-.92h6.855c.469 0 .703 0 .906.017 2.73.222 4.364 2.438 4.619 4.983.27-2.698 2.111-5 5.015-5A6.985 6.985 0 0 1 48 31.985v5.395c0 4.317 0 6.476-.92 8.088a7 7 0 0 1-2.612 2.612c-1.612.92-3.77.92-8.088.92h-5.855c-.469 0-.703 0-.906-.017-2.73-.222-4.364-2.438-4.619-4.983-.258 2.583-1.943 4.818-4.714 4.99-.155.01-.335.01-.694.01-.55 0-.825 0-1.057-.015a7 7 0 0 1-6.52-6.52C12 42.233 12 41.958 12 41.408V36.62Zm21.24-.273a4 4 0 1 0-6.478 0c.985 1.36 1.479 2.039 1.564 2.229.178.398.176.818.174 1.247V42.5a1.5 1.5 0 0 0 3 0v-2.677c-.002-.429-.004-.85.174-1.247.085-.19.579-.87 1.565-2.229Z" clip-rule="evenodd"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="2.5"/></svg>'
                ]))
          ),
          HELP_COMPAS_IMG: Q(
            Sn ||
                (Sn = (0, f.Z)([
                  '<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#1DC956" rx="30"/><circle cx="30" cy="29.999" r="3" fill="#fff"/><path fill="#2BEE6C" stroke="#fff" stroke-width="2" d="m45.316 17.9-.88-.425.88.424a7.9 7.9 0 0 1 .026-.053c.093-.192.21-.432.26-.687l-.819-.162.819.162a2 2 0 0 0-.239-1.405c-.132-.224-.32-.412-.472-.562a8.415 8.415 0 0 1-.042-.042l-.042-.042c-.15-.151-.338-.34-.562-.472l-.508.862.508-.862a2 2 0 0 0-1.405-.239c-.255.05-.495.167-.687.26l-.053.026-15.05 7.246-.108.052c-1.131.545-1.843.887-2.456 1.374a6.994 6.994 0 0 0-1.13 1.13c-.487.613-.83 1.325-1.375 2.457l-.051.108-7.247 15.05-.025.053c-.094.192-.21.431-.26.686a2 2 0 0 0 .239 1.406l.855-.505-.856.505c.133.224.321.411.473.562l.042.042.041.042c.15.151.338.34.563.472a2 2 0 0 0 1.405.239l-.195-.981.195.98c.255-.05.494-.166.686-.26l.054-.025-.419-.87.419.87 15.05-7.247.107-.051c1.132-.545 1.844-.888 2.457-1.374a7.002 7.002 0 0 0 1.13-1.13c.487-.614.83-1.325 1.374-2.457l.052-.108 7.246-15.05Z"/><path fill="#1DC956" d="m33.376 32.723-2.669-3.43-14.85 14.849.206.205a1 1 0 0 0 1.141.194l15.105-7.273a3 3 0 0 0 1.067-4.545Z"/><path fill="#86F999" d="m26.624 27.276 2.669 3.43 14.85-14.849-.206-.205a1 1 0 0 0-1.141-.194L27.69 22.731a3 3 0 0 0-1.067 4.545Z"/><circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="29.5"/></svg>'
                ]))
          ),
          HELP_NOUN_IMG: Q(
            Pn ||
                (Pn = (0, f.Z)([
                  '<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#794CFF" rx="3"/><path fill="#987DE8" stroke="#fff" stroke-width="2" d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"/><path fill="#fff" d="M37.5 25h10v10h-10z"/><path fill="#4019B2" d="M42.5 25h5v10h-5z"/><path fill="#fff" d="M19.5 25h10v10h-10z"/><path fill="#4019B2" d="M24.5 25h5v10h-5z"/><path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="2.5"/></svg>'
                ]))
          ),
          HELP_DAO_IMG: Q(
            Tn ||
                (Tn = (0, f.Z)([
                  '<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#o)"><path fill="#EB8B47" d="M0 24.9c0-9.252 0-13.878 1.97-17.332A15 15 0 0 1 7.569 1.97C11.023 0 15.648 0 24.9 0h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.022 60 15.648 60 24.899v10.2c0 9.252 0 13.878-1.97 17.332a15.001 15.001 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.351 0 35.1V24.9Z"/><path class="help-img-highlight" d="M.5 24.9c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.29a14.5 14.5 0 0 1 5.412-5.41C9.455 1.468 11.395.986 14.105.743 16.822.5 20.265.5 24.9.5h10.2c4.635 0 8.078 0 10.795.244 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.58 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.796-.244 2.71-.726 4.65-1.66 6.289a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.411c-.935-1.64-1.417-3.58-1.66-6.29C.5 43.178.5 39.734.5 35.1V24.9Z"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M19 52c5.523 0 10-4.477 10-10s-4.477-10-10-10S9 36.477 9 42s4.477 10 10 10Z"/><path fill="#fff" fill-rule="evenodd" d="M42.844 8.326a1 1 0 0 0-1.687 0L28.978 27.463A1 1 0 0 0 29.822 29h24.357a1 1 0 0 0 .843-1.537L42.844 8.326Z" clip-rule="evenodd"/><path fill="#FF974C" fill-rule="evenodd" d="M42.335 11.646c.324.115.571.504 1.066 1.28l7.332 11.523c.562.883.843 1.325.792 1.69a1 1 0 0 1-.342.623c-.28.238-.803.238-1.85.238H34.667c-1.047 0-1.57 0-1.85-.238a1 1 0 0 1-.342-.623c-.051-.365.23-.806.792-1.69l7.332-11.523c.495-.776.742-1.165 1.066-1.28a1 1 0 0 1 .67 0ZM35 27a7 7 0 0 0 7-7 7 7 0 0 0 7 7H35Z" clip-rule="evenodd"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M10.106 9.357c-.109.32-.107.682-.106.975V25.668c-.001.293-.003.654.106.975a2 2 0 0 0 1.251 1.25c.32.11.682.108.975.107H19c5.523 0 10-4.477 10-10S24.523 8 19 8h-6.668c-.293-.001-.654-.003-.975.106a2 2 0 0 0-1.25 1.251Z"/><circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/><circle cx="19" cy="41.999" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/></g><defs><clipPath id="o"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>'
                ]))
          ),
          SEARCH_ICON: Q(
            Ln ||
                (Ln = (0, f.Z)([
                  '<svg width="20" height="21"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.432 13.992c-.354-.353-.91-.382-1.35-.146a5.5 5.5 0 1 1 2.265-2.265c-.237.441-.208.997.145 1.35l3.296 3.296a.75.75 0 1 1-1.06 1.061l-3.296-3.296Zm.06-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#949E9E"/></svg>'
                ]))
          ),
          HELP_ICON: Q(
            jn ||
                (jn = (0, f.Z)([
                  '<svg width="11" height="17" viewBox="0 0 11 17"><path fill="#fff" d="M5.22 2.97c-1.07 0-2.25.843-2.25 2.25a.75.75 0 0 1-1.5 0c0-2.393 2.019-3.75 3.75-3.75 1.73 0 3.75 1.357 3.75 3.75 0 1.64-1.038 2.466-1.785 3.057-.802.635-1.215.984-1.215 1.693a.75.75 0 1 1-1.5 0c0-1.466.985-2.24 1.681-2.788l.103-.081C7.007 6.504 7.47 6.08 7.47 5.22c0-1.407-1.181-2.25-2.25-2.25ZM5.22 14.97a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"/></svg>'
                ]))
          ),
          WALLET_ICON: Q(
            Nn ||
                (Nn = (0, f.Z)([
                  '<svg width="15" height="14" fill="none" viewBox="0 0 15 14"><path fill="#fff" fill-rule="evenodd" d="M.64 9.2v-3h.001c.009-1.857.07-2.886.525-3.682a4 4 0 0 1 1.492-1.493C3.58.5 4.813.5 7.28.5h3.735c.58 0 .871 0 1.114.04A3 3 0 0 1 14.6 3.011c.04.243.04.533.04 1.114 0 .58 0 .871-.04 1.114a3 3 0 0 1-2.471 2.47c-.243.041-.533.041-1.114.041h-.777c.178.307.302.648.362 1.011.04.243.04.533.04 1.114 0 .58 0 .871-.04 1.114a3 3 0 0 1-2.471 2.47c-.243.041-.533.041-1.114.041H4.507A3.867 3.867 0 0 1 .64 9.633V9.2ZM7.28 2h3.735c.64 0 .779.005.87.02a1.5 1.5 0 0 1 1.235 1.236c.015.09.02.229.02.869s-.005.779-.02.87a1.5 1.5 0 0 1-1.236 1.235c-.09.015-.229.02-.869.02H4.023c-.697 0-1.345.21-1.883.572V6.25h.001c.004-.791.015-1.383.059-1.867.056-.629.157-.926.269-1.122a2.5 2.5 0 0 1 .932-.933c.197-.111.494-.212 1.123-.268C5.173 2 6.019 2 7.28 2Zm-.265 5.75H4.023c-1.04 0-1.883.843-1.883 1.883A2.367 2.367 0 0 0 4.507 12h2.508c.64 0 .779-.005.87-.02a1.5 1.5 0 0 0 1.235-1.236c.015-.09.02-.229.02-.869s-.005-.779-.02-.87A1.5 1.5 0 0 0 7.884 7.77c-.09-.015-.228-.02-.869-.02Z" clip-rule="evenodd"/></svg>'
                ]))
          ),
          NETWORK_PLACEHOLDER: Q(
            Rn ||
                (Rn = (0, f.Z)([
                  '<svg width="28" height="28" fill="none" viewBox="0 0 28 28"><mask id="p" width="26" height="28" x="1" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#D9D9D9" d="M12 1.172a4 4 0 0 1 4 0l8.124 4.69a4 4 0 0 1 2 3.465v9.381a4 4 0 0 1-2 3.464L16 26.862a4 4 0 0 1-4 0l-8.124-4.69a4 4 0 0 1-2-3.464V9.327a4 4 0 0 1 2-3.464L12 1.173Z"/></mask><g mask="url(#p)"><path id="network-placeholder-fill" fill="#fff" d="M0 0h28v28H0z"/><path id="network-placeholder-dash" stroke="#000" stroke-dasharray="2 2" d="m8.953 2.931 2.032-1.173.25.433 1.015-.586c.269-.155.553-.271.844-.35l-.13-.483a4.003 4.003 0 0 1 2.071 0l-.13.483c.293.079.576.195.845.35l1.016.586.25-.433 2.03 1.173-.25.433 2.032 1.173.25-.433 2.03 1.172-.25.433 1.016.587c.269.155.512.342.725.556l.354-.354a4.003 4.003 0 0 1 1.035 1.794l-.483.129c.078.292.12.596.12.906v1.172h.5v2.346h-.5v2.345h.5v2.345h-.5v1.173c0 .31-.042.614-.12.906l.483.13a4.003 4.003 0 0 1-1.035 1.793l-.354-.354a3.498 3.498 0 0 1-.725.556l-1.015.586.25.434-2.031 1.172-.25-.433-2.031 1.173.25.433-2.031 1.172-.25-.433-1.016.587a3.494 3.494 0 0 1-.844.35l.13.482a4.003 4.003 0 0 1-2.071 0l.13-.483a3.496 3.496 0 0 1-.845-.35l-1.015-.586-.25.433-2.032-1.172.25-.433-2.03-1.173-.25.433L4.89 22.76l.25-.434-1.015-.586a3.498 3.498 0 0 1-.725-.556l-.354.354a4.003 4.003 0 0 1-1.035-1.794l.483-.13a3.497 3.497 0 0 1-.12-.905v-1.173h-.5V15.19h.5v-2.345h-.5v-2.346h.5V9.327c0-.31.042-.614.12-.906l-.483-.13a4.003 4.003 0 0 1 1.035-1.793l.354.354c.213-.214.456-.401.725-.556l1.015-.587-.25-.433 2.031-1.172.25.433 2.031-1.173-.25-.433Z"/><path fill="#798686" stroke="#fff" d="M14.243 13.563 14 13.428l-.243.135-6.388 3.549-.024.013c-.432.24-.79.44-1.053.622-.266.184-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.317.37.538.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722l-.468-.177.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.317-.37-.538-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-6.388-3.55Z"/><path fill="#9EA9A9" stroke="#fff" d="M14.243 8.563 14 8.428l-.243.135-6.388 3.549-.024.013c-.432.24-.79.44-1.053.622-.266.184-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.316.37.537.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722l-.468-.177.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.316-.37-.537-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-6.388-3.55Z"/><path fill="#C9CFCF" stroke="#fff" d="m22.344 9.53-.468-.176.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.317-.37-.537-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-3.163-1.758-.09-.05c-1.163-.645-1.856-1.03-2.606-1.161a4.5 4.5 0 0 0-1.544 0c-.75.13-1.443.516-2.607 1.162l-.088.05-3.164 1.757-.024.013c-.432.24-.79.44-1.053.622-.266.185-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.317.37.537.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722Z"/></g></svg>'
                ]))
          ),
          WALLET_PLACEHOLDER: Q(
            Dn ||
                (Dn = (0, f.Z)([
                  '<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#q)"><path id="wallet-placeholder-fill" fill="#fff" d="M0 24.9c0-9.251 0-13.877 1.97-17.332a15 15 0 0 1 5.598-5.597C11.023 0 15.648 0 24.9 0h10.2c9.252 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.023 60 15.648 60 24.9v10.2c0 9.252 0 13.877-1.97 17.332a15.001 15.001 0 0 1-5.598 5.597C48.977 60 44.352 60 35.1 60H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.352 0 35.1V24.9Z"/><path id="wallet-placeholder-dash" stroke="#000" stroke-dasharray="4 4" stroke-width="1.5" d="M.04 41.708a231.598 231.598 0 0 1-.039-4.403l.75-.001L.75 35.1v-2.55H0v-5.1h.75V24.9l.001-2.204h-.75c.003-1.617.011-3.077.039-4.404l.75.016c.034-1.65.099-3.08.218-4.343l-.746-.07c.158-1.678.412-3.083.82-4.316l.713.236c.224-.679.497-1.296.827-1.875a14.25 14.25 0 0 1 1.05-1.585L3.076 5.9A15 15 0 0 1 5.9 3.076l.455.596a14.25 14.25 0 0 1 1.585-1.05c.579-.33 1.196-.603 1.875-.827l-.236-.712C10.812.674 12.217.42 13.895.262l.07.746C15.23.89 16.66.824 18.308.79l-.016-.75C19.62.012 21.08.004 22.695.001l.001.75L24.9.75h2.55V0h5.1v.75h2.55l2.204.001v-.75c1.617.003 3.077.011 4.404.039l-.016.75c1.65.034 3.08.099 4.343.218l.07-.746c1.678.158 3.083.412 4.316.82l-.236.713c.679.224 1.296.497 1.875.827a14.24 14.24 0 0 1 1.585 1.05l.455-.596A14.999 14.999 0 0 1 56.924 5.9l-.596.455c.384.502.735 1.032 1.05 1.585.33.579.602 1.196.827 1.875l.712-.236c.409 1.233.663 2.638.822 4.316l-.747.07c.119 1.264.184 2.694.218 4.343l.75-.016c.028 1.327.036 2.787.039 4.403l-.75.001.001 2.204v2.55H60v5.1h-.75v2.55l-.001 2.204h.75a231.431 231.431 0 0 1-.039 4.404l-.75-.016c-.034 1.65-.099 3.08-.218 4.343l.747.07c-.159 1.678-.413 3.083-.822 4.316l-.712-.236a10.255 10.255 0 0 1-.827 1.875 14.242 14.242 0 0 1-1.05 1.585l.596.455a14.997 14.997 0 0 1-2.824 2.824l-.455-.596c-.502.384-1.032.735-1.585 1.05-.579.33-1.196.602-1.875.827l.236.712c-1.233.409-2.638.663-4.316.822l-.07-.747c-1.264.119-2.694.184-4.343.218l.016.75c-1.327.028-2.787.036-4.403.039l-.001-.75-2.204.001h-2.55V60h-5.1v-.75H24.9l-2.204-.001v.75a231.431 231.431 0 0 1-4.404-.039l.016-.75c-1.65-.034-3.08-.099-4.343-.218l-.07.747c-1.678-.159-3.083-.413-4.316-.822l.236-.712a10.258 10.258 0 0 1-1.875-.827 14.252 14.252 0 0 1-1.585-1.05l-.455.596A14.999 14.999 0 0 1 3.076 54.1l.596-.455a14.24 14.24 0 0 1-1.05-1.585 10.259 10.259 0 0 1-.827-1.875l-.712.236C.674 49.188.42 47.783.262 46.105l.746-.07C.89 44.77.824 43.34.79 41.692l-.75.016Z"/><path fill="#fff" fill-rule="evenodd" d="M35.643 32.145c-.297-.743-.445-1.114-.401-1.275a.42.42 0 0 1 .182-.27c.134-.1.463-.1 1.123-.1.742 0 1.499.046 2.236-.05a6 6 0 0 0 5.166-5.166c.051-.39.051-.855.051-1.784 0-.928 0-1.393-.051-1.783a6 6 0 0 0-5.166-5.165c-.39-.052-.854-.052-1.783-.052h-7.72c-4.934 0-7.401 0-9.244 1.051a8 8 0 0 0-2.985 2.986C16.057 22.28 16.003 24.58 16 29 15.998 31.075 16 33.15 16 35.224A7.778 7.778 0 0 0 23.778 43H28.5c1.394 0 2.09 0 2.67-.116a6 6 0 0 0 4.715-4.714c.115-.58.115-1.301.115-2.744 0-1.31 0-1.964-.114-2.49a4.998 4.998 0 0 0-.243-.792Z" clip-rule="evenodd"/><path fill="#9EA9A9" fill-rule="evenodd" d="M37 18h-7.72c-2.494 0-4.266.002-5.647.126-1.361.122-2.197.354-2.854.728a6.5 6.5 0 0 0-2.425 2.426c-.375.657-.607 1.492-.729 2.853-.11 1.233-.123 2.777-.125 4.867 0 .7 0 1.05.097 1.181.096.13.182.181.343.2.163.02.518-.18 1.229-.581a6.195 6.195 0 0 1 3.053-.8H37c.977 0 1.32-.003 1.587-.038a4.5 4.5 0 0 0 3.874-3.874c.036-.268.039-.611.039-1.588 0-.976-.003-1.319-.038-1.587a4.5 4.5 0 0 0-3.875-3.874C38.32 18.004 37.977 18 37 18Zm-7.364 12.5h-7.414a4.722 4.722 0 0 0-4.722 4.723 6.278 6.278 0 0 0 6.278 6.278H28.5c1.466 0 1.98-.008 2.378-.087a4.5 4.5 0 0 0 3.535-3.536c.08-.397.087-.933.087-2.451 0-1.391-.009-1.843-.08-2.17a3.5 3.5 0 0 0-2.676-2.676c-.328-.072-.762-.08-2.108-.08Z" clip-rule="evenodd"/></g><defs><clipPath id="q"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>'
                ]))
          ),
          TOKEN_PLACEHOLDER: Q(
            Bn ||
                (Bn = (0, f.Z)([
                  '<svg width="60" height="60" viewBox="0 0 60 60" fill="none"><rect id="token-placeholder-fill" width="58" height="58" x="1" y="1" fill="#fff" rx="29"/><path fill="#3B4040" stroke="#fff" stroke-width="2" d="M32 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5.566c0 .357.192.685.495.875a16.001 16.001 0 0 1 4.256 3.894c.667.88.33 2.113-.627 2.665l-2.494 1.44c-.956.552-2.166.204-2.913-.609a9.12 9.12 0 1 0 .064 12.267c.739-.82 1.945-1.181 2.907-.64l2.509 1.415c.962.542 1.312 1.77.654 2.658a16 16 0 0 1-4.356 4.028c-.303.19-.495.518-.495.875V50a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2.992c0-.602-.528-1.065-1.13-1.032-.579.032-1.16.032-1.74 0-.602-.032-1.13.43-1.13 1.032V50a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-5.566c0-.357-.192-.685-.495-.875a16 16 0 0 1 0-27.118c.303-.19.495-.517.495-.875V10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2.992c0 .601.528 1.064 1.13 1.032.58-.032 1.161-.032 1.74 0 .602.033 1.13-.43 1.13-1.032V10Z"/><rect id="token-placeholder-dash" width="58" height="58" x="1" y="1" stroke="#000" stroke-dasharray="6 6" stroke-width="2" rx="29"/></svg>'
                ]))
          ),
          ACCOUNT_COPY: Q(
            zn ||
                (zn = (0, f.Z)([
                  '<svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path fill="#fff" fill-rule="evenodd" d="M4.003 4.005c.012-1.225.074-1.936.391-2.491a3 3 0 0 1 1.12-1.12C6.204 0 7.136 0 9 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C14 2.204 14 3.136 14 5s0 2.795-.394 3.486a3 3 0 0 1-1.12 1.12c-.555.317-1.266.379-2.491.391l.002.003c-.012 1.222-.075 1.932-.391 2.486a3 3 0 0 1-1.12 1.12C7.796 14 6.864 14 5 14s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C0 11.796 0 10.864 0 9s0-2.795.394-3.486a3 3 0 0 1 1.12-1.12c.554-.316 1.264-.379 2.486-.391l.003.002ZM9 8.5c-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.045-.08-.113-.243-.154-.693C5.501 6.58 5.5 5.959 5.5 5c0-.959.001-1.58.043-2.05.04-.45.109-.613.154-.693a1.5 1.5 0 0 1 .56-.56c.08-.045.243-.113.693-.154C7.42 1.501 8.041 1.5 9 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.045.08.113.243.154.693.042.47.043 1.091.043 2.05 0 .959-.001 1.58-.043 2.05-.04.45-.109.613-.154.693a1.5 1.5 0 0 1-.56.56c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043ZM4 5.503a13.77 13.77 0 0 0-1.05.04c-.45.04-.613.109-.693.154a1.5 1.5 0 0 0-.56.56c-.045.08-.113.243-.154.693C1.501 7.42 1.5 8.041 1.5 9c0 .959.001 1.58.043 2.05.04.45.109.613.154.693a1.5 1.5 0 0 0 .56.56c.08.045.243.113.693.154.47.042 1.091.043 2.05.043.959 0 1.58-.001 2.05-.043.45-.04.613-.109.693-.154a1.5 1.5 0 0 0 .56-.56c.045-.08.113-.242.154-.693.025-.283.035-.619.04-1.05-1.534-.003-2.358-.037-2.983-.394a3 3 0 0 1-1.12-1.12c-.357-.625-.39-1.449-.394-2.983Z" clip-rule="evenodd"/></svg>'
                ]))
          ),
          ACCOUNT_DISCONNECT: Q(
            Un ||
                (Un = (0, f.Z)([
                  '<svg width="16" height="14" fill="none" viewBox="0 0 16 14"><path fill="#fff" d="M9.677 1.5h-2.61c-1.261 0-2.107.001-2.757.06-.629.056-.926.157-1.122.268a2.5 2.5 0 0 0-.933.933c-.112.196-.212.493-.269 1.122-.058.65-.06 1.496-.06 2.757v.72c0 1.26.002 2.107.06 2.756.057.63.157.927.27 1.123a2.5 2.5 0 0 0 .932.933c.196.111.493.212 1.122.268.65.059 1.496.06 2.757.06h2.61a.75.75 0 1 1 0 1.5h-2.61c-2.467 0-3.7 0-4.622-.525a4 4 0 0 1-1.493-1.493C.427 11.06.427 9.827.427 7.36v-.72c0-2.467 0-3.7.525-4.622A4 4 0 0 1 2.445.525C3.366 0 4.6 0 7.067 0h2.61a.75.75 0 1 1 0 1.5Z"/><path fill="#fff" d="M10.896 11.03a.75.75 0 0 1 0-1.06l1.793-1.793a.25.25 0 0 0-.176-.427H8.177a.75.75 0 0 1 0-1.5h4.336a.25.25 0 0 0 .176-.427L10.896 4.03a.75.75 0 0 1 1.061-1.06l3.323 3.323a1 1 0 0 1 0 1.414l-3.323 3.323a.75.75 0 0 1-1.06 0Z"/></svg>'
                ]))
          )
        }
        const ho = {
          1: '692ed6ba-e569-459a-556a-776476829e00',
          42161: '600a9a04-c1b9-42ca-6785-9b4b6ff85200',
          43114: '30c46e53-e989-45fb-4549-be3bd4eb3b00',
          56: '93564157-2e8e-4ce7-81df-b264dbee9b00',
          250: '06b26297-fe0c-4733-5d6b-ffa5498aac00',
          10: 'ab9c186a-c52f-464b-2906-ca59d760a400',
          137: '41d04d42-da3b-4453-8506-668cc0727900',
          100: '02b53f6a-e3d4-479e-1cb4-21178987d100',
          9001: 'f926ff41-260d-4028-635e-91913fc28e00',
          324: 'b310f07f-4ef7-49f3-7073-2a0a39685800',
          314: '5a73b3dd-af74-424e-cae0-0de859ee9400',
          4689: '34e68754-e536-40da-c153-6ef2e7188a00',
          1088: '3897a66d-40b9-4833-162f-a2c90531c900',
          1284: '161038da-44ae-4ec7-1208-0ea569454b00',
          1285: 'f1d73bb6-5450-4e18-38f7-fb6484264a00'
        }
        var vo = (function (e) {
          return (
            (e.metaMask = 'metaMask'),
            (e.trust = 'trust'),
            (e.phantom = 'phantom'),
            (e.brave = 'brave'),
            (e.spotEthWallet = 'spotEthWallet'),
            (e.exodus = 'exodus'),
            (e.tokenPocket = 'tokenPocket'),
            (e.frame = 'frame'),
            (e.tally = 'tally'),
            (e.coinbaseWallet = 'coinbaseWallet'),
            (e.core = 'core'),
            (e.bitkeep = 'bitkeep'),
            (e.mathWallet = 'mathWallet'),
            (e.opera = 'opera'),
            (e.tokenary = 'tokenary'),
            (e['1inch'] = '1inch'),
            (e.kuCoinWallet = 'kuCoinWallet'),
            (e.ledger = 'ledger'),
            e
          )
        })(vo || {})
        var fo = {
          injectedPreset: (0, l.Z)(
            {
              metaMask: {
                name: 'MetaMask',
                icon: '619537c0-2ff3-4c78-9ed8-a05e7567f300',
                url: 'https://metamask.io',
                isMobile: !0,
                isInjected: !0
              },
              trust: {
                name: 'Trust',
                icon: '0528ee7e-16d1-4089-21e3-bbfb41933100',
                url: 'https://trustwallet.com',
                isMobile: !0,
                isInjected: !0
              },
              spotEthWallet: {
                name: 'Spot',
                icon: '1bf33a89-b049-4a1c-d1f6-4dd7419ee400',
                url: 'https://www.spot-wallet.com',
                isMobile: !0,
                isInjected: !0
              },
              phantom: {
                name: 'Phantom',
                icon: '62471a22-33cb-4e65-5b54-c3d9ea24b900',
                url: 'https://phantom.app',
                isInjected: !0
              },
              core: {
                name: 'Core',
                icon: '35f9c46e-cc57-4aa7-315d-e6ccb2a1d600',
                url: 'https://core.app',
                isMobile: !0,
                isInjected: !0
              },
              bitkeep: {
                name: 'BitKeep',
                icon: '3f7075d0-4ab7-4db5-404d-3e4c05e6fe00',
                url: 'https://bitkeep.com',
                isMobile: !0,
                isInjected: !0
              },
              tokenPocket: {
                name: 'TokenPocket',
                icon: 'f3119826-4ef5-4d31-4789-d4ae5c18e400',
                url: 'https://www.tokenpocket.pro',
                isMobile: !0,
                isInjected: !0
              },
              mathWallet: {
                name: 'MathWallet',
                icon: '26a8f588-3231-4411-60ce-5bb6b805a700',
                url: 'https://mathwallet.org',
                isMobile: !0,
                isInjected: !0
              },
              exodus: {
                name: 'Exodus',
                icon: '4c16cad4-cac9-4643-6726-c696efaf5200',
                url: 'https://www.exodus.com',
                isMobile: !0,
                isDesktop: !0,
                isInjected: !0
              },
              kuCoinWallet: {
                name: 'KuCoin Wallet',
                icon: '1e47340b-8fd7-4ad6-17e7-b2bd651fae00',
                url: 'https://kuwallet.com',
                isMobile: !0,
                isInjected: !0
              },
              ledger: {
                name: 'Ledger',
                icon: 'a7f416de-aa03-4c5e-3280-ab49269aef00',
                url: 'https://www.ledger.com',
                isDesktop: !0
              },
              brave: {
                name: 'Brave',
                icon: '125e828e-9936-4451-a8f2-949c119b7400',
                url: 'https://brave.com/wallet',
                isInjected: !0
              },
              frame: {
                name: 'Frame',
                icon: 'cd492418-ea85-4ef1-aeed-1c9e20b58900',
                url: 'https://frame.sh',
                isInjected: !0
              },
              tally: {
                name: 'Tally',
                icon: '98d2620c-9fc8-4a1c-31bc-78d59d00a300',
                url: 'https://tallyho.org',
                isInjected: !0
              },
              coinbaseWallet: {
                name: 'Coinbase',
                icon: 'f8068a7f-83d7-4190-1f94-78154a12c600',
                url: 'https://www.coinbase.com/wallet',
                isInjected: !0
              },
              opera: {
                name: 'Opera',
                icon: '877fa1a4-304d-4d45-ca8e-f76d1a556f00',
                url: 'https://www.opera.com/crypto',
                isInjected: !0
              },
              tokenary: {
                name: 'Tokenary',
                icon: '5e481041-dc3c-4a81-373a-76bbde91b800',
                url: 'https://tokenary.io',
                isDesktop: !0,
                isInjected: !0
              }
            },
            '1inch',
            {
              name: '1inch Wallet',
              icon: 'dce1ee99-403f-44a9-9f94-20de30616500',
              url: 'https://1inch.io/wallet',
              isMobile: !0
            }
          ),
          getInjectedId: function (e) {
            if (e.toUpperCase() !== 'INJECTED' && e.length) return e
            const t = window
            const n = t.ethereum
            const r = t.spotEthWallet
            const i = t.coinbaseWalletExtension
            return n
              ? n.isTrust || n.isTrustWallet
                ? 'trust'
                : n.isPhantom
                  ? 'phantom'
                  : n.isBraveWallet
                    ? 'brave'
                    : r
                      ? 'spotEthWallet'
                      : n.isExodus
                        ? 'exodus'
                        : n.isTokenPocket
                          ? 'tokenPocket'
                          : n.isFrame
                            ? 'frame'
                            : n.isTally
                              ? 'tally'
                              : i
                                ? 'coinbaseWallet'
                                : n.isAvalanche
                                  ? 'core'
                                  : n.isBitKeep
                                    ? 'bitkeep'
                                    : n.isMathWallet
                                      ? 'mathWallet'
                                      : n.isOpera
                                        ? 'opera'
                                        : n.isTokenary
                                          ? 'tokenary'
                                          : n.isOneInchIOSWallet ||
                                                n.isOneInchAndroidWallet
                                            ? '1inch'
                                            : n.isKuCoinWallet
                                              ? 'kuCoinWallet'
                                              : n.isMetaMask
                                                ? 'metaMask'
                                                : 'injected'
              : 'metaMask'
          },
          getInjectedName: function (e) {
            let t, n
            if (e.length && e.toUpperCase() !== 'INJECTED') return e
            const r = fo.getInjectedId('')
            return (n = (t = fo.injectedPreset[r]) == null ? void 0 : t.name) !=
                null
              ? n
              : 'Injected'
          }
        }
        const po = {
          ETH: { icon: '692ed6ba-e569-459a-556a-776476829e00' },
          WETH: { icon: '692ed6ba-e569-459a-556a-776476829e00' },
          AVAX: { icon: '30c46e53-e989-45fb-4549-be3bd4eb3b00' },
          FTM: { icon: '06b26297-fe0c-4733-5d6b-ffa5498aac00' },
          BNB: { icon: '93564157-2e8e-4ce7-81df-b264dbee9b00' },
          MATIC: { icon: '41d04d42-da3b-4453-8506-668cc0727900' },
          OP: { icon: 'ab9c186a-c52f-464b-2906-ca59d760a400' },
          xDAI: { icon: '02b53f6a-e3d4-479e-1cb4-21178987d100' },
          EVMOS: { icon: 'f926ff41-260d-4028-635e-91913fc28e00' },
          METIS: { icon: '3897a66d-40b9-4833-162f-a2c90531c900' },
          IOTX: { icon: '34e68754-e536-40da-c153-6ef2e7188a00' }
        }
        const mo = Object.defineProperty
        const go = Object.getOwnPropertySymbols
        const wo = Object.prototype.hasOwnProperty
        const bo = Object.prototype.propertyIsEnumerable
        const yo = function (e, t, n) {
          return t in e
            ? mo(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n
            })
            : (e[t] = n)
        }
        const xo = function (e, t) {
          for (var n in t || (t = {})) wo.call(t, n) && yo(e, n, t[n])
          if (go) {
            let r
            const i = (0, m.Z)(go(t))
            try {
              for (i.s(); !(r = i.n()).done;) {
                n = r.value
                bo.call(t, n) && yo(e, n, t[n])
              }
            } catch (a) {
              i.e(a)
            } finally {
              i.f()
            }
          }
          return e
        }
        var ko = {
          MOBILE_BREAKPOINT: 600,
          W3M_RECENT_WALLET: 'W3M_RECENT_WALLET',
          rejectStandaloneButtonComponent: function () {
            if (Me.zb.state.isStandalone) {
              throw new Error(
                'Web3Modal button components are not available in standalone mode.'
              )
            }
          },
          getShadowRootElement: function (e, t) {
            const n = e.renderRoot.querySelector(t)
            if (!n) throw new Error(''.concat(t, ' not found'))
            return n
          },
          getWalletId: function (e) {
            return fo.getInjectedId(e)
          },
          getWalletIcon: function (e) {
            let t
            let n
            const r = (t = fo.injectedPreset[e]) == null ? void 0 : t.icon
            const i = Me.t0.state
            const a = i.projectId
            const o = i.walletImages
            return (n = o === null || void 0 === o ? void 0 : o[e]) != null
              ? n
              : a && r
                ? Me.uc.getImageUrl(r)
                : ''
          },
          getWalletName: function (e) {
            const t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1]
            const n = fo.getInjectedName(e)
            return t ? n.split(' ')[0] : n
          },
          getChainIcon: function (e) {
            let t
            const n = ho[e]
            const r = Me.t0.state
            const i = r.projectId
            const a = r.chainImages
            return (t = a === null || void 0 === a ? void 0 : a[e]) != null
              ? t
              : i && n
                ? Me.uc.getImageUrl(n)
                : ''
          },
          getTokenIcon: function (e) {
            let t
            let n
            const r = (t = po[e]) == null ? void 0 : t.icon
            const i = Me.t0.state
            const a = i.projectId
            const o = i.tokenImages
            return (n = o === null || void 0 === o ? void 0 : o[e]) != null
              ? n
              : a && r
                ? Me.uc.getImageUrl(r)
                : ''
          },
          isMobileAnimation: function () {
            return window.innerWidth <= ko.MOBILE_BREAKPOINT
          },
          preloadImage: function (e) {
            return (0, c.Z)(
              (0, s.Z)().mark(function t () {
                return (0, s.Z)().wrap(function (t) {
                  for (;;) {
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt(
                          'return',
                          new Promise(function (t, n) {
                            const r = new Image()
                              ;(r.onload = t), (r.onerror = n), (r.src = e)
                          })
                        )
                      case 1:
                      case 'end':
                        return t.stop()
                    }
                  }
                }, t)
              })
            )()
          },
          getErrorMessage: function (e) {
            return e instanceof Error ? e.message : 'Unknown Error'
          },
          debounce: function (e) {
            let t
            const n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 500
            return function () {
              for (
                var r = arguments.length, i = new Array(r), a = 0;
                a < r;
                a++
              ) { i[a] = arguments[a] }
              t && clearTimeout(t),
              (t = setTimeout(function () {
                e.apply(void 0, i)
              }, n))
            }
          },
          handleMobileLinking: function (e) {
            return (0, c.Z)(
              (0, s.Z)().mark(function t () {
                let n, r, i, a, o, l
                return (0, s.Z)().wrap(function (t) {
                  for (;;) {
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          ((l = function (e) {
                            let t = ''
                            a != null && a.universal
                              ? (t = Me.zv.formatUniversalUrl(
                                  a.universal,
                                  e,
                                  o
                                ))
                              : a != null &&
                                  a.native &&
                                  (t = Me.zv.formatNativeUrl(a.native, e, o)),
                            Me.zv.openHref(t)
                          }),
                          (n = Me.zb.state),
                          (r = n.standaloneUri),
                          (i = n.selectedChain),
                          (a = e.links),
                          (o = e.name),
                          !r)
                        ) {
                          t.next = 6
                          break
                        }
                        ko.setRecentWallet(e), l(r), (t.next = 10)
                        break
                      case 6:
                        return (
                          (t.next = 8),
                          Me.Id.client().connectWalletConnect(
                            function (e) {
                              l(e)
                            },
                            i === null || void 0 === i ? void 0 : i.id
                          )
                        )
                      case 8:
                        ko.setRecentWallet(e), Me.jb.close()
                      case 10:
                      case 'end':
                        return t.stop()
                    }
                  }
                }, t)
              })
            )()
          },
          handleAndroidLinking: function () {
            return (0, c.Z)(
              (0, s.Z)().mark(function e () {
                let t, n, r
                return (0, s.Z)().wrap(function (e) {
                  for (;;) {
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((t = Me.zb.state),
                          (n = t.standaloneUri),
                          (r = t.selectedChain),
                          !n)
                        ) {
                          e.next = 5
                          break
                        }
                        Me.zv.openHref(n), (e.next = 8)
                        break
                      case 5:
                        return (
                          (e.next = 7),
                          Me.Id.client().connectWalletConnect(
                            function (e) {
                              Me.zv.setWalletConnectAndroidDeepLink(e),
                              Me.zv.openHref(e)
                            },
                            r === null || void 0 === r ? void 0 : r.id
                          )
                        )
                      case 7:
                        Me.jb.close()
                      case 8:
                      case 'end':
                        return e.stop()
                    }
                  }
                }, e)
              })
            )()
          },
          handleUriCopy: function () {
            return (0, c.Z)(
              (0, s.Z)().mark(function e () {
                let t, n
                return (0, s.Z)().wrap(function (e) {
                  for (;;) {
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!(t = Me.zb.state.standaloneUri)) {
                          e.next = 6
                          break
                        }
                        return (e.next = 4), navigator.clipboard.writeText(t)
                      case 4:
                        e.next = 9
                        break
                      case 6:
                        return (
                          (n = Me.Id.client().walletConnectUri),
                          (e.next = 9),
                          navigator.clipboard.writeText(n)
                        )
                      case 9:
                        Me.Vs.openToast('Link copied', 'success')
                      case 10:
                      case 'end':
                        return e.stop()
                    }
                  }
                }, e)
              })
            )()
          },
          handleConnectorConnection: function (e, t) {
            return (0, c.Z)(
              (0, s.Z)().mark(function n () {
                let r
                return (0, s.Z)().wrap(
                  function (n) {
                    for (;;) {
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.prev = 0),
                            (r = Me.zb.state.selectedChain),
                            (n.next = 4),
                            Me.Id.client().connectConnector(
                              e,
                              r === null || void 0 === r ? void 0 : r.id
                            )
                          )
                        case 4:
                          Me.jb.close(), (n.next = 10)
                          break
                        case 7:
                          ;(n.prev = 7),
                          (n.t0 = n.catch(0)),
                          console.error(n.t0),
                          t
                            ? t()
                            : Me.Vs.openToast(
                              ko.getErrorMessage(n.t0),
                              'error'
                            )
                        case 10:
                        case 'end':
                          return n.stop()
                      }
                    }
                  },
                  n,
                  null,
                  [[0, 7]]
                )
              })
            )()
          },
          getCustomWallets: function () {
            let e
            const t = Me.t0.state
            const n = t.desktopWallets
            const r = t.mobileWallets
            return (e = Me.zv.isMobile() ? r : n) != null ? e : []
          },
          getCustomImageUrls: function () {
            const e = Me.t0.state
            const t = e.chainImages
            const n = e.walletImages
            const r = Object.values(t !== null && void 0 !== t ? t : {})
            const i = Object.values(n !== null && void 0 !== n ? n : {})
            return Object.values([].concat(r, i))
          },
          getConnectorImageUrls: function () {
            return Me.Id.client()
              .getConnectors()
              .map(function (e) {
                const t = e.id
                return fo.getInjectedId(t)
              })
              .map(function (e) {
                return ko.getWalletIcon(e)
              })
          },
          truncate: function (e) {
            const t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 8
            return e.length <= t
              ? e
              : ''
                .concat(e.substring(0, 4), '...')
                .concat(e.substring(e.length - 4))
          },
          generateAvatarColors: function (e) {
            let t
            const n = (t = e.match(/.{1,7}/g)) == null ? void 0 : t.splice(0, 5)
            const r = []
            n === null ||
                void 0 === n ||
                n.forEach(function (e) {
                  for (var t = 0, n = 0; n < e.length; n += 1) { (t = e.charCodeAt(n) + ((t << 5) - t)), (t &= t) }
                  for (var i = [0, 0, 0], a = 0; a < 3; a += 1) {
                    const o = (t >> (8 * a)) & 255
                    i[a] = o
                  }
                  r.push(
                    'rgb('
                      .concat(i[0], ', ')
                      .concat(i[1], ', ')
                      .concat(i[2], ')')
                  )
                })
            const i = document.querySelector(':root')
            if (i) {
              const a = {
                '--w3m-color-av-1': r[0],
                '--w3m-color-av-2': r[1],
                '--w3m-color-av-3': r[2],
                '--w3m-color-av-4': r[3],
                '--w3m-color-av-5': r[4]
              }
              Object.entries(a).forEach(function (e) {
                const t = (0, p.Z)(e, 2)
                const n = t[0]
                const r = t[1]
                return i.style.setProperty(n, r)
              })
            }
          },
          setRecentWallet: function (e) {
            const t = Me.zb.state.walletConnectVersion
            localStorage.setItem(
              ko.W3M_RECENT_WALLET,
              JSON.stringify((0, l.Z)({}, t, e))
            )
          },
          getRecentWallet: function () {
            const e = localStorage.getItem(ko.W3M_RECENT_WALLET)
            if (e) {
              const t = Me.zb.state.walletConnectVersion
              const n = JSON.parse(e)
              if (n[t]) return n[t]
            }
          },
          getExtensionWallets: function () {
            for (
              var e = [], t = 0, n = Object.entries(fo.injectedPreset);
              t < n.length;
              t++
            ) {
              const r = (0, p.Z)(n[t], 2)
              const i = r[0]
              const a = r[1]
              i !== vo.coinbaseWallet &&
                  a &&
                  a.isInjected &&
                  !a.isDesktop &&
                  e.push(xo({ id: i }, a))
            }
            return e
          },
          caseSafeIncludes: function (e, t) {
            return e.toUpperCase().includes(t.toUpperCase())
          }
        }
        const Co = C(
          Wn ||
              (Wn = (0, f.Z)([
                '#w3m-transparent-noise,.w3m-canvas,.w3m-color-placeholder,.w3m-gradient-placeholder,.w3m-highlight{inset:0;position:absolute;display:block;pointer-events:none;width:100%;height:100px;border-radius:8px 8px 0 0;transform:translateY(-5px)}.w3m-gradient-placeholder{background:linear-gradient(var(--w3m-gradient-1),var(--w3m-gradient-2),var(--w3m-gradient-3),var(--w3m-gradient-4))}.w3m-color-placeholder{background-color:var(--w3m-color-fg-accent)}.w3m-highlight{border:1px solid var(--w3m-color-overlay)}.w3m-canvas{opacity:0;transition:opacity 2s ease;box-shadow:0 8px 28px -6px rgba(10,16,31,.12),0 18px 88px -4px rgba(10,16,31,.14)}.w3m-canvas-visible{opacity:1}#w3m-transparent-noise{mix-blend-mode:multiply;opacity:.35}.w3m-toolbar{height:28px;display:flex;position:relative;margin:5px 15px 5px 5px;justify-content:space-between;align-items:center}.w3m-toolbar img,.w3m-toolbar svg{height:28px;object-position:left center;object-fit:contain}#w3m-wc-logo path{fill:var(--w3m-color-fg-inverse)}.w3m-action-btn{width:28px;height:28px;border-radius:50%;border:0;display:flex;justify-content:center;align-items:center;cursor:pointer;transition:background-color,.2s ease;background-color:var(--w3m-color-bg-1);box-shadow:0 0 0 1px var(--w3m-color-overlay),0 2px 4px -2px rgba(0,0,0,.12),0 4px 4px -2px rgba(0,0,0,.08)}.w3m-action-btn:hover{background-color:var(--w3m-color-bg-2)}.w3m-action-btn svg{display:block;object-position:center}.w3m-action-btn path{fill:var(--w3m-color-fg-1)}.w3m-actions{display:flex}.w3m-actions button:first-child{margin-right:16px}.w3m-help-active button:first-child{background-color:var(--w3m-color-fg-1)}.w3m-help-active button:first-child path{fill:var(--w3m-color-bg-1)}'
              ]))
        )
        const Zo = Object.defineProperty
        const Ao = Object.getOwnPropertyDescriptor
        const Eo = function (e, t, n, r) {
          for (
            var i, a = r > 1 ? void 0 : r ? Ao(t, n) : t, o = e.length - 1;
            o >= 0;
            o--
          ) { (i = e[o]) && (a = (r ? i(t, n, a) : i(a)) || a) }
          return r && a && Zo(t, n, a), a
        }
        const Io = new oo()
        let _o = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            let e
            return (
              (0, u.Z)(this, n),
              ((e = t.call(this)).open = !1),
              (e.isHelp = !1),
              (e.unsubscribeRouter = void 0),
              (e.playTimeout = void 0),
              (e.unsubscribeRouter = Me.AV.subscribe(function (t) {
                e.isHelp = t.view === 'Help'
              })),
              e
            )
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'firstUpdated',
                value: function () {
                  const e = this
                  Me.t0.state.themeBackground === 'gradient' &&
                      (this.playTimeout = setTimeout(function () {
                        Io.play(e.canvasEl), (e.open = !0)
                      }, 800))
                }
              },
              {
                key: 'disconnectedCallback',
                value: function () {
                  let e
                  (e = this.unsubscribeRouter) == null || e.call(this),
                  clearTimeout(this.playTimeout),
                  Io.stop()
                }
              },
              {
                key: 'canvasEl',
                get: function () {
                  return ko.getShadowRootElement(this, '.w3m-canvas')
                }
              },
              {
                key: 'onHelp',
                value: function () {
                  Me.AV.push('Help')
                }
              },
              {
                key: 'render',
                value: function () {
                  const e = Me.t0.state.themeBackground
                  const t = { 'w3m-canvas': !0, 'w3m-canvas-visible': this.open }
                  const n = { 'w3m-actions': !0, 'w3m-help-active': this.isHelp }
                  return X(
                    $n ||
                        ($n = (0, f.Z)([
                          '',
                          ' ',
                          '<div class="w3m-highlight"></div><div class="w3m-toolbar">',
                          '<div class="',
                          '"><button class="w3m-action-btn" @click="',
                          '">',
                          '</button> <button class="w3m-action-btn" @click="',
                          '">',
                          '</button></div></div>'
                        ])),
                    e === 'themeColor'
                      ? X(
                        Hn ||
                              (Hn = (0, f.Z)([
                                '<div class="w3m-color-placeholder"></div>'
                              ]))
                      )
                      : null,
                    e === 'gradient'
                      ? X(
                        Vn ||
                              (Vn = (0, f.Z)([
                                '<div class="w3m-gradient-placeholder"></div><canvas class="',
                                '"></canvas>',
                                ''
                              ])),
                        Pe(t),
                        uo.NOISE_TEXTURE
                      )
                      : null,
                    uo.WALLET_CONNECT_LOGO,
                    Pe(n),
                    this.onHelp,
                    uo.HELP_ICON,
                    Me.jb.close,
                    uo.CROSS_ICON
                  )
                }
              }
            ]),
            n
          )
        })(xe)
        ;(_o.styles = [Ha.globalCss, Co]),
        Eo([_e()], _o.prototype, 'open', 2),
        Eo([_e()], _o.prototype, 'isHelp', 2),
        (_o = Eo([Ze('w3m-modal-backcard')], _o))
        const Mo = C(
          Fn ||
              (Fn = (0, f.Z)(['main{padding:20px;padding-top:0;width:100%}']))
        )
        const Oo = Object.defineProperty
        const So = Object.getOwnPropertyDescriptor
        let Po = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            return (0, u.Z)(this, n), t.apply(this, arguments)
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'render',
                value: function () {
                  return X(
                    qn || (qn = (0, f.Z)(['<main><slot></slot></main>']))
                  )
                }
              }
            ]),
            n
          )
        })(xe)
        ;(Po.styles = [Ha.globalCss, Mo]),
        (Po = (function (e, t, n, r) {
          for (
            var i, a = r > 1 ? void 0 : r ? So(t, n) : t, o = e.length - 1;
            o >= 0;
            o--
          ) { (i = e[o]) && (a = (r ? i(t, n, a) : i(a)) || a) }
          return r && a && Oo(t, n, a), a
        })([Ze('w3m-modal-content')], Po))
        const To = C(
          Gn ||
              (Gn = (0, f.Z)([
                'footer{padding:10px;display:flex;flex-direction:column;align-items:inherit;justify-content:inherit;border-top:1px solid var(--w3m-color-bg-2)}'
              ]))
        )
        const Lo = Object.defineProperty
        const jo = Object.getOwnPropertyDescriptor
        let No = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            return (0, u.Z)(this, n), t.apply(this, arguments)
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'render',
                value: function () {
                  return X(
                    Kn || (Kn = (0, f.Z)(['<footer><slot></slot></footer>']))
                  )
                }
              }
            ]),
            n
          )
        })(xe)
        ;(No.styles = [Ha.globalCss, To]),
        (No = (function (e, t, n, r) {
          for (
            var i, a = r > 1 ? void 0 : r ? jo(t, n) : t, o = e.length - 1;
            o >= 0;
            o--
          ) { (i = e[o]) && (a = (r ? i(t, n, a) : i(a)) || a) }
          return r && a && Lo(t, n, a), a
        })([Ze('w3m-modal-footer')], No))
        const Ro = C(
          Yn ||
              (Yn = (0, f.Z)([
                'header{display:flex;justify-content:center;align-items:center;padding:20px;position:relative}.w3m-border{border-bottom:1px solid var(--w3m-color-bg-2);margin-bottom:20px}header button{padding:15px 20px;transition:opacity .2s ease}@media(hover:hover){header button:hover{opacity:.5}}.w3m-back-btn{position:absolute;left:0}.w3m-action-btn{position:absolute;right:0}path{fill:var(--w3m-color-fg-accent)}'
              ]))
        )
        const Do = Object.defineProperty
        const Bo = Object.getOwnPropertyDescriptor
        const zo = function (e, t, n, r) {
          for (
            var i, a = r > 1 ? void 0 : r ? Bo(t, n) : t, o = e.length - 1;
            o >= 0;
            o--
          ) { (i = e[o]) && (a = (r ? i(t, n, a) : i(a)) || a) }
          return r && a && Do(t, n, a), a
        }
        let Uo = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            let e
            return (
              (0, u.Z)(this, n),
              ((e = t.apply(this, arguments)).title = ''),
              (e.onAction = void 0),
              (e.actionIcon = void 0),
              (e.border = !1),
              e
            )
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'backBtnTemplate',
                value: function () {
                  return X(
                    Jn ||
                        (Jn = (0, f.Z)([
                          '<button class="w3m-back-btn" @click="',
                          '">',
                          '</button>'
                        ])),
                    Me.AV.goBack,
                    uo.BACK_ICON
                  )
                }
              },
              {
                key: 'actionBtnTemplate',
                value: function () {
                  return X(
                    Xn ||
                        (Xn = (0, f.Z)([
                          '<button class="w3m-action-btn" @click="',
                          '">',
                          '</button>'
                        ])),
                    this.onAction,
                    this.actionIcon
                  )
                }
              },
              {
                key: 'render',
                value: function () {
                  const e = { 'w3m-border': this.border }
                  const t = Me.AV.state.history.length > 1
                  const n = this.title
                    ? X(
                      Qn ||
                              (Qn = (0, f.Z)([
                                '<w3m-text variant="large-bold">',
                                '</w3m-text>'
                              ])),
                      this.title
                    )
                    : X(er || (er = (0, f.Z)(['<slot></slot>'])))
                  return X(
                    tr ||
                        (tr = (0, f.Z)([
                          '<header class="',
                          '">',
                          ' ',
                          ' ',
                          '</header>'
                        ])),
                    Pe(e),
                    t ? this.backBtnTemplate() : null,
                    n,
                    this.onAction ? this.actionBtnTemplate() : null
                  )
                }
              }
            ]),
            n
          )
        })(xe)
        ;(Uo.styles = [Ha.globalCss, Ro]),
        zo([Ie()], Uo.prototype, 'title', 2),
        zo([Ie()], Uo.prototype, 'onAction', 2),
        zo([Ie()], Uo.prototype, 'actionIcon', 2),
        zo([Ie()], Uo.prototype, 'border', 2),
        (Uo = zo([Ze('w3m-modal-header')], Uo))
        const Wo = C(
          nr ||
              (nr = (0, f.Z)([
                '.w3m-router{overflow:hidden;will-change:transform}.w3m-content{display:flex;flex-direction:column}'
              ]))
        )
        const $o = Object.defineProperty
        const Ho = Object.getOwnPropertyDescriptor
        const Vo = function (e, t, n, r) {
          for (
            var i, a = r > 1 ? void 0 : r ? Ho(t, n) : t, o = e.length - 1;
            o >= 0;
            o--
          ) { (i = e[o]) && (a = (r ? i(t, n, a) : i(a)) || a) }
          return r && a && $o(t, n, a), a
        }
        let Fo = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            let e
            return (
              (0, u.Z)(this, n),
              ((e = t.call(this)).view = Me.AV.state.view),
              (e.prevView = Me.AV.state.view),
              (e.unsubscribe = void 0),
              (e.oldHeight = '0px'),
              (e.resizeObserver = void 0),
              (e.unsubscribe = Me.AV.subscribe(function (t) {
                e.view !== t.view && e.onChangeRoute()
              })),
              e
            )
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'firstUpdated',
                value: function () {
                  const e = this
                    ;(this.resizeObserver = new ResizeObserver(function (t) {
                    const n = (0, p.Z)(t, 1)[0]
                    const r = ''.concat(n.contentRect.height, 'px')
                    e.oldHeight !== '0px' &&
                        (Ft(
                          e.routerEl,
                          { height: [e.oldHeight, r] },
                          { duration: 0.2 }
                        ),
                        Ft(
                          e.routerEl,
                          { opacity: [0, 1], scale: [0.99, 1] },
                          { duration: 0.37, delay: 0.03 }
                        )),
                    (e.oldHeight = r)
                  })),
                  this.resizeObserver.observe(this.contentEl)
                }
              },
              {
                key: 'disconnectedCallback',
                value: function () {
                  let e, t
                  (e = this.unsubscribe) == null || e.call(this),
                  (t = this.resizeObserver) == null || t.disconnect()
                }
              },
              {
                key: 'routerEl',
                get: function () {
                  return ko.getShadowRootElement(this, '.w3m-router')
                }
              },
              {
                key: 'contentEl',
                get: function () {
                  return ko.getShadowRootElement(this, '.w3m-content')
                }
              },
              {
                key: 'viewTemplate',
                value: function () {
                  switch (this.view) {
                    case 'ConnectWallet':
                      return X(
                        rr ||
                            (rr = (0, f.Z)([
                              '<w3m-connect-wallet-view></w3m-connect-wallet-view>'
                            ]))
                      )
                    case 'SelectNetwork':
                      return X(
                        ir ||
                            (ir = (0, f.Z)([
                              '<w3m-select-network-view></w3m-select-network-view>'
                            ]))
                      )
                    case 'InjectedConnector':
                      return X(
                        ar ||
                            (ar = (0, f.Z)([
                              '<w3m-injected-connector-view></w3m-injected-connector-view>'
                            ]))
                      )
                    case 'InstallConnector':
                      return X(
                        or ||
                            (or = (0, f.Z)([
                              '<w3m-install-connector-view></w3m-install-connector-view>'
                            ]))
                      )
                    case 'GetWallet':
                      return X(
                        lr ||
                            (lr = (0, f.Z)([
                              '<w3m-get-wallet-view></w3m-get-wallet-view>'
                            ]))
                      )
                    case 'DesktopConnector':
                      return X(
                        sr ||
                            (sr = (0, f.Z)([
                              '<w3m-desktop-connector-view></w3m-desktop-connector-view>'
                            ]))
                      )
                    case 'WalletExplorer':
                      return X(
                        cr ||
                            (cr = (0, f.Z)([
                              '<w3m-wallet-explorer-view></w3m-wallet-explorer-view>'
                            ]))
                      )
                    case 'Qrcode':
                      return X(
                        ur ||
                            (ur = (0, f.Z)([
                              '<w3m-qrcode-view></w3m-qrcode-view>'
                            ]))
                      )
                    case 'Help':
                      return X(
                        dr ||
                            (dr = (0, f.Z)([
                              '<w3m-help-view></w3m-help-view>'
                            ]))
                      )
                    case 'Account':
                      return X(
                        hr ||
                            (hr = (0, f.Z)([
                              '<w3m-account-view></w3m-account-view>'
                            ]))
                      )
                    case 'SwitchNetwork':
                      return X(
                        vr ||
                            (vr = (0, f.Z)([
                              '<w3m-switch-network-view></w3m-switch-network-view>'
                            ]))
                      )
                    default:
                      return X(
                        fr || (fr = (0, f.Z)(['<div>Not Found</div>']))
                      )
                  }
                }
              },
              {
                key: 'onChangeRoute',
                value: (function () {
                  const e = (0, c.Z)(
                    (0, s.Z)().mark(function e () {
                      return (0, s.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  Ft(
                                    this.routerEl,
                                    { opacity: [1, 0], scale: [1, 1.02] },
                                    { duration: 0.15 }
                                  ).finished
                                )
                              case 2:
                                this.view = Me.AV.state.view
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
                key: 'render',
                value: function () {
                  return X(
                    pr ||
                        (pr = (0, f.Z)([
                          '<div class="w3m-router"><div class="w3m-content">',
                          '</div></div>'
                        ])),
                    this.viewTemplate()
                  )
                }
              }
            ]),
            n
          )
        })(xe)
        ;(Fo.styles = [Ha.globalCss, Wo]),
        Vo([_e()], Fo.prototype, 'view', 2),
        Vo([_e()], Fo.prototype, 'prevView', 2),
        (Fo = Vo([Ze('w3m-modal-router')], Fo))
        const qo = C(
          mr ||
              (mr = (0, f.Z)([
                'div{height:36px;width:max-content;display:flex;justify-content:center;align-items:center;padding:10px 15px;position:absolute;top:12px;box-shadow:0 6px 14px -6px rgba(10,16,31,.3),0 10px 32px -4px rgba(10,16,31,.15);z-index:2;left:50%;transform:translateX(-50%);pointer-events:none;backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);border-radius:36px;border:1px solid var(--w3m-color-overlay);background-color:var(--w3m-color-overlay)}svg{margin-right:5px}@-moz-document url-prefix(){div{background-color:var(--w3m-color-bg-3)}}.w3m-success path{fill:var(--w3m-color-fg-accent)}.w3m-error path{fill:var(--w3m-color-err)}'
              ]))
        )
        const Go = Object.defineProperty
        const Ko = Object.getOwnPropertyDescriptor
        const Yo = function (e, t, n, r) {
          for (
            var i, a = r > 1 ? void 0 : r ? Ko(t, n) : t, o = e.length - 1;
            o >= 0;
            o--
          ) { (i = e[o]) && (a = (r ? i(t, n, a) : i(a)) || a) }
          return r && a && Go(t, n, a), a
        }
        let Jo = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            let e
            return (
              (0, u.Z)(this, n),
              ((e = t.call(this)).open = !1),
              (e.unsubscribe = void 0),
              (e.timeout = void 0),
              (e.unsubscribe = Me.Vs.subscribe(function (t) {
                t.open
                  ? ((e.open = !0),
                    (e.timeout = setTimeout(function () {
                      return Me.Vs.closeToast()
                    }, 2200)))
                  : ((e.open = !1), clearTimeout(e.timeout))
              })),
              e
            )
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'disconnectedCallback',
                value: function () {
                  let e
                  (e = this.unsubscribe) == null || e.call(this),
                  clearTimeout(this.timeout),
                  Me.Vs.closeToast()
                }
              },
              {
                key: 'render',
                value: function () {
                  const e = Me.Vs.state
                  const t = e.message
                  const n = e.variant
                  const r = {
                    'w3m-success': n === 'success',
                    'w3m-error': n === 'error'
                  }
                  return this.open
                    ? X(
                      gr ||
                            (gr = (0, f.Z)([
                              '<div class="',
                              '">',
                              ' ',
                              '<w3m-text variant="small-normal">',
                              '</w3m-text></div>'
                            ])),
                      Pe(r),
                      n === 'success' ? uo.CHECKMARK_ICON : null,
                      n === 'error' ? uo.CROSS_ICON : null,
                      t
                    )
                    : null
                }
              }
            ]),
            n
          )
        })(xe)
        ;(Jo.styles = [Ha.globalCss, qo]),
        Yo([_e()], Jo.prototype, 'open', 2),
        (Jo = Yo([Ze('w3m-modal-toast')], Jo))
        const Xo = C(
          wr ||
              (wr = (0, f.Z)([
                'button{padding:5px;border-radius:10px;transition:all .2s ease;display:flex;flex-direction:column;align-items:center;justify-content:center;width:80px;height:90px}w3m-network-image{width:54px;height:59px}w3m-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center;margin-top:5px}button:hover{background-color:var(--w3m-color-overlay)}'
              ]))
        )
        const Qo = Object.defineProperty
        const el = Object.getOwnPropertyDescriptor
        const tl = function (e, t, n, r) {
          for (
            var i, a = r > 1 ? void 0 : r ? el(t, n) : t, o = e.length - 1;
            o >= 0;
            o--
          ) { (i = e[o]) && (a = (r ? i(t, n, a) : i(a)) || a) }
          return r && a && Qo(t, n, a), a
        }
        let nl = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            let e
            return (
              (0, u.Z)(this, n),
              ((e = t.apply(this, arguments)).onClick = function () {
                return null
              }),
              (e.name = ''),
              (e.chainId = ''),
              e
            )
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'render',
                value: function () {
                  return X(
                    br ||
                        (br = (0, f.Z)([
                          '<button @click="',
                          '"><w3m-network-image chainId="',
                          '"></w3m-network-image><w3m-text variant="xsmall-normal">',
                          '</w3m-text></button>'
                        ])),
                    this.onClick,
                    this.chainId,
                    this.name
                  )
                }
              }
            ]),
            n
          )
        })(xe)
        ;(nl.styles = [Ha.globalCss, Xo]),
        tl([Ie()], nl.prototype, 'onClick', 2),
        tl([Ie()], nl.prototype, 'name', 2),
        tl([Ie()], nl.prototype, 'chainId', 2),
        (nl = tl([Ze('w3m-network-button')], nl))
        const rl = C(
          yr ||
              (yr = (0, f.Z)([
                'div{width:inherit;height:inherit}.polygon-stroke{stroke:var(--w3m-color-overlay)}svg{width:100%;height:100%;margin:0}#network-placeholder-fill{fill:var(--w3m-color-bg-3)}#network-placeholder-dash{stroke:var(--w3m-color-overlay)}'
              ]))
        )
        const il = Object.defineProperty
        const al = Object.getOwnPropertyDescriptor
        const ol = function (e, t, n, r) {
          for (
            var i, a = r > 1 ? void 0 : r ? al(t, n) : t, o = e.length - 1;
            o >= 0;
            o--
          ) { (i = e[o]) && (a = (r ? i(t, n, a) : i(a)) || a) }
          return r && a && il(t, n, a), a
        }
        let ll = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            let e
            return (
              (0, u.Z)(this, n),
              ((e = t.apply(this, arguments)).chainId = ''),
              e
            )
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'render',
                value: function () {
                  const e = ko.getChainIcon(this.chainId)
                  return e
                    ? X(
                      xr ||
                            (xr = (0, f.Z)([
                              '<div><svg width="54" height="59" viewBox="0 0 54 59" fill="none"><defs><clipPath id="polygon"><path d="M17.033 4.964c3.852-2.262 5.778-3.393 7.84-3.77a11.807 11.807 0 0 1 4.254 0c2.062.377 3.988 1.508 7.84 3.77l6.066 3.562c3.852 2.263 5.777 3.394 7.13 5.022a12.268 12.268 0 0 1 2.127 3.747c.71 2.006.71 4.268.71 8.793v7.124c0 4.525 0 6.787-.71 8.793a12.268 12.268 0 0 1-2.126 3.747c-1.354 1.628-3.28 2.76-7.131 5.022l-6.066 3.562c-3.852 2.262-5.778 3.393-7.84 3.771a11.814 11.814 0 0 1-4.254 0c-2.062-.378-3.988-1.509-7.84-3.77l-6.066-3.563c-3.852-2.263-5.778-3.394-7.13-5.022a12.268 12.268 0 0 1-2.127-3.747C1 40 1 37.737 1 33.212v-7.124c0-4.525 0-6.787.71-8.793a12.268 12.268 0 0 1 2.127-3.747c1.352-1.628 3.278-2.76 7.13-5.022l6.066-3.562Z"/></clipPath></defs><image clip-path="url(#polygon)" href="',
                              '" width="58" height="59" x="-2" y="0"/><path class="polygon-stroke" d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z" stroke="#fff"/></svg></div>'
                            ])),
                      e
                    )
                    : X(
                      kr || (kr = (0, f.Z)(['', ''])),
                      uo.NETWORK_PLACEHOLDER
                    )
                }
              }
            ]),
            n
          )
        })(xe)
        ;(ll.styles = [Ha.globalCss, rl]),
        ol([Ie()], ll.prototype, 'chainId', 2),
        (ll = ol([Ze('w3m-network-image')], ll))
        const sl = 0.1
        function cl (e, t, n) {
          return e !== t && (e - t < 0 ? t - e : e - t) <= n + sl
        }
        const ul = function (e, t, n, r) {
          const i = r === 'light' ? '#141414' : '#fff'
          const a = r === 'light' ? '#fff' : '#141414'
          const o = []
          const l = (function (e, t) {
            const n = Array.prototype.slice.call(
              Ra.create(e, { errorCorrectionLevel: t }).modules.data,
              0
            )
            const r = Math.sqrt(n.length)
            return n.reduce(function (e, t, n) {
              return (
                (n % r === 0 ? e.push([t]) : e[e.length - 1].push(t)) && e
              )
            }, [])
          })(e, 'Q')
          const s = t / l.length
          const c = [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 0, y: 1 }
          ]
          c.forEach(function (e) {
            for (
              let t = e.x,
                n = e.y,
                r = (l.length - 7) * s * t,
                u = (l.length - 7) * s * n,
                d = 0;
              d < c.length;
              d += 1
            ) {
              const h = s * (7 - 2 * d)
              o.push(
                Q(
                  Cr ||
                      (Cr = (0, f.Z)([
                        '<rect fill="',
                        '" height="',
                        '" rx="',
                        '" ry="',
                        '" width="',
                        '" x="',
                        '" y="',
                        '">'
                      ])),
                  d % 2 === 0 ? i : a,
                  h,
                  0.32 * h,
                  0.32 * h,
                  h,
                  r + s * d,
                  u + s * d
                )
              )
            }
          })
          const u = Math.floor((n + 25) / s)
          const d = l.length / 2 - u / 2
          const h = l.length / 2 + u / 2 - 1
          const v = []
          l.forEach(function (e, t) {
            e.forEach(function (e, n) {
              if (
                l[t][n] &&
                  !(
                    (t < 7 && n < 7) ||
                    (t > l.length - 8 && n < 7) ||
                    (t < 7 && n > l.length - 8)
                  ) &&
                  !(t > d && t < h && n > d && n < h)
              ) {
                const r = t * s + s / 2
                const i = n * s + s / 2
                v.push([r, i])
              }
            })
          })
          const g = {}
          return (
            v.forEach(function (e) {
              const t = (0, p.Z)(e, 2)
              const n = t[0]
              const r = t[1]
              g[n] ? g[n].push(r) : (g[n] = [r])
            }),
            Object.entries(g)
              .map(function (e) {
                const t = (0, p.Z)(e, 2)
                const n = t[0]
                const r = t[1]
                const i = r.filter(function (e) {
                  return r.every(function (t) {
                    return !cl(e, t, s)
                  })
                })
                return [Number(n), i]
              })
              .forEach(function (e) {
                const t = (0, p.Z)(e, 2)
                const n = t[0]
                t[1].forEach(function (e) {
                  o.push(
                    Q(
                      Zr ||
                          (Zr = (0, f.Z)([
                            '<circle cx="',
                            '" cy="',
                            '" fill="',
                            '" r="',
                            '">'
                          ])),
                      n,
                      e,
                      i,
                      s / 2.5
                    )
                  )
                })
              }),
            Object.entries(g)
              .filter(function (e) {
                const t = (0, p.Z)(e, 2)
                t[0]
                return t[1].length > 1
              })
              .map(function (e) {
                const t = (0, p.Z)(e, 2)
                const n = t[0]
                const r = t[1]
                const i = r.filter(function (e) {
                  return r.some(function (t) {
                    return cl(e, t, s)
                  })
                })
                return [Number(n), i]
              })
              .map(function (e) {
                const t = (0, p.Z)(e, 2)
                const n = t[0]
                const r = t[1]
                r.sort(function (e, t) {
                  return e < t ? -1 : 1
                })
                let i
                const a = []
                const o = (0, m.Z)(r)
                try {
                  const l = function () {
                    const e = i.value
                    const t = a.find(function (t) {
                      return t.some(function (t) {
                        return cl(e, t, s)
                      })
                    })
                    t ? t.push(e) : a.push([e])
                  }
                  for (o.s(); !(i = o.n()).done;) l()
                } catch (c) {
                  o.e(c)
                } finally {
                  o.f()
                }
                return [
                  n,
                  a.map(function (e) {
                    return [e[0], e[e.length - 1]]
                  })
                ]
              })
              .forEach(function (e) {
                const t = (0, p.Z)(e, 2)
                const n = t[0]
                t[1].forEach(function (e) {
                  const t = (0, p.Z)(e, 2)
                  const r = t[0]
                  const a = t[1]
                  o.push(
                    Q(
                      Ar ||
                          (Ar = (0, f.Z)([
                            '<line x1="',
                            '" x2="',
                            '" y1="',
                            '" y2="',
                            '" stroke="',
                            '" stroke-width="',
                            '" stroke-linecap="round">'
                          ])),
                      n,
                      n,
                      r,
                      a,
                      i,
                      s / 1.25
                    )
                  )
                })
              }),
            o
          )
        }
        const dl = C(
          Er ||
              (Er = (0, f.Z)([
                '@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}div{position:relative;user-select:none;display:block;overflow:hidden;width:100%;aspect-ratio:1/1;animation:fadeIn ease .2s}svg:first-child,w3m-wallet-image{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}w3m-wallet-image{transform:translateY(-50%) translateX(-50%)}w3m-wallet-image{width:25%;height:25%;border-radius:15px}svg:first-child{transform:translateY(-50%) translateX(-50%) scale(.9)}svg:first-child path:first-child{fill:var(--w3m-color-fg-accent)}svg:first-child path:last-child{stroke:var(--w3m-color-overlay)}'
              ]))
        )
        const hl = Object.defineProperty
        const vl = Object.getOwnPropertyDescriptor
        const fl = function (e, t, n, r) {
          for (
            var i, a = r > 1 ? void 0 : r ? vl(t, n) : t, o = e.length - 1;
            o >= 0;
            o--
          ) { (i = e[o]) && (a = (r ? i(t, n, a) : i(a)) || a) }
          return r && a && hl(t, n, a), a
        }
        let pl = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            let e
            return (
              (0, u.Z)(this, n),
              ((e = t.apply(this, arguments)).uri = ''),
              (e.size = 0),
              (e.logoSrc = ''),
              (e.walletId = ''),
              e
            )
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'svgTemplate',
                value: function () {
                  let e
                  const t = (e = Me.t0.state.themeMode) != null ? e : 'light'
                  return Q(
                    Ir ||
                        (Ir = (0, f.Z)([
                          '<svg height="',
                          '" width="',
                          '">',
                          '</svg>'
                        ])),
                    this.size,
                    this.size,
                    ul(this.uri, this.size, this.size / 4, t)
                  )
                }
              },
              {
                key: 'render',
                value: function () {
                  return X(
                    _r || (_r = (0, f.Z)(['<div>', ' ', '</div>'])),
                    this.walletId || this.logoSrc
                      ? X(
                        Mr ||
                              (Mr = (0, f.Z)([
                                '<w3m-wallet-image walletId="',
                                '" src="',
                                '"></w3m-wallet-image>'
                              ])),
                        Na(this.walletId),
                        Na(this.logoSrc)
                      )
                      : uo.WALLET_CONNECT_ICON_COLORED,
                    this.svgTemplate()
                  )
                }
              }
            ]),
            n
          )
        })(xe)
        ;(pl.styles = [Ha.globalCss, dl]),
        fl([Ie()], pl.prototype, 'uri', 2),
        fl([Ie({ type: Number })], pl.prototype, 'size', 2),
        fl([Ie()], pl.prototype, 'logoSrc', 2),
        fl([Ie()], pl.prototype, 'walletId', 2),
        (pl = fl([Ze('w3m-qrcode')], pl))
        const ml = C(
          Or ||
              (Or = (0, f.Z)([
                ":host{position:relative;height:28px;width:75%}input{width:100%;height:100%;line-height:28px!important;border-radius:28px;font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'case' on;font-weight:500;font-size:16px;letter-spacing:-.03em;padding:0 10px 0 34px;transition:.2s all ease;color:transparent;position:absolute;background-color:var(--w3m-color-bg-3);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay)}input::placeholder{color:transparent}svg{margin-right:4px}.w3m-placeholder{top:0;left:50%;transform:translateX(-50%);transition:.2s all ease;pointer-events:none;display:flex;align-items:center;justify-content:center;height:100%;width:fit-content;position:relative}input:focus-within+.w3m-placeholder,input:not(:placeholder-shown)+.w3m-placeholder{transform:translateX(10px);left:0}w3m-text{opacity:1;transition:.2s opacity ease}input:focus-within+.w3m-placeholder w3m-text,input:not(:placeholder-shown)+.w3m-placeholder w3m-text{opacity:0}input:focus-within,input:not(:placeholder-shown){color:var(--w3m-color-fg-1)}input:focus-within{box-shadow:inset 0 0 0 1px var(--w3m-color-fg-accent)}path{fill:var(--w3m-color-fg-2)}"
              ]))
        )
        const gl = Object.defineProperty
        const wl = Object.getOwnPropertyDescriptor
        const bl = function (e, t, n, r) {
          for (
            var i, a = r > 1 ? void 0 : r ? wl(t, n) : t, o = e.length - 1;
            o >= 0;
            o--
          ) { (i = e[o]) && (a = (r ? i(t, n, a) : i(a)) || a) }
          return r && a && gl(t, n, a), a
        }
        let yl = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            let e
            return (
              (0, u.Z)(this, n),
              ((e = t.apply(this, arguments)).onChange = function () {
                return null
              }),
              e
            )
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'render',
                value: function () {
                  const e = Me.zv.isMobile()
                    ? 'Search mobile wallets'
                    : 'Search desktop wallets'
                  return X(
                    Sr ||
                        (Sr = (0, f.Z)([
                          '<input type="text" @input="',
                          '" placeholder="',
                          '"><div class="w3m-placeholder">',
                          '<w3m-text color="secondary" variant="medium-thin">',
                          '</w3m-text></div>'
                        ])),
                    this.onChange,
                    e,
                    uo.SEARCH_ICON,
                    e
                  )
                }
              }
            ]),
            n
          )
        })(xe)
        ;(yl.styles = [Ha.globalCss, ml]),
        bl([Ie()], yl.prototype, 'onChange', 2),
        (yl = bl([Ze('w3m-search-input')], yl))
        const xl = C(
          Pr ||
              (Pr = (0, f.Z)([
                '@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}100%{stroke-dasharray:90,150;stroke-dashoffset:-124}}svg{animation:rotate 2s linear infinite;display:flex;justify-content:center;align-items:center}svg circle{stroke-linecap:round;animation:dash 1.5s ease infinite;stroke:var(--w3m-color-fg-accent)}'
              ]))
        )
        const kl = Object.defineProperty
        const Cl = Object.getOwnPropertyDescriptor
        let Zl = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            return (0, u.Z)(this, n), t.apply(this, arguments)
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'render',
                value: function () {
                  return X(
                    Tr ||
                        (Tr = (0, f.Z)([
                          '<svg viewBox="0 0 50 50" width="24" height="24"><circle cx="25" cy="25" r="20" fill="none" stroke-width="4" stroke="#fff"/></svg>'
                        ]))
                  )
                }
              }
            ]),
            n
          )
        })(xe)
        ;(Zl.styles = [Ha.globalCss, xl]),
        (Zl = (function (e, t, n, r) {
          for (
            var i, a = r > 1 ? void 0 : r ? Cl(t, n) : t, o = e.length - 1;
            o >= 0;
            o--
          ) { (i = e[o]) && (a = (r ? i(t, n, a) : i(a)) || a) }
          return r && a && kl(t, n, a), a
        })([Ze('w3m-spinner')], Zl))
        const Al = C(
          Lr ||
              (Lr = (0, f.Z)([
                "span{font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'tnum' on,'lnum' on,'case' on}.w3m-xxsmall-bold{font-weight:700;font-size:10px;line-height:12px;letter-spacing:.02em;text-transform:uppercase}.w3m-xsmall-normal{font-weight:600;font-size:12px;line-height:14px;letter-spacing:-.03em}.w3m-small-thin{font-weight:500;font-size:14px;line-height:16px;letter-spacing:-.03em}.w3m-small-normal{font-weight:600;font-size:14px;line-height:16px;letter-spacing:-.03em}.w3m-medium-thin{font-weight:500;font-size:16px;line-height:20px;letter-spacing:-.03em}.w3m-medium-normal{font-weight:600;font-size:16px;line-height:20px;letter-spacing:-.03em}.w3m-medium-bold{font-weight:700;font-size:16px;line-height:20px;letter-spacing:-.03em}.w3m-large-bold{font-weight:600;font-size:20px;line-height:24px;letter-spacing:-.03em}:host(*){color:var(--w3m-color-fg-1)}.w3m-color-primary{color:var(--w3m-color-fg-1)}.w3m-color-secondary{color:var(--w3m-color-fg-2)}.w3m-color-tertiary{color:var(--w3m-color-fg-3)}.w3m-color-inverse{color:var(--w3m-color-fg-inverse)}.w3m-color-accnt{color:var(--w3m-color-fg-accent)}.w3m-color-error{color:var(--w3m-color-err)}"
              ]))
        )
        const El = Object.defineProperty
        const Il = Object.getOwnPropertyDescriptor
        const _l = function (e, t, n, r) {
          for (
            var i, a = r > 1 ? void 0 : r ? Il(t, n) : t, o = e.length - 1;
            o >= 0;
            o--
          ) { (i = e[o]) && (a = (r ? i(t, n, a) : i(a)) || a) }
          return r && a && El(t, n, a), a
        }
        let Ml = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            let e
            return (
              (0, u.Z)(this, n),
              ((e = t.apply(this, arguments)).variant = 'medium-normal'),
              (e.color = 'primary'),
              e
            )
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'render',
                value: function () {
                  const e = {
                    'w3m-large-bold': this.variant === 'large-bold',
                    'w3m-medium-bold': this.variant === 'medium-bold',
                    'w3m-medium-normal': this.variant === 'medium-normal',
                    'w3m-medium-thin': this.variant === 'medium-thin',
                    'w3m-small-normal': this.variant === 'small-normal',
                    'w3m-small-thin': this.variant === 'small-thin',
                    'w3m-xsmall-normal': this.variant === 'xsmall-normal',
                    'w3m-xxsmall-bold': this.variant === 'xxsmall-bold',
                    'w3m-color-primary': this.color === 'primary',
                    'w3m-color-secondary': this.color === 'secondary',
                    'w3m-color-tertiary': this.color === 'tertiary',
                    'w3m-color-inverse': this.color === 'inverse',
                    'w3m-color-accnt': this.color === 'accent',
                    'w3m-color-error': this.color === 'error'
                  }
                  return X(
                    jr ||
                        (jr = (0, f.Z)([
                          '<span class="',
                          '"><slot></slot></span>'
                        ])),
                    Pe(e)
                  )
                }
              }
            ]),
            n
          )
        })(xe)
        ;(Ml.styles = [Ha.globalCss, Al]),
        _l([Ie()], Ml.prototype, 'variant', 2),
        _l([Ie()], Ml.prototype, 'color', 2),
        (Ml = _l([Ze('w3m-text')], Ml))
        const Ol = C(
          Nr ||
              (Nr = (0, f.Z)([
                "div{overflow:hidden;position:relative;border-radius:50%}div::after{content:'';position:absolute;inset:0;border-radius:50%;border:1px solid var(--w3m-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}svg{width:100%;height:100%}#token-placeholder-fill{fill:var(--w3m-color-bg-3)}#token-placeholder-dash{stroke:var(--w3m-color-overlay)}"
              ]))
        )
        const Sl = Object.defineProperty
        const Pl = Object.getOwnPropertyDescriptor
        const Tl = function (e, t, n, r) {
          for (
            var i, a = r > 1 ? void 0 : r ? Pl(t, n) : t, o = e.length - 1;
            o >= 0;
            o--
          ) { (i = e[o]) && (a = (r ? i(t, n, a) : i(a)) || a) }
          return r && a && Sl(t, n, a), a
        }
        let Ll = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            let e
            return (
              (0, u.Z)(this, n),
              ((e = t.apply(this, arguments)).symbol = void 0),
              e
            )
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'render',
                value: function () {
                  let e
                  const t = ko.getTokenIcon((e = this.symbol) != null ? e : '')
                  return t
                    ? X(
                      Rr ||
                            (Rr = (0, f.Z)([
                              '<div><img src="',
                              '" alt="',
                              '"></div>'
                            ])),
                      t,
                      this.id
                    )
                    : uo.TOKEN_PLACEHOLDER
                }
              }
            ]),
            n
          )
        })(xe)
        ;(Ll.styles = [Ha.globalCss, Ol]),
        Tl([Ie()], Ll.prototype, 'symbol', 2),
        (Ll = Tl([Ze('w3m-token-image')], Ll))
        const jl = C(
          Dr ||
              (Dr = (0, f.Z)([
                'button{transition:all .2s ease;width:100%;height:100%;border-radius:10px;display:flex;align-items:flex-start}button:hover{background-color:var(--w3m-color-overlay)}button>div{width:80px;padding:5px 0;display:flex;flex-direction:column;align-items:center}w3m-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}w3m-wallet-image{height:60px;width:60px;transition:all .2s ease;border-radius:15px;margin-bottom:5px}.w3m-sublabel{margin-top:2px}'
              ]))
        )
        const Nl = Object.defineProperty
        const Rl = Object.getOwnPropertyDescriptor
        const Dl = function (e, t, n, r) {
          for (
            var i, a = r > 1 ? void 0 : r ? Rl(t, n) : t, o = e.length - 1;
            o >= 0;
            o--
          ) { (i = e[o]) && (a = (r ? i(t, n, a) : i(a)) || a) }
          return r && a && Nl(t, n, a), a
        }
        let Bl = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            let e
            return (
              (0, u.Z)(this, n),
              ((e = t.apply(this, arguments)).onClick = function () {
                return null
              }),
              (e.name = ''),
              (e.walletId = ''),
              (e.label = void 0),
              (e.src = void 0),
              (e.installed = !1),
              (e.recent = !1),
              e
            )
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'sublabelTemplate',
                value: function () {
                  return this.recent
                    ? X(
                      Br ||
                            (Br = (0, f.Z)([
                              '<w3m-text class="w3m-sublabel" variant="xxsmall-bold" color="tertiary">RECENT</w3m-text>'
                            ]))
                    )
                    : this.installed
                      ? X(
                        zr ||
                              (zr = (0, f.Z)([
                                '<w3m-text class="w3m-sublabel" variant="xxsmall-bold" color="tertiary">INSTALLED</w3m-text>'
                              ]))
                      )
                      : null
                }
              },
              {
                key: 'render',
                value: function () {
                  let e
                  return X(
                    Ur ||
                        (Ur = (0, f.Z)([
                          '<button @click="',
                          '"><div><w3m-wallet-image walletId="',
                          '" .src="',
                          '"></w3m-wallet-image><w3m-text variant="xsmall-normal">',
                          '</w3m-text>',
                          '</div></button>'
                        ])),
                    this.onClick,
                    this.walletId,
                    this.src,
                    (e = this.label) != null
                      ? e
                      : ko.getWalletName(this.name, !0),
                    this.sublabelTemplate()
                  )
                }
              }
            ]),
            n
          )
        })(xe)
        ;(Bl.styles = [Ha.globalCss, jl]),
        Dl([Ie()], Bl.prototype, 'onClick', 2),
        Dl([Ie()], Bl.prototype, 'name', 2),
        Dl([Ie()], Bl.prototype, 'walletId', 2),
        Dl([Ie()], Bl.prototype, 'label', 2),
        Dl([Ie()], Bl.prototype, 'src', 2),
        Dl([Ie()], Bl.prototype, 'installed', 2),
        Dl([Ie()], Bl.prototype, 'recent', 2),
        (Bl = Dl([Ze('w3m-wallet-button')], Bl))
        const zl = C(
          Wr ||
              (Wr = (0, f.Z)([
                "div{overflow:hidden;position:relative;border-radius:inherit;width:100%;height:100%}svg{position:relative;width:100%;height:100%}div::after{content:'';position:absolute;inset:0;border-radius:inherit;border:1px solid var(--w3m-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}#wallet-placeholder-fill{fill:var(--w3m-color-bg-3)}#wallet-placeholder-dash{stroke:var(--w3m-color-overlay)}"
              ]))
        )
        const Ul = Object.defineProperty
        const Wl = Object.getOwnPropertyDescriptor
        const $l = function (e, t, n, r) {
          for (
            var i, a = r > 1 ? void 0 : r ? Wl(t, n) : t, o = e.length - 1;
            o >= 0;
            o--
          ) { (i = e[o]) && (a = (r ? i(t, n, a) : i(a)) || a) }
          return r && a && Ul(t, n, a), a
        }
        let Hl = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            let e
            return (
              (0, u.Z)(this, n),
              ((e = t.apply(this, arguments)).walletId = void 0),
              (e.src = void 0),
              e
            )
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'render',
                value: function () {
                  let e
                  const t = ko.getWalletId((e = this.walletId) != null ? e : '')
                  const n = ko.getWalletId(t)
                  const r = this.src ? this.src : ko.getWalletIcon(n)
                  return X(
                    $r || ($r = (0, f.Z)(['', ''])),
                    r.length
                      ? X(
                        Hr ||
                              (Hr = (0, f.Z)([
                                '<div><img src="',
                                '" alt="',
                                '"></div>'
                              ])),
                        r,
                        this.id
                      )
                      : uo.WALLET_PLACEHOLDER
                  )
                }
              }
            ]),
            n
          )
        })(xe)
        ;(Hl.styles = [Ha.globalCss, zl]),
        $l([Ie()], Hl.prototype, 'walletId', 2),
        $l([Ie()], Hl.prototype, 'src', 2),
        (Hl = $l([Ze('w3m-wallet-image')], Hl))
        const Vl = C(
          Vr ||
              (Vr = (0, f.Z)([
                ":host{all:initial}div{display:flex;align-items:center;background-color:var(--w3m-color-overlay);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);border-radius:10px;padding:4px 4px 4px 8px}div button{border-radius:16px;padding:4px 8px 4px 4px;height:auto;margin-left:10px;color:var(--w3m-color-fg-inverse);background-color:var(--w3m-color-fg-accent)}button::after{content:'';inset:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--w3m-color-overlay)}button:hover::after{background-color:var(--w3m-color-overlay)}w3m-avatar{margin-right:6px}w3m-button-big w3m-avatar{margin-left:-5px}"
              ]))
        )
        const Fl = Object.defineProperty
        const ql = Object.getOwnPropertyDescriptor
        const Gl = function (e, t, n, r) {
          for (
            var i, a = r > 1 ? void 0 : r ? ql(t, n) : t, o = e.length - 1;
            o >= 0;
            o--
          ) { (i = e[o]) && (a = (r ? i(t, n, a) : i(a)) || a) }
          return r && a && Fl(t, n, a), a
        }
        var Kl = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            let e
            return (
              (0, u.Z)(this, n),
              ((e = t.call(this)).balance = 'hide'),
              ko.rejectStandaloneButtonComponent(),
              e
            )
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'onOpen',
                value: function () {
                  Me.zb.state.isStandalone || Me.jb.open({ route: 'Account' })
                }
              },
              {
                key: 'accountTemplate',
                value: function () {
                  return X(
                    Fr ||
                        (Fr = (0, f.Z)([
                          '<w3m-avatar></w3m-avatar><w3m-address-text></w3m-address-text>'
                        ]))
                  )
                }
              },
              {
                key: 'render',
                value: function () {
                  return this.balance === 'show'
                    ? X(
                      qr ||
                            (qr = (0, f.Z)([
                              '<div><w3m-balance></w3m-balance><button @click="',
                              '">',
                              '</button></div>'
                            ])),
                      this.onOpen,
                      this.accountTemplate()
                    )
                    : X(
                      Gr ||
                            (Gr = (0, f.Z)([
                              '<w3m-button-big @click="',
                              '">',
                              '</w3m-button-big>'
                            ])),
                      this.onOpen,
                      this.accountTemplate()
                    )
                }
              }
            ]),
            n
          )
        })(xe)
        ;(Kl.styles = [Ha.globalCss, Vl]),
        Gl([Ie()], Kl.prototype, 'balance', 2),
        (Kl = Gl([Ze('w3m-account-button')], Kl))
        const Yl = C(
          Kr ||
              (Kr = (0, f.Z)([
                'button{display:flex;border-radius:10px;flex-direction:column;transition:background-color .2s ease;justify-content:center;padding:5px;width:100px}button:hover{background-color:var(--w3m-color-overlay)}button:disabled{pointer-events:none}w3m-network-image{width:32px;height:32px}w3m-text{margin-top:4px}'
              ]))
        )
        const Jl = Object.defineProperty
        const Xl = Object.getOwnPropertyDescriptor
        const Ql = function (e, t, n, r) {
          for (
            var i, a = r > 1 ? void 0 : r ? Xl(t, n) : t, o = e.length - 1;
            o >= 0;
            o--
          ) { (i = e[o]) && (a = (r ? i(t, n, a) : i(a)) || a) }
          return r && a && Jl(t, n, a), a
        }
        let es = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            let e
              ;(0, u.Z)(this, n),
            ((e = t.call(this)).chainId = ''),
            (e.label = ''),
            (e.unsubscribeNetwork = void 0)
            const r = Me.zb.state.selectedChain
            return (
              (e.chainId =
                  r === null || void 0 === r ? void 0 : r.id.toString()),
              (e.label = r === null || void 0 === r ? void 0 : r.name),
              (e.unsubscribeNetwork = Me.zb.subscribe(function (t) {
                const n = t.selectedChain
                  ;(e.chainId =
                    n === null || void 0 === n ? void 0 : n.id.toString()),
                (e.label = n === null || void 0 === n ? void 0 : n.name)
              })),
              e
            )
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'disconnectedCallback',
                value: function () {
                  let e
                  (e = this.unsubscribeNetwork) == null || e.call(this)
                }
              },
              {
                key: 'onClick',
                value: function () {
                  Me.AV.push('SelectNetwork')
                }
              },
              {
                key: 'render',
                value: function () {
                  const e = Me.zb.state.chains
                  const t = e && e.length > 1
                  return X(
                    Yr ||
                        (Yr = (0, f.Z)([
                          '<button @click="',
                          '" ?disabled="',
                          '"><w3m-network-image chainId="',
                          '"></w3m-network-image><w3m-text variant="xsmall-normal" color="accent">',
                          '</w3m-text></button>'
                        ])),
                    this.onClick,
                    !t,
                    Na(this.chainId),
                    this.label
                  )
                }
              }
            ]),
            n
          )
        })(xe)
        ;(es.styles = [Ha.globalCss, Yl]),
        Ql([_e()], es.prototype, 'chainId', 2),
        Ql([_e()], es.prototype, 'label', 2),
        (es = Ql([Ze('w3m-account-network-button')], es))
        const ts = C(
          Jr ||
              (Jr = (0, f.Z)([
                '@keyframes slide{0%{background-position:0 0}100%{background-position:200px 0}}w3m-text{padding:1px 0}.w3m-loading{background:linear-gradient(270deg,var(--w3m-color-fg-1) 36.33%,var(--w3m-color-fg-3) 42.07%,var(--w3m-color-fg-1) 83.3%);background-size:200px 100%;background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation-name:slide;animation-duration:1.5s;animation-iteration-count:infinite;animation-timing-function:linear}'
              ]))
        )
        const ns = Object.defineProperty
        const rs = Object.getOwnPropertyDescriptor
        const is = function (e, t, n, r) {
          for (
            var i, a = r > 1 ? void 0 : r ? rs(t, n) : t, o = e.length - 1;
            o >= 0;
            o--
          ) { (i = e[o]) && (a = (r ? i(t, n, a) : i(a)) || a) }
          return r && a && ns(t, n, a), a
        }
        let as = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            let e
            return (
              (0, u.Z)(this, n),
              ((e = t.call(this)).address = void 0),
              (e.name = void 0),
              (e.loading = !0),
              (e.variant = 'button'),
              (e.unsubscribeAccount = void 0),
              (e.address = Me.zb.state.address),
              (e.name = Me.zb.state.profileName),
              (e.loading = Boolean(Me.zb.state.profileLoading)),
              (e.unsubscribeAccount = Me.zb.subscribe(function (t) {
                const n = t.address
                const r = t.profileName
                const i = t.profileLoading
                  ;(e.address = n), (e.name = r), (e.loading = Boolean(i))
              })),
              e
            )
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'disconnectedCallback',
                value: function () {
                  let e
                  (e = this.unsubscribeAccount) == null || e.call(this)
                }
              },
              {
                key: 'render',
                value: function () {
                  let e
                  const t = this.variant === 'button'
                  const n = { 'w3m-loading': this.loading }
                  return X(
                    Xr ||
                        (Xr = (0, f.Z)([
                          '<w3m-text class="',
                          '" variant="',
                          '" color="',
                          '">',
                          '</w3m-text>'
                        ])),
                    Pe(n),
                    t ? 'medium-normal' : 'large-bold',
                    t ? 'inverse' : 'primary',
                    this.name
                      ? this.name
                      : ko.truncate((e = this.address) != null ? e : '')
                  )
                }
              }
            ]),
            n
          )
        })(xe)
        ;(as.styles = [Ha.globalCss, ts]),
        is([_e()], as.prototype, 'address', 2),
        is([_e()], as.prototype, 'name', 2),
        is([_e()], as.prototype, 'loading', 2),
        is([Ie()], as.prototype, 'variant', 2),
        (as = is([Ze('w3m-address-text')], as))
        const os = C(
          Qr ||
              (Qr = (0, f.Z)([
                "@keyframes scroll{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(calc(-70px * 10),0,0)}}.w3m-slider{position:relative;overflow-x:hidden;padding:10px 0;margin:0 -20px}.w3m-slider::after,.w3m-slider::before{content:'';height:100%;width:50px;z-index:2;position:absolute;background:linear-gradient(to right,var(--w3m-color-bg-1) 0,transparent 100%);top:0}.w3m-slider::before{left:0}.w3m-slider::after{right:0;transform:rotateZ(180deg)}.w3m-track{display:flex;width:calc(70px * 20);animation:scroll 20s linear infinite}.w3m-action{padding:30px 0 10px 0;display:flex;justify-content:center;align-items:center;flex-direction:column}.w3m-action w3m-button-big:last-child{margin-top:10px}w3m-wallet-image{width:60px;height:60px;margin:0 5px;box-shadow:0 2px 4px -2px rgba(0,0,0,.12),0 4px 4px -2px rgba(0,0,0,.08);border-radius:15px}"
              ]))
        )
        const ls = Object.defineProperty
        const ss = Object.getOwnPropertyDescriptor
        let cs = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            return (0, u.Z)(this, n), t.apply(this, arguments)
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'onGoToQrcode',
                value: function () {
                  Me.AV.push('Qrcode')
                }
              },
              {
                key: 'onGoToGetWallet',
                value: function () {
                  Me.AV.push('GetWallet')
                }
              },
              {
                key: 'render',
                value: function () {
                  const e = Me.uc.state.previewWallets
                  const t = e.length
                  const n = [].concat((0, o.Z)(e), (0, o.Z)(e))
                  return X(
                    ei ||
                        (ei = (0, f.Z)([
                          '<w3m-modal-header title="Connect your wallet" .onAction="',
                          '" .actionIcon="',
                          '"></w3m-modal-header><w3m-modal-content>',
                          '<div class="w3m-action"><w3m-button-big @click="',
                          '"><w3m-text variant="medium-normal" color="inverse">Select Wallet</w3m-text></w3m-button-big><w3m-button-big variant="secondary" @click="',
                          '"><w3m-text variant="medium-normal" color="accent">I don\u2019t have a wallet</w3m-text></w3m-button-big></div></w3m-modal-content>'
                        ])),
                    this.onGoToQrcode,
                    uo.QRCODE_ICON,
                    t
                      ? X(
                        ti ||
                              (ti = (0, f.Z)([
                                '<div class="w3m-slider"><div class="w3m-track">',
                                '</div></div>'
                              ])),
                        n.map(function (e) {
                          const t = e.image_url
                          return X(
                            ni ||
                                  (ni = (0, f.Z)([
                                    '<w3m-wallet-image src="',
                                    '"></w3m-wallet-image>'
                                  ])),
                            t.lg
                          )
                        })
                      )
                      : null,
                    ko.handleAndroidLinking,
                    this.onGoToGetWallet
                  )
                }
              }
            ]),
            n
          )
        })(xe)
        ;(cs.styles = [Ha.globalCss, os]),
        (cs = (function (e, t, n, r) {
          for (
            var i, a = r > 1 ? void 0 : r ? ss(t, n) : t, o = e.length - 1;
            o >= 0;
            o--
          ) { (i = e[o]) && (a = (r ? i(t, n, a) : i(a)) || a) }
          return r && a && ls(t, n, a), a
        })([Ze('w3m-android-wallet-selection')], cs))
        const us = C(
          ri ||
              (ri = (0, f.Z)([
                '@keyframes slide{0%{transform:translateX(-50px)}100%{transform:translateX(200px)}}.w3m-placeholder,img{border-radius:50%;box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);display:block;position:relative;overflow:hidden!important;background-color:var(--w3m-color-av-1);background-image:radial-gradient(at 66% 77%,var(--w3m-color-av-2) 0,transparent 50%),radial-gradient(at 29% 97%,var(--w3m-color-av-3) 0,transparent 50%),radial-gradient(at 99% 86%,var(--w3m-color-av-4) 0,transparent 50%),radial-gradient(at 29% 88%,var(--w3m-color-av-5) 0,transparent 50%);transform:translateZ(0)}.w3m-loader{width:50px;height:100%;background:linear-gradient(270deg,transparent 0,rgba(255,255,255,.4) 30%,transparent 100%);animation-name:slide;animation-duration:1.5s;transform:translateX(-50px);animation-iteration-count:infinite;animation-timing-function:linear;animation-delay:.55s}.w3m-small{width:24px;height:24px}.w3m-medium{width:60px;height:60px}'
              ]))
        )
        const ds = Object.defineProperty
        const hs = Object.getOwnPropertyDescriptor
        const vs = function (e, t, n, r) {
          for (
            var i, a = r > 1 ? void 0 : r ? hs(t, n) : t, o = e.length - 1;
            o >= 0;
            o--
          ) { (i = e[o]) && (a = (r ? i(t, n, a) : i(a)) || a) }
          return r && a && ds(t, n, a), a
        }
        let fs = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            let e
            return (
              (0, u.Z)(this, n),
              ((e = t.call(this)).address = void 0),
              (e.avatar = void 0),
              (e.loading = !0),
              (e.size = 'small'),
              (e.unsubscribeAccount = void 0),
              (e.address = Me.zb.state.address),
              (e.avatar = Me.zb.state.profileAvatar),
              (e.loading = Boolean(Me.zb.state.profileLoading)),
              (e.unsubscribeAccount = Me.zb.subscribe(function (t) {
                const n = t.address
                const r = t.profileAvatar
                const i = t.profileLoading
                  ;(e.address = n), (e.avatar = r), (e.loading = Boolean(i))
              })),
              e
            )
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'disconnectedCallback',
                value: function () {
                  let e
                  (e = this.unsubscribeAccount) == null || e.call(this)
                }
              },
              {
                key: 'render',
                value: function () {
                  const e = {
                    'w3m-placeholder': !0,
                    'w3m-small': this.size === 'small',
                    'w3m-medium': this.size === 'medium'
                  }
                  return this.avatar
                    ? X(
                      ii ||
                            (ii = (0, f.Z)(['<img class="', '" src="', '">'])),
                      Pe(e),
                      this.avatar
                    )
                    : this.address
                      ? (ko.generateAvatarColors(this.address),
                        X(
                          ai ||
                              (ai = (0, f.Z)(['<div class="', '">', '</div>'])),
                          Pe(e),
                          this.loading
                            ? X(
                              oi ||
                                    (oi = (0, f.Z)([
                                      '<div class="w3m-loader"></div>'
                                    ]))
                            )
                            : null
                        ))
                      : null
                }
              }
            ]),
            n
          )
        })(xe)
        ;(fs.styles = [Ha.globalCss, us]),
        vs([_e()], fs.prototype, 'address', 2),
        vs([_e()], fs.prototype, 'avatar', 2),
        vs([_e()], fs.prototype, 'loading', 2),
        vs([Ie()], fs.prototype, 'size', 2),
        (fs = vs([Ze('w3m-avatar')], fs))
        const ps = C(
          li ||
              (li = (0, f.Z)([
                'div{display:flex;align-items:center}w3m-token-image{width:28px;height:28px;margin-right:6px}'
              ]))
        )
        const ms = Object.defineProperty
        const gs = Object.getOwnPropertyDescriptor
        const ws = function (e, t, n, r) {
          for (
            var i, a = r > 1 ? void 0 : r ? gs(t, n) : t, o = e.length - 1;
            o >= 0;
            o--
          ) { (i = e[o]) && (a = (r ? i(t, n, a) : i(a)) || a) }
          return r && a && ms(t, n, a), a
        }
        let bs = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            let e, r, i
            return (
              (0, u.Z)(this, n),
              ((e = t.call(this)).symbol = void 0),
              (e.amount = void 0),
              (e.unsubscribeAccount = void 0),
              (e.symbol =
                  (r = Me.zb.state.balance) == null ? void 0 : r.symbol),
              (e.amount =
                  (i = Me.zb.state.balance) == null ? void 0 : i.amount),
              (e.unsubscribeAccount = Me.zb.subscribe(function (t) {
                const n = t.balance
                  ;(e.symbol = n === null || void 0 === n ? void 0 : n.symbol),
                (e.amount = n === null || void 0 === n ? void 0 : n.amount)
              })),
              e
            )
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'disconnectedCallback',
                value: function () {
                  let e
                  (e = this.unsubscribeAccount) == null || e.call(this)
                }
              },
              {
                key: 'render',
                value: function () {
                  let e = '_._'
                  return (
                    this.amount === '0.0' && (e = 0),
                    this.amount &&
                        this.amount.length > 6 &&
                        (e = parseFloat(this.amount).toFixed(3)),
                    X(
                      si ||
                          (si = (0, f.Z)([
                            '<div><w3m-token-image symbol="',
                            '"></w3m-token-image><w3m-text variant="medium-normal" color="primary">',
                            ' ',
                            '</w3m-text></div>'
                          ])),
                      Na(this.symbol),
                      e,
                      this.symbol
                    )
                  )
                }
              }
            ]),
            n
          )
        })(xe)
        ;(bs.styles = [Ha.globalCss, ps]),
        ws([_e()], bs.prototype, 'symbol', 2),
        ws([_e()], bs.prototype, 'amount', 2),
        (bs = ws([Ze('w3m-balance')], bs))
        const ys = C(
          ci ||
              (ci = (0, f.Z)([
                ':host{all:initial}svg{width:28px;height:20px;margin:-1px 3px 0 -5px}svg path{fill:var(--w3m-color-fg-inverse)}button:disabled svg path{fill:var(--w3m-color-fg-3)}w3m-spinner{margin:0 10px 0 0}'
              ]))
        )
        const xs = Object.defineProperty
        const ks = Object.getOwnPropertyDescriptor
        const Cs = function (e, t, n, r) {
          for (
            var i, a = r > 1 ? void 0 : r ? ks(t, n) : t, o = e.length - 1;
            o >= 0;
            o--
          ) { (i = e[o]) && (a = (r ? i(t, n, a) : i(a)) || a) }
          return r && a && xs(t, n, a), a
        }
        var Zs = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            let e
            return (
              (0, u.Z)(this, n),
              ((e = t.call(this)).loading = !1),
              (e.label = 'Connect Wallet'),
              (e.icon = 'show'),
              (e.modalUnsub = void 0),
              ko.rejectStandaloneButtonComponent(),
              (e.modalUnsub = Me.jb.subscribe(function (t) {
                t.open && (e.loading = !0), t.open || (e.loading = !1)
              })),
              e
            )
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'disconnectedCallback',
                value: function () {
                  let e
                  (e = this.modalUnsub) == null || e.call(this)
                }
              },
              {
                key: 'iconTemplate',
                value: function () {
                  return this.icon === 'show' ? uo.WALLET_CONNECT_ICON : null
                }
              },
              {
                key: 'onClick',
                value: function () {
                  Me.zb.state.isConnected
                    ? this.onDisconnect()
                    : this.onConnect()
                }
              },
              {
                key: 'onConnect',
                value: function () {
                  this.loading = !0
                  const e = Me.t0.state.enableNetworkView
                  const t = Me.zb.state
                  const n = t.chains
                  const r = t.selectedChain
                  const i =
                        (n === null || void 0 === n ? void 0 : n.length) &&
                        n.length > 1
                  e || (i && !r)
                    ? Me.jb.open({ route: 'SelectNetwork' })
                    : Me.jb.open({ route: 'ConnectWallet' })
                }
              },
              {
                key: 'onDisconnect',
                value: function () {
                  Me.Id.client().disconnect(), Me.zb.resetAccount()
                }
              },
              {
                key: 'render',
                value: function () {
                  return X(
                    ui ||
                        (ui = (0, f.Z)([
                          '<w3m-button-big .disabled="',
                          '" @click="',
                          '">',
                          '</w3m-button-big>'
                        ])),
                    this.loading,
                    this.onClick,
                    this.loading
                      ? X(
                        di ||
                              (di = (0, f.Z)([
                                '<w3m-spinner></w3m-spinner><w3m-text variant="medium-normal" color="accent">Connecting...</w3m-text>'
                              ]))
                      )
                      : X(
                        hi ||
                              (hi = (0, f.Z)([
                                '',
                                '<w3m-text variant="medium-normal" color="inverse">',
                                '</w3m-text>'
                              ])),
                        this.iconTemplate(),
                        this.label
                      )
                  )
                }
              }
            ]),
            n
          )
        })(xe)
        ;(Zs.styles = [Ha.globalCss, ys]),
        Cs([_e()], Zs.prototype, 'loading', 2),
        Cs([Ie()], Zs.prototype, 'label', 2),
        Cs([Ie()], Zs.prototype, 'icon', 2),
        (Zs = Cs([Ze('w3m-connect-button')], Zs))
        const As = Object.defineProperty
        const Es = Object.getOwnPropertyDescriptor
        const Is = function (e, t, n, r) {
          for (
            var i, a = r > 1 ? void 0 : r ? Es(t, n) : t, o = e.length - 1;
            o >= 0;
            o--
          ) { (i = e[o]) && (a = (r ? i(t, n, a) : i(a)) || a) }
          return r && a && As(t, n, a), a
        }
        var _s = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            let e
            return (
              (0, u.Z)(this, n),
              ((e = t.call(this)).isConnected = !1),
              (e.label = 'Connect Wallet'),
              (e.icon = 'show'),
              (e.balance = 'hide'),
              (e.unsubscribeAccount = void 0),
              ko.rejectStandaloneButtonComponent(),
              (e.isConnected = Me.zb.state.isConnected),
              (e.unsubscribeAccount = Me.zb.subscribe(function (t) {
                const n = t.isConnected
                e.isConnected = n
              })),
              e
            )
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'disconnectedCallback',
                value: function () {
                  let e
                  (e = this.unsubscribeAccount) == null || e.call(this)
                }
              },
              {
                key: 'render',
                value: function () {
                  const e = Me.t0.state.enableAccountView
                  return this.isConnected && e
                    ? X(
                      vi ||
                            (vi = (0, f.Z)([
                              '<w3m-account-button balance="',
                              '"></w3m-account-button>'
                            ])),
                      Na(this.balance)
                    )
                    : X(
                      fi ||
                            (fi = (0, f.Z)([
                              '<w3m-connect-button label="',
                              '" icon="',
                              '"></w3m-connect-button>'
                            ])),
                      this.isConnected ? 'Disconnect' : Na(this.label),
                      Na(this.icon)
                    )
                }
              }
            ]),
            n
          )
        })(xe)
        Is([_e()], _s.prototype, 'isConnected', 2),
        Is([Ie()], _s.prototype, 'label', 2),
        Is([Ie()], _s.prototype, 'icon', 2),
        Is([Ie()], _s.prototype, 'balance', 2),
        (_s = Is([Ze('w3m-core-button')], _s))
        const Ms = function (e) {
          const t = Me.t0.state
          const n = t.explorerAllowList
          const r = t.explorerDenyList
          let i = (0, o.Z)(e)
          return (
            n &&
                (i = i.filter(function (e) {
                  return n.includes(e.id)
                })),
            r &&
                (i = i.filter(function (e) {
                  return !r.includes(e.id)
                })),
            i
          )
        }
        const Os = function (e) {
          let t = (0, o.Z)(e !== null && void 0 !== e ? e : [])
          if (window.ethereum) {
            const n = ko.getWalletName('')
            t = t.filter(function (e) {
              const t = e.name
              return !ko.caseSafeIncludes(t, n)
            })
          }
          return t
        }
        const Ss = function () {
          if (Me.zb.state.isStandalone) return []
          let e = Me.Id.client().getConnectors()
          return (
            !window.ethereum &&
                Me.zv.isMobile() &&
                (e = e.filter(function (e) {
                  const t = e.id
                  return t !== 'injected' && t !== vo.metaMask
                })),
            e
          )
        }
        const Ps = function (e, t) {
          let n = (0, o.Z)(e)
          if (t) {
            const r = ko.getRecentWallet()
              ;(n = n.filter(function (e) {
              return !e.values.includes(
                r === null || void 0 === r ? void 0 : r.name
              )
            })).splice(1, 0, t)
          }
          return n
        }
        const Ts = function (e) {
          if (Me.zb.state.isStandalone) return e
          const t = Me.Id.client()
            .getConnectors()
            .map(function (e) {
              return e.name.toUpperCase()
            })
          return e.filter(function (e) {
            const n = e.name
            return !t.includes(n.toUpperCase())
          })
        }
        const Ls = C(
          pi ||
              (pi = (0, f.Z)([
                '.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.w3m-desktop-title,.w3m-mobile-title{display:flex;align-items:center}.w3m-mobile-title{justify-content:space-between;margin-bottom:20px;margin-top:-10px}.w3m-desktop-title{margin-bottom:10px;padding:0 10px}.w3m-subtitle{display:flex;align-items:center}.w3m-subtitle:last-child path{fill:var(--w3m-color-fg-3)}.w3m-desktop-title svg,.w3m-mobile-title svg{margin-right:6px}.w3m-desktop-title path,.w3m-mobile-title path{fill:var(--w3m-color-fg-accent)}'
              ]))
        )
        const js = Object.defineProperty
        const Ns = Object.getOwnPropertyDescriptor
        let Rs = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            return (0, u.Z)(this, n), t.apply(this, arguments)
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'onDesktopWallet',
                value: function (e) {
                  Me.AV.push('DesktopConnector', { DesktopConnector: e })
                }
              },
              {
                key: 'onInjectedWallet',
                value: function () {
                  Me.AV.push('InjectedConnector')
                }
              },
              {
                key: 'onInstallConnector',
                value: function () {
                  Me.AV.push('InstallConnector', {
                    InstallConnector: {
                      id: 'metaMask',
                      name: 'MetaMask',
                      isMobile: !0,
                      url: 'https://metamask.io'
                    }
                  })
                }
              },
              {
                key: 'onConnectorWallet',
                value: (function () {
                  const e = (0, c.Z)(
                    (0, s.Z)().mark(function e (t) {
                      return (0, s.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!window.ethereum) {
                                  e.next = 9
                                  break
                                }
                                if (t !== 'injected' && t !== vo.metaMask) {
                                  e.next = 5
                                  break
                                }
                                this.onInjectedWallet(), (e.next = 7)
                                break
                              case 5:
                                return (
                                  (e.next = 7),
                                  ko.handleConnectorConnection(t)
                                )
                              case 7:
                                e.next = 10
                                break
                              case 9:
                                this.onInstallConnector()
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
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'desktopWalletsTemplate',
                value: function () {
                  const e = this
                  const t = Me.t0.state.desktopWallets
                  return t === null || void 0 === t
                    ? void 0
                    : t.map(function (t) {
                      const n = t.id
                      const r = t.name
                      const i = t.links
                      const a = i.universal
                      const o = i.native
                      return X(
                        mi ||
                              (mi = (0, f.Z)([
                                '<w3m-wallet-button walletId="',
                                '" name="',
                                '" .onClick="',
                                '"></w3m-wallet-button>'
                              ])),
                        n,
                        r,
                        function () {
                          return e.onDesktopWallet({
                            name: r,
                            walletId: n,
                            universal: a,
                            native: o
                          })
                        }
                      )
                    })
                }
              },
              {
                key: 'previewWalletsTemplate',
                value: function () {
                  const e = this
                  let t = Ms(Me.uc.state.previewWallets)
                  return (t = Ts(t)).map(function (t) {
                    const n = t.name
                    const r = t.desktop
                    const i = r.universal
                    const a = r.native
                    const o = t.homepage
                    const l = t.image_url
                    const s = t.id
                    return X(
                      gi ||
                          (gi = (0, f.Z)([
                            '<w3m-wallet-button src="',
                            '" name="',
                            '" .onClick="',
                            '"></w3m-wallet-button>'
                          ])),
                      l.lg,
                      n,
                      function () {
                        return e.onDesktopWallet({
                          walletId: s,
                          name: n,
                          native: a,
                          universal: i || o,
                          icon: l.lg
                        })
                      }
                    )
                  })
                }
              },
              {
                key: 'connectorWalletsTemplate',
                value: function () {
                  const e = this
                  return Ss().map(function (t) {
                    const n = t.id
                    const r = t.name
                    const i = t.ready
                    return X(
                      wi ||
                          (wi = (0, f.Z)([
                            '<w3m-wallet-button .installed="',
                            '" name="',
                            '" walletId="',
                            '" .onClick="',
                            '"></w3m-wallet-button>'
                          ])),
                      ['injected', 'metaMask'].includes(n) && i,
                      r,
                      n,
                      (0, c.Z)(
                        (0, s.Z)().mark(function t () {
                          return (0, s.Z)().wrap(function (t) {
                            for (;;) {
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return t.abrupt(
                                    'return',
                                    e.onConnectorWallet(n)
                                  )
                                case 1:
                                case 'end':
                                  return t.stop()
                              }
                            }
                          }, t)
                        })
                      )
                    )
                  })
                }
              },
              {
                key: 'recentWalletTemplate',
                value: function () {
                  const e = this
                  const t = ko.getRecentWallet()
                  if (t) {
                    const n = t.id
                    const r = t.name
                    const i = t.links
                    const a = t.image
                    return X(
                      bi ||
                          (bi = (0, f.Z)([
                            '<w3m-wallet-button .recent="',
                            '" name="',
                            '" walletId="',
                            '" src="',
                            '" .onClick="',
                            '"></w3m-wallet-button>'
                          ])),
                      !0,
                      r,
                      Na(n),
                      Na(a),
                      function () {
                        return e.onDesktopWallet({
                          name: r,
                          walletId: n,
                          universal:
                              i === null || void 0 === i ? void 0 : i.universal,
                          native:
                              i === null || void 0 === i ? void 0 : i.native,
                          icon: a
                        })
                      }
                    )
                  }
                }
              },
              {
                key: 'render',
                value: function () {
                  const e = Me.zb.state.standaloneUri
                  const t = this.desktopWalletsTemplate()
                  const n = this.previewWalletsTemplate()
                  const r = this.connectorWalletsTemplate()
                  const i = this.recentWalletTemplate()
                  const a = [].concat(
                    (0, o.Z)(t !== null && void 0 !== t ? t : []),
                    (0, o.Z)(n)
                  )
                  const l = [].concat((0, o.Z)(r), (0, o.Z)(a))
                  const s = Ps(l, i)
                  const c = Ps(a, i)
                  const u = e ? c : s
                  const d = u.length > 4
                  let h = []
                  h = d
                    ? u
                      .filter(function (e) {
                        return !e.values.includes(vo.coinbaseWallet)
                      })
                      .slice(0, 3)
                    : u
                  const v = Boolean(h.length)
                  return X(
                    yi ||
                        (yi = (0, f.Z)([
                          '<w3m-modal-header border="',
                          '" title="Connect your wallet" .onAction="',
                          '" .actionIcon="',
                          '"></w3m-modal-header><w3m-modal-content><div class="w3m-mobile-title"><div class="w3m-subtitle">',
                          '<w3m-text variant="small-normal" color="accent">Mobile</w3m-text></div><div class="w3m-subtitle">',
                          '<w3m-text variant="small-normal" color="secondary">Scan with your wallet</w3m-text></div></div><w3m-walletconnect-qr></w3m-walletconnect-qr></w3m-modal-content>',
                          ''
                        ])),
                    !0,
                    ko.handleUriCopy,
                    uo.COPY_ICON,
                    uo.MOBILE_ICON,
                    uo.SCAN_ICON,
                    v
                      ? X(
                        xi ||
                              (xi = (0, f.Z)([
                                '<w3m-modal-footer><div class="w3m-desktop-title">',
                                '<w3m-text variant="small-normal" color="accent">Desktop</w3m-text></div><div class="w3m-grid">',
                                ' ',
                                '</div></w3m-modal-footer>'
                              ])),
                        uo.DESKTOP_ICON,
                        h,
                        d
                          ? X(
                            ki ||
                                    (ki = (0, f.Z)([
                                      '<w3m-view-all-wallets-button></w3m-view-all-wallets-button>'
                                    ]))
                          )
                          : null
                      )
                      : null
                  )
                }
              }
            ]),
            n
          )
        })(xe)
        ;(Rs.styles = [Ha.globalCss, Ls]),
        (Rs = (function (e, t, n, r) {
          for (
            var i, a = r > 1 ? void 0 : r ? Ns(t, n) : t, o = e.length - 1;
            o >= 0;
            o--
          ) { (i = e[o]) && (a = (r ? i(t, n, a) : i(a)) || a) }
          return r && a && js(t, n, a), a
        })([Ze('w3m-desktop-wallet-selection')], Rs))
        const Ds = C(
          Ci ||
              (Ci = (0, f.Z)([
                'div{background-color:var(--w3m-color-bg-2);padding:10px 20px 15px 20px;border-top:1px solid var(--w3m-color-bg-3);text-align:center}a{color:var(--w3m-color-fg-accent);text-decoration:none;transition:opacity .2s ease-in-out}a:hover{opacity:.8}'
              ]))
        )
        const Bs = Object.defineProperty
        const zs = Object.getOwnPropertyDescriptor
        let Us = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            return (0, u.Z)(this, n), t.apply(this, arguments)
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'render',
                value: function () {
                  const e = Me.t0.state
                  const t = e.termsOfServiceUrl
                  const n = e.privacyPolicyUrl
                  return (t !== null && void 0 !== t ? t : n)
                    ? X(
                      Zi ||
                            (Zi = (0, f.Z)([
                              '<div><w3m-text variant="small-normal" color="secondary">By connecting your wallet, you agree to our<br>',
                              ' ',
                              ' ',
                              '</w3m-text></div>'
                            ])),
                      t
                        ? X(
                          Ai ||
                                  (Ai = (0, f.Z)([
                                    '<a href="',
                                    '" target="_blank" rel="noopener noreferrer">Terms of Service</a>'
                                  ])),
                          t
                        )
                        : null,
                      t && n ? 'and' : null,
                      n
                        ? X(
                          Ei ||
                                  (Ei = (0, f.Z)([
                                    '<a href="',
                                    '" target="_blank" rel="noopener noreferrer">Privacy Policy</a>'
                                  ])),
                          n
                        )
                        : null
                    )
                    : null
                }
              }
            ]),
            n
          )
        })(xe)
        ;(Us.styles = [Ha.globalCss, Ds]),
        (Us = (function (e, t, n, r) {
          for (
            var i, a = r > 1 ? void 0 : r ? zs(t, n) : t, o = e.length - 1;
            o >= 0;
            o--
          ) { (i = e[o]) && (a = (r ? i(t, n, a) : i(a)) || a) }
          return r && a && Bs(t, n, a), a
        })([Ze('w3m-legal-notice')], Us))
        const Ws = C(
          Ii ||
              (Ii = (0, f.Z)([
                '.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);margin:0 -10px;justify-content:space-between;row-gap:10px}'
              ]))
        )
        const $s = Object.defineProperty
        const Hs = Object.getOwnPropertyDescriptor
        let Vs = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            return (0, u.Z)(this, n), t.apply(this, arguments)
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'onGoToQrcode',
                value: function () {
                  Me.AV.push('Qrcode')
                }
              },
              {
                key: 'onConnectorWallet',
                value: (function () {
                  const e = (0, c.Z)(
                    (0, s.Z)().mark(function e (t) {
                      return (0, s.Z)().wrap(function (e) {
                        for (;;) {
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2), ko.handleConnectorConnection(t)
                              )
                            case 2:
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
              },
              {
                key: 'mobileWalletsTemplate',
                value: function () {
                  const e = Me.t0.state.mobileWallets
                  const t = Os(e)
                  if (t.length) {
                    return t.map(function (e) {
                      const t = e.id
                      const n = e.name
                      const r = e.links
                      const i = r.universal
                      const a = r.native
                      return X(
                        _i ||
                            (_i = (0, f.Z)([
                              '<w3m-wallet-button name="',
                              '" walletId="',
                              '" .onClick="',
                              '"></w3m-wallet-button>'
                            ])),
                        n,
                        t,
                        (0, c.Z)(
                          (0, s.Z)().mark(function e () {
                            return (0, s.Z)().wrap(function (e) {
                              for (;;) {
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return e.abrupt(
                                      'return',
                                      ko.handleMobileLinking({
                                        links: { native: a, universal: i },
                                        name: n,
                                        id: t
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
                      )
                    })
                  }
                }
              },
              {
                key: 'previewWalletsTemplate',
                value: function () {
                  const e = Me.uc.state.previewWallets
                  let t = Os(e)
                  return (
                    (t = Ms(t)),
                    (t = Ts(t)).map(function (e) {
                      const t = e.image_url
                      const n = e.name
                      const r = e.mobile
                      const i = r.native
                      const a = r.universal
                      const o = e.id
                      return X(
                        Mi ||
                            (Mi = (0, f.Z)([
                              '<w3m-wallet-button name="',
                              '" src="',
                              '" .onClick="',
                              '"></w3m-wallet-button>'
                            ])),
                        n,
                        t.lg,
                        (0, c.Z)(
                          (0, s.Z)().mark(function e () {
                            return (0, s.Z)().wrap(function (e) {
                              for (;;) {
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return e.abrupt(
                                      'return',
                                      ko.handleMobileLinking({
                                        links: { native: i, universal: a },
                                        name: n,
                                        id: o,
                                        image: t.lg
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
                      )
                    })
                  )
                }
              },
              {
                key: 'connectorWalletsTemplate',
                value: function () {
                  const e = this
                  let t = Ss()
                  return (
                    window.ethereum ||
                        (t = t.filter(function (e) {
                          const t = e.id
                          return t !== 'injected' && t !== vo.metaMask
                        })),
                    t.map(function (t) {
                      const n = t.name
                      const r = t.id
                      const i = t.ready
                      return X(
                        Oi ||
                            (Oi = (0, f.Z)([
                              '<w3m-wallet-button .installed="',
                              '" name="',
                              '" walletId="',
                              '" .onClick="',
                              '"></w3m-wallet-button>'
                            ])),
                        ['injected', 'metaMask'].includes(r) && i,
                        n,
                        r,
                        (0, c.Z)(
                          (0, s.Z)().mark(function t () {
                            return (0, s.Z)().wrap(function (t) {
                              for (;;) {
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return t.abrupt(
                                      'return',
                                      e.onConnectorWallet(r)
                                    )
                                  case 1:
                                  case 'end':
                                    return t.stop()
                                }
                              }
                            }, t)
                          })
                        )
                      )
                    })
                  )
                }
              },
              {
                key: 'recentWalletTemplate',
                value: function () {
                  const e = ko.getRecentWallet()
                  if (e) {
                    const t = e.id
                    const n = e.name
                    const r = e.links
                    const i = e.image
                    return X(
                      Si ||
                          (Si = (0, f.Z)([
                            '<w3m-wallet-button .recent="',
                            '" name="',
                            '" walletId="',
                            '" src="',
                            '" .onClick="',
                            '"></w3m-wallet-button>'
                          ])),
                      !0,
                      n,
                      Na(t),
                      Na(i),
                      (0, c.Z)(
                        (0, s.Z)().mark(function e () {
                          return (0, s.Z)().wrap(function (e) {
                            for (;;) {
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return e.abrupt(
                                    'return',
                                    ko.handleMobileLinking({
                                      name: n,
                                      id: t,
                                      links: r,
                                      image: i
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
                    )
                  }
                }
              },
              {
                key: 'render',
                value: function () {
                  const e = Me.zb.state.standaloneUri
                  const t = this.connectorWalletsTemplate()
                  const n = this.mobileWalletsTemplate()
                  const r = this.previewWalletsTemplate()
                  const i = this.recentWalletTemplate()
                  const a = n !== null && void 0 !== n ? n : r
                  const l = [].concat((0, o.Z)(t), (0, o.Z)(a))
                  const s = Ps(l, i)
                  const c = Ps(a, i)
                  const u = e ? c : s
                  const d = u.length > 8
                  let h = []
                  h = d
                    ? u
                      .filter(function (e) {
                        return !e.values.includes(vo.coinbaseWallet)
                      })
                      .slice(0, 7)
                    : u
                  const v = h.slice(0, 4)
                  const p = h.slice(4, 8)
                  const m = Boolean(h.length)
                  return X(
                    Pi ||
                        (Pi = (0, f.Z)([
                          '<w3m-modal-header title="Connect your wallet" .onAction="',
                          '" .actionIcon="',
                          '"></w3m-modal-header>',
                          ''
                        ])),
                    this.onGoToQrcode,
                    uo.QRCODE_ICON,
                    m
                      ? X(
                        Ti ||
                              (Ti = (0, f.Z)([
                                '<w3m-modal-content><div class="w3m-grid">',
                                ' ',
                                '</div></w3m-modal-content>'
                              ])),
                        v,
                        p.length
                          ? X(
                            Li || (Li = (0, f.Z)(['', ' ', ''])),
                            p,
                            d
                              ? X(
                                ji ||
                                          (ji = (0, f.Z)([
                                            '<w3m-view-all-wallets-button></w3m-view-all-wallets-button>'
                                          ]))
                              )
                              : null
                          )
                          : null
                      )
                      : null
                  )
                }
              }
            ]),
            n
          )
        })(xe)
        ;(Vs.styles = [Ha.globalCss, Ws]),
        (Vs = (function (e, t, n, r) {
          for (
            var i, a = r > 1 ? void 0 : r ? Hs(t, n) : t, o = e.length - 1;
            o >= 0;
            o--
          ) { (i = e[o]) && (a = (r ? i(t, n, a) : i(a)) || a) }
          return r && a && $s(t, n, a), a
        })([Ze('w3m-mobile-wallet-selection')], Vs))
        const Fs = C(
          Ni ||
              (Ni = (0, f.Z)([
                ':host{all:initial}.w3m-overlay{inset:0;position:fixed;z-index:var(--w3m-modal-z-index);overflow:hidden;display:flex;justify-content:center;align-items:center;background-color:rgba(0,0,0,.3);opacity:0;pointer-events:none}.w3m-open{pointer-events:auto}.w3m-container{position:relative;max-width:360px;width:100%;outline:0}.w3m-card{width:100%;position:relative;transform:translateY(5px);border-radius:30px;overflow:hidden;box-shadow:0 6px 14px -6px rgba(10,16,31,.12),0 10px 32px -4px rgba(10,16,31,.1),0 0 0 1px var(--w3m-color-overlay);background-color:var(--w3m-color-bg-1);color:var(--w3m-color-fg-1)}@media(max-width:600px){.w3m-container{max-width:440px}.w3m-card{border-radius:40px 40px 0 0}.w3m-overlay{align-items:flex-end}}@media(max-width:600px){.w3m-container{max-width:440px}.w3m-card{transform:translateY(5px);border-radius:40px 40px 0 0}.w3m-overlay{align-items:flex-end}}'
              ]))
        )
        const qs = Object.defineProperty
        const Gs = Object.getOwnPropertyDescriptor
        const Ks = function (e, t, n, r) {
          for (
            var i, a = r > 1 ? void 0 : r ? Gs(t, n) : t, o = e.length - 1;
            o >= 0;
            o--
          ) { (i = e[o]) && (a = (r ? i(t, n, a) : i(a)) || a) }
          return r && a && qs(t, n, a), a
        }
        var Ys = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            let e
            if (
              ((0, u.Z)(this, n),
              ((e = t.call(this)).open = !1),
              (e.preload = !0),
              (e.activeChainId = void 0),
              (e.unsubscribeModal = void 0),
              (e.unsubscribeConfig = void 0),
              (e.unwatchAccount = void 0),
              (e.unwatchNetwork = void 0),
              (e.abortController = void 0),
              Ha.setTheme(),
              (e.unsubscribeConfig = Me.t0.subscribe(Ha.setTheme)),
              (e.unsubscribeModal = Me.jb.subscribe(function (t) {
                t.open ? e.onOpenModalEvent() : e.onCloseModalEvent()
              })),
              !Me.zb.state.isStandalone)
            ) {
              Me.zb.getAccount()
              const r = Me.zb.getSelectedChain()
                ;(e.activeChainId = r === null || void 0 === r ? void 0 : r.id),
              e.fetchEnsProfile(),
              e.fetchBalance(),
              (e.unwatchNetwork = Me.Id.client().watchNetwork(function (t) {
                const n = t.chain
                n &&
                      e.activeChainId !== n.id &&
                      (Me.zb.setSelectedChain(n),
                      (e.activeChainId = n.id),
                      Me.zb.resetBalance(),
                      e.fetchBalance())
              })),
              (e.unwatchAccount = Me.Id.client().watchAccount(function (t) {
                const n = Me.zb.state.address
                t.address !== n &&
                      (e.fetchEnsProfile(t.address), e.fetchBalance(t.address)),
                Me.zb.setAddress(t.address),
                Me.zb.setIsConnected(t.isConnected)
              }))
            }
            return e.preloadModalData(), (0, a.Z)(e)
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'disconnectedCallback',
                value: function () {
                  let e, t, n, r
                  (e = this.unsubscribeModal) == null || e.call(this),
                  (t = this.unsubscribeConfig) == null || t.call(this),
                  (n = this.unwatchAccount) == null || n.call(this),
                  (r = this.unwatchNetwork) == null || r.call(this)
                }
              },
              {
                key: 'overlayEl',
                get: function () {
                  return ko.getShadowRootElement(this, '.w3m-overlay')
                }
              },
              {
                key: 'containerEl',
                get: function () {
                  return ko.getShadowRootElement(this, '.w3m-container')
                }
              },
              {
                key: 'fetchEnsProfile',
                value: (function () {
                  const e = (0, c.Z)(
                    (0, s.Z)().mark(function e (t) {
                      let n, r, i, a, o, l, c
                      return (0, s.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((e.prev = 0),
                                  !Me.t0.state.enableAccountView)
                                ) {
                                  e.next = 17
                                  break
                                }
                                if (
                                  (Me.zb.setProfileLoading(!0),
                                  (n =
                                      t !== null && void 0 !== t
                                        ? t
                                        : Me.zb.state.address),
                                  (r = Me.Id.client().getDefaultChain()),
                                  (i = r.id),
                                  !n || i !== 1)
                                ) {
                                  e.next = 17
                                  break
                                }
                                return (
                                  (e.next = 7),
                                  Promise.all([
                                    Me.Id.client().fetchEnsName({
                                      address: n,
                                      chainId: 1
                                    }),
                                    Me.Id.client().fetchEnsAvatar({
                                      address: n,
                                      chainId: 1
                                    })
                                  ])
                                )
                              case 7:
                                if (
                                  ((a = e.sent),
                                  (o = (0, p.Z)(a, 2)),
                                  (l = o[0]),
                                  (c = o[1]),
                                  (e.t0 = c),
                                  !e.t0)
                                ) {
                                  e.next = 15
                                  break
                                }
                                return (e.next = 15), ko.preloadImage(c)
                              case 15:
                                Me.zb.setProfileName(l),
                                Me.zb.setProfileAvatar(c)
                              case 17:
                                e.next = 22
                                break
                              case 19:
                                ;(e.prev = 19),
                                (e.t1 = e.catch(0)),
                                console.error(e.t1),
                                Me.Vs.openToast(
                                  ko.getErrorMessage(e.t1),
                                  'error'
                                )
                              case 22:
                                return (
                                  (e.prev = 22),
                                  Me.zb.setProfileLoading(!1),
                                  e.finish(22)
                                )
                              case 25:
                              case 'end':
                                return e.stop()
                            }
                          }
                        },
                        e,
                        null,
                        [[0, 19, 22, 25]]
                      )
                    })
                  )
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'fetchBalance',
                value: (function () {
                  const e = (0, c.Z)(
                    (0, s.Z)().mark(function e (t) {
                      let n, r
                      return (0, s.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((e.prev = 0),
                                  !Me.t0.state.enableAccountView)
                                ) {
                                  e.next = 9
                                  break
                                }
                                if (
                                  (Me.zb.setBalanceLoading(!0),
                                  !(n =
                                      t !== null && void 0 !== t
                                        ? t
                                        : Me.zb.state.address))
                                ) {
                                  e.next = 9
                                  break
                                }
                                return (
                                  (e.next = 7),
                                  Me.Id.client().fetchBalance({ address: n })
                                )
                              case 7:
                                ;(r = e.sent),
                                Me.zb.setBalance({
                                  amount: r.formatted,
                                  symbol: r.symbol
                                })
                              case 9:
                                e.next = 14
                                break
                              case 11:
                                ;(e.prev = 11),
                                (e.t0 = e.catch(0)),
                                console.error(e.t0),
                                Me.Vs.openToast(
                                  ko.getErrorMessage(e.t0),
                                  'error'
                                )
                              case 14:
                                return (
                                  (e.prev = 14),
                                  Me.zb.setBalanceLoading(!1),
                                  e.finish(14)
                                )
                              case 17:
                              case 'end':
                                return e.stop()
                            }
                          }
                        },
                        e,
                        null,
                        [[0, 11, 14, 17]]
                      )
                    })
                  )
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'toggleBodyScroll',
                value: function (e) {
                  if (document.querySelector('body')) {
                    if (e) {
                      const t = document.getElementById('w3m-styles')
                      t === null || void 0 === t || t.remove()
                    } else {
                      document.head.insertAdjacentHTML(
                        'beforeend',
                        '<style id="w3m-styles">html,body{touch-action:none;overflow:hidden;overscroll-behavior:contain;}</style>'
                      )
                    }
                  }
                }
              },
              {
                key: 'preloadExplorerData',
                value: (function () {
                  const e = (0, c.Z)(
                    (0, s.Z)().mark(function e () {
                      let t, n, r, i, a, l, c, u, d, h, v
                      return (0, s.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = Me.zb.state),
                                  (r = n.standaloneChains),
                                  (i = n.chains),
                                  (a = n.walletConnectVersion),
                                  (l =
                                      r === null || void 0 === r
                                        ? void 0
                                        : r.join(',')),
                                  (e.next = 3),
                                  Promise.all([
                                    Me.uc.getPreviewWallets({
                                      page: 1,
                                      entries: 10,
                                      chains: l,
                                      device: Me.zv.isMobile()
                                        ? 'mobile'
                                        : 'desktop',
                                      version: a
                                    }),
                                    Me.uc.getRecomendedWallets()
                                  ])
                                )
                              case 3:
                                return (
                                  Me.zb.setIsDataLoaded(!0),
                                  (c = Me.uc.state),
                                  (u = c.previewWallets),
                                  (d = c.recomendedWallets),
                                  (h =
                                      (t =
                                        i === null || void 0 === i
                                          ? void 0
                                          : i.map(function (e) {
                                            return ko.getChainIcon(e.id)
                                          })) !=
                                      null
                                        ? t
                                        : []),
                                  (v = []
                                    .concat((0, o.Z)(u), (0, o.Z)(d))
                                    .map(function (e) {
                                      return e.image_url.lg
                                    })),
                                  (e.next = 7),
                                  this.preloadExplorerImages(
                                    [].concat((0, o.Z)(h), (0, o.Z)(v))
                                  )
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
                key: 'preloadExplorerImages',
                value: (function () {
                  const e = (0, c.Z)(
                    (0, s.Z)().mark(function e (t) {
                      return (0, s.Z)().wrap(function (e) {
                        for (;;) {
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (((e.t0 = t.length), !e.t0)) {
                                e.next = 4
                                break
                              }
                              return (
                                (e.next = 4),
                                Promise.all(
                                  t.map(
                                    (function () {
                                      const e = (0, c.Z)(
                                        (0, s.Z)().mark(function e (t) {
                                          return (0, s.Z)().wrap(function (
                                            e
                                          ) {
                                            for (;;) {
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  return e.abrupt(
                                                    'return',
                                                    ko.preloadImage(t)
                                                  )
                                                case 1:
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
              },
              {
                key: 'preloadCustomImages',
                value: (function () {
                  const e = (0, c.Z)(
                    (0, s.Z)().mark(function e () {
                      let t
                      return (0, s.Z)().wrap(function (e) {
                        for (;;) {
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((t = ko.getCustomImageUrls()),
                                (e.t0 = t.length),
                                !e.t0)
                              ) {
                                e.next = 5
                                break
                              }
                              return (
                                (e.next = 5),
                                Promise.all(
                                  t.map(
                                    (function () {
                                      const e = (0, c.Z)(
                                        (0, s.Z)().mark(function e (t) {
                                          return (0, s.Z)().wrap(function (
                                            e
                                          ) {
                                            for (;;) {
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  return e.abrupt(
                                                    'return',
                                                    ko.preloadImage(t)
                                                  )
                                                case 1:
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
              },
              {
                key: 'preloadConnectorImages',
                value: (function () {
                  const e = (0, c.Z)(
                    (0, s.Z)().mark(function e () {
                      let t
                      return (0, s.Z)().wrap(function (e) {
                        for (;;) {
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (Me.zb.state.isStandalone) {
                                e.next = 6
                                break
                              }
                              if (
                                ((t = ko.getConnectorImageUrls()),
                                (e.t0 = t.length),
                                !e.t0)
                              ) {
                                e.next = 6
                                break
                              }
                              return (
                                (e.next = 6),
                                Promise.all(
                                  t.map(
                                    (function () {
                                      const e = (0, c.Z)(
                                        (0, s.Z)().mark(function e (t) {
                                          return (0, s.Z)().wrap(function (
                                            e
                                          ) {
                                            for (;;) {
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  return e.abrupt(
                                                    'return',
                                                    ko.preloadImage(t)
                                                  )
                                                case 1:
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
                            case 6:
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
                key: 'preloadModalData',
                value: (function () {
                  const e = (0, c.Z)(
                    (0, s.Z)().mark(function e () {
                      return (0, s.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((e.prev = 0), (e.t0 = this.preload), !e.t0)
                                ) {
                                  e.next = 6
                                  break
                                }
                                return (
                                  (this.preload = !1),
                                  (e.next = 6),
                                  Promise.all([
                                    this.preloadExplorerData(),
                                    this.preloadCustomImages(),
                                    this.preloadConnectorImages()
                                  ])
                                )
                              case 6:
                                e.next = 11
                                break
                              case 8:
                                ;(e.prev = 8),
                                (e.t1 = e.catch(0)),
                                console.error(e.t1),
                                Me.Vs.openToast(
                                  'Failed preloading',
                                  'error'
                                )
                              case 11:
                              case 'end':
                                return e.stop()
                            }
                          }
                        },
                        e,
                        this,
                        [[0, 8]]
                      )
                    })
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'onCloseModal',
                value: function (e) {
                  e.target === e.currentTarget && Me.jb.close()
                }
              },
              {
                key: 'onOpenModalEvent',
                value: (function () {
                  const e = (0, c.Z)(
                    (0, s.Z)().mark(function e () {
                      let t
                      return (0, s.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.preloadModalData()
                              case 2:
                                return (
                                  this.toggleBodyScroll(!1),
                                  (t = 0.2),
                                  (e.next = 6),
                                  Ft(
                                    this.containerEl,
                                    { y: 0 },
                                    { duration: 0 }
                                  ).finished
                                )
                              case 6:
                                Ft(
                                  this.overlayEl,
                                  { opacity: [0, 1] },
                                  { duration: 0.2, delay: t }
                                ),
                                Ft(
                                  this.containerEl,
                                  ko.isMobileAnimation()
                                    ? { y: ['50vh', 0] }
                                    : { scale: [0.98, 1] },
                                  {
                                    scale: {
                                      easing: ja({ velocity: 0.4 })
                                    },
                                    y: { easing: ja({ mass: 0.5 }) },
                                    delay: t
                                  }
                                ),
                                this.addKeyboardEvents(),
                                (this.open = !0)
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
                key: 'onCloseModalEvent',
                value: (function () {
                  const e = (0, c.Z)(
                    (0, s.Z)().mark(function e () {
                      return (0, s.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  this.toggleBodyScroll(!0),
                                  this.removeKeyboardEvents(),
                                  (e.next = 4),
                                  Promise.all([
                                    Ft(
                                      this.containerEl,
                                      ko.isMobileAnimation()
                                        ? { y: [0, '50vh'] }
                                        : { scale: [1, 0.98] },
                                      {
                                        scale: {
                                          easing: ja({ velocity: 0 })
                                        },
                                        y: { easing: ja({ mass: 0.5 }) }
                                      }
                                    ).finished,
                                    Ft(
                                      this.overlayEl,
                                      { opacity: [1, 0] },
                                      { duration: 0.2 }
                                    ).finished
                                  ])
                                )
                              case 4:
                                this.open = !1
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
                key: 'addKeyboardEvents',
                value: function () {
                  const e = this
                    ;(this.abortController = new AbortController()),
                  window.addEventListener(
                    'keydown',
                    function (t) {
                      let n
                      t.key === 'Escape'
                        ? Me.jb.close()
                        : t.key === 'Tab' &&
                              (((n = t.target) != null &&
                                n.tagName.includes('W3M-')) ||
                                e.containerEl.focus())
                    },
                    this.abortController
                  ),
                  this.containerEl.focus()
                }
              },
              {
                key: 'removeKeyboardEvents',
                value: function () {
                  let e
                  (e = this.abortController) == null || e.abort(),
                  (this.abortController = void 0)
                }
              },
              {
                key: 'render',
                value: function () {
                  const e = { 'w3m-overlay': !0, 'w3m-open': this.open }
                  return X(
                    Ri ||
                        (Ri = (0, f.Z)([
                          '<div id="w3m-modal" class="',
                          '" @click="',
                          '" role="alertdialog" aria-modal="true"><div class="w3m-container" tabindex="0">',
                          '</div></div>'
                        ])),
                    Pe(e),
                    this.onCloseModal,
                    this.open
                      ? X(
                        Di ||
                              (Di = (0, f.Z)([
                                '<w3m-modal-backcard></w3m-modal-backcard><div class="w3m-card"><w3m-modal-router></w3m-modal-router><w3m-modal-toast></w3m-modal-toast></div>'
                              ]))
                      )
                      : null
                  )
                }
              }
            ]),
            n
          )
        })(xe)
        ;(Ys.styles = [Ha.globalCss, Fs]),
        Ks([_e()], Ys.prototype, 'open', 2),
        Ks([_e()], Ys.prototype, 'preload', 2),
        Ks([_e()], Ys.prototype, 'activeChainId', 2),
        (Ys = Ks([Ze('w3m-modal')], Ys))
        const Js = C(
          Bi ||
              (Bi = (0, f.Z)([
                ':host{all:initial}w3m-network-image{margin-left:-6px;margin-right:6px;width:28px;height:28px}'
              ]))
        )
        const Xs = Object.defineProperty
        const Qs = Object.getOwnPropertyDescriptor
        const ec = function (e, t, n, r) {
          for (
            var i, a = r > 1 ? void 0 : r ? Qs(t, n) : t, o = e.length - 1;
            o >= 0;
            o--
          ) { (i = e[o]) && (a = (r ? i(t, n, a) : i(a)) || a) }
          return r && a && Xs(t, n, a), a
        }
        var tc = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            let e
              ;(0, u.Z)(this, n),
            ((e = t.call(this)).chainId = ''),
            (e.label = ''),
            (e.wrongNetwork = !1),
            (e.unsubscribeNetwork = void 0),
            ko.rejectStandaloneButtonComponent()
            const r = Me.zb.state.selectedChain
            return (
              e.onSetChainData(r),
              (e.unsubscribeNetwork = Me.zb.subscribe(function (t) {
                const n = t.selectedChain
                e.onSetChainData(n)
              })),
              e
            )
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'disconnectedCallback',
                value: function () {
                  let e
                  (e = this.unsubscribeNetwork) == null || e.call(this)
                }
              },
              {
                key: 'onSetChainData',
                value: function (e) {
                  if (e) {
                    const t = Me.zb.state.chains
                    const n =
                          t === null || void 0 === t
                            ? void 0
                            : t.map(function (e) {
                              return e.id
                            })
                      ;(this.chainId = e.id.toString()),
                    (this.wrongNetwork = !(n != null && n.includes(e.id))),
                    (this.label = this.wrongNetwork
                      ? 'Wrong Network'
                      : e.name)
                  }
                }
              },
              {
                key: 'onClick',
                value: function () {
                  Me.jb.open({ route: 'SelectNetwork' })
                }
              },
              {
                key: 'render',
                value: function () {
                  let e
                  const t = Me.zb.state.chains
                  const n = t && t.length > 1
                  return X(
                    zi ||
                        (zi = (0, f.Z)([
                          '<w3m-button-big @click="',
                          '" ?disabled="',
                          '"><w3m-network-image chainId="',
                          '"></w3m-network-image><w3m-text variant="medium-normal" color="inverse">',
                          '</w3m-text></w3m-button-big>'
                        ])),
                    this.onClick,
                    !n,
                    Na(this.chainId),
                    (e = this.label) != null && e.length
                      ? this.label
                      : 'Select Network'
                  )
                }
              }
            ]),
            n
          )
        })(xe)
        ;(tc.styles = [Ha.globalCss, Js]),
        ec([_e()], tc.prototype, 'chainId', 2),
        ec([_e()], tc.prototype, 'label', 2),
        ec([_e()], tc.prototype, 'wrongNetwork', 2),
        (tc = ec([Ze('w3m-network-switch')], tc))
        const nc = C(
          Ui ||
              (Ui = (0, f.Z)([
                'button{display:flex;flex-direction:column;padding:5px 10px;border-radius:10px;transition:background-color .2s ease;height:100%;justify-content:flex-start}.w3m-icons{width:60px;height:60px;display:flex;flex-wrap:wrap;padding:7px;border-radius:15px;justify-content:space-between;align-items:center;margin-bottom:5px;background-color:var(--w3m-color-bg-2);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay)}button:hover{background-color:var(--w3m-color-overlay)}.w3m-icons img{width:21px;height:21px;object-fit:cover;object-position:center;border-radius:8px;border:1px solid var(--w3m-color-overlay)}.w3m-icons svg{width:21px;height:21px}.w3m-icons img:nth-child(1),.w3m-icons img:nth-child(2),.w3m-icons svg:nth-child(1),.w3m-icons svg:nth-child(2){margin-bottom:4px}w3m-text{width:100%;text-align:center}#wallet-placeholder-fill{fill:var(--w3m-color-bg-3)}#wallet-placeholder-dash{stroke:var(--w3m-color-overlay)}'
              ]))
        )
        const rc = Object.defineProperty
        const ic = Object.getOwnPropertyDescriptor
        let ac = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            return (0, u.Z)(this, n), t.apply(this, arguments)
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'onClick',
                value: function () {
                  Me.AV.push('WalletExplorer')
                }
              },
              {
                key: 'render',
                value: function () {
                  const e = Me.uc.state.previewWallets
                  const t = ko.getCustomWallets()
                  const n = []
                    .concat((0, o.Z)(e), (0, o.Z)(t))
                    .reverse()
                    .slice(0, 4)
                  return X(
                    Wi ||
                        (Wi = (0, f.Z)([
                          '<button @click="',
                          '"><div class="w3m-icons">',
                          '</div><w3m-text variant="xsmall-normal">View All</w3m-text></button>'
                        ])),
                    this.onClick,
                    n.map(function (e) {
                      let t
                      const n = (t = e.image_url) == null ? void 0 : t.lg
                      if (n) {
                        return X(
                          $i || ($i = (0, f.Z)(['<img src="', '">'])),
                          n
                        )
                      }
                      const r = ko.getWalletId(e.id)
                      const i = ko.getWalletIcon(r)
                      return i
                        ? X(Hi || (Hi = (0, f.Z)(['<img src="', '">'])), i)
                        : uo.WALLET_PLACEHOLDER
                    })
                  )
                }
              }
            ]),
            n
          )
        })(xe)
        ;(ac.styles = [Ha.globalCss, nc]),
        (ac = (function (e, t, n, r) {
          for (
            var i, a = r > 1 ? void 0 : r ? ic(t, n) : t, o = e.length - 1;
            o >= 0;
            o--
          ) { (i = e[o]) && (a = (r ? i(t, n, a) : i(a)) || a) }
          return r && a && rc(t, n, a), a
        })([Ze('w3m-view-all-wallets-button')], ac))
        const oc = C(
          Vi ||
              (Vi = (0, f.Z)([
                '.w3m-qr-container{width:100%;display:flex;justify-content:center;align-items:center;aspect-ratio:1/1}'
              ]))
        )
        const lc = Object.defineProperty
        const sc = Object.getOwnPropertyDescriptor
        const cc = function (e, t, n, r) {
          for (
            var i, a = r > 1 ? void 0 : r ? sc(t, n) : t, o = e.length - 1;
            o >= 0;
            o--
          ) { (i = e[o]) && (a = (r ? i(t, n, a) : i(a)) || a) }
          return r && a && lc(t, n, a), a
        }
        let uc = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            let e
            return (
              (0, u.Z)(this, n),
              ((e = t.call(this)).uri = ''),
              e.createConnectionAndWait(),
              e
            )
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'overlayEl',
                get: function () {
                  return ko.getShadowRootElement(this, '.w3m-qr-container')
                }
              },
              {
                key: 'createConnectionAndWait',
                value: (function () {
                  const e = (0, c.Z)(
                    (0, s.Z)().mark(function e () {
                      let t
                      let n
                      let r
                      const i = this
                      const a = arguments
                      return (0, s.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((t =
                                      a.length > 0 && void 0 !== a[0]
                                        ? a[0]
                                        : 0),
                                  (e.prev = 1),
                                  !(r = Me.zb.state.standaloneUri))
                                ) {
                                  e.next = 7
                                  break
                                }
                                setTimeout(function () {
                                  return (i.uri = r)
                                }, 0),
                                (e.next = 10)
                                break
                              case 7:
                                return (
                                  (e.next = 9),
                                  Me.Id.client().connectWalletConnect(
                                    function (e) {
                                      return (i.uri = e)
                                    },
                                    (n = Me.zb.state.selectedChain) == null
                                      ? void 0
                                      : n.id
                                  )
                                )
                              case 9:
                                Me.jb.close()
                              case 10:
                                e.next = 15
                                break
                              case 12:
                                ;(e.prev = 12),
                                (e.t0 = e.catch(1)),
                                console.error(e.t0),
                                Me.Vs.openToast(
                                  'Connection request declined',
                                  'error'
                                ),
                                t < 2 && this.createConnectionAndWait(t + 1)
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
                  return function () {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'render',
                value: function () {
                  return X(
                    Fi ||
                        (Fi = (0, f.Z)([
                          '<div class="w3m-qr-container">',
                          '</div>'
                        ])),
                    this.uri
                      ? X(
                        qi ||
                              (qi = (0, f.Z)([
                                '<w3m-qrcode size="',
                                '" uri="',
                                '"></w3m-qrcode>'
                              ])),
                        this.overlayEl.offsetWidth,
                        this.uri
                      )
                      : X(
                        Gi ||
                              (Gi = (0, f.Z)(['<w3m-spinner></w3m-spinner>']))
                      )
                  )
                }
              }
            ]),
            n
          )
        })(xe)
        ;(uc.styles = [Ha.globalCss, oc]),
        cc([_e()], uc.prototype, 'uri', 2),
        (uc = cc([Ze('w3m-walletconnect-qr')], uc))
        const dc = C(
          Ki ||
              (Ki = (0, f.Z)([
                ".w3m-profile{display:flex;justify-content:space-between;align-items:flex-start;padding-top:20px}.w3m-connection-badge{background-color:var(--w3m-color-bg-2);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);padding:6px 10px 6px 26px;position:relative;border-radius:28px}.w3m-connection-badge::before{content:'';position:absolute;width:10px;height:10px;left:10px;background-color:var(--w3m-color-success);border-radius:50%;top:50%;margin-top:-5px;box-shadow:0 1px 4px 1px var(--w3m-color-success),inset 0 0 0 1px var(--w3m-color-overlay)}.w3m-footer{display:flex;justify-content:space-between}w3m-address-text{margin-top:10px;display:block}.w3m-balance{border-top:1px solid var(--w3m-color-bg-2);padding:11px 20px}"
              ]))
        )
        const hc = Object.defineProperty
        const vc = Object.getOwnPropertyDescriptor
        let fc = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            return (0, u.Z)(this, n), t.apply(this, arguments)
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'onDisconnect',
                value: function () {
                  Me.jb.close(),
                  Me.Id.client().disconnect(),
                  Me.zb.resetAccount()
                }
              },
              {
                key: 'onCopyAddress',
                value: (function () {
                  const e = (0, c.Z)(
                    (0, s.Z)().mark(function e () {
                      let t
                      return (0, s.Z)().wrap(function (e) {
                        for (;;) {
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                navigator.clipboard.writeText(
                                  (t = Me.zb.state.address) != null ? t : ''
                                )
                              )
                            case 2:
                              Me.Vs.openToast('Address copied', 'success')
                            case 3:
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
                key: 'render',
                value: function () {
                  return X(
                    Yi ||
                        (Yi = (0, f.Z)([
                          '<w3m-modal-content><div class="w3m-profile"><div class="w3m-info"><w3m-avatar size="medium"></w3m-avatar><w3m-address-text variant="modal"></w3m-address-text></div><div class="w3m-connection-badge"><w3m-text variant="small-normal" color="secondary">Connected</w3m-text></div></div></w3m-modal-content><div class="w3m-balance"><w3m-balance></w3m-balance></div><w3m-modal-footer><div class="w3m-footer"><w3m-account-network-button></w3m-account-network-button><w3m-box-button label="Copy Address" .onClick="',
                          '" .icon="',
                          '"></w3m-box-button><w3m-box-button label="Disconnect" .onClick="',
                          '" .icon="',
                          '"></w3m-box-button></div></w3m-modal-footer>'
                        ])),
                    this.onCopyAddress,
                    uo.ACCOUNT_COPY,
                    this.onDisconnect,
                    uo.ACCOUNT_DISCONNECT
                  )
                }
              }
            ]),
            n
          )
        })(xe)
        ;(fc.styles = [Ha.globalCss, dc]),
        (fc = (function (e, t, n, r) {
          for (
            var i, a = r > 1 ? void 0 : r ? vc(t, n) : t, o = e.length - 1;
            o >= 0;
            o--
          ) { (i = e[o]) && (a = (r ? i(t, n, a) : i(a)) || a) }
          return r && a && hc(t, n, a), a
        })([Ze('w3m-account-view')], fc))
        const pc = Object.defineProperty
        const mc = Object.getOwnPropertyDescriptor
        let gc = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            return (0, u.Z)(this, n), t.apply(this, arguments)
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'viewTemplate',
                value: function () {
                  return Me.zv.isAndroid()
                    ? X(
                      Ji ||
                            (Ji = (0, f.Z)([
                              '<w3m-android-wallet-selection></w3m-android-wallet-selection>'
                            ]))
                    )
                    : Me.zv.isMobile()
                      ? X(
                        Xi ||
                              (Xi = (0, f.Z)([
                                '<w3m-mobile-wallet-selection></w3m-mobile-wallet-selection>'
                              ]))
                      )
                      : X(
                        Qi ||
                              (Qi = (0, f.Z)([
                                '<w3m-desktop-wallet-selection></w3m-desktop-wallet-selection>'
                              ]))
                      )
                }
              },
              {
                key: 'render',
                value: function () {
                  return X(
                    ea ||
                        (ea = (0, f.Z)([
                          '',
                          '<w3m-legal-notice></w3m-legal-notice>'
                        ])),
                    this.viewTemplate()
                  )
                }
              }
            ]),
            n
          )
        })(xe)
        ;(gc.styles = [Ha.globalCss]),
        (gc = (function (e, t, n, r) {
          for (
            var i, a = r > 1 ? void 0 : r ? mc(t, n) : t, o = e.length - 1;
            o >= 0;
            o--
          ) { (i = e[o]) && (a = (r ? i(t, n, a) : i(a)) || a) }
          return r && a && pc(t, n, a), a
        })([Ze('w3m-connect-wallet-view')], gc))
        const wc = C(
          ta ||
              (ta = (0, f.Z)([
                '.w3m-wrapper{display:flex;align-items:center;justify-content:center;width:100%;aspect-ratio:1/1;flex-direction:column}.w3m-connecting-title{display:flex;align-items:center;justify-content:center;margin-bottom:16px}w3m-spinner{margin-right:10px}w3m-wallet-image{border-radius:15px;width:25%;aspect-ratio:1/1;margin-bottom:20px}.w3m-install-actions{display:flex}.w3m-install-actions w3m-button{margin:0 5px;opacity:1}'
              ]))
        )
        const bc = Object.defineProperty
        const yc = Object.getOwnPropertyDescriptor
        const xc = function (e, t, n, r) {
          for (
            var i, a = r > 1 ? void 0 : r ? yc(t, n) : t, o = e.length - 1;
            o >= 0;
            o--
          ) { (i = e[o]) && (a = (r ? i(t, n, a) : i(a)) || a) }
          return r && a && bc(t, n, a), a
        }
        let kc = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            let e
            return (
              (0, u.Z)(this, n),
              ((e = t.call(this)).uri = ''),
              e.createConnectionAndWait(),
              e
            )
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'getRouterData',
                value: function () {
                  let e
                  const t =
                        (e = Me.AV.state.data) == null
                          ? void 0
                          : e.DesktopConnector
                  if (!t) throw new Error('Missing router data')
                  return t
                }
              },
              {
                key: 'onFormatAndRedirect',
                value: function (e) {
                  const t = this.getRouterData()
                  const n = t.native
                  const r = t.universal
                  const i = t.name
                  if (n) {
                    const a = Me.zv.formatNativeUrl(n, e, i)
                    Me.zv.openHref(a)
                  } else if (r) {
                    const o = Me.zv.formatUniversalUrl(r, e, i)
                    Me.zv.openHref(o, '_blank')
                  }
                }
              },
              {
                key: 'createConnectionAndWait',
                value: (function () {
                  const e = (0, c.Z)(
                    (0, s.Z)().mark(function e () {
                      let t
                      let n
                      let r
                      let i
                      let a
                      let o
                      let l
                      let c
                      let u
                      let d
                      const h = this
                      const v = arguments
                      return (0, s.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((t =
                                      v.length > 0 && void 0 !== v[0]
                                        ? v[0]
                                        : 0),
                                  (r = Me.zb.state.standaloneUri),
                                  (i = this.getRouterData()),
                                  (a = i.name),
                                  (o = i.walletId),
                                  (l = i.native),
                                  (c = i.universal),
                                  (u = i.icon),
                                  (d = {
                                    name: a,
                                    id: o,
                                    links: { native: l, universal: c },
                                    image: u
                                  }),
                                  !r)
                                ) {
                                  e.next = 6
                                  break
                                }
                                ko.setRecentWallet(d),
                                this.onFormatAndRedirect(r),
                                (e.next = 16)
                                break
                              case 6:
                                return (
                                  (e.prev = 6),
                                  (e.next = 9),
                                  Me.Id.client().connectWalletConnect(
                                    function (e) {
                                      ;(h.uri = e), h.onFormatAndRedirect(e)
                                    },
                                    (n = Me.zb.state.selectedChain) == null
                                      ? void 0
                                      : n.id
                                  )
                                )
                              case 9:
                                ko.setRecentWallet(d),
                                Me.jb.close(),
                                (e.next = 16)
                                break
                              case 13:
                                ;(e.prev = 13),
                                (e.t0 = e.catch(6)),
                                console.error(e.t0),
                                Me.Vs.openToast(
                                  'Connection request declined',
                                  'error'
                                ),
                                t < 2 && this.createConnectionAndWait(t + 1)
                              case 16:
                              case 'end':
                                return e.stop()
                            }
                          }
                        },
                        e,
                        this,
                        [[6, 13]]
                      )
                    })
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'onConnectWithMobile',
                value: function () {
                  Me.AV.push('Qrcode')
                }
              },
              {
                key: 'onGoToWallet',
                value: function () {
                  const e = this.getRouterData()
                  const t = e.universal
                  const n = e.name
                  if (t) {
                    const r = Me.zv.formatUniversalUrl(t, this.uri, n)
                    Me.zv.openHref(r, '_blank')
                  }
                }
              },
              {
                key: 'render',
                value: function () {
                  const e = this
                  const t = this.getRouterData()
                  const n = t.name
                  const r = t.icon
                  const i = t.universal
                  const a = t.walletId
                  const o = ko.getWalletName(n)
                  return X(
                    na ||
                        (na = (0, f.Z)([
                          '<w3m-modal-header title="',
                          '"></w3m-modal-header><w3m-modal-content><div class="w3m-wrapper">',
                          '<div class="w3m-connecting-title"><w3m-spinner></w3m-spinner><w3m-text variant="large-bold" color="secondary">',
                          '</w3m-text></div><div class="w3m-install-actions"><w3m-button .onClick="',
                          '" .iconRight="',
                          '">Retry</w3m-button>',
                          '</div></div></w3m-modal-content>'
                        ])),
                    o,
                    r
                      ? X(
                        ra ||
                              (ra = (0, f.Z)([
                                '<w3m-wallet-image src="',
                                '" size="lg"></w3m-wallet-image>'
                              ])),
                        r
                      )
                      : X(
                        ia ||
                              (ia = (0, f.Z)([
                                '<w3m-wallet-image size="lg" walletid="',
                                '"></w3m-wallet-image>'
                              ])),
                        Na(a)
                      ),
                    'Continue in '.concat(o, '...'),
                    (0, c.Z)(
                      (0, s.Z)().mark(function t () {
                        return (0, s.Z)().wrap(function (t) {
                          for (;;) {
                            switch ((t.prev = t.next)) {
                              case 0:
                                return t.abrupt(
                                  'return',
                                  e.createConnectionAndWait()
                                )
                              case 1:
                              case 'end':
                                return t.stop()
                            }
                          }
                        }, t)
                      })
                    ),
                    uo.RETRY_ICON,
                    i
                      ? X(
                        aa ||
                              (aa = (0, f.Z)([
                                '<w3m-button .onClick="',
                                '" .iconLeft="',
                                '">Go to Wallet</w3m-button>'
                              ])),
                        this.onGoToWallet.bind(this),
                        uo.ARROW_UP_RIGHT_ICON
                      )
                      : X(
                        oa ||
                              (oa = (0, f.Z)([
                                '<w3m-button .onClick="',
                                '" .iconLeft="',
                                '">Connect with Mobile</w3m-button>'
                              ])),
                        this.onConnectWithMobile,
                        uo.MOBILE_ICON
                      )
                  )
                }
              }
            ]),
            n
          )
        })(xe)
        ;(kc.styles = [Ha.globalCss, wc]),
        xc([_e()], kc.prototype, 'uri', 2),
        (kc = xc([Ze('w3m-desktop-connector-view')], kc))
        const Cc = C(
          la ||
              (la = (0, f.Z)([
                '.w3m-info-text{margin:5px 0 15px;max-width:320px;text-align:center}.w3m-wallet-item{margin:0 -20px 0 0;padding-right:20px;display:flex;align-items:center;border-bottom:1px solid var(--w3m-color-bg-2)}.w3m-wallet-item:last-child{margin-bottom:-20px;border-bottom:0}.w3m-wallet-content{margin-left:20px;height:60px;display:flex;flex:1;align-items:center;justify-content:space-between}.w3m-footer-actions{display:flex;flex-direction:column;align-items:center;padding:20px 0;border-top:1px solid var(--w3m-color-bg-2)}w3m-wallet-image{display:block;width:40px;height:40px;border-radius:10px}'
              ]))
        )
        const Zc = Object.defineProperty
        const Ac = Object.getOwnPropertyDescriptor
        let Ec = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            let e
            return (
              (0, u.Z)(this, n),
              ((e = t.apply(this, arguments)).explorerUrl =
                  'https://explorer.walletconnect.com/'),
              e
            )
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'onGet',
                value: function (e) {
                  Me.zv.openHref(e, '_blank')
                }
              },
              {
                key: 'onExplore',
                value: function () {
                  Me.zv.openHref(this.explorerUrl, '_blank')
                }
              },
              {
                key: 'render',
                value: function () {
                  const e = this
                  const t = Me.uc.state.recomendedWallets
                  const n = ko.getCustomWallets().slice(0, 6)
                  const r = t.length
                  const i = n.length
                  return X(
                    sa ||
                        (sa = (0, f.Z)([
                          '<w3m-modal-header title="Get a wallet"></w3m-modal-header><w3m-modal-content>',
                          ' ',
                          '</w3m-modal-content><div class="w3m-footer-actions"><w3m-text variant="medium-normal">Not what you\'re looking for?</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">With hundreds of wallets out there, there\'s something for everyone</w3m-text><w3m-button .onClick="',
                          '" .iconRight="',
                          '">Explore Wallets</w3m-button></div>'
                        ])),
                    r
                      ? t.map(function (t) {
                        const n = t.name
                        const r = t.image_url
                        const i = t.homepage
                        return X(
                          ca ||
                                (ca = (0, f.Z)([
                                  '<div class="w3m-wallet-item"><w3m-wallet-image src="',
                                  '"></w3m-wallet-image><div class="w3m-wallet-content"><w3m-text variant="medium-normal">',
                                  '</w3m-text><w3m-button .iconRight="',
                                  '" .onClick="',
                                  '">Get</w3m-button></div></div>'
                                ])),
                          r.lg,
                          n,
                          uo.ARROW_RIGHT_ICON,
                          function () {
                            return e.onGet(i)
                          }
                        )
                      })
                      : null,
                    i
                      ? n.map(function (t) {
                        const n = t.name
                        const r = t.id
                        const i = t.links
                        return X(
                          ua ||
                                (ua = (0, f.Z)([
                                  '<div class="w3m-wallet-item"><w3m-wallet-image walletId="',
                                  '"></w3m-wallet-image><div class="w3m-wallet-content"><w3m-text variant="medium-normal">',
                                  '</w3m-text><w3m-button .iconRight="',
                                  '" .onClick="',
                                  '">Get</w3m-button></div></div>'
                                ])),
                          r,
                          n,
                          uo.ARROW_RIGHT_ICON,
                          function () {
                            return e.onGet(i.universal)
                          }
                        )
                      })
                      : null,
                    this.onExplore.bind(this),
                    uo.ARROW_UP_RIGHT_ICON
                  )
                }
              }
            ]),
            n
          )
        })(xe)
        ;(Ec.styles = [Ha.globalCss, Cc]),
        (Ec = (function (e, t, n, r) {
          for (
            var i, a = r > 1 ? void 0 : r ? Ac(t, n) : t, o = e.length - 1;
            o >= 0;
            o--
          ) { (i = e[o]) && (a = (r ? i(t, n, a) : i(a)) || a) }
          return r && a && Zc(t, n, a), a
        })([Ze('w3m-get-wallet-view')], Ec))
        const Ic = C(
          da ||
              (da = (0, f.Z)([
                '.w3m-footer-actions{display:flex;justify-content:center}.w3m-footer-actions w3m-button{margin:0 5px}.w3m-info-container{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-bottom:20px}.w3m-info-container:last-child{margin-bottom:0}.w3m-info-text{margin-top:5px;text-align:center}.w3m-images svg{margin:0 2px 5px;width:55px;height:55px}.help-img-highlight{stroke:var(--w3m-color-overlay)}'
              ]))
        )
        const _c = Object.defineProperty
        const Mc = Object.getOwnPropertyDescriptor
        let Oc = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            let e
            return (
              (0, u.Z)(this, n),
              ((e = t.apply(this, arguments)).learnUrl =
                  'https://ethereum.org/en/wallets/'),
              e
            )
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'onGet',
                value: function () {
                  Me.AV.push('GetWallet')
                }
              },
              {
                key: 'onLearnMore',
                value: function () {
                  Me.zv.openHref(this.learnUrl, '_blank')
                }
              },
              {
                key: 'render',
                value: function () {
                  return X(
                    ha ||
                        (ha = (0, f.Z)([
                          '<w3m-modal-header title="What is a wallet?"></w3m-modal-header><w3m-modal-content><div class="w3m-info-container"><div class="w3m-images">',
                          ' ',
                          ' ',
                          '</div><w3m-text variant="medium-normal">A home for your digital assets</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs.</w3m-text></div><div class="w3m-info-container"><div class="w3m-images">',
                          ' ',
                          ' ',
                          '</div><w3m-text variant="medium-normal">One login for all of web3</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">Log in to any app by connecting your wallet. Say goodbye to countless passwords!</w3m-text></div><div class="w3m-info-container"><div class="w3m-images">',
                          ' ',
                          ' ',
                          '</div><w3m-text variant="medium-normal">Your gateway to a new web</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more.</w3m-text></div><div class="w3m-footer-actions"><w3m-button .onClick="',
                          '" .iconLeft="',
                          '">Get a Wallet</w3m-button><w3m-button .onClick="',
                          '" .iconRight="',
                          '">Learn More</w3m-button></div></w3m-modal-content>'
                        ])),
                    uo.HELP_CHART_IMG,
                    uo.HELP_PAINTING_IMG,
                    uo.HELP_ETH_IMG,
                    uo.HELP_KEY_IMG,
                    uo.HELP_USER_IMG,
                    uo.HELP_LOCK_IMG,
                    uo.HELP_COMPAS_IMG,
                    uo.HELP_NOUN_IMG,
                    uo.HELP_DAO_IMG,
                    this.onGet.bind(this),
                    uo.WALLET_ICON,
                    this.onLearnMore.bind(this),
                    uo.ARROW_UP_RIGHT_ICON
                  )
                }
              }
            ]),
            n
          )
        })(xe)
        ;(Oc.styles = [Ha.globalCss, Ic]),
        (Oc = (function (e, t, n, r) {
          for (
            var i, a = r > 1 ? void 0 : r ? Mc(t, n) : t, o = e.length - 1;
            o >= 0;
            o--
          ) { (i = e[o]) && (a = (r ? i(t, n, a) : i(a)) || a) }
          return r && a && _c(t, n, a), a
        })([Ze('w3m-help-view')], Oc))
        const Sc = C(
          va ||
              (va = (0, f.Z)([
                '.w3m-injected-wrapper{display:flex;align-items:center;justify-content:center;width:100%;aspect-ratio:1/1;flex-direction:column}.w3m-connecting-title{display:flex;align-items:center;justify-content:center;margin-bottom:20px}w3m-spinner{margin-right:10px}w3m-wallet-image{border-radius:15px;width:25%;aspect-ratio:1/1;margin-bottom:20px}w3m-button{opacity:0}.w3m-injected-error w3m-button{opacity:1}'
              ]))
        )
        const Pc = Object.defineProperty
        const Tc = Object.getOwnPropertyDescriptor
        const Lc = function (e, t, n, r) {
          for (
            var i, a = r > 1 ? void 0 : r ? Tc(t, n) : t, o = e.length - 1;
            o >= 0;
            o--
          ) { (i = e[o]) && (a = (r ? i(t, n, a) : i(a)) || a) }
          return r && a && Pc(t, n, a), a
        }
        let jc = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            let e
            return (
              (0, u.Z)(this, n),
              ((e = t.call(this)).connecting = !0),
              (e.error = !1),
              (e.connector = Me.Id.client().getConnectorById('injected')),
              e.onConnect(),
              e
            )
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'onConnect',
                value: (function () {
                  const e = (0, c.Z)(
                    (0, s.Z)().mark(function e () {
                      let t
                      const n = this
                      return (0, s.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((t = this.connector.ready),
                                  (e.t0 = t),
                                  !e.t0)
                                ) {
                                  e.next = 7
                                  break
                                }
                                return (
                                  (this.error = !1),
                                  (this.connecting = !0),
                                  (e.next = 7),
                                  ko.handleConnectorConnection(
                                    'injected',
                                    function () {
                                      ;(n.error = !0), (n.connecting = !1)
                                    }
                                  )
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
                key: 'render',
                value: function () {
                  const e = ko.getWalletName(this.connector.name)
                  const t = ko.getWalletId(this.connector.id)
                  const n = {
                    'w3m-injected-wrapper': !0,
                    'w3m-injected-error': this.error
                  }
                  return X(
                    fa ||
                        (fa = (0, f.Z)([
                          '<w3m-modal-header title="',
                          '"></w3m-modal-header><w3m-modal-content><div class="',
                          '"><w3m-wallet-image walletId="',
                          '" size="lg"></w3m-wallet-image><div class="w3m-connecting-title">',
                          '<w3m-text variant="large-bold" color="',
                          '">',
                          '</w3m-text></div><w3m-button .onClick="',
                          '" .disabled="',
                          '" .iconRight="',
                          '">Try Again</w3m-button></div></w3m-modal-content>'
                        ])),
                    e,
                    Pe(n),
                    t,
                    this.connecting
                      ? X(
                        pa ||
                              (pa = (0, f.Z)(['<w3m-spinner></w3m-spinner>']))
                      )
                      : null,
                    this.error ? 'error' : 'secondary',
                    this.error
                      ? 'Connection declined'
                      : 'Continue in '.concat(e, '...'),
                    this.onConnect.bind(this),
                    !this.error,
                    uo.RETRY_ICON
                  )
                }
              }
            ]),
            n
          )
        })(xe)
        ;(jc.styles = [Ha.globalCss, Sc]),
        Lc([_e()], jc.prototype, 'connecting', 2),
        Lc([_e()], jc.prototype, 'error', 2),
        (jc = Lc([Ze('w3m-injected-connector-view')], jc))
        const Nc = C(
          ma ||
              (ma = (0, f.Z)([
                '.w3m-injected-wrapper{display:flex;align-items:center;justify-content:center;width:100%;aspect-ratio:1/1;flex-direction:column}.w3m-connecting-title{display:flex;align-items:center;justify-content:center;margin-bottom:16px}.w3m-install-title{display:flex;align-items:center;justify-content:center;flex-direction:column}.w3m-install-title w3m-text:last-child{margin-top:10px;max-width:240px}.w3m-install-actions{display:flex;margin-top:15px;align-items:center;flex-direction:column}@media(max-width:355px){.w3m-install-actions{flex-direction:column;align-items:center}}w3m-wallet-image{border-radius:15px;width:25%;aspect-ratio:1/1;margin-bottom:20px}w3m-button{opacity:0}.w3m-install-actions w3m-button{margin:5px;opacity:1}.w3m-info-text{text-align:center}'
              ]))
        )
        const Rc = Object.defineProperty
        const Dc = Object.getOwnPropertyDescriptor
        let Bc = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            return (0, u.Z)(this, n), t.apply(this, arguments)
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'getRouterData',
                value: function () {
                  let e
                  const t =
                        (e = Me.AV.state.data) == null
                          ? void 0
                          : e.InstallConnector
                  if (!t) throw new Error('Missing router data')
                  return t
                }
              },
              {
                key: 'onInstall',
                value: function () {
                  const e = this.getRouterData().url
                  Me.zv.openHref(e, '_blank')
                }
              },
              {
                key: 'onMobile',
                value: function () {
                  const e = this.getRouterData().name
                  Me.AV.push('ConnectWallet'),
                  Me.Vs.openToast(
                    'Scan the code with '.concat(e),
                    'success'
                  )
                }
              },
              {
                key: 'render',
                value: function () {
                  const e = this.getRouterData()
                  const t = e.name
                  const n = e.id
                  const r = e.isMobile
                  return X(
                    ga ||
                        (ga = (0, f.Z)([
                          '<w3m-modal-header title="',
                          '"></w3m-modal-header><w3m-modal-content><div class="w3m-injected-wrapper"><w3m-wallet-image walletId="',
                          '" size="lg"></w3m-wallet-image><div class="w3m-install-title"><w3m-text variant="large-bold">Install ',
                          '</w3m-text><w3m-text color="secondary" variant="medium-thin" class="w3m-info-text">To connect ',
                          ', install the browser extension.</w3m-text></div><div class="w3m-install-actions"><w3m-button .onClick="',
                          '" .iconLeft="',
                          '">Install Extension</w3m-button>',
                          '</div></div></w3m-modal-content>'
                        ])),
                    t,
                    n,
                    t,
                    t,
                    this.onInstall.bind(this),
                    uo.ARROW_DOWN_ICON,
                    r
                      ? X(
                        wa ||
                              (wa = (0, f.Z)([
                                '<w3m-button .onClick="',
                                '" .iconLeft="',
                                '">',
                                ' Mobile</w3m-button>'
                              ])),
                        this.onMobile.bind(this),
                        uo.MOBILE_ICON,
                        t
                      )
                      : null
                  )
                }
              }
            ]),
            n
          )
        })(xe)
        ;(Bc.styles = [Ha.globalCss, Nc]),
        (Bc = (function (e, t, n, r) {
          for (
            var i, a = r > 1 ? void 0 : r ? Dc(t, n) : t, o = e.length - 1;
            o >= 0;
            o--
          ) { (i = e[o]) && (a = (r ? i(t, n, a) : i(a)) || a) }
          return r && a && Rc(t, n, a), a
        })([Ze('w3m-install-connector-view')], Bc))
        const zc = Object.defineProperty
        const Uc = Object.getOwnPropertyDescriptor
        let Wc = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            return (0, u.Z)(this, n), t.apply(this, arguments)
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'render',
                value: function () {
                  return X(
                    ba ||
                        (ba = (0, f.Z)([
                          '<w3m-modal-header title="Scan the code" .onAction="',
                          '" .actionIcon="',
                          '"></w3m-modal-header><w3m-modal-content><w3m-walletconnect-qr></w3m-walletconnect-qr></w3m-modal-content>'
                        ])),
                    ko.handleUriCopy,
                    uo.COPY_ICON
                  )
                }
              }
            ]),
            n
          )
        })(xe)
        ;(Wc.styles = [Ha.globalCss]),
        (Wc = (function (e, t, n, r) {
          for (
            var i, a = r > 1 ? void 0 : r ? Uc(t, n) : t, o = e.length - 1;
            o >= 0;
            o--
          ) { (i = e[o]) && (a = (r ? i(t, n, a) : i(a)) || a) }
          return r && a && zc(t, n, a), a
        })([Ze('w3m-qrcode-view')], Wc))
        const $c = C(
          ya ||
              (ya = (0, f.Z)([
                '.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);margin:-5px -10px;justify-content:space-between}'
              ]))
        )
        const Hc = Object.defineProperty
        const Vc = Object.getOwnPropertyDescriptor
        let Fc = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            return (0, u.Z)(this, n), t.apply(this, arguments)
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'onSelectChain',
                value: (function () {
                  const e = (0, c.Z)(
                    (0, s.Z)().mark(function e (t) {
                      let n, r, i, a
                      return (0, s.Z)().wrap(function (e) {
                        for (;;) {
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((n = Me.zb.state),
                                (r = n.isConnected),
                                (i = n.selectedChain),
                                (a = n.walletConnectVersion),
                                !r)
                              ) {
                                e.next = 15
                                break
                              }
                              if (
                                (i === null || void 0 === i
                                  ? void 0
                                  : i.id) !== t.id
                              ) {
                                e.next = 6
                                break
                              }
                              Me.AV.replace('Account'), (e.next = 13)
                              break
                            case 6:
                              if (a !== 2) {
                                e.next = 12
                                break
                              }
                              return (
                                (e.next = 9),
                                Me.Id.client().switchNetwork({
                                  chainId: t.id
                                })
                              )
                            case 9:
                              Me.AV.replace('Account'), (e.next = 13)
                              break
                            case 12:
                              Me.AV.push('SwitchNetwork', {
                                SwitchNetwork: t
                              })
                            case 13:
                              e.next = 16
                              break
                            case 15:
                              Me.AV.push('ConnectWallet'),
                              Me.zb.setSelectedChain(t)
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
                })()
              },
              {
                key: 'render',
                value: function () {
                  const e = this
                  const t = Me.zb.state.chains
                  return X(
                    xa ||
                        (xa = (0, f.Z)([
                          '<w3m-modal-header title="Select network"></w3m-modal-header><w3m-modal-content><div class="w3m-grid">',
                          '</div></w3m-modal-content>'
                        ])),
                    t === null || void 0 === t
                      ? void 0
                      : t.map(function (t) {
                        return X(
                          ka ||
                                (ka = (0, f.Z)([
                                  '<w3m-network-button name="',
                                  '" chainId="',
                                  '" .onClick="',
                                  '">',
                                  '</w3m-network-button>'
                                ])),
                          t.name,
                          t.id,
                          (0, c.Z)(
                            (0, s.Z)().mark(function n () {
                              return (0, s.Z)().wrap(function (n) {
                                for (;;) {
                                  switch ((n.prev = n.next)) {
                                    case 0:
                                      return n.abrupt(
                                        'return',
                                        e.onSelectChain(t)
                                      )
                                    case 1:
                                    case 'end':
                                      return n.stop()
                                  }
                                }
                              }, n)
                            })
                          ),
                          t.name
                        )
                      })
                  )
                }
              }
            ]),
            n
          )
        })(xe)
        ;(Fc.styles = [Ha.globalCss, $c]),
        (Fc = (function (e, t, n, r) {
          for (
            var i, a = r > 1 ? void 0 : r ? Vc(t, n) : t, o = e.length - 1;
            o >= 0;
            o--
          ) { (i = e[o]) && (a = (r ? i(t, n, a) : i(a)) || a) }
          return r && a && Hc(t, n, a), a
        })([Ze('w3m-select-network-view')], Fc))
        const qc = C(
          Ca ||
              (Ca = (0, f.Z)([
                '.w3m-wrapper{display:flex;align-items:center;justify-content:center;width:100%;aspect-ratio:1/1;flex-direction:column}.w3m-connecting-title{display:flex;align-items:center;justify-content:center;margin-bottom:16px}w3m-spinner{margin-right:10px}w3m-network-image{width:96px;height:96px;margin-bottom:20px}w3m-button{opacity:0}.w3m-error w3m-button{opacity:1}'
              ]))
        )
        const Gc = Object.defineProperty
        const Kc = Object.getOwnPropertyDescriptor
        const Yc = function (e, t, n, r) {
          for (
            var i, a = r > 1 ? void 0 : r ? Kc(t, n) : t, o = e.length - 1;
            o >= 0;
            o--
          ) { (i = e[o]) && (a = (r ? i(t, n, a) : i(a)) || a) }
          return r && a && Gc(t, n, a), a
        }
        let Jc = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            let e
            return (
              (0, u.Z)(this, n),
              ((e = t.call(this)).error = !1),
              e.onSwitchNetwork(),
              e
            )
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'getRouterData',
                value: function () {
                  let e
                  const t =
                        (e = Me.AV.state.data) == null
                          ? void 0
                          : e.SwitchNetwork
                  if (!t) throw new Error('Missing router data')
                  return t
                }
              },
              {
                key: 'onSwitchNetwork',
                value: (function () {
                  const e = (0, c.Z)(
                    (0, s.Z)().mark(function e () {
                      let t
                      return (0, s.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (this.error = !1),
                                  (t = this.getRouterData()),
                                  (e.next = 5),
                                  Me.Id.client().switchNetwork({
                                    chainId: t.id
                                  })
                                )
                              case 5:
                                Me.zb.setSelectedChain(t),
                                Me.AV.replace('Account'),
                                (e.next = 12)
                                break
                              case 9:
                                ;(e.prev = 9),
                                (e.t0 = e.catch(0)),
                                (this.error = !0)
                              case 12:
                              case 'end':
                                return e.stop()
                            }
                          }
                        },
                        e,
                        this,
                        [[0, 9]]
                      )
                    })
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'render',
                value: function () {
                  const e = this.getRouterData()
                  const t = e.id
                  const n = e.name
                  const r = { 'w3m-wrapper': !0, 'w3m-error': this.error }
                  return X(
                    Za ||
                        (Za = (0, f.Z)([
                          '<w3m-modal-header title="',
                          '"></w3m-modal-header><w3m-modal-content><div class="',
                          '"><w3m-network-image chainId="',
                          '"></w3m-network-image><div class="w3m-connecting-title">',
                          '<w3m-text variant="large-bold" color="',
                          '">',
                          '</w3m-text></div><w3m-button .onClick="',
                          '" .disabled="',
                          '" .iconRight="',
                          '">Try Again</w3m-button></div></w3m-modal-content>'
                        ])),
                    'Connect to '.concat(n),
                    Pe(r),
                    t,
                    this.error
                      ? null
                      : X(
                        Aa ||
                              (Aa = (0, f.Z)(['<w3m-spinner></w3m-spinner>']))
                      ),
                    this.error ? 'error' : 'secondary',
                    this.error
                      ? 'Connection declined'
                      : 'Approve in your wallet',
                    this.onSwitchNetwork.bind(this),
                    !this.error,
                    uo.RETRY_ICON
                  )
                }
              }
            ]),
            n
          )
        })(xe)
        ;(Jc.styles = [Ha.globalCss, qc]),
        Yc([_e()], Jc.prototype, 'error', 2),
        (Jc = Yc([Ze('w3m-switch-network-view')], Jc))
        const Xc = C(
          Ea ||
              (Ea = (0, f.Z)([
                "w3m-modal-content{height:clamp(200px,60vh,600px);display:block;overflow:scroll;scrollbar-width:none;position:relative;margin-top:1px}.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between;margin:-15px -10px;padding-top:20px}w3m-modal-content::after,w3m-modal-content::before{content:'';position:fixed;pointer-events:none;z-index:1;width:100%;height:20px;opacity:1}w3m-modal-content::before{box-shadow:0 -1px 0 0 var(--w3m-color-bg-1);background:linear-gradient(var(--w3m-color-bg-1),rgba(255,255,255,0))}w3m-modal-content::after{box-shadow:0 1px 0 0 var(--w3m-color-bg-1);background:linear-gradient(rgba(255,255,255,0),var(--w3m-color-bg-1));top:calc(100% - 20px)}w3m-modal-content::-webkit-scrollbar{display:none}.w3m-placeholder-block{display:flex;justify-content:center;align-items:center;height:100px;overflow:hidden}.w3m-empty,.w3m-loading{display:flex}.w3m-loading .w3m-placeholder-block{height:100%}.w3m-end-reached .w3m-placeholder-block{height:0;opacity:0}.w3m-empty .w3m-placeholder-block{opacity:1;height:100%}w3m-wallet-button{margin:calc((100% - 60px)/ 3) 0}"
              ]))
        )
        const Qc = Object.defineProperty
        const eu = Object.getOwnPropertyDescriptor
        const tu = function (e, t, n, r) {
          for (
            var i, a = r > 1 ? void 0 : r ? eu(t, n) : t, o = e.length - 1;
            o >= 0;
            o--
          ) { (i = e[o]) && (a = (r ? i(t, n, a) : i(a)) || a) }
          return r && a && Qc(t, n, a), a
        }
        let nu = (function (e) {
          ;(0, h.Z)(n, e)
          const t = (0, v.Z)(n)
          function n () {
            let e
            return (
              (0, u.Z)(this, n),
              ((e = t.apply(this, arguments)).loading =
                  !Me.uc.state.wallets.listings.length),
              (e.firstFetch = !Me.uc.state.wallets.listings.length),
              (e.search = ''),
              (e.endReached = !1),
              (e.intersectionObserver = void 0),
              (e.searchDebounce = ko.debounce(function (t) {
                t.length >= 3
                  ? ((e.firstFetch = !0),
                    (e.endReached = !1),
                    (e.search = t),
                    Me.uc.resetSearch(),
                    e.fetchWallets())
                  : e.search &&
                      ((e.search = ''),
                      (e.endReached = e.isLastPage()),
                      Me.uc.resetSearch())
              })),
              e
            )
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'firstUpdated',
                value: function () {
                  this.createPaginationObserver()
                }
              },
              {
                key: 'disconnectedCallback',
                value: function () {
                  let e
                  (e = this.intersectionObserver) == null || e.disconnect()
                }
              },
              {
                key: 'placeholderEl',
                get: function () {
                  return ko.getShadowRootElement(
                    this,
                    '.w3m-placeholder-block'
                  )
                }
              },
              {
                key: 'createPaginationObserver',
                value: function () {
                  const e = this
                    ;(this.intersectionObserver = new IntersectionObserver(
                    function (t) {
                      ;(0, p.Z)(t, 1)[0].isIntersecting &&
                          (!e.search || !e.firstFetch) &&
                          e.fetchWallets()
                    }
                  )),
                  this.intersectionObserver.observe(this.placeholderEl)
                }
              },
              {
                key: 'isLastPage',
                value: function () {
                  const e = Me.uc.state
                  const t = e.wallets
                  const n = e.search
                  const r = this.search ? n : t
                  const i = r.listings
                  const a = r.total
                  return a <= 40 || i.length >= a
                }
              },
              {
                key: 'fetchWallets',
                value: (function () {
                  const e = (0, c.Z)(
                    (0, s.Z)().mark(function e () {
                      let t, n, r, i, a, l, u, d, h, v, f, p, m, g
                      return (0, s.Z)().wrap(
                        function (e) {
                          for (;;) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((n = Me.uc.state),
                                  (r = n.wallets),
                                  (i = n.search),
                                  (a = ko.getExtensionWallets()),
                                  (l = this.search ? i : r),
                                  (u = l.listings),
                                  (d = l.total),
                                  (h = l.page),
                                  this.endReached ||
                                      !(
                                        this.firstFetch ||
                                        (d > 40 && u.length < d)
                                      ))
                                ) {
                                  e.next = 22
                                  break
                                }
                                return (
                                  (e.prev = 2),
                                  (this.loading = !0),
                                  (v =
                                      (t = Me.zb.state.standaloneChains) == null
                                        ? void 0
                                        : t.join(',')),
                                  (e.next = 7),
                                  Me.uc.getPaginatedWallets({
                                    page: this.firstFetch ? 1 : h + 1,
                                    entries: 40,
                                    device: Me.zv.isMobile()
                                      ? 'mobile'
                                      : 'desktop',
                                    search: this.search,
                                    version: Me.zb.state.walletConnectVersion,
                                    chains: v
                                  })
                                )
                              case 7:
                                return (
                                  (f = e.sent),
                                  (p = f.listings),
                                  (m = p.map(function (e) {
                                    return e.image_url.lg
                                  })),
                                  (g = a.map(function (e) {
                                    const t = e.id
                                    return ko.getWalletIcon(t)
                                  })),
                                  (e.next = 13),
                                  Promise.all(
                                    [].concat(
                                      (0, o.Z)(
                                        m.map(
                                          (function () {
                                            const e = (0, c.Z)(
                                              (0, s.Z)().mark(function e (t) {
                                                return (0, s.Z)().wrap(
                                                  function (e) {
                                                    for (;;) {
                                                      switch (
                                                        (e.prev = e.next)
                                                      ) {
                                                        case 0:
                                                          return e.abrupt(
                                                            'return',
                                                            ko.preloadImage(
                                                              t
                                                            )
                                                          )
                                                        case 1:
                                                        case 'end':
                                                          return e.stop()
                                                      }
                                                    }
                                                  },
                                                  e
                                                )
                                              })
                                            )
                                            return function (t) {
                                              return e.apply(this, arguments)
                                            }
                                          })()
                                        )
                                      ),
                                      (0, o.Z)(
                                        g.map(
                                          (function () {
                                            const e = (0, c.Z)(
                                              (0, s.Z)().mark(function e (t) {
                                                return (0, s.Z)().wrap(
                                                  function (e) {
                                                    for (;;) {
                                                      switch (
                                                        (e.prev = e.next)
                                                      ) {
                                                        case 0:
                                                          return e.abrupt(
                                                            'return',
                                                            ko.preloadImage(
                                                              t
                                                            )
                                                          )
                                                        case 1:
                                                        case 'end':
                                                          return e.stop()
                                                      }
                                                    }
                                                  },
                                                  e
                                                )
                                              })
                                            )
                                            return function (t) {
                                              return e.apply(this, arguments)
                                            }
                                          })()
                                        )
                                      ),
                                      [Me.zv.wait(300)]
                                    )
                                  )
                                )
                              case 13:
                                ;(this.endReached = this.isLastPage()),
                                (e.next = 19)
                                break
                              case 16:
                                ;(e.prev = 16),
                                (e.t0 = e.catch(2)),
                                console.error(e.t0),
                                Me.Vs.openToast(
                                  ko.getErrorMessage(e.t0),
                                  'error'
                                )
                              case 19:
                                return (
                                  (e.prev = 19),
                                  (this.loading = !1),
                                  (this.firstFetch = !1),
                                  e.finish(19)
                                )
                              case 22:
                              case 'end':
                                return e.stop()
                            }
                          }
                        },
                        e,
                        this,
                        [[2, 16, 19, 22]]
                      )
                    })
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'onConnectCustom',
                value: function (e) {
                  const t = e.name
                  const n = e.id
                  const r = e.links
                  Me.zv.isMobile()
                    ? ko.handleMobileLinking({ links: r, name: t, id: n })
                    : Me.AV.push('DesktopConnector', {
                      DesktopConnector: {
                        name: t,
                        walletId: n,
                        universal: r.universal,
                        native: r.native
                      }
                    })
                }
              },
              {
                key: 'onConnectListing',
                value: function (e) {
                  if (Me.zv.isMobile()) {
                    const t = e.id
                    const n = e.image_url
                    const r = e.mobile
                    const i = r.native
                    const a = r.universal
                    ko.handleMobileLinking({
                      links: { native: i, universal: a },
                      name: e.name,
                      id: t,
                      image: n.lg
                    })
                  } else {
                    Me.AV.push('DesktopConnector', {
                      DesktopConnector: {
                        name: e.name,
                        icon: e.image_url.lg,
                        universal: e.desktop.universal || e.homepage,
                        native: e.desktop.native
                      }
                    })
                  }
                }
              },
              {
                key: 'onConnectExtension',
                value: function (e) {
                  ko.getWalletId('') === e.id
                    ? Me.AV.push('InjectedConnector')
                    : Me.AV.push('InstallConnector', { InstallConnector: e })
                }
              },
              {
                key: 'onSearchChange',
                value: function (e) {
                  const t = e.target.value
                  this.searchDebounce(t)
                }
              },
              {
                key: 'coinbaseConnectorTemplate',
                value: function () {
                  try {
                    const e = Me.Id.client().getConnectorById(vo.coinbaseWallet)
                    return X(
                      Ia ||
                          (Ia = (0, f.Z)([
                            '<w3m-wallet-button name="',
                            '" walletId="',
                            '" .onClick="',
                            '"></w3m-wallet-button>'
                          ])),
                      e.name,
                      e.id,
                      (0, c.Z)(
                        (0, s.Z)().mark(function e () {
                          return (0, s.Z)().wrap(function (e) {
                            for (;;) {
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return e.abrupt(
                                    'return',
                                    ko.handleConnectorConnection(
                                      vo.coinbaseWallet
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
                    )
                  } catch (t) {
                    return null
                  }
                }
              },
              {
                key: 'render',
                value: function () {
                  const e = this
                  const t = Me.uc.state
                  const n = t.wallets
                  const r = t.search
                  const i = Me.zb.state.isStandalone
                  let a = (this.search ? r : n).listings
                  a = Ms(a)
                  const l = this.loading && !a.length
                  const s = this.search.length >= 3
                  const c =
                        !l &&
                        (!s ||
                          ko.caseSafeIncludes(vo.coinbaseWallet, this.search))
                  let u = i || Me.zv.isMobile() ? [] : ko.getExtensionWallets()
                  let d = ko.getCustomWallets()
                  s &&
                      ((u = u.filter(function (t) {
                        const n = t.name
                        return ko.caseSafeIncludes(n, e.search)
                      })),
                      (d = d.filter(function (t) {
                        const n = t.name
                        return ko.caseSafeIncludes(n, e.search)
                      })))
                  const h = !this.loading && !a.length && !u.length && !c
                  const v = Math.max(u.length, a.length)
                  const p = {
                    'w3m-loading': l,
                    'w3m-end-reached': this.endReached || !this.loading,
                    'w3m-empty': h
                  }
                  return X(
                    _a ||
                        (_a = (0, f.Z)([
                          '<w3m-modal-header><w3m-search-input .onChange="',
                          '"></w3m-search-input></w3m-modal-header><w3m-modal-content class="',
                          '"><div class="w3m-grid">',
                          ' ',
                          '</div><div class="w3m-placeholder-block">',
                          ' ',
                          '</div></w3m-modal-content>'
                        ])),
                    this.onSearchChange.bind(this),
                    Pe(p),
                    l
                      ? null
                      : (0, o.Z)(Array(v)).map(function (t, n) {
                          return X(
                            Ma || (Ma = (0, f.Z)(['', ' ', ' ', ''])),
                            d[n]
                              ? X(
                                Oa ||
                                      (Oa = (0, f.Z)([
                                        '<w3m-wallet-button name="',
                                        '" walletId="',
                                        '" .onClick="',
                                        '"></w3m-wallet-button>'
                                      ])),
                                d[n].name,
                                d[n].id,
                                function () {
                                  return e.onConnectCustom(d[n])
                                }
                              )
                              : null,
                            u[n]
                              ? X(
                                Sa ||
                                      (Sa = (0, f.Z)([
                                        '<w3m-wallet-button name="',
                                        '" walletId="',
                                        '" .onClick="',
                                        '"></w3m-wallet-button>'
                                      ])),
                                u[n].name,
                                u[n].id,
                                function () {
                                  return e.onConnectExtension(u[n])
                                }
                              )
                              : null,
                            a[n]
                              ? X(
                                Pa ||
                                      (Pa = (0, f.Z)([
                                        '<w3m-wallet-button src="',
                                        '" name="',
                                        '" walletId="',
                                        '" .onClick="',
                                        '"></w3m-wallet-button>'
                                      ])),
                                a[n].image_url.lg,
                                a[n].name,
                                a[n].id,
                                function () {
                                  return e.onConnectListing(a[n])
                                }
                              )
                              : null
                          )
                        }),
                    c ? this.coinbaseConnectorTemplate() : null,
                    h
                      ? X(
                        Ta ||
                              (Ta = (0, f.Z)([
                                '<w3m-text variant="large-bold" color="secondary">No results found</w3m-text>'
                              ]))
                      )
                      : null,
                    !h && this.loading
                      ? X(
                        La ||
                              (La = (0, f.Z)(['<w3m-spinner></w3m-spinner>']))
                      )
                      : null
                  )
                }
              }
            ]),
            n
          )
        })(xe)
        ;(nu.styles = [Ha.globalCss, Xc]),
        tu([_e()], nu.prototype, 'loading', 2),
        tu([_e()], nu.prototype, 'firstFetch', 2),
        tu([_e()], nu.prototype, 'search', 2),
        tu([_e()], nu.prototype, 'endReached', 2),
        (nu = tu([Ze('w3m-wallet-explorer-view')], nu))
      }
    }
  ]
)
// # sourceMappingURL=265.170cbc3b.chunk.js.map
