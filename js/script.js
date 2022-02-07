
/* Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
Usando Vue.js, generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
Evitare i doppioni nella lista delle mail */

console.log('Vue ok', Vue);

Vue.config.devtools = true;

dayjs.extend(dayjs_plugin_customParseFormat);

const root = new Vue({
    el: '#root',
    data: {
        emails: [],
        emailsNum: 10,
    },

    email() {
        for (let i = 0; i < emailsNum; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(res => {
                const email = res.data.response;
                this.emails.push(email)
            })
        }
    }
})

