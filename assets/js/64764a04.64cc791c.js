"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[3581],{1309:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var i=r(5893),t=r(1151);const s={sidebar_position:17},o="modbusproxy",d={id:"reference/configuration/modbusproxy",title:"modbusproxy",description:"modbusproxy ist eine Liste von Ger\xe4ten welche f\xfcr Drittsysteme via Modbus TCP im Netzwerk freigeben werden.",source:"@site/docs/reference/configuration/modbusproxy.md",sourceDirName:"reference/configuration",slug:"/reference/configuration/modbusproxy",permalink:"/docs/reference/configuration/modbusproxy",draft:!1,unlisted:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/docs/reference/configuration/modbusproxy.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"telemetry",permalink:"/docs/reference/configuration/telemetry"},next:{title:"Plugins",permalink:"/docs/reference/plugins"}},c={},l=[{value:"Erforderliche Parameter",id:"erforderliche-parameter",level:2},{value:"<code>port</code>",id:"port",level:3},{value:"Optionale Parameter",id:"optionale-parameter",level:2},{value:"<code>rtu</code>",id:"rtu",level:3},{value:"<code>readonly</code>",id:"readonly",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"modbusproxy",children:(0,i.jsx)(n.code,{children:"modbusproxy"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"modbusproxy"})," ist eine Liste von Ger\xe4ten welche f\xfcr Drittsysteme via Modbus TCP im Netzwerk freigeben werden."]}),"\n",(0,i.jsxs)(n.p,{children:["Einige Ger\xe4te lassen nur eine sehr beschr\xe4nkte Anzahl an Modbus TCP Clients zu. Im ung\xfcnstigsten Fall nur genau eine einzige Verbindung wie z.B. bei SolarEdge-Komponenten. Aber auch bei seriellen Modbus RTU RS485-Bussystemen ist ohnehin immer nur ein Master erlaubt.\nMit Hilfe von ",(0,i.jsx)(n.code,{children:"modbusproxy"})," ist es m\xf6glich, evcc zus\xe4tzlich als Modbus-Proxy einzurichten welcher die bestehenden Modbus-Verbindungen mit weiteren Systemen teilen kann.\nDamit kommuniziert evcc direkt mit dem Ger\xe4t, weitere Systeme aber stattdessen mit evcc, welches die Kommunikationverbindungen b\xfcndelt und stellvertretend an das Zielger\xe4t weiterreicht."]}),"\n",(0,i.jsxs)(n.p,{children:["Die ",(0,i.jsx)(n.code,{children:"modbusproxy"})," Konfiguration ist eine Liste von verschiedenen Proxy-Freigaben."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'modbusproxy:\n  - port: 5021\n    uri: 192.0.2.2:502\n  - port: 5022\n    device: /dev/ttyUSB0\n    baudrate: 9600\n    comset: "8N1"\n  - port: 5023\n    uri: 192.0.2.3:502\n    rtu: true\n'})}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["Die Proxy-Funktion unterst\xfctzt ",(0,i.jsx)(n.em,{children:"eingehend"})," (d.h. von Drittsystemen wie z.B. Hausautomation, Logger) ausschlie\xdflich Modbus TCP."]}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Ausgehend"})," in Richtung des abzufragenden Ger\xe4tes (z. B. Wechselrichter, Energiez\xe4hler) wird das Protokoll ggf. entsprechend der Zielger\xe4tekonfiguration \xfcbersetzt."]})]}),"\n",(0,i.jsx)(n.admonition,{title:"Sponsortoken erforderlich",type:"tip",children:(0,i.jsxs)(n.p,{children:["Weitere Informationen zum evcc Sponsorship gibt es hier: ",(0,i.jsx)(n.a,{href:"https://docs.evcc.io/docs/sponsorship",children:"https://docs.evcc.io/docs/sponsorship"})]})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"erforderliche-parameter",children:"Erforderliche Parameter"}),"\n",(0,i.jsx)(n.h3,{id:"port",children:(0,i.jsx)(n.code,{children:"port"})}),"\n",(0,i.jsx)(n.p,{children:"Der lokale TCP/IP-Port unter dem eine Verbindung als Proxyserver bereitstellt wird und eingehende Modbus TCP Verbindungen von Drittsystemen angenommen werden."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"port: 5021\n"})}),"\n",(0,i.jsx)(n.h2,{id:"optionale-parameter",children:"Optionale Parameter"}),"\n",(0,i.jsx)(n.h3,{id:"rtu",children:(0,i.jsx)(n.code,{children:"rtu"})}),"\n",(0,i.jsxs)(n.p,{children:["Zu Netzwerkzielen wird \xfcblicherweise mit Modbus TCP kommuniziert.\nBei Bedarf kann mit der Angabe von ",(0,i.jsx)(n.code,{children:"rtu: true"})," auf Modbus RTU over TCP statt Modbus TCP umgeschaltet werden.\nEin typischer Anwendungsfall daf\xfcr sind einfache, transparente RS485-TCP-Konverter (ohne Protokoll\xfcbersetzung).\nMuss mit der Ger\xe4tekonfiguration \xfcbereinstimmen. Wird bei seriellen Zielsystemen ignoriert."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"rtu: true\n"})}),"\n",(0,i.jsx)(n.h3,{id:"readonly",children:(0,i.jsx)(n.code,{children:"readonly"})}),"\n",(0,i.jsxs)(n.p,{children:["Durch ",(0,i.jsx)(n.code,{children:"readonly: true"})," lassen sich Modbus-Schreibzugriffe durch Drittsysteme pauschal unterbinden."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"readonly: true\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>o});var i=r(7294);const t={},s=i.createContext(t);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);