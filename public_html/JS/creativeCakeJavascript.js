function valida_e_prenota_form() {
                if(document.getElementById("completed").style.display === "block"){
                document.getElementById("completed").style.display = 'none';
                return true;
                }
                else{
                var evento = document.forms["form_prenotazione"]["evento_da_prenotare"].value ;
                var nome = document.forms["form_prenotazione"]["nome"].value ;
                var cognome = document.forms["form_prenotazione"]["cognome"].value ;
                var telefono = document.forms["form_prenotazione"]["telefono"].value ;
                var prenotazione = false;
                document.getElementById("completed").style.display = 'none';
                if (evento === "") { 
                document.getElementById("error").style.display = 'block';
                document.getElementById("messError").innerHTML ='Seleziona l\'Evento a cui vuoi partecipare';
                return prenotazione;
                }
                else if (nome === "") { 
                document.getElementById("error").style.display = 'block';
                document.getElementById("messError").innerHTML ='Nome è un campo obbligatorio';
                return prenotazione;
                }
                else if (cognome === "") { 
                document.getElementById("error").style.display = 'block';
                document.getElementById("messError").innerHTML ='Cognome è un campo obbligatorio';
                return prenotazione;
                }
                else if (telefono === "") { 
                document.getElementById("error").style.display = 'block';
                document.getElementById("messError").innerHTML ='Telefono è un campo obbligatorio';
                return prenotazione;
                }
        // isNaN è una funzione che ritorna true se il parametro NON E' un numero altrimenti ritorna false
        // inoltre faccio un controllo che il numero inserito non sia < 0 (parseInt ritorna il valore numerico del parametro
                if (isNaN(telefono) || parseInt(telefono)<0){
                document.getElementById("error").style.display = 'block';
                document.getElementById("messError").innerHTML ='Telefono è un campo numerico';
                return prenotazione;
                }
                prenotazione = true;
                document.getElementById("error").style.display = 'none';
                document.getElementById("completed").style.display = 'block';
        
                console.log(typeof(telefono));
        //da chiedere al professore
                return false;
                }
            }
            
function reset_form(){
                document.getElementById("completed").style.display = 'none';
                document.getElementById("error").style.display = 'none';
         
                 document.getElementById("form_prenotazione").reset();
            }
            

function avanti(){
                if(contatore !== 9){
                    contatore = contatore + 1;
                    document.getElementById("imgGallery").src='../Img/Gallery/PageGallery/Foto'+contatore+'.jpg';
                    
                    //utilizzo il metodo centralizzato per modificare la didascalia
                    modifica_didascalia(contatore);
                }
            }
            
            function indietro(){

                if(contatore !== 1){
                    contatore = contatore - 1;
                    document.getElementById("imgGallery").src='../Img/Gallery/PageGallery/Foto'+contatore+'.jpg';
                    
                    //utilizzo il metodo centralizzato per modificare la didascalia
                    modifica_didascalia(contatore);
                }
            }
            
            function vaiAllaPrima(){
                if(contatore !== 1){
                    contatore=1;
                    document.getElementById("imgGallery").src='../Img/Gallery/PageGallery/Foto1.jpg';
                    modifica_didascalia(1);
                }
            }
            function vaiAllUltima(){
                if(contatore !== 9){
                    contatore=9;
                    document.getElementById("imgGallery").src='../Img/Gallery/PageGallery/Foto9.jpg';
                    modifica_didascalia(9);
                }
            }
            
            function modifica_didascalia(contatore){
                var text1="La location";
                var text2="Assaggia i nostri cupcake";
                var text3="Cupcake al cioccolato fondente appena sfornati";
                var text4="La nostra vetrina";
                var text5="La preparazione";
                var text6="Cupcake misti";
                var text7="Aperitivi e degustazioni";
                var text8="Cupcake ai mirtilli selvatici";
                var text9="";                
                    //modifica dinamica della didascalia
                    if(contatore===1) document.getElementById("figCaptionText").innerHTML=text1;
                    if(contatore===2) document.getElementById("figCaptionText").innerHTML=text2;
                    if(contatore===3) document.getElementById("figCaptionText").innerHTML=text3;
                    if(contatore===4) document.getElementById("figCaptionText").innerHTML=text4;
                    if(contatore===5) document.getElementById("figCaptionText").innerHTML=text5;
                    if(contatore===6) document.getElementById("figCaptionText").innerHTML=text6;
                    if(contatore===7) document.getElementById("figCaptionText").innerHTML=text7;
                    if(contatore===8) document.getElementById("figCaptionText").innerHTML=text8;
                    if(contatore===9) document.getElementById("figCaptionText").innerHTML=text9;
            }


