function playSound(e) {
	let keyCode;
	if (e.type === "click") {
		keyCode = e.currentTarget.dataset.key;
	} else {
		keyCode = e.keyCode;
	}

	const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
	if (!audio) return;
	audio.currentTime = 0;
	audio.play();
	showStyle(e);
}

function showStyle(e) {
	let keyCode;
	if (e.type === "click") {
		keyCode = e.currentTarget.dataset.key;
	} else {
		keyCode = e.keyCode;
	}

	const key = document.querySelector(`.key[data-key="${keyCode}"]`);
	key.classList.add("playing");
}

function removeTransition(e) {
	if (e.propertyName != "transform") return;
	this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");

keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
keys.forEach(key => key.addEventListener("click", playSound));
