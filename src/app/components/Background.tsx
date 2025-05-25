'use client'
import React, { useEffect, useRef, useState } from 'react'

function Background() {
    const [angle, setAngle] = useState(180); // 180deg = vertical (top to bottom)
    const bgDivRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const percent = docHeight > 0 ? scrollY / docHeight : 0;
            // Interpola de 180deg (vertical) a 0deg (vertical invertido)
            const newAngle = 180 - 180 * percent;
            setAngle(newAngle);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            ref={bgDivRef}
            style={{
                backgroundImage: `url('/grid-bg.svg'), linear-gradient(${angle}deg, #bedbd4, #c2bacf)`,
                backgroundSize: "180px 180px, cover",
                backgroundBlendMode: "normal",
                transition: " background 0s, background-position 0.2s, background-color 0s, filter 0.8s cubic-bezier(.4,0,.2,1)",
            }}
            className="fixed inset-0 -z-10 mask-radial-farthest-corner bg-center"
        />
    )
}

export default Background