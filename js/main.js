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
	}
}

function mostrar(x){
	var src=$(x).find("img").attr("src")
	var img="<img src='"+src+"'alt='imagen perfil'>"
	var name=$($(x)).children("div.message-text").children("div.message-text-detail").children("div.name-contact").text()
	var hora=$($(x)).children("div.message-text").children("div.message-text-detail").children("div.message-hour").text()
	$(".panel-chat-header").html(img)
	$(".panel-chat-detail").children("div.text").children("div.name-contact").html(name)
	$(".panel-chat-detail").children("div.text").children("div.name-group").html(hora)
}

function escribirMensaje(){
	var hora="01:15"
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

	cleanMensaje()

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
		if(datos[i].nombre.toLowerCase().search(texto.toLowerCase())!=-1 && texto!="" ){
		var div=document.createElement("div")
		div.setAttribute("class","panel-list-message-contact")
		div.setAttribute("onclick","mostrar(this)")
		div.innerHTML="<div class='profile-img'><img src='image/"+datos[i].imagen+"'/></div><div class='message-text show-dots'><div class='message-text-detail'><div class='name-contact show-dots'>"+datos[i].nombre+"</div><div class='message-hour '>"+datos[i].mensajes[0].fecha+"</div></div><div class='message-chat show-dots'><p class='show-dots'>"+datos[i].mensajes[0].contenido+"</p></div></div>"
		
		}
		else $(".panel-contact-chat").html("")
		$(".panel-contact-chat").append(div)
	}
}

/*$(document).ready(function(){
	var texto=$("#search").val()
	$.getJSON("data.json",function(data){
		var output="";
		$.each(data,function(key,val){
			output+="<div class='panel-list-message-contact'><div class='profile-img'><img src='image/"+val.imagen+"'/></div><div class='message-text show-dots'><div class='message-text-detail'><div class='name-contact show-dots'>"+val.nombre+"</div><div class='message-hour '>"+val.mensajes[0].fecha+"</div></div><div class='message-chat show-dots'><p class='show-dots'>"+val.mensajes[0].contenido+"</p></div></div></div>"
		})
		$(".panel-contact-chat").html(output)
		$.each(data, function (key,val){
			if (val.nombre.search(texto) != -1 && texto!="" ){
			 output=""
			 output+="<div class='panel-list-message-contact'><div class='profile-img'><img src='image/"+val.imagen+"'/></div><div class='message-text show-dots'><div class='message-text-detail'><div class='name-contact show-dots'>"+val.nombre+"</div><div class='message-hour '>"+val.mensajes[0].fecha+"</div></div><div class='message-chat show-dots'><p class='show-dots'>"+val.mensajes[0].contenido+"</p></div></div></div>"
			 $(".panel-contact-chat").html(output)
			}
			else if (texto!="" || texto=undefined){
				output=""
			 	output+="<div class='panel-list-message-contact'><div class='profile-img'><img src='image/"+val.imagen+"'/></div><div class='message-text show-dots'><div class='message-text-detail'><div class='name-contact show-dots'>"+val.nombre+"</div><div class='message-hour '>"+val.mensajes[0].fecha+"</div></div><div class='message-chat show-dots'><p class='show-dots'>"+val.mensajes[0].contenido+"</p></div></div></div>"
				$(".panel-contact-chat").html(output)
			}

			else {
				output="<p>No se encontró</p>"
				$(".panel-contact-chat").html(output)
			}○

		});	
	});

}

});*/
