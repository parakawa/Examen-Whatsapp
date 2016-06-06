
$(document).ready(function(){
		llenadoSearch()
		$(".icon-insert_emoticon").attr("onclick","escribirMensaje()")
		
});



function llenadoSearch(){
	tam=datos.length
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
	var name=$(x).children("div.message-text show-dots").children("div.message-text-detail").children("div.name-contact show-dots").text()
	var img="<img src='"+src+"'alt='imagen perfil'>"
	$(".panel-chat-header").html(img)
	$(".panel-chat-detail").children("div.text").children("div.name-contact").html(name)

}

function escribirMensaje(){
	var mensaje=$("#mensaje").val()
	var messageUserRight=document.createElement("div")
	messageUserRight.setAttribute("class","message-user-right")
	var messageUser=document.createElement("div")
	messageUser.setAttribute("class","message-user")
	var textAuthor=document.createElement("div")
	textAuthor.setAttribute("class","text-author")
	$(textAuthor).html(mensaje)
	$(messageUser).append(textAuthor)
	$(messageUserRight).append(messageUser)
	$(".chat-message").append(messageUserRight)

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

	function mostrar(){
	var img=createElement("img")
	img.setAttribute("src",this.getAttribute("src"))
	img.setAttribute("alt","imagen perfil")
	$(".panel-chat-header").append(img)
}

});*/


/*function escribirMensaje(){
	var mensaje=$("#mensaje").val()
	var messageUserRight=document.createElement("div")
	messageUserRight.setAttribute("class","message-user-right")
	var messageUser=document.createElement("div")
	messageUser.setAttribute("class","message-user")
	var textAuthor=document.createElement("div")
	textAuthor.setAttribute("class","text-author")
	textAuthor.html(mensaje)
	$(messageUser).append(div)
	$(messageUserRight).append(messageUser)
	$(".chat-message").append(messageUserRight)

}*/