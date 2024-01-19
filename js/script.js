// Per controllare di aver correttamente collegato lo script di vue
console.log(Vue);

// Procedura per utilizzare vue
const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            message: 'Messaggio a caso in un h1.',
            img: 'img/R.jpeg',
            alternativeText: 'testo alternativo',
        }
    }
});
app.mount('#root');