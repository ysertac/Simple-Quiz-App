function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevapKontrol = function(cevap) {
    return cevap === this.dogruCevap
} 


//* let soru1 = new Soru("Hangisi bir javascript paket yükleme programıdır?", {a: "Node.js", b: "npm", c: ".Net"}, "b");

let sorular = [
    new Soru("1- Hangisi bir javascript paket yükleme programıdır?", {a: "Node.js", b: "npm", c: ".Net"}, "b"),
    new Soru("2- Hangisi .net paket yükleme programıdır?", {a: "Node.js", b: "npm", c: ".Nuget"}, "c"),
    new Soru("3- Hangisi bir javascript frameworkudur?", {a: "django", b: "react", c: "angular"}, "c"),
    new Soru("4- Hangisi bir backend programlama dilidir", {a: "php", b: "javascript", c: "html"}, "a")
]