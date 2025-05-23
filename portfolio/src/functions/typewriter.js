import { useEffect, useState } from "react";

export function typewriter(words = [], typingSpeed = 100, pause = 1500) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0); // current word
  const [charIndex, setCharIndex] = useState(0); // current letter

  useEffect(() => {
    if (wordIndex >= words.length) {
      setWordIndex(0);
    }

    const currentWord = words[wordIndex];

    // Typing
    if (charIndex <= currentWord.length) {
      const timeout = setTimeout(() => {
        setText(currentWord.substring(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, wordIndex, words, typingSpeed]);

  return text;
}
