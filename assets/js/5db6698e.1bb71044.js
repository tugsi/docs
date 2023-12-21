"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[4691],{9739:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>o,frontMatter:()=>d,metadata:()=>t,toc:()=>c});var i=r(5893),s=r(1151);const d={sidebar_position:3},l="loadpoints",t={id:"reference/configuration/loadpoints",title:"loadpoints",description:"loadpoints (Ladepunkte) ist eine Liste von Ladepunkten und kombiniert f\xfcr jeden Ladepunkt eine Wallbox, Fahrzeuge und, falls notwendig, einen Z\xe4hler mit weiteren optionalen Parametern. Eine minimale Konfiguration erfordert eine Wallbox.",source:"@site/docs/reference/configuration/loadpoints.md",sourceDirName:"reference/configuration",slug:"/reference/configuration/loadpoints",permalink:"/docs/reference/configuration/loadpoints",draft:!1,unlisted:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/docs/reference/configuration/loadpoints.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"site",permalink:"/docs/reference/configuration/site"},next:{title:"chargers",permalink:"/docs/reference/configuration/chargers"}},a={},c=[{value:"Erforderliche Parameter",id:"erforderliche-parameter",level:2},{value:"<code>title</code>",id:"title",level:3},{value:"<code>charger</code>",id:"charger",level:3},{value:"Optionale Parameter",id:"optionale-parameter",level:2},{value:"<code>meter</code>",id:"meter",level:3},{value:"<code>vehicle</code>",id:"vehicle",level:3},{value:"<code>resetOnDisconnect</code>",id:"resetondisconnect",level:3},{value:"<code>mode</code>",id:"mode",level:3},{value:"<code>soc</code>",id:"soc",level:3},{value:"<code>poll</code>",id:"poll",level:4},{value:"<code>poll.mode</code>",id:"pollmode",level:4},{value:"<code>poll.interval</code>",id:"pollinterval",level:4},{value:"<code>estimate</code>",id:"estimate",level:4},{value:"<code>enable</code>",id:"enable",level:3},{value:"<code>threshold</code>",id:"threshold",level:4},{value:"<code>delay</code>",id:"delay",level:4},{value:"<code>disable</code>",id:"disable",level:3},{value:"<code>threshold</code>",id:"threshold-1",level:4},{value:"<code>delay</code>",id:"delay-1",level:4},{value:"<code>guardduration</code>",id:"guardduration",level:3},{value:"<code>phases</code>",id:"phases",level:3},{value:"<code>minCurrent</code>",id:"mincurrent",level:3},{value:"<code>maxCurrent</code>",id:"maxcurrent",level:3},{value:"<code>priority</code>",id:"priority",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"loadpoints",children:(0,i.jsx)(n.code,{children:"loadpoints"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"loadpoints"})," (Ladepunkte) ist eine Liste von Ladepunkten und kombiniert f\xfcr jeden Ladepunkt eine Wallbox, Fahrzeuge und, falls notwendig, einen Z\xe4hler mit weiteren optionalen Parametern. Eine minimale Konfiguration erfordert eine Wallbox."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"loadpoints:\n  - title: Garage # display name for UI\n    charger: wallbox # Wallbox Referenz\n    vehicle: audi # Referenz auf Standardfahrzeug\n    mode: pv # charge mode (off, now, minpv, pv)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Referenzen sind hierbei immer die Werte des Parameters ",(0,i.jsx)(n.code,{children:"name"})," (z.B. ",(0,i.jsx)(n.code,{children:"wallbox"}),") in der jeweiligen Ger\xe4tekonfiguration."]}),"\n",(0,i.jsx)(n.p,{children:"Im folgenden werden nun alle m\xf6glichen Parameter erkl\xe4rt."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"erforderliche-parameter",children:"Erforderliche Parameter"}),"\n",(0,i.jsx)(n.h3,{id:"title",children:(0,i.jsx)(n.code,{children:"title"})}),"\n",(0,i.jsx)(n.p,{children:"Eine Beschreibung des Ladepunktes, wird in der UI angezeigt."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"title: Garage\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"charger",children:(0,i.jsx)(n.code,{children:"charger"})}),"\n",(0,i.jsxs)(n.p,{children:["Referenz auf eine ",(0,i.jsx)(n.code,{children:"charger"})," (Wallbox) Konfiguration.\n",(0,i.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"charger: wallbox\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Wobei hier der Wert ",(0,i.jsx)(n.code,{children:"wallbox"})," dem Wert eines ",(0,i.jsx)(n.code,{children:"name"})," Parameters in der ",(0,i.jsx)(n.a,{href:"chargers#name",children:"Wallbox Definition"})," entspricht."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"optionale-parameter",children:"Optionale Parameter"}),"\n",(0,i.jsx)(n.h3,{id:"meter",children:(0,i.jsx)(n.code,{children:"meter"})}),"\n",(0,i.jsxs)(n.p,{children:["Referenz auf eine ",(0,i.jsx)(n.code,{children:"meter"})," (Strommessger\xe4t) Konfiguration."]}),"\n",(0,i.jsx)(n.p,{children:"Dieser Eintrag wird nur ben\xf6tigt, wenn die verwendete Wallbox keine eigene Strommessung durchf\xfchrt bzw. die Werte der Messung von evcc nicht ausgelesen werden k\xf6nnen. Aber selbst dann ist dieser Eintrag optional, denn evcc nimmt an, dass mit der eingestellten maximalen Stromst\xe4rke auch geladen wird."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"meter: charge\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Wobei hier der Wert ",(0,i.jsx)(n.code,{children:"charge"})," dem Wert eines ",(0,i.jsx)(n.code,{children:"name"})," Parameters in der ",(0,i.jsx)(n.a,{href:"meters#name",children:"Strommessger\xe4te Definition"})," entspricht."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"vehicle",children:(0,i.jsx)(n.code,{children:"vehicle"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"vehicle"}),": Referenz auf eine ",(0,i.jsx)(n.code,{children:"vehicle"})," Konfiguration die dem Ladepunkt als Standardfahrzeug zugewiesen wird."]}),"\n",(0,i.jsx)(n.p,{children:"Beim Anschluss eines Fahrzeugs an den Ladepunkt wird damit immer davon ausgegangen dass dieses Fahrzeug angeschlossen wurde.\nDie automatische Fahrzeugerkennung wird umgangen.\nFalls doch ausnahmsweise ein anderes Fahrzeug angeschlossen wurde (z.B. Gastfahrzeug) l\xe4sst sich dies im Anschluss manuell zuweisen."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"vehicle: renault\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Wobei hier der Wert ",(0,i.jsx)(n.code,{children:"renault"})," dem Wert eines ",(0,i.jsx)(n.code,{children:"name"})," Parameters in der ",(0,i.jsx)(n.a,{href:"vehicles#name",children:"Fahrzeug Definition"})," entspricht."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"resetondisconnect",children:(0,i.jsx)(n.code,{children:"resetOnDisconnect"})}),"\n",(0,i.jsx)(n.p,{children:"Definiert, ob beim Abstecken des Ladekabels vom Fahrzeug die Standardeinstellungen f\xfcr folgende Werte wiederhergestellt werden sollen:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#mode",children:(0,i.jsx)(n.code,{children:"mode"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#mincurrent",children:(0,i.jsx)(n.code,{children:"minCurrent"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#maxcurrent",children:(0,i.jsx)(n.code,{children:"maxCurrent"})})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"M\xf6gliche Werte"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"true"}),": Standardeinstellungen werden eingestellt."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"false"}),": Aktuelle Einstellungen bleiben erhalten."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Standardwert:"})," ",(0,i.jsx)(n.code,{children:"true"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"resetOnDisconnect: true\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"mode",children:(0,i.jsx)(n.code,{children:"mode"})}),"\n",(0,i.jsxs)(n.p,{children:["Der Standard-Lademodus wenn evcc startet bzw. nach dem Abstecken des Fahrzeugs wenn ",(0,i.jsx)(n.code,{children:"resetOnDisconnect: true"})," gesetzt wurde."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"M\xf6gliche Werte"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"off"}),": Das Laden ist gestoppt, auch wenn ein Fahrzeug an der Wallbox angeschlossen ist."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"now"}),": Lade sofort mit der maximal m\xf6glichen Leistung."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"minpv"}),": Lade sofort mit der minimal m\xf6glichen Leistung. Falls genug PV-\xdcberschuss vorhanden ist, lade schneller."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pv"}),": Lade nur mit PV-\xdcberschuss und pausiere wenn nicht genug Leistung verf\xfcgbar ist."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Standardwert:"})," ",(0,i.jsx)(n.code,{children:"pv"})]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Im allgemeinen ben\xf6tigt ein EV zum Laden mindestens 1,4kW Leistung pro Phase. Bei Wallboxen und Fahrzeugen welche \xfcber den ISO15118 Standard kommunizieren, wird insgesamt mindestens 1,4kW Leistung ben\xf6tigt, egal mit wievielen Phasen geladen wird."})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"mode: pv\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"soc",children:(0,i.jsx)(n.code,{children:"soc"})}),"\n",(0,i.jsx)(n.p,{children:"Definiere die Standardeinstellungen f\xfcr den Umgang mit dem SoC eines angeschlossenen Fahrzeugs"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"soc:\n  poll:\n    mode: charging\n    interval: 60m\n  estimate: true\n"})}),"\n",(0,i.jsx)(n.h4,{id:"poll",children:(0,i.jsx)(n.code,{children:"poll"})}),"\n",(0,i.jsx)(n.p,{children:"Definiert, wie die Fahrzeug APIs benutzt werden um aktuelle Informationen des Fahrzeugs abzurufen."}),"\n",(0,i.jsxs)(n.p,{children:["Ist beim Charger ",(0,i.jsx)(n.code,{children:"integrateddevice: true"})," konfiguriert, werden die Daten fortlaufend abgerufen. Dann sind keine ",(0,i.jsx)(n.code,{children:"poll"})," Einstellungen notwendig, bzw. diese werden ignoriert."]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["Es wird ",(0,i.jsx)(n.strong,{children:"NICHT"})," empfohlen, die Standardeinstellungen zu \xe4ndern, denn dies k\xf6nnte dazu f\xfchren, dass die Fahrzeugbatterie entleert wird\noder dass der Fahrzeughersteller aktiv verhindert, das Laden mittels evcc zu steuern. ",(0,i.jsx)(n.strong,{children:"AUF EIGENES RISIKO."})]})}),"\n",(0,i.jsx)(n.h4,{id:"pollmode",children:(0,i.jsx)(n.code,{children:"poll.mode"})}),"\n",(0,i.jsx)(n.p,{children:"Definiert, unter welchen Bedingungen die Daten f\xfcr das Fahrzeug abgerufen werden"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"M\xf6gliche Werte"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"charging"}),": aktualisiere die Daten ",(0,i.jsx)(n.strong,{children:"NUR"})," w\xe4hrend eines Ladevorgangs (dies ist die empfohlene Standardeinstellung)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"connected"}),": aktualisiere die Daten, wenn das Fahrzeug mit der Wallbox verbunden ist (nicht nur wenn es l\xe4dt); der Parameter ",(0,i.jsx)(n.code,{children:"interval"})," definiert wie oft"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"always"}),": aktualisiere die Daten immer, auch wenn das Fahrzeug nicht mit der Wallbox verbunden ist; der Parameter ",(0,i.jsx)(n.a,{href:"#interval",children:(0,i.jsx)(n.code,{children:"interval"})})," definiert, wie oft (wird nur f\xfcr ein Fahrzeug eines Ladepunktes unterst\xfctzt)"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Standardwert:"})," ",(0,i.jsx)(n.code,{children:"charging"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"mode: charging\n"})}),"\n",(0,i.jsx)(n.h4,{id:"pollinterval",children:(0,i.jsx)(n.code,{children:"poll.interval"})}),"\n",(0,i.jsxs)(n.p,{children:["Definiert, wie oft das Fahrzeug nach neuen Daten abgefragt wird, wenn es ",(0,i.jsx)(n.strong,{children:"NICHT"})," l\xe4dt."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Standardwert:"})," ",(0,i.jsx)(n.code,{children:"60m"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"interval: 60m\n"})}),"\n",(0,i.jsx)(n.h4,{id:"estimate",children:(0,i.jsx)(n.code,{children:"estimate"})}),"\n",(0,i.jsx)(n.p,{children:"Berechne (interpoliere) den aktuellen SoC zwischen den Abfragen an das Fahrzeug."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"M\xf6gliche Werte"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"true"}),": evcc interpoliert die SoC Werte zwischen den Fahrzeugabfragen (empfohlen)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"false"}),": evcc nutzt nur die SoC Werte, welche das Fahrzeug zur\xfcckliefert"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Standardwert:"})," ",(0,i.jsx)(n.code,{children:"true"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"estimate: false # Keine Interpolation\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"enable",children:(0,i.jsx)(n.code,{children:"enable"})}),"\n",(0,i.jsx)(n.p,{children:"Definiert das Verhalten, wann im PV Modus das Laden begonnen wird. Dar\xfcberhinaus definiert es auch das Verhalten bei automatischer Phasenumschaltung von 1p auf 3p."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"enable:\n  threshold: 0\n  delay: 1m\n"})}),"\n",(0,i.jsx)(n.h4,{id:"threshold",children:(0,i.jsx)(n.code,{children:"threshold"})}),"\n",(0,i.jsx)(n.p,{children:"Definiert den Schwellenwert der Leistung am Netzanschlusspunkt in Watt (W)."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"M\xf6gliche Werte"}),": Ein positiver Wert f\xfcr Netzbezug, ein negativer Wert f\xfcr Export. Bei ",(0,i.jsx)(n.code,{children:"0"})," muss der Export die minimale Ladeleistung erreicht haben."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Standardwert:"})," ",(0,i.jsx)(n.code,{children:"0"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"threshold: 0\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["Ist f\xfcr die evcc Site \xfcber den Parameter ",(0,i.jsx)(n.code,{children:"residualPower"})," ein Versatz des Soll-Arbeitspunktes der \xdcberschussregelung definiert, muss dieser Wert beim Setzen des ",(0,i.jsx)(n.code,{children:"threshold"})," Wertes ber\xfccksichtigt werden."]}),(0,i.jsxs)(n.p,{children:["Ist bspw. ",(0,i.jsx)(n.code,{children:"residualPower"})," auf 200 gesetzt (die evcc Regelung setzt den Soll-Arbeitspunkt auf 200W Einspeisung), dann f\xfchrt ein ",(0,i.jsx)(n.code,{children:"enable"})," ",(0,i.jsx)(n.code,{children:"threshold"})," Wert von 100 nicht dazu, dass ab 100W Netzbezug der Ladepunkt das Laden startet, sondern dass sich die verbleibende Einspeisung um 100W reduziert und somit ab 100W Einspeisung die Ladung startet."]}),(0,i.jsxs)(n.p,{children:["Soll die Ladung bei 100W Netzbezug starten, m\xfcsste in dem Fall der ",(0,i.jsx)(n.code,{children:"threshold"})," Wert auf 300 gesetzt werden."]})]}),"\n",(0,i.jsx)(n.h4,{id:"delay",children:(0,i.jsx)(n.code,{children:"delay"})}),"\n",(0,i.jsxs)(n.p,{children:["Definiert, wie lange der ",(0,i.jsx)(n.code,{children:"threshold"})," (Schwellenwert) erf\xfcllt sein muss."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Standardwert:"})," ",(0,i.jsx)(n.code,{children:"1m"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"delay: 1m\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"disable",children:(0,i.jsx)(n.code,{children:"disable"})}),"\n",(0,i.jsx)(n.p,{children:"Definiert das Verhalten, wann im PV Modus das Laden unterbrochen wird. Dar\xfcberhinaus definiert es auch das Verhalten bei automatischer Phasenumschaltung von 3p auf 1p."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"disable:\n  threshold: 200 # maximum import power (W)\n  delay: 10m\n"})}),"\n",(0,i.jsx)(n.h4,{id:"threshold-1",children:(0,i.jsx)(n.code,{children:"threshold"})}),"\n",(0,i.jsx)(n.p,{children:"Definiert den Schwellenwert der Leistung am Netzanschlusspunkt in Watt (W)."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"M\xf6gliche Werte"}),": Ein positiver Wert f\xfcr Netzbezug, ein negativer Wert f\xfcr Export."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Standardwert:"})," ",(0,i.jsx)(n.code,{children:"0"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"threshold: 200 # Ein maximaler Netzbezug von 200W ist erlaubt\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["Ist f\xfcr die evcc Site \xfcber den Parameter ",(0,i.jsx)(n.code,{children:"residualPower"})," ein Versatz des Soll-Arbeitspunktes der \xdcberschussregelung definiert, muss dieser Wert beim Setzen des ",(0,i.jsx)(n.code,{children:"threshold"})," Wertes ber\xfccksichtigt werden."]}),(0,i.jsxs)(n.p,{children:["Vergleiche dazu auch das Beispiel in der Info zu ",(0,i.jsx)(n.a,{href:"#enable",children:(0,i.jsx)(n.code,{children:"enable"})})," ",(0,i.jsx)(n.code,{children:"threshold"}),"."]})]}),"\n",(0,i.jsx)(n.h4,{id:"delay-1",children:(0,i.jsx)(n.code,{children:"delay"})}),"\n",(0,i.jsxs)(n.p,{children:["Definiert wie lange der ",(0,i.jsx)(n.code,{children:"threshold"})," (Schwellenwert) erf\xfcllt sein muss."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Standardwert:"})," ",(0,i.jsx)(n.code,{children:"3m"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"delay: 10m\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"guardduration",children:(0,i.jsx)(n.code,{children:"guardduration"})}),"\n",(0,i.jsx)(n.p,{children:"Definiert den zeitlichen Mindestabstand in welchem der Strom gesperrt oder wieder freigegeben werden darf."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Standardwert:"})," ",(0,i.jsx)(n.code,{children:"5m"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,i.jsx)(n.p,{children:"Mindestens 15 Minuten Abstand zwischen dem An-/Ausschalten des Ladevorgangs."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"guardduration: 15m\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"phases",children:(0,i.jsx)(n.code,{children:"phases"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Wallbox ohne automatische Phasenumschaltung"}),":"]}),"\n",(0,i.jsx)(n.p,{children:"Definiert die Anzahl der Phasen mit welcher die Wallbox angeschlossen ist."}),"\n",(0,i.jsxs)(n.p,{children:["Dieser Parameter \xe4ndert nichts am physikalischen Anschluss der Wallbox, sondern dient lediglich dazu, im PV-Modus (in Verbindung mit ",(0,i.jsx)(n.code,{children:"minCurrent"}),") die minimale Startleistung f\xfcr die Ladung zu ermitteln."]}),"\n",(0,i.jsxs)(n.p,{children:["Seit kurzem werden die anliegenden Spannungen ausgewertet, wenn der Z\xe4hler der Wallbox diese liefert. Anhand der Spannungen wird der ",(0,i.jsx)(n.code,{children:"phases"})," Wert \u201eautomatisch\u201c per API ge\xe4ndert. In den F\xe4llen in denen die Wallbox per \u201eLasttrennschalter\u201c auf 1p oder 3p eingestellt wird, ist somit keine manuelle \xc4nderung des ",(0,i.jsx)(n.code,{children:"phases"})," Wertes mehr notwendig."]}),"\n",(0,i.jsxs)(n.p,{children:['In den F\xe4llen, in denen das 1p/3p Laden nicht per Lasttrennschalter, sondern mittels entsprechendem Ladekabel realisiert wird, f\xfchrt diese "Automatik" zu Problemen. Hier muss der ',(0,i.jsx)(n.code,{children:"phases"})," Wert beim ",(0,i.jsx)(n.code,{children:"vehicle"}),"entsprechend angepasst werden. Da dieser nicht per API \xe4nderbar ist, gibt es folgende Workaround:"]}),"\n",(0,i.jsxs)(n.p,{children:["Man konfiguriert das Fahrzeug zweimal. Zum einen mit ",(0,i.jsx)(n.code,{children:"phases: 1"})," und ein weiters mal mit ",(0,i.jsx)(n.code,{children:"phases: 3"}),". Je nach gew\xfcnschter Ladeart, w\xe4hlt man dann im UI das entsprechende Fahrzeug aus."]}),"\n",(0,i.jsxs)(n.p,{children:["Wenn ein bekanntes Fahrzeug angeschlossen ist, wird der kleinere Wert aus ",(0,i.jsx)(n.code,{children:"vehicle: phases"})," und ",(0,i.jsx)(n.code,{children:"loadpoint: phases"})," zur Berechnung herangezogen. Bei unbekannten Fahrzeugen wirkt immer ",(0,i.jsx)(n.code,{children:"loadpoint: phases"})," alleine."]}),"\n",(0,i.jsx)(n.p,{children:"Wenn die Ladung l\xe4uft und die Wallbox bzw. der Ladez\xe4hler die Phasenstr\xf6me liefert, wird daran die tats\xe4chliche Anzahl der Phasen erkannt und (solange das Fahrzeug angesteckt bleibt) f\xfcr die weitere Berechnung der tats\xe4chlichen Schaltschwellen genutzt. Das funktioniert allerdings prinzipbedingt nur bei dreiphasigen Ladepunkten."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Standardwert:"})," ",(0,i.jsx)(n.code,{children:"3"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"M\xf6gliche Werte:"})," ",(0,i.jsx)(n.code,{children:"1|3"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"phases: 1\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Wallbox mit automatischer Phasenumschaltung"}),":"]}),"\n",(0,i.jsx)(n.p,{children:"\xdcber den Wert kann die Automatik ein- bzw. ausgeschaltet werden."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"phases: 0"})," = Automatik eingeschaltet"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"phases: 1 oder 3"})," = Automatik aus und der gesetzte Wert ist fix"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Standardwert:"})," ",(0,i.jsx)(n.code,{children:"3"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"M\xf6gliche Werte:"})," ",(0,i.jsx)(n.code,{children:"0|1|3"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"phases: 0\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Ist dem Ladepunkt keine Wallbox, sondern eine der unterst\xfctzten schaltbaren Steckdosen (AVM FritzDECT, Shelly, Tasmota, TP-Link etc.) zugewiesen, ",(0,i.jsx)(n.strong,{children:"muss"})," ",(0,i.jsx)(n.code,{children:"phases"})," zwingend auf ",(0,i.jsx)(n.strong,{children:"1"})," gesetzt werden, um eine ordnungsgem\xe4\xdfe Lade-Steuerung zu gew\xe4hrleisten."]})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"mincurrent",children:(0,i.jsx)(n.code,{children:"minCurrent"})}),"\n",(0,i.jsx)(n.p,{children:"Definiert die minimal genutzte Stromst\xe4rke in Ampere (A) pro angeschlossener Phase von der Zuleitung zur Wallbox."}),"\n",(0,i.jsxs)(n.p,{children:["Wie bereits bei ",(0,i.jsx)(n.code,{children:"phases"})," beschrieben, wird \xfcber diesen Wert die Mindestladeleistung festgelegt."]}),"\n",(0,i.jsx)(n.p,{children:"Bei Wallboxen mit automatischer Phasenumschaltung wird in 3p solange geladen, bis dieser Wert (von oben) erreicht ist. Erst dann wird auf 1p umgeschaltet."}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.p,{children:"Im Allgemeinen ben\xf6tigt ein Elektrofahrzeug mindestens eine Stromst\xe4rke von 6A pro Phase um zu Laden. Bei manchen Fahrzeugen wird jedoch auch eine h\xf6here Mindeststromst\xe4rke ben\xf6tigt!"}),(0,i.jsx)(n.p,{children:"Bei Wallboxen und Fahrzeugen welche \xfcber den ISO15118 Standard kommunizieren kann unter Umst\xe4nden auch mit einer geringeren Stromst\xe4rke pro Phase geladen werden, wenn die Gesamtleistung trotzdem mindestens etwa 1,4kW betr\xe4gt."})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Standardwert:"})," ",(0,i.jsx)(n.code,{children:"6"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"mincurrent: 6\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"maxcurrent",children:(0,i.jsx)(n.code,{children:"maxCurrent"})}),"\n",(0,i.jsx)(n.p,{children:"Definiert die maximal zul\xe4ssige Stromst\xe4rke in Ampere (A) pro angeschlossener Phase von der Zuleitung zur Wallbox."}),"\n",(0,i.jsx)(n.p,{children:"Bei Wallboxen mit automatischer Phasenumschaltung wird in 1p solange geladen, bis dieser Wert (von unten) erreicht ist. Erst dann wird auf 3p umgeschaltet."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Standardwert:"})," ",(0,i.jsx)(n.code,{children:"16"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"maxcurrent: 16\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"priority",children:(0,i.jsx)(n.code,{children:"priority"})}),"\n",(0,i.jsx)(n.p,{children:"Dient w\xe4hrend der Ladung der Priorisierung von Loadpoints untereinander."}),"\n",(0,i.jsx)(n.p,{children:"Dem priorisierten Loadpoint wird die Ladeleistung der anderen nicht oder geringer priorisierten Loadpoints zur Verf\xfcgung gestellt. Greift dieser darauf zu, kann es kurzzeitig zu Netzbezug f\xfchren, bis die Regelung ausnivelliert ist."}),"\n",(0,i.jsxs)(n.p,{children:["Je h\xf6her der Wert, desto gr\xf6\xdfer die Priorit\xe4t.\nLoadpoints ohne Eintrag haben ",(0,i.jsx)(n.code,{children:"priority: 0"})]}),"\n",(0,i.jsx)(n.p,{children:"Hat bei mehreren Loadpoints keinen Einfluss darauf in welchen Reihenfolge die Ladungen gestartet werden. L\xe4uft aber die Ladung an einem niedrig priorisierten Loadpoint, wird ein h\xf6her priorisierter unter Umst\xe4nden eingeschaltet, weil diesem die bereits genutzte Ladeleistung zur Verf\xfcgung gestellt wird."}),"\n",(0,i.jsxs)(n.p,{children:["Die Priorisierung wirkt in den Modi ",(0,i.jsx)(n.code,{children:"pv"})," und ",(0,i.jsx)(n.code,{children:"minpv"}),". Bei ",(0,i.jsx)(n.code,{children:"minpv"})," wird die Ladung aber nicht unterbrochen, sondern lediglich auf Minimum reduziert."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Eine evtl. beim Fahrzeug konfigurierte Priorit\xe4t ersetzt die Priorit\xe4t des Loadpoints, mit dem das Fahrzeug verbunden ist."})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Standartwert:"})," ",(0,i.jsx)(n.code,{children:"0"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"priority: 2\n"})}),"\n",(0,i.jsx)(n.hr,{})]})}function o(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>t,a:()=>l});var i=r(7294);const s={},d=i.createContext(s);function l(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);