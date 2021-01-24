# InterfaceDesign


# Sound Of Silence
Thema: Distanz
Erstellen Sie ein Userinterface mit mindestens einer Ein- und einer Ausgabe.
 Links
 Website: https://ritteva.github.io/InterfaceDesign/
 Trailer: https://youtu.be/zlEb_mBXbxI


## Grundidee
Um gewisse Distanzen zurückzulegen, wird immer eine zeitliche als auch eine räumliche Distanz zurückgelegt. Wären diese beiden physikalischen Größen nicht von einander Abhängig wäre das "Beamen" bestimmt bereits Teil unseres Lebens.
Viele Dinge werden mit Hilfe von Raum und Zeit angegeben. So sind Töne, Licht und unweigerlich Farben mit Wellen darstellbar. Beim Wandern oder generell im Leben hat man Höhen und Tiefen, diese können auch mit Wellen dargestellt werden. 
Auch Höhenprofile weisen Wellen die von Distanz und Höhenmetern abhänig sind.
Die zuverarbeitenden Größen sind Distanz und Höhenmeter, diese werden zu Tonlänge und Tonhöhe. Im Gesamten ergibt es eine Reihenfolge von Tönen die dann für den Nutzer auditiv wieder gegeben werden.
Es werden diese Wellen (Höhenprofil des Wanderweges) eingegeben und als Ausgabe erhällt man ein dem entsprechendes Bild oder Musikstück.

## Finale Beschreibung
Wir legen tagtäglich Distanzen zurück, diese sind immer an räumliche und zeitliche Werte geknüpft. So wie Schall in Wellenform Zeit und Raum durchschreitet.
Mit diesem Interface wird aus einem Weg eine Tonfolge. Mit der berechneten Geschwindigkeit wird die Tonlänge bestimmt und mit Hilfe der Höhenmeter die Tonhöhe.

## Konkretisierung
Meine Eingabe ist die Geschwindigkeit und die jeweiligen Höhenmeter auf einem Weg. Diese Daten sollen zu Tonhöhe und Tonlänge umgewandelt werden. Somit bekommt ein Weg sein eigenes Klangmuster.
Konkret jenachdem wie schnell man unterwegs ist wird die Tonlänge kürzer oder länger. Abhängig von den Höhenmeter verändert sich die Tonhöhe.
Die Eingabe erfolgt über eine Button im Browser, wärend die Ausgabe über einen Lautsprecher erfolgt.

Der aktuelle Stand spielt einen bestimmten Weg zu test zwecken durch. Wenn der Button "lesen" geklickt wird, starten die Töne.

Das Interface auf Smartphones fokusiert. Aus diesem Grund ist es auf die Animationsfläche und den Button reduziert. Dieser ist animierend grün und hat die zusätzliche Information "START"

Nutzungskontext: Spaß am laufen/Wandern, 

Weitere Überlegung: mehrere Wege in einem Array von denen über eine Random-Funktion einer ausgewählt und dann abgespielt wird. 
-> Nicht eingebaut:Möglicherweise ein Stop-Button insofern das abbrechen von Tönen im Browser möglich ist.
Stop Funktion

## Zukunft?
mit live Übertragung 
mit GPS direkt verknüpfte Funktion damit keine händische Umwandlung statt finden muss
und vieles weiter...

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
- Überlegungen zur Oberflächengestaltung: Scribbels
- Währenddessen Versuche mit der Library Tone.js die einem erleichtert Töne über einen WEB-Browser ab zu spielen
- mit den Koordinaten und der dazugehörigen Zeit aus dem Array wird die Geschwindigkeit berechnet
- Um mit den Zeitangaben arbeiten zu können, ist eine Funktion nötig, welche die Angaben so formatier, dass damit gearbeitet werden kann
- Testweise eine If-Schleife mit festen Tonlängen und je nach Geschwindigkeit sich ändernde Tonhöhen
- eine Testfunktion um zu schauen wie es funktioniert mit einer Variablen im Switch-Cases 
- Switch-Case eingebaut
- im zweiten Switch einen Fehler ewig nicht gefunden
- Switch-Cases werden abhängig vom größten und kleinsten Wert fest gelegt (jeweils bei der Geschwindigkeit und der Höhenmeterdifferenz)
- Animation: damit man weis wo der Ton entstanden ist auf der Route die man gelaufen ist (mit dem aktuellen Code nicht umsetzbar -> siehe Trailer wie es ausschauen sollte)

## Codeablauf
Button wird gedrückt
die Funktion wird gestartet
durchläuft das Array des Weges und speichert die jeweiligen Daten in die Variablen
mit diesen wird die Geschwindigkeit berechnet und die Differenz der Höhenmeter
diese Daten füllen jeweils ein Array um das Maximum und Minimum zu berechen, werden in Variablen gespeichert
Die Funktion durchläuft das Weg Array ein zweites mal und diesmal wird jede Geschwindigkeit und Höhenmeterdifferenz
durch den dazugehörigen Switch-Case geschickt, eine Variable wird bestückt
und wird dann in die Zeile für den Ton eingefügt
die Töne erklingen 

