
 var firebaseConfig = {
  apiKey: "AIzaSyDfjPXFr0oV6mjKKMp_hvQGkdFXjoeyMYw",
  authDomain: "kwitter-63c22.firebaseapp.com",
  databaseURL: "https://kwitter-63c22-default-rtdb.firebaseio.com",
  projectId: "kwitter-63c22",
  storageBucket: "kwitter-63c22.appspot.com",
  messagingSenderId: "789013717076",
  appId: "1:789013717076:web:78e0bd40279572a67ccdc1",
  measurementId: "G-9BJZRX8X21"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+"onclick='redirectoRoomName(this.id)' >#"+Room_names +"</div><hr>";
document.getElementById("output").innerHTML+= row;
//End code
      });});}
getData();
function addRoom()
{
  room_name = document.getElementById("room_name").nodeValue;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}
function redirectoRoomName(name)
{
  console.log(name);
  localStorage.setITem("room_name", name);
  window.location = "kwitter_page.html";
}
  
