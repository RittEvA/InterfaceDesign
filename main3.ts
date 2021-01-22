namespace Experiment{
    document.addEventListener("DOMContentLoaded", init);

    //Globale Variablen
    let lat1 : number;
    let lon1 : number;
    let time1 : string;
    let lat2 : number;
    let lon2 : number;
    let time2 : string;
    let differenz : number;
    let geschwindigkeit: number;
    let hoehe:number;
    
    let note:Tone;
    let tonlaenge:string;
    let tonhoehe:string;
    
    //let maxG:number=0;
    //let minG:number=100;
    let maxGe:number=0;
    let minGe:number=100;

    let spanneG:number;
    let teilerG:number;

    let maxH:number=0;
    let minH:number=100;
    let spanneH:number;
    let teilerH:number;

    let merk:number=0;
    let Gkeiten:number[]=[];
    let Hoehen:number[]=[];
    

    
    //Anfangsfunktion die EventListener verteilt, damit weitere Funktionen gestartet werden können
    function init(){
        //document.getElementById("toene").addEventListener("click", setup);
        document.getElementById("lesen").addEventListener("click", lesen);
        //document.getElementById("spielen").addEventListener("click", spielen);
    }

    //Ton auf dem Button Töne, erzeugt C4 bei klick mit dem Wert einer Halbennot
    /*function setup(){
        note = new Tone.Synth().toDestination();
        note.triggerAttackRelease("C4", "2n");
        //note.stop();
    }
   
    //Spielt den Weg3
    function spielen(){
        Gkeiten=[];
        for (let i:number=0; i < Weg3.features.length-1; i++){
            //Daten der ersten Koordinaten werden in die Variablen gespeichert
            lat1 = Weg3.features[i].geometry.coordinates[0];
            lon1 = Weg3.features[i].geometry.coordinates[1];
            time1= convert(Weg3.features[i].properties.time);
            //Daten der zweiten Koordinaten werden in die Variablen gespeichert
            lat2 =Weg3.features[i+1].geometry.coordinates[0];
            lon2=Weg3.features[i+1].geometry.coordinates[1];
            time2= convert(Weg3.features[i+1].properties.time);
            hoehe=Weg3.features[i+1].properties.ele - Weg3.features[i].properties.ele;
            //alert(hoehe);
            let strecke:number=distanz();
            let zeit:number=dauer(time1, time2);
            geschwindigkeit = strecke / zeit;
            if (maxGe < geschwindigkeit){
                maxGe = geschwindigkeit;
            }
            if (minGe>geschwindigkeit){ 
                minGe = geschwindigkeit;
            }
            //alle Geschwindigkeiten in ein Array pushen
            Gkeiten.push(geschwindigkeit);
            //alle Höhendifferenzen in ein Array pushen
            Hoehen.push(hoehe);
        };
        alert(maxGe+" / "+ minGe);
        maxMinSpanne();

        //mit der Geschwindigkeit, den Minimalwerten, den Teilern und i wird ein Ton erzeugt
        for (let i:number=0; i < Weg3.features.length-1; i++){
            //Daten der ersten Koordinaten werden in die Variablen gespeichert
            lat1 = Weg3.features[i].geometry.coordinates[0];
            lon1 = Weg3.features[i].geometry.coordinates[1];
            time1= convert(Weg3.features[i].properties.time);
            //Daten der zweiten Koordinaten werden in die Variablen gespeichert
            lat2 =Weg3.features[i+1].geometry.coordinates[0];
            lon2=Weg3.features[i+1].geometry.coordinates[1];
            time2= convert(Weg3.features[i+1].properties.time);
            hoehe=Weg3.features[i+1].properties.ele - Weg3.features[i].properties.ele;
            //alert(hoehe);
            let strecke:number=distanz();
            let zeit:number=dauer(time1, time2);
            geschwindigkeit = strecke / zeit;
            music(geschwindigkeit, i, hoehe);
        };
        
    }*/

    //durchläuft das GPS-Array und speichert in die Variablen die Längengrade(lon), Breitengrade(lat), Zeit(time) und Höhendifferenz(hoehe)
    function lesen(){
        Gkeiten=[];
        for (let i:number=0; i < Weg1.features.length-1; i++){
            //Daten der ersten Koordinaten werden in die Variablen gespeichert
            lat1 = Weg1.features[i].geometry.coordinates[0];
            lon1 = Weg1.features[i].geometry.coordinates[1];
            time1= convert(Weg1.features[i].properties.time);
            //Daten der zweiten Koordinaten werden in die Variablen gespeichert
            lat2 =Weg1.features[i+1].geometry.coordinates[0];
            lon2=Weg1.features[i+1].geometry.coordinates[1];
            time2= convert(Weg1.features[i+1].properties.time);
            hoehe=Weg1.features[i+1].properties.ele - Weg1.features[i].properties.ele;
            //alert(hoehe);
            let strecke:number=distanz();
            let zeit:number=dauer(time1, time2);
            geschwindigkeit = strecke / zeit;
            if (maxGe < geschwindigkeit){
                maxGe = geschwindigkeit;
            }
            if (minGe>geschwindigkeit){ 
                minGe = geschwindigkeit;
            }
            //alle Geschwindigkeiten in ein Array pushen
            Gkeiten.push(geschwindigkeit);
            //alle Höhendifferenzen in ein Array pushen
            Hoehen.push(hoehe);
        };
        
        maxMinSpanne();

        //mit der Geschwindigkeit, den Minimalwerten, den Teilern und i wird ein Ton erzeugt
        for (let i:number=0; i < Weg1.features.length-1; i++){
            //Daten der ersten Koordinaten werden in die Variablen gespeichert
            lat1 = Weg1.features[i].geometry.coordinates[0];
            lon1 = Weg1.features[i].geometry.coordinates[1];
            time1= convert(Weg1.features[i].properties.time);
            //Daten der zweiten Koordinaten werden in die Variablen gespeichert
            lat2 =Weg1.features[i+1].geometry.coordinates[0];
            lon2=Weg1.features[i+1].geometry.coordinates[1];
            time2= convert(Weg1.features[i+1].properties.time);
            hoehe=Weg1.features[i+1].properties.ele - Weg1.features[i].properties.ele;
            //alert(hoehe);
            let strecke:number=distanz();
            let zeit:number=dauer(time1, time2);
            geschwindigkeit = strecke / zeit;
            music(geschwindigkeit, i, hoehe);
        };
        
    };
    
    
    //Stopfunktion: generator stummschalten

    //berechnet die Distanz zwischen zwei Koordinaten Punkten (Luftline)
    function distanz():number{
        let radius:number= 6371;//radius der Weltkugel
        let lat = toRadians(lat2-lat1);//Differenz der Längengradzahlen
        let lon = toRadians(lon2-lon1);//Differenz der Breitengradzahlen
        let a = Math.sin(lat/2) * Math.sin(lat/2) + Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(lon/2) * Math.sin(lon/2);
        let c = 2*Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        let d = Math.abs(radius * c);
        return d;
    }

    //damit Grad-Zahlen zu Radien werden, ausgelagterte Funktion
    function toRadians (angle :number):number {
        return angle * (Math.PI / 180);
    }
    
    //2020\/11\/05 08:30:21+00 > 2020-11-05T08:30:21
    function convert(_t:string){
        let a:string =_t.replace('/', '-');
        let b:string =a.replace("\\", '');
        let c:string =b.replace("\\", '');
        let d:string =c.replace('/', '-');
        let e: string= d.replace(' ','T');
        let f:string= e.replace('+00', '');
        return f;
    }

    //für die Dauer zwischen zwei GPS-Koordinaten
    function dauer(_startDate:string, _endDate:string):number{
        let _a:Date =new Date(_startDate);
        let _b:Date= new Date(_endDate);
        differenz = (_b.getTime() - _a.getTime());
        let zwischen: number = differenz/60; //Millesekunden durch 60 um Sekunden zu erhalten
        let zwischen2 : number =zwischen /60; //Sekunden durch 60 um Minuten zu erhalten
        let zwischen3:number =zwischen2/60; //Minuten durch 60 um Stunden zu erhalten
        return zwischen3; 
    }
    
    function maxMinSpanne(){
        
        //Maximum und Minimum der Höhen
        maxH=Math.max(...Hoehen);
        minH=Math.min(...Hoehen);
        spanneH=maxH-minH;// um den Switchcase zu bauen
        teilerH= spanneH / 8;
        //Maximum und Minimum der Geschwindigkeiten
    
        //maxG=Math.max(...Gkeiten);
        //minG=Math.min(...Gkeiten);
        spanneG=maxGe-minGe;//Berechnet die Spanne um dannach den Teiler für die spätere Aufteilung des Switch-Cases zu erhalten
        teilerG= spanneG / 4;
    }

    function music(_geschwindigkeit:number, _laenge:number, _hoehe:number){
        let pause:number=_laenge + merk;
        //alert(pause + " : " + merk);
        const now:Tone = Tone.now();
        let kmh:number= Math.round(_geschwindigkeit * 100) /100;//Entscheidend für die Länge des Tons
        //alert(kmh +" "+ minGe);
        
        switch(true){//min; min+teiler*x (1<=x<=4)
            case (kmh <minGe):
                alert("Du hier?");
                break;
            case (kmh <=minGe+teilerG*1):
                //2n
                tonlaenge="2n";
                merk=3;
                break;
            case (kmh <=minGe+teilerG*2):
                //4n
                tonlaenge="4n";
                merk=2.5;
                break;
            case (kmh <=minGe+teilerG*3):
                //8n
                tonlaenge="8n";
                merk=1;
                break;
            case (kmh <=minGe+teilerG*4):
                //16n
                tonlaenge="16n";
                merk=0.5;
                break;
            default:
                //alert("def");
                merk=0;
                break;
        };
        //alert(merk +" "+ tonlaenge);
        switch(true){//min; min+teiler2*x (1<=x<=8)
            case (hoehe <minH):
                break;
            case (hoehe <=minH+teilerH*1):
                //c4
                tonhoehe="c4";
                break;
            case (hoehe <=minH+teilerH*2):
                //d4
                tonhoehe="d4";
                break;
            case (hoehe <=minH+teilerH*3):
                //e4
                tonhoehe="e4";
                break;
            case (hoehe <=minH+teilerH*4):
                //f4
                tonhoehe="f4";
                break;
            case (hoehe <=minH+teilerH*5):
                //g4
                tonhoehe="g4";
                break;
            case (hoehe <=minH+teilerH*6):
                //a4
                tonhoehe="a4";
                break;
            case (hoehe <=minH+teilerH*7):
                //b4
                tonhoehe="b4";
                break;
            case (hoehe <=minH+teilerH*8):
                //c5
                tonhoehe="c5";
                break;
            default:
                break;
        };
        
        note = new Tone.Synth().toDestination();
        note.triggerAttackRelease(tonhoehe, tonlaenge, now + pause);
    }

}