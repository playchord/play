    const data = {
      audio: {
        c: [
          {
            code: 'KeyA',
            src: 'sounds2/C.wav'
          },
          {
            code: 'KeyS',
            src: 'sounds2/D.wav'
          },
          { code: 'KeyD', src: 'sounds2/E.wav'},
          { code: 'KeyF', src: 'sounds2/F.wav'},
          { code: 'KeyG', src: 'sounds2/C.wav'},
        ],
        d: [
          {
            code: 'KeyA',
            src: 'sounds2/C.wav'
          },
          {
            code: 'KeyS',
            src: 'sounds2/D.wav'
          },
          { code: 'KeyD', src: 'sounds2/E.wav'},
          { code: 'KeyF', src: 'sounds2/F.wav'},
          { code: 'KeyG', src: 'sounds2/C.wav'},
        ],
        e: [
          {
            code: 'KeyA',
            src: 'sounds2/C.wav'
          },
          {
            code: 'KeyS',
            src: 'sounds2/D.wav'
          },
          { code: 'KeyD', src: 'sounds2/E.wav'},
          { code: 'KeyF', src: 'sounds2/F.wav'},
          { code: 'KeyG', src: 'sounds2/C.wav'},
        ],
      },
    }

    data.audio.c.forEach((el) => {
      const audioElement = document.querySelector(`audio[data-code=${el.code}]`)
      audioElement.setAttribute('src', el.src)
    })

    // data.audio.d.forEach((el) => {
    //   const audioElement = document.querySelector(`audio[data-code=${el.code}]`)
    //   audioElement.setAttribute('src', el.src)
    // })

    function setTonality(name) {
      data.audio[name].forEach((el) => {
        const audioElement = document.querySelector(`audio[data-code=${el.code}]`)
        audioElement.setAttribute('src', el.src)
      })
    }

    setTonality('c')
    setTonality('d')
    setTonality('e')


    selectTonality.addEventListener('change', function(evt) {
      setTonality(evt.target.value)
    })