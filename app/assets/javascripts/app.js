document.addEventListener("DOMContentLoaded", function(event) {
  var app = new Vue({
    el: '#app',
    data: {
      message: "Hey Vue! How's it going?",
      tasks: [ 
              "What is the world?",
              "How many sheep can you count in your sleep?",
              "From the mountiains to the praries.."
             ],

     newTask: "",



    },
    mounted: {

    },
    methods: {
      addTask: function() {
        if (this.newTask) {
          this.tasks.push(this.newTask)
          this.newTask = "";
        }
      },
      completeTask: function(inputTask) {
        var index = this.tasks.indexOf(inputTask);
        this.task.splice(index, 1);
      } 
    },
    computed: {

    }
  });
});