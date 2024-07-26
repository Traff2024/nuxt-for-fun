const __vite__fileDeps=["./CEvevBnE.js","./D2AX2ubh.js","./entry.BVkpK0FL.css","./BYF7TN1j.js","./ezSNHMEg.js","./D4G1LP6-.js","./DPkT55Ii.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{S as ui,a as U1,d as j1,p as W1,J as F1,o as z1}from"./D2AX2ubh.js";var ad=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Kc(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function bx(n){if(n.__esModule)return n;var e=n.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(i){var o=Object.getOwnPropertyDescriptor(n,i);Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:function(){return n[i]}})}),t}const H1="2.10.2",V1=n=>n,cd=n=>n,Z1=()=>`viem@${H1}`;let ne=class bu extends Error{constructor(e,t={}){var r;super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:Z1()});const i=t.cause instanceof bu?t.cause.details:(r=t.cause)!=null&&r.message?t.cause.message:t.details,o=t.cause instanceof bu&&t.cause.docsPath||t.docsPath;this.message=[e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...o?[`Docs: https://viem.sh${o}${t.docsSlug?`#${t.docsSlug}`:""}`]:[],...i?[`Details: ${i}`]:[],`Version: ${this.version}`].join(`
`),t.cause&&(this.cause=t.cause),this.details=i,this.docsPath=o,this.metaMessages=t.metaMessages,this.shortMessage=e}walk(e){return sp(this,e)}};function sp(n,e){return e!=null&&e(n)?n:n&&typeof n=="object"&&"cause"in n?sp(n.cause,e):e?null:n}class G1 extends ne{constructor({max:e,min:t,signed:i,size:o,value:r}){super(`Number "${r}" is not in safe ${o?`${o*8}-bit ${i?"signed":"unsigned"} `:""}integer range ${e?`(${t} to ${e})`:`(above ${t})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}}class q1 extends ne{constructor(e){super(`Bytes value "${e}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidBytesBooleanError"})}}class Y1 extends ne{constructor({givenSize:e,maxSize:t}){super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}class ap extends ne{constructor({offset:e,position:t,size:i}){super(`Slice ${t==="start"?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${i}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}}class cp extends ne{constructor({size:e,targetSize:t,type:i}){super(`${i.charAt(0).toUpperCase()}${i.slice(1).toLowerCase()} size (${e}) exceeds padding size (${t}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}class T0 extends ne{constructor({size:e,targetSize:t,type:i}){super(`${i.charAt(0).toUpperCase()}${i.slice(1).toLowerCase()} is expected to be ${t} ${i} long, but is ${e} ${i} long.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidBytesLengthError"})}}function Ko(n,{dir:e,size:t=32}={}){return typeof n=="string"?Bi(n,{dir:e,size:t}):K1(n,{dir:e,size:t})}function Bi(n,{dir:e,size:t=32}={}){if(t===null)return n;const i=n.replace("0x","");if(i.length>t*2)throw new cp({size:Math.ceil(i.length/2),targetSize:t,type:"hex"});return`0x${i[e==="right"?"padEnd":"padStart"](t*2,"0")}`}function K1(n,{dir:e,size:t=32}={}){if(t===null)return n;if(n.length>t)throw new cp({size:n.length,targetSize:t,type:"bytes"});const i=new Uint8Array(t);for(let o=0;o<t;o++){const r=e==="right";i[r?o:t-o-1]=n[r?o:n.length-o-1]}return i}function Jr(n,{strict:e=!0}={}){return!n||typeof n!="string"?!1:e?/^0x[0-9a-fA-F]*$/.test(n):n.startsWith("0x")}function Tt(n){return Jr(n,{strict:!1})?Math.ceil((n.length-2)/2):n.length}function _a(n,{dir:e="left"}={}){let t=typeof n=="string"?n.replace("0x",""):n,i=0;for(let o=0;o<t.length-1&&t[e==="left"?o:t.length-o-1].toString()==="0";o++)i++;return t=e==="left"?t.slice(i):t.slice(0,t.length-i),typeof n=="string"?(t.length===1&&e==="right"&&(t=`${t}0`),`0x${t.length%2===1?`0${t}`:t}`):t}const J1=new TextEncoder;function Jc(n,e={}){return typeof n=="number"||typeof n=="bigint"?Q1(n,e):typeof n=="boolean"?X1(n,e):Jr(n)?Fi(n,e):br(n,e)}function X1(n,e={}){const t=new Uint8Array(1);return t[0]=Number(n),typeof e.size=="number"?(Pn(t,{size:e.size}),Ko(t,{size:e.size})):t}const oi={zero:48,nine:57,A:65,F:70,a:97,f:102};function A0(n){if(n>=oi.zero&&n<=oi.nine)return n-oi.zero;if(n>=oi.A&&n<=oi.F)return n-(oi.A-10);if(n>=oi.a&&n<=oi.f)return n-(oi.a-10)}function Fi(n,e={}){let t=n;e.size&&(Pn(t,{size:e.size}),t=Ko(t,{dir:"right",size:e.size}));let i=t.slice(2);i.length%2&&(i=`0${i}`);const o=i.length/2,r=new Uint8Array(o);for(let s=0,a=0;s<o;s++){const c=A0(i.charCodeAt(a++)),l=A0(i.charCodeAt(a++));if(c===void 0||l===void 0)throw new ne(`Invalid byte sequence ("${i[a-2]}${i[a-1]}" in "${i}").`);r[s]=c*16+l}return r}function Q1(n,e){const t=ze(n,e);return Fi(t)}function br(n,e={}){const t=J1.encode(n);return typeof e.size=="number"?(Pn(t,{size:e.size}),Ko(t,{dir:"right",size:e.size})):t}function Pn(n,{size:e}){if(Tt(n)>e)throw new Y1({givenSize:Tt(n),maxSize:e})}function Xc(n,e={}){const{signed:t}=e;e.size&&Pn(n,{size:e.size});const i=BigInt(n);if(!t)return i;const o=(n.length-2)/2,r=(1n<<BigInt(o)*8n-1n)-1n;return i<=r?i:i-BigInt(`0x${"f".padStart(o*2,"f")}`)-1n}function bo(n,e={}){return Number(Xc(n,e))}function lp(n,e={}){let t=Fi(n);return e.size&&(Pn(t,{size:e.size}),t=_a(t,{dir:"right"})),new TextDecoder().decode(t)}const eg=Array.from({length:256},(n,e)=>e.toString(16).padStart(2,"0"));function Ea(n,e={}){return typeof n=="number"||typeof n=="bigint"?ze(n,e):typeof n=="string"?ld(n,e):typeof n=="boolean"?up(n,e):St(n,e)}function up(n,e={}){const t=`0x${Number(n)}`;return typeof e.size=="number"?(Pn(t,{size:e.size}),Ko(t,{size:e.size})):t}function St(n,e={}){let t="";for(let o=0;o<n.length;o++)t+=eg[n[o]];const i=`0x${t}`;return typeof e.size=="number"?(Pn(i,{size:e.size}),Ko(i,{dir:"right",size:e.size})):i}function ze(n,e={}){const{signed:t,size:i}=e,o=BigInt(n);let r;i?t?r=(1n<<BigInt(i)*8n-1n)-1n:r=2n**(BigInt(i)*8n)-1n:typeof n=="number"&&(r=BigInt(Number.MAX_SAFE_INTEGER));const s=typeof r=="bigint"&&t?-r-1n:0;if(r&&o>r||o<s){const c=typeof n=="bigint"?"n":"";throw new G1({max:r?`${r}${c}`:void 0,min:`${s}${c}`,signed:t,size:i,value:`${n}${c}`})}const a=`0x${(t&&o<0?(1n<<BigInt(i*8))+BigInt(o):o).toString(16)}`;return i?Ko(a,{size:i}):a}const tg=new TextEncoder;function ld(n,e={}){const t=tg.encode(n);return St(t,e)}function vo(n,{includeName:e=!1}={}){if(n.type!=="function"&&n.type!=="event"&&n.type!=="error")throw new hg(n.type);return`${n.name}(${ud(n.inputs,{includeName:e})})`}function ud(n,{includeName:e=!1}={}){return n?n.map(t=>ng(t,{includeName:e})).join(e?", ":","):""}function ng(n,{includeName:e}){return n.type.startsWith("tuple")?`(${ud(n.components,{includeName:e})})${n.type.slice(5)}`:n.type+(e&&n.name?` ${n.name}`:"")}class ig extends ne{constructor({data:e,params:t,size:i}){super([`Data size of ${i} bytes is too small for given parameters.`].join(`
`),{metaMessages:[`Params: (${ud(t,{includeName:!0})})`,`Data:   ${e} (${i} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e,this.params=t,this.size=i}}class Qc extends ne{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}}class rg extends ne{constructor({expectedLength:e,givenLength:t,type:i}){super([`ABI encoding array length mismatch for type ${i}.`,`Expected length: ${e}`,`Given length: ${t}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}}class og extends ne{constructor({expectedSize:e,value:t}){super(`Size of bytes "${t}" (bytes${Tt(t)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}}class sg extends ne{constructor({expectedLength:e,givenLength:t}){super(["ABI encoding params/values length mismatch.",`Expected length (params): ${e}`,`Given length (values): ${t}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}}class dp extends ne{constructor(e,{docsPath:t}){super([`Encoded error signature "${e}" not found on ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`].join(`
`),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=e}}class ac extends ne{constructor(e,{docsPath:t}={}){super([`Function ${e?`"${e}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}}class ag extends ne{constructor(e,{docsPath:t}){super([`Function "${e}" does not contain any \`outputs\` on ABI.`,"Cannot decode function result without knowing what the parameter types are.","Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}}class cg extends ne{constructor(e,t){super("Found ambiguous types in overloaded ABI items.",{metaMessages:[`\`${e.type}\` in \`${vo(e.abiItem)}\`, and`,`\`${t.type}\` in \`${vo(t.abiItem)}\``,"","These types encode differently and cannot be distinguished at runtime.","Remove one of the ambiguous items in the ABI."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiItemAmbiguityError"})}}class lg extends ne{constructor(e,{docsPath:t}){super([`Type "${e}" is not a valid encoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}}class ug extends ne{constructor(e,{docsPath:t}){super([`Type "${e}" is not a valid decoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}}class dg extends ne{constructor(e){super([`Value "${e}" is not a valid array.`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}}class hg extends ne{constructor(e){super([`"${e}" is not a valid definition type.`,'Valid types: "function", "event", "error"'].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}function xr(n){return typeof n[0]=="string"?hp(n):pg(n)}function pg(n){let e=0;for(const o of n)e+=o.length;const t=new Uint8Array(e);let i=0;for(const o of n)t.set(o,i),i+=o.length;return t}function hp(n){return`0x${n.reduce((e,t)=>e+t.replace("0x",""),"")}`}class Ts extends ne{constructor({address:e}){super(`Address "${e}" is invalid.`,{metaMessages:["- Address must be a hex value of 20 bytes (40 hex characters).","- Address must match its checksum counterpart."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}class fg extends Map{constructor(e){super(),Object.defineProperty(this,"maxSize",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.maxSize=e}set(e,t){return super.set(e,t),this.maxSize&&this.size>this.maxSize&&this.delete(this.keys().next().value),this}}function k0(n){if(!Number.isSafeInteger(n)||n<0)throw new Error(`Wrong positive integer: ${n}`)}function pp(n,...e){if(!(n instanceof Uint8Array))throw new Error("Expected Uint8Array");if(e.length>0&&!e.includes(n.length))throw new Error(`Expected Uint8Array of length ${e}, not of length=${n.length}`)}function cc(n,e=!0){if(n.destroyed)throw new Error("Hash instance has been destroyed");if(e&&n.finished)throw new Error("Hash#digest() has already been called")}function fp(n,e){pp(n);const t=e.outputLen;if(n.length<t)throw new Error(`digestInto() expects output buffer of length at least ${t}`)}const za=BigInt(2**32-1),S0=BigInt(32);function gg(n,e=!1){return e?{h:Number(n&za),l:Number(n>>S0&za)}:{h:Number(n>>S0&za)|0,l:Number(n&za)|0}}function wg(n,e=!1){let t=new Uint32Array(n.length),i=new Uint32Array(n.length);for(let o=0;o<n.length;o++){const{h:r,l:s}=gg(n[o],e);[t[o],i[o]]=[r,s]}return[t,i]}const mg=(n,e,t)=>n<<t|e>>>32-t,bg=(n,e,t)=>e<<t|n>>>32-t,vg=(n,e,t)=>e<<t-32|n>>>64-t,yg=(n,e,t)=>n<<t-32|e>>>64-t;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const xg=n=>n instanceof Uint8Array,Cg=n=>new Uint32Array(n.buffer,n.byteOffset,Math.floor(n.byteLength/4)),Ll=n=>new DataView(n.buffer,n.byteOffset,n.byteLength),Un=(n,e)=>n<<32-e|n>>>e,_g=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!_g)throw new Error("Non little-endian hardware is not supported");function Eg(n){if(typeof n!="string")throw new Error(`utf8ToBytes expected string, got ${typeof n}`);return new Uint8Array(new TextEncoder().encode(n))}function dd(n){if(typeof n=="string"&&(n=Eg(n)),!xg(n))throw new Error(`expected Uint8Array, got ${typeof n}`);return n}class gp{clone(){return this._cloneInto()}}function wp(n){const e=i=>n().update(dd(i)).digest(),t=n();return e.outputLen=t.outputLen,e.blockLen=t.blockLen,e.create=()=>n(),e}const[mp,bp,vp]=[[],[],[]],Tg=BigInt(0),os=BigInt(1),Ag=BigInt(2),kg=BigInt(7),Sg=BigInt(256),$g=BigInt(113);for(let n=0,e=os,t=1,i=0;n<24;n++){[t,i]=[i,(2*t+3*i)%5],mp.push(2*(5*i+t)),bp.push((n+1)*(n+2)/2%64);let o=Tg;for(let r=0;r<7;r++)e=(e<<os^(e>>kg)*$g)%Sg,e&Ag&&(o^=os<<(os<<BigInt(r))-os);vp.push(o)}const[Rg,Ig]=wg(vp,!0),$0=(n,e,t)=>t>32?vg(n,e,t):mg(n,e,t),R0=(n,e,t)=>t>32?yg(n,e,t):bg(n,e,t);function Pg(n,e=24){const t=new Uint32Array(10);for(let i=24-e;i<24;i++){for(let s=0;s<10;s++)t[s]=n[s]^n[s+10]^n[s+20]^n[s+30]^n[s+40];for(let s=0;s<10;s+=2){const a=(s+8)%10,c=(s+2)%10,l=t[c],d=t[c+1],p=$0(l,d,1)^t[a],f=R0(l,d,1)^t[a+1];for(let v=0;v<50;v+=10)n[s+v]^=p,n[s+v+1]^=f}let o=n[2],r=n[3];for(let s=0;s<24;s++){const a=bp[s],c=$0(o,r,a),l=R0(o,r,a),d=mp[s];o=n[d],r=n[d+1],n[d]=c,n[d+1]=l}for(let s=0;s<50;s+=10){for(let a=0;a<10;a++)t[a]=n[s+a];for(let a=0;a<10;a++)n[s+a]^=~t[(a+2)%10]&t[(a+4)%10]}n[0]^=Rg[i],n[1]^=Ig[i]}t.fill(0)}class hd extends gp{constructor(e,t,i,o=!1,r=24){if(super(),this.blockLen=e,this.suffix=t,this.outputLen=i,this.enableXOF=o,this.rounds=r,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,k0(i),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=Cg(this.state)}keccak(){Pg(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){cc(this);const{blockLen:t,state:i}=this;e=dd(e);const o=e.length;for(let r=0;r<o;){const s=Math.min(t-this.pos,o-r);for(let a=0;a<s;a++)i[this.pos++]^=e[r++];this.pos===t&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:t,pos:i,blockLen:o}=this;e[i]^=t,t&128&&i===o-1&&this.keccak(),e[o-1]^=128,this.keccak()}writeInto(e){cc(this,!1),pp(e),this.finish();const t=this.state,{blockLen:i}=this;for(let o=0,r=e.length;o<r;){this.posOut>=i&&this.keccak();const s=Math.min(i-this.posOut,r-o);e.set(t.subarray(this.posOut,this.posOut+s),o),this.posOut+=s,o+=s}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return k0(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(fp(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:t,suffix:i,outputLen:o,rounds:r,enableXOF:s}=this;return e||(e=new hd(t,i,o,s,r)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=r,e.suffix=i,e.outputLen=o,e.enableXOF=s,e.destroyed=this.destroyed,e}}const Og=(n,e,t)=>wp(()=>new hd(e,n,t)),Ng=Og(1,136,256/8);function As(n,e){const t=e||"hex",i=Ng(Jr(n,{strict:!1})?Jc(n):n);return t==="bytes"?i:Ea(i)}function pd(n,e){const t=e?`${e}${n.toLowerCase()}`:n.substring(2).toLowerCase(),i=As(br(t),"bytes"),o=(e?t.substring(`${e}0x`.length):t).split("");for(let r=0;r<40;r+=2)i[r>>1]>>4>=8&&o[r]&&(o[r]=o[r].toUpperCase()),(i[r>>1]&15)>=8&&o[r+1]&&(o[r+1]=o[r+1].toUpperCase());return`0x${o.join("")}`}function fn(n,e){if(!zi(n,{strict:!1}))throw new Ts({address:n});return pd(n,e)}const Mg=/^0x[a-fA-F0-9]{40}$/,Ul=new fg(8192);function zi(n,e){const{strict:t=!0}=e??{};if(Ul.has(n))return Ul.get(n);const i=Mg.test(n)?n.toLowerCase()===n?!0:t?pd(n)===n:!0:!1;return Ul.set(n,i),i}function lc(n,e,t,{strict:i}={}){return Jr(n,{strict:!1})?Bg(n,e,t,{strict:i}):Cp(n,e,t,{strict:i})}function yp(n,e){if(typeof e=="number"&&e>0&&e>Tt(n)-1)throw new ap({offset:e,position:"start",size:Tt(n)})}function xp(n,e,t){if(typeof e=="number"&&typeof t=="number"&&Tt(n)!==t-e)throw new ap({offset:t,position:"end",size:Tt(n)})}function Cp(n,e,t,{strict:i}={}){yp(n,e);const o=n.slice(e,t);return i&&xp(o,e,t),o}function Bg(n,e,t,{strict:i}={}){yp(n,e);const o=`0x${n.replace("0x","").slice((e??0)*2,(t??n.length)*2)}`;return i&&xp(o,e,t),o}function Dg(n,e){if(n.length!==e.length)throw new sg({expectedLength:n.length,givenLength:e.length});const t=Lg({params:n,values:e}),i=gd(t);return i.length===0?"0x":i}function Lg({params:n,values:e}){const t=[];for(let i=0;i<n.length;i++)t.push(fd({param:n[i],value:e[i]}));return t}function fd({param:n,value:e}){const t=wd(n.type);if(t){const[i,o]=t;return jg(e,{length:i,param:{...n,type:o}})}if(n.type==="tuple")return Vg(e,{param:n});if(n.type==="address")return Ug(e);if(n.type==="bool")return Fg(e);if(n.type.startsWith("uint")||n.type.startsWith("int")){const i=n.type.startsWith("int");return zg(e,{signed:i})}if(n.type.startsWith("bytes"))return Wg(e,{param:n});if(n.type==="string")return Hg(e);throw new lg(n.type,{docsPath:"/docs/contract/encodeAbiParameters"})}function gd(n){let e=0;for(let r=0;r<n.length;r++){const{dynamic:s,encoded:a}=n[r];s?e+=32:e+=Tt(a)}const t=[],i=[];let o=0;for(let r=0;r<n.length;r++){const{dynamic:s,encoded:a}=n[r];s?(t.push(ze(e+o,{size:32})),i.push(a),o+=Tt(a)):t.push(a)}return xr([...t,...i])}function Ug(n){if(!zi(n))throw new Ts({address:n});return{dynamic:!1,encoded:Bi(n.toLowerCase())}}function jg(n,{length:e,param:t}){const i=e===null;if(!Array.isArray(n))throw new dg(n);if(!i&&n.length!==e)throw new rg({expectedLength:e,givenLength:n.length,type:`${t.type}[${e}]`});let o=!1;const r=[];for(let s=0;s<n.length;s++){const a=fd({param:t,value:n[s]});a.dynamic&&(o=!0),r.push(a)}if(i||o){const s=gd(r);if(i){const a=ze(r.length,{size:32});return{dynamic:!0,encoded:r.length>0?xr([a,s]):a}}if(o)return{dynamic:!0,encoded:s}}return{dynamic:!1,encoded:xr(r.map(({encoded:s})=>s))}}function Wg(n,{param:e}){const[,t]=e.type.split("bytes"),i=Tt(n);if(!t){let o=n;return i%32!==0&&(o=Bi(o,{dir:"right",size:Math.ceil((n.length-2)/2/32)*32})),{dynamic:!0,encoded:xr([Bi(ze(i,{size:32})),o])}}if(i!==parseInt(t))throw new og({expectedSize:parseInt(t),value:n});return{dynamic:!1,encoded:Bi(n,{dir:"right"})}}function Fg(n){if(typeof n!="boolean")throw new ne(`Invalid boolean value: "${n}" (type: ${typeof n}). Expected: \`true\` or \`false\`.`);return{dynamic:!1,encoded:Bi(up(n))}}function zg(n,{signed:e}){return{dynamic:!1,encoded:ze(n,{size:32,signed:e})}}function Hg(n){const e=ld(n),t=Math.ceil(Tt(e)/32),i=[];for(let o=0;o<t;o++)i.push(Bi(lc(e,o*32,(o+1)*32),{dir:"right"}));return{dynamic:!0,encoded:xr([Bi(ze(Tt(e),{size:32})),...i])}}function Vg(n,{param:e}){let t=!1;const i=[];for(let o=0;o<e.components.length;o++){const r=e.components[o],s=Array.isArray(n)?o:r.name,a=fd({param:r,value:n[s]});i.push(a),a.dynamic&&(t=!0)}return{dynamic:t,encoded:t?gd(i):xr(i.map(({encoded:o})=>o))}}function wd(n){const e=n.match(/^(.*)\[(\d+)?\]$/);return e?[e[2]?Number(e[2]):null,e[1]]:void 0}function Ci(n){return typeof n=="string"?{address:n,type:"json-rpc"}:n}class _p extends ne{constructor({docsPath:e}={}){super(["Could not find an Account to execute with this Action.","Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient."].join(`
`),{docsPath:e,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}class vu extends ne{constructor({blockNumber:e,chain:t,contract:i}){super(`Chain "${t.name}" does not support contract "${i.name}".`,{metaMessages:["This could be due to any of the following:",...e&&i.blockCreated&&i.blockCreated>e?[`- The contract "${i.name}" was not deployed until block ${i.blockCreated} (current block ${e}).`]:[`- The chain does not have the contract "${i.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}}class Zg extends ne{constructor({chain:e,currentChainId:t}){super(`The current chain of the wallet (id: ${t}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,{metaMessages:[`Current Chain ID:  ${t}`,`Expected Chain ID: ${e.id} – ${e.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}}class Gg extends ne{constructor(){super(["No chain was provided to the request.","Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}}class Ep extends ne{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}function qg({chain:n,currentChainId:e}){if(!n)throw new Gg;if(e!==n.id)throw new Zg({chain:n,currentChainId:e})}const Yg={gwei:9,wei:18},Kg={ether:-9,wei:9},Jg={ether:-18,gwei:-9};function Ta(n,e){let t=n.toString();const i=t.startsWith("-");i&&(t=t.slice(1)),t=t.padStart(e,"0");let[o,r]=[t.slice(0,t.length-e),t.slice(t.length-e)];return r=r.replace(/(0+)$/,""),`${i?"-":""}${o||"0"}${r?`.${r}`:""}`}function Ht(n,e="wei"){return Ta(n,Kg[e])}class po extends ne{constructor({cause:e,message:t}={}){var o;const i=(o=t==null?void 0:t.replace("execution reverted: ",""))==null?void 0:o.replace("execution reverted","");super(`Execution reverted ${i?`with reason: ${i}`:"for an unknown reason"}.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}}Object.defineProperty(po,"code",{enumerable:!0,configurable:!0,writable:!0,value:3});Object.defineProperty(po,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class uc extends ne{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${Ht(t)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}}Object.defineProperty(uc,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class yu extends ne{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${Ht(t)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}}Object.defineProperty(yu,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class xu extends ne{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is higher than the next one expected.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}}Object.defineProperty(xu,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class Cu extends ne{constructor({cause:e,nonce:t}={}){super([`Nonce provided for the transaction ${t?`(${t}) `:""}is lower than the current nonce of the account.`,"Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join(`
`),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}}Object.defineProperty(Cu,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class _u extends ne{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}exceeds the maximum allowed nonce.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}}Object.defineProperty(_u,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class Eu extends ne{constructor({cause:e}={}){super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join(`
`),{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}}Object.defineProperty(Eu,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});class Tu extends ne{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}}Object.defineProperty(Tu,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class Au extends ne{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction is too low.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}}Object.defineProperty(Au,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class ku extends ne{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}}Object.defineProperty(ku,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class dc extends ne{constructor({cause:e,maxPriorityFeePerGas:t,maxFeePerGas:i}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${t?` = ${Ht(t)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${i?` = ${Ht(i)} gwei`:""}).`].join(`
`),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}}Object.defineProperty(dc,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class el extends ne{constructor({cause:e}){super(`An error occurred while executing: ${e==null?void 0:e.shortMessage}`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}function md(n,e="wei"){return Ta(n,Yg[e])}function Aa(n){const e=Object.entries(n).map(([i,o])=>o===void 0||o===!1?null:[i,o]).filter(Boolean),t=e.reduce((i,[o])=>Math.max(i,o.length),0);return e.map(([i,o])=>`  ${`${i}:`.padEnd(t+1)}  ${o}`).join(`
`)}class Xg extends ne{constructor(){super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.","Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}}class Qg extends ne{constructor({transaction:e}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",Aa(e),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}}class ew extends ne{constructor(e,{account:t,docsPath:i,chain:o,data:r,gas:s,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:d,to:p,value:f}){var T;const v=Aa({chain:o&&`${o==null?void 0:o.name} (id: ${o==null?void 0:o.id})`,from:t==null?void 0:t.address,to:p,value:typeof f<"u"&&`${md(f)} ${((T=o==null?void 0:o.nativeCurrency)==null?void 0:T.symbol)||"ETH"}`,data:r,gas:s,gasPrice:typeof a<"u"&&`${Ht(a)} gwei`,maxFeePerGas:typeof c<"u"&&`${Ht(c)} gwei`,maxPriorityFeePerGas:typeof l<"u"&&`${Ht(l)} gwei`,nonce:d});super(e.shortMessage,{cause:e,docsPath:i,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Request Arguments:",v].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=e}}class Tp extends ne{constructor({blockHash:e,blockNumber:t,blockTag:i,hash:o,index:r}){let s="Transaction";i&&r!==void 0&&(s=`Transaction at block time "${i}" at index "${r}"`),e&&r!==void 0&&(s=`Transaction at block hash "${e}" at index "${r}"`),t&&r!==void 0&&(s=`Transaction at block number "${t}" at index "${r}"`),o&&(s=`Transaction with hash "${o}"`),super(`${s} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionNotFoundError"})}}class Ap extends ne{constructor({hash:e}){super(`Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionReceiptNotFoundError"})}}class tw extends ne{constructor({hash:e}){super(`Timed out while waiting for transaction with hash "${e}" to be confirmed.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WaitForTransactionReceiptTimeoutError"})}}const Fn=(n,e,t)=>JSON.stringify(n,(i,o)=>{const r=typeof o=="bigint"?o.toString():o;return typeof e=="function"?e(i,r):r},t);class gs extends ne{constructor({body:e,details:t,headers:i,status:o,url:r}){super("HTTP request failed.",{details:t,metaMessages:[o&&`Status: ${o}`,`URL: ${cd(r)}`,e&&`Request body: ${Fn(e)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=i,this.status=o,this.url=r}}class kp extends ne{constructor({body:e,error:t,url:i}){super("RPC Request failed.",{cause:t,details:t.message,metaMessages:[`URL: ${cd(i)}`,`Request body: ${Fn(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=t.code}}class I0 extends ne{constructor({body:e,url:t}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${cd(t)}`,`Request body: ${Fn(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}const nw=-1;class qt extends ne{constructor(e,{code:t,docsPath:i,metaMessages:o,shortMessage:r}){super(r,{cause:e,docsPath:i,metaMessages:o||(e==null?void 0:e.metaMessages)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=e.name,this.code=e instanceof kp?e.code:t??nw}}class Jo extends qt{constructor(e,t){super(e,t),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t.data}}class ks extends qt{constructor(e){super(e,{code:ks.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}}Object.defineProperty(ks,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class Ss extends qt{constructor(e){super(e,{code:Ss.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}}Object.defineProperty(Ss,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class $s extends qt{constructor(e){super(e,{code:$s.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}}Object.defineProperty($s,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class Rs extends qt{constructor(e){super(e,{code:Rs.code,shortMessage:["Invalid parameters were provided to the RPC method.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}}Object.defineProperty(Rs,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class Cr extends qt{constructor(e){super(e,{code:Cr.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}}Object.defineProperty(Cr,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class Is extends qt{constructor(e){super(e,{code:Is.code,shortMessage:["Missing or invalid parameters.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}}Object.defineProperty(Is,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class Ps extends qt{constructor(e){super(e,{code:Ps.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(Ps,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class Di extends qt{constructor(e){super(e,{code:Di.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}}Object.defineProperty(Di,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class Os extends qt{constructor(e){super(e,{code:Os.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}}Object.defineProperty(Os,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class Ns extends qt{constructor(e){super(e,{code:Ns.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}}Object.defineProperty(Ns,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class yo extends qt{constructor(e){super(e,{code:yo.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}}Object.defineProperty(yo,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class Ms extends qt{constructor(e){super(e,{code:Ms.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}}Object.defineProperty(Ms,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class lt extends Jo{constructor(e){super(e,{code:lt.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}}Object.defineProperty(lt,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class Bs extends Jo{constructor(e){super(e,{code:Bs.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}}Object.defineProperty(Bs,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class Ds extends Jo{constructor(e){super(e,{code:Ds.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}}Object.defineProperty(Ds,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class Ls extends Jo{constructor(e){super(e,{code:Ls.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}}Object.defineProperty(Ls,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class Us extends Jo{constructor(e){super(e,{code:Us.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}}Object.defineProperty(Us,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class Jt extends Jo{constructor(e){super(e,{code:Jt.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}}Object.defineProperty(Jt,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class iw extends qt{constructor(e){super(e,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}function bd(n,e){const t=(n.details||"").toLowerCase(),i=n instanceof ne?n.walk(o=>o.code===po.code):n;return i instanceof ne?new po({cause:n,message:i.details}):po.nodeMessage.test(t)?new po({cause:n,message:n.details}):uc.nodeMessage.test(t)?new uc({cause:n,maxFeePerGas:e==null?void 0:e.maxFeePerGas}):yu.nodeMessage.test(t)?new yu({cause:n,maxFeePerGas:e==null?void 0:e.maxFeePerGas}):xu.nodeMessage.test(t)?new xu({cause:n,nonce:e==null?void 0:e.nonce}):Cu.nodeMessage.test(t)?new Cu({cause:n,nonce:e==null?void 0:e.nonce}):_u.nodeMessage.test(t)?new _u({cause:n,nonce:e==null?void 0:e.nonce}):Eu.nodeMessage.test(t)?new Eu({cause:n}):Tu.nodeMessage.test(t)?new Tu({cause:n,gas:e==null?void 0:e.gas}):Au.nodeMessage.test(t)?new Au({cause:n,gas:e==null?void 0:e.gas}):ku.nodeMessage.test(t)?new ku({cause:n}):dc.nodeMessage.test(t)?new dc({cause:n,maxFeePerGas:e==null?void 0:e.maxFeePerGas,maxPriorityFeePerGas:e==null?void 0:e.maxPriorityFeePerGas}):new el({cause:n})}function rw(n,{docsPath:e,...t}){const i=(()=>{const o=bd(n,t);return o instanceof el?n:o})();return new ew(i,{docsPath:e,...t})}function vd(n,{format:e}){if(!e)return{};const t={};function i(r){const s=Object.keys(r);for(const a of s)a in n&&(t[a]=n[a]),r[a]&&typeof r[a]=="object"&&!Array.isArray(r[a])&&i(r[a])}const o=e(n||{});return i(o),t}const ow={legacy:"0x0",eip2930:"0x1",eip1559:"0x2",eip4844:"0x3"};function yd(n){const e={};return typeof n.accessList<"u"&&(e.accessList=n.accessList),typeof n.blobVersionedHashes<"u"&&(e.blobVersionedHashes=n.blobVersionedHashes),typeof n.blobs<"u"&&(typeof n.blobs[0]!="string"?e.blobs=n.blobs.map(t=>St(t)):e.blobs=n.blobs),typeof n.data<"u"&&(e.data=n.data),typeof n.from<"u"&&(e.from=n.from),typeof n.gas<"u"&&(e.gas=ze(n.gas)),typeof n.gasPrice<"u"&&(e.gasPrice=ze(n.gasPrice)),typeof n.maxFeePerBlobGas<"u"&&(e.maxFeePerBlobGas=ze(n.maxFeePerBlobGas)),typeof n.maxFeePerGas<"u"&&(e.maxFeePerGas=ze(n.maxFeePerGas)),typeof n.maxPriorityFeePerGas<"u"&&(e.maxPriorityFeePerGas=ze(n.maxPriorityFeePerGas)),typeof n.nonce<"u"&&(e.nonce=ze(n.nonce)),typeof n.to<"u"&&(e.to=n.to),typeof n.type<"u"&&(e.type=ow[n.type]),typeof n.value<"u"&&(e.value=ze(n.value)),e}function tt(n,e,t){return i=>{var o,r;return((o=n[e.name])==null?void 0:o.call(n,i))??((r=n[t])==null?void 0:r.call(n,i))??e(n,i)}}function tl(n){const{account:e,gasPrice:t,maxFeePerGas:i,maxPriorityFeePerGas:o,to:r}=n,s=e?Ci(e):void 0;if(s&&!zi(s.address))throw new Ts({address:s.address});if(r&&!zi(r))throw new Ts({address:r});if(typeof t<"u"&&(typeof i<"u"||typeof o<"u"))throw new Xg;if(i&&i>2n**256n-1n)throw new uc({maxFeePerGas:i});if(o&&i&&o>i)throw new dc({maxFeePerGas:i,maxPriorityFeePerGas:o})}async function Sp(n){const e=await n.request({method:"eth_chainId"});return bo(e)}class sw extends ne{constructor(){super("`baseFeeMultiplier` must be greater than 1."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseFeeScalarError"})}}class xd extends ne{constructor(){super("Chain does not support EIP-1559 fees."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Eip1559FeesNotSupportedError"})}}class aw extends ne{constructor({maxPriorityFeePerGas:e}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${Ht(e)} gwei).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MaxFeePerGasTooLowError"})}}class $p extends ne{constructor({blockHash:e,blockNumber:t}){let i="Block";e&&(i=`Block at hash "${e}"`),t&&(i=`Block at number "${t}"`),super(`${i} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlockNotFoundError"})}}const Rp={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559","0x3":"eip4844"};function Ip(n){const e={...n,blockHash:n.blockHash?n.blockHash:null,blockNumber:n.blockNumber?BigInt(n.blockNumber):null,chainId:n.chainId?bo(n.chainId):void 0,gas:n.gas?BigInt(n.gas):void 0,gasPrice:n.gasPrice?BigInt(n.gasPrice):void 0,maxFeePerBlobGas:n.maxFeePerBlobGas?BigInt(n.maxFeePerBlobGas):void 0,maxFeePerGas:n.maxFeePerGas?BigInt(n.maxFeePerGas):void 0,maxPriorityFeePerGas:n.maxPriorityFeePerGas?BigInt(n.maxPriorityFeePerGas):void 0,nonce:n.nonce?bo(n.nonce):void 0,to:n.to?n.to:null,transactionIndex:n.transactionIndex?Number(n.transactionIndex):null,type:n.type?Rp[n.type]:void 0,typeHex:n.type?n.type:void 0,value:n.value?BigInt(n.value):void 0,v:n.v?BigInt(n.v):void 0};return e.yParity=(()=>{if(n.yParity)return Number(n.yParity);if(typeof e.v=="bigint"){if(e.v===0n||e.v===27n)return 0;if(e.v===1n||e.v===28n)return 1;if(e.v>=35n)return e.v%2n===0n?1:0}})(),e.type==="legacy"&&(delete e.accessList,delete e.maxFeePerBlobGas,delete e.maxFeePerGas,delete e.maxPriorityFeePerGas,delete e.yParity),e.type==="eip2930"&&(delete e.maxFeePerBlobGas,delete e.maxFeePerGas,delete e.maxPriorityFeePerGas),e.type==="eip1559"&&delete e.maxFeePerBlobGas,e}function cw(n){var t;const e=(t=n.transactions)==null?void 0:t.map(i=>typeof i=="string"?i:Ip(i));return{...n,baseFeePerGas:n.baseFeePerGas?BigInt(n.baseFeePerGas):null,blobGasUsed:n.blobGasUsed?BigInt(n.blobGasUsed):void 0,difficulty:n.difficulty?BigInt(n.difficulty):void 0,excessBlobGas:n.excessBlobGas?BigInt(n.excessBlobGas):void 0,gasLimit:n.gasLimit?BigInt(n.gasLimit):void 0,gasUsed:n.gasUsed?BigInt(n.gasUsed):void 0,hash:n.hash?n.hash:null,logsBloom:n.logsBloom?n.logsBloom:null,nonce:n.nonce?n.nonce:null,number:n.number?BigInt(n.number):null,size:n.size?BigInt(n.size):void 0,timestamp:n.timestamp?BigInt(n.timestamp):void 0,transactions:e,totalDifficulty:n.totalDifficulty?BigInt(n.totalDifficulty):null}}async function js(n,{blockHash:e,blockNumber:t,blockTag:i,includeTransactions:o}={}){var d,p,f;const r=i??"latest",s=o??!1,a=t!==void 0?ze(t):void 0;let c=null;if(e?c=await n.request({method:"eth_getBlockByHash",params:[e,s]}):c=await n.request({method:"eth_getBlockByNumber",params:[a||r,s]}),!c)throw new $p({blockHash:e,blockNumber:t});return(((f=(p=(d=n.chain)==null?void 0:d.formatters)==null?void 0:p.block)==null?void 0:f.format)||cw)(c)}async function Pp(n){const e=await n.request({method:"eth_gasPrice"});return BigInt(e)}async function lw(n,e){var r,s,a;const{block:t,chain:i=n.chain,request:o}=e||{};if(typeof((r=i==null?void 0:i.fees)==null?void 0:r.defaultPriorityFee)=="function"){const c=t||await tt(n,js,"getBlock")({});return i.fees.defaultPriorityFee({block:c,client:n,request:o})}if(typeof((s=i==null?void 0:i.fees)==null?void 0:s.defaultPriorityFee)<"u")return(a=i==null?void 0:i.fees)==null?void 0:a.defaultPriorityFee;try{const c=await n.request({method:"eth_maxPriorityFeePerGas"});return Xc(c)}catch{const[c,l]=await Promise.all([t?Promise.resolve(t):tt(n,js,"getBlock")({}),tt(n,Pp,"getGasPrice")({})]);if(typeof c.baseFeePerGas!="bigint")throw new xd;const d=l-c.baseFeePerGas;return d<0n?0n:d}}async function P0(n,e){var f,v;const{block:t,chain:i=n.chain,request:o,type:r="eip1559"}=e||{},s=await(async()=>{var T,S;return typeof((T=i==null?void 0:i.fees)==null?void 0:T.baseFeeMultiplier)=="function"?i.fees.baseFeeMultiplier({block:t,client:n,request:o}):((S=i==null?void 0:i.fees)==null?void 0:S.baseFeeMultiplier)??1.2})();if(s<1)throw new sw;const c=10**(((f=s.toString().split(".")[1])==null?void 0:f.length)??0),l=T=>T*BigInt(Math.ceil(s*c))/BigInt(c),d=t||await tt(n,js,"getBlock")({});if(typeof((v=i==null?void 0:i.fees)==null?void 0:v.estimateFeesPerGas)=="function"){const T=await i.fees.estimateFeesPerGas({block:t,client:n,multiply:l,request:o,type:r});if(T!==null)return T}if(r==="eip1559"){if(typeof d.baseFeePerGas!="bigint")throw new xd;const T=typeof(o==null?void 0:o.maxPriorityFeePerGas)=="bigint"?o.maxPriorityFeePerGas:await lw(n,{block:d,chain:i,request:o}),S=l(d.baseFeePerGas);return{maxFeePerGas:(o==null?void 0:o.maxFeePerGas)??S+T,maxPriorityFeePerGas:T}}return{gasPrice:(o==null?void 0:o.gasPrice)??l(await tt(n,Pp,"getGasPrice")({}))}}class uw extends ne{constructor(e,{account:t,docsPath:i,chain:o,data:r,gas:s,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:d,to:p,value:f}){var T;const v=Aa({from:t==null?void 0:t.address,to:p,value:typeof f<"u"&&`${md(f)} ${((T=o==null?void 0:o.nativeCurrency)==null?void 0:T.symbol)||"ETH"}`,data:r,gas:s,gasPrice:typeof a<"u"&&`${Ht(a)} gwei`,maxFeePerGas:typeof c<"u"&&`${Ht(c)} gwei`,maxPriorityFeePerGas:typeof l<"u"&&`${Ht(l)} gwei`,nonce:d});super(e.shortMessage,{cause:e,docsPath:i,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Estimate Gas Arguments:",v].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EstimateGasExecutionError"}),this.cause=e}}function dw(n,{docsPath:e,...t}){const i=(()=>{const o=bd(n,t);return o instanceof el?n:o})();return new uw(i,{docsPath:e,...t})}async function Cd(n,e){var o,r,s;const t=e.account??n.account,i=t?Ci(t):void 0;try{const{accessList:a,blobs:c,blobVersionedHashes:l,blockNumber:d,blockTag:p,data:f,gas:v,gasPrice:T,maxFeePerBlobGas:S,maxFeePerGas:$,maxPriorityFeePerGas:B,nonce:_,to:U,value:D,...W}=await Ed(n,{...e,parameters:(i==null?void 0:i.type)==="local"?void 0:["blobVersionedHashes"]}),Q=(d?ze(d):void 0)||p;tl(e);const g=(s=(r=(o=n.chain)==null?void 0:o.formatters)==null?void 0:r.transactionRequest)==null?void 0:s.format,b=(g||yd)({...vd(W,{format:g}),from:i==null?void 0:i.address,accessList:a,blobs:c,blobVersionedHashes:l,data:f,gas:v,gasPrice:T,maxFeePerBlobGas:S,maxFeePerGas:$,maxPriorityFeePerGas:B,nonce:_,to:U,value:D}),R=await n.request({method:"eth_estimateGas",params:Q?[b,Q]:[b]});return BigInt(R)}catch(a){throw dw(a,{...e,account:i,chain:n.chain})}}async function hw(n,{address:e,blockTag:t="latest",blockNumber:i}){const o=await n.request({method:"eth_getTransactionCount",params:[e,i?ze(i):t]});return bo(o)}function Op(n){const{kzg:e}=n,t=n.to??(typeof n.blobs[0]=="string"?"hex":"bytes"),i=typeof n.blobs[0]=="string"?n.blobs.map(r=>Fi(r)):n.blobs,o=[];for(const r of i)o.push(Uint8Array.from(e.blobToKzgCommitment(r)));return t==="bytes"?o:o.map(r=>St(r))}function Np(n){const{kzg:e}=n,t=n.to??(typeof n.blobs[0]=="string"?"hex":"bytes"),i=typeof n.blobs[0]=="string"?n.blobs.map(s=>Fi(s)):n.blobs,o=typeof n.commitments[0]=="string"?n.commitments.map(s=>Fi(s)):n.commitments,r=[];for(let s=0;s<i.length;s++){const a=i[s],c=o[s];r.push(Uint8Array.from(e.computeBlobKzgProof(a,c)))}return t==="bytes"?r:r.map(s=>St(s))}function pw(n,e,t,i){if(typeof n.setBigUint64=="function")return n.setBigUint64(e,t,i);const o=BigInt(32),r=BigInt(4294967295),s=Number(t>>o&r),a=Number(t&r),c=i?4:0,l=i?0:4;n.setUint32(e+c,s,i),n.setUint32(e+l,a,i)}class fw extends gp{constructor(e,t,i,o){super(),this.blockLen=e,this.outputLen=t,this.padOffset=i,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=Ll(this.buffer)}update(e){cc(this);const{view:t,buffer:i,blockLen:o}=this;e=dd(e);const r=e.length;for(let s=0;s<r;){const a=Math.min(o-this.pos,r-s);if(a===o){const c=Ll(e);for(;o<=r-s;s+=o)this.process(c,s);continue}i.set(e.subarray(s,s+a),this.pos),this.pos+=a,s+=a,this.pos===o&&(this.process(t,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){cc(this),fp(e,this),this.finished=!0;const{buffer:t,view:i,blockLen:o,isLE:r}=this;let{pos:s}=this;t[s++]=128,this.buffer.subarray(s).fill(0),this.padOffset>o-s&&(this.process(i,0),s=0);for(let p=s;p<o;p++)t[p]=0;pw(i,o-8,BigInt(this.length*8),r),this.process(i,0);const a=Ll(e),c=this.outputLen;if(c%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const l=c/4,d=this.get();if(l>d.length)throw new Error("_sha2: outputLen bigger than state");for(let p=0;p<l;p++)a.setUint32(4*p,d[p],r)}digest(){const{buffer:e,outputLen:t}=this;this.digestInto(e);const i=e.slice(0,t);return this.destroy(),i}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());const{blockLen:t,buffer:i,length:o,finished:r,destroyed:s,pos:a}=this;return e.length=o,e.pos=a,e.finished=r,e.destroyed=s,o%t&&e.buffer.set(i),e}}const gw=(n,e,t)=>n&e^~n&t,ww=(n,e,t)=>n&e^n&t^e&t,mw=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Ai=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),ki=new Uint32Array(64);class bw extends fw{constructor(){super(64,32,8,!1),this.A=Ai[0]|0,this.B=Ai[1]|0,this.C=Ai[2]|0,this.D=Ai[3]|0,this.E=Ai[4]|0,this.F=Ai[5]|0,this.G=Ai[6]|0,this.H=Ai[7]|0}get(){const{A:e,B:t,C:i,D:o,E:r,F:s,G:a,H:c}=this;return[e,t,i,o,r,s,a,c]}set(e,t,i,o,r,s,a,c){this.A=e|0,this.B=t|0,this.C=i|0,this.D=o|0,this.E=r|0,this.F=s|0,this.G=a|0,this.H=c|0}process(e,t){for(let p=0;p<16;p++,t+=4)ki[p]=e.getUint32(t,!1);for(let p=16;p<64;p++){const f=ki[p-15],v=ki[p-2],T=Un(f,7)^Un(f,18)^f>>>3,S=Un(v,17)^Un(v,19)^v>>>10;ki[p]=S+ki[p-7]+T+ki[p-16]|0}let{A:i,B:o,C:r,D:s,E:a,F:c,G:l,H:d}=this;for(let p=0;p<64;p++){const f=Un(a,6)^Un(a,11)^Un(a,25),v=d+f+gw(a,c,l)+mw[p]+ki[p]|0,S=(Un(i,2)^Un(i,13)^Un(i,22))+ww(i,o,r)|0;d=l,l=c,c=a,a=s+v|0,s=r,r=o,o=i,i=v+S|0}i=i+this.A|0,o=o+this.B|0,r=r+this.C|0,s=s+this.D|0,a=a+this.E|0,c=c+this.F|0,l=l+this.G|0,d=d+this.H|0,this.set(i,o,r,s,a,c,l,d)}roundClean(){ki.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}const vw=wp(()=>new bw);function yw(n,e){const t=e||"hex",i=vw(Jr(n,{strict:!1})?Jc(n):n);return t==="bytes"?i:Ea(i)}function xw(n){const{commitment:e,version:t=1}=n,i=n.to??(typeof e=="string"?"hex":"bytes"),o=yw(e,"bytes");return o.set([t],0),i==="bytes"?o:St(o)}function Cw(n){const{commitments:e,version:t}=n,i=n.to??(typeof e[0]=="string"?"hex":"bytes"),o=[];for(const r of e)o.push(xw({commitment:r,to:i,version:t}));return o}const O0=6,Mp=32,_d=4096,Bp=Mp*_d,N0=Bp*O0-1-1*_d*O0;class _w extends ne{constructor({maxSize:e,size:t}){super("Blob size is too large.",{metaMessages:[`Max: ${e} bytes`,`Given: ${t} bytes`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlobSizeTooLargeError"})}}class Ew extends ne{constructor(){super("Blob data must not be empty."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EmptyBlobError"})}}class M0 extends ne{constructor({offset:e}){super(`Offset \`${e}\` cannot be negative.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NegativeOffsetError"})}}class Tw extends ne{constructor({length:e,position:t}){super(`Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"PositionOutOfBoundsError"})}}class Aw extends ne{constructor({count:e,limit:t}){super(`Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RecursiveReadLimitExceededError"})}}const kw={bytes:new Uint8Array,dataView:new DataView(new ArrayBuffer(0)),position:0,positionReadCount:new Map,recursiveReadCount:0,recursiveReadLimit:1/0,assertReadLimit(){if(this.recursiveReadCount>=this.recursiveReadLimit)throw new Aw({count:this.recursiveReadCount+1,limit:this.recursiveReadLimit})},assertPosition(n){if(n<0||n>this.bytes.length-1)throw new Tw({length:this.bytes.length,position:n})},decrementPosition(n){if(n<0)throw new M0({offset:n});const e=this.position-n;this.assertPosition(e),this.position=e},getReadCount(n){return this.positionReadCount.get(n||this.position)||0},incrementPosition(n){if(n<0)throw new M0({offset:n});const e=this.position+n;this.assertPosition(e),this.position=e},inspectByte(n){const e=n??this.position;return this.assertPosition(e),this.bytes[e]},inspectBytes(n,e){const t=e??this.position;return this.assertPosition(t+n-1),this.bytes.subarray(t,t+n)},inspectUint8(n){const e=n??this.position;return this.assertPosition(e),this.bytes[e]},inspectUint16(n){const e=n??this.position;return this.assertPosition(e+1),this.dataView.getUint16(e)},inspectUint24(n){const e=n??this.position;return this.assertPosition(e+2),(this.dataView.getUint16(e)<<8)+this.dataView.getUint8(e+2)},inspectUint32(n){const e=n??this.position;return this.assertPosition(e+3),this.dataView.getUint32(e)},pushByte(n){this.assertPosition(this.position),this.bytes[this.position]=n,this.position++},pushBytes(n){this.assertPosition(this.position+n.length-1),this.bytes.set(n,this.position),this.position+=n.length},pushUint8(n){this.assertPosition(this.position),this.bytes[this.position]=n,this.position++},pushUint16(n){this.assertPosition(this.position+1),this.dataView.setUint16(this.position,n),this.position+=2},pushUint24(n){this.assertPosition(this.position+2),this.dataView.setUint16(this.position,n>>8),this.dataView.setUint8(this.position+2,n&255),this.position+=3},pushUint32(n){this.assertPosition(this.position+3),this.dataView.setUint32(this.position,n),this.position+=4},readByte(){this.assertReadLimit(),this._touch();const n=this.inspectByte();return this.position++,n},readBytes(n,e){this.assertReadLimit(),this._touch();const t=this.inspectBytes(n);return this.position+=e??n,t},readUint8(){this.assertReadLimit(),this._touch();const n=this.inspectUint8();return this.position+=1,n},readUint16(){this.assertReadLimit(),this._touch();const n=this.inspectUint16();return this.position+=2,n},readUint24(){this.assertReadLimit(),this._touch();const n=this.inspectUint24();return this.position+=3,n},readUint32(){this.assertReadLimit(),this._touch();const n=this.inspectUint32();return this.position+=4,n},get remaining(){return this.bytes.length-this.position},setPosition(n){const e=this.position;return this.assertPosition(n),this.position=n,()=>this.position=e},_touch(){if(this.recursiveReadLimit===1/0)return;const n=this.getReadCount();this.positionReadCount.set(this.position,n+1),n>0&&this.recursiveReadCount++}};function Dp(n,{recursiveReadLimit:e=8192}={}){const t=Object.create(kw);return t.bytes=n,t.dataView=new DataView(n.buffer,n.byteOffset,n.byteLength),t.positionReadCount=new Map,t.recursiveReadLimit=e,t}function Sw(n){const e=n.to??(typeof n.data=="string"?"hex":"bytes"),t=typeof n.data=="string"?Fi(n.data):n.data,i=Tt(t);if(!i)throw new Ew;if(i>N0)throw new _w({maxSize:N0,size:i});const o=[];let r=!0,s=0;for(;r;){const a=Dp(new Uint8Array(Bp));let c=0;for(;c<_d;){const l=t.slice(s,s+(Mp-1));if(a.pushByte(0),a.pushBytes(l),l.length<31){a.pushByte(128),r=!1;break}c++,s+=31}o.push(a)}return e==="bytes"?o.map(a=>a.bytes):o.map(a=>St(a.bytes))}function $w(n){const{data:e,kzg:t,to:i}=n,o=n.blobs??Sw({data:e,to:i}),r=n.commitments??Op({blobs:o,kzg:t,to:i}),s=n.proofs??Np({blobs:o,commitments:r,kzg:t,to:i}),a=[];for(let c=0;c<o.length;c++)a.push({blob:o[c],commitment:r[c],proof:s[c]});return a}function Rw(n){if(n.type)return n.type;if(typeof n.blobs<"u"||typeof n.blobVersionedHashes<"u"||typeof n.maxFeePerBlobGas<"u"||typeof n.sidecars<"u")return"eip4844";if(typeof n.maxFeePerGas<"u"||typeof n.maxPriorityFeePerGas<"u")return"eip1559";if(typeof n.gasPrice<"u")return typeof n.accessList<"u"?"eip2930":"legacy";throw new Qg({transaction:n})}const Lp=["blobVersionedHashes","chainId","fees","gas","nonce","type"];async function Ed(n,e){const{account:t=n.account,blobs:i,chain:o,chainId:r,gas:s,kzg:a,nonce:c,parameters:l=Lp,type:d}=e,p=t?Ci(t):void 0,f={...e,...p?{from:p==null?void 0:p.address}:{}};let v;async function T(){return v||(v=await tt(n,js,"getBlock")({blockTag:"latest"}),v)}if((l.includes("blobVersionedHashes")||l.includes("sidecars"))&&i&&a){const S=Op({blobs:i,kzg:a});if(l.includes("blobVersionedHashes")){const $=Cw({commitments:S,to:"hex"});f.blobVersionedHashes=$}if(l.includes("sidecars")){const $=Np({blobs:i,commitments:S,kzg:a}),B=$w({blobs:i,commitments:S,proofs:$,to:"hex"});f.sidecars=B}}if(l.includes("chainId")&&(o?f.chainId=o.id:typeof r<"u"?f.chainId=r:f.chainId=await tt(n,Sp,"getChainId")({})),l.includes("nonce")&&typeof c>"u"&&p&&(f.nonce=await tt(n,hw,"getTransactionCount")({address:p.address,blockTag:"pending"})),(l.includes("fees")||l.includes("type"))&&typeof d>"u")try{f.type=Rw(f)}catch{const S=await T();f.type=typeof(S==null?void 0:S.baseFeePerGas)=="bigint"?"eip1559":"legacy"}if(l.includes("fees"))if(f.type!=="legacy"&&f.type!=="eip2930"){if(typeof f.maxFeePerGas>"u"||typeof f.maxPriorityFeePerGas>"u"){const S=await T(),{maxFeePerGas:$,maxPriorityFeePerGas:B}=await P0(n,{block:S,chain:o,request:f});if(typeof e.maxPriorityFeePerGas>"u"&&e.maxFeePerGas&&e.maxFeePerGas<B)throw new aw({maxPriorityFeePerGas:B});f.maxPriorityFeePerGas=B,f.maxFeePerGas=$}}else{if(typeof e.maxFeePerGas<"u"||typeof e.maxPriorityFeePerGas<"u")throw new xd;const S=await T(),{gasPrice:$}=await P0(n,{block:S,chain:o,request:f,type:"legacy"});f.gasPrice=$}return l.includes("gas")&&typeof s>"u"&&(f.gas=await tt(n,Cd,"estimateGas")({...f,account:p?{address:p.address,type:"json-rpc"}:void 0})),tl(f),delete f.parameters,f}async function Iw(n,{serializedTransaction:e}){return n.request({method:"eth_sendRawTransaction",params:[e]},{retryCount:0})}async function Pw(n,e){var B,_,U,D;const{account:t=n.account,chain:i=n.chain,accessList:o,blobs:r,data:s,gas:a,gasPrice:c,maxFeePerBlobGas:l,maxFeePerGas:d,maxPriorityFeePerGas:p,nonce:f,to:v,value:T,...S}=e;if(!t)throw new _p({docsPath:"/docs/actions/wallet/sendTransaction"});const $=Ci(t);try{tl(e);let W;if(i!==null&&(W=await tt(n,Sp,"getChainId")({}),qg({currentChainId:W,chain:i})),$.type==="local"){const m=await tt(n,Ed,"prepareTransactionRequest")({account:$,accessList:o,blobs:r,chain:i,chainId:W,data:s,gas:a,gasPrice:c,maxFeePerBlobGas:l,maxFeePerGas:d,maxPriorityFeePerGas:p,nonce:f,parameters:[...Lp,"sidecars"],to:v,value:T,...S}),b=(B=i==null?void 0:i.serializers)==null?void 0:B.transaction,R=await $.signTransaction(m,{serializer:b});return await tt(n,Iw,"sendRawTransaction")({serializedTransaction:R})}const Z=(D=(U=(_=n.chain)==null?void 0:_.formatters)==null?void 0:U.transactionRequest)==null?void 0:D.format,g=(Z||yd)({...vd(S,{format:Z}),accessList:o,blobs:r,data:s,from:$.address,gas:a,gasPrice:c,maxFeePerBlobGas:l,maxFeePerGas:d,maxPriorityFeePerGas:p,nonce:f,to:v,value:T});return await n.request({method:"eth_sendTransaction",params:[g]},{retryCount:0})}catch(W){throw rw(W,{...e,account:$,chain:e.chain||void 0})}}const Su=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],Up=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"},{inputs:[],name:"ResolverNotContract",type:"error"},{inputs:[{name:"returnData",type:"bytes"}],name:"ResolverError",type:"error"},{inputs:[{components:[{name:"status",type:"uint16"},{name:"message",type:"string"}],name:"errors",type:"tuple[]"}],name:"HttpError",type:"error"}],Ow=[...Up,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]},{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"},{name:"gateways",type:"string[]"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],Nw=[...Up,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]},{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"},{type:"string[]",name:"gateways"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],B0=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}];function Mw(n,e={}){typeof e.size<"u"&&Pn(n,{size:e.size});const t=St(n,e);return Xc(t,e)}function Bw(n,e={}){let t=n;if(typeof e.size<"u"&&(Pn(t,{size:e.size}),t=_a(t)),t.length>1||t[0]>1)throw new q1(t);return!!t[0]}function di(n,e={}){typeof e.size<"u"&&Pn(n,{size:e.size});const t=St(n,e);return bo(t,e)}function Dw(n,e={}){let t=n;return typeof e.size<"u"&&(Pn(t,{size:e.size}),t=_a(t,{dir:"right"})),new TextDecoder().decode(t)}function jp(n,e){const t=typeof e=="string"?Fi(e):e,i=Dp(t);if(Tt(t)===0&&n.length>0)throw new Qc;if(Tt(e)&&Tt(e)<32)throw new ig({data:typeof e=="string"?e:St(e),params:n,size:Tt(e)});let o=0;const r=[];for(let s=0;s<n.length;++s){const a=n[s];i.setPosition(o);const[c,l]=fo(i,a,{staticPosition:0});o+=l,r.push(c)}return r}function fo(n,e,{staticPosition:t}){const i=wd(e.type);if(i){const[o,r]=i;return Uw(n,{...e,type:r},{length:o,staticPosition:t})}if(e.type==="tuple")return zw(n,e,{staticPosition:t});if(e.type==="address")return Lw(n);if(e.type==="bool")return jw(n);if(e.type.startsWith("bytes"))return Ww(n,e,{staticPosition:t});if(e.type.startsWith("uint")||e.type.startsWith("int"))return Fw(n,e);if(e.type==="string")return Hw(n,{staticPosition:t});throw new ug(e.type,{docsPath:"/docs/contract/decodeAbiParameters"})}const D0=32,$u=32;function Lw(n){const e=n.readBytes(32);return[pd(St(Cp(e,-20))),32]}function Uw(n,e,{length:t,staticPosition:i}){if(!t){const s=di(n.readBytes($u)),a=i+s,c=a+D0;n.setPosition(a);const l=di(n.readBytes(D0)),d=Ws(e);let p=0;const f=[];for(let v=0;v<l;++v){n.setPosition(c+(d?v*32:p));const[T,S]=fo(n,e,{staticPosition:c});p+=S,f.push(T)}return n.setPosition(i+32),[f,32]}if(Ws(e)){const s=di(n.readBytes($u)),a=i+s,c=[];for(let l=0;l<t;++l){n.setPosition(a+l*32);const[d]=fo(n,e,{staticPosition:a});c.push(d)}return n.setPosition(i+32),[c,32]}let o=0;const r=[];for(let s=0;s<t;++s){const[a,c]=fo(n,e,{staticPosition:i+o});o+=c,r.push(a)}return[r,o]}function jw(n){return[Bw(n.readBytes(32),{size:32}),32]}function Ww(n,e,{staticPosition:t}){const[i,o]=e.type.split("bytes");if(!o){const s=di(n.readBytes(32));n.setPosition(t+s);const a=di(n.readBytes(32));if(a===0)return n.setPosition(t+32),["0x",32];const c=n.readBytes(a);return n.setPosition(t+32),[St(c),32]}return[St(n.readBytes(parseInt(o),32)),32]}function Fw(n,e){const t=e.type.startsWith("int"),i=parseInt(e.type.split("int")[1]||"256"),o=n.readBytes(32);return[i>48?Mw(o,{signed:t}):di(o,{signed:t}),32]}function zw(n,e,{staticPosition:t}){const i=e.components.length===0||e.components.some(({name:s})=>!s),o=i?[]:{};let r=0;if(Ws(e)){const s=di(n.readBytes($u)),a=t+s;for(let c=0;c<e.components.length;++c){const l=e.components[c];n.setPosition(a+r);const[d,p]=fo(n,l,{staticPosition:a});r+=p,o[i?c:l==null?void 0:l.name]=d}return n.setPosition(t+32),[o,32]}for(let s=0;s<e.components.length;++s){const a=e.components[s],[c,l]=fo(n,a,{staticPosition:t});o[i?s:a==null?void 0:a.name]=c,r+=l}return[o,r]}function Hw(n,{staticPosition:e}){const t=di(n.readBytes(32)),i=e+t;n.setPosition(i);const o=di(n.readBytes(32));if(o===0)return n.setPosition(e+32),["",32];const r=n.readBytes(o,32),s=Dw(_a(r));return n.setPosition(e+32),[s,32]}function Ws(n){var i;const{type:e}=n;if(e==="string"||e==="bytes"||e.endsWith("[]"))return!0;if(e==="tuple")return(i=n.components)==null?void 0:i.some(Ws);const t=wd(n.type);return!!(t&&Ws({...n,type:t[1]}))}function Vw(n,e){const t=n.exec(e);return t==null?void 0:t.groups}const L0=/^tuple(?<array>(\[(\d*)\])*)$/;function Ru(n){let e=n.type;if(L0.test(n.type)&&"components"in n){e="(";const t=n.components.length;for(let o=0;o<t;o++){const r=n.components[o];e+=Ru(r),o<t-1&&(e+=", ")}const i=Vw(L0,n.type);return e+=`)${(i==null?void 0:i.array)??""}`,Ru({...n,type:e})}return"indexed"in n&&n.indexed&&(e=`${e} indexed`),n.name?`${e} ${n.name}`:e}function ss(n){let e="";const t=n.length;for(let i=0;i<t;i++){const o=n[i];e+=Ru(o),i!==t-1&&(e+=", ")}return e}function Zw(n){return n.type==="function"?`function ${n.name}(${ss(n.inputs)})${n.stateMutability&&n.stateMutability!=="nonpayable"?` ${n.stateMutability}`:""}${n.outputs.length?` returns (${ss(n.outputs)})`:""}`:n.type==="event"?`event ${n.name}(${ss(n.inputs)})`:n.type==="error"?`error ${n.name}(${ss(n.inputs)})`:n.type==="constructor"?`constructor(${ss(n.inputs)})${n.stateMutability==="payable"?" payable":""}`:n.type==="fallback"?"fallback()":"receive() external payable"}const Gw=n=>As(Jc(n));function qw(n){return Gw(n)}function Yw(n){let e=!0,t="",i=0,o="",r=!1;for(let s=0;s<n.length;s++){const a=n[s];if(["(",")",","].includes(a)&&(e=!0),a==="("&&i++,a===")"&&i--,!!e){if(i===0){if(a===" "&&["event","function",""].includes(o))o="";else if(o+=a,a===")"){r=!0;break}continue}if(a===" "){n[s-1]!==","&&t!==","&&t!==",("&&(t="",e=!1);continue}o+=a,t+=a}}if(!r)throw new ne("Unable to normalize signature.");return o}const Kw=n=>{const e=typeof n=="string"?n:Zw(n);return Yw(e)};function Wp(n){return qw(Kw(n))}const Jw=Wp,Td=n=>lc(Wp(n),0,4);function Ad(n){const{abi:e,args:t=[],name:i}=n,o=Jr(i,{strict:!1}),r=e.filter(a=>o?a.type==="function"?Td(a)===i:a.type==="event"?Jw(a)===i:!1:"name"in a&&a.name===i);if(r.length===0)return;if(r.length===1)return r[0];let s;for(const a of r){if(!("inputs"in a))continue;if(!t||t.length===0){if(!a.inputs||a.inputs.length===0)return a;continue}if(!a.inputs||a.inputs.length===0||a.inputs.length!==t.length)continue;if(t.every((l,d)=>{const p="inputs"in a&&a.inputs[d];return p?Iu(l,p):!1})){if(s&&"inputs"in s&&s.inputs){const l=Fp(a.inputs,s.inputs,t);if(l)throw new cg({abiItem:a,type:l[0]},{abiItem:s,type:l[1]})}s=a}}return s||r[0]}function Iu(n,e){const t=typeof n,i=e.type;switch(i){case"address":return zi(n,{strict:!1});case"bool":return t==="boolean";case"function":return t==="string";case"string":return t==="string";default:return i==="tuple"&&"components"in e?Object.values(e.components).every((o,r)=>Iu(Object.values(n)[r],o)):/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(i)?t==="number"||t==="bigint":/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(i)?t==="string"||n instanceof Uint8Array:/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(i)?Array.isArray(n)&&n.every(o=>Iu(o,{...e,type:i.replace(/(\[[0-9]{0,}\])$/,"")})):!1}}function Fp(n,e,t){for(const i in n){const o=n[i],r=e[i];if(o.type==="tuple"&&r.type==="tuple"&&"components"in o&&"components"in r)return Fp(o.components,r.components,t[i]);const s=[o.type,r.type];if(s.includes("address")&&s.includes("bytes20")?!0:s.includes("address")&&s.includes("string")?zi(t[i],{strict:!1}):s.includes("address")&&s.includes("bytes")?zi(t[i],{strict:!1}):!1)return s}}const jl="/docs/contract/decodeFunctionResult";function nl(n){const{abi:e,args:t,functionName:i,data:o}=n;let r=e[0];if(i){const a=Ad({abi:e,args:t,name:i});if(!a)throw new ac(i,{docsPath:jl});r=a}if(r.type!=="function")throw new ac(void 0,{docsPath:jl});if(!r.outputs)throw new ag(r.name,{docsPath:jl});const s=jp(r.outputs,o);if(s&&s.length>1)return s;if(s&&s.length===1)return s[0]}const U0="/docs/contract/encodeFunctionData";function Xw(n){const{abi:e,args:t,functionName:i}=n;let o=e[0];if(i){const r=Ad({abi:e,args:t,name:i});if(!r)throw new ac(i,{docsPath:U0});o=r}if(o.type!=="function")throw new ac(void 0,{docsPath:U0});return{abi:[o],functionName:Td(vo(o))}}function il(n){const{args:e}=n,{abi:t,functionName:i}=(()=>{var a;return n.abi.length===1&&((a=n.functionName)!=null&&a.startsWith("0x"))?n:Xw(n)})(),o=t[0],r=i,s="inputs"in o&&o.inputs?Dg(o.inputs,e??[]):void 0;return hp([r,s??"0x"])}function rl({blockNumber:n,chain:e,contract:t}){var o;const i=(o=e==null?void 0:e.contracts)==null?void 0:o[t];if(!i)throw new vu({chain:e,contract:{name:t}});if(n&&i.blockCreated&&i.blockCreated>n)throw new vu({blockNumber:n,chain:e,contract:{name:t,blockCreated:i.blockCreated}});return i.address}const zp={1:"An `assert` condition failed.",17:"Arithmetic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},Qw={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},em={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"};function tm(n){const{abi:e,data:t}=n,i=lc(t,0,4);if(i==="0x")throw new Qc;const r=[...e||[],Qw,em].find(s=>s.type==="error"&&i===Td(vo(s)));if(!r)throw new dp(i,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:r,args:"inputs"in r&&r.inputs&&r.inputs.length>0?jp(r.inputs,lc(t,4)):void 0,errorName:r.name}}function Hp({abiItem:n,args:e,includeFunctionName:t=!0,includeName:i=!1}){if("name"in n&&"inputs"in n&&n.inputs)return`${t?n.name:""}(${n.inputs.map((o,r)=>`${i&&o.name?`${o.name}: `:""}${typeof e[r]=="object"?Fn(e[r]):e[r]}`).join(", ")})`}class nm extends ne{constructor({address:e}){super(`State for account "${e}" is set multiple times.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountStateConflictError"})}}class im extends ne{constructor(){super("state and stateDiff are set on the same account."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"StateAssignmentConflictError"})}}function j0(n){return n.reduce((e,{slot:t,value:i})=>`${e}        ${t}: ${i}
`,"")}function rm(n){return n.reduce((e,{address:t,...i})=>{let o=`${e}    ${t}:
`;return i.nonce&&(o+=`      nonce: ${i.nonce}
`),i.balance&&(o+=`      balance: ${i.balance}
`),i.code&&(o+=`      code: ${i.code}
`),i.state&&(o+=`      state:
`,o+=j0(i.state)),i.stateDiff&&(o+=`      stateDiff:
`,o+=j0(i.stateDiff)),o},`  State Override:
`).slice(0,-1)}class om extends ne{constructor(e,{account:t,docsPath:i,chain:o,data:r,gas:s,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:d,to:p,value:f,stateOverride:v}){var $;const T=t?Ci(t):void 0;let S=Aa({from:T==null?void 0:T.address,to:p,value:typeof f<"u"&&`${md(f)} ${(($=o==null?void 0:o.nativeCurrency)==null?void 0:$.symbol)||"ETH"}`,data:r,gas:s,gasPrice:typeof a<"u"&&`${Ht(a)} gwei`,maxFeePerGas:typeof c<"u"&&`${Ht(c)} gwei`,maxPriorityFeePerGas:typeof l<"u"&&`${Ht(l)} gwei`,nonce:d});v&&(S+=`
${rm(v)}`),super(e.shortMessage,{cause:e,docsPath:i,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Raw Call Arguments:",S].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=e}}class kd extends ne{constructor(e,{abi:t,args:i,contractAddress:o,docsPath:r,functionName:s,sender:a}){const c=Ad({abi:t,args:i,name:s}),l=c?Hp({abiItem:c,args:i,includeFunctionName:!1,includeName:!1}):void 0,d=c?vo(c,{includeName:!0}):void 0,p=Aa({address:o&&V1(o),function:d,args:l&&l!=="()"&&`${[...Array((s==null?void 0:s.length)??0).keys()].map(()=>" ").join("")}${l}`,sender:a});super(e.shortMessage||`An unknown error occurred while executing the contract function "${s}".`,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Contract Call:",p].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=t,this.args=i,this.cause=e,this.contractAddress=o,this.functionName=s,this.sender=a}}class Pu extends ne{constructor({abi:e,data:t,functionName:i,message:o}){let r,s,a,c;if(t&&t!=="0x")try{s=tm({abi:e,data:t});const{abiItem:d,errorName:p,args:f}=s;if(p==="Error")c=f[0];else if(p==="Panic"){const[v]=f;c=zp[v]}else{const v=d?vo(d,{includeName:!0}):void 0,T=d&&f?Hp({abiItem:d,args:f,includeFunctionName:!1,includeName:!1}):void 0;a=[v?`Error: ${v}`:"",T&&T!=="()"?`       ${[...Array((p==null?void 0:p.length)??0).keys()].map(()=>" ").join("")}${T}`:""]}}catch(d){r=d}else o&&(c=o);let l;r instanceof dp&&(l=r.signature,a=[`Unable to decode signature "${l}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${l}.`]),super(c&&c!=="execution reverted"||l?[`The contract function "${i}" reverted with the following ${l?"signature":"reason"}:`,c||l].join(`
`):`The contract function "${i}" reverted.`,{cause:r,metaMessages:a}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=s,this.reason=c,this.signature=l}}class sm extends ne{constructor({functionName:e}){super(`The contract function "${e}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${e}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}}class Sd extends ne{constructor({data:e,message:t}){super(t||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e}}function Vp(n,e){var i,o,r,s,a,c;if(!(n instanceof ne))return!1;const t=n.walk(l=>l instanceof Pu);return t instanceof Pu?!!(((i=t.data)==null?void 0:i.errorName)==="ResolverNotFound"||((o=t.data)==null?void 0:o.errorName)==="ResolverWildcardNotSupported"||((r=t.data)==null?void 0:r.errorName)==="ResolverNotContract"||((s=t.data)==null?void 0:s.errorName)==="ResolverError"||((a=t.data)==null?void 0:a.errorName)==="HttpError"||(c=t.reason)!=null&&c.includes("Wildcard on non-extended resolvers is not supported")||e==="reverse"&&t.reason===zp[50]):!1}function Zp(n){if(n.length!==66||n.indexOf("[")!==0||n.indexOf("]")!==65)return null;const e=`0x${n.slice(1,65)}`;return Jr(e)?e:null}function am(n){let e=new Uint8Array(32).fill(0);if(!n)return St(e);const t=n.split(".");for(let i=t.length-1;i>=0;i-=1){const o=Zp(t[i]),r=o?Jc(o):As(br(t[i]),"bytes");e=As(xr([e,r]),"bytes")}return St(e)}function cm(n){return`[${n.slice(2)}]`}function lm(n){const e=new Uint8Array(32).fill(0);return n?Zp(n)||As(br(n)):St(e)}function Gp(n){const e=n.replace(/^\.|\.$/gm,"");if(e.length===0)return new Uint8Array(1);const t=new Uint8Array(br(e).byteLength+2);let i=0;const o=e.split(".");for(let r=0;r<o.length;r++){let s=br(o[r]);s.byteLength>255&&(s=br(cm(lm(o[r])))),t[i]=s.length,t.set(s,i+1),i+=s.length+1}return t.byteLength!==i+1?t.slice(0,i+1):t}const um=3;function Ou(n,{abi:e,address:t,args:i,docsPath:o,functionName:r,sender:s}){const{code:a,data:c,message:l,shortMessage:d}=n instanceof Sd?n:n instanceof ne?n.walk(f=>"data"in f)||n.walk():{},p=n instanceof Qc?new sm({functionName:r}):[um,Cr.code].includes(a)&&(c||l||d)?new Pu({abi:e,data:typeof c=="object"?c.data:c,functionName:r,message:d??l}):n;return new kd(p,{abi:e,args:i,contractAddress:t,docsPath:o,functionName:r,sender:s})}const dm="0x82ad56cb";function hm(n,{docsPath:e,...t}){const i=(()=>{const o=bd(n,t);return o instanceof el?n:o})();return new om(i,{docsPath:e,...t})}const Wl=new Map;function qp({fn:n,id:e,shouldSplitBatch:t,wait:i=0,sort:o}){const r=async()=>{const d=c();s();const p=d.map(({args:f})=>f);p.length!==0&&n(p).then(f=>{var v;o&&Array.isArray(f)&&f.sort(o);for(let T=0;T<d.length;T++){const{pendingPromise:S}=d[T];(v=S.resolve)==null||v.call(S,[f[T],f])}}).catch(f=>{var v;for(let T=0;T<d.length;T++){const{pendingPromise:S}=d[T];(v=S.reject)==null||v.call(S,f)}})},s=()=>Wl.delete(e),a=()=>c().map(({args:d})=>d),c=()=>Wl.get(e)||[],l=d=>Wl.set(e,[...c(),d]);return{flush:s,async schedule(d){const p={},f=new Promise((S,$)=>{p.resolve=S,p.reject=$});return(t==null?void 0:t([...a(),d]))&&r(),c().length>0?(l({args:d,pendingPromise:p}),f):(l({args:d,pendingPromise:p}),setTimeout(r,i),f)}}}async function Yp(n,e){var D,W,Z,Q;const{account:t=n.account,batch:i=!!((D=n.batch)!=null&&D.multicall),blockNumber:o,blockTag:r="latest",accessList:s,blobs:a,data:c,gas:l,gasPrice:d,maxFeePerBlobGas:p,maxFeePerGas:f,maxPriorityFeePerGas:v,nonce:T,to:S,value:$,stateOverride:B,..._}=e,U=t?Ci(t):void 0;try{tl(e);const m=(o?ze(o):void 0)||r,b=mm(B),R=(Q=(Z=(W=n.chain)==null?void 0:W.formatters)==null?void 0:Z.transactionRequest)==null?void 0:Q.format,N=(R||yd)({...vd(_,{format:R}),from:U==null?void 0:U.address,accessList:s,blobs:a,data:c,gas:l,gasPrice:d,maxFeePerBlobGas:p,maxFeePerGas:f,maxPriorityFeePerGas:v,nonce:T,to:S,value:$});if(i&&pm({request:N})&&!b)try{return await fm(n,{...N,blockNumber:o,blockTag:r})}catch(E){if(!(E instanceof Ep)&&!(E instanceof vu))throw E}const M=await n.request({method:"eth_call",params:b?[N,m,b]:[N,m]});return M==="0x"?{data:void 0}:{data:M}}catch(g){const m=gm(g),{offchainLookup:b,offchainLookupSignature:R}=await ui(()=>import("./CEvevBnE.js"),__vite__mapDeps([0,1,2]),import.meta.url);if(n.ccipRead!==!1&&(m==null?void 0:m.slice(0,10))===R&&S)return{data:await b(n,{data:m,to:S})};throw hm(g,{...e,account:U,chain:n.chain})}}function pm({request:n}){const{data:e,to:t,...i}=n;return!(!e||e.startsWith(dm)||!t||Object.values(i).filter(o=>typeof o<"u").length>0)}async function fm(n,e){var S;const{batchSize:t=1024,wait:i=0}=typeof((S=n.batch)==null?void 0:S.multicall)=="object"?n.batch.multicall:{},{blockNumber:o,blockTag:r="latest",data:s,multicallAddress:a,to:c}=e;let l=a;if(!l){if(!n.chain)throw new Ep;l=rl({blockNumber:o,chain:n.chain,contract:"multicall3"})}const p=(o?ze(o):void 0)||r,{schedule:f}=qp({id:`${n.uid}.${p}`,wait:i,shouldSplitBatch($){return $.reduce((_,{data:U})=>_+(U.length-2),0)>t*2},fn:async $=>{const B=$.map(D=>({allowFailure:!0,callData:D.data,target:D.to})),_=il({abi:Su,args:[B],functionName:"aggregate3"}),U=await n.request({method:"eth_call",params:[{data:_,to:l},p]});return nl({abi:Su,args:[B],functionName:"aggregate3",data:U||"0x"})}}),[{returnData:v,success:T}]=await f({data:s,to:c});if(!T)throw new Sd({data:v});return v==="0x"?{data:void 0}:{data:v}}function gm(n){var t;if(!(n instanceof ne))return;const e=n.walk();return typeof(e==null?void 0:e.data)=="object"?(t=e.data)==null?void 0:t.data:e.data}function W0(n){if(!(!n||n.length===0))return n.reduce((e,{slot:t,value:i})=>{if(t.length!==66)throw new T0({size:t.length,targetSize:66,type:"hex"});if(i.length!==66)throw new T0({size:i.length,targetSize:66,type:"hex"});return e[t]=i,e},{})}function wm(n){const{balance:e,nonce:t,state:i,stateDiff:o,code:r}=n,s={};if(r!==void 0&&(s.code=r),e!==void 0&&(s.balance=ze(e)),t!==void 0&&(s.nonce=ze(t)),i!==void 0&&(s.state=W0(i)),o!==void 0){if(s.state)throw new im;s.stateDiff=W0(o)}return s}function mm(n){if(!n)return;const e={};for(const{address:t,...i}of n){if(!zi(t,{strict:!1}))throw new Ts({address:t});if(e[t])throw new nm({address:t});e[t]=wm(i)}return e}async function xo(n,e){const{abi:t,address:i,args:o,functionName:r,...s}=e,a=il({abi:t,args:o,functionName:r});try{const{data:c}=await tt(n,Yp,"call")({...s,data:a,to:i});return nl({abi:t,args:o,functionName:r,data:c||"0x"})}catch(c){throw Ou(c,{abi:t,address:i,args:o,docsPath:"/docs/contract/readContract",functionName:r})}}class bm extends ne{constructor({data:e}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}}class as extends ne{constructor({reason:e}){super(`ENS NFT avatar URI is invalid. ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}}class $d extends ne{constructor({uri:e}){super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}}class vm extends ne{constructor({namespace:e}){super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}}const ym=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,xm=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,Cm=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,_m=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function Em(n){try{const e=await fetch(n,{method:"HEAD"});if(e.status===200){const t=e.headers.get("content-type");return t==null?void 0:t.startsWith("image/")}return!1}catch(e){return typeof e=="object"&&typeof e.response<"u"||!globalThis.hasOwnProperty("Image")?!1:new Promise(t=>{const i=new Image;i.onload=()=>{t(!0)},i.onerror=()=>{t(!1)},i.src=n})}}function F0(n,e){return n?n.endsWith("/")?n.slice(0,-1):n:e}function Kp({uri:n,gatewayUrls:e}){const t=Cm.test(n);if(t)return{uri:n,isOnChain:!0,isEncoded:t};const i=F0(e==null?void 0:e.ipfs,"https://ipfs.io"),o=F0(e==null?void 0:e.arweave,"https://arweave.net"),r=n.match(ym),{protocol:s,subpath:a,target:c,subtarget:l=""}=(r==null?void 0:r.groups)||{},d=s==="ipns:/"||a==="ipns/",p=s==="ipfs:/"||a==="ipfs/"||xm.test(n);if(n.startsWith("http")&&!d&&!p){let v=n;return e!=null&&e.arweave&&(v=n.replace(/https:\/\/arweave.net/g,e==null?void 0:e.arweave)),{uri:v,isOnChain:!1,isEncoded:!1}}if((d||p)&&c)return{uri:`${i}/${d?"ipns":"ipfs"}/${c}${l}`,isOnChain:!1,isEncoded:!1};if(s==="ar:/"&&c)return{uri:`${o}/${c}${l||""}`,isOnChain:!1,isEncoded:!1};let f=n.replace(_m,"");if(f.startsWith("<svg")&&(f=`data:image/svg+xml;base64,${btoa(f)}`),f.startsWith("data:")||f.startsWith("{"))return{uri:f,isOnChain:!0,isEncoded:!1};throw new $d({uri:n})}function Jp(n){if(typeof n!="object"||!("image"in n)&&!("image_url"in n)&&!("image_data"in n))throw new bm({data:n});return n.image||n.image_url||n.image_data}async function Tm({gatewayUrls:n,uri:e}){try{const t=await fetch(e).then(o=>o.json());return await Rd({gatewayUrls:n,uri:Jp(t)})}catch{throw new $d({uri:e})}}async function Rd({gatewayUrls:n,uri:e}){const{uri:t,isOnChain:i}=Kp({uri:e,gatewayUrls:n});if(i||await Em(t))return t;throw new $d({uri:e})}function Am(n){let e=n;e.startsWith("did:nft:")&&(e=e.replace("did:nft:","").replace(/_/g,"/"));const[t,i,o]=e.split("/"),[r,s]=t.split(":"),[a,c]=i.split(":");if(!r||r.toLowerCase()!=="eip155")throw new as({reason:"Only EIP-155 supported"});if(!s)throw new as({reason:"Chain ID not found"});if(!c)throw new as({reason:"Contract address not found"});if(!o)throw new as({reason:"Token ID not found"});if(!a)throw new as({reason:"ERC namespace not found"});return{chainID:parseInt(s),namespace:a.toLowerCase(),contractAddress:c,tokenID:o}}async function km(n,{nft:e}){if(e.namespace==="erc721")return xo(n,{address:e.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(e.tokenID)]});if(e.namespace==="erc1155")return xo(n,{address:e.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(e.tokenID)]});throw new vm({namespace:e.namespace})}async function Sm(n,{gatewayUrls:e,record:t}){return/eip155:/i.test(t)?$m(n,{gatewayUrls:e,record:t}):Rd({uri:t,gatewayUrls:e})}async function $m(n,{gatewayUrls:e,record:t}){const i=Am(t),o=await km(n,{nft:i}),{uri:r,isOnChain:s,isEncoded:a}=Kp({uri:o,gatewayUrls:e});if(s&&(r.includes("data:application/json;base64,")||r.startsWith("{"))){const l=a?atob(r.replace("data:application/json;base64,","")):r,d=JSON.parse(l);return Rd({uri:Jp(d),gatewayUrls:e})}let c=i.tokenID;return i.namespace==="erc1155"&&(c=c.replace("0x","").padStart(64,"0")),Tm({gatewayUrls:e,uri:r.replace(/(?:0x)?{id}/,c)})}async function Rm(n,{blockNumber:e,blockTag:t,name:i,key:o,gatewayUrls:r,strict:s,universalResolverAddress:a}){let c=a;if(!c){if(!n.chain)throw new Error("client chain not configured. universalResolverAddress is required.");c=rl({blockNumber:e,chain:n.chain,contract:"ensUniversalResolver"})}try{const l={address:c,abi:Ow,functionName:"resolve",args:[Ea(Gp(i)),il({abi:B0,functionName:"text",args:[am(i),o]})],blockNumber:e,blockTag:t},d=tt(n,xo,"readContract"),p=r?await d({...l,args:[...l.args,r]}):await d(l);if(p[0]==="0x")return null;const f=nl({abi:B0,functionName:"text",data:p[0]});return f===""?null:f}catch(l){if(s)throw l;if(Vp(l,"resolve"))return null;throw l}}async function Im(n,{blockNumber:e,blockTag:t,assetGatewayUrls:i,name:o,gatewayUrls:r,strict:s,universalResolverAddress:a}){const c=await tt(n,Rm,"getEnsText")({blockNumber:e,blockTag:t,key:"avatar",name:o,universalResolverAddress:a,gatewayUrls:r,strict:s});if(!c)return null;try{return await Sm(n,{record:c,gatewayUrls:i})}catch{return null}}async function Pm(n,{address:e,blockNumber:t,blockTag:i,gatewayUrls:o,strict:r,universalResolverAddress:s}){let a=s;if(!a){if(!n.chain)throw new Error("client chain not configured. universalResolverAddress is required.");a=rl({blockNumber:t,chain:n.chain,contract:"ensUniversalResolver"})}const c=`${e.toLowerCase().substring(2)}.addr.reverse`;try{const l={address:a,abi:Nw,functionName:"reverse",args:[Ea(Gp(c))],blockNumber:t,blockTag:i},d=tt(n,xo,"readContract"),[p,f]=o?await d({...l,args:[...l.args,o]}):await d(l);return e.toLowerCase()!==f.toLowerCase()?null:p}catch(l){if(r)throw l;if(Vp(l,"reverse"))return null;throw l}}async function Om(n,{address:e,blockNumber:t,blockTag:i="latest"}){const o=t?ze(t):void 0,r=await n.request({method:"eth_getBalance",params:[e,o||i]});return BigInt(r)}const Nm=new Map,Mm=new Map;function Bm(n){const e=(o,r)=>({clear:()=>r.delete(o),get:()=>r.get(o),set:s=>r.set(o,s)}),t=e(n,Nm),i=e(n,Mm);return{clear:()=>{t.clear(),i.clear()},promise:t,response:i}}async function Dm(n,{cacheKey:e,cacheTime:t=1/0}){const i=Bm(e),o=i.response.get();if(o&&t>0&&new Date().getTime()-o.created.getTime()<t)return o.data;let r=i.promise.get();r||(r=n(),i.promise.set(r));try{const s=await r;return i.response.set({created:new Date,data:s}),s}finally{i.promise.clear()}}const Lm=n=>`blockNumber.${n}`;async function Um(n,{cacheTime:e=n.cacheTime}={}){const t=await Dm(()=>n.request({method:"eth_blockNumber"}),{cacheKey:Lm(n.uid),cacheTime:e});return BigInt(t)}function jm(n,{args:e,eventName:t}={}){return{...n,blockHash:n.blockHash?n.blockHash:null,blockNumber:n.blockNumber?BigInt(n.blockNumber):null,logIndex:n.logIndex?Number(n.logIndex):null,transactionHash:n.transactionHash?n.transactionHash:null,transactionIndex:n.transactionIndex?Number(n.transactionIndex):null,...t?{args:e,eventName:t}:{}}}async function Xp(n,{blockHash:e,blockNumber:t,blockTag:i,hash:o,index:r}){var d,p,f;const s=i||"latest",a=t!==void 0?ze(t):void 0;let c=null;if(o?c=await n.request({method:"eth_getTransactionByHash",params:[o]}):e?c=await n.request({method:"eth_getTransactionByBlockHashAndIndex",params:[e,ze(r)]}):(a||s)&&(c=await n.request({method:"eth_getTransactionByBlockNumberAndIndex",params:[a||s,ze(r)]})),!c)throw new Tp({blockHash:e,blockNumber:t,blockTag:s,hash:o,index:r});return(((f=(p=(d=n.chain)==null?void 0:d.formatters)==null?void 0:p.transaction)==null?void 0:f.format)||Ip)(c)}const Wm={"0x0":"reverted","0x1":"success"};function Fm(n){const e={...n,blockNumber:n.blockNumber?BigInt(n.blockNumber):null,contractAddress:n.contractAddress?n.contractAddress:null,cumulativeGasUsed:n.cumulativeGasUsed?BigInt(n.cumulativeGasUsed):null,effectiveGasPrice:n.effectiveGasPrice?BigInt(n.effectiveGasPrice):null,gasUsed:n.gasUsed?BigInt(n.gasUsed):null,logs:n.logs?n.logs.map(t=>jm(t)):null,to:n.to?n.to:null,transactionIndex:n.transactionIndex?bo(n.transactionIndex):null,status:n.status?Wm[n.status]:null,type:n.type?Rp[n.type]||n.type:null};return n.blobGasPrice&&(e.blobGasPrice=BigInt(n.blobGasPrice)),n.blobGasUsed&&(e.blobGasUsed=BigInt(n.blobGasUsed)),e}async function z0(n,{hash:e}){var o,r,s;const t=await n.request({method:"eth_getTransactionReceipt",params:[e]});if(!t)throw new Ap({hash:e});return(((s=(r=(o=n.chain)==null?void 0:o.formatters)==null?void 0:r.transactionReceipt)==null?void 0:s.format)||Fm)(t)}async function zm(n,e){var $;const{allowFailure:t=!0,batchSize:i,blockNumber:o,blockTag:r,multicallAddress:s,stateOverride:a}=e,c=e.contracts,l=i??(typeof(($=n.batch)==null?void 0:$.multicall)=="object"&&n.batch.multicall.batchSize||1024);let d=s;if(!d){if(!n.chain)throw new Error("client chain not configured. multicallAddress is required.");d=rl({blockNumber:o,chain:n.chain,contract:"multicall3"})}const p=[[]];let f=0,v=0;for(let B=0;B<c.length;B++){const{abi:_,address:U,args:D,functionName:W}=c[B];try{const Z=il({abi:_,args:D,functionName:W});v+=(Z.length-2)/2,l>0&&v>l&&p[f].length>0&&(f++,v=(Z.length-2)/2,p[f]=[]),p[f]=[...p[f],{allowFailure:!0,callData:Z,target:U}]}catch(Z){const Q=Ou(Z,{abi:_,address:U,args:D,docsPath:"/docs/contract/multicall",functionName:W});if(!t)throw Q;p[f]=[...p[f],{allowFailure:!0,callData:"0x",target:U}]}}const T=await Promise.allSettled(p.map(B=>tt(n,xo,"readContract")({abi:Su,address:d,args:[B],blockNumber:o,blockTag:r,functionName:"aggregate3",stateOverride:a}))),S=[];for(let B=0;B<T.length;B++){const _=T[B];if(_.status==="rejected"){if(!t)throw _.reason;for(let D=0;D<p[B].length;D++)S.push({status:"failure",error:_.reason,result:void 0});continue}const U=_.value;for(let D=0;D<U.length;D++){const{returnData:W,success:Z}=U[D],{callData:Q}=p[B][D],{abi:g,address:m,functionName:b,args:R}=c[S.length];try{if(Q==="0x")throw new Qc;if(!Z)throw new Sd({data:W});const P=nl({abi:g,args:R,data:W,functionName:b});S.push(t?{result:P,status:"success"}:P)}catch(P){const N=Ou(P,{abi:g,address:m,args:R,docsPath:"/docs/contract/multicall",functionName:b});if(!t)throw N;S.push({error:N,result:void 0,status:"failure"})}}}if(S.length!==c.length)throw new ne("multicall results mismatch");return S}const Fl=new Map,H0=new Map;let Hm=0;function Nu(n,e,t){const i=++Hm,o=()=>Fl.get(n)||[],r=()=>{const d=o();Fl.set(n,d.filter(p=>p.id!==i))},s=()=>{const d=H0.get(n);o().length===1&&d&&d(),r()},a=o();if(Fl.set(n,[...a,{id:i,fns:e}]),a&&a.length>0)return s;const c={};for(const d in e)c[d]=(...p)=>{var v,T;const f=o();if(f.length!==0)for(const S of f)(T=(v=S.fns)[d])==null||T.call(v,...p)};const l=t(c);return typeof l=="function"&&H0.set(n,l),s}async function Mu(n){return new Promise(e=>setTimeout(e,n))}function Vm(n,{emitOnBegin:e,initialWaitTime:t,interval:i}){let o=!0;const r=()=>o=!1;return(async()=>{let a;e&&(a=await n({unpoll:r}));const c=await(t==null?void 0:t(a))??i;await Mu(c);const l=async()=>{o&&(await n({unpoll:r}),await Mu(i),l())};l()})(),r}function Zm(n,{emitOnBegin:e=!1,emitMissed:t=!1,onBlockNumber:i,onError:o,poll:r,pollingInterval:s=n.pollingInterval}){const a=typeof r<"u"?r:!(n.transport.type==="webSocket"||n.transport.type==="fallback"&&n.transport.transports[0].config.type==="webSocket");let c;return a?(()=>{const p=Fn(["watchBlockNumber",n.uid,e,t,s]);return Nu(p,{onBlockNumber:i,onError:o},f=>Vm(async()=>{var v;try{const T=await tt(n,Um,"getBlockNumber")({cacheTime:0});if(c){if(T===c)return;if(T-c>1&&t)for(let S=c+1n;S<T;S++)f.onBlockNumber(S,c),c=S}(!c||T>c)&&(f.onBlockNumber(T,c),c=T)}catch(T){(v=f.onError)==null||v.call(f,T)}},{emitOnBegin:e,interval:s}))})():(()=>{const p=Fn(["watchBlockNumber",n.uid,e,t]);return Nu(p,{onBlockNumber:i,onError:o},f=>{let v=!0,T=()=>v=!1;return(async()=>{try{const S=(()=>{if(n.transport.type==="fallback"){const B=n.transport.transports.find(_=>_.config.type==="webSocket");return B?B.value:n.transport}return n.transport})(),{unsubscribe:$}=await S.subscribe({params:["newHeads"],onData(B){var U;if(!v)return;const _=Xc((U=B.result)==null?void 0:U.number);f.onBlockNumber(_,c),c=_},onError(B){var _;(_=f.onError)==null||_.call(f,B)}});T=$,v||T()}catch(S){o==null||o(S)}})(),()=>T()})})()}function hc(n,{delay:e=100,retryCount:t=2,shouldRetry:i=()=>!0}={}){return new Promise((o,r)=>{const s=async({count:a=0}={})=>{const c=async({error:l})=>{const d=typeof e=="function"?e({count:a,error:l}):e;d&&await Mu(d),s({count:a+1})};try{const l=await n();o(l)}catch(l){if(a<t&&await i({count:a,error:l}))return c({error:l});r(l)}};s()})}function Gm(n,e={}){return async(t,i={})=>{const{retryDelay:o=150,retryCount:r=3}={...e,...i};return hc(async()=>{try{return await n(t)}catch(s){const a=s;switch(a.code){case ks.code:throw new ks(a);case Ss.code:throw new Ss(a);case $s.code:throw new $s(a);case Rs.code:throw new Rs(a);case Cr.code:throw new Cr(a);case Is.code:throw new Is(a);case Ps.code:throw new Ps(a);case Di.code:throw new Di(a);case Os.code:throw new Os(a);case Ns.code:throw new Ns(a);case yo.code:throw new yo(a);case Ms.code:throw new Ms(a);case lt.code:throw new lt(a);case Bs.code:throw new Bs(a);case Ds.code:throw new Ds(a);case Ls.code:throw new Ls(a);case Us.code:throw new Us(a);case Jt.code:throw new Jt(a);case 5e3:throw new lt(a);default:throw s instanceof ne?s:new iw(a)}}},{delay:({count:s,error:a})=>{var c;if(a&&a instanceof gs){const l=(c=a==null?void 0:a.headers)==null?void 0:c.get("Retry-After");if(l!=null&&l.match(/\d/))return parseInt(l)*1e3}return~~(1<<s)*o},retryCount:r,shouldRetry:({error:s})=>qm(s)})}}function qm(n){return"code"in n&&typeof n.code=="number"?n.code===-1||n.code===yo.code||n.code===Cr.code:n instanceof gs&&n.status?n.status===403||n.status===408||n.status===413||n.status===429||n.status===500||n.status===502||n.status===503||n.status===504:!0}function Id(n){return{formatters:void 0,fees:void 0,serializers:void 0,...n}}function Qp(n,{errorInstance:e=new Error("timed out"),timeout:t,signal:i}){return new Promise((o,r)=>{(async()=>{let s;try{const a=new AbortController;t>0&&(s=setTimeout(()=>{i?a.abort():r(e)},t)),o(await n({signal:(a==null?void 0:a.signal)||null}))}catch(a){a.name==="AbortError"&&r(e),r(a)}finally{clearTimeout(s)}})()})}function Ym(){return{current:0,take(){return this.current++},reset(){this.current=0}}}const V0=Ym();function Km(n,e={}){return{async request(t){var p;const{body:i,onRequest:o=e.onRequest,onResponse:r=e.onResponse,timeout:s=e.timeout??1e4}=t,a={...e.fetchOptions??{},...t.fetchOptions??{}},{headers:c,method:l,signal:d}=a;try{const f=await Qp(async({signal:T})=>{const S={...a,body:Array.isArray(i)?Fn(i.map(_=>({jsonrpc:"2.0",id:_.id??V0.take(),..._}))):Fn({jsonrpc:"2.0",id:i.id??V0.take(),...i}),headers:{...c,"Content-Type":"application/json"},method:l||"POST",signal:d||(s>0?T:null)},$=new Request(n,S);return o&&await o($),await fetch(n,S)},{errorInstance:new I0({body:i,url:n}),timeout:s,signal:!0});r&&await r(f);let v;if((p=f.headers.get("Content-Type"))!=null&&p.startsWith("application/json")?v=await f.json():(v=await f.text(),v=JSON.parse(v||"{}")),!f.ok)throw new gs({body:i,details:Fn(v.error)||f.statusText,headers:f.headers,status:f.status,url:n});return v}catch(f){throw f instanceof gs||f instanceof I0?f:new gs({body:i,details:f.message,url:n})}}}}function Jm(n,e){let[t,i="0"]=n.split(".");const o=t.startsWith("-");if(o&&(t=t.slice(1)),i=i.replace(/(0+)$/,""),e===0)Math.round(+`.${i}`)===1&&(t=`${BigInt(t)+1n}`),i="";else if(i.length>e){const[r,s,a]=[i.slice(0,e-1),i.slice(e-1,e),i.slice(e)],c=Math.round(+`${s}.${a}`);c>9?i=`${BigInt(r)+BigInt(1)}0`.padStart(r.length+1,"0"):i=`${r}${c}`,i.length>e&&(i=i.slice(1),t=`${BigInt(t)+1n}`),i=i.slice(0,e)}else i=i.padEnd(e,"0");return BigInt(`${o?"-":""}${t}${i}`)}async function Xm(n,{confirmations:e=1,hash:t,onReplaced:i,pollingInterval:o=n.pollingInterval,retryCount:r=6,retryDelay:s=({count:c})=>~~(1<<c)*200,timeout:a}){const c=Fn(["waitForTransactionReceipt",n.uid,t]);let l,d,p,f=!1;return new Promise((v,T)=>{a&&setTimeout(()=>T(new tw({hash:t})),a);const S=Nu(c,{onReplaced:i,resolve:v,reject:T},$=>{const B=tt(n,Zm,"watchBlockNumber")({emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:o,async onBlockNumber(_){if(f)return;let U=_;const D=W=>{B(),W(),S()};try{if(p){if(e>1&&(!p.blockNumber||U-p.blockNumber+1n<e))return;D(()=>$.resolve(p));return}if(l||(f=!0,await hc(async()=>{l=await tt(n,Xp,"getTransaction")({hash:t}),l.blockNumber&&(U=l.blockNumber)},{delay:s,retryCount:r}),f=!1),p=await tt(n,z0,"getTransactionReceipt")({hash:t}),e>1&&(!p.blockNumber||U-p.blockNumber+1n<e))return;D(()=>$.resolve(p))}catch(W){if(W instanceof Tp||W instanceof Ap){if(!l){f=!1;return}try{d=l,f=!0;const Z=await hc(()=>tt(n,js,"getBlock")({blockNumber:U,includeTransactions:!0}),{delay:s,retryCount:r,shouldRetry:({error:m})=>m instanceof $p});f=!1;const Q=Z.transactions.find(({from:m,nonce:b})=>m===d.from&&b===d.nonce);if(!Q||(p=await tt(n,z0,"getTransactionReceipt")({hash:Q.hash}),e>1&&(!p.blockNumber||U-p.blockNumber+1n<e)))return;let g="replaced";Q.to===d.to&&Q.value===d.value?g="repriced":Q.from===Q.to&&Q.value===0n&&(g="cancelled"),D(()=>{var m;(m=$.onReplaced)==null||m.call($,{reason:g,replacedTransaction:d,transaction:Q,transactionReceipt:p}),$.resolve(p)})}catch(Z){D(()=>$.reject(Z))}}else D(()=>$.reject(W))}}})})})}async function Qm(n,{account:e=n.account,message:t}){if(!e)throw new _p({docsPath:"/docs/actions/wallet/signMessage"});const i=Ci(e);if(i.type==="local")return i.signMessage({message:t});const o=typeof t=="string"?ld(t):t.raw instanceof Uint8Array?Ea(t.raw):t.raw;return n.request({method:"personal_sign",params:[o,i.address]},{retryCount:0})}function e2(n){const e=t=>n(t.detail);return window.addEventListener("eip6963:announceProvider",e),window.dispatchEvent(new CustomEvent("eip6963:requestProvider")),()=>window.removeEventListener("eip6963:announceProvider",e)}function t2(){const n=new Set;let e=[];const t=()=>e2(o=>{e.some(({info:r})=>r.uuid===o.info.uuid)||(e=[...e,o],n.forEach(r=>r(e,{added:[o]})))});let i=t();return{_listeners(){return n},clear(){n.forEach(o=>o([],{removed:[...e]})),e=[]},destroy(){this.clear(),n.clear(),i()},findProvider({rdns:o}){return e.find(r=>r.info.rdns===o)},getProviders(){return e},reset(){this.clear(),i(),i=t()},subscribe(o,{emitImmediately:r}={}){return n.add(o),r&&o(e,{added:e}),()=>n.delete(o)}}}const Bu=256;let Ha=Bu,Va;function n2(n=11){if(!Va||Ha+n>Bu*2){Va="",Ha=0;for(let e=0;e<Bu;e++)Va+=(256+Math.random()*256|0).toString(16).substring(1)}return Va.substring(Ha,Ha+++n)}function ef(n){const{batch:e,cacheTime:t=n.pollingInterval??4e3,ccipRead:i,key:o="base",name:r="Base Client",pollingInterval:s=4e3,type:a="base"}=n,c=n.chain,l=n.account?Ci(n.account):void 0,{config:d,request:p,value:f}=n.transport({chain:c,pollingInterval:s}),v={...d,...f},T={account:l,batch:e,cacheTime:t,ccipRead:i,chain:c,key:o,name:r,pollingInterval:s,request:p,transport:v,type:a,uid:n2()};function S($){return B=>{const _=B($);for(const D in T)delete _[D];const U={...$,..._};return Object.assign(U,{extend:S(U)})}}return Object.assign(T,{extend:S(T)})}function tf({key:n,name:e,request:t,retryCount:i=3,retryDelay:o=150,timeout:r,type:s},a){return{config:{key:n,name:e,request:t,retryCount:i,retryDelay:o,timeout:r,type:s},request:Gm(t,{retryCount:i,retryDelay:o}),value:a}}function i2(n,e={}){const{key:t="custom",name:i="Custom Provider",retryDelay:o}=e;return({retryCount:r})=>tf({key:t,name:i,request:n.request.bind(n),retryCount:e.retryCount??r,retryDelay:o,type:"custom"})}class r2 extends ne{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}}function Z0(n,e={}){const{batch:t,fetchOptions:i,key:o="http",name:r="HTTP JSON-RPC",onFetchRequest:s,onFetchResponse:a,retryDelay:c}=e;return({chain:l,retryCount:d,timeout:p})=>{const{batchSize:f=1e3,wait:v=0}=typeof t=="object"?t:{},T=e.retryCount??d,S=p??e.timeout??1e4,$=n||(l==null?void 0:l.rpcUrls.default.http[0]);if(!$)throw new r2;const B=Km($,{fetchOptions:i,onRequest:s,onResponse:a,timeout:S});return tf({key:o,name:r,async request({method:_,params:U}){const D={method:_,params:U},{schedule:W}=qp({id:`${n}`,wait:v,shouldSplitBatch(m){return m.length>f},fn:m=>B.request({body:m}),sort:(m,b)=>m.id-b.id}),Z=async m=>t?W(m):[await B.request({body:m})],[{error:Q,result:g}]=await Z(D);if(Q)throw new kp({body:D,error:Q,url:$});return g},retryCount:T,retryDelay:c,timeout:S,type:"http"},{fetchOptions:i,url:$})}}var o2={BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const s2=n=>(e,t,i)=>{const o=i.subscribe;return i.subscribe=(s,a,c)=>{let l=s;if(a){const d=(c==null?void 0:c.equalityFn)||Object.is;let p=s(i.getState());l=f=>{const v=s(f);if(!d(p,v)){const T=p;a(p=v,T)}},c!=null&&c.fireImmediately&&a(p,p)}return o(l)},n(e,t,i)},a2=s2;function c2(n,e){let t;try{t=n()}catch{return}return{getItem:o=>{var r;const s=c=>c===null?null:JSON.parse(c,e==null?void 0:e.reviver),a=(r=t.getItem(o))!=null?r:null;return a instanceof Promise?a.then(s):s(a)},setItem:(o,r)=>t.setItem(o,JSON.stringify(r,e==null?void 0:e.replacer)),removeItem:o=>t.removeItem(o)}}const Fs=n=>e=>{try{const t=n(e);return t instanceof Promise?t:{then(i){return Fs(i)(t)},catch(i){return this}}}catch(t){return{then(i){return this},catch(i){return Fs(i)(t)}}}},l2=(n,e)=>(t,i,o)=>{let r={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:$=>$,version:0,merge:($,B)=>({...B,...$}),...e},s=!1;const a=new Set,c=new Set;let l;try{l=r.getStorage()}catch{}if(!l)return n((...$)=>{console.warn(`[zustand persist middleware] Unable to update item '${r.name}', the given storage is currently unavailable.`),t(...$)},i,o);const d=Fs(r.serialize),p=()=>{const $=r.partialize({...i()});let B;const _=d({state:$,version:r.version}).then(U=>l.setItem(r.name,U)).catch(U=>{B=U});if(B)throw B;return _},f=o.setState;o.setState=($,B)=>{f($,B),p()};const v=n((...$)=>{t(...$),p()},i,o);let T;const S=()=>{var $;if(!l)return;s=!1,a.forEach(_=>_(i()));const B=(($=r.onRehydrateStorage)==null?void 0:$.call(r,i()))||void 0;return Fs(l.getItem.bind(l))(r.name).then(_=>{if(_)return r.deserialize(_)}).then(_=>{if(_)if(typeof _.version=="number"&&_.version!==r.version){if(r.migrate)return r.migrate(_.state,_.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return _.state}).then(_=>{var U;return T=r.merge(_,(U=i())!=null?U:v),t(T,!0),p()}).then(()=>{B==null||B(T,void 0),s=!0,c.forEach(_=>_(T))}).catch(_=>{B==null||B(void 0,_)})};return o.persist={setOptions:$=>{r={...r,...$},$.getStorage&&(l=$.getStorage())},clearStorage:()=>{l==null||l.removeItem(r.name)},getOptions:()=>r,rehydrate:()=>S(),hasHydrated:()=>s,onHydrate:$=>(a.add($),()=>{a.delete($)}),onFinishHydration:$=>(c.add($),()=>{c.delete($)})},S(),T||v},u2=(n,e)=>(t,i,o)=>{let r={storage:c2(()=>localStorage),partialize:S=>S,version:0,merge:(S,$)=>({...$,...S}),...e},s=!1;const a=new Set,c=new Set;let l=r.storage;if(!l)return n((...S)=>{console.warn(`[zustand persist middleware] Unable to update item '${r.name}', the given storage is currently unavailable.`),t(...S)},i,o);const d=()=>{const S=r.partialize({...i()});return l.setItem(r.name,{state:S,version:r.version})},p=o.setState;o.setState=(S,$)=>{p(S,$),d()};const f=n((...S)=>{t(...S),d()},i,o);let v;const T=()=>{var S,$;if(!l)return;s=!1,a.forEach(_=>{var U;return _((U=i())!=null?U:f)});const B=(($=r.onRehydrateStorage)==null?void 0:$.call(r,(S=i())!=null?S:f))||void 0;return Fs(l.getItem.bind(l))(r.name).then(_=>{if(_)if(typeof _.version=="number"&&_.version!==r.version){if(r.migrate)return r.migrate(_.state,_.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return _.state}).then(_=>{var U;return v=r.merge(_,(U=i())!=null?U:f),t(v,!0),d()}).then(()=>{B==null||B(v,void 0),v=i(),s=!0,c.forEach(_=>_(v))}).catch(_=>{B==null||B(void 0,_)})};return o.persist={setOptions:S=>{r={...r,...S},S.storage&&(l=S.storage)},clearStorage:()=>{l==null||l.removeItem(r.name)},getOptions:()=>r,rehydrate:()=>T(),hasHydrated:()=>s,onHydrate:S=>(a.add(S),()=>{a.delete(S)}),onFinishHydration:S=>(c.add(S),()=>{c.delete(S)})},r.skipHydration||T(),v||f},d2=(n,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?((o2?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),l2(n,e)):u2(n,e),h2=d2;var p2={BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const G0=n=>{let e;const t=new Set,i=(c,l)=>{const d=typeof c=="function"?c(e):c;if(!Object.is(d,e)){const p=e;e=l??typeof d!="object"?d:Object.assign({},e,d),t.forEach(f=>f(e,p))}},o=()=>e,a={setState:i,getState:o,subscribe:c=>(t.add(c),()=>t.delete(c)),destroy:()=>{(p2?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),t.clear()}};return e=n(i,o,a),a},zl=n=>n?G0(n):G0;var nf={exports:{}};(function(n){var e=Object.prototype.hasOwnProperty,t="~";function i(){}Object.create&&(i.prototype=Object.create(null),new i().__proto__||(t=!1));function o(c,l,d){this.fn=c,this.context=l,this.once=d||!1}function r(c,l,d,p,f){if(typeof d!="function")throw new TypeError("The listener must be a function");var v=new o(d,p||c,f),T=t?t+l:l;return c._events[T]?c._events[T].fn?c._events[T]=[c._events[T],v]:c._events[T].push(v):(c._events[T]=v,c._eventsCount++),c}function s(c,l){--c._eventsCount===0?c._events=new i:delete c._events[l]}function a(){this._events=new i,this._eventsCount=0}a.prototype.eventNames=function(){var l=[],d,p;if(this._eventsCount===0)return l;for(p in d=this._events)e.call(d,p)&&l.push(t?p.slice(1):p);return Object.getOwnPropertySymbols?l.concat(Object.getOwnPropertySymbols(d)):l},a.prototype.listeners=function(l){var d=t?t+l:l,p=this._events[d];if(!p)return[];if(p.fn)return[p.fn];for(var f=0,v=p.length,T=new Array(v);f<v;f++)T[f]=p[f].fn;return T},a.prototype.listenerCount=function(l){var d=t?t+l:l,p=this._events[d];return p?p.fn?1:p.length:0},a.prototype.emit=function(l,d,p,f,v,T){var S=t?t+l:l;if(!this._events[S])return!1;var $=this._events[S],B=arguments.length,_,U;if($.fn){switch($.once&&this.removeListener(l,$.fn,void 0,!0),B){case 1:return $.fn.call($.context),!0;case 2:return $.fn.call($.context,d),!0;case 3:return $.fn.call($.context,d,p),!0;case 4:return $.fn.call($.context,d,p,f),!0;case 5:return $.fn.call($.context,d,p,f,v),!0;case 6:return $.fn.call($.context,d,p,f,v,T),!0}for(U=1,_=new Array(B-1);U<B;U++)_[U-1]=arguments[U];$.fn.apply($.context,_)}else{var D=$.length,W;for(U=0;U<D;U++)switch($[U].once&&this.removeListener(l,$[U].fn,void 0,!0),B){case 1:$[U].fn.call($[U].context);break;case 2:$[U].fn.call($[U].context,d);break;case 3:$[U].fn.call($[U].context,d,p);break;case 4:$[U].fn.call($[U].context,d,p,f);break;default:if(!_)for(W=1,_=new Array(B-1);W<B;W++)_[W-1]=arguments[W];$[U].fn.apply($[U].context,_)}}return!0},a.prototype.on=function(l,d,p){return r(this,l,d,p,!1)},a.prototype.once=function(l,d,p){return r(this,l,d,p,!0)},a.prototype.removeListener=function(l,d,p,f){var v=t?t+l:l;if(!this._events[v])return this;if(!d)return s(this,v),this;var T=this._events[v];if(T.fn)T.fn===d&&(!f||T.once)&&(!p||T.context===p)&&s(this,v);else{for(var S=0,$=[],B=T.length;S<B;S++)(T[S].fn!==d||f&&!T[S].once||p&&T[S].context!==p)&&$.push(T[S]);$.length?this._events[v]=$.length===1?$[0]:$:s(this,v)}return this},a.prototype.removeAllListeners=function(l){var d;return l?(d=t?t+l:l,this._events[d]&&s(this,d)):(this._events=new i,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=t,a.EventEmitter=a,n.exports=a})(nf);var f2=nf.exports;const g2=Kc(f2);var cs=function(n,e,t,i){if(t==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?n!==e||!i:!e.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?i:t==="a"?i.call(n):i?i.value:e.get(n)},pr;class w2{constructor(e){Object.defineProperty(this,"uid",{enumerable:!0,configurable:!0,writable:!0,value:e}),pr.set(this,new g2)}on(e,t){cs(this,pr,"f").on(e,t)}once(e,t){cs(this,pr,"f").once(e,t)}off(e,t){cs(this,pr,"f").off(e,t)}emit(e,...t){const i=t[0];cs(this,pr,"f").emit(e,{uid:this.uid,...i})}listenerCount(e){return cs(this,pr,"f").listenerCount(e)}}pr=new WeakMap;function m2(n){return new w2(n)}function b2(n,e){return JSON.parse(n,(t,i)=>{let o=i;return(o==null?void 0:o.__type)==="bigint"&&(o=BigInt(o.value)),(o==null?void 0:o.__type)==="Map"&&(o=new Map(o.value)),(e==null?void 0:e(t,o))??o})}function q0(n,e){return n.slice(0,e).join(".")||"."}function Y0(n,e){const{length:t}=n;for(let i=0;i<t;++i)if(n[i]===e)return i+1;return 0}function v2(n,e){const t=typeof n=="function",i=typeof e=="function",o=[],r=[];return function(a,c){if(typeof c=="object")if(o.length){const l=Y0(o,this);l===0?o[o.length]=this:(o.splice(l),r.splice(l)),r[r.length]=a;const d=Y0(o,c);if(d!==0)return i?e.call(this,a,c,q0(r,d)):`[ref=${q0(r,d)}]`}else o[0]=c,r[0]=a;return t?n.call(this,a,c):c}}function y2(n,e,t,i){return JSON.stringify(n,v2((o,r)=>{let s=r;return typeof s=="bigint"&&(s={__type:"bigint",value:r.toString()}),s instanceof Map&&(s={__type:"Map",value:Array.from(r.entries())}),(e==null?void 0:e(o,s))??s},i),t??void 0)}function x2(n){const{deserialize:e=b2,key:t="wagmi",serialize:i=y2,storage:o=rf}=n;function r(s){return s instanceof Promise?s.then(a=>a).catch(()=>null):s}return{...o,key:t,async getItem(s,a){const c=o.getItem(`${t}.${s}`),l=await r(c);return l?e(l)??null:a??null},async setItem(s,a){const c=`${t}.${s}`;a===null?await r(o.removeItem(c)):await r(o.setItem(c,i(a)))},async removeItem(s){await r(o.removeItem(`${t}.${s}`))}}}const rf={getItem:()=>null,setItem:()=>{},removeItem:()=>{}};const nc="2.9.1",C2=()=>`@wagmi/core@${nc}`;var of=function(n,e,t,i){if(t==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?n!==e||!i:!e.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?i:t==="a"?i.call(n):i?i.value:e.get(n)},pc,sf;class pi extends Error{get docsBaseUrl(){return"https://wagmi.sh/core"}get version(){return C2()}constructor(e,t={}){var r;super(),pc.add(this),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiCoreError"});const i=t.cause instanceof pi?t.cause.details:(r=t.cause)!=null&&r.message?t.cause.message:t.details,o=t.cause instanceof pi&&t.cause.docsPath||t.docsPath;this.message=[e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...o?[`Docs: ${this.docsBaseUrl}${o}.html${t.docsSlug?`#${t.docsSlug}`:""}`]:[],...i?[`Details: ${i}`]:[],`Version: ${this.version}`].join(`
`),t.cause&&(this.cause=t.cause),this.details=i,this.docsPath=o,this.metaMessages=t.metaMessages,this.shortMessage=e}walk(e){return of(this,pc,"m",sf).call(this,this,e)}}pc=new WeakSet,sf=function n(e,t){return t!=null&&t(e)?e:e.cause?of(this,pc,"m",n).call(this,e.cause,t):e};class Co extends pi{constructor(){super("Chain not configured."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotConfiguredError"})}}class _2 extends pi{constructor(){super("Connector already connected."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorAlreadyConnectedError"})}}class E2 extends pi{constructor(){super("Connector not connected."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorNotConnectedError"})}}class T2 extends pi{constructor({address:e,connector:t}){super(`Account "${e}" not found for connector "${t.name}".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorAccountNotFoundError"})}}class fr extends pi{constructor(){super("Provider not found."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderNotFoundError"})}}class A2 extends pi{constructor({connector:e}){super(`"${e.name}" does not support programmatic chain switching.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainNotSupportedError"})}}const k2=/(rabby|trustwallet)/,S2={coinbaseWallet:{id:"coinbaseWallet",name:"Coinbase Wallet",provider(n){return n!=null&&n.coinbaseWalletExtension?n.coinbaseWalletExtension:ic(n,"isCoinbaseWallet")}},metaMask:{id:"metaMask",name:"MetaMask",provider(n){return ic(n,e=>{if(!e.isMetaMask||e.isBraveWallet&&!e._events&&!e._state)return!1;const t=["isApexWallet","isAvalanche","isBitKeep","isBlockWallet","isKuCoinWallet","isMathWallet","isOkxWallet","isOKExWallet","isOneInchIOSWallet","isOneInchAndroidWallet","isOpera","isPortal","isRabby","isTokenPocket","isTokenary","isZerion"];for(const i of t)if(e[i])return!1;return!0})}},phantom:{id:"phantom",name:"Phantom",provider(n){var e,t;return(e=n==null?void 0:n.phantom)!=null&&e.ethereum?(t=n.phantom)==null?void 0:t.ethereum:ic(n,"isPhantom")}}};ol.type="injected";function ol(n={}){const{shimDisconnect:e=!0,unstable_shimAsyncInject:t}=n;function i(){const c=n.target;if(typeof c=="function"){const l=c();if(l)return l}return typeof c=="object"?c:typeof c=="string"?{...S2[c]??{id:c,name:`${c[0].toUpperCase()}${c.slice(1)}`,provider:`is${c[0].toUpperCase()}${c.slice(1)}`}}:{id:"injected",name:"Injected",provider(l){return l==null?void 0:l.ethereum}}}let o,r,s,a;return c=>({get icon(){return i().icon},get id(){return i().id},get name(){return i().name},get supportsSimulation(){return k2.test(this.id.toLowerCase())},type:ol.type,async setup(){const l=await this.getProvider();l&&n.target&&(s||(s=this.onConnect.bind(this),l.on("connect",s)),o||(o=this.onAccountsChanged.bind(this),l.on("accountsChanged",o)))},async connect({chainId:l,isReconnecting:d}={}){var v,T,S,$,B,_;const p=await this.getProvider();if(!p)throw new fr;let f=[];if(d)f=await this.getAccounts().catch(()=>[]);else if(e)try{f=($=(S=(T=(v=(await p.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]}))[0])==null?void 0:v.caveats)==null?void 0:T[0])==null?void 0:S.value)==null?void 0:$.map(D=>fn(D))}catch(U){const D=U;if(D.code===lt.code)throw new lt(D);if(D.code===Di.code)throw D}try{!(f!=null&&f.length)&&!d&&(f=(await p.request({method:"eth_requestAccounts"})).map(W=>fn(W))),s&&(p.removeListener("connect",s),s=void 0),o||(o=this.onAccountsChanged.bind(this),p.on("accountsChanged",o)),r||(r=this.onChainChanged.bind(this),p.on("chainChanged",r)),a||(a=this.onDisconnect.bind(this),p.on("disconnect",a));let U=await this.getChainId();if(l&&U!==l){const D=await this.switchChain({chainId:l}).catch(W=>{if(W.code===lt.code)throw W;return{id:U}});U=(D==null?void 0:D.id)??U}return e&&await((B=c.storage)==null?void 0:B.removeItem(`${this.id}.disconnected`)),n.target||await((_=c.storage)==null?void 0:_.setItem("injected.connected",!0)),{accounts:f,chainId:U}}catch(U){const D=U;throw D.code===lt.code?new lt(D):D.code===Di.code?new Di(D):D}},async disconnect(){var d,p;const l=await this.getProvider();if(!l)throw new fr;r&&(l.removeListener("chainChanged",r),r=void 0),a&&(l.removeListener("disconnect",a),a=void 0),s||(s=this.onConnect.bind(this),l.on("connect",s)),e&&await((d=c.storage)==null?void 0:d.setItem(`${this.id}.disconnected`,!0)),n.target||await((p=c.storage)==null?void 0:p.removeItem("injected.connected"))},async getAccounts(){const l=await this.getProvider();if(!l)throw new fr;return(await l.request({method:"eth_accounts"})).map(p=>fn(p))},async getChainId(){const l=await this.getProvider();if(!l)throw new fr;const d=await l.request({method:"eth_chainId"});return Number(d)},async getProvider(){if(typeof window>"u")return;let l;const d=i();return typeof d.provider=="function"?l=d.provider(window):typeof d.provider=="string"?l=ic(window,d.provider):l=d.provider,l&&!l.removeListener&&("off"in l&&typeof l.off=="function"?l.removeListener=l.off:l.removeListener=()=>{}),l},async isAuthorized(){var l,d;try{if(e&&await((l=c.storage)==null?void 0:l.getItem(`${this.id}.disconnected`))||!n.target&&!await((d=c.storage)==null?void 0:d.getItem("injected.connected")))return!1;if(!await this.getProvider()){if(t!==void 0&&t!==!1){const T=async()=>(typeof window<"u"&&window.removeEventListener("ethereum#initialized",T),!!await this.getProvider()),S=typeof t=="number"?t:1e3;if(await Promise.race([...typeof window<"u"?[new Promise(B=>window.addEventListener("ethereum#initialized",()=>B(T()),{once:!0}))]:[],new Promise(B=>setTimeout(()=>B(T()),S))]))return!0}throw new fr}return!!(await hc(()=>Qp(()=>this.getAccounts(),{timeout:100}))).length}catch{return!1}},async switchChain({addEthereumChainParameter:l,chainId:d}){var v,T,S,$;const p=await this.getProvider();if(!p)throw new fr;const f=c.chains.find(B=>B.id===d);if(!f)throw new Jt(new Co);try{return await Promise.all([p.request({method:"wallet_switchEthereumChain",params:[{chainId:ze(d)}]}).then(async()=>{await this.getChainId()===d&&c.emitter.emit("change",{chainId:d})}),new Promise(B=>c.emitter.once("change",({chainId:_})=>{_===d&&B()}))]),f}catch(B){const _=B;if(_.code===4902||((T=(v=_==null?void 0:_.data)==null?void 0:v.originalError)==null?void 0:T.code)===4902)try{const{default:U,...D}=f.blockExplorers??{};let W;l!=null&&l.blockExplorerUrls?W=l.blockExplorerUrls:U&&(W=[U.url,...Object.values(D).map(m=>m.url)]);let Z;(S=l==null?void 0:l.rpcUrls)!=null&&S.length?Z=l.rpcUrls:Z=[(($=f.rpcUrls.default)==null?void 0:$.http[0])??""];const Q={blockExplorerUrls:W,chainId:ze(d),chainName:(l==null?void 0:l.chainName)??f.name,iconUrls:l==null?void 0:l.iconUrls,nativeCurrency:(l==null?void 0:l.nativeCurrency)??f.nativeCurrency,rpcUrls:Z};if(await p.request({method:"wallet_addEthereumChain",params:[Q]}),await this.getChainId()!==d)throw new lt(new Error("User rejected switch after adding network."));return f}catch(U){throw new lt(U)}throw _.code===lt.code?new lt(_):new Jt(_)}},async onAccountsChanged(l){var d;if(l.length===0)this.onDisconnect();else if(c.emitter.listenerCount("connect")){const p=(await this.getChainId()).toString();this.onConnect({chainId:p}),e&&await((d=c.storage)==null?void 0:d.removeItem(`${this.id}.disconnected`))}else c.emitter.emit("change",{accounts:l.map(p=>fn(p))})},onChainChanged(l){const d=Number(l);c.emitter.emit("change",{chainId:d})},async onConnect(l){const d=await this.getAccounts();if(d.length===0)return;const p=Number(l.chainId);c.emitter.emit("connect",{accounts:d,chainId:p});const f=await this.getProvider();f&&(s&&(f.removeListener("connect",s),s=void 0),o||(o=this.onAccountsChanged.bind(this),f.on("accountsChanged",o)),r||(r=this.onChainChanged.bind(this),f.on("chainChanged",r)),a||(a=this.onDisconnect.bind(this),f.on("disconnect",a)))},async onDisconnect(l){const d=await this.getProvider();l&&l.code===1013&&d&&(await this.getAccounts()).length||(c.emitter.emit("disconnect"),d&&(r&&(d.removeListener("chainChanged",r),r=void 0),a&&(d.removeListener("disconnect",a),a=void 0),s||(s=this.onConnect.bind(this),d.on("connect",s))))}})}function ic(n,e){function t(o){return typeof e=="function"?e(o):typeof e=="string"?o[e]:!0}const i=n.ethereum;if(i!=null&&i.providers)return i.providers.find(o=>t(o));if(i&&t(i))return i}const Du=256;let Za=Du,Ga;function $2(n=11){if(!Ga||Za+n>Du*2){Ga="",Za=0;for(let e=0;e<Du;e++)Ga+=(256+Math.random()*256|0).toString(16).substring(1)}return Ga.substring(Za,Za+++n)}function R2(n){const{multiInjectedProviderDiscovery:e=!0,storage:t=x2({storage:typeof window<"u"&&window.localStorage?window.localStorage:rf}),syncConnectedChain:i=!0,ssr:o,...r}=n,s=typeof window<"u"&&e?t2():void 0,a=zl(()=>r.chains),c=zl(()=>[...r.connectors??[],...o?[]:(s==null?void 0:s.getProviders().map(d))??[]].map(l));function l(D){var Q;const W=m2($2()),Z={...D({emitter:W,chains:a.getState(),storage:t}),emitter:W,uid:W.uid};return W.on("connect",_),(Q=Z.setup)==null||Q.call(Z),Z}function d(D){const{info:W}=D,Z=D.provider;return ol({target:{...W,id:W.rdns,provider:Z}})}const p=new Map;function f(D={}){const W=D.chainId??$.getState().chainId,Z=a.getState().find(g=>g.id===W);if(D.chainId&&!Z)throw new Co;{const g=p.get($.getState().chainId);if(g&&!Z)return g;if(!Z)throw new Co}{const g=p.get(W);if(g)return g}let Q;if(r.client)Q=r.client({chain:Z});else{const g=Z.id,m=a.getState().map(P=>P.id),b={},R=Object.entries(r);for(const[P,N]of R)if(!(P==="chains"||P==="client"||P==="connectors"||P==="transports"))if(typeof N=="object")if(g in N)b[P]=N[g];else{if(m.some(E=>E in N))continue;b[P]=N}else b[P]=N;Q=ef({...b,chain:Z,batch:b.batch??{multicall:!0},transport:P=>r.transports[g]({...P,connectors:c})})}return p.set(W,Q),Q}function v(){return{chainId:a.getState()[0].id,connections:new Map,current:null,status:"disconnected"}}let T;const S="0.0.0-canary-";nc.startsWith(S)?T=parseInt(nc.replace(S,"")):T=parseInt(nc.split(".")[0]??"0");const $=zl(a2(t?h2(v,{migrate(D,W){if(W===T)return D;const Z=v(),Q=D&&typeof D=="object"&&"chainId"in D&&typeof D.chainId=="number"?D.chainId:Z.chainId;return{...Z,chainId:Q}},name:"store",partialize(D){return{connections:{__type:"Map",value:Array.from(D.connections.entries()).map(([W,Z])=>{const{id:Q,name:g,type:m,uid:b}=Z.connector;return[W,{...Z,connector:{id:Q,name:g,type:m,uid:b}}]})},chainId:D.chainId,current:D.current}},skipHydration:o,storage:t,version:T}):v));i&&$.subscribe(({connections:D,current:W})=>{var Z;return W?(Z=D.get(W))==null?void 0:Z.chainId:void 0},D=>{if(a.getState().some(Z=>Z.id===D))return $.setState(Z=>({...Z,chainId:D??Z.chainId}))}),s==null||s.subscribe(D=>{const W=new Map;for(const Q of c.getState())W.set(Q.id,!0);const Z=[];for(const Q of D){const g=l(d(Q));W.has(g.id)||Z.push(g)}t&&!$.persist.hasHydrated()||c.setState(Q=>[...Q,...Z],!0)});function B(D){$.setState(W=>{const Z=W.connections.get(D.uid);return Z?{...W,connections:new Map(W.connections).set(D.uid,{accounts:D.accounts??Z.accounts,chainId:D.chainId??Z.chainId,connector:Z.connector})}:W})}function _(D){$.getState().status==="connecting"||$.getState().status==="reconnecting"||$.setState(W=>{const Z=c.getState().find(Q=>Q.uid===D.uid);return Z?(Z.emitter.listenerCount("connect")&&Z.emitter.off("connect",B),Z.emitter.listenerCount("change")||Z.emitter.on("change",B),Z.emitter.listenerCount("disconnect")||Z.emitter.on("disconnect",U),{...W,connections:new Map(W.connections).set(D.uid,{accounts:D.accounts,chainId:D.chainId,connector:Z}),current:D.uid,status:"connected"}):W})}function U(D){$.setState(W=>{const Z=W.connections.get(D.uid);if(Z){const g=Z.connector;g.emitter.listenerCount("change")&&Z.connector.emitter.off("change",B),g.emitter.listenerCount("disconnect")&&Z.connector.emitter.off("disconnect",U),g.emitter.listenerCount("connect")||Z.connector.emitter.on("connect",_)}if(W.connections.delete(D.uid),W.connections.size===0)return{...W,connections:new Map,current:null,status:"disconnected"};const Q=W.connections.values().next().value;return{...W,connections:new Map(W.connections),current:Q.connector.uid}})}return{get chains(){return a.getState()},get connectors(){return c.getState()},storage:t,getClient:f,get state(){return $.getState()},setState(D){let W;typeof D=="function"?W=D($.getState()):W=D;const Z=v();typeof W!="object"&&(W=Z),Object.keys(Z).some(g=>!(g in W))&&(W=Z),$.setState(W,!0)},subscribe(D,W,Z){return $.subscribe(D,W,Z?{...Z,fireImmediately:Z.emitImmediately}:void 0)},_internal:{mipd:s,store:$,ssr:!!o,syncConnectedChain:i,transports:r.transports,chains:{setState(D){const W=typeof D=="function"?D(a.getState()):D;if(W.length!==0)return a.setState(W,!0)},subscribe(D){return a.subscribe(D)}},connectors:{providerDetailToConnector:d,setup:l,setState(D){return c.setState(typeof D=="function"?D(c.getState()):D,!0)},subscribe(D){return c.subscribe(D)}},events:{change:B,connect:_,disconnect:U}}}}function Kt(n,e,t){const i=n[e.name];if(typeof i=="function")return i;const o=n[t];return typeof o=="function"?o:r=>e(n,r)}async function K0(n,e){var i;let t;if(typeof e.connector=="function"?t=n._internal.connectors.setup(e.connector):t=e.connector,t.uid===n.state.current)throw new _2;try{n.setState(s=>({...s,status:"connecting"})),t.emitter.emit("message",{type:"connecting"});const o=await t.connect({chainId:e.chainId}),r=o.accounts;return t.emitter.off("connect",n._internal.events.connect),t.emitter.on("change",n._internal.events.change),t.emitter.on("disconnect",n._internal.events.disconnect),await((i=n.storage)==null?void 0:i.setItem("recentConnectorId",t.id)),n.setState(s=>({...s,connections:new Map(s.connections).set(t.uid,{accounts:r,chainId:o.chainId,connector:t}),current:t.uid,status:"connected"})),{accounts:r,chainId:o.chainId}}catch(o){throw n.setState(r=>({...r,status:r.current?"connected":"disconnected"})),o}}async function I2(n,e={}){var o,r;let t;if(e.connector)t=e.connector;else{const{connections:s,current:a}=n.state,c=s.get(a);t=c==null?void 0:c.connector}const i=n.state.connections;t&&(await t.disconnect(),t.emitter.off("change",n._internal.events.change),t.emitter.off("disconnect",n._internal.events.disconnect),t.emitter.on("connect",n._internal.events.connect),i.delete(t.uid)),n.setState(s=>{if(i.size===0)return{...s,connections:new Map,current:null,status:"disconnected"};const a=i.values().next().value;return{...s,connections:new Map(i),current:a.connector.uid}});{const s=n.state.current;if(!s)return;const a=(o=n.state.connections.get(s))==null?void 0:o.connector;if(!a)return;await((r=n.storage)==null?void 0:r.setItem("recentConnectorId",a.id))}}async function Pd(n,e={}){let t;if(e.connector){const{connector:c}=e,[l,d]=await Promise.all([c.getAccounts(),c.getChainId()]);t={accounts:l,chainId:d,connector:c}}else t=n.state.connections.get(n.state.current);if(!t)throw new E2;const i=e.chainId??t.chainId,o=t.connector;if(o.getClient)return o.getClient({chainId:i});const r=Ci(e.account??t.accounts[0]);r.address=fn(r.address);const s=n.chains.find(c=>c.id===i),a=await t.connector.getProvider({chainId:i});if(e.account&&!t.accounts.includes(r.address))throw new T2({address:r.address,connector:o});return ef({account:r,chain:s,name:"Connector Client",transport:c=>i2(a)({...c,retryCount:0})})}async function P2(n,e){const{chainId:t,connector:i,...o}=e;let r;e.account?r=e.account:r=(await Pd(n,{account:e.account,chainId:t,connector:i})).account;const s=n.getClient({chainId:t});return Kt(s,Cd,"estimateGas")({...o,account:r})}function af(n){return typeof n=="number"?n:n==="wei"?0:Math.abs(Jg[n])}function sl(n){const e=n.state.current,t=n.state.connections.get(e),i=t==null?void 0:t.accounts,o=i==null?void 0:i[0],r=n.chains.find(a=>a.id===(t==null?void 0:t.chainId)),s=n.state.status;switch(s){case"connected":return{address:o,addresses:i,chain:r,chainId:t==null?void 0:t.chainId,connector:t==null?void 0:t.connector,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:s};case"reconnecting":return{address:o,addresses:i,chain:r,chainId:t==null?void 0:t.chainId,connector:t==null?void 0:t.connector,isConnected:!!o,isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:s};case"connecting":return{address:o,addresses:i,chain:r,chainId:t==null?void 0:t.chainId,connector:t==null?void 0:t.connector,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:s};case"disconnected":return{address:void 0,addresses:void 0,chain:void 0,chainId:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:s}}}async function O2(n,e){const{allowFailure:t=!0,chainId:i,contracts:o,...r}=e,s=n.getClient({chainId:i});return Kt(s,zm,"multicall")({allowFailure:t,contracts:o,...r})}function N2(n,e){const{chainId:t,...i}=e,o=n.getClient({chainId:t});return Kt(o,xo,"readContract")(i)}async function M2(n,e){const{allowFailure:t=!0,blockNumber:i,blockTag:o,...r}=e,s=e.contracts;try{const a=s.reduce((p,f,v)=>{const T=f.chainId??n.state.chainId;return{...p,[T]:[...p[T]||[],{contract:f,index:v}]}},{}),c=()=>Object.entries(a).map(([p,f])=>O2(n,{...r,allowFailure:t,blockNumber:i,blockTag:o,chainId:parseInt(p),contracts:f.map(({contract:v})=>v)})),l=(await Promise.all(c())).flat(),d=Object.values(a).flatMap(p=>p.map(({index:f})=>f));return l.reduce((p,f,v)=>(p&&(p[d[v]]=f),p),[])}catch(a){if(a instanceof kd)throw a;const c=()=>s.map(l=>N2(n,{...l,blockNumber:i,blockTag:o}));return t?(await Promise.allSettled(c())).map(l=>l.status==="fulfilled"?{result:l.value,status:"success"}:{error:l.reason,result:void 0,status:"failure"}):await Promise.all(c())}}async function B2(n,e){const{address:t,blockNumber:i,blockTag:o,chainId:r,token:s,unit:a="ether"}=e;if(s)try{return J0(n,{balanceAddress:t,chainId:r,symbolType:"string",tokenAddress:s})}catch(f){if(f instanceof kd){const v=await J0(n,{balanceAddress:t,chainId:r,symbolType:"bytes32",tokenAddress:s}),T=lp(_a(v.symbol,{dir:"right"}));return{...v,symbol:T}}throw f}const c=n.getClient({chainId:r}),d=await Kt(c,Om,"getBalance")(i?{address:t,blockNumber:i}:{address:t,blockTag:o}),p=n.chains.find(f=>f.id===r)??c.chain;return{decimals:p.nativeCurrency.decimals,formatted:Ta(d,af(a)),symbol:p.nativeCurrency.symbol,value:d}}async function J0(n,e){const{balanceAddress:t,chainId:i,symbolType:o,tokenAddress:r,unit:s}=e,a={abi:[{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{type:"address"}],outputs:[{type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{type:"uint8"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{type:o}]}],address:r},[c,l,d]=await M2(n,{allowFailure:!1,contracts:[{...a,functionName:"balanceOf",args:[t],chainId:i},{...a,functionName:"decimals",chainId:i},{...a,functionName:"symbol",chainId:i}]}),p=Ta(c??"0",af(s??l));return{decimals:l,formatted:p,symbol:d,value:c}}function Lu(n,e){if(n===e)return!0;if(n&&e&&typeof n=="object"&&typeof e=="object"){if(n.constructor!==e.constructor)return!1;let t,i;if(Array.isArray(n)&&Array.isArray(e)){if(t=n.length,t!==e.length)return!1;for(i=t;i--!==0;)if(!Lu(n[i],e[i]))return!1;return!0}if(n.valueOf!==Object.prototype.valueOf)return n.valueOf()===e.valueOf();if(n.toString!==Object.prototype.toString)return n.toString()===e.toString();const o=Object.keys(n);if(t=o.length,t!==Object.keys(e).length)return!1;for(i=t;i--!==0;)if(!Object.prototype.hasOwnProperty.call(e,o[i]))return!1;for(i=t;i--!==0;){const r=o[i];if(r&&!Lu(n[r],e[r]))return!1}return!0}return n!==n&&e!==e}function D2(n,e){const{chainId:t,...i}=e,o=n.getClient({chainId:t});return Kt(o,Im,"getEnsAvatar")(i)}function L2(n,e){const{chainId:t,...i}=e,o=n.getClient({chainId:t});return Kt(o,Pm,"getEnsName")(i)}async function U2(n,e){const{account:t,chainId:i,...o}=e,r=t??sl(n).address,s=n.getClient({chainId:i});return Kt(s,Ed,"prepareTransactionRequest")({...o,...r?{account:r}:{}})}let Hl=!1;async function j2(n,e={}){var l,d;if(Hl)return[];Hl=!0,n.setState(p=>({...p,status:p.current?"reconnecting":"connecting"}));const t=[];if((l=e.connectors)!=null&&l.length)for(const p of e.connectors){let f;typeof p=="function"?f=n._internal.connectors.setup(p):f=p,t.push(f)}else t.push(...n.connectors);let i;try{i=await((d=n.storage)==null?void 0:d.getItem("recentConnectorId"))}catch{}const o={};for(const[,p]of n.state.connections)o[p.connector.id]=1;i&&(o[i]=0);const r=Object.keys(o).length>0?[...t].sort((p,f)=>(o[p.id]??10)-(o[f.id]??10)):t;let s=!1;const a=[],c=[];for(const p of r){const f=await p.getProvider();if(!f||c.some(S=>S===f)||!await p.isAuthorized())continue;const T=await p.connect({isReconnecting:!0}).catch(()=>null);T&&(p.emitter.off("connect",n._internal.events.connect),p.emitter.on("change",n._internal.events.change),p.emitter.on("disconnect",n._internal.events.disconnect),n.setState(S=>{const $=new Map(s?S.connections:new Map).set(p.uid,{accounts:T.accounts,chainId:T.chainId,connector:p});return{...S,current:s?S.current:p.uid,connections:$}}),a.push({accounts:T.accounts,chainId:T.chainId,connector:p}),c.push(f),s=!0)}return(n.state.status==="reconnecting"||n.state.status==="connecting")&&(s?n.setState(p=>({...p,status:"connected"})):n.setState(p=>({...p,connections:new Map,current:null,status:"disconnected"}))),Hl=!1,a}async function W2(n,e){const{account:t,chainId:i,connector:o,gas:r,...s}=e;let a;typeof t=="object"&&t.type==="local"?a=n.getClient({chainId:i}):a=await Pd(n,{account:t,chainId:i,connector:o});const{connector:c}=sl(n),l=await(async()=>{var f;if(!(!("data"in e)||!e.data)&&!((f=o??c)!=null&&f.supportsSimulation)&&r!==null)return r===void 0?Kt(a,Cd,"estimateGas")({...s,account:t,chain:i?{id:i}:null}):r})();return await Kt(a,Pw,"sendTransaction")({...s,...t?{account:t}:{},gas:l,chain:i?{id:i}:null})}async function F2(n,e){const{account:t,connector:i,...o}=e;let r;return typeof t=="object"&&t.type==="local"?r=n.getClient():r=await Pd(n,{account:t,connector:i}),Kt(r,Qm,"signMessage")({...o,...t?{account:t}:{}})}async function z2(n,e){var s;const{addEthereumChainParameter:t,chainId:i}=e,o=n.state.connections.get(((s=e.connector)==null?void 0:s.uid)??n.state.current);if(o){const a=o.connector;if(!a.switchChain)throw new A2({connector:a});return await a.switchChain({addEthereumChainParameter:t,chainId:i})}const r=n.chains.find(a=>a.id===i);if(!r)throw new Co;return n.setState(a=>({...a,chainId:i})),r}function H2(n,e){const{onChange:t}=e;return n.subscribe(()=>sl(n),t,{equalityFn(i,o){const{connector:r,...s}=i,{connector:a,...c}=o;return Lu(s,c)&&(r==null?void 0:r.id)===(a==null?void 0:a.id)&&(r==null?void 0:r.uid)===(a==null?void 0:a.uid)}})}function V2(n,e){const{onChange:t}=e;return n._internal.connectors.subscribe((i,o)=>{t(Object.values(i),o)})}async function Z2(n,e){const{chainId:t,timeout:i=0,...o}=e,r=n.getClient({chainId:t}),a=await Kt(r,Xm,"waitForTransactionReceipt")({...o,timeout:i});if(a.status==="reverted"){const l=await Kt(r,Xp,"getTransaction")({hash:a.transactionHash}),p=await Kt(r,Yp,"call")({...l,gasPrice:l.type!=="eip1559"?l.gasPrice:void 0,maxFeePerGas:l.type==="eip1559"?l.maxFeePerGas:void 0,maxPriorityFeePerGas:l.type==="eip1559"?l.maxPriorityFeePerGas:void 0}),f=p!=null&&p.data?lp(`0x${p.data.substring(138)}`):"unknown reason";throw new Error(f)}return{...a,chainId:r.chain.id}}function Vl(n){if(typeof n=="string")return Number.parseInt(n,n.trim().substring(0,2)==="0x"?16:10);if(typeof n=="bigint")return Number(n);if(typeof n=="number")return n;throw new Error(`Cannot normalize chainId "${n}" of type "${typeof n}"`)}const G2=Id({id:42161,name:"Arbitrum One",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://arb1.arbitrum.io/rpc"]}},blockExplorers:{default:{name:"Arbiscan",url:"https://arbiscan.io",apiUrl:"https://api.arbiscan.io/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:7654707}}}),cf=Id({id:1,name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://cloudflare-eth.com"]}},blockExplorers:{default:{name:"Etherscan",url:"https://etherscan.io",apiUrl:"https://api.etherscan.io/api"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xce01f8eee7E479C928F8919abD53E553a36CeF67",blockCreated:19258213},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}}),q2=Id({id:11155111,name:"Sepolia",nativeCurrency:{name:"Sepolia Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://rpc.sepolia.org"]}},blockExplorers:{default:{name:"Etherscan",url:"https://sepolia.etherscan.io",apiUrl:"https://api-sepolia.etherscan.io/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:751532},ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xc8Af999e38273D658BE1b921b88A9Ddf005769cC",blockCreated:5317080}},testnet:!0}),Y2=Symbol(),X0=Object.getPrototypeOf,Uu=new WeakMap,K2=n=>n&&(Uu.has(n)?Uu.get(n):X0(n)===Object.prototype||X0(n)===Array.prototype),J2=n=>K2(n)&&n[Y2]||null,Q0=(n,e=!0)=>{Uu.set(n,e)};var fc={BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Zl=n=>typeof n=="object"&&n!==null,Ri=new WeakMap,hs=new WeakSet,X2=(n=Object.is,e=(l,d)=>new Proxy(l,d),t=l=>Zl(l)&&!hs.has(l)&&(Array.isArray(l)||!(Symbol.iterator in l))&&!(l instanceof WeakMap)&&!(l instanceof WeakSet)&&!(l instanceof Error)&&!(l instanceof Number)&&!(l instanceof Date)&&!(l instanceof String)&&!(l instanceof RegExp)&&!(l instanceof ArrayBuffer),i=l=>{switch(l.status){case"fulfilled":return l.value;case"rejected":throw l.reason;default:throw l}},o=new WeakMap,r=(l,d,p=i)=>{const f=o.get(l);if((f==null?void 0:f[0])===d)return f[1];const v=Array.isArray(l)?[]:Object.create(Object.getPrototypeOf(l));return Q0(v,!0),o.set(l,[d,v]),Reflect.ownKeys(l).forEach(T=>{if(Object.getOwnPropertyDescriptor(v,T))return;const S=Reflect.get(l,T),$={value:S,enumerable:!0,configurable:!0};if(hs.has(S))Q0(S,!1);else if(S instanceof Promise)delete $.value,$.get=()=>p(S);else if(Ri.has(S)){const[B,_]=Ri.get(S);$.value=r(B,_(),p)}Object.defineProperty(v,T,$)}),Object.preventExtensions(v)},s=new WeakMap,a=[1,1],c=l=>{if(!Zl(l))throw new Error("object required");const d=s.get(l);if(d)return d;let p=a[0];const f=new Set,v=(m,b=++a[0])=>{p!==b&&(p=b,f.forEach(R=>R(m,b)))};let T=a[1];const S=(m=++a[1])=>(T!==m&&!f.size&&(T=m,B.forEach(([b])=>{const R=b[1](m);R>p&&(p=R)})),p),$=m=>(b,R)=>{const P=[...b];P[1]=[m,...P[1]],v(P,R)},B=new Map,_=(m,b)=>{if((fc?"production":void 0)!=="production"&&B.has(m))throw new Error("prop listener already exists");if(f.size){const R=b[3]($(m));B.set(m,[b,R])}else B.set(m,[b])},U=m=>{var b;const R=B.get(m);R&&(B.delete(m),(b=R[1])==null||b.call(R))},D=m=>(f.add(m),f.size===1&&B.forEach(([R,P],N)=>{if((fc?"production":void 0)!=="production"&&P)throw new Error("remove already exists");const M=R[3]($(N));B.set(N,[R,M])}),()=>{f.delete(m),f.size===0&&B.forEach(([R,P],N)=>{P&&(P(),B.set(N,[R]))})}),W=Array.isArray(l)?[]:Object.create(Object.getPrototypeOf(l)),Q=e(W,{deleteProperty(m,b){const R=Reflect.get(m,b);U(b);const P=Reflect.deleteProperty(m,b);return P&&v(["delete",[b],R]),P},set(m,b,R,P){const N=Reflect.has(m,b),M=Reflect.get(m,b,P);if(N&&(n(M,R)||s.has(R)&&n(M,s.get(R))))return!0;U(b),Zl(R)&&(R=J2(R)||R);let E=R;if(R instanceof Promise)R.then(A=>{R.status="fulfilled",R.value=A,v(["resolve",[b],A])}).catch(A=>{R.status="rejected",R.reason=A,v(["reject",[b],A])});else{!Ri.has(R)&&t(R)&&(E=c(R));const A=!hs.has(E)&&Ri.get(E);A&&_(b,A)}return Reflect.set(m,b,E,P),v(["set",[b],R,M]),!0}});s.set(l,Q);const g=[W,S,r,D];return Ri.set(Q,g),Reflect.ownKeys(l).forEach(m=>{const b=Object.getOwnPropertyDescriptor(l,m);"value"in b&&(Q[m]=l[m],delete b.value,delete b.writable),Object.defineProperty(W,m,b)}),Q})=>[c,Ri,hs,n,e,t,i,o,r,s,a],[Q2]=X2();function At(n={}){return Q2(n)}function Xt(n,e,t){const i=Ri.get(n);(fc?"production":void 0)!=="production"&&!i&&console.warn("Please use proxy object");let o;const r=[],s=i[3];let a=!1;const l=s(d=>{if(r.push(d),t){e(r.splice(0));return}o||(o=Promise.resolve().then(()=>{o=void 0,a&&e(r.splice(0))}))});return a=!0,()=>{a=!1,l()}}function lf(n,e){const t=Ri.get(n);(fc?"production":void 0)!=="production"&&!t&&console.warn("Please use proxy object");const[i,o,r]=t;return r(i,o(),e)}function _o(n){return hs.add(n),n}function on(n,e,t,i){let o=n[e];return Xt(n,()=>{const r=n[e];Object.is(o,r)||t(o=r)},i)}const Gl="https://secure.walletconnect.com",uf=[{label:"Coinbase",name:"coinbase",feeRange:"1-2%",url:""}],ut={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,SECURE_SITE:Gl,SECURE_SITE_DASHBOARD:`${Gl}/dashboard`,SECURE_SITE_FAVICON:`${Gl}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],WC_COINBASE_PAY_SDK_CHAINS:["ethereum","arbitrum","polygon","avalanche-c-chain","optimism","celo","base"],WC_COINBASE_PAY_SDK_FALLBACK_CHAIN:"ethereum",WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP:{Ethereum:"ethereum","Arbitrum One":"arbitrum",Polygon:"polygon",Avalanche:"avalanche-c-chain","OP Mainnet":"optimism",Celo:"celo",Base:"base"},WC_COINBASE_ONRAMP_APP_ID:"bf18c88d-495a-463b-b249-0b9d3656cf5e",SUGGESTED_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP"],POPULAR_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP","DAI","CHAMP","WOLF","SALE","BAL","BUSD","MUST","BTCpx","ROUTE","HEX","WELT","amDAI","VSQ","VISION","AURUM","pSP","SNX","VC","LINK","CHP","amUSDT","SPHERE","FOX","GIDDY","GFC","OMEN","OX_OLD","DE","WNT"],NATIVE_TOKEN_ADDRESS:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",CONVERT_SLIPPAGE_TOLERANCE:1},oe={isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},checkCaipNetwork(n,e=""){return n==null?void 0:n.id.toLocaleLowerCase().includes(e.toLowerCase())},isAndroid(){const n=window.navigator.userAgent.toLowerCase();return oe.isMobile()&&n.includes("android")},isIos(){const n=window.navigator.userAgent.toLowerCase();return oe.isMobile()&&(n.includes("iphone")||n.includes("ipad"))},isClient(){return typeof window<"u"},isPairingExpired(n){return n?n-Date.now()<=ut.TEN_SEC_MS:!0},isAllowedRetry(n){return Date.now()-n>=ut.ONE_SEC_MS},copyToClopboard(n){navigator.clipboard.writeText(n)},getPairingExpiry(){return Date.now()+ut.FOUR_MINUTES_MS},getPlainAddress(n){return n.split(":")[2]},async wait(n){return new Promise(e=>{setTimeout(e,n)})},debounce(n,e=500){let t;return(...i)=>{function o(){n(...i)}t&&clearTimeout(t),t=setTimeout(o,e)}},isHttpUrl(n){return n.startsWith("http://")||n.startsWith("https://")},formatNativeUrl(n,e){if(oe.isHttpUrl(n))return this.formatUniversalUrl(n,e);let t=n;t.includes("://")||(t=n.replaceAll("/","").replaceAll(":",""),t=`${t}://`),t.endsWith("/")||(t=`${t}/`);const i=encodeURIComponent(e);return{redirect:`${t}wc?uri=${i}`,href:t}},formatUniversalUrl(n,e){if(!oe.isHttpUrl(n))return this.formatNativeUrl(n,e);let t=n;t.endsWith("/")||(t=`${t}/`);const i=encodeURIComponent(e);return{redirect:`${t}wc?uri=${i}`,href:t}},openHref(n,e,t){window.open(n,e,t||"noreferrer noopener")},async preloadImage(n){const e=new Promise((t,i)=>{const o=new Image;o.onload=t,o.onerror=i,o.crossOrigin="anonymous",o.src=n});return Promise.race([e,oe.wait(2e3)])},formatBalance(n,e){var i;let t;if(n==="0")t="0.000";else if(typeof n=="string"){const o=Number(n);o&&(t=(i=o.toString().match(/^-?\d+(?:\.\d{0,3})?/u))==null?void 0:i[0])}return t?`${t} ${e??""}`:`0.000 ${e??""}`},formatBalance2(n,e){var i;let t;if(n==="0")t="0";else if(typeof n=="string"){const o=Number(n);o&&(t=(i=o.toString().match(/^-?\d+(?:\.\d{0,3})?/u))==null?void 0:i[0])}return{value:t??"0",rest:t==="0"?"000":"",symbol:e}},isRestrictedRegion(){try{const{timeZone:n}=new Intl.DateTimeFormat().resolvedOptions(),e=n.toUpperCase();return ut.RESTRICTED_TIMEZONES.includes(e)}catch{return!1}},getApiUrl(){return oe.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com"},getBlockchainApiUrl(){return oe.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"},getAnalyticsUrl(){return oe.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com"},getUUID(){return crypto!=null&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,n=>{const e=Math.random()*16|0;return(n==="x"?e:e&3|8).toString(16)})},parseError(n){var e,t;return typeof n=="string"?n:typeof((t=(e=n==null?void 0:n.issues)==null?void 0:e[0])==null?void 0:t.message)=="string"?n.issues[0].message:n instanceof Error?n.message:"Unknown error"},sortRequestedNetworks(n,e=[]){const t={};return e&&n&&(n.forEach((i,o)=>{t[i]=o}),e.sort((i,o)=>{const r=t[i.id],s=t[o.id];return r!==void 0&&s!==void 0?r-s:r!==void 0?-1:s!==void 0?1:0})),e},calculateBalance(n){let e=0;for(const t of n)e+=t.value??0;return e},formatTokenBalance(n){const e=n.toFixed(2),[t,i]=e.split(".");return{dollars:t,pennies:i}},isAddress(n){if(/^(?:0x)?[0-9a-f]{40}$/iu.test(n)){if(/^(?:0x)?[0-9a-f]{40}$/iu.test(n)||/^(?:0x)?[0-9A-F]{40}$/iu.test(n))return!0}else return!1;return!1}};class Od{constructor({baseUrl:e}){this.baseUrl=e}async get({headers:e,signal:t,...i}){const o=this.createUrl(i);return(await fetch(o,{method:"GET",headers:e,signal:t,cache:"no-cache"})).json()}async getBlob({headers:e,signal:t,...i}){const o=this.createUrl(i);return(await fetch(o,{method:"GET",headers:e,signal:t})).blob()}async post({body:e,headers:t,signal:i,...o}){const r=this.createUrl(o);return(await fetch(r,{method:"POST",headers:t,body:e?JSON.stringify(e):void 0,signal:i})).json()}async put({body:e,headers:t,signal:i,...o}){const r=this.createUrl(o);return(await fetch(r,{method:"PUT",headers:t,body:e?JSON.stringify(e):void 0,signal:i})).json()}async delete({body:e,headers:t,signal:i,...o}){const r=this.createUrl(o);return(await fetch(r,{method:"DELETE",headers:t,body:e?JSON.stringify(e):void 0,signal:i})).json()}createUrl({path:e,params:t}){const i=new URL(e,this.baseUrl);return t&&Object.entries(t).forEach(([o,r])=>{r&&i.searchParams.append(o,r)}),i}}const xt=At({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),fe={state:xt,subscribeKey(n,e){return on(xt,n,e)},setProjectId(n){xt.projectId=n},setAllWallets(n){xt.allWallets=n},setIncludeWalletIds(n){xt.includeWalletIds=n},setExcludeWalletIds(n){xt.excludeWalletIds=n},setFeaturedWalletIds(n){xt.featuredWalletIds=n},setTokens(n){xt.tokens=n},setTermsConditionsUrl(n){xt.termsConditionsUrl=n},setPrivacyPolicyUrl(n){xt.privacyPolicyUrl=n},setCustomWallets(n){xt.customWallets=n},setIsSiweEnabled(n){xt.isSiweEnabled=n},setEnableAnalytics(n){xt.enableAnalytics=n},setSdkVersion(n){xt.sdkVersion=n},setMetadata(n){xt.metadata=n},setOnrampEnabled(n){xt.enableOnramp=n},setWalletFeaturesEnabled(n){xt.enableWalletFeatures=n}},e3={purchaseCurrencies:[{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"Ether",symbol:"ETH",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]}],paymentCurrencies:[{id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},{id:"EUR",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]}]},t3=oe.getBlockchainApiUrl(),ln=new Od({baseUrl:t3}),Bt={fetchIdentity({address:n}){return ln.get({path:`/v1/identity/${n}`,params:{projectId:fe.state.projectId}})},fetchTransactions({account:n,projectId:e,cursor:t,onramp:i,signal:o}){const r=t?{cursor:t}:{};return ln.get({path:`/v1/account/${n}/history?projectId=${e}${i?`&onramp=${i}`:""}`,params:r,signal:o})},fetchConvertTokens({projectId:n,chainId:e}){return ln.get({path:`/v1/convert/tokens?projectId=${n}&chainId=${e}`})},fetchTokenPrice({projectId:n,addresses:e}){return ln.post({path:"/v1/fungible/price",body:{projectId:n,currency:"usd",addresses:e},headers:{"Content-Type":"application/json"}})},fetchConvertAllowance({projectId:n,tokenAddress:e,userAddress:t}){const{sdkType:i,sdkVersion:o}=fe.state;return ln.get({path:`/v1/convert/allowance?projectId=${n}&tokenAddress=${e}&userAddress=${t}`,headers:{"Content-Type":"application/json","x-sdk-type":i,"x-sdk-version":o}})},fetchGasPrice({projectId:n,chainId:e}){const{sdkType:t,sdkVersion:i}=fe.state;return ln.get({path:`/v1/convert/gas-price?projectId=${n}&chainId=${e}`,headers:{"Content-Type":"application/json","x-sdk-type":t,"x-sdk-version":i}})},generateConvertCalldata({amount:n,from:e,projectId:t,to:i,userAddress:o}){return ln.post({path:"/v1/convert/build-transaction",headers:{"Content-Type":"application/json"},body:{amount:n,eip155:{slippage:ut.CONVERT_SLIPPAGE_TOLERANCE},from:e,projectId:t,to:i,userAddress:o}})},generateApproveCalldata({from:n,projectId:e,to:t,userAddress:i}){const{sdkType:o,sdkVersion:r}=fe.state;return ln.get({path:`/v1/convert/build-approve?projectId=${e}&userAddress=${i}&from=${n}&to=${t}`,headers:{"Content-Type":"application/json","x-sdk-type":o,"x-sdk-version":r}})},async getBalance(n,e){const{sdkType:t,sdkVersion:i}=fe.state;return ln.get({path:`/v1/account/${n}/balance`,headers:{"x-sdk-type":t,"x-sdk-version":i},params:{currency:"usd",projectId:fe.state.projectId,chainId:e}})},async generateOnRampURL({destinationWallets:n,partnerUserId:e,defaultNetwork:t,purchaseAmount:i,paymentAmount:o}){return(await ln.post({path:`/v1/generators/onrampurl?projectId=${fe.state.projectId}`,body:{destinationWallets:n,defaultNetwork:t,partnerUserId:e,defaultExperience:"buy",presetCryptoAmount:i,presetFiatAmount:o}})).url},async getOnrampOptions(){try{return await ln.get({path:`/v1/onramp/options?projectId=${fe.state.projectId}`})}catch{return e3}},async getOnrampQuote({purchaseCurrency:n,paymentCurrency:e,amount:t,network:i}){try{return await ln.post({path:`/v1/onramp/quote?projectId=${fe.state.projectId}`,body:{purchaseCurrency:n,paymentCurrency:e,amount:t,network:i}})}catch{return{coinbaseFee:{amount:t,currency:e.id},networkFee:{amount:t,currency:e.id},paymentSubtotal:{amount:t,currency:e.id},paymentTotal:{amount:t,currency:e.id},purchaseAmount:{amount:t,currency:e.id},quoteId:"mocked-quote-id"}}}},si=At({message:"",variant:"success",open:!1}),De={state:si,subscribeKey(n,e){return on(si,n,e)},showSuccess(n){si.message=n,si.variant="success",si.open=!0},showError(n){const e=oe.parseError(n);si.message=e,si.variant="error",si.open=!0},hide(){si.open=!1}},ql="WALLETCONNECT_DEEPLINK_CHOICE",eh="@w3m/recent",th="@w3m/connected_wallet_image_url",nh="@w3m/connected_connector",dt={setWalletConnectDeepLink({href:n,name:e}){try{localStorage.setItem(ql,JSON.stringify({href:n,name:e}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const n=localStorage.getItem(ql);if(n)return JSON.parse(n)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(ql)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(n){try{const e=dt.getRecentWallets();e.find(i=>i.id===n.id)||(e.unshift(n),e.length>2&&e.pop(),localStorage.setItem(eh,JSON.stringify(e)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{const n=localStorage.getItem(eh);return n?JSON.parse(n):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(n){try{localStorage.setItem(th,n)}catch{console.info("Unable to set Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(th)}catch{console.info("Unable to set Connected Wallet Image Url")}},setConnectedConnector(n){try{localStorage.setItem(nh,n)}catch{console.info("Unable to set Connected Connector")}},getConnectedConnector(){try{return localStorage.getItem(nh)}catch{console.info("Unable to get Connected Connector")}}},n3=oe.getAnalyticsUrl(),i3=new Od({baseUrl:n3}),r3=["MODAL_CREATED"],ao=At({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),me={state:ao,subscribe(n){return Xt(ao,()=>n(ao))},_getApiHeaders(){const{projectId:n,sdkType:e,sdkVersion:t}=fe.state;return{"x-project-id":n,"x-sdk-type":e,"x-sdk-version":t}},async _sendAnalyticsEvent(n){try{if(r3.includes(n.data.event)||typeof window>"u")return;await i3.post({path:"/e",headers:me._getApiHeaders(),body:{eventId:oe.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:n.timestamp,props:n.data}})}catch{}},sendEvent(n){ao.timestamp=Date.now(),ao.data=n,fe.state.enableAnalytics&&me._sendAnalyticsEvent(ao)}},Xe=At({transactions:[],coinbaseTransactions:{},transactionsByYear:{},loading:!1,empty:!1,next:void 0}),kt={state:Xe,subscribe(n){return Xt(Xe,()=>n(Xe))},async fetchTransactions(n,e){const{projectId:t}=fe.state;if(!t||!n)throw new Error("Transactions can't be fetched without a projectId and an accountAddress");Xe.loading=!0;try{const i=await Bt.fetchTransactions({account:n,projectId:t,cursor:Xe.next,onramp:e}),o=this.filterSpamTransactions(i.data),r=[...Xe.transactions,...o];Xe.loading=!1,e==="coinbase"?Xe.coinbaseTransactions=this.groupTransactionsByYearAndMonth(Xe.coinbaseTransactions,i.data):(Xe.transactions=r,Xe.transactionsByYear=this.groupTransactionsByYearAndMonth(Xe.transactionsByYear,o)),Xe.empty=r.length===0,Xe.next=i.next?i.next:void 0}catch{me.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:n,projectId:t,cursor:Xe.next}}),De.showError("Failed to fetch transactions"),Xe.loading=!1,Xe.empty=!0,Xe.next=void 0}},groupTransactionsByYearAndMonth(n={},e=[]){const t=n;return e.forEach(i=>{const o=new Date(i.metadata.minedAt).getFullYear(),r=new Date(i.metadata.minedAt).getMonth(),s=t[o]??{},c=(s[r]??[]).filter(l=>l.id!==i.id);t[o]={...s,[r]:[...c,i].sort((l,d)=>new Date(d.metadata.minedAt).getTime()-new Date(l.metadata.minedAt).getTime())}}),t},filterSpamTransactions(n){return n.filter(e=>!e.transfers.every(i=>{var o;return((o=i.nft_info)==null?void 0:o.flags.is_spam)===!0}))},clearCursor(){Xe.next=void 0},resetTransactions(){Xe.transactions=[],Xe.transactionsByYear={},Xe.loading=!1,Xe.empty=!1,Xe.next=void 0}},ft=At({wcError:!1,buffering:!1}),$e={state:ft,subscribeKey(n,e){return on(ft,n,e)},_getClient(){if(!ft._client)throw new Error("ConnectionController client not set");return ft._client},setClient(n){ft._client=_o(n)},connectWalletConnect(){ft.wcPromise=this._getClient().connectWalletConnect(n=>{ft.wcUri=n,ft.wcPairingExpiry=oe.getPairingExpiry()}),dt.setConnectedConnector("WALLET_CONNECT")},async connectExternal(n){var e,t;await((t=(e=this._getClient()).connectExternal)==null?void 0:t.call(e,n)),dt.setConnectedConnector(n.type)},async signMessage(n){return this._getClient().signMessage(n)},parseUnits(n,e){return this._getClient().parseUnits(n,e)},formatUnits(n,e){return this._getClient().formatUnits(n,e)},async sendTransaction(n){return this._getClient().sendTransaction(n)},async estimateGas(n){return this._getClient().estimateGas(n)},checkInstalled(n){var e,t;return(t=(e=this._getClient()).checkInstalled)==null?void 0:t.call(e,n)},resetWcConnection(){ft.wcUri=void 0,ft.wcPairingExpiry=void 0,ft.wcPromise=void 0,ft.wcLinking=void 0,ft.recentWallet=void 0,kt.resetTransactions(),dt.deleteWalletConnectDeepLink()},setWcLinking(n){ft.wcLinking=n},setWcError(n){ft.wcError=n,ft.buffering=!1},setRecentWallet(n){ft.recentWallet=n},setBuffering(n){ft.buffering=n},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},ls=At({loading:!1,open:!1,selectedNetworkId:void 0}),vr={state:ls,subscribe(n){return Xt(ls,()=>n(ls))},set(n){Object.assign(ls,{...ls,...n})}};var df={exports:{}};(function(n,e){(function(t,i){n.exports=i()})(ad,function(){var t=1e3,i=6e4,o=36e5,r="millisecond",s="second",a="minute",c="hour",l="day",d="week",p="month",f="quarter",v="year",T="date",S="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,B=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,_={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(M){var E=["th","st","nd","rd"],A=M%100;return"["+M+(E[(A-20)%10]||E[A]||E[0])+"]"}},U=function(M,E,A){var O=String(M);return!O||O.length>=E?M:""+Array(E+1-O.length).join(A)+M},D={s:U,z:function(M){var E=-M.utcOffset(),A=Math.abs(E),O=Math.floor(A/60),I=A%60;return(E<=0?"+":"-")+U(O,2,"0")+":"+U(I,2,"0")},m:function M(E,A){if(E.date()<A.date())return-M(A,E);var O=12*(A.year()-E.year())+(A.month()-E.month()),I=E.clone().add(O,p),z=A-I<0,Y=E.clone().add(O+(z?-1:1),p);return+(-(O+(A-I)/(z?I-Y:Y-I))||0)},a:function(M){return M<0?Math.ceil(M)||0:Math.floor(M)},p:function(M){return{M:p,y:v,w:d,d:l,D:T,h:c,m:a,s,ms:r,Q:f}[M]||String(M||"").toLowerCase().replace(/s$/,"")},u:function(M){return M===void 0}},W="en",Z={};Z[W]=_;var Q="$isDayjsObject",g=function(M){return M instanceof P||!(!M||!M[Q])},m=function M(E,A,O){var I;if(!E)return W;if(typeof E=="string"){var z=E.toLowerCase();Z[z]&&(I=z),A&&(Z[z]=A,I=z);var Y=E.split("-");if(!I&&Y.length>1)return M(Y[0])}else{var K=E.name;Z[K]=E,I=K}return!O&&I&&(W=I),I||!O&&W},b=function(M,E){if(g(M))return M.clone();var A=typeof E=="object"?E:{};return A.date=M,A.args=arguments,new P(A)},R=D;R.l=m,R.i=g,R.w=function(M,E){return b(M,{locale:E.$L,utc:E.$u,x:E.$x,$offset:E.$offset})};var P=function(){function M(A){this.$L=m(A.locale,null,!0),this.parse(A),this.$x=this.$x||A.x||{},this[Q]=!0}var E=M.prototype;return E.parse=function(A){this.$d=function(O){var I=O.date,z=O.utc;if(I===null)return new Date(NaN);if(R.u(I))return new Date;if(I instanceof Date)return new Date(I);if(typeof I=="string"&&!/Z$/i.test(I)){var Y=I.match($);if(Y){var K=Y[2]-1||0,ae=(Y[7]||"0").substring(0,3);return z?new Date(Date.UTC(Y[1],K,Y[3]||1,Y[4]||0,Y[5]||0,Y[6]||0,ae)):new Date(Y[1],K,Y[3]||1,Y[4]||0,Y[5]||0,Y[6]||0,ae)}}return new Date(I)}(A),this.init()},E.init=function(){var A=this.$d;this.$y=A.getFullYear(),this.$M=A.getMonth(),this.$D=A.getDate(),this.$W=A.getDay(),this.$H=A.getHours(),this.$m=A.getMinutes(),this.$s=A.getSeconds(),this.$ms=A.getMilliseconds()},E.$utils=function(){return R},E.isValid=function(){return this.$d.toString()!==S},E.isSame=function(A,O){var I=b(A);return this.startOf(O)<=I&&I<=this.endOf(O)},E.isAfter=function(A,O){return b(A)<this.startOf(O)},E.isBefore=function(A,O){return this.endOf(O)<b(A)},E.$g=function(A,O,I){return R.u(A)?this[O]:this.set(I,A)},E.unix=function(){return Math.floor(this.valueOf()/1e3)},E.valueOf=function(){return this.$d.getTime()},E.startOf=function(A,O){var I=this,z=!!R.u(O)||O,Y=R.p(A),K=function(Ot,rt){var ot=R.w(I.$u?Date.UTC(I.$y,rt,Ot):new Date(I.$y,rt,Ot),I);return z?ot:ot.endOf(l)},ae=function(Ot,rt){return R.w(I.toDate()[Ot].apply(I.toDate("s"),(z?[0,0,0,0]:[23,59,59,999]).slice(rt)),I)},Ae=this.$W,Ne=this.$M,xe=this.$D,Me="set"+(this.$u?"UTC":"");switch(Y){case v:return z?K(1,0):K(31,11);case p:return z?K(1,Ne):K(0,Ne+1);case d:var Ze=this.$locale().weekStart||0,yt=(Ae<Ze?Ae+7:Ae)-Ze;return K(z?xe-yt:xe+(6-yt),Ne);case l:case T:return ae(Me+"Hours",0);case c:return ae(Me+"Minutes",1);case a:return ae(Me+"Seconds",2);case s:return ae(Me+"Milliseconds",3);default:return this.clone()}},E.endOf=function(A){return this.startOf(A,!1)},E.$set=function(A,O){var I,z=R.p(A),Y="set"+(this.$u?"UTC":""),K=(I={},I[l]=Y+"Date",I[T]=Y+"Date",I[p]=Y+"Month",I[v]=Y+"FullYear",I[c]=Y+"Hours",I[a]=Y+"Minutes",I[s]=Y+"Seconds",I[r]=Y+"Milliseconds",I)[z],ae=z===l?this.$D+(O-this.$W):O;if(z===p||z===v){var Ae=this.clone().set(T,1);Ae.$d[K](ae),Ae.init(),this.$d=Ae.set(T,Math.min(this.$D,Ae.daysInMonth())).$d}else K&&this.$d[K](ae);return this.init(),this},E.set=function(A,O){return this.clone().$set(A,O)},E.get=function(A){return this[R.p(A)]()},E.add=function(A,O){var I,z=this;A=Number(A);var Y=R.p(O),K=function(Ne){var xe=b(z);return R.w(xe.date(xe.date()+Math.round(Ne*A)),z)};if(Y===p)return this.set(p,this.$M+A);if(Y===v)return this.set(v,this.$y+A);if(Y===l)return K(1);if(Y===d)return K(7);var ae=(I={},I[a]=i,I[c]=o,I[s]=t,I)[Y]||1,Ae=this.$d.getTime()+A*ae;return R.w(Ae,this)},E.subtract=function(A,O){return this.add(-1*A,O)},E.format=function(A){var O=this,I=this.$locale();if(!this.isValid())return I.invalidDate||S;var z=A||"YYYY-MM-DDTHH:mm:ssZ",Y=R.z(this),K=this.$H,ae=this.$m,Ae=this.$M,Ne=I.weekdays,xe=I.months,Me=I.meridiem,Ze=function(rt,ot,jt,Ye){return rt&&(rt[ot]||rt(O,z))||jt[ot].slice(0,Ye)},yt=function(rt){return R.s(K%12||12,rt,"0")},Ot=Me||function(rt,ot,jt){var Ye=rt<12?"AM":"PM";return jt?Ye.toLowerCase():Ye};return z.replace(B,function(rt,ot){return ot||function(jt){switch(jt){case"YY":return String(O.$y).slice(-2);case"YYYY":return R.s(O.$y,4,"0");case"M":return Ae+1;case"MM":return R.s(Ae+1,2,"0");case"MMM":return Ze(I.monthsShort,Ae,xe,3);case"MMMM":return Ze(xe,Ae);case"D":return O.$D;case"DD":return R.s(O.$D,2,"0");case"d":return String(O.$W);case"dd":return Ze(I.weekdaysMin,O.$W,Ne,2);case"ddd":return Ze(I.weekdaysShort,O.$W,Ne,3);case"dddd":return Ne[O.$W];case"H":return String(K);case"HH":return R.s(K,2,"0");case"h":return yt(1);case"hh":return yt(2);case"a":return Ot(K,ae,!0);case"A":return Ot(K,ae,!1);case"m":return String(ae);case"mm":return R.s(ae,2,"0");case"s":return String(O.$s);case"ss":return R.s(O.$s,2,"0");case"SSS":return R.s(O.$ms,3,"0");case"Z":return Y}return null}(rt)||Y.replace(":","")})},E.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},E.diff=function(A,O,I){var z,Y=this,K=R.p(O),ae=b(A),Ae=(ae.utcOffset()-this.utcOffset())*i,Ne=this-ae,xe=function(){return R.m(Y,ae)};switch(K){case v:z=xe()/12;break;case p:z=xe();break;case f:z=xe()/3;break;case d:z=(Ne-Ae)/6048e5;break;case l:z=(Ne-Ae)/864e5;break;case c:z=Ne/o;break;case a:z=Ne/i;break;case s:z=Ne/t;break;default:z=Ne}return I?z:R.a(z)},E.daysInMonth=function(){return this.endOf(p).$D},E.$locale=function(){return Z[this.$L]},E.locale=function(A,O){if(!A)return this.$L;var I=this.clone(),z=m(A,O,!0);return z&&(I.$L=z),I},E.clone=function(){return R.w(this.$d,this)},E.toDate=function(){return new Date(this.valueOf())},E.toJSON=function(){return this.isValid()?this.toISOString():null},E.toISOString=function(){return this.$d.toISOString()},E.toString=function(){return this.$d.toUTCString()},M}(),N=P.prototype;return b.prototype=N,[["$ms",r],["$s",s],["$m",a],["$H",c],["$W",l],["$M",p],["$y",v],["$D",T]].forEach(function(M){N[M[1]]=function(E){return this.$g(E,M[0],M[1])}}),b.extend=function(M,E){return M.$i||(M(E,P,b),M.$i=!0),b},b.locale=m,b.isDayjs=g,b.unix=function(M){return b(1e3*M)},b.en=Z[W],b.Ls=Z,b.p={},b})})(df);var o3=df.exports;const go=Kc(o3);var hf={exports:{}};(function(n,e){(function(t,i){n.exports=i()})(ad,function(){return function(t,i,o){o.updateLocale=function(r,s){var a=o.Ls[r];if(a)return(s?Object.keys(s):[]).forEach(function(c){a[c]=s[c]}),a}}})})(hf);var s3=hf.exports;const a3=Kc(s3);var pf={exports:{}};(function(n,e){(function(t,i){n.exports=i()})(ad,function(){return function(t,i,o){t=t||{};var r=i.prototype,s={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(l,d,p,f){return r.fromToBase(l,d,p,f)}o.en.relativeTime=s,r.fromToBase=function(l,d,p,f,v){for(var T,S,$,B=p.$locale().relativeTime||s,_=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],U=_.length,D=0;D<U;D+=1){var W=_[D];W.d&&(T=f?o(l).diff(p,W.d,!0):p.diff(l,W.d,!0));var Z=(t.rounding||Math.round)(Math.abs(T));if($=T>0,Z<=W.r||!W.r){Z<=1&&D>0&&(W=_[D-1]);var Q=B[W.l];v&&(Z=v(""+Z)),S=typeof Q=="string"?Q.replace("%d",Z):Q(Z,d,W.l,$);break}}if(d)return S;var g=$?B.future:B.past;return typeof g=="function"?g(S):g.replace("%s",S)},r.to=function(l,d){return a(l,d,this,!0)},r.from=function(l,d){return a(l,d,this)};var c=function(l){return l.$u?o.utc():o()};r.toNow=function(l){return this.to(c(this),l)},r.fromNow=function(l){return this.from(c(this),l)}}})})(pf);var c3=pf.exports;const l3=Kc(c3);go.extend(l3);go.extend(a3);go.updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"%s sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}});const Nd={getYear(n=new Date().toISOString()){return go(n).year()},getRelativeDateFromNow(n){return go(n).fromNow(!0)},formatDate(n,e="DD MMM"){return go(n).format(e)}},gr={caipNetworkIdToNumber(n){return n?Number(n.split(":")[1]):void 0}};var u3=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,Yl=Math.ceil,dn=Math.floor,Ft="[BigNumber Error] ",ih=Ft+"Number primitive has more than 15 significant digits: ",yn=1e14,Se=14,Kl=9007199254740991,Jl=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],Si=1e7,gt=1e9;function ff(n){var e,t,i,o=_.prototype={constructor:_,toString:null,valueOf:null},r=new _(1),s=20,a=4,c=-7,l=21,d=-1e7,p=1e7,f=!1,v=1,T=0,S={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:" ",suffix:""},$="0123456789abcdefghijklmnopqrstuvwxyz",B=!0;function _(g,m){var b,R,P,N,M,E,A,O,I=this;if(!(I instanceof _))return new _(g,m);if(m==null){if(g&&g._isBigNumber===!0){I.s=g.s,!g.c||g.e>p?I.c=I.e=null:g.e<d?I.c=[I.e=0]:(I.e=g.e,I.c=g.c.slice());return}if((E=typeof g=="number")&&g*0==0){if(I.s=1/g<0?(g=-g,-1):1,g===~~g){for(N=0,M=g;M>=10;M/=10,N++);N>p?I.c=I.e=null:(I.e=N,I.c=[g]);return}O=String(g)}else{if(!u3.test(O=String(g)))return i(I,O,E);I.s=O.charCodeAt(0)==45?(O=O.slice(1),-1):1}(N=O.indexOf("."))>-1&&(O=O.replace(".","")),(M=O.search(/e/i))>0?(N<0&&(N=M),N+=+O.slice(M+1),O=O.substring(0,M)):N<0&&(N=O.length)}else{if(Qe(m,2,$.length,"Base"),m==10&&B)return I=new _(g),Z(I,s+I.e+1,a);if(O=String(g),E=typeof g=="number"){if(g*0!=0)return i(I,O,E,m);if(I.s=1/g<0?(O=O.slice(1),-1):1,_.DEBUG&&O.replace(/^0\.0*|\./,"").length>15)throw Error(ih+g)}else I.s=O.charCodeAt(0)===45?(O=O.slice(1),-1):1;for(b=$.slice(0,m),N=M=0,A=O.length;M<A;M++)if(b.indexOf(R=O.charAt(M))<0){if(R=="."){if(M>N){N=A;continue}}else if(!P&&(O==O.toUpperCase()&&(O=O.toLowerCase())||O==O.toLowerCase()&&(O=O.toUpperCase()))){P=!0,M=-1,N=0;continue}return i(I,String(g),E,m)}E=!1,O=t(O,m,10,I.s),(N=O.indexOf("."))>-1?O=O.replace(".",""):N=O.length}for(M=0;O.charCodeAt(M)===48;M++);for(A=O.length;O.charCodeAt(--A)===48;);if(O=O.slice(M,++A)){if(A-=M,E&&_.DEBUG&&A>15&&(g>Kl||g!==dn(g)))throw Error(ih+I.s*g);if((N=N-M-1)>p)I.c=I.e=null;else if(N<d)I.c=[I.e=0];else{if(I.e=N,I.c=[],M=(N+1)%Se,N<0&&(M+=Se),M<A){for(M&&I.c.push(+O.slice(0,M)),A-=Se;M<A;)I.c.push(+O.slice(M,M+=Se));M=Se-(O=O.slice(M)).length}else M-=A;for(;M--;O+="0");I.c.push(+O)}}else I.c=[I.e=0]}_.clone=ff,_.ROUND_UP=0,_.ROUND_DOWN=1,_.ROUND_CEIL=2,_.ROUND_FLOOR=3,_.ROUND_HALF_UP=4,_.ROUND_HALF_DOWN=5,_.ROUND_HALF_EVEN=6,_.ROUND_HALF_CEIL=7,_.ROUND_HALF_FLOOR=8,_.EUCLID=9,_.config=_.set=function(g){var m,b;if(g!=null)if(typeof g=="object"){if(g.hasOwnProperty(m="DECIMAL_PLACES")&&(b=g[m],Qe(b,0,gt,m),s=b),g.hasOwnProperty(m="ROUNDING_MODE")&&(b=g[m],Qe(b,0,8,m),a=b),g.hasOwnProperty(m="EXPONENTIAL_AT")&&(b=g[m],b&&b.pop?(Qe(b[0],-gt,0,m),Qe(b[1],0,gt,m),c=b[0],l=b[1]):(Qe(b,-gt,gt,m),c=-(l=b<0?-b:b))),g.hasOwnProperty(m="RANGE"))if(b=g[m],b&&b.pop)Qe(b[0],-gt,-1,m),Qe(b[1],1,gt,m),d=b[0],p=b[1];else if(Qe(b,-gt,gt,m),b)d=-(p=b<0?-b:b);else throw Error(Ft+m+" cannot be zero: "+b);if(g.hasOwnProperty(m="CRYPTO"))if(b=g[m],b===!!b)if(b)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))f=b;else throw f=!b,Error(Ft+"crypto unavailable");else f=b;else throw Error(Ft+m+" not true or false: "+b);if(g.hasOwnProperty(m="MODULO_MODE")&&(b=g[m],Qe(b,0,9,m),v=b),g.hasOwnProperty(m="POW_PRECISION")&&(b=g[m],Qe(b,0,gt,m),T=b),g.hasOwnProperty(m="FORMAT"))if(b=g[m],typeof b=="object")S=b;else throw Error(Ft+m+" not an object: "+b);if(g.hasOwnProperty(m="ALPHABET"))if(b=g[m],typeof b=="string"&&!/^.?$|[+\-.\s]|(.).*\1/.test(b))B=b.slice(0,10)=="0123456789",$=b;else throw Error(Ft+m+" invalid: "+b)}else throw Error(Ft+"Object expected: "+g);return{DECIMAL_PLACES:s,ROUNDING_MODE:a,EXPONENTIAL_AT:[c,l],RANGE:[d,p],CRYPTO:f,MODULO_MODE:v,POW_PRECISION:T,FORMAT:S,ALPHABET:$}},_.isBigNumber=function(g){if(!g||g._isBigNumber!==!0)return!1;if(!_.DEBUG)return!0;var m,b,R=g.c,P=g.e,N=g.s;e:if({}.toString.call(R)=="[object Array]"){if((N===1||N===-1)&&P>=-gt&&P<=gt&&P===dn(P)){if(R[0]===0){if(P===0&&R.length===1)return!0;break e}if(m=(P+1)%Se,m<1&&(m+=Se),String(R[0]).length==m){for(m=0;m<R.length;m++)if(b=R[m],b<0||b>=yn||b!==dn(b))break e;if(b!==0)return!0}}}else if(R===null&&P===null&&(N===null||N===1||N===-1))return!0;throw Error(Ft+"Invalid BigNumber: "+g)},_.maximum=_.max=function(){return D(arguments,-1)},_.minimum=_.min=function(){return D(arguments,1)},_.random=function(){var g=9007199254740992,m=Math.random()*g&2097151?function(){return dn(Math.random()*g)}:function(){return(Math.random()*1073741824|0)*8388608+(Math.random()*8388608|0)};return function(b){var R,P,N,M,E,A=0,O=[],I=new _(r);if(b==null?b=s:Qe(b,0,gt),M=Yl(b/Se),f)if(crypto.getRandomValues){for(R=crypto.getRandomValues(new Uint32Array(M*=2));A<M;)E=R[A]*131072+(R[A+1]>>>11),E>=9e15?(P=crypto.getRandomValues(new Uint32Array(2)),R[A]=P[0],R[A+1]=P[1]):(O.push(E%1e14),A+=2);A=M/2}else if(crypto.randomBytes){for(R=crypto.randomBytes(M*=7);A<M;)E=(R[A]&31)*281474976710656+R[A+1]*1099511627776+R[A+2]*4294967296+R[A+3]*16777216+(R[A+4]<<16)+(R[A+5]<<8)+R[A+6],E>=9e15?crypto.randomBytes(7).copy(R,A):(O.push(E%1e14),A+=7);A=M/7}else throw f=!1,Error(Ft+"crypto unavailable");if(!f)for(;A<M;)E=m(),E<9e15&&(O[A++]=E%1e14);for(M=O[--A],b%=Se,M&&b&&(E=Jl[Se-b],O[A]=dn(M/E)*E);O[A]===0;O.pop(),A--);if(A<0)O=[N=0];else{for(N=-1;O[0]===0;O.splice(0,1),N-=Se);for(A=1,E=O[0];E>=10;E/=10,A++);A<Se&&(N-=Se-A)}return I.e=N,I.c=O,I}}(),_.sum=function(){for(var g=1,m=arguments,b=new _(m[0]);g<m.length;)b=b.plus(m[g++]);return b},t=function(){var g="0123456789";function m(b,R,P,N){for(var M,E=[0],A,O=0,I=b.length;O<I;){for(A=E.length;A--;E[A]*=R);for(E[0]+=N.indexOf(b.charAt(O++)),M=0;M<E.length;M++)E[M]>P-1&&(E[M+1]==null&&(E[M+1]=0),E[M+1]+=E[M]/P|0,E[M]%=P)}return E.reverse()}return function(b,R,P,N,M){var E,A,O,I,z,Y,K,ae,Ae=b.indexOf("."),Ne=s,xe=a;for(Ae>=0&&(I=T,T=0,b=b.replace(".",""),ae=new _(R),Y=ae.pow(b.length-Ae),T=I,ae.c=m(ai(un(Y.c),Y.e,"0"),10,P,g),ae.e=ae.c.length),K=m(b,R,P,M?(E=$,g):(E=g,$)),O=I=K.length;K[--I]==0;K.pop());if(!K[0])return E.charAt(0);if(Ae<0?--O:(Y.c=K,Y.e=O,Y.s=N,Y=e(Y,ae,Ne,xe,P),K=Y.c,z=Y.r,O=Y.e),A=O+Ne+1,Ae=K[A],I=P/2,z=z||A<0||K[A+1]!=null,z=xe<4?(Ae!=null||z)&&(xe==0||xe==(Y.s<0?3:2)):Ae>I||Ae==I&&(xe==4||z||xe==6&&K[A-1]&1||xe==(Y.s<0?8:7)),A<1||!K[0])b=z?ai(E.charAt(1),-Ne,E.charAt(0)):E.charAt(0);else{if(K.length=A,z)for(--P;++K[--A]>P;)K[A]=0,A||(++O,K=[1].concat(K));for(I=K.length;!K[--I];);for(Ae=0,b="";Ae<=I;b+=E.charAt(K[Ae++]));b=ai(b,O,E.charAt(0))}return b}}(),e=function(){function g(R,P,N){var M,E,A,O,I=0,z=R.length,Y=P%Si,K=P/Si|0;for(R=R.slice();z--;)A=R[z]%Si,O=R[z]/Si|0,M=K*A+O*Y,E=Y*A+M%Si*Si+I,I=(E/N|0)+(M/Si|0)+K*O,R[z]=E%N;return I&&(R=[I].concat(R)),R}function m(R,P,N,M){var E,A;if(N!=M)A=N>M?1:-1;else for(E=A=0;E<N;E++)if(R[E]!=P[E]){A=R[E]>P[E]?1:-1;break}return A}function b(R,P,N,M){for(var E=0;N--;)R[N]-=E,E=R[N]<P[N]?1:0,R[N]=E*M+R[N]-P[N];for(;!R[0]&&R.length>1;R.splice(0,1));}return function(R,P,N,M,E){var A,O,I,z,Y,K,ae,Ae,Ne,xe,Me,Ze,yt,Ot,rt,ot,jt,Ye=R.s==P.s?1:-1,st=R.c,Ke=P.c;if(!st||!st[0]||!Ke||!Ke[0])return new _(!R.s||!P.s||(st?Ke&&st[0]==Ke[0]:!Ke)?NaN:st&&st[0]==0||!Ke?Ye*0:Ye/0);for(Ae=new _(Ye),Ne=Ae.c=[],O=R.e-P.e,Ye=N+O+1,E||(E=yn,O=hn(R.e/Se)-hn(P.e/Se),Ye=Ye/Se|0),I=0;Ke[I]==(st[I]||0);I++);if(Ke[I]>(st[I]||0)&&O--,Ye<0)Ne.push(1),z=!0;else{for(Ot=st.length,ot=Ke.length,I=0,Ye+=2,Y=dn(E/(Ke[0]+1)),Y>1&&(Ke=g(Ke,Y,E),st=g(st,Y,E),ot=Ke.length,Ot=st.length),yt=ot,xe=st.slice(0,ot),Me=xe.length;Me<ot;xe[Me++]=0);jt=Ke.slice(),jt=[0].concat(jt),rt=Ke[0],Ke[1]>=E/2&&rt++;do{if(Y=0,A=m(Ke,xe,ot,Me),A<0){if(Ze=xe[0],ot!=Me&&(Ze=Ze*E+(xe[1]||0)),Y=dn(Ze/rt),Y>1)for(Y>=E&&(Y=E-1),K=g(Ke,Y,E),ae=K.length,Me=xe.length;m(K,xe,ae,Me)==1;)Y--,b(K,ot<ae?jt:Ke,ae,E),ae=K.length,A=1;else Y==0&&(A=Y=1),K=Ke.slice(),ae=K.length;if(ae<Me&&(K=[0].concat(K)),b(xe,K,Me,E),Me=xe.length,A==-1)for(;m(Ke,xe,ot,Me)<1;)Y++,b(xe,ot<Me?jt:Ke,Me,E),Me=xe.length}else A===0&&(Y++,xe=[0]);Ne[I++]=Y,xe[0]?xe[Me++]=st[yt]||0:(xe=[st[yt]],Me=1)}while((yt++<Ot||xe[0]!=null)&&Ye--);z=xe[0]!=null,Ne[0]||Ne.splice(0,1)}if(E==yn){for(I=1,Ye=Ne[0];Ye>=10;Ye/=10,I++);Z(Ae,N+(Ae.e=I+O*Se-1)+1,M,z)}else Ae.e=O,Ae.r=+z;return Ae}}();function U(g,m,b,R){var P,N,M,E,A;if(b==null?b=a:Qe(b,0,8),!g.c)return g.toString();if(P=g.c[0],M=g.e,m==null)A=un(g.c),A=R==1||R==2&&(M<=c||M>=l)?Ya(A,M):ai(A,M,"0");else if(g=Z(new _(g),m,b),N=g.e,A=un(g.c),E=A.length,R==1||R==2&&(m<=N||N<=c)){for(;E<m;A+="0",E++);A=Ya(A,N)}else if(m-=M,A=ai(A,N,"0"),N+1>E){if(--m>0)for(A+=".";m--;A+="0");}else if(m+=N-E,m>0)for(N+1==E&&(A+=".");m--;A+="0");return g.s<0&&P?"-"+A:A}function D(g,m){for(var b,R,P=1,N=new _(g[0]);P<g.length;P++)R=new _(g[P]),(!R.s||(b=cr(N,R))===m||b===0&&N.s===m)&&(N=R);return N}function W(g,m,b){for(var R=1,P=m.length;!m[--P];m.pop());for(P=m[0];P>=10;P/=10,R++);return(b=R+b*Se-1)>p?g.c=g.e=null:b<d?g.c=[g.e=0]:(g.e=b,g.c=m),g}i=function(){var g=/^(-?)0([xbo])(?=\w[\w.]*$)/i,m=/^([^.]+)\.$/,b=/^\.([^.]+)$/,R=/^-?(Infinity|NaN)$/,P=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(N,M,E,A){var O,I=E?M:M.replace(P,"");if(R.test(I))N.s=isNaN(I)?null:I<0?-1:1;else{if(!E&&(I=I.replace(g,function(z,Y,K){return O=(K=K.toLowerCase())=="x"?16:K=="b"?2:8,!A||A==O?Y:z}),A&&(O=A,I=I.replace(m,"$1").replace(b,"0.$1")),M!=I))return new _(I,O);if(_.DEBUG)throw Error(Ft+"Not a"+(A?" base "+A:"")+" number: "+M);N.s=null}N.c=N.e=null}}();function Z(g,m,b,R){var P,N,M,E,A,O,I,z=g.c,Y=Jl;if(z){e:{for(P=1,E=z[0];E>=10;E/=10,P++);if(N=m-P,N<0)N+=Se,M=m,A=z[O=0],I=dn(A/Y[P-M-1]%10);else if(O=Yl((N+1)/Se),O>=z.length)if(R){for(;z.length<=O;z.push(0));A=I=0,P=1,N%=Se,M=N-Se+1}else break e;else{for(A=E=z[O],P=1;E>=10;E/=10,P++);N%=Se,M=N-Se+P,I=M<0?0:dn(A/Y[P-M-1]%10)}if(R=R||m<0||z[O+1]!=null||(M<0?A:A%Y[P-M-1]),R=b<4?(I||R)&&(b==0||b==(g.s<0?3:2)):I>5||I==5&&(b==4||R||b==6&&(N>0?M>0?A/Y[P-M]:0:z[O-1])%10&1||b==(g.s<0?8:7)),m<1||!z[0])return z.length=0,R?(m-=g.e+1,z[0]=Y[(Se-m%Se)%Se],g.e=-m||0):z[0]=g.e=0,g;if(N==0?(z.length=O,E=1,O--):(z.length=O+1,E=Y[Se-N],z[O]=M>0?dn(A/Y[P-M]%Y[M])*E:0),R)for(;;)if(O==0){for(N=1,M=z[0];M>=10;M/=10,N++);for(M=z[0]+=E,E=1;M>=10;M/=10,E++);N!=E&&(g.e++,z[0]==yn&&(z[0]=1));break}else{if(z[O]+=E,z[O]!=yn)break;z[O--]=0,E=1}for(N=z.length;z[--N]===0;z.pop());}g.e>p?g.c=g.e=null:g.e<d&&(g.c=[g.e=0])}return g}function Q(g){var m,b=g.e;return b===null?g.toString():(m=un(g.c),m=b<=c||b>=l?Ya(m,b):ai(m,b,"0"),g.s<0?"-"+m:m)}return o.absoluteValue=o.abs=function(){var g=new _(this);return g.s<0&&(g.s=1),g},o.comparedTo=function(g,m){return cr(this,new _(g,m))},o.decimalPlaces=o.dp=function(g,m){var b,R,P,N=this;if(g!=null)return Qe(g,0,gt),m==null?m=a:Qe(m,0,8),Z(new _(N),g+N.e+1,m);if(!(b=N.c))return null;if(R=((P=b.length-1)-hn(this.e/Se))*Se,P=b[P])for(;P%10==0;P/=10,R--);return R<0&&(R=0),R},o.dividedBy=o.div=function(g,m){return e(this,new _(g,m),s,a)},o.dividedToIntegerBy=o.idiv=function(g,m){return e(this,new _(g,m),0,1)},o.exponentiatedBy=o.pow=function(g,m){var b,R,P,N,M,E,A,O,I,z=this;if(g=new _(g),g.c&&!g.isInteger())throw Error(Ft+"Exponent not an integer: "+Q(g));if(m!=null&&(m=new _(m)),E=g.e>14,!z.c||!z.c[0]||z.c[0]==1&&!z.e&&z.c.length==1||!g.c||!g.c[0])return I=new _(Math.pow(+Q(z),E?g.s*(2-qa(g)):+Q(g))),m?I.mod(m):I;if(A=g.s<0,m){if(m.c?!m.c[0]:!m.s)return new _(NaN);R=!A&&z.isInteger()&&m.isInteger(),R&&(z=z.mod(m))}else{if(g.e>9&&(z.e>0||z.e<-1||(z.e==0?z.c[0]>1||E&&z.c[1]>=24e7:z.c[0]<8e13||E&&z.c[0]<=9999975e7)))return N=z.s<0&&qa(g)?-0:0,z.e>-1&&(N=1/N),new _(A?1/N:N);T&&(N=Yl(T/Se+2))}for(E?(b=new _(.5),A&&(g.s=1),O=qa(g)):(P=Math.abs(+Q(g)),O=P%2),I=new _(r);;){if(O){if(I=I.times(z),!I.c)break;N?I.c.length>N&&(I.c.length=N):R&&(I=I.mod(m))}if(P){if(P=dn(P/2),P===0)break;O=P%2}else if(g=g.times(b),Z(g,g.e+1,1),g.e>14)O=qa(g);else{if(P=+Q(g),P===0)break;O=P%2}z=z.times(z),N?z.c&&z.c.length>N&&(z.c.length=N):R&&(z=z.mod(m))}return R?I:(A&&(I=r.div(I)),m?I.mod(m):N?Z(I,T,a,M):I)},o.integerValue=function(g){var m=new _(this);return g==null?g=a:Qe(g,0,8),Z(m,m.e+1,g)},o.isEqualTo=o.eq=function(g,m){return cr(this,new _(g,m))===0},o.isFinite=function(){return!!this.c},o.isGreaterThan=o.gt=function(g,m){return cr(this,new _(g,m))>0},o.isGreaterThanOrEqualTo=o.gte=function(g,m){return(m=cr(this,new _(g,m)))===1||m===0},o.isInteger=function(){return!!this.c&&hn(this.e/Se)>this.c.length-2},o.isLessThan=o.lt=function(g,m){return cr(this,new _(g,m))<0},o.isLessThanOrEqualTo=o.lte=function(g,m){return(m=cr(this,new _(g,m)))===-1||m===0},o.isNaN=function(){return!this.s},o.isNegative=function(){return this.s<0},o.isPositive=function(){return this.s>0},o.isZero=function(){return!!this.c&&this.c[0]==0},o.minus=function(g,m){var b,R,P,N,M=this,E=M.s;if(g=new _(g,m),m=g.s,!E||!m)return new _(NaN);if(E!=m)return g.s=-m,M.plus(g);var A=M.e/Se,O=g.e/Se,I=M.c,z=g.c;if(!A||!O){if(!I||!z)return I?(g.s=-m,g):new _(z?M:NaN);if(!I[0]||!z[0])return z[0]?(g.s=-m,g):new _(I[0]?M:a==3?-0:0)}if(A=hn(A),O=hn(O),I=I.slice(),E=A-O){for((N=E<0)?(E=-E,P=I):(O=A,P=z),P.reverse(),m=E;m--;P.push(0));P.reverse()}else for(R=(N=(E=I.length)<(m=z.length))?E:m,E=m=0;m<R;m++)if(I[m]!=z[m]){N=I[m]<z[m];break}if(N&&(P=I,I=z,z=P,g.s=-g.s),m=(R=z.length)-(b=I.length),m>0)for(;m--;I[b++]=0);for(m=yn-1;R>E;){if(I[--R]<z[R]){for(b=R;b&&!I[--b];I[b]=m);--I[b],I[R]+=yn}I[R]-=z[R]}for(;I[0]==0;I.splice(0,1),--O);return I[0]?W(g,I,O):(g.s=a==3?-1:1,g.c=[g.e=0],g)},o.modulo=o.mod=function(g,m){var b,R,P=this;return g=new _(g,m),!P.c||!g.s||g.c&&!g.c[0]?new _(NaN):!g.c||P.c&&!P.c[0]?new _(P):(v==9?(R=g.s,g.s=1,b=e(P,g,0,3),g.s=R,b.s*=R):b=e(P,g,0,v),g=P.minus(b.times(g)),!g.c[0]&&v==1&&(g.s=P.s),g)},o.multipliedBy=o.times=function(g,m){var b,R,P,N,M,E,A,O,I,z,Y,K,ae,Ae,Ne,xe=this,Me=xe.c,Ze=(g=new _(g,m)).c;if(!Me||!Ze||!Me[0]||!Ze[0])return!xe.s||!g.s||Me&&!Me[0]&&!Ze||Ze&&!Ze[0]&&!Me?g.c=g.e=g.s=null:(g.s*=xe.s,!Me||!Ze?g.c=g.e=null:(g.c=[0],g.e=0)),g;for(R=hn(xe.e/Se)+hn(g.e/Se),g.s*=xe.s,A=Me.length,z=Ze.length,A<z&&(ae=Me,Me=Ze,Ze=ae,P=A,A=z,z=P),P=A+z,ae=[];P--;ae.push(0));for(Ae=yn,Ne=Si,P=z;--P>=0;){for(b=0,Y=Ze[P]%Ne,K=Ze[P]/Ne|0,M=A,N=P+M;N>P;)O=Me[--M]%Ne,I=Me[M]/Ne|0,E=K*O+I*Y,O=Y*O+E%Ne*Ne+ae[N]+b,b=(O/Ae|0)+(E/Ne|0)+K*I,ae[N--]=O%Ae;ae[N]=b}return b?++R:ae.splice(0,1),W(g,ae,R)},o.negated=function(){var g=new _(this);return g.s=-g.s||null,g},o.plus=function(g,m){var b,R=this,P=R.s;if(g=new _(g,m),m=g.s,!P||!m)return new _(NaN);if(P!=m)return g.s=-m,R.minus(g);var N=R.e/Se,M=g.e/Se,E=R.c,A=g.c;if(!N||!M){if(!E||!A)return new _(P/0);if(!E[0]||!A[0])return A[0]?g:new _(E[0]?R:P*0)}if(N=hn(N),M=hn(M),E=E.slice(),P=N-M){for(P>0?(M=N,b=A):(P=-P,b=E),b.reverse();P--;b.push(0));b.reverse()}for(P=E.length,m=A.length,P-m<0&&(b=A,A=E,E=b,m=P),P=0;m;)P=(E[--m]=E[m]+A[m]+P)/yn|0,E[m]=yn===E[m]?0:E[m]%yn;return P&&(E=[P].concat(E),++M),W(g,E,M)},o.precision=o.sd=function(g,m){var b,R,P,N=this;if(g!=null&&g!==!!g)return Qe(g,1,gt),m==null?m=a:Qe(m,0,8),Z(new _(N),g,m);if(!(b=N.c))return null;if(P=b.length-1,R=P*Se+1,P=b[P]){for(;P%10==0;P/=10,R--);for(P=b[0];P>=10;P/=10,R++);}return g&&N.e+1>R&&(R=N.e+1),R},o.shiftedBy=function(g){return Qe(g,-Kl,Kl),this.times("1e"+g)},o.squareRoot=o.sqrt=function(){var g,m,b,R,P,N=this,M=N.c,E=N.s,A=N.e,O=s+4,I=new _("0.5");if(E!==1||!M||!M[0])return new _(!E||E<0&&(!M||M[0])?NaN:M?N:1/0);if(E=Math.sqrt(+Q(N)),E==0||E==1/0?(m=un(M),(m.length+A)%2==0&&(m+="0"),E=Math.sqrt(+m),A=hn((A+1)/2)-(A<0||A%2),E==1/0?m="5e"+A:(m=E.toExponential(),m=m.slice(0,m.indexOf("e")+1)+A),b=new _(m)):b=new _(E+""),b.c[0]){for(A=b.e,E=A+O,E<3&&(E=0);;)if(P=b,b=I.times(P.plus(e(N,P,O,1))),un(P.c).slice(0,E)===(m=un(b.c)).slice(0,E))if(b.e<A&&--E,m=m.slice(E-3,E+1),m=="9999"||!R&&m=="4999"){if(!R&&(Z(P,P.e+s+2,0),P.times(P).eq(N))){b=P;break}O+=4,E+=4,R=1}else{(!+m||!+m.slice(1)&&m.charAt(0)=="5")&&(Z(b,b.e+s+2,1),g=!b.times(b).eq(N));break}}return Z(b,b.e+s+1,a,g)},o.toExponential=function(g,m){return g!=null&&(Qe(g,0,gt),g++),U(this,g,m,1)},o.toFixed=function(g,m){return g!=null&&(Qe(g,0,gt),g=g+this.e+1),U(this,g,m)},o.toFormat=function(g,m,b){var R,P=this;if(b==null)g!=null&&m&&typeof m=="object"?(b=m,m=null):g&&typeof g=="object"?(b=g,g=m=null):b=S;else if(typeof b!="object")throw Error(Ft+"Argument not an object: "+b);if(R=P.toFixed(g,m),P.c){var N,M=R.split("."),E=+b.groupSize,A=+b.secondaryGroupSize,O=b.groupSeparator||"",I=M[0],z=M[1],Y=P.s<0,K=Y?I.slice(1):I,ae=K.length;if(A&&(N=E,E=A,A=N,ae-=N),E>0&&ae>0){for(N=ae%E||E,I=K.substr(0,N);N<ae;N+=E)I+=O+K.substr(N,E);A>0&&(I+=O+K.slice(N)),Y&&(I="-"+I)}R=z?I+(b.decimalSeparator||"")+((A=+b.fractionGroupSize)?z.replace(new RegExp("\\d{"+A+"}\\B","g"),"$&"+(b.fractionGroupSeparator||"")):z):I}return(b.prefix||"")+R+(b.suffix||"")},o.toFraction=function(g){var m,b,R,P,N,M,E,A,O,I,z,Y,K=this,ae=K.c;if(g!=null&&(E=new _(g),!E.isInteger()&&(E.c||E.s!==1)||E.lt(r)))throw Error(Ft+"Argument "+(E.isInteger()?"out of range: ":"not an integer: ")+Q(E));if(!ae)return new _(K);for(m=new _(r),O=b=new _(r),R=A=new _(r),Y=un(ae),N=m.e=Y.length-K.e-1,m.c[0]=Jl[(M=N%Se)<0?Se+M:M],g=!g||E.comparedTo(m)>0?N>0?m:O:E,M=p,p=1/0,E=new _(Y),A.c[0]=0;I=e(E,m,0,1),P=b.plus(I.times(R)),P.comparedTo(g)!=1;)b=R,R=P,O=A.plus(I.times(P=O)),A=P,m=E.minus(I.times(P=m)),E=P;return P=e(g.minus(b),R,0,1),A=A.plus(P.times(O)),b=b.plus(P.times(R)),A.s=O.s=K.s,N=N*2,z=e(O,R,N,a).minus(K).abs().comparedTo(e(A,b,N,a).minus(K).abs())<1?[O,R]:[A,b],p=M,z},o.toNumber=function(){return+Q(this)},o.toPrecision=function(g,m){return g!=null&&Qe(g,1,gt),U(this,g,m,2)},o.toString=function(g){var m,b=this,R=b.s,P=b.e;return P===null?R?(m="Infinity",R<0&&(m="-"+m)):m="NaN":(g==null?m=P<=c||P>=l?Ya(un(b.c),P):ai(un(b.c),P,"0"):g===10&&B?(b=Z(new _(b),s+P+1,a),m=ai(un(b.c),b.e,"0")):(Qe(g,2,$.length,"Base"),m=t(ai(un(b.c),P,"0"),10,g,R,!0)),R<0&&b.c[0]&&(m="-"+m)),m},o.valueOf=o.toJSON=function(){return Q(this)},o._isBigNumber=!0,o[Symbol.toStringTag]="BigNumber",o[Symbol.for("nodejs.util.inspect.custom")]=o.valueOf,n!=null&&_.set(n),_}function hn(n){var e=n|0;return n>0||n===e?e:e-1}function un(n){for(var e,t,i=1,o=n.length,r=n[0]+"";i<o;){for(e=n[i++]+"",t=Se-e.length;t--;e="0"+e);r+=e}for(o=r.length;r.charCodeAt(--o)===48;);return r.slice(0,o+1||1)}function cr(n,e){var t,i,o=n.c,r=e.c,s=n.s,a=e.s,c=n.e,l=e.e;if(!s||!a)return null;if(t=o&&!o[0],i=r&&!r[0],t||i)return t?i?0:-a:s;if(s!=a)return s;if(t=s<0,i=c==l,!o||!r)return i?0:!o^t?1:-1;if(!i)return c>l^t?1:-1;for(a=(c=o.length)<(l=r.length)?c:l,s=0;s<a;s++)if(o[s]!=r[s])return o[s]>r[s]^t?1:-1;return c==l?0:c>l^t?1:-1}function Qe(n,e,t,i){if(n<e||n>t||n!==dn(n))throw Error(Ft+(i||"Argument")+(typeof n=="number"?n<e||n>t?" out of range: ":" not an integer: ":" not a primitive number: ")+String(n))}function qa(n){var e=n.c.length-1;return hn(n.e/Se)==e&&n.c[e]%2!=0}function Ya(n,e){return(n.length>1?n.charAt(0)+"."+n.slice(1):n)+(e<0?"e":"e+")+e}function ai(n,e,t){var i,o;if(e<0){for(o=t+".";++e;o+=t);n=o+n}else if(i=n.length,++e>i){for(o=t,e-=i;--e;o+=t);n+=o}else e<i&&(n=n.slice(0,e)+"."+n.slice(e));return n}var Ka=ff();const Et={bigNumber(n){return new Ka(n)},multiply(n,e){if(n===void 0||e===void 0)return Ka(0);const t=new Ka(n),i=new Ka(e);return t.multipliedBy(i)}},Ve=At({supportsAllNetworks:!0,isDefaultCaipNetwork:!1,smartAccountEnabledNetworks:[]}),he={state:Ve,subscribe(n){return Xt(Ve,()=>n(Ve))},subscribeKey(n,e){return on(Ve,n,e)},_getClient(){if(!Ve._client)throw new Error("NetworkController client not set");return Ve._client},setClient(n){Ve._client=_o(n)},setCaipNetwork(n){Ve.caipNetwork=n,vr.set({selectedNetworkId:n==null?void 0:n.id}),this.state.allowUnsupportedChain||this.checkIfSupportedNetwork()},setDefaultCaipNetwork(n){Ve.caipNetwork=n,vr.set({selectedNetworkId:n==null?void 0:n.id}),Ve.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(n){Ve.requestedCaipNetworks=n},setAllowUnsupportedChain(n){Ve.allowUnsupportedChain=n},setSmartAccountEnabledNetworks(n){Ve.smartAccountEnabledNetworks=n},getRequestedCaipNetworks(){const{approvedCaipNetworkIds:n,requestedCaipNetworks:e}=Ve,t=n,i=e;return oe.sortRequestedNetworks(t,i)},async getApprovedCaipNetworksData(){const n=await this._getClient().getApprovedCaipNetworksData();Ve.supportsAllNetworks=n.supportsAllNetworks,Ve.approvedCaipNetworkIds=n.approvedCaipNetworkIds},async switchActiveNetwork(n){await this._getClient().switchCaipNetwork(n),Ve.caipNetwork=n,n&&me.sendEvent({type:"track",event:"SWITCH_NETWORK",properties:{network:n.id}})},checkIfSupportedNetwork(){var n;Ve.isUnsupportedChain=!((n=Ve.requestedCaipNetworks)!=null&&n.some(e=>{var t;return e.id===((t=Ve.caipNetwork)==null?void 0:t.id)})),Ve.isUnsupportedChain&&this.showUnsupportedChainUI()},checkIfSmartAccountEnabled(){var e,t;const n=gr.caipNetworkIdToNumber((e=Ve.caipNetwork)==null?void 0:e.id);return n?!!((t=Ve.smartAccountEnabledNetworks)!=null&&t.includes(n)):!1},resetNetwork(){Ve.isDefaultCaipNetwork||(Ve.caipNetwork=void 0),Ve.approvedCaipNetworkIds=void 0,Ve.supportsAllNetworks=!0,Ve.smartAccountEnabledNetworks=[]},showUnsupportedChainUI(){setTimeout(()=>{Ie.open({view:"UnsupportedChain"})},300)}},ps={async getTokenList(){var t;return(await Bt.fetchConvertTokens({chainId:(t=he.state.caipNetwork)==null?void 0:t.id,projectId:fe.state.projectId})).tokens.map(i=>({...i,eip2612:!1,quantity:{decimals:"0",numeric:"0"},price:0,value:0}))},async fetchGasPrice(){const n=fe.state.projectId,e=he.state.caipNetwork;return e?await Bt.fetchGasPrice({projectId:n,chainId:e.id}):null},async fetchConvertAllowance({tokenAddress:n,userAddress:e,sourceTokenAmount:t,sourceTokenDecimals:i}){const o=fe.state.projectId,r=await Bt.fetchConvertAllowance({projectId:o,tokenAddress:n,userAddress:e});if(r!=null&&r.allowance&&t&&i){const s=$e.parseUnits(t,i);return BigInt(r.allowance)>=s}return!1},async getMyTokensWithBalance(){const n=ie.state.address,e=he.state.caipNetwork;if(!n||!e)return[];const i=(await Bt.getBalance(n,e.id)).balances;return this.mapBalancesToConvertTokens(i)},mapBalancesToConvertTokens(n){return n.map(e=>{var t;return{symbol:e.symbol,name:e.name,address:e!=null&&e.address?e.address:`${(t=he.state.caipNetwork)==null?void 0:t.id}:${ut.NATIVE_TOKEN_ADDRESS}`,decimals:parseInt(e.quantity.decimals,10),logoUri:e.iconUrl,eip2612:!1,quantity:e.quantity,price:e.price,value:e.value}})}},qe=At({view:"Connect",history:["Connect"],transactionStack:[]}),G={state:qe,subscribeKey(n,e){return on(qe,n,e)},pushTransactionStack(n){qe.transactionStack.push(n)},popTransactionStack(n){var t,i;const e=qe.transactionStack.pop();e&&(n?(this.goBack(),(t=e==null?void 0:e.onCancel)==null||t.call(e)):(e.goBack?this.goBack():e.view&&this.reset(e.view),(i=e==null?void 0:e.onSuccess)==null||i.call(e)))},push(n,e){n!==qe.view&&(qe.view=n,qe.history.push(n),qe.data=e)},reset(n){qe.view=n,qe.history=[n]},replace(n,e){qe.history.length>1&&qe.history.at(-1)!==n&&(qe.view=n,qe.history[qe.history.length-1]=n,qe.data=e)},goBack(){if(qe.history.length>1){qe.history.pop();const[n]=qe.history.slice(-1);n&&(qe.view=n)}},goBackToIndex(n){if(qe.history.length>1){qe.history=qe.history.slice(0,n+1);const[e]=qe.history.slice(-1);e&&(qe.view=e)}}},d3=15e4,X=At({initialized:!1,loading:!1,loadingPrices:!1,approvalTransaction:void 0,convertTransaction:void 0,transactionError:void 0,transactionLoading:!1,sourceToken:void 0,sourceTokenAmount:"",sourceTokenPriceInUSD:0,toToken:void 0,toTokenAmount:"",toTokenPriceInUSD:0,networkPrice:"0",networkBalanceInUSD:"0",inputError:void 0,slippage:ut.CONVERT_SLIPPAGE_TOLERANCE,tokens:void 0,popularTokens:void 0,suggestedTokens:void 0,foundTokens:void 0,myTokensWithBalance:void 0,tokensPriceMap:{},gasFee:BigInt(0),gasPriceInUSD:0,priceImpact:void 0,maxSlippage:void 0}),pe={state:X,subscribe(n){return Xt(X,()=>n(X))},subscribeKey(n,e){return on(X,n,e)},getParams(){var t,i,o,r,s;const{address:n}=ie.state,e=`${(t=he.state.caipNetwork)==null?void 0:t.id}:${ut.NATIVE_TOKEN_ADDRESS}`;if(!n)throw new Error("No address found to swap the tokens from.");return{networkAddress:e,fromAddress:n,fromCaipAddress:ie.state.caipAddress,sourceTokenAddress:(i=X.sourceToken)==null?void 0:i.address,toTokenAddress:(o=X.toToken)==null?void 0:o.address,toTokenAmount:X.toTokenAmount,toTokenDecimals:(r=X.toToken)==null?void 0:r.decimals,sourceTokenAmount:X.sourceTokenAmount,sourceTokenDecimals:(s=X.sourceToken)==null?void 0:s.decimals}},setLoading(n){X.loading=n},setSourceToken(n){n&&(X.sourceToken=n,this.setTokenValues(n.address,"sourceToken"))},setSourceTokenAmount(n){const{sourceTokenAddress:e}=this.getParams();X.sourceTokenAmount=n,e&&this.setTokenValues(e,"sourceToken")},setToToken(n){const{sourceTokenAddress:e,sourceTokenAmount:t}=this.getParams();if(!n){X.toTokenAmount="0",X.toTokenPriceInUSD=0;return}X.toToken=n,this.setTokenValues(n.address,"toToken"),e&&t&&this.makeChecks()},setToTokenAmount(n){const{toTokenAddress:e}=this.getParams();X.toTokenAmount=n,e&&this.setTokenValues(e,"toToken")},async setTokenValues(n,e){let t=X.tokensPriceMap[n]||0;t||(t=await this.getAddressPrice(n)),e==="sourceToken"?X.sourceTokenPriceInUSD=t:e==="toToken"&&(X.toTokenPriceInUSD=t)},switchTokens(){const n=X.toToken?{...X.toToken}:void 0,e=X.sourceToken?{...X.sourceToken}:void 0;this.setSourceToken(n),this.setToToken(e),this.setSourceTokenAmount(X.toTokenAmount||"0"),pe.convertTokens()},resetTokens(){X.tokens=void 0,X.popularTokens=void 0,X.myTokensWithBalance=void 0,X.initialized=!1},resetValues(){var t;const{networkAddress:n}=this.getParams(),e=(t=X.tokens)==null?void 0:t.find(i=>i.address===n);this.setSourceToken(e),X.sourceTokenPriceInUSD=X.tokensPriceMap[n]||0,X.sourceTokenAmount="0",this.setToToken(void 0),X.gasPriceInUSD=0},clearError(){X.transactionError=void 0},async initializeState(){X.initialized||(await this.fetchTokens(),X.initialized=!0)},async fetchTokens(){var t;const{networkAddress:n}=this.getParams();await this.getTokenList(),await this.getNetworkTokenPrice(),await this.getMyTokensWithBalance();const e=(t=X.tokens)==null?void 0:t.find(i=>i.address===n);e&&this.setSourceToken(e)},async getTokenList(){const n=await ps.getTokenList();X.tokens=n,X.popularTokens=n.sort((e,t)=>e.symbol<t.symbol?-1:e.symbol>t.symbol?1:0).filter(e=>!!ut.POPULAR_TOKENS.includes(e.symbol),{}),X.suggestedTokens=n.filter(e=>!!ut.SUGGESTED_TOKENS.includes(e.symbol),{})},async getAddressPrice(n){var c,l;const e=X.tokensPriceMap[n];if(e)return e;const i=(await Bt.fetchTokenPrice({projectId:fe.state.projectId,addresses:[n]})).fungibles||[],o=[...X.tokens||[],...X.myTokensWithBalance||[]],r=(c=o==null?void 0:o.find(d=>d.address===n))==null?void 0:c.symbol,s=((l=i.find(d=>d.symbol===r))==null?void 0:l.price)||"0",a=parseFloat(s);return X.tokensPriceMap[n]=a,a},async getNetworkTokenPrice(){var o;const{networkAddress:n}=this.getParams(),t=(o=(await Bt.fetchTokenPrice({projectId:fe.state.projectId,addresses:[n]})).fungibles)==null?void 0:o[0],i=(t==null?void 0:t.price)||"0";X.tokensPriceMap[n]=parseFloat(i),X.networkPrice=i},async getMyTokensWithBalance(){const n=await ps.getMyTokensWithBalance();n&&(await this.getInitialGasPrice(),this.setBalances(n))},setBalances(n){const{networkAddress:e}=this.getParams(),t=n.find(i=>i.address===e);n.forEach(i=>{X.tokensPriceMap[i.address]=i.price||0}),X.myTokensWithBalance=n,X.networkBalanceInUSD=t?Et.multiply(t.quantity.numeric,t.price).toString():"0"},async getInitialGasPrice(){const n=await ps.fetchGasPrice();if(!n)return;const e=n.instant,t=BigInt(e),i=BigInt(d3),o=this.calculateGasPriceInUSD(i,t);X.gasPriceInUSD=o},async refreshConvertValues(){const{fromAddress:n,toTokenDecimals:e,toTokenAddress:t}=this.getParams();if(n&&t&&e&&!X.loading){const i=await this.getTransaction();this.setTransactionDetails(i)}},calculateGasPriceInEther(n,e){const t=e*n;return Number(t)/1e18},calculateGasPriceInUSD(n,e){const t=this.calculateGasPriceInEther(n,e);return Et.bigNumber(X.networkPrice).multipliedBy(t).toNumber()},calculatePriceImpact(n,e){const t=X.sourceTokenAmount,i=X.sourceTokenPriceInUSD,o=X.toTokenPriceInUSD;return Et.bigNumber(t).multipliedBy(i).plus(e).dividedBy(n).minus(o).dividedBy(o).multipliedBy(100).toNumber()},calculateMaxSlippage(){const n=Et.bigNumber(X.slippage).dividedBy(100);return Et.multiply(X.sourceTokenAmount,n).toNumber()},async convertTokens(){const{sourceTokenAddress:n,toTokenAddress:e}=this.getParams();!n||!e||await this.makeChecks()},async makeChecks(){const{toTokenDecimals:n,toTokenAddress:e}=this.getParams();if(!n||!e)return;X.loading=!0;const t=await this.getTransaction();this.setTransactionDetails(t),X.loading=!1},async getTransaction(){const{fromCaipAddress:n,sourceTokenAddress:e,sourceTokenAmount:t,sourceTokenDecimals:i}=this.getParams();if(!n||!e||!t||parseFloat(t)===0||!i)return;const o=await ps.fetchConvertAllowance({userAddress:n,tokenAddress:e,sourceTokenAmount:t,sourceTokenDecimals:i});let r;return o?(X.approvalTransaction=void 0,r=await this.createConvert(),X.convertTransaction=r):(X.convertTransaction=void 0,r=await this.createTokenAllowance(),X.approvalTransaction=r),r},getToAmount(){const{sourceTokenDecimals:n}=this.getParams(),t=10**(n||18);return(X.sourceTokenPriceInUSD&&X.toTokenPriceInUSD&&X.sourceTokenAmount?Et.bigNumber(X.sourceTokenAmount).multipliedBy(X.sourceTokenPriceInUSD).dividedBy(X.toTokenPriceInUSD):Et.bigNumber(0)).multipliedBy(t).toString()},async createTokenAllowance(){const{fromCaipAddress:n,fromAddress:e,sourceTokenAddress:t,toTokenAddress:i}=this.getParams();if(!n||!i)return;if(!t)throw new Error(">>> createTokenAllowance - No source token address found.");const o=await Bt.generateApproveCalldata({projectId:fe.state.projectId,from:t,to:i,userAddress:n}),r=await $e.estimateGas({address:e,to:oe.getPlainAddress(o.tx.to),data:o.tx.data}),s=this.getToAmount();return{data:o.tx.data,to:oe.getPlainAddress(o.tx.from),gas:r,gasPrice:BigInt(o.tx.eip155.gasPrice),value:BigInt(o.tx.value),toAmount:s}},async sendTransactionForApproval(n){const{fromAddress:e}=this.getParams();X.transactionLoading=!0,G.pushTransactionStack({view:null,goBack:!0});try{await $e.sendTransaction({address:e,to:n.to,data:n.data,value:BigInt(n.value),gasPrice:BigInt(n.gasPrice)}),X.approvalTransaction=void 0,X.transactionLoading=!1,this.makeChecks()}catch(t){const i=t;X.transactionError=i==null?void 0:i.shortMessage,X.transactionLoading=!1}},async createConvert(){const{networkAddress:n,fromCaipAddress:e,sourceTokenAddress:t,sourceTokenDecimals:i,sourceTokenAmount:o,toTokenAddress:r}=this.getParams();if(!(!e||!o||!t||!r||!i))try{const s=$e.parseUnits(o,i).toString(),a=await Bt.generateConvertCalldata({projectId:fe.state.projectId,userAddress:e,from:t,to:r,amount:s}),c=t===n,l=this.getToAmount(),d=BigInt(a.tx.eip155.gas),p=BigInt(a.tx.eip155.gasPrice),f={data:a.tx.data,to:oe.getPlainAddress(a.tx.to),gas:d,gasPrice:p,value:BigInt(c?s:"0"),toAmount:l};return X.gasPriceInUSD=this.calculateGasPriceInUSD(d,p),f}catch{return}},async sendTransactionForConvert(n){if(!n)return;const{fromAddress:e}=this.getParams();X.transactionLoading=!0,G.pushTransactionStack({view:"Account",goBack:!1,onSuccess(){pe.resetValues()}});try{const t=await $e.sendTransaction({address:e,to:n.to,data:n.data,gas:n.gas,gasPrice:BigInt(n.gasPrice),value:n.value});return X.transactionLoading=!1,setTimeout(()=>{this.resetValues(),this.getMyTokensWithBalance()},1e3),t}catch(t){const i=t;X.transactionError=i==null?void 0:i.shortMessage,X.transactionLoading=!1,De.showError((i==null?void 0:i.shortMessage)||"Transaction error");return}},getToTokenValues(n,e){const{toTokenAddress:t}=this.getParams();if(!t)return{toTokenAmount:"0",toTokenPriceInUSD:0};const i=Et.bigNumber(n).dividedBy(10**e).toFixed(20),o=X.tokensPriceMap[t]||"0",r=Et.bigNumber(o).toNumber();return{toTokenAmount:i,toTokenPriceInUSD:r}},isInsufficientNetworkTokenForGas(){return Et.bigNumber(Et.bigNumber(X.gasPriceInUSD||"0")).isGreaterThan(X.networkBalanceInUSD)},setTransactionDetails(n){const{toTokenAddress:e,toTokenDecimals:t}=this.getParams();if(!n||!e||!t)return;this.isInsufficientNetworkTokenForGas()?X.inputError="Insufficient balance":X.inputError=void 0;const{toTokenAmount:o,toTokenPriceInUSD:r}=this.getToTokenValues(n.toAmount,t);X.toTokenAmount=o,X.toTokenPriceInUSD=r,X.gasPriceInUSD=this.calculateGasPriceInUSD(n.gas,n.gasPrice),X.priceImpact=this.calculatePriceImpact(X.toTokenAmount,X.gasPriceInUSD),X.maxSlippage=this.calculateMaxSlippage()}},Le=At({isConnected:!1,currentTab:0,tokenBalance:[],smartAccountDeployed:!1}),ie={state:Le,subscribe(n){return Xt(Le,()=>n(Le))},subscribeKey(n,e){return on(Le,n,e)},setIsConnected(n){Le.isConnected=n},setCaipAddress(n){Le.caipAddress=n,Le.address=n?oe.getPlainAddress(n):void 0},setBalance(n,e){Le.balance=n,Le.balanceSymbol=e},setProfileName(n){Le.profileName=n},setProfileImage(n){Le.profileImage=n},setAddressExplorerUrl(n){Le.addressExplorerUrl=n},setSmartAccountDeployed(n){Le.smartAccountDeployed=n},setCurrentTab(n){Le.currentTab=n},setTokenBalance(n){n&&(Le.tokenBalance=_o(n))},setConnectedWalletInfo(n){Le.connectedWalletInfo=n},setPreferredAccountType(n){Le.preferredAccountType=n},async fetchTokenBalance(){try{if(Le.address){const n=await Bt.getBalance(Le.address);this.setTokenBalance(n.balances),pe.setBalances(ps.mapBalancesToConvertTokens(n.balances))}}catch{De.showError("Failed to fetch token balance")}},resetAccount(){Le.isConnected=!1,Le.smartAccountDeployed=!1,Le.currentTab=0,Le.caipAddress=void 0,Le.address=void 0,Le.balance=void 0,Le.balanceSymbol=void 0,Le.profileName=void 0,Le.profileImage=void 0,Le.addressExplorerUrl=void 0,Le.tokenBalance=[],Le.connectedWalletInfo=void 0,Le.preferredAccountType=void 0}},xn=At({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{},currencyImages:{}}),mt={state:xn,subscribeNetworkImages(n){return Xt(xn.networkImages,()=>n(xn.networkImages))},subscribeKey(n,e){return on(xn,n,e)},subscribe(n){return Xt(xn,()=>n(xn))},setWalletImage(n,e){xn.walletImages[n]=e},setNetworkImage(n,e){xn.networkImages[n]=e},setConnectorImage(n,e){xn.connectorImages[n]=e},setTokenImage(n,e){xn.tokenImages[n]=e},setCurrencyImage(n,e){xn.currencyImages[n]=e}},lr=At({themeMode:"dark",themeVariables:{}}),pt={state:lr,subscribe(n){return Xt(lr,()=>n(lr))},setThemeMode(n){lr.themeMode=n;try{const e=je.getEmailConnector();e&&e.provider.syncTheme({themeMode:pt.getSnapshot().themeMode})}catch{console.info("Unable to sync theme to email connector")}},setThemeVariables(n){lr.themeVariables={...lr.themeVariables,...n};try{const e=je.getEmailConnector();e&&e.provider.syncTheme({themeVariables:pt.getSnapshot().themeVariables})}catch{console.info("Unable to sync theme to email connector")}},getSnapshot(){return lf(lr)}},$i=At({connectors:[]}),je={state:$i,subscribeKey(n,e){return on($i,n,e)},setConnectors(n){$i.connectors=n.map(e=>_o(e))},addConnector(n){var e,t;if($i.connectors.push(_o(n)),n.id==="w3mEmail"){const i=n,o=lf(fe.state);(t=(e=i==null?void 0:i.provider)==null?void 0:e.syncDappData)==null||t.call(e,{metadata:o.metadata,sdkVersion:o.sdkVersion,projectId:o.projectId}),i.provider.syncTheme({themeMode:pt.getSnapshot().themeMode,themeVariables:pt.getSnapshot().themeVariables})}},getEmailConnector(){return $i.connectors.find(n=>n.type==="EMAIL")},getAnnouncedConnectorRdns(){return $i.connectors.filter(n=>n.type==="ANNOUNCED").map(n=>{var e;return(e=n.info)==null?void 0:e.rdns})},getConnectors(){return $i.connectors},getConnector(n,e){return $i.connectors.find(t=>{var i;return t.explorerId===n||((i=t.info)==null?void 0:i.rdns)===e})}},h3=oe.getApiUrl(),Nt=new Od({baseUrl:h3}),p3="40",rh="4",Ct=At({page:1,count:0,featured:[],recommended:[],wallets:[],search:[],isAnalyticsEnabled:!1}),Ce={state:Ct,subscribeKey(n,e){return on(Ct,n,e)},_getApiHeaders(){const{projectId:n,sdkType:e,sdkVersion:t}=fe.state;return{"x-project-id":n,"x-sdk-type":e,"x-sdk-version":t}},async _fetchWalletImage(n){const e=`${Nt.baseUrl}/getWalletImage/${n}`,t=await Nt.getBlob({path:e,headers:Ce._getApiHeaders()});mt.setWalletImage(n,URL.createObjectURL(t))},async _fetchNetworkImage(n){const e=`${Nt.baseUrl}/public/getAssetImage/${n}`,t=await Nt.getBlob({path:e,headers:Ce._getApiHeaders()});mt.setNetworkImage(n,URL.createObjectURL(t))},async _fetchConnectorImage(n){const e=`${Nt.baseUrl}/public/getAssetImage/${n}`,t=await Nt.getBlob({path:e,headers:Ce._getApiHeaders()});mt.setConnectorImage(n,URL.createObjectURL(t))},async _fetchCurrencyImage(n){const e=`${Nt.baseUrl}/public/getCurrencyImage/${n}`,t=await Nt.getBlob({path:e,headers:Ce._getApiHeaders()});mt.setCurrencyImage(n,URL.createObjectURL(t))},async _fetchTokenImage(n){const e=`${Nt.baseUrl}/public/getTokenImage/${n}`,t=await Nt.getBlob({path:e,headers:Ce._getApiHeaders()});mt.setTokenImage(n,URL.createObjectURL(t))},async fetchNetworkImages(){const{requestedCaipNetworks:n}=he.state,e=n==null?void 0:n.map(({imageId:t})=>t).filter(Boolean);e&&await Promise.allSettled(e.map(t=>Ce._fetchNetworkImage(t)))},async fetchConnectorImages(){const{connectors:n}=je.state,e=n.map(({imageId:t})=>t).filter(Boolean);await Promise.allSettled(e.map(t=>Ce._fetchConnectorImage(t)))},async fetchCurrencyImages(n=[]){await Promise.allSettled(n.map(e=>Ce._fetchCurrencyImage(e)))},async fetchTokenImages(n=[]){await Promise.allSettled(n.map(e=>Ce._fetchTokenImage(e)))},async fetchFeaturedWallets(){const{featuredWalletIds:n}=fe.state;if(n!=null&&n.length){const{data:e}=await Nt.get({path:"/getWallets",headers:Ce._getApiHeaders(),params:{page:"1",entries:n!=null&&n.length?String(n.length):rh,include:n==null?void 0:n.join(",")}});e.sort((i,o)=>n.indexOf(i.id)-n.indexOf(o.id));const t=e.map(i=>i.image_id).filter(Boolean);await Promise.allSettled(t.map(i=>Ce._fetchWalletImage(i))),Ct.featured=e}},async fetchRecommendedWallets(){var l;const{includeWalletIds:n,excludeWalletIds:e,featuredWalletIds:t}=fe.state,i=[...e??[],...t??[]].filter(Boolean),{data:o,count:r}=await Nt.get({path:"/getWallets",headers:Ce._getApiHeaders(),params:{page:"1",chains:(l=he.state.caipNetwork)==null?void 0:l.id,entries:rh,include:n==null?void 0:n.join(","),exclude:i==null?void 0:i.join(",")}}),s=dt.getRecentWallets(),a=o.map(d=>d.image_id).filter(Boolean),c=s.map(d=>d.image_id).filter(Boolean);await Promise.allSettled([...a,...c].map(d=>Ce._fetchWalletImage(d))),Ct.recommended=o,Ct.count=r??0},async fetchWallets({page:n}){var c;const{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:i}=fe.state,o=[...Ct.recommended.map(({id:l})=>l),...t??[],...i??[]].filter(Boolean),{data:r,count:s}=await Nt.get({path:"/getWallets",headers:Ce._getApiHeaders(),params:{page:String(n),entries:p3,chains:(c=he.state.caipNetwork)==null?void 0:c.id,include:e==null?void 0:e.join(","),exclude:o.join(",")}}),a=r.map(l=>l.image_id).filter(Boolean);await Promise.allSettled([...a.map(l=>Ce._fetchWalletImage(l)),oe.wait(300)]),Ct.wallets=[...Ct.wallets,...r],Ct.count=s>Ct.count?s:Ct.count,Ct.page=n},async searchWallet({search:n}){var r;const{includeWalletIds:e,excludeWalletIds:t}=fe.state;Ct.search=[];const{data:i}=await Nt.get({path:"/getWallets",headers:Ce._getApiHeaders(),params:{page:"1",entries:"100",search:n,chains:(r=he.state.caipNetwork)==null?void 0:r.id,include:e==null?void 0:e.join(","),exclude:t==null?void 0:t.join(",")}}),o=i.map(s=>s.image_id).filter(Boolean);await Promise.allSettled([...o.map(s=>Ce._fetchWalletImage(s)),oe.wait(300)]),Ct.search=i},async reFetchWallets(){Ct.page=1,Ct.wallets=[],await Ce.fetchFeaturedWallets(),await Ce.fetchRecommendedWallets()},prefetch(){const n=[Ce.fetchFeaturedWallets(),Ce.fetchRecommendedWallets(),Ce.fetchNetworkImages(),Ce.fetchConnectorImages()];fe.state.enableAnalytics===void 0&&n.push(Ce.fetchAnalyticsConfig()),Ct.prefetchPromise=Promise.race([Promise.allSettled(n),oe.wait(3e3)])},async fetchAnalyticsConfig(){const{isAnalyticsEnabled:n}=await Nt.get({path:"/getAnalyticsConfig",headers:Ce._getApiHeaders()});fe.setEnableAnalytics(n)}},ur=At({loading:!1,open:!1}),Ie={state:ur,subscribe(n){return Xt(ur,()=>n(ur))},subscribeKey(n,e){return on(ur,n,e)},async open(n){await Ce.state.prefetchPromise;const e=ie.state.isConnected;n!=null&&n.view?G.reset(n.view):e?G.reset("Account"):G.reset("Connect"),ur.open=!0,vr.set({open:!0}),me.sendEvent({type:"track",event:"MODAL_OPEN",properties:{connected:e}})},close(){const n=ie.state.isConnected;ur.open=!1,vr.set({open:!1}),me.sendEvent({type:"track",event:"MODAL_CLOSE",properties:{connected:n}})},setLoading(n){ur.loading=n,vr.set({loading:n})}},ws={id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},ju={id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},f3={providers:uf,selectedProvider:null,error:null,purchaseCurrency:ws,paymentCurrency:ju,purchaseCurrencies:[ws],paymentCurrencies:[],quotesLoading:!1},We=At(f3),Fe={state:We,subscribe(n){return Xt(We,()=>n(We))},subscribeKey(n,e){return on(We,n,e)},setSelectedProvider(n){We.selectedProvider=n},setPurchaseCurrency(n){We.purchaseCurrency=n},setPaymentCurrency(n){We.paymentCurrency=n},setPurchaseAmount(n){this.state.purchaseAmount=n},setPaymentAmount(n){this.state.paymentAmount=n},async getAvailableCurrencies(){const n=await Bt.getOnrampOptions();We.purchaseCurrencies=n.purchaseCurrencies,We.paymentCurrencies=n.paymentCurrencies,We.paymentCurrency=n.paymentCurrencies[0]||ju,We.purchaseCurrency=n.purchaseCurrencies[0]||ws,await Ce.fetchCurrencyImages(n.paymentCurrencies.map(e=>e.id)),await Ce.fetchTokenImages(n.purchaseCurrencies.map(e=>e.symbol))},async getQuote(){var n,e;We.quotesLoading=!0;try{const t=await Bt.getOnrampQuote({purchaseCurrency:We.purchaseCurrency,paymentCurrency:We.paymentCurrency,amount:((n=We.paymentAmount)==null?void 0:n.toString())||"0",network:(e=We.purchaseCurrency)==null?void 0:e.symbol});return We.quotesLoading=!1,We.purchaseAmount=Number(t.purchaseAmount.amount),t}catch(t){return We.error=t.message,We.quotesLoading=!1,null}finally{We.quotesLoading=!1}},resetState(){We.providers=uf,We.selectedProvider=null,We.error=null,We.purchaseCurrency=ws,We.paymentCurrency=ju,We.purchaseCurrencies=[ws],We.paymentCurrencies=[],We.paymentAmount=void 0,We.purchaseAmount=void 0,We.quotesLoading=!1}},Wt=At({}),Mt={state:Wt,subscribe(n){return Xt(Wt,()=>n(Wt))},subscribeKey(n,e){return on(Wt,n,e)},setToken(n){n&&(Wt.token=_o(n))},setTokenAmount(n){Wt.sendTokenAmount=n},setReceiverAddress(n){Wt.receiverAddress=n},setReceiverProfileImageUrl(n){Wt.receiverProfileImageUrl=n},setReceiverProfileName(n){Wt.receiverProfileName=n},resetSend(){Wt.token=void 0,Wt.sendTokenAmount=void 0,Wt.receiverAddress=void 0,Wt.receiverProfileImageUrl=void 0,Wt.receiverProfileName=void 0}},He={getWalletImage(n){if(n!=null&&n.image_url)return n==null?void 0:n.image_url;if(n!=null&&n.image_id)return mt.state.walletImages[n.image_id]},getNetworkImage(n){if(n!=null&&n.imageUrl)return n==null?void 0:n.imageUrl;if(n!=null&&n.imageId)return mt.state.networkImages[n.imageId]},getConnectorImage(n){if(n!=null&&n.imageUrl)return n.imageUrl;if(n!=null&&n.imageId)return mt.state.connectorImages[n.imageId]}},Md={goBackOrCloseModal(){G.state.history.length>1?G.goBack():Ie.close()},navigateAfterNetworkSwitch(){const{history:n}=G.state,e=n.findIndex(t=>t==="Networks");e>=1?G.goBackToIndex(e-1):Ie.close()}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rc=globalThis,Bd=rc.ShadowRoot&&(rc.ShadyCSS===void 0||rc.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Dd=Symbol(),oh=new WeakMap;let gf=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Dd)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Bd&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=oh.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&oh.set(t,e))}return e}toString(){return this.cssText}};const jn=n=>new gf(typeof n=="string"?n:n+"",void 0,Dd),re=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,o,r)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+n[r+1],n[0]);return new gf(t,n,Dd)},g3=(n,e)=>{if(Bd)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),o=rc.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=t.cssText,n.appendChild(i)}},sh=Bd?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return jn(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:w3,defineProperty:m3,getOwnPropertyDescriptor:b3,getOwnPropertyNames:v3,getOwnPropertySymbols:y3,getPrototypeOf:x3}=Object,Li=globalThis,ah=Li.trustedTypes,C3=ah?ah.emptyScript:"",Xl=Li.reactiveElementPolyfillSupport,ms=(n,e)=>n,gc={toAttribute(n,e){switch(e){case Boolean:n=n?C3:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},Ld=(n,e)=>!w3(n,e),ch={attribute:!0,type:String,converter:gc,reflect:!1,hasChanged:Ld};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Li.litPropertyMetadata??(Li.litPropertyMetadata=new WeakMap);let lo=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ch){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);o!==void 0&&m3(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:r}=b3(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get(){return o==null?void 0:o.call(this)},set(s){const a=o==null?void 0:o.call(this);r.call(this,s),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ch}static _$Ei(){if(this.hasOwnProperty(ms("elementProperties")))return;const e=x3(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ms("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ms("properties"))){const t=this.properties,i=[...v3(t),...y3(t)];for(const o of i)this.createProperty(o,t[o])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,o]of t)this.elementProperties.set(i,o)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const o=this._$Eu(t,i);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const o of i)t.unshift(sh(o))}else e!==void 0&&t.push(sh(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return g3(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var r;const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(o!==void 0&&i.reflect===!0){const s=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:gc).toAttribute(t,i.type);this._$Em=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,t){var r;const i=this.constructor,o=i._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const s=i.getPropertyOptions(o),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((r=s.converter)==null?void 0:r.fromAttribute)!==void 0?s.converter:gc;this._$Em=o,this[o]=a.fromAttribute(t,s.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??Ld)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,s]of this._$Ep)this[r]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[r,s]of o)s.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],s)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(o=>{var r;return(r=o.hostUpdate)==null?void 0:r.call(o)}),this.update(t)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var o;return(o=i.hostUpdated)==null?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}};lo.elementStyles=[],lo.shadowRootOptions={mode:"open"},lo[ms("elementProperties")]=new Map,lo[ms("finalized")]=new Map,Xl==null||Xl({ReactiveElement:lo}),(Li.reactiveElementVersions??(Li.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bs=globalThis,wc=bs.trustedTypes,lh=wc?wc.createPolicy("lit-html",{createHTML:n=>n}):void 0,wf="$lit$",Ii=`lit$${Math.random().toFixed(9).slice(2)}$`,mf="?"+Ii,_3=`<${mf}>`,_r=document,zs=()=>_r.createComment(""),Hs=n=>n===null||typeof n!="object"&&typeof n!="function",bf=Array.isArray,E3=n=>bf(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",Ql=`[ 	
\f\r]`,us=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,uh=/-->/g,dh=/>/g,dr=RegExp(`>|${Ql}(?:([^\\s"'>=/]+)(${Ql}*=${Ql}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),hh=/'/g,ph=/"/g,vf=/^(?:script|style|textarea|title)$/i,yf=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),F=yf(1),J=yf(2),Er=Symbol.for("lit-noChange"),at=Symbol.for("lit-nothing"),fh=new WeakMap,wr=_r.createTreeWalker(_r,129);function xf(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return lh!==void 0?lh.createHTML(e):e}const T3=(n,e)=>{const t=n.length-1,i=[];let o,r=e===2?"<svg>":"",s=us;for(let a=0;a<t;a++){const c=n[a];let l,d,p=-1,f=0;for(;f<c.length&&(s.lastIndex=f,d=s.exec(c),d!==null);)f=s.lastIndex,s===us?d[1]==="!--"?s=uh:d[1]!==void 0?s=dh:d[2]!==void 0?(vf.test(d[2])&&(o=RegExp("</"+d[2],"g")),s=dr):d[3]!==void 0&&(s=dr):s===dr?d[0]===">"?(s=o??us,p=-1):d[1]===void 0?p=-2:(p=s.lastIndex-d[2].length,l=d[1],s=d[3]===void 0?dr:d[3]==='"'?ph:hh):s===ph||s===hh?s=dr:s===uh||s===dh?s=us:(s=dr,o=void 0);const v=s===dr&&n[a+1].startsWith("/>")?" ":"";r+=s===us?c+_3:p>=0?(i.push(l),c.slice(0,p)+wf+c.slice(p)+Ii+v):c+Ii+(p===-2?a:v)}return[xf(n,r+(n[t]||"<?>")+(e===2?"</svg>":"")),i]};let Wu=class Cf{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let r=0,s=0;const a=e.length-1,c=this.parts,[l,d]=T3(e,t);if(this.el=Cf.createElement(l,i),wr.currentNode=this.el.content,t===2){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(o=wr.nextNode())!==null&&c.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const p of o.getAttributeNames())if(p.endsWith(wf)){const f=d[s++],v=o.getAttribute(p).split(Ii),T=/([.?@])?(.*)/.exec(f);c.push({type:1,index:r,name:T[2],strings:v,ctor:T[1]==="."?k3:T[1]==="?"?S3:T[1]==="@"?$3:al}),o.removeAttribute(p)}else p.startsWith(Ii)&&(c.push({type:6,index:r}),o.removeAttribute(p));if(vf.test(o.tagName)){const p=o.textContent.split(Ii),f=p.length-1;if(f>0){o.textContent=wc?wc.emptyScript:"";for(let v=0;v<f;v++)o.append(p[v],zs()),wr.nextNode(),c.push({type:2,index:++r});o.append(p[f],zs())}}}else if(o.nodeType===8)if(o.data===mf)c.push({type:2,index:r});else{let p=-1;for(;(p=o.data.indexOf(Ii,p+1))!==-1;)c.push({type:7,index:r}),p+=Ii.length-1}r++}}static createElement(e,t){const i=_r.createElement("template");return i.innerHTML=e,i}};function Eo(n,e,t=n,i){var s,a;if(e===Er)return e;let o=i!==void 0?(s=t._$Co)==null?void 0:s[i]:t._$Cl;const r=Hs(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==r&&((a=o==null?void 0:o._$AO)==null||a.call(o,!1),r===void 0?o=void 0:(o=new r(n),o._$AT(n,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=o:t._$Cl=o),o!==void 0&&(e=Eo(n,o._$AS(n,e.values),o,i)),e}let A3=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=((e==null?void 0:e.creationScope)??_r).importNode(t,!0);wr.currentNode=o;let r=wr.nextNode(),s=0,a=0,c=i[0];for(;c!==void 0;){if(s===c.index){let l;c.type===2?l=new Ud(r,r.nextSibling,this,e):c.type===1?l=new c.ctor(r,c.name,c.strings,this,e):c.type===6&&(l=new R3(r,this,e)),this._$AV.push(l),c=i[++a]}s!==(c==null?void 0:c.index)&&(r=wr.nextNode(),s++)}return wr.currentNode=_r,o}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},Ud=class _f{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=at,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Eo(this,e,t),Hs(e)?e===at||e==null||e===""?(this._$AH!==at&&this._$AR(),this._$AH=at):e!==this._$AH&&e!==Er&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):E3(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==at&&Hs(this._$AH)?this._$AA.nextSibling.data=e:this.T(_r.createTextNode(e)),this._$AH=e}$(e){var r;const{values:t,_$litType$:i}=e,o=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Wu.createElement(xf(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===o)this._$AH.p(t);else{const s=new A3(o,this),a=s.u(this.options);s.p(t),this.T(a),this._$AH=s}}_$AC(e){let t=fh.get(e.strings);return t===void 0&&fh.set(e.strings,t=new Wu(e)),t}k(e){bf(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const r of e)o===t.length?t.push(i=new _f(this.S(zs()),this.S(zs()),this,this.options)):i=t[o],i._$AI(r),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},al=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,r){this.type=1,this._$AH=at,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=at}_$AI(e,t=this,i,o){const r=this.strings;let s=!1;if(r===void 0)e=Eo(this,e,t,0),s=!Hs(e)||e!==this._$AH&&e!==Er,s&&(this._$AH=e);else{const a=e;let c,l;for(e=r[0],c=0;c<r.length-1;c++)l=Eo(this,a[i+c],t,c),l===Er&&(l=this._$AH[c]),s||(s=!Hs(l)||l!==this._$AH[c]),l===at?e=at:e!==at&&(e+=(l??"")+r[c+1]),this._$AH[c]=l}s&&!o&&this.j(e)}j(e){e===at?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},k3=class extends al{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===at?void 0:e}},S3=class extends al{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==at)}},$3=class extends al{constructor(e,t,i,o,r){super(e,t,i,o,r),this.type=5}_$AI(e,t=this){if((e=Eo(this,e,t,0)??at)===Er)return;const i=this._$AH,o=e===at&&i!==at||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==at&&(i===at||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},R3=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Eo(this,e)}};const eu=bs.litHtmlPolyfillSupport;eu==null||eu(Wu,Ud),(bs.litHtmlVersions??(bs.litHtmlVersions=[])).push("3.1.3");const I3=(n,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let o=i._$litPart$;if(o===void 0){const r=(t==null?void 0:t.renderBefore)??null;i._$litPart$=o=new Ud(e.insertBefore(zs(),r),r,void 0,t??{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let se=class extends lo{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=I3(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Er}};var ip;se._$litElement$=!0,se.finalized=!0,(ip=globalThis.litElementHydrateSupport)==null||ip.call(globalThis,{LitElement:se});const tu=globalThis.litElementPolyfillSupport;tu==null||tu({LitElement:se});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");const Ef=J`<svg class="input_mask" width="328" height="100" viewBox="0 0 328 100" fill="none">
  <mask id="path-1-inside-1_18299_4189">
    <path
      class="input_mask__border"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M138.008 0H40C21.1438 0 11.7157 0 5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H189.992C189.958 4.89122 189.786 7.76279 188.914 10.1564C187.095 15.1562 183.156 19.0947 178.156 20.9145C175.174 22 171.449 22 164 22C156.551 22 152.826 22 149.844 20.9145C144.844 19.0947 140.905 15.1562 139.086 10.1564C138.214 7.76279 138.042 4.89122 138.008 0Z"
    />
  </mask>
  <path
    class="input_mask__background"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M138.008 0H40C21.1438 0 11.7157 0 5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H189.992C189.958 4.89122 189.786 7.76279 188.914 10.1564C187.095 15.1562 183.156 19.0947 178.156 20.9145C175.174 22 171.449 22 164 22C156.551 22 152.826 22 149.844 20.9145C144.844 19.0947 140.905 15.1562 139.086 10.1564C138.214 7.76279 138.042 4.89122 138.008 0Z"
  />
  <path
    class="input_mask__border"
    d="M138.008 0L139.008 -0.00694413L139.001 -1H138.008V0ZM322.142 94.1421L322.849 94.8492H322.849L322.142 94.1421ZM322.142 5.85786L322.849 5.15076L322.849 5.15076L322.142 5.85786ZM189.992 0V-1H188.999L188.992 -0.00694413L189.992 0ZM188.914 10.1564L189.854 10.4984V10.4984L188.914 10.1564ZM178.156 20.9145L177.814 19.9748V19.9748L178.156 20.9145ZM149.844 20.9145L150.186 19.9748V19.9748L149.844 20.9145ZM139.086 10.1564L138.146 10.4984V10.4984L139.086 10.1564ZM40 1H138.008V-1H40V1ZM6.56497 6.56497C9.27713 3.85281 12.8524 2.44064 18.1878 1.72332C23.552 1.00212 30.5436 1 40 1V-1C30.6002 -1 23.4497 -1.00212 17.9213 -0.25885C12.3641 0.488292 8.29646 2.00506 5.15076 5.15076L6.56497 6.56497ZM1 40C1 30.5436 1.00212 23.552 1.72332 18.1878C2.44064 12.8524 3.85281 9.27713 6.56497 6.56497L5.15076 5.15076C2.00506 8.29646 0.488292 12.3641 -0.25885 17.9213C-1.00212 23.4497 -1 30.6002 -1 40H1ZM1 60V40H-1V60H1ZM6.56497 93.435C3.85281 90.7229 2.44064 87.1476 1.72332 81.8122C1.00212 76.448 1 69.4564 1 60H-1C-1 69.3998 -1.00212 76.5503 -0.25885 82.0787C0.488292 87.6358 2.00506 91.7035 5.15076 94.8492L6.56497 93.435ZM40 99C30.5436 99 23.552 98.9979 18.1878 98.2767C12.8524 97.5594 9.27713 96.1472 6.56497 93.435L5.15076 94.8492C8.29646 97.9949 12.3641 99.5117 17.9213 100.259C23.4497 101.002 30.6002 101 40 101V99ZM288 99H40V101H288V99ZM321.435 93.435C318.723 96.1472 315.148 97.5594 309.812 98.2767C304.448 98.9979 297.456 99 288 99V101C297.4 101 304.55 101.002 310.079 100.259C315.636 99.5117 319.704 97.9949 322.849 94.8492L321.435 93.435ZM327 60C327 69.4564 326.998 76.448 326.277 81.8122C325.559 87.1476 324.147 90.7229 321.435 93.435L322.849 94.8492C325.995 91.7035 327.512 87.6358 328.259 82.0787C329.002 76.5503 329 69.3998 329 60H327ZM327 40V60H329V40H327ZM321.435 6.56497C324.147 9.27713 325.559 12.8524 326.277 18.1878C326.998 23.552 327 30.5436 327 40H329C329 30.6002 329.002 23.4497 328.259 17.9213C327.512 12.3642 325.995 8.29646 322.849 5.15076L321.435 6.56497ZM288 1C297.456 1 304.448 1.00212 309.812 1.72332C315.148 2.44064 318.723 3.85281 321.435 6.56497L322.849 5.15076C319.704 2.00506 315.636 0.488292 310.079 -0.25885C304.55 -1.00212 297.4 -1 288 -1V1ZM189.992 1H288V-1H189.992V1ZM188.992 -0.00694413C188.958 4.90792 188.778 7.60788 187.975 9.81434L189.854 10.4984C190.793 7.9177 190.958 4.87452 190.992 0.00694413L188.992 -0.00694413ZM187.975 9.81434C186.256 14.5364 182.536 18.2561 177.814 19.9748L178.498 21.8542C183.776 19.9333 187.933 15.7759 189.854 10.4984L187.975 9.81434ZM177.814 19.9748C175.039 20.9848 171.536 21 164 21V23C171.362 23 175.308 23.0152 178.498 21.8542L177.814 19.9748ZM164 21C156.464 21 152.961 20.9848 150.186 19.9748L149.502 21.8542C152.692 23.0152 156.638 23 164 23V21ZM150.186 19.9748C145.464 18.2561 141.744 14.5364 140.025 9.81434L138.146 10.4984C140.067 15.7759 144.224 19.9333 149.502 21.8542L150.186 19.9748ZM140.025 9.81434C139.222 7.60788 139.042 4.90792 139.008 -0.00694413L137.008 0.00694413C137.042 4.87452 137.207 7.9177 138.146 10.4984L140.025 9.81434Z"
    mask="url(#path-1-inside-1_18299_4189)"
  />
</svg>`,Tf=J`<svg class="input_mask" width="328" height="100" viewBox="0 0 328 100" fill="none">
  <mask id="path-1-inside-1_18299_4168">
    <path
      class="input_mask__border"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H138.008C138.042 95.1088 138.214 92.2372 139.086 89.8436C140.905 84.8438 144.844 80.9053 149.844 79.0855C152.826 78 156.551 78 164 78C171.449 78 175.174 78 178.156 79.0855C183.156 80.9053 187.095 84.8438 188.914 89.8436C189.786 92.2372 189.958 95.1088 189.992 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H40C21.1438 0 11.7157 0 5.85786 5.85786Z"
    />
  </mask>
  <path
    class="input_mask__background"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H138.008C138.042 95.1088 138.214 92.2372 139.086 89.8436C140.905 84.8438 144.844 80.9053 149.844 79.0855C152.826 78 156.551 78 164 78C171.449 78 175.174 78 178.156 79.0855C183.156 80.9053 187.095 84.8438 188.914 89.8436C189.786 92.2372 189.958 95.1088 189.992 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H40C21.1438 0 11.7157 0 5.85786 5.85786Z"
  />
  <path
    class="input_mask__border"
    d="M138.008 100V101H139.001L139.008 100.007L138.008 100ZM139.086 89.8436L138.146 89.5016L139.086 89.8436ZM149.844 79.0855L150.186 80.0252L149.844 79.0855ZM178.156 79.0855L177.814 80.0252L178.156 79.0855ZM188.914 89.8436L189.854 89.5016L188.914 89.8436ZM189.992 100L188.992 100.007L188.999 101H189.992V100ZM322.142 94.1421L322.849 94.8492H322.849L322.142 94.1421ZM322.142 5.85786L322.849 5.15076L322.849 5.15076L322.142 5.85786ZM1 40C1 30.5436 1.00212 23.552 1.72332 18.1878C2.44064 12.8524 3.85281 9.27713 6.56497 6.56497L5.15076 5.15076C2.00506 8.29646 0.488292 12.3641 -0.25885 17.9213C-1.00212 23.4497 -1 30.6002 -1 40H1ZM1 60V40H-1V60H1ZM6.56497 93.435C3.85281 90.7229 2.44064 87.1476 1.72332 81.8122C1.00212 76.448 1 69.4564 1 60H-1C-1 69.3998 -1.00212 76.5503 -0.25885 82.0787C0.488292 87.6358 2.00506 91.7035 5.15076 94.8492L6.56497 93.435ZM40 99C30.5436 99 23.552 98.9979 18.1878 98.2767C12.8524 97.5594 9.27713 96.1472 6.56497 93.435L5.15076 94.8492C8.29646 97.9949 12.3641 99.5117 17.9213 100.259C23.4497 101.002 30.6002 101 40 101V99ZM138.008 99H40V101H138.008V99ZM139.008 100.007C139.042 95.0921 139.222 92.3921 140.025 90.1857L138.146 89.5016C137.207 92.0823 137.042 95.1255 137.008 99.9931L139.008 100.007ZM140.025 90.1857C141.744 85.4636 145.464 81.7439 150.186 80.0252L149.502 78.1458C144.224 80.0667 140.067 84.2241 138.146 89.5016L140.025 90.1857ZM150.186 80.0252C152.961 79.0152 156.464 79 164 79V77C156.638 77 152.692 76.9848 149.502 78.1458L150.186 80.0252ZM164 79C171.536 79 175.039 79.0152 177.814 80.0252L178.498 78.1458C175.308 76.9848 171.362 77 164 77V79ZM177.814 80.0252C182.536 81.7439 186.256 85.4636 187.975 90.1857L189.854 89.5016C187.933 84.2241 183.776 80.0667 178.498 78.1458L177.814 80.0252ZM187.975 90.1857C188.778 92.3921 188.958 95.0921 188.992 100.007L190.992 99.9931C190.958 95.1255 190.793 92.0823 189.854 89.5016L187.975 90.1857ZM288 99H189.992V101H288V99ZM321.435 93.435C318.723 96.1472 315.148 97.5594 309.812 98.2767C304.448 98.9979 297.456 99 288 99V101C297.4 101 304.55 101.002 310.079 100.259C315.636 99.5117 319.704 97.9949 322.849 94.8492L321.435 93.435ZM327 60C327 69.4564 326.998 76.448 326.277 81.8122C325.559 87.1476 324.147 90.7229 321.435 93.435L322.849 94.8492C325.995 91.7035 327.512 87.6358 328.259 82.0787C329.002 76.5503 329 69.3998 329 60H327ZM327 40V60H329V40H327ZM321.435 6.56497C324.147 9.27713 325.559 12.8524 326.277 18.1878C326.998 23.552 327 30.5436 327 40H329C329 30.6002 329.002 23.4497 328.259 17.9213C327.512 12.3642 325.995 8.29646 322.849 5.15076L321.435 6.56497ZM288 1C297.456 1 304.448 1.00212 309.812 1.72332C315.148 2.44064 318.723 3.85281 321.435 6.56497L322.849 5.15076C319.704 2.00506 315.636 0.488292 310.079 -0.25885C304.55 -1.00212 297.4 -1 288 -1V1ZM40 1H288V-1H40V1ZM6.56497 6.56497C9.27713 3.85281 12.8524 2.44064 18.1878 1.72332C23.552 1.00212 30.5436 1 40 1V-1C30.6002 -1 23.4497 -1.00212 17.9213 -0.25885C12.3641 0.488292 8.29646 2.00506 5.15076 5.15076L6.56497 6.56497Z"
    mask="url(#path-1-inside-1_18299_4168)"
  />
</svg>`;let vs,Ui,ji;function Af(n,e){vs=document.createElement("style"),Ui=document.createElement("style"),ji=document.createElement("style"),vs.textContent=wo(n).core.cssText,Ui.textContent=wo(n).dark.cssText,ji.textContent=wo(n).light.cssText,document.head.appendChild(vs),document.head.appendChild(Ui),document.head.appendChild(ji),jd(e)}function jd(n){Ui&&ji&&(n==="light"?(Ui.removeAttribute("media"),ji.media="enabled"):(ji.removeAttribute("media"),Ui.media="enabled"))}function kf(n){vs&&Ui&&ji&&(vs.textContent=wo(n).core.cssText,Ui.textContent=wo(n).dark.cssText,ji.textContent=wo(n).light.cssText)}function wo(n){return{core:re`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      :root {
        --w3m-color-mix-strength: ${jn(n!=null&&n["--w3m-color-mix-strength"]?`${n["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${jn((n==null?void 0:n["--w3m-font-family"])||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${jn((n==null?void 0:n["--w3m-font-size-master"])||"10px")};
        --w3m-border-radius-master: ${jn((n==null?void 0:n["--w3m-border-radius-master"])||"4px")};
        --w3m-z-index: ${jn((n==null?void 0:n["--w3m-z-index"])||999)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:re`
      :root {
        --w3m-color-mix: ${jn((n==null?void 0:n["--w3m-color-mix"])||"#fff")};
        --w3m-accent: ${jn((n==null?void 0:n["--w3m-accent"])||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-gray-glass-090: rgba(255, 255, 255, 0.9);
      }
    `,dark:re`
      :root {
        --w3m-color-mix: ${jn((n==null?void 0:n["--w3m-color-mix"])||"#000")};
        --w3m-accent: ${jn((n==null?void 0:n["--w3m-accent"])||"#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-gray-glass-090: rgba(0, 0, 0, 0.9);
      }
    `}}const de=re`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,Oe=re`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, color;
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,Wd=re`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function P3(n,e){const{kind:t,elements:i}=e;return{kind:t,elements:i,finisher(o){customElements.get(n)||customElements.define(n,o)}}}function O3(n,e){return customElements.get(n)||customElements.define(n,e),e}function V(n){return function(t){return typeof t=="function"?O3(n,t):P3(n,t)}}const N3=re`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;var M3=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let mc=class extends se{render(){return F`<slot></slot>`}};mc.styles=[de,N3];mc=M3([V("wui-card")],mc);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B3={attribute:!0,type:String,converter:gc,reflect:!1,hasChanged:Ld},D3=(n=B3,e,t)=>{const{kind:i,metadata:o}=t;let r=globalThis.litPropertyMetadata.get(o);if(r===void 0&&globalThis.litPropertyMetadata.set(o,r=new Map),r.set(t.name,n),i==="accessor"){const{name:s}=t;return{set(a){const c=e.get.call(this);e.set.call(this,a),this.requestUpdate(s,c,n)},init(a){return a!==void 0&&this.P(s,void 0,n),a}}}if(i==="setter"){const{name:s}=t;return function(a){const c=this[s];e.call(this,a),this.requestUpdate(s,c,n)}}throw Error("Unsupported decorator location: "+i)};function C(n){return(e,t)=>typeof t=="object"?D3(n,e,t):((i,o,r)=>{const s=o.hasOwnProperty(r);return o.constructor.createProperty(r,s?{...i,wrapped:!0}:i),s?Object.getOwnPropertyDescriptor(o,r):void 0})(n,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Fd(n){return C({...n,state:!0,attribute:!1})}const L3=re`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,U3=J`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,j3=J`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10.5 2.42908C6.31875 2.42908 2.92859 5.81989 2.92859 10.0034C2.92859 14.1869 6.31875 17.5777 10.5 17.5777C14.6813 17.5777 18.0714 14.1869 18.0714 10.0034C18.0714 5.81989 14.6813 2.42908 10.5 2.42908ZM0.928589 10.0034C0.928589 4.71596 5.21355 0.429077 10.5 0.429077C15.7865 0.429077 20.0714 4.71596 20.0714 10.0034C20.0714 15.2908 15.7865 19.5777 10.5 19.5777C5.21355 19.5777 0.928589 15.2908 0.928589 10.0034ZM10.5 5.75003C11.0523 5.75003 11.5 6.19774 11.5 6.75003L11.5 10.8343L12.7929 9.54137C13.1834 9.15085 13.8166 9.15085 14.2071 9.54137C14.5976 9.9319 14.5976 10.5651 14.2071 10.9556L11.2071 13.9556C10.8166 14.3461 10.1834 14.3461 9.79291 13.9556L6.79291 10.9556C6.40239 10.5651 6.40239 9.9319 6.79291 9.54137C7.18343 9.15085 7.8166 9.15085 8.20712 9.54137L9.50002 10.8343L9.50002 6.75003C9.50002 6.19774 9.94773 5.75003 10.5 5.75003Z"
    clip-rule="evenodd"
  /></svg
>`,W3=J`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,F3=J`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,z3=J`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,H3=J`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,V3=J`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Z3=J`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,G3=J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,q3=J`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="12"
  viewBox="0 0 12 12"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M10.537 2.34245C10.8997 2.64654 10.9471 3.187 10.6429 3.54959L5.61072 9.54757C5.45645 9.73144 5.23212 9.84222 4.99229 9.85295C4.75247 9.86368 4.51914 9.77337 4.34906 9.60401L1.40881 6.6761C1.07343 6.34213 1.07238 5.7996 1.40647 5.46433C1.74055 5.12906 2.28326 5.12801 2.61865 5.46198L4.89731 7.73108L9.32942 2.44834C9.63362 2.08576 10.1743 2.03835 10.537 2.34245Z"
    fill="currentColor"
  /></svg
>`,Y3=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,K3=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,J3=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,X3=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,Q3=J`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,e5=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,t5=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,n5=J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,i5=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,r5=J`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9.21498 1.28565H10.5944C11.1458 1.28562 11.6246 1.2856 12.0182 1.32093C12.4353 1.35836 12.853 1.44155 13.2486 1.66724C13.7005 1.92498 14.0749 2.29935 14.3326 2.75122C14.5583 3.14689 14.6415 3.56456 14.6789 3.9817C14.7143 4.37531 14.7142 4.85403 14.7142 5.40545V6.78489C14.7142 7.33631 14.7143 7.81503 14.6789 8.20865C14.6415 8.62578 14.5583 9.04345 14.3326 9.43912C14.0749 9.89099 13.7005 10.2654 13.2486 10.5231C12.853 10.7488 12.4353 10.832 12.0182 10.8694C11.7003 10.8979 11.3269 10.9034 10.9045 10.9045C10.9034 11.3269 10.8979 11.7003 10.8694 12.0182C10.832 12.4353 10.7488 12.853 10.5231 13.2486C10.2654 13.7005 9.89099 14.0749 9.43912 14.3326C9.04345 14.5583 8.62578 14.6415 8.20865 14.6789C7.81503 14.7143 7.33631 14.7142 6.78489 14.7142H5.40545C4.85403 14.7142 4.37531 14.7143 3.9817 14.6789C3.56456 14.6415 3.14689 14.5583 2.75122 14.3326C2.29935 14.0749 1.92498 13.7005 1.66724 13.2486C1.44155 12.853 1.35836 12.4353 1.32093 12.0182C1.2856 11.6246 1.28562 11.1458 1.28565 10.5944V9.21498C1.28562 8.66356 1.2856 8.18484 1.32093 7.79122C1.35836 7.37409 1.44155 6.95642 1.66724 6.56074C1.92498 6.10887 2.29935 5.73451 2.75122 5.47677C3.14689 5.25108 3.56456 5.16789 3.9817 5.13045C4.2996 5.10192 4.67301 5.09645 5.09541 5.09541C5.09645 4.67302 5.10192 4.2996 5.13045 3.9817C5.16789 3.56456 5.25108 3.14689 5.47676 2.75122C5.73451 2.29935 6.10887 1.92498 6.56074 1.66724C6.95642 1.44155 7.37409 1.35836 7.79122 1.32093C8.18484 1.2856 8.66356 1.28562 9.21498 1.28565ZM5.09541 7.09552C4.68397 7.09667 4.39263 7.10161 4.16046 7.12245C3.88053 7.14757 3.78516 7.18949 3.74214 7.21403C3.60139 7.29431 3.48478 7.41091 3.4045 7.55166C3.37997 7.59468 3.33804 7.69005 3.31292 7.96999C3.28659 8.26345 3.28565 8.65147 3.28565 9.25708V10.5523C3.28565 11.1579 3.28659 11.5459 3.31292 11.8394C3.33804 12.1193 3.37997 12.2147 3.4045 12.2577C3.48478 12.3985 3.60139 12.5151 3.74214 12.5954C3.78516 12.6199 3.88053 12.6618 4.16046 12.6869C4.45393 12.7133 4.84195 12.7142 5.44755 12.7142H6.74279C7.3484 12.7142 7.73641 12.7133 8.02988 12.6869C8.30981 12.6618 8.40518 12.6199 8.44821 12.5954C8.58895 12.5151 8.70556 12.3985 8.78584 12.2577C8.81038 12.2147 8.8523 12.1193 8.87742 11.8394C8.89825 11.6072 8.90319 11.3159 8.90435 10.9045C8.48219 10.9034 8.10898 10.8979 7.79122 10.8694C7.37409 10.832 6.95641 10.7488 6.56074 10.5231C6.10887 10.2654 5.73451 9.89099 5.47676 9.43912C5.25108 9.04345 5.16789 8.62578 5.13045 8.20865C5.10194 7.89089 5.09645 7.51767 5.09541 7.09552ZM7.96999 3.31292C7.69005 3.33804 7.59468 3.37997 7.55166 3.4045C7.41091 3.48478 7.29431 3.60139 7.21403 3.74214C7.18949 3.78516 7.14757 3.88053 7.12245 4.16046C7.09611 4.45393 7.09517 4.84195 7.09517 5.44755V6.74279C7.09517 7.3484 7.09611 7.73641 7.12245 8.02988C7.14757 8.30981 7.18949 8.40518 7.21403 8.4482C7.29431 8.58895 7.41091 8.70556 7.55166 8.78584C7.59468 8.81038 7.69005 8.8523 7.96999 8.87742C8.26345 8.90376 8.65147 8.9047 9.25708 8.9047H10.5523C11.1579 8.9047 11.5459 8.90376 11.8394 8.87742C12.1193 8.8523 12.2147 8.81038 12.2577 8.78584C12.3985 8.70556 12.5151 8.58895 12.5954 8.4482C12.6199 8.40518 12.6618 8.30981 12.6869 8.02988C12.7133 7.73641 12.7142 7.3484 12.7142 6.74279V5.44755C12.7142 4.84195 12.7133 4.45393 12.6869 4.16046C12.6618 3.88053 12.6199 3.78516 12.5954 3.74214C12.5151 3.60139 12.3985 3.48478 12.2577 3.4045C12.2147 3.37997 12.1193 3.33804 11.8394 3.31292C11.5459 3.28659 11.1579 3.28565 10.5523 3.28565H9.25708C8.65147 3.28565 8.26345 3.28659 7.96999 3.31292Z"
    fill="#788181"
  /></svg
>`,o5=J`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.0023 0.875C7.48571 0.875 7.8776 1.26675 7.8776 1.75V6.125H12.2541C12.7375 6.125 13.1294 6.51675 13.1294 7C13.1294 7.48325 12.7375 7.875 12.2541 7.875H7.8776V12.25C7.8776 12.7332 7.48571 13.125 7.0023 13.125C6.51889 13.125 6.12701 12.7332 6.12701 12.25V7.875H1.75054C1.26713 7.875 0.875244 7.48325 0.875244 7C0.875244 6.51675 1.26713 6.125 1.75054 6.125H6.12701V1.75C6.12701 1.26675 6.51889 0.875 7.0023 0.875Z"
    fill="#47A1FF"
  /></svg
>`,s5=J` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,a5=J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,c5=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,l5=J`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,u5=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,d5=J`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,h5=J`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,p5=J`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,f5=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,g5=J`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,w5=J`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,m5=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,b5=J`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,v5=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,y5=J`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,x5=J`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,C5=J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,_5=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,E5=J` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,T5=J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,A5=J`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,k5=J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,S5=J`<svg fill="none" viewBox="0 0 21 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.3808 4.34812C13.72 4.47798 12.8501 4.7587 11.5748 5.17296L9.00869 6.00646C6.90631 6.68935 5.40679 7.17779 4.38121 7.63178C3.87166 7.85734 3.5351 8.05091 3.32022 8.22035C3.11183 8.38466 3.07011 8.48486 3.05969 8.51817C2.98058 8.77103 2.98009 9.04195 3.05831 9.29509C3.06861 9.32844 3.10998 9.42878 3.31777 9.59384C3.53205 9.76404 3.86792 9.95881 4.37667 10.1862C5.29287 10.5957 6.58844 11.0341 8.35529 11.6164L10.8876 8.59854C11.2426 8.17547 11.8733 8.12028 12.2964 8.47528C12.7195 8.83029 12.7746 9.46104 12.4196 9.88412L9.88738 12.9019C10.7676 14.5408 11.4244 15.7406 11.9867 16.5718C12.299 17.0333 12.5491 17.3303 12.7539 17.5117C12.9526 17.6877 13.0586 17.711 13.0932 17.7154C13.3561 17.7484 13.6228 17.7009 13.8581 17.5791C13.8891 17.563 13.9805 17.5046 14.1061 17.2708C14.2357 17.0298 14.3679 16.6647 14.5015 16.1237C14.7705 15.0349 14.9912 13.4733 15.2986 11.2843L15.6738 8.61249C15.8603 7.28456 15.9857 6.37917 15.9989 5.7059C16.012 5.03702 15.9047 4.8056 15.8145 4.69183C15.7044 4.55297 15.5673 4.43792 15.4114 4.35365C15.2837 4.28459 15.0372 4.2191 14.3808 4.34812ZM7.99373 13.603C6.11919 12.9864 4.6304 12.4902 3.5606 12.0121C2.98683 11.7557 2.4778 11.4808 2.07383 11.1599C1.66337 10.8339 1.31312 10.4217 1.14744 9.88551C0.949667 9.24541 0.950886 8.56035 1.15094 7.92096C1.31852 7.38534 1.67024 6.97442 2.08185 6.64985C2.48697 6.33041 2.99697 6.05734 3.57166 5.80295C4.70309 5.3021 6.30179 4.78283 8.32903 4.12437L11.0196 3.25042C12.2166 2.86159 13.2017 2.54158 13.9951 2.38566C14.8065 2.22618 15.6202 2.19289 16.3627 2.59437C16.7568 2.80747 17.1035 3.09839 17.3818 3.4495C17.9062 4.111 18.0147 4.91815 17.9985 5.74496C17.9827 6.55332 17.8386 7.57903 17.6636 8.82534L17.2701 11.6268C16.9737 13.7376 16.7399 15.4022 16.4432 16.6034C16.2924 17.2135 16.1121 17.7632 15.8678 18.2176C15.6197 18.6794 15.2761 19.0971 14.7777 19.3551C14.1827 19.6632 13.5083 19.7833 12.8436 19.6997C12.2867 19.6297 11.82 19.3563 11.4277 19.0087C11.0415 18.6666 10.6824 18.213 10.3302 17.6925C9.67361 16.722 8.92648 15.342 7.99373 13.603Z"
    clip-rule="evenodd"
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
  ></svg></svg
>`,$5=J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,R5=J`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,I5=J`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13.7306 3.24213C14.0725 3.58384 14.0725 4.13786 13.7306 4.47957L10.7418 7.46737C10.4 7.80908 9.84581 7.80908 9.50399 7.46737C9.16216 7.12567 9.16216 6.57165 9.50399 6.22994L10.9986 4.73585H5.34082C4.85741 4.73585 4.46553 4.3441 4.46553 3.86085C4.46553 3.3776 4.85741 2.98585 5.34082 2.98585L10.9986 2.98585L9.50399 1.49177C9.16216 1.15006 9.16216 0.596037 9.50399 0.254328C9.84581 -0.0873803 10.4 -0.0873803 10.7418 0.254328L13.7306 3.24213ZM9.52515 10.1352C9.52515 10.6185 9.13327 11.0102 8.64986 11.0102L2.9921 11.0102L4.48669 12.5043C4.82852 12.846 4.82852 13.4001 4.48669 13.7418C4.14487 14.0835 3.59066 14.0835 3.24884 13.7418L0.26003 10.754C0.0958806 10.5899 0.0036621 10.3673 0.00366211 10.1352C0.00366212 9.90318 0.0958806 9.68062 0.26003 9.51652L3.24884 6.52872C3.59066 6.18701 4.14487 6.18701 4.48669 6.52872C4.82851 6.87043 4.82851 7.42445 4.48669 7.76616L2.9921 9.26024L8.64986 9.26024C9.13327 9.26024 9.52515 9.65199 9.52515 10.1352Z"
    fill="currentColor"
  />
</svg>

`,P5=J`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path 
    fill="currentColor"
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M8.3071 0.292893C8.69763 0.683417 8.69763 1.31658 8.3071 1.70711L6.41421 3.6H11.3404C13.8368 3.6 16.0533 5.1975 16.8427 7.56588L16.9487 7.88377C17.1233 8.40772 16.8402 8.97404 16.3162 9.14868C15.7923 9.32333 15.226 9.04017 15.0513 8.51623L14.9453 8.19834C14.4281 6.64664 12.976 5.6 11.3404 5.6H6.41421L8.3071 7.49289C8.69763 7.88342 8.69763 8.51658 8.3071 8.90711C7.91658 9.29763 7.28341 9.29763 6.89289 8.90711L3.29289 5.30711C2.90236 4.91658 2.90236 4.28342 3.29289 3.89289L6.89289 0.292893C7.28341 -0.0976311 7.91658 -0.0976311 8.3071 0.292893ZM3.68377 10.8513C4.20771 10.6767 4.77403 10.9598 4.94868 11.4838L5.05464 11.8017C5.57188 13.3534 7.024 14.4 8.65964 14.4L13.5858 14.4L11.6929 12.5071C11.3024 12.1166 11.3024 11.4834 11.6929 11.0929C12.0834 10.7024 12.7166 10.7024 13.1071 11.0929L16.7071 14.6929C17.0976 15.0834 17.0976 15.7166 16.7071 16.1071L13.1071 19.7071C12.7166 20.0976 12.0834 20.0976 11.6929 19.7071C11.3024 19.3166 11.3024 18.6834 11.6929 18.2929L13.5858 16.4L8.65964 16.4C6.16314 16.4 3.94674 14.8025 3.15728 12.4341L3.05131 12.1162C2.87667 11.5923 3.15983 11.026 3.68377 10.8513Z" 
  />
</svg>`,O5=J`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,N5=J`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,M5=J`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,B5=J`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,D5=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,L5=J`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`,U5=J`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`,j5=J`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,W5=J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,F5=J`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,z5=J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`,H5=J`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    d="M8.8071 0.292893C9.19763 0.683417 9.19763 1.31658 8.8071 1.70711L6.91421 3.6H11.8404C14.3368 3.6 16.5533 5.1975 17.3427 7.56588L17.4487 7.88377C17.6233 8.40772 17.3402 8.97404 16.8162 9.14868C16.2923 9.32333 15.726 9.04017 15.5513 8.51623L15.4453 8.19834C14.9281 6.64664 13.476 5.6 11.8404 5.6H6.91421L8.8071 7.49289C9.19763 7.88342 9.19763 8.51658 8.8071 8.90711C8.41658 9.29763 7.78341 9.29763 7.39289 8.90711L3.79289 5.30711C3.40236 4.91658 3.40236 4.28342 3.79289 3.89289L7.39289 0.292893C7.78341 -0.0976311 8.41658 -0.0976311 8.8071 0.292893ZM4.18377 10.8513C4.70771 10.6767 5.27403 10.9598 5.44868 11.4838L5.55464 11.8017C6.07188 13.3534 7.52401 14.4 9.15964 14.4L14.0858 14.4L12.1929 12.5071C11.8024 12.1166 11.8024 11.4834 12.1929 11.0929C12.5834 10.7024 13.2166 10.7024 13.6071 11.0929L17.2071 14.6929C17.5976 15.0834 17.5976 15.7166 17.2071 16.1071L13.6071 19.7071C13.2166 20.0976 12.5834 20.0976 12.1929 19.7071C11.8024 19.3166 11.8024 18.6834 12.1929 18.2929L14.0858 16.4L9.15964 16.4C6.66314 16.4 4.44674 14.8025 3.65728 12.4341L3.55131 12.1162C3.37667 11.5923 3.65983 11.026 4.18377 10.8513Z"
  /></svg
>`,V5=J`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.61391 1.57124C5.85142 1.42873 6.14813 1.42873 6.38564 1.57124L11.0793 4.38749C11.9179 4.89067 11.5612 6.17864 10.5832 6.17864H9.96398V10.0358H10.2854C10.6996 10.0358 11.0354 10.3716 11.0354 10.7858C11.0354 11.2 10.6996 11.5358 10.2854 11.5358H1.71416C1.29995 11.5358 0.964172 11.2 0.964172 10.7858C0.964172 10.3716 1.29995 10.0358 1.71416 10.0358H2.03558L2.03558 6.17864H1.41637C0.438389 6.17864 0.0816547 4.89066 0.920263 4.38749L5.61391 1.57124ZM3.53554 6.17864V10.0358H5.24979V6.17864H3.53554ZM6.74976 6.17864V10.0358H8.46401V6.17864H6.74976ZM8.64913 4.67864H3.35043L5.99978 3.089L8.64913 4.67864Z"
    fill="currentColor"
  /></svg
>`,Z5=J`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4.16072 2C4.17367 2 4.18665 2 4.19968 2L7.83857 2C8.36772 1.99998 8.82398 1.99996 9.19518 2.04018C9.5895 2.0829 9.97577 2.17811 10.3221 2.42971C10.5131 2.56849 10.6811 2.73647 10.8198 2.92749C11.0714 3.27379 11.1666 3.66007 11.2094 4.0544C11.2496 4.42561 11.2496 4.88188 11.2495 5.41105V7.58896C11.2496 8.11812 11.2496 8.57439 11.2094 8.94561C11.1666 9.33994 11.0714 9.72621 10.8198 10.0725C10.6811 10.2635 10.5131 10.4315 10.3221 10.5703C9.97577 10.8219 9.5895 10.9171 9.19518 10.9598C8.82398 11 8.36772 11 7.83856 11H4.16073C3.63157 11 3.17531 11 2.80411 10.9598C2.40979 10.9171 2.02352 10.8219 1.67722 10.5703C1.48621 10.4315 1.31824 10.2635 1.17946 10.0725C0.927858 9.72621 0.832652 9.33994 0.78993 8.94561C0.749713 8.5744 0.749733 8.11813 0.749757 7.58896L0.749758 5.45C0.749758 5.43697 0.749758 5.42399 0.749757 5.41104C0.749733 4.88188 0.749713 4.42561 0.78993 4.0544C0.832652 3.66007 0.927858 3.27379 1.17946 2.92749C1.31824 2.73647 1.48621 2.56849 1.67722 2.42971C2.02352 2.17811 2.40979 2.0829 2.80411 2.04018C3.17531 1.99996 3.63157 1.99998 4.16072 2ZM2.96567 3.53145C2.69897 3.56034 2.60687 3.60837 2.55888 3.64324C2.49521 3.6895 2.43922 3.74549 2.39296 3.80916C2.35809 3.85715 2.31007 3.94926 2.28117 4.21597C2.26629 4.35335 2.25844 4.51311 2.25431 4.70832H9.74498C9.74085 4.51311 9.733 4.35335 9.71812 4.21597C9.68922 3.94926 9.6412 3.85715 9.60633 3.80916C9.56007 3.74549 9.50408 3.6895 9.44041 3.64324C9.39242 3.60837 9.30031 3.56034 9.03362 3.53145C8.75288 3.50103 8.37876 3.5 7.79961 3.5H4.19968C3.62053 3.5 3.24641 3.50103 2.96567 3.53145ZM9.74956 6.20832H2.24973V7.55C2.24973 8.12917 2.25076 8.5033 2.28117 8.78404C2.31007 9.05074 2.35809 9.14285 2.39296 9.19084C2.43922 9.25451 2.49521 9.31051 2.55888 9.35677C2.60687 9.39163 2.69897 9.43966 2.96567 9.46856C3.24641 9.49897 3.62053 9.5 4.19968 9.5H7.79961C8.37876 9.5 8.75288 9.49897 9.03362 9.46856C9.30032 9.43966 9.39242 9.39163 9.44041 9.35677C9.50408 9.31051 9.56007 9.25451 9.60633 9.19084C9.6412 9.14285 9.68922 9.05075 9.71812 8.78404C9.74854 8.5033 9.74956 8.12917 9.74956 7.55V6.20832ZM6.74963 8C6.74963 7.58579 7.08541 7.25 7.49961 7.25H8.2496C8.6638 7.25 8.99958 7.58579 8.99958 8C8.99958 8.41422 8.6638 8.75 8.2496 8.75H7.49961C7.08541 8.75 6.74963 8.41422 6.74963 8Z"
    fill="currentColor"
  /></svg
>`,G5=J`<svg
  width="13"
  height="12"
  viewBox="0 0 13 12"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M0.794373 5.99982C0.794373 5.52643 1.17812 5.14268 1.6515 5.14268H5.643V1.15109C5.643 0.677701 6.02675 0.293946 6.50012 0.293945C6.9735 0.293946 7.35725 0.677701 7.35725 1.15109V5.14268H11.3488C11.8221 5.14268 12.2059 5.52643 12.2059 5.99982C12.2059 6.47321 11.8221 6.85696 11.3488 6.85696H7.35725V10.8486C7.35725 11.3219 6.9735 11.7057 6.50012 11.7057C6.02675 11.7057 5.643 11.3219 5.643 10.8486V6.85696H1.6515C1.17812 6.85696 0.794373 6.47321 0.794373 5.99982Z"
  /></svg
>`,q5=J`<svg fill="none" viewBox="0 0 14 6">
  <path style="fill: var(--wui-color-bg-150);" d="M0 1h14L9.21 5.12a3.31 3.31 0 0 1-4.49 0L0 1Z" />
  <path
    style="stroke: var(--wui-color-inverse-100);"
    stroke-opacity=".05"
    d="M1.33 1.5h11.32L8.88 4.75l-.01.01a2.81 2.81 0 0 1-3.8 0l-.02-.01L1.33 1.5Z"
  />
  <path
    style="fill: var(--wui-color-bg-150);"
    d="M1.25.71h11.5L9.21 3.88a3.31 3.31 0 0 1-4.49 0L1.25.71Z"
  />
</svg> `,Y5=J`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.9576 2.23383C13.3807 2.58873 13.4361 3.21947 13.0812 3.64263L6.37159 11.6426C6.19161 11.8572 5.92989 11.9865 5.65009 11.999C5.3703 12.0115 5.09808 11.9062 4.89965 11.7085L0.979321 7.80331C0.588042 7.41354 0.586817 6.78038 0.976585 6.3891C1.36635 5.99782 1.99952 5.99659 2.3908 6.38636L5.53928 9.52268L11.5488 2.35742C11.9037 1.93426 12.5344 1.87893 12.9576 2.23383Z"
    clip-rule="evenodd"
  />
</svg>`;var cl=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};const K5={add:o5,allWallets:U3,arrowBottomCircle:j3,appStore:W3,apple:F3,arrowBottom:z3,arrowLeft:H3,arrowRight:V3,arrowTop:Z3,bank:V5,browser:G3,card:Z5,checkmark:q3,checkmarkBold:Y5,chevronBottom:Y3,chevronLeft:K3,chevronRight:J3,chevronTop:X3,chromeStore:Q3,clock:e5,close:t5,compass:i5,coinPlaceholder:n5,copy:r5,cursor:s5,cursorTransparent:q5,desktop:a5,disconnect:c5,discord:l5,etherscan:u5,extension:d5,externalLink:h5,facebook:p5,filters:f5,github:g5,google:w5,helpCircle:m5,infoCircle:b5,mail:v5,mobile:y5,networkPlaceholder:x5,nftPlaceholder:C5,off:_5,playStore:E5,plus:G5,qrCode:T5,recycleHorizontal:H5,refresh:A5,search:k5,send:S5,swapHorizontal:$5,swapHorizontalMedium:I5,swapHorizontalBold:R5,swapHorizontalRoundedBold:P5,swapVertical:O5,telegram:N5,twitch:M5,twitter:B5,twitterIcon:D5,verify:L5,verifyFilled:U5,wallet:W5,walletConnect:F5,walletPlaceholder:j5,warningCircle:z5};let Tr=class extends se{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
    `,F`${K5[this.name]}`}};Tr.styles=[de,Wd,L3];cl([C()],Tr.prototype,"size",void 0);cl([C()],Tr.prototype,"name",void 0);cl([C()],Tr.prototype,"color",void 0);Tr=cl([V("wui-icon")],Tr);const J5=re`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var ll=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Ar=class extends se{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,F`<img src=${this.src} alt=${this.alt} />`}};Ar.styles=[de,Wd,J5];ll([C()],Ar.prototype,"src",void 0);ll([C()],Ar.prototype,"alt",void 0);ll([C()],Ar.prototype,"size",void 0);Ar=ll([V("wui-image")],Ar);const X5=re`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var Q5=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let bc=class extends se{render(){return F`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};bc.styles=[de,X5];bc=Q5([V("wui-loading-hexagon")],bc);const eb=re`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var zd=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let To=class extends se{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,F`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};To.styles=[de,eb];zd([C()],To.prototype,"color",void 0);zd([C()],To.prototype,"size",void 0);To=zd([V("wui-loading-spinner")],To);const tb=re`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var Sf=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Vs=class extends se{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,i=36-e,o=116+i,r=245+i,s=360+i*1.75;return F`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${o} ${r}"
          stroke-dashoffset=${s}
        />
      </svg>
    `}};Vs.styles=[de,tb];Sf([C({type:Number})],Vs.prototype,"radius",void 0);Vs=Sf([V("wui-loading-thumbnail")],Vs);const nb=re`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var ul=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let kr=class extends se{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,F`<slot></slot>`}};kr.styles=[nb];ul([C()],kr.prototype,"width",void 0);ul([C()],kr.prototype,"height",void 0);ul([C()],kr.prototype,"borderRadius",void 0);kr=ul([V("wui-shimmer")],kr);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $f={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Rf=n=>(...e)=>({_$litDirective$:n,values:e});let If=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ib=Rf(class extends If{constructor(n){var e;if(super(n),n.type!==$f.ATTRIBUTE||n.name!=="class"||((e=n.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(n){return" "+Object.keys(n).filter(e=>n[e]).join(" ")+" "}update(n,[e]){var i,o;if(this.st===void 0){this.st=new Set,n.strings!==void 0&&(this.nt=new Set(n.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in e)e[r]&&!((i=this.nt)!=null&&i.has(r))&&this.st.add(r);return this.render(e)}const t=n.element.classList;for(const r of this.st)r in e||(t.remove(r),this.st.delete(r));for(const r in e){const s=!!e[r];s===this.st.has(r)||(o=this.nt)!=null&&o.has(r)||(s?(t.add(r),this.st.add(r)):(t.remove(r),this.st.delete(r)))}return Er}}),rb=re`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-title-600 {
    font-size: var(--wui-font-size-medium-title);
    letter-spacing: var(--wui-letter-spacing-medium-title);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`;var dl=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Sr=class extends se{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,F`<slot class=${ib(e)}></slot>`}};Sr.styles=[de,rb];dl([C()],Sr.prototype,"variant",void 0);dl([C()],Sr.prototype,"color",void 0);dl([C()],Sr.prototype,"align",void 0);Sr=dl([V("wui-text")],Sr);const ob=J`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,sb=J`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,ab=J`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,cb=J`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,lb=J`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,ub=J`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,db=J`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,hb=J`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,pb=J`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,fb=J`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,gb=J`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,wb=J`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,mb=J`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,bb=J`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <g clip-path="url(#clip0_187_29)">
    <path d="M1.18187e-05 15.8055C1.18187e-05 9.8015 -5.19442e-07 6.91338 1.69991e-08 0C4.5 3.72236e-05 9.62249 0 16.5 0L23.5 4.31399e-05C29.9349 4.31399e-05 35.5 0.000206332 40 3.73468e-05C40 2.77754 40 9.36708 40 15.8055V22.8364C40 29.2647 40 33.7962 40 40C31.5 40 29.8337 40 23.4 40H16.6C10.5092 40 6.50004 40 4.04289e-05 40C3.05176e-05 32.2453 1.18187e-05 29.6382 1.18187e-05 22.8364V15.8055Z" fill="#0052FF"/>
    <path d="M20.0236 26.5C16.4342 26.5 13.5236 23.5931 13.5236 20C13.5236 16.4069 16.4342 13.5 20.0236 13.5C23.2411 13.5 25.9134 15.8472 26.4261 18.9167H32.9731C32.4206 12.2433 26.8342 7 20.02 7C12.8411 7 7.02002 12.8211 7.02002 20C7.02002 27.1789 12.8411 33 20.02 33C26.8342 33 32.4206 27.7567 32.9731 21.0833H26.4225C25.9061 24.1528 23.2411 26.5 20.0236 26.5Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_187_29">
      <rect width="40" height="40" fill="white"/>
    </clipPath>
  </defs>
</svg>`,vb=J`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#7D00FF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M28.306 15.381a3.69 3.69 0 1 0 0-7.381 3.69 3.69 0 0 0 0 7.381ZM16.987 32a8.991 8.991 0 1 1 .016-17.983A8.991 8.991 0 0 1 16.988 32Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,yb=J`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#635BFF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.299 15.147c0-1.028.844-1.424 2.242-1.424 2.004 0 4.536.607 6.54 1.688V9.213C24.892 8.343 22.73 8 20.541 8c-5.354 0-8.915 2.796-8.915 7.464 0 7.279 10.022 6.118 10.022 9.257 0 1.213-1.055 1.609-2.531 1.609-2.19 0-4.985-.897-7.2-2.11v6.277a18.283 18.283 0 0 0 7.2 1.503c5.485 0 9.257-2.716 9.257-7.437-.027-7.86-10.075-6.462-10.075-9.416Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,xb=J`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#fff"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M18.606 12.642a.781.781 0 0 0-.771.66l-1.281 8.125a.78.78 0 0 1 .77-.66h3.755a7.668 7.668 0 0 0 7.57-6.49 6.26 6.26 0 0 0 .075-.843c-.96-.504-2.089-.792-3.325-.792h-6.793Z"
        fill="#001C64"
      />
      <path
        d="M28.724 13.434c-.006.282-.03.564-.075.843a7.668 7.668 0 0 1-7.57 6.491h-3.754a.78.78 0 0 0-.771.66l-1.916 12.15a.634.634 0 0 0 .626.734h4.075a.781.781 0 0 0 .77-.66l1.074-6.807a.781.781 0 0 1 .772-.66h2.4a7.668 7.668 0 0 0 7.57-6.491c.415-2.651-.92-5.064-3.201-6.26Z"
        fill="#0070E0"
      />
      <path
        d="M13.977 7.226a.78.78 0 0 0-.771.658l-3.198 20.277a.634.634 0 0 0 .626.733h4.742l1.178-7.467 1.281-8.125a.782.782 0 0 1 .771-.66H25.4c1.237 0 2.364.289 3.325.792.065-3.4-2.74-6.208-6.599-6.208h-8.148Z"
        fill="#003087"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,Cb=J`<svg width="60" height="60" viewBox="0 0 60 60" fill="none">
<g clip-path="url(#clip0_13859_31161)">
  <path d="M0 24.8995C0 15.6481 0 11.0223 1.97053 7.56763C3.3015 5.2342 5.23468 3.30101 7.56812 1.97004C11.0228 -0.000488281 15.6485 -0.000488281 24.9 -0.000488281H35.1C44.3514 -0.000488281 48.9772 -0.000488281 52.4319 1.97004C54.7653 3.30101 56.6985 5.2342 58.0295 7.56763C60 11.0223 60 15.6481 60 24.8995V35.0995C60 44.351 60 48.9767 58.0295 52.4314C56.6985 54.7648 54.7653 56.698 52.4319 58.029C48.9772 59.9995 44.3514 59.9995 35.1 59.9995H24.9C15.6485 59.9995 11.0228 59.9995 7.56812 58.029C5.23468 56.698 3.3015 54.7648 1.97053 52.4314C0 48.9767 0 44.351 0 35.0995V24.8995Z" fill="#EB8B47"/>
  <path d="M0.5 24.8995C0.5 20.2647 0.50047 16.8216 0.744315 14.1045C0.987552 11.3941 1.46987 9.45455 2.40484 7.81536C3.69145 5.55971 5.56019 3.69096 7.81585 2.40435C9.45504 1.46938 11.3946 0.987064 14.105 0.743826C16.8221 0.499981 20.2652 0.499512 24.9 0.499512H35.1C39.7348 0.499512 43.1779 0.499981 45.895 0.743826C48.6054 0.987064 50.545 1.46938 52.1841 2.40435C54.4398 3.69096 56.3086 5.55971 57.5952 7.81536C58.5301 9.45455 59.0124 11.3941 59.2557 14.1045C59.4995 16.8216 59.5 20.2647 59.5 24.8995V35.0995C59.5 39.7343 59.4995 43.1774 59.2557 45.8945C59.0124 48.6049 58.5301 50.5445 57.5952 52.1837C56.3086 54.4393 54.4398 56.3081 52.1841 57.5947C50.545 58.5296 48.6054 59.012 45.895 59.2552C43.1779 59.499 39.7348 59.4995 35.1 59.4995H24.9C20.2652 59.4995 16.8221 59.499 14.105 59.2552C11.3946 59.012 9.45504 58.5296 7.81585 57.5947C5.56019 56.3081 3.69145 54.4393 2.40484 52.1837C1.46987 50.5445 0.987552 48.6049 0.744315 45.8945C0.50047 43.1774 0.5 39.7343 0.5 35.0995V24.8995Z" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M13 26.0335C13 21.7838 13 19.659 14.0822 18.1694C14.4318 17.6883 14.8548 17.2653 15.3359 16.9157C16.8255 15.8335 18.9503 15.8335 23.2 15.8335H36.8C41.0497 15.8335 43.1745 15.8335 44.6641 16.9157C45.1452 17.2653 45.5682 17.6883 45.9178 18.1694C47 19.659 47 21.7838 47 26.0335V33.9668C47 38.2165 47 40.3414 45.9178 41.831C45.5682 42.312 45.1452 42.7351 44.6641 43.0846C43.1745 44.1668 41.0497 44.1668 36.8 44.1668H23.2C18.9503 44.1668 16.8255 44.1668 15.3359 43.0846C14.8548 42.7351 14.4318 42.312 14.0822 41.831C13 40.3414 13 38.2165 13 33.9668V26.0335Z" fill="#FF974C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M39.5 36.667H36.6666" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M45.2 23.0645H14.8C14.0501 23.0645 13.6751 23.0645 13.4122 23.2554C13.3273 23.3171 13.2527 23.3918 13.191 23.4767C13 23.7395 13 24.1145 13 24.8645V27.2645C13 28.0144 13 28.3894 13.191 28.6522C13.2527 28.7371 13.3273 28.8118 13.4122 28.8735C13.6751 29.0645 14.0501 29.0645 14.8 29.0645H45.2C45.9499 29.0645 46.3249 29.0645 46.5878 28.8735C46.6727 28.8118 46.7473 28.7371 46.809 28.6522C47 28.3894 47 28.0144 47 27.2645V24.8645C47 24.1145 47 23.7395 46.809 23.4767C46.7473 23.3918 46.6727 23.3171 46.5878 23.2554C46.3249 23.0645 45.9499 23.0645 45.2 23.0645Z" fill="white" fill-opacity="0.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
  <clipPath id="clip0_13859_31161">
    <rect width="60" height="60" fill="white"/>
  </clipPath>
</defs>
</svg>`,_b=J`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="30" fill="#1DC956"/>
  <rect x="0.5" y="0.5" width="63" height="63" rx="29.5" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M32.4053 19.8031C35.3901 19.8031 38.0431 20.8349 40.1619 22.8247L45.9656 17.0211C42.4465 13.7416 37.8773 11.7333 32.4053 11.7333C24.4829 11.7333 17.6475 16.2841 14.3127 22.9168L21.056 28.1493C22.6589 23.359 27.136 19.8031 32.4053 19.8031Z" fill="#1DC956" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M32.4053 52.2667C37.8773 52.2667 42.465 50.4611 45.8182 47.3658L39.2407 42.2623C37.4351 43.4783 35.1321 44.2153 32.4053 44.2153C27.136 44.2153 22.6589 40.6594 21.056 35.8691L14.3127 41.1016C17.6475 47.7159 24.4829 52.2667 32.4053 52.2667Z" fill="#2BEE6C"/>
  <path d="M21.056 35.8507L19.5636 36.993L14.3127 41.0832M39.2407 42.2623L45.8182 47.3658C42.465 50.4611 37.8773 52.2667 32.4053 52.2667C24.4829 52.2667 17.6475 47.7159 14.3127 41.1016L21.056 35.8691C22.6589 40.6594 27.136 44.2153 32.4053 44.2153C35.1321 44.2153 37.4351 43.4783 39.2407 42.2623Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M51.8613 32.4606C51.8613 31.0235 51.7323 29.6417 51.4928 28.3151H32.4053V36.1638H43.3124C42.8334 38.688 41.3963 40.8252 39.2407 42.2623L45.8181 47.3658C49.6503 43.8283 51.8613 38.6327 51.8613 32.4606Z" fill="#1FAD7E" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" fill="#86F999"/>
  <path d="M21.056 35.8691L14.3127 41.1016M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
</svg>
`,Eb=J`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31635)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58317 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58317 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9268C60.4784 58.4158 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4158 2.1019 55.9268C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#EB8B47"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M28.1042 49.2329L13.1024 51.2077L15.0772 36.2059L37.1015 14.1815C39.2441 12.039 40.3154 10.9677 41.5718 10.624C42.4205 10.3918 43.3159 10.3918 44.1645 10.624C45.421 10.9677 46.4922 12.039 48.6348 14.1815L50.1286 15.6753C52.2711 17.8179 53.3424 18.8891 53.6861 20.1456C53.9183 20.9942 53.9183 21.8896 53.6861 22.7383C53.3424 23.9947 52.2711 25.066 50.1286 27.2086L28.1042 49.2329Z" fill="#FF974C" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M38.5962 20.5376L22.4199 36.7139" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M43.7727 25.714L27.5964 41.8903" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22.3703 36.7635C19.3258 39.808 16.0198 36.6395 16.2616 35.0324" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5466 41.9399C24.5034 44.9831 28.155 48.7098 29.2738 48.0475" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5468 41.9398C23.428 46.0586 18.2516 40.8822 22.3704 36.7634" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.8191 50.5214C15.4711 49.5823 14.728 48.8392 13.7889 48.4912" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M49.2862 29.5805L34.7275 15.0219" stroke="#E4E7E7" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31635">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,Tb=J`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31636)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58318 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58318 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9269C60.4784 58.4159 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4159 2.1019 55.9269C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#794CFF"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M40 39.4595C44.7824 36.693 48 31.5222 48 25.6C48 16.7634 40.8366 9.59998 32 9.59998C23.1634 9.59998 16 16.7634 16 25.6C16 31.5222 19.2176 36.693 24 39.4595V45.8144H40V39.4595Z" fill="#906EF7"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#906EF7"/>
    <path d="M24 45.8144V39.4595C19.2176 36.693 16 31.5222 16 25.6C16 16.7634 23.1634 9.59998 32 9.59998C40.8366 9.59998 48 16.7634 48 25.6C48 31.5222 44.7824 36.693 40 39.4595V45.8144M24 45.8144H40M24 45.8144V49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#643CDD" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M29.6735 26.9101V29.1109H34.0753V26.9101C34.0753 25.6945 35.0607 24.7092 36.2762 24.7092C37.4917 24.7092 38.4771 25.6945 38.4771 26.9101C38.4771 28.1256 37.4917 29.1109 36.2762 29.1109H34.0753H29.6735H27.4726C26.2571 29.1109 25.2717 28.1256 25.2717 26.9101C25.2717 25.6945 26.2571 24.7092 27.4726 24.7092C28.6881 24.7092 29.6735 25.6945 29.6735 26.9101Z" fill="#906EF7"/>
    <path d="M29.6735 45.3183V26.9101C29.6735 25.6945 28.6881 24.7092 27.4726 24.7092V24.7092C26.2571 24.7092 25.2717 25.6945 25.2717 26.9101V26.9101C25.2717 28.1256 26.2571 29.1109 27.4726 29.1109H36.2762C37.4917 29.1109 38.4771 28.1256 38.4771 26.9101V26.9101C38.4771 25.6945 37.4917 24.7092 36.2762 24.7092V24.7092C35.0607 24.7092 34.0753 25.6945 34.0753 26.9101V45.3183" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31636">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,Ab=re`
  :host {
    display: block;
    width: var(--local-size);
    height: var(--local-size);
  }

  :host svg {
    width: 100%;
    height: 100%;
  }
`;var Hd=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};const kb={browser:ob,dao:sb,defi:ab,defiAlt:cb,eth:lb,layers:ub,lock:db,login:hb,network:pb,nft:fb,noun:gb,profile:wb,system:mb,coinbase:bb,onrampCard:Cb,moonpay:vb,stripe:yb,paypal:xb,google:_b,pencil:Eb,lightbulb:Tb};let Ao=class extends se{constructor(){super(...arguments),this.name="browser",this.size="md"}render(){return this.style.cssText=`
       --local-size: var(--wui-visual-size-${this.size});
   `,F`${kb[this.name]}`}};Ao.styles=[de,Ab];Hd([C()],Ao.prototype,"name",void 0);Hd([C()],Ao.prototype,"size",void 0);Ao=Hd([V("wui-visual")],Ao);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _n=n=>n??at,ve={getSpacingStyles(n,e){if(Array.isArray(n))return n[e]?`var(--wui-spacing-${n[e]})`:void 0;if(typeof n=="string")return`var(--wui-spacing-${n})`},getFormattedDate(n){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(n)},getHostName(n){return new URL(n).hostname},getTruncateString({string:n,charsStart:e,charsEnd:t,truncate:i}){return n.length<=e+t?n:i==="end"?`${n.substring(0,e)}...`:i==="start"?`...${n.substring(n.length-t)}`:`${n.substring(0,Math.floor(e))}...${n.substring(n.length-Math.floor(t))}`},generateAvatarColors(n){const t=n.toLowerCase().replace(/^0x/iu,"").substring(0,6),i=this.hexToRgb(t),o=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),s=100-3*Number(o==null?void 0:o.replace("px","")),a=`${s}% ${s}% at 65% 40%`,c=[];for(let l=0;l<5;l+=1){const d=this.tintColor(i,.15*l);c.push(`rgb(${d[0]}, ${d[1]}, ${d[2]})`)}return`
    --local-color-1: ${c[0]};
    --local-color-2: ${c[1]};
    --local-color-3: ${c[2]};
    --local-color-4: ${c[3]};
    --local-color-5: ${c[4]};
    --local-radial-circle: ${a}
   `},hexToRgb(n){const e=parseInt(n,16),t=e>>16&255,i=e>>8&255,o=e&255;return[t,i,o]},tintColor(n,e){const[t,i,o]=n,r=Math.round(t+(255-t)*e),s=Math.round(i+(255-i)*e),a=Math.round(o+(255-o)*e);return[r,s,a]},isNumber(n){return{number:/^[0-9]+$/u}.number.test(n)},getColorTheme(n){return n||(typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")},splitBalance(n){const e=n.split(".");return e.length===2?[e[0],e[1]]:["0","00"]},roundNumber(n,e,t){return Math.abs(n)>=e?Number(n.toFixed(t)):n},formatNumberToLocalString(n,e=2){return n===void 0?"0.00":typeof n=="number"?n.toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e}):parseFloat(n).toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e})}},Sb=re`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var sn=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let $t=class extends se{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&ve.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&ve.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&ve.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&ve.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&ve.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&ve.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&ve.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&ve.getSpacingStyles(this.margin,3)};
    `,F`<slot></slot>`}};$t.styles=[de,Sb];sn([C()],$t.prototype,"flexDirection",void 0);sn([C()],$t.prototype,"flexWrap",void 0);sn([C()],$t.prototype,"flexBasis",void 0);sn([C()],$t.prototype,"flexGrow",void 0);sn([C()],$t.prototype,"flexShrink",void 0);sn([C()],$t.prototype,"alignItems",void 0);sn([C()],$t.prototype,"justifyContent",void 0);sn([C()],$t.prototype,"columnGap",void 0);sn([C()],$t.prototype,"rowGap",void 0);sn([C()],$t.prototype,"gap",void 0);sn([C()],$t.prototype,"padding",void 0);sn([C()],$t.prototype,"margin",void 0);$t=sn([V("wui-flex")],$t);const $b=re`
  :host {
    display: block;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var hl=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let $r=class extends se{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return F`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",F`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const e=ve.generateAvatarColors(this.address);return this.style.cssText=e,null}return this.dataset.variant="default",null}};$r.styles=[de,$b];hl([C()],$r.prototype,"imageSrc",void 0);hl([C()],$r.prototype,"alt",void 0);hl([C()],$r.prototype,"address",void 0);$r=hl([V("wui-avatar")],$r);const Rb=re`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var _i=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let gn=class extends se{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,t=this.size==="lg",i=this.size==="xl",o=t?"12%":"16%",r=t?"xxs":i?"s":"3xl",s=this.background==="gray",a=this.background==="opaque",c=this.backgroundColor==="accent-100"&&a||this.backgroundColor==="success-100"&&a||this.backgroundColor==="error-100"&&a||this.backgroundColor==="inverse-100"&&a;let l=`var(--wui-color-${this.backgroundColor})`;return c?l=`var(--wui-icon-box-bg-${this.backgroundColor})`:s&&(l=`var(--wui-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${l};
       --local-bg-mix: ${c||s?"100%":o};
       --local-border-radius: var(--wui-border-radius-${r});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,F` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};gn.styles=[de,Oe,Rb];_i([C()],gn.prototype,"size",void 0);_i([C()],gn.prototype,"backgroundColor",void 0);_i([C()],gn.prototype,"iconColor",void 0);_i([C()],gn.prototype,"iconSize",void 0);_i([C()],gn.prototype,"background",void 0);_i([C({type:Boolean})],gn.prototype,"border",void 0);_i([C()],gn.prototype,"borderColor",void 0);_i([C()],gn.prototype,"icon",void 0);gn=_i([V("wui-icon-box")],gn);const Ib=re`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var On=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Vt=class extends se{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.isProfileName=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return F`
      <button
        ?disabled=${this.disabled}
        class=${_n(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${this.address?ve.getTruncateString({string:this.isProfileName?this.profileName:this.address,charsStart:this.isProfileName?18:this.charsStart,charsEnd:this.isProfileName?0:this.charsEnd,truncate:this.isProfileName?"end":"middle"}):null}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.isUnsupportedChain)return F` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;if(this.balance){const e=this.networkSrc?F`<wui-image src=${this.networkSrc}></wui-image>`:F`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return F`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance}</wui-text>
      `}return null}};Vt.styles=[de,Oe,Ib];On([C()],Vt.prototype,"networkSrc",void 0);On([C()],Vt.prototype,"avatarSrc",void 0);On([C()],Vt.prototype,"balance",void 0);On([C({type:Boolean})],Vt.prototype,"isUnsupportedChain",void 0);On([C({type:Boolean})],Vt.prototype,"disabled",void 0);On([C({type:Boolean})],Vt.prototype,"isProfileName",void 0);On([C()],Vt.prototype,"address",void 0);On([C()],Vt.prototype,"profileName",void 0);On([C()],Vt.prototype,"charsStart",void 0);On([C()],Vt.prototype,"charsEnd",void 0);Vt=On([V("wui-account-button")],Vt);const Pb=re`
  :host {
    position: relative;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-base-150, #1e1f1f);
    padding: 1px;
  }
`;var Xr=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let zn=class extends se{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return this.size==="lg"?e="m":this.size==="md"?e="xs":e="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),F`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?F`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?F`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:F`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};zn.styles=[de,Pb];Xr([C()],zn.prototype,"size",void 0);Xr([C()],zn.prototype,"name",void 0);Xr([C()],zn.prototype,"imageSrc",void 0);Xr([C()],zn.prototype,"walletIcon",void 0);Xr([C({type:Boolean})],zn.prototype,"installed",void 0);Xr([C()],zn.prototype,"badgeSize",void 0);zn=Xr([V("wui-wallet-image")],zn);const Ob=re`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var Pf=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};const nu=4;let Zs=class extends se{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<nu;return F`${this.walletImages.slice(0,nu).map(({src:t,walletName:i})=>F`
            <wui-wallet-image
              size="inherit"
              imageSrc=${t}
              name=${_n(i)}
            ></wui-wallet-image>
          `)}
      ${e?[...Array(nu-this.walletImages.length)].map(()=>F` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};Zs.styles=[de,Ob];Pf([C({type:Array})],Zs.prototype,"walletImages",void 0);Zs=Pf([V("wui-all-wallets-image")],Zs);const Nb=re`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  /* xs settings */
  button[data-size='xs'] {
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs);
  }

  button[data-size='xs'][data-icon-left='true'][data-icon-right='false'] {
    padding-left: var(--wui-spacing-xxs);
  }

  button[data-size='xs'][data-icon-right='true'][data-icon-left='false'] {
    padding-right: var(--wui-spacing-xxs);
  }

  /* sm settings */
  button[data-size='sm'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s);
  }

  button[data-size='sm'][data-icon-left='true'][data-icon-right='false'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  button[data-size='sm'][data-icon-right='true'][data-icon-left='false'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-xs) var(--wui-spacing-xxs)
      var(--wui-spacing-s);
  }

  /* md settings */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  /* lg settings */
  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
  }

  button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
    padding-left: var(--wui-spacing-m);
  }

  button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
    padding-right: var(--wui-spacing-m);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var ei=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};const Mb={xs:"small-600",sm:"paragraph-600",md:"small-600",mdl:"small-600",lg:"paragraph-600"};let Qt=class extends se{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="fill",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};
    --local-border-radius: var(--wui-border-radius-${this.borderRadius});
    `;const e=this.textVariant??Mb[this.size];return F`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){return this.loading?F`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:F``}};Qt.styles=[de,Oe,Nb];ei([C()],Qt.prototype,"size",void 0);ei([C({type:Boolean})],Qt.prototype,"disabled",void 0);ei([C({type:Boolean})],Qt.prototype,"fullWidth",void 0);ei([C({type:Boolean})],Qt.prototype,"loading",void 0);ei([C()],Qt.prototype,"variant",void 0);ei([C({type:Boolean})],Qt.prototype,"hasIconLeft",void 0);ei([C({type:Boolean})],Qt.prototype,"hasIconRight",void 0);ei([C()],Qt.prototype,"borderRadius",void 0);ei([C()],Qt.prototype,"textVariant",void 0);Qt=ei([V("wui-button")],Qt);const Of=J`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,Bb=re`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`;var Nf=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Gs=class extends se{constructor(){super(...arguments),this.type="wallet"}render(){return F`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?F` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${Of}`:F`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};Gs.styles=[de,Oe,Bb];Nf([C()],Gs.prototype,"type",void 0);Gs=Nf([V("wui-card-select-loader")],Gs);const Db=J`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,Lb=J`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,Ub=re`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var ka=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Hi=class extends se{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){const e={sm:Db,md:Of,lg:Lb};return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};
      --local-path: var(--wui-path-network-${this.size});
      --local-width:  var(--wui-width-network-${this.size});
      --local-height:  var(--wui-height-network-${this.size});
      --local-icon-size:  var(--wui-icon-size-network-${this.size});
    `,F`${this.templateVisual()} ${e[this.size]}`}templateVisual(){return this.imageSrc?F`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:F`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Hi.styles=[de,Ub];ka([C()],Hi.prototype,"size",void 0);ka([C()],Hi.prototype,"name",void 0);ka([C()],Hi.prototype,"imageSrc",void 0);ka([C({type:Boolean})],Hi.prototype,"selected",void 0);Hi=ka([V("wui-network-image")],Hi);const jb=re`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`;var Qr=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Hn=class extends se{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1,this.installed=!1}render(){return F`
      <button data-selected=${_n(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return this.type==="network"?F`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${_n(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:F`
      <wui-wallet-image
        size="md"
        imageSrc=${_n(this.imageSrc)}
        name=${this.name}
        .installed=${this.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}};Hn.styles=[de,Oe,jb];Qr([C()],Hn.prototype,"name",void 0);Qr([C()],Hn.prototype,"type",void 0);Qr([C()],Hn.prototype,"imageSrc",void 0);Qr([C({type:Boolean})],Hn.prototype,"disabled",void 0);Qr([C({type:Boolean})],Hn.prototype,"selected",void 0);Qr([C({type:Boolean})],Hn.prototype,"installed",void 0);Hn=Qr([V("wui-card-select")],Hn);const Wb=re`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-success-glass-010);
    background-color: var(--wui-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='error'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-error-glass-010);
    background-color: var(--wui-error-glass-010);
    color: var(--wui-color-error-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'],
  a[data-variant='error'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child),
  a[data-variant='error']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image,
  a[data-variant='error'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon,
  a[data-variant='success'] > wui-icon,
  a[data-variant='shadeSmall'] > wui-icon,
  a[data-variant='error'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-success-glass-015);
  }

  a[data-variant='error']:focus-visible {
    background-color: var(--wui-error-glass-015);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-success-glass-015);
    }

    a[data-variant='error']:hover {
      background-color: var(--wui-error-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-success-glass-020);
  }

  a[data-variant='error']:active {
    background-color: var(--wui-error-glass-020);
  }
`;var eo=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Vn=class extends se{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){const t=this.variant==="success"||this.variant==="transparent"||this.variant==="shadeSmall"?"small-600":"paragraph-600";return F`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${t} color="inherit">
          ${this.title?this.title:ve.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?F`<wui-image src=${this.imageSrc}></wui-image>`:null}};Vn.styles=[de,Oe,Wb];eo([C()],Vn.prototype,"variant",void 0);eo([C()],Vn.prototype,"imageSrc",void 0);eo([C({type:Boolean})],Vn.prototype,"disabled",void 0);eo([C()],Vn.prototype,"icon",void 0);eo([C()],Vn.prototype,"href",void 0);eo([C()],Vn.prototype,"text",void 0);Vn=eo([V("wui-chip")],Vn);const Fb=re`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var Vd=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let ko=class extends se{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const e=this.size==="md"?"paragraph-600":"small-600";return F`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?F`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};ko.styles=[de,Oe,Fb];Vd([C()],ko.prototype,"size",void 0);Vd([C({type:Boolean})],ko.prototype,"loading",void 0);ko=Vd([V("wui-connect-button")],ko);const zb=re`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var pl=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Rr=class extends se{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return F`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="xs" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Rr.styles=[de,Oe,zb];pl([C({type:Boolean})],Rr.prototype,"disabled",void 0);pl([C()],Rr.prototype,"label",void 0);pl([C()],Rr.prototype,"buttonLabel",void 0);Rr=pl([V("wui-cta-button")],Rr);const Hb=re`
  :host {
    display: block;
    padding: var(--wui-spacing-l) var(--wui-spacing-m);
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
  }
`;var Vb=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let vc=class extends se{render(){return F`
      <wui-flex gap="xl" flexDirection="column" justifyContent="space-between" alignItems="center">
        <slot></slot>
      </wui-flex>
    `}};vc.styles=[de,Oe,Hb];vc=Vb([V("wui-details-group")],vc);const Zb=re`
  :host {
    display: flex;
    flex-direction: row;
    gap: var(--wui-spacing-l);
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }
`;var Mf=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let qs=class extends se{constructor(){super(...arguments),this.name=""}render(){return F`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">${this.name}</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <slot></slot>
        </wui-flex>
      </wui-flex>
    `}};qs.styles=[de,Oe,Zb];Mf([C()],qs.prototype,"name",void 0);qs=Mf([V("wui-details-group-item")],qs);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gb=n=>n.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ys=(n,e)=>{var i;const t=n._$AN;if(t===void 0)return!1;for(const o of t)(i=o._$AO)==null||i.call(o,e,!1),ys(o,e);return!0},yc=n=>{let e,t;do{if((e=n._$AM)===void 0)break;t=e._$AN,t.delete(n),n=e}while((t==null?void 0:t.size)===0)},Bf=n=>{for(let e;e=n._$AM;n=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(n))break;t.add(n),Kb(e)}};function qb(n){this._$AN!==void 0?(yc(this),this._$AM=n,Bf(this)):this._$AM=n}function Yb(n,e=!1,t=0){const i=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(i))for(let r=t;r<i.length;r++)ys(i[r],!1),yc(i[r]);else i!=null&&(ys(i,!1),yc(i));else ys(this,n)}const Kb=n=>{n.type==$f.CHILD&&(n._$AP??(n._$AP=Yb),n._$AQ??(n._$AQ=qb))};let Jb=class extends If{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),Bf(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,o;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(o=this.disconnected)==null||o.call(this)),t&&(ys(this,e),yc(this))}setValue(e){if(Gb(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zd=()=>new Xb;let Xb=class{};const iu=new WeakMap,Gd=Rf(class extends Jb{render(n){return at}update(n,[e]){var i;const t=e!==this.Y;return t&&this.Y!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.Y=e,this.ht=(i=n.options)==null?void 0:i.host,this.rt(this.ct=n.element)),at}rt(n){if(typeof this.Y=="function"){const e=this.ht??globalThis;let t=iu.get(e);t===void 0&&(t=new WeakMap,iu.set(e,t)),t.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),t.set(this.Y,n),n!==void 0&&this.Y.call(this.ht,n)}else this.Y.value=n}get lt(){var n,e;return typeof this.Y=="function"?(n=iu.get(this.ht??globalThis))==null?void 0:n.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Qb=re`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px 40px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var er=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let An=class extends se{constructor(){super(...arguments),this.inputElementRef=Zd(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){const e=`wui-size-${this.size}`;return F` ${this.templateIcon()}
      <input
        ${Gd(this.inputElementRef)}
        class=${e}
        type=${this.type}
        enterkeyhint=${_n(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
      />
      <slot></slot>`}templateIcon(){return this.icon?F`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var e;this.dispatchEvent(new CustomEvent("inputChange",{detail:(e=this.inputElementRef.value)==null?void 0:e.value,bubbles:!0,composed:!0}))}};An.styles=[de,Oe,Qb];er([C()],An.prototype,"size",void 0);er([C()],An.prototype,"icon",void 0);er([C({type:Boolean})],An.prototype,"disabled",void 0);er([C()],An.prototype,"placeholder",void 0);er([C()],An.prototype,"type",void 0);er([C()],An.prototype,"keyHint",void 0);er([C()],An.prototype,"value",void 0);An=er([V("wui-input-text")],An);const e4=re`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var fl=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Ir=class extends se{constructor(){super(...arguments),this.disabled=!1}render(){return F`
      <wui-input-text
        placeholder="Email"
        icon="mail"
        size="md"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?F`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};Ir.styles=[de,e4];fl([C()],Ir.prototype,"errorMessage",void 0);fl([C({type:Boolean})],Ir.prototype,"disabled",void 0);fl([C()],Ir.prototype,"value",void 0);Ir=fl([V("wui-email-input")],Ir);const t4=re`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var Sa=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Vi=class extends se{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){const e=this.size==="lg"?"--wui-border-radius-xs":"--wui-border-radius-xxs",t=this.size==="lg"?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`
    --local-border-radius: var(${e});
    --local-padding: var(${t});
`,F`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};Vi.styles=[de,Oe,Wd,t4];Sa([C()],Vi.prototype,"size",void 0);Sa([C({type:Boolean})],Vi.prototype,"disabled",void 0);Sa([C()],Vi.prototype,"icon",void 0);Sa([C()],Vi.prototype,"iconColor",void 0);Vi=Sa([V("wui-icon-link")],Vi);const n4=re`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`;var Df=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Ys=class extends se{constructor(){super(...arguments),this.icon="copy"}render(){return F`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};Ys.styles=[de,Oe,n4];Df([C()],Ys.prototype,"icon",void 0);Ys=Df([V("wui-input-element")],Ys);const i4=re`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-005);
  }

  input:focus:enabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }
`;var qd=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let So=class extends se{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return F`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};So.styles=[de,Oe,i4];qd([C({type:Boolean})],So.prototype,"disabled",void 0);qd([C({type:String})],So.prototype,"value",void 0);So=qd([V("wui-input-numeric")],So);const r4=re`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`;var Yd=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let $o=class extends se{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return F`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};$o.styles=[de,Oe,r4];Yd([C({type:Boolean})],$o.prototype,"disabled",void 0);Yd([C()],$o.prototype,"color",void 0);$o=Yd([V("wui-link")],$o);const o4=re`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var ti=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let en=class extends se{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return F`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${_n(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return F`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.iconVariant==="square"&&this.icon&&this.variant==="icon")return F`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){const e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",t=this.iconVariant==="square-blue"?"mdl":"md",i=this.iconSize?this.iconSize:t;return F`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${i}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${t}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?F`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:F``}chevronTemplate(){return this.chevron?F`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};en.styles=[de,Oe,o4];ti([C()],en.prototype,"icon",void 0);ti([C()],en.prototype,"iconSize",void 0);ti([C()],en.prototype,"variant",void 0);ti([C()],en.prototype,"iconVariant",void 0);ti([C({type:Boolean})],en.prototype,"disabled",void 0);ti([C()],en.prototype,"imageSrc",void 0);ti([C()],en.prototype,"alt",void 0);ti([C({type:Boolean})],en.prototype,"chevron",void 0);ti([C({type:Boolean})],en.prototype,"loading",void 0);en=ti([V("wui-list-item")],en);var Fu;(function(n){n.approve="approved",n.bought="bought",n.borrow="borrowed",n.burn="burnt",n.cancel="canceled",n.claim="claimed",n.deploy="deployed",n.deposit="deposited",n.execute="executed",n.mint="minted",n.receive="received",n.repay="repaid",n.send="sent",n.sell="sold",n.stake="staked",n.trade="swapped",n.unstake="unstaked",n.withdraw="withdrawn"})(Fu||(Fu={}));const s4=re`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var to=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Zn=class extends se{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[e,t]=this.images,i=(e==null?void 0:e.type)==="NFT",o=t!=null&&t.url?t.type==="NFT":i,r=i?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",s=o?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`
    --local-left-border-radius: ${r};
    --local-right-border-radius: ${s};
    `,F`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[e,t]=this.images,i=e==null?void 0:e.type;return this.images.length===2&&(e!=null&&e.url||t!=null&&t.url)?F`<div class="swap-images-container">
        ${e!=null&&e.url?F`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${t!=null&&t.url?F`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e!=null&&e.url?F`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:i==="NFT"?F`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:F`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e="accent-100",t;return t=this.getIcon(),this.status&&(e=this.getStatusColor()),t?F`
      <wui-icon-box
        size="xxs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        icon=${t}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type==="trade"?"swapHorizontalBold":this.type==="approve"?"checkmark":this.type==="cancel"?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};Zn.styles=[s4];to([C()],Zn.prototype,"type",void 0);to([C()],Zn.prototype,"status",void 0);to([C()],Zn.prototype,"direction",void 0);to([C({type:Boolean})],Zn.prototype,"onlyDirectionIcon",void 0);to([C({type:Array})],Zn.prototype,"images",void 0);to([C({type:Object})],Zn.prototype,"secondImage",void 0);Zn=to([V("wui-transaction-visual")],Zn);const a4=re`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-xs) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var Nn=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Zt=class extends se{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[],this.price=[],this.amount=[],this.symbol=[]}render(){return F`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${_n(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${_n(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${Fu[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){var t;const e=(t=this.descriptions)==null?void 0:t[0];return e?F`
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){var t;const e=(t=this.descriptions)==null?void 0:t[1];return e?F`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}};Zt.styles=[de,a4];Nn([C()],Zt.prototype,"type",void 0);Nn([C({type:Array})],Zt.prototype,"descriptions",void 0);Nn([C()],Zt.prototype,"date",void 0);Nn([C({type:Boolean})],Zt.prototype,"onlyDirectionIcon",void 0);Nn([C()],Zt.prototype,"status",void 0);Nn([C()],Zt.prototype,"direction",void 0);Nn([C({type:Array})],Zt.prototype,"images",void 0);Nn([C({type:Array})],Zt.prototype,"price",void 0);Nn([C({type:Array})],Zt.prototype,"amount",void 0);Nn([C({type:Array})],Zt.prototype,"symbol",void 0);Zt=Nn([V("wui-transaction-list-item")],Zt);const c4=re`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var l4=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let xc=class extends se{render(){return F`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};xc.styles=[de,c4];xc=l4([V("wui-transaction-list-item-loader")],xc);const u4=re`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 9px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`;var Kd=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Ro=class extends se{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const e=this.size==="md"?"mini-700":"micro-700";return F`
      <wui-text data-variant=${this.variant} variant=${e} color="inherit">
        <slot></slot>
      </wui-text>
    `}};Ro.styles=[de,u4];Kd([C()],Ro.prototype,"variant",void 0);Kd([C()],Ro.prototype,"size",void 0);Ro=Kd([V("wui-tag")],Ro);const d4=re`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var Mn=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Gt=class extends se{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.installed=!1,this.disabled=!1,this.showAllWallets=!1}render(){return F`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?F` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?F` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?F`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?F`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.tagLabel&&this.tagVariant?F`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?F`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};Gt.styles=[de,Oe,d4];Mn([C({type:Array})],Gt.prototype,"walletImages",void 0);Mn([C()],Gt.prototype,"imageSrc",void 0);Mn([C()],Gt.prototype,"name",void 0);Mn([C()],Gt.prototype,"tagLabel",void 0);Mn([C()],Gt.prototype,"tagVariant",void 0);Mn([C()],Gt.prototype,"icon",void 0);Mn([C()],Gt.prototype,"walletIcon",void 0);Mn([C({type:Boolean})],Gt.prototype,"installed",void 0);Mn([C({type:Boolean})],Gt.prototype,"disabled",void 0);Mn([C({type:Boolean})],Gt.prototype,"showAllWallets",void 0);Gt=Mn([V("wui-list-wallet")],Gt);const h4=re`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var Lf=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Ks=class extends se{constructor(){super(...arguments),this.logo="google"}render(){return F`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};Ks.styles=[de,h4];Lf([C()],Ks.prototype,"logo",void 0);Ks=Lf([V("wui-logo")],Ks);const p4=re`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var Jd=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Io=class extends se{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return F`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};Io.styles=[de,Oe,p4];Jd([C()],Io.prototype,"logo",void 0);Jd([C({type:Boolean})],Io.prototype,"disabled",void 0);Io=Jd([V("wui-logo-select")],Io);const f4=re`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }
`;var gl=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Pr=class extends se{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1}render(){return F`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?F`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `:this.imageSrc?F`<wui-image src=${this.imageSrc}></wui-image>`:F`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};Pr.styles=[de,Oe,f4];gl([C()],Pr.prototype,"imageSrc",void 0);gl([C({type:Boolean})],Pr.prototype,"isUnsupportedChain",void 0);gl([C({type:Boolean})],Pr.prototype,"disabled",void 0);Pr=gl([V("wui-network-button")],Pr);const g4=re`
  :host {
    position: relative;
    display: block;
  }
`;var wl=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Or=class extends se{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=e=>this.values.slice(0,e).every(i=>i!==""),this.handleKeyDown=(e,t)=>{const i=e.target,o=this.getInputElement(i),r=["ArrowLeft","ArrowRight","Shift","Delete"];if(!o)return;r.includes(e.key)&&e.preventDefault();const s=o.selectionStart;switch(e.key){case"ArrowLeft":s&&o.setSelectionRange(s+1,s+1),this.focusInputField("prev",t);break;case"ArrowRight":this.focusInputField("next",t);break;case"Shift":this.focusInputField("next",t);break;case"Delete":o.value===""?this.focusInputField("prev",t):this.updateInput(o,t,"");break;case"Backspace":o.value===""?this.focusInputField("prev",t):this.updateInput(o,t,"");break}},this.focusInputField=(e,t)=>{if(e==="next"){const i=t+1;if(!this.shouldInputBeEnabled(i))return;const o=this.numerics[i<this.length?i:t],r=o?this.getInputElement(o):void 0;r&&(r.disabled=!1,r.focus())}if(e==="prev"){const i=t-1,o=this.numerics[i>-1?i:t],r=o?this.getInputElement(o):void 0;r&&r.focus()}}}firstUpdated(){var t,i;this.otp&&(this.values=this.otp.split(""));const e=(t=this.shadowRoot)==null?void 0:t.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e)),(i=this.numerics[0])==null||i.focus()}render(){return F`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((e,t)=>F`
            <wui-input-numeric
              @input=${i=>this.handleInput(i,t)}
              @click=${i=>this.selectInput(i)}
              @keydown=${i=>this.handleKeyDown(i,t)}
              .disabled=${!this.shouldInputBeEnabled(t)}
              .value=${this.values[t]||""}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(e,t,i){const o=this.numerics[t],r=e||(o?this.getInputElement(o):void 0);r&&(r.value=i,this.values=this.values.map((s,a)=>a===t?i:s))}selectInput(e){const t=e.target;if(t){const i=this.getInputElement(t);i==null||i.select()}}handleInput(e,t){const i=e.target,o=this.getInputElement(i);if(o){const r=o.value;e.inputType==="insertFromPaste"?this.handlePaste(o,r,t):ve.isNumber(r)&&e.data?(this.updateInput(o,t,e.data),this.focusInputField("next",t)):this.updateInput(o,t,"")}this.dispatchInputChangeEvent()}handlePaste(e,t,i){const o=t[0];if(o&&ve.isNumber(o)){this.updateInput(e,i,o);const s=t.substring(1);if(i+1<this.length&&s.length){const a=this.numerics[i+1],c=a?this.getInputElement(a):void 0;c&&this.handlePaste(c,s,i+1)}else this.focusInputField("next",i)}else this.updateInput(e,i,"")}getInputElement(e){var t;return(t=e.shadowRoot)!=null&&t.querySelector("input")?e.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){const e=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:e,bubbles:!0,composed:!0}))}};Or.styles=[de,g4];wl([C({type:Number})],Or.prototype,"length",void 0);wl([C({type:String})],Or.prototype,"otp",void 0);wl([Fd()],Or.prototype,"values",void 0);Or=wl([V("wui-otp")],Or);var $a={},w4=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Uf={},an={};let Xd;const m4=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];an.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};an.getSymbolTotalCodewords=function(e){return m4[e]};an.getBCHDigit=function(n){let e=0;for(;n!==0;)e++,n>>>=1;return e};an.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');Xd=e};an.isKanjiModeEnabled=function(){return typeof Xd<"u"};an.toSJIS=function(e){return Xd(e)};var ml={};(function(n){n.L={bit:1},n.M={bit:0},n.Q={bit:3},n.H={bit:2};function e(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return n.L;case"m":case"medium":return n.M;case"q":case"quartile":return n.Q;case"h":case"high":return n.H;default:throw new Error("Unknown EC Level: "+t)}}n.isValid=function(i){return i&&typeof i.bit<"u"&&i.bit>=0&&i.bit<4},n.from=function(i,o){if(n.isValid(i))return i;try{return e(i)}catch{return o}}})(ml);function jf(){this.buffer=[],this.length=0}jf.prototype={get:function(n){const e=Math.floor(n/8);return(this.buffer[e]>>>7-n%8&1)===1},put:function(n,e){for(let t=0;t<e;t++)this.putBit((n>>>e-t-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(n){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),n&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var b4=jf;function Ra(n){if(!n||n<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=n,this.data=new Uint8Array(n*n),this.reservedBit=new Uint8Array(n*n)}Ra.prototype.set=function(n,e,t,i){const o=n*this.size+e;this.data[o]=t,i&&(this.reservedBit[o]=!0)};Ra.prototype.get=function(n,e){return this.data[n*this.size+e]};Ra.prototype.xor=function(n,e,t){this.data[n*this.size+e]^=t};Ra.prototype.isReserved=function(n,e){return this.reservedBit[n*this.size+e]};var v4=Ra,Wf={};(function(n){const e=an.getSymbolSize;n.getRowColCoords=function(i){if(i===1)return[];const o=Math.floor(i/7)+2,r=e(i),s=r===145?26:Math.ceil((r-13)/(2*o-2))*2,a=[r-7];for(let c=1;c<o-1;c++)a[c]=a[c-1]-s;return a.push(6),a.reverse()},n.getPositions=function(i){const o=[],r=n.getRowColCoords(i),s=r.length;for(let a=0;a<s;a++)for(let c=0;c<s;c++)a===0&&c===0||a===0&&c===s-1||a===s-1&&c===0||o.push([r[a],r[c]]);return o}})(Wf);var Ff={};const y4=an.getSymbolSize,gh=7;Ff.getPositions=function(e){const t=y4(e);return[[0,0],[t-gh,0],[0,t-gh]]};var zf={};(function(n){n.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};n.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},n.from=function(o){return n.isValid(o)?parseInt(o,10):void 0},n.getPenaltyN1=function(o){const r=o.size;let s=0,a=0,c=0,l=null,d=null;for(let p=0;p<r;p++){a=c=0,l=d=null;for(let f=0;f<r;f++){let v=o.get(p,f);v===l?a++:(a>=5&&(s+=e.N1+(a-5)),l=v,a=1),v=o.get(f,p),v===d?c++:(c>=5&&(s+=e.N1+(c-5)),d=v,c=1)}a>=5&&(s+=e.N1+(a-5)),c>=5&&(s+=e.N1+(c-5))}return s},n.getPenaltyN2=function(o){const r=o.size;let s=0;for(let a=0;a<r-1;a++)for(let c=0;c<r-1;c++){const l=o.get(a,c)+o.get(a,c+1)+o.get(a+1,c)+o.get(a+1,c+1);(l===4||l===0)&&s++}return s*e.N2},n.getPenaltyN3=function(o){const r=o.size;let s=0,a=0,c=0;for(let l=0;l<r;l++){a=c=0;for(let d=0;d<r;d++)a=a<<1&2047|o.get(l,d),d>=10&&(a===1488||a===93)&&s++,c=c<<1&2047|o.get(d,l),d>=10&&(c===1488||c===93)&&s++}return s*e.N3},n.getPenaltyN4=function(o){let r=0;const s=o.data.length;for(let c=0;c<s;c++)r+=o.data[c];return Math.abs(Math.ceil(r*100/s/5)-10)*e.N4};function t(i,o,r){switch(i){case n.Patterns.PATTERN000:return(o+r)%2===0;case n.Patterns.PATTERN001:return o%2===0;case n.Patterns.PATTERN010:return r%3===0;case n.Patterns.PATTERN011:return(o+r)%3===0;case n.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(r/3))%2===0;case n.Patterns.PATTERN101:return o*r%2+o*r%3===0;case n.Patterns.PATTERN110:return(o*r%2+o*r%3)%2===0;case n.Patterns.PATTERN111:return(o*r%3+(o+r)%2)%2===0;default:throw new Error("bad maskPattern:"+i)}}n.applyMask=function(o,r){const s=r.size;for(let a=0;a<s;a++)for(let c=0;c<s;c++)r.isReserved(c,a)||r.xor(c,a,t(o,c,a))},n.getBestMask=function(o,r){const s=Object.keys(n.Patterns).length;let a=0,c=1/0;for(let l=0;l<s;l++){r(l),n.applyMask(l,o);const d=n.getPenaltyN1(o)+n.getPenaltyN2(o)+n.getPenaltyN3(o)+n.getPenaltyN4(o);n.applyMask(l,o),d<c&&(c=d,a=l)}return a}})(zf);var bl={};const Ni=ml,Ja=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Xa=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];bl.getBlocksCount=function(e,t){switch(t){case Ni.L:return Ja[(e-1)*4+0];case Ni.M:return Ja[(e-1)*4+1];case Ni.Q:return Ja[(e-1)*4+2];case Ni.H:return Ja[(e-1)*4+3];default:return}};bl.getTotalCodewordsCount=function(e,t){switch(t){case Ni.L:return Xa[(e-1)*4+0];case Ni.M:return Xa[(e-1)*4+1];case Ni.Q:return Xa[(e-1)*4+2];case Ni.H:return Xa[(e-1)*4+3];default:return}};var Hf={},vl={};const xs=new Uint8Array(512),Cc=new Uint8Array(256);(function(){let e=1;for(let t=0;t<255;t++)xs[t]=e,Cc[e]=t,e<<=1,e&256&&(e^=285);for(let t=255;t<512;t++)xs[t]=xs[t-255]})();vl.log=function(e){if(e<1)throw new Error("log("+e+")");return Cc[e]};vl.exp=function(e){return xs[e]};vl.mul=function(e,t){return e===0||t===0?0:xs[Cc[e]+Cc[t]]};(function(n){const e=vl;n.mul=function(i,o){const r=new Uint8Array(i.length+o.length-1);for(let s=0;s<i.length;s++)for(let a=0;a<o.length;a++)r[s+a]^=e.mul(i[s],o[a]);return r},n.mod=function(i,o){let r=new Uint8Array(i);for(;r.length-o.length>=0;){const s=r[0];for(let c=0;c<o.length;c++)r[c]^=e.mul(o[c],s);let a=0;for(;a<r.length&&r[a]===0;)a++;r=r.slice(a)}return r},n.generateECPolynomial=function(i){let o=new Uint8Array([1]);for(let r=0;r<i;r++)o=n.mul(o,new Uint8Array([1,e.exp(r)]));return o}})(Hf);const Vf=Hf;function Qd(n){this.genPoly=void 0,this.degree=n,this.degree&&this.initialize(this.degree)}Qd.prototype.initialize=function(e){this.degree=e,this.genPoly=Vf.generateECPolynomial(this.degree)};Qd.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const t=new Uint8Array(e.length+this.degree);t.set(e);const i=Vf.mod(t,this.genPoly),o=this.degree-i.length;if(o>0){const r=new Uint8Array(this.degree);return r.set(i,o),r}return i};var x4=Qd,Zf={},tr={},e0={};e0.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var ni={};const Gf="[0-9]+",C4="[A-Z $%*+\\-./:]+";let Js="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";Js=Js.replace(/u/g,"\\u");const _4="(?:(?![A-Z0-9 $%*+\\-./:]|"+Js+`)(?:.|[\r
]))+`;ni.KANJI=new RegExp(Js,"g");ni.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");ni.BYTE=new RegExp(_4,"g");ni.NUMERIC=new RegExp(Gf,"g");ni.ALPHANUMERIC=new RegExp(C4,"g");const E4=new RegExp("^"+Js+"$"),T4=new RegExp("^"+Gf+"$"),A4=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");ni.testKanji=function(e){return E4.test(e)};ni.testNumeric=function(e){return T4.test(e)};ni.testAlphanumeric=function(e){return A4.test(e)};(function(n){const e=e0,t=ni;n.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},n.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},n.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},n.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},n.MIXED={bit:-1},n.getCharCountIndicator=function(r,s){if(!r.ccBits)throw new Error("Invalid mode: "+r);if(!e.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?r.ccBits[0]:s<27?r.ccBits[1]:r.ccBits[2]},n.getBestModeForData=function(r){return t.testNumeric(r)?n.NUMERIC:t.testAlphanumeric(r)?n.ALPHANUMERIC:t.testKanji(r)?n.KANJI:n.BYTE},n.toString=function(r){if(r&&r.id)return r.id;throw new Error("Invalid mode")},n.isValid=function(r){return r&&r.bit&&r.ccBits};function i(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return n.NUMERIC;case"alphanumeric":return n.ALPHANUMERIC;case"kanji":return n.KANJI;case"byte":return n.BYTE;default:throw new Error("Unknown mode: "+o)}}n.from=function(r,s){if(n.isValid(r))return r;try{return i(r)}catch{return s}}})(tr);(function(n){const e=an,t=bl,i=ml,o=tr,r=e0,s=7973,a=e.getBCHDigit(s);function c(f,v,T){for(let S=1;S<=40;S++)if(v<=n.getCapacity(S,T,f))return S}function l(f,v){return o.getCharCountIndicator(f,v)+4}function d(f,v){let T=0;return f.forEach(function(S){const $=l(S.mode,v);T+=$+S.getBitsLength()}),T}function p(f,v){for(let T=1;T<=40;T++)if(d(f,T)<=n.getCapacity(T,v,o.MIXED))return T}n.from=function(v,T){return r.isValid(v)?parseInt(v,10):T},n.getCapacity=function(v,T,S){if(!r.isValid(v))throw new Error("Invalid QR Code version");typeof S>"u"&&(S=o.BYTE);const $=e.getSymbolTotalCodewords(v),B=t.getTotalCodewordsCount(v,T),_=($-B)*8;if(S===o.MIXED)return _;const U=_-l(S,v);switch(S){case o.NUMERIC:return Math.floor(U/10*3);case o.ALPHANUMERIC:return Math.floor(U/11*2);case o.KANJI:return Math.floor(U/13);case o.BYTE:default:return Math.floor(U/8)}},n.getBestVersionForData=function(v,T){let S;const $=i.from(T,i.M);if(Array.isArray(v)){if(v.length>1)return p(v,$);if(v.length===0)return 1;S=v[0]}else S=v;return c(S.mode,S.getLength(),$)},n.getEncodedBits=function(v){if(!r.isValid(v)||v<7)throw new Error("Invalid QR Code version");let T=v<<12;for(;e.getBCHDigit(T)-a>=0;)T^=s<<e.getBCHDigit(T)-a;return v<<12|T}})(Zf);var qf={};const zu=an,Yf=1335,k4=21522,wh=zu.getBCHDigit(Yf);qf.getEncodedBits=function(e,t){const i=e.bit<<3|t;let o=i<<10;for(;zu.getBCHDigit(o)-wh>=0;)o^=Yf<<zu.getBCHDigit(o)-wh;return(i<<10|o)^k4};var Kf={};const S4=tr;function Po(n){this.mode=S4.NUMERIC,this.data=n.toString()}Po.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};Po.prototype.getLength=function(){return this.data.length};Po.prototype.getBitsLength=function(){return Po.getBitsLength(this.data.length)};Po.prototype.write=function(e){let t,i,o;for(t=0;t+3<=this.data.length;t+=3)i=this.data.substr(t,3),o=parseInt(i,10),e.put(o,10);const r=this.data.length-t;r>0&&(i=this.data.substr(t),o=parseInt(i,10),e.put(o,r*3+1))};var $4=Po;const R4=tr,ru=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Oo(n){this.mode=R4.ALPHANUMERIC,this.data=n}Oo.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};Oo.prototype.getLength=function(){return this.data.length};Oo.prototype.getBitsLength=function(){return Oo.getBitsLength(this.data.length)};Oo.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let i=ru.indexOf(this.data[t])*45;i+=ru.indexOf(this.data[t+1]),e.put(i,11)}this.data.length%2&&e.put(ru.indexOf(this.data[t]),6)};var I4=Oo,P4=function(e){for(var t=[],i=e.length,o=0;o<i;o++){var r=e.charCodeAt(o);if(r>=55296&&r<=56319&&i>o+1){var s=e.charCodeAt(o+1);s>=56320&&s<=57343&&(r=(r-55296)*1024+s-56320+65536,o+=1)}if(r<128){t.push(r);continue}if(r<2048){t.push(r>>6|192),t.push(r&63|128);continue}if(r<55296||r>=57344&&r<65536){t.push(r>>12|224),t.push(r>>6&63|128),t.push(r&63|128);continue}if(r>=65536&&r<=1114111){t.push(r>>18|240),t.push(r>>12&63|128),t.push(r>>6&63|128),t.push(r&63|128);continue}t.push(239,191,189)}return new Uint8Array(t).buffer};const O4=P4,N4=tr;function No(n){this.mode=N4.BYTE,typeof n=="string"&&(n=O4(n)),this.data=new Uint8Array(n)}No.getBitsLength=function(e){return e*8};No.prototype.getLength=function(){return this.data.length};No.prototype.getBitsLength=function(){return No.getBitsLength(this.data.length)};No.prototype.write=function(n){for(let e=0,t=this.data.length;e<t;e++)n.put(this.data[e],8)};var M4=No;const B4=tr,D4=an;function Mo(n){this.mode=B4.KANJI,this.data=n}Mo.getBitsLength=function(e){return e*13};Mo.prototype.getLength=function(){return this.data.length};Mo.prototype.getBitsLength=function(){return Mo.getBitsLength(this.data.length)};Mo.prototype.write=function(n){let e;for(e=0;e<this.data.length;e++){let t=D4.toSJIS(this.data[e]);if(t>=33088&&t<=40956)t-=33088;else if(t>=57408&&t<=60351)t-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);t=(t>>>8&255)*192+(t&255),n.put(t,13)}};var L4=Mo,Jf={exports:{}};(function(n){var e={single_source_shortest_paths:function(t,i,o){var r={},s={};s[i]=0;var a=e.PriorityQueue.make();a.push(i,0);for(var c,l,d,p,f,v,T,S,$;!a.empty();){c=a.pop(),l=c.value,p=c.cost,f=t[l]||{};for(d in f)f.hasOwnProperty(d)&&(v=f[d],T=p+v,S=s[d],$=typeof s[d]>"u",($||S>T)&&(s[d]=T,a.push(d,T),r[d]=l))}if(typeof o<"u"&&typeof s[o]>"u"){var B=["Could not find a path from ",i," to ",o,"."].join("");throw new Error(B)}return r},extract_shortest_path_from_predecessor_list:function(t,i){for(var o=[],r=i;r;)o.push(r),t[r],r=t[r];return o.reverse(),o},find_path:function(t,i,o){var r=e.single_source_shortest_paths(t,i,o);return e.extract_shortest_path_from_predecessor_list(r,o)},PriorityQueue:{make:function(t){var i=e.PriorityQueue,o={},r;t=t||{};for(r in i)i.hasOwnProperty(r)&&(o[r]=i[r]);return o.queue=[],o.sorter=t.sorter||i.default_sorter,o},default_sorter:function(t,i){return t.cost-i.cost},push:function(t,i){var o={value:t,cost:i};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};n.exports=e})(Jf);var U4=Jf.exports;(function(n){const e=tr,t=$4,i=I4,o=M4,r=L4,s=ni,a=an,c=U4;function l(B){return unescape(encodeURIComponent(B)).length}function d(B,_,U){const D=[];let W;for(;(W=B.exec(U))!==null;)D.push({data:W[0],index:W.index,mode:_,length:W[0].length});return D}function p(B){const _=d(s.NUMERIC,e.NUMERIC,B),U=d(s.ALPHANUMERIC,e.ALPHANUMERIC,B);let D,W;return a.isKanjiModeEnabled()?(D=d(s.BYTE,e.BYTE,B),W=d(s.KANJI,e.KANJI,B)):(D=d(s.BYTE_KANJI,e.BYTE,B),W=[]),_.concat(U,D,W).sort(function(Q,g){return Q.index-g.index}).map(function(Q){return{data:Q.data,mode:Q.mode,length:Q.length}})}function f(B,_){switch(_){case e.NUMERIC:return t.getBitsLength(B);case e.ALPHANUMERIC:return i.getBitsLength(B);case e.KANJI:return r.getBitsLength(B);case e.BYTE:return o.getBitsLength(B)}}function v(B){return B.reduce(function(_,U){const D=_.length-1>=0?_[_.length-1]:null;return D&&D.mode===U.mode?(_[_.length-1].data+=U.data,_):(_.push(U),_)},[])}function T(B){const _=[];for(let U=0;U<B.length;U++){const D=B[U];switch(D.mode){case e.NUMERIC:_.push([D,{data:D.data,mode:e.ALPHANUMERIC,length:D.length},{data:D.data,mode:e.BYTE,length:D.length}]);break;case e.ALPHANUMERIC:_.push([D,{data:D.data,mode:e.BYTE,length:D.length}]);break;case e.KANJI:_.push([D,{data:D.data,mode:e.BYTE,length:l(D.data)}]);break;case e.BYTE:_.push([{data:D.data,mode:e.BYTE,length:l(D.data)}])}}return _}function S(B,_){const U={},D={start:{}};let W=["start"];for(let Z=0;Z<B.length;Z++){const Q=B[Z],g=[];for(let m=0;m<Q.length;m++){const b=Q[m],R=""+Z+m;g.push(R),U[R]={node:b,lastCount:0},D[R]={};for(let P=0;P<W.length;P++){const N=W[P];U[N]&&U[N].node.mode===b.mode?(D[N][R]=f(U[N].lastCount+b.length,b.mode)-f(U[N].lastCount,b.mode),U[N].lastCount+=b.length):(U[N]&&(U[N].lastCount=b.length),D[N][R]=f(b.length,b.mode)+4+e.getCharCountIndicator(b.mode,_))}}W=g}for(let Z=0;Z<W.length;Z++)D[W[Z]].end=0;return{map:D,table:U}}function $(B,_){let U;const D=e.getBestModeForData(B);if(U=e.from(_,D),U!==e.BYTE&&U.bit<D.bit)throw new Error('"'+B+'" cannot be encoded with mode '+e.toString(U)+`.
 Suggested mode is: `+e.toString(D));switch(U===e.KANJI&&!a.isKanjiModeEnabled()&&(U=e.BYTE),U){case e.NUMERIC:return new t(B);case e.ALPHANUMERIC:return new i(B);case e.KANJI:return new r(B);case e.BYTE:return new o(B)}}n.fromArray=function(_){return _.reduce(function(U,D){return typeof D=="string"?U.push($(D,null)):D.data&&U.push($(D.data,D.mode)),U},[])},n.fromString=function(_,U){const D=p(_,a.isKanjiModeEnabled()),W=T(D),Z=S(W,U),Q=c.find_path(Z.map,"start","end"),g=[];for(let m=1;m<Q.length-1;m++)g.push(Z.table[Q[m]].node);return n.fromArray(v(g))},n.rawSplit=function(_){return n.fromArray(p(_,a.isKanjiModeEnabled()))}})(Kf);const yl=an,ou=ml,j4=b4,W4=v4,F4=Wf,z4=Ff,Hu=zf,Vu=bl,H4=x4,_c=Zf,V4=qf,Z4=tr,su=Kf;function G4(n,e){const t=n.size,i=z4.getPositions(e);for(let o=0;o<i.length;o++){const r=i[o][0],s=i[o][1];for(let a=-1;a<=7;a++)if(!(r+a<=-1||t<=r+a))for(let c=-1;c<=7;c++)s+c<=-1||t<=s+c||(a>=0&&a<=6&&(c===0||c===6)||c>=0&&c<=6&&(a===0||a===6)||a>=2&&a<=4&&c>=2&&c<=4?n.set(r+a,s+c,!0,!0):n.set(r+a,s+c,!1,!0))}}function q4(n){const e=n.size;for(let t=8;t<e-8;t++){const i=t%2===0;n.set(t,6,i,!0),n.set(6,t,i,!0)}}function Y4(n,e){const t=F4.getPositions(e);for(let i=0;i<t.length;i++){const o=t[i][0],r=t[i][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?n.set(o+s,r+a,!0,!0):n.set(o+s,r+a,!1,!0)}}function K4(n,e){const t=n.size,i=_c.getEncodedBits(e);let o,r,s;for(let a=0;a<18;a++)o=Math.floor(a/3),r=a%3+t-8-3,s=(i>>a&1)===1,n.set(o,r,s,!0),n.set(r,o,s,!0)}function au(n,e,t){const i=n.size,o=V4.getEncodedBits(e,t);let r,s;for(r=0;r<15;r++)s=(o>>r&1)===1,r<6?n.set(r,8,s,!0):r<8?n.set(r+1,8,s,!0):n.set(i-15+r,8,s,!0),r<8?n.set(8,i-r-1,s,!0):r<9?n.set(8,15-r-1+1,s,!0):n.set(8,15-r-1,s,!0);n.set(i-8,8,1,!0)}function J4(n,e){const t=n.size;let i=-1,o=t-1,r=7,s=0;for(let a=t-1;a>0;a-=2)for(a===6&&a--;;){for(let c=0;c<2;c++)if(!n.isReserved(o,a-c)){let l=!1;s<e.length&&(l=(e[s]>>>r&1)===1),n.set(o,a-c,l),r--,r===-1&&(s++,r=7)}if(o+=i,o<0||t<=o){o-=i,i=-i;break}}}function X4(n,e,t){const i=new j4;t.forEach(function(c){i.put(c.mode.bit,4),i.put(c.getLength(),Z4.getCharCountIndicator(c.mode,n)),c.write(i)});const o=yl.getSymbolTotalCodewords(n),r=Vu.getTotalCodewordsCount(n,e),s=(o-r)*8;for(i.getLengthInBits()+4<=s&&i.put(0,4);i.getLengthInBits()%8!==0;)i.putBit(0);const a=(s-i.getLengthInBits())/8;for(let c=0;c<a;c++)i.put(c%2?17:236,8);return Q4(i,n,e)}function Q4(n,e,t){const i=yl.getSymbolTotalCodewords(e),o=Vu.getTotalCodewordsCount(e,t),r=i-o,s=Vu.getBlocksCount(e,t),a=i%s,c=s-a,l=Math.floor(i/s),d=Math.floor(r/s),p=d+1,f=l-d,v=new H4(f);let T=0;const S=new Array(s),$=new Array(s);let B=0;const _=new Uint8Array(n.buffer);for(let Q=0;Q<s;Q++){const g=Q<c?d:p;S[Q]=_.slice(T,T+g),$[Q]=v.encode(S[Q]),T+=g,B=Math.max(B,g)}const U=new Uint8Array(i);let D=0,W,Z;for(W=0;W<B;W++)for(Z=0;Z<s;Z++)W<S[Z].length&&(U[D++]=S[Z][W]);for(W=0;W<f;W++)for(Z=0;Z<s;Z++)U[D++]=$[Z][W];return U}function ev(n,e,t,i){let o;if(Array.isArray(n))o=su.fromArray(n);else if(typeof n=="string"){let l=e;if(!l){const d=su.rawSplit(n);l=_c.getBestVersionForData(d,t)}o=su.fromString(n,l||40)}else throw new Error("Invalid data");const r=_c.getBestVersionForData(o,t);if(!r)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=r;else if(e<r)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+r+`.
`);const s=X4(e,t,o),a=yl.getSymbolSize(e),c=new W4(a);return G4(c,e),q4(c),Y4(c,e),au(c,t,0),e>=7&&K4(c,e),J4(c,s),isNaN(i)&&(i=Hu.getBestMask(c,au.bind(null,c,t))),Hu.applyMask(i,c),au(c,t,i),{modules:c,version:e,errorCorrectionLevel:t,maskPattern:i,segments:o}}Uf.create=function(e,t){if(typeof e>"u"||e==="")throw new Error("No input text");let i=ou.M,o,r;return typeof t<"u"&&(i=ou.from(t.errorCorrectionLevel,ou.M),o=_c.from(t.version),r=Hu.from(t.maskPattern),t.toSJISFunc&&yl.setToSJISFunction(t.toSJISFunc)),ev(e,o,i,r)};var Xf={},t0={};(function(n){function e(t){if(typeof t=="number"&&(t=t.toString()),typeof t!="string")throw new Error("Color should be defined as hex string");let i=t.slice().replace("#","").split("");if(i.length<3||i.length===5||i.length>8)throw new Error("Invalid hex color: "+t);(i.length===3||i.length===4)&&(i=Array.prototype.concat.apply([],i.map(function(r){return[r,r]}))),i.length===6&&i.push("F","F");const o=parseInt(i.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+i.slice(0,6).join("")}}n.getOptions=function(i){i||(i={}),i.color||(i.color={});const o=typeof i.margin>"u"||i.margin===null||i.margin<0?4:i.margin,r=i.width&&i.width>=21?i.width:void 0,s=i.scale||4;return{width:r,scale:r?4:s,margin:o,color:{dark:e(i.color.dark||"#000000ff"),light:e(i.color.light||"#ffffffff")},type:i.type,rendererOpts:i.rendererOpts||{}}},n.getScale=function(i,o){return o.width&&o.width>=i+o.margin*2?o.width/(i+o.margin*2):o.scale},n.getImageWidth=function(i,o){const r=n.getScale(i,o);return Math.floor((i+o.margin*2)*r)},n.qrToImageData=function(i,o,r){const s=o.modules.size,a=o.modules.data,c=n.getScale(s,r),l=Math.floor((s+r.margin*2)*c),d=r.margin*c,p=[r.color.light,r.color.dark];for(let f=0;f<l;f++)for(let v=0;v<l;v++){let T=(f*l+v)*4,S=r.color.light;if(f>=d&&v>=d&&f<l-d&&v<l-d){const $=Math.floor((f-d)/c),B=Math.floor((v-d)/c);S=p[a[$*s+B]?1:0]}i[T++]=S.r,i[T++]=S.g,i[T++]=S.b,i[T]=S.a}}})(t0);(function(n){const e=t0;function t(o,r,s){o.clearRect(0,0,r.width,r.height),r.style||(r.style={}),r.height=s,r.width=s,r.style.height=s+"px",r.style.width=s+"px"}function i(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}n.render=function(r,s,a){let c=a,l=s;typeof c>"u"&&(!s||!s.getContext)&&(c=s,s=void 0),s||(l=i()),c=e.getOptions(c);const d=e.getImageWidth(r.modules.size,c),p=l.getContext("2d"),f=p.createImageData(d,d);return e.qrToImageData(f.data,r,c),t(p,l,d),p.putImageData(f,0,0),l},n.renderToDataURL=function(r,s,a){let c=a;typeof c>"u"&&(!s||!s.getContext)&&(c=s,s=void 0),c||(c={});const l=n.render(r,s,c),d=c.type||"image/png",p=c.rendererOpts||{};return l.toDataURL(d,p.quality)}})(Xf);var Qf={};const tv=t0;function mh(n,e){const t=n.a/255,i=e+'="'+n.hex+'"';return t<1?i+" "+e+'-opacity="'+t.toFixed(2).slice(1)+'"':i}function cu(n,e,t){let i=n+e;return typeof t<"u"&&(i+=" "+t),i}function nv(n,e,t){let i="",o=0,r=!1,s=0;for(let a=0;a<n.length;a++){const c=Math.floor(a%e),l=Math.floor(a/e);!c&&!r&&(r=!0),n[a]?(s++,a>0&&c>0&&n[a-1]||(i+=r?cu("M",c+t,.5+l+t):cu("m",o,0),o=0,r=!1),c+1<e&&n[a+1]||(i+=cu("h",s),s=0)):o++}return i}Qf.render=function(e,t,i){const o=tv.getOptions(t),r=e.modules.size,s=e.modules.data,a=r+o.margin*2,c=o.color.light.a?"<path "+mh(o.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",l="<path "+mh(o.color.dark,"stroke")+' d="'+nv(s,r,o.margin)+'"/>',d='viewBox="0 0 '+a+" "+a+'"',f='<svg xmlns="http://www.w3.org/2000/svg" '+(o.width?'width="'+o.width+'" height="'+o.width+'" ':"")+d+' shape-rendering="crispEdges">'+c+l+`</svg>
`;return typeof i=="function"&&i(null,f),f};const iv=w4,Zu=Uf,e1=Xf,rv=Qf;function n0(n,e,t,i,o){const r=[].slice.call(arguments,1),s=r.length,a=typeof r[s-1]=="function";if(!a&&!iv())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(o=t,t=e,e=i=void 0):s===3&&(e.getContext&&typeof o>"u"?(o=i,i=void 0):(o=i,i=t,t=e,e=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(t=e,e=i=void 0):s===2&&!e.getContext&&(i=t,t=e,e=void 0),new Promise(function(c,l){try{const d=Zu.create(t,i);c(n(d,e,i))}catch(d){l(d)}})}try{const c=Zu.create(t,i);o(null,n(c,e,i))}catch(c){o(c)}}$a.create=Zu.create;$a.toCanvas=n0.bind(null,e1.render);$a.toDataURL=n0.bind(null,e1.renderToDataURL);$a.toString=n0.bind(null,function(n,e,t){return rv.render(n,t)});const ov=.1,bh=2.5,ci=7;function lu(n,e,t){return n===e?!1:(n-e<0?e-n:n-e)<=t+ov}function sv(n,e){const t=Array.prototype.slice.call($a.create(n,{errorCorrectionLevel:e}).modules.data,0),i=Math.sqrt(t.length);return t.reduce((o,r,s)=>(s%i===0?o.push([r]):o[o.length-1].push(r))&&o,[])}const av={generate(n,e,t){const i="#141414",o="transparent",s=[],a=sv(n,"Q"),c=e/a.length,l=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];l.forEach(({x:S,y:$})=>{const B=(a.length-ci)*c*S,_=(a.length-ci)*c*$,U=.45;for(let D=0;D<l.length;D+=1){const W=c*(ci-D*2);s.push(J`
            <rect
              fill=${D===2?i:o}
              width=${D===0?W-5:W}
              rx= ${D===0?(W-5)*U:W*U}
              ry= ${D===0?(W-5)*U:W*U}
              stroke=${i}
              stroke-width=${D===0?5:0}
              height=${D===0?W-5:W}
              x= ${D===0?_+c*D+5/2:_+c*D}
              y= ${D===0?B+c*D+5/2:B+c*D}
            />
          `)}});const d=Math.floor((t+25)/c),p=a.length/2-d/2,f=a.length/2+d/2-1,v=[];a.forEach((S,$)=>{S.forEach((B,_)=>{if(a[$][_]&&!($<ci&&_<ci||$>a.length-(ci+1)&&_<ci||$<ci&&_>a.length-(ci+1))&&!($>p&&$<f&&_>p&&_<f)){const U=$*c+c/2,D=_*c+c/2;v.push([U,D])}})});const T={};return v.forEach(([S,$])=>{var B;T[S]?(B=T[S])==null||B.push($):T[S]=[$]}),Object.entries(T).map(([S,$])=>{const B=$.filter(_=>$.every(U=>!lu(_,U,c)));return[Number(S),B]}).forEach(([S,$])=>{$.forEach(B=>{s.push(J`<circle cx=${S} cy=${B} fill=${i} r=${c/bh} />`)})}),Object.entries(T).filter(([S,$])=>$.length>1).map(([S,$])=>{const B=$.filter(_=>$.some(U=>lu(_,U,c)));return[Number(S),B]}).map(([S,$])=>{$.sort((_,U)=>_<U?-1:1);const B=[];for(const _ of $){const U=B.find(D=>D.some(W=>lu(_,W,c)));U?U.push(_):B.push([_])}return[S,B.map(_=>[_[0],_[_.length-1]])]}).forEach(([S,$])=>{$.forEach(([B,_])=>{s.push(J`
              <line
                x1=${S}
                x2=${S}
                y1=${B}
                y2=${_}
                stroke=${i}
                stroke-width=${c/(bh/2)}
                stroke-linecap="round"
              />
            `)})}),s}},cv=re`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var no=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Gn=class extends se{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`--local-size: ${this.size}px`,F`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const e=this.theme==="light"?this.size:this.size-32;return J`
      <svg height=${e} width=${e}>
        ${av.generate(this.uri,e,this.arenaClear?0:e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?F`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:F`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};Gn.styles=[de,cv];no([C()],Gn.prototype,"uri",void 0);no([C({type:Number})],Gn.prototype,"size",void 0);no([C()],Gn.prototype,"theme",void 0);no([C()],Gn.prototype,"imageSrc",void 0);no([C()],Gn.prototype,"alt",void 0);no([C({type:Boolean})],Gn.prototype,"arenaClear",void 0);Gn=no([V("wui-qr-code")],Gn);const lv=re`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var uv=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Ec=class extends se{constructor(){super(...arguments),this.inputComponentRef=Zd()}render(){return F`
      <wui-input-text
        ${Gd(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const e=this.inputComponentRef.value,t=e==null?void 0:e.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};Ec.styles=[de,lv];Ec=uv([V("wui-search-bar")],Ec);const dv=re`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    box-sizing: border-box;
    max-height: 40px;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`;var Ia=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Zi=class extends se{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return F`
      <wui-icon-box
        size="sm"
        iconSize="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
        background="opaque"
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};Zi.styles=[de,dv];Ia([C()],Zi.prototype,"backgroundColor",void 0);Ia([C()],Zi.prototype,"iconColor",void 0);Ia([C()],Zi.prototype,"icon",void 0);Ia([C()],Zi.prototype,"message",void 0);Zi=Ia([V("wui-snackbar")],Zi);const hv=re`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var nr=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let kn=class extends se{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,t)=>{var o;const i=t===this.activeTab;return F`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${i}
          data-testid="tab-${(o=e.label)==null?void 0:o.toLowerCase()}"
        >
          ${this.iconTemplate(e)}
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(e){return e.icon?F`<wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>`:null}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){const i=this.buttons[this.activeTab],o=this.buttons[e],r=i==null?void 0:i.querySelector("wui-text"),s=o==null?void 0:o.querySelector("wui-text"),a=o==null?void 0:o.getBoundingClientRect(),c=s==null?void 0:s.getBoundingClientRect();i&&r&&!t&&e!==this.activeTab&&(r.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),i.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),o&&a&&c&&s&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(a.width+c.width)+6}px`,o.animate([{width:`${a.width+c.width}px`}],{duration:t?0:500,fill:"forwards",easing:"ease"}),s.animate([{opacity:1}],{duration:t?0:125,delay:t?0:200,fill:"forwards",easing:"ease"}))}};kn.styles=[de,Oe,hv];nr([C({type:Array})],kn.prototype,"tabs",void 0);nr([C()],kn.prototype,"onTabChange",void 0);nr([C({type:Array})],kn.prototype,"buttons",void 0);nr([C({type:Boolean})],kn.prototype,"disabled",void 0);nr([C()],kn.prototype,"localTabWidth",void 0);nr([Fd()],kn.prototype,"activeTab",void 0);nr([Fd()],kn.prototype,"isDense",void 0);kn=nr([V("wui-tabs")],kn);const pv=re`
  :host {
    display: block;
  }

  :host > button {
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-1xs);
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    border-width: 0px;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
  }

  :host > button wui-image {
    width: 24px;
    height: 24px;
    border-radius: var(--wui-border-radius-s);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }
`;var i0=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Bo=class extends se{constructor(){super(...arguments),this.text=""}render(){return F`
      <button ontouchstart>
        ${this.tokenTemplate()}
        <wui-text variant="paragraph-600" color="fg-100">${this.text}</wui-text>
      </button>
    `}tokenTemplate(){return this.imageSrc?F`<wui-image src=${this.imageSrc}></wui-image>`:F`
      <wui-icon-box
        size="sm"
        iconColor="fg-200"
        backgroundColor="fg-300"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};Bo.styles=[de,Oe,pv];i0([C()],Bo.prototype,"imageSrc",void 0);i0([C()],Bo.prototype,"text",void 0);Bo=i0([V("wui-token-button")],Bo);const fv=re`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);

    color: var(--wui-color-bg-100);
    position: relative;
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var xl=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Nr=class extends se{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.message=""}render(){return this.dataset.variant=this.variant,F`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name=${this.variant==="fill"?"cursor":"cursorTransparent"}
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};Nr.styles=[de,Oe,fv];xl([C()],Nr.prototype,"placement",void 0);xl([C()],Nr.prototype,"variant",void 0);xl([C()],Nr.prototype,"message",void 0);Nr=xl([V("wui-tooltip")],Nr);const gv=re`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: var(--wui-accent-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-accent-glass-010);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  wui-tooltip {
    padding: 7px var(--wui-spacing-s) 8px var(--wui-spacing-s);
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 0;
    display: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }

    button:active:enabled {
      background-color: var(--wui-accent-glass-020);
    }
  }
`;var r0=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Do=class extends se{constructor(){super(...arguments),this.text="",this.icon="card"}render(){return F`<button
        @mouseenter=${this.onMouseEnter.bind(this)}
        @mouseleave=${this.onMouseLeave.bind(this)}
        ontouchstart
      >
        <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
      </button>
      <wui-tooltip variant="shade" message=${this.text} placement="top"></wui-tooltip>`}onMouseEnter(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-tooltip");e&&(e.style.display="flex",e==null||e.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease",duration:250}))}onMouseLeave(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-tooltip");e&&(e.style.display="none",e==null||e.animate([{opacity:1},{opacity:0}],{fill:"forwards",easing:"ease",duration:200}))}};Do.styles=[de,Oe,gv];r0([C()],Do.prototype,"text",void 0);r0([C()],Do.prototype,"icon",void 0);Do=r0([V("wui-tooltip-select")],Do);const wv=re`
  :host > wui-flex {
    cursor: pointer;
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-l);
    width: 100%;
    background-color: transparent;
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition: background-color 0.2s linear;
  }

  :host > wui-flex:hover {
    background-color: var(--wui-gray-glass-002);
  }

  :host([disabled]) > wui-flex {
    opacity: 0.6;
  }

  :host([disabled]) > wui-flex:hover {
    background-color: transparent;
  }

  :host > wui-flex > wui-flex {
    flex: 1;
  }

  :host > wui-flex > wui-image {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    position: relative;
  }

  :host > wui-flex > wui-image::after {
    position: absolute;
    content: '';
    inset: 0;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-l);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }
`;var Xo=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let fi=class extends se{constructor(){super(...arguments),this.imageSrc=void 0,this.name=void 0,this.symbol=void 0,this.price=void 0,this.amount=void 0}render(){var t;const e=(t=Et.multiply(this.price,this.amount))==null?void 0:t.toFixed(3);return F`
      <wui-flex alignItems="center">
        ${this.visualTemplate()}
        <wui-flex flexDirection="column" gap="3xs">
          <wui-flex justifyContent="space-between">
            <wui-text variant="paragraph-500" color="fg-100">${this.name}</wui-text>
            ${e?F`
                  <wui-text variant="paragraph-500" color="fg-100">
                    $${ve.formatNumberToLocalString(e,3)}
                  </wui-text>
                `:null}
          </wui-flex>
          <wui-flex justifyContent="space-between">
            <wui-text variant="small-400" color="fg-200">${this.symbol}</wui-text>
            ${this.amount&&F`<wui-text variant="small-400" color="fg-200"
              >${ve.formatNumberToLocalString(this.amount,4)}</wui-text
            >`}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}visualTemplate(){return this.imageSrc?F`<wui-image width="40" height="40" src=${this.imageSrc}></wui-image>`:null}};fi.styles=[de,Oe,wv];Xo([C()],fi.prototype,"imageSrc",void 0);Xo([C()],fi.prototype,"name",void 0);Xo([C()],fi.prototype,"symbol",void 0);Xo([C()],fi.prototype,"price",void 0);Xo([C()],fi.prototype,"amount",void 0);fi=Xo([V("wui-token-list-item")],fi);const mv=re`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var Cl=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Mr=class extends se{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,F`${this.templateVisual()}`}templateVisual(){return this.imageSrc?F`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:F`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};Mr.styles=[de,mv];Cl([C()],Mr.prototype,"imageSrc",void 0);Cl([C()],Mr.prototype,"alt",void 0);Cl([C({type:Boolean})],Mr.prototype,"borderRadiusFull",void 0);Mr=Cl([V("wui-visual-thumbnail")],Mr);const bv=re`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-accent-glass-015);
  }

  button:hover {
    background-color: var(--wui-accent-glass-010) !important;
  }

  button:active {
    background-color: var(--wui-accent-glass-020) !important;
  }
`;var _l=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Br=class extends se{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return F`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};Br.styles=[de,Oe,bv];_l([C()],Br.prototype,"label",void 0);_l([C()],Br.prototype,"description",void 0);_l([C()],Br.prototype,"icon",void 0);Br=_l([V("wui-notice-card")],Br);const vv=re`
  button {
    height: auto;
    position: relative;
    flex-direction: column;
    gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  .overflowedContent {
    width: 100%;
    overflow: hidden;
  }

  .overflowedContent[data-active='false']:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, var(--wui-color-bg-200), transparent);
    border-bottom-left-radius: var(--wui-border-radius-xs);
    border-bottom-right-radius: var(--wui-border-radius-xs);
  }

  .heightContent {
    max-height: 100px;
  }

  pre {
    text-align: left;
    white-space: pre-wrap;
    height: auto;
    overflow-x: auto;
    overflow-wrap: anywhere;
  }
`;var o0=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};const uu=100;let Lo=class extends se{constructor(){super(...arguments),this.textTitle="",this.overflowedContent="",this.toggled=!1,this.enableAccordion=!1,this.scrollElement=void 0,this.scrollHeightElement=0}updated(e){super.updated(e),(e.has("textTitle")||e.has("overflowedContent"))&&setTimeout(()=>{this.checkHeight()},1)}checkHeight(){this.updateComplete.then(()=>{var i,o;const e=(i=this.shadowRoot)==null?void 0:i.querySelector(".heightContent"),t=(o=this.shadowRoot)==null?void 0:o.querySelector(".textContent");if(e&&t){this.scrollElement=e;const r=t==null?void 0:t.scrollHeight;r&&r>uu&&(this.enableAccordion=!0,this.scrollHeightElement=r,this.requestUpdate())}})}render(){return F`
      <button ontouchstart @click=${()=>this.onClick()}>
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-100">${this.textTitle}</wui-text>
          ${this.chevronTemplate()}
        </wui-flex>
        <div
          data-active=${this.enableAccordion?!!this.toggled:!0}
          class="overflowedContent"
        >
          <div class="heightContent">
            <wui-text class="textContent" variant="paragraph-400" color="fg-200">
              <pre>${this.overflowedContent}</pre>
            </wui-text>
          </div>
        </div>
      </button>
    `}onClick(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-icon");this.enableAccordion&&(this.toggled=!this.toggled,this.requestUpdate(),this.scrollElement&&this.scrollElement.animate([{maxHeight:this.toggled?`${uu}px`:`${this.scrollHeightElement}px`},{maxHeight:this.toggled?`${this.scrollHeightElement}px`:`${uu}px`}],{duration:300,fill:"forwards",easing:"ease"}),e&&e.animate([{transform:this.toggled?"rotate(0deg)":"rotate(180deg)"},{transform:this.toggled?"rotate(180deg)":"rotate(0deg)"}],{duration:300,fill:"forwards",easing:"ease"}))}chevronTemplate(){return this.enableAccordion?F` <wui-icon color="fg-100" size="sm" name="chevronBottom"></wui-icon>`:null}};Lo.styles=[de,Oe,vv];o0([C()],Lo.prototype,"textTitle",void 0);o0([C()],Lo.prototype,"overflowedContent",void 0);Lo=o0([V("wui-list-accordion")],Lo);const yv=re`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var El=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Dr=class extends se{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return F`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?F`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?F` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:F`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Dr.styles=[de,Oe,yv];El([C()],Dr.prototype,"imageSrc",void 0);El([C()],Dr.prototype,"textTitle",void 0);El([C()],Dr.prototype,"textValue",void 0);Dr=El([V("wui-list-content")],Dr);const xv=re`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button[data-transparent='true'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var Pa=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Gi=class extends se{constructor(){super(...arguments),this.imageSrc="",this.name="",this.disabled=!1,this.transparent=!1}render(){return F`
      <button data-transparent=${this.transparent} ?disabled=${this.disabled} ontouchstart>
        ${this.templateNetworkImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
      </button>
    `}templateNetworkImage(){return this.imageSrc?F`<wui-network-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-network-image>`:this.imageSrc?null:F`<wui-network-image size="sm" name=${this.name}></wui-network-image>`}};Gi.styles=[de,Oe,xv];Pa([C()],Gi.prototype,"imageSrc",void 0);Pa([C()],Gi.prototype,"name",void 0);Pa([C({type:Boolean})],Gi.prototype,"disabled",void 0);Pa([C({type:Boolean})],Gi.prototype,"transparent",void 0);Gi=Pa([V("wui-list-network")],Gi);const Cv=re`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--wui-spacing-l);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var Qo=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let gi=class extends se{constructor(){super(...arguments),this.amount="",this.networkCurreny="",this.networkImageUrl="",this.receiverAddress="",this.addressExplorerUrl=""}render(){return F`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">Sending</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">
            ${this.amount} ${this.networkCurreny}
          </wui-text>
          ${this.templateNetworkVisual()}
        </wui-flex>
      </wui-flex>
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">To</wui-text>
        <wui-chip
          icon="externalLink"
          variant="shadeSmall"
          href=${this.addressExplorerUrl}
          title=${this.receiverAddress}
        ></wui-chip>
      </wui-flex>
    `}templateNetworkVisual(){return this.networkImageUrl?F`<wui-image src=${this.networkImageUrl} alt="Network Image"></wui-image>`:F`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};gi.styles=[de,Oe,Cv];Qo([C()],gi.prototype,"amount",void 0);Qo([C()],gi.prototype,"networkCurreny",void 0);Qo([C()],gi.prototype,"networkImageUrl",void 0);Qo([C()],gi.prototype,"receiverAddress",void 0);Qo([C()],gi.prototype,"addressExplorerUrl",void 0);gi=Qo([V("wui-list-wallet-transaction")],gi);const _v=re`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
  }

  :host > wui-flex:hover {
    background-color: var(--wui-gray-glass-002);
  }

  .purchase-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: var(--wui-icon-box-size-lg);
    height: var(--wui-icon-box-size-lg);
  }

  .purchase-image-container wui-image {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
  }

  .purchase-image-container wui-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
  }

  .purchase-image-container wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`;var cn=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Rt=class extends se{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="Bought",this.purchaseValue="",this.purchaseCurrency="",this.date="",this.completed=!1,this.inProgress=!1,this.failed=!1,this.onClick=null,this.symbol=""}firstUpdated(){this.icon||this.fetchTokenImage()}render(){return F`
      <wui-flex>
        ${this.imageTemplate()}
        <wui-flex flexDirection="column" gap="4xs" flexGrow="1">
          <wui-flex gap="xxs" alignItems="center" justifyContent="flex-start">
            ${this.statusIconTemplate()}
            <wui-text variant="paragraph-500" color="fg-100"> ${this.label}</wui-text>
          </wui-flex>
          <wui-text variant="small-400" color="fg-200">
            + ${this.purchaseValue} ${this.purchaseCurrency}
          </wui-text>
        </wui-flex>
        ${this.inProgress?F`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:F`<wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>`}
      </wui-flex>
    `}async fetchTokenImage(){await Ce._fetchTokenImage(this.purchaseCurrency)}statusIconTemplate(){return this.inProgress?null:this.completed?this.boughtIconTemplate():this.errorIconTemplate()}errorIconTemplate(){return F`<wui-icon-box
      size="xxs"
      iconColor="error-100"
      backgroundColor="error-100"
      background="opaque"
      icon="close"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}imageTemplate(){const e=this.icon||`https://avatar.vercel.sh/andrew.svg?size=50&text=${this.symbol}`;return F`<wui-flex class="purchase-image-container">
      <wui-image src=${e}></wui-image>
    </wui-flex>`}boughtIconTemplate(){return F`<wui-icon-box
      size="xxs"
      iconColor="success-100"
      backgroundColor="success-100"
      background="opaque"
      icon="arrowBottom"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}};Rt.styles=[de,Oe,_v];cn([C({type:Boolean})],Rt.prototype,"disabled",void 0);cn([C()],Rt.prototype,"color",void 0);cn([C()],Rt.prototype,"label",void 0);cn([C()],Rt.prototype,"purchaseValue",void 0);cn([C()],Rt.prototype,"purchaseCurrency",void 0);cn([C()],Rt.prototype,"date",void 0);cn([C({type:Boolean})],Rt.prototype,"completed",void 0);cn([C({type:Boolean})],Rt.prototype,"inProgress",void 0);cn([C({type:Boolean})],Rt.prototype,"failed",void 0);cn([C()],Rt.prototype,"onClick",void 0);cn([C()],Rt.prototype,"symbol",void 0);cn([C()],Rt.prototype,"icon",void 0);Rt=cn([V("wui-onramp-activity-item")],Rt);const Ev=re`
  button {
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-gray-glass-002);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  button:hover {
    background-color: var(--wui-gray-glass-005);
  }

  .provider-image {
    width: var(--wui-spacing-3xl);
    min-width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    position: relative;
    overflow: hidden;
  }

  .provider-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
  }

  .network-icon {
    width: var(--wui-spacing-m);
    height: var(--wui-spacing-m);
    border-radius: calc(var(--wui-spacing-m) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: box-shadow;
  }

  button:hover .network-icon {
    box-shadow:
      0 0 0 3px var(--wui-gray-glass-005),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var ir=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Sn=class extends se{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="",this.feeRange="",this.loading=!1,this.onClick=null}render(){return F`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-visual name=${_n(this.name)} class="provider-image"></wui-visual>
        <wui-flex flexDirection="column" gap="4xs">
          <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
          <wui-flex alignItems="center" justifyContent="flex-start" gap="l">
            <wui-text variant="tiny-500" color="fg-100">
              <wui-text variant="tiny-400" color="fg-200">Fees</wui-text>
              ${this.feeRange}
            </wui-text>
            <wui-flex gap="xxs">
              <wui-icon name="bank" size="xs" color="fg-150"></wui-icon>
              <wui-icon name="card" size="xs" color="fg-150"></wui-icon>
            </wui-flex>
            ${this.networksTemplate()}
          </wui-flex>
        </wui-flex>
        ${this.loading?F`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:F`<wui-icon name="chevronRight" color="fg-200" size="sm"></wui-icon>`}
      </button>
    `}networksTemplate(){var i;const e=he.getRequestedCaipNetworks(),t=(i=e==null?void 0:e.filter(o=>o==null?void 0:o.imageId))==null?void 0:i.slice(0,5);return F`
      <wui-flex class="networks">
        ${t==null?void 0:t.map(o=>F`
            <wui-flex class="network-icon">
              <wui-image src=${_n(He.getNetworkImage(o))}></wui-image>
            </wui-flex>
          `)}
      </wui-flex>
    `}};Sn.styles=[de,Oe,Ev];ir([C({type:Boolean})],Sn.prototype,"disabled",void 0);ir([C()],Sn.prototype,"color",void 0);ir([C()],Sn.prototype,"name",void 0);ir([C()],Sn.prototype,"label",void 0);ir([C()],Sn.prototype,"feeRange",void 0);ir([C({type:Boolean})],Sn.prototype,"loading",void 0);ir([C()],Sn.prototype,"onClick",void 0);Sn=ir([V("wui-onramp-provider-item")],Sn);const Tv=re`
  button {
    display: flex;
    gap: var(--wui-spacing-3xs);
    align-items: center;
    padding: 6.25px var(--wui-spacing-xs) 7.25px var(--wui-spacing-s);
    background-color: var(--wui-gray-glass-090);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-060);
    transition: background-color var(--wui-duration-md) var(--wui-ease-inout-power-1);
    will-change: background-color;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-080);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-060);
    }
  }
`;var t1=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Xs=class extends se{constructor(){super(...arguments),this.text=""}render(){return F`<button ontouchstart>
      <wui-text variant="small-600" color="bg-100">${this.text}</wui-text>
      <wui-icon color="bg-100" size="xs" name="arrowRight"></wui-icon>
    </button>`}};Xs.styles=[de,Oe,Tv];t1([C()],Xs.prototype,"text",void 0);Xs=t1([V("wui-promo")],Xs);const Av=re`
  span {
    font-weight: 500;
    font-size: 40px;
    color: var(--wui-color-fg-100);
    line-height: 130%; /* 52px */
    letter-spacing: -1.6px;
    text-align: center;
  }

  .pennies {
    color: var(--wui-color-fg-200);
  }
`;var s0=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Uo=class extends se{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return F`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};Uo.styles=[de,Av];s0([C()],Uo.prototype,"dollars",void 0);s0([C()],Uo.prototype,"pennies",void 0);Uo=s0([V("wui-balance")],Uo);const kv=re`
  button {
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;var es=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let wi=class extends se{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.isProfileName=!1,this.address="",this.icon="chevronBottom"}render(){return F`<button ontouchstart data-testid="wui-profile-button">
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.networkImageTemplate()}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${ve.getTruncateString({string:this.address,charsStart:this.isProfileName?18:4,charsEnd:this.isProfileName?0:4,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name=${this.icon}></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}networkImageTemplate(){return this.networkSrc?F`<wui-image src=${this.networkSrc}></wui-image>`:F`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};wi.styles=[de,Oe,kv];es([C()],wi.prototype,"networkSrc",void 0);es([C()],wi.prototype,"avatarSrc",void 0);es([C({type:Boolean})],wi.prototype,"isProfileName",void 0);es([C()],wi.prototype,"address",void 0);es([C()],wi.prototype,"icon",void 0);wi=es([V("wui-profile-button")],wi);const Sv=re`
  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='shade'],
  button[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  button[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-success-glass-010);
    background-color: var(--wui-success-glass-010);
    color: var(--wui-color-success-100);
  }

  button[data-variant='error'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-error-glass-010);
    background-color: var(--wui-error-glass-010);
    color: var(--wui-color-error-100);
  }

  button[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  button[data-variant='transparent'],
  button[data-variant='success'],
  button[data-variant='shadeSmall'],
  button[data-variant='error'] {
    padding: 7px var(--wui-spacing-s) 7px 8px;
  }

  button[data-variant='transparent']:has(wui-text:first-child),
  button[data-variant='success']:has(wui-text:first-child),
  button[data-variant='shadeSmall']:has(wui-text:first-child),
  button[data-variant='error']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  button[data-variant='fill'],
  button[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  button[data-variant='fill']:has(wui-text:first-child),
  button[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  button[data-variant='fill'] > wui-image,
  button[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }

  button[data-variant='fill'] > wui-icon,
  button[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  button[data-variant='transparent'] > wui-image,
  button[data-variant='success'] > wui-image,
  button[data-variant='shadeSmall'] > wui-image,
  button[data-variant='error'] > wui-image {
    width: 14px;
    height: 14px;
  }

  button[data-variant='transparent'] > wui-icon,
  button[data-variant='success'] > wui-icon,
  button[data-variant='shadeSmall'] > wui-icon,
  button[data-variant='error'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='shade']:focus-visible,
  button[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='success']:focus-visible {
    background-color: var(--wui-success-glass-015);
  }

  button[data-variant='error']:focus-visible {
    background-color: var(--wui-error-glass-015);
  }

  button.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='shade']:hover,
    button[data-variant='shadeSmall']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    button[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }

    button[data-variant='success']:hover {
      background-color: var(--wui-success-glass-015);
    }

    button[data-variant='error']:hover {
      background-color: var(--wui-error-glass-015);
    }
  }

  button[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  button[data-variant='shade']:active,
  button[data-variant='shadeSmall']:active {
    background-color: var(--wui-gray-glass-020);
  }

  button[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='success']:active {
    background-color: var(--wui-success-glass-020);
  }

  button[data-variant='error']:active {
    background-color: var(--wui-error-glass-020);
  }
`;var ts=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let mi=class extends se{constructor(){super(...arguments),this.variant="fill",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.text=""}render(){const t=this.variant==="success"||this.variant==="transparent"||this.variant==="shadeSmall"?"small-600":"paragraph-600";return F`
      <button class=${this.disabled?"disabled":""} data-variant=${this.variant}>
        <wui-image src=${this.imageSrc}></wui-image>
        <wui-text variant=${t} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};mi.styles=[de,Oe,Sv];ts([C()],mi.prototype,"variant",void 0);ts([C()],mi.prototype,"imageSrc",void 0);ts([C({type:Boolean})],mi.prototype,"disabled",void 0);ts([C()],mi.prototype,"icon",void 0);ts([C()],mi.prototype,"text",void 0);mi=ts([V("wui-chip-button")],mi);const $v=re`
  button {
    display: flex;
    gap: var(--wui-spacing-xl);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-m) var(--wui-spacing-s);
  }

  wui-text {
    width: 100%;
  }

  wui-flex {
    width: auto;
  }

  .network-icon {
    width: var(--wui-spacing-2l);
    height: var(--wui-spacing-2l);
    border-radius: calc(var(--wui-spacing-2l) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var a0=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let jo=class extends se{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return F`
      <button ontouchstart>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){const e=this.networkImages.slice(0,5);return F` <wui-flex class="networks">
      ${e==null?void 0:e.map(t=>F` <wui-flex class="network-icon"> <wui-image src=${t}></wui-image> </wui-flex>`)}
    </wui-flex>`}};jo.styles=[de,Oe,$v];a0([C({type:Array})],jo.prototype,"networkImages",void 0);a0([C()],jo.prototype,"text",void 0);jo=a0([V("wui-compatible-network")],jo);const Rv=re`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var c0=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Wo=class extends se{constructor(){super(...arguments),this.icon="externalLink",this.text=""}render(){return F`
      <wui-flex gap="1xs" alignItems="center">
        <wui-icon-box
          size="sm"
          iconcolor="fg-200"
          backgroundcolor="fg-200"
          icon=${this.icon}
          background="transparent"
        ></wui-icon-box>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};Wo.styles=[de,Oe,Rv];c0([C()],Wo.prototype,"icon",void 0);c0([C()],Wo.prototype,"text",void 0);Wo=c0([V("wui-banner")],Wo);const Iv=re`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: var(--wui-border-radius-3xl);
  }
`;var io=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let qn=class extends se{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return F`
      <button data-clickable=${String(this.clickable)} ontouchstart>
        <wui-flex gap="s" alignItems="center">
          <wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>
          <wui-flex flexDirection="column" justifyContent="spaceBetween">
            <wui-text variant="paragraph-500" color="fg-100">${this.tokenName}</wui-text>
            <wui-text variant="small-400" color="fg-200">
              ${ve.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-text variant="paragraph-500" color="fg-100">$${this.tokenValue.toFixed(2)}</wui-text>
      </button>
    `}};qn.styles=[de,Oe,Iv];io([C()],qn.prototype,"tokenName",void 0);io([C()],qn.prototype,"tokenImageUrl",void 0);io([C({type:Number})],qn.prototype,"tokenValue",void 0);io([C()],qn.prototype,"tokenAmount",void 0);io([C()],qn.prototype,"tokenCurrency",void 0);io([C({type:Boolean})],qn.prototype,"clickable",void 0);qn=io([V("wui-list-token")],qn);const Pv=re`
  button {
    width: 100%;
    display: flex;
    gap: var(--wui-spacing-s);
    align-items: center;
    justify-content: flex-start;
    padding: var(--wui-spacing-s) var(--wui-spacing-m) var(--wui-spacing-s) var(--wui-spacing-s);
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
  }

  wui-flex {
    width: auto;
  }
`;var rr=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let $n=class extends se{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.iconBackgroundColor="accent-100",this.iconColor="accent-100",this.disabled=!1}render(){return F`
      <button ontouchstart ?disabled=${this.disabled}>
        <wui-icon-box
          iconColor=${this.iconColor}
          backgroundColor=${this.iconBackgroundColor}
          size="inherit"
          icon=${this.icon}
          iconSize="md"
        ></wui-icon-box>
        <wui-flex flexDirection="column" justifyContent="spaceBetween">
          ${this.titleTemplate()}
          <wui-text variant="small-400" color="fg-200"> ${this.description}</wui-text></wui-flex
        >
      </button>
    `}titleTemplate(){return this.tag?F` <wui-flex alignItems="center" gap="xxs"
        ><wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text
        ><wui-tag tagType="main" size="md">${this.tag}</wui-tag>
      </wui-flex>`:F`<wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>`}};$n.styles=[de,Oe,Pv];rr([C()],$n.prototype,"icon",void 0);rr([C()],$n.prototype,"text",void 0);rr([C()],$n.prototype,"description",void 0);rr([C()],$n.prototype,"tag",void 0);rr([C()],$n.prototype,"iconBackgroundColor",void 0);rr([C()],$n.prototype,"iconColor",void 0);rr([C({type:Boolean})],$n.prototype,"disabled",void 0);$n=rr([V("wui-list-description")],$n);const Ov=re`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    background: transparent;
    width: 100%;
    height: auto;
    font-family: var(--wui-font-family);
    color: var(--wui-color-fg-100);

    font-feature-settings: 'case' on;
    font-size: 32px;
    font-weight: var(--wui-font-weight-light);
    caret-color: var(--wui-color-accent-100);
    line-height: 130%;
    letter-spacing: -1.28px;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }
`,Nv=/[.*+?^${}()|[\]\\]/gu,Mv=/[0-9,.]/u;var Tl=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Lr=class extends se{constructor(){super(...arguments),this.inputElementRef=Zd(),this.disabled=!1,this.value="",this.placeholder="0"}render(){var e;return(e=this.inputElementRef)!=null&&e.value&&this.value&&(this.inputElementRef.value.value=this.value),F`<input
      ${Gd(this.inputElementRef)}
      type="text"
      inputmode="numeric"
      pattern="[0-9,.]*"
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      autofocus
      value=${this.value??""}
      @input=${this.dispatchInputChangeEvent.bind(this)}
    /> `}dispatchInputChangeEvent(e){var i,o;const t=e.data;t&&!Mv.test(t)&&(i=this.inputElementRef)!=null&&i.value&&(this.inputElementRef.value.value=this.value.replace(new RegExp(t.replace(Nv,"\\$&"),"gu"),"")),this.dispatchEvent(new CustomEvent("inputChange",{detail:(o=this.inputElementRef.value)==null?void 0:o.value,bubbles:!0,composed:!0}))}};Lr.styles=[de,Oe,Ov];Tl([C({type:Boolean})],Lr.prototype,"disabled",void 0);Tl([C({type:String})],Lr.prototype,"value",void 0);Tl([C({type:String})],Lr.prototype,"placeholder",void 0);Lr=Tl([V("wui-input-amount")],Lr);const Bv=re`
  :host {
    display: flex;
    gap: var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-002);
    background: var(--wui-gray-glass-002);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-xs) var(--wui-spacing-2xs)
      var(--wui-spacing-s);
    align-items: center;
  }

  wui-avatar,
  wui-icon,
  wui-image {
    width: 32px;
    height: 32px;
    border: 1px solid var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 2px var(--wui-gray-glass-002);
  }
`;var Oa=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let qi=class extends se{constructor(){super(...arguments),this.text="",this.address="",this.isAddress=!1}render(){return F`<wui-text variant="large-500" color="fg-100">${this.text}</wui-text>
      ${this.imageTemplate()}`}imageTemplate(){return this.isAddress?F`<wui-avatar address=${this.address} .imageSrc=${this.imageSrc}></wui-avatar>`:this.imageSrc?F`<wui-image src=${this.imageSrc}></wui-image>`:F`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};qi.styles=[de,Oe,Bv];Oa([C()],qi.prototype,"text",void 0);Oa([C()],qi.prototype,"address",void 0);Oa([C()],qi.prototype,"imageSrc",void 0);Oa([C({type:Boolean})],qi.prototype,"isAddress",void 0);qi=Oa([V("wui-preview-item")],qi);const Dv=re`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var bn=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Lt=class extends se{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&ve.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&ve.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&ve.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&ve.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&ve.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&ve.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&ve.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&ve.getSpacingStyles(this.margin,3)};
    `,F`<slot></slot>`}};Lt.styles=[de,Dv];bn([C()],Lt.prototype,"gridTemplateRows",void 0);bn([C()],Lt.prototype,"gridTemplateColumns",void 0);bn([C()],Lt.prototype,"justifyItems",void 0);bn([C()],Lt.prototype,"alignItems",void 0);bn([C()],Lt.prototype,"justifyContent",void 0);bn([C()],Lt.prototype,"alignContent",void 0);bn([C()],Lt.prototype,"columnGap",void 0);bn([C()],Lt.prototype,"rowGap",void 0);bn([C()],Lt.prototype,"gap",void 0);bn([C()],Lt.prototype,"padding",void 0);bn([C()],Lt.prototype,"margin",void 0);Lt=bn([V("wui-grid")],Lt);const Lv=re`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
  }
`;var n1=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Qs=class extends se{constructor(){super(...arguments),this.text=""}render(){return F`${this.template()}`}template(){return this.text?F`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};Qs.styles=[de,Lv];n1([C()],Qs.prototype,"text",void 0);Qs=n1([V("wui-separator")],Qs);const fs={interpolate(n,e,t){if(n.length!==2||e.length!==2)throw new Error("inputRange and outputRange must be an array of length 2");const i=n[0]||0,o=n[1]||0,r=e[0]||0,s=e[1]||0;return t<i?r:t>o?s:(s-r)/(o-i)*(t-i)+r}},Uv=3,jv=["receive","deposit","borrow","claim"],Wv=["withdraw","repay","burn"],Mi={getMonthName(n){const e=new Date;return e.setMonth(n),e.toLocaleString("en-US",{month:"long"})},getTransactionGroupTitle(n,e){const t=Nd.getYear(),i=this.getMonthName(e);return n===t?i:`${i} ${n}`},getTransactionImages(n){const[e,t]=n,i=!!e&&(n==null?void 0:n.every(s=>!!s.nft_info)),o=(n==null?void 0:n.length)>1;return(n==null?void 0:n.length)===2&&!i?[this.getTransactionImage(e),this.getTransactionImage(t)]:o?n.map(s=>this.getTransactionImage(s)):[this.getTransactionImage(e)]},getTransactionImage(n){return{type:Mi.getTransactionTransferTokenType(n),url:Mi.getTransactionImageURL(n)}},getTransactionImageURL(n){var o,r,s,a,c;let e;const t=!!(n!=null&&n.nft_info),i=!!(n!=null&&n.fungible_info);return n&&t?e=(s=(r=(o=n==null?void 0:n.nft_info)==null?void 0:o.content)==null?void 0:r.preview)==null?void 0:s.url:n&&i&&(e=(c=(a=n==null?void 0:n.fungible_info)==null?void 0:a.icon)==null?void 0:c.url),e},getTransactionTransferTokenType(n){if(n!=null&&n.fungible_info)return"FUNGIBLE";if(n!=null&&n.nft_info)return"NFT"},getTransactionDescriptions(n){var p,f,v;const e=(p=n==null?void 0:n.metadata)==null?void 0:p.operationType,t=n==null?void 0:n.transfers,i=((f=n==null?void 0:n.transfers)==null?void 0:f.length)>0,o=((v=n==null?void 0:n.transfers)==null?void 0:v.length)>1,r=i&&(t==null?void 0:t.every(T=>!!(T!=null&&T.fungible_info))),[s,a]=t;let c=this.getTransferDescription(s),l=this.getTransferDescription(a);if(!i)return(e==="send"||e==="receive")&&r?(c=ve.getTruncateString({string:n==null?void 0:n.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),l=ve.getTruncateString({string:n==null?void 0:n.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[c,l]):[n.metadata.status];if(o)return t.map(T=>this.getTransferDescription(T));let d="";return jv.includes(e)?d="+":Wv.includes(e)&&(d="-"),c=d.concat(c),[c]},getTransferDescription(n){var t;let e="";return n&&(n!=null&&n.nft_info?e=((t=n==null?void 0:n.nft_info)==null?void 0:t.name)||"-":n!=null&&n.fungible_info&&(e=this.getFungibleTransferDescription(n)||"-")),e},getFungibleTransferDescription(n){var i;return n?[this.getQuantityFixedValue(n==null?void 0:n.quantity.numeric),(i=n==null?void 0:n.fungible_info)==null?void 0:i.symbol].join(" ").trim():null},getQuantityFixedValue(n){return n?parseFloat(n).toFixed(Uv):null}},Fv=Object.freeze(Object.defineProperty({__proto__:null,MathUtil:fs,TransactionUtil:Mi,UiHelperUtil:ve,get WuiAccountButton(){return Vt},get WuiAllWalletsImage(){return Zs},get WuiAvatar(){return $r},get WuiBalance(){return Uo},get WuiBanner(){return Wo},get WuiButton(){return Qt},get WuiCard(){return mc},get WuiCardSelect(){return Hn},get WuiCardSelectLoader(){return Gs},get WuiChip(){return Vn},get WuiChipButton(){return mi},get WuiCompatibleNetwork(){return jo},get WuiConnectButton(){return ko},get WuiCtaButton(){return Rr},get WuiDetailsGroup(){return vc},get WuiDetailsGroupItem(){return qs},get WuiEmailInput(){return Ir},get WuiFlex(){return $t},get WuiGrid(){return Lt},get WuiIcon(){return Tr},get WuiIconBox(){return gn},get WuiIconLink(){return Vi},get WuiImage(){return Ar},get WuiInputAmount(){return Lr},get WuiInputElement(){return Ys},get WuiInputNumeric(){return So},get WuiInputText(){return An},get WuiLink(){return $o},get WuiListAccordion(){return Lo},get WuiListContent(){return Dr},get WuiListDescription(){return $n},get WuiListItem(){return en},get WuiListNetwork(){return Gi},get WuiListToken(){return qn},get WuiListWallet(){return Gt},get WuiListWalletTransaction(){return gi},get WuiLoadingHexagon(){return bc},get WuiLoadingSpinner(){return To},get WuiLoadingThumbnail(){return Vs},get WuiLogo(){return Ks},get WuiLogoSelect(){return Io},get WuiNetworkButton(){return Pr},get WuiNetworkImage(){return Hi},get WuiNoticeCard(){return Br},get WuiOnRampActivityItem(){return Rt},get WuiOnRampProviderItem(){return Sn},get WuiOtp(){return Or},get WuiPreviewItem(){return qi},get WuiProfileButton(){return wi},get WuiPromo(){return Xs},get WuiQrCode(){return Gn},get WuiSearchBar(){return Ec},get WuiSeparator(){return Qs},get WuiShimmer(){return kr},get WuiSnackbar(){return Zi},get WuiTabs(){return kn},get WuiTag(){return Ro},get WuiText(){return Sr},get WuiTokenButton(){return Bo},get WuiTokenListItem(){return fi},get WuiTooltip(){return Nr},get WuiTooltipSelect(){return Do},get WuiTransactionListItem(){return Zt},get WuiTransactionListItemLoader(){return xc},get WuiTransactionVisual(){return Zn},get WuiVisual(){return Ao},get WuiVisualThumbnail(){return Mr},get WuiWalletImage(){return zn},convertInputMaskBottomSvg:Ef,convertInputMaskTopSvg:Tf,customElement:V,initializeTheming:Af,setColorTheme:jd,setThemeVariables:kf},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oc=globalThis,l0=oc.ShadowRoot&&(oc.ShadyCSS===void 0||oc.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,u0=Symbol(),vh=new WeakMap;let i1=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==u0)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(l0&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=vh.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&vh.set(t,e))}return e}toString(){return this.cssText}};const zv=n=>new i1(typeof n=="string"?n:n+"",void 0,u0),Ee=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,o,r)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+n[r+1],n[0]);return new i1(t,n,u0)},Hv=(n,e)=>{if(l0)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),o=oc.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=t.cssText,n.appendChild(i)}},yh=l0?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return zv(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Vv,defineProperty:Zv,getOwnPropertyDescriptor:Gv,getOwnPropertyNames:qv,getOwnPropertySymbols:Yv,getPrototypeOf:Kv}=Object,Wi=globalThis,xh=Wi.trustedTypes,Jv=xh?xh.emptyScript:"",du=Wi.reactiveElementPolyfillSupport,Cs=(n,e)=>n,Tc={toAttribute(n,e){switch(e){case Boolean:n=n?Jv:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},d0=(n,e)=>!Vv(n,e),Ch={attribute:!0,type:String,converter:Tc,reflect:!1,hasChanged:d0};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Wi.litPropertyMetadata??(Wi.litPropertyMetadata=new WeakMap);class uo extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ch){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);o!==void 0&&Zv(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:r}=Gv(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get(){return o==null?void 0:o.call(this)},set(s){const a=o==null?void 0:o.call(this);r.call(this,s),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ch}static _$Ei(){if(this.hasOwnProperty(Cs("elementProperties")))return;const e=Kv(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Cs("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Cs("properties"))){const t=this.properties,i=[...qv(t),...Yv(t)];for(const o of i)this.createProperty(o,t[o])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,o]of t)this.elementProperties.set(i,o)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const o=this._$Eu(t,i);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const o of i)t.unshift(yh(o))}else e!==void 0&&t.push(yh(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Hv(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var r;const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(o!==void 0&&i.reflect===!0){const s=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:Tc).toAttribute(t,i.type);this._$Em=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,t){var r;const i=this.constructor,o=i._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const s=i.getPropertyOptions(o),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((r=s.converter)==null?void 0:r.fromAttribute)!==void 0?s.converter:Tc;this._$Em=o,this[o]=a.fromAttribute(t,s.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??d0)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,s]of this._$Ep)this[r]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[r,s]of o)s.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],s)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(o=>{var r;return(r=o.hostUpdate)==null?void 0:r.call(o)}),this.update(t)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var o;return(o=i.hostUpdated)==null?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}uo.elementStyles=[],uo.shadowRootOptions={mode:"open"},uo[Cs("elementProperties")]=new Map,uo[Cs("finalized")]=new Map,du==null||du({ReactiveElement:uo}),(Wi.reactiveElementVersions??(Wi.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _s=globalThis,Ac=_s.trustedTypes,_h=Ac?Ac.createPolicy("lit-html",{createHTML:n=>n}):void 0,r1="$lit$",Pi=`lit$${Math.random().toFixed(9).slice(2)}$`,o1="?"+Pi,Xv=`<${o1}>`,Ur=document,ea=()=>Ur.createComment(""),ta=n=>n===null||typeof n!="object"&&typeof n!="function",s1=Array.isArray,Qv=n=>s1(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",hu=`[ 	
\f\r]`,ds=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Eh=/-->/g,Th=/>/g,hr=RegExp(`>|${hu}(?:([^\\s"'>=/]+)(${hu}*=${hu}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ah=/'/g,kh=/"/g,a1=/^(?:script|style|textarea|title)$/i,ey=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),k=ey(1),Fo=Symbol.for("lit-noChange"),ct=Symbol.for("lit-nothing"),Sh=new WeakMap,mr=Ur.createTreeWalker(Ur,129);function c1(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return _h!==void 0?_h.createHTML(e):e}const ty=(n,e)=>{const t=n.length-1,i=[];let o,r=e===2?"<svg>":"",s=ds;for(let a=0;a<t;a++){const c=n[a];let l,d,p=-1,f=0;for(;f<c.length&&(s.lastIndex=f,d=s.exec(c),d!==null);)f=s.lastIndex,s===ds?d[1]==="!--"?s=Eh:d[1]!==void 0?s=Th:d[2]!==void 0?(a1.test(d[2])&&(o=RegExp("</"+d[2],"g")),s=hr):d[3]!==void 0&&(s=hr):s===hr?d[0]===">"?(s=o??ds,p=-1):d[1]===void 0?p=-2:(p=s.lastIndex-d[2].length,l=d[1],s=d[3]===void 0?hr:d[3]==='"'?kh:Ah):s===kh||s===Ah?s=hr:s===Eh||s===Th?s=ds:(s=hr,o=void 0);const v=s===hr&&n[a+1].startsWith("/>")?" ":"";r+=s===ds?c+Xv:p>=0?(i.push(l),c.slice(0,p)+r1+c.slice(p)+Pi+v):c+Pi+(p===-2?a:v)}return[c1(n,r+(n[t]||"<?>")+(e===2?"</svg>":"")),i]};class na{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let r=0,s=0;const a=e.length-1,c=this.parts,[l,d]=ty(e,t);if(this.el=na.createElement(l,i),mr.currentNode=this.el.content,t===2){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(o=mr.nextNode())!==null&&c.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const p of o.getAttributeNames())if(p.endsWith(r1)){const f=d[s++],v=o.getAttribute(p).split(Pi),T=/([.?@])?(.*)/.exec(f);c.push({type:1,index:r,name:T[2],strings:v,ctor:T[1]==="."?iy:T[1]==="?"?ry:T[1]==="@"?oy:Al}),o.removeAttribute(p)}else p.startsWith(Pi)&&(c.push({type:6,index:r}),o.removeAttribute(p));if(a1.test(o.tagName)){const p=o.textContent.split(Pi),f=p.length-1;if(f>0){o.textContent=Ac?Ac.emptyScript:"";for(let v=0;v<f;v++)o.append(p[v],ea()),mr.nextNode(),c.push({type:2,index:++r});o.append(p[f],ea())}}}else if(o.nodeType===8)if(o.data===o1)c.push({type:2,index:r});else{let p=-1;for(;(p=o.data.indexOf(Pi,p+1))!==-1;)c.push({type:7,index:r}),p+=Pi.length-1}r++}}static createElement(e,t){const i=Ur.createElement("template");return i.innerHTML=e,i}}function zo(n,e,t=n,i){var s,a;if(e===Fo)return e;let o=i!==void 0?(s=t._$Co)==null?void 0:s[i]:t._$Cl;const r=ta(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==r&&((a=o==null?void 0:o._$AO)==null||a.call(o,!1),r===void 0?o=void 0:(o=new r(n),o._$AT(n,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=o:t._$Cl=o),o!==void 0&&(e=zo(n,o._$AS(n,e.values),o,i)),e}class ny{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=((e==null?void 0:e.creationScope)??Ur).importNode(t,!0);mr.currentNode=o;let r=mr.nextNode(),s=0,a=0,c=i[0];for(;c!==void 0;){if(s===c.index){let l;c.type===2?l=new Na(r,r.nextSibling,this,e):c.type===1?l=new c.ctor(r,c.name,c.strings,this,e):c.type===6&&(l=new sy(r,this,e)),this._$AV.push(l),c=i[++a]}s!==(c==null?void 0:c.index)&&(r=mr.nextNode(),s++)}return mr.currentNode=Ur,o}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Na{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=ct,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=zo(this,e,t),ta(e)?e===ct||e==null||e===""?(this._$AH!==ct&&this._$AR(),this._$AH=ct):e!==this._$AH&&e!==Fo&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Qv(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==ct&&ta(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ur.createTextNode(e)),this._$AH=e}$(e){var r;const{values:t,_$litType$:i}=e,o=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=na.createElement(c1(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===o)this._$AH.p(t);else{const s=new ny(o,this),a=s.u(this.options);s.p(t),this.T(a),this._$AH=s}}_$AC(e){let t=Sh.get(e.strings);return t===void 0&&Sh.set(e.strings,t=new na(e)),t}k(e){s1(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const r of e)o===t.length?t.push(i=new Na(this.S(ea()),this.S(ea()),this,this.options)):i=t[o],i._$AI(r),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Al{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,r){this.type=1,this._$AH=ct,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=ct}_$AI(e,t=this,i,o){const r=this.strings;let s=!1;if(r===void 0)e=zo(this,e,t,0),s=!ta(e)||e!==this._$AH&&e!==Fo,s&&(this._$AH=e);else{const a=e;let c,l;for(e=r[0],c=0;c<r.length-1;c++)l=zo(this,a[i+c],t,c),l===Fo&&(l=this._$AH[c]),s||(s=!ta(l)||l!==this._$AH[c]),l===ct?e=ct:e!==ct&&(e+=(l??"")+r[c+1]),this._$AH[c]=l}s&&!o&&this.j(e)}j(e){e===ct?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class iy extends Al{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ct?void 0:e}}class ry extends Al{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ct)}}class oy extends Al{constructor(e,t,i,o,r){super(e,t,i,o,r),this.type=5}_$AI(e,t=this){if((e=zo(this,e,t,0)??ct)===Fo)return;const i=this._$AH,o=e===ct&&i!==ct||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==ct&&(i===ct||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class sy{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){zo(this,e)}}const pu=_s.litHtmlPolyfillSupport;pu==null||pu(na,Na),(_s.litHtmlVersions??(_s.litHtmlVersions=[])).push("3.1.3");const ay=(n,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let o=i._$litPart$;if(o===void 0){const r=(t==null?void 0:t.renderBefore)??null;i._$litPart$=o=new Na(e.insertBefore(ea(),r),r,void 0,t??{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let le=class extends uo{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ay(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Fo}};var rp;le._$litElement$=!0,le.finalized=!0,(rp=globalThis.litElementHydrateSupport)==null||rp.call(globalThis,{LitElement:le});const fu=globalThis.litElementPolyfillSupport;fu==null||fu({LitElement:le});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cy={attribute:!0,type:String,converter:Tc,reflect:!1,hasChanged:d0},ly=(n=cy,e,t)=>{const{kind:i,metadata:o}=t;let r=globalThis.litPropertyMetadata.get(o);if(r===void 0&&globalThis.litPropertyMetadata.set(o,r=new Map),r.set(t.name,n),i==="accessor"){const{name:s}=t;return{set(a){const c=e.get.call(this);e.set.call(this,a),this.requestUpdate(s,c,n)},init(a){return a!==void 0&&this.P(s,void 0,n),a}}}if(i==="setter"){const{name:s}=t;return function(a){const c=this[s];e.call(this,a),this.requestUpdate(s,c,n)}}throw Error("Unsupported decorator location: "+i)};function we(n){return(e,t)=>typeof t=="object"?ly(n,e,t):((i,o,r)=>{const s=o.hasOwnProperty(r);return o.constructor.createProperty(r,s?{...i,wrapped:!0}:i),s?Object.getOwnPropertyDescriptor(o,r):void 0})(n,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function j(n){return we({...n,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ye=n=>n??ct;var vn=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let tn=class extends le{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.address=ie.state.address,this.balanceVal=ie.state.balance,this.balanceSymbol=ie.state.balanceSymbol,this.profileName=ie.state.profileName,this.profileImage=ie.state.profileImage,this.network=he.state.caipNetwork,this.isUnsupportedChain=he.state.isUnsupportedChain,this.unsubscribe.push(ie.subscribe(e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),he.subscribeKey("caipNetwork",e=>this.network=e),he.subscribeKey("isUnsupportedChain",e=>this.isUnsupportedChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=He.getNetworkImage(this.network),t=this.balance==="show";return k`
      <wui-account-button
        .disabled=${!!this.disabled}
        .isUnsupportedChain=${this.isUnsupportedChain}
        address=${ye(this.address)}
        profileName=${ye(this.profileName)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${ye(e)}
        avatarSrc=${ye(this.profileImage)}
        balance=${t?oe.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid="account-button"
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
      >
      </wui-account-button>
    `}onClick(){this.isUnsupportedChain?Ie.open({view:"UnsupportedChain"}):Ie.open()}};vn([we({type:Boolean})],tn.prototype,"disabled",void 0);vn([we()],tn.prototype,"balance",void 0);vn([we()],tn.prototype,"charsStart",void 0);vn([we()],tn.prototype,"charsEnd",void 0);vn([j()],tn.prototype,"address",void 0);vn([j()],tn.prototype,"balanceVal",void 0);vn([j()],tn.prototype,"balanceSymbol",void 0);vn([j()],tn.prototype,"profileName",void 0);vn([j()],tn.prototype,"profileImage",void 0);vn([j()],tn.prototype,"network",void 0);vn([j()],tn.prototype,"isUnsupportedChain",void 0);tn=vn([V("w3m-account-button")],tn);const uy=Ee`
  :host {
    display: block;
    width: max-content;
  }
`;var Ei=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Rn=class extends le{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.isAccount=ie.state.isConnected,this.unsubscribe.push(ie.subscribeKey("isConnected",e=>{this.isAccount=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.isAccount?k`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${ye(this.balance)}
            .charsStart=${ye(this.charsStart)}
            .charsEnd=${ye(this.charsEnd)}
          >
          </w3m-account-button>
        `:k`
          <w3m-connect-button
            size=${ye(this.size)}
            label=${ye(this.label)}
            loadingLabel=${ye(this.loadingLabel)}
          ></w3m-connect-button>
        `}};Rn.styles=uy;Ei([we({type:Boolean})],Rn.prototype,"disabled",void 0);Ei([we()],Rn.prototype,"balance",void 0);Ei([we()],Rn.prototype,"size",void 0);Ei([we()],Rn.prototype,"label",void 0);Ei([we()],Rn.prototype,"loadingLabel",void 0);Ei([we()],Rn.prototype,"charsStart",void 0);Ei([we()],Rn.prototype,"charsEnd",void 0);Ei([j()],Rn.prototype,"isAccount",void 0);Rn=Ei([V("w3m-button")],Rn);var ns=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let jr=class extends le{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=Ie.state.open,this.loading=Ie.state.loading,this.unsubscribe.push(Ie.subscribe(e=>{this.open=e.open,this.loading=e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.loading||this.open;return k`
      <wui-connect-button
        size=${ye(this.size)}
        .loading=${e}
        @click=${this.onClick.bind(this)}
        data-testid="connect-button"
      >
        ${e?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?Ie.close():this.loading||Ie.open()}};ns([we()],jr.prototype,"size",void 0);ns([we()],jr.prototype,"label",void 0);ns([we()],jr.prototype,"loadingLabel",void 0);ns([j()],jr.prototype,"open",void 0);ns([j()],jr.prototype,"loading",void 0);jr=ns([V("w3m-connect-button")],jr);const dy=Ee`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`;var kl=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};const $h="scroll-lock";let Wr=class extends le{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=Ie.state.open,this.caipAddress=ie.state.caipAddress,this.isSiweEnabled=fe.state.isSiweEnabled,this.initializeTheming(),Ce.prefetch(),this.unsubscribe.push(Ie.subscribeKey("open",e=>e?this.onOpen():this.onClose()),ie.subscribe(e=>this.onNewAccountState(e))),me.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?k`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){if(this.isSiweEnabled){const{SIWEController:e}=await ui(()=>import("./BYF7TN1j.js"),__vite__mapDeps([3,1,2]),import.meta.url);e.state.status!=="success"&&await $e.disconnect()}Ie.close()}initializeTheming(){const{themeVariables:e,themeMode:t}=pt.state,i=ve.getColorTheme(t);Af(e,i)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,De.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards"}).finished,this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=$h,e.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${$h}"]`);e&&e.remove()}onAddKeyboardListener(){var t;this.abortController=new AbortController;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-card");e==null||e.focus(),window.addEventListener("keydown",i=>{if(i.key==="Escape")this.handleClose();else if(i.key==="Tab"){const{tagName:o}=i.target;o&&!o.includes("W3M-")&&!o.includes("WUI-")&&(e==null||e.focus())}},this.abortController)}onRemoveKeyboardListener(){var e;(e=this.abortController)==null||e.abort(),this.abortController=void 0}async onNewAccountState(e){const{isConnected:t,caipAddress:i}=e;if(this.isSiweEnabled){const{SIWEController:o}=await ui(()=>import("./BYF7TN1j.js"),__vite__mapDeps([3,1,2]),import.meta.url);t&&!this.caipAddress&&(this.caipAddress=i),t&&i&&this.caipAddress!==i&&(await o.signOut(),this.onSiweNavigation(),this.caipAddress=i);try{const r=await o.getSession();r&&!t?await o.signOut():t&&!r&&this.onSiweNavigation()}catch{t&&this.onSiweNavigation()}}}onSiweNavigation(){this.open?G.push("ConnectingSiwe"):Ie.open({view:"ConnectingSiwe"})}};Wr.styles=dy;kl([j()],Wr.prototype,"open",void 0);kl([j()],Wr.prototype,"caipAddress",void 0);kl([j()],Wr.prototype,"isSiweEnabled",void 0);Wr=kl([V("w3m-modal")],Wr);const hy=Object.freeze(Object.defineProperty({__proto__:null,get W3mModal(){return Wr}},Symbol.toStringTag,{value:"Module"})),py=Ee`
  :host {
    display: block;
    width: max-content;
  }
`;var is=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Yi=class extends le{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=he.state.caipNetwork,this.connected=ie.state.isConnected,this.loading=Ie.state.loading,this.isUnsupportedChain=he.state.isUnsupportedChain,this.unsubscribe.push(he.subscribeKey("caipNetwork",e=>this.network=e),ie.subscribeKey("isConnected",e=>this.connected=e),Ie.subscribeKey("loading",e=>this.loading=e),he.subscribeKey("isUnsupportedChain",e=>this.isUnsupportedChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var e;return k`
      <wui-network-button
        .disabled=${!!(this.disabled||this.loading)}
        .isUnsupportedChain=${this.isUnsupportedChain}
        imageSrc=${ye(He.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.isUnsupportedChain?"Switch Network":((e=this.network)==null?void 0:e.name)??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){this.loading||(me.sendEvent({type:"track",event:"CLICK_NETWORKS"}),Ie.open({view:"Networks"}))}};Yi.styles=py;is([we({type:Boolean})],Yi.prototype,"disabled",void 0);is([j()],Yi.prototype,"network",void 0);is([j()],Yi.prototype,"connected",void 0);is([j()],Yi.prototype,"loading",void 0);is([j()],Yi.prototype,"isUnsupportedChain",void 0);Yi=is([V("w3m-network-button")],Yi);const fy=Ee`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;var l1=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let kc=class extends le{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=G.state.view,this.unsubscribe.push(G.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([e])=>{const t=`${e==null?void 0:e.contentRect.height}px`;this.prevHeight!=="0px"&&(await this.animate([{height:this.prevHeight},{height:t}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=t}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){var e;(e=this.resizeObserver)==null||e.unobserve(this.getWrapper()),this.unsubscribe.forEach(t=>t())}render(){return k`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":return k`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return k`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return k`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return k`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return k`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return k`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return k`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return k`<w3m-account-view></w3m-account-view>`;case"AccountSettings":return k`<w3m-account-settings-view></w3m-account-settings-view>`;case"WhatIsAWallet":return k`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return k`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return k`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return k`<w3m-downloads-view></w3m-downloads-view>`;case"EmailVerifyOtp":return k`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return k`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"ApproveTransaction":return k`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"Transactions":return k`<w3m-transactions-view></w3m-transactions-view>`;case"UpgradeEmailWallet":return k`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpgradeToSmartAccount":return k`<w3m-upgrade-to-smart-account-view></w3m-upgrade-to-smart-account-view>`;case"UpdateEmailWallet":return k`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return k`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return k`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return k`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"OnRampProviders":return k`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return k`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return k`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return k`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"WhatIsABuy":return k`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"BuyInProgress":return k`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"WalletReceive":return k`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return k`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"Convert":return k`<w3m-convert-view></w3m-convert-view>`;case"ConvertSelectToken":return k`<w3m-convert-select-token-view></w3m-convert-select-token-view>`;case"ConvertPreview":return k`<w3m-convert-preview-view></w3m-convert-preview-view>`;case"WalletSend":return k`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return k`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return k`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;default:return k`<w3m-connect-view></w3m-connect-view>`}}async onViewChange(e){const{history:t}=G.state;let i=-10,o=10;t.length<this.prevHistoryLength&&(i=10,o=-10),this.prevHistoryLength=t.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${i}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=e,await this.animate([{opacity:0,transform:`translateX(${o}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("div")}};kc.styles=fy;l1([j()],kc.prototype,"view",void 0);kc=l1([V("w3m-router")],kc);const gy=Ee`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: var(--wui-border-radius-l);
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`;var or=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};const wy={USD:"$",EUR:"€",GBP:"£"},my=[100,250,500,1e3];let Yn=class extends le{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.connected=ie.state.isConnected,this.loading=Ie.state.loading,this.paymentCurrency=Fe.state.paymentCurrency,this.paymentAmount=Fe.state.paymentAmount,this.purchaseAmount=Fe.state.purchaseAmount,this.quoteLoading=Fe.state.quotesLoading,this.unsubscribe.push(ie.subscribeKey("isConnected",e=>{this.connected=e}),Ie.subscribeKey("loading",e=>{this.loading=e}),Fe.subscribe(e=>{this.paymentCurrency=e.paymentCurrency,this.paymentAmount=e.paymentAmount,this.purchaseAmount=e.purchaseAmount,this.quoteLoading=e.quotesLoading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return k`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <w3m-swap-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount||0}
          ></w3m-swap-input>
          <w3m-swap-input
            type="Token"
            .value=${this.purchaseAmount||0}
            .loading=${this.quoteLoading}
          ></w3m-swap-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="xs">
            ${my.map(e=>{var t;return k`<wui-button
                  variant=${this.paymentAmount===e?"accentBg":"shade"}
                  size="xs"
                  textVariant="paragraph-600"
                  fullWidth
                  @click=${()=>this.selectPresetAmount(e)}
                  >${`${wy[((t=this.paymentCurrency)==null?void 0:t.id)||"USD"]} ${e}`}</wui-button
                >`})}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `}templateButton(){return this.connected?k`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="fill"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>`:k`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accentBg"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`}getQuotes(){this.loading||Ie.open({view:"OnRampProviders"})}openModal(){Ie.open({view:"Connect"})}async onPaymentAmountChange(e){Fe.setPaymentAmount(Number(e.detail)),await Fe.getQuote()}async selectPresetAmount(e){Fe.setPaymentAmount(e),await Fe.getQuote()}};Yn.styles=gy;or([we({type:Boolean})],Yn.prototype,"disabled",void 0);or([j()],Yn.prototype,"connected",void 0);or([j()],Yn.prototype,"loading",void 0);or([j()],Yn.prototype,"paymentCurrency",void 0);or([j()],Yn.prototype,"paymentAmount",void 0);or([j()],Yn.prototype,"purchaseAmount",void 0);or([j()],Yn.prototype,"quoteLoading",void 0);Yn=or([V("w3m-onramp-widget")],Yn);const by=Ee`
  wui-flex {
    width: 100%;
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;

    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }
`;var u1={},Sl={};Sl.byteLength=xy;Sl.toByteArray=_y;Sl.fromByteArray=Ay;var Wn=[],pn=[],vy=typeof Uint8Array<"u"?Uint8Array:Array,gu="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var co=0,yy=gu.length;co<yy;++co)Wn[co]=gu[co],pn[gu.charCodeAt(co)]=co;pn[45]=62;pn[95]=63;function d1(n){var e=n.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=n.indexOf("=");t===-1&&(t=e);var i=t===e?0:4-t%4;return[t,i]}function xy(n){var e=d1(n),t=e[0],i=e[1];return(t+i)*3/4-i}function Cy(n,e,t){return(e+t)*3/4-t}function _y(n){var e,t=d1(n),i=t[0],o=t[1],r=new vy(Cy(n,i,o)),s=0,a=o>0?i-4:i,c;for(c=0;c<a;c+=4)e=pn[n.charCodeAt(c)]<<18|pn[n.charCodeAt(c+1)]<<12|pn[n.charCodeAt(c+2)]<<6|pn[n.charCodeAt(c+3)],r[s++]=e>>16&255,r[s++]=e>>8&255,r[s++]=e&255;return o===2&&(e=pn[n.charCodeAt(c)]<<2|pn[n.charCodeAt(c+1)]>>4,r[s++]=e&255),o===1&&(e=pn[n.charCodeAt(c)]<<10|pn[n.charCodeAt(c+1)]<<4|pn[n.charCodeAt(c+2)]>>2,r[s++]=e>>8&255,r[s++]=e&255),r}function Ey(n){return Wn[n>>18&63]+Wn[n>>12&63]+Wn[n>>6&63]+Wn[n&63]}function Ty(n,e,t){for(var i,o=[],r=e;r<t;r+=3)i=(n[r]<<16&16711680)+(n[r+1]<<8&65280)+(n[r+2]&255),o.push(Ey(i));return o.join("")}function Ay(n){for(var e,t=n.length,i=t%3,o=[],r=16383,s=0,a=t-i;s<a;s+=r)o.push(Ty(n,s,s+r>a?a:s+r));return i===1?(e=n[t-1],o.push(Wn[e>>2]+Wn[e<<4&63]+"==")):i===2&&(e=(n[t-2]<<8)+n[t-1],o.push(Wn[e>>10]+Wn[e>>4&63]+Wn[e<<2&63]+"=")),o.join("")}var h0={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */h0.read=function(n,e,t,i,o){var r,s,a=o*8-i-1,c=(1<<a)-1,l=c>>1,d=-7,p=t?o-1:0,f=t?-1:1,v=n[e+p];for(p+=f,r=v&(1<<-d)-1,v>>=-d,d+=a;d>0;r=r*256+n[e+p],p+=f,d-=8);for(s=r&(1<<-d)-1,r>>=-d,d+=i;d>0;s=s*256+n[e+p],p+=f,d-=8);if(r===0)r=1-l;else{if(r===c)return s?NaN:(v?-1:1)*(1/0);s=s+Math.pow(2,i),r=r-l}return(v?-1:1)*s*Math.pow(2,r-i)};h0.write=function(n,e,t,i,o,r){var s,a,c,l=r*8-o-1,d=(1<<l)-1,p=d>>1,f=o===23?Math.pow(2,-24)-Math.pow(2,-77):0,v=i?0:r-1,T=i?1:-1,S=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=d):(s=Math.floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-s))<1&&(s--,c*=2),s+p>=1?e+=f/c:e+=f*Math.pow(2,1-p),e*c>=2&&(s++,c/=2),s+p>=d?(a=0,s=d):s+p>=1?(a=(e*c-1)*Math.pow(2,o),s=s+p):(a=e*Math.pow(2,p-1)*Math.pow(2,o),s=0));o>=8;n[t+v]=a&255,v+=T,a/=256,o-=8);for(s=s<<o|a,l+=o;l>0;n[t+v]=s&255,v+=T,s/=256,l-=8);n[t+v-T]|=S*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(n){const e=Sl,t=h0,i=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;n.Buffer=a,n.SlowBuffer=_,n.INSPECT_MAX_BYTES=50;const o=2147483647;n.kMaxLength=o,a.TYPED_ARRAY_SUPPORT=r(),!a.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function r(){try{const w=new Uint8Array(1),u={foo:function(){return 42}};return Object.setPrototypeOf(u,Uint8Array.prototype),Object.setPrototypeOf(w,u),w.foo()===42}catch{return!1}}Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}});function s(w){if(w>o)throw new RangeError('The value "'+w+'" is invalid for option "size"');const u=new Uint8Array(w);return Object.setPrototypeOf(u,a.prototype),u}function a(w,u,h){if(typeof w=="number"){if(typeof u=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return p(w)}return c(w,u,h)}a.poolSize=8192;function c(w,u,h){if(typeof w=="string")return f(w,u);if(ArrayBuffer.isView(w))return T(w);if(w==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof w);if(Ln(w,ArrayBuffer)||w&&Ln(w.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Ln(w,SharedArrayBuffer)||w&&Ln(w.buffer,SharedArrayBuffer)))return S(w,u,h);if(typeof w=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const x=w.valueOf&&w.valueOf();if(x!=null&&x!==w)return a.from(x,u,h);const L=$(w);if(L)return L;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof w[Symbol.toPrimitive]=="function")return a.from(w[Symbol.toPrimitive]("string"),u,h);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof w)}a.from=function(w,u,h){return c(w,u,h)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array);function l(w){if(typeof w!="number")throw new TypeError('"size" argument must be of type number');if(w<0)throw new RangeError('The value "'+w+'" is invalid for option "size"')}function d(w,u,h){return l(w),w<=0?s(w):u!==void 0?typeof h=="string"?s(w).fill(u,h):s(w).fill(u):s(w)}a.alloc=function(w,u,h){return d(w,u,h)};function p(w){return l(w),s(w<0?0:B(w)|0)}a.allocUnsafe=function(w){return p(w)},a.allocUnsafeSlow=function(w){return p(w)};function f(w,u){if((typeof u!="string"||u==="")&&(u="utf8"),!a.isEncoding(u))throw new TypeError("Unknown encoding: "+u);const h=U(w,u)|0;let x=s(h);const L=x.write(w,u);return L!==h&&(x=x.slice(0,L)),x}function v(w){const u=w.length<0?0:B(w.length)|0,h=s(u);for(let x=0;x<u;x+=1)h[x]=w[x]&255;return h}function T(w){if(Ln(w,Uint8Array)){const u=new Uint8Array(w);return S(u.buffer,u.byteOffset,u.byteLength)}return v(w)}function S(w,u,h){if(u<0||w.byteLength<u)throw new RangeError('"offset" is outside of buffer bounds');if(w.byteLength<u+(h||0))throw new RangeError('"length" is outside of buffer bounds');let x;return u===void 0&&h===void 0?x=new Uint8Array(w):h===void 0?x=new Uint8Array(w,u):x=new Uint8Array(w,u,h),Object.setPrototypeOf(x,a.prototype),x}function $(w){if(a.isBuffer(w)){const u=B(w.length)|0,h=s(u);return h.length===0||w.copy(h,0,0,u),h}if(w.length!==void 0)return typeof w.length!="number"||Dl(w.length)?s(0):v(w);if(w.type==="Buffer"&&Array.isArray(w.data))return v(w.data)}function B(w){if(w>=o)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o.toString(16)+" bytes");return w|0}function _(w){return+w!=w&&(w=0),a.alloc(+w)}a.isBuffer=function(u){return u!=null&&u._isBuffer===!0&&u!==a.prototype},a.compare=function(u,h){if(Ln(u,Uint8Array)&&(u=a.from(u,u.offset,u.byteLength)),Ln(h,Uint8Array)&&(h=a.from(h,h.offset,h.byteLength)),!a.isBuffer(u)||!a.isBuffer(h))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(u===h)return 0;let x=u.length,L=h.length;for(let H=0,q=Math.min(x,L);H<q;++H)if(u[H]!==h[H]){x=u[H],L=h[H];break}return x<L?-1:L<x?1:0},a.isEncoding=function(u){switch(String(u).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(u,h){if(!Array.isArray(u))throw new TypeError('"list" argument must be an Array of Buffers');if(u.length===0)return a.alloc(0);let x;if(h===void 0)for(h=0,x=0;x<u.length;++x)h+=u[x].length;const L=a.allocUnsafe(h);let H=0;for(x=0;x<u.length;++x){let q=u[x];if(Ln(q,Uint8Array))H+q.length>L.length?(a.isBuffer(q)||(q=a.from(q)),q.copy(L,H)):Uint8Array.prototype.set.call(L,q,H);else if(a.isBuffer(q))q.copy(L,H);else throw new TypeError('"list" argument must be an Array of Buffers');H+=q.length}return L};function U(w,u){if(a.isBuffer(w))return w.length;if(ArrayBuffer.isView(w)||Ln(w,ArrayBuffer))return w.byteLength;if(typeof w!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof w);const h=w.length,x=arguments.length>2&&arguments[2]===!0;if(!x&&h===0)return 0;let L=!1;for(;;)switch(u){case"ascii":case"latin1":case"binary":return h;case"utf8":case"utf-8":return Bl(w).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return h*2;case"hex":return h>>>1;case"base64":return E0(w).length;default:if(L)return x?-1:Bl(w).length;u=(""+u).toLowerCase(),L=!0}}a.byteLength=U;function D(w,u,h){let x=!1;if((u===void 0||u<0)&&(u=0),u>this.length||((h===void 0||h>this.length)&&(h=this.length),h<=0)||(h>>>=0,u>>>=0,h<=u))return"";for(w||(w="utf8");;)switch(w){case"hex":return z(this,u,h);case"utf8":case"utf-8":return M(this,u,h);case"ascii":return O(this,u,h);case"latin1":case"binary":return I(this,u,h);case"base64":return N(this,u,h);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Y(this,u,h);default:if(x)throw new TypeError("Unknown encoding: "+w);w=(w+"").toLowerCase(),x=!0}}a.prototype._isBuffer=!0;function W(w,u,h){const x=w[u];w[u]=w[h],w[h]=x}a.prototype.swap16=function(){const u=this.length;if(u%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let h=0;h<u;h+=2)W(this,h,h+1);return this},a.prototype.swap32=function(){const u=this.length;if(u%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let h=0;h<u;h+=4)W(this,h,h+3),W(this,h+1,h+2);return this},a.prototype.swap64=function(){const u=this.length;if(u%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let h=0;h<u;h+=8)W(this,h,h+7),W(this,h+1,h+6),W(this,h+2,h+5),W(this,h+3,h+4);return this},a.prototype.toString=function(){const u=this.length;return u===0?"":arguments.length===0?M(this,0,u):D.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(u){if(!a.isBuffer(u))throw new TypeError("Argument must be a Buffer");return this===u?!0:a.compare(this,u)===0},a.prototype.inspect=function(){let u="";const h=n.INSPECT_MAX_BYTES;return u=this.toString("hex",0,h).replace(/(.{2})/g,"$1 ").trim(),this.length>h&&(u+=" ... "),"<Buffer "+u+">"},i&&(a.prototype[i]=a.prototype.inspect),a.prototype.compare=function(u,h,x,L,H){if(Ln(u,Uint8Array)&&(u=a.from(u,u.offset,u.byteLength)),!a.isBuffer(u))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof u);if(h===void 0&&(h=0),x===void 0&&(x=u?u.length:0),L===void 0&&(L=0),H===void 0&&(H=this.length),h<0||x>u.length||L<0||H>this.length)throw new RangeError("out of range index");if(L>=H&&h>=x)return 0;if(L>=H)return-1;if(h>=x)return 1;if(h>>>=0,x>>>=0,L>>>=0,H>>>=0,this===u)return 0;let q=H-L,Be=x-h;const nt=Math.min(q,Be),Je=this.slice(L,H),it=u.slice(h,x);for(let Ge=0;Ge<nt;++Ge)if(Je[Ge]!==it[Ge]){q=Je[Ge],Be=it[Ge];break}return q<Be?-1:Be<q?1:0};function Z(w,u,h,x,L){if(w.length===0)return-1;if(typeof h=="string"?(x=h,h=0):h>2147483647?h=2147483647:h<-2147483648&&(h=-2147483648),h=+h,Dl(h)&&(h=L?0:w.length-1),h<0&&(h=w.length+h),h>=w.length){if(L)return-1;h=w.length-1}else if(h<0)if(L)h=0;else return-1;if(typeof u=="string"&&(u=a.from(u,x)),a.isBuffer(u))return u.length===0?-1:Q(w,u,h,x,L);if(typeof u=="number")return u=u&255,typeof Uint8Array.prototype.indexOf=="function"?L?Uint8Array.prototype.indexOf.call(w,u,h):Uint8Array.prototype.lastIndexOf.call(w,u,h):Q(w,[u],h,x,L);throw new TypeError("val must be string, number or Buffer")}function Q(w,u,h,x,L){let H=1,q=w.length,Be=u.length;if(x!==void 0&&(x=String(x).toLowerCase(),x==="ucs2"||x==="ucs-2"||x==="utf16le"||x==="utf-16le")){if(w.length<2||u.length<2)return-1;H=2,q/=2,Be/=2,h/=2}function nt(it,Ge){return H===1?it[Ge]:it.readUInt16BE(Ge*H)}let Je;if(L){let it=-1;for(Je=h;Je<q;Je++)if(nt(w,Je)===nt(u,it===-1?0:Je-it)){if(it===-1&&(it=Je),Je-it+1===Be)return it*H}else it!==-1&&(Je-=Je-it),it=-1}else for(h+Be>q&&(h=q-Be),Je=h;Je>=0;Je--){let it=!0;for(let Ge=0;Ge<Be;Ge++)if(nt(w,Je+Ge)!==nt(u,Ge)){it=!1;break}if(it)return Je}return-1}a.prototype.includes=function(u,h,x){return this.indexOf(u,h,x)!==-1},a.prototype.indexOf=function(u,h,x){return Z(this,u,h,x,!0)},a.prototype.lastIndexOf=function(u,h,x){return Z(this,u,h,x,!1)};function g(w,u,h,x){h=Number(h)||0;const L=w.length-h;x?(x=Number(x),x>L&&(x=L)):x=L;const H=u.length;x>H/2&&(x=H/2);let q;for(q=0;q<x;++q){const Be=parseInt(u.substr(q*2,2),16);if(Dl(Be))return q;w[h+q]=Be}return q}function m(w,u,h,x){return Fa(Bl(u,w.length-h),w,h,x)}function b(w,u,h,x){return Fa(M1(u),w,h,x)}function R(w,u,h,x){return Fa(E0(u),w,h,x)}function P(w,u,h,x){return Fa(B1(u,w.length-h),w,h,x)}a.prototype.write=function(u,h,x,L){if(h===void 0)L="utf8",x=this.length,h=0;else if(x===void 0&&typeof h=="string")L=h,x=this.length,h=0;else if(isFinite(h))h=h>>>0,isFinite(x)?(x=x>>>0,L===void 0&&(L="utf8")):(L=x,x=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const H=this.length-h;if((x===void 0||x>H)&&(x=H),u.length>0&&(x<0||h<0)||h>this.length)throw new RangeError("Attempt to write outside buffer bounds");L||(L="utf8");let q=!1;for(;;)switch(L){case"hex":return g(this,u,h,x);case"utf8":case"utf-8":return m(this,u,h,x);case"ascii":case"latin1":case"binary":return b(this,u,h,x);case"base64":return R(this,u,h,x);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return P(this,u,h,x);default:if(q)throw new TypeError("Unknown encoding: "+L);L=(""+L).toLowerCase(),q=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function N(w,u,h){return u===0&&h===w.length?e.fromByteArray(w):e.fromByteArray(w.slice(u,h))}function M(w,u,h){h=Math.min(w.length,h);const x=[];let L=u;for(;L<h;){const H=w[L];let q=null,Be=H>239?4:H>223?3:H>191?2:1;if(L+Be<=h){let nt,Je,it,Ge;switch(Be){case 1:H<128&&(q=H);break;case 2:nt=w[L+1],(nt&192)===128&&(Ge=(H&31)<<6|nt&63,Ge>127&&(q=Ge));break;case 3:nt=w[L+1],Je=w[L+2],(nt&192)===128&&(Je&192)===128&&(Ge=(H&15)<<12|(nt&63)<<6|Je&63,Ge>2047&&(Ge<55296||Ge>57343)&&(q=Ge));break;case 4:nt=w[L+1],Je=w[L+2],it=w[L+3],(nt&192)===128&&(Je&192)===128&&(it&192)===128&&(Ge=(H&15)<<18|(nt&63)<<12|(Je&63)<<6|it&63,Ge>65535&&Ge<1114112&&(q=Ge))}}q===null?(q=65533,Be=1):q>65535&&(q-=65536,x.push(q>>>10&1023|55296),q=56320|q&1023),x.push(q),L+=Be}return A(x)}const E=4096;function A(w){const u=w.length;if(u<=E)return String.fromCharCode.apply(String,w);let h="",x=0;for(;x<u;)h+=String.fromCharCode.apply(String,w.slice(x,x+=E));return h}function O(w,u,h){let x="";h=Math.min(w.length,h);for(let L=u;L<h;++L)x+=String.fromCharCode(w[L]&127);return x}function I(w,u,h){let x="";h=Math.min(w.length,h);for(let L=u;L<h;++L)x+=String.fromCharCode(w[L]);return x}function z(w,u,h){const x=w.length;(!u||u<0)&&(u=0),(!h||h<0||h>x)&&(h=x);let L="";for(let H=u;H<h;++H)L+=D1[w[H]];return L}function Y(w,u,h){const x=w.slice(u,h);let L="";for(let H=0;H<x.length-1;H+=2)L+=String.fromCharCode(x[H]+x[H+1]*256);return L}a.prototype.slice=function(u,h){const x=this.length;u=~~u,h=h===void 0?x:~~h,u<0?(u+=x,u<0&&(u=0)):u>x&&(u=x),h<0?(h+=x,h<0&&(h=0)):h>x&&(h=x),h<u&&(h=u);const L=this.subarray(u,h);return Object.setPrototypeOf(L,a.prototype),L};function K(w,u,h){if(w%1!==0||w<0)throw new RangeError("offset is not uint");if(w+u>h)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUintLE=a.prototype.readUIntLE=function(u,h,x){u=u>>>0,h=h>>>0,x||K(u,h,this.length);let L=this[u],H=1,q=0;for(;++q<h&&(H*=256);)L+=this[u+q]*H;return L},a.prototype.readUintBE=a.prototype.readUIntBE=function(u,h,x){u=u>>>0,h=h>>>0,x||K(u,h,this.length);let L=this[u+--h],H=1;for(;h>0&&(H*=256);)L+=this[u+--h]*H;return L},a.prototype.readUint8=a.prototype.readUInt8=function(u,h){return u=u>>>0,h||K(u,1,this.length),this[u]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(u,h){return u=u>>>0,h||K(u,2,this.length),this[u]|this[u+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(u,h){return u=u>>>0,h||K(u,2,this.length),this[u]<<8|this[u+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(u,h){return u=u>>>0,h||K(u,4,this.length),(this[u]|this[u+1]<<8|this[u+2]<<16)+this[u+3]*16777216},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(u,h){return u=u>>>0,h||K(u,4,this.length),this[u]*16777216+(this[u+1]<<16|this[u+2]<<8|this[u+3])},a.prototype.readBigUInt64LE=Ti(function(u){u=u>>>0,Ye(u,"offset");const h=this[u],x=this[u+7];(h===void 0||x===void 0)&&st(u,this.length-8);const L=h+this[++u]*2**8+this[++u]*2**16+this[++u]*2**24,H=this[++u]+this[++u]*2**8+this[++u]*2**16+x*2**24;return BigInt(L)+(BigInt(H)<<BigInt(32))}),a.prototype.readBigUInt64BE=Ti(function(u){u=u>>>0,Ye(u,"offset");const h=this[u],x=this[u+7];(h===void 0||x===void 0)&&st(u,this.length-8);const L=h*2**24+this[++u]*2**16+this[++u]*2**8+this[++u],H=this[++u]*2**24+this[++u]*2**16+this[++u]*2**8+x;return(BigInt(L)<<BigInt(32))+BigInt(H)}),a.prototype.readIntLE=function(u,h,x){u=u>>>0,h=h>>>0,x||K(u,h,this.length);let L=this[u],H=1,q=0;for(;++q<h&&(H*=256);)L+=this[u+q]*H;return H*=128,L>=H&&(L-=Math.pow(2,8*h)),L},a.prototype.readIntBE=function(u,h,x){u=u>>>0,h=h>>>0,x||K(u,h,this.length);let L=h,H=1,q=this[u+--L];for(;L>0&&(H*=256);)q+=this[u+--L]*H;return H*=128,q>=H&&(q-=Math.pow(2,8*h)),q},a.prototype.readInt8=function(u,h){return u=u>>>0,h||K(u,1,this.length),this[u]&128?(255-this[u]+1)*-1:this[u]},a.prototype.readInt16LE=function(u,h){u=u>>>0,h||K(u,2,this.length);const x=this[u]|this[u+1]<<8;return x&32768?x|4294901760:x},a.prototype.readInt16BE=function(u,h){u=u>>>0,h||K(u,2,this.length);const x=this[u+1]|this[u]<<8;return x&32768?x|4294901760:x},a.prototype.readInt32LE=function(u,h){return u=u>>>0,h||K(u,4,this.length),this[u]|this[u+1]<<8|this[u+2]<<16|this[u+3]<<24},a.prototype.readInt32BE=function(u,h){return u=u>>>0,h||K(u,4,this.length),this[u]<<24|this[u+1]<<16|this[u+2]<<8|this[u+3]},a.prototype.readBigInt64LE=Ti(function(u){u=u>>>0,Ye(u,"offset");const h=this[u],x=this[u+7];(h===void 0||x===void 0)&&st(u,this.length-8);const L=this[u+4]+this[u+5]*2**8+this[u+6]*2**16+(x<<24);return(BigInt(L)<<BigInt(32))+BigInt(h+this[++u]*2**8+this[++u]*2**16+this[++u]*2**24)}),a.prototype.readBigInt64BE=Ti(function(u){u=u>>>0,Ye(u,"offset");const h=this[u],x=this[u+7];(h===void 0||x===void 0)&&st(u,this.length-8);const L=(h<<24)+this[++u]*2**16+this[++u]*2**8+this[++u];return(BigInt(L)<<BigInt(32))+BigInt(this[++u]*2**24+this[++u]*2**16+this[++u]*2**8+x)}),a.prototype.readFloatLE=function(u,h){return u=u>>>0,h||K(u,4,this.length),t.read(this,u,!0,23,4)},a.prototype.readFloatBE=function(u,h){return u=u>>>0,h||K(u,4,this.length),t.read(this,u,!1,23,4)},a.prototype.readDoubleLE=function(u,h){return u=u>>>0,h||K(u,8,this.length),t.read(this,u,!0,52,8)},a.prototype.readDoubleBE=function(u,h){return u=u>>>0,h||K(u,8,this.length),t.read(this,u,!1,52,8)};function ae(w,u,h,x,L,H){if(!a.isBuffer(w))throw new TypeError('"buffer" argument must be a Buffer instance');if(u>L||u<H)throw new RangeError('"value" argument is out of bounds');if(h+x>w.length)throw new RangeError("Index out of range")}a.prototype.writeUintLE=a.prototype.writeUIntLE=function(u,h,x,L){if(u=+u,h=h>>>0,x=x>>>0,!L){const Be=Math.pow(2,8*x)-1;ae(this,u,h,x,Be,0)}let H=1,q=0;for(this[h]=u&255;++q<x&&(H*=256);)this[h+q]=u/H&255;return h+x},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(u,h,x,L){if(u=+u,h=h>>>0,x=x>>>0,!L){const Be=Math.pow(2,8*x)-1;ae(this,u,h,x,Be,0)}let H=x-1,q=1;for(this[h+H]=u&255;--H>=0&&(q*=256);)this[h+H]=u/q&255;return h+x},a.prototype.writeUint8=a.prototype.writeUInt8=function(u,h,x){return u=+u,h=h>>>0,x||ae(this,u,h,1,255,0),this[h]=u&255,h+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(u,h,x){return u=+u,h=h>>>0,x||ae(this,u,h,2,65535,0),this[h]=u&255,this[h+1]=u>>>8,h+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(u,h,x){return u=+u,h=h>>>0,x||ae(this,u,h,2,65535,0),this[h]=u>>>8,this[h+1]=u&255,h+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(u,h,x){return u=+u,h=h>>>0,x||ae(this,u,h,4,4294967295,0),this[h+3]=u>>>24,this[h+2]=u>>>16,this[h+1]=u>>>8,this[h]=u&255,h+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(u,h,x){return u=+u,h=h>>>0,x||ae(this,u,h,4,4294967295,0),this[h]=u>>>24,this[h+1]=u>>>16,this[h+2]=u>>>8,this[h+3]=u&255,h+4};function Ae(w,u,h,x,L){jt(u,x,L,w,h,7);let H=Number(u&BigInt(4294967295));w[h++]=H,H=H>>8,w[h++]=H,H=H>>8,w[h++]=H,H=H>>8,w[h++]=H;let q=Number(u>>BigInt(32)&BigInt(4294967295));return w[h++]=q,q=q>>8,w[h++]=q,q=q>>8,w[h++]=q,q=q>>8,w[h++]=q,h}function Ne(w,u,h,x,L){jt(u,x,L,w,h,7);let H=Number(u&BigInt(4294967295));w[h+7]=H,H=H>>8,w[h+6]=H,H=H>>8,w[h+5]=H,H=H>>8,w[h+4]=H;let q=Number(u>>BigInt(32)&BigInt(4294967295));return w[h+3]=q,q=q>>8,w[h+2]=q,q=q>>8,w[h+1]=q,q=q>>8,w[h]=q,h+8}a.prototype.writeBigUInt64LE=Ti(function(u,h=0){return Ae(this,u,h,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeBigUInt64BE=Ti(function(u,h=0){return Ne(this,u,h,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeIntLE=function(u,h,x,L){if(u=+u,h=h>>>0,!L){const nt=Math.pow(2,8*x-1);ae(this,u,h,x,nt-1,-nt)}let H=0,q=1,Be=0;for(this[h]=u&255;++H<x&&(q*=256);)u<0&&Be===0&&this[h+H-1]!==0&&(Be=1),this[h+H]=(u/q>>0)-Be&255;return h+x},a.prototype.writeIntBE=function(u,h,x,L){if(u=+u,h=h>>>0,!L){const nt=Math.pow(2,8*x-1);ae(this,u,h,x,nt-1,-nt)}let H=x-1,q=1,Be=0;for(this[h+H]=u&255;--H>=0&&(q*=256);)u<0&&Be===0&&this[h+H+1]!==0&&(Be=1),this[h+H]=(u/q>>0)-Be&255;return h+x},a.prototype.writeInt8=function(u,h,x){return u=+u,h=h>>>0,x||ae(this,u,h,1,127,-128),u<0&&(u=255+u+1),this[h]=u&255,h+1},a.prototype.writeInt16LE=function(u,h,x){return u=+u,h=h>>>0,x||ae(this,u,h,2,32767,-32768),this[h]=u&255,this[h+1]=u>>>8,h+2},a.prototype.writeInt16BE=function(u,h,x){return u=+u,h=h>>>0,x||ae(this,u,h,2,32767,-32768),this[h]=u>>>8,this[h+1]=u&255,h+2},a.prototype.writeInt32LE=function(u,h,x){return u=+u,h=h>>>0,x||ae(this,u,h,4,2147483647,-2147483648),this[h]=u&255,this[h+1]=u>>>8,this[h+2]=u>>>16,this[h+3]=u>>>24,h+4},a.prototype.writeInt32BE=function(u,h,x){return u=+u,h=h>>>0,x||ae(this,u,h,4,2147483647,-2147483648),u<0&&(u=4294967295+u+1),this[h]=u>>>24,this[h+1]=u>>>16,this[h+2]=u>>>8,this[h+3]=u&255,h+4},a.prototype.writeBigInt64LE=Ti(function(u,h=0){return Ae(this,u,h,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),a.prototype.writeBigInt64BE=Ti(function(u,h=0){return Ne(this,u,h,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function xe(w,u,h,x,L,H){if(h+x>w.length)throw new RangeError("Index out of range");if(h<0)throw new RangeError("Index out of range")}function Me(w,u,h,x,L){return u=+u,h=h>>>0,L||xe(w,u,h,4),t.write(w,u,h,x,23,4),h+4}a.prototype.writeFloatLE=function(u,h,x){return Me(this,u,h,!0,x)},a.prototype.writeFloatBE=function(u,h,x){return Me(this,u,h,!1,x)};function Ze(w,u,h,x,L){return u=+u,h=h>>>0,L||xe(w,u,h,8),t.write(w,u,h,x,52,8),h+8}a.prototype.writeDoubleLE=function(u,h,x){return Ze(this,u,h,!0,x)},a.prototype.writeDoubleBE=function(u,h,x){return Ze(this,u,h,!1,x)},a.prototype.copy=function(u,h,x,L){if(!a.isBuffer(u))throw new TypeError("argument should be a Buffer");if(x||(x=0),!L&&L!==0&&(L=this.length),h>=u.length&&(h=u.length),h||(h=0),L>0&&L<x&&(L=x),L===x||u.length===0||this.length===0)return 0;if(h<0)throw new RangeError("targetStart out of bounds");if(x<0||x>=this.length)throw new RangeError("Index out of range");if(L<0)throw new RangeError("sourceEnd out of bounds");L>this.length&&(L=this.length),u.length-h<L-x&&(L=u.length-h+x);const H=L-x;return this===u&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(h,x,L):Uint8Array.prototype.set.call(u,this.subarray(x,L),h),H},a.prototype.fill=function(u,h,x,L){if(typeof u=="string"){if(typeof h=="string"?(L=h,h=0,x=this.length):typeof x=="string"&&(L=x,x=this.length),L!==void 0&&typeof L!="string")throw new TypeError("encoding must be a string");if(typeof L=="string"&&!a.isEncoding(L))throw new TypeError("Unknown encoding: "+L);if(u.length===1){const q=u.charCodeAt(0);(L==="utf8"&&q<128||L==="latin1")&&(u=q)}}else typeof u=="number"?u=u&255:typeof u=="boolean"&&(u=Number(u));if(h<0||this.length<h||this.length<x)throw new RangeError("Out of range index");if(x<=h)return this;h=h>>>0,x=x===void 0?this.length:x>>>0,u||(u=0);let H;if(typeof u=="number")for(H=h;H<x;++H)this[H]=u;else{const q=a.isBuffer(u)?u:a.from(u,L),Be=q.length;if(Be===0)throw new TypeError('The value "'+u+'" is invalid for argument "value"');for(H=0;H<x-h;++H)this[H+h]=q[H%Be]}return this};const yt={};function Ot(w,u,h){yt[w]=class extends h{constructor(){super(),Object.defineProperty(this,"message",{value:u.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${w}]`,this.stack,delete this.name}get code(){return w}set code(L){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:L,writable:!0})}toString(){return`${this.name} [${w}]: ${this.message}`}}}Ot("ERR_BUFFER_OUT_OF_BOUNDS",function(w){return w?`${w} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),Ot("ERR_INVALID_ARG_TYPE",function(w,u){return`The "${w}" argument must be of type number. Received type ${typeof u}`},TypeError),Ot("ERR_OUT_OF_RANGE",function(w,u,h){let x=`The value of "${w}" is out of range.`,L=h;return Number.isInteger(h)&&Math.abs(h)>2**32?L=rt(String(h)):typeof h=="bigint"&&(L=String(h),(h>BigInt(2)**BigInt(32)||h<-(BigInt(2)**BigInt(32)))&&(L=rt(L)),L+="n"),x+=` It must be ${u}. Received ${L}`,x},RangeError);function rt(w){let u="",h=w.length;const x=w[0]==="-"?1:0;for(;h>=x+4;h-=3)u=`_${w.slice(h-3,h)}${u}`;return`${w.slice(0,h)}${u}`}function ot(w,u,h){Ye(u,"offset"),(w[u]===void 0||w[u+h]===void 0)&&st(u,w.length-(h+1))}function jt(w,u,h,x,L,H){if(w>h||w<u){const q=typeof u=="bigint"?"n":"";let Be;throw H>3?u===0||u===BigInt(0)?Be=`>= 0${q} and < 2${q} ** ${(H+1)*8}${q}`:Be=`>= -(2${q} ** ${(H+1)*8-1}${q}) and < 2 ** ${(H+1)*8-1}${q}`:Be=`>= ${u}${q} and <= ${h}${q}`,new yt.ERR_OUT_OF_RANGE("value",Be,w)}ot(x,L,H)}function Ye(w,u){if(typeof w!="number")throw new yt.ERR_INVALID_ARG_TYPE(u,"number",w)}function st(w,u,h){throw Math.floor(w)!==w?(Ye(w,h),new yt.ERR_OUT_OF_RANGE(h||"offset","an integer",w)):u<0?new yt.ERR_BUFFER_OUT_OF_BOUNDS:new yt.ERR_OUT_OF_RANGE(h||"offset",`>= ${h?1:0} and <= ${u}`,w)}const Ke=/[^+/0-9A-Za-z-_]/g;function N1(w){if(w=w.split("=")[0],w=w.trim().replace(Ke,""),w.length<2)return"";for(;w.length%4!==0;)w=w+"=";return w}function Bl(w,u){u=u||1/0;let h;const x=w.length;let L=null;const H=[];for(let q=0;q<x;++q){if(h=w.charCodeAt(q),h>55295&&h<57344){if(!L){if(h>56319){(u-=3)>-1&&H.push(239,191,189);continue}else if(q+1===x){(u-=3)>-1&&H.push(239,191,189);continue}L=h;continue}if(h<56320){(u-=3)>-1&&H.push(239,191,189),L=h;continue}h=(L-55296<<10|h-56320)+65536}else L&&(u-=3)>-1&&H.push(239,191,189);if(L=null,h<128){if((u-=1)<0)break;H.push(h)}else if(h<2048){if((u-=2)<0)break;H.push(h>>6|192,h&63|128)}else if(h<65536){if((u-=3)<0)break;H.push(h>>12|224,h>>6&63|128,h&63|128)}else if(h<1114112){if((u-=4)<0)break;H.push(h>>18|240,h>>12&63|128,h>>6&63|128,h&63|128)}else throw new Error("Invalid code point")}return H}function M1(w){const u=[];for(let h=0;h<w.length;++h)u.push(w.charCodeAt(h)&255);return u}function B1(w,u){let h,x,L;const H=[];for(let q=0;q<w.length&&!((u-=2)<0);++q)h=w.charCodeAt(q),x=h>>8,L=h%256,H.push(L),H.push(x);return H}function E0(w){return e.toByteArray(N1(w))}function Fa(w,u,h,x){let L;for(L=0;L<x&&!(L+h>=u.length||L>=w.length);++L)u[L+h]=w[L];return L}function Ln(w,u){return w instanceof u||w!=null&&w.constructor!=null&&w.constructor.name!=null&&w.constructor.name===u.name}function Dl(w){return w!==w}const D1=function(){const w="0123456789abcdef",u=new Array(256);for(let h=0;h<16;++h){const x=h*16;for(let L=0;L<16;++L)u[x+L]=w[h]+w[L]}return u}();function Ti(w){return typeof BigInt>"u"?L1:w}function L1(){throw new Error("BigInt not supported")}})(u1);var op;typeof window<"u"&&(window.Buffer||(window.Buffer=u1.Buffer),window.global||(window.global=window),window.process||(window.process={}),(op=window.process)!=null&&op.env||(window.process={env:{}}));var ky={};const Sy=ky.NEXT_PUBLIC_SECURE_SITE_SDK_URL||"https://secure.walletconnect.com/sdk",te={APP_EVENT_KEY:"@w3m-app/",FRAME_EVENT_KEY:"@w3m-frame/",RPC_METHOD_KEY:"RPC_",STORAGE_KEY:"@w3m-storage/",SESSION_TOKEN_KEY:"SESSION_TOKEN_KEY",EMAIL_LOGIN_USED_KEY:"EMAIL_LOGIN_USED_KEY",LAST_USED_CHAIN_KEY:"LAST_USED_CHAIN_KEY",LAST_EMAIL_LOGIN_TIME:"LAST_EMAIL_LOGIN_TIME",EMAIL:"EMAIL",PREFERRED_ACCOUNT_TYPE:"PREFERRED_ACCOUNT_TYPE",SMART_ACCOUNT_ENABLED:"SMART_ACCOUNT_ENABLED",SMART_ACCOUNT_ENABLED_NETWORKS:"SMART_ACCOUNT_ENABLED_NETWORKS",APP_SWITCH_NETWORK:"@w3m-app/SWITCH_NETWORK",APP_CONNECT_EMAIL:"@w3m-app/CONNECT_EMAIL",APP_CONNECT_DEVICE:"@w3m-app/CONNECT_DEVICE",APP_CONNECT_OTP:"@w3m-app/CONNECT_OTP",APP_GET_USER:"@w3m-app/GET_USER",APP_SIGN_OUT:"@w3m-app/SIGN_OUT",APP_IS_CONNECTED:"@w3m-app/IS_CONNECTED",APP_GET_CHAIN_ID:"@w3m-app/GET_CHAIN_ID",APP_RPC_REQUEST:"@w3m-app/RPC_REQUEST",APP_UPDATE_EMAIL:"@w3m-app/UPDATE_EMAIL",APP_UPDATE_EMAIL_PRIMARY_OTP:"@w3m-app/UPDATE_EMAIL_PRIMARY_OTP",APP_UPDATE_EMAIL_SECONDARY_OTP:"@w3m-app/UPDATE_EMAIL_SECONDARY_OTP",APP_AWAIT_UPDATE_EMAIL:"@w3m-app/AWAIT_UPDATE_EMAIL",APP_SYNC_THEME:"@w3m-app/SYNC_THEME",APP_SYNC_DAPP_DATA:"@w3m-app/SYNC_DAPP_DATA",APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS:"@w3m-app/GET_SMART_ACCOUNT_ENABLED_NETWORKS",APP_INIT_SMART_ACCOUNT:"@w3m-app/INIT_SMART_ACCOUNT",APP_SET_PREFERRED_ACCOUNT:"@w3m-app/SET_PREFERRED_ACCOUNT",FRAME_SWITCH_NETWORK_ERROR:"@w3m-frame/SWITCH_NETWORK_ERROR",FRAME_SWITCH_NETWORK_SUCCESS:"@w3m-frame/SWITCH_NETWORK_SUCCESS",FRAME_CONNECT_EMAIL_ERROR:"@w3m-frame/CONNECT_EMAIL_ERROR",FRAME_CONNECT_EMAIL_SUCCESS:"@w3m-frame/CONNECT_EMAIL_SUCCESS",FRAME_CONNECT_DEVICE_ERROR:"@w3m-frame/CONNECT_DEVICE_ERROR",FRAME_CONNECT_DEVICE_SUCCESS:"@w3m-frame/CONNECT_DEVICE_SUCCESS",FRAME_CONNECT_OTP_SUCCESS:"@w3m-frame/CONNECT_OTP_SUCCESS",FRAME_CONNECT_OTP_ERROR:"@w3m-frame/CONNECT_OTP_ERROR",FRAME_GET_USER_SUCCESS:"@w3m-frame/GET_USER_SUCCESS",FRAME_GET_USER_ERROR:"@w3m-frame/GET_USER_ERROR",FRAME_SIGN_OUT_SUCCESS:"@w3m-frame/SIGN_OUT_SUCCESS",FRAME_SIGN_OUT_ERROR:"@w3m-frame/SIGN_OUT_ERROR",FRAME_IS_CONNECTED_SUCCESS:"@w3m-frame/IS_CONNECTED_SUCCESS",FRAME_IS_CONNECTED_ERROR:"@w3m-frame/IS_CONNECTED_ERROR",FRAME_GET_CHAIN_ID_SUCCESS:"@w3m-frame/GET_CHAIN_ID_SUCCESS",FRAME_GET_CHAIN_ID_ERROR:"@w3m-frame/GET_CHAIN_ID_ERROR",FRAME_RPC_REQUEST_SUCCESS:"@w3m-frame/RPC_REQUEST_SUCCESS",FRAME_RPC_REQUEST_ERROR:"@w3m-frame/RPC_REQUEST_ERROR",FRAME_SESSION_UPDATE:"@w3m-frame/SESSION_UPDATE",FRAME_UPDATE_EMAIL_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SUCCESS",FRAME_UPDATE_EMAIL_ERROR:"@w3m-frame/UPDATE_EMAIL_ERROR",FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR",FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR",FRAME_SYNC_THEME_SUCCESS:"@w3m-frame/SYNC_THEME_SUCCESS",FRAME_SYNC_THEME_ERROR:"@w3m-frame/SYNC_THEME_ERROR",FRAME_SYNC_DAPP_DATA_SUCCESS:"@w3m-frame/SYNC_DAPP_DATA_SUCCESS",FRAME_SYNC_DAPP_DATA_ERROR:"@w3m-frame/SYNC_DAPP_DATA_ERROR",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR",FRAME_INIT_SMART_ACCOUNT_SUCCESS:"@w3m-frame/INIT_SMART_ACCOUNT_SUCCESS",FRAME_INIT_SMART_ACCOUNT_ERROR:"@w3m-frame/INIT_SMART_ACCOUNT_ERROR",FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:"@w3m-frame/SET_PREFERRED_ACCOUNT_SUCCESS",FRAME_SET_PREFERRED_ACCOUNT_ERROR:"@w3m-frame/SET_PREFERRED_ACCOUNT_ERROR",RPC_RESPONSE_TYPE_ERROR:"RPC_RESPONSE_ERROR",RPC_RESPONSE_TYPE_TX:"RPC_RESPONSE_TRANSACTION_HASH",RPC_RESPONSE_TYPE_OBJECT:"RPC_RESPONSE_OBJECT"},Dt={SAFE_RPC_METHODS:["eth_accounts","eth_blockNumber","eth_call","eth_chainId","eth_estimateGas","eth_feeHistory","eth_gasPrice","eth_getAccount","eth_getBalance","eth_getBlockByHash","eth_getBlockByNumber","eth_getBlockReceipts","eth_getBlockTransactionCountByHash","eth_getBlockTransactionCountByNumber","eth_getCode","eth_getFilterChanges","eth_getFilterLogs","eth_getLogs","eth_getProof","eth_getStorageAt","eth_getTransactionByBlockHashAndIndex","eth_getTransactionByBlockNumberAndIndex","eth_getTransactionByHash","eth_getTransactionCount","eth_getTransactionReceipt","eth_getUncleCountByBlockHash","eth_getUncleCountByBlockNumber","eth_maxPriorityFeePerGas","eth_newBlockFilter","eth_newFilter","eth_newPendingTransactionFilter","eth_sendRawTransaction","eth_syncing","eth_uninstallFilter"],NOT_SAFE_RPC_METHODS:["personal_sign","eth_signTypedData_v4","eth_sendTransaction"],GET_CHAIN_ID:"eth_chainId",RPC_METHOD_NOT_ALLOWED_MESSAGE:"Requested RPC call is not allowed",RPC_METHOD_NOT_ALLOWED_UI_MESSAGE:"Action not allowed",ACCOUNT_TYPES:{EOA:"eoa",SMART_ACCOUNT:"smartAccount"}};var Ue;(function(n){n.assertEqual=o=>o;function e(o){}n.assertIs=e;function t(o){throw new Error}n.assertNever=t,n.arrayToEnum=o=>{const r={};for(const s of o)r[s]=s;return r},n.getValidEnumValues=o=>{const r=n.objectKeys(o).filter(a=>typeof o[o[a]]!="number"),s={};for(const a of r)s[a]=o[a];return n.objectValues(s)},n.objectValues=o=>n.objectKeys(o).map(function(r){return o[r]}),n.objectKeys=typeof Object.keys=="function"?o=>Object.keys(o):o=>{const r=[];for(const s in o)Object.prototype.hasOwnProperty.call(o,s)&&r.push(s);return r},n.find=(o,r)=>{for(const s of o)if(r(s))return s},n.isInteger=typeof Number.isInteger=="function"?o=>Number.isInteger(o):o=>typeof o=="number"&&isFinite(o)&&Math.floor(o)===o;function i(o,r=" | "){return o.map(s=>typeof s=="string"?`'${s}'`:s).join(r)}n.joinValues=i,n.jsonStringifyReplacer=(o,r)=>typeof r=="bigint"?r.toString():r})(Ue||(Ue={}));var Gu;(function(n){n.mergeShapes=(e,t)=>({...e,...t})})(Gu||(Gu={}));const ce=Ue.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Oi=n=>{switch(typeof n){case"undefined":return ce.undefined;case"string":return ce.string;case"number":return isNaN(n)?ce.nan:ce.number;case"boolean":return ce.boolean;case"function":return ce.function;case"bigint":return ce.bigint;case"symbol":return ce.symbol;case"object":return Array.isArray(n)?ce.array:n===null?ce.null:n.then&&typeof n.then=="function"&&n.catch&&typeof n.catch=="function"?ce.promise:typeof Map<"u"&&n instanceof Map?ce.map:typeof Set<"u"&&n instanceof Set?ce.set:typeof Date<"u"&&n instanceof Date?ce.date:ce.object;default:return ce.unknown}},ee=Ue.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),$y=n=>JSON.stringify(n,null,2).replace(/"([^"]+)":/g,"$1:");class En extends Error{constructor(e){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};const t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const t=e||function(r){return r.message},i={_errors:[]},o=r=>{for(const s of r.issues)if(s.code==="invalid_union")s.unionErrors.map(o);else if(s.code==="invalid_return_type")o(s.returnTypeError);else if(s.code==="invalid_arguments")o(s.argumentsError);else if(s.path.length===0)i._errors.push(t(s));else{let a=i,c=0;for(;c<s.path.length;){const l=s.path[c];c===s.path.length-1?(a[l]=a[l]||{_errors:[]},a[l]._errors.push(t(s))):a[l]=a[l]||{_errors:[]},a=a[l],c++}}};return o(this),i}toString(){return this.message}get message(){return JSON.stringify(this.issues,Ue.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=t=>t.message){const t={},i=[];for(const o of this.issues)o.path.length>0?(t[o.path[0]]=t[o.path[0]]||[],t[o.path[0]].push(e(o))):i.push(e(o));return{formErrors:i,fieldErrors:t}}get formErrors(){return this.flatten()}}En.create=n=>new En(n);const ia=(n,e)=>{let t;switch(n.code){case ee.invalid_type:n.received===ce.undefined?t="Required":t=`Expected ${n.expected}, received ${n.received}`;break;case ee.invalid_literal:t=`Invalid literal value, expected ${JSON.stringify(n.expected,Ue.jsonStringifyReplacer)}`;break;case ee.unrecognized_keys:t=`Unrecognized key(s) in object: ${Ue.joinValues(n.keys,", ")}`;break;case ee.invalid_union:t="Invalid input";break;case ee.invalid_union_discriminator:t=`Invalid discriminator value. Expected ${Ue.joinValues(n.options)}`;break;case ee.invalid_enum_value:t=`Invalid enum value. Expected ${Ue.joinValues(n.options)}, received '${n.received}'`;break;case ee.invalid_arguments:t="Invalid function arguments";break;case ee.invalid_return_type:t="Invalid function return type";break;case ee.invalid_date:t="Invalid date";break;case ee.invalid_string:typeof n.validation=="object"?"includes"in n.validation?(t=`Invalid input: must include "${n.validation.includes}"`,typeof n.validation.position=="number"&&(t=`${t} at one or more positions greater than or equal to ${n.validation.position}`)):"startsWith"in n.validation?t=`Invalid input: must start with "${n.validation.startsWith}"`:"endsWith"in n.validation?t=`Invalid input: must end with "${n.validation.endsWith}"`:Ue.assertNever(n.validation):n.validation!=="regex"?t=`Invalid ${n.validation}`:t="Invalid";break;case ee.too_small:n.type==="array"?t=`Array must contain ${n.exact?"exactly":n.inclusive?"at least":"more than"} ${n.minimum} element(s)`:n.type==="string"?t=`String must contain ${n.exact?"exactly":n.inclusive?"at least":"over"} ${n.minimum} character(s)`:n.type==="number"?t=`Number must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${n.minimum}`:n.type==="date"?t=`Date must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(n.minimum))}`:t="Invalid input";break;case ee.too_big:n.type==="array"?t=`Array must contain ${n.exact?"exactly":n.inclusive?"at most":"less than"} ${n.maximum} element(s)`:n.type==="string"?t=`String must contain ${n.exact?"exactly":n.inclusive?"at most":"under"} ${n.maximum} character(s)`:n.type==="number"?t=`Number must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="bigint"?t=`BigInt must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="date"?t=`Date must be ${n.exact?"exactly":n.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(n.maximum))}`:t="Invalid input";break;case ee.custom:t="Invalid input";break;case ee.invalid_intersection_types:t="Intersection results could not be merged";break;case ee.not_multiple_of:t=`Number must be a multiple of ${n.multipleOf}`;break;case ee.not_finite:t="Number must be finite";break;default:t=e.defaultError,Ue.assertNever(n)}return{message:t}};let h1=ia;function Ry(n){h1=n}function Sc(){return h1}const $c=n=>{const{data:e,path:t,errorMaps:i,issueData:o}=n,r=[...t,...o.path||[]],s={...o,path:r};let a="";const c=i.filter(l=>!!l).slice().reverse();for(const l of c)a=l(s,{data:e,defaultError:a}).message;return{...o,path:r,message:o.message||a}},Iy=[];function ue(n,e){const t=$c({issueData:e,data:n.data,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Sc(),ia].filter(i=>!!i)});n.common.issues.push(t)}class It{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,t){const i=[];for(const o of t){if(o.status==="aborted")return ke;o.status==="dirty"&&e.dirty(),i.push(o.value)}return{status:e.value,value:i}}static async mergeObjectAsync(e,t){const i=[];for(const o of t)i.push({key:await o.key,value:await o.value});return It.mergeObjectSync(e,i)}static mergeObjectSync(e,t){const i={};for(const o of t){const{key:r,value:s}=o;if(r.status==="aborted"||s.status==="aborted")return ke;r.status==="dirty"&&e.dirty(),s.status==="dirty"&&e.dirty(),r.value!=="__proto__"&&(typeof s.value<"u"||o.alwaysSet)&&(i[r.value]=s.value)}return{status:e.value,value:i}}}const ke=Object.freeze({status:"aborted"}),p1=n=>({status:"dirty",value:n}),Ut=n=>({status:"valid",value:n}),qu=n=>n.status==="aborted",Yu=n=>n.status==="dirty",ra=n=>n.status==="valid",Rc=n=>typeof Promise<"u"&&n instanceof Promise;var ge;(function(n){n.errToObj=e=>typeof e=="string"?{message:e}:e||{},n.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(ge||(ge={}));class Kn{constructor(e,t,i,o){this._cachedPath=[],this.parent=e,this.data=t,this._path=i,this._key=o}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Rh=(n,e)=>{if(ra(e))return{success:!0,data:e.value};if(!n.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const t=new En(n.common.issues);return this._error=t,this._error}}};function Re(n){if(!n)return{};const{errorMap:e,invalid_type_error:t,required_error:i,description:o}=n;if(e&&(t||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:o}:{errorMap:(s,a)=>s.code!=="invalid_type"?{message:a.defaultError}:typeof a.data>"u"?{message:i??a.defaultError}:{message:t??a.defaultError},description:o}}class Pe{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return Oi(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:Oi(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new It,ctx:{common:e.parent.common,data:e.data,parsedType:Oi(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const t=this._parse(e);if(Rc(t))throw new Error("Synchronous parse encountered promise.");return t}_parseAsync(e){const t=this._parse(e);return Promise.resolve(t)}parse(e,t){const i=this.safeParse(e,t);if(i.success)return i.data;throw i.error}safeParse(e,t){var i;const o={common:{issues:[],async:(i=t==null?void 0:t.async)!==null&&i!==void 0?i:!1,contextualErrorMap:t==null?void 0:t.errorMap},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Oi(e)},r=this._parseSync({data:e,path:o.path,parent:o});return Rh(o,r)}async parseAsync(e,t){const i=await this.safeParseAsync(e,t);if(i.success)return i.data;throw i.error}async safeParseAsync(e,t){const i={common:{issues:[],contextualErrorMap:t==null?void 0:t.errorMap,async:!0},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Oi(e)},o=this._parse({data:e,path:i.path,parent:i}),r=await(Rc(o)?o:Promise.resolve(o));return Rh(i,r)}refine(e,t){const i=o=>typeof t=="string"||typeof t>"u"?{message:t}:typeof t=="function"?t(o):t;return this._refinement((o,r)=>{const s=e(o),a=()=>r.addIssue({code:ee.custom,...i(o)});return typeof Promise<"u"&&s instanceof Promise?s.then(c=>c?!0:(a(),!1)):s?!0:(a(),!1)})}refinement(e,t){return this._refinement((i,o)=>e(i)?!0:(o.addIssue(typeof t=="function"?t(i,o):t),!1))}_refinement(e){return new In({schema:this,typeName:_e.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return hi.create(this,this._def)}nullable(){return Hr.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Tn.create(this,this._def)}promise(){return Vo.create(this,this._def)}or(e){return ca.create([this,e],this._def)}and(e){return la.create(this,e,this._def)}transform(e){return new In({...Re(this._def),schema:this,typeName:_e.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const t=typeof e=="function"?e:()=>e;return new fa({...Re(this._def),innerType:this,defaultValue:t,typeName:_e.ZodDefault})}brand(){return new g1({typeName:_e.ZodBranded,type:this,...Re(this._def)})}catch(e){const t=typeof e=="function"?e:()=>e;return new Nc({...Re(this._def),innerType:this,catchValue:t,typeName:_e.ZodCatch})}describe(e){const t=this.constructor;return new t({...this._def,description:e})}pipe(e){return Ma.create(this,e)}readonly(){return Bc.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const Py=/^c[^\s-]{8,}$/i,Oy=/^[a-z][a-z0-9]*$/,Ny=/^[0-9A-HJKMNP-TV-Z]{26}$/,My=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,By=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,Dy="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let wu;const Ly=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,Uy=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,jy=n=>n.precision?n.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${n.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${n.precision}}Z$`):n.precision===0?n.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):n.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function Wy(n,e){return!!((e==="v4"||!e)&&Ly.test(n)||(e==="v6"||!e)&&Uy.test(n))}class Cn extends Pe{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==ce.string){const r=this._getOrReturnCtx(e);return ue(r,{code:ee.invalid_type,expected:ce.string,received:r.parsedType}),ke}const i=new It;let o;for(const r of this._def.checks)if(r.kind==="min")e.data.length<r.value&&(o=this._getOrReturnCtx(e,o),ue(o,{code:ee.too_small,minimum:r.value,type:"string",inclusive:!0,exact:!1,message:r.message}),i.dirty());else if(r.kind==="max")e.data.length>r.value&&(o=this._getOrReturnCtx(e,o),ue(o,{code:ee.too_big,maximum:r.value,type:"string",inclusive:!0,exact:!1,message:r.message}),i.dirty());else if(r.kind==="length"){const s=e.data.length>r.value,a=e.data.length<r.value;(s||a)&&(o=this._getOrReturnCtx(e,o),s?ue(o,{code:ee.too_big,maximum:r.value,type:"string",inclusive:!0,exact:!0,message:r.message}):a&&ue(o,{code:ee.too_small,minimum:r.value,type:"string",inclusive:!0,exact:!0,message:r.message}),i.dirty())}else if(r.kind==="email")By.test(e.data)||(o=this._getOrReturnCtx(e,o),ue(o,{validation:"email",code:ee.invalid_string,message:r.message}),i.dirty());else if(r.kind==="emoji")wu||(wu=new RegExp(Dy,"u")),wu.test(e.data)||(o=this._getOrReturnCtx(e,o),ue(o,{validation:"emoji",code:ee.invalid_string,message:r.message}),i.dirty());else if(r.kind==="uuid")My.test(e.data)||(o=this._getOrReturnCtx(e,o),ue(o,{validation:"uuid",code:ee.invalid_string,message:r.message}),i.dirty());else if(r.kind==="cuid")Py.test(e.data)||(o=this._getOrReturnCtx(e,o),ue(o,{validation:"cuid",code:ee.invalid_string,message:r.message}),i.dirty());else if(r.kind==="cuid2")Oy.test(e.data)||(o=this._getOrReturnCtx(e,o),ue(o,{validation:"cuid2",code:ee.invalid_string,message:r.message}),i.dirty());else if(r.kind==="ulid")Ny.test(e.data)||(o=this._getOrReturnCtx(e,o),ue(o,{validation:"ulid",code:ee.invalid_string,message:r.message}),i.dirty());else if(r.kind==="url")try{new URL(e.data)}catch{o=this._getOrReturnCtx(e,o),ue(o,{validation:"url",code:ee.invalid_string,message:r.message}),i.dirty()}else r.kind==="regex"?(r.regex.lastIndex=0,r.regex.test(e.data)||(o=this._getOrReturnCtx(e,o),ue(o,{validation:"regex",code:ee.invalid_string,message:r.message}),i.dirty())):r.kind==="trim"?e.data=e.data.trim():r.kind==="includes"?e.data.includes(r.value,r.position)||(o=this._getOrReturnCtx(e,o),ue(o,{code:ee.invalid_string,validation:{includes:r.value,position:r.position},message:r.message}),i.dirty()):r.kind==="toLowerCase"?e.data=e.data.toLowerCase():r.kind==="toUpperCase"?e.data=e.data.toUpperCase():r.kind==="startsWith"?e.data.startsWith(r.value)||(o=this._getOrReturnCtx(e,o),ue(o,{code:ee.invalid_string,validation:{startsWith:r.value},message:r.message}),i.dirty()):r.kind==="endsWith"?e.data.endsWith(r.value)||(o=this._getOrReturnCtx(e,o),ue(o,{code:ee.invalid_string,validation:{endsWith:r.value},message:r.message}),i.dirty()):r.kind==="datetime"?jy(r).test(e.data)||(o=this._getOrReturnCtx(e,o),ue(o,{code:ee.invalid_string,validation:"datetime",message:r.message}),i.dirty()):r.kind==="ip"?Wy(e.data,r.version)||(o=this._getOrReturnCtx(e,o),ue(o,{validation:"ip",code:ee.invalid_string,message:r.message}),i.dirty()):Ue.assertNever(r);return{status:i.value,value:e.data}}_regex(e,t,i){return this.refinement(o=>e.test(o),{validation:t,code:ee.invalid_string,...ge.errToObj(i)})}_addCheck(e){return new Cn({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...ge.errToObj(e)})}url(e){return this._addCheck({kind:"url",...ge.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...ge.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...ge.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...ge.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...ge.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...ge.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...ge.errToObj(e)})}datetime(e){var t;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(t=e==null?void 0:e.offset)!==null&&t!==void 0?t:!1,...ge.errToObj(e==null?void 0:e.message)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...ge.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:t==null?void 0:t.position,...ge.errToObj(t==null?void 0:t.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...ge.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...ge.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...ge.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...ge.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...ge.errToObj(t)})}nonempty(e){return this.min(1,ge.errToObj(e))}trim(){return new Cn({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new Cn({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new Cn({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get minLength(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}Cn.create=n=>{var e;return new Cn({checks:[],typeName:_e.ZodString,coerce:(e=n==null?void 0:n.coerce)!==null&&e!==void 0?e:!1,...Re(n)})};function Fy(n,e){const t=(n.toString().split(".")[1]||"").length,i=(e.toString().split(".")[1]||"").length,o=t>i?t:i,r=parseInt(n.toFixed(o).replace(".","")),s=parseInt(e.toFixed(o).replace(".",""));return r%s/Math.pow(10,o)}class Ki extends Pe{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==ce.number){const r=this._getOrReturnCtx(e);return ue(r,{code:ee.invalid_type,expected:ce.number,received:r.parsedType}),ke}let i;const o=new It;for(const r of this._def.checks)r.kind==="int"?Ue.isInteger(e.data)||(i=this._getOrReturnCtx(e,i),ue(i,{code:ee.invalid_type,expected:"integer",received:"float",message:r.message}),o.dirty()):r.kind==="min"?(r.inclusive?e.data<r.value:e.data<=r.value)&&(i=this._getOrReturnCtx(e,i),ue(i,{code:ee.too_small,minimum:r.value,type:"number",inclusive:r.inclusive,exact:!1,message:r.message}),o.dirty()):r.kind==="max"?(r.inclusive?e.data>r.value:e.data>=r.value)&&(i=this._getOrReturnCtx(e,i),ue(i,{code:ee.too_big,maximum:r.value,type:"number",inclusive:r.inclusive,exact:!1,message:r.message}),o.dirty()):r.kind==="multipleOf"?Fy(e.data,r.value)!==0&&(i=this._getOrReturnCtx(e,i),ue(i,{code:ee.not_multiple_of,multipleOf:r.value,message:r.message}),o.dirty()):r.kind==="finite"?Number.isFinite(e.data)||(i=this._getOrReturnCtx(e,i),ue(i,{code:ee.not_finite,message:r.message}),o.dirty()):Ue.assertNever(r);return{status:o.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,ge.toString(t))}gt(e,t){return this.setLimit("min",e,!1,ge.toString(t))}lte(e,t){return this.setLimit("max",e,!0,ge.toString(t))}lt(e,t){return this.setLimit("max",e,!1,ge.toString(t))}setLimit(e,t,i,o){return new Ki({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:i,message:ge.toString(o)}]})}_addCheck(e){return new Ki({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:ge.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:ge.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:ge.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:ge.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:ge.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:ge.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:ge.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:ge.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:ge.toString(e)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&Ue.isInteger(e.value))}get isFinite(){let e=null,t=null;for(const i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(t===null||i.value>t)&&(t=i.value):i.kind==="max"&&(e===null||i.value<e)&&(e=i.value)}return Number.isFinite(t)&&Number.isFinite(e)}}Ki.create=n=>new Ki({checks:[],typeName:_e.ZodNumber,coerce:(n==null?void 0:n.coerce)||!1,...Re(n)});class Ji extends Pe{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==ce.bigint){const r=this._getOrReturnCtx(e);return ue(r,{code:ee.invalid_type,expected:ce.bigint,received:r.parsedType}),ke}let i;const o=new It;for(const r of this._def.checks)r.kind==="min"?(r.inclusive?e.data<r.value:e.data<=r.value)&&(i=this._getOrReturnCtx(e,i),ue(i,{code:ee.too_small,type:"bigint",minimum:r.value,inclusive:r.inclusive,message:r.message}),o.dirty()):r.kind==="max"?(r.inclusive?e.data>r.value:e.data>=r.value)&&(i=this._getOrReturnCtx(e,i),ue(i,{code:ee.too_big,type:"bigint",maximum:r.value,inclusive:r.inclusive,message:r.message}),o.dirty()):r.kind==="multipleOf"?e.data%r.value!==BigInt(0)&&(i=this._getOrReturnCtx(e,i),ue(i,{code:ee.not_multiple_of,multipleOf:r.value,message:r.message}),o.dirty()):Ue.assertNever(r);return{status:o.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,ge.toString(t))}gt(e,t){return this.setLimit("min",e,!1,ge.toString(t))}lte(e,t){return this.setLimit("max",e,!0,ge.toString(t))}lt(e,t){return this.setLimit("max",e,!1,ge.toString(t))}setLimit(e,t,i,o){return new Ji({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:i,message:ge.toString(o)}]})}_addCheck(e){return new Ji({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:ge.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:ge.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:ge.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:ge.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:ge.toString(t)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}Ji.create=n=>{var e;return new Ji({checks:[],typeName:_e.ZodBigInt,coerce:(e=n==null?void 0:n.coerce)!==null&&e!==void 0?e:!1,...Re(n)})};class oa extends Pe{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==ce.boolean){const i=this._getOrReturnCtx(e);return ue(i,{code:ee.invalid_type,expected:ce.boolean,received:i.parsedType}),ke}return Ut(e.data)}}oa.create=n=>new oa({typeName:_e.ZodBoolean,coerce:(n==null?void 0:n.coerce)||!1,...Re(n)});class Fr extends Pe{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==ce.date){const r=this._getOrReturnCtx(e);return ue(r,{code:ee.invalid_type,expected:ce.date,received:r.parsedType}),ke}if(isNaN(e.data.getTime())){const r=this._getOrReturnCtx(e);return ue(r,{code:ee.invalid_date}),ke}const i=new It;let o;for(const r of this._def.checks)r.kind==="min"?e.data.getTime()<r.value&&(o=this._getOrReturnCtx(e,o),ue(o,{code:ee.too_small,message:r.message,inclusive:!0,exact:!1,minimum:r.value,type:"date"}),i.dirty()):r.kind==="max"?e.data.getTime()>r.value&&(o=this._getOrReturnCtx(e,o),ue(o,{code:ee.too_big,message:r.message,inclusive:!0,exact:!1,maximum:r.value,type:"date"}),i.dirty()):Ue.assertNever(r);return{status:i.value,value:new Date(e.data.getTime())}}_addCheck(e){return new Fr({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:ge.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:ge.toString(t)})}get minDate(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e!=null?new Date(e):null}}Fr.create=n=>new Fr({checks:[],coerce:(n==null?void 0:n.coerce)||!1,typeName:_e.ZodDate,...Re(n)});class Ic extends Pe{_parse(e){if(this._getType(e)!==ce.symbol){const i=this._getOrReturnCtx(e);return ue(i,{code:ee.invalid_type,expected:ce.symbol,received:i.parsedType}),ke}return Ut(e.data)}}Ic.create=n=>new Ic({typeName:_e.ZodSymbol,...Re(n)});class sa extends Pe{_parse(e){if(this._getType(e)!==ce.undefined){const i=this._getOrReturnCtx(e);return ue(i,{code:ee.invalid_type,expected:ce.undefined,received:i.parsedType}),ke}return Ut(e.data)}}sa.create=n=>new sa({typeName:_e.ZodUndefined,...Re(n)});class aa extends Pe{_parse(e){if(this._getType(e)!==ce.null){const i=this._getOrReturnCtx(e);return ue(i,{code:ee.invalid_type,expected:ce.null,received:i.parsedType}),ke}return Ut(e.data)}}aa.create=n=>new aa({typeName:_e.ZodNull,...Re(n)});class Ho extends Pe{constructor(){super(...arguments),this._any=!0}_parse(e){return Ut(e.data)}}Ho.create=n=>new Ho({typeName:_e.ZodAny,...Re(n)});class yr extends Pe{constructor(){super(...arguments),this._unknown=!0}_parse(e){return Ut(e.data)}}yr.create=n=>new yr({typeName:_e.ZodUnknown,...Re(n)});class bi extends Pe{_parse(e){const t=this._getOrReturnCtx(e);return ue(t,{code:ee.invalid_type,expected:ce.never,received:t.parsedType}),ke}}bi.create=n=>new bi({typeName:_e.ZodNever,...Re(n)});class Pc extends Pe{_parse(e){if(this._getType(e)!==ce.undefined){const i=this._getOrReturnCtx(e);return ue(i,{code:ee.invalid_type,expected:ce.void,received:i.parsedType}),ke}return Ut(e.data)}}Pc.create=n=>new Pc({typeName:_e.ZodVoid,...Re(n)});class Tn extends Pe{_parse(e){const{ctx:t,status:i}=this._processInputParams(e),o=this._def;if(t.parsedType!==ce.array)return ue(t,{code:ee.invalid_type,expected:ce.array,received:t.parsedType}),ke;if(o.exactLength!==null){const s=t.data.length>o.exactLength.value,a=t.data.length<o.exactLength.value;(s||a)&&(ue(t,{code:s?ee.too_big:ee.too_small,minimum:a?o.exactLength.value:void 0,maximum:s?o.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:o.exactLength.message}),i.dirty())}if(o.minLength!==null&&t.data.length<o.minLength.value&&(ue(t,{code:ee.too_small,minimum:o.minLength.value,type:"array",inclusive:!0,exact:!1,message:o.minLength.message}),i.dirty()),o.maxLength!==null&&t.data.length>o.maxLength.value&&(ue(t,{code:ee.too_big,maximum:o.maxLength.value,type:"array",inclusive:!0,exact:!1,message:o.maxLength.message}),i.dirty()),t.common.async)return Promise.all([...t.data].map((s,a)=>o.type._parseAsync(new Kn(t,s,t.path,a)))).then(s=>It.mergeArray(i,s));const r=[...t.data].map((s,a)=>o.type._parseSync(new Kn(t,s,t.path,a)));return It.mergeArray(i,r)}get element(){return this._def.type}min(e,t){return new Tn({...this._def,minLength:{value:e,message:ge.toString(t)}})}max(e,t){return new Tn({...this._def,maxLength:{value:e,message:ge.toString(t)}})}length(e,t){return new Tn({...this._def,exactLength:{value:e,message:ge.toString(t)}})}nonempty(e){return this.min(1,e)}}Tn.create=(n,e)=>new Tn({type:n,minLength:null,maxLength:null,exactLength:null,typeName:_e.ZodArray,...Re(e)});function ho(n){if(n instanceof et){const e={};for(const t in n.shape){const i=n.shape[t];e[t]=hi.create(ho(i))}return new et({...n._def,shape:()=>e})}else return n instanceof Tn?new Tn({...n._def,type:ho(n.element)}):n instanceof hi?hi.create(ho(n.unwrap())):n instanceof Hr?Hr.create(ho(n.unwrap())):n instanceof Jn?Jn.create(n.items.map(e=>ho(e))):n}class et extends Pe{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),t=Ue.objectKeys(e);return this._cached={shape:e,keys:t}}_parse(e){if(this._getType(e)!==ce.object){const l=this._getOrReturnCtx(e);return ue(l,{code:ee.invalid_type,expected:ce.object,received:l.parsedType}),ke}const{status:i,ctx:o}=this._processInputParams(e),{shape:r,keys:s}=this._getCached(),a=[];if(!(this._def.catchall instanceof bi&&this._def.unknownKeys==="strip"))for(const l in o.data)s.includes(l)||a.push(l);const c=[];for(const l of s){const d=r[l],p=o.data[l];c.push({key:{status:"valid",value:l},value:d._parse(new Kn(o,p,o.path,l)),alwaysSet:l in o.data})}if(this._def.catchall instanceof bi){const l=this._def.unknownKeys;if(l==="passthrough")for(const d of a)c.push({key:{status:"valid",value:d},value:{status:"valid",value:o.data[d]}});else if(l==="strict")a.length>0&&(ue(o,{code:ee.unrecognized_keys,keys:a}),i.dirty());else if(l!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const l=this._def.catchall;for(const d of a){const p=o.data[d];c.push({key:{status:"valid",value:d},value:l._parse(new Kn(o,p,o.path,d)),alwaysSet:d in o.data})}}return o.common.async?Promise.resolve().then(async()=>{const l=[];for(const d of c){const p=await d.key;l.push({key:p,value:await d.value,alwaysSet:d.alwaysSet})}return l}).then(l=>It.mergeObjectSync(i,l)):It.mergeObjectSync(i,c)}get shape(){return this._def.shape()}strict(e){return ge.errToObj,new et({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(t,i)=>{var o,r,s,a;const c=(s=(r=(o=this._def).errorMap)===null||r===void 0?void 0:r.call(o,t,i).message)!==null&&s!==void 0?s:i.defaultError;return t.code==="unrecognized_keys"?{message:(a=ge.errToObj(e).message)!==null&&a!==void 0?a:c}:{message:c}}}:{}})}strip(){return new et({...this._def,unknownKeys:"strip"})}passthrough(){return new et({...this._def,unknownKeys:"passthrough"})}extend(e){return new et({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new et({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:_e.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new et({...this._def,catchall:e})}pick(e){const t={};return Ue.objectKeys(e).forEach(i=>{e[i]&&this.shape[i]&&(t[i]=this.shape[i])}),new et({...this._def,shape:()=>t})}omit(e){const t={};return Ue.objectKeys(this.shape).forEach(i=>{e[i]||(t[i]=this.shape[i])}),new et({...this._def,shape:()=>t})}deepPartial(){return ho(this)}partial(e){const t={};return Ue.objectKeys(this.shape).forEach(i=>{const o=this.shape[i];e&&!e[i]?t[i]=o:t[i]=o.optional()}),new et({...this._def,shape:()=>t})}required(e){const t={};return Ue.objectKeys(this.shape).forEach(i=>{if(e&&!e[i])t[i]=this.shape[i];else{let r=this.shape[i];for(;r instanceof hi;)r=r._def.innerType;t[i]=r}}),new et({...this._def,shape:()=>t})}keyof(){return f1(Ue.objectKeys(this.shape))}}et.create=(n,e)=>new et({shape:()=>n,unknownKeys:"strip",catchall:bi.create(),typeName:_e.ZodObject,...Re(e)});et.strictCreate=(n,e)=>new et({shape:()=>n,unknownKeys:"strict",catchall:bi.create(),typeName:_e.ZodObject,...Re(e)});et.lazycreate=(n,e)=>new et({shape:n,unknownKeys:"strip",catchall:bi.create(),typeName:_e.ZodObject,...Re(e)});class ca extends Pe{_parse(e){const{ctx:t}=this._processInputParams(e),i=this._def.options;function o(r){for(const a of r)if(a.result.status==="valid")return a.result;for(const a of r)if(a.result.status==="dirty")return t.common.issues.push(...a.ctx.common.issues),a.result;const s=r.map(a=>new En(a.ctx.common.issues));return ue(t,{code:ee.invalid_union,unionErrors:s}),ke}if(t.common.async)return Promise.all(i.map(async r=>{const s={...t,common:{...t.common,issues:[]},parent:null};return{result:await r._parseAsync({data:t.data,path:t.path,parent:s}),ctx:s}})).then(o);{let r;const s=[];for(const c of i){const l={...t,common:{...t.common,issues:[]},parent:null},d=c._parseSync({data:t.data,path:t.path,parent:l});if(d.status==="valid")return d;d.status==="dirty"&&!r&&(r={result:d,ctx:l}),l.common.issues.length&&s.push(l.common.issues)}if(r)return t.common.issues.push(...r.ctx.common.issues),r.result;const a=s.map(c=>new En(c));return ue(t,{code:ee.invalid_union,unionErrors:a}),ke}}get options(){return this._def.options}}ca.create=(n,e)=>new ca({options:n,typeName:_e.ZodUnion,...Re(e)});const sc=n=>n instanceof da?sc(n.schema):n instanceof In?sc(n.innerType()):n instanceof ha?[n.value]:n instanceof Xi?n.options:n instanceof pa?Object.keys(n.enum):n instanceof fa?sc(n._def.innerType):n instanceof sa?[void 0]:n instanceof aa?[null]:null;class $l extends Pe{_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==ce.object)return ue(t,{code:ee.invalid_type,expected:ce.object,received:t.parsedType}),ke;const i=this.discriminator,o=t.data[i],r=this.optionsMap.get(o);return r?t.common.async?r._parseAsync({data:t.data,path:t.path,parent:t}):r._parseSync({data:t.data,path:t.path,parent:t}):(ue(t,{code:ee.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[i]}),ke)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,i){const o=new Map;for(const r of t){const s=sc(r.shape[e]);if(!s)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const a of s){if(o.has(a))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);o.set(a,r)}}return new $l({typeName:_e.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:o,...Re(i)})}}function Ku(n,e){const t=Oi(n),i=Oi(e);if(n===e)return{valid:!0,data:n};if(t===ce.object&&i===ce.object){const o=Ue.objectKeys(e),r=Ue.objectKeys(n).filter(a=>o.indexOf(a)!==-1),s={...n,...e};for(const a of r){const c=Ku(n[a],e[a]);if(!c.valid)return{valid:!1};s[a]=c.data}return{valid:!0,data:s}}else if(t===ce.array&&i===ce.array){if(n.length!==e.length)return{valid:!1};const o=[];for(let r=0;r<n.length;r++){const s=n[r],a=e[r],c=Ku(s,a);if(!c.valid)return{valid:!1};o.push(c.data)}return{valid:!0,data:o}}else return t===ce.date&&i===ce.date&&+n==+e?{valid:!0,data:n}:{valid:!1}}class la extends Pe{_parse(e){const{status:t,ctx:i}=this._processInputParams(e),o=(r,s)=>{if(qu(r)||qu(s))return ke;const a=Ku(r.value,s.value);return a.valid?((Yu(r)||Yu(s))&&t.dirty(),{status:t.value,value:a.data}):(ue(i,{code:ee.invalid_intersection_types}),ke)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([r,s])=>o(r,s)):o(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}}la.create=(n,e,t)=>new la({left:n,right:e,typeName:_e.ZodIntersection,...Re(t)});class Jn extends Pe{_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==ce.array)return ue(i,{code:ee.invalid_type,expected:ce.array,received:i.parsedType}),ke;if(i.data.length<this._def.items.length)return ue(i,{code:ee.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),ke;!this._def.rest&&i.data.length>this._def.items.length&&(ue(i,{code:ee.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());const r=[...i.data].map((s,a)=>{const c=this._def.items[a]||this._def.rest;return c?c._parse(new Kn(i,s,i.path,a)):null}).filter(s=>!!s);return i.common.async?Promise.all(r).then(s=>It.mergeArray(t,s)):It.mergeArray(t,r)}get items(){return this._def.items}rest(e){return new Jn({...this._def,rest:e})}}Jn.create=(n,e)=>{if(!Array.isArray(n))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Jn({items:n,typeName:_e.ZodTuple,rest:null,...Re(e)})};class ua extends Pe{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==ce.object)return ue(i,{code:ee.invalid_type,expected:ce.object,received:i.parsedType}),ke;const o=[],r=this._def.keyType,s=this._def.valueType;for(const a in i.data)o.push({key:r._parse(new Kn(i,a,i.path,a)),value:s._parse(new Kn(i,i.data[a],i.path,a))});return i.common.async?It.mergeObjectAsync(t,o):It.mergeObjectSync(t,o)}get element(){return this._def.valueType}static create(e,t,i){return t instanceof Pe?new ua({keyType:e,valueType:t,typeName:_e.ZodRecord,...Re(i)}):new ua({keyType:Cn.create(),valueType:e,typeName:_e.ZodRecord,...Re(t)})}}class Oc extends Pe{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==ce.map)return ue(i,{code:ee.invalid_type,expected:ce.map,received:i.parsedType}),ke;const o=this._def.keyType,r=this._def.valueType,s=[...i.data.entries()].map(([a,c],l)=>({key:o._parse(new Kn(i,a,i.path,[l,"key"])),value:r._parse(new Kn(i,c,i.path,[l,"value"]))}));if(i.common.async){const a=new Map;return Promise.resolve().then(async()=>{for(const c of s){const l=await c.key,d=await c.value;if(l.status==="aborted"||d.status==="aborted")return ke;(l.status==="dirty"||d.status==="dirty")&&t.dirty(),a.set(l.value,d.value)}return{status:t.value,value:a}})}else{const a=new Map;for(const c of s){const l=c.key,d=c.value;if(l.status==="aborted"||d.status==="aborted")return ke;(l.status==="dirty"||d.status==="dirty")&&t.dirty(),a.set(l.value,d.value)}return{status:t.value,value:a}}}}Oc.create=(n,e,t)=>new Oc({valueType:e,keyType:n,typeName:_e.ZodMap,...Re(t)});class zr extends Pe{_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==ce.set)return ue(i,{code:ee.invalid_type,expected:ce.set,received:i.parsedType}),ke;const o=this._def;o.minSize!==null&&i.data.size<o.minSize.value&&(ue(i,{code:ee.too_small,minimum:o.minSize.value,type:"set",inclusive:!0,exact:!1,message:o.minSize.message}),t.dirty()),o.maxSize!==null&&i.data.size>o.maxSize.value&&(ue(i,{code:ee.too_big,maximum:o.maxSize.value,type:"set",inclusive:!0,exact:!1,message:o.maxSize.message}),t.dirty());const r=this._def.valueType;function s(c){const l=new Set;for(const d of c){if(d.status==="aborted")return ke;d.status==="dirty"&&t.dirty(),l.add(d.value)}return{status:t.value,value:l}}const a=[...i.data.values()].map((c,l)=>r._parse(new Kn(i,c,i.path,l)));return i.common.async?Promise.all(a).then(c=>s(c)):s(a)}min(e,t){return new zr({...this._def,minSize:{value:e,message:ge.toString(t)}})}max(e,t){return new zr({...this._def,maxSize:{value:e,message:ge.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}zr.create=(n,e)=>new zr({valueType:n,minSize:null,maxSize:null,typeName:_e.ZodSet,...Re(e)});class mo extends Pe{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==ce.function)return ue(t,{code:ee.invalid_type,expected:ce.function,received:t.parsedType}),ke;function i(a,c){return $c({data:a,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,Sc(),ia].filter(l=>!!l),issueData:{code:ee.invalid_arguments,argumentsError:c}})}function o(a,c){return $c({data:a,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,Sc(),ia].filter(l=>!!l),issueData:{code:ee.invalid_return_type,returnTypeError:c}})}const r={errorMap:t.common.contextualErrorMap},s=t.data;if(this._def.returns instanceof Vo){const a=this;return Ut(async function(...c){const l=new En([]),d=await a._def.args.parseAsync(c,r).catch(v=>{throw l.addIssue(i(c,v)),l}),p=await Reflect.apply(s,this,d);return await a._def.returns._def.type.parseAsync(p,r).catch(v=>{throw l.addIssue(o(p,v)),l})})}else{const a=this;return Ut(function(...c){const l=a._def.args.safeParse(c,r);if(!l.success)throw new En([i(c,l.error)]);const d=Reflect.apply(s,this,l.data),p=a._def.returns.safeParse(d,r);if(!p.success)throw new En([o(d,p.error)]);return p.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new mo({...this._def,args:Jn.create(e).rest(yr.create())})}returns(e){return new mo({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,t,i){return new mo({args:e||Jn.create([]).rest(yr.create()),returns:t||yr.create(),typeName:_e.ZodFunction,...Re(i)})}}class da extends Pe{get schema(){return this._def.getter()}_parse(e){const{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}da.create=(n,e)=>new da({getter:n,typeName:_e.ZodLazy,...Re(e)});class ha extends Pe{_parse(e){if(e.data!==this._def.value){const t=this._getOrReturnCtx(e);return ue(t,{received:t.data,code:ee.invalid_literal,expected:this._def.value}),ke}return{status:"valid",value:e.data}}get value(){return this._def.value}}ha.create=(n,e)=>new ha({value:n,typeName:_e.ZodLiteral,...Re(e)});function f1(n,e){return new Xi({values:n,typeName:_e.ZodEnum,...Re(e)})}class Xi extends Pe{_parse(e){if(typeof e.data!="string"){const t=this._getOrReturnCtx(e),i=this._def.values;return ue(t,{expected:Ue.joinValues(i),received:t.parsedType,code:ee.invalid_type}),ke}if(this._def.values.indexOf(e.data)===-1){const t=this._getOrReturnCtx(e),i=this._def.values;return ue(t,{received:t.data,code:ee.invalid_enum_value,options:i}),ke}return Ut(e.data)}get options(){return this._def.values}get enum(){const e={};for(const t of this._def.values)e[t]=t;return e}get Values(){const e={};for(const t of this._def.values)e[t]=t;return e}get Enum(){const e={};for(const t of this._def.values)e[t]=t;return e}extract(e){return Xi.create(e)}exclude(e){return Xi.create(this.options.filter(t=>!e.includes(t)))}}Xi.create=f1;class pa extends Pe{_parse(e){const t=Ue.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(e);if(i.parsedType!==ce.string&&i.parsedType!==ce.number){const o=Ue.objectValues(t);return ue(i,{expected:Ue.joinValues(o),received:i.parsedType,code:ee.invalid_type}),ke}if(t.indexOf(e.data)===-1){const o=Ue.objectValues(t);return ue(i,{received:i.data,code:ee.invalid_enum_value,options:o}),ke}return Ut(e.data)}get enum(){return this._def.values}}pa.create=(n,e)=>new pa({values:n,typeName:_e.ZodNativeEnum,...Re(e)});class Vo extends Pe{unwrap(){return this._def.type}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==ce.promise&&t.common.async===!1)return ue(t,{code:ee.invalid_type,expected:ce.promise,received:t.parsedType}),ke;const i=t.parsedType===ce.promise?t.data:Promise.resolve(t.data);return Ut(i.then(o=>this._def.type.parseAsync(o,{path:t.path,errorMap:t.common.contextualErrorMap})))}}Vo.create=(n,e)=>new Vo({type:n,typeName:_e.ZodPromise,...Re(e)});class In extends Pe{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===_e.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:t,ctx:i}=this._processInputParams(e),o=this._def.effect||null,r={addIssue:s=>{ue(i,s),s.fatal?t.abort():t.dirty()},get path(){return i.path}};if(r.addIssue=r.addIssue.bind(r),o.type==="preprocess"){const s=o.transform(i.data,r);return i.common.issues.length?{status:"dirty",value:i.data}:i.common.async?Promise.resolve(s).then(a=>this._def.schema._parseAsync({data:a,path:i.path,parent:i})):this._def.schema._parseSync({data:s,path:i.path,parent:i})}if(o.type==="refinement"){const s=a=>{const c=o.refinement(a,r);if(i.common.async)return Promise.resolve(c);if(c instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return a};if(i.common.async===!1){const a=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return a.status==="aborted"?ke:(a.status==="dirty"&&t.dirty(),s(a.value),{status:t.value,value:a.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(a=>a.status==="aborted"?ke:(a.status==="dirty"&&t.dirty(),s(a.value).then(()=>({status:t.value,value:a.value}))))}if(o.type==="transform")if(i.common.async===!1){const s=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!ra(s))return s;const a=o.transform(s.value,r);if(a instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:a}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(s=>ra(s)?Promise.resolve(o.transform(s.value,r)).then(a=>({status:t.value,value:a})):s);Ue.assertNever(o)}}In.create=(n,e,t)=>new In({schema:n,typeName:_e.ZodEffects,effect:e,...Re(t)});In.createWithPreprocess=(n,e,t)=>new In({schema:e,effect:{type:"preprocess",transform:n},typeName:_e.ZodEffects,...Re(t)});class hi extends Pe{_parse(e){return this._getType(e)===ce.undefined?Ut(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}hi.create=(n,e)=>new hi({innerType:n,typeName:_e.ZodOptional,...Re(e)});class Hr extends Pe{_parse(e){return this._getType(e)===ce.null?Ut(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Hr.create=(n,e)=>new Hr({innerType:n,typeName:_e.ZodNullable,...Re(e)});class fa extends Pe{_parse(e){const{ctx:t}=this._processInputParams(e);let i=t.data;return t.parsedType===ce.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}fa.create=(n,e)=>new fa({innerType:n,typeName:_e.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...Re(e)});class Nc extends Pe{_parse(e){const{ctx:t}=this._processInputParams(e),i={...t,common:{...t.common,issues:[]}},o=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return Rc(o)?o.then(r=>({status:"valid",value:r.status==="valid"?r.value:this._def.catchValue({get error(){return new En(i.common.issues)},input:i.data})})):{status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new En(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}}Nc.create=(n,e)=>new Nc({innerType:n,typeName:_e.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...Re(e)});class Mc extends Pe{_parse(e){if(this._getType(e)!==ce.nan){const i=this._getOrReturnCtx(e);return ue(i,{code:ee.invalid_type,expected:ce.nan,received:i.parsedType}),ke}return{status:"valid",value:e.data}}}Mc.create=n=>new Mc({typeName:_e.ZodNaN,...Re(n)});const zy=Symbol("zod_brand");class g1 extends Pe{_parse(e){const{ctx:t}=this._processInputParams(e),i=t.data;return this._def.type._parse({data:i,path:t.path,parent:t})}unwrap(){return this._def.type}}class Ma extends Pe{_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.common.async)return(async()=>{const r=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return r.status==="aborted"?ke:r.status==="dirty"?(t.dirty(),p1(r.value)):this._def.out._parseAsync({data:r.value,path:i.path,parent:i})})();{const o=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return o.status==="aborted"?ke:o.status==="dirty"?(t.dirty(),{status:"dirty",value:o.value}):this._def.out._parseSync({data:o.value,path:i.path,parent:i})}}static create(e,t){return new Ma({in:e,out:t,typeName:_e.ZodPipeline})}}class Bc extends Pe{_parse(e){const t=this._def.innerType._parse(e);return ra(t)&&(t.value=Object.freeze(t.value)),t}}Bc.create=(n,e)=>new Bc({innerType:n,typeName:_e.ZodReadonly,...Re(e)});const w1=(n,e={},t)=>n?Ho.create().superRefine((i,o)=>{var r,s;if(!n(i)){const a=typeof e=="function"?e(i):typeof e=="string"?{message:e}:e,c=(s=(r=a.fatal)!==null&&r!==void 0?r:t)!==null&&s!==void 0?s:!0,l=typeof a=="string"?{message:a}:a;o.addIssue({code:"custom",...l,fatal:c})}}):Ho.create(),Hy={object:et.lazycreate};var _e;(function(n){n.ZodString="ZodString",n.ZodNumber="ZodNumber",n.ZodNaN="ZodNaN",n.ZodBigInt="ZodBigInt",n.ZodBoolean="ZodBoolean",n.ZodDate="ZodDate",n.ZodSymbol="ZodSymbol",n.ZodUndefined="ZodUndefined",n.ZodNull="ZodNull",n.ZodAny="ZodAny",n.ZodUnknown="ZodUnknown",n.ZodNever="ZodNever",n.ZodVoid="ZodVoid",n.ZodArray="ZodArray",n.ZodObject="ZodObject",n.ZodUnion="ZodUnion",n.ZodDiscriminatedUnion="ZodDiscriminatedUnion",n.ZodIntersection="ZodIntersection",n.ZodTuple="ZodTuple",n.ZodRecord="ZodRecord",n.ZodMap="ZodMap",n.ZodSet="ZodSet",n.ZodFunction="ZodFunction",n.ZodLazy="ZodLazy",n.ZodLiteral="ZodLiteral",n.ZodEnum="ZodEnum",n.ZodEffects="ZodEffects",n.ZodNativeEnum="ZodNativeEnum",n.ZodOptional="ZodOptional",n.ZodNullable="ZodNullable",n.ZodDefault="ZodDefault",n.ZodCatch="ZodCatch",n.ZodPromise="ZodPromise",n.ZodBranded="ZodBranded",n.ZodPipeline="ZodPipeline",n.ZodReadonly="ZodReadonly"})(_e||(_e={}));const Vy=(n,e={message:`Input not instance of ${n.name}`})=>w1(t=>t instanceof n,e),m1=Cn.create,b1=Ki.create,Zy=Mc.create,Gy=Ji.create,v1=oa.create,qy=Fr.create,Yy=Ic.create,Ky=sa.create,Jy=aa.create,Xy=Ho.create,Qy=yr.create,e6=bi.create,t6=Pc.create,n6=Tn.create,i6=et.create,r6=et.strictCreate,o6=ca.create,s6=$l.create,a6=la.create,c6=Jn.create,l6=ua.create,u6=Oc.create,d6=zr.create,h6=mo.create,p6=da.create,f6=ha.create,g6=Xi.create,w6=pa.create,m6=Vo.create,Ih=In.create,b6=hi.create,v6=Hr.create,y6=In.createWithPreprocess,x6=Ma.create,C6=()=>m1().optional(),_6=()=>b1().optional(),E6=()=>v1().optional(),T6={string:n=>Cn.create({...n,coerce:!0}),number:n=>Ki.create({...n,coerce:!0}),boolean:n=>oa.create({...n,coerce:!0}),bigint:n=>Ji.create({...n,coerce:!0}),date:n=>Fr.create({...n,coerce:!0})},A6=ke;var y=Object.freeze({__proto__:null,defaultErrorMap:ia,setErrorMap:Ry,getErrorMap:Sc,makeIssue:$c,EMPTY_PATH:Iy,addIssueToContext:ue,ParseStatus:It,INVALID:ke,DIRTY:p1,OK:Ut,isAborted:qu,isDirty:Yu,isValid:ra,isAsync:Rc,get util(){return Ue},get objectUtil(){return Gu},ZodParsedType:ce,getParsedType:Oi,ZodType:Pe,ZodString:Cn,ZodNumber:Ki,ZodBigInt:Ji,ZodBoolean:oa,ZodDate:Fr,ZodSymbol:Ic,ZodUndefined:sa,ZodNull:aa,ZodAny:Ho,ZodUnknown:yr,ZodNever:bi,ZodVoid:Pc,ZodArray:Tn,ZodObject:et,ZodUnion:ca,ZodDiscriminatedUnion:$l,ZodIntersection:la,ZodTuple:Jn,ZodRecord:ua,ZodMap:Oc,ZodSet:zr,ZodFunction:mo,ZodLazy:da,ZodLiteral:ha,ZodEnum:Xi,ZodNativeEnum:pa,ZodPromise:Vo,ZodEffects:In,ZodTransformer:In,ZodOptional:hi,ZodNullable:Hr,ZodDefault:fa,ZodCatch:Nc,ZodNaN:Mc,BRAND:zy,ZodBranded:g1,ZodPipeline:Ma,ZodReadonly:Bc,custom:w1,Schema:Pe,ZodSchema:Pe,late:Hy,get ZodFirstPartyTypeKind(){return _e},coerce:T6,any:Xy,array:n6,bigint:Gy,boolean:v1,date:qy,discriminatedUnion:s6,effect:Ih,enum:g6,function:h6,instanceof:Vy,intersection:a6,lazy:p6,literal:f6,map:u6,nan:Zy,nativeEnum:w6,never:e6,null:Jy,nullable:v6,number:b1,object:i6,oboolean:E6,onumber:_6,optional:b6,ostring:C6,pipeline:x6,preprocess:y6,promise:m6,record:l6,set:d6,strictObject:r6,string:m1,symbol:Yy,transformer:Ih,tuple:c6,undefined:Ky,union:o6,unknown:Qy,void:t6,NEVER:A6,ZodIssueCode:ee,quotelessJson:$y,ZodError:En});const _t=y.object({message:y.string()});function be(n){return y.literal(te[n])}y.object({accessList:y.array(y.string()),blockHash:y.string().nullable(),blockNumber:y.string().nullable(),chainId:y.string(),from:y.string(),gas:y.string(),hash:y.string(),input:y.string().nullable(),maxFeePerGas:y.string(),maxPriorityFeePerGas:y.string(),nonce:y.string(),r:y.string(),s:y.string(),to:y.string(),transactionIndex:y.string().nullable(),type:y.string(),v:y.string(),value:y.string()});const k6=y.object({chainId:y.number()}),S6=y.object({email:y.string().email()}),$6=y.object({otp:y.string()}),R6=y.object({chainId:y.optional(y.number()),preferredAccountType:y.optional(y.string())}),I6=y.object({email:y.string().email()}),P6=y.object({otp:y.string()}),O6=y.object({otp:y.string()}),N6=y.object({themeMode:y.optional(y.enum(["light","dark"])),themeVariables:y.optional(y.record(y.string(),y.string().or(y.number())))}),M6=y.object({metadata:y.object({name:y.string(),description:y.string(),url:y.string(),icons:y.array(y.string())}).optional(),sdkVersion:y.string(),projectId:y.string()}),B6=y.object({type:y.string()}),D6=y.object({action:y.enum(["VERIFY_DEVICE","VERIFY_OTP"])}),L6=y.object({action:y.enum(["VERIFY_PRIMARY_OTP","VERIFY_SECONDARY_OTP"])}),U6=y.object({email:y.string().email(),address:y.string(),chainId:y.number(),smartAccountDeployed:y.optional(y.boolean()),preferredAccountType:y.optional(y.string())}),j6=y.object({isConnected:y.boolean()}),W6=y.object({chainId:y.number()}),F6=y.object({chainId:y.number()}),z6=y.object({newEmail:y.string().email()}),H6=y.object({smartAccountEnabledNetworks:y.array(y.number())});y.object({address:y.string(),isDeployed:y.boolean()});const V6=y.object({type:y.string(),address:y.string()}),Z6=y.any(),G6=y.object({method:y.literal("eth_accounts")}),q6=y.object({method:y.literal("eth_blockNumber")}),Y6=y.object({method:y.literal("eth_call"),params:y.array(y.any())}),K6=y.object({method:y.literal("eth_chainId")}),J6=y.object({method:y.literal("eth_estimateGas"),params:y.array(y.any())}),X6=y.object({method:y.literal("eth_feeHistory"),params:y.array(y.any())}),Q6=y.object({method:y.literal("eth_gasPrice")}),e8=y.object({method:y.literal("eth_getAccount"),params:y.array(y.any())}),t8=y.object({method:y.literal("eth_getBalance"),params:y.array(y.any())}),n8=y.object({method:y.literal("eth_getBlockByHash"),params:y.array(y.any())}),i8=y.object({method:y.literal("eth_getBlockByNumber"),params:y.array(y.any())}),r8=y.object({method:y.literal("eth_getBlockReceipts"),params:y.array(y.any())}),o8=y.object({method:y.literal("eth_getBlockTransactionCountByHash"),params:y.array(y.any())}),s8=y.object({method:y.literal("eth_getBlockTransactionCountByNumber"),params:y.array(y.any())}),a8=y.object({method:y.literal("eth_getCode"),params:y.array(y.any())}),c8=y.object({method:y.literal("eth_getFilterChanges"),params:y.array(y.any())}),l8=y.object({method:y.literal("eth_getFilterLogs"),params:y.array(y.any())}),u8=y.object({method:y.literal("eth_getLogs"),params:y.array(y.any())}),d8=y.object({method:y.literal("eth_getProof"),params:y.array(y.any())}),h8=y.object({method:y.literal("eth_getStorageAt"),params:y.array(y.any())}),p8=y.object({method:y.literal("eth_getTransactionByBlockHashAndIndex"),params:y.array(y.any())}),f8=y.object({method:y.literal("eth_getTransactionByBlockNumberAndIndex"),params:y.array(y.any())}),g8=y.object({method:y.literal("eth_getTransactionByHash"),params:y.array(y.any())}),w8=y.object({method:y.literal("eth_getTransactionCount"),params:y.array(y.any())}),m8=y.object({method:y.literal("eth_getTransactionReceipt"),params:y.array(y.any())}),b8=y.object({method:y.literal("eth_getUncleCountByBlockHash"),params:y.array(y.any())}),v8=y.object({method:y.literal("eth_getUncleCountByBlockNumber"),params:y.array(y.any())}),y8=y.object({method:y.literal("eth_maxPriorityFeePerGas")}),x8=y.object({method:y.literal("eth_newBlockFilter")}),C8=y.object({method:y.literal("eth_newFilter"),params:y.array(y.any())}),_8=y.object({method:y.literal("eth_newPendingTransactionFilter")}),E8=y.object({method:y.literal("eth_sendRawTransaction"),params:y.array(y.any())}),T8=y.object({method:y.literal("eth_syncing"),params:y.array(y.any())}),A8=y.object({method:y.literal("eth_uninstallFilter"),params:y.array(y.any())}),Ph=y.object({method:y.literal("personal_sign"),params:y.array(y.any())}),k8=y.object({method:y.literal("eth_signTypedData_v4"),params:y.array(y.any())}),Oh=y.object({method:y.literal("eth_sendTransaction"),params:y.array(y.any())}),Nh=y.object({token:y.string()}),Qa={appEvent:y.object({type:be("APP_SWITCH_NETWORK"),payload:k6}).or(y.object({type:be("APP_CONNECT_EMAIL"),payload:S6})).or(y.object({type:be("APP_CONNECT_DEVICE")})).or(y.object({type:be("APP_CONNECT_OTP"),payload:$6})).or(y.object({type:be("APP_GET_USER"),payload:y.optional(R6)})).or(y.object({type:be("APP_SIGN_OUT")})).or(y.object({type:be("APP_IS_CONNECTED"),payload:y.optional(Nh)})).or(y.object({type:be("APP_GET_CHAIN_ID")})).or(y.object({type:be("APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS")})).or(y.object({type:be("APP_INIT_SMART_ACCOUNT")})).or(y.object({type:be("APP_SET_PREFERRED_ACCOUNT"),payload:B6})).or(y.object({type:be("APP_RPC_REQUEST"),payload:Ph.or(Oh).or(G6).or(q6).or(Y6).or(K6).or(J6).or(X6).or(Q6).or(e8).or(t8).or(n8).or(i8).or(r8).or(o8).or(s8).or(a8).or(c8).or(l8).or(u8).or(d8).or(h8).or(p8).or(f8).or(g8).or(w8).or(m8).or(b8).or(v8).or(y8).or(x8).or(C8).or(_8).or(E8).or(T8).or(A8).or(Ph).or(k8).or(Oh)})).or(y.object({type:be("APP_UPDATE_EMAIL"),payload:I6})).or(y.object({type:be("APP_UPDATE_EMAIL_PRIMARY_OTP"),payload:P6})).or(y.object({type:be("APP_UPDATE_EMAIL_SECONDARY_OTP"),payload:O6})).or(y.object({type:be("APP_SYNC_THEME"),payload:N6})).or(y.object({type:be("APP_SYNC_DAPP_DATA"),payload:M6})),frameEvent:y.object({type:be("FRAME_SWITCH_NETWORK_ERROR"),payload:_t}).or(y.object({type:be("FRAME_SWITCH_NETWORK_SUCCESS"),payload:F6})).or(y.object({type:be("FRAME_CONNECT_EMAIL_ERROR"),payload:_t})).or(y.object({type:be("FRAME_CONNECT_EMAIL_SUCCESS"),payload:D6})).or(y.object({type:be("FRAME_CONNECT_OTP_ERROR"),payload:_t})).or(y.object({type:be("FRAME_CONNECT_OTP_SUCCESS")})).or(y.object({type:be("FRAME_CONNECT_DEVICE_ERROR"),payload:_t})).or(y.object({type:be("FRAME_CONNECT_DEVICE_SUCCESS")})).or(y.object({type:be("FRAME_GET_USER_ERROR"),payload:_t})).or(y.object({type:be("FRAME_GET_USER_SUCCESS"),payload:U6})).or(y.object({type:be("FRAME_SIGN_OUT_ERROR"),payload:_t})).or(y.object({type:be("FRAME_SIGN_OUT_SUCCESS")})).or(y.object({type:be("FRAME_IS_CONNECTED_ERROR"),payload:_t})).or(y.object({type:be("FRAME_IS_CONNECTED_SUCCESS"),payload:j6})).or(y.object({type:be("FRAME_GET_CHAIN_ID_ERROR"),payload:_t})).or(y.object({type:be("FRAME_GET_CHAIN_ID_SUCCESS"),payload:W6})).or(y.object({type:be("FRAME_RPC_REQUEST_ERROR"),payload:_t})).or(y.object({type:be("FRAME_RPC_REQUEST_SUCCESS"),payload:Z6})).or(y.object({type:be("FRAME_SESSION_UPDATE"),payload:Nh})).or(y.object({type:be("FRAME_UPDATE_EMAIL_ERROR"),payload:_t})).or(y.object({type:be("FRAME_UPDATE_EMAIL_SUCCESS"),payload:L6})).or(y.object({type:be("FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR"),payload:_t})).or(y.object({type:be("FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS")})).or(y.object({type:be("FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR"),payload:_t})).or(y.object({type:be("FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS"),payload:z6})).or(y.object({type:be("FRAME_SYNC_THEME_ERROR"),payload:_t})).or(y.object({type:be("FRAME_SYNC_THEME_SUCCESS")})).or(y.object({type:be("FRAME_SYNC_DAPP_DATA_ERROR"),payload:_t})).or(y.object({type:be("FRAME_SYNC_DAPP_DATA_SUCCESS")})).or(y.object({type:be("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS"),payload:H6})).or(y.object({type:be("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR"),payload:_t})).or(y.object({type:be("FRAME_INIT_SMART_ACCOUNT_ERROR"),payload:_t})).or(y.object({type:be("FRAME_SET_PREFERRED_ACCOUNT_SUCCESS"),payload:V6})).or(y.object({type:be("FRAME_SET_PREFERRED_ACCOUNT_ERROR"),payload:_t}))},zt={set(n,e){wt.isClient&&localStorage.setItem(`${te.STORAGE_KEY}${n}`,e)},get(n){return wt.isClient?localStorage.getItem(`${te.STORAGE_KEY}${n}`):null},delete(n){wt.isClient&&localStorage.removeItem(`${te.STORAGE_KEY}${n}`)}},Mh={address:/^0x(?:[A-Fa-f0-9]{40})$/u,transactionHash:/^0x(?:[A-Fa-f0-9]{64})$/u,signedMessage:/^0x(?:[A-Fa-f0-9]{130})$/u},S8=["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],ec=30*1e3,wt={getBlockchainApiUrl(){try{const{timeZone:n}=new Intl.DateTimeFormat().resolvedOptions(),e=n.toUpperCase();return S8.includes(e)?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"}catch{return!1}},checkIfAllowedToTriggerEmail(){const n=zt.get(te.LAST_EMAIL_LOGIN_TIME);if(n){const e=Date.now()-Number(n);if(e<ec){const t=Math.ceil((ec-e)/1e3);throw new Error(`Please try again after ${t} seconds`)}}},getTimeToNextEmailLogin(){const n=zt.get(te.LAST_EMAIL_LOGIN_TIME);if(n){const e=Date.now()-Number(n);if(e<ec)return Math.ceil((ec-e)/1e3)}return 0},checkIfRequestExists(n){const e=this.getRequestMethod(n);return Dt.NOT_SAFE_RPC_METHODS.includes(e)||Dt.SAFE_RPC_METHODS.includes(e)},getRequestMethod(n){var e;return(e=n==null?void 0:n.payload)==null?void 0:e.method},getResponseType(n){const{type:e,payload:t}=n;return e===te.FRAME_RPC_REQUEST_ERROR?te.RPC_RESPONSE_TYPE_ERROR:typeof t=="string"&&(t.match(Mh.transactionHash)||t.match(Mh.signedMessage))?te.RPC_RESPONSE_TYPE_TX:te.RPC_RESPONSE_TYPE_OBJECT},checkIfRequestIsAllowed(n){const e=this.getRequestMethod(n);return Dt.SAFE_RPC_METHODS.includes(e)},isClient:typeof window<"u"};class $8{constructor(e,t=!1){if(this.iframe=null,this.rpcUrl=wt.getBlockchainApiUrl(),this.events={onFrameEvent:i=>{wt.isClient&&window.addEventListener("message",({data:o})=>{var s;if(!((s=o.type)!=null&&s.includes(te.FRAME_EVENT_KEY)))return;const r=Qa.frameEvent.parse(o);i(r)})},onAppEvent:i=>{wt.isClient&&window.addEventListener("message",({data:o})=>{var s;if(!((s=o.type)!=null&&s.includes(te.APP_EVENT_KEY)))return;const r=Qa.appEvent.parse(o);i(r)})},postAppEvent:i=>{var o;if(wt.isClient){if(!((o=this.iframe)!=null&&o.contentWindow))throw new Error("W3mFrame: iframe is not set");Qa.appEvent.parse(i),window.postMessage(i),this.iframe.contentWindow.postMessage(i,"*")}},postFrameEvent:i=>{if(wt.isClient){if(!parent)throw new Error("W3mFrame: parent is not set");Qa.frameEvent.parse(i),parent.postMessage(i,"*")}}},this.projectId=e,this.frameLoadPromise=new Promise((i,o)=>{this.frameLoadPromiseResolver={resolve:i,reject:o}}),t&&(this.frameLoadPromise=new Promise((i,o)=>{this.frameLoadPromiseResolver={resolve:i,reject:o}}),wt.isClient)){const i=document.createElement("iframe");i.id="w3m-iframe",i.src=`${Sy}?projectId=${e}`,i.style.position="fixed",i.style.zIndex="999999",i.style.display="none",i.style.borderBottomLeftRadius="clamp(0px, var(--wui-border-radius-l), 44px)",i.style.borderBottomRightRadius="clamp(0px, var(--wui-border-radius-l), 44px)",i.style.opacity="0",i.style.borderBottomLeftRadius="clamp(0px, var(--wui-border-radius-l), 44px)",i.style.borderBottomRightRadius="clamp(0px, var(--wui-border-radius-l), 44px)",document.body.appendChild(i),this.iframe=i,this.iframe.onload=()=>{var o;(o=this.frameLoadPromiseResolver)==null||o.resolve(void 0)},this.iframe.onerror=()=>{var o;(o=this.frameLoadPromiseResolver)==null||o.reject("Unable to load email login dependency")}}}get networks(){const e=[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,324,280,100,8453,84531,7777777,999].map(t=>({[t]:{rpcUrl:`${this.rpcUrl}/v1/?chainId=eip155:${t}&projectId=${this.projectId}`,chainId:t}}));return Object.assign({},...e)}}class R8{constructor(e){this.connectEmailResolver=void 0,this.connectDeviceResolver=void 0,this.connectOtpResolver=void 0,this.connectResolver=void 0,this.disconnectResolver=void 0,this.isConnectedResolver=void 0,this.getChainIdResolver=void 0,this.switchChainResolver=void 0,this.rpcRequestResolver=void 0,this.updateEmailResolver=void 0,this.updateEmailPrimaryOtpResolver=void 0,this.updateEmailSecondaryOtpResolver=void 0,this.syncThemeResolver=void 0,this.syncDappDataResolver=void 0,this.smartAccountEnabledNetworksResolver=void 0,this.setPreferredAccountResolver=void 0,this.w3mFrame=new $8(e,!0),this.w3mFrame.events.onFrameEvent(t=>{switch(console.log("💻 received",t),t.type){case te.FRAME_CONNECT_EMAIL_SUCCESS:return this.onConnectEmailSuccess(t);case te.FRAME_CONNECT_EMAIL_ERROR:return this.onConnectEmailError(t);case te.FRAME_CONNECT_DEVICE_SUCCESS:return this.onConnectDeviceSuccess();case te.FRAME_CONNECT_DEVICE_ERROR:return this.onConnectDeviceError(t);case te.FRAME_CONNECT_OTP_SUCCESS:return this.onConnectOtpSuccess();case te.FRAME_CONNECT_OTP_ERROR:return this.onConnectOtpError(t);case te.FRAME_GET_USER_SUCCESS:return this.onConnectSuccess(t);case te.FRAME_GET_USER_ERROR:return this.onConnectError(t);case te.FRAME_IS_CONNECTED_SUCCESS:return this.onIsConnectedSuccess(t);case te.FRAME_IS_CONNECTED_ERROR:return this.onIsConnectedError(t);case te.FRAME_GET_CHAIN_ID_SUCCESS:return this.onGetChainIdSuccess(t);case te.FRAME_GET_CHAIN_ID_ERROR:return this.onGetChainIdError(t);case te.FRAME_SIGN_OUT_SUCCESS:return this.onSignOutSuccess();case te.FRAME_SIGN_OUT_ERROR:return this.onSignOutError(t);case te.FRAME_SWITCH_NETWORK_SUCCESS:return this.onSwitchChainSuccess(t);case te.FRAME_SWITCH_NETWORK_ERROR:return this.onSwitchChainError(t);case te.FRAME_RPC_REQUEST_SUCCESS:return this.onRpcRequestSuccess(t);case te.FRAME_RPC_REQUEST_ERROR:return this.onRpcRequestError(t);case te.FRAME_SESSION_UPDATE:return this.onSessionUpdate(t);case te.FRAME_UPDATE_EMAIL_SUCCESS:return this.onUpdateEmailSuccess(t);case te.FRAME_UPDATE_EMAIL_ERROR:return this.onUpdateEmailError(t);case te.FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:return this.onUpdateEmailPrimaryOtpSuccess();case te.FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:return this.onUpdateEmailPrimaryOtpError(t);case te.FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:return this.onUpdateEmailSecondaryOtpSuccess(t);case te.FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:return this.onUpdateEmailSecondaryOtpError(t);case te.FRAME_SYNC_THEME_SUCCESS:return this.onSyncThemeSuccess();case te.FRAME_SYNC_THEME_ERROR:return this.onSyncThemeError(t);case te.FRAME_SYNC_DAPP_DATA_SUCCESS:return this.onSyncDappDataSuccess();case te.FRAME_SYNC_DAPP_DATA_ERROR:return this.onSyncDappDataError(t);case te.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:return this.onSmartAccountEnabledNetworksSuccess(t);case te.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:return this.onSmartAccountEnabledNetworksError(t);case te.FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:return this.onSetPreferredAccountSuccess();case te.FRAME_SET_PREFERRED_ACCOUNT_ERROR:return this.onSetPreferredAccountError();default:return null}})}getLoginEmailUsed(){return!!zt.get(te.EMAIL_LOGIN_USED_KEY)}getEmail(){return zt.get(te.EMAIL)}rejectRpcRequest(){var e;(e=this.rpcRequestResolver)==null||e.reject()}async connectEmail(e){return await this.w3mFrame.frameLoadPromise,wt.checkIfAllowedToTriggerEmail(),this.w3mFrame.events.postAppEvent({type:te.APP_CONNECT_EMAIL,payload:e}),new Promise((t,i)=>{this.connectEmailResolver={resolve:t,reject:i}})}async connectDevice(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:te.APP_CONNECT_DEVICE}),new Promise((e,t)=>{this.connectDeviceResolver={resolve:e,reject:t}})}async connectOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:te.APP_CONNECT_OTP,payload:e}),new Promise((t,i)=>{this.connectOtpResolver={resolve:t,reject:i}})}async isConnected(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:te.APP_IS_CONNECTED,payload:void 0}),new Promise((e,t)=>{this.isConnectedResolver={resolve:e,reject:t}})}async getChainId(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:te.APP_GET_CHAIN_ID}),new Promise((e,t)=>{this.getChainIdResolver={resolve:e,reject:t}})}async updateEmail(e){return await this.w3mFrame.frameLoadPromise,wt.checkIfAllowedToTriggerEmail(),this.w3mFrame.events.postAppEvent({type:te.APP_UPDATE_EMAIL,payload:e}),new Promise((t,i)=>{this.updateEmailResolver={resolve:t,reject:i}})}async updateEmailPrimaryOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:te.APP_UPDATE_EMAIL_PRIMARY_OTP,payload:e}),new Promise((t,i)=>{this.updateEmailPrimaryOtpResolver={resolve:t,reject:i}})}async updateEmailSecondaryOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:te.APP_UPDATE_EMAIL_SECONDARY_OTP,payload:e}),new Promise((t,i)=>{this.updateEmailSecondaryOtpResolver={resolve:t,reject:i}})}async syncTheme(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:te.APP_SYNC_THEME,payload:e}),new Promise((t,i)=>{this.syncThemeResolver={resolve:t,reject:i}})}async syncDappData(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:te.APP_SYNC_DAPP_DATA,payload:e}),new Promise((t,i)=>{this.syncDappDataResolver={resolve:t,reject:i}})}async getSmartAccountEnabledNetworks(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:te.APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS}),new Promise((e,t)=>{this.smartAccountEnabledNetworksResolver={resolve:e,reject:t}})}async setPreferredAccount(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:te.APP_SET_PREFERRED_ACCOUNT,payload:{type:e}}),new Promise((t,i)=>{this.setPreferredAccountResolver={resolve:t,reject:i}})}async connect(e){const t=(e==null?void 0:e.chainId)??this.getLastUsedChainId()??1;return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:te.APP_GET_USER,payload:{chainId:t}}),new Promise((i,o)=>{this.connectResolver={resolve:i,reject:o}})}async switchNetwork(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:te.APP_SWITCH_NETWORK,payload:{chainId:e}}),new Promise((t,i)=>{this.switchChainResolver={resolve:t,reject:i}})}async disconnect(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:te.APP_SIGN_OUT}),new Promise((e,t)=>{this.disconnectResolver={resolve:e,reject:t}})}async request(e){return await this.w3mFrame.frameLoadPromise,Dt.GET_CHAIN_ID===e.method?this.getLastUsedChainId():(this.w3mFrame.events.postAppEvent({type:te.APP_RPC_REQUEST,payload:e}),new Promise((t,i)=>{this.rpcRequestResolver={resolve:t,reject:i}}))}onRpcRequest(e){this.w3mFrame.events.onAppEvent(t=>{t.type.includes(te.RPC_METHOD_KEY)&&e(t)})}onRpcResponse(e){this.w3mFrame.events.onFrameEvent(t=>{t.type.includes(te.RPC_METHOD_KEY)&&e(t)})}onIsConnected(e){this.w3mFrame.events.onFrameEvent(t=>{t.type===te.FRAME_GET_USER_SUCCESS&&e(t.payload)})}onNotConnected(e){this.w3mFrame.events.onFrameEvent(t=>{t.type===te.FRAME_IS_CONNECTED_ERROR&&e(),t.type===te.FRAME_IS_CONNECTED_SUCCESS&&!t.payload.isConnected&&e()})}onSetPreferredAccount(e){this.w3mFrame.events.onFrameEvent(t=>{t.type===te.FRAME_SET_PREFERRED_ACCOUNT_SUCCESS?e(t.payload):t.type===te.FRAME_SET_PREFERRED_ACCOUNT_ERROR&&e({type:Dt.ACCOUNT_TYPES.EOA})})}onGetSmartAccountEnabledNetworks(e){this.w3mFrame.events.onFrameEvent(t=>{t.type===te.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS?e(t.payload.smartAccountEnabledNetworks):t.type===te.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR&&e([])})}onConnectEmailSuccess(e){var t;(t=this.connectEmailResolver)==null||t.resolve(e.payload),this.setNewLastEmailLoginTime()}onConnectEmailError(e){var t;(t=this.connectEmailResolver)==null||t.reject(e.payload.message)}onConnectDeviceSuccess(){var e;(e=this.connectDeviceResolver)==null||e.resolve(void 0)}onConnectDeviceError(e){var t;(t=this.connectDeviceResolver)==null||t.reject(e.payload.message)}onConnectOtpSuccess(){var e;(e=this.connectOtpResolver)==null||e.resolve(void 0)}onConnectOtpError(e){var t;(t=this.connectOtpResolver)==null||t.reject(e.payload.message)}onConnectSuccess(e){var t;this.setEmailLoginSuccess(e.payload.email),this.setLastUsedChainId(e.payload.chainId),(t=this.connectResolver)==null||t.resolve(e.payload)}onConnectError(e){var t;(t=this.connectResolver)==null||t.reject(e.payload.message)}onIsConnectedSuccess(e){var t;e.payload.isConnected||this.deleteEmailLoginCache(),(t=this.isConnectedResolver)==null||t.resolve(e.payload)}onIsConnectedError(e){var t;(t=this.isConnectedResolver)==null||t.reject(e.payload.message)}onGetChainIdSuccess(e){var t;this.setLastUsedChainId(e.payload.chainId),(t=this.getChainIdResolver)==null||t.resolve(e.payload)}onGetChainIdError(e){var t;(t=this.getChainIdResolver)==null||t.reject(e.payload.message)}onSignOutSuccess(){var e;(e=this.disconnectResolver)==null||e.resolve(void 0),this.deleteEmailLoginCache()}onSignOutError(e){var t;(t=this.disconnectResolver)==null||t.reject(e.payload.message)}onSwitchChainSuccess(e){var t;this.setLastUsedChainId(e.payload.chainId),(t=this.switchChainResolver)==null||t.resolve(e.payload)}onSwitchChainError(e){var t;(t=this.switchChainResolver)==null||t.reject(e.payload.message)}onRpcRequestSuccess(e){var t;(t=this.rpcRequestResolver)==null||t.resolve(e.payload)}onRpcRequestError(e){var t;(t=this.rpcRequestResolver)==null||t.reject(e.payload.message)}onSessionUpdate(e){}onUpdateEmailSuccess(e){var t;(t=this.updateEmailResolver)==null||t.resolve(e.payload),this.setNewLastEmailLoginTime()}onUpdateEmailError(e){var t;(t=this.updateEmailResolver)==null||t.reject(e.payload.message)}onUpdateEmailPrimaryOtpSuccess(){var e;(e=this.updateEmailPrimaryOtpResolver)==null||e.resolve(void 0)}onUpdateEmailPrimaryOtpError(e){var t;(t=this.updateEmailPrimaryOtpResolver)==null||t.reject(e.payload.message)}onUpdateEmailSecondaryOtpSuccess(e){var i;const{newEmail:t}=e.payload;this.setEmailLoginSuccess(t),(i=this.updateEmailSecondaryOtpResolver)==null||i.resolve({newEmail:t})}onUpdateEmailSecondaryOtpError(e){var t;(t=this.updateEmailSecondaryOtpResolver)==null||t.reject(e.payload.message)}onSyncThemeSuccess(){var e;(e=this.syncThemeResolver)==null||e.resolve(void 0)}onSyncThemeError(e){var t;(t=this.syncThemeResolver)==null||t.reject(e.payload.message)}onSyncDappDataSuccess(){var e;(e=this.syncDappDataResolver)==null||e.resolve(void 0)}onSyncDappDataError(e){var t;(t=this.syncDappDataResolver)==null||t.reject(e.payload.message)}onSmartAccountEnabledNetworksSuccess(e){var t;this.persistSmartAccountEnabledNetworks(e.payload.smartAccountEnabledNetworks),(t=this.smartAccountEnabledNetworksResolver)==null||t.resolve(e.payload)}onSmartAccountEnabledNetworksError(e){var t;this.persistSmartAccountEnabledNetworks([]),(t=this.smartAccountEnabledNetworksResolver)==null||t.reject(e.payload.message)}onSetPreferredAccountSuccess(){var e;(e=this.setPreferredAccountResolver)==null||e.resolve(void 0)}onSetPreferredAccountError(){var e;(e=this.setPreferredAccountResolver)==null||e.reject()}setNewLastEmailLoginTime(){zt.set(te.LAST_EMAIL_LOGIN_TIME,Date.now().toString())}setEmailLoginSuccess(e){zt.set(te.EMAIL,e),zt.set(te.EMAIL_LOGIN_USED_KEY,"true"),zt.delete(te.LAST_EMAIL_LOGIN_TIME)}deleteEmailLoginCache(){zt.delete(te.EMAIL_LOGIN_USED_KEY),zt.delete(te.EMAIL),zt.delete(te.LAST_USED_CHAIN_KEY)}setLastUsedChainId(e){zt.set(te.LAST_USED_CHAIN_KEY,String(e))}getLastUsedChainId(){return Number(zt.get(te.LAST_USED_CHAIN_KEY))}persistSmartAccountEnabledNetworks(e){zt.set(te.SMART_ACCOUNT_ENABLED_NETWORKS,e.join(","))}}var sr=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Xn=class extends le{constructor(){super(),this.usubscribe=[],this.networkImages=mt.state.networkImages,this.address=ie.state.address,this.profileImage=ie.state.profileImage,this.profileName=ie.state.profileName,this.network=he.state.caipNetwork,this.preferredAccountType=ie.state.preferredAccountType,this.disconnecting=!1,this.loading=!1,this.usubscribe.push(ie.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.preferredAccountType=e.preferredAccountType):Ie.close()}),he.subscribeKey("caipNetwork",e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){var t,i;if(!this.address)throw new Error("w3m-account-settings-view: No account provided");const e=this.networkImages[((t=this.network)==null?void 0:t.imageId)??""];return k`
      <wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${ye(this.profileImage)}
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100" data-testid="account-settings-address">
              ${this.profileName?ve.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):ve.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${["0","xl","m","xl"]}>
          ${this.emailBtnTemplate()}
          <wui-list-item
            .variant=${e?"image":"icon"}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${ye(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${((i=this.network)==null?void 0:i.name)??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()}
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}isAllowedNetworkSwitch(){const{requestedCaipNetworks:e}=he.state,t=e?e.length>1:!1,i=e==null?void 0:e.find(({id:o})=>{var r;return o===((r=this.network)==null?void 0:r.id)});return t||!i}onCopyAddress(){try{this.address&&(oe.copyToClopboard(this.address),De.showSuccess("Address copied"))}catch{De.showError("Failed to copy")}}emailBtnTemplate(){const e=dt.getConnectedConnector(),t=je.getEmailConnector();if(!t||e!=="EMAIL")return null;const i=t.provider.getEmail()??"";return k`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="mail"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.onGoToUpdateEmail(i)}
      >
        <wui-text variant="paragraph-500" color="fg-100">${i}</wui-text>
      </wui-list-item>
    `}togglePreferredAccountBtnTemplate(){const e=he.checkIfSmartAccountEnabled(),t=dt.getConnectedConnector();if(!je.getEmailConnector()||t!=="EMAIL"||!e)return null;const o=this.preferredAccountType===Dt.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account";return k`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="swapHorizontalBold"
        iconSize="sm"
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="paragraph-500" color="fg-100">${o}</wui-text>
      </wui-list-item>
    `}async changePreferredAccountType(){const e=he.checkIfSmartAccountEnabled(),t=this.preferredAccountType===Dt.ACCOUNT_TYPES.SMART_ACCOUNT||!e?Dt.ACCOUNT_TYPES.EOA:Dt.ACCOUNT_TYPES.SMART_ACCOUNT,i=je.getEmailConnector();i&&(this.loading=!0,await(i==null?void 0:i.provider.setPreferredAccount(t)),this.loading=!1,this.requestUpdate())}onGoToUpdateEmail(e){G.push("UpdateEmailWallet",{email:e})}onNetworks(){this.isAllowedNetworkSwitch()&&G.push("Networks")}async onDisconnect(){try{this.disconnecting=!0,await $e.disconnect(),me.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),Ie.close()}catch{me.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),De.showError("Failed to disconnect")}finally{this.disconnecting=!1}}};Xn.styles=by;sr([j()],Xn.prototype,"address",void 0);sr([j()],Xn.prototype,"profileImage",void 0);sr([j()],Xn.prototype,"profileName",void 0);sr([j()],Xn.prototype,"network",void 0);sr([j()],Xn.prototype,"preferredAccountType",void 0);sr([j()],Xn.prototype,"disconnecting",void 0);sr([j()],Xn.prototype,"loading",void 0);Xn=sr([V("w3m-account-settings-view")],Xn);var I8=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Bh=class extends le{render(){const e=dt.getConnectedConnector();return k`
      ${fe.state.enableWalletFeatures&&e==="EMAIL"?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return k`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return k`<w3m-account-default-widget></w3m-account-default-widget>`}};Bh=I8([V("w3m-account-view")],Bh);var y1=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Ju=class extends le{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=oe.debounce(e=>{this.search=e})}render(){const e=this.search.length>=2;return k`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?k`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:k`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return oe.isMobile()?k`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){G.push("ConnectingWalletConnect")}};y1([j()],Ju.prototype,"search",void 0);Ju=y1([V("w3m-all-wallets-view")],Ju);const P8=Ee`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }
`;var Bn=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let nn=class extends le{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=Fe.state.selectedProvider,this.uri=$e.state.wcUri,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.error=!1,this.startTime=null,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(Fe.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e})),this.watchTransactions()}disconnectedCallback(){this.intervalId&&clearInterval(this.intervalId)}render(){var i,o;let e="Continue in external window";this.error?e="Buy failed":this.selectedOnRampProvider&&(e=`Buy in ${(i=this.selectedOnRampProvider)==null?void 0:i.label}`);const t=this.error?"Buy can be declined from your side or due to and error on the provider app":"We’ll notify you once your Buy is processed";return k`
      <wui-flex
        data-error=${ye(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${ye((o=this.selectedOnRampProvider)==null?void 0:o.name)}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${e}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        ${this.error?this.tryAgainTemplate():null}
      </wui-flex>

      <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `}watchTransactions(){if(this.selectedOnRampProvider)switch(this.selectedOnRampProvider.name){case"coinbase":this.startTime=Date.now(),this.initializeCoinbaseTransactions();break}}async initializeCoinbaseTransactions(){await this.watchCoinbaseTransactions(),this.intervalId=setInterval(()=>this.watchCoinbaseTransactions(),4e3)}async watchCoinbaseTransactions(){try{const e=ie.state.address,t=fe.state.projectId;if(!e)throw new Error("No address found");(await Bt.fetchTransactions({account:e,onramp:"coinbase",projectId:t})).data.filter(r=>new Date(r.metadata.minedAt)>new Date(this.startTime)||r.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS").length?(clearInterval(this.intervalId),G.replace("OnRampActivity")):this.startTime&&Date.now()-this.startTime>=18e4&&(clearInterval(this.intervalId),this.error=!0)}catch(e){De.showError(e)}}onTryAgain(){this.selectedOnRampProvider&&(this.error=!1,oe.openHref(this.selectedOnRampProvider.url,"popupWindow","width=600,height=800,scrollbars=yes"))}tryAgainTemplate(){var e;return(e=this.selectedOnRampProvider)!=null&&e.url?k`<wui-button variant="accent" @click=${this.onTryAgain.bind(this)}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`:null}loaderTemplate(){const e=pt.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return k`<wui-loading-thumbnail radius=${t*9}></wui-loading-thumbnail>`}onCopyUri(){var e;if(!((e=this.selectedOnRampProvider)!=null&&e.url)){De.showError("No link found"),G.goBack();return}try{oe.copyToClopboard(this.selectedOnRampProvider.url),De.showSuccess("Link copied")}catch{De.showError("Failed to copy")}}};nn.styles=P8;Bn([j()],nn.prototype,"selectedOnRampProvider",void 0);Bn([j()],nn.prototype,"uri",void 0);Bn([j()],nn.prototype,"ready",void 0);Bn([j()],nn.prototype,"showRetry",void 0);Bn([j()],nn.prototype,"buffering",void 0);Bn([j()],nn.prototype,"error",void 0);Bn([j()],nn.prototype,"intervalId",void 0);Bn([j()],nn.prototype,"startTime",void 0);Bn([we({type:Boolean})],nn.prototype,"isMobile",void 0);Bn([we()],nn.prototype,"onRetry",void 0);nn=Bn([V("w3m-buy-in-progress-view")],nn);const O8=Ee`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`,Te={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",COINBASE_CONNECTOR_ID:"coinbaseWallet",COINBASE_SDK_CONNECTOR_ID:"coinbaseWalletSDK",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",EMAIL_CONNECTOR_ID:"w3mEmail",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet"},VERSION:"4.1.11"},li={ConnectorExplorerIds:{[Te.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[Te.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[Te.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"692ed6ba-e569-459a-556a-776476829e00",42161:"3bff954d-5cb0-47a0-9a23-d20192e74600",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100",2020:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",2021:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00","5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":"a1b58899-f671-4276-6a5e-56ca5bd59700","4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z":"a1b58899-f671-4276-6a5e-56ca5bd59700",EtWTRABZaYq6iMfeYKouRu166VU2xqa1:"a1b58899-f671-4276-6a5e-56ca5bd59700"},ConnectorImageIds:{[Te.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[Te.COINBASE_SDK_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[Te.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[Te.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[Te.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[Te.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[Te.INJECTED_CONNECTOR_ID]:"Browser Wallet",[Te.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[Te.COINBASE_CONNECTOR_ID]:"Coinbase",[Te.COINBASE_SDK_CONNECTOR_ID]:"Coinbase",[Te.LEDGER_CONNECTOR_ID]:"Ledger",[Te.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[Te.INJECTED_CONNECTOR_ID]:"INJECTED",[Te.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[Te.EIP6963_CONNECTOR_ID]:"ANNOUNCED",[Te.EMAIL_CONNECTOR_ID]:"EMAIL"},WalletConnectRpcChainIds:[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280]},N8={getCaipTokens(n){if(!n)return;const e={};return Object.entries(n).forEach(([t,i])=>{e[`${Te.EIP155}:${t}`]=i}),e}};var p0=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let ga=class extends le{constructor(){super(),this.unsubscribe=[],this.connectors=je.state.connectors,this.count=Ce.state.count,this.unsubscribe.push(je.subscribeKey("connectors",e=>this.connectors=e),Ce.subscribeKey("count",e=>this.count=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return k`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-email-login-widget></w3m-email-login-widget>

        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.externalTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(oe.isMobile())return null;const e=this.connectors.find(t=>t.type==="WALLET_CONNECT");return e?k`
      <wui-list-wallet
        imageSrc=${ye(He.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `:null}customTemplate(){const{customWallets:e}=fe.state;return e!=null&&e.length?this.filterOutDuplicateWallets(e).map(i=>k`
        <wui-list-wallet
          imageSrc=${ye(He.getWalletImage(i))}
          name=${i.name??"Unknown"}
          @click=${()=>this.onConnectWallet(i)}
          data-testid=${`wallet-selector-${i.id}`}
        >
        </wui-list-wallet>
      `):null}featuredTemplate(){if(!this.connectors.find(o=>o.type==="WALLET_CONNECT"))return null;const{featured:t}=Ce.state;return t.length?this.filterOutDuplicateWallets(t).map(o=>k`
        <wui-list-wallet
          imageSrc=${ye(He.getWalletImage(o))}
          name=${o.name??"Unknown"}
          @click=${()=>this.onConnectWallet(o)}
        >
        </wui-list-wallet>
      `):null}recentTemplate(){return dt.getRecentWallets().map(t=>k`
        <wui-list-wallet
          imageSrc=${ye(He.getWalletImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnectWallet(t)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)}announcedTemplate(){return this.connectors.map(e=>e.type!=="ANNOUNCED"?null:k`
        <wui-list-wallet
          imageSrc=${ye(He.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
          tagVariant="success"
          .installed=${!0}
        >
        </wui-list-wallet>
      `)}injectedTemplate(){return this.connectors.map(e=>e.type!=="INJECTED"||!$e.checkInstalled()?null:k`
        <wui-list-wallet
          imageSrc=${ye(He.getConnectorImage(e))}
          .installed=${!0}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
        >
        </wui-list-wallet>
      `)}externalTemplate(){const e=je.getAnnouncedConnectorRdns();return this.connectors.map(t=>["WALLET_CONNECT","INJECTED","ANNOUNCED","EMAIL"].includes(t.type)||e.includes(Te.CONNECTOR_RDNS_MAP[t.id])?null:k`
        <wui-list-wallet
          imageSrc=${ye(He.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
        >
        </wui-list-wallet>
      `)}allWalletsTemplate(){const e=this.connectors.find(a=>a.type==="WALLET_CONNECT"),{allWallets:t}=fe.state;if(!e||t==="HIDE"||t==="ONLY_MOBILE"&&!oe.isMobile())return null;const i=Ce.state.featured.length,o=this.count+i,r=o<10?o:Math.floor(o/10)*10,s=r<o?`${r}+`:`${r}`;return k`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${s}
        tagVariant="shade"
        data-testid="all-wallets"
      ></wui-list-wallet>
    `}recommendedTemplate(){if(!this.connectors.find(f=>f.type==="WALLET_CONNECT"))return null;const{recommended:t}=Ce.state,{customWallets:i,featuredWalletIds:o}=fe.state,{connectors:r}=je.state,s=dt.getRecentWallets(),c=r.filter(f=>f.type==="INJECTED").filter(f=>f.name!=="Browser Wallet");if(o||i||!t.length)return null;const l=c.length+s.length,d=Math.max(0,2-l);return this.filterOutDuplicateWallets(t).slice(0,d).map(f=>k`
        <wui-list-wallet
          imageSrc=${ye(He.getWalletImage(f))}
          name=${(f==null?void 0:f.name)??"Unknown"}
          @click=${()=>this.onConnectWallet(f)}
        >
        </wui-list-wallet>
      `)}onConnector(e){e.type==="WALLET_CONNECT"?oe.isMobile()?G.push("AllWallets"):G.push("ConnectingWalletConnect"):G.push("ConnectingExternal",{connector:e})}filterOutDuplicateWallets(e){const t=dt.getRecentWallets(),i=this.connectors.map(a=>{var c;return(c=a.info)==null?void 0:c.rdns}).filter(Boolean),o=t.map(a=>a.rdns).filter(Boolean),r=i.concat(o);return e.filter(a=>!r.includes(String(a==null?void 0:a.rdns)))}onAllWallets(){me.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),G.push("AllWallets")}onConnectWallet(e){G.push("ConnectingWalletConnect",{wallet:e})}};ga.styles=O8;p0([j()],ga.prototype,"connectors",void 0);p0([j()],ga.prototype,"count",void 0);ga=p0([V("w3m-connect-view")],ga);const M8=Ee`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var ro=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};class Yt extends le{constructor(){var e,t,i,o;super(),this.wallet=(e=G.state.data)==null?void 0:e.wallet,this.connector=(t=G.state.data)==null?void 0:t.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=He.getWalletImage(this.wallet)??He.getConnectorImage(this.connector),this.name=((i=this.wallet)==null?void 0:i.name)??((o=this.connector)==null?void 0:o.name)??"Wallet",this.isRetrying=!1,this.uri=$e.state.wcUri,this.error=$e.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push($e.subscribeKey("wcUri",r=>{var s;this.uri=r,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(s=this.onConnect)==null||s.call(this))}),$e.subscribeKey("wcError",r=>this.error=r),$e.subscribeKey("buffering",r=>this.buffering=r))}firstUpdated(){var e;(e=this.onAutoConnect)==null||e.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){var i;(i=this.onRender)==null||i.call(this),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let t=`Continue in ${this.name}`;return this.buffering&&(t="Connecting..."),this.error&&(t="Connection declined"),k`
      <wui-flex
        data-error=${ye(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${ye(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?k`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){var e;if(this.error&&!this.showRetry){this.showRetry=!0;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-button");t==null||t.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){var e,t;this.buffering||($e.setWcError(!1),this.onRetry?(this.isRetrying=!0,(e=this.onRetry)==null||e.call(this)):(t=this.onConnect)==null||t.call(this))}loaderTemplate(){const e=pt.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return k`<wui-loading-thumbnail radius=${t*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(oe.copyToClopboard(this.uri),De.showSuccess("Link copied"))}catch{De.showError("Failed to copy")}}}Yt.styles=M8;ro([j()],Yt.prototype,"uri",void 0);ro([j()],Yt.prototype,"error",void 0);ro([j()],Yt.prototype,"ready",void 0);ro([j()],Yt.prototype,"showRetry",void 0);ro([j()],Yt.prototype,"buffering",void 0);ro([we({type:Boolean})],Yt.prototype,"isMobile",void 0);ro([we()],Yt.prototype,"onRetry",void 0);var B8=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Dh=class extends Yt{constructor(){if(super(),!this.connector)throw new Error("w3m-connecting-view: No connector provided");me.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&dt.setConnectedWalletImageUrl(this.connector.imageUrl),await $e.connectExternal(this.connector),fe.state.isSiweEnabled?G.push("ConnectingSiwe"):Ie.close(),me.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.connector.name||"Unknown"}}))}catch(e){me.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),this.error=!0}}};Dh=B8([V("w3m-connecting-external-view")],Dh);var f0=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Dc=class extends le{constructor(){var e;super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=(e=G.state.data)==null?void 0:e.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),ut.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),k`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):k`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{const{wcPairingExpiry:t}=$e.state;if(e||oe.isPairingExpired(t)){if($e.connectWalletConnect(),this.wallet){const i=He.getWalletImage(this.wallet);i&&dt.setConnectedWalletImageUrl(i)}else{const o=je.state.connectors.find(s=>s.type==="WALLET_CONNECT"),r=He.getConnectorImage(o);r&&dt.setConnectedWalletImageUrl(r)}await $e.state.wcPromise,this.finalizeConnection(),fe.state.isSiweEnabled?G.push("ConnectingSiwe"):Ie.close()}}catch(t){me.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(t==null?void 0:t.message)??"Unknown"}}),$e.setWcError(!0),oe.isAllowedRetry(this.lastRetry)&&(De.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){var i;const{wcLinking:e,recentWallet:t}=$e.state;e&&dt.setWalletConnectDeepLink(e),t&&dt.setWeb3ModalRecent(t),me.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode",name:((i=this.wallet)==null?void 0:i.name)||"Unknown"}})}determinePlatforms(){if(!this.wallet)throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;const{mobile_link:e,desktop_link:t,webapp_link:i,injected:o,rdns:r}=this.wallet,s=o==null?void 0:o.map(({injected_id:T})=>T).filter(Boolean),a=r?[r]:s??[],c=a.length,l=e,d=i,p=$e.checkInstalled(a),f=c&&p,v=t&&!oe.isMobile();f&&this.platforms.push("browser"),l&&this.platforms.push(oe.isMobile()?"mobile":"qrcode"),d&&this.platforms.push("web"),v&&this.platforms.push("desktop"),!f&&c&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return k`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return k`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return k`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return k`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return k`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return k`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?k`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){var i;const t=(i=this.shadowRoot)==null?void 0:i.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};f0([j()],Dc.prototype,"platform",void 0);f0([j()],Dc.prototype,"platforms",void 0);Dc=f0([V("w3m-connecting-wc-view")],Dc);var D8=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Lh=class extends le{constructor(){var e;super(...arguments),this.wallet=(e=G.state.data)==null?void 0:e.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return k`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var e;return(e=this.wallet)!=null&&e.chrome_store?k`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var e;return(e=this.wallet)!=null&&e.app_store?k`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var e;return(e=this.wallet)!=null&&e.play_store?k`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var e;return(e=this.wallet)!=null&&e.homepage?k`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var e;(e=this.wallet)!=null&&e.chrome_store&&oe.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&oe.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&oe.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&oe.openHref(this.wallet.homepage,"_blank")}};Lh=D8([V("w3m-downloads-view")],Lh);var L8=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};const U8="https://walletconnect.com/explorer";let Uh=class extends le{render(){return k`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{oe.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:t}=Ce.state,{customWallets:i}=fe.state;return[...t,...i??[],...e].slice(0,4).map(r=>k`
        <wui-list-wallet
          name=${r.name??"Unknown"}
          tagVariant="main"
          imageSrc=${ye(He.getWalletImage(r))}
          @click=${()=>{oe.openHref(r.homepage??U8,"_blank")}}
        ></wui-list-wallet>
      `)}};Uh=L8([V("w3m-get-wallet-view")],Uh);const j8=Ee`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var g0=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let wa=class extends le{constructor(){var e;super(),this.network=(e=G.state.data)==null?void 0:e.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.getLabel(),t=this.getSubLabel();return k`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${ye(He.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:k`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){const e=dt.getConnectedConnector();return je.getEmailConnector()&&e==="EMAIL"?"":this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet"}getLabel(){var i;const e=dt.getConnectedConnector();return je.getEmailConnector()&&e==="EMAIL"?`Switching to ${((i=this.network)==null?void 0:i.name)??"Unknown"} network...`:this.error?"Switch declined":"Approve in wallet"}onShowRetry(){var e;if(this.error&&!this.showRetry){this.showRetry=!0;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-button");t==null||t.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&(await he.switchActiveNetwork(this.network),fe.state.isSiweEnabled||Md.navigateAfterNetworkSwitch())}catch{this.error=!0}}};wa.styles=j8;g0([j()],wa.prototype,"showRetry",void 0);g0([j()],wa.prototype,"error",void 0);wa=g0([V("w3m-network-switch-view")],wa);const W8=Ee`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var x1=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Lc=class extends le{constructor(){super(),this.unsubscribe=[],this.caipNetwork=he.state.caipNetwork,this.unsubscribe.push(he.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return k`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){me.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),G.push("WhatIsANetwork")}networksTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:t,supportsAllNetworks:i}=he.state,o=oe.sortRequestedNetworks(e,t);return o==null?void 0:o.map(r=>{var s;return k`
        <wui-card-select
          .selected=${((s=this.caipNetwork)==null?void 0:s.id)===r.id}
          imageSrc=${ye(He.getNetworkImage(r))}
          type="network"
          name=${r.name??r.id}
          @click=${()=>this.onSwitchNetwork(r)}
          .disabled=${!i&&!(e!=null&&e.includes(r.id))}
          data-testid=${`w3m-network-switch-${r.name??r.id}`}
        ></wui-card-select>
      `})}async onSwitchNetwork(e){const{isConnected:t}=ie.state,{approvedCaipNetworkIds:i,supportsAllNetworks:o,caipNetwork:r}=he.state,{data:s}=G.state;t&&(r==null?void 0:r.id)!==e.id?i!=null&&i.includes(e.id)?(await he.switchActiveNetwork(e),Md.navigateAfterNetworkSwitch()):o&&G.push("SwitchNetwork",{...s,network:e}):t||(he.setCaipNetwork(e),G.push("Connect"))}};Lc.styles=W8;x1([j()],Lc.prototype,"caipNetwork",void 0);Lc=x1([V("w3m-networks-view")],Lc);const F8=Ee`
  :host > wui-flex {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  :host > wui-flex > wui-flex {
    width: 100%;
  }

  wui-transaction-list-item-loader {
    width: 100%;
  }
`;var Ba=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};const z8=7;let Vr=class extends le{constructor(){super(),this.unsubscribe=[],this.refetchTimeout=void 0,this.selectedOnRampProvider=Fe.state.selectedProvider,this.loading=!1,this.coinbaseTransactions=kt.state.coinbaseTransactions,this.tokenImages=mt.state.tokenImages,this.unsubscribe.push(Fe.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e}),mt.subscribeKey("tokenImages",e=>this.tokenImages=e),()=>{clearTimeout(this.refetchTimeout)},kt.subscribe(e=>{this.coinbaseTransactions={...e.coinbaseTransactions}})),kt.clearCursor(),this.fetchTransactions()}render(){return k`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.loading?this.templateLoading():this.templateTransactionsByYear()}
      </wui-flex>
    `}templateTransactions(e){return e==null?void 0:e.map(t=>{var a,c,l;const i=Nd.formatDate((a=t==null?void 0:t.metadata)==null?void 0:a.minedAt),o=t.transfers[0],r=o==null?void 0:o.fungible_info;if(!r)return null;const s=((c=r==null?void 0:r.icon)==null?void 0:c.url)||((l=this.tokenImages)==null?void 0:l[r.symbol||""]);return k`
        <wui-onramp-activity-item
          label="Bought"
          .completed=${t.metadata.status==="ONRAMP_TRANSACTION_STATUS_SUCCESS"}
          .inProgress=${t.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"}
          .failed=${t.metadata.status==="ONRAMP_TRANSACTION_STATUS_FAILED"}
          purchaseCurrency=${ye(r.symbol)}
          purchaseValue=${o.quantity.numeric}
          date=${i}
          icon=${ye(s)}
          symbol=${ye(r.symbol)}
        ></wui-onramp-activity-item>
      `})}templateTransactionsByYear(){return Object.keys(this.coinbaseTransactions).sort().reverse().map(t=>{const i=parseInt(t,10);return new Array(12).fill(null).map((r,s)=>s).reverse().map(r=>{var c;const s=Mi.getTransactionGroupTitle(i,r),a=(c=this.coinbaseTransactions[i])==null?void 0:c[r];return a?k`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${s}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(a)}
            </wui-flex>
          </wui-flex>
        `:null})})}async fetchTransactions(){await this.fetchCoinbaseTransactions()}async fetchCoinbaseTransactions(){const e=ie.state.address,t=fe.state.projectId;if(!e)throw new Error("No address found");if(!t)throw new Error("No projectId found");this.loading=!0,await kt.fetchTransactions(e,"coinbase"),this.loading=!1,this.refetchLoadingTransactions()}refetchLoadingTransactions(){var o;const e=new Date;if((((o=this.coinbaseTransactions[e.getFullYear()])==null?void 0:o[e.getMonth()])||[]).filter(r=>r.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS").length===0){clearTimeout(this.refetchTimeout);return}this.refetchTimeout=setTimeout(async()=>{const r=ie.state.address;await kt.fetchTransactions(r,"coinbase"),this.refetchLoadingTransactions()},3e3)}templateLoading(){return Array(z8).fill(k` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e)}};Vr.styles=F8;Ba([j()],Vr.prototype,"selectedOnRampProvider",void 0);Ba([j()],Vr.prototype,"loading",void 0);Ba([j()],Vr.prototype,"coinbaseTransactions",void 0);Ba([j()],Vr.prototype,"tokenImages",void 0);Vr=Ba([V("w3m-onramp-activity-view")],Vr);const H8=Ee`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var Rl=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Zo=class extends le{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=Fe.state.paymentCurrency,this.currencies=Fe.state.paymentCurrencies,this.currencyImages=mt.state.currencyImages,this.unsubscribe.push(Fe.subscribe(e=>{this.selectedCurrency=e.paymentCurrency,this.currencies=e.paymentCurrencies}),mt.subscribeKey("currencyImages",e=>this.currencyImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return k`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(){return this.currencies.map(e=>{var t;return k`
        <wui-list-item
          imageSrc=${ye((t=this.currencyImages)==null?void 0:t[e.id])}
          @click=${()=>this.selectCurrency(e)}
          variant="image"
        >
          <wui-text variant="paragraph-500" color="fg-100">${e.id}</wui-text>
        </wui-list-item>
      `})}selectCurrency(e){e&&(Fe.setPaymentCurrency(e),Ie.close())}};Zo.styles=H8;Rl([j()],Zo.prototype,"selectedCurrency",void 0);Rl([j()],Zo.prototype,"currencies",void 0);Rl([j()],Zo.prototype,"currencyImages",void 0);Zo=Rl([V("w3m-onramp-fiat-select-view")],Zo);var C1=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Xu=class extends le{constructor(){super(),this.unsubscribe=[],this.providers=Fe.state.providers,this.unsubscribe.push(Fe.subscribeKey("providers",e=>{this.providers=e}))}firstUpdated(){const e=this.providers.map(async t=>t.name==="coinbase"?await this.getCoinbaseOnRampURL():Promise.resolve(t==null?void 0:t.url));Promise.all(e).then(t=>{this.providers=this.providers.map((i,o)=>({...i,url:t[o]||""}))})}render(){return k`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
      <w3m-onramp-providers-footer></w3m-onramp-providers-footer>
    `}onRampProvidersTemplate(){return this.providers.map(e=>k`
        <wui-onramp-provider-item
          label=${e.label}
          name=${e.name}
          feeRange=${e.feeRange}
          @click=${()=>{this.onClickProvider(e)}}
          ?disabled=${!e.url}
        ></wui-onramp-provider-item>
      `)}onClickProvider(e){Fe.setSelectedProvider(e),G.push("BuyInProgress"),oe.openHref(e.url,"popupWindow","width=600,height=800,scrollbars=yes")}async getCoinbaseOnRampURL(){const e=ie.state.address,t=he.state.caipNetwork;if(!e)throw new Error("No address found");if(!(t!=null&&t.name))throw new Error("No network found");const i=ut.WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP[t.name]??ut.WC_COINBASE_PAY_SDK_FALLBACK_CHAIN,o=Fe.state.purchaseCurrency,r=o?[o.symbol]:Fe.state.purchaseCurrencies.map(s=>s.symbol);return await Bt.generateOnRampURL({defaultNetwork:i,destinationWallets:[{address:e,blockchains:ut.WC_COINBASE_PAY_SDK_CHAINS,assets:r}],partnerUserId:e,purchaseAmount:Fe.state.purchaseAmount})}};C1([j()],Xu.prototype,"providers",void 0);Xu=C1([V("w3m-onramp-providers-view")],Xu);const V8=Ee`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var Il=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Go=class extends le{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=Fe.state.purchaseCurrencies,this.tokens=Fe.state.purchaseCurrencies,this.tokenImages=mt.state.tokenImages,this.unsubscribe.push(Fe.subscribe(e=>{this.selectedCurrency=e.purchaseCurrencies,this.tokens=e.purchaseCurrencies}),mt.subscribeKey("tokenImages",e=>this.tokenImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return k`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(){return this.tokens.map(e=>{var t;return k`
        <wui-list-item
          imageSrc=${ye((t=this.tokenImages)==null?void 0:t[e.symbol])}
          @click=${()=>this.selectToken(e)}
          variant="image"
        >
          <wui-flex gap="3xs" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-100">${e.name}</wui-text>
            <wui-text variant="small-400" color="fg-200">${e.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `})}selectToken(e){e&&(Fe.setPurchaseCurrency(e),Ie.close())}};Go.styles=V8;Il([j()],Go.prototype,"selectedCurrency",void 0);Il([j()],Go.prototype,"tokens",void 0);Il([j()],Go.prototype,"tokenImages",void 0);Go=Il([V("w3m-onramp-token-select-view")],Go);const Z8=Ee`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .action-button {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }

  .action-button:disabled {
    border-color: 1px solid var(--wui-gray-glass-005);
  }

  .convert-inputs-container {
    position: relative;
  }

  .replace-tokens-button {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: var(--wui-spacing-1xs);
    height: 40px;
    width: 40px;
    padding: var(--wui-spacing-xs);
    border: none;
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-gray-glass-005);
    transition: background-color var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: background-color;
    z-index: 20;
  }

  .replace-tokens-button:hover {
    background: var(--wui-gray-glass-010);
  }

  .details-container > wui-flex {
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-gray-glass-002);
  }

  .free-badge {
    background: rgba(38, 217, 98, 0.15);
    border-radius: var(--wui-border-radius-4xs);
    padding: 4.5px 6px;
  }
`;var vt=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let ht=class extends le{constructor(){var e;super(),this.unsubscribe=[],this.detailsOpen=!1,this.caipNetworkId=(e=he.state.caipNetwork)==null?void 0:e.id,this.initialized=pe.state.initialized,this.loading=pe.state.loading,this.loadingPrices=pe.state.loadingPrices,this.sourceToken=pe.state.sourceToken,this.sourceTokenAmount=pe.state.sourceTokenAmount,this.sourceTokenPriceInUSD=pe.state.sourceTokenPriceInUSD,this.toToken=pe.state.toToken,this.toTokenAmount=pe.state.toTokenAmount,this.toTokenPriceInUSD=pe.state.toTokenPriceInUSD,this.inputError=pe.state.inputError,this.gasPriceInUSD=pe.state.gasPriceInUSD,this.priceImpact=pe.state.priceImpact,this.maxSlippage=pe.state.maxSlippage,this.transactionLoading=pe.state.transactionLoading,this.onDebouncedGetSwapCalldata=oe.debounce(async()=>{await pe.convertTokens()},500),he.subscribeKey("caipNetwork",t=>{this.caipNetworkId!==(t==null?void 0:t.id)&&(this.caipNetworkId=t==null?void 0:t.id,pe.resetTokens(),pe.resetValues(),pe.initializeState())}),this.unsubscribe.push(Ie.subscribeKey("open",t=>{t||pe.resetValues()}),G.subscribeKey("view",t=>{t.includes("Convert")||pe.resetValues()}),pe.subscribe(t=>{this.initialized=t.initialized,this.loading=t.loading,this.loadingPrices=t.loadingPrices,this.transactionLoading=t.transactionLoading,this.sourceToken=t.sourceToken,this.sourceTokenAmount=t.sourceTokenAmount,this.sourceTokenPriceInUSD=t.sourceTokenPriceInUSD,this.toToken=t.toToken,this.toTokenAmount=t.toTokenAmount,this.toTokenPriceInUSD=t.toTokenPriceInUSD,this.inputError=t.inputError,this.gasPriceInUSD=t.gasPriceInUSD,this.priceImpact=t.priceImpact,this.maxSlippage=t.maxSlippage})),this.watchTokensAndValues()}firstUpdated(){this.initialized||pe.initializeState()}disconnectedCallback(){pe.setLoading(!1),this.unsubscribe.forEach(e=>e==null?void 0:e()),clearInterval(this.interval)}render(){return k`
      <wui-flex flexDirection="column" padding="l" gap="s">
        ${this.initialized?this.templateSwap():this.templateLoading()}
      </wui-flex>
    `}watchTokensAndValues(){this.interval=setInterval(()=>{pe.getNetworkTokenPrice(),pe.getMyTokensWithBalance(),pe.refreshConvertValues()},2e4)}templateSwap(){return k`
      <wui-flex flexDirection="column" gap="l">
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="xs"
          class="convert-inputs-container"
        >
          ${this.templateTokenInput("sourceToken",this.sourceToken)}
          ${this.templateTokenInput("toToken",this.toToken)} ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateDetails()} ${this.templateActionButton()}
      </wui-flex>
    `}actionButtonLabel(){return this.inputError?this.inputError:"Review convert"}templateReplaceTokensButton(){return k`
      <button class="replace-tokens-button" @click=${this.onSwitchTokens.bind(this)}>
        <wui-icon name="recycleHorizontal" color="fg-250" size="lg"></wui-icon>
      </button>
    `}templateLoading(){return k`<wui-flex
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["3xl","xl","3xl","xl"]}
      gap="xl"
    >
      <wui-icon-box
        backgroundColor="glass-005"
        background="gray"
        iconColor="fg-200"
        icon="swapHorizontalRoundedBold"
        size="lg"
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>

      <wui-loading-hexagon></wui-loading-hexagon>
    </wui-flex>`}templateTokenInput(e,t){var a,c;const i=(a=pe.state.myTokensWithBalance)==null?void 0:a.find(l=>(l==null?void 0:l.address)===(t==null?void 0:t.address)),o=e==="toToken"?this.toTokenAmount:this.sourceTokenAmount,r=e==="toToken"?this.toTokenPriceInUSD:this.sourceTokenPriceInUSD;let s=parseFloat(o)*r;return e==="toToken"&&(s-=this.gasPriceInUSD||0),k`<w3m-convert-input
      .value=${e==="toToken"?this.toTokenAmount:this.sourceTokenAmount}
      ?disabled=${this.loading&&e==="toToken"}
      .onSetAmount=${this.handleChangeAmount.bind(this)}
      target=${e}
      .token=${t}
      .balance=${(c=i==null?void 0:i.quantity)==null?void 0:c.numeric}
      .price=${this.sourceTokenPriceInUSD}
      .marketValue=${isNaN(s)?"":ve.formatNumberToLocalString(s)}
      .onSetMaxValue=${this.onSetMaxValue.bind(this)}
    ></w3m-convert-input>`}onSetMaxValue(e,t){const i=e==="sourceToken"?this.sourceToken:this.toToken,o=(i==null?void 0:i.address)===ut.NATIVE_TOKEN_ADDRESS;let r="0";if(!t){r="0",this.handleChangeAmount(e,r);return}if(!this.gasPriceInUSD){r=t,this.handleChangeAmount(e,r);return}const s=Et.bigNumber(this.gasPriceInUSD.toFixed(5)).dividedBy(this.sourceTokenPriceInUSD),a=o?Et.bigNumber(t).minus(s):Et.bigNumber(t);this.handleChangeAmount(e,a.isGreaterThan(0)?a.toFixed(20):"0")}templateDetails(){var t,i;if(this.loading||this.inputError||!this.sourceToken||!this.toToken||!this.sourceTokenAmount||!this.toTokenAmount)return null;const e=this.sourceTokenPriceInUSD&&this.toTokenPriceInUSD?1/this.toTokenPriceInUSD*this.sourceTokenPriceInUSD:0;return k`
      <w3m-convert-details
        .detailsOpen=${this.detailsOpen}
        sourceTokenSymbol=${(t=this.sourceToken)==null?void 0:t.symbol}
        sourceTokenPrice=${this.sourceTokenPriceInUSD}
        toTokenSymbol=${(i=this.toToken)==null?void 0:i.symbol}
        toTokenConvertedAmount=${e}
        gasPriceInUSD=${this.gasPriceInUSD}
        .priceImpact=${this.priceImpact}
        slippageRate=${ut.CONVERT_SLIPPAGE_TOLERANCE}
        .maxSlippage=${this.maxSlippage}
      ></w3m-convert-details>
    `}handleChangeAmount(e,t){pe.clearError(),e==="sourceToken"?pe.setSourceTokenAmount(t):pe.setToTokenAmount(t),this.onDebouncedGetSwapCalldata()}templateActionButton(){const e=!this.toToken||!this.sourceToken,t=this.loading||this.loadingPrices||this.transactionLoading;return k` <wui-flex gap="xs">
      <wui-button
        class="action-button"
        ?fullWidth=${!0}
        size="lg"
        borderRadius="xs"
        variant=${e?"shade":"fill"}
        .loading=${t}
        .disabled=${t||e||this.inputError}
        @click=${this.onConvertPreview}
      >
        ${this.actionButtonLabel()}
      </wui-button>
    </wui-flex>`}onSwitchTokens(){pe.switchTokens()}onConvertPreview(){G.push("ConvertPreview")}};ht.styles=Z8;vt([j()],ht.prototype,"interval",void 0);vt([j()],ht.prototype,"detailsOpen",void 0);vt([j()],ht.prototype,"caipNetworkId",void 0);vt([j()],ht.prototype,"initialized",void 0);vt([j()],ht.prototype,"loading",void 0);vt([j()],ht.prototype,"loadingPrices",void 0);vt([j()],ht.prototype,"sourceToken",void 0);vt([j()],ht.prototype,"sourceTokenAmount",void 0);vt([j()],ht.prototype,"sourceTokenPriceInUSD",void 0);vt([j()],ht.prototype,"toToken",void 0);vt([j()],ht.prototype,"toTokenAmount",void 0);vt([j()],ht.prototype,"toTokenPriceInUSD",void 0);vt([j()],ht.prototype,"inputError",void 0);vt([j()],ht.prototype,"gasPriceInUSD",void 0);vt([j()],ht.prototype,"priceImpact",void 0);vt([j()],ht.prototype,"maxSlippage",void 0);vt([j()],ht.prototype,"transactionLoading",void 0);ht=vt([V("w3m-convert-view")],ht);const G8=Ee`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .preview-container,
  .details-container {
    width: 100%;
  }

  .token-image {
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
    border-radius: 12px;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .token-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    height: 40px;
    border: none;
    border-radius: 80px;
    background: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    cursor: pointer;
    transition: background 0.2s linear;
  }

  .token-item:hover {
    background: var(--wui-gray-glass-005);
  }

  .preview-token-details-container {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-gray-glass-002);
  }

  .action-buttons-container {
    width: 100%;
    gap: var(--wui-spacing-xs);
  }

  .action-buttons-container > button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    height: 48px;
    border-radius: var(--wui-border-radius-xs);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }

  .action-buttons-container > button:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  .cancel-button:hover,
  .convert-button:hover {
    cursor: pointer;
  }

  .action-buttons-container > button.cancel-button {
    flex: 2;
  }

  .action-buttons-container > button.convert-button {
    flex: 4;
    background-color: var(--wui-color-accent-090);
  }

  .action-buttons-container > button.convert-button > wui-text {
    color: white;
  }

  .details-container > wui-flex {
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-gray-glass-002);
  }

  .free-badge {
    background: rgba(38, 217, 98, 0.15);
    border-radius: var(--wui-border-radius-4xs);
    padding: 4.5px 6px;
  }
`;var Pt=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let bt=class extends le{constructor(){super(),this.unsubscribe=[],this.detailsOpen=!0,this.approvalTransaction=pe.state.approvalTransaction,this.convertTransaction=pe.state.convertTransaction,this.sourceToken=pe.state.sourceToken,this.sourceTokenAmount=pe.state.sourceTokenAmount??"",this.sourceTokenPriceInUSD=pe.state.sourceTokenPriceInUSD,this.toToken=pe.state.toToken,this.toTokenAmount=pe.state.toTokenAmount??"",this.toTokenPriceInUSD=pe.state.toTokenPriceInUSD,this.caipNetwork=he.state.caipNetwork,this.transactionLoading=pe.state.transactionLoading,this.balanceSymbol=ie.state.balanceSymbol,this.gasPriceInUSD=pe.state.gasPriceInUSD,this.priceImpact=pe.state.priceImpact,this.maxSlippage=pe.state.maxSlippage,this.unsubscribe.push(ie.subscribeKey("balanceSymbol",e=>{this.balanceSymbol!==e&&G.goBack()}),he.subscribeKey("caipNetwork",e=>{this.caipNetwork!==e&&(this.caipNetwork=e)}),pe.subscribe(e=>{this.approvalTransaction=e.approvalTransaction,this.convertTransaction=e.convertTransaction,this.sourceToken=e.sourceToken,this.gasPriceInUSD=e.gasPriceInUSD,this.toToken=e.toToken,this.transactionLoading=e.transactionLoading,this.gasPriceInUSD=e.gasPriceInUSD,this.toTokenPriceInUSD=e.toTokenPriceInUSD,this.sourceTokenAmount=e.sourceTokenAmount??"",this.toTokenAmount=e.toTokenAmount??"",this.priceImpact=e.priceImpact,this.maxSlippage=e.maxSlippage}))}render(){return k`
      <wui-flex flexDirection="column" padding="l" gap="s">${this.templateSwap()}</wui-flex>
    `}templateSwap(){var a,c,l,d;const e=`${ve.formatNumberToLocalString(parseFloat(this.sourceTokenAmount))} ${(a=this.sourceToken)==null?void 0:a.symbol}`,t=`${ve.formatNumberToLocalString(parseFloat(this.toTokenAmount))} ${(c=this.toToken)==null?void 0:c.symbol}`,i=parseFloat(this.sourceTokenAmount)*this.sourceTokenPriceInUSD,o=parseFloat(this.toTokenAmount)*this.toTokenPriceInUSD-(this.gasPriceInUSD||0),r=ve.formatNumberToLocalString(i),s=ve.formatNumberToLocalString(o);return k`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        <wui-flex class="preview-container" flexDirection="column" alignItems="flex-start" gap="l">
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Send</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${r}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${e}
              imageSrc=${(l=this.sourceToken)==null?void 0:l.logoUri}
            >
            </wui-token-button>
          </wui-flex>
          <wui-icon name="recycleHorizontal" color="fg-200" size="md"></wui-icon>
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Receive</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${s}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${t}
              imageSrc=${(d=this.toToken)==null?void 0:d.logoUri}
            >
            </wui-token-button>
          </wui-flex>
        </wui-flex>

        ${this.templateDetails()}

        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="xs">
          <wui-icon size="sm" color="fg-200" name="infoCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>

        <wui-flex
          class="action-buttons-container"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="xs"
        >
          <button
            class="cancel-button"
            ?disabled=${this.transactionLoading}
            @click=${this.onCancelTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="fg-200">Cancel</wui-text>
          </button>
          <button
            class="convert-button"
            ?disabled=${this.transactionLoading}
            @click=${this.onSendTransaction.bind(this)}
          >
            ${this.transactionLoading?k`<wui-loading-spinner color="inverse-100"></wui-loading-spinner>`:k`<wui-text variant="paragraph-600" color="inverse-100">
                  ${this.actionButtonLabel()}
                </wui-text>`}
          </button>
        </wui-flex>
      </wui-flex>
    `}templateDetails(){var t,i;const e=this.sourceTokenPriceInUSD&&this.toTokenPriceInUSD?1/this.toTokenPriceInUSD*this.sourceTokenPriceInUSD:0;return k`
      <w3m-convert-details
        detailsOpen=${this.detailsOpen}
        sourceTokenSymbol=${(t=this.sourceToken)==null?void 0:t.symbol}
        sourceTokenPrice=${this.sourceTokenPriceInUSD}
        toTokenSymbol=${(i=this.toToken)==null?void 0:i.symbol}
        toTokenConvertedAmount=${e}
        gasPriceInUSD=${ve.formatNumberToLocalString(this.gasPriceInUSD,3)}
        .priceImpact=${this.priceImpact}
        slippageRate=${ut.CONVERT_SLIPPAGE_TOLERANCE}
        .maxSlippage=${this.maxSlippage}
      ></w3m-convert-details>
    `}actionButtonLabel(){return this.approvalTransaction?"Approve":"Convert"}onCancelTransaction(){G.goBack()}onSendTransaction(){this.approvalTransaction?pe.sendTransactionForApproval(this.approvalTransaction):pe.sendTransactionForConvert(this.convertTransaction)}};bt.styles=G8;Pt([j()],bt.prototype,"detailsOpen",void 0);Pt([j()],bt.prototype,"approvalTransaction",void 0);Pt([j()],bt.prototype,"convertTransaction",void 0);Pt([j()],bt.prototype,"sourceToken",void 0);Pt([j()],bt.prototype,"sourceTokenAmount",void 0);Pt([j()],bt.prototype,"sourceTokenPriceInUSD",void 0);Pt([j()],bt.prototype,"toToken",void 0);Pt([j()],bt.prototype,"toTokenAmount",void 0);Pt([j()],bt.prototype,"toTokenPriceInUSD",void 0);Pt([j()],bt.prototype,"caipNetwork",void 0);Pt([j()],bt.prototype,"transactionLoading",void 0);Pt([j()],bt.prototype,"balanceSymbol",void 0);Pt([j()],bt.prototype,"gasPriceInUSD",void 0);Pt([j()],bt.prototype,"priceImpact",void 0);Pt([j()],bt.prototype,"maxSlippage",void 0);bt=Pt([V("w3m-convert-preview-view")],bt);const q8=Ee`
  :host {
    --tokens-scroll--top-opacity: 0;
    --tokens-scroll--bottom-opacity: 1;
    --suggested-tokens-scroll--left-opacity: 0;
    --suggested-tokens-scroll--right-opacity: 1;
  }

  :host > wui-flex:first-child {
    overflow-y: hidden;
    overflow-x: hidden;
    scrollbar-width: none;
    scrollbar-height: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .search-input-container,
  .suggested-tokens-container {
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-s);
  }

  .tokens-container .tokens {
    padding: 0px var(--wui-spacing-s);
    padding-bottom: var(--wui-spacing-s);
  }

  .search-input-container {
    padding-top: var(--wui-spacing-s);
  }

  .suggested-tokens-container {
    overflow-x: auto;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--suggested-tokens-scroll--right-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--right-opacity))) 100%
    );
  }

  .suggested-tokens-container::-webkit-scrollbar {
    display: none;
  }

  .tokens-container {
    border-top: 1px solid var(--wui-gray-glass-005);
    height: 100%;
    max-height: 390px;
  }

  .tokens {
    width: 100%;
    overflow-y: auto;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--tokens-scroll--top-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--tokens-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--bottom-opacity))) 100%
    );
  }

  .network-search-input,
  .select-network-button {
    height: 40px;
  }

  .select-network-button {
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xs);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background-color: transparent;
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-xs);
    align-items: center;
    transition: background-color 0.2s linear;
  }

  .select-network-button:hover {
    background-color: var(--wui-gray-glass-002);
  }

  .select-network-button > wui-image {
    width: 26px;
    height: 26px;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }
`;var rs=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Qi=class extends le{constructor(){var e;super(),this.unsubscribe=[],this.targetToken=(e=G.state.data)==null?void 0:e.target,this.sourceToken=pe.state.sourceToken,this.toToken=pe.state.toToken,this.searchValue="",this.unsubscribe.push(pe.subscribe(t=>{this.sourceToken=t.sourceToken,this.toToken=t.toToken})),this.watchTokens()}updated(){var i,o;const e=(i=this.renderRoot)==null?void 0:i.querySelector(".suggested-tokens-container");e==null||e.addEventListener("scroll",this.handleSuggestedTokensScroll.bind(this));const t=(o=this.renderRoot)==null?void 0:o.querySelector(".tokens");t==null||t.addEventListener("scroll",this.handleTokenListScroll.bind(this))}disconnectedCallback(){var i,o;super.disconnectedCallback();const e=(i=this.renderRoot)==null?void 0:i.querySelector(".suggested-tokens-container"),t=(o=this.renderRoot)==null?void 0:o.querySelector(".tokens");e==null||e.removeEventListener("scroll",this.handleSuggestedTokensScroll.bind(this)),t==null||t.removeEventListener("scroll",this.handleTokenListScroll.bind(this)),clearInterval(this.interval)}render(){return k`
      <wui-flex flexDirection="column" gap="s">
        ${this.templateSearchInput()} ${this.templateSuggestedTokens()} ${this.templateTokens()}
      </wui-flex>
    `}watchTokens(){this.interval=setInterval(()=>{pe.getNetworkTokenPrice(),pe.getMyTokensWithBalance()},5e3)}onSelectToken(e){this.targetToken==="sourceToken"?pe.setSourceToken(e):pe.setToToken(e),G.goBack()}templateSearchInput(){return k`
      <wui-flex class="search-input-container" gap="xs">
        <wui-input-text
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
          .value=${this.searchValue}
          @inputChange=${this.onSearchInputChange.bind(this)}
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){const e=pe.state.myTokensWithBalance?Object.values(pe.state.myTokensWithBalance):[],t=pe.state.popularTokens?pe.state.popularTokens:[],i=this.filterTokensWithText(e,this.searchValue),o=this.filterTokensWithText(t,this.searchValue);return k`
      <wui-flex class="tokens-container">
        <wui-flex class="tokens" flexDirection="column">
          ${(i==null?void 0:i.length)>0?k`
                <wui-flex justifyContent="flex-start" padding="s">
                  <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
                </wui-flex>
                ${i.map(r=>{var a,c,l;const s=r.symbol===((a=this.sourceToken)==null?void 0:a.symbol)||r.symbol===((c=this.toToken)==null?void 0:c.symbol);return k`
                    <wui-token-list-item
                      name=${r.name}
                      ?disabled=${s}
                      symbol=${r.symbol}
                      price=${r==null?void 0:r.price}
                      amount=${(l=r==null?void 0:r.quantity)==null?void 0:l.numeric}
                      imageSrc=${r.logoUri}
                      @click=${()=>{s||this.onSelectToken(r)}}
                    >
                    </wui-token-list-item>
                  `})}
              `:null}

          <wui-flex justifyContent="flex-start" padding="s">
            <wui-text variant="paragraph-500" color="fg-200">Popular tokens</wui-text>
          </wui-flex>

          ${(o==null?void 0:o.length)>0?o.map(r=>k`
                  <wui-token-list-item
                    name=${r.name}
                    symbol=${r.symbol}
                    imageSrc=${r.logoUri}
                    @click=${()=>this.onSelectToken(r)}
                  >
                  </wui-token-list-item>
                `):null}
        </wui-flex>
      </wui-flex>
    `}templateSuggestedTokens(){const e=pe.state.suggestedTokens?pe.state.suggestedTokens.slice(0,8):null;return e?k`
      <wui-flex class="suggested-tokens-container" gap="xs">
        ${e.map(t=>k`
            <wui-token-button
              text=${t.symbol}
              imageSrc=${t.logoUri}
              @click=${()=>this.onSelectToken(t)}
            >
            </wui-token-button>
          `)}
      </wui-flex>
    `:null}onSearchInputChange(e){this.searchValue=e.detail}handleSuggestedTokensScroll(){var t;const e=(t=this.renderRoot)==null?void 0:t.querySelector(".suggested-tokens-container");e&&(e.style.setProperty("--suggested-tokens-scroll--left-opacity",fs.interpolate([0,100],[0,1],e.scrollLeft).toString()),e.style.setProperty("--suggested-tokens-scroll--right-opacity",fs.interpolate([0,100],[0,1],e.scrollWidth-e.scrollLeft-e.offsetWidth).toString()))}handleTokenListScroll(){var t;const e=(t=this.renderRoot)==null?void 0:t.querySelector(".tokens");e&&(e.style.setProperty("--tokens-scroll--top-opacity",fs.interpolate([0,100],[0,1],e.scrollTop).toString()),e.style.setProperty("--tokens-scroll--bottom-opacity",fs.interpolate([0,100],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString()))}filterTokensWithText(e,t){return e.filter(i=>`${i.symbol} ${i.name} ${i.address}`.toLowerCase().includes(t.toLowerCase()))}};Qi.styles=q8;rs([j()],Qi.prototype,"interval",void 0);rs([j()],Qi.prototype,"targetToken",void 0);rs([j()],Qi.prototype,"sourceToken",void 0);rs([j()],Qi.prototype,"toToken",void 0);rs([j()],Qi.prototype,"searchValue",void 0);Qi=rs([V("w3m-convert-select-token-view")],Qi);const Y8=Ee`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var K8=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Qu=class extends le{render(){return k`
      <wui-flex flexDirection="column" gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};Qu.styles=Y8;Qu=K8([V("w3m-transactions-view")],Qu);var J8=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};const X8=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let jh=class extends le{render(){return k`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${X8}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{oe.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};jh=J8([V("w3m-what-is-a-network-view")],jh);var Q8=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};const e9=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let Wh=class extends le{render(){return k`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${e9}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){me.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),G.push("GetWallet")}};Wh=Q8([V("w3m-what-is-a-wallet-view")],Wh);var t9=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Fh=class extends le{render(){return k`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","3xl","xl","3xl"]}
        alignItems="center"
        gap="xl"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="xs" alignItems="center">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Quickly and easily buy digital assets!
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Simply select your preferred onramp provider and add digital assets to your account
            using your credit card or bank transfer
          </wui-text>
        </wui-flex>
        <wui-button @click=${G.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `}};Fh=t9([V("w3m-what-is-a-buy-view")],Fh);const n9=Ee`
  wui-loading-spinner {
    margin: 9px auto;
  }
`;var Pl=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};const i9=6;let vi=class extends le{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){var e;super(),this.loading=!1,this.timeoutTimeLeft=wt.getTimeToNextEmailLogin(),this.error="",this.otp="",this.email=(e=G.state.data)==null?void 0:e.email,this.emailConnector=je.getEmailConnector()}render(){if(!this.email)throw new Error("w3m-email-otp-widget: No email provided");const e=!!this.timeoutTimeLeft,t=this.getFooterLabels(e);return k`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">Enter the code we sent to</wui-text>
          <wui-text variant="paragraph-500" color="fg-100">${this.email}</wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading?k`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:k` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?k`
                    <wui-text variant="small-400" align="center" color="error-100">
                      ${this.error}. Try Again
                    </wui-text>
                  `:null}
            </wui-flex>`}

        <wui-flex alignItems="center">
          <wui-text variant="small-400" color="fg-200">${t.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${e}>
            ${t.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=wt.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=wt.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}async onOtpInputChange(e){var t;try{this.loading||(this.otp=e.detail,this.emailConnector&&this.otp.length===i9&&(this.loading=!0,await((t=this.onOtpSubmit)==null?void 0:t.call(this,this.otp))))}catch(i){this.error=oe.parseError(i),this.loading=!1}}async onResendCode(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){if(this.error="",this.otp="",!je.getEmailConnector()||!this.email)throw new Error("w3m-email-otp-widget: Unable to resend email");this.loading=!0,await this.onOtpResend(this.email),this.startOTPTimeout(),De.showSuccess("Code email resent")}}else this.onStartOver&&this.onStartOver()}catch(e){De.showError(e)}finally{this.loading=!1}}getFooterLabels(e){return this.onStartOver?{title:"Something wrong?",action:`Try again ${e?`in ${this.timeoutTimeLeft}s`:""}`}:{title:"Didn't receive it?",action:`Resend ${e?`in ${this.timeoutTimeLeft}s`:"Code"}`}}};vi.styles=n9;Pl([j()],vi.prototype,"loading",void 0);Pl([j()],vi.prototype,"timeoutTimeLeft",void 0);Pl([j()],vi.prototype,"error",void 0);vi=Pl([V("w3m-email-otp-widget")],vi);var _1=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let ed=class extends vi{constructor(){super(),this.unsubscribe=[],this.smartAccountDeployed=ie.state.smartAccountDeployed,this.onOtpSubmit=async e=>{try{if(this.emailConnector){const t=he.checkIfSmartAccountEnabled();await this.emailConnector.provider.connectOtp({otp:e}),me.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),await $e.connectExternal(this.emailConnector),me.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email",name:this.emailConnector.name||"Unknown"}}),t&&!this.smartAccountDeployed?G.push("UpgradeToSmartAccount"):Ie.close()}}catch(t){throw me.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),t}},this.onOtpResend=async e=>{this.emailConnector&&(await this.emailConnector.provider.connectEmail({email:e}),me.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))},this.unsubscribe.push(ie.subscribeKey("smartAccountDeployed",e=>{this.smartAccountDeployed=e}))}};_1([j()],ed.prototype,"smartAccountDeployed",void 0);ed=_1([V("w3m-email-verify-otp-view")],ed);const r9=Ee`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var E1=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Uc=class extends le{constructor(){var e;super(),this.email=(e=G.state.data)==null?void 0:e.email,this.emailConnector=je.getEmailConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw new Error("w3m-email-verify-device-view: No email provided");if(!this.emailConnector)throw new Error("w3m-email-verify-device-view: No email connector provided");return k`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){if(this.emailConnector)try{await this.emailConnector.provider.connectDevice(),me.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),me.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),G.replace("EmailVerifyOtp",{email:this.email})}catch{G.goBack()}}async onResendCode(){try{if(!this.loading){if(!this.emailConnector||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.emailConnector.provider.connectEmail({email:this.email}),this.listenForDeviceApproval(),De.showSuccess("Code email resent")}}catch(e){De.showError(e)}finally{this.loading=!1}}};Uc.styles=r9;E1([j()],Uc.prototype,"loading",void 0);Uc=E1([V("w3m-email-verify-device-view")],Uc);const o9=Ee`
  div {
    width: 100%;
    height: 400px;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var T1=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};const zh=400,Hh=360,s9=64;let jc=class extends le{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(Ie.subscribeKey("open",e=>{e||(this.onHideIframe(),G.popTransactionStack())}))}disconnectedCallback(){var e;this.onHideIframe(),this.unsubscribe.forEach(t=>t()),(e=this.bodyObserver)==null||e.unobserve(window.document.body)}async firstUpdated(){await this.syncTheme(),this.iframe.style.display="block",this.bodyObserver=new ResizeObserver(()=>{this.iframe.style.width=`${Hh}px`,this.iframe.style.height=`${zh}px`,this.iframe.style.left=`calc(50% - ${Hh/2}px)`,this.iframe.style.top=`calc(50% - ${zh/2}px + ${s9/2}px)`,this.ready=!0}),this.bodyObserver.observe(window.document.body)}render(){return this.ready&&this.onShowIframe(),k`<div data-ready=${this.ready}></div>`}onShowIframe(){const e=window.innerWidth<=430;this.iframe.animate([{opacity:0,transform:e?"translateY(50px)":"scale(.95)"},{opacity:1,transform:e?"translateY(0)":"scale(1)"}],{duration:200,easing:"ease",fill:"forwards"})}async onHideIframe(){this.iframe.style.display="none",await this.iframe.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished}async syncTheme(){const e=je.getEmailConnector();e&&await e.provider.syncTheme({themeVariables:pt.getSnapshot().themeVariables})}};jc.styles=o9;T1([j()],jc.prototype,"ready",void 0);jc=T1([V("w3m-approve-transaction-view")],jc);var a9=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Vh=class extends le{render(){return k`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${ut.SECURE_SITE_DASHBOARD}
          imageSrc=${ut.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};Vh=a9([V("w3m-upgrade-wallet-view")],Vh);var w0=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Wc=class extends le{constructor(){super(...arguments),this.emailConnector=je.getEmailConnector(),this.loading=!1,this.setPreferSmartAccount=async()=>{if(this.emailConnector)try{this.loading=!0,await this.emailConnector.provider.setPreferredAccount(Dt.ACCOUNT_TYPES.SMART_ACCOUNT),await this.emailConnector.provider.connect(),this.loading=!1,G.push("Account")}catch{De.showError("Error upgrading to smart account")}}}render(){return k`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link>
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return k` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-visual name="google"></wui-visual>
        <wui-visual name="pencil"></wui-visual>
        <wui-visual name="lightbulb"></wui-visual>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Discover Smart Accounts
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Access advanced features such as username, social login, improved security and a smoother
          user experience!
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return k`<wui-flex .padding=${["0","2l","0","2l"]} gap="s">
      <wui-button
        variant="accentBg"
        @click=${this.redirectToAccount.bind(this)}
        size="lg"
        borderRadius="xs"
      >
        Do it later
      </wui-button>
      <wui-button
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.setPreferSmartAccount.bind(this)}
        >Continue
      </wui-button>
    </wui-flex>`}redirectToAccount(){G.push("Account")}};w0([j()],Wc.prototype,"emailConnector",void 0);w0([j()],Wc.prototype,"loading",void 0);Wc=w0([V("w3m-upgrade-to-smart-account-view")],Wc);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const c9=n=>n.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l9={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},u9=n=>(...e)=>({_$litDirective$:n,values:e});class d9{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Es=(n,e)=>{var i;const t=n._$AN;if(t===void 0)return!1;for(const o of t)(i=o._$AO)==null||i.call(o,e,!1),Es(o,e);return!0},Fc=n=>{let e,t;do{if((e=n._$AM)===void 0)break;t=e._$AN,t.delete(n),n=e}while((t==null?void 0:t.size)===0)},A1=n=>{for(let e;e=n._$AM;n=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(n))break;t.add(n),f9(e)}};function h9(n){this._$AN!==void 0?(Fc(this),this._$AM=n,A1(this)):this._$AM=n}function p9(n,e=!1,t=0){const i=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(i))for(let r=t;r<i.length;r++)Es(i[r],!1),Fc(i[r]);else i!=null&&(Es(i,!1),Fc(i));else Es(this,n)}const f9=n=>{n.type==l9.CHILD&&(n._$AP??(n._$AP=p9),n._$AQ??(n._$AQ=h9))};class g9 extends d9{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),A1(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,o;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(o=this.disconnected)==null||o.call(this)),t&&(Es(this,e),Fc(this))}setValue(e){if(c9(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zc=()=>new w9;class w9{}const mu=new WeakMap,Hc=u9(class extends g9{render(n){return ct}update(n,[e]){var i;const t=e!==this.Y;return t&&this.Y!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.Y=e,this.ht=(i=n.options)==null?void 0:i.host,this.rt(this.ct=n.element)),ct}rt(n){if(typeof this.Y=="function"){const e=this.ht??globalThis;let t=mu.get(e);t===void 0&&(t=new WeakMap,mu.set(e,t)),t.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),t.set(this.Y,n),n!==void 0&&this.Y.call(this.ht,n)}else this.Y.value=n}get lt(){var n,e;return typeof this.Y=="function"?(n=mu.get(this.ht??globalThis))==null?void 0:n.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),m9=Ee`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var m0=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let ma=class extends le{constructor(){var e;super(...arguments),this.formRef=zc(),this.initialEmail=((e=G.state.data)==null?void 0:e.email)??"",this.email="",this.loading=!1}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener("keydown",t=>{t.key==="Enter"&&this.onSubmitEmail(t)})}render(){const e=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return k`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${Hc(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>

        <wui-flex gap="s">
          <wui-button size="md" variant="shade" fullWidth @click=${G.goBack}>
            Cancel
          </wui-button>

          <wui-button
            size="md"
            variant="fill"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!e}
            .loading=${this.loading}
          >
            Save
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const t=je.getEmailConnector();if(!t)throw new Error("w3m-update-email-wallet: Email connector not found");const i=await t.provider.updateEmail({email:this.email});me.sendEvent({type:"track",event:"EMAIL_EDIT"}),i.action==="VERIFY_SECONDARY_OTP"?G.push("UpdateEmailSecondaryOtp",{email:this.initialEmail,newEmail:this.email}):G.push("UpdateEmailPrimaryOtp",{email:this.initialEmail,newEmail:this.email})}catch(t){De.showError(t),this.loading=!1}}};ma.styles=m9;m0([j()],ma.prototype,"email",void 0);m0([j()],ma.prototype,"loading",void 0);ma=m0([V("w3m-update-email-wallet-view")],ma);var b9=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Zh=class extends vi{constructor(){var e;super(),this.email=(e=G.state.data)==null?void 0:e.email,this.onOtpSubmit=async t=>{try{this.emailConnector&&(await this.emailConnector.provider.updateEmailPrimaryOtp({otp:t}),me.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),G.replace("UpdateEmailSecondaryOtp",G.state.data))}catch(i){throw me.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),i}},this.onStartOver=()=>{G.replace("UpdateEmailWallet",G.state.data)}}};Zh=b9([V("w3m-update-email-primary-otp-view")],Zh);var v9=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Gh=class extends vi{constructor(){var e;super(),this.email=(e=G.state.data)==null?void 0:e.newEmail,this.onOtpSubmit=async t=>{try{this.emailConnector&&(await this.emailConnector.provider.updateEmailSecondaryOtp({otp:t}),me.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),G.reset("Account"))}catch(i){throw me.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),i}},this.onStartOver=()=>{G.replace("UpdateEmailWallet",G.state.data)}}};Gh=v9([V("w3m-update-email-secondary-otp-view")],Gh);const y9=Ee`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var k1=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Vc=class extends le{constructor(){super(...arguments),this.disconecting=!1}render(){return k`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["m","xl","xs","xl"]}
          alignItems="center"
          gap="xl"
        >
          <wui-text variant="small-400" color="fg-200" align="center">
            This app doesn’t support your current network. Switch to an available option following
            to continue.
          </wui-text>
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:t}=he.state;return oe.sortRequestedNetworks(e,t).map(o=>k`
        <wui-list-network
          imageSrc=${ye(He.getNetworkImage(o))}
          name=${o.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(o)}
        >
        </wui-list-network>
      `)}async onDisconnect(){try{this.disconecting=!0,await $e.disconnect(),me.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),Ie.close()}catch{me.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),De.showError("Failed to disconnect")}finally{this.disconecting=!1}}async onSwitchNetwork(e){const{isConnected:t}=ie.state,{approvedCaipNetworkIds:i,supportsAllNetworks:o,caipNetwork:r}=he.state,{data:s}=G.state;t&&(r==null?void 0:r.id)!==e.id?i!=null&&i.includes(e.id)?(await he.switchActiveNetwork(e),Md.navigateAfterNetworkSwitch()):o&&G.push("SwitchNetwork",{...s,network:e}):t||(he.setCaipNetwork(e),G.push("Connect"))}};Vc.styles=y9;k1([j()],Vc.prototype,"disconecting",void 0);Vc=k1([V("w3m-unsupported-chain-view")],Vc);const x9=Ee`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`;var Da=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Zr=class extends le{constructor(){super(),this.unsubscribe=[],this.address=ie.state.address,this.profileName=ie.state.profileName,this.network=he.state.caipNetwork,this.preferredAccountType=ie.state.preferredAccountType,this.unsubscribe.push(ie.subscribe(e=>{e.address?(this.address=e.address,this.profileName=e.profileName,this.preferredAccountType=e.preferredAccountType):De.showError("Account not found")}),he.subscribeKey("caipNetwork",e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.address)throw new Error("w3m-wallet-receive-view: No account provided");const e=He.getNetworkImage(this.network);return k` <wui-flex
      flexDirection="column"
      .padding=${["xl","l","l","l"]}
      alignItems="center"
    >
      <wui-chip-button
        @click=${this.onCopyClick.bind(this)}
        text=${ve.getTruncateString({string:this.address??"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        imageSrc=${e||""}
        variant="shadeSmall"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["l","0","0","0"]}
        alignItems="center"
        gap="s"
      >
        <wui-qr-code
          size=${232}
          theme=${pt.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="paragraph-500" color="fg-100" align="center">
          Copy your address or scan this QR code
        </wui-text>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){var s;const e=he.getRequestedCaipNetworks(),t=he.checkIfSmartAccountEnabled(),i=he.state.caipNetwork;if(this.preferredAccountType===Dt.ACCOUNT_TYPES.SMART_ACCOUNT&&t)return i?k`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[He.getNetworkImage(i)??""]}
      ></wui-compatible-network>`:null;const r=((s=e==null?void 0:e.filter(a=>a==null?void 0:a.imageId))==null?void 0:s.slice(0,5)).map(He.getNetworkImage).filter(Boolean);return k`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${r}
    ></wui-compatible-network>`}onReceiveClick(){G.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(oe.copyToClopboard(this.address),De.showSuccess("Address copied"))}catch{De.showError("Failed to copy")}}};Zr.styles=x9;Da([j()],Zr.prototype,"address",void 0);Da([j()],Zr.prototype,"profileName",void 0);Da([j()],Zr.prototype,"network",void 0);Da([j()],Zr.prototype,"preferredAccountType",void 0);Zr=Da([V("w3m-wallet-receive-view")],Zr);const C9=Ee`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var S1=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Zc=class extends le{constructor(){super(),this.unsubscribe=[],this.preferredAccountType=ie.state.preferredAccountType,this.unsubscribe.push(ie.subscribeKey("preferredAccountType",e=>{this.preferredAccountType=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return k` <wui-flex
      flexDirection="column"
      .padding=${["xs","s","m","s"]}
      gap="xs"
    >
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:t,caipNetwork:i}=he.state,o=he.checkIfSmartAccountEnabled();let r=oe.sortRequestedNetworks(e,t);if(o&&this.preferredAccountType===Dt.ACCOUNT_TYPES.SMART_ACCOUNT){if(!i)return null;r=[i]}return r.map(s=>k`
        <wui-list-network
          imageSrc=${ye(He.getNetworkImage(s))}
          name=${s.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `)}};Zc.styles=C9;S1([j()],Zc.prototype,"preferredAccountType",void 0);Zc=S1([V("w3m-wallet-compatible-networks-view")],Zc);const _9=Ee`
  :host {
    display: block;
  }

  wui-flex {
    position: relative;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xs) !important;
    border: 5px solid var(--wui-color-bg-125);
    background: var(--wui-color-bg-175);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  wui-button {
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .inputContainer {
    height: fit-content;
  }
`;var La=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Gr=class extends le{constructor(){super(),this.unsubscribe=[],this.token=Mt.state.token,this.sendTokenAmount=Mt.state.sendTokenAmount,this.receiverAddress=Mt.state.receiverAddress,this.message="Preview Send",this.unsubscribe.push(Mt.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.getMessage(),k` <wui-flex flexDirection="column" .padding=${["s","l","l","l"]}>
      <wui-flex class="inputContainer" gap="xs" flexDirection="column">
        <w3m-input-token
          .token=${this.token}
          .sendTokenAmount=${this.sendTokenAmount}
        ></w3m-input-token>
        <wui-icon-box
          size="inherit"
          backgroundColor="fg-300"
          iconSize="lg"
          iconColor="fg-250"
          background="opaque"
          icon="arrowBottom"
        ></wui-icon-box>
        <w3m-input-address .receiverAddress=${this.receiverAddress}></w3m-input-address>
      </wui-flex>
      <wui-flex .margin=${["l","0","0","0"]}>
        <wui-button
          @click=${this.onButtonClick.bind(this)}
          ?disabled=${!this.message.startsWith("Preview Send")}
          size="lg"
          variant="fill"
          fullWidth
        >
          ${this.message}
        </wui-button>
      </wui-flex>
    </wui-flex>`}onButtonClick(){G.push("WalletSendPreview")}getMessage(){this.message="Preview Send",this.receiverAddress&&!oe.isAddress(this.receiverAddress)&&(this.message="Invalid Address"),this.receiverAddress||(this.message="Add Address"),this.sendTokenAmount&&this.token&&this.sendTokenAmount>Number(this.token.quantity.numeric)&&(this.message="Insufficient Funds"),this.sendTokenAmount||(this.message="Add Amount"),this.token||(this.message="Select Token")}};Gr.styles=_9;La([j()],Gr.prototype,"token",void 0);La([j()],Gr.prototype,"sendTokenAmount",void 0);La([j()],Gr.prototype,"receiverAddress",void 0);La([j()],Gr.prototype,"message",void 0);Gr=La([V("w3m-wallet-send-view")],Gr);const E9=Ee`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }
`;var Ol=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let qo=class extends le{constructor(){super(),this.unsubscribe=[],this.tokenBalance=ie.state.tokenBalance,this.search="",this.onDebouncedSearch=oe.debounce(e=>{this.search=e}),this.unsubscribe.push(ie.subscribe(e=>{this.tokenBalance=e.tokenBalance}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return k`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}templateSearchInput(){return k`
      <wui-flex gap="xs" padding="s">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){var e;return this.search?this.tokens=(e=this.tokenBalance)==null?void 0:e.filter(t=>t.name.toLowerCase().includes(this.search.toLowerCase())):this.tokens=this.tokenBalance,k`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0","s","0","s"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["m","s","s","s"]}>
          <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="xs">
          ${this.tokens&&this.tokens.length>0?this.tokens.map(t=>k`<wui-list-token
                    @click=${this.handleTokenClick.bind(this,t)}
                    ?clickable=${!0}
                    tokenName=${t.name}
                    tokenImageUrl=${t.iconUrl}
                    tokenAmount=${t.quantity.numeric}
                    tokenValue=${t.value}
                    tokenCurrency=${t.symbol}
                  ></wui-list-token>`):k`<wui-flex
                .padding=${["4xl","0","0","0"]}
                alignItems="center"
                flexDirection="column"
                gap="l"
              >
                <wui-icon-box
                  icon="coinPlaceholder"
                  size="inherit"
                  iconColor="fg-200"
                  backgroundColor="fg-200"
                  iconSize="lg"
                ></wui-icon-box>
                <wui-flex
                  class="textContent"
                  gap="xs"
                  flexDirection="column"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <wui-text variant="paragraph-500" align="center" color="fg-100"
                    >No tokens found</wui-text
                  >
                  <wui-text variant="small-400" align="center" color="fg-200"
                    >Your tokens will appear here</wui-text
                  >
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `}onBuyClick(){G.push("OnRampProviders")}onInputChange(e){this.onDebouncedSearch(e.detail)}handleTokenClick(e){Mt.setToken(e),Mt.setTokenAmount(void 0),G.goBack()}};qo.styles=E9;Ol([j()],qo.prototype,"tokenBalance",void 0);Ol([j()],qo.prototype,"tokens",void 0);Ol([j()],qo.prototype,"search",void 0);qo=Ol([V("w3m-wallet-send-select-token-view")],qo);const T9=Ee`
  wui-avatar,
  wui-image {
    display: ruby;
    width: 32px;
    height: 32px;
    border-radius: var(--wui-border-radius-3xl);
  }

  .sendButton {
    width: 70%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .cancelButton {
    width: 30%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }
`;var Ua=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let qr=class extends le{constructor(){super(),this.unsubscribe=[],this.token=Mt.state.token,this.sendTokenAmount=Mt.state.sendTokenAmount,this.receiverAddress=Mt.state.receiverAddress,this.caipNetwork=he.state.caipNetwork,this.unsubscribe.push(Mt.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress}),he.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var e,t,i;return k` <wui-flex flexDirection="column" .padding=${["s","l","l","l"]}>
      <wui-flex gap="xs" flexDirection="column" .padding=${["0","xs","0","xs"]}>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-flex flexDirection="column" gap="4xs">
            <wui-text variant="small-400" color="fg-150">Send</wui-text>
            ${this.sendValueTemplate()}
          </wui-flex>
          <wui-preview-item
            text="${Number((e=this.token)==null?void 0:e.quantity.numeric).toFixed(2)} ${(t=this.token)==null?void 0:t.symbol}"
            .imageSrc=${(i=this.token)==null?void 0:i.iconUrl}
          ></wui-preview-item>
        </wui-flex>
        <wui-flex>
          <wui-icon color="fg-200" size="md" name="arrowBottom"></wui-icon>
        </wui-flex>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="small-400" color="fg-150">To</wui-text>
          <wui-preview-item
            text=${ve.getTruncateString({string:this.receiverAddress??"",charsStart:4,charsEnd:4,truncate:"middle"})}
            address=${this.receiverAddress??""}
            .isAddress=${!0}
          ></wui-preview-item>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" .padding=${["xxl","0","0","0"]}>
        <w3m-wallet-send-details
          .caipNetwork=${this.caipNetwork}
          .receiverAddress=${this.receiverAddress}
        ></w3m-wallet-send-details>
        <wui-flex justifyContent="center" gap="xxs" .padding=${["s","0","0","0"]}>
          <wui-icon size="sm" color="fg-200" name="warningCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>
        <wui-flex justifyContent="center" gap="s" .padding=${["l","0","0","0"]}>
          <wui-button
            class="cancelButton"
            @click=${this.onCancelClick.bind(this)}
            size="lg"
            variant="shade"
          >
            Cancel
          </wui-button>
          <wui-button
            class="sendButton"
            @click=${this.onSendClick.bind(this)}
            size="lg"
            variant="fill"
          >
            Send
          </wui-button>
        </wui-flex>
      </wui-flex></wui-flex
    >`}sendValueTemplate(){if(this.token&&this.sendTokenAmount){const t=this.token.price*this.sendTokenAmount;return k`<wui-text variant="paragraph-400" color="fg-100"
        >$${t.toFixed(2)}</wui-text
      >`}return null}onSendClick(){G.reset("Account"),setTimeout(()=>{Mt.resetSend()},200)}onCancelClick(){G.goBack()}};qr.styles=T9;Ua([j()],qr.prototype,"token",void 0);Ua([j()],qr.prototype,"sendTokenAmount",void 0);Ua([j()],qr.prototype,"receiverAddress",void 0);Ua([j()],qr.prototype,"caipNetwork",void 0);qr=Ua([V("w3m-wallet-send-preview-view")],qr);const A9=Ee`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;function $1(n){const{connectors:e}=je.state,t=e.filter(r=>r.type==="ANNOUNCED").reduce((r,s)=>{var a;return(a=s.info)!=null&&a.rdns&&(r[s.info.rdns]=!0),r},{});return n.map(r=>({...r,installed:!!r.rdns&&!!t[r.rdns??""]})).sort((r,s)=>Number(s.installed)-Number(r.installed))}var ja=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};const qh="local-paginator";let Yr=class extends le{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!Ce.state.wallets.length,this.wallets=Ce.state.wallets,this.recommended=Ce.state.recommended,this.featured=Ce.state.featured,this.unsubscribe.push(Ce.subscribeKey("wallets",e=>this.wallets=e),Ce.subscribeKey("recommended",e=>this.recommended=e),Ce.subscribeKey("featured",e=>this.featured=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var e;this.unsubscribe.forEach(t=>t()),(e=this.paginationObserver)==null||e.disconnect()}render(){return k`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-grid");this.initial&&e&&(await Ce.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map(()=>k`
        <wui-card-select-loader type="wallet" id=${ye(t)}></wui-card-select-loader>
      `)}walletsTemplate(){const e=[...this.featured,...this.recommended,...this.wallets];return $1(e).map(i=>k`
        <wui-card-select
          imageSrc=${ye(He.getWalletImage(i))}
          type="wallet"
          name=${i.name}
          @click=${()=>this.onConnectWallet(i)}
          .installed=${i.installed}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){const{wallets:e,recommended:t,featured:i,count:o}=Ce.state,r=window.innerWidth<352?3:4,s=e.length+t.length;let c=Math.ceil(s/r)*r-s+r;return c-=e.length?i.length%r:0,o===0&&i.length>0?null:o===0||[...i,...e,...t].length<o?this.shimmerTemplate(c,qh):null}createPaginationObserver(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector(`#${qh}`);e&&(this.paginationObserver=new IntersectionObserver(([i])=>{if(i!=null&&i.isIntersecting&&!this.initial){const{page:o,count:r,wallets:s}=Ce.state;s.length<r&&Ce.fetchWallets({page:o+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){const t=je.getConnector(e.id,e.rdns);t?G.push("ConnectingExternal",{connector:t}):G.push("ConnectingWalletConnect",{wallet:e})}};Yr.styles=A9;ja([j()],Yr.prototype,"initial",void 0);ja([j()],Yr.prototype,"wallets",void 0);ja([j()],Yr.prototype,"recommended",void 0);ja([j()],Yr.prototype,"featured",void 0);Yr=ja([V("w3m-all-wallets-list")],Yr);const k9=Ee`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;var b0=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let ba=class extends le{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?k`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await Ce.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){const{search:e}=Ce.state,t=$1(e);return e.length?k`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${t.map(i=>k`
            <wui-card-select
              imageSrc=${ye(He.getWalletImage(i))}
              type="wallet"
              name=${i.name}
              @click=${()=>this.onConnectWallet(i)}
              .installed=${i.installed}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:k`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){const t=je.getConnector(e.id,e.rdns);t?G.push("ConnectingExternal",{connector:t}):G.push("ConnectingWalletConnect",{wallet:e})}};ba.styles=k9;b0([j()],ba.prototype,"loading",void 0);b0([we()],ba.prototype,"query",void 0);ba=b0([V("w3m-all-wallets-search")],ba);var Nl=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let va=class extends le{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push($e.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.generateTabs();return k`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map(t=>t==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:t==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:t==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:t==="web"?{label:"Webapp",icon:"browser",platform:"web"}:t==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:t})=>t),e}onTabChange(e){var i;const t=this.platformTabs[e];t&&((i=this.onSelectPlatfrom)==null||i.call(this,t))}};Nl([we({type:Array})],va.prototype,"platforms",void 0);Nl([we()],va.prototype,"onSelectPlatfrom",void 0);Nl([j()],va.prototype,"buffering",void 0);va=Nl([V("w3m-connecting-header")],va);var S9=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Yh=class extends Yt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),me.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){var e;try{this.error=!1;const{connectors:t}=je.state,i=t.find(r=>{var s,a;return r.type==="ANNOUNCED"&&((s=r.info)==null?void 0:s.rdns)===((a=this.wallet)==null?void 0:a.rdns)}),o=t.find(r=>r.type==="INJECTED");i?await $e.connectExternal(i):o&&await $e.connectExternal(o),Ie.close(),me.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:((e=this.wallet)==null?void 0:e.name)||"Unknown"}})}catch(t){me.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(t==null?void 0:t.message)??"Unknown"}}),this.error=!0}}};Yh=S9([V("w3m-connecting-wc-browser")],Yh);var $9=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Kh=class extends Yt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),me.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{var e;(e=this.onConnect)==null||e.call(this)},200))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:t,name:i}=this.wallet,{redirect:o,href:r}=oe.formatNativeUrl(t,this.uri);$e.setWcLinking({name:i,href:r}),$e.setRecentWallet(this.wallet),oe.openHref(o,"_blank")}catch{this.error=!0}}};Kh=$9([V("w3m-connecting-wc-desktop")],Kh);var R9=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Jh=class extends Yt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),me.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){var e;!this.ready&&this.uri&&(this.ready=!0,(e=this.onConnect)==null||e.call(this))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:t,name:i}=this.wallet,{redirect:o,href:r}=oe.formatNativeUrl(t,this.uri);$e.setWcLinking({name:i,href:r}),$e.setRecentWallet(this.wallet),oe.openHref(o,"_self")}catch{this.error=!0}}onBuffering(){const e=oe.isIos();(document==null?void 0:document.visibilityState)==="visible"&&!this.error&&e&&($e.setBuffering(!0),setTimeout(()=>{$e.setBuffering(!1)},5e3))}};Jh=R9([V("w3m-connecting-wc-mobile")],Jh);const I9=Ee`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var P9=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let td=class extends Yt{constructor(){var e;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),me.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((e=this.wallet)==null?void 0:e.name)??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),k`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return $e.setWcLinking(void 0),$e.setRecentWallet(this.wallet),k` <wui-qr-code
      size=${e}
      theme=${pt.state.themeMode}
      uri=${this.uri}
      imageSrc=${ye(He.getWalletImage(this.wallet))}
      alt=${ye(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return k`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};td.styles=I9;td=P9([V("w3m-connecting-wc-qrcode")],td);var O9=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Xh=class extends le{constructor(){var e;if(super(),this.wallet=(e=G.state.data)==null?void 0:e.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");me.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return k`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${ye(He.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};Xh=O9([V("w3m-connecting-wc-unsupported")],Xh);var N9=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Qh=class extends Yt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",me.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:t,name:i}=this.wallet,{redirect:o,href:r}=oe.formatUniversalUrl(t,this.uri);$e.setWcLinking({name:i,href:r}),$e.setRecentWallet(this.wallet),oe.openHref(o,"_blank")}catch{this.error=!0}}};Qh=N9([V("w3m-connecting-wc-web")],Qh);const M9=Ee`
  :host {
    width: 100%;
  }

  .details-container > wui-flex {
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    cursor: pointer;
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    padding-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-1xs);
    border-radius: calc(var(--wui-border-radius-5xs) + var(--wui-border-radius-4xs));
    background: var(--wui-gray-glass-002);
  }

  .details-row.provider-free-row {
    padding-right: var(--wui-spacing-xs);
  }

  .free-badge {
    background: rgba(38, 217, 98, 0.15);
    border-radius: var(--wui-border-radius-4xs);
    padding: 4.5px 6px;
  }
`;var ii=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let wn=class extends le{constructor(){super(...arguments),this.detailsOpen=!1,this.slippageRate=1}render(){return k`
      <wui-flex flexDirection="column" alignItems="center" gap="1xs" class="details-container">
        <wui-flex flexDirection="column">
          <button @click=${this.toggleDetails.bind(this)}>
            <wui-flex justifyContent="space-between" .padding=${["0","xs","0","xs"]}>
              <wui-flex justifyContent="flex-start" flexGrow="1" gap="xs">
                <wui-text variant="small-400" color="fg-100"
                  >1 ${this.sourceTokenSymbol} =
                  ${ve.formatNumberToLocalString(this.toTokenConvertedAmount,3)}
                  ${this.toTokenSymbol}</wui-text
                >
                <wui-text variant="small-400" color="fg-200">
                  $${ve.formatNumberToLocalString(this.sourceTokenPrice)}
                </wui-text>
              </wui-flex>
              <wui-icon name="chevronBottom"></wui-icon>
            </wui-flex>
          </button>
          ${this.detailsOpen?k`
                <wui-flex flexDirection="column" gap="xs" class="details-content-container">
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row"
                    >
                      <wui-text variant="small-400" color="fg-150">Network cost</wui-text>
                      <wui-text variant="small-400" color="fg-100">
                        $${ve.formatNumberToLocalString(this.gasPriceInUSD,3)}
                      </wui-text>
                    </wui-flex>
                  </wui-flex>
                  ${this.priceImpact?k` <wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-text variant="small-400" color="fg-150">Price impact</wui-text>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${ve.formatNumberToLocalString(this.priceImpact,3)}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  ${this.maxSlippage&&this.sourceTokenSymbol?k`<wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-text variant="small-400" color="fg-150">Max. slippage</wui-text>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${ve.formatNumberToLocalString(this.maxSlippage,6)}
                              ${this.sourceTokenSymbol} ${this.slippageRate}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row provider-free-row"
                    >
                      <wui-text variant="small-400" color="fg-150">Provider fee</wui-text>
                      <wui-flex alignItems="center" justifyContent="center" class="free-badge">
                        <wui-text variant="micro-700" color="success-100">Free</wui-text>
                      </wui-flex>
                    </wui-flex>
                  </wui-flex>
                </wui-flex>
              `:null}
        </wui-flex>
      </wui-flex>
    `}toggleDetails(){this.detailsOpen=!this.detailsOpen}};wn.styles=[M9];ii([we()],wn.prototype,"detailsOpen",void 0);ii([we()],wn.prototype,"sourceTokenSymbol",void 0);ii([we()],wn.prototype,"sourceTokenPrice",void 0);ii([we()],wn.prototype,"toTokenSymbol",void 0);ii([we()],wn.prototype,"toTokenConvertedAmount",void 0);ii([we()],wn.prototype,"gasPriceInUSD",void 0);ii([we()],wn.prototype,"priceImpact",void 0);ii([we()],wn.prototype,"slippageRate",void 0);ii([we()],wn.prototype,"maxSlippage",void 0);wn=ii([V("w3m-convert-details")],wn);const B9=Ee`
  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    position: relative;
  }

  :host > wui-flex > svg.input_mask {
    position: absolute;
    inset: 0;
    z-index: 5;
  }

  :host wui-flex .input_mask__border,
  :host wui-flex .input_mask__background {
    transition: fill var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: fill;
  }

  :host wui-flex .input_mask__border {
    fill: var(--wui-gray-glass-005);
  }

  :host wui-flex .input_mask__background {
    fill: var(--wui-gray-glass-002);
  }

  :host wui-flex.focus .input_mask__border {
    fill: var(--wui-gray-glass-020);
  }

  :host > wui-flex .swap-input,
  :host > wui-flex .swap-token-button {
    z-index: 10;
  }

  :host > wui-flex .swap-input {
    -webkit-mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  :host > wui-flex .swap-input input {
    background: none;
    border: none;
    height: 42px;
    width: 100%;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: -1.28px;
    outline: none;
    caret-color: var(--wui-color-accent-100);
    color: var(--wui-color-fg-100);
  }

  :host > wui-flex .swap-input input:focus-visible {
    outline: none;
  }

  :host > wui-flex .swap-input input::-webkit-outer-spin-button,
  :host > wui-flex .swap-input input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .token-select-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-1xs);
    height: 40px;
    border: none;
    border-radius: 80px;
    background: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    cursor: pointer;
    transition: background 0.2s linear;
  }

  .token-select-button:hover {
    background: var(--wui-gray-glass-005);
  }

  .token-select-button wui-image {
    width: 24px;
    height: 24px;
    border-radius: var(--wui-border-radius-s);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }

  .max-value-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--wui-gray-glass-020);
    padding-left: 0px;
  }

  .market-value {
    min-height: 18px;
  }
`;var Dn=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};const D9=5e-5;let rn=class extends le{constructor(){super(...arguments),this.focused=!1,this.price=0,this.marketValue="$1.0345,00",this.target="sourceToken",this.onSetAmount=null,this.onSetMaxValue=null}render(){const e=this.marketValue||"0",t=Et.bigNumber(e).isGreaterThan(0);return k`
      <wui-flex class="${this.focused?"focus":""}" justifyContent="space-between">
        ${this.target==="sourceToken"?Tf:Ef}
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
        >
          <input
            @focusin=${()=>this.onFocusChange(!0)}
            @focusout=${()=>this.onFocusChange(!1)}
            ?disabled=${this.disabled}
            .value=${this.value}
            @input=${this.dispatchInputChangeEvent}
            @keydown=${this.handleKeydown}
            placeholder="0"
          />
          <wui-text class="market-value" variant="small-400" color="fg-200">
            ${t?`$${this.marketValue}`:null}
          </wui-text>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}handleKeydown(e){const t=["Backspace","Meta","Ctrl","a","c","v","ArrowLeft","ArrowRight","Tab"],i=e.key===",",o=e.key===".",r=e.key>="0"&&e.key<="9",s=this.value;!r&&!t.includes(e.key)&&!o&&!i&&e.preventDefault(),(i||o)&&(s!=null&&s.includes(".")||s!=null&&s.includes(","))&&e.preventDefault()}dispatchInputChangeEvent(e){if(!this.onSetAmount)return;const t=e.target.value;t===","||t==="."?this.onSetAmount(this.target,"0."):t.endsWith(",")?this.onSetAmount(this.target,t.replace(",",".")):this.onSetAmount(this.target,t)}setMaxValueToInput(){var e;(e=this.onSetMaxValue)==null||e.call(this,this.target,this.balance)}templateTokenSelectButton(){if(!this.token)return k` <wui-button
        class="swap-token-button"
        size="md"
        variant="accentBg"
        @click=${this.onSelectToken.bind(this)}
      >
        Select token
      </wui-button>`;const e=this.token.logoUri?k`<wui-image src=${this.token.logoUri}></wui-image>`:k`
          <wui-icon-box
            size="sm"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="networkPlaceholder"
          ></wui-icon-box>
        `;return k`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <button
          size="sm"
          variant="shade"
          class="token-select-button"
          @click=${this.onSelectToken.bind(this)}
        >
          ${e}
          <wui-text variant="paragraph-600" color="fg-100">${this.token.symbol}</wui-text>
        </button>
        <wui-flex alignItems="center" gap="xxs"> ${this.tokenBalanceTemplate()} </wui-flex>
      </wui-flex>
    `}tokenBalanceTemplate(){const e=Et.multiply(this.balance,this.price),t=e?e==null?void 0:e.isGreaterThan(D9):!1;return k`
      ${t?k`<wui-text variant="small-400" color="fg-200">
            ${ve.formatNumberToLocalString(this.balance,3)}
          </wui-text>`:null}
      ${this.target==="sourceToken"?this.tokenActionButtonTemplate(t):null}
    `}tokenActionButtonTemplate(e){return e?k` <button class="max-value-button" @click=${this.setMaxValueToInput.bind(this)}>
        <wui-text color="accent-100" variant="small-600">Max</wui-text>
      </button>`:k` <button class="max-value-button" @click=${this.onBuyToken.bind(this)}>
      <wui-text color="accent-100" variant="small-600">Buy</wui-text>
    </button>`}onFocusChange(e){this.focused=e}onSelectToken(){me.sendEvent({type:"track",event:"CLICK_SELECT_TOKEN_TO_SWAP"}),G.push("ConvertSelectToken",{target:this.target})}onBuyToken(){G.push("OnRampProviders")}};rn.styles=[B9];Dn([we()],rn.prototype,"focused",void 0);Dn([we()],rn.prototype,"balance",void 0);Dn([we()],rn.prototype,"value",void 0);Dn([we()],rn.prototype,"price",void 0);Dn([we()],rn.prototype,"marketValue",void 0);Dn([we()],rn.prototype,"disabled",void 0);Dn([we()],rn.prototype,"target",void 0);Dn([we()],rn.prototype,"token",void 0);Dn([we()],rn.prototype,"onSetAmount",void 0);Dn([we()],rn.prototype,"onSetMaxValue",void 0);rn=Dn([V("w3m-convert-input")],rn);const L9=Ee`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;var Ml=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};function ep(){var s,a,c,l,d,p,f;const n=(a=(s=G.state.data)==null?void 0:s.connector)==null?void 0:a.name,e=(l=(c=G.state.data)==null?void 0:c.wallet)==null?void 0:l.name,t=(p=(d=G.state.data)==null?void 0:d.network)==null?void 0:p.name,i=e??n,o=je.getConnectors();return{Connect:`Connect ${o.length===1&&((f=o[0])==null?void 0:f.id)==="w3m-email"?"Email":""} Wallet`,Account:void 0,AccountSettings:void 0,ConnectingExternal:i??"Connect Wallet",ConnectingWalletConnect:i??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:t??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a wallet",Downloads:i?`Get ${i}`:"Downloads",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",ApproveTransaction:"Approve Transaction",Transactions:"Activity",UpgradeEmailWallet:"Upgrade your Wallet",UpgradeToSmartAccount:void 0,UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",UnsupportedChain:"Switch Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",WhatIsABuy:"What is Buy?",BuyInProgress:"Buy",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview convert",WalletSend:"Send",WalletSendPreview:"Review send",WalletSendSelectToken:"Select Token"}}let Yo=class extends le{constructor(){super(),this.unsubscribe=[],this.heading=ep()[G.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(G.subscribeKey("view",e=>{this.onViewChange(e),this.onHistoryChange()}),$e.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return k`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${this.onClose.bind(this)}
          data-testid="w3m-header-close"
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){me.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),G.push("WhatIsAWallet")}async onClose(){if(fe.state.isSiweEnabled){const{SIWEController:e}=await ui(()=>import("./BYF7TN1j.js"),__vite__mapDeps([3,1,2]),import.meta.url);e.state.status!=="success"&&await $e.disconnect()}Ie.close()}titleTemplate(){return k`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){const{view:e}=G.state,t=e==="Connect",r=e==="ApproveTransaction"||e==="UpgradeToSmartAccount";return this.showBack&&!r?k`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:k`<wui-icon-link
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?k`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(e){var i;const t=(i=this.shadowRoot)==null?void 0:i.querySelector("wui-text");if(t){const o=ep()[e];await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=o,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){var i;const{history:e}=G.state,t=(i=this.shadowRoot)==null?void 0:i.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){G.state.view==="ConnectingSiwe"?G.push("Connect"):G.goBack()}};Yo.styles=[L9];Ml([j()],Yo.prototype,"heading",void 0);Ml([j()],Yo.prototype,"buffering",void 0);Ml([j()],Yo.prototype,"showBack",void 0);Yo=Ml([V("w3m-header")],Yo);var R1=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let nd=class extends le{constructor(){super(...arguments),this.data=[]}render(){return k`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>k`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(t=>k`<wui-visual name=${t}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};R1([we({type:Array})],nd.prototype,"data",void 0);nd=R1([V("w3m-help-widget")],nd);const U9=Ee`
  :host {
    width: 100%;
  }

  wui-loading-spinner {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .currency-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: var(--wui-spacing-1xs);
    height: 40px;
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs) var(--wui-spacing-xs)
      var(--wui-spacing-xs);
    min-width: 95px;
    border-radius: var(--FULL, 1000px);
    border: 1px solid var(--wui-gray-glass-002);
    background: var(--wui-gray-glass-002);
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`;var oo=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let yi=class extends le{constructor(){var e;super(),this.unsubscribe=[],this.type="Token",this.value=0,this.currencies=[],this.selectedCurrency=(e=this.currencies)==null?void 0:e[0],this.currencyImages=mt.state.currencyImages,this.tokenImages=mt.state.tokenImages,this.unsubscribe.push(Fe.subscribeKey("purchaseCurrency",t=>{!t||this.type==="Fiat"||(this.selectedCurrency=this.formatPurchaseCurrency(t))}),Fe.subscribeKey("paymentCurrency",t=>{!t||this.type==="Token"||(this.selectedCurrency=this.formatPaymentCurrency(t))}),Fe.subscribe(t=>{this.type==="Fiat"?this.currencies=t.purchaseCurrencies.map(this.formatPurchaseCurrency):this.currencies=t.paymentCurrencies.map(this.formatPaymentCurrency)}),mt.subscribe(t=>{this.currencyImages={...t.currencyImages},this.tokenImages={...t.tokenImages}}))}firstUpdated(){Fe.getAvailableCurrencies()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var i;const e=((i=this.selectedCurrency)==null?void 0:i.symbol)||"",t=this.currencyImages[e]||this.tokenImages[e];return k`<wui-input-text type="number" size="lg" value=${this.value}>
      ${this.selectedCurrency?k` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="xxs"
            @click=${()=>Ie.open({view:`OnRamp${this.type}Select`})}
          >
            <wui-image src=${ye(t)}></wui-image>
            <wui-text color="fg-100">${this.selectedCurrency.symbol}</wui-text>
          </wui-flex>`:k`<wui-loading-spinner></wui-loading-spinner>`}
    </wui-input-text>`}formatPaymentCurrency(e){return{name:e.id,symbol:e.id}}formatPurchaseCurrency(e){return{name:e.name,symbol:e.symbol}}};yi.styles=U9;oo([we({type:String})],yi.prototype,"type",void 0);oo([we({type:Number})],yi.prototype,"value",void 0);oo([j()],yi.prototype,"currencies",void 0);oo([j()],yi.prototype,"selectedCurrency",void 0);oo([j()],yi.prototype,"currencyImages",void 0);oo([j()],yi.prototype,"tokenImages",void 0);yi=oo([V("w3m-swap-input")],yi);const j9=Ee`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;var W9=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let id=class extends le{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=fe.state;return!e&&!t?null:k`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-400" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=fe.state;return e&&t?"and":""}termsTemplate(){const{termsConditionsUrl:e}=fe.state;return e?k`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=fe.state;return e?k`<a href=${e}>Privacy Policy</a>`:null}};id.styles=[j9];id=W9([V("w3m-legal-footer")],id);const F9=Ee`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var I1=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Gc=class extends le{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:t,play_store:i,chrome_store:o,homepage:r}=this.wallet,s=oe.isMobile(),a=oe.isIos(),c=oe.isAndroid(),l=[t,i,r,o].filter(Boolean).length>1,d=ve.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return l&&!s?k`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${()=>G.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!l&&r?k`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&a?k`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:i&&c?k`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&oe.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&oe.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&oe.openHref(this.wallet.homepage,"_blank")}};Gc.styles=[F9];I1([we({type:Object})],Gc.prototype,"wallet",void 0);Gc=I1([V("w3m-mobile-download-links")],Gc);const z9=Ee`
  wui-flex {
    border-top: 1px solid var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
  }
`;var H9=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let rd=class extends le{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=fe.state;return!e&&!t?null:k`
      <wui-flex
        .padding=${["m","s","s","s"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="s"
      >
        <wui-text color="fg-250" variant="small-400" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `}howDoesItWorkTemplate(){return k` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){G.push("WhatIsABuy")}};rd.styles=[z9];rd=H9([V("w3m-onramp-providers-footer")],rd);const V9=Ee`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var P1=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};const Z9={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let qc=class extends le{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=De.state.open,this.unsubscribe.push(De.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:t}=De.state,i=Z9[t];return k`
      <wui-snackbar
        message=${e}
        backgroundColor=${i.backgroundColor}
        iconColor=${i.iconColor}
        icon=${i.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>De.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};qc.styles=V9;P1([j()],qc.prototype,"open",void 0);qc=P1([V("w3m-snackbar")],qc);const G9=Ee`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 21px;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }
`;var Wa=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Kr=class extends le{constructor(){super(),this.unsubscribe=[],this.formRef=zc(),this.connectors=je.state.connectors,this.email="",this.loading=!1,this.error="",this.unsubscribe.push(je.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener("keydown",t=>{t.key==="Enter"&&this.onSubmitEmail(t)})}render(){const e=this.connectors.length>1;return this.connectors.find(i=>i.type==="EMAIL")?k`
      <form ${Hc(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          .errorMessage=${this.error}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>

      ${e?k`<wui-separator text="or"></wui-separator>`:null}
    `:null}submitButtonTemplate(){return!this.loading&&this.email.length>3?k`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?k`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}onEmailInputChange(e){this.email=e.detail.trim(),this.error=""}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const t=je.getEmailConnector();if(!t)throw new Error("w3m-email-login-widget: Email connector not found");const{action:i}=await t.provider.connectEmail({email:this.email});me.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),i==="VERIFY_OTP"?(me.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),G.push("EmailVerifyOtp",{email:this.email})):i==="VERIFY_DEVICE"&&G.push("EmailVerifyDevice",{email:this.email})}catch(t){const i=oe.parseError(t);i!=null&&i.includes("Invalid email")?this.error="Invalid email. Try again.":De.showError(t)}finally{this.loading=!1}}onFocusEvent(){me.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};Kr.styles=G9;Wa([j()],Kr.prototype,"connectors",void 0);Wa([j()],Kr.prototype,"email",void 0);Wa([j()],Kr.prototype,"loading",void 0);Wa([j()],Kr.prototype,"error",void 0);Kr=Wa([V("w3m-email-login-widget")],Kr);const q9=Ee`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-s);
    height: 48px;
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-s);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    background-color: var(--wui-gray-glass-002);
    border-radius: 24px;
    transaction: background-color 0.2s linear;
  }

  .account-button:hover {
    background-color: var(--wui-gray-glass-005);
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }
`;var ar=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Qn=class extends le{constructor(){super(),this.unsubscribe=[],this.address=ie.state.address,this.profileImage=ie.state.profileImage,this.profileName=ie.state.profileName,this.network=he.state.caipNetwork,this.disconnecting=!1,this.balance=ie.state.balance,this.balanceSymbol=ie.state.balanceSymbol,this.unsubscribe.push(ie.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):this.disconnecting||De.showError("Account not found")}),he.subscribeKey("caipNetwork",e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var t;if(!this.address)throw new Error("w3m-account-view: No account provided");const e=He.getNetworkImage(this.network);return k`<wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${ye(this.address)}
          address=${ye(this.address)}
          imageSrc=${ye(this.profileImage===null?void 0:this.profileImage)}
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="medium-title-600" color="fg-100">
              ${this.profileName?ve.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):ve.getTruncateString({string:this.address?this.address:"",charsStart:4,charsEnd:4,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-text variant="paragraph-500" color="fg-200"
            >${oe.formatBalance(this.balance,this.balanceSymbol)}</wui-text
          >
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.emailCardTemplate()} ${this.emailBtnTemplate()}

        <wui-list-item
          .variant=${e?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${ye(e)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
          data-testid="w3m-account-select-network"
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${((t=this.network)==null?void 0:t.name)??"Unknown"}
          </wui-text>
        </wui-list-item>
        ${this.onrampTemplate()}
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalMedium"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}onrampTemplate(){const{enableOnramp:e}=fe.state;return e?k`
      <wui-list-item
        iconVariant="blue"
        icon="card"
        ?chevron=${!0}
        @click=${this.handleClickPay.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Buy crypto</wui-text>
      </wui-list-item>
    `:null}emailCardTemplate(){const e=dt.getConnectedConnector(),t=je.getEmailConnector(),{origin:i}=location;return!t||e!=="EMAIL"||i.includes(ut.SECURE_SITE)?null:k`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleClickPay(){G.push("OnRampProviders")}explorerBtnTemplate(){const{addressExplorerUrl:e}=ie.state;return e?k`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}emailBtnTemplate(){const e=dt.getConnectedConnector(),t=je.getEmailConnector();if(!t||e!=="EMAIL")return null;const i=t.provider.getEmail()??"";return k`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="mail"
        iconSize="sm"
        data-testid="w3m-account-email-update"
        ?chevron=${!0}
        @click=${()=>this.onGoToUpdateEmail(i)}
      >
        <wui-text variant="paragraph-500" color="fg-100">${i}</wui-text>
      </wui-list-item>
    `}isAllowedNetworkSwitch(){const{requestedCaipNetworks:e}=he.state,t=e?e.length>1:!1,i=e==null?void 0:e.find(({id:o})=>{var r;return o===((r=this.network)==null?void 0:r.id)});return t||!i}onCopyAddress(){try{this.address&&(oe.copyToClopboard(this.address),De.showSuccess("Address copied"))}catch{De.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&(me.sendEvent({type:"track",event:"CLICK_NETWORKS"}),G.push("Networks"))}onTransactions(){me.sendEvent({type:"track",event:"CLICK_TRANSACTIONS"}),G.push("Transactions")}async onDisconnect(){try{this.disconnecting=!0,await $e.disconnect(),me.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),Ie.close()}catch{me.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),De.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){const{addressExplorerUrl:e}=ie.state;e&&oe.openHref(e,"_blank")}onGoToUpgradeView(){me.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),G.push("UpgradeEmailWallet")}onGoToUpdateEmail(e){G.push("UpdateEmailWallet",{email:e})}};Qn.styles=q9;ar([j()],Qn.prototype,"address",void 0);ar([j()],Qn.prototype,"profileImage",void 0);ar([j()],Qn.prototype,"profileName",void 0);ar([j()],Qn.prototype,"network",void 0);ar([j()],Qn.prototype,"disconnecting",void 0);ar([j()],Qn.prototype,"balance",void 0);ar([j()],Qn.prototype,"balanceSymbol",void 0);Qn=ar([V("w3m-account-default-widget")],Qn);const Y9=Ee`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * var(--wui-spacing-2l));
  }

  wui-promo + wui-profile-button {
    margin-top: var(--wui-spacing-2l);
  }

  wui-tooltip-select {
    width: 100%;
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`,K9={ACCOUNT_TABS:[{label:"Tokens"},{label:"NFTs"},{label:"Activity"}]};var ri=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let mn=class extends le{constructor(){super(),this.unsubscribe=[],this.address=ie.state.address,this.profileImage=ie.state.profileImage,this.profileName=ie.state.profileName,this.smartAccountDeployed=ie.state.smartAccountDeployed,this.network=he.state.caipNetwork,this.currentTab=ie.state.currentTab,this.tokenBalance=ie.state.tokenBalance,this.preferredAccountType=ie.state.preferredAccountType,this.unsubscribe.push(ie.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.currentTab=e.currentTab,this.tokenBalance=e.tokenBalance,this.smartAccountDeployed=e.smartAccountDeployed,this.preferredAccountType=e.preferredAccountType):Ie.close()}),he.subscribe(e=>{this.network=e.caipNetwork})),this.watchConvertValues()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearInterval(this.watchTokenBalance)}firstUpdated(){ie.fetchTokenBalance()}render(){if(!this.address)throw new Error("w3m-account-view: No account provided");const e=He.getNetworkImage(this.network);return k`<wui-flex
      flexDirection="column"
      .padding=${["0","xl","m","xl"]}
      alignItems="center"
      gap="m"
    >
      ${this.activateAccountTemplate()}
      <wui-profile-button
        @click=${this.onProfileButtonClick.bind(this)}
        address=${ye(this.address)}
        networkSrc=${ye(e)}
        icon="chevronBottom"
        avatarSrc=${ye(this.profileImage?this.profileImage:void 0)}
        ?isprofilename=${!!this.profileName}
      ></wui-profile-button>
      ${this.tokenBalanceTemplate()}
      <wui-flex gap="s">
        <wui-tooltip-select
          @click=${this.onBuyClick.bind(this)}
          text="Buy"
          icon="card"
        ></wui-tooltip-select>
        <wui-tooltip-select
          @click=${this.onConvertClick.bind(this)}
          text="Convert"
          icon="recycleHorizontal"
        ></wui-tooltip-select>
        <wui-tooltip-select
          @click=${this.onReceiveClick.bind(this)}
          text="Receive"
          icon="arrowBottomCircle"
        ></wui-tooltip-select>
        <wui-tooltip-select
          @click=${this.onSendClick.bind(this)}
          text="Send"
          icon="send"
        ></wui-tooltip-select>
      </wui-flex>

      <wui-tabs
        .onTabChange=${this.onTabChange.bind(this)}
        .activeTab=${this.currentTab}
        localTabWidth="104px"
        .tabs=${K9.ACCOUNT_TABS}
      ></wui-tabs>
      ${this.listContentTemplate()}
    </wui-flex>`}watchConvertValues(){this.watchTokenBalance=setInterval(()=>ie.fetchTokenBalance(),1e4)}listContentTemplate(){return this.currentTab===0?k`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:this.currentTab===1?k`<w3m-account-nfts-widget></w3m-account-nfts-widget>`:this.currentTab===2?k`<w3m-account-activity-widget></w3m-account-activity-widget>`:k`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){var e;if(this.tokenBalance&&((e=this.tokenBalance)==null?void 0:e.length)>=0){const t=oe.calculateBalance(this.tokenBalance),{dollars:i="0",pennies:o="00"}=oe.formatTokenBalance(t);return k`<wui-balance dollars=${i} pennies=${o}></wui-balance>`}return k`<wui-balance dollars="0" pennies="00"></wui-balance>`}activateAccountTemplate(){return!he.checkIfSmartAccountEnabled()||this.preferredAccountType!==Dt.ACCOUNT_TYPES.EOA||this.smartAccountDeployed?null:k` <wui-promo
      text=${"Activate your account"}
      @click=${this.onUpdateToSmartAccount.bind(this)}
      data-testid="activate-smart-account-promo"
    ></wui-promo>`}onTabChange(e){ie.setCurrentTab(e)}onProfileButtonClick(){G.push("AccountSettings")}onBuyClick(){G.push("OnRampProviders")}onConvertClick(){G.push("Convert")}onReceiveClick(){G.push("WalletReceive")}onSendClick(){G.push("WalletSend")}onUpdateToSmartAccount(){G.push("UpgradeToSmartAccount")}};mn.styles=Y9;ri([j()],mn.prototype,"watchTokenBalance",void 0);ri([j()],mn.prototype,"address",void 0);ri([j()],mn.prototype,"profileImage",void 0);ri([j()],mn.prototype,"profileName",void 0);ri([j()],mn.prototype,"smartAccountDeployed",void 0);ri([j()],mn.prototype,"network",void 0);ri([j()],mn.prototype,"currentTab",void 0);ri([j()],mn.prototype,"tokenBalance",void 0);ri([j()],mn.prototype,"preferredAccountType",void 0);mn=ri([V("w3m-account-wallet-features-widget")],mn);const J9=Ee`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }
`;var X9=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let od=class extends le{render(){return k`<w3m-activity-list page="account"></w3m-activity-list>`}};od.styles=J9;od=X9([V("w3m-account-activity-widget")],od);const Q9=Ee`
  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var ex=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let sd=class extends le{render(){return k`${this.nftTemplate()}`}nftTemplate(){return k` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="wallet"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">No NFTs yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Transfer from another wallets to get started</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Receive NFTs</wui-link>
    </wui-flex>`}onReceiveClick(){G.push("WalletReceive")}};sd.styles=Q9;sd=ex([V("w3m-account-nfts-widget")],sd);const tx=Ee`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }
`;var O1=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Yc=class extends le{constructor(){super(),this.unsubscribe=[],this.tokenBalance=ie.state.tokenBalance,this.unsubscribe.push(ie.subscribe(e=>{this.tokenBalance=e.tokenBalance}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return k`${this.tokenTemplate()}`}tokenTemplate(){var e;return this.tokenBalance&&((e=this.tokenBalance)==null?void 0:e.length)>0?k`<wui-flex class="contentContainer" flexDirection="column" gap="xs">
        ${this.tokenItemTemplate()}
      </wui-flex>`:k` <wui-flex flexDirection="column" gap="xs"
      ><wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
      ></wui-list-description
      ><wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Transfer tokens on your wallet"
        icon="arrowBottomCircle"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
      ></wui-list-description
    ></wui-flex>`}tokenItemTemplate(){var e;return(e=this.tokenBalance)==null?void 0:e.map(t=>k`<wui-list-token
          tokenName=${t.name}
          tokenImageUrl=${t.iconUrl}
          tokenAmount=${t.quantity.numeric}
          tokenValue=${t.value}
          tokenCurrency=${t.symbol}
        ></wui-list-token>`)}onReceiveClick(){G.push("WalletReceive")}onBuyClick(){G.push("OnRampProviders")}};Yc.styles=tx;O1([j()],Yc.prototype,"tokenBalance",void 0);Yc=O1([V("w3m-account-tokens-widget")],Yc);const nx=Ee`
  :host {
    min-height: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`;var so=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};const tc="last-transaction",ix=7;let xi=class extends le{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.address=ie.state.address,this.transactionsByYear=kt.state.transactionsByYear,this.loading=kt.state.loading,this.empty=kt.state.empty,this.next=kt.state.next,kt.clearCursor(),this.unsubscribe.push(ie.subscribe(e=>{e.isConnected&&this.address!==e.address&&(this.address=e.address,kt.resetTransactions(),kt.fetchTransactions(e.address))}),kt.subscribe(e=>{this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next}))}firstUpdated(){kt.fetchTransactions(this.address),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return k` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}templateTransactionsByYear(){const e=Object.keys(this.transactionsByYear).sort().reverse();return e.map((t,i)=>{const o=i===e.length-1,r=parseInt(t,10);return new Array(12).fill(null).map((a,c)=>c).reverse().map(a=>{var d;const c=Mi.getTransactionGroupTitle(r,a),l=(d=this.transactionsByYear[r])==null?void 0:d[a];return l?k`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${c}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(l,o)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(e,t){const{date:i,descriptions:o,direction:r,isAllNFT:s,images:a,status:c,transfers:l,type:d}=this.getTransactionListItemProps(e),p=(l==null?void 0:l.length)>1;return(l==null?void 0:l.length)===2&&!s?k`
        <wui-transaction-list-item
          date=${i}
          .direction=${r}
          id=${t&&this.next?tc:""}
          status=${c}
          type=${d}
          .images=${a}
          .descriptions=${o}
        ></wui-transaction-list-item>
      `:p?l.map((v,T)=>{const S=Mi.getTransferDescription(v),$=t&&T===l.length-1;return k` <wui-transaction-list-item
          date=${i}
          direction=${v.direction}
          id=${$&&this.next?tc:""}
          status=${c}
          type=${d}
          .onlyDirectionIcon=${!0}
          .images=${[a[T]]}
          .descriptions=${[S]}
        ></wui-transaction-list-item>`}):k`
      <wui-transaction-list-item
        date=${i}
        .direction=${r}
        id=${t&&this.next?tc:""}
        status=${c}
        type=${d}
        .images=${a}
        .descriptions=${o}
      ></wui-transaction-list-item>
    `}templateTransactions(e,t){return e.map((i,o)=>{const r=t&&o===e.length-1;return k`${this.templateRenderTransaction(i,r)}`})}emptyStateActivity(){return k`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["3xl","xl","3xl","xl"]}
      gap="xl"
    >
      <wui-icon-box
        backgroundColor="glass-005"
        background="gray"
        iconColor="fg-200"
        icon="wallet"
        size="lg"
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >No Transactions yet</wui-text
        >
        <wui-text align="center" variant="small-500" color="fg-200"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return k`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="swapHorizontal"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">No activity yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return this.page==="account"?k`${this.emptyStateAccount()}`:k`${this.emptyStateActivity()}`}templateLoading(){return this.page==="activity"?Array(ix).fill(k` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e):null}onReceiveClick(){G.push("WalletReceive")}createPaginationObserver(){const{projectId:e}=fe.state;this.paginationObserver=new IntersectionObserver(([t])=>{t!=null&&t.isIntersecting&&!this.loading&&(kt.fetchTransactions(this.address),me.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:e,cursor:this.next}}))},{}),this.setPaginationObserver()}setPaginationObserver(){var t,i,o;(t=this.paginationObserver)==null||t.disconnect();const e=(i=this.shadowRoot)==null?void 0:i.querySelector(`#${tc}`);e&&((o=this.paginationObserver)==null||o.observe(e))}getTransactionListItemProps(e){var c,l,d,p,f;const t=Nd.formatDate((c=e==null?void 0:e.metadata)==null?void 0:c.minedAt),i=Mi.getTransactionDescriptions(e),o=e==null?void 0:e.transfers,r=(l=e==null?void 0:e.transfers)==null?void 0:l[0],s=!!r&&((d=e==null?void 0:e.transfers)==null?void 0:d.every(v=>!!v.nft_info)),a=Mi.getTransactionImages(o);return{date:t,direction:r==null?void 0:r.direction,descriptions:i,isAllNFT:s,images:a,status:(p=e.metadata)==null?void 0:p.status,transfers:o,type:(f=e.metadata)==null?void 0:f.operationType}}};xi.styles=nx;so([we()],xi.prototype,"page",void 0);so([j()],xi.prototype,"address",void 0);so([j()],xi.prototype,"transactionsByYear",void 0);so([j()],xi.prototype,"loading",void 0);so([j()],xi.prototype,"empty",void 0);so([j()],xi.prototype,"next",void 0);xi=so([V("w3m-activity-list")],xi);const rx=Ee`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-gray-glass-002);
    background-color: var(--wui-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host(:hover) {
    background-color: var(--wui-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;var v0=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let ya=class extends le{render(){return k` <wui-flex
      flexDirection="column"
      gap="4xs"
      .padding=${["xl","s","l","l"]}
    >
      <wui-flex alignItems="center">
        <wui-input-amount
          @inputChange=${this.onInputChange.bind(this)}
          ?disabled=${!this.token&&!0}
          .value=${this.sendTokenAmount?String(this.sendTokenAmount):""}
        ></wui-input-amount>
        ${this.buttonTemplate()}
      </wui-flex>
      <wui-flex alignItems="center" justifyContent="space-between">
        ${this.sendValueTemplate()}
        <wui-flex alignItems="center" gap="4xs" justifyContent="flex-end">
          ${this.maxAmountTemplate()} ${this.actionTemplate()}
        </wui-flex>
      </wui-flex>
    </wui-flex>`}buttonTemplate(){return this.token?k`<wui-token-button
        text=${this.token.symbol}
        imageSrc=${this.token.iconUrl}
        @click=${this.handleSelectButtonClick.bind(this)}
        >Select token</wui-token-button
      >`:k`<wui-button
      size="md"
      variant="accentBg"
      @click=${this.handleSelectButtonClick.bind(this)}
      >Select token</wui-button
    >`}handleSelectButtonClick(){G.push("WalletSendSelectToken")}sendValueTemplate(){if(this.token&&this.sendTokenAmount){const t=this.token.price*this.sendTokenAmount;return k`<wui-text variant="small-400" color="fg-200">$${t.toFixed(2)}</wui-text>`}return null}maxAmountTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?k` <wui-text variant="small-400" color="error-100">
          ${ve.roundNumber(Number(this.token.quantity.numeric),6,5)}
        </wui-text>`:k` <wui-text variant="small-400" color="fg-200">
        ${ve.roundNumber(Number(this.token.quantity.numeric),6,5)}
      </wui-text>`:null}actionTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?k`<wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>`:k`<wui-link @click=${this.onMaxClick.bind(this)}>Max</wui-link>`:null}onInputChange(e){Mt.setTokenAmount(e.detail)}onMaxClick(){var e;this.token&&Mt.setTokenAmount(Number((e=this.token)==null?void 0:e.quantity.numeric))}onBuyClick(){G.push("OnRampProviders")}};ya.styles=rx;v0([we({type:Object})],ya.prototype,"token",void 0);v0([we({type:Number})],ya.prototype,"sendTokenAmount",void 0);ya=v0([V("w3m-input-token")],ya);const ox=Ee`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-gray-glass-002);
    background-color: var(--wui-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
    position: relative;
  }

  :host(:hover) {
    background-color: var(--wui-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    display: ruby;
    color: var(--wui-color-fg-100);
    margin: 0 var(--wui-spacing-xs);
  }

  .instruction {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  textarea {
    background: transparent;
    width: 100%;
    font-family: var(--w3m-font-family);
    font-size: var(--wui-font-size-medium);
    font-style: normal;
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    letter-spacing: var(--wui-letter-spacing-medium);
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    border: none;
    outline: none;
    appearance: none;
    resize: none;
    overflow: hidden;
  }
`;var y0=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let xa=class extends le{constructor(){super(...arguments),this.inputElementRef=zc(),this.instructionElementRef=zc(),this.instructionHidden=!!this.receiverAddress}firstUpdated(){this.receiverAddress&&(this.instructionHidden=!0),this.checkHidden()}render(){return k` <wui-flex
      @click=${this.onBoxClick.bind(this)}
      flexDirection="column"
      justifyContent="center"
      gap="4xs"
      .padding=${["2xl","l","xl","l"]}
    >
      <wui-text
        ${Hc(this.instructionElementRef)}
        class="instruction"
        color="fg-300"
        variant="medium-400"
      >
        Type or
        <wui-button
          size="sm"
          variant="shade"
          iconLeft="copy"
          @click=${this.onPasteClick.bind(this)}
        >
          <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>
          Paste
        </wui-button>
        address
      </wui-text>
      <textarea
        ?disabled=${!this.instructionHidden}
        ${Hc(this.inputElementRef)}
        @input=${this.onInputChange.bind(this)}
        @blur=${this.onBlur.bind(this)}
        .value=${this.receiverAddress??""}
        autocomplete="off"
      >
${this.receiverAddress??""}</textarea
      >
    </wui-flex>`}async focusInput(){var e;this.instructionElementRef.value&&(this.instructionHidden=!0,await this.toggleInstructionFocus(!1),this.instructionElementRef.value.style.pointerEvents="none",(e=this.inputElementRef.value)==null||e.focus(),this.inputElementRef.value&&(this.inputElementRef.value.selectionStart=this.inputElementRef.value.selectionEnd=this.inputElementRef.value.value.length))}async focusInstruction(){var e;this.instructionElementRef.value&&(this.instructionHidden=!1,await this.toggleInstructionFocus(!0),this.instructionElementRef.value.style.pointerEvents="auto",(e=this.inputElementRef.value)==null||e.blur())}async toggleInstructionFocus(e){this.instructionElementRef.value&&await this.instructionElementRef.value.animate([{opacity:e?0:1},{opacity:e?1:0}],{duration:100,easing:"ease",fill:"forwards"}).finished}onBoxClick(){!this.receiverAddress&&!this.instructionHidden&&this.focusInput()}onBlur(){!this.receiverAddress&&this.instructionHidden&&this.focusInstruction()}checkHidden(){this.instructionHidden&&this.focusInput()}async onPasteClick(){const e=await navigator.clipboard.readText();Mt.setReceiverAddress(e)}onInputChange(e){const t=e.target;t.value&&!this.instructionHidden&&this.focusInput(),Mt.setReceiverAddress(t.value)}};xa.styles=ox;y0([we()],xa.prototype,"receiverAddress",void 0);y0([j()],xa.prototype,"instructionHidden",void 0);xa=y0([V("w3m-input-address")],xa);const sx=Ee`
  :host {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: var(--wui-border-radius-1xs);
    border-radius: var(--wui-border-radius-s);
    background: var(--wui-gray-glass-002);
    padding: var(--wui-spacing-s) var(--wui-spacing-1xs) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }

  wui-text {
    padding: 0 var(--wui-spacing-1xs);
  }

  wui-flex {
    margin-top: var(--wui-spacing-1xs);
  }

  .network {
    cursor: pointer;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  .network:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  .network:hover {
    background-color: var(--wui-gray-glass-005);
  }

  .network:active {
    background-color: var(--wui-gray-glass-010);
  }
`;var x0=function(n,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(r=(o<3?s(r):o>3?s(e,t,r):s(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Ca=class extends le{render(){return k` <wui-text variant="small-400" color="fg-200">Details</wui-text>
      <wui-flex flexDirection="column" gap="xxs">
        <wui-list-content textTitle="Network cost" textValue="$3.20"></wui-list-content>
        <wui-list-content
          textTitle="Address"
          textValue=${ve.getTruncateString({string:this.receiverAddress??"",charsStart:4,charsEnd:4,truncate:"middle"})}
        >
        </wui-list-content>
        ${this.networkTemplate()}
      </wui-flex>`}networkTemplate(){var e;return(e=this.caipNetwork)!=null&&e.name?k` <wui-list-content
        @click=${()=>this.onNetworkClick(this.caipNetwork)}
        class="network"
        textTitle="Network"
        imageSrc=${ye(He.getNetworkImage(this.caipNetwork))}
      ></wui-list-content>`:null}onNetworkClick(e){e&&G.push("Networks",{network:e})}};Ca.styles=sx;x0([we()],Ca.prototype,"receiverAddress",void 0);x0([we({type:Object})],Ca.prototype,"caipNetwork",void 0);Ca=x0([V("w3m-wallet-send-details")],Ca);let tp=!1;class ax{constructor(e){this.initPromise=void 0,this.setIsConnected=t=>{ie.setIsConnected(t)},this.getIsConnectedState=()=>ie.state.isConnected,this.setCaipAddress=t=>{ie.setCaipAddress(t)},this.setBalance=(t,i)=>{ie.setBalance(t,i)},this.setProfileName=t=>{ie.setProfileName(t)},this.setProfileImage=t=>{ie.setProfileImage(t)},this.resetAccount=()=>{ie.resetAccount()},this.setCaipNetwork=t=>{he.setCaipNetwork(t)},this.getCaipNetwork=()=>he.state.caipNetwork,this.setRequestedCaipNetworks=t=>{he.setRequestedCaipNetworks(t)},this.getApprovedCaipNetworksData=()=>he.getApprovedCaipNetworksData(),this.resetNetwork=()=>{he.resetNetwork()},this.setConnectors=t=>{je.setConnectors(t)},this.addConnector=t=>{je.addConnector(t)},this.getConnectors=()=>je.getConnectors(),this.resetWcConnection=()=>{$e.resetWcConnection()},this.fetchIdentity=t=>Bt.fetchIdentity(t),this.setAddressExplorerUrl=t=>{ie.setAddressExplorerUrl(t)},this.setSmartAccountDeployed=t=>{ie.setSmartAccountDeployed(t)},this.setConnectedWalletInfo=t=>{ie.setConnectedWalletInfo(t)},this.setSmartAccountEnabledNetworks=t=>{he.setSmartAccountEnabledNetworks(t)},this.setPreferredAccountType=t=>{ie.setPreferredAccountType(t)},this.initControllers(e),this.initOrContinue()}async open(e){await this.initOrContinue(),Ie.open(e)}async close(){await this.initOrContinue(),Ie.close()}setLoading(e){Ie.setLoading(e)}getThemeMode(){return pt.state.themeMode}getThemeVariables(){return pt.state.themeVariables}setThemeMode(e){pt.setThemeMode(e),jd(pt.state.themeMode)}setThemeVariables(e){pt.setThemeVariables(e),kf(pt.state.themeVariables)}subscribeTheme(e){return pt.subscribe(e)}getWalletInfo(){return ie.state.connectedWalletInfo}subscribeWalletInfo(e){return ie.subscribeKey("connectedWalletInfo",e)}getState(){return vr.state}subscribeState(e){return vr.subscribe(e)}showErrorMessage(e){De.showError(e)}showSuccessMessage(e){De.showSuccess(e)}getEvent(){return{...me.state}}subscribeEvents(e){return me.subscribe(e)}redirect(e){G.push(e)}popTransactionStack(e){G.popTransactionStack(e)}isOpen(){return Ie.state.open}isTransactionStackEmpty(){return G.state.transactionStack.length===0}async initControllers(e){if(he.setClient(e.networkControllerClient),he.setDefaultCaipNetwork(e.defaultChain),fe.setProjectId(e.projectId),fe.setAllWallets(e.allWallets),fe.setIncludeWalletIds(e.includeWalletIds),fe.setExcludeWalletIds(e.excludeWalletIds),fe.setFeaturedWalletIds(e.featuredWalletIds),fe.setTokens(e.tokens),fe.setTermsConditionsUrl(e.termsConditionsUrl),fe.setPrivacyPolicyUrl(e.privacyPolicyUrl),fe.setCustomWallets(e.customWallets),fe.setEnableAnalytics(e.enableAnalytics),fe.setSdkVersion(e._sdkVersion),$e.setClient(e.connectionControllerClient),e.siweControllerClient){const{SIWEController:t}=await ui(()=>import("./BYF7TN1j.js"),__vite__mapDeps([3,1,2]),import.meta.url);t.setSIWEClient(e.siweControllerClient)}e.metadata&&fe.setMetadata(e.metadata),e.themeMode&&pt.setThemeMode(e.themeMode),e.themeVariables&&pt.setThemeVariables(e.themeVariables),e.enableOnramp&&fe.setOnrampEnabled(!!e.enableOnramp),e.enableWalletFeatures&&fe.setWalletFeaturesEnabled(!!e.enableWalletFeatures),e.allowUnsupportedChain&&he.setAllowUnsupportedChain(e.allowUnsupportedChain)}async initOrContinue(){return!this.initPromise&&!tp&&oe.isClient()&&(tp=!0,this.initPromise=new Promise(async e=>{await Promise.all([ui(()=>Promise.resolve().then(()=>Fv),void 0,import.meta.url),ui(()=>Promise.resolve().then(()=>hy),void 0,import.meta.url)]);const t=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",t),e()})),this.initPromise}}function cx(n){if(n)return{id:`${Te.EIP155}:${n.id}`,name:n.name,imageId:li.EIP155NetworkImageIds[n.id]}}async function lx(n){var r,s,a,c;if(!n)throw new Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");const e=await(n==null?void 0:n.getProvider()),t=(s=(r=e==null?void 0:e.signer)==null?void 0:r.session)==null?void 0:s.namespaces,i=(a=t==null?void 0:t[Te.EIP155])==null?void 0:a.methods,o=(c=t==null?void 0:t[Te.EIP155])==null?void 0:c.chains;return{supportsAllNetworks:!!(i!=null&&i.includes(Te.ADD_CHAIN_METHOD)),approvedCaipNetworkIds:o}}function ux(){return{supportsAllNetworks:!1,approvedCaipNetworkIds:li.WalletConnectRpcChainIds.map(n=>`${Te.EIP155}:${n}`)}}function dx({chainId:n,projectId:e}){const t=oe.getBlockchainApiUrl();return li.WalletConnectRpcChainIds.includes(n)?Z0(`${t}/v1/?chainId=${Te.EIP155}:${n}&projectId=${e}`):Z0()}class hx extends ax{constructor(e){const{wagmiConfig:t,siweConfig:i,defaultChain:o,tokens:r,_sdkVersion:s,...a}=e;if(!t)throw new Error("web3modal:constructor - wagmiConfig is undefined");if(!a.projectId)throw new Error("web3modal:constructor - projectId is undefined");const c={switchCaipNetwork:async d=>{const p=gr.caipNetworkIdToNumber(d==null?void 0:d.id);p&&await z2(this.wagmiConfig,{chainId:p})},getApprovedCaipNetworksData:async()=>new Promise(d=>{var v,T;const f=new Map(t.state.connections).get(t.state.current||"");if(((v=f==null?void 0:f.connector)==null?void 0:v.id)===Te.EMAIL_CONNECTOR_ID)d(ux());else if(((T=f==null?void 0:f.connector)==null?void 0:T.id)===Te.WALLET_CONNECT_CONNECTOR_ID){const S=t.connectors.find($=>$.id===Te.WALLET_CONNECT_CONNECTOR_ID);d(lx(S))}d({approvedCaipNetworkIds:void 0,supportsAllNetworks:!0})})},l={connectWalletConnect:async d=>{var T;const p=t.connectors.find(S=>S.id===Te.WALLET_CONNECT_CONNECTOR_ID);if(!p)throw new Error("connectionControllerClient:getWalletConnectUri - connector is undefined");(await p.getProvider()).on("display_uri",S=>{d(S)});const v=gr.caipNetworkIdToNumber((T=this.getCaipNetwork())==null?void 0:T.id);await K0(this.wagmiConfig,{connector:p,chainId:v})},connectExternal:async({id:d,provider:p,info:f})=>{var S,$;const v=t.connectors.find(B=>B.id===d);if(!v)throw new Error("connectionControllerClient:connectExternal - connector is undefined");p&&f&&v.id===Te.EIP6963_CONNECTOR_ID&&((S=v.setEip6963Wallet)==null||S.call(v,{provider:p,info:f}));const T=gr.caipNetworkIdToNumber(($=this.getCaipNetwork())==null?void 0:$.id);await K0(this.wagmiConfig,{connector:v,chainId:T})},checkInstalled:d=>{const p=this.getConnectors().find(f=>f.type==="INJECTED");return d?p&&window!=null&&window.ethereum?d.some(f=>{var v;return!!((v=window.ethereum)!=null&&v[String(f)])}):!1:!!window.ethereum},disconnect:async()=>{await I2(this.wagmiConfig)},signMessage:async d=>F2(this.wagmiConfig,{message:d}),estimateGas:async d=>{try{return await P2(this.wagmiConfig,{account:d.address,to:d.to,data:d.data,type:"legacy"})}catch{return 0n}},sendTransaction:async d=>{const{chainId:p}=sl(this.wagmiConfig),f={account:d.address,to:d.to,value:d.value,gas:d.gas,gasPrice:d.gasPrice,data:d.data,chainId:p,type:"legacy"};await U2(this.wagmiConfig,f);const v=await W2(this.wagmiConfig,f);return await Z2(this.wagmiConfig,{hash:v,timeout:25e3}),v},parseUnits:Jm,formatUnits:Ta};super({networkControllerClient:c,connectionControllerClient:l,siweControllerClient:i,defaultChain:cx(o),tokens:N8.getCaipTokens(r),_sdkVersion:s??`html-wagmi-${Te.VERSION}`,...a}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=e,this.wagmiConfig=t,this.syncRequestedNetworks([...t.chains]),this.syncConnectors([...t.connectors]),this.initEmailConnectorListeners([...t.connectors]),V2(this.wagmiConfig,{onChange:d=>this.syncConnectors(d)}),H2(this.wagmiConfig,{onChange:d=>this.syncAccount({...d})})}getState(){const e=super.getState();return{...e,selectedNetworkId:gr.caipNetworkIdToNumber(e.selectedNetworkId)}}subscribeState(e){return super.subscribeState(t=>e({...t,selectedNetworkId:gr.caipNetworkIdToNumber(t.selectedNetworkId)}))}syncRequestedNetworks(e){const t=e==null?void 0:e.map(i=>{var o,r;return{id:`${Te.EIP155}:${i.id}`,name:i.name,imageId:li.EIP155NetworkImageIds[i.id],imageUrl:(r=(o=this.options)==null?void 0:o.chainImages)==null?void 0:r[i.id]}});this.setRequestedCaipNetworks(t??[])}async syncAccount({address:e,isConnected:t,chainId:i,connector:o}){if(this.resetAccount(),this.syncNetwork(e,i,t),t&&e&&i){const r=`${Te.EIP155}:${i}:${e}`;this.setIsConnected(t),this.setCaipAddress(r),await Promise.all([this.syncProfile(e,i),this.syncBalance(e,i),this.syncConnectedWalletInfo(o),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!t&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(e,t,i){var r,s,a,c;const o=this.wagmiConfig.chains.find(l=>l.id===t);if(o||t){const l=(o==null?void 0:o.name)??(t==null?void 0:t.toString()),d=Number((o==null?void 0:o.id)??t),p=`${Te.EIP155}:${d}`;if(this.setCaipNetwork({id:p,name:l,imageId:li.EIP155NetworkImageIds[d],imageUrl:(s=(r=this.options)==null?void 0:r.chainImages)==null?void 0:s[d]}),i&&e&&t){const f=`${Te.EIP155}:${d}:${e}`;if(this.setCaipAddress(f),(c=(a=o==null?void 0:o.blockExplorers)==null?void 0:a.default)!=null&&c.url){const v=`${o.blockExplorers.default.url}/address/${e}`;this.setAddressExplorerUrl(v)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&(await this.syncProfile(e,t),await this.syncBalance(e,t))}}}async syncProfile(e,t){try{const{name:i,avatar:o}=await this.fetchIdentity({address:e});this.setProfileName(i),this.setProfileImage(o)}catch{if(t===cf.id){const i=await L2(this.wagmiConfig,{address:e,chainId:t});if(i){this.setProfileName(i);const o=await D2(this.wagmiConfig,{name:i,chainId:t});o&&this.setProfileImage(o)}}else this.setProfileName(null),this.setProfileImage(null)}}async syncBalance(e,t){var o,r,s;const i=this.wagmiConfig.chains.find(a=>a.id===t);if(i){const a=await B2(this.wagmiConfig,{address:e,chainId:i.id,token:(s=(r=(o=this.options)==null?void 0:o.tokens)==null?void 0:r[i.id])==null?void 0:s.address});this.setBalance(a.formatted,a.symbol);return}this.setBalance(void 0,void 0)}async syncConnectedWalletInfo(e){var t;if(!e)throw Error("syncConnectedWalletInfo - connector is undefined");if(e.id===Te.WALLET_CONNECT_CONNECTOR_ID&&e.getProvider){const i=await e.getProvider();i.session&&this.setConnectedWalletInfo({...i.session.peer.metadata,name:i.session.peer.metadata.name,icon:(t=i.session.peer.metadata.icons)==null?void 0:t[0]})}else this.setConnectedWalletInfo({name:e.name,icon:e.icon})}syncConnectors(e){const t=new Set,i=e.filter(a=>!t.has(a.id)&&t.add(a.id)),o=[],r=Te.COINBASE_SDK_CONNECTOR_ID,s=i.find(a=>a.id===Te.CONNECTOR_RDNS_MAP[Te.COINBASE_CONNECTOR_ID]);i.forEach(({id:a,name:c,type:l,icon:d})=>{var v,T;s&&a===r||Te.EMAIL_CONNECTOR_ID===a||o.push({id:a,explorerId:li.ConnectorExplorerIds[a],imageUrl:((T=(v=this.options)==null?void 0:v.connectorImages)==null?void 0:T[a])??d,name:li.ConnectorNamesMap[a]??c,imageId:li.ConnectorImageIds[a],type:li.ConnectorTypesMap[l]??"EXTERNAL",info:{rdns:a}})}),this.setConnectors(o),this.syncEmailConnector(i)}async syncEmailConnector(e){const t=e.find(({id:i})=>i===Te.EMAIL_CONNECTOR_ID);if(t){const i=await t.getProvider();this.addConnector({id:Te.EMAIL_CONNECTOR_ID,type:"EMAIL",name:"Email",provider:i})}}async initEmailConnectorListeners(e){const t=e.find(({id:i})=>i===Te.EMAIL_CONNECTOR_ID);t&&(await this.listenEmailConnector(t),await this.listenModal(t))}async listenEmailConnector(e){if(typeof window<"u"&&e){super.setLoading(!0);const t=await e.getProvider(),i=t.getLoginEmailUsed();super.setLoading(i),i&&this.setIsConnected(!1),t.onRpcRequest(o=>{if(wt.checkIfRequestExists(o))wt.checkIfRequestIsAllowed(o)||(super.isOpen()?super.isTransactionStackEmpty()||super.redirect("ApproveTransaction"):super.open({view:"ApproveTransaction"}));else{super.open();const r=wt.getRequestMethod(o);console.error(Dt.RPC_METHOD_NOT_ALLOWED_MESSAGE,{method:r}),setTimeout(()=>{this.showErrorMessage(Dt.RPC_METHOD_NOT_ALLOWED_UI_MESSAGE)},300),t.rejectRpcRequest()}}),t.onRpcResponse(o=>{switch(wt.getResponseType(o)){case te.RPC_RESPONSE_TYPE_ERROR:{super.isOpen()&&(super.isTransactionStackEmpty()?super.close():super.popTransactionStack(!0));break}case te.RPC_RESPONSE_TYPE_TX:{super.isTransactionStackEmpty()?super.close():super.popTransactionStack();break}}}),t.onNotConnected(()=>{this.getIsConnectedState()||(this.setIsConnected(!1),super.setLoading(!1))}),t.onIsConnected(o=>{this.setIsConnected(!0),this.setSmartAccountDeployed(!!o.smartAccountDeployed),this.setPreferredAccountType(o.preferredAccountType),super.setLoading(!1)}),t.onGetSmartAccountEnabledNetworks(o=>{this.setSmartAccountEnabledNetworks(o)}),t.onSetPreferredAccount(({address:o,type:r})=>{var a;if(!o)return;const s=gr.caipNetworkIdToNumber((a=this.getCaipNetwork())==null?void 0:a.id);this.syncAccount({address:o,chainId:s,isConnected:!0,connector:e}).then(()=>this.setPreferredAccountType(r))})}}async listenModal(e){const t=await e.getProvider();this.subscribeState(i=>{i.open||t.rejectRpcRequest()})}}C0.type="coinbaseWallet";function C0(n){let t,i,o,r,s;return a=>({id:"coinbaseWalletSDK",name:"Coinbase Wallet",supportsSimulation:!0,type:C0.type,async connect({chainId:c}={}){try{const l=await this.getProvider(),d=(await l.request({method:"eth_requestAccounts"})).map(f=>fn(f));o||(o=this.onAccountsChanged.bind(this),l.on("accountsChanged",o)),r||(r=this.onChainChanged.bind(this),l.on("chainChanged",r)),s||(s=this.onDisconnect.bind(this),l.on("disconnect",s));let p=await this.getChainId();if(c&&p!==c){const f=await this.switchChain({chainId:c}).catch(v=>{if(v.code===lt.code)throw v;return{id:p}});p=(f==null?void 0:f.id)??p}return{accounts:d,chainId:p}}catch(l){throw/(user closed modal|accounts received is empty|user denied account)/i.test(l.message)?new lt(l):l}},async disconnect(){const c=await this.getProvider();o&&(c.removeListener("accountsChanged",o),o=void 0),r&&(c.removeListener("chainChanged",r),r=void 0),s&&(c.removeListener("disconnect",s),s=void 0),c.disconnect(),c.close()},async getAccounts(){return(await(await this.getProvider()).request({method:"eth_accounts"})).map(l=>fn(l))},async getChainId(){const l=await(await this.getProvider()).request({method:"eth_chainId"});return Number(l)},async getProvider(){var c;if(!i){const{default:l}=await ui(()=>import("./ezSNHMEg.js").then(S=>S.i),__vite__mapDeps([4,5]),import.meta.url);let d;typeof l!="function"&&typeof l.default=="function"?d=l.default:d=l,t=new d({reloadOnDisconnect:!1,...n});const p=(c=t.walletExtension)==null?void 0:c.getChainId(),f=a.chains.find(S=>n.chainId?S.id===n.chainId:S.id===p)||a.chains[0],v=n.chainId||(f==null?void 0:f.id),T=n.jsonRpcUrl||(f==null?void 0:f.rpcUrls.default.http[0]);i=t.makeWeb3Provider(T,v)}return i},async isAuthorized(){try{return!!(await this.getAccounts()).length}catch{return!1}},async switchChain({addEthereumChainParameter:c,chainId:l}){var f,v,T,S;const d=a.chains.find($=>$.id===l);if(!d)throw new Jt(new Co);const p=await this.getProvider();try{return await p.request({method:"wallet_switchEthereumChain",params:[{chainId:ze(d.id)}]}),d}catch($){if($.code===4902)try{let B;c!=null&&c.blockExplorerUrls?B=c.blockExplorerUrls:B=(f=d.blockExplorers)!=null&&f.default.url?[(v=d.blockExplorers)==null?void 0:v.default.url]:[];let _;(T=c==null?void 0:c.rpcUrls)!=null&&T.length?_=c.rpcUrls:_=[((S=d.rpcUrls.default)==null?void 0:S.http[0])??""];const U={blockExplorerUrls:B,chainId:ze(l),chainName:(c==null?void 0:c.chainName)??d.name,iconUrls:c==null?void 0:c.iconUrls,nativeCurrency:(c==null?void 0:c.nativeCurrency)??d.nativeCurrency,rpcUrls:_};return await p.request({method:"wallet_addEthereumChain",params:[U]}),d}catch(B){throw new lt(B)}throw new Jt($)}},onAccountsChanged(c){c.length===0?this.onDisconnect():a.emitter.emit("change",{accounts:c.map(l=>fn(l))})},onChainChanged(c){const l=Number(c);a.emitter.emit("change",{chainId:l})},async onDisconnect(c){a.emitter.emit("disconnect");const l=await this.getProvider();o&&(l.removeListener("accountsChanged",o),o=void 0),r&&(l.removeListener("chainChanged",r),r=void 0),s&&(l.removeListener("disconnect",s),s=void 0)}})}_0.type="walletConnect";function _0(n){const e=n.isNewChainsStale??!0;let t,i;const o="eip155";return r=>({id:"walletConnect",name:"WalletConnect",type:_0.type,async setup(){const s=await this.getProvider().catch(()=>null);s&&(s.on("connect",this.onConnect.bind(this)),s.on("session_delete",this.onSessionDelete.bind(this)))},async connect({chainId:s,...a}={}){var c,l;try{const d=await this.getProvider();if(!d)throw new fr;d.on("display_uri",this.onDisplayUri);let p=s;if(!p){const S=await((c=r.storage)==null?void 0:c.getItem("state"))??{};r.chains.some(B=>B.id===S.chainId)?p=S.chainId:p=(l=r.chains[0])==null?void 0:l.id}if(!p)throw new Error("No chains found on connector.");const f=await this.isChainsStale();if(d.session&&f&&await d.disconnect(),!d.session||f){const S=r.chains.filter($=>$.id!==p).map($=>$.id);await d.connect({optionalChains:[p,...S],..."pairingTopic"in a?{pairingTopic:a.pairingTopic}:{}}),this.setRequestedChainsIds(r.chains.map($=>$.id))}const v=(await d.enable()).map(S=>fn(S)),T=await this.getChainId();return d.removeListener("display_uri",this.onDisplayUri),d.removeListener("connect",this.onConnect.bind(this)),d.on("accountsChanged",this.onAccountsChanged.bind(this)),d.on("chainChanged",this.onChainChanged),d.on("disconnect",this.onDisconnect.bind(this)),d.on("session_delete",this.onSessionDelete.bind(this)),{accounts:v,chainId:T}}catch(d){throw/(user rejected|connection request reset)/i.test(d==null?void 0:d.message)?new lt(d):d}},async disconnect(){const s=await this.getProvider();try{await(s==null?void 0:s.disconnect())}catch(a){if(!/No matching key/i.test(a.message))throw a}finally{s==null||s.removeListener("accountsChanged",this.onAccountsChanged.bind(this)),s==null||s.removeListener("chainChanged",this.onChainChanged),s==null||s.removeListener("disconnect",this.onDisconnect.bind(this)),s==null||s.removeListener("session_delete",this.onSessionDelete.bind(this)),s==null||s.on("connect",this.onConnect.bind(this)),this.setRequestedChainsIds([])}},async getAccounts(){return(await this.getProvider()).accounts.map(a=>fn(a))},async getProvider({chainId:s}={}){var c;async function a(){const l=r.chains.map(p=>p.id);if(!l.length)return;const{EthereumProvider:d}=await ui(()=>import("./DPkT55Ii.js"),__vite__mapDeps([6,1,2,5]),import.meta.url);return await d.init({...n,disableProviderPing:!0,optionalChains:l,projectId:n.projectId,rpcMap:Object.fromEntries(r.chains.map(p=>[p.id,p.rpcUrls.default.http[0]])),showQrModal:n.showQrModal??!0})}return t||(i||(i=a()),t=await i,t==null||t.events.setMaxListeners(1/0)),s&&await((c=this.switchChain)==null?void 0:c.call(this,{chainId:s})),t},async getChainId(){return(await this.getProvider()).chainId},async isAuthorized(){try{const[s,a]=await Promise.all([this.getAccounts(),this.getProvider()]);return s.length?await this.isChainsStale()&&a.session?(await a.disconnect().catch(()=>{}),!1):!0:!1}catch{return!1}},async switchChain({addEthereumChainParameter:s,chainId:a}){var l,d,p;const c=r.chains.find(f=>f.id===a);if(!c)throw new Jt(new Co);try{const f=await this.getProvider(),v=this.getNamespaceChainsIds(),T=this.getNamespaceMethods();if(!v.includes(a)&&T.includes("wallet_addEthereumChain")){let $;s!=null&&s.blockExplorerUrls?$=s.blockExplorerUrls:$=(l=c.blockExplorers)!=null&&l.default.url?[(d=c.blockExplorers)==null?void 0:d.default.url]:[];let B;(p=s==null?void 0:s.rpcUrls)!=null&&p.length?B=s.rpcUrls:B=[...c.rpcUrls.default.http];const _={blockExplorerUrls:$,chainId:ze(a),chainName:(s==null?void 0:s.chainName)??c.name,iconUrls:s==null?void 0:s.iconUrls,nativeCurrency:(s==null?void 0:s.nativeCurrency)??c.nativeCurrency,rpcUrls:B};await f.request({method:"wallet_addEthereumChain",params:[_]});const U=await this.getRequestedChainsIds();this.setRequestedChainsIds([...U,a])}return await f.request({method:"wallet_switchEthereumChain",params:[{chainId:ze(a)}]}),c}catch(f){const v=typeof f=="string"?f:f==null?void 0:f.message;throw/user rejected request/i.test(v)?new lt(f):new Jt(f)}},onAccountsChanged(s){s.length===0?this.onDisconnect():r.emitter.emit("change",{accounts:s.map(a=>fn(a))})},onChainChanged(s){const a=Number(s);r.emitter.emit("change",{chainId:a})},async onConnect(s){const a=Number(s.chainId),c=await this.getAccounts();r.emitter.emit("connect",{accounts:c,chainId:a})},async onDisconnect(s){this.setRequestedChainsIds([]),r.emitter.emit("disconnect");const a=await this.getProvider();a.removeListener("accountsChanged",this.onAccountsChanged.bind(this)),a.removeListener("chainChanged",this.onChainChanged),a.removeListener("disconnect",this.onDisconnect.bind(this)),a.removeListener("session_delete",this.onSessionDelete.bind(this)),a.on("connect",this.onConnect.bind(this))},onDisplayUri(s){r.emitter.emit("message",{type:"display_uri",data:s})},onSessionDelete(){this.onDisconnect()},getNamespaceChainsIds(){var a,c,l;return t?((l=(c=(a=t.session)==null?void 0:a.namespaces[o])==null?void 0:c.chains)==null?void 0:l.map(d=>parseInt(d.split(":")[1]||"")))??[]:[]},getNamespaceMethods(){var a,c;return t?((c=(a=t.session)==null?void 0:a.namespaces[o])==null?void 0:c.methods)??[]:[]},async getRequestedChainsIds(){var s;return await((s=r.storage)==null?void 0:s.getItem(this.requestedChainsStorageKey))??[]},async isChainsStale(){if(this.getNamespaceMethods().includes("wallet_addEthereumChain")||!e)return!1;const a=r.chains.map(d=>d.id),c=this.getNamespaceChainsIds();if(c.length&&!c.some(d=>a.includes(d)))return!1;const l=await this.getRequestedChainsIds();return!a.every(d=>l.includes(d))},async setRequestedChainsIds(s){var a;await((a=r.storage)==null?void 0:a.setItem(this.requestedChainsStorageKey,s))},get requestedChainsStorageKey(){return`${this.id}.requestedChains`}})}function px(n){return e=>({id:Te.EMAIL_CONNECTOR_ID,name:"Web3Modal Email",type:"w3mEmail",async connect(t={}){const i=await this.getProvider(),{address:o,chainId:r}=await i.connect({chainId:t.chainId});return await i.getSmartAccountEnabledNetworks(),{accounts:[o],account:o,chainId:r,chain:{id:r,unsuported:!1}}},async disconnect(){await(await this.getProvider()).disconnect()},async getAccounts(){const t=await this.getProvider(),{address:i}=await t.connect();return e.emitter.emit("change",{accounts:[i]}),[i]},async getProvider(){return this.provider||(this.provider=new R8(n.options.projectId)),Promise.resolve(this.provider)},async getChainId(){const t=await this.getProvider(),{chainId:i}=await t.getChainId();return i},async isAuthorized(){const t=await this.getProvider(),{isConnected:i}=await t.isConnected();return i},async switchChain({chainId:t}){try{const i=e.chains.find(r=>r.id===t);if(!i)throw new Jt(new Error("chain not found on connector."));return await(await this.getProvider()).switchNetwork(t),e.emitter.emit("change",{chainId:Vl(t)}),i}catch(i){throw i instanceof Error?new Jt(i):i}},onAccountsChanged(t){t.length===0?this.onDisconnect():e.emitter.emit("change",{accounts:t.map(fn)})},onChainChanged(t){const i=Vl(t);e.emitter.emit("change",{chainId:i})},async onConnect(t){const i=Vl(t.chainId),o=await this.getAccounts();e.emitter.emit("connect",{accounts:o,chainId:i})},async onDisconnect(t){await(await this.getProvider()).disconnect()}})}function fx({projectId:n,chains:e,metadata:t,enableInjected:i,enableCoinbase:o,enableEmail:r,enableWalletConnect:s,enableEIP6963:a,...c}){const l=[],d=e.map(f=>[f.id,dx({chainId:f.id,projectId:n})]),p=Object.fromEntries(d);return s!==!1&&l.push(_0({projectId:n,metadata:t,showQrModal:!1})),i!==!1&&l.push(ol({shimDisconnect:!0})),o!==!1&&l.push(C0({appName:(t==null?void 0:t.name)??"Unknown",appLogoUrl:(t==null?void 0:t.icons[0])??"Unknown",enableMobileWalletLink:!0})),r===!0&&l.push(px({chains:[...e],options:{projectId:n}})),R2({chains:e,multiInjectedProviderDiscovery:a!==!1,transports:p,...c,connectors:l})}function gx(n){return new hx({...n,_sdkVersion:`html-wagmi-${Te.VERSION}`})}const np="YOUR_PROJECT_ID",wx={__name:"web3",setup(n){const i=fx({chains:[cf,G2,q2],projectId:np,metadata:{name:"Web3Modal",description:"Web3Modal Example",url:"https://web3modal.com",icons:["https://avatars.githubusercontent.com/u/37784886"]}});return j2(i),gx({wagmiConfig:i,projectId:np,enableAnalytics:!0,enableOnramp:!0}),(o,r)=>{const s=F1("w3m-button");return z1(),U1("div",null,[j1(" test page "),W1(s)])}}},h_=Object.freeze(Object.defineProperty({__proto__:null,default:wx},Symbol.toStringTag,{value:"Module"}));export{ie as A,ne as B,$e as C,me as E,gs as H,Ts as I,Ie as M,gr as N,fe as O,Md as R,dt as S,lf as a,Fn as b,Yp as c,tm as d,xr as e,Dg as f,cd as g,Jr as h,zi as i,Kc as j,bx as k,he as l,on as m,V as n,De as o,At as p,G as q,_o as r,Xt as s,$a as t,ad as u,g2 as v,u1 as w,h_ as x};
