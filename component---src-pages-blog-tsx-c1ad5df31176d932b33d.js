(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"1GPU":function(e,t,a){"use strict";a.r(t);var n=a("mwIZ"),l=a.n(n),r=a("q1tI"),c=a.n(r),i=a("Wbzz"),o=a("yE/o"),s=a("FcLX"),d=a("z8k1"),u=a("3mGJ"),m=a("+6Dn"),p=a("yIZz"),h=a("pVnL"),f=a.n(h),v=a("lwsE"),b=a.n(v),E=a("W8MJ"),g=a.n(E),O=a("a1gu"),j=a.n(O),N=a("Nsbk"),k=a.n(N),C=a("PJYZ"),y=a.n(C),A=a("7W2i"),I=a.n(A),x=a("lSNA"),w=a.n(x),P=a("3WF5"),z=a.n(P),L=a("Og4/"),G=a.n(L),V=a("TSYQ"),W=a.n(V),K=a("ZeOK"),S=a("ICNK"),D=a("Y53p"),J=a("H+2d"),Z=a("MZgk");function M(e){var t=e.children,a=e.className,n=e.content,l=W()(a,"description"),r=Object(S.a)(M,e),i=Object(D.a)(M,e);return c.a.createElement(i,f()({},r,{className:l}),J.a.isNil(t)?n:t)}M.handledProps=["as","children","className","content"],M.create=Object(Z.c)(M,(function(e){return{content:e}}));var q=M;function Y(e){var t=e.children,a=e.className,n=e.content,l=W()("header",a),r=Object(S.a)(Y,e),i=Object(D.a)(Y,e);return c.a.createElement(i,f()({},r,{className:l}),J.a.isNil(t)?n:t)}Y.handledProps=["as","children","className","content"],Y.create=Object(Z.c)(Y,(function(e){return{content:e}}));var H=Y;function Q(e){var t=e.children,a=e.className,n=e.content,l=e.description,r=e.floated,i=e.header,o=e.verticalAlign,s=W()(Object(K.e)(r,"floated"),Object(K.f)(o),"content",a),d=Object(S.a)(Q,e),u=Object(D.a)(Q,e);return J.a.isNil(t)?c.a.createElement(u,f()({},d,{className:s}),H.create(i),q.create(l),n):c.a.createElement(u,f()({},d,{className:s}),t)}Q.handledProps=["as","children","className","content","description","floated","header","verticalAlign"],Q.create=Object(Z.c)(Q,(function(e){return{content:e}}));var R=Q,T=a("D1pA");function U(e){var t=e.className,a=e.verticalAlign,n=W()(Object(K.f)(a),t),l=Object(S.a)(U,e);return c.a.createElement(T.a,f()({},l,{className:n}))}U.handledProps=["className","verticalAlign"],U.create=Object(Z.c)(U,(function(e){return{name:e}}));var X=U,F=a("YO3V"),B=a.n(F),$=a("5XkN"),_=function(e){function t(){var e,a;b()(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return a=j()(this,(e=k()(t)).call.apply(e,[this].concat(l))),w()(y()(a),"handleClick",(function(e){a.props.disabled||G()(a.props,"onClick",e,a.props)})),a}return I()(t,e),g()(t,[{key:"render",value:function(){var e=this.props,a=e.active,n=e.children,l=e.className,i=e.content,o=e.description,s=e.disabled,d=e.header,u=e.icon,m=e.image,p=e.value,h=Object(D.a)(t,this.props),v=W()(Object(K.a)(a,"active"),Object(K.a)(s,"disabled"),Object(K.a)("li"!==h,"item"),l),b=Object(S.a)(t,this.props),E="li"===h?{value:p}:{"data-value":p};if(!J.a.isNil(n))return c.a.createElement(h,f()({},E,{role:"listitem",className:v,onClick:this.handleClick},b),n);var g=X.create(u,{autoGenerateKey:!1}),O=$.a.create(m,{autoGenerateKey:!1});if(!Object(r.isValidElement)(i)&&B()(i))return c.a.createElement(h,f()({},E,{role:"listitem",className:v,onClick:this.handleClick},b),g||O,R.create(i,{autoGenerateKey:!1,defaultProps:{header:d,description:o}}));var j=H.create(d,{autoGenerateKey:!1}),N=q.create(o,{autoGenerateKey:!1});return g||O?c.a.createElement(h,f()({},E,{role:"listitem",className:v,onClick:this.handleClick},b),g||O,(i||j||N)&&c.a.createElement(R,null,j,N,i)):c.a.createElement(h,f()({},E,{role:"listitem",className:v,onClick:this.handleClick},b),j,N,i)}}]),t}(r.Component);w()(_,"handledProps",["active","as","children","className","content","description","disabled","header","icon","image","onClick","value"]),_.create=Object(Z.c)(_,(function(e){return{content:e}}));var ee=_;function te(e){var t=e.children,a=e.className,n=e.content,l=Object(S.a)(te,e),r=Object(D.a)(te,e),i=W()(Object(K.a)("ul"!==r&&"ol"!==r,"list"),a);return c.a.createElement(r,f()({},l,{className:i}),J.a.isNil(t)?n:t)}te.handledProps=["as","children","className","content"];var ae=te,ne=function(e){function t(){var e,a;b()(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return a=j()(this,(e=k()(t)).call.apply(e,[this].concat(l))),w()(y()(a),"handleItemOverrides",(function(e){return{onClick:function(t,n){G()(e,"onClick",t,n),G()(a.props,"onItemClick",t,n)}}})),a}return I()(t,e),g()(t,[{key:"render",value:function(){var e=this,a=this.props,n=a.animated,l=a.bulleted,r=a.celled,i=a.children,o=a.className,s=a.content,d=a.divided,u=a.floated,m=a.horizontal,p=a.inverted,h=a.items,v=a.link,b=a.ordered,E=a.relaxed,g=a.selection,O=a.size,j=a.verticalAlign,N=W()("ui",O,Object(K.a)(n,"animated"),Object(K.a)(l,"bulleted"),Object(K.a)(r,"celled"),Object(K.a)(d,"divided"),Object(K.a)(m,"horizontal"),Object(K.a)(p,"inverted"),Object(K.a)(v,"link"),Object(K.a)(b,"ordered"),Object(K.a)(g,"selection"),Object(K.b)(E,"relaxed"),Object(K.e)(u,"floated"),Object(K.f)(j),"list",o),k=Object(S.a)(t,this.props),C=Object(D.a)(t,this.props);return J.a.isNil(i)?J.a.isNil(s)?c.a.createElement(C,f()({role:"list",className:N},k),z()(h,(function(t){return ee.create(t,{overrideProps:e.handleItemOverrides})}))):c.a.createElement(C,f()({role:"list",className:N},k),s):c.a.createElement(C,f()({role:"list",className:N},k),i)}}]),t}(r.Component);w()(ne,"Content",R),w()(ne,"Description",q),w()(ne,"Header",H),w()(ne,"Icon",X),w()(ne,"Item",ee),w()(ne,"List",ae),w()(ne,"handledProps",["animated","as","bulleted","celled","children","className","content","divided","floated","horizontal","inverted","items","link","onItemClick","ordered","relaxed","selection","size","verticalAlign"]);var le=ne,re=function(e){return r.createElement(d.a,null,r.createElement(d.a.Content,null,r.createElement(d.a.Header,null,"Tags")),r.createElement(d.a.Content,null,r.createElement(le,null,e.tags.map((function(t){var a=t.fieldValue===e.tag,n=a?"/blog":"/blog/tags/"+t.fieldValue+"/";return r.createElement(le.Item,{as:"span",key:t.fieldValue},r.createElement(le.Icon,{name:"tag",color:a?"blue":null}),r.createElement(le.Content,{style:a?{fontWeight:"700"}:null},r.createElement(e.Link,{to:n},t.fieldValue," (",t.totalCount,")")))})))))},ce=a("2xqg"),ie=a.n(ce),oe=a("R6OX"),se=function(e){if(1===e.pageCount)return null;var t=e.pathname.startsWith("/blog/page/")?e.pathname.split("/")[3]:"1";return r.createElement(oe.a,{pagination:!0},ie()(e.pageCount,(function(a){var n=(a+1).toString(),l=e.pageCount<10?5:3,c=+n-l<+t&&+n+l>+t,i=+n===e.pageCount;return c||1==+n||i?r.createElement(oe.a.Item,{key:n,style:{cursor:"pointer"},as:e.Link,to:"/blog/page/"+n+"/",name:n,active:t===n}):+n==e.pageCount-1||2==+n?r.createElement(oe.a.Item,{key:n,disabled:!0},"..."):null})))},de=a("soUV");t.default=Object(de.b)((function(e){var t=e.data.tags.group,a=e.data.posts.edges,n=e.location.pathname,c=Math.ceil(e.data.posts.totalCount/10),h=r.createElement(o.a,null,a.map((function(e){var t=e.node,a=t.frontmatter,n=t.timeToRead,c=t.fields.slug,o=t.excerpt,u=a.author.avatar.children[0],m=l()(a,"image.children.0.fixed",{}),p=r.createElement(s.a.Group,null,r.createElement(s.a,null,r.createElement(s.a.Avatar,{src:u.fixed.src,srcSet:u.fixed.srcSet}),r.createElement(s.a.Content,null,r.createElement(s.a.Author,{style:{fontWeight:400}},a.author.id),r.createElement(s.a.Metadata,{style:{margin:0}},a.updatedDate," - ",n," min read")))),h=r.createElement(d.a.Description,null,o,r.createElement("br",null),r.createElement(i.Link,{to:c},"Read more…"));return r.createElement(d.a,{key:c,fluid:!0,image:m,header:a.title,extra:p,description:h})})));return r.createElement(o.a,null,r.createElement(p.a,null),r.createElement(u.a,{vertical:!0},r.createElement(m.a,{padded:!0,style:{justifyContent:"space-around"}},r.createElement("div",{style:{maxWidth:600}},h,r.createElement(u.a,{vertical:!0,textAlign:"center"},r.createElement(se,{Link:i.Link,pathname:n,pageCount:c}))),r.createElement("div",null,r.createElement(re,{Link:i.Link,tags:t,tag:e.pageContext.tag})))))}))},"2xqg":function(e,t,a){var n=a("UNi/"),l=a("EwQA"),r=a("Sxd8"),c=Math.min;e.exports=function(e,t){if((e=r(e))<1||e>9007199254740991)return[];var a=4294967295,i=c(e,4294967295);t=l(t),e-=4294967295;for(var o=n(i,t);++a<e;)t(a);return o}},yIZz:function(e,t,a){"use strict";var n=a("q1tI"),l=a("3mGJ"),r=a("aQu0"),c=a("D1pA");t.a=function(){return n.createElement(l.a,{vertical:!0},n.createElement(r.a,{as:"h2"},n.createElement(c.a,{name:"newspaper"}),n.createElement(r.a.Content,null,"Blog",n.createElement(r.a.Subheader,null,"All about this starter kit"))))}}}]);
//# sourceMappingURL=component---src-pages-blog-tsx-c1ad5df31176d932b33d.js.map