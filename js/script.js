console.log('JS OK');

console.log('Vue ok', Vue);

Vue.config.devtools = true;

const root = new Vue({

    el: '#root',

    data: {

        actualIndex: 0,
        images: [
            'images/image1.jpg',
            'images/image2.jpg',
            'images/image3.jpg',
            'images/image4.jpg',
        ],
    },

    methods: {
        isActive(index) {  // Funzione che aggiunge la classe active al pallino corrente se è vera o falsa
            if (index === this.actualIndex) {
                return true;
            } else {
                return false;
            }
        },

        prevImg() {       // Funzione che diminuisce l'attuale index, così da poter cambiare l'immagine
            if (this.actualIndex === 0) this.actualIndex = this.images.length - 1; // se l'actualIndex è 0 faccio ripartire lo slider dall'ultimo elemnto dell'array images
            else this.actualIndex--;
        },

        nextImg() {       //  Funzione che aumenta l'attuale index, così da poter cambiare l'immagine
            if (this.actualIndex === this.images.length - 1) this.actualIndex = 0; // se l'actualIndex è all'ultimo elemento dell'array images lo faccio ripartire da zero
            else this.actualIndex++;
        },

        selectImg(index) {
            this.actualIndex = index; // Funzione che riassegna il actualIndex e lo pone uguale all'index
        }
    },
});
