var vueBox = new Vue({
    el: '#vueBox',
    data: {

    },
    methods: {
        color: function() {
            document.getElementById("vueBox").style.backgroundColor = "lightblue";
        },
        circle: function() {
            document.getElementById("box_1").style.display = "none";
        }
    }
  })

var vueBox2 = new Vue({
    el: '#vueBox2',
    data: {

    },
    methods: {
        circle: function() {
            document.getElementById("vueBox2").style.borderRadius = "50%";
            document.getElementById("vueBox2").style.backgroundColor = "lightgreen";
            document.getElementById("box_2").style.display = "none";
        }
    }
  })

var vueBox3 = new Vue({
    el: '#vueBox3',
    data: {

    },
    methods: {
        reloading: function() {
            location.reload();
        }
    }
  })

var vueBox4 = new Vue({
    el: '#vueBox4',
    data: {
    },
    methods: {
        removeBoxes: function() {
            document.getElementById("vueBox").style.display = 'none';
            document.getElementById("vueBox2").style.display = 'none';
            document.getElementById("vueBox3").style.display = 'none';
        },
    }
  })








// document.onload = load();

// function load() {
//     console.log('document has been loaded! hurray!');
// }

// function boxClicked() {
//     console.log('box was clicked, hurray!')
//     changeColor();
//     function changeColor() {
//         document.getElementsByClassName("box").style.backgroundColor = "red";
//     }

// } 

