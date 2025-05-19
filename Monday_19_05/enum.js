"use strict";
(() => {
    let nivelDeAudio;
    (function (nivelDeAudio) {
        nivelDeAudio[nivelDeAudio["min"] = 0] = "min";
        nivelDeAudio[nivelDeAudio["medBaja"] = 1] = "medBaja";
        nivelDeAudio[nivelDeAudio["med"] = 2] = "med";
        nivelDeAudio[nivelDeAudio["medAlta"] = 3] = "medAlta";
        nivelDeAudio[nivelDeAudio["max"] = 4] = "max";
    })(nivelDeAudio || (nivelDeAudio = {}));
    let nivelAceleracion;
    (function (nivelAceleracion) {
        nivelAceleracion[nivelAceleracion["minima"] = 10] = "minima";
        nivelAceleracion[nivelAceleracion["media"] = 11] = "media";
        nivelAceleracion[nivelAceleracion["alta"] = 100] = "alta";
    })(nivelAceleracion || (nivelAceleracion = {}));
    let audioActual = nivelDeAudio.medAlta;
    console.log(audioActual);
    console.log(nivelDeAudio);
    console.log({ nivelAceleracion });
    console.log(nivelAceleracion.media);
})();
