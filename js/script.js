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
    },
});
