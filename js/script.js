console.log('JS OK');

console.log('Vue ok', Vue);

Vue.config.devtools = true;

const root = new Vue({

    el: '#root',

    data: {

        images: {
            image1: 'images/image1.jpg',
            image2: 'images/image2.jpg',
            image3: 'images/image3.jpg',
            image4: 'images/image4.jpg',
        },
        currentIndex: undefined,
        index: 0,
    },

    methods: {
        isActive() {  // Funzione che aggiunge la classe active al pallino corrente
        },
    },
});
