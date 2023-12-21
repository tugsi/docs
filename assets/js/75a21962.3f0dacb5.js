"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[6968],{4195:(e,n,t)=>{t.d(n,{ZP:()=>l});var a=t(5893),r=t(1151);function i(e){const n={a:"a",admonition:"admonition",p:"p",...(0,r.a)(),...e.components};return(0,a.jsx)(n.admonition,{title:"Sponsor-Token erforderlich",type:"tip",children:(0,a.jsxs)(n.p,{children:["Weitere Informationen zum \ud83d\udc9a evcc Sponsorship gibt es ",(0,a.jsx)(n.a,{href:"/docs/sponsorship",children:"hier"}),"."]})})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},3847:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=t(5893),r=t(1151),i=(t(4866),t(5162),t(4195));const l={sidebar_position:3},s="Fahrzeuge",o={id:"devices/vehicles",title:"Fahrzeuge",description:"Um die Ladung auf einen bestimmten Ladestand (SoC) zu begrenzen, und die meisten Wallboxen diesen nicht kennen, kann evcc direkt mit dem Fahrzeug \xfcber den Fahrzeughersteller kommunizieren.",source:"@site/docs/devices/vehicles.mdx",sourceDirName:"devices",slug:"/devices/vehicles",permalink:"/docs/devices/vehicles",draft:!1,unlisted:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/docs/devices/vehicles.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Hausinstallation",permalink:"/docs/devices/meters"},next:{title:"Referenz",permalink:"/docs/reference/"}},c={},d=[{value:"Aiways",id:"aiways",level:2},{value:"Audi",id:"audi",level:2},{value:"BMW",id:"bmw",level:2},{value:"Citro\xebn",id:"citro\xebn",level:2},{value:"Dacia",id:"dacia",level:2},{value:"DS",id:"ds",level:2},{value:"Fiat",id:"fiat",level:2},{value:"Ford",id:"ford",level:2},{value:"Hyundai Bluelink",id:"hyundai-bluelink",level:2},{value:"Jaguar",id:"jaguar",level:2},{value:"Jeep",id:"jeep",level:2},{value:"Kia Bluelink",id:"kia-bluelink",level:2},{value:"Land Rover",id:"land-rover",level:2},{value:"Mini",id:"mini",level:2},{value:"Nissan",id:"nissan",level:2},{value:"Leaf",id:"leaf",level:3},{value:"Leaf (pre 2019)",id:"leaf-pre-2019",level:3},{value:"Opel",id:"opel",level:2},{value:"Peugeot",id:"peugeot",level:2},{value:"Polestar",id:"polestar",level:2},{value:"Porsche",id:"porsche",level:2},{value:"Renault",id:"renault",level:2},{value:"Seat",id:"seat",level:2},{value:"CupraConnect Gen3 (Ateca, Leon, Formentor)",id:"cupraconnect-gen3-ateca-leon-formentor",level:3},{value:"CupraConnect Gen4 (Born)",id:"cupraconnect-gen4-born",level:3},{value:"Skoda",id:"skoda",level:2},{value:"Andere",id:"andere",level:3},{value:"Enyaq",id:"enyaq",level:3},{value:"Smart EQ",id:"smart-eq",level:2},{value:"Tesla",id:"tesla",level:2},{value:"Volkswagen",id:"volkswagen",level:2},{value:"We Connect (legacy)",id:"we-connect-legacy",level:3},{value:"We Connect ID",id:"we-connect-id",level:3},{value:"Volvo",id:"volvo",level:2},{value:"legacy",id:"legacy",level:3},{value:"Generische Unterst\xfctzung",id:"generische-unterst\xfctzung",level:2},{value:"manuell",id:"manuell",level:3},{value:"evNotify",id:"evnotify",level:3},{value:"ISO15118",id:"iso15118",level:3},{value:"mazda2mqtt",id:"mazda2mqtt",level:3},{value:"mg2mqtt",id:"mg2mqtt",level:3},{value:"Offline",id:"offline",level:3},{value:"Open Vehicle Monitoring System",id:"open-vehicle-monitoring-system",level:3},{value:"PSA Car Controller",id:"psa-car-controller",level:3},{value:"TeslaMate",id:"teslamate",level:3},{value:"Tronity",id:"tronity",level:3},{value:"Scooter",id:"scooter",level:2},{value:"NIU E-Scooter",id:"niu-e-scooter",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"fahrzeuge",children:"Fahrzeuge"}),"\n",(0,a.jsx)(n.p,{children:"Um die Ladung auf einen bestimmten Ladestand (SoC) zu begrenzen, und die meisten Wallboxen diesen nicht kennen, kann evcc direkt mit dem Fahrzeug \xfcber den Fahrzeughersteller kommunizieren."}),"\n",(0,a.jsx)(n.p,{children:"In der Konfigurationsdatei gibt es hierzu den folgenden Bereich:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"vehicles:\n  - name: ev\n    type: ...\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Auf dieser Seite findest du die Konfigurationen f\xfcr alle von evcc unterst\xfctzten Fahrzeuge.\nNachdem du das Code-Beispiel f\xfcr dein Fahrzeug angepasst und in die ",(0,a.jsx)(n.code,{children:"evcc.yaml"})," \xfcbernommen hast, kannst du die Verbindung mit dem Befehl ",(0,a.jsx)(n.code,{children:"evcc vehicle"})," testen. Dabei werden alle konfigurierten Fahrzeuge getestet. Mit dem Befehl ",(0,a.jsx)(n.code,{children:"evcc vehicle --name my_ev"})," kann man mittels des vergebenen Namens selektiv testen."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"$ ./evcc vehicle\n\nSoC:           57%\nCharge status: B\nCharged:       4.7kWh\nCapacity:      77kWh\nRange:         280km\nOdometer:      4131km\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Die Qualit\xe4t und Verf\xfcgbarkeit der Fahrzeugschnittstellen variiert von Hersteller zu Hersteller. Solltest du anhaltende Probleme mit dem aktualisieren deiner Fahrzeugdaten haben melde dich bitte in den ",(0,a.jsx)(n.a,{href:"https://github.com/evcc-io/evcc/discussions",children:"GitHub Discussions"}),"."]})}),"\n",(0,a.jsx)(n.h2,{id:"aiways",children:"Aiways"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"vehicles:\n  - name: my_car\n    type: template\n    template: aiways\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n"})}),"\n",(0,a.jsx)(n.h2,{id:"audi",children:"Audi"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"vehicles:\n  - name: my_car\n    type: template\n    template: audi\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: WAUZZZ... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n"})}),"\n",(0,a.jsx)(n.h2,{id:"bmw",children:"BMW"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"vehicles:\n  - name: my_car\n    type: template\n    template: bmw\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: WBMW... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n"})}),"\n",(0,a.jsx)(n.h2,{id:"citro\xebn",children:"Citro\xebn"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"vehicles:\n  - name: my_car\n    type: template\n    template: citroen\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n"})}),"\n",(0,a.jsx)(n.h2,{id:"dacia",children:"Dacia"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"vehicles:\n  - name: my_car\n    type: template\n    template: dacia\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n"})}),"\n",(0,a.jsx)(n.h2,{id:"ds",children:"DS"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"vehicles:\n  - name: my_car\n    type: template\n    template: ds\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n"})}),"\n",(0,a.jsx)(n.h2,{id:"fiat",children:"Fiat"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"vehicles:\n  - name: my_car\n    type: template\n    template: fiat\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: ZFAE... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional)\n    pin: # optional \n"})}),"\n",(0,a.jsx)(n.h2,{id:"ford",children:"Ford"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"vehicles:\n  - name: my_car\n    type: template\n    template: ford\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: WF0FXX... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n"})}),"\n",(0,a.jsx)(n.h2,{id:"hyundai-bluelink",children:"Hyundai Bluelink"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"vehicles:\n  - name: my_car\n    type: template\n    template: hyundai\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional)\n    language: en # 'de' f\xfcr Deutsch und 'en' f\xfcr Englisch (optional) \n"})}),"\n",(0,a.jsx)(n.h2,{id:"jaguar",children:"Jaguar"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"vehicles:\n  - name: my_car\n    type: template\n    template: jaguar-landrover\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n"})}),"\n",(0,a.jsx)(n.h2,{id:"jeep",children:"Jeep"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"vehicles:\n  - name: my_car\n    type: template\n    template: fiat\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: ZFAE... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional)\n    pin: # optional \n"})}),"\n",(0,a.jsx)(n.h2,{id:"kia-bluelink",children:"Kia Bluelink"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"vehicles:\n  - name: my_car\n    type: template\n    template: kia\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional)\n    language: en # 'de' f\xfcr Deutsch und 'en' f\xfcr Englisch (optional) \n"})}),"\n",(0,a.jsx)(n.h2,{id:"land-rover",children:"Land Rover"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"vehicles:\n  - name: my_car\n    type: template\n    template: jaguar-landrover\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n"})}),"\n",(0,a.jsx)(n.h2,{id:"mini",children:"Mini"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"vehicles:\n  - name: my_car\n    type: template\n    template: mini\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: WBMW... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n"})}),"\n",(0,a.jsx)(n.h2,{id:"nissan",children:"Nissan"}),"\n",(0,a.jsx)(n.h3,{id:"leaf",children:"Leaf"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"vehicles:\n  - name: my_car\n    type: template\n    template: nissan\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n"})}),"\n",(0,a.jsx)(n.h3,{id:"leaf-pre-2019",children:"Leaf (pre 2019)"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"vehicles:\n  - name: my_car\n    type: template\n    template: carwings\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n"})}),"\n",(0,a.jsx)(n.h2,{id:"opel",children:"Opel"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"vehicles:\n  - name: my_car\n    type: template\n    template: opel\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: WP0... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n"})}),"\n",(0,a.jsx)(n.h2,{id:"peugeot",children:"Peugeot"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"vehicles:\n  - name: my_car\n    type: template\n    template: peugeot\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n"})}),"\n",(0,a.jsx)(n.h2,{id:"polestar",children:"Polestar"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"vehicles:\n  - name: my_car\n    type: template\n    template: polestar\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: LPSVS... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n"})}),"\n",(0,a.jsx)(n.h2,{id:"porsche",children:"Porsche"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"vehicles:\n  - name: my_car\n    type: template\n    template: porsche\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n"})}),"\n",(0,a.jsx)(n.h2,{id:"renault",children:"Renault"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"vehicles:\n  - name: my_car\n    type: template\n    template: renault\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: WREN... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n"})}),"\n",(0,a.jsx)(n.h2,{id:"seat",children:"Seat"}),"\n",(0,a.jsx)(n.h3,{id:"cupraconnect-gen3-ateca-leon-formentor",children:"CupraConnect Gen3 (Ateca, Leon, Formentor)"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"vehicles:\n  - name: my_car\n    type: template\n    template: seat\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n"})}),"\n",(0,a.jsx)(n.h3,{id:"cupraconnect-gen4-born",children:"CupraConnect Gen4 (Born)"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"vehicles:\n  - name: my_car\n    type: template\n    template: cupra\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n"})}),"\n",(0,a.jsx)(n.h2,{id:"skoda",children:"Skoda"}),"\n",(0,a.jsx)(n.h3,{id:"andere",children:"Andere"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"vehicles:\n  - name: my_car\n    type: template\n    template: skoda\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n"})}),"\n",(0,a.jsx)(n.h3,{id:"enyaq",children:"Enyaq"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"vehicles:\n  - name: my_car\n    type: template\n    template: enyaq\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional)\n    timeout: 10s # optional \n"})}),"\n",(0,a.jsx)(n.h2,{id:"smart-eq",children:"Smart EQ"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"vehicles:\n  - name: my_car\n    type: template\n    template: smart\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n"})}),"\n",(0,a.jsx)(n.h2,{id:"tesla",children:"Tesla"}),"\n",(0,a.jsxs)(n.p,{children:["Es wird ein ",(0,a.jsx)(n.code,{children:"access"})," und ein ",(0,a.jsx)(n.code,{children:"refresh"})," Token f\xfcr die Kommunikation mit der Tesla API erstellt werden."]}),"\n",(0,a.jsx)(n.p,{children:"Folgende Apps erm\xf6glichen das Erstellen von den beiden Tokens:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://apps.apple.com/us/app/auth-app-for-tesla/id1552058613#?platform=iphone",children:"Auth app for Tesla (iOS)"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://play.google.com/store/apps/details?id=net.leveugle.teslatokens",children:"Tesla Tokens (Android)"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/adriankumpf/tesla_auth",children:"Tesla Auth (macOS, Linux)"})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"vehicles:\n  - name: my_car\n    type: template\n    template: tesla\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    accessToken: # Siehe https://docs.evcc.io/docs/devices/vehicles#tesla\n    refreshToken: # Siehe https://docs.evcc.io/docs/devices/vehicles#tesla\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n"})}),"\n",(0,a.jsx)(n.h2,{id:"volkswagen",children:"Volkswagen"}),"\n",(0,a.jsx)(n.h3,{id:"we-connect-legacy",children:"We Connect (legacy)"}),"\n",(0,a.jsx)(n.p,{children:"\xe4ltere Modelle wie e-Up, e-Golf, etc."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"vehicles:\n  - name: my_car\n    type: template\n    template: vw\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: WVWZZZ... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional)\n    timeout: 10s # optional \n"})}),"\n",(0,a.jsx)(n.h3,{id:"we-connect-id",children:"We Connect ID"}),"\n",(0,a.jsx)(n.p,{children:"ID.3, ID.4 (funktioniert auch f\xfcr e-Golf, e-Up)"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"vehicles:\n  - name: my_car\n    type: template\n    template: id\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: WVWZZZ... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional)\n    timeout: 10s # optional \n"})}),"\n",(0,a.jsx)(n.h2,{id:"volvo",children:"Volvo"}),"\n",(0,a.jsx)(n.h3,{id:""}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"vehicles:\n  - name: my_car\n    type: template\n    template: volvo-connected\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional)\n    vccapikey: # Volvo developer portal VCC API Key, siehe https://github.com/evcc-io/evcc/discussions/3677#discussioncomment-4106300 \n"})}),"\n",(0,a.jsx)(n.h3,{id:"legacy",children:"legacy"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"vehicles:\n  - name: my_car\n    type: template\n    template: volvo\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n"})}),"\n",(0,a.jsx)(n.h2,{id:"generische-unterst\xfctzung",children:"Generische Unterst\xfctzung"}),"\n",(0,a.jsx)(n.h3,{id:"manuell",children:"manuell"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"vehicles:\n  - name: my_car\n    type: custom\n    title: Mein Auto # display name for UI\n    capacity: 50 # byttery capacity (kWh)\n    soc: # battery soc (%)\n      source: # plugin type\n      # ...\n    status: # optional charge status (A..F)\n      source: # plugin type\n      # ...\n    range: # optional electric range (km)\n      source: # plugin type\n      # ...\n"})}),"\n",(0,a.jsx)(n.h3,{id:"evnotify",children:"evNotify"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"vehicles:\n  - name: my_car\n    type: template\n    template: evnotify\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    akey:\n    token:\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n"})}),"\n",(0,a.jsx)(n.h3,{id:"iso15118",children:"ISO15118"}),"\n",(0,a.jsx)(n.p,{children:"Nur unterst\xfctzt wenn das Fahrzeug den Ladestand (Soc) an die verbundene Wallbox \xfcbermitteln kann."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"vehicles:\n  - name: my_car\n    type: template\n    template: iso15118\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n"})}),"\n",(0,a.jsx)(n.h3,{id:"mazda2mqtt",children:"mazda2mqtt"}),"\n",(0,a.jsxs)(n.p,{children:["Voraussetzung ist ein konfigurierter MQTT Broker und eine mazda2mqtt Installation ",(0,a.jsx)(n.a,{href:"https://github.com/C64Axel/mazda2mqtt",children:"https://github.com/C64Axel/mazda2mqtt"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"vehicles:\n  - name: my_car\n    type: template\n    template: mazda2mqtt\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    vin: W... # Erforderlich\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional)\n    timeout: 720h # optional \n"})}),"\n",(0,a.jsx)(n.h3,{id:"mg2mqtt",children:"mg2mqtt"}),"\n",(0,a.jsxs)(n.p,{children:["Voraussetzung ist ein konfigurierter MQTT Broker und ein SAIC/MQTT Gateway (",(0,a.jsx)(n.a,{href:"https://github.com/SAIC-iSmart-API/saic-python-mqtt-gateway",children:"https://github.com/SAIC-iSmart-API/saic-python-mqtt-gateway"})," oder ",(0,a.jsx)(n.a,{href:"https://github.com/SAIC-iSmart-API/saic-java-client",children:"https://github.com/SAIC-iSmart-API/saic-java-client"}),")"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"vehicles:\n  - name: my_car\n    type: template\n    template: mg2mqtt\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional)\n    timeout: 1h # optional \n"})}),"\n",(0,a.jsx)(n.h3,{id:"offline",children:"Offline"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"vehicles:\n  - name: my_car\n    type: template\n    template: offline\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n"})}),"\n",(0,a.jsx)(n.h3,{id:"open-vehicle-monitoring-system",children:"Open Vehicle Monitoring System"}),"\n",(0,a.jsxs)(n.p,{children:["Unterst\xfctzung f\xfcr alle Fahrzeuge via ODB2 Adapter im Fahrzeug. Mehr Infos bei ",(0,a.jsx)(n.a,{href:"http://api.openvehicles.com/",children:"Open Vehicle Monitoring System"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"vehicles:\n  - name: my_car\n    type: template\n    template: ovms\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vehicleid:\n    capacity: 12 # Akkukapazit\xe4t in kWh (optional) \n"})}),"\n",(0,a.jsx)(n.h3,{id:"psa-car-controller",children:"PSA Car Controller"}),"\n",(0,a.jsxs)(n.p,{children:["Remote Control of PSA car ",(0,a.jsx)(n.a,{href:"https://github.com/flobz/psa_car_controller",children:"https://github.com/flobz/psa_car_controller"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"vehicles:\n  - name: my_car\n    type: template\n    template: flobz\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    url: http://192.0.2.2\n    vin: W... # Erforderlich\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n"})}),"\n",(0,a.jsx)(n.h3,{id:"teslamate",children:"TeslaMate"}),"\n",(0,a.jsxs)(n.p,{children:["Open Source Tesla Datenlogger ",(0,a.jsx)(n.a,{href:"https://github.com/adriankumpf/teslamate",children:"https://github.com/adriankumpf/teslamate"}),". Voraussetzung ist konfigurierter MQTT Broker."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"vehicles:\n  - name: my_car\n    type: template\n    template: teslamate\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    id: 1 # optional\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n"})}),"\n",(0,a.jsx)(n.h3,{id:"tronity",children:"Tronity"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"vehicles:\n  - name: my_car\n    type: template\n    template: tronity\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    clientid: # Einrichtung unter https://app.tronity.tech\n    clientsecret: # Einrichtung unter https://app.tronity.tech\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 10 # Akkukapazit\xe4t in kWh (optional) \n"})}),"\n",(0,a.jsx)(i.ZP,{}),"\n",(0,a.jsx)(n.h2,{id:"scooter",children:"Scooter"}),"\n",(0,a.jsx)(n.h3,{id:"niu-e-scooter",children:"NIU E-Scooter"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"vehicles:\n  - name: my_car\n    type: template\n    template: niu-e-scooter\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    icon: scooter # Icon in der Benutzeroberfl\xe4che (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    serial:\n    capacity: 4 # Akkukapazit\xe4t in kWh (optional) \n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>l});t(7294);var a=t(512);const r={tabItem:"tabItem_Ymn6"};var i=t(5893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,l),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>x});var a=t(7294),r=t(512),i=t(2466),l=t(6550),s=t(469),o=t(1980),c=t(7392),d=t(12);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=u(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[c,h]=m({queryString:t,groupId:r}),[g,k]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,d.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),v=(()=>{const e=c??g;return p({value:e,tabValues:i})?e:null})();(0,s.Z)((()=>{v&&o(v)}),[v]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),k(e)}),[h,k,i]),tabValues:i}}var k=t(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(5893);function z(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),r=s[t].value;r!==a&&(c(n),l(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:h,onClick:d,...i,className:(0,r.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=g(e);return(0,f.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,f.jsx)(z,{...e,...n}),(0,f.jsx)(b,{...e,...n})]})}function x(e){const n=(0,k.Z)();return(0,f.jsx)(y,{...e,children:h(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>l});var a=t(7294);const r={},i=a.createContext(r);function l(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);