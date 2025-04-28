"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import styles from "./snake.module.css";
import useInterval from "./useInterval";

const canvasX = 1000;
const canvasY = 1000;
const initialSnake = [
  [4, 10],
  [4, 10],
];
const initialApple = [14, 10];
const scale = 50;
const timeDelay = 100;

export default function Snake() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [snake, setSnake] = useState(initialSnake);
  const [apple, setApple] = useState(initialApple);
  const [direction, setDirection] = useState([0, -1]);
  const [delay, setDelay] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  // Pre-load fruktbildet som et Image-objekt (unngår DOM-lookups og Next/Image-wrap)
  const fruit = useMemo(() => {
    const img = new Image();
    img.src = "/images/underConstruction.png";
    return img;
  }, []);

  // Spill-løkken
  useInterval(runGame, delay);

  // Tegn på canvas hver gang snake eller apple endres
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Juster coordinate system og clear
    ctx.setTransform(scale, 0, 0, scale, 0, 0);
    ctx.clearRect(0, 0, canvasX, canvasY);

    // Tegn snake
    ctx.fillStyle = "#a3d001";
    snake.forEach(([x, y]) => ctx.fillRect(x, y, 1, 1));

    // Tegn eplet
    ctx.drawImage(fruit, apple[0], apple[1], 1, 1);
  }, [snake, apple]);

  // Globale tastetrykk (piltaster)
  useEffect(() => {
    const handler = (e: KeyboardEvent) => changeDirection(e);
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  function handleSetScore() {
    const high = Number(localStorage.getItem("snakeScore"));
    if (score > high) {
      localStorage.setItem("snakeScore", JSON.stringify(score));
    }
  }

  function play() {
    setApple(initialApple);
    setDirection([1, 0]);
    setSnake(initialSnake);
    setDelay(timeDelay);
    setScore(0);
    setGameOver(false);
  }

  function checkCollision(head: number[]) {
    // vegg
    if (
      head[0] < 0 ||
      head[1] < 0 ||
      head[0] * scale >= canvasX ||
      head[1] * scale >= canvasY
    )
      return true;
    // egen hale
    return snake.some((seg) => seg[0] === head[0] && seg[1] === head[1]);
  }

  function appleAte(newSnake: number[][]) {
    if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
      setScore((s) => s + 1);
      const newCord = [
        Math.floor(Math.random() * (canvasX / scale)),
        Math.floor(Math.random() * (canvasY / scale)),
      ];
      setApple(newCord);
      return true;
    }
    return false;
  }

  function changeDirection(e: KeyboardEvent) {
    if (["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"].includes(e.key)) {
      e.preventDefault();
    }
    switch (e.key) {
      case "ArrowLeft":
        setDirection([-1, 0]);
        break;
      case "ArrowUp":
        setDirection([0, -1]);
        break;
      case "ArrowRight":
        setDirection([1, 0]);
        break;
      case "ArrowDown":
        setDirection([0, 1]);
        break;
    }
  }

  function runGame() {
    const newSnake = [...snake];
    const head = [newSnake[0][0] + direction[0], newSnake[0][1] + direction[1]];
    newSnake.unshift(head);

    if (checkCollision(head)) {
      setDelay(null);
      setGameOver(true);
      handleSetScore();
      return;
    }

    if (!appleAte(newSnake)) {
      newSnake.pop();
    }

    setSnake(newSnake);
  }

  return (
    <div className="h-screen bg-green-800 flex justify-center">
      <div className="game-container">
        <canvas
          ref={canvasRef}
          width={canvasX}
          height={canvasY}
          className={styles.playArea}
        />
        {gameOver && <div className={styles.gameOver}>Game Over</div>}
        <button onClick={play} className={styles.playButton}>
          Play
        </button>
        <div className={styles.scoreBox}>
          <h2>Score: {score}</h2>
          <h2>High score: {localStorage.getItem("snakeScore")}</h2>
        </div>
      </div>
    </div>
  );
}
