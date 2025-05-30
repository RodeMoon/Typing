const url: string = 'https://jsonplaceholder.typicode.com/comments';
const url1: string = 'https://jsonplaceholder.typicode.com/photos';

export const consultAPIA = async () => {
    const init = performance.now();
    const resA = await fetch(url);
    const res1A = await resA.json();
    //console.log(res1A);

    const resB = await fetch(url);
    const res1B = await resB.json();
    //console.log(res1B);

    const end = performance.now();
    console.log(`Tiempo total de consulta A: ${(end - init)} ms`);
}

export const consultAPIB = async () => {
    const init1 = performance.now();
    const [respu, respu1] = await Promise.all([fetch(url), fetch(url1)]);

    const resul1 = await respu.json();
    const resul2 = await respu1.json();

    const end1 = performance.now();
    console.log(`Tiempo total de consulta B: ${(end1 - init1)} ms`);
}