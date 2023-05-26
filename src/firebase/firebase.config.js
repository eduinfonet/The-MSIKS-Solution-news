import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAlZQVW13RW3HTgV0HGnSSxSyd9BIunHGw",
  authDomain: "the-msiks-solution-news.firebaseapp.com",
  projectId: "the-msiks-solution-news",
  storageBucket: "the-msiks-solution-news.appspot.com",
  messagingSenderId: "950832335439",
  appId: "1:950832335439:web:3dd930ded0f885ec63f83a",
};

const app = initializeApp(firebaseConfig);
export default app;
