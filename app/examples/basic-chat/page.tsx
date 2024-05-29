"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Chat from "../../components/chat";

const Home = () => {
  const [chatPrompt, setChatPrompt] = useState("");

  const handleButtonClick = (prompt) => {
    setChatPrompt(prompt);
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.welcome}>
          <p>Hi. I'm the Values Narrator AI.</p>
          <br />
          <p>I use my expert knowledge of personal values to help you explore personal values and how they influence behavior and interactions. I do this through the power of stories. You can ask me about a specific value, or to describe how a combination of values may interact in different settings.</p> 
          <br />
          <p>What would you like to explore?</p>
          </div>
          <div className={styles.buttonHeading}>
            <h2>Here are some suggestions:</h2>
          </div>
          <div className={styles.buttonContainer}>
          <button className={styles.cardButton} onClick={() => handleButtonClick("Provide a scenario that demonstrates how values can cause conflict in the workplace")}>Conflict in the workplace example</button>
          <button className={styles.cardButton} onClick={() => handleButtonClick("How should I approach a difficult conversation with an employee who has opposing values to me?")}>Approaching difficult conversations</button>
          <button className={styles.cardButton} onClick={() => handleButtonClick("Provide an example persona of someone with specific values mix. list the 10 values so i can select which ones I want to explore. Ask me what the context is.")}>Explore a persona</button>
          <button className={styles.cardButton} onClick={() => handleButtonClick("EExplain a value to a 5 year old. Ask me which of the 10 values I would like explained.")}>Explain a value to a 5 year old</button>
        </div>
        <Chat prompt={chatPrompt} />
      </div>
    </main>
  );
};

export default Home;