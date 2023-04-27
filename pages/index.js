// index.js
import { useState } from 'react';
import Head from 'next/head';
import { questions } from '../public/questions';

export default function Home() {
  const [question, setQuestion] = useState('');

  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setQuestion(questions[randomIndex]);
  }

  return (
    <div>
      <Head>
        <title>Random Question Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Random Question Generator</h1>
        <button onClick={getRandomQuestion}>Get Random Question</button>
        {question && (
          <div>
            <h2>{question}</h2>
          </div>
        )}
      </main>
    </div>
  );
}
