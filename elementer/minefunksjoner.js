/**
 * Created by Silje on 17.10.2017.
 */

//For å hente ut funkjsonene, legg til denne setningen over <script> i html-filen
// <script type="text/javascript" src="minefunksjoner.js"> </script>

// Returnerer minste tallet i en array
function finnMinsteTall(array) {
            for(var i=0; i<array.length; i++) {
                if(array[i]<minst) {                      //løkken sjekker tallene like mange ganger som arrayen er lang
                    minst = array[i];
                }
            }
            return minst;
        }

// Returmerer indeksene yil et tall i et array
function getAllIndexes(array,verdi) {
    var indexer = [];
    for(var i=0; i<array.length; i++) {
        if(array[i] === verdi) {
            indexer.push(i);                              //setter indexen helt bakerst
        }
    }
    return indexer;
}

// Baklengs - array
function baklengs() {
    var teller = 0;
    for (var i = array.length - 1; i >= 0; i--) {
        baklengsarray[teller] = tall[i];
        teller++;
    }
    document.getElementById("txtUtskrift").innerHTML = "Baklengs er arrayen:<br>" + baklengsarray;

}

//Sjekke om verdi i input-felt er likt
// som "oslo" og "Oslo"
//funksjon returnerer 1 hvis den fant søkeordet og 0 hvis ikke
        function ifExist(ord,arr) {
            ord = ord.toLowerCase();
            for(var i=0; i<arr.length; i++) {
                var buffer = arr[i].toLowerCase();
                if (ord === buffer) {
                    return 1;
                }
            }
            return 0;
        }