
(()=>{

    enum nivelDeAudio {
        min,
        medBaja,
        med,
        medAlta,
        max
    }
    enum nivelAceleracion{
        minima=10,
        media,
        alta=100
    }
    

    let audioActual = nivelDeAudio.medAlta;
    
    console.log(audioActual);
    console.log(nivelDeAudio);
    console.log({nivelAceleracion});

    console.log(nivelAceleracion.media);

    })()