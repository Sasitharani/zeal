import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion

const TextAnimation = () => {
    const [scrambledText, setScrambledText] = useState('');
    const [showLetterAnimation, setShowLetterAnimation] = useState(true); // State to toggle letter animation
    const targetText = 'Scrambling Text Animation';
    const morphingWords = ['Morphing', 'Text', 'Animation'];

    useEffect(() => {
        let interval;
        const scramble = (text, iterations = 10) => {
            if (iterations === 0) {
                setScrambledText(targetText);
                return;
            }
            const scrambled = text
                .split('')
                .map((char, i) =>
                    Math.random() > 0.5 ? String.fromCharCode(65 + Math.random() * 26) : char
                )
                .join('');
            setScrambledText(scrambled);
            setTimeout(() => scramble(targetText, iterations - 1), 100);
        };

        const startScramble = () => {
            scramble(targetText);
        };

        startScramble();
        interval = setInterval(startScramble, 5000); // Restart scramble every 5 seconds

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const toggleLetterAnimation = () => {
            setShowLetterAnimation(false);
            setTimeout(() => setShowLetterAnimation(true), 100); // Reset animation
        };

        const interval = setInterval(toggleLetterAnimation, 7000); // Restart letter animation every 7 seconds
        return () => clearInterval(interval);
    }, []);

    const letterVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1, // Delay each letter
                duration: 0.5,
            },
        }),
    };

    const morphingVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                repeat: Infinity,
                repeatType: 'reverse',
            },
        },
    };

    const scaleBounceVariants = {
        hidden: { scale: 0 },
        visible: {
            scale: [1, 1.5, 1],
            transition: {
                duration: 1,
                repeat: Infinity,
            },
        },
    };

    const staggeredFadeInVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.5,
            },
        }),
    };

    const glitchVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: [1, 0.5, 1],
            x: [0, -2, 2, 0],
            transition: {
                duration: 0.2,
                repeat: Infinity,
            },
        },
    };

    return (
        <div className="h-screen flex flex-col justify-center items-center space-y-8 bg-gray-100">
            {/* Text Marquee Animation */}
            <div className="overflow-hidden whitespace-nowrap">
                <p className="animate-marquee inline-block text-2xl font-bold text-cyan-900">
                    This is a Marquee Animation
                </p>
            </div>

            {/* Text Color Animation */}
            <p className="animate-text-color text-2xl font-bold">
                This is a Color Animation
            </p>

            {/* Text Gradient Animation */}
            <p className="animate-gradient bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-2xl font-bold">
                This is a Gradient Animation
            </p>

            {/* Text Typing Animation */}
            <p className="animate-typing overflow-hidden whitespace-nowrap border-r-2 border-cyan-900 text-2xl font-bold">
                This is a Typing Animation
            </p>

            {/* Text Shadow Animation */}
            <p className="animate-shadow text-2xl font-bold text-cyan-900">
                This is a Shadow Animation
            </p>

            {/* Text Scale Animation */}
            <p className="animate-scale text-2xl font-bold text-cyan-900">
                This is a Scale Animation
            </p>

            {/* Text Fade In/Out Animation */}
            <p className="animate-fade text-2xl font-bold text-cyan-900">
                This is a Fade In/Out Animation
            </p>

            {/* Text Wave Animation */}
            <p className="animate-wave text-2xl font-bold text-cyan-900">
                This is a Wave Animation
            </p>

            {/* Text Flip Animation */}
            <p className="animate-flip text-2xl font-bold text-cyan-900">
                This is a Flip Animation
            </p>

            {/* Text Scramble Animation */}
            <p className="text-2xl font-bold text-cyan-900">{scrambledText}</p>

            {/* Letter-by-Letter Reveal Animation */}
            {showLetterAnimation && (
                <motion.div
                    className="text-2xl font-bold text-cyan-900 flex space-x-1"
                    initial="hidden"
                    animate="visible"
                >
                    {targetText.split('').map((letter, index) => (
                        <motion.span key={index} custom={index} variants={letterVariants}>
                            {letter}
                        </motion.span>
                    ))}
                </motion.div>
            )}

            {/* Text Morphing Animation */}