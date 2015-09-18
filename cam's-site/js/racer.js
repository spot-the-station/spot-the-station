$(document).ready(function(){
	$(document).keypress(function(event){
		console.log("FLAG");
		var keyCode = event.keyCode
		if (keyCode == 108) {

			$("#player1_strip td.active").removeClass( "active" ).next().addClass('active')
		}
		else if (keyCode == 97) {
			$("#player2_strip td.active").removeClass( "active" ).next().addClass('active')
		};	
	});
})

/*	NAY WORKING. FUUUUUUUUU
	if (("#player1_strip td.active").classList.contains("finish")){
				alert("Player One Wins!")}*/