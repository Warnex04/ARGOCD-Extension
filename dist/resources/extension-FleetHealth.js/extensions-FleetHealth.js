!function(){"use strict";var e={d:function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{Extension:function(){return o},component:function(){return a}});var n=window.React;const o=e=>{var t;const[o,a]=(0,n.useState)([]),[r,i]=(0,n.useState)("1h"),{resource:c,application:s}=(window.location,e),u=(null==(t=null==s?void 0:s.metadata)?void 0:t.name)||"";(0,n.useEffect)((()=>{let e=`/api/v1/applications/${u}/events?resourceUID=${c.metadata.uid}&resourceNamespace=${c.metadata.namespace}&resourceName=${c.metadata.name}&duration=${r}`;"Application"===c.kind&&(e=`/api/v1/applications/${u}/events`),fetch(e).then((e=>e.json())).then((e=>{a((null==e?void 0:e.items)||[])})).catch((e=>{console.error("res.data",e)}))}),[u,c,r])},a=o;var r,i,c;r=window,null==(i=null==r?void 0:r.extensionsAPI)||i.registerResourceExtension(a,"*","Rollout","Metrics",{icon:"fa fa-chart-area"}),null==(c=null==r?void 0:r.extensionsAPI)||c.registerResourceExtension(a,"*","Fleet","Health Status",{icon:"fa fa-chart-area"}),(window.tmp=window.tmp||{}).extensions=t}();