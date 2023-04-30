var firebaseConfig = {
      apiKey: "AIzaSyAV3ozsxfWN4mpH6f19UALLsBKV7u93vpk",
      authDomain: "kwitter-ac0e9.firebaseapp.com",
      databaseURL: "https://kwitter-ac0e9-default-rtdb.firebaseio.com",
      projectId: "kwitter-ac0e9",
      storageBucket: "kwitter-ac0e9.appspot.com",
      messagingSenderId: "359884449268",
      appId: "1:359884449268:web:c6f841d30ec0332805c5a1",
      measurementId: "G-NK9JF59W9G"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

var user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name-" + Room_names);
      row = "<div class='room_name' id='+Room_names+' onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";

      //End code
      });});}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logOut(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}