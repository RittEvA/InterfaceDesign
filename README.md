# InterfaceDesign

https://ritteva.github.io/InterfaceDesign/
Thema: Distanz
Erstellen Sie ein Userinterface mit mindestens einer Ein- und einer Ausgabe.

## Grundidee
Um gewisse Distanzen zurückzulegen, wird immer eine zeitliche als auch eine räumliche Distanz zurückgelegt. Wären diese beiden physikalischen Größen nicht von einander Abhängig wäre das Beamen bestimmt bereits Teil unseres Lebens.
Viele Dinge werden mit Hilfe von Raum und Zeit angegeben. So sind Töne, Licht und unweigerlich Farben mit Wellen darstellbar. Beim Wandern oder generell im Leben hat man Höhen und Tiefen, diese können auch mit Wellen dargestellt werden. 
Auch Höhenprofile weisen Wellen die von Distanz und Höhenmetern abhänig sind.
Die zuverarbeitenden Größen sind Distanz und Höhenmeter, diese werden zu Tonlänge und Tonhöhe. Im Gesamten ergibt es eine Reihenfolge von Tönen die dann für den Nutzer auditiv wieder gegeben werden.
Es werden diese Wellen (Höhenprofil des Wanderweges) eingegeben und als Ausgabe erhällt man ein dem entsprechendes Bild oder Musikstück.

## Konkretisierung
Meine Eingabe ist die Geschwindigkeit und die jeweiligen Höhenmeter auf einem Weg. Diese Daten sollen zu Tonhöhe und Tonlänge umgewandelt werden. Somit bekommt ein Weg sein eigenes Klangmuster.
Konkret jenachdem wie schnell man unterwegs ist wird die Tonlänge kürzer oder länger. Abhängig von den Höhenmeter verändert sich die Tonhöhe.
Die Eingabe erfolgt über eine Button im Browser, wärend die Ausgabe über einen Lautsprecher erfolgt.

Der aktuelle Stand spielt einen bestimmten Weg zu test zwecken durch. Wenn der Button "lesen" geklickt wird, starten die Töne.

Weitere Überlegung: mehrere Wege in einem Array von denen über eine Random-Funktion einer ausgewählt und dann abgespielt wird. 
Möglicherweise ein Stop-Button insofern das abbrechen von Tönen im Browser möglich ist.
Stop Funktion

## ungklärte Fragen
Gibt es die Möglichkeit meherere Personen die gleiche Strecke laufen zu lassen und dann die jeweiligen Tonfolgen gleichzeitig abzu spielen?

Wo steht/ist meine Ausgabe? Also der Lautsprecher, hat den jeder für sich steht der am Ende einer Runde.

Kann nachträglich auf die Tonfolge zugeriffen werden?
Gleichzeitiges/paralleles Abspielen?
Stoppen?
Was ist der Nutzungskontext? Ursprünglich: einen Weg aufnehemen und dann abspielen, jetzt fällt das tracken weg, eher so als Kunstinstallation?


## Vorgehen
- auf nehmen einer Wegstrecke
- als GPX exportieren und in eine GeoJSOn umwandeln
- diese Datei kann einfach als .ts Array umgeschrieben werden
- Funktion die durch oben genanntes Array läuft und die Koordinaten aus ließt um später damit rechen zu können
- Währenddessen Versuche mit der Library Tone.js die einem erleichtert Töne über einen WEB-Browser ab zu spielen
- mit den Koordinaten und der dazugehörigen Zeit aus dem Array wird die Geschwindigkeit berechnet
- Um mit den Zeitangaben arbeiten zu können, ist eine Funktion nötig, welche die Angaben so formatier, dass damit gearbeitet werden kann
- Testweise eine If-Schleife mit festen Tonlängen und je nach Geschwindigkeit sich ändernde Tonhöhen
- eine Testfunktion um zu schauen wie es funktioniert mit einer Variablen im Switch-Cases 
- Switch-Cas eingebaut
- im zweiten Switch einen Fehler ewig nicht gefunden

