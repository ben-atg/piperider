"use strict";(self.webpackChunk_infuseai_piperider_ui=self.webpackChunk_infuseai_piperider_ui||[]).push([[984],{7984:function(e,n,t){t.r(n),t.d(n,{default:function(){return P}});var a=t(1431),i=t(7615),r=t(2753),l=t(1756),s=t(2847),o=t(2471),d=t(7708),c=t(7437),u=t(962),p=t(4641),m=t(3512),x=t(3214),h=t(2282),j=t(4236),g=t(2175),f=t(7932),b=t(5887),v=["added","deleted","changed"];function C(e){var n=e.added,t=void 0===n?0:n,a=e.deleted,r=void 0===a?0:a,l=e.changed,s=void 0===l?0:l,o=(0,f.Z)(e,v);return(0,b.jsxs)(i.kC,(0,g.Z)((0,g.Z)({gap:2},o),{},{children:["( Added:",(0,b.jsx)(i.xv,{as:"span",fontWeight:700,children:t}),"Deleted:",(0,b.jsx)(i.xv,{as:"span",fontWeight:700,children:r}),"Changed:",(0,b.jsx)(i.xv,{as:"span",fontWeight:700,children:s}),")"]}))}var D=t(421),w=t(3015),y=t(1055),S=t(6674),k=t(3851);function P(e){var n,t=e.data,g=e.columnName,f=e.tableName;(0,y.jr)("Comparison Report: Table Column Details"),(0,y.Lp)({eventName:S.mk.PAGE_VIEW,eventProperties:{type:S.bB,page:"column-details-page"}});var v=t.base.tables,P=t.input.tables,E=(0,l.useState)(0),R=(0,a.Z)(E,2),W=R[0],_=R[1],N=0===g.length;(0,w.n)((function(e){return e.setReportRawData}))({base:t.base,input:t.input});var Z=w.n.getState(),A=Z.tableColumnsOnly,I=void 0===A?[]:A,M=Z.rawData,O=I.find((function(e){return(0,a.Z)(e,1)[0]===f}));if(!f||!v||!P||!O)return(0,b.jsx)(s.o,{isSingleReport:!1,children:(0,b.jsx)(m.J,{text:"No profile data found for table name: ".concat(f)})});var B=(0,a.Z)(O,3),G=B[1],Q=G.base,z=G.target,H=B[2],K=v[f],V=P[f],Y=(null===K||void 0===K?void 0:K.columns)||{},J=(null===V||void 0===V?void 0:V.columns)||{},L=Y[g],$=J[g],q=$||L,F=(L||{}).type,U=($||{}).type,X=(0,x.MM)(q),ee=X.backgroundColor,ne=X.icon;return(0,b.jsx)(s.o,{isSingleReport:!1,children:(0,b.jsx)(k.$,{initAsExpandedTables:!0,rawData:M,tableColEntries:I,tableName:f,columnName:g,children:N?(0,b.jsxs)(i.P4,{maxHeight:c.t4,overflowY:"auto",p:10,children:[(0,b.jsx)(D.Q,{title:f,subtitle:"Table",mb:5,infoTip:null===(n=V||K)||void 0===n?void 0:n.description}),(0,b.jsxs)(r.mQ,{defaultIndex:0,children:[(0,b.jsxs)(r.td,{children:[(0,b.jsx)(r.OK,{children:"Overview"}),(0,b.jsx)(r.OK,{children:"Schema"})]}),(0,b.jsxs)(r.nP,{children:[(0,b.jsxs)(r.x4,{children:[(0,b.jsx)(T,{}),(0,b.jsxs)(i.rj,{templateColumns:"1fr 1px 1fr",gap:3,children:[(0,b.jsx)(h.m,{tableDatum:K}),(0,b.jsx)(i.iz,{orientation:"vertical"}),(0,b.jsx)(h.m,{tableDatum:V})]})]}),(0,b.jsxs)(r.x4,{children:[(0,b.jsx)(i.kC,{pb:3,children:(0,b.jsx)(C,{fontWeight:"semibold",color:"gray.600",added:H.added,deleted:H.deleted,changed:H.changed})}),(0,b.jsx)(i.rj,{templateColumns:"1fr",gap:3,height:"100%",children:(0,b.jsx)(j.r,{baseTableEntryDatum:Q,targetTableEntryDatum:z})})]})]})]})]}):(0,b.jsxs)(i.rj,{templateColumns:"1fr 1fr",width:"100%",maxHeight:c.t4,overflowY:"auto",children:[(0,b.jsxs)(i.P4,{colSpan:2,rowSpan:2,p:9,children:[(0,b.jsx)(D.Q,{title:g,subtitle:null===q||void 0===q?void 0:q.schema_type,infoTip:(null===$||void 0===$?void 0:$.description)||(null===L||void 0===L?void 0:L.description),mb:5,borderBottom:c.dx,icon:ne,iconColor:ee}),(0,b.jsx)(T,{})]}),(0,b.jsx)(i.P4,{colSpan:2,px:9,py:2,bg:"gray.50",children:(0,b.jsxs)(i.rj,{templateColumns:"1fr 1fr",gap:8,minWidth:0,children:[(0,b.jsx)(o.t,{columnDatum:L}),(0,b.jsx)(o.t,{columnDatum:$})]})}),((0,x.jl)(F)||(0,x.jl)(U))&&(0,b.jsx)(i.P4,{colSpan:2,gridRow:"span 1",px:9,py:2,bg:"gray.50",children:(0,b.jsxs)(i.rj,{templateColumns:"1fr 1fr",gap:8,children:[(0,b.jsx)(u.E,{columnDatum:L}),(0,b.jsx)(u.E,{columnDatum:$})]})}),((0,x.hG)(F)||(0,x.hG)(U))&&(0,b.jsx)(i.P4,{colSpan:2,gridRow:"span 1",p:9,bg:"gray.50",children:(0,b.jsxs)(i.rj,{templateColumns:"1fr 1fr",gap:8,children:[(0,b.jsx)(p.M,{columnDatum:L}),(0,b.jsx)(p.M,{columnDatum:$})]})}),(0,b.jsx)(i.P4,{colSpan:2,gridRow:"span 1",minWidth:0,p:9,bg:"gray.50",children:(0,b.jsx)(d.r,{baseColumnDatum:L,targetColumnDatum:$,hasSplitView:!0,hasAnimation:!0,tabIndex:W,onSelectTab:function(e){return _(e)}})})]})})})}function T(){return(0,b.jsx)(i.rj,{templateColumns:"1fr 1fr",mb:2,gap:10,children:["Base","Target"].map((function(e,n){return(0,b.jsx)(i.kC,{alignItems:"center",w:"100%",children:(0,b.jsx)(i.xv,{fontWeight:"semibold",fontSize:"2xl",color:"gray.400",w:"100%",children:e})},n)}))})}}}]);
//# sourceMappingURL=984.445255cc.chunk.js.map