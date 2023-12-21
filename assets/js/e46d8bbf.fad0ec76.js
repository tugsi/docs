"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[3993],{2745:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=i(5893),r=i(1151);const s={title:"Version 0.72",authors:["derandereandi"],tags:["release"],hide_table_of_contents:!1},a=void 0,o={permalink:"/blog/2021/12/10/version-0-72",editUrl:"https://github.com/evcc-io/docs/tree/main/blog/2021-12-10/version-0-72.md",source:"@site/blog/2021-12-10/version-0-72.md",title:"Version 0.72",description:"Es hat sich in den letzten Wochen viel getan, und dar\xfcber m\xf6chten wir heute etwas ausf\xfchrlicher berichten was es alles in Version 0.72 an Neuem zu entdecken gibt.",date:"2021-12-10T00:00:00.000Z",formattedDate:"10. Dezember 2021",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:1.385,hasTruncateMarker:!1,authors:[{name:"Andreas Linde",title:"Core-Team, Allrounder",url:"https://github.com/DerAndereAndi",imageURL:"https://github.com/DerAndereAndi.png",key:"derandereandi"}],frontMatter:{title:"Version 0.72",authors:["derandereandi"],tags:["release"],hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"Version 0.73",permalink:"/blog/2021/12/12/version-0-73"},nextItem:{title:"Neue Dokumentation und Blog",permalink:"/blog/2021/12/09/blog-und-dokumentation"}},l={authorsImageUrls:[void 0]},d=[{value:"Einfachere Installation",id:"einfachere-installation",level:2},{value:"Einfachere Konfiguration",id:"einfachere-konfiguration",level:2},{value:"Download &amp; Installation",id:"download--installation",level:2},{value:"Changelog",id:"changelog",level:2},{value:"Version 0.72",id:"version-072",level:3},{value:"Version 0.71",id:"version-071",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Es hat sich in den letzten Wochen viel getan, und dar\xfcber m\xf6chten wir heute etwas ausf\xfchrlicher berichten was es alles in Version 0.72 an Neuem zu entdecken gibt."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"evcc configure example",src:i(2805).Z+"",width:"1024",height:"798"})}),"\n",(0,t.jsx)(n.h2,{id:"einfachere-installation",children:"Einfachere Installation"}),"\n",(0,t.jsxs)(n.p,{children:["Der Zugang zu ",(0,t.jsx)(n.strong,{children:"evcc"})," erforderte bisher doch einige technische Kenntnisse im Umgang mit dem jeweiligen Betriebssystem. F\xfcr Linux (Debian, Ubuntu, Raspberry Pi OS) und macOS gibt es nun eine deutlich vereinfachte Installation. So unterst\xfctzt ",(0,t.jsx)(n.strong,{children:"evcc"})," nun die Installation \xfcber die Paketmanager ",(0,t.jsx)(n.code,{children:"apt"})," unter Linux und ",(0,t.jsx)(n.a,{href:"https://brew.sh",children:(0,t.jsx)(n.code,{children:"homebrew"})})," unter macOS."]}),"\n",(0,t.jsxs)(n.p,{children:["Hierf\xfcr haben wir die Installationsanleitungen nochmals \xfcberarbeitet und damit die Installation weiter vereinfacht. Schaut doch mal in der ",(0,t.jsx)(n.a,{href:"/docs/installation",children:"dazugeh\xf6rigen Dokumentation"})," vorbei."]}),"\n",(0,t.jsx)(n.h2,{id:"einfachere-konfiguration",children:"Einfachere Konfiguration"}),"\n",(0,t.jsxs)(n.p,{children:["Auch die Einrichtung von ",(0,t.jsx)(n.strong,{children:"evcc"})," war bisher noch sehr technisch gepr\xe4gt. Seien es die Formatierungsvorgaben von ",(0,t.jsx)(n.a,{href:"https://yaml.org",children:"YAML"}),', welches die Synthax der Konfigurations vorgibt, oder die Ausgestaltung und Anpassung der Konfiguration der eigenen Ger\xe4te in der Konfigurationsdatei. F\xfcr den ein oder anderen sind das doch recht hohe H\xfcrden. Aber das Projektk ist noch jung und das Team \xfcberschaubar, vor allem wenn man bedenkt dass dies f\xfcr die Entwickler "nur" ein Hobby ist.']}),"\n",(0,t.jsxs)(n.p,{children:["Um diese H\xfcrden etwas zu minimieren, f\xfchren wir mit dieser neuen Version 0.72 von ",(0,t.jsx)(n.strong,{children:"evcc"})," eine neue Funktionalit\xe4t ein: Die gef\xfchrte Konfiguration mit ",(0,t.jsx)(n.code,{children:"evcc configure"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Mit diesem Kommando l\xe4sst sich interaktiv eine funktionierende Konfigurationsdatei f\xfcr die eigene Installation erstellen! Es gibt sicher hier und da noch einige Probleme und Fehler, aber wir hoffen es ist ein guter erster Schritt in die richtige Richtung."}),"\n",(0,t.jsx)(n.h2,{id:"download--installation",children:"Download & Installation"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/installation/linux",children:"Debian, Ubuntu, Raspberry Pi"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/installation/macos",children:"macOS Homebrew"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/installation/docker",children:"Docker, Synology"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/installation/manual",children:"Manuell (inkl. Windows)"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"changelog",children:"Changelog"}),"\n",(0,t.jsx)(n.h3,{id:"version-072",children:"Version 0.72"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/evcc-io/evcc/releases/tag/0.72",children:"Detaillierte Liste der \xc4nderungen"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"version-071",children:"Version 0.71"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/evcc-io/evcc/releases/tag/0.71",children:"Detaillierte Liste der \xc4nderungen"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},2805:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/configure-0884d1a4913c5c889bee2181b18a9aa3.gif"},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>a});var t=i(7294);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);