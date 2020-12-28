var Experiment;
(function (Experiment) {
    document.addEventListener("DOMContentLoaded", init);
    //Globale Variablen
    let lat1;
    let lon1;
    let time1;
    let lat2;
    let lon2;
    let time2;
    let differenz;
    let geschwindigkeit;
    let note;
    //Anfangsfunktion die EventListener verteilt, damit weitere Funktionen gestartet werden können
    function init() {
        document.getElementById("toene").addEventListener("click", setup);
        document.getElementById("lesen").addEventListener("click", lesen);
    }
    //Ton auf dem Button Töne, erzeugt C4 bei klick mit dem Wert einer Halbennot
    function setup() {
        note = new Tone.Synth().toDestination();
        note.triggerAttackRelease("C4", "2n");
    }
    //durchläuft das GPS-Array und speichert in die Variablen die Längengrade(lon), Breitengrade(lat) und Zeit(time)
    function lesen() {
        for (let i = 0; i < Experiment.Weg1.features.length; i++) {
            //Daten der ersten Koordinaten werden in die Variablen gespeichert
            lat1 = Experiment.Weg1.features[i].geometry.coordinates[0];
            lon1 = Experiment.Weg1.features[i].geometry.coordinates[1];
            time1 = convert(Experiment.Weg1.features[i].properties.time);
            //Daten der zweiten Koordinaten werden in die Variablen gespeichert
            lat2 = Experiment.Weg1.features[i + 1].geometry.coordinates[0];
            lon2 = Experiment.Weg1.features[i + 1].geometry.coordinates[1];
            time2 = convert(Experiment.Weg1.features[i + 1].properties.time);
            let strecke = distanz();
            let zeit = dauer(time1, time2);
            geschwindigkeit = strecke / zeit;
            music(geschwindigkeit, i);
        }
    }
    //berechnet die Distanz zwischen zwei Koordinaten Punkten (Luftline)
    function distanz() {
        let radius = 6371; //radius der Weltkugel
        let lat = toRadians(lat2 - lat1); //Differenz der Längengradzahlen
        let lon = toRadians(lon2 - lon1); //Differenz der Breitengradzahlen
        let a = Math.sin(lat / 2) * Math.sin(lat / 2) + Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(lon / 2) * Math.sin(lon / 2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        let d = Math.abs(radius * c);
        return d;
    }
    //damit Grad-Zahlen zu Radien werden, ausgelagterte Funktion
    function toRadians(angle) {
        return angle * (Math.PI / 180);
    }
    //2020\/11\/05 08:30:21+00 > 2020-11-05T08:30:21
    function convert(_t) {
        let a = _t.replace('/', '-');
        let b = a.replace("\\", '');
        let c = b.replace("\\", '');
        let d = c.replace('/', '-');
        let e = d.replace(' ', 'T');
        let f = e.replace('+00', '');
        return f;
    }
    //für die Dauer zwischen zwei GPS-Koordinaten
    function dauer(_startDate, _endDate) {
        let _a = new Date(_startDate);
        let _b = new Date(_endDate);
        differenz = (_b.getTime() - _a.getTime());
        let zwischen = differenz / 60; //Millesekunden durch 60 um Sekunden zu erhalten
        let zwischen2 = zwischen / 60; //Sekunden durch 60 um Minuten zu erhalten
        let zwischen3 = zwischen2 / 60; //Minuten durch 60 um Stunden zu erhalten
        return zwischen3;
    }
    function music(_geschwindigkeit, _laenge) {
        let pause = _laenge + 1;
        const now = Tone.now();
        let kmh = Math.round(_geschwindigkeit * 100) / 100; //Entscheidend für 
        switch (true) {
            case (kmh < 0):
                note = new Tone.Synth().toDestination();
                note.triggerAttackRelease("C4", "4n", now + pause);
                break;
            case (kmh <= 0.1):
                note = new Tone.Synth().toDestination();
                note.triggerAttackRelease("C4", "4n", now + pause);
                break;
            case (kmh <= 0.2):
                note = new Tone.Synth().toDestination();
                note.triggerAttackRelease("D4", "4n", now + pause);
                setTimeout(callback, 3000);
                break;
            case (kmh <= 0.3):
                note = new Tone.Synth().toDestination();
                note.triggerAttackRelease("F4", "4n", now + pause);
                break;
            case (kmh <= 0.6):
                note = new Tone.Synth().toDestination();
                note.triggerAttackRelease("G4", "4n", now + pause);
                break;
            case (kmh <= 0.8):
                note = new Tone.Synth().toDestination();
                note.triggerAttackRelease("A4", "4n", now + pause);
                break;
            case (kmh <= 2):
                note = new Tone.Synth().toDestination();
                note.triggerAttackRelease("B4", "4n", now + pause);
                break;
            case (kmh <= 3):
                note = new Tone.Synth().toDestination();
                note.triggerAttackRelease("C5", "4n", now + pause);
                break;
            case (kmh <= 4):
                note = new Tone.Synth().toDestination();
                note.triggerAttackRelease("d5", "2n", now + pause);
                break;
            default:
                break;
        }
    }
})(Experiment || (Experiment = {}));
//# sourceMappingURL=main.js.map