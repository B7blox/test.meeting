let pertanyaan = ["150 + 50", "100 x 7", "50 : 2"]
let jawaban = ["200", "700", "25"]
let score = 0;

let counter = 0;
do  {
    let hasil = prompt(pertanyaan[counter]);
    if (hasil === jawaban[counter]) {
        score += 30;
    }
    counter++;
} while (counter < pertanyaan.length);




console.log(score)