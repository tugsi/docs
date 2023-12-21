"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[2145],{6683:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var o=r(5893),s=r(1151);const t={sidebar_position:17},i="modbusproxy",c={id:"reference/configuration/modbusproxy",title:"modbusproxy",description:"The modbusproxy setting is a list of devices that are exposed for third-party systems via Modbus TCP on the network.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/reference/configuration/modbusproxy.md",sourceDirName:"reference/configuration",slug:"/reference/configuration/modbusproxy",permalink:"/en/docs/reference/configuration/modbusproxy",draft:!1,unlisted:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/i18n/en/docusaurus-plugin-content-docs/current/reference/configuration/modbusproxy.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"telemetry",permalink:"/en/docs/reference/configuration/telemetry"},next:{title:"Plugins",permalink:"/en/docs/reference/plugins"}},d={},a=[{value:"Required Parameters",id:"required-parameters",level:2},{value:"<code>port</code>",id:"port",level:3},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"<code>rtu</code>",id:"rtu",level:3},{value:"<code>readonly</code>",id:"readonly",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"modbusproxy",children:(0,o.jsx)(n.code,{children:"modbusproxy"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"modbusproxy"})," setting is a list of devices that are exposed for third-party systems via Modbus TCP on the network."]}),"\n",(0,o.jsxs)(n.p,{children:["Some devices allow only a very limited number of Modbus TCP clients. In the worst case, only a single connection is allowed, as is the case with SolarEdge components. Additionally, in serial Modbus RTU RS485 bus systems, only one master is allowed.\nWith the help of ",(0,o.jsx)(n.code,{children:"modbusproxy"}),", it's possible to set up evcc as a Modbus proxy that can share existing Modbus connections with other systems. This allows evcc to communicate directly with the device, while other systems communicate with evcc, which bundles the communication connections and forwards them to the target device."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"modbusproxy"})," configuration is a list of different proxy configurations."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'modbusproxy:\n  - port: 5021\n    uri: 192.0.2.2:502\n  - port: 5022\n    device: /dev/ttyUSB0\n    baudrate: 9600\n    comset: "8N1"\n  - port: 5023\n    uri: 192.0.2.3:502\n    rtu: true\n'})}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"Incoming"})," (from third-party systems such as home automation, loggers), the proxy function exclusively supports Modbus TCP."]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"Outgoing"})," towards the target device to be queried (e.g., inverter, energy meter), the protocol may be translated according to the target device's configuration."]})]}),"\n",(0,o.jsx)(n.admonition,{title:"Sponsortoken required",type:"tip",children:(0,o.jsxs)(n.p,{children:["For more information about evcc sponsorship, please visit ",(0,o.jsx)(n.a,{href:"../../sponsorship",children:"the sponsorship page"}),"."]})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,o.jsx)(n.h3,{id:"port",children:(0,o.jsx)(n.code,{children:"port"})}),"\n",(0,o.jsx)(n.p,{children:"The local TCP/IP port under which a connection is provided as a proxy server, and from which incoming Modbus TCP connections from third-party systems are accepted."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"port: 5021\n"})}),"\n",(0,o.jsx)(n.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,o.jsx)(n.h3,{id:"rtu",children:(0,o.jsx)(n.code,{children:"rtu"})}),"\n",(0,o.jsxs)(n.p,{children:["Modbus TCP is typically used for communication with network targets. If needed, you can switch to Modbus RTU over TCP by specifying ",(0,o.jsx)(n.code,{children:"rtu: true"}),". A typical use case is for simple transparent RS485-TCP converters (without protocol translation). This must match the device's configuration. It's ignored for serial target systems."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"rtu: true\n"})}),"\n",(0,o.jsx)(n.h3,{id:"readonly",children:(0,o.jsx)(n.code,{children:"readonly"})}),"\n",(0,o.jsxs)(n.p,{children:["By setting ",(0,o.jsx)(n.code,{children:"readonly: true"}),", you can prevent Modbus write accesses by third-party systems."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"readonly: true\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>i});var o=r(7294);const s={},t=o.createContext(s);function i(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);