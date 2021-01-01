
  let currentChord = 1
  const keys = document.querySelector('.keys')
  const keys2 = document.querySelector('.keys2')
  const bottomKeys = document.querySelector('.showKeys')
  const chordSounds = Array.from(document.querySelectorAll('.chord'))
  const body = document.querySelector('body');
  const background = document.querySelector('#background');
  const tonalitySelector = document.querySelector('#tonalitySelector'); 
  const tonalityButtons = Array.from(document.querySelectorAll('.tonality-button'))
  const fullScreen = document.querySelector('#fullScreen');
  const activeKeys = [ 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN' ]

  const alreadyPressed = [];

  fullScreen.addEventListener('click', openFullscreen);

  keys.addEventListener('click', onKeyClick);
  keys2.addEventListener('click', onKeyClick);
  
  tonalitySelector.addEventListener('click', () => {
    document.querySelector('.tonalitiesContainer').classList.toggle('--visible')
  });

  tonalityButtons.forEach(button => button.addEventListener('click', selectTonality))
  
  document.addEventListener('keydown', onKeyDown);
  document.addEventListener('keyup', onKeyUp);

  function selectTonality(e) {
    e.target.classList.toggle('--selected')
  }

  function onKeyClick(e) {
    const key = e.target.closest('button');
    key.classList.add("playing");
    const audio = document.querySelector(`audio[data-code="${key.dataset.code}"]`);
    audio.currentTime = 0;
    audio.play();
    setTimeout(() => { key.classList.remove("playing") }, 100)

    if (key.id === 'chord1') {
    currentChord = 1
    glowChordOnClick()
  } else if (key.id === 'chord2') {
    currentChord = 2
    glowChordOnClick()
  } else if (key.id === 'chord3') {
    currentChord = 3
    glowChordOnClick()
  }  else if (key.id === 'chord4') {
    currentChord = 4
    glowChordOnClick()
  } else if (key.id === 'chord5') {
    currentChord = 5
    glowChordOnClick()
  }
  }

  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;  
    const key = e.target.closest('button') || e.target
    key.classList.remove('playing', 'glowKey', 'glowChord', 'chordIndicatorOn');
  }

  let audio = document.querySelector(`audio[data-code="KeyA"]`);

  function playSound(e) {

    if (e.code === 'KeyX') {
      currentChord = 1
      let letter = document.querySelector(`#chordLetter${currentChord}`).textContent.trim()
      chords[letter].sound.currentTime = 0
      chords[letter].sound.play()
      glowChordOnKey()
    } else if (e.code === 'KeyC') {
      currentChord = 2
      let letter = document.querySelector(`#chordLetter${currentChord}`).textContent.trim()
      chords[letter].sound.currentTime = 0
      chords[letter].sound.play()
      glowChordOnKey()
    } else if (e.code === 'KeyV') {
      currentChord = 3
      let letter = document.querySelector(`#chordLetter${currentChord}`).textContent.trim()
      chords[letter].sound.currentTime = 0
      chords[letter].sound.play()
      glowChordOnKey()
    }  else if (e.code === 'KeyB') {
      currentChord = 4
      let letter = document.querySelector(`#chordLetter${currentChord}`).textContent.trim()
      chords[letter].sound.currentTime = 0
      chords[letter].sound.play()
      glowChordOnKey()
    } else if (e.code === 'KeyN') {
      currentChord = 5
      let letter = document.querySelector(`#chordLetter${currentChord}`).textContent.trim()
      chords[letter].sound.currentTime = 0
      chords[letter].sound.play()
      glowChordOnKey()
    } else {
      audio = document.querySelector(`audio[data-code="${e.code}"]`);
      audio.currentTime = 0;
      audio.play();
    }
    const key = document.querySelector(`button[data-code="${e.code}"]`);

    key.classList.add('playing');
}

function onKeyDown(e) {

  if (!activeKeys.includes(e.code)) {
    return
  }

  if (alreadyPressed.includes(e.code)) return;
  alreadyPressed.push(e.code);

  if (e.code === 'KeyX') {
    currentChord = 1
    glowChordOnKey()
  } else if (e.code === 'KeyC') {
    currentChord = 2
    glowChordOnKey()
  } else if (e.code === 'KeyV') {
    currentChord = 3
    glowChordOnKey()
  }  else if (e.code === 'KeyB') {
    currentChord = 4
    glowChordOnKey()
  } else if (e.code === 'KeyN') {
    currentChord = 5
    glowChordOnKey()
  }

  playSound(e)
}

function onKeyUp(e) {

  if (!activeKeys.includes(e.code)) {
    return
  }

  let pressedKey = alreadyPressed.indexOf(e.code)
  alreadyPressed.splice(pressedKey, 1)
  let key = document.querySelector(`[data-code=${e.code}]`)
  let chord = 
  key.classList.remove('playing', 'glowKey', 'glowChord', 'chordIndicatorOn');

  if (e.code === 'KeyX') {
    currentChord = 1
    glowChordOff()
  } else if (e.code === 'KeyC') {
    currentChord = 2
    glowChordOff()
  } else if (e.code === 'KeyV') {
    currentChord = 3
    glowChordOff()
  }  else if (e.code === 'KeyB') {
    currentChord = 4
    glowChordOff()
  } else if (e.code === 'KeyN') {
    currentChord = 5
    glowChordOff()
  }
}

  background.addEventListener('transitionend', removeTransition);
  background.addEventListener('click', function() {
    body.classList.toggle('body2');
  });

  function glowChordOnKey() {
  let letter = document.querySelector(`#chordLetter${currentChord}`).textContent.trim()
  let chordElement = document.querySelector(`#chordLetter${currentChord}`)
  
  if (chords[letter]) {
    chords[letter].keys.map(key => document.querySelector(`div[data-note="${key}"`).classList.add('glowChord'))
    chordElement.classList.add('chordIndicatorOn');
  }
  
}

function glowChordOnClick() {
  let letter = document.querySelector(`#chordLetter${currentChord}`).textContent.trim()
  let chordElement = document.querySelector(`#chordLetter${currentChord}`)
  
  if (chords[letter]) {
    chords[letter].keys.map(key => document.querySelector(`div[data-note="${key}"`).classList.add('glowChord'))
    chordElement.classList.add('chordIndicatorOn');
    setTimeout(() => {
      chords[letter].keys.map(key => document.querySelector(`div[data-note="${key}"`).classList.remove('glowChord'))
      chordElement.classList.remove('chordIndicatorOn');
    }, 500)
  }
  
}

function glowChordOff() {
    let letter = document.querySelector(`#chordLetter${currentChord}`).textContent.trim()
    let chordElement = document.querySelector(`#chordLetter${currentChord}`)
    
    setTimeout(() => {
      chords[letter].keys.map(key => document.querySelector(`div[data-note="${key}"`).classList.remove('glowChord'))
      chordElement.classList.remove('chordIndicatorOn');
    }, 500)

}


const chords = {
  C: {
    keys: [ 'C1', 'C2', 'G2', 'C3', 'E3', 'G3' ],
    sound: new Audio('sounds/chordC.wav')
  },
  F: {
    keys: [ 'F1', 'F2', 'A2', 'C3', 'F3', 'A3' ],
    sound: new Audio('sounds/chordF.wav')
  },
  G: {
    keys: [ 'G1', 'G2', 'B2', 'D3', 'G3' ],
    sound: new Audio('sounds/chordG.wav')
  },
  Am: {
    keys: [ 'A1', 'E2', 'A2', 'C3', 'E3' ],
    sound: new Audio('sounds/chordAm.wav')
  },
  Bb: {
    keys: [ 'Bb1', 'F2', 'Bb2', 'D3', 'F3' ],
    sound: new Audio('sounds/chordBb.wav')
  },
}


  // FULL SCREEN BUTTON //

  /* Get the documentElement (<html>) to display the page in fullscreen */
let elem = document.documentElement;

  /* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}