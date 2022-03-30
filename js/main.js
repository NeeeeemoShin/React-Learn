const app = Vue.createApp({
  data: () => ({
    newItem: "",
    todos: [],
  }),
  methods: {
    addItem: function (event) {
      // console.log("Clicked!");
      if (this.newItem === "") return;
      let todo = {
        item: this.newItem,
        isdone: false,
      };
      this.todos.push(todo);
      this.newItem = "";
    },
  },
});
app.mount("#app");
