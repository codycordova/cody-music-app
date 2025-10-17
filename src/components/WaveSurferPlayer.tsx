// src/components/WaveSurferPlayer.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

interface Props {
    src: string;
    /** When true, start playing automatically once the new src is ready */
    autoPlay?: boolean;
    onEndedAction?: () => void;
    onSkipAction?: () => void;
}

/** Keep exactly one WaveSurfer alive so tracks never overlap */
let CURRENT_WS: WaveSurfer | null = null;

export default function WaveSurferPlayer({
                                             src,
                                             autoPlay = false,
                                             onEndedAction,
                                             onSkipAction,
                                         }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const readyRef = useRef(false);           // track ready state
    const pendingToggleRef = useRef(false);   // if user clicked before ready

    useEffect(() => {
        if (!containerRef.current) return;

        // Stop & destroy any previous instance
        if (CURRENT_WS) {
            try {
                CURRENT_WS.stop();
                CURRENT_WS.destroy();
            } catch {
                /* ignore destroy/abort races */
            }
            CURRENT_WS = null;
        }

        const ws = WaveSurfer.create({
            container: containerRef.current,
            waveColor: "#ff89c9",     // pink waveform
            progressColor: "#9ee1ff", // baby blue progress
            cursorColor: "#ffffffaa",
            barWidth: 2,
            barGap: 1.5,
            barRadius: 1,
            height: 100,              // a bit shorter
            normalize: true,
        });

        CURRENT_WS = ws;
        readyRef.current = false;
        pendingToggleRef.current = false;

        ws.once("ready", () => {
            readyRef.current = true;
            if (autoPlay || pendingToggleRef.current) {
                // user clicked before ready OR we were asked to auto play
                pendingToggleRef.current = false;
                void ws.play();
            }
        });

        ws.on("play", () => setIsPlaying(true));
        ws.on("pause", () => setIsPlaying(false));
        ws.on("finish", () => {
            setIsPlaying(false);
            onEndedAction?.(); // parent advances playlist
        });

        // load the new track; swallow AbortError when we destroy mid-load
        void ws.load(src).catch(() => {});

        return () => {
            try {
                ws.stop();
                ws.destroy();
            } catch {
                /* ignore */
            }
            if (CURRENT_WS === ws) CURRENT_WS = null;
        };
    }, [src, autoPlay, onEndedAction]);

    const handlePlayPause = () => {
        const ws = CURRENT_WS;
        if (!ws) return;

        // If not ready yet, record an intent to toggle once "ready" fires
        if (!readyRef.current) {
            pendingToggleRef.current = true;
            return;
        }
        void ws.playPause();
    };

    const handleSkip = () => {
        try {
            CURRENT_WS?.pause();
        } catch {}
        onSkipAction?.(); // parent sets next src; next instance will autoPlay
    };

    return (
        <div className="visualizerBox">
            <div className="canvasWrap" ref={containerRef} />

            <div className="controls">
                <button className="btn" onClick={handlePlayPause}>
                    {isPlaying ? "Pause" : "Play"}
                </button>
                <button className="btn" onClick={handleSkip}>Skip</button>
            </div>

            <div className="caption">Click the waveform to seek 🎶</div>
        </div>
    );
}
