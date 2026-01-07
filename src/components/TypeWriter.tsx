"use client";

import { useEffect, useState } from "react";

type TypeWriterProps = {
    words: string[];
};

const TypeWriter = ({ words }: TypeWriterProps) => {
    const [typingText, setTypingText] = useState(words[0]);
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const typeWriter = () => {
            const currentWord = words[wordIndex];

            if (isDeleting) {
                setTypingText(currentWord.substring(0, charIndex - 1));
                setCharIndex((prev) => prev - 1);
            } else {
                setTypingText(currentWord.substring(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);
            }

            if (!isDeleting && charIndex === currentWord.length) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            }
        };

        const speed = isDeleting ? 100 : 150;
        const timer = setTimeout(typeWriter, speed);
        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, wordIndex, words]);

    return typingText;
}

export default TypeWriter;
