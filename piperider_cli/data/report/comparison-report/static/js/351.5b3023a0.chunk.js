"use strict";(self.webpackChunkpiperider_report=self.webpackChunkpiperider_report||[]).push([[351],{5147:function(e,t,n){n.d(t,{T:function(){return s}});var a=n(5223),i=n(8735),l=n(1564),r=n(2504),o=n(184);function s(e){var t=e.title,n=e.children,s=e.allowModalPopup,u=e.height,c=void 0===u?300:u,d=(0,a.qY)(),m=d.onOpen,x=d.isOpen,h=d.onClose;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.kC,{px:6,py:6,my:3,mx:3,minHeight:"".concat(c,"px"),maxHeight:"".concat(c,"px"),width:"calc(100% - 24px)",bg:"whiteAlpha.700",rounded:"md",onClick:function(){return s&&m()},children:n}),s&&(0,o.jsxs)(l.u_,{size:"full",isOpen:x,onClose:h,children:[(0,o.jsx)(l.ZA,{}),(0,o.jsxs)(l.hz,{p:12,children:[(0,o.jsx)(l.xB,{children:t}),(0,o.jsx)(l.ol,{}),(0,o.jsx)(l.fe,{children:n}),(0,o.jsx)(l.mz,{children:(0,o.jsx)(i.kC,{mt:6,w:"100%",direction:"row",justify:"center",children:(0,o.jsx)(r.zx,{colorScheme:"blue",mr:3,onClick:h,children:"Close"})})})]})]})]})}},7559:function(e,t,n){n.d(t,{f:function(){return f}});var a=n(8735),i=n(2220),l=n(9113),r=n(5272),o=n(8820),s=n(7692),u=n(9126),c=n(4651),d=n(1578),m=n(6036),x=n(922),h=n(972),v=n(184);function f(e){var t=e.columnDatum,n=t.description,f=t.name,p=t.schema_type,g=function(e){var t=e.type,n=(0,x.JH)(e);if(n&&"string"===t)return{backgroundColor:"purple.500",icon:d.Vmi};if(n&&"integer"===t)return{backgroundColor:"orange.500",icon:m.RAZ};if("string"===t)return{backgroundColor:"blue.500",icon:s.sXe};if("numeric"===t||"integer"===t)return{backgroundColor:"red.500",icon:c.Wrf};if("datetime"===t)return{backgroundColor:"teal.500",icon:u.KvO};if("boolean"===t)return{backgroundColor:"pink.500",icon:d.OG8};if("other"===t)return{backgroundColor:"limegreen",icon:o.wEQ};return{backgroundColor:"gray.500",icon:s.cpG}}(t),j=g.backgroundColor,b=g.icon;return(0,v.jsxs)(a.kC,{p:2,bg:"white",justify:"space-between",alignItems:"center",width:"100%",borderTopRadius:"inherit",children:[(0,v.jsxs)(a.kC,{alignItems:"center",children:[(0,v.jsx)(i.u,{label:p,shouldWrapChildren:!0,children:(0,v.jsx)(l.JO,{mt:1,mx:2,p:1,rounded:"md",color:"white",backgroundColor:j,as:b,boxSize:7})}),(0,v.jsx)(a.xv,{as:"span",fontSize:"xl",fontWeight:"semibold",noOfLines:1,width:280,children:f})]}),(0,v.jsx)(h.l,{label:n,prefix:" - via ",children:(0,v.jsx)(r.sz,{color:"gray.400",boxSize:"20px",mr:3})})]})}},7122:function(e,t,n){n.d(t,{f:function(){return O},S:function(){return E}});var a=n(8735),i=n(6523),l=n(922),r=n(6305),o=n(9683),s=n(709),u=n(184);function c(e){var t=e.data,n=t.counts,a=t.labels,i=t.ratios,l={responsive:!0,maintainAspectRatio:!1,animation:!1,layout:{padding:10},plugins:{legend:{position:"left",labels:{textAlign:"left",boxHeight:15,boxWidth:15,generateLabels:function(e){var t=e.data,n=t.datasets,a=t.labels;return n[0].data.map((function(e,t){var l,r;return{text:"".concat(null===a||void 0===a?void 0:a[t]," \n ").concat((0,s.Zn)(i[t])," / ").concat(e),fillStyle:null===n||void 0===n||null===(l=n[0])||void 0===l||null===(r=l.backgroundColor)||void 0===r?void 0:r[t]}}))}}}}},c={labels:a,datasets:[{data:n,borderWidth:0,backgroundColor:["#63B3ED","#D9D9D9","#FF0861","#FFCF36"],hoverOffset:4}]};return(0,u.jsx)(o.by,{data:c,options:l,plugins:[r.De]})}r.kL.register(r.qi,r.u);var d=n(885);function m(e){var t=e.data,n=t.counts,a=t.values,i=e.total,l={responsive:!0,maintainAspectRatio:!1,animation:!1,indexAxis:"y",scales:{x:{display:!1},y:{display:!1}},plugins:{tooltip:{mode:"y",position:"nearest",intersect:!1,callbacks:{title:function(e){var t=(0,d.Z)(e,1)[0],a=t.dataIndex,l=t.dataset.data[a],r=(0,s.Zn)(n[a]/i);return"Count: ".concat(l,"\n(").concat(r,")")}}}}},r={labels:a.slice(0,5),datasets:[{indexAxis:"y",data:n.slice(0,5),backgroundColor:"#63B3ED",hoverBackgroundColor:"#002A53",borderWidth:0,borderColor:"#D9D9D9",borderRadius:10,borderSkipped:!1,barPercentage:.6,categoryPercentage:.5}]},c={id:"progressBar",beforeDatasetDraw:function(e){var t=e.ctx,n=e.data,a=e.chartArea,i=a.left,l=a.right,r=a.height,o=e.scales.y;t.save();var u=n.datasets[0],c="#36454f",d=r/o.ticks.length*.6*.5,m=u.data.length<5?5:0;u.data.forEach((function(e,a){var r,x=o.getPixelForValue(a),h=x-d/2,v=x+d/2,f=h-7,p=m+5,g=u.data[a],j="number"!==typeof g?g:(0,s.J8)(g);t.fillStyle=c,t.textAlign="right",t.textBaseline="middle",t.fillText(String(j),l,f);var b=null===(r=n.labels)||void 0===r?void 0:r[a],y="number"!==typeof b?b:(0,s.J8)(b);t.fillStyle=c,t.textAlign="left",t.textBaseline="middle",t.fillText((0,s.o2)(String(y),30),i,f),function(e,t){var n=t.leftBound,a=t.rightBound,i=t.drawRadius,l=t.barBottomYPos,r=t.barTopYPos,o=t.fillColor;e.beginPath(),e.moveTo(n+i,r),e.lineTo(a-i,r),e.arcTo(a,r,a,r+i,i),e.arcTo(a,l,a-i,l,i),e.lineTo(n+i,l),e.arcTo(n,l,n,l-i,i),e.arcTo(n,r,n+i,r,i),e.fillStyle=o,e.closePath(),e.fill()}(t,{leftBound:i,rightBound:l,barTopYPos:h,barBottomYPos:v,drawRadius:p,fillColor:String(u.borderColor)})}))}};return(0,u.jsx)(o.$Q,{data:r,options:l,plugins:[c]})}r.kL.register(r.uw,r.ZL,r.u);var x=n(2982),h=n(2387);n(1815);function v(e){var t=e.data,n=t.histogram,a=t.type,i=t.total,l=t.min,r=t.max,c=n,m=c.counts,v=c.bin_edges,f="datetime"===a,p=f?m.map((function(e,t){return{x:v[t],y:e}})):m,g=v.map((function(e,t){return"".concat((0,s.J8)(e),"-").concat((0,s.J8)(v[t+1]))})).slice(0,-1),j={responsive:!0,maintainAspectRatio:!1,animation:!1,plugins:{tooltip:{mode:"index",position:"nearest",intersect:!1,callbacks:{title:function(e){var t=(0,d.Z)(e,1)[0].dataIndex,n=function(e,t){var n=e[t],a=e[t+1],i=(0,s.J8)(n),l=(0,s.J8)(a);return"".concat(i," - ").concat(l)}(v,t),l=(0,s.Zn)(m[t]/i),r=f?h.qI:"string"===a?h.d4:h.E5;return"".concat(r,": ").concat(n,"\n(").concat(l,")")}}}},scales:{x:f?{type:"timeseries",min:l,max:r,adapters:{date:{}},time:{minUnit:"day"},grid:{display:!1},ticks:{minRotation:30,maxRotation:30,maxTicksLimit:8}}:{type:"category",grid:{display:!1},ticks:{callback:function(e,t){return g[t]}}},y:{type:"linear",max:Math.max.apply(Math,(0,x.Z)(m)),grid:{color:"lightgray",borderDash:[2,2]},ticks:{maxTicksLimit:8,callback:function(e,t){return(0,s.J8)(e)}}}}},b={labels:g,datasets:[{label:"counts",data:p,backgroundColor:"#63B3ED",borderColor:"#4299E1",hoverBackgroundColor:"#002A53",borderWidth:1,categoryPercentage:1,barPercentage:1,xAxisID:"x"}]};return(0,u.jsx)(o.kL,{type:"bar",options:j,data:b})}r.kL.register(r.RM,r.f$,r.uw,r.ZL,r.u);var f=function(e){var t=e.children;return(0,u.jsx)(a.kC,{p:2,bg:"white",height:"100%",direction:"column",borderBottomRadius:"inherit",children:t})},p=n(5147),g=n(7559),j=n(2220),b=n(5272),y=n(2196),k=function(e){var t=e.label,n=e.value,i=e.subvalue,l=e.metaKey,r="string"===typeof l?y.d[l]:null;return(0,u.jsxs)(a.kC,{direction:"column",w:"100%",mx:2,my:2,children:[(0,u.jsx)(j.u,{label:r,isDisabled:!Boolean(r),placement:"top",children:(0,u.jsxs)(a.kC,{alignItems:"center",w:"fit-content",children:[(0,u.jsx)(a.xv,{lineHeight:"5",fontSize:"small",children:t}),(0,u.jsx)(b.sz,{color:"gray.400",boxSize:"12px",ml:2})]})}),(0,u.jsx)(a.xv,{fontWeight:"bold",children:n}),i&&(0,u.jsx)(a.xv,{fontSize:"smaller",children:i})]})};function T(e){var t=e.columnDatum,n=e.children,i=t.nulls,r=t.invalids,o=(0,l.gQ)(t),c=o.invalidsOfTotal,d=o.nullsOfTotal;return(0,u.jsxs)(a.kC,{direction:"column",children:[(0,u.jsx)(a.xv,{textAlign:"center",fontWeight:"bold",my:2,children:"Data Composition"}),(0,u.jsx)(a.iz,{}),(0,u.jsxs)(a.kC,{justify:"space-evenly",children:[(0,u.jsx)(k,{metaKey:"nulls",label:h.td,value:(0,s.uy)(d,s.Zn),subvalue:i}),(0,u.jsx)(a.iz,{orientation:"vertical"}),(0,u.jsx)(k,{metaKey:"invalids",label:h.ST,value:(0,s.uy)(c,s.Zn),subvalue:r}),n]})]})}var C=function(e){var t=e.columnDatum,n=t.trues,i=t.falses;return(0,u.jsxs)(a.kC,{direction:"column",children:[(0,u.jsxs)(T,{columnDatum:t,children:[(0,u.jsx)(a.iz,{orientation:"vertical"}),(0,u.jsx)(k,{label:h.aJ,value:(0,s.uy)(i,s.uf),metaKey:"falses"}),(0,u.jsx)(a.iz,{orientation:"vertical"}),(0,u.jsx)(k,{label:h.Y0,value:(0,s.uy)(n,s.uf),metaKey:"trues"})]}),(0,u.jsx)(a.iz,{})]})};function z(e){var t=e.columnDatum,n=t.distinct,i=t.duplicates,r=(0,l.gQ)(t),o=r.distinctOfTotal,c=r.duplicatesOfTotal;return(0,u.jsxs)(a.kC,{direction:"column",children:[(0,u.jsx)(a.xv,{textAlign:"center",fontWeight:"bold",my:2,children:"Uniqueness"}),(0,u.jsx)(a.iz,{}),(0,u.jsxs)(a.kC,{justify:"space-evenly",children:[(0,u.jsx)(k,{metaKey:"distinct",label:h.A$,value:(0,s.uy)(o,s.Zn),subvalue:n}),(0,u.jsx)(a.iz,{orientation:"vertical"}),(0,u.jsx)(k,{metaKey:"duplicates",label:h.hD,value:(0,s.uy)(c,s.Zn),subvalue:i})]})]})}var D=function(e){var t=e.columnDatum,n=(0,l.gQ)(t).validsOfTotal,i=t.valids,r=(0,s.Th)(t),o=r.topValues,c=r.topCounts;return(0,u.jsxs)(a.kC,{direction:"column",children:[(0,u.jsxs)(T,{columnDatum:t,children:[(0,u.jsx)(a.iz,{orientation:"vertical"}),(0,u.jsx)(k,{metaKey:"valids",label:h.Px,value:(0,s.uy)(n,s.Zn),subvalue:i})]}),(0,u.jsx)(a.iz,{}),(0,u.jsx)(z,{columnDatum:t}),(0,u.jsx)(a.iz,{}),o&&c&&(0,u.jsx)(k,{metaKey:"topk",label:h.IK,value:o,subvalue:c})]})};function w(e){var t=e.columnDatum,n=t.avg,i=t.stddev,r=t.min,o=t.max,c="string"===t.type,d=(0,l.JH)(t),m=c&&!d?"Length":"Data";return(0,u.jsxs)(a.kC,{direction:"column",children:[(0,u.jsxs)(a.xv,{textAlign:"center",fontWeight:"bold",my:2,children:[m," Statistics"]}),(0,u.jsx)(a.iz,{}),n&&(0,u.jsxs)(a.kC,{justify:"space-evenly",children:[(0,u.jsx)(k,{metaKey:"avg",label:h.dc,value:(0,s.uy)(n,s.uf)}),(0,u.jsx)(a.iz,{orientation:"vertical"}),(0,u.jsx)(k,{metaKey:"stddev",label:h.lb,value:h.o6+(0,s.uy)(i,s.uf)}),(0,u.jsx)(a.iz,{orientation:"vertical"})]}),(0,u.jsx)(a.iz,{}),(0,u.jsxs)(a.kC,{justify:"space-evenly",children:[(0,u.jsx)(k,{metaKey:"min",label:h.KX,value:(0,s.uy)(r,s.uf)}),(0,u.jsx)(a.iz,{orientation:"vertical"}),(0,u.jsx)(k,{metaKey:"max",label:h.k2,value:(0,s.uy)(o,s.uf)})]})]})}var A=function(e){var t=e.columnDatum;return(0,u.jsxs)(a.kC,{direction:"column",children:[(0,u.jsx)(T,{columnDatum:t}),(0,u.jsx)(a.iz,{}),(0,u.jsx)(z,{columnDatum:t}),(0,u.jsx)(a.iz,{}),(0,u.jsx)(w,{columnDatum:t})]})},K=n(7005),_=n(5984);function P(e){var t=e.columnDatum;i.a$.parse(t);var n=[{label:"Min",value:t.min,metaKey:"min"},{label:"5%",value:t.p5,metaKey:"p5"},{label:"25%",value:t.p25,metaKey:"p25"},{label:"50%",value:t.p50,metaKey:"p50"},{label:"75%",value:t.p75,metaKey:"p75"},{label:"95%",value:t.p95,metaKey:"p95"},{label:"Max",value:t.max,metaKey:"max"}];return(0,u.jsx)(K.xJ,{w:"100%",children:(0,u.jsxs)(K.iA,{size:"sm",variant:"simple",children:[(0,u.jsx)(K.hr,{children:(0,u.jsx)(K.Tr,{children:n.map((function(e){return(0,u.jsx)(K.Th,{pr:0,pl:2,textAlign:"center",children:(0,u.jsx)(j.u,{label:y.d[e.metaKey],children:e.label})},(0,_.x0)())}))})}),(0,u.jsx)(K.p3,{children:(0,u.jsx)(K.Tr,{children:n.map((function(e){return(0,u.jsx)(K.Td,{pr:0,pl:2,textAlign:"center",children:(0,s.uy)(e.value,s.J8)},(0,_.x0)())}))})})]})})}var Z=function(e){var t=e.columnDatum,n=t.negatives,i=t.zeros,r=(0,l.gQ)(t),o=r.negativesOfTotal,c=r.zerosOfTotal;return(0,u.jsxs)(a.kC,{direction:"column",children:[(0,u.jsxs)(T,{columnDatum:t,children:[(0,u.jsx)(a.iz,{orientation:"vertical"}),(0,u.jsx)(k,{metaKey:"negatives",label:h.wC,value:(0,s.uy)(o,s.Zn),subvalue:n}),(0,u.jsx)(a.iz,{orientation:"vertical"}),(0,u.jsx)(k,{metaKey:"zeros",label:h.AG,value:(0,s.uy)(c,s.Zn),subvalue:i})]}),(0,u.jsx)(a.iz,{}),(0,u.jsx)(a.iz,{}),(0,u.jsx)(w,{columnDatum:t}),(0,u.jsx)(a.iz,{}),(0,u.jsx)(a.kC,{mt:2,children:(0,u.jsx)(P,{columnDatum:t})})]})},S=function(e){var t=e.columnDatum,n=t.valids,i=(0,l.gQ)(t).validsOfTotal;return(0,u.jsxs)(a.kC,{direction:"column",children:[(0,u.jsxs)(T,{columnDatum:t,children:[(0,u.jsx)(a.iz,{orientation:"vertical"}),(0,u.jsx)(a.iz,{orientation:"vertical"}),(0,u.jsx)(k,{metaKey:"valids",label:h.Px,value:(0,s.uy)(i,s.Zn),subvalue:n})]}),(0,u.jsx)(a.iz,{})]})},B=function(e){var t=e.columnDatum,n=t.zero_length,i=(0,l.gQ)(t).zeroLengthOfTotal;return(0,u.jsxs)(a.kC,{direction:"column",children:[(0,u.jsxs)(T,{columnDatum:t,children:[(0,u.jsx)(a.iz,{orientation:"vertical"}),(0,u.jsx)(k,{metaKey:"zero_length",label:h.cU,value:(0,s.uy)(i,s.Zn),subvalue:n})]}),(0,u.jsx)(a.iz,{}),(0,u.jsx)(z,{columnDatum:t}),(0,u.jsx)(a.iz,{}),(0,u.jsx)(w,{columnDatum:t}),(0,u.jsx)(a.iz,{}),(0,u.jsx)(a.kC,{justify:"space-evenly"})]})};function O(e){var t=e.columnDatum;i.a$.parse(t);var n=t.name;return(0,u.jsxs)(a.kC,{direction:"column",bg:"gray.300",width:{xl:"32%",lg:"45%",md:"100%",base:"100%"},border:"1px solid",borderColor:"gray.300",my:3,rounded:"lg",children:[(0,u.jsx)(g.f,{columnDatum:t}),(0,u.jsx)(p.T,{title:n,allowModalPopup:Boolean((0,l.W9)(t)),children:E(t)}),(0,u.jsx)(f,{children:R(t)})]})}function E(e,t){var n=e.total,i=e.name,r=e.type,o=e.schema_type,s=e.histogram,d=e.topk,x=e.trues,f=e.falses,p=e.nulls,g=e.invalids,j=e.valids,b=e.min,y=e.max,k=r===(null===t||void 0===t?void 0:t.type)&&i===(null===t||void 0===t?void 0:t.name),T=(0,l.W9)(k?t:e);if("topk"===T&&d)return(0,u.jsx)(m,{data:d,total:n||0});if("histogram"===T&&s)return(0,u.jsx)(v,{data:{histogram:s,min:b,max:y,type:r,total:n}});if("pie"===T){var C=[x,f,p,g].map((function(e){return e||0})),z=[h.Y0,h.aJ,h.td,h.ST].map((function(e){return e.charAt(0)+e.slice(1).toLowerCase()})),D=C.map((function(e){return e/Number(n)}));return(0,u.jsx)(c,{data:{counts:C,labels:z,ratios:D}})}var w=Boolean(j)?"Chart rendering unavailable for (type: ".concat(o,")"):"There are insufficient valid data points in this dataset";return(0,u.jsx)(a.kC,{h:230,alignItems:"center",w:"100%",children:(0,u.jsx)(a.xv,{textAlign:"center",w:"inherit",children:w})})}function R(e){var t=e.type,n=(0,l.JH)(e);return"string"!==t&&"integer"!==t||!n?"numeric"===t||"integer"===t?(0,u.jsx)(Z,{columnDatum:e}):"boolean"===t?(0,u.jsx)(C,{columnDatum:e}):"string"===t?(0,u.jsx)(B,{columnDatum:e}):"datetime"===t?(0,u.jsx)(A,{columnDatum:e}):"other"===t?(0,u.jsx)(S,{columnDatum:e}):(0,u.jsxs)(a.xv,{textAlign:"center",w:"inherit",children:["The column type: ",t," cannot be displayed"]}):(0,u.jsx)(D,{columnDatum:e})}},6786:function(e,t,n){n.d(t,{L:function(){return r}});var a=n(1413),i=n(2791),l=n(3442);function r(e){(0,i.useEffect)((function(){(0,l._)((0,a.Z)({},e))}),[])}},2196:function(e,t,n){n.d(t,{d:function(){return a}});var a={total:"The total count of values, regardless validity",nulls:"The count of values that are null type",non_nulls:"The count of non null values",distinct:"The count of distinct kinds of values (e.g. [a,b,c,c] => [a,b,c])",duplicates:"The count of values that are recurring (e.g. [a,b,c,c] => [c,c])",non_duplicates:"The count of values that are non-recurring (e.g. [a,b,c,c] => [a,b])",topk:"The most common or frequent value",name:"Name of this column",description:"Descriptor of this column",type:"Generic types of schema, python-based",schema_type:"The column type definition in SQL database",valids:"The count of values that are non-null and not invalid",invalids:"The count of values that don't match the schema type. For example, a string in a numeric column.",zeros:"The count of numerical values that equal zero exactly",negatives:"The count of numerical values that are less than zero",positives:"The count of numerical values that are more than zero",zero_length:"The count of string values with zero lengths exactly",non_zero_length:"The count of string values with non-zero lengths",trues:"The count of boolean true values",falses:"The count of boolean false values",sum:"The sum of a column's values",avg:"The average of a column's values",stddev:"The standard deviation of a column's values",min:"The minimum value of a column's range",max:"The maximum value of a columns's range",p5:"The quantile value of the dataset (5th percentile)",p25:"The quantile value of the dataset (25th percentile)",p50:"The quantile value of the dataset (50th percentile)",p75:"The quantile value of the dataset (75th percentile)",p95:"The quantile value of the dataset (95th percentile)"}},3442:function(e,t,n){n.d(t,{_:function(){return r},m:function(){return l}});var a=n(1413),i=n(8083),l={PAGE_VIEW:"Page View"};function r(e){var t=e.eventName,n=e.eventProperties,l=e.eventOptions,r=window.PIPERIDER_METADATA.amplitude_api_key,o=window.PIPERIDER_METADATA.amplitude_project_id;return r?(0,i.j)(t,(0,a.Z)({project_id:o},n),l):console.info(t,(0,a.Z)({project_id:o},n),l)}}}]);
//# sourceMappingURL=351.5b3023a0.chunk.js.map