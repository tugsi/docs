"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[5623],{5342:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var r=i(5893),s=i(1151);const t={sidebar_position:2},d="Konfiguration",l={id:"guides/setup",title:"Konfiguration",description:"Einrichtung und Konfiguration",source:"@site/docs/guides/setup.mdx",sourceDirName:"guides",slug:"/guides/setup",permalink:"/docs/guides/setup",draft:!1,unlisted:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/docs/guides/setup.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Tipps und FAQ",permalink:"/docs/guides/"},next:{title:"Laden",permalink:"/docs/guides/charging"}},c={},a=[{value:"Einrichtung und Konfiguration",id:"einrichtung-und-konfiguration",level:2},{value:"Hinweis zur Individualisierung",id:"hinweis-zur-individualisierung",level:3},{value:"Sponsoring",id:"sponsoring",level:3},{value:"Syntax-Fehler in der evcc.yaml finden",id:"syntax-fehler-in-der-evccyaml-finden",level:3},{value:"Etwas funktioniert nicht. Was nun?",id:"etwas-funktioniert-nicht-was-nun",level:3},{value:"Wie kann ich ein Logfile zur Fehleranalyse erstellen?",id:"wie-kann-ich-ein-logfile-zur-fehleranalyse-erstellen",level:3},{value:"Weiterf\xfchrende Hilfe bei der Ger\xe4teerkennung",id:"weiterf\xfchrende-hilfe-bei-der-ger\xe4teerkennung",level:3},{value:"Fehler: evcc UI ist nicht erreichbar (Demo Modus funktioniert aber)",id:"fehler-evcc-ui-ist-nicht-erreichbar-demo-modus-funktioniert-aber",level:3},{value:"Fehler: <code>connection refused</code>",id:"fehler-connection-refused",level:3},{value:"Fehler: <code>i/o timeout</code>",id:"fehler-io-timeout",level:3},{value:"Fehler: <code>/tmp/evcc: operation not permitted</code> oder/und <code>bind: address already in use</code>",id:"fehler-tmpevcc-operation-not-permitted-oderund-bind-address-already-in-use",level:3},{value:"Telemetry &amp; Community Daten",id:"telemetry--community-daten",level:3},{value:"Ersparnisberechnung",id:"ersparnisberechnung",level:3}];function o(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"konfiguration",children:"Konfiguration"}),"\n",(0,r.jsx)(n.h2,{id:"einrichtung-und-konfiguration",children:"Einrichtung und Konfiguration"}),"\n",(0,r.jsx)(n.h3,{id:"hinweis-zur-individualisierung",children:"Hinweis zur Individualisierung"}),"\n",(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsx)(n.p,{children:"In evcc sind sehr viele individuelle Einstellungen m\xf6glich. Die Default-Einstellungen der Parameter beruhen auf Erfahrungswerten und im Allgemeinen sind keine \xc4nderungen notwendig."}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Bei Individualisierung, bitte folgendes beachten:"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Da sich die Parameter teilweise gegenseitig beeinflussen, wird dringend empfohlen, \xc4nderungen an diesen Einstellungen nur einzeln vorzunehmen und die Auswirkungen zu testen, bevor weitere \xc4nderungen vorgenommen werden."})}),"\n"]})]}),"\n",(0,r.jsx)(n.h3,{id:"sponsoring",children:"Sponsoring"}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.p,{children:"Dadurch, dass Github die Bezahlm\xf6glichkeiten f\xfcr das Sponsoring ge\xe4ndert hat, ist leider kein Paypal mehr m\xf6glich."}),(0,r.jsxs)(n.p,{children:["Wer keine Kredit-/Debitkarte verwenden m\xf6chte, kann sich diesbez\xfcglich per Mail an ",(0,r.jsx)(n.a,{href:"mailto:info@evcc.io",children:"info@evcc.io"})," wenden."]})]}),"\n",(0,r.jsx)(n.h3,{id:"syntax-fehler-in-der-evccyaml-finden",children:"Syntax-Fehler in der evcc.yaml finden"}),"\n",(0,r.jsx)(n.p,{children:"yaml ist sehr syntax-empfindlich. Fehler fallen nicht immer sofort ins Auge."}),"\n",(0,r.jsxs)(n.p,{children:["Eine schnelle Hilfe bieten yaml-Tester wie z.B. (",(0,r.jsx)(n.a,{href:"https://onlineyamltools.com/validate-yaml",children:"https://onlineyamltools.com/validate-yaml"}),")"]}),"\n",(0,r.jsx)(n.h3,{id:"etwas-funktioniert-nicht-was-nun",children:"Etwas funktioniert nicht. Was nun?"}),"\n",(0,r.jsxs)(n.p,{children:["Bei evcc gibt es einen ",(0,r.jsx)(n.a,{href:"https://github.com/evcc-io/evcc/discussions",children:"Community Support"}),". Hier helfen sowohl Entwickler als auch Anwender bei verschiedenen Problemen. Es w\xe4re gut, dabei m\xf6glichst genaue Informationen zu folgenden Bereichen mitzuteilen:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Welche Ger\xe4te (Fahrzeug, Hausinstallation, Wallbox) verwendet werden."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Die Konfigurationsdatei ",(0,r.jsx)(n.code,{children:"evcc.yaml"}),","]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)(n.p,{children:["d.h. deren Inhalt (",(0,r.jsx)(n.em,{children:"bitte Benutzernamen, Passw\xf6rter und \xe4hnliches entfernen"}),")."]})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"egrep -v '^#|^\\s+#' evcc.yaml |grep . |sed -E 's/(password|user|token|url|host|broker).*/\\1: *****/'"})})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["alternativ kann mit ",(0,r.jsx)(n.code,{children:"evcc dump --cfg >~/config.txt"})," eine anonymisierte Konfigurationsdatei erstellt und unter dem angegebenen Namen im Home-Verzeichnis gespeichert werden."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Eine m\xf6glichst genaue Beschreibung was das Problem ist."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Erste Hilfe"})}),"\n",(0,r.jsxs)(n.p,{children:["Zur Erleichterung wurde eine Erste-Hilfe Funktionalit\xe4t entwickelt. Durch Eingabe von ",(0,r.jsx)(n.code,{children:"evcc discuss"}),' auf der Kommandozeile wird ein neuer Diskussionsbeitrag in der Rubrik "Erste Hilfe" erstellt. Dieser Beitrag beinhaltet automatisch die Fehlermeldung(en) und die anonymisierte Konfigurationsdatei. Erg\xe4nzt werden muss nur noch ein aussagekr\xe4ftiger Titel und eine Problembeschreibung.\nDiese Erste-Hilfe ist jeweils nur f\xfcr die Erst-Erstellung eines Diskussionsbeitrages nutzbar. Sind im Zuge der L\xf6sungsfindung weitere Informationen notwendig, m\xfcssen diese h\xe4ndisch erstellt werden.']}),"\n",(0,r.jsx)(n.p,{children:"Wir versuchen nat\xfcrlich Probleme so gut es geht zu vermeiden, aber das kann aufgrund der Komplexit\xe4t leider nicht immer gelingen."}),"\n",(0,r.jsx)(n.h3,{id:"wie-kann-ich-ein-logfile-zur-fehleranalyse-erstellen",children:"Wie kann ich ein Logfile zur Fehleranalyse erstellen?"}),"\n",(0,r.jsxs)(n.p,{children:["evcc gibt in seiner Standard Konfiguration nur dann Fehlermeldungen aus, wenn ein Fehler auftritt (siehe auch ",(0,r.jsx)(n.a,{href:"/docs/reference/configuration/log#log",children:(0,r.jsx)(n.code,{children:"log"})})," Parameter in der ",(0,r.jsx)(n.code,{children:"evcc.yaml"}),")."]}),"\n",(0,r.jsxs)(n.p,{children:["Wenn evcc auf der Konsole ausgef\xfchrt wird, werden die ",(0,r.jsx)(n.code,{children:"log"})," Nachrichten einfach in die normale Ausgabe geleitet."]}),"\n",(0,r.jsxs)(n.p,{children:["Mittels ",(0,r.jsx)(n.code,{children:"evcc charger"})," oder ",(0,r.jsx)(n.code,{children:"evcc meter"})," oder ",(0,r.jsx)(n.code,{children:"evcc vehicle"})," k\xf6nnen auf der Kommandozeile die verschiedenen Ger\xe4tetypen getestet werden. Dabei kommt der in ",(0,r.jsx)(n.code,{children:"evcc.yaml"})," konfigurierte Log-Parameter (siehe oben) zum Einsatz. Will man davon abweichende Tests durchf\xfchren, kann der Log-Parameter beim Aufruf entsprechend erg\xe4nzt werden."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Beispiel: evcc -l debug meter"})}),"\n",(0,r.jsxs)(n.p,{children:["Wird evcc als Linux Systemdienst, wie unter ",(0,r.jsx)(n.a,{href:"/docs/installation/manual#autostart",children:"Linux Autostart"})," beschrieben, ausgef\xfchrt, k\xf6nnen die log-Nachrichten \xfcber folgende Befehle verfolgt, bzw. aufgelistet werden:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Kontinuierliche Anzeige der evcc log Meldungen",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"sudo journalctl -fau evcc"})]}),"\n",(0,r.jsxs)(n.li,{children:["Anzeige der evcc log Meldungen seit dem letzten Start des evcc Services (Abbruch mit Strg-c)",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"sudo journalctl -u evcc -q"})]}),"\n",(0,r.jsxs)(n.li,{children:["Speichern der Log-Ausgabe in eine Datei im Home-Verzeichnis",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"sudo journalctl -u evcc -q > ~/evcc.log"})]}),"\n",(0,r.jsxs)(n.li,{children:["Erg\xe4nzend kann auch noch Start- (",(0,r.jsx)(n.code,{children:"-S"}),") und Endzeitpunkt (",(0,r.jsx)(n.code,{children:"-U"}),") der Log-Ausgabe bestimmt werden",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:'sudo journalctl -u evcc -S "2023-03-21 07:00:00" -U "2023-03-21 08:00:00" -q > ~/evcc.log'})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Weiterf\xfchrende Hilfe: ",(0,r.jsx)(n.a,{href:"https://wiki.ubuntuusers.de/systemd/journalctl/",children:"wiki.ubuntuusers.de/systemd/journalctl"})]}),"\n",(0,r.jsxs)(n.p,{children:["Im Falle einer Docker Installation kann man \xfcber ",(0,r.jsx)(n.code,{children:"docker logs"})," die Nachrichten anzeigen lassen, siehe ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/config/containers/logging/",children:"Docker Dokumentation"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"weiterf\xfchrende-hilfe-bei-der-ger\xe4teerkennung",children:"Weiterf\xfchrende Hilfe bei der Ger\xe4teerkennung"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"evcc detect"}),' ist ein spezielles Kommando, welches eine Art Hardwareerkennung und Netzwerksuche f\xfcr bestimmte Ger\xe4te erm\xf6glicht.\nInsbesondere hilft es manchmal bei der ersten Einsch\xe4tzung von "neuen" SunSpec-kompatiblen Modbus-Ger\xe4ten und bei der Validierung von IP-Konfigurationen.\nEs ist aber mehr ein Entwickler- und Supporttool zu Diagnosezwecken und erkennt auch nur einen nicht n\xe4her definierbaren Ger\xe4tetypenkreis.']}),"\n",(0,r.jsx)(n.h3,{id:"fehler-evcc-ui-ist-nicht-erreichbar-demo-modus-funktioniert-aber",children:"Fehler: evcc UI ist nicht erreichbar (Demo Modus funktioniert aber)"}),"\n",(0,r.jsx)(n.p,{children:"Es kommt immer wieder vor, dass Fehler in der Konfiguration \xfcbersehen werden und der Service gestartet wird. Dabei wird der Start von evcc abgebrochen, ohne das es daf\xfcr einen Hinweis gibt. Ergebnis ist, dass das UI nicht erreichbar ist."}),"\n",(0,r.jsxs)(n.p,{children:["In dem Fall sollte man evcc durch Eingabe von ",(0,r.jsx)(n.code,{children:"evcc"})," auf der Kommandozeile starten. Dort werden dann auch Fehlerhinweise gegeben, die den Start des Service verhindert haben."]}),"\n",(0,r.jsx)(n.p,{children:"Mittels der oben genannten Tests kann man diesen Fehlern auf den Grund gehen und sie beheben. Erst wenn alles fehlerfrei ist, sollte der Service gestartet werden."}),"\n",(0,r.jsxs)(n.h3,{id:"fehler-connection-refused",children:["Fehler: ",(0,r.jsx)(n.code,{children:"connection refused"})]}),"\n",(0,r.jsx)(n.p,{children:"Die IP-Verbindung zum betreffenden Ger\xe4t ist prinzipiell vorhanden, jedoch wird der Verbindungsaufbau von diesem Ger\xe4t zum angegebenen Port abgewiesen."}),"\n",(0,r.jsx)(n.p,{children:"Die Gr\xfcnde daf\xfcr k\xf6nnen vielf\xe4ltig sein. Typisch sind:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Der am Ger\xe4t offene Port stimmt nicht mit dem in der evcc-Konfiguration angegebenen Zielport \xfcberein."}),"\n",(0,r.jsx)(n.li,{children:"Der externe Zugriff auf das Ger\xe4t ist nicht aktiviert (z.B. bei Solaredge-Wechselrichtern im Auslieferungszustand)."}),"\n",(0,r.jsx)(n.li,{children:"Die maximal m\xf6gliche Anzahl an parallelen Verbindungen, die das Zielger\xe4t verwalten kann, ist ersch\xf6pft. Andere Verbindungen z. B. von Hausautomationen, Skripten oder weiteren Instanzen von evcc m\xfcssen ggf. zun\xe4chst beendet werden, bevor eine neue Verbindung m\xf6glich ist. Im ung\xfcnstigsten Fall l\xe4sst das Zielsystem nur eine einzige Verbindung zu."}),"\n",(0,r.jsx)(n.li,{children:"Blockade durch eine Firewall."}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"fehler-io-timeout",children:["Fehler: ",(0,r.jsx)(n.code,{children:"i/o timeout"})]}),"\n",(0,r.jsx)(n.p,{children:"Hier ist eine Verbindung zum Ger\xe4t ggf. vorhanden, jedoch antwortet das Zielsystem nicht innerhalb der vorgesehenen Zeit. Entweder kommt die Anfrage gar nicht beim Zielsystem an, geht auf dem R\xfcckweg verloren oder die Antwort dauert zu lange."}),"\n",(0,r.jsx)(n.p,{children:"Typische Gr\xfcnde sind:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Langsame oder schlechte Netzwerkverbindung (insbesondere bei Verbindungen \xfcber WiFi oder PowerLAN)"}),"\n",(0,r.jsx)(n.li,{children:"Fehlerhafte oder ungeeignete Verkabelung oder (bei RS485) falsche Terminierung"}),"\n",(0,r.jsx)(n.li,{children:"Das Zielger\xe4t ist \xfcberlastet oder ausgefallen"}),"\n",(0,r.jsx)(n.li,{children:"Bestimmte Funktionen des Ger\xe4ts sind nicht wie von evcc erwartet verf\xfcgbar (z. B. durch veraltete Firmware oder abweichende Konfigurationseinstellungen)"}),"\n",(0,r.jsx)(n.li,{children:"Zu kurze Timeout- oder Abfragezykluszeiten seitens evcc"}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"fehler-tmpevcc-operation-not-permitted-oderund-bind-address-already-in-use",children:["Fehler: ",(0,r.jsx)(n.code,{children:"/tmp/evcc: operation not permitted"})," oder/und ",(0,r.jsx)(n.code,{children:"bind: address already in use"})]}),"\n",(0,r.jsxs)(n.p,{children:["Diese Fehlermeldung erscheint, wenn z B. evcc bereits als Dienst l\xe4uft und evcc zus\xe4tzlich ein weiteres mal auf der Kommandozeile (durch Eingabe ",(0,r.jsx)(n.code,{children:"evcc"}),") gestartet wird, ggf. auch noch mit unterschiedlichen Benutzerberechtigungen. Es darf immer nur eine einzige Instanz von evcc zur gleichen Zeit laufen."]}),"\n",(0,r.jsxs)(n.p,{children:["Eine Pr\xfcfung, ob mehrere evcc Prozesse laufen, kann unter Linux mit Hilfe von ",(0,r.jsx)(n.code,{children:"htop"})," erfolgen."]}),"\n",(0,r.jsxs)(n.p,{children:["Sollte es Gr\xfcnde geben, evcc auf der Kommandoebene zu starten, sollte vorher der Dienst mit ",(0,r.jsx)(n.code,{children:"sudo systemctl stop evcc"})," beendet werden."]}),"\n",(0,r.jsx)(n.h3,{id:"telemetry--community-daten",children:"Telemetry & Community Daten"}),"\n",(0,r.jsxs)(n.p,{children:["Auf der ",(0,r.jsx)(n.a,{href:"https://evcc.io/#live",children:"evcc Webseite"}),' und im "Auswertung Ladeenergie" Dialog der evcc-UI zeigen wir aggregierte Live-Ladedaten der evcc-Installationen an. Wir sammeln diese Daten auf unserer zentralen api.evcc.io Instanz. Die Teilnahme daran ist selbstverst\xe4ndlich freiwillig.']}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Wie kann ich teilnehmen?"})}),"\n",(0,r.jsxs)(n.p,{children:['Im "Auswertung Ladeenergie" Dialog kannst du unter "Live-Community" deine Daten teilen. Bislang konnte die Funktion auch \xfcber ',(0,r.jsx)(n.a,{href:"/docs/reference/configuration/telemetry/",children:(0,r.jsx)(n.code,{children:"telemetry: true"})}),' aktiviert werden. Dieser Weg ist nun allerdings veraltet ("deprecated").']}),"\n",(0,r.jsx)(n.p,{children:"F\xfcr die Teilnahme ist aktuell ein \ud83d\udc9a Sponsor Token erforderlich. Der Hauptgrund daf\xfcr ist die Datenqualit\xe4t hoch zu halten und Fake-Daten zu minimieren."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Was wird aktuell \xfcbertragen?"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"aktuelle Ladeleistung"}),"\n",(0,r.jsx)(n.li,{children:"aktueller Anteil an Sonnenstrom"}),"\n",(0,r.jsx)(n.li,{children:"geladene Energiemenge"}),"\n",(0,r.jsx)(n.li,{children:"geladener Anteil an Sonnenenergie"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"M\xf6glicherweise werden wir zuk\xfcnftig noch weitere Daten hinzuf\xfcgen. Dies werden aber auf keinen Fall personenbezogene Daten oder private Installationsdaten (Adresse, Zug\xe4nge) sein. Eure Privatsph\xe4re ist uns wichtig!"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Was passiert mit den Daten?"})}),"\n",(0,r.jsx)(n.p,{children:"Wir speichern die Energiemengen aggregiert pro evcc-Instanz. Wir bilden keine Nutzerprofile \xfcber Zeit und haben auch kein Interesse daran dies zuk\xfcnftig zu tun."}),"\n",(0,r.jsx)(n.p,{children:"Unser Ziel ist es durch diese Daten mehr neue Nutzer f\xfcr evcc zu begeistern, selbst mehr \xfcber das Nutzungsverhalten von evcc zu erfahren und vor allem das durch evcc nutzbar gemachte Potenzial regenerativer Sonnenenergie zu visualisieren."}),"\n",(0,r.jsxs)(n.p,{children:["Die dargestellten aggregierten Gesamtdaten k\xf6nnen auch frei \xfcber ",(0,r.jsx)(n.a,{href:"https://api.evcc.io/v1/total",children:"https://api.evcc.io/v1/total"})," abgerufen werden. Wenn ihr also Ideen f\xfcr eigene kreative Visualisierungen habt, baut gerne was und erz\xe4hlt uns davon."]}),"\n",(0,r.jsxs)(n.p,{children:["Mehr Informationen findest du auch auf unserer ",(0,r.jsx)(n.a,{href:"https://sponsor.evcc.io/privacy",children:"Datenschutzseite"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"ersparnisberechnung",children:"Ersparnisberechnung"}),"\n",(0,r.jsxs)(n.p,{children:["In der evcc Oberfl\xe4che wird dir unten rechts angezeigt wieviel Prozent deiner geladenen Energie aus eigenem Sonnenstrom stammt (Beispiel: ",(0,r.jsx)(n.strong,{children:"85% Sonnenenergie"}),").\nBeim Klick darauf \xf6ffnet sich ein Dialog der mehr Details zur Ladenergie und deinen eingesparten Kosten zeigt.\nDamit diese Werte korrekt sind, musst du deinen Energie- und Einspeisepreis in der Konfiguration hinterlegen.\nHier ein Beispiel:"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"tariffs:\n  currency: EUR # (default EUR)\n  grid:\n    type: fixed\n    price: 0.294 # [currency]/kWh\n\n  feedin:\n    type: fixed\n    price: 0.08 # [currency]/kWh\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Mehr Details zur Konfiguration findest du in ",(0,r.jsx)(n.a,{href:"/docs/reference/configuration/tariffs",children:(0,r.jsx)(n.code,{children:"tariffs"})}),"."]}),"\n",(0,r.jsx)(n.p,{children:"F\xfcr die Berechnung der Einsparungen erfasst evcc grob die Gesamtmenge der geladenen Energie und die verwendeten Energiequellen (Netz, Batterie, PV)."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Was ist Sonnenenergie?"})}),"\n",(0,r.jsx)(n.p,{children:"Die direkte PV-Nutzung und die vom Batteriesystem bereitgestellte Energie werden bei dieser Berechnung gleich behandelt.\nevcc geht davon aus, dass der Hausspeicher prim\xe4r zur Speicherung von \xfcbersch\xfcssigem, selbstproduzierten Sonnenstrom verwendet wird.\nErf\xfcllt der Speicher auch netzdienliche Leistungen (bspw. Sonnen) oder f\xfchrt eine Kalibrierung mit Netzstrom durch, ist diese Annahme nicht immer korrekt.\nBatterieverluste durch die Umwandlung werden nicht ber\xfccksichtigt."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Berechnung von Ersparnis und effektivem Energiepreis"})}),"\n",(0,r.jsxs)(n.p,{children:["Der Algorithmus unterscheidet zwischen Netzstrom und selbst erzeugter Sonnenenergie (PV, Batterie).\nDer Kostenvorteil deiner Sonnenenergie ergibt sich aus der Differenz zwischen deinem Netzbezugspreis (z.B. 30 ct/kWh) und deinem Einspeisetarif (z.B. 8 ct/kWh).\nJede geladene kWh selbst produzierter Energie ist in diesem Beispiel 22 ct (30 ct - 8 ct) g\xfcnstiger als der Netzbezug.\nHast du 2 kWh eigene Energie geladen entspricht das einer ",(0,r.jsx)(n.strong,{children:"Ersparnis"})," von 44 ct."]}),"\n",(0,r.jsxs)(n.p,{children:["W\xfcrdest du dein Auto zu 100% mit eigener Sonnenenergie laden, entspricht der angezeigte ",(0,r.jsx)(n.strong,{children:"effektive Energiepreis"})," deiner, nicht eingenommenen, Einspeiseverg\xfctung (bspw. 8 ct/kWh).\nL\xe4dst du dein Auto zu 50% aus Sonnenenergie und zu 50% aus Netzstrom passt sich der Energiepreis entsprechend an (bspw. 19 ct/kWh)."]}),"\n",(0,r.jsx)(n.p,{children:"Wenn du keine Einspeiseverg\xfctung erh\xe4ltst, kannst du den Einspeisepreis auf 0 setzen.\nDie Sonnenenergie wird dann als kostenlos gerechnet."}),"\n",(0,r.jsxs)(n.p,{children:["Uns ist klar, dass diese Einsparung nicht allein evcc zuzuschreiben ist.\nSteckst du dein Auto an einem sonnigen Tag an eine ",(0,r.jsx)(n.em,{children:"dumme"})," Wallbox, wird ein Teil der geladenen Energie auch Sonnenstrom sein.\nevcc hilft dir aber den Anteil der geladenen Sonnenenergie zu maximieren."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Berechnung des Sonnenenergieanteils"})}),"\n",(0,r.jsx)(n.p,{children:"Wenn du gleichzeitig Energie aus verschiedenen Quellen beziehst (z.B. 50% PV, 50% Netzbezug), wird die selbst erzeugte Energie zuerst dem Haus, also allen nicht von evcc gesteuerten Verbrauchern, zugeordnet.\nDer verbleibende Anteil wird dann auf die Ladevorg\xe4nge aufgeteilt.\nBeispiel: Deine PV-Anlage erzeugt 3 kW. Diese 3 kW werden komplett vom Haus verbraucht (bspw. Waschmaschine).\nParallel l\xe4dst du dein Auto mit 3 kW (bspw. Modus = schnell).\nDas Haus wird in diesem Fall mit 100% Sonnenanteil gerechnet, das Auto mit 0%."}),"\n",(0,r.jsx)(n.p,{children:"Flexible Preise (Octopus Energy, Awattar, Tibber, etc) werden f\xfcr die Ermittlung des effektiven Energiepreises ber\xfccksichtigt."})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>d});var r=i(7294);const s={},t=r.createContext(s);function d(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);