"use client";
import { useState } from "react";
import wordList from "./wordList.json";
import "./hangman.css";
import { HangmanDrawing } from "./hangmanDrawing";
import { HangmanWord } from "./hangmanWord";
import { Keyboard } from "./keyboard";

export default function hangman() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return wordList[Math.floor(Math.random() * wordList.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  return (
    <>
      <div className="hangman">
        <div className="win-loose">loose win</div>
        <h1>{wordToGuess}</h1>
        <HangmanDrawing></HangmanDrawing>
        <HangmanWord></HangmanWord>
        <Keyboard></Keyboard>
      </div>
    </>
  );
}
