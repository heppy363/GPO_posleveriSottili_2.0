document.addEventListener("DOMContentLoaded", main);

function main(){
    richiesteAPI()
}

function richiesteAPI(){
    let SelezioneRegione = document.querySelector("#Regione"),
        SelezioneProvincia = document.querySelector("#Provincia"),
        SelezioneComune = document.querySelector("#Comune");

    SelezioneProvincia.disabled = true;
    SelezioneComune.disabled = true;
    SelezioneProvincia.length = 1
    SelezioneComune.length = 1

    richiestaAPI_Regioni()
    
    //Cambiamento della Regione
    SelezioneRegione.onchange = (e)=> {
        if(e.target.value === "Seleziona Regione") {
            SelezioneProvincia.disabled = true
            SelezioneComune.disabled = true
            SelezioneProvincia.length = 1
            SelezioneComune.length = 1
        }else{
            SelezioneProvincia.disabled = false
            SelezioneComune.disabled = true
            SelezioneProvincia.length = 1
            SelezioneComune.length = 1

            richiestaAPI_Province(e.target.value) 
        }
    };

    //Cambiamento della Provincia
    SelezioneProvincia.onchange = (e)=> {
        if(e.target.value === "Seleziona Provincia"){
            SelezioneComune.disabled = true
            SelezioneComune.length = 1
        }else{
            SelezioneComune.disabled = false
            SelezioneComune.length = 1
            
            let sigla = siglaProvincia(e.target.value)
            richiestaAPI_Comune(sigla)
        }
        
    };
}

function richiestaAPI_Regioni(){
    let request = new XMLHttpRequest()
    request.open("GET","https://comuni-istat-api.belicedigital.com/api/regioni", true)
    request.send()
    request.onload = function(){
        let json_Regioni = JSON.parse(request.responseText)
        let regioni = []
        let cont = 0
        while(json_Regioni[cont] != null){
            regioni.push(json_Regioni[cont])
            cont++
        }

        let SelezioneRegione = document.querySelector("#Regione")
        for(let i=0; i<regioni.length; i++){
            let regione = regioni[i]
            SelezioneRegione.options[SelezioneRegione.options.length] = new Option(
                regione,
                regione
            );
        }
    };
}


function richiestaAPI_Province(regione){
    let provinceAPI = "https://comuni-istat-api.belicedigital.com/api/province/"+regione;
    let request = new XMLHttpRequest()
    request.open("GET", provinceAPI, true)
    request.send()
    request.onload = function(){
        let json_Province = JSON.parse(request.responseText)
        let province = []
        let cont = 0
        while(json_Province[cont] != null){
            province.push(json_Province[cont])
            cont++
        }

        let SelezioneProvincia = document.querySelector("#Provincia")
        for(let i=0; i<province.length; i++){
            let provincia = province[i]
            SelezioneProvincia.options[SelezioneProvincia.options.length] = new Option(
                provincia,
                provincia
            );
        }
    }
}

function richiestaAPI_Comune(siglaProvincia){
    let comuneAPI = "https://comuni-istat-api.belicedigital.com/api/provincia/" + siglaProvincia + "/comuni"
    let request = new XMLHttpRequest()
    request.open("GET", comuneAPI, true)
    request.send()
    request.onload = function(){
        let json_Comuni = JSON.parse(request.responseText)
        let comuni = []
        let cont = 0
        while(json_Comuni[cont] != null){
            comuni.push(json_Comuni[cont])
            cont++
        }

        let SelezioneComune = document.querySelector("#Comune")
        for(let i=0; i<comuni.length; i++){
            let comune = comuni[i]
            SelezioneComune.options[SelezioneComune.options.length] = new Option(
                comune,
                comune
            );
        }
    }
}

function siglaProvincia(provincia){
    let sigla
    switch(provincia){
        case "Agrigento":
            sigla = "AG"
            break;
        case "Alessandria":
            sigla = "AL"
            break;
        case "Ancona":
            sigla = "AN"
            break;
        case "Aosta":
            sigla = "AO"
            break;
        case "Arezzo":
            sigla = "AR"
            break;
        case "Ascoli Piceno":
            sigla = "AP"
            break;
        case "Asti":
            sigla = "AT"
            break;
        case "Avellino":
            sigla = "AV"
            break;
        case "Bari":
            sigla = "BA"
            break;
        case "Barletta":
            sigla = "BT"
            break;
        case "Belluno":
            sigla = "BL"
            break;
        case "Benevento":
            sigla = "BN"
            break;
        case "Bergamo":
            sigla = "BG"
            break;
        case "Biella":
            sigla = "BI"
            break;
        case "Bologna":
            sigla = "BO"
            break;
        case "Bolzano":
            sigla = "BZ"
            break;
        case "Brescia":
            sigla = "BS"
            break;
        case "Brindisi":
            sigla = "BR"
            break;
        case "Cagliari":
            sigla = "CA"
            break;
        case "Caltanissetta":
            sigla = "CL"
            break;
        case "Campobasso":
            sigla = "CB"
            break;
        case "Carbonia":
            sigla = "CI"
            break;
        case "Caserta":
            sigla = "CE"
            break;
        case "Catania":
            sigla = "CT"
            break;
        case "Catanzaro":
            sigla = "CZ"
            break;
        case "Chieti":
            sigla = "CH"
            break;
        case "Como":
            sigla = "CO"
            break;
        case "Cosenza":
            sigla = "CS"
            break;
        case "Cremona":
            sigla = "CR"
            break;
        case "Crotone":
            sigla = "KR"
            break;
        case "Cuneo":
            sigla = "CN"
            break;
        case "Enna":
            sigla = "EN"
            break;
        case "Fermo":
            sigla = "FM"
            break;
        case "Ferrara":
            sigla = "FE"
            break;
        case "Firenze":
            sigla = "FI"
            break;
        case "Foggia":
            sigla = "FG"
            break;
        case "Forlì":
            sigla = "FC"
            break;
        case "Frosinone":
            sigla = "FR"
            break;
        case "Genova":
            sigla = "GE"
            break;
        case "Gorizia":
            sigla = "GO"
            break;
        case "Grosseto":
            sigla = "GR"
            break;
        case "Imperia":
            sigla = "IM"
            break;
        case "Isernia":
            sigla = "IS"
            break;
        case "L'Aquila":
            sigla = "AQ"
            break;
        case "La Spezia":
            sigla = "SP"
            break;
        case "Latina":
            sigla = "LT"
            break;
        case "Lecce":
            sigla = "LR"
            break;
        case "Lecco":
            sigla = "LC"
            break;
        case "Livorno":
            sigla = "LI"
            break;
        case "Lodi":
            sigla = "LO"
            break;
        case "Lucca":
            sigla = "LU"
            break;
        case "Macerata":
            sigla = "MC"
            break;
        case "Mantova":
            sigla = "MN"
            break;
        case "Massa":
            sigla = "MS"
            break;
        case "Matera":
            sigla = "MT"
            break;
        case "Messina":
            sigla = "ME"
            break;
        case "Milano":
            sigla = "MI"
            break;
        case "Modena":
            sigla = "MO"
            break;
        case "Monza":
            sigla = "MB"
            break;
        case "Napoli":
            sigla = "NA"
            break;
        case "Novara":
            sigla = "NO"
            break;
        case "Nuoro":
            sigla = "NU"
            break;
        case "Oristano":
            sigla = "OR"
            break;
        case "Padova":
            sigla = "PD"
            break;
        case "Palermo":
            sigla = "PA"
            break;
        case "Parma":
            sigla = "PR"
            break;
        case "Pavia":
            sigla = "PV"
            break;
        case "Perugia":
            sigla = "PG"
            break;
        case "Pesaro":
            sigla = "PU"
            break;
        case "Pescara":
            sigla = "PE"
            break;
        case "Piacenza":
            sigla = "PC"
            break;
        case "Pisa":
            sigla = "PI"
            break;
        case "Pistoia":
            sigla = "PT"
            break;
        case "Pordenone":
            sigla = "PN"
            break;
        case "Potenza":
            sigla = "PZ"
            break;
        case "Prato":
            sigla = "PO"
            break;
        case "Ragusa":
            sigla = "RG"
            break;
        case "Ravenna":
            sigla = "RA"
            break;
        case "Reggio di Calabria":
            sigla = "RC"
            break;
        case "Reggio nell'Emilia":
            sigla = "RE"
            break;
        case "Rieti":
            sigla = "RI"
            break;
        case "Rimini":
            sigla = "RN"
            break;
        case "Roma":
            sigla = "RM"
            break;
        case "Rovigo":
            sigla = "RO"
            break;
        case "Salerno":
            sigla = "SA"
            break;
        case "Sassari":
            sigla = "SS"
            break;
        case "Savona":
            sigla = "SV"
            break;
        case "Siena":
            sigla = "SI"
            break;
        case "Siracusa":
            sigla = "SR"
            break;
        case "Sondrio":
            sigla = "SO"
            break;
        case "Taranto":
            sigla = "TA"
            break;
        case "Teramo":
            sigla = "TE"
            break;
        case "Terni":
            sigla = "TR"
            break;
        case "Torino":
            sigla = "TO"
            break;
        case "Trani":
            sigla = "BT"
            break;
        case "Trapani":
            sigla = "TP"
            break;
        case "Trento":
            sigla = "TN"
            break;
        case "Treviso":
            sigla = "TV"
            break;
        case "Trieste":
            sigla = "TS"
            break;
        case "Udine":
            sigla = "UD"
            break;
        case "Varese":
            sigla = "VA"
            break;
        case "Venezia":
            sigla = "VE"
            break;
        case "Verbania":
            sigla = "VB"
            break;
        case "Vercelli":
            sigla = "VC"
            break;
        case "Verona":
            sigla = "VR"
            break;
        case "Vibo Valentia":
            sigla = "VV"
            break;
        case "Vicenza":
            sigla = "VI"
            break;
        case "Viterbo":
            sigla = "VT"
            break;
    }
    return sigla
}