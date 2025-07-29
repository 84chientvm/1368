// firebase.js

// Dán cấu hình Firebase của bạn vào đây:
const firebaseConfig = {
  apiKey: "AIzaSyC6ihBvtTQwyzpwxCDC98OpY01e1j3pqsY",
  authDomain: "bang-diem-bida.firebaseapp.com",
  databaseURL: "https://bang-diem-bida-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bang-diem-bida",
  storageBucket: "bang-diem-bida.appspot.com",
  messagingSenderId: "57990325723",
  appId: "1:57990325723:web:7faef806f9536f495733fe",
  measurementId: "G-1999H11726"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Gán ref vào biến toàn cục để dùng trong file khác
window.bidaRef = firebase.database().ref("bida");
