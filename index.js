/* let soru = {
    soruMetni: "Hangisi javascript paket yükleme programıdır?",
    cevapSeçenekleri: {
        a: "Node.js",
        b: "TypeScript",
        c: "Npm",
    },
    dogruCevap: "c",
    cevapKontrol: function(cevap) {
        return cevap === this.dogruCevap
    }
}
console.log(soru.cevapKontrol("c"));

let soru1 = {
    soruMetni: "Hangisi .net paket yükleme programıdır?",
    cevapSeçenekleri: {
        a: "Node.js",
        b: "nuget",
        c: "Npm",
    },
    dogruCevap: "b",
    cevapKontrol: function(cevap) {
        return cevap === this.dogruCevap
    }
}

 */

/* //!this keyword kullanımını anlamak için örnek 

    let araba = {
    marka: "Honda",
    model: "Civic",
    yıl: 2022,
    paketSecenekleri: ['trendline','comfortline','highline','rline'],
    yazdir: function () {
        console.log(this.marka + " " + this.model + " " + this.yıl + " " + this.paketSecenekleri[3]);
    }
}

araba.yazdir(); */


/* //! prototype kullanımını daha iyi anlamak için örnek

function Araba(marka, model, yil, paketSecenekleri) {
    this.marka = marka;
    this.model = model;
    this.yil = yil;
    this.paketSecenekleri = paketSecenekleri;
}


Araba.prototype.yazdir = function () {
    return this.marka + " " + this.model + " " + this.yil + " " + this.paketSecenekleri[1];
}

let araba1 = new Araba("fiat","egea",2019,["boş paket","orta paket","full paket"]);
console.log(araba1.yazdir()); */

const quiz = new Quiz(sorular);
const ui = new UI();

function devam() {
    ui.quiz_box.classList.add("active");
    startTimer(10);
    startTimerLine(10);
    ui.soruGoster(quiz.soruGetir());
    ui.soruSayisi(quiz.soruIndex + 1, quiz.sorular.length);
}

function devam2() {
    if(quiz.sorular.length != quiz.soruIndex + 1) {
        ui.quiz_box.classList.add("active");
        quiz.soruIndex = quiz.soruIndex + 1;
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer(10);
        startTimerLine();
        ui.soruGoster(quiz.soruGetir());
        ui.soruSayisi(quiz.soruIndex + 1, quiz.sorular.length);
    }
    else {
        clearInterval(counter);
        ui.score_box.classList.add("active");
        ui.quiz_box.classList.remove("active");
        console.log("quiz bitti");
        ui.skor(quiz.sorular.length, quiz.puan);
    }
}

function quit() {
    window.location.reload();
    ui.score_box.classList.remove("active");
}

function replay() {
    quiz.soruIndex = 0;
    quiz.puan = 0;
    document.querySelector(".btn-start .btn").click();
    ui.score_box.classList.remove("active");
}

function optionSelected(option) {
    clearInterval(counter);
    clearInterval(counterLine);
    let cevap = option.querySelector("span b").textContent;
    let soru = quiz.soruGetir();

    if(soru.cevapKontrol(cevap)) {
        quiz.puan = quiz.puan + 1;
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", ui.correctIcon);
    }
    else {
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
    }
    
    for(let i = 0; i < ui.option_list.children.length; i++) {
        ui.option_list.children[i].classList.add("disabled");
    }
    
    document.querySelector(".devam").classList.add("show");
}

let counter;
function startTimer(time) {
    counter = setInterval(timer, 1000);

    function timer() {
        ui.time_second.textContent = time;
        time--;

        if(time < 0) {
            clearInterval(counter);

            ui.time_text.textContent = "Süre bitti";

            let cevap = quiz.soruGetir().dogruCevap;

            for(let option of ui.option_list.children) {

                if(option.querySelector("span b").textContent == cevap) {
                    option.classList.add("correct");
                    option.insertAdjacentHTML("beforeend", ui.correctIcon);
                }
                option.classList.add('disabled');
            }
            document.querySelector(".devam").classList.add("show");
        }
    }     
}
let counterLine;
function startTimerLine() {
    let line_width = 0;
    counterLine = setInterval(timer, 10);

    function timer() {
        line_width = line_width + .5;
        ui.time_line.style.width = line_width + "px";

        if(line_width > 549) {
            clearInterval(counterLine);
        }
    }
}

