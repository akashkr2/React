import { useEffect, useState } from "react";

export function typewriterDelayed(words = [], typingSpeed = 100, pause = 1500) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0); // current word
  const [charIndex, setCharIndex] = useState(0); // current letter
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (wordIndex >= words.length) {
      setIsDone(true);
      return;
    }

    const currentWord = words[wordIndex];

    // Typing
    if (charIndex <= currentWord.length) {
      setIsDone(false);
      const timeout = setTimeout(() => {
        setText(currentWord.substring(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }

    // Move to next word
    if (charIndex > currentWord.length) {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setWordIndex((prev) => prev + 1);
      }, pause);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, wordIndex, words, typingSpeed]);

  return { text, isDone };
}
