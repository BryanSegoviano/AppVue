const app = new Vue({
  el: "#app",
  data: {
    users: [],
    vista: true
  },
  methods: {
    getUsers: function() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
          this.users = data;
        });
    },
  },
});
