function UI() {
    this.quiz_box = document.querySelector(".quiz_box"),
    this.option_list = document.querySelector(".option_list"),
    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>',
    this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>',
    this.score_box = document.querySelector(".score_box"),
    this.time_text = document.querySelector(".time_text"),
    this.time_second = document.querySelector(".time_second"),
    this.time_line = document.querySelector(".time_line")
}

UI.prototype.soruGoster = function(soru) {
    let question = `<span>${soru.soruMetni}</span>`
    let options = '';

    for(let cevap in soru.cevapSecenekleri) {
        options = options +
            `
                <div class="option">
                <span><b>${cevap}</b>:${soru.cevapSecenekleri[cevap]}</span>
                </div>
            `;
    }

    document.querySelector('.question_text').innerHTML = question;
    this.option_list.innerHTML = options;
    const secenek = this.option_list.querySelectorAll(".option");

    for(let opt = 0; opt < secenek.length; opt++) {
        secenek[opt].setAttribute("onclick", "optionSelected(this)");
    }
    document.querySelector(".devam").classList.remove("show");
}

UI.prototype.soruSayisi = function(soruSirasi, toplamSoru) {
    let tag = `<span class="badge bg-info">${soruSirasi} / ${toplamSoru}</span>`;
    document.querySelector(".question_index").innerHTML = tag;
}

UI.prototype.skor = function(toplamSoru, dogruCevap) {
    let tag = `Toplam ${toplamSoru} sorudan ${dogruCevap} soruyu doğru cevapladınız.`;
    document.querySelector(".score_text").innerHTML = tag;
}