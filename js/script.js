	
$(document).ready(function() {				   
	// tool tip
	$('.normaltip').aToolTip({
    	toolTipClass: 'aToolTip'});
 });

function verifica(elemento)
{
    if(elemento.value = "")
        elemento.value = "Mensaje";
};

function limpia(elemento)
{
    elemento.value = "";
};

