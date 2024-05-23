"use client";

import React from "react";
import styles from "./page.module.css"; // use simple styles for demonstration purposes
import Chat from "../../components/chat";

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
                {/* Welcome message */}
                <div className={styles.welcome}>
                <p>Hi. I'm the Values Narrator AI.</p>
                <br />
                <p>I use my expert knowledge of personal values to help you explore personal values and how they influence behavior and interactions. I do this through the power of stories. You can ask me about a specific value, or to describe how a combination of values may interact in different settings.</p> 
                <br />
                <p>What would you like to explore?</p>
                </div>
        <Chat />
      </div>
    </main>
  );
};

export default Home;
