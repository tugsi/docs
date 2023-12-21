"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[8397],{449:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var o=t(5893),r=t(1151);const s={sidebar_position:8},c="network",i={id:"reference/configuration/uri",title:"network",description:"Defines the IP address or hostname and port on which the web interface should be accessed.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/reference/configuration/uri.md",sourceDirName:"reference/configuration",slug:"/reference/configuration/uri",permalink:"/en/docs/reference/configuration/uri",draft:!1,unlisted:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/i18n/en/docusaurus-plugin-content-docs/current/reference/configuration/uri.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"hems",permalink:"/en/docs/reference/configuration/hems"},next:{title:"interval",permalink:"/en/docs/reference/configuration/interval"}},a={},d=[];function u(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"network",children:(0,o.jsx)(n.code,{children:"network"})}),"\n",(0,o.jsx)(n.p,{children:"Defines the IP address or hostname and port on which the web interface should be accessed."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"network:\n  # schema is the HTTP schema\n  # setting to `https` does not enable https, it only changes the way URLs are generated\n  schema: http\n  # host is the hostname or IP address\n  # if the host name contains a `.local` suffix, the name will be announced on MDNS\n  # docker: MDNS announcements don't work. host must be set to the docker host's name.\n  host: evcc.local\n  # port is the listening port for UI and api\n  # evcc will listen on all available interfaces\n  port: 7070\n"})})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>c});var o=t(7294);const r={},s=o.createContext(r);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);