import { useEffect, useRef } from 'react';
import './EyeFollowIcon.css';

export default function EyeFollowIcon() {
    const leftEyeRef = useRef(null);
    const rightEyeRef = useRef(null);
    const leftPupilRef = useRef(null);
    const rightPupilRef = useRef(null);
    const rafRef = useRef(null);

    const mousePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const isHovering = useRef(false);
    const mouseIsActive = useRef(false);

    // Lerp state tracking
    const currentPupilL = useRef({ x: 0, y: 0, scale: 1 });
    const currentPupilR = useRef({ x: 0, y: 0, scale: 1 });

    useEffect(() => {
        // Feature detect touch devices
        const isTouch = window.matchMedia('(pointer: coarse)').matches;

        const handleMouseMove = (e) => {
            if (isTouch) return;
            mouseIsActive.current = true;
            mousePos.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseLeaveDoc = () => { mouseIsActive.current = false; };

        // Global mouse tracking
        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        document.addEventListener('mouseleave', handleMouseLeaveDoc);

        const lerp = (start, end, factor) => start + (end - start) * factor;

        const updateEye = (eye, pupil, currentPos) => {
            if (!eye || !pupil) return;

            const rect = eye.getBoundingClientRect();
            const eyeCenterX = rect.left + rect.width / 2;
            const eyeCenterY = rect.top + rect.height / 2;

            let targetX = 0;
            let targetY = 0;

            if (mouseIsActive.current) {
                const dx = mousePos.current.x - eyeCenterX;
                const dy = mousePos.current.y - eyeCenterY;
                const angle = Math.atan2(dy, dx);

                const maxRadius = (rect.width / 2) - (pupil.offsetWidth / 2) - 3;
                const dist = Math.sqrt(dx * dx + dy * dy);

                // Track faster/closer on hover - distance multiplier
                const radius = Math.min(maxRadius, dist * 0.12);

                targetX = Math.cos(angle) * radius;
                targetY = Math.sin(angle) * radius;
            }

            // Target scale (dilation on hover)
            const targetScale = isHovering.current ? 1.15 : 1.0;

            // Determine tracking speed (faster on hover)
            const trackingSpeed = isHovering.current ? 0.50 : 0.35;

            // Apply smooth lerping
            currentPos.x = lerp(currentPos.x, targetX, trackingSpeed);
            currentPos.y = lerp(currentPos.y, targetY, trackingSpeed);
            currentPos.scale = lerp(currentPos.scale, targetScale, 0.35);

            pupil.style.transform = `translate(${currentPos.x}px, ${currentPos.y}px) scale(${currentPos.scale})`;
        };

        const animate = () => {
            updateEye(leftEyeRef.current, leftPupilRef.current, currentPupilL.current);
            updateEye(rightEyeRef.current, rightPupilRef.current, currentPupilR.current);
            rafRef.current = requestAnimationFrame(animate);
        };

        rafRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeaveDoc);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <span
            className="eye-follow-wrapper"
            onMouseEnter={() => { isHovering.current = true; }}
            onMouseLeave={() => { isHovering.current = false; }}
        >
            <div ref={leftEyeRef} className="eye-follow-icon">
                <div ref={leftPupilRef} className="eye-follow-pupil">
                    <div className="eye-pupil-glint"></div>
                </div>
            </div>
            <div ref={rightEyeRef} className="eye-follow-icon">
                <div ref={rightPupilRef} className="eye-follow-pupil">
                    <div className="eye-pupil-glint"></div>
                </div>
            </div>
        </span>
    );
}
