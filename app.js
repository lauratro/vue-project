const app = Vue.createApp({
  template: "<h1>Hello {{firstname}}</h1>",
  data() {
    return {
      firstname: "John",
    };
  },
});

app.mount("#app");
