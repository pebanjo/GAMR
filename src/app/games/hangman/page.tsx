"use client";
import { useCallback, useEffect, useState } from "react";
import wordList from "./wordList.json";
import "./hangman.css";
import { HangmanDrawing } from "./hangmanDrawing";
import { HangmanWord } from "./hangmanWord";
import { Keyboard } from "./keyboard";

export default function hangman() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const fail = incorrectLetters.length >= 6;
  const win = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || fail || win) return;
      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, win, fail]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) {
        return;
      }
      e.preventDefault();
      addGuessedLetter(key.toUpperCase());
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);
  return (
    <>
      <div className="hangman-container">
        <div className="hangman">
          {(win && (
            <h1 className="font-extrabold text-4xl text-orange-600 text-center mt-4 tracking-wider">
              You Won,The Word Was Indeed {wordToGuess}{" "}
            </h1>
          )) ||
            (fail && (
              <h1 className="font-extrabold text-4xl text-orange-600 text-center mt-4 tracking-wider">
                You Lost, The Correct Word Was {wordToGuess}{" "}
              </h1>
            ))}

          <HangmanDrawing
            numberOfGuesses={incorrectLetters.length}
          ></HangmanDrawing>
          <HangmanWord
            guessedLetters={guessedLetters}
            wordToGuess={wordToGuess}
          ></HangmanWord>
          <div
            style={{
              alignSelf: "stretch",
              paddingBottom: "50px",
            }}
          >
            <Keyboard
              disabled={win || fail}
              activeLetters={guessedLetters.filter((letter) =>
                wordToGuess.includes(letter)
              )}
              inactiveLetters={incorrectLetters}
              addGuessedLetter={addGuessedLetter}
            ></Keyboard>
          </div>
        </div>
      </div>
    </>
  );
}
