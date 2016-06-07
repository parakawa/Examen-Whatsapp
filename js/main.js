var tam=datos.length

$(document).ready(function(){
		llenadoSearch()

});


$("#search").keyup(searchContact)

function llenadoSearch(){
	for(var i=0;i<tam;i++){
	var div=document.createElement("div")
		div.setAttribute("class","panel-list-message-contact")
		div.setAttribute("onclick","mostrar(this)")
		div.innerHTML="<div class='profile-img'><img src='image/"+datos[i].imagen+"'/></div><div class='message-text show-dots'><div class='message-text-detail'><div class='name-contact show-dots'>"+datos[i].nombre+"</div><div class='message-hour '>"+datos[i].mensajes[0].fecha+"</div></div><div class='message-chat show-dots'><p class='show-dots'>"+datos[i].mensajes[0].contenido+"</p></div></div>"
		$(".panel-contact-chat").append(div)
		$(".message-chat").emoticonize()
	}
}

function mostrar(x){
	var src=$(x).find("img").attr("src")
	var img="<img src='"+src+"'alt='imagen perfil'>"
	var name=$($(x)).children("div.message-text").children("div.message-text-detail").children("div.name-contact").text()
	var hora=$($(x)).children("div.message-text").children("div.message-text-detail").children("div.message-hour").text()
	
	for(var i=0;i<tam;i++){
		if(name==datos[i].nombre){ 
			for (var j=0; j<datos[i].mensajes.length; j++) {
				$(".chat-message").children("div.message-author").children("a.name-author").text(name)
				$(".chat-message").children("div.message-author").children("a.text-author").text(datos[i].mensajes[0].contenido)
			}	$(".chat-message").children("div.message-author").children("a.bubble-chat-hour").span("a.chat-hour").text(hora)
		}
	}


	$(".panel-chat-header").html(img)
	$(".panel-chat-detail").children("div.text").children("div.name-contact").html(name)
	$(".panel-chat-detail").children("div.text").children("div.name-group").html(hora)


}

function escribirMensaje(){
	var hora=obtenerHora()
	var span=document.createElement("span")
	$(span).html(hora)
	span.setAttribute("class","chat-hour")
	var bubbleChatHour=document.createElement("div")
	bubbleChatHour.setAttribute("class","bubble-chat-hour")
	$(bubbleChatHour).append(span)
	
	var mensaje=$("#mensaje").val()
	var messageUserRight=document.createElement("div")
	messageUserRight.setAttribute("class","message-user-right")
	var messageUser=document.createElement("div")
	messageUser.setAttribute("class","message-user")
	var textAuthor=document.createElement("div")
	textAuthor.setAttribute("class","text-author")
	$(textAuthor).html(mensaje)
	$(messageUser).append(textAuthor)
	$(messageUser).append(bubbleChatHour)
	$(messageUserRight).append(messageUser)
	$(".chat-message").append(messageUserRight)
	$(textAuthor).emoticonize()

	var arrAuxiliar=$(".panel-contact-chat").children()
	for (var i=0;i<tam;i++)
		if(	$(".panel-chat-detail").children("div.text").children("div.name-contact").text()==$($(".panel-contact-chat").children()[i]).children("div.message-text").children("div.message-text-detail").children("div.name-contact").text())
					$($(".panel-contact-chat").children()[i]).children("div.message-text").children("div.message-chat").children("p.show-dots").text(mensaje)

	cleanMensaje()
}

function obtenerHora(){
	var fecha=new Date()
	var minutos=fecha.getMinutes()
 	if(minutos<10)
 		minutos="0"+minutos
 	var horas=fecha.getHours()
 	if(horas<10)
 		horas="0"+horas
 	return horas+":"+minutos
}

$("#mensaje").keypress(function(e) {
    if(e.which == 13) {
        escribirMensaje()
    }
});

function cleanMensaje(){
	$("#mensaje").val("")
	$("#mensaje").focus()
}


function searchContact(){
	var texto=$("#search").val()
	for(var i=0;i<tam;i++){ 
		if((datos[i].nombre.toLowerCase().search(texto.toLowerCase())!=-1 && texto!="") || (datos[i].mensajes[0].contenido.toLowerCase().search(texto.toLowerCase())!=-1 && texto!="") ){
		var div=document.createElement("div")
		div.setAttribute("class","panel-list-message-contact")
		div.setAttribute("onclick","mostrar(this)")
		div.innerHTML="<div class='profile-img'><img src='image/"+datos[i].imagen+"'/></div><div class='message-text show-dots'><div class='message-text-detail'><div class='name-contact show-dots'>"+datos[i].nombre+"</div><div class='message-hour '>"+datos[i].mensajes[0].fecha+"</div></div><div class='message-chat show-dots'><p class='show-dots'>"+datos[i].mensajes[0].contenido+"</p></div></div>"
		
		}
		else $(".panel-contact-chat").html("")
		$(".panel-contact-chat").append(div)
	}
}


function mostrar(x){
	var src=$(x).find("img").attr("src")
	var img="<img src='"+src+"'alt='imagen perfil'>"
	var name=$($(x)).children("div.message-text").children("div.message-text-detail").children("div.name-contact").text()
	var hora=$($(x)).children("div.message-text").children("div.message-text-detail").children("div.message-hour").text()
	
	for(var i=0;i<tam;i++){
		if(name==datos[i].nombre){ 
			for (var j=0; j<datos[i].mensajes.length; j++) {
				$(".chat-message").children("div.message-author").children("a.name-author").text(name)
				
			}
		}
	}


	$(".panel-chat-header").html(img)
	$(".panel-chat-detail").children("div.text").children("div.name-contact").html(name)
	$(".panel-chat-detail").children("div.text").children("div.name-group").html(hora)


}

/*function mostrar(x){
	var src=$(x).find("img").attr("src")
	var img="<img src='"+src+"'alt='imagen perfil'>"
	var name=$($(x)).children("div.message-text").children("div.message-text-detail").children("div.name-contact").text()
	var hora=$($(x)).children("div.message-text").children("div.message-text-detail").children("div.message-hour").text()
	
	for(var i=0;i<tam;i++){
		if(name==datos[i].nombre){ 
			for (var j=0; j<datos[i].mensajes.length; j++) {
				var a=document.createElement("a")
				a.setAttribute("class","name-author color3")
				$(a).html(name)
				var div=document.createElement("div")
				div.setAttribute("class","text-author")
				$(div).text(datos[i].mensajes[j].contenido)
				var span=document.createElement("span")
				span.setAttribute("class","bubble-chat-hour")
				$(span).text(datos[i].mensajes[j].fecha)
				var bubbleChatHour=document.createElement("div")
				bubbleChatHour.setAttribute("class","bubble-chat-hour")
				$(bubbleChatHour).append(span)
				var messageAuthor=document.createElement("div")
				messageAuthor.setAttribute("class","message-author")
				$(messageAuthor).append(a)
				$(messageAuthor).append(div)
				$(messageAuthor).append(bubbleChatHour)
				$(".chat-message").append(messageAuthor)

			}
		}
	}


	$(".panel-chat-header").html(img)
	$(".panel-chat-detail").children("div.text").children("div.name-contact").html(name)
	$(".panel-chat-detail").children("div.text").children("div.name-group").html(hora)


}*/