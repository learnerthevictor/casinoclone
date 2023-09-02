import React from "react"
<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  const firebaseConfig = {
    apiKey: "AIzaSyAqCuy6AjuMN33nNAWaRj3iFJHp7a-sr9Y",
    authDomain: "casino-game-3b1e6.firebaseapp.com",
    databaseURL: "https://casino-game-3b1e6-default-rtdb.firebaseio.com",
    projectId: "casino-game-3b1e6",
    storageBucket: "casino-game-3b1e6.appspot.com",
    messagingSenderId: "66226033769",
    appId: "1:66226033769:web:e35bfe5b072e9766ecfef8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase (app);
  document.getElementById("submit").addEventListener('click', function(e){
    set(ref(db , 'src/pages/' + document.getElementById("username").value),{
        username : document.getElementById("username").value,
        password : document.getElementById("password").value
    });
    alert("Login Sucessful !");
  });
</script>