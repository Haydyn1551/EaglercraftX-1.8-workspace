(function(){'use strict';var e;e||=typeof Module != 'undefined' ? Module : {};var aa="object"==typeof window,g="undefined"!=typeof WorkerGlobalScope,k="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node&&"renderer"!=process.type,ba=window.__eaglercraftXLoaderContextPre.loaderWASMURL;e.locateFile=function(a){return"loader.wasm"===a?ba:a};
var r=window.__eaglercraftXLoaderContextPre.rootElement,ca=window.__eaglercraftXLoaderContextPre.eaglercraftXOpts,t=window.__eaglercraftXLoaderContextPre.theEPWFileBuffer,da=window.__eaglercraftXLoaderContextPre.splashURL;delete window.__eaglercraftXLoaderContextPre;var v=[null];
function w(){for(var a=null,b;b=r.lastChild;)a||=b,r.removeChild(b);b=document.createElement("div");b.classList.add("_eaglercraftX_wrapper_element");b.setAttribute("style","position:relative;width:100%;height:100%;overflow:hidden;");a&&(a.classList.add("_eaglercraftX_early_splash_element"),a.style.position="absolute",a.style.top="0px",a.style.left="0px",a.style.right="0px",a.style.bottom="0px",a.style.zIndex="2",b.appendChild(a));r.appendChild(b);return b}function x(){e=y=z=A=B=null}
var C=Object.assign({},e),D=[],E="./this.program",F=(a,b)=>{throw b;},G="",H,J;
if(k){var fs=require("fs"),ea=require("path");G=__dirname+"/";J=a=>{a=L(a)?new URL(a):ea.normalize(a);return fs.readFileSync(a)};H=a=>{a=L(a)?new URL(a):ea.normalize(a);return new Promise((b,d)=>{fs.readFile(a,void 0,(c,f)=>{c?d(c):b(f.buffer)})})};!e.thisProgram&&1<process.argv.length&&(E=process.argv[1].replace(/\\/g,"/"));D=process.argv.slice(2);"undefined"!=typeof module&&(module.exports=e);F=(a,b)=>{process.exitCode=a;throw b;}}else if(aa||g)g?G=self.location.href:"undefined"!=typeof document&&
document.currentScript&&(G=document.currentScript.src),G=G.startsWith("blob:")?"":G.substr(0,G.replace(/[?#].*/,"").lastIndexOf("/")+1),g&&(J=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),H=a=>L(a)?new Promise((b,d)=>{var c=new XMLHttpRequest;c.open("GET",a,!0);c.responseType="arraybuffer";c.onload=()=>{200==c.status||0==c.status&&c.response?b(c.response):d(c.status)};c.onerror=d;c.send(null)}):fetch(a,{credentials:"same-origin"}).then(b=>
b.ok?b.arrayBuffer():Promise.reject(Error(b.status+" : "+b.url)));e.print||console.log.bind(console);var M=e.printErr||console.error.bind(console);Object.assign(e,C);C=null;e.arguments&&(D=e.arguments);e.thisProgram&&(E=e.thisProgram);var N=e.wasmBinary,y,O=!1,z,A,B;
function fa(){var a=y.buffer;e.HEAP8=new Int8Array(a);e.HEAP16=new Int16Array(a);e.HEAPU8=z=new Uint8Array(a);e.HEAPU16=new Uint16Array(a);e.HEAP32=A=new Int32Array(a);e.HEAPU32=B=new Uint32Array(a);e.HEAPF32=new Float32Array(a);e.HEAPF64=new Float64Array(a)}var ha=[],ia=[],ja=[],ka=[];function la(){var a=e.preRun.shift();ha.unshift(a)}var P=0,Q=null,R=null,ma=a=>a.startsWith("data:application/octet-stream;base64,"),L=a=>a.startsWith("file://"),S;
function na(a){if(a==S&&N)return new Uint8Array(N);if(J)return J(a);throw"both async and sync fetching of the wasm failed";}function oa(a){return N?Promise.resolve().then(()=>na(a)):H(a).then(b=>new Uint8Array(b),()=>na(a))}function pa(a,b,d){return oa(a).then(c=>WebAssembly.instantiate(c,b)).then(d,c=>{M(`failed to asynchronously prepare wasm: ${c}`);e.onAbort?.(c);c="Aborted("+c+")";M(c);O=!0;throw new WebAssembly.RuntimeError(c+". Build with -sASSERTIONS for more info.");})}
function qa(a,b){var d=S;N||"function"!=typeof WebAssembly.instantiateStreaming||ma(d)||L(d)||k||"function"!=typeof fetch?pa(d,a,b):fetch(d,{credentials:"same-origin"}).then(c=>WebAssembly.instantiateStreaming(c,a).then(b,function(f){M(`wasm streaming compile failed: ${f}`);M("falling back to ArrayBuffer instantiation");return pa(d,a,b)}))}class ra{name="ExitStatus";constructor(a){this.message=`Program terminated with exit(${a})`;this.status=a}}
var T=a=>{for(;0<a.length;)a.shift()(e)},sa=e.noExitRuntime||!0,U="undefined"!=typeof TextDecoder?new TextDecoder:void 0,W=(a=0)=>{for(var b=z,d=a+NaN,c=a;b[c]&&!(c>=d);)++c;if(16<c-a&&b.buffer&&U)return U.decode(b.subarray(a,c));for(d="";a<c;){var f=b[a++];if(f&128){var u=b[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|u);else{var m=b[a++]&63;f=224==(f&240)?(f&15)<<12|u<<6|m:(f&7)<<18|u<<12|m<<6|b[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|
f&1023))}}else d+=String.fromCharCode(f)}return d},ta=a=>{sa||(e.onExit?.(a),O=!0);F(a,new ra(a))},ua={k:(a,b,d)=>z.copyWithin(a,b,b+d),c:function(a){console.error("LoaderMain: [ERROR] "+(a?W(a):""))},b:function(a){console.log("LoaderMain: [INFO] "+(a?W(a):""))},j:a=>{var b=z.length;a>>>=0;if(67108864<a)return!1;for(var d=1;4>=d;d*=2){var c=b*(1+.2/d);c=Math.min(c,a+100663296);a:{c=(Math.min(67108864,65536*Math.ceil(Math.max(a,c)/65536))-y.buffer.byteLength+65535)/65536|0;try{y.grow(c);fa();var f=
1;break a}catch(u){}f=void 0}if(f)return!0}return!1},n:function(){return t.byteLength},i:function(){return"undefined"!==typeof WebAssembly.Suspending},f:function(a,b){const d=v.length;v.push(U.decode(new Uint8Array(t,a,b)));return d},e:function(a){const b=v.length;v.push(new Uint8Array(a));return b},d:function(a,b,d){z.set(new Uint8Array(t,b,d),a)},g:function(a,b,d,c){v[a].set(new Uint8Array(t,d,c),b)},l:function(a,b,d,c){v[a].set(new Uint8Array(z.buffer,b,c),d)},a:function(a){t=v=null;setTimeout(x,
20);const b=w(),d=document.createElement("div");d.setAttribute("style","z-index:100;position:absolute;top:10%;left:10%;right:10%;bottom:10%;background-color:white;border:2px solid #cccccc;overflow-x:hidden;overflow-y:scroll;");d.classList.add("_eaglercraftX_loader_failed_container");a=a?W(a):"";console.error("LoaderMain: [FAILED] "+a);const c=document.createElement("h2");c.style.color="#AA0000";c.style.padding="25px";c.style.fontFamily="sans-serif";c.style.marginBlock="0px";c.appendChild(document.createTextNode(a));
d.appendChild(c);a=document.createElement("h4");a.style.color="#AA0000";a.style.padding="25px";a.style.fontFamily="sans-serif";a.style.marginBlock="0px";a.appendChild(document.createTextNode("Try again later"));d.appendChild(a);b.appendChild(d)},h:function(a){var b=a>>2;a=v[A[b]];var d=v[A[b+1]];a=a?URL.createObjectURL(new Blob([a],{type:d||"image/png"})):null;b=(b=v[A[b+2]])?U.decode(b):"<h1>Failed to load error screen</h1>";t=v=null;setTimeout(x,20);d=w();var c=document.createElement("img");c.setAttribute("style",
"z-index:100;position:absolute;top:10px;left:calc(50% - 151px);");c.src=a;d.appendChild(c);a=document.createElement("div");a.setAttribute("style","z-index:100;position:absolute;top:135px;left:10%;right:10%;bottom:50px;background-color:white;border:2px solid #cccccc;");a.classList.add("_eaglercraftX_jspi_unsupported_container");c=document.createElement("iframe");c.classList.add("_eaglercraftX_jspi_unsupported_frame");c.setAttribute("style","border:none;width:100%;height:100%;");c.srcdoc=b;a.appendChild(c);
d.appendChild(a)},m:function(a){a>>=2;const b=URL.createObjectURL(new Blob([v[A[a]]],{type:"text/javascript;charset=utf-8"})),d=URL.createObjectURL(new Blob([v[A[a+1]]],{type:"application/wasm"})),c=URL.createObjectURL(new Blob([v[A[a+2]]],{type:"application/octet-stream"})),f=URL.createObjectURL(new Blob([v[A[a+3]]],{type:"application/wasm"})),u=URL.createObjectURL(new Blob([v[A[a+4]]],{type:v[A[a+5]]})),m=URL.createObjectURL(new Blob([v[A[a+6]]],{type:v[A[a+7]]})),V=URL.createObjectURL(new Blob([v[A[a+
8]]],{type:v[A[a+9]]})),I=A[a+10],q=Array(I);for(var h=0,l;h<I;++h)l=a+11+3*h,q[h]={data:v[A[l]],name:v[A[l+1]],path:v[A[l+2]]};t=v=null;setTimeout(x,20);window.__eaglercraftXLoaderContext={getEaglercraftXOpts:function(){return ca},getEagRuntimeJSURL:function(){return b},getClassesWASMURL:function(){return d},getClassesDeobfWASMURL:function(){return f},getClassesTEADBGURL:function(){return c},getEPKFiles:function(){return q},getRootElement:function(){return r},getMainArgs:function(){return[]},getImageURL:function(p){switch(p){case 0:return da;
case 1:return u;case 2:return m;case 3:return V;default:return null}},runMain:function(p){setTimeout(p,10)}};a=document.createElement("script");a.type="text/javascript";a.src=b;document.head.appendChild(a)}},X=function(){function a(d){X=d.exports;y=X.o;fa();ia.unshift(X.p);P--;e.monitorRunDependencies?.(P);0==P&&(null!==Q&&(clearInterval(Q),Q=null),R&&(d=R,R=null,d()));return X}P++;e.monitorRunDependencies?.(P);var b={a:ua};if(e.instantiateWasm)try{return e.instantiateWasm(b,a)}catch(d){return M(`Module.instantiateWasm callback failed with error: ${d}`),
!1}S??=ma("loader.wasm")?"loader.wasm":e.locateFile?e.locateFile("loader.wasm",G):G+"loader.wasm";qa(b,function(d){a(d.instance)});return{}}(),va=e._main=(a,b)=>(va=e._main=X.q)(a,b),Y=a=>(Y=X.s)(a),Z;R=function wa(){Z||xa();Z||(R=wa)};
function ya(a=[]){var b=va;a.unshift(E);var d=a.length,c=Y(4*(d+1)),f=c;a.forEach(m=>{for(var V=B,I=f>>2,q=0,h=0;h<m.length;++h){var l=m.charCodeAt(h);127>=l?q++:2047>=l?q+=2:55296<=l&&57343>=l?(q+=4,++h):q+=3}var p=q+1;h=q=Y(p);l=z;if(0<p){p=h+p-1;for(var K=0;K<m.length;++K){var n=m.charCodeAt(K);if(55296<=n&&57343>=n){var Aa=m.charCodeAt(++K);n=65536+((n&1023)<<10)|Aa&1023}if(127>=n){if(h>=p)break;l[h++]=n}else{if(2047>=n){if(h+1>=p)break;l[h++]=192|n>>6}else{if(65535>=n){if(h+2>=p)break;l[h++]=
224|n>>12}else{if(h+3>=p)break;l[h++]=240|n>>18;l[h++]=128|n>>12&63}l[h++]=128|n>>6&63}l[h++]=128|n&63}}l[h]=0}V[I]=q;f+=4});B[f>>2]=0;try{var u=b(d,c);ta(u)}catch(m){m instanceof ra||"unwind"==m||F(1,m)}}
function xa(){var a=D;function b(){if(!Z&&(Z=!0,e.calledRun=!0,!O)){T(ia);T(ja);e.onRuntimeInitialized?.();za&&ya(a);if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var d=e.postRun.shift();ka.unshift(d)}T(ka)}}if(!(0<P)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)la();T(ha);0<P||(e.setStatus?(e.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>e.setStatus(""),1);b()},1)):b())}}
if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();var za=!0;e.noInitialRun&&(za=!1);xa();}).call(this);