// index.js
import { useState } from 'react';
import Head from 'next/head';
import { questions } from '../public/questions';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [question, setQuestion] = useState('');

  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setQuestion(questions[randomIndex]);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>MI Standup Questions Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Standup Questions Generator</h1>
        <button className={styles.button} onClick={getRandomQuestion}>Get Random Question</button>
        {question && (
          <div className={styles.questionContainer}>
            <h2 className={styles.question}>{question}</h2>
          </div>
        )}
      </main>
    </div>
  );
}
