const prompt = require('prompt-sync')();

let score = 0;
let jawaban_benar = 0;
let jawaban_salah = 0;
let point_per_soal = 1;

let soal = [
    {
        "q": "Yang merupakan member JKT 48?",
        "o": [
            'Jokowi',
            'Freya',
            'Nadin Amizah',
            'Igun Mama Takut',
        ],
        "a": 1 
    },
    {
        "q": "Nama kakak Upin dan Ipin adalah...",
        "o": [
            'Kak Rose',
            'Kak Jeane',
            'Monkey D. Luffy',
            'Igun Mama Takut',
        ],
        "a": 0 
    },
    // Tambahkan 3 soal lainnya 
    {
        "q": "Lab RPL di Primakara University ada di lantai...",
        "o": [
            'Lantai 3',
            'Lantai 1',
            'Lantai 4',
            'Lantai 2',
        ],
        "a": 1
    },
    {
        "q": "Presiden pertama di Indonesia...",
        "o": [
            'Ir. Soekarno',
            'Joko Widodo',
            'Megawati',
            'Soeharto',
        ],
        "a": 0
    },
    {
        "q": "Hewan yang berkaki dua...",
        "o": [
            'Kucing',
            'Babi',
            'Anjing',
            'Ayam',
        ],
        "a": 3
    },
]


let nama = prompt('Input nama: ')

// Perulangan melalui setiap soal
for (let i = 0; i < soal.length; i++) {
    // Tampilkan pertanyaan
     console.log(`\nSoal ${i + 1}: ${soal[i].q}`);
 
         // Tampilkan pilihan jawaban
     for (let jawaban = 0; jawaban < soal[i].o.length; jawaban++) {
         console.log(`${jawaban+1}. ${soal[i].o[jawaban]}`);
     }
 
     let jawaban = prompt('Masukkan nomor jawaban Anda: ');
 
     // Memeriksa jawaban yang dimasukkan oleh pengguna apakah sesuai dengan jawaban yang benar
     if (jawaban == soal[i].a + 1) {
         console.log('Jawaban Benar!');
             // Memasukkan jumlah jawaban yang benar
         score += point_per_soal;
         jawaban_benar++;
     } else {
         console.log('Jawaban Salah.');
         jawaban_salah++;
     }
 }
 
// Lengkapi code program yang belum selesai

console.log("Kuis selesai")
console.log("\n")
console.log("Statistic Kuis")
console.log('Nama\t\t:',nama)
console.log('Score\t\t:',score)
console.log('Jawaban benar\t:',jawaban_benar)
console.log('Jawaban salah\t:',jawaban_salah)



