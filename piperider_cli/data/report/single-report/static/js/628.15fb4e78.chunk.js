"use strict";(self.webpackChunk_infuseai_piperider_ui=self.webpackChunk_infuseai_piperider_ui||[]).push([[628],{29726:function(e,n,i){i.r(n),i.d(n,{SRPage:function(){return X},default:function(){return Y}});var t=i(93668),l=i(56446),s=i(37625),r=i(9459),o=i(18202),a=i(44716),d=i(19160),u=i(61431),c=i(70647),x=i(49960),v=i(59830),j=i(23389),h=i(74397),m=i(48159),p=i(12457),f=i(75676),b=i(58750),g=i(99147);function y(){var e,n,i;(0,p.mq)({eventName:a.FP.PAGE_VIEW,eventProperties:{type:a.ll,page:"assertion-list-page"}});var t=(0,v.useState)(""),l=(0,u.Z)(t,2),s=l[0],r=l[1],o=a.nq.getState(),d=o.assertionsOnly,y=o.isCloudReport,A=(d||{}).metadata,W=y?b.ee:b.p0;return(0,g.jsxs)(c.xu,{children:[(0,g.jsxs)(x.bZ,{status:"warning",mb:5,children:[(0,g.jsx)(x.zM,{}),(0,g.jsxs)(c.xu,{children:[(0,g.jsx)(x.Cd,{children:"The Assertions page is deprecated and will be removed in the future"}),(0,g.jsxs)(x.X,{fontSize:"sm",children:["If you have a strong need for this page, please contact us by the"," ",(0,g.jsx)(c.rU,{href:W,style:{textDecoration:"underline"},children:"feedback link"}),". Your feedback is important to us. Thank you!"]})]})]}),(0,g.jsx)(c.xv,{fontSize:"xl",fontWeight:"semibold",textAlign:"left",children:"Assertions"}),(0,g.jsx)(c.kC,{maxW:f.eb-50,w:"100%",children:(0,g.jsx)(h.f,{onChange:r,filterString:s})}),(0,g.jsx)(c.kC,{justify:"start",maxW:f.eb-50,w:"100%",my:5,children:Number(null===A||void 0===A||null===(e=A.base)||void 0===e?void 0:e.total)>0&&(0,g.jsx)(j.F,{total:null===A||void 0===A||null===(n=A.base)||void 0===n?void 0:n.total,failed:null===A||void 0===A||null===(i=A.base)||void 0===i?void 0:i.failed})}),(0,g.jsx)(m.O,{maxW:f.eb-50,w:"100%",singleOnly:!0,filterString:s,comparableAssertions:d})]})}var A=i(24970),W=i.n(A),S=i(57872),_=i(99828);function w(){var e,n;(0,p.mq)({eventName:a.FP.PAGE_VIEW,eventProperties:{type:a.ll,page:"metrics-page"}});var i=a.nq.getState(),s=i.tableColumnsOnly,r=i.rawData,o=(0,t.yj)(d.TQ),x=(0,u.Z)(o,2),v=x[0],j=x[1],h=null!==(e=null===r||void 0===r||null===(n=r.base)||void 0===n?void 0:n.metrics)&&void 0!==e?e:[],m="All metrics",f="All metric queries";if(v){var b=null===j||void 0===j?void 0:j.uniqueId,y=W().find(s,(function(e){return(0,u.Z)(e,1)[0]===b}));if(y){var A,w=(0,u.Z)(y,2)[1].base;h=(null===w||void 0===w?void 0:w.__queries)||[],m=null!==(A=null===w||void 0===w?void 0:w.label)&&void 0!==A?A:null===w||void 0===w?void 0:w.name,f=null===w||void 0===w?void 0:w.description}}var C=h.map((function(e){return e.name}));return(0,g.jsxs)(c.xu,{children:[!v&&(0,g.jsx)(c.xv,{fontSize:"xl",fontWeight:"semibold",textAlign:"left",children:"Metrics"}),v&&(0,g.jsx)(l.QN,{subtitle:"Metric",title:m,icon:S.NMh,infoTip:f}),(0,g.jsxs)(c.rj,{templateColumns:{base:"1fr",xl:"1fr 1fr"},w:"100%",gap:5,children:[C.map((function(e){var n=h.find((function(n){return n.name===e}));return(0,g.jsx)(c.P4,{children:(0,g.jsx)(_.l,{data:{base:n},singleOnly:!0})},e)})),0===C.length&&(0,g.jsxs)(c.xv,{color:"gray.500",children:["No metric queries available. To enable, see"," ",(0,g.jsx)(c.rU,{isExternal:!0,textDecoration:"underline",href:"https://docs.piperider.io/get-started/run/metrics",children:"metrics docs"})]})]})]})}var C=i(58753),N=i(35513),q=i(44583),P=i(81989),T=i(77318),z=i(39536),Z=i(45697),F=i(83342),k=i(10095),D=i(54144);function E(){var e,n=(0,d.vs)(),i=null===n||void 0===n?void 0:n.uniqueId,t=decodeURIComponent((null===n||void 0===n?void 0:n.tableName)||""),l=decodeURIComponent((null===n||void 0===n?void 0:n.columnName)||"");(0,Z.mq)({eventName:Z.FP.PAGE_VIEW,eventProperties:{type:Z.ll,page:"column-details-page"}});var s=k.nq.getState().tableColumnsOnly,r=void 0===s?[]:s,o=i||"table.".concat(t);if(void 0===o)return(0,g.jsx)(T.J,{text:"No data found for '".concat(o,".").concat(l,"'")});var a=r.find((function(e){return(0,u.Z)(e,1)[0]===o}));if(!a)return(0,g.jsx)(T.J,{text:"No data found for '".concat(o,".").concat(l,"'")});var x=null===(e=a[1].base)||void 0===e?void 0:e.__table,v=null===x||void 0===x?void 0:x.columns,j=v?v[l]:void 0,h=j||{},m=h.type,p=h.histogram,f=h.schema_type,b=(0,D.MM)(null===j||void 0===j?void 0:j.type),y=b.backgroundColor,A=b.icon;if(!o||!x||!a||!j)return(0,g.jsx)(T.J,{text:"No data found for '".concat(o,".").concat(l,"'")});var W=(0,z.hG)(m);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(F.Q,{title:l,subtitle:f,infoTip:null===j||void 0===j?void 0:j.description,icon:A,iconColor:y,mb:5}),(0,g.jsxs)(c.rj,{width:"100%",templateColumns:{base:"1fr",xl:"1fr 1px 1fr"},gap:5,children:[(0,g.jsxs)(c.gC,{spacing:10,flex:"1",width:"100%",flexGrow:1,flexShrink:1,children:[(0,g.jsxs)(c.xu,{width:"100%",children:[(0,g.jsx)(c.xv,{fontSize:"xl",children:"Data Composition"}),(0,g.jsx)(c.iz,{}),(0,g.jsx)(C.t,{columnDatum:j})]}),(0,z.jl)(m)&&(0,g.jsxs)(c.xu,{width:"100%",children:[(0,g.jsxs)(c.xv,{fontSize:"xl",children:[j?(0,Z.B1)(null===j||void 0===j?void 0:j.type):"Type "," ","Statistics"]}),(0,g.jsx)(c.iz,{}),(0,g.jsx)(P.E,{columnDatum:j})]}),W&&p&&(0,g.jsxs)(c.xu,{width:"100%",children:[(0,g.jsx)(c.xv,{fontSize:"xl",children:"Quantile Data"}),(0,g.jsx)(c.iz,{}),(0,g.jsx)(q.M,{columnDatum:j})]})]}),(0,g.jsx)(c.iz,{orientation:"vertical"}),(0,g.jsx)(c.gC,{spacing:10,width:"100%",children:(0,g.jsx)(N.r,{columnDatum:j})})]})]})}var I=i(77548),O=i(5435),G=i(82175),M=i(97688),Q=i(99985),J=i(6006),R=i(98256),V=i(88748);function U(){var e,n,i,t,l=(0,M.qY)(),s=(0,v.useState)(-1),r=(0,u.Z)(s,2),o=r[0],a=r[1],d=k.nq.getState(),x=d.tableColumnsOnly,j=void 0===x?[]:x,h=d.assertionsOnly,m=d.isLegacy;(0,R.m)({eventName:I.FP.PAGE_VIEW,eventProperties:{type:I.ll,page:"table-list-page"}});var p,b,y=W().sortBy(j,(function(e){var n,i=(0,u.Z)(e,2)[1],t=i.base,l=i.target,s=null!==l&&void 0!==l?l:t;return null===s||void 0===s||null===(n=s.__table)||void 0===n?void 0:n.name}));if(-1!==o){var A=(0,u.Z)(y[o],3);p=A[1].base,b=A[2].columns}return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c.xv,{fontSize:"xl",fontWeight:"semibold",textAlign:"left",children:"Tables"}),(0,g.jsxs)(c.kC,{direction:"column",width:"100%",minHeight:"650px",children:[(0,g.jsxs)(c.rj,{templateColumns:f.Dp,maxW:f.xD,px:4,my:6,children:[(0,g.jsx)(c.xv,{children:"Name"}),(0,g.jsx)(c.xv,{children:"Summary"}),(0,g.jsx)(c.xv,{children:"Assertions"})]}),y.map((function(e,n){var i=(0,u.Z)(e,2)[1],t=i.base,s=i.target,r=null!==t&&void 0!==t?t:s;return null!==r&&void 0!==r&&r.__table&&(m||"table"!==(null===r||void 0===r?void 0:r.resource_type))?(0,g.jsx)(Q.h,{combinedAssertions:h,combinedTableEntry:e,singleOnly:!0,onInfoClick:function(){a(n),l.onOpen()}},n):(0,g.jsx)(g.Fragment,{})}))]}),(0,g.jsxs)(V.W,(0,G.Z)((0,G.Z)({},l),{},{size:"2xl",title:null!==(e=null===(n=p)||void 0===n||null===(i=n.__table)||void 0===i?void 0:i.name)&&void 0!==e?e:"No title",onClose:function(){a(-1),l.onClose()},children:[(0,g.jsxs)(c.xv,{fontSize:"lg",mb:4,children:["Description:"," ",(null===(t=p)||void 0===t?void 0:t.description)||(0,g.jsx)(c.xv,{as:"i",children:"No description provided."})]}),-1!==o&&(0,g.jsx)(J.r,{singleOnly:!0,columns:b})]}))]})}function B(){return(0,p.mq)({eventName:I.FP.PAGE_VIEW,eventProperties:{type:I.ll,page:"overview_page"}}),k.nq.getState().isLegacy?(0,g.jsx)(U,{}):(0,g.jsx)(O.g,{singleOnly:!0})}function H(){var e=(0,t.yj)(d.qZ),n=(0,u.Z)(e,2),i=n[0],l=n[1];if((0,Z.mq)({eventName:Z.FP.PAGE_VIEW,eventProperties:{type:Z.ll,page:"resource-page"}}),!i)return(0,g.jsx)(g.Fragment,{children:"Something wrong."});var s=Z.nq.getState().tableColumnsOnly,r=(void 0===s?[]:s).find((function(e){return(0,u.Z)(e,1)[0]===(null===l||void 0===l?void 0:l.uniqueId)}));if(!r)return(0,g.jsx)(Z.Jd,{text:"No data found for '".concat(null===l||void 0===l?void 0:l.uniqueId,"'")});var o=(0,u.Z)(r,2)[1].base,a=null===o||void 0===o?void 0:o.name,c=null===o||void 0===o?void 0:o.description,x=null===o||void 0===o?void 0:o.resource_type,v=(0,D.yk)(x).icon;return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(Z.QN,{subtitle:"Semantic Model",title:a,icon:v,infoTip:c})})}var $=i(24147);function L(){var e,n=(0,d.e$)(),i=n.tableName,t=n.uniqueId;(0,Z.mq)({eventName:Z.FP.PAGE_VIEW,eventProperties:{type:Z.ll,page:"table-details-page"}});var l=k.nq.getState(),s=l.tableColumnsOnly,r=void 0===s?[]:s,o=l.rawData,a=i||t;if(void 0===a)return(0,g.jsx)(T.J,{text:"No data found for '".concat(a,"'")});var x=t||"table.".concat(i),v=r.find((function(e){return(0,u.Z)(e,1)[0]===x}));if(!v)return(0,g.jsx)(T.J,{text:"No data found for '".concat(a,"'")});var j=(null===(e=o.base)||void 0===e?void 0:e.datasource.skip_datasource)||void 0,h=(0,u.Z)(v,3),m=h[1].base,p=h[2].columns,f=null===m||void 0===m?void 0:m.name,b=(null===m||void 0===m?void 0:m.description)||void 0,y=null===m||void 0===m?void 0:m.__table;return void 0===y?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(F.Q,{title:f,subtitle:"Table",infoTip:b,mb:5}),(0,g.jsx)(T.J,{text:"No schema data found. The table or view may not be available in the data source."})]}):(0,g.jsxs)(g.Fragment,{children:[j&&(0,g.jsx)($.a,{}),(0,g.jsx)(F.Q,{title:f,subtitle:"Table",infoTip:b,mb:5}),(0,g.jsxs)(c.rj,{width:"100%",templateColumns:{base:"1fr","2xl":"1fr 1px 1fr"},gap:5,children:[(0,g.jsxs)(c.gC,{spacing:10,children:[(0,g.jsxs)(c.xu,{width:"100%",children:[(0,g.jsx)(c.xv,{fontSize:"xl",children:"Table Statistics"}),(0,g.jsx)(c.iz,{my:1}),(0,g.jsx)(Z.Se,{tableDatum:y})]}),(0,g.jsxs)(c.xu,{width:"100%",children:[(0,g.jsx)(c.xv,{fontSize:"xl",children:"Duplicate Rows"}),(0,g.jsx)(c.iz,{my:1}),(0,g.jsx)(Z.e0,{tableDatum:y})]})]}),(0,g.jsx)(c.iz,{orientation:"vertical"}),(0,g.jsx)(Z.rH,{columns:p,singleOnly:!0})]})]})}function X(e){var n=e.data,i=e.cloud,u=e.sideNavTop,c=void 0===u?"0px":u;return(0,a.nq)((function(e){return e.setReportRawData}))({base:n}),(0,g.jsx)(t.F0,{hook:o.w,children:(0,g.jsx)(t.rs,{children:(0,g.jsx)(s.$,{sideNavTop:c,cloud:i,singleOnly:!0,children:(0,g.jsxs)(t.rs,{children:[(0,g.jsx)(t.AW,{path:d.bw,children:(0,g.jsx)(B,{})}),(0,g.jsx)(t.AW,{path:d.bw,children:(0,g.jsx)(U,{})}),(0,g.jsx)(t.AW,{path:d.KX,children:(0,g.jsx)(U,{})}),(0,g.jsx)(t.AW,{path:d.WF,children:(0,g.jsx)(L,{})}),(0,g.jsx)(t.AW,{path:d.t3,children:(0,g.jsx)(E,{})}),(0,g.jsx)(t.AW,{path:d.mo,children:(0,g.jsx)(L,{})}),(0,g.jsx)(t.AW,{path:d.n3,children:(0,g.jsx)(E,{})}),(0,g.jsx)(t.AW,{path:d.d2,children:(0,g.jsx)(L,{})}),(0,g.jsx)(t.AW,{path:d.Sx,children:(0,g.jsx)(E,{})}),(0,g.jsx)(t.AW,{path:d.iB,children:(0,g.jsx)(L,{})}),(0,g.jsx)(t.AW,{path:d.dF,children:(0,g.jsx)(E,{})}),(0,g.jsx)(t.AW,{path:d.$n,children:(0,g.jsx)(y,{})}),(0,g.jsx)(t.AW,{path:d.xH,children:(0,g.jsx)(w,{})}),(0,g.jsx)(t.AW,{path:d.TQ,children:(0,g.jsx)(w,{})}),(0,g.jsx)(t.AW,{path:d.qZ,children:(0,g.jsx)(H,{})}),(0,g.jsx)(t.AW,{path:d.Mu,children:(0,g.jsx)(l.gb,{})}),(0,g.jsx)(t.AW,{children:(0,g.jsx)(r.T,{})})]})})})})}var Y=X}}]);
//# sourceMappingURL=628.15fb4e78.chunk.js.map