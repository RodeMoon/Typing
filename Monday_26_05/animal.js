"use strict";
(() => {
    function getBear() {
        return {
            name: "Bear",
            honey: true,
        };
    }
    const bear = getBear();
    console.log(bear.name);
    console.log(bear.honey);
})();
