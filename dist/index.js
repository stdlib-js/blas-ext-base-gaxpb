"use strict";var q=function(n,u){return function(){try{return u||n((u={exports:{}}).exports,u),u.exports}catch(i){throw (u=0, i)}};};var d=q(function(H,g){
function O(n,u,i,r,v,o){var e,c,a,s,f;for(e=r.data,c=r.accessors[0],a=r.accessors[1],s=o,f=0;f<n;f++)a(e,s,u*c(e,s)+i),s+=v;return r}g.exports=O
});var y=q(function(I,m){
var P=require('@stdlib/array-base-arraylike2object/dist'),R=require('@stdlib/blas-ext-base-gapx/dist').ndarray,w=require('@stdlib/blas-base-gscal/dist').ndarray,z=d(),t=5;function A(n,u,i,r,v,o){var e,c,a,s;if(n<=0)return r;if(u===1)return R(n,i,r,v,o);if(i===0)return w(n,u,r,v,o);if(a=P(r),a.accessorProtocol)return z(n,u,i,a,v,o);if(e=o,v===1){if(c=n%t,c>0)for(s=0;s<c;s++)r[e]=u*r[e]+i,e+=v;if(n<t)return r;for(s=c;s<n;s+=t)r[e]=u*r[e]+i,r[e+1]=u*r[e+1]+i,r[e+2]=u*r[e+2]+i,r[e+3]=u*r[e+3]+i,r[e+4]=u*r[e+4]+i,e+=t;return r}for(s=0;s<n;s++)r[e]=u*r[e]+i,e+=v;return r}m.exports=A
});var k=q(function(J,j){
var B=require('@stdlib/strided-base-stride2offset/dist'),C=y();function D(n,u,i,r,v){return C(n,u,i,r,v,B(n,v))}j.exports=D
});var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),M=k(),F=y();E(M,"ndarray",F);module.exports=M;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
