/* Descrizione: Rifare l'esercizio dello slider come fatto assieme in classe.
Bonus1: Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.
Bonus2: Introdurre l'evento click sui pallini e visualizzare immagine relativa.
Bonus3: spazio alla fantasia */
var root = new Vue({
    
    el: "#root",

    data: {
        counter: 0,
        photos: [
            "img/1.jpg",
            "img/2.jpg",
            "img/3.jpg",
            "img/4.png",
        ],
        playVis: "visible",
        pauseVis: "hidden",
    },

    methods: {
        nextPhoto() {
            this.counter ++;
            if (this.counter > (this.photos.length -1)) {
                this.counter = 0;
            }
            
        },
        prevPhoto: function() {
            this.counter --;
            if (this.counter < 0) {
                this.counter = (this.photos.length -1);
            }
              
        },
        circlePhoto: function() {
            circles.index == counter; 
        },

        playFn: function() {  
            this.playVis= "hidden";
            this.pauseVis= "visible";
            
            this.playInterval = setInterval(()=> {this.nextPhoto()}, 3000);
        },
        pauseFn: function() {    
            this.playVis= "visible";
            this.pauseVis= "hidden";

            clearInterval(this.playInterval);
        }
        
    },

});

