const siteler = [
            "https://www.cleverbot.com/", //botla sohpet (favori)
            "https://www.pixilart.com/draw?ref=home-page",//pixel resim
            "https://littlealchemy2.com/", //kimya oyunu
            "https://paint.toys/calligram/", //girdiğin metni istediğin yoldan çizen
            "https://paint.toys/oil/", //yağlı boya ile çiz
            "https://drawing.garden/", //mouse ile bahçe süs
            "https://googlefeud.com/", //google oyunu
            "https://number.toys/", //sudoku oyunu
            "https://kleki.com/", //resim yap
            "https://apod.nasa.gov/apod/astropix.html", //nasa gunluk fotoğrafı
            "https://www.flightradar24.com/40.81,29.05/9", //uçak takip
            "https://www.incredibox.com/demo/", //müzik yap
            "http://www.flashbynight.com/", //oyunlar sitesi
            "http://weavesilk.com/", //geometrik çizim
            "https://lingyourlanguage.com/", // dil dinle tahmin et
            "https://freerice.com/#/english-vocabulary/1381",//soru cevapla bağş yap
            "https://29a.ch/sandbox/2011/neonflames/", //neon çizim
            "https://asoftmurmur.com/", //doğa sesleri dinle 
            "https://drawastickman.com/", // çiz ve hikaye izle
            "https://thisissand.com/", //kumdan çizim
            "https://stellarium-web.org/", // uzayı keşfet
            "https://clickclickclick.click/#2ca40fde22ac654018b13e8c9958ad41", //buton tıkla senin hareketlerini takip etsin
            "https://hackertyper.net/", //hacker ol
            "https://quickdraw.withgoogle.com/", //sen çiz pc tahmin etsin çizim
            "https://maze.toys/", //labirent oyunu
            "https://memory.toys/classic/easy/", //hafıza oyunu
            "https://sliding.toys/mystic-square/8-puzzle/daily/", //sayıları sırlama oyunu
            "https://imissmycafe.com/",  //kafede ses simülasyon
            "https://digibouquet.net/", //kendi çiçek buketini oluştur
            "https://mysketchbooth.com/", //eski fotoğraflar
            "https://gardenletters.online/" , // mektup gönderim ve süslemek
            "https://www.futureme.org/", //geleceğe mektup
            "https://wigglypaint.com/tr/", //titreşimli resim
            "https://monkeytype.com/" //hızlı yazmak
        
        ];

        function Random() {
            const index = Math.floor(Math.random() * siteler.length); //0 ile siteler uzunlugu arasında sayı ver. floor da tam sayı yapar
            window.open(siteler[index], "_blank"); //aynı sekmede açmasını istiyosam ( window.location.href  blank yerine index) 
            // [index] rastgele olmasını sağlıyo
        }