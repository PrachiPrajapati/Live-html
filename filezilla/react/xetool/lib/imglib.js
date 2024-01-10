(function(){function t(t){if(t=t||{},this.method=t.method||2,this.colors=t.colors||256,this.width=1e3,this.height=1e3,this.initColors=t.initColors||4096,this.initDist=t.initDist||.02,this.distIncr=t.distIncr||.01,this.hueGroups=t.hueGroups||10,this.satGroups=t.satGroups||10,this.lumGroups=t.lumGroups||10,this.minHueCols=t.minHueCols||10,this.hueStats=this.minHueCols?new e(this.hueGroups,this.minHueCols):null,this.boxSize=t.boxSize||[64,64],this.boxPxls=t.boxPxls||10,this.palLocked=!1,this.dithKern=t.ditherKern||null,this.dithSerp=t.dithSerp||!1,this.dithDelta=t.dithDelta||0,this.histogram={},this.idxrgb=t.palette?t.palette.slice(0):[],this.idxi32=[],this.i32idx={},this.i32rgb={},this.idxhex=[],this.reduceOut32,this.useCache=!1!==t.useCache,this.cacheFreq=t.cacheFreq||10,this.reIndex=t.reIndex||0==this.idxrgb.length,this.colorDist="manhattan"==t.colorDist?s:i,this.averageRGB={r:255,g:255,b:255},0<this.idxrgb.length){var a=this;this.idxrgb.forEach(function(t,e){var i=(255<<24|t[2]<<16|t[1]<<8|t[0])>>>0;a.idxi32[e]=i,a.i32idx[i]=e,a.i32rgb[i]=t,a.idxhex[e]=function(t,e,i){return n(t)+n(e)+n(i)}(t[0],t[1],t[2])})}}function n(t){var e=t.toString(16);return 1==e.length?"0"+e:e}function a(t,e){return t.length&&e.length?a(t.slice(2),e.slice(2))+Math.abs(parseInt(t.slice(0,2),16)-parseInt(e.slice(0,2),16)):16777215}function e(t,e){this.numGroups=t,this.minCols=e,this.stats={};for(var i=-1;i<t;i++)this.stats[i]={num:0,cols:[]};this.groupsFull=0}t.prototype.sample=function(t,e){if(this.palLocked)throw"Cannot sample additional images, palette already assembled.";var i=X(t,e,this);switch(this.averageRGB=i.avgRGB,this.method){case 1:this.colorStats1D(i.buf32);break;case 2:this.colorStats2D(i.buf32,i.width)}},t.prototype.reduce=function(t,e,i,a){if(this.palLocked||this.buildPal(),i=i||this.dithKern,a=void 0!==a?a:this.dithSerp,e=e||1,i)var n=this.dither(t,i,a);else{var r=X(t).buf32,o=r.length,s=(n=new Uint32Array(o),0);!function t(e){for(;s<o;s++){var i=r[s];n[s]=e.nearestColor(i),s+1<o&&s%100==0&&setTimeout(t,2)}}(this)}if(this.reduceOut32=n,1==e)return new Uint8Array(n.buffer);if(2==e){var h=[];for(o=n.length,s=0;s<o;s++){var u=n[s];h[s]=this.i32idx[u]}return h}},t.prototype.replaceColor=function(t,e){for(var i=(255<<24)+(e.b<<16)+(e.g<<8)+e.r,a=this.reduceOut32[0],n=0;n<this.reduceOut32.length;n++)this.reduceOut32[n]==a&&(this.reduceOut32[n]=i);return new Uint8Array(this.reduceOut32.buffer)},t.prototype.dither=function(t,e,i){var a={FloydSteinberg:[[7/16,1,0],[3/16,-1,1],[5/16,0,1],[1/16,1,1]],FalseFloydSteinberg:[[3/8,1,0],[3/8,0,1],[.25,1,1]],Stucki:[[8/42,1,0],[4/42,2,0],[2/42,-2,1],[4/42,-1,1],[8/42,0,1],[4/42,1,1],[2/42,2,1],[1/42,-2,2],[2/42,-1,2],[4/42,0,2],[2/42,1,2],[1/42,2,2]],Atkinson:[[1/8,1,0],[1/8,2,0],[1/8,-1,1],[1/8,0,1],[1/8,1,1],[1/8,0,2]],Jarvis:[[7/48,1,0],[5/48,2,0],[3/48,-2,1],[5/48,-1,1],[7/48,0,1],[5/48,1,1],[3/48,2,1],[1/48,-2,2],[3/48,-1,2],[5/48,0,2],[3/48,1,2],[1/48,2,2]],Burkes:[[.25,1,0],[.125,2,0],[2/32,-2,1],[.125,-1,1],[.25,0,1],[.125,1,1],[2/32,2,1]],Sierra:[[5/32,1,0],[3/32,2,0],[2/32,-2,1],[.125,-1,1],[5/32,0,1],[.125,1,1],[2/32,2,1],[2/32,-1,2],[3/32,0,2],[2/32,1,2]],TwoSierra:[[.25,1,0],[3/16,2,0],[1/16,-2,1],[.125,-1,1],[3/16,0,1],[.125,1,1],[1/16,2,1]],SierraLite:[[.5,1,0],[.25,-1,1],[.25,0,1]]};if(!e||!a[e])throw"Unknown dithering kernel: "+e;for(var n=a[e],r=X(t),o=r.buf32,s=r.width,h=r.height,u=(o.length,i?-1:1),c=0;c<h;c++){i&&(u*=-1);for(var d=c*s,l=1==u?0:s-1,f=1==u?s:0;l!==f;l+=u){var p=d+l,m=o[p],g=255&m,b=(65280&m)>>8,v=(16711680&m)>>16,x=this.nearestColor(m),w=255&x,y=(65280&x)>>8,k=(16711680&x)>>16;if(o[p]=255<<24|k<<16|y<<8|w,this.dithDelta)if(this.colorDist([g,b,v],[w,y,k])<this.dithDelta)continue;for(var C=g-w,I=b-y,A=v-k,S=1==u?0:n.length-1,M=1==u?n.length:0;S!==M;S+=u){var T=n[S][1]*u,_=n[S][2],P=_*s;if(0<=T+l&&T+l<s&&0<=_+c&&_+c<h){var U=n[S][0],E=p+(P+T),z=255&o[E],D=(65280&o[E])>>8,B=(16711680&o[E])>>16,G=Math.max(0,Math.min(255,z+C*U)),O=Math.max(0,Math.min(255,D+I*U)),j=Math.max(0,Math.min(255,B+A*U));o[E]=255<<24|j<<16|O<<8|G}}}}return o},t.prototype.buildPal=function(){if(!(this.palLocked||0<this.idxrgb.length&&this.idxrgb.length<=this.colors)){var t=this.histogram,e=function(i,a){var t=[];for(var e in i)t.push(e);return w.call(t,function(t,e){return a?i[e]-i[t]:i[t]-i[e]})}(t,!0);if(0==e.length)throw"Nothing has been sampled, palette cannot be built.";switch(this.method){case 1:for(var i=this.initColors,a=t[e[i-1]],n=e.slice(0,i),r=i,o=e.length;r<o&&t[e[r]]==a;)n.push(e[r++]);this.hueStats&&this.hueStats.inject(n);break;case 2:n=e}n=n.map(function(t){return+t}),this.reducePal(n),this.useCache&&this.cacheHistogram(n),this.palLocked=!0}},t.prototype.palette=function(t,e){return this.buildPal(e),t?this.idxrgb:new Uint8Array(new Uint32Array(this.idxi32).buffer)},t.prototype.prunePal=function(t){for(var e,i=0;i<this.idxrgb.length;i++)t[i]||(e=this.idxi32[i],this.idxrgb[i]=null,this.idxi32[i]=null,delete this.i32idx[e]);if(this.reIndex){for(var a=[],n=[],r={},o=(i=0,0);i<this.idxrgb.length;i++)this.idxrgb[i]&&(e=this.idxi32[i],a[o]=this.idxrgb[i],n[r[e]=o]=e,o++);this.idxrgb=a,this.idxi32=n,this.i32idx=r}},t.prototype.reducePal=function(t){if(this.idxrgb.length>this.colors){for(var e,i=t.length,a={},n=0,r=!1,o=0;o<i;o++)n!=this.colors||r||(this.prunePal(a),r=!0),e=this.nearestIndex(t[o]),n<this.colors&&!a[e]&&(a[e]=!0,n++);r||(this.prunePal(a),r=!0)}else{var s=t.map(function(t){return[255&t,(65280&t)>>8,(16711680&t)>>16]}),h=i=s.length,u=this.initDist;if(h>this.colors){for(;h>this.colors;){var c=[];for(o=0;o<i;o++){var d=s[o];t[o];if(d)for(var l=o+1;l<i;l++){var f=s[l],p=t[l];if(f){var m=this.colorDist(d,f);m<u&&(c.push([l,f,p,m]),delete s[l],h--)}}}u+=h>3*this.colors?this.initDist:this.distIncr}if(h<this.colors){w.call(c,function(t,e){return e[3]-t[3]});for(var g=0;h<this.colors;)s[c[g][0]]=c[g][1],h++,g++}}for(i=s.length,o=0;o<i;o++)s[o]&&(this.idxrgb.push(s[o]),this.idxi32.push(t[o]),this.i32idx[t[o]]=this.idxi32.length-1,this.i32rgb[t[o]]=s[o])}},t.prototype.colorStats1D=function(t){for(var e,i=this.histogram,a=t.length,n=0;n<a;n++)(4278190080&(e=t[n]))>>24!=0&&(this.hueStats&&this.hueStats.check(e),e in i?i[e]++:i[e]=1)},t.prototype.colorStats2D=function(n,r){var t=this.boxSize[0],e=this.boxSize[1],o=t*e,i=function(t,e,i,a){for(var n=t%i,r=e%a,o=t-n,s=e-r,h=[],u=0;u<e;u+=a)for(var c=0;c<t;c+=i)h.push({x:c,y:u,w:c==o?n:i,h:u==s?r:a});return h}(r,n.length/r,t,e),s=this.histogram,h=this;i.forEach(function(t){var e,i=Math.max(Math.round(t.w*t.h/o)*h.boxPxls,2),a={};!function(t,e,i){for(var a=t,n=a.y*e+a.x,r=(a.y+a.h-1)*e+(a.x+a.w-1),o=0,s=e-a.w+1,h=n;i.call(this,h),(h+=++o%a.w==0?s:1)<=r;);}(t,r,function(t){(4278190080&(e=n[t]))>>24!=0&&(h.hueStats&&h.hueStats.check(e),e in s?s[e]++:e in a?++a[e]>=i&&(s[e]=a[e]):a[e]=1)})}),this.hueStats&&this.hueStats.inject(s)},t.prototype.sortPal=function(){var l=this;this.idxi32.sort(function(t,e){var i=l.i32idx[t],a=l.i32idx[e],n=l.idxrgb[i],r=l.idxrgb[a],o=p(n[0],n[1],n[2]),s=p(r[0],r[1],r[2]),h=n[0]==n[1]&&n[1]==n[2]?-1:m(o.h,l.hueGroups),u=(r[0]==r[1]&&r[1]==r[2]?-1:m(s.h,l.hueGroups))-h;if(u)return-u;var c=b(+s.l.toFixed(2))-b(+o.l.toFixed(2));if(c)return-c;var d=g(+s.s.toFixed(2))-g(+o.s.toFixed(2));return d?-d:void 0}),this.idxi32.forEach(function(t,e){l.idxrgb[e]=l.i32rgb[t],l.i32idx[t]=e})},t.prototype.nearestColor=function(t){var e=this.nearestIndex(t);return null===e?0:this.idxi32[e]},t.prototype.nearestIndex=function(t){if((4278190080&t)>>24==0)return null;if(this.useCache&&""+t in this.i32idx)return this.i32idx[t];for(var e,i=100,a=[255&t,(65280&t)>>8,(16711680&t)>>16],n=this.idxrgb.length,r=0;r<n;r++)if(this.idxrgb[r]){var o=this.colorDist(a,this.idxrgb[r]);o<i&&(i=o,e=r)}return e},Array.closest=function(t,i){return t.sort(function(t,e){return a(t,i)-a(e,i)})},t.prototype.cacheHistogram=function(t){for(var e=0,i=t[e];e<t.length&&this.histogram[i]>=this.cacheFreq;i=t[e++])this.i32idx[i]=this.nearestIndex(i)},e.prototype.check=function(t){this.groupsFull==this.numGroups+1&&(this.check=function(){});var e=255&t,i=(65280&t)>>8,a=(16711680&t)>>16,n=e==i&&i==a?-1:m(p(e,i,a).h,this.numGroups),r=this.stats[n],o=this.minCols;r.num++,r.num>o||(r.num==o&&this.groupsFull++,r.num<=o&&this.stats[n].cols.push(t))},e.prototype.inject=function(e){for(var t=-1;t<this.numGroups;t++)if(this.stats[t].num<=this.minCols)switch(v(e)){case"Array":this.stats[t].cols.forEach(function(t){-1==e.indexOf(t)&&e.push(t)});break;case"Object":this.stats[t].cols.forEach(function(t){e[t]?e[t]++:e[t]=1})}};var h=.299,u=.587,c=.114;var o,d,l,f;function i(t,e){var i=e[0]-t[0],a=e[1]-t[1],n=e[2]-t[2],r=this.averageRGB.r+this.averageRGB.g+this.averageRGB.b;return d||(d=(this.averageRGB.r/r).toFixed(3),l=(this.averageRGB.g/r).toFixed(3),f=(this.averageRGB.b/r).toFixed(3)),o=o||Math.sqrt(255*d*255+255*l*255+255*f*255),Math.sqrt(d*i*i+l*a*a+f*n*n)/o}var r=255*h+255*u+255*c;function s(t,e){var i=Math.abs(e[0]-t[0]),a=Math.abs(e[1]-t[1]),n=Math.abs(e[2]-t[2]);return(h*i+u*a+c*n)/r}function p(t,e,i){var a,n,r,o,s;if(t/=255,e/=255,i/=255,(a=Math.max(t,e,i))==(n=Math.min(t,e,i)))r=o=0;else{switch(s=a-n,o=.5<(a+n)/2?s/(2-a-n):s/(a+n),a){case t:r=(e-i)/s+(e<i?6:0);break;case e:r=(i-t)/s+2;break;case i:r=(t-e)/s+4}r/=6}return{h:r,s:o,l:function(t,e,i){return d?Math.sqrt(d*t*t+l*e*e+f*i*i):Math.sqrt(h*t*t+u*e*e+c*i*i)}(t,e,i)}}function m(t,e){var i=1/e,a=i/2;if(1-a<=t||t<=a)return 0;for(var n=1;n<e;n++){var r=n*i;if(r-a<=t&&t<=r+a)return n}}function g(t){return t}function b(t){return t}function v(t){return Object.prototype.toString.call(t).slice(8,-1)}var x,w="xyzvwtursopqmnklhijfgdeabc"==(x="abcdefghijklmnopqrstuvwxyz").split("").sort(function(t,e){return~~(x.indexOf(e)/2.3)-~~(x.indexOf(t)/2.3)}).join("")?Array.prototype.sort:function(i){var t=v(this[0]);{if("Number"==t||"String"==t){for(var e,a={},n=this.length,r=0;r<n;r++)e=this[r],a[e]||0===a[e]||(a[e]=r);return this.sort(function(t,e){return i(t,e)||a[t]-a[e]})}a=this.map(function(t){return t});return this.sort(function(t,e){return i(t,e)||a.indexOf(t)-a.indexOf(e)})}};function X(t,e,i){var a,n,r,o,s,h,u;switch(v(t)){case"HTMLImageElement":MAX_VALUE=2e3,(a=document.createElement("canvas")).width=t.naturalWidth,a.height=t.naturalHeight;var c=a.width/a.height;a.width<1e3&&(a.width=1e3,a.height=1e3/c),a.height<1e3&&(a.width=1e3*c,a.height=1e3),a.width>MAX_VALUE&&(a.width=MAX_VALUE,a.height=MAX_VALUE/c),a.height>MAX_VALUE&&(a.width=MAX_VALUE*c,a.height=MAX_VALUE),n=a.getContext("2d"),null!=i&&(i.width=a.width,i.height=a.height),n.clearRect(0,0,a.width,a.height),n.drawImage(t,0,0,t.naturalWidth,t.naturalHeight,0,0,a.width,a.height),I(n.getImageData(0,0,a.width,a.height)),n.drawImage(t,0,0,t.naturalWidth,t.naturalHeight,0,0,a.width,a.height),u=I(n.getImageData(0,0,a.width,a.height));case"Canvas":case"HTMLCanvasElement":a=a||t,n=n||a.getContext("2d");case"CanvasRenderingContext2D":n=n||t,a=a||n.canvas,r=n.getImageData(0,0,a.width,a.height);case"ImageData":e=(r=r||t).width,o="CanvasPixelArray"==v(r.data)?new Uint8Array(r.data):r.data;case"Array":case"CanvasPixelArray":o=o||new Uint8Array(t);case"Uint8Array":case"Uint8ClampedArray":o=o||t,s=new Uint32Array(o.buffer);case"Uint32Array":s=s||t,o=o||new Uint8Array(s.buffer),e=e||s.length,h=s.length/e}return{can:a,ctx:n,imgd:r,buf8:o,buf32:s,width:e,height:h,avgRGB:u}}var y=0,k={r:0,g:0,b:0},C=5;function I(t){for(var e=0;(e+=4*C)<t.data.length;)++y,k.r+=t.data[e],k.g+=t.data[e+1],k.b+=t.data[e+2];return k.r=~~(k.r/y),k.g=~~(k.g/y),k.b=~~(k.b/y),y=0,k}this.RgbQuant=t,"undefined"!=typeof module&&module.exports&&(module.exports=t)}).call(this),MagicWand=function(){var t={};return t.floodFill=function(t,e,i,a,n){var r,o,s,h,u,c,d,l,f,p,m=t.data,g=t.width,b=t.height,v=t.bytes,x=-1,w=g+1,y=-1,k=b+1,C=i*g+e,I=new Uint8Array(g*b),A=new Uint8Array(n||g*b);if(1===A[C])return null;var S=[m[C*=v],m[C+1],m[C+2],m[C+3]],M=[{y:i,left:e-1,right:e+1,dir:1}];do{for(p=!1,o=(h=M.shift()).left+1;o<h.right;o++)if(C=((d=h.y*g)+o)*v,1!==A[d+o]&&!(a<(r=m[C]-S[0])||r<-a||a<(r=m[C+1]-S[1])||r<-a||a<(r=m[C+2]-S[2])||r<-a)){for(p=!0,I[d+o]=1,c=o-(A[d+o]=1);-1<c&&(C=(l=d+c)*v,1!==A[l])&&!(a<(r=m[C]-S[0])||r<-a)&&!(a<(r=m[C+1]-S[1])||r<-a)&&!(a<(r=m[C+2]-S[2])||r<-a);)I[l]=1,A[l]=1,c--;for(u=o+1;u<g&&(C=(f=d+u)*v,1!==A[f])&&!(a<(r=m[C]-S[0])||r<-a)&&!(a<(r=m[C+1]-S[1])||r<-a)&&!(a<(r=m[C+2]-S[2])||r<-a);)I[f]=1,A[f]=1,u++;c<w&&(w=c+1),x<u&&(x=u-1),0<=(s=h.y-h.dir)&&s<b&&(c<h.left&&M.push({y:s,left:c,right:h.left,dir:-h.dir}),h.right<u&&M.push({y:s,left:h.right,right:u,dir:-h.dir})),0<=(s=h.y+h.dir)&&s<b&&c<u&&M.push({y:s,left:c,right:u,dir:h.dir})}p&&(h.y<k&&(k=h.y),h.y>y&&(y=h.y))}while(0<M.length);return{data:I,width:t.width,height:t.height,bounds:{minX:w,minY:k,maxX:x,maxY:y}}},t.gaussBlur=function(t,e){for(var i,a,n,r,o,s,h=2*e+1,u=e*e,c=new Float32Array(h),d=0,l=t.width,f=t.height,p=t.data,m=t.bounds.minX,g=t.bounds.maxX,b=t.bounds.minY,v=t.bounds.maxY,x=0;x<e;x++){var w=(e-x)*(e-x),y=Math.exp(-w/(2*u))/(2*Math.PI*u);c[e+x]=c[e-x]=y,d+=2*y}for(x=0;x<h;x++)c[x]/=d;var k=new Uint8Array(l*f),C=e+l,I=e+f;for(r=b;r<v+1;r++)for(n=m;n<g+1;n++){for(s=C-n<h?C-n:h,a=(i=r*l+n)-e,x=(o=0)<e-n?e-n:0;x<s;x++)o+=p[a+x]*c[x];for(s=I-r<h?I-r:h,a=i-e*l,x=0<e-r?e-r:0;x<s;x++)o+=p[a+x*l]*c[x];k[i]=.5<o?1:0}return{data:k,width:l,height:f,bounds:{minX:m,minY:b,maxX:g,maxY:v}}},t.gaussBlurOnlyBorder=function(t,e,i){for(var a,n,r,o,s,h,u,c,d,l=function(t,e,i){var a,n,r,o,s,h,u,c=t.width,d=t.height,l=t.data,f=new Uint8Array(l),p=t.bounds.minX,m=t.bounds.maxX,g=t.bounds.minY,b=t.bounds.maxY,v=c*d,x=new Uint8Array(v),w=[],y=Math.max(p,1),k=Math.min(m,c-2),C=Math.max(g,1),I=Math.min(b,d-2);if(i&&0<i.length)for(s=0;s<v;s++)1===i[s]&&(f[s]=1);for(o=C;o<I+1;o++)for(a=y;a<k+1;a++)0!==l[s=o*c+a]&&(h=s+c,u=s-c,0!==f[s+1]&&0!==f[s-1]&&0!==f[h]&&0!==f[h+1]&&0!==f[h-1]&&0!==f[u]&&0!==f[u+1]&&0!==f[u-1]||w.push(s));if(0==p)for(o=g;o<b+1;o++)1===l[o*c]&&w.push(o*c);if(m==c-1)for(o=g;o<b+1;o++)1===l[o*c+m]&&w.push(o*c+m);if(0==g)for(a=p;a<m+1;a++)1===l[a]&&w.push(a);if(b==d-1)for(a=p;a<m+1;a++)1===l[b*c+a]&&w.push(b*c+a);var A,S=[],M=e+c,T=e+d,_=2*e+1;for(v=w.length,r=0;r<v;r++){for(x[s=w[r]]=1,S.push(s),o=(s-(a=s%c))/c,A=M-a<_?M-a:_,h=s-e,n=0<e-a?e-a:0;n<A;n++)0===x[u=h+n]&&(x[u]=1,S.push(u));for(A=T-o<_?T-o:_,h=s-e*c,n=0<e-o?e-o:0;n<A;n++)0===x[u=h+n*c]&&(x[u]=1,S.push(u))}return S}(t,e,i),f=2*e+1,p=2*e*e,m=new Float32Array(f),g=0,b=t.width,v=t.height,x=t.data,w=t.bounds.minX,y=t.bounds.maxX,k=t.bounds.minY,C=t.bounds.maxY,I=l.length,A=0;A<e;A++)n=(e-A)*(e-A),a=Math.exp(-n/p)/Math.PI,m[e+A]=m[e-A]=a,g+=2*a;for(A=0;A<f;A++)m[A]/=g;var S=new Uint8Array(x),M=e+b,T=e+v;for(A=0;A<I;A++){for(u=((o=l[A])-(h=o%b))/b,d=M-h<f?M-h:f,s=o-e,r=(c=0)<e-h?e-h:0;r<d;r++)c+=x[s+r]*m[r];if(.5<c)S[o]=1,h<w&&(w=h),y<h&&(y=h),u<k&&(k=u),C<u&&(C=u);else{for(d=T-u<f?T-u:f,s=o-e*b,r=0<e-u?e-u:0;r<d;r++)c+=x[s+r*b]*m[r];.5<c?(S[o]=1,h<w&&(w=h),y<h&&(y=h),u<k&&(k=u),C<u&&(C=u)):S[o]=0}}return{data:S,width:b,height:v,bounds:{minX:w,minY:k,maxX:y,maxY:C}}},t.createBorderMask=function(t){for(var e,i,a,n,r=t.width,o=t.height,s=t.data,h=t.bounds.minX,u=t.bounds.maxX,c=t.bounds.minY,d=t.bounds.maxY,l=u-h+1,f=d-c+1,p=new Uint8Array(l*f),m=Math.max(h,1),g=Math.min(u,r-2),b=Math.max(c,1),v=Math.min(d,o-2),x=b;x<v+1;x++)for(e=m;e<g+1;e++)0!==s[i=x*r+e]&&(a=i+r,n=i-r,0!==s[i+1]&&0!==s[i-1]&&0!==s[a]&&0!==s[a+1]&&0!==s[a-1]&&0!==s[n]&&0!==s[1+n]&&0!==s[n-1]||(p[(x-c)*l+(e-h)]=1));if(0==h)for(x=c;x<d+1;x++)1===s[x*r]&&(p[(x-c)*l]=1);if(u==r-1)for(x=c;x<d+1;x++)1===s[x*r+u]&&(p[(x-c)*l+(u-h)]=1);if(0==c)for(e=h;e<u+1;e++)1===s[e]&&(p[e-h]=1);if(d==o-1)for(e=h;e<u+1;e++)1===s[d*r+e]&&(p[(d-c)*l+(e-h)]=1);return{data:p,width:l,height:f,offset:{x:h,y:c}}},t.getBorderIndices=function(t){for(var e,i,a,n,r=t.width,o=t.height,s=t.data,h=[],u=r-1,c=o-1,d=1;d<c;d++)for(e=1;e<u;e++)0!==s[i=d*r+e]&&(a=i+r,n=i-r,0!==s[i+1]&&0!==s[i-1]&&0!==s[a]&&0!==s[a+1]&&0!==s[a-1]&&0!==s[n]&&0!==s[1+n]&&0!==s[n-1]||h.push(i));for(d=0;d<o;d++)1===s[d*r]&&h.push(d*r);for(e=0;e<r;e++)1===s[e]&&h.push(e);for(i=r-1,d=0;d<o;d++)1===s[d*r+i]&&h.push(d*r+i);for(i=(o-1)*r,e=0;e<r;e++)1===s[i+e]&&h.push(i+e);return h},t.traceContours=function(t){for(var e,i,a,n,r,o,s,h,u,c,d,l,f,p,m=function(t){for(var e,i=t.width,a=t.data,n=t.bounds.minX,r=t.bounds.maxX,o=t.bounds.minY,s=t.bounds.maxY,h=r-n+3,u=s-o+3,c=new Uint8Array(h*u),d=o;d<s+1;d++)for(e=n;e<r+1;e++)1===a[d*i+e]&&(c[(d-o+1)*h+(e-n+1)]=1);return{data:c,width:h,height:u,offset:{x:n-1,y:o-1}}}(t),g=[],b=0,v=m.width,x=2*v,w=m.height,y=m.data,k=m.offset.x,C=m.offset.y,I=new Uint8Array(y),A=[[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1],[0,-1],[1,-1]],S=1;S<w-1;S++)for(a=1;a<v-1;a++)if(1===y[n=S*v+a])for(e=-v;e<x;e+=x)if(0===y[n+e]&&0===I[n+e]){for(b++,o=[],h=(s=e===v)?2:6,d=l=u={x:a,y:S},c=null;;){for(I[d.y*v+d.x]=b,i=0;i<8;i++){if(p=A[h=(h+1)%8],1===y[r=(f={x:d.x+p[0],y:d.y+p[1]}).y*v+f.x]){I[r]=b;break}I[r]=-1,f=null}if(null===f)break;if(d=f,c){if(l.x===u.x&&l.y===u.y&&d.x===c.x&&d.y===c.y)break}else c=f;o.push({x:l.x+k,y:l.y+C}),l=d,h=(h+4)%8}null!=f&&(o.push({x:u.x+k,y:u.y+C}),g.push({inner:s,label:b,points:o}))}return g},t.simplifyContours=function(t,e,i){for(var a,n,r,o,s,h,u,c,d,l,f,p,m,g,b,v,x,w,y,k,C=t.length,I=[],A=0;A<C;A++)if(o=(r=t[A]).points,(s=r.points.length)<i){for(h=[],n=0;n<s;n++)h.push({x:o[n].x,y:o[n].y});I.push({inner:r.inner,label:r.label,points:h,initialCount:s})}else{u=[0,s-1],c=[{first:0,last:s-1}];do{if(!((d=c.shift()).last<=d.first+1)){for(l=-1,f=d.first,a=d.first+1;a<d.last;a++)w=o[a],y=o[d.first],k=o[d.last],v=w.x-y.x,x=w.y-y.y,m=Math.sqrt(v*v+x*x),v=w.x-k.x,x=w.y-k.y,g=Math.sqrt(v*v+x*x),v=y.x-k.x,x=y.y-k.y,b=Math.sqrt(v*v+x*x),l<(p=m>=Math.sqrt(g*g+b*b)?g:g>=Math.sqrt(m*m+b*b)?m:Math.abs((x*w.x-v*w.y+y.x*k.y-k.x*y.y)/b))&&(f=a,l=p);e<l&&(u.push(f),c.push({first:d.first,last:f}),c.push({first:f,last:d.last}))}}while(0<c.length);for(h=[],s=u.length,u.sort(function(t,e){return t-e}),n=0;n<s;n++)h.push({x:o[u[n]].x,y:o[u[n]].y});I.push({inner:r.inner,label:r.label,points:h,initialCount:r.points.length})}return I},t}(),function(C){C.fn.FacebookAlbumBrowser=function(t){var x=C.extend({},{account:"",accessToken:"",showAccountInfo:!1,showImageCount:!0,skipEmptyAlbums:!0,showComments:!1,commentsLimit:0,skipAlbums:[],includeAlbums:[],onlyAlbum:null,thumbnailSize:130,showAlbumNameInPreview:!0,lightbox:!1,photosCheckbox:!1,albumSelected:null,photoSelected:null,photoChecked:null,photoUnchecked:null,showImageText:!1,likeButton:!1,shareButton:!1,addThis:null,pluginImagesPath:"./assets/images/facebook/",albumsPageSize:0,albumsMoreButtonText:"more albums...",photosPageSize:0,photosMoreButtonText:"Load more",checkedPhotos:[]},t),w=C(this),y="https://graph.facebook.com/",k="&fields=id,created_time,from,height,icon,images,link,name,picture,updated_time,width,source";return w.each(function(t){var h=w.get(t),e="";x.showAccountInfo&&function(e){var t=C("<div>",{class:"fb-account-info"}),i=C("<a>",{target:"_blank",href:""});t.append(i),i.append(C("<img>",{src:y+x.account+"/picture?type=square"})),i.append(C("<h3>",{class:"fb-account-heading"})),C(e).append(t);var a=y+x.account;""!=x.accessToken&&(a+="?access_token="+x.accessToken);C.ajax({type:"GET",url:a,cache:!1,dataType:"jsonp",success:function(t){C(e).find(".fb-account-info").find(".fb-account-heading").text(t.name),C(e).find(".fb-account-info").find("a").attr("href","http://facebook.com/"+(t.username?t.username:t.id))}})}(h),null==x.onlyAlbum?(C(h).append(C("<ul>",{class:"fb-albums",style:"min-height:"+x.thumbnailSize+"px !important"})),e=y+x.account+"/albums",""!=x.accessToken&&(e+="?access_token="+x.accessToken+"&fields=id,count,cover_photo,created_time,from,link,name,type,updated_time")):(e=y+x.onlyAlbum+"/photos",""!=x.accessToken&&(e+="?access_token="+x.accessToken+k));var u=C(h).find(".fb-albums");function p(t,f){C(f).addClass("fb-loading-image");var e=f.parent();if(f.hasClass("fb-album-container")&&(e=f),0==e.find(".fb-photo").length){var n=e.find("img.fb-albums-list"),r=C("<h3>",{class:"fb-album-heading",text:""});0<n.length?n.after(r):0<(n=e.find(".fb-account-info")).length?(n.after(r),r.addClass("fb-album-heading-single")):e.prepend(r),null==x.onlyAlbum&&e.find("img.fb-albums-list,h3.fb-album-heading").click(function(){e.fadeOut(function(){C(w).find(".fb-albums").fadeIn(function(){0<x.albumsPageSize&&0<C(w).find("li.fb-album:hidden").length&&C(w).find("div.fb-albums-more").show()}),e.remove()})}),x.showAlbumNameInPreview&&C.ajax({type:"GET",url:t.replace("/photos","/").replace(k,"&fields=name"),cache:!1,dataType:"jsonp",success:function(t){null!=t&&e.find(".fb-album-heading").text(t.name)}})}C.ajax({type:"GET",url:t,cache:!1,dataType:"jsonp",success:function(t){if(0<t.data.length){if(x.showComments,null!=x.photosPageSize&&0<x.photosPageSize){var e=C(f).parent().find(".fb-btn-more");0==e.length&&(e=C("<div>",{class:"fb-btn-more fb-photos-more",text:x.photosMoreButtonText}),C(f).parent().append(e),C(e).click(function(){var t=C(this);C(f).find("li.fb-photo:hidden").slice(0,x.photosPageSize).fadeIn(function(){0==C(f).find("li.fb-photo:hidden").length&&t.fadeOut(function(){t.remove()})}),C(f).animate({scrollTop:C(document).height()})}))}for(a=0;a<t.data.length;a++){var n=C("<li>",{class:"fb-photo",style:"height:"+x.thumbnailSize+"px !important; width:"+x.thumbnailSize+"px !important"}),r=n.width(),o=n.height(),s=C(t.data)[a].images[0];for(i=0;i<C(t.data)[a].images.length;i++)C(t.data)[a].images[i].height>=o&&C(t.data)[a].images[i].width>=r&&C(t.data)[a].images[i].height<=s.height&&C(t.data)[a].images[i].width<=s.width&&(s=C(t.data)[a].images[i]);var h=C("<a>",{class:"fb-photo-thumb-link",href:C(t.data)[a].images[0].source,"data-fb-page":C(t.data)[a].link}),u=0;if(0<r&&(u=(r-s.width)/2),x.photosCheckbox){var c=C("<div>",{class:"image-check"});c.click(function(){var t={id:C(this).parent().find("img.fb-photo-thumb").attr("data-id"),url:C(this).parent().find("a").attr("href"),thumb:C(this).parent().find("img.fb-photo-thumb").attr("src")};if(C(this).toggleClass("checked"),C(this).hasClass("checked"))null!=x.photoChecked&&"function"==typeof x.photoChecked&&(x.checkedPhotos.push(t),x.photoChecked(t));else if(null!=x.photoUnchecked&&"function"==typeof x.photoUnchecked)for(i=0;i<x.checkedPhotos.length;i++)if(x.checkedPhotos[i].id==t.id){x.checkedPhotos.splice(i,1),x.photoUnchecked(t);break}return!1})}var d=C("<img>",{style:"margin-left:"+u+"px;display:none;","data-id":C(t.data).get(a).id,class:"fb-photo-thumb","data-src":s.source,src:""}),l=C("<span>",{class:"fb-photo-text"});if(l.text(C(t.data).get(a).name),h.append(l),h.append(d),x.photosCheckbox)for(n.append(c),i=0;i<x.checkedPhotos.length;i++)if(x.checkedPhotos[i].id==C(t.data).get(a).id){c.addClass("checked");break}n.append(h),f.append(n),C(f).removeClass("fb-loading-image"),0<x.photosPageSize&&C(f).find("li").index(n)>=x.photosPageSize&&(n.hide(),C(f).find(".fb-photos-more").fadeIn()),C(d).load(function(){C(this).fadeIn(300)}),m(d),g(f.find("a.fb-photo-thumb-link"))}t.paging&&t.paging.next&&""!=t.paging.next&&p(t.paging.next,f)}}})}function f(u,d,l){var t=y+u+"/comments?access_token="+x.accessToken+"&limit="+x.commentsLimit;null!=l?t=l:(C(d).find(".fb-comment").remove(),C(d).find(".fb-comment-more").remove()),C.ajax({type:"GET",url:t,cache:!1,dataType:"jsonp",success:function(t){if(0<t.data.length){if(""!=t.paging.next){var e=C(d).find(".fb-comment-more");0==e.length&&(e=C("<div/>",{class:"fb-comment-more",text:"more"}),C(d).append(e)),C(e).unbind("click"),C(e).attr("data-next",t.paging.next),C(e).click(function(){return f(u,d,C(this).attr("data-next")),!1})}else C(d).find(".fb-comment-more").remove();for(C(e).css("maxWidth",d.find(".fb-preview-img").width()-12),c=0;c<t.data.length;c++){var i=y+C(t.data)[c].from.id+"/picture?type=square",a=C("<div/>",{class:"fb-comment"});a.css("maxWidth",d.find(".fb-preview-img").width()-12),a.append(C("<img/>",{src:i,class:"fb-comment-account"}));var n=C("<div/>",{class:"fb-comment-text"});n.append(C("<a/>",{class:"fb-comment-account",target:"_blank",href:"http://facebook.com/"+C(t.data)[c].from.id,text:C(t.data)[c].from.name})),n.append(C("<div/>",{class:"fb-comment-date",text:(r=C(t.data)[c].created_time,o=void 0,s=void 0,void 0,o=r.split("T")[0],s=r.split("T")[1].substring(0,8),h=new Date(Date.UTC(o.split("-")[0],o.split("-")[1],o.split("-")[2],s.split(":")[0],s.split(":")[1],s.split(":")[2])),h).toLocaleString()})),n.append(C("<div/>",{text:C(t.data)[c].message})),a.append(n),e.before(a)}null==l?C(document).scrollTop():C(".fb-preview-overlay").animate({scrollTop:C(d).find(".fb-comment").last().offset().top},1e3)}var r,o,s,h}})}function m(t){var e=null;return C(t).hasClass("fb-photo-thumb")?e=C(t).parent().parent():C(t).hasClass("fb-album-thumb")&&(e=C(t).parent()),null==e||(function(t){try{var e=C(t),i=C(window),a=i.scrollTop()+i.height(),n=e.offset().top;e.height();return n<=a}catch(t){}}(C(e))&&""==C(t).attr("src")?(C(t).attr("src",C(t).attr("data-src")),C(t).removeAttr("data-src"),!0):(C(t).attr("src",C(t).attr("data-src")),C(t).removeAttr("data-src"),!1))}function d(){C(window).scroll(function(){C(".fb-album-thumb[src='']").each(function(){return m(C(this))}),C(".fb-photo-thumb[src='']").each(function(){return m(C(this))})})}function l(t,e){if(x.likeButton){var i=C("<div>",{"data-show-faces":"false",class:"fb-like","data-href":e,"data-action":"like","data-layout":"box_count","data-share":x.shareButton,"data-show-faces":"false"}),a=C("<div>",{class:"fb-like-container"});a.append(i),t.prepend(a),FB.XFBML.parse()}if(x.shareButton&&null!=x.addThis&&""!=x.addThis){var n=C("<div>",{"data-url":e,class:"addthis_toolbox addthis_default_style"});for(btn=1;btn<=4;btn++)n.append(C("<a>",{class:"addthis_button_preferred_"+btn}));n.append(C("<a>",{class:"addthis_button_compact"})),n.append(C("<a>",{class:"addthis_counter addthis_bubble_style"})),t.append(n),"undefined"==typeof addthis?C.getScript("//s7.addthis.com/js/300/addthis_widget.js#pubid="+x.addThis,function(){addthis.update("share","url",e),addthis.toolbox(".addthis_toolbox")}):(addthis.update("share","url",e),addthis.toolbox(".addthis_toolbox"))}}function g(t){var e,i,a,n,r=C(".fb-preview-overlay");if(0==r.length){r=C("<div>",{class:"fb-preview-overlay"});var o=C("<div>",{class:"fb-preview-content"});r.append(o),o.append(C("<img>",{class:"fb-preview-img"})),(x.showImageText||x.likeButton||x.shareButton)&&o.append(C("<div>",{class:"fb-preview-text"})),r.append(C("<img>",{class:"fb-preview-img-prev",src:x.pluginImagesPath+"prev-icon.png"})),r.append(C("<img>",{class:"fb-preview-img-next",src:x.pluginImagesPath+"next-icon.png"})),C("body").append(r),r=C(".fb-preview-overlay"),C(r).click(function(){C(this).fadeOut()}),C(r).find(".fb-preview-img").click(function(){return C(this).parent().find("img.fb-preview-img-next").click(),!1}),x.likeButton&&(C("body").append("<div>",{id:"fb-root"}),e=document,i="facebook-jssdk",n=e.getElementsByTagName("script")[0],e.getElementById(i)||((a=e.createElement("script")).id=i,a.src="//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3&appId=775908159169504",n.parentNode.insertBefore(a,n)))}else r=C(".fb-preview-overlay");C(t).unbind("click"),C(t).click(function(t){var r=C(".fb-preview-text"),o=C(".fb-preview-content");o.hide(),x.showImageText&&r.html(b(C(this).find(".fb-photo-text").text())),l(r,C(this).attr("data-fb-page"));var e={id:C(this).find("img.fb-photo-thumb").attr("data-id"),url:C(this).attr("href"),thumb:C(this).find("img.fb-photo-thumb").attr("data-id")};if(null!=x.photoSelected&&"function"==typeof x.photoSelected&&(x.photoSelected(e),t.preventDefault()),x.lightbox){var a=C(".fb-preview-overlay"),s=a.find("img.fb-preview-img");return s.hide(),a.find("img.fb-preview-img-prev,img.fb-preview-img-next").hide(),s.attr("data-id",C(this).find("img.fb-photo-thumb").attr("data-id")),s.attr("src",C(this).attr("href")),/chrom(e|ium)/.test(navigator.userAgent.toLowerCase())&&C(s).show(),s.unbind("load"),s.load(function(){o.css("display","block"),""!=r.text().trim()||x.likeBtn?r.css("display","block"):r.hide(),r.css("maxWidth",C(this).width()-12),r.css("minWidth",C(this).width()-12),C(".fb-comment,.fb-comment-more").css("maxWidth",C(this).width()-12),C(this).show(),x.showComments&&f(C(this).attr("data-id"),C(this).parent(),null);var e=a.find("img.fb-preview-img-prev");e.show(),e.unbind("click"),e.click(function(){var t=C(this).parent().find(".fb-preview-content"),e=C(t).find(".fb-preview-img"),i=C("[href='"+e.attr("src")+"']");if(0!=i.length){var a=i.parent().prev(),n=null;n=0!=a.length?a.find(".fb-photo-thumb-link"):i.parent().parent().find("li").last().find(".fb-photo-thumb-link"),s.attr("data-id",n.find("img.fb-photo-thumb").attr("data-id")),s.attr("src",n.attr("href")),o.hide(),x.showImageText&&r.html(b(n.text())),l(r,n.attr("data-fb-page"))}return!1});var i=a.find("img.fb-preview-img-next");i.show(),i.unbind("click"),i.click(function(){var t=C(this).parent().find(".fb-preview-content"),e=C(t).find(".fb-preview-img"),i=C("[href='"+e.attr("src")+"']");if(0!=i.length){var a=i.parent().next(),n=null;n=0!=a.length?a.find(".fb-photo-thumb-link"):i.parent().parent().find("li").first().find(".fb-photo-thumb-link"),s.attr("data-id",n.find("img.fb-photo-thumb").attr("data-id")),s.attr("src",n.attr("href")),o.hide(),x.showImageText&&r.html(b(n.text())),l(r,n.attr("data-fb-page"))}return!1}),C(document).unbind("keypress"),C(document).keypress(function(t){switch(t.keyCode?t.keyCode:t.which){case 37:t.preventDefault(),C(e).click();break;case 39:t.preventDefault(),C(i).click();break;case 27:t.preventDefault(),C(a).click()}}),C(this).fadeIn()}),a.fadeIn(),t.preventDefault(),t.stopPropagation(),!1}})}function b(t){return t.replace(/(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/gi,"<a href='$1' target='_blank'>$1</a>")}function v(t,e){t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var i=new RegExp("[\\?&]"+t+"=([^&#]*)").exec(e);return null==i?"":decodeURIComponent(i[1].replace(/\+/g," "))}null!=x.onlyAlbum?(p(e,C(h)),d()):function s(t){C(u).addClass("fb-loading-image");C.ajax({type:"GET",url:t,cache:!1,dataType:"jsonp",success:function(t){if(0<C(t.data).length){if(null!=x.albumsPageSize&&0<x.albumsPageSize){var e=C(h).find(".fb-btn-more");0==e.length&&(e=C("<div>",{class:"fb-btn-more fb-albums-more",text:x.albumsMoreButtonText}),C(h).append(e),C(e).click(function(){var t=C(this);C(h).find("li.fb-album:hidden").slice(0,x.albumsPageSize).fadeIn(function(){0==C(h).find("li.fb-album:hidden").length&&t.fadeOut(function(){t.remove()})})}))}for(a=0;a<C(t.data).length;a++)if(!(0<x.skipAlbums.length&&(-1<x.skipAlbums.indexOf(C(t.data).get(a).name)||-1<x.skipAlbums.indexOf(C(t.data).get(a).id.toString()))||0<x.includeAlbums.length&&x.includeAlbums.indexOf(C(t.data).get(a).name)<0&&x.includeAlbums.indexOf(C(t.data).get(a).id.toString())<0)){var n=C("<li>",{class:"fb-album","data-id":C(t.data).get(a).id,style:"height:"+x.thumbnailSize+"px !important; width:"+x.thumbnailSize+"px !important"});if(null!=C(t.data).get(a).count||!x.skipEmptyAlbums){var r=C(t.data).get(a).cover_photo,o=y;void 0!==r&&(isNaN(r)?o+=r.id:o+=r),""!=x.accessToken&&(o+="?access_token="+x.accessToken+k),C.ajax({type:"GET",url:o,cache:!1,data:{album:C(t.data).get(a).id},dataType:"jsonp",success:function(t){var e=C("li.fb-album[data-id='"+v("album",C(this).get(0).url)+"'] ");if(!C(t).get(0).error&&C(t).get(0).images){var a=e.width(),n=e.height(),r=C(t.images)[0];for(i=0;i<C(t.images).length;i++)C(t.images)[i].height>=n&&C(t.images)[i].width>=a&&C(t.images)[i].height<=r.height&&C(t.images)[i].width<=r.width&&(r=C(t.images)[i]);var o=C("<img>",{style:"margin-left:"+(a-r.width)/2+"px; display:none;","data-id":C(t).get(0).id,class:"fb-album-thumb","data-src":r.source,src:""});e.append(o),C(o).load(function(){C(this).fadeIn(300)}),m(o),d()}else e.remove()}}),n.append(C("<div>",{class:"fb-album-title",text:C(t.data).get(a).name})),x.showImageCount&&n.append(C("<div>",{class:"fb-album-count",text:C(t.data).get(a).count})),C(u).append(n),C(u).removeClass("fb-loading-image"),0<x.albumsPageSize&&C(u).find("li").index(n)>=x.albumsPageSize&&(n.hide(),C(h).find(".fb-albums-more").fadeIn()),C(n).click(function(){var t=C(this);C(w).append(C("<div>",{class:"fb-album-preview"})),C(w).find("div.fb-albums-more").hide();var e=w.find(".fb-album-preview");e.append(C("<img>",{alt:"",height:32,width:32,src:x.pluginImagesPath+"back.png",class:"fb-albums-list"})),C(e).append(C("<ul>",{class:"fb-photos",style:"min-height:"+x.thumbnailSize+"px !important"})),photosContainer=C(e).find("ul.fb-photos");var i=y+C(t).attr("data-id")+"/photos";""!=x.accessToken&&(i+="?access_token="+x.accessToken+k),null!=x.albumSelected&&"function"==typeof x.albumSelected&&x.albumSelected({id:C(t).attr("data-id"),url:i,thumb:C(t).find("img.fb-album-thumb").attr("src")}),p(i,photosContainer),C(w).find("ul.fb-albums").fadeOut(function(){e.fadeIn()})}),C(n).hover(function(){var t=C(this),e=t.find("div.fb-album-title").height();t.find("div.fb-album-title").slideDown({duration:300,easing:"linear"}),t.find("div.fb-album-count").css({top:e+10+"px"})},function(){var t=C(this);t.find("div.fb-album-title").slideUp({duration:300,easing:"linear"}),t.find("div.fb-album-count").css({top:"0"})})}}t.paging&&t.paging.next&&""!=t.paging.next&&s(t.paging.next)}}})}(e)}),this}}(jQuery);var CanvasImage=function(t){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),document.body.appendChild(this.canvas),this.width=this.canvas.width=t.width,this.height=this.canvas.height=t.height,this.context.drawImage(t,0,0,this.width,this.height)};CanvasImage.prototype.clear=function(){this.context.clearRect(0,0,this.width,this.height)},CanvasImage.prototype.update=function(t){this.context.putImageData(t,0,0)},CanvasImage.prototype.getPixelCount=function(){return this.width*this.height},CanvasImage.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)},CanvasImage.prototype.removeCanvas=function(){this.canvas.parentNode.removeChild(this.canvas)};var ColorThief=function(){};if(ColorThief.prototype.getColor=function(t,e){return this.getPalette(t,5,e)[0]},ColorThief.prototype.getPalette=function(t,e,i){(void 0===e||e<2||256<e)&&(e=10),(void 0===i||i<1)&&(i=10);for(var a,n,r,o,s=new CanvasImage(t),h=s.getImageData().data,u=s.getPixelCount(),c=[],d=0;d<u;d+=i)n=h[0+(a=4*d)],r=h[1+a],o=h[2+a],125<=h[3+a]&&(250<n&&250<r&&250<o||c.push([n,r,o]));var l=MMCQ.quantize(c,e),f=l?l.palette():null;return s.removeCanvas(),f},ColorThief.prototype.getColorFromUrl=function(e,i,a){sourceImage=document.createElement("img");var n=this;sourceImage.addEventListener("load",function(){var t=n.getPalette(sourceImage,5,a)[0];i(t,e)}),sourceImage.src=e},ColorThief.prototype.getImageData=function(t,i){xhr=new XMLHttpRequest,xhr.open("GET",t,!0),xhr.responseType="arraybuffer",xhr.onload=function(t){if(200==this.status){uInt8Array=new Uint8Array(this.response),e=uInt8Array.length,binaryString=new Array(e);for(var e=0;e<uInt8Array.length;e++)binaryString[e]=String.fromCharCode(uInt8Array[e]);data=binaryString.join(""),base64=window.btoa(data),i("data:image/png;base64,"+base64)}},xhr.send()},ColorThief.prototype.getColorAsync=function(t,e,i){var a=this;this.getImageData(t,function(t){sourceImage=document.createElement("img"),sourceImage.addEventListener("load",function(){var t=a.getPalette(sourceImage,5,i)[0];e(t,this)}),sourceImage.src=t})},!pv)var pv={map:function(t,i){var a={};return i?t.map(function(t,e){return a.index=e,i.call(a,t)}):t.slice()},naturalOrder:function(t,e){return t<e?-1:e<t?1:0},sum:function(t,a){var n={};return t.reduce(a?function(t,e,i){return n.index=i,t+a.call(n,e)}:function(t,e){return t+e},0)},max:function(t,e){return Math.max.apply(null,e?pv.map(t,e):t)}};var MMCQ=function(){var l=5,d=8-l;function p(t,e,i){return(t<<2*l)+(e<<l)+i}function s(t){var e=[],i=!1;function a(){e.sort(t),i=!0}return{push:function(t){e.push(t),i=!1},peek:function(t){return i||a(),void 0===t&&(t=e.length-1),e[t]},pop:function(){return i||a(),e.pop()},size:function(){return e.length},map:function(t){return e.map(t)},debug:function(){return i||a(),e}}}function f(t,e,i,a,n,r,o){var s=this;s.r1=t,s.r2=e,s.g1=i,s.g2=a,s.b1=n,s.b2=r,s.histo=o}function u(){this.vboxes=new s(function(t,e){return pv.naturalOrder(t.vbox.count()*t.vbox.volume(),e.vbox.count()*e.vbox.volume())})}function c(t,u){if(u.count()){var e=u.r2-u.r1+1,i=u.g2-u.g1+1,a=u.b2-u.b1+1,n=pv.max([e,i,a]);if(1==u.count())return[u.copy()];var c,r,o,s,d=0,l=[],f=[];if(n==e)for(c=u.r1;c<=u.r2;c++){for(s=0,r=u.g1;r<=u.g2;r++)for(o=u.b1;o<=u.b2;o++)s+=t[p(c,r,o)]||0;d+=s,l[c]=d}else if(n==i)for(c=u.g1;c<=u.g2;c++){for(s=0,r=u.r1;r<=u.r2;r++)for(o=u.b1;o<=u.b2;o++)s+=t[p(r,c,o)]||0;d+=s,l[c]=d}else for(c=u.b1;c<=u.b2;c++){for(s=0,r=u.r1;r<=u.r2;r++)for(o=u.g1;o<=u.g2;o++)s+=t[p(r,o,c)]||0;d+=s,l[c]=d}return l.forEach(function(t,e){f[e]=d-t}),h(n==e?"r":n==i?"g":"b")}function h(t){var e,i,a,n,r,o=t+"1",s=t+"2",h=0;for(c=u[o];c<=u[s];c++)if(l[c]>d/2){for(a=u.copy(),n=u.copy(),r=(e=c-u[o])<=(i=u[s]-c)?Math.min(u[s]-1,~~(c+i/2)):Math.max(u[o],~~(c-1-e/2));!l[r];)r++;for(h=f[r];!h&&l[r-1];)h=f[--r];return a[s]=r,n[o]=a[s]+1,[a,n]}}}return f.prototype={volume:function(t){var e=this;return e._volume&&!t||(e._volume=(e.r2-e.r1+1)*(e.g2-e.g1+1)*(e.b2-e.b1+1)),e._volume},count:function(t){var e=this,i=e.histo;if(!e._count_set||t){var a,n,r,o=0;for(a=e.r1;a<=e.r2;a++)for(n=e.g1;n<=e.g2;n++)for(r=e.b1;r<=e.b2;r++)o+=i[p(a,n,r)]||0;e._count=o,e._count_set=!0}return e._count},copy:function(){var t=this;return new f(t.r1,t.r2,t.g1,t.g2,t.b1,t.b2,t.histo)},avg:function(t){var e=this,i=e.histo;if(!e._avg||t){var a,n,r,o,s=0,h=1<<8-l,u=0,c=0,d=0;for(n=e.r1;n<=e.r2;n++)for(r=e.g1;r<=e.g2;r++)for(o=e.b1;o<=e.b2;o++)s+=a=i[p(n,r,o)]||0,u+=a*(n+.5)*h,c+=a*(r+.5)*h,d+=a*(o+.5)*h;e._avg=s?[~~(u/s),~~(c/s),~~(d/s)]:[~~(h*(e.r1+e.r2+1)/2),~~(h*(e.g1+e.g2+1)/2),~~(h*(e.b1+e.b2+1)/2)]}return e._avg},contains:function(t){var e=this,i=t[0]>>d;return gval=t[1]>>d,bval=t[2]>>d,i>=e.r1&&i<=e.r2&&gval>=e.g1&&gval<=e.g2&&bval>=e.b1&&bval<=e.b2}},u.prototype={push:function(t){this.vboxes.push({vbox:t,color:t.avg()})},palette:function(){return this.vboxes.map(function(t){return t.color})},size:function(){return this.vboxes.size()},map:function(t){for(var e=this.vboxes,i=0;i<e.size();i++)if(e.peek(i).vbox.contains(t))return e.peek(i).color;return this.nearest(t)},nearest:function(t){for(var e,i,a,n=this.vboxes,r=0;r<n.size();r++)((i=Math.sqrt(Math.pow(t[0]-n.peek(r).color[0],2)+Math.pow(t[1]-n.peek(r).color[1],2)+Math.pow(t[2]-n.peek(r).color[2],2)))<e||void 0===e)&&(e=i,a=n.peek(r).color);return a},forcebw:function(){var t=this.vboxes;t.sort(function(t,e){return pv.naturalOrder(pv.sum(t.color),pv.sum(e.color))});var e=t[0].color;e[0]<5&&e[1]<5&&e[2]<5&&(t[0].color=[0,0,0]);var i=t.length-1,a=t[i].color;251<a[0]&&251<a[1]&&251<a[2]&&(t[i].color=[255,255,255])}},{quantize:function(t,e){if(!t.length||e<2||256<e)return!1;var h=function(t){var e,i,a,n,r=new Array(1<<3*l);return t.forEach(function(t){i=t[0]>>d,a=t[1]>>d,n=t[2]>>d,e=p(i,a,n),r[e]=(r[e]||0)+1}),r}(t);h.forEach(function(){0});var i=function(t,e){var i,a,n,r=1e6,o=0,s=1e6,h=0,u=1e6,c=0;return t.forEach(function(t){i=t[0]>>d,a=t[1]>>d,n=t[2]>>d,i<r?r=i:o<i&&(o=i),a<s?s=a:h<a&&(h=a),n<u?u=n:c<n&&(c=n)}),new f(r,o,s,h,u,c,e)}(t,h),a=new s(function(t,e){return pv.naturalOrder(t.count(),e.count())});function n(t,e){for(var i,a=1,n=0;n<1e3;)if((i=t.pop()).count()){var r=c(h,i),o=r[0],s=r[1];if(!o)return;if(t.push(o),s&&(t.push(s),a++),e<=a)return;if(1e3<n++)return}else t.push(i),n++}a.push(i),n(a,.75*e);for(var r=new s(function(t,e){return pv.naturalOrder(t.count()*t.volume(),e.count()*e.volume())});a.size();)r.push(a.pop());n(r,e-r.size());for(var o=new u;r.size();)o.push(r.pop());return o}}}();