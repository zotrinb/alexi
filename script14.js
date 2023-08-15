let cer = document.querySelector(".btn--classes");
function opennone(){
	if (document.querySelector(".txt-last").style.display==='block'){
		 let c = document.querySelector(".txt-last");
		 c.style.transition="2s";
		 c.style.display='none';
		 
		cer.innerHTML='Read More';
	}
	
	else{
	document.querySelector(".txt-last").style.display = "block";
	cer.innerHTML='Hide';
}
	
}



cer.onclick=opennone;


