const getIpa = (word) => {
  const a = require('../data/a');
  const b = require('../data/b');
  const c = require('../data/c');
  const d = require('../data/d');
  const e = require('../data/e');
  const f = require('../data/f');
  const g = require('../data/g');
  const h = require('../data/h');
  const i = require('../data/i');
  const j = require('../data/j');
  const k = require('../data/k');
  const l = require('../data/l');
  const m = require('../data/m');
  const n = require('../data/n');
  const o = require('../data/o');
  const p = require('../data/p');
  const q = require('../data/q');
  const r = require('../data/r');
  const s = require('../data/s');
  const t = require('../data/t');
  const u = require('../data/u');
  const v = require('../data/v');
  const w = require('../data/w');
  const x = require('../data/x');
  const y = require('../data/y');
  const z = require('../data/z');
  let ipaWord = '';

  switch(word[0]) {
      case'a': 
       ipaWord=(a[word]);
       break;
      case'b': 
       ipaWord=(b[word]);
       break;
      case'c': 
       ipaWord=(c[word]);
       break;
      case'd': 
       ipaWord=(d[word]);
       break;
      case'e': 
       ipaWord=(e[word]);
       break;
      case'f': 
       ipaWord=(f[word]);
       break;
      case'g': 
       ipaWord=(g[word]);
       break;
      case'h': 
       ipaWord=(h[word]);
       break;
      case'i': 
       ipaWord=(i[word]);
       break;
      case'j': 
       ipaWord=(j[word]);
       break;
      case'k': 
       ipaWord=(k[word]);
       break;
      case'l': 
       ipaWord=(l[word]);
       break;
      case'm': 
       ipaWord=(m[word]);
       break;
      case'n': 
       ipaWord=(n[word]);
       break;
      case'o': 
       ipaWord=(o[word]);
       break;
      case'p': 
       ipaWord=(p[word]);
       break;
      case'q': 
       ipaWord=(q[word]);
       break;
      case'r': 
       ipaWord=(r[word]);
       break;
      case's': 
       ipaWord=(s[word]);
       break;
      case't': 
       ipaWord=(t[word]);
       break;
      case'u': 
       ipaWord=(u[word]);
       break;
      case'v': 
       ipaWord=(v[word]);
       break;
       case'w': 
       ipaWord=(w[word]);
       break;
      case'x': 
       ipaWord=(x[word]);
       break;
      case'y': 
       ipaWord=(y[word]);
       break;
      case'z': 
       ipaWord=(z[word]);
       break;

      default: 
       ipaWord=word   
    }

    return ipaWord ===  undefined ? word : ipaWord ;
}


export default getIpa;
