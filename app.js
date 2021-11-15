const app = Vue.createApp({
  template: "<h1>Hello {{first}}</h1>", //double curly brackets
  data() {
    return {
      firstname: "John",
    };
  },
});

app.mount("#app");
