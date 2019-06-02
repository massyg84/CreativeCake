
/*
 *  **************PRENOTAZIONE*************************
 */
function valida_e_prenota_form() {
    
        /*
         * creo le variabili con i valori nel form al momento del submit "prenota evento"
         */
        var evento = document.forms["form_prenotazione"]["evento_da_prenotare"].value;
        var nome = document.forms["form_prenotazione"]["nome"].value;
        var cognome = document.forms["form_prenotazione"]["cognome"].value;
        var telefono = document.forms["form_prenotazione"]["telefono"].value;
        var prenotazione = false;
        
        /*
         * inizio delle verifiche per la validazione.
         * Le prime validazioni sono per i campi vuoti
         */
        
        //il terzo uguale verifica il tipo oltre che il valore
        if (evento === "") {
            document.getElementById("error").style.display = 'block';
            document.getElementById("messError").innerHTML = 'Seleziona l\'Evento a cui vuoi partecipare';
            return prenotazione;
        } else if (nome === "") {
            document.getElementById("error").style.display = 'block';
            document.getElementById("messError").innerHTML = 'Nome è un campo obbligatorio';
            return prenotazione;
        } else if (cognome === "") {
            document.getElementById("error").style.display = 'block';
            document.getElementById("messError").innerHTML = 'Cognome è un campo obbligatorio';
            return prenotazione;
        } else if (telefono === "") {
            document.getElementById("error").style.display = 'block';
            document.getElementById("messError").innerHTML = 'Telefono è un campo obbligatorio';
            return prenotazione;
        }
        

        /*
         * Opero anche una validazione relativa al numero di telefono
         * ci sono molti modi per validare il pattern del numero di telefono
         * come ad esempio le stringhe di validazione ma ho preferito controllare
         * solo se si trattasse di un numero 
         */
        
        /*
         * isNaN è una funzione che ritorna true se il parametro 
         * NON E' un numero altrimenti ritorna false
         * inoltre faccio un controllo che il numero inserito non sia 
         * < 0 (parseInt ritorna il valore numerico del parametro)
         * 
         * (ho usato il parseint perchè ho notato mediante il 
         *  console.log(typeof(telefono))
         *  che mi ritornava una stringa quindi il parseint mi converte 
         *  la stringa a numero)
         */
        if (isNaN(telefono) || parseInt(telefono) < 0) {
            document.getElementById("error").style.display = 'block';
            document.getElementById("messError").innerHTML = 'Telefono è un campo numerico';
            return prenotazione;
        }
        
        /*
         * Sezione relativa al caso di SUCCESSO in cui per prima cosa
         * setto il messaggio di errore a invisibile.
         * Setto il messaggio di successo a block (visibile)
         * e disabilito il bottone di "prenota evento" a prenotazione avvenuta
         * così l'utente dovrà effettuare il reset per un'ulteriore prenotazione
         */
        document.getElementById("error").style.display = 'none';
        document.getElementById("completed").style.display = 'block';
        /*
         * si può gestire in 2 modi o come ho fatto o con il 
         * document.getElementById("bottoneSubmit").setAttribute('disabled','disabled')
         * tale chiamata prende l'elemento e mi aggiunge l'attributo disabled con valore
         * disabled
         */
        document.getElementById("bottoneSubmit").disabled = 'disabled';
        
        /*
         * imposto prenotazione a true ma è un impostazione simbolica in quanto 
         * poi si fa ritornare false dato che non ho un server per la gestione 
         * della persistenza e ricaricando la sessione la pagina si refresha
         * non facendo restare il messaggio di avvenuta prenotazione
         */
        prenotazione = true;
        return false;
    }

/*
 * implemento il metodo reset in quanto sono interessata oltre che al reset
 * dei campi del form, anche al reset dei messaggi di errore o di successo a
 * display:none per tornare ad una situazione iniziale coerente con la 
 * compilazione del form.
 */
function reset_form() {
    document.getElementById("completed").style.display = 'none';
    document.getElementById("error").style.display = 'none';
    
    /*
     * funzione presa da w3schools per rimuovere un attributo 
     */
    document.getElementById("bottoneSubmit").removeAttribute('disabled');
    
    
    document.getElementById("form_prenotazione").reset();
}

/*
 * *********************GALLERY*****************************
 */

/*
 * Chiamando le foto da scorrere nella galleria Foto1-----Foto9
 * è come se mi sono creata un array logico di foto che posso sfruttare
 * opportunamente per il cambio foto
 */
function avanti() {
    /*
     * se siamo al valore del contatore che NON è all'ultimo numero relativo 
     * all'ultima immagine
     *  - incremento il contatore (+1)
     *  - prendo l'immagine cambiando l'attributo src con il path e il numero 
     *    incrementato opportunamente per restituirmi la foto successiva
     */
    if (contatore !== 9) {
        contatore = contatore + 1;
        document.getElementById("imgGallery").src = '../Img/Gallery/PageGallery/Foto' + contatore + '.jpg';

        //utilizzo il metodo centralizzato per modificare la didascalia
        modifica_didascalia(contatore);
    }
}

    
function indietro() {
    /*
     * se siamo al valore del contatore che NON è al primo numero relativo 
     * alla prima immagine
     *  - decremento il contatore (-1)
     *  - prendo l'immagine cambiando l'attributo src con il path e il numero 
     *    decrementato opportunamente per restituirmi la foto precedente
     */
    if (contatore !== 1) {
        contatore = contatore - 1;
        document.getElementById("imgGallery").src = '../Img/Gallery/PageGallery/Foto' + contatore + '.jpg';

        //utilizzo il metodo centralizzato per modificare la didascalia
        modifica_didascalia(contatore);
    }
}

function vaiAllaPrima() {
    /*
     * se la variabile contatore è diversa da 1 
     * setto il contatore a 1 e prendo la Foto1
     */
    if (contatore !== 1) {
        contatore = 1;
        document.getElementById("imgGallery").src = '../Img/Gallery/PageGallery/Foto1.jpg';
        //utilizzo il metodo centralizzato per modificare la didascalia
        modifica_didascalia(1);
    }
}
function vaiAllUltima() {
    /*
     * se la variabile contatore è diversa da 9
     * setto il contatore a 9 e prendo la Foto9
     */
    if (contatore !== 9) {
        contatore = 9;
        document.getElementById("imgGallery").src = '../Img/Gallery/PageGallery/Foto9.jpg';
        //utilizzo il metodo centralizzato per modificare la didascalia
        modifica_didascalia(9);
    }
}

function modifica_didascalia(contatore) {
    /*
     * creo le variabili con i vari testi delle didascalie
     */
    var text1 = "La location";
    var text2 = "Assaggia i nostri cupcake";
    var text3 = "Cupcake al cioccolato fondente appena sfornati";
    var text4 = "La nostra vetrina";
    var text5 = "La preparazione";
    var text6 = "Cupcake misti";
    var text7 = "Aperitivi e degustazioni";
    var text8 = "Cupcake ai mirtilli selvatici";
    var text9 = "";
    
    /*
     * controllo se la variabile contatore è 1 .... 9 e associo
     * la didascalia al contenuto opportuno
     */
    //modifica dinamica della didascalia
    if (contatore === 1)
        document.getElementById("figCaptionText").innerHTML = text1;
    if (contatore === 2)
        document.getElementById("figCaptionText").innerHTML = text2;
    if (contatore === 3)
        document.getElementById("figCaptionText").innerHTML = text3;
    if (contatore === 4)
        document.getElementById("figCaptionText").innerHTML = text4;
    if (contatore === 5)
        document.getElementById("figCaptionText").innerHTML = text5;
    if (contatore === 6)
        document.getElementById("figCaptionText").innerHTML = text6;
    if (contatore === 7)
        document.getElementById("figCaptionText").innerHTML = text7;
    if (contatore === 8)
        document.getElementById("figCaptionText").innerHTML = text8;
    if (contatore === 9)
        document.getElementById("figCaptionText").innerHTML = text9;
}


//CAMBIA COLORE QUANDO PASSI SUI LABEL DEL MENU
function cambiaColore(){
    
    
    
}

