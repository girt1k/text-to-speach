const textarea = document.querySelector("textarea");
const button = document.querySelector("button");
const rate = document.querySelector("#rate")
let isSpeaking = true;
const textToSpeech = () => {
    const synth = window.speechSynthesis;
    const text = textarea.value;
    synth.rate = 0.5;


    if (!synth.speaking && text) {
        const utterance = new SpeechSynthesisUtterance(text);

        utterance.rate = rate.value
        synth.speak(utterance);
    }
    if (text.length > 50) {
        if (synth.speaking && isSpeaking) {
            button.innerHTML = "Пауза";
            synth.resume();
            isSpeaking = false
        } else {
            button.innerText = "Продолжить";
            synth.pause();
            isSpeaking = true;
        }
    } else {
        isSpeaking = false;
        button.innerHTML = "Озучить";
    }

    setInterval(() => {
        if (!synth.speaking && isSpeaking) {
            isSpeaking = true;
            button.innerHTML = "Преобразовать в текст";
        }
    })
}
button.addEventListener("click", textToSpeech);