const { createApp } = Vue;

    const app = createApp({
      data(){
        return {
          message: 'Ciao Vue',
          image: 'http://picsum.photos/200'
        }
      },
      methods: {
          toggleClass(){
          },
          count(){
          }
      }  
    });
    app.mount('#app')