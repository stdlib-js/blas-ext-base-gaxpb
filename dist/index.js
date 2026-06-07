"use strict";var q=function(i,u){return function(){return u||i((u={exports:{}}).exports,u),u.exports}};var d=q(function(H,g){
function O(i,u,n,r,v,o){var e,c,a,s,f;for(e=r.data,c=r.accessors[0],a=r.accessors[1],s=o,f=0;f<i;f++)a(e,s,u*c(e,s)+n),s+=v;return r}g.exports=O
});var y=q(function(I,m){
var P=require('@stdlib/array-base-arraylike2object/dist'),R=require('@stdlib/blas-ext-base-gapx/dist').ndarray,w=require('@stdlib/blas-base-gscal/dist').ndarray,z=d(),t=5;function A(i,u,n,r,v,o){var e,c,a,s;if(i<=0)return r;if(u===1)return R(i,n,r,v,o);if(n===0)return w(i,u,r,v,o);if(a=P(r),a.accessorProtocol)return z(i,u,n,a,v,o);if(e=o,v===1){if(c=i%t,c>0)for(s=0;s<c;s++)r[e]=u*r[e]+n,e+=v;if(i<t)return r;for(s=c;s<i;s+=t)r[e]=u*r[e]+n,r[e+1]=u*r[e+1]+n,r[e+2]=u*r[e+2]+n,r[e+3]=u*r[e+3]+n,r[e+4]=u*r[e+4]+n,e+=t;return r}for(s=0;s<i;s++)r[e]=u*r[e]+n,e+=v;return r}m.exports=A
});var k=q(function(J,j){
var B=require('@stdlib/strided-base-stride2offset/dist'),C=y();function D(i,u,n,r,v){return C(i,u,n,r,v,B(i,v))}j.exports=D
});var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),M=k(),F=y();E(M,"ndarray",F);module.exports=M;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
