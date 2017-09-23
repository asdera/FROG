var synthesis = window.speechSynthesis;
window.speechSynthesis.onvoiceschanged = function(){
		voices = synthesis.getVoices()
}

rate = 1
	
function setTheVoices(){
	for (i = 0; i < voices.length; i++) {
		options.append("<option value='" + voices[i].name + "'>" + voices[i].name + "</option>")
	}
}

function speak(text){
	talk = new SpeechSynthesisUtterance(text)
	for (i = 0; i < voices.length; i++){
		if (options.val() === voices[i].name){
			talk.voice = voices[i]
		}
	}
	talk.pitch = 1;
	talk.rate = Number(rate);
	synthesis.speak(talk);
}
console.log(synthesis.getVoices())

$(document).ready(function() {
	options = $('#options')
	$('.speed').click(function(){
		rate = this.value
	})
	setTheVoices()
})
