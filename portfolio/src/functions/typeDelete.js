import { useEffect, useState } from "react";

export function typeDelete(
  words = [],
  typingSpeed = 100,
  deletingSpeed = 50,
  pause = 1500
) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0); // current word
  const [subIndex, setSubIndex] = useState(0); // current letter
  const [deleting, setDeleting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (index >= words.length) {
      setIsDone(true);
      return;
    }

    const currentWord = words[index];

    // Typing
    if (!deleting && subIndex <= currentWord.length) {
      setIsDone(false);
      const timeout = setTimeout(() => {
        setText(currentWord.substring(0, subIndex));
        setSubIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }

    // Pausing before delete
    if (!deleting && subIndex > currentWord.length) {
      const timeout = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(timeout);
    }

    // Deleting
    if (deleting && subIndex >= 0) {
      const timeout = setTimeout(() => {
        setText(currentWord.substring(0, subIndex));
        setSubIndex((prev) => prev - 1);
      }, deletingSpeed);
      return () => clearTimeout(timeout);
    }

    // After delete, move to next word
    if (deleting && subIndex < 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1));
    }
  }, [subIndex, deleting, index, words, typingSpeed, deletingSpeed, pause]);

  return {text, isDone};
}
