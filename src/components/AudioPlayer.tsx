// src/components/AudioPlayer.tsx
"use client";

import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import WaveSurferPlayer from "@/components/WaveSurferPlayer";

type Track = { title: string; src: string };

/** 15 tracks in /public/music */
const DEFAULT_PLAYLIST: Track[] = [
    { title: "song 1", src: "/music/song1.mp3" },
    { title: "song 2", src: "/music/song2.mp3" },
    { title: "song 3", src: "/music/song3.mp3" },
    { title: "song 4", src: "/music/song4.mp3" },
    { title: "song 5", src: "/music/song5.mp3" },
    { title: "song 6", src: "/music/song6.mp3" },
    { title: "song 7", src: "/music/song7.mp3" },
    { title: "song 8", src: "/music/song8.mp3" },
    { title: "song 9", src: "/music/song9.mp3" },
    { title: "song 10", src: "/music/song10.mp3" },
    { title: "song 11", src: "/music/song11.mp3" },
    { title: "song 12", src: "/music/song12.mp3" },
    { title: "song 13", src: "/music/song13.mp3" },
    { title: "song 14", src: "/music/song14.mp3" },
    { title: "song 15", src: "/music/song15.mp3" },
];

export default function AudioPlayer() {
    const [playlist] = useState<Track[]>(DEFAULT_PLAYLIST);
    const [index, setIndex] = useState<number>(0);
    const [autoPlayNext, setAutoPlayNext] = useState<boolean>(false);

    const current = useMemo(() => playlist[index], [playlist, index]);

    const handleSkip = useCallback(() => {
        setIndex((i) => (i + 1) % playlist.length);
        setAutoPlayNext(true); // tell WaveSurfer to auto play when next src is ready
    }, [playlist.length]);

    const handlePick = (i: number) => {
        setIndex(i);
        setAutoPlayNext(true); // when user picks a song from the list, start it
    };

    return (
        <>
            {/* 1) DJ MP4 block */}
            <div className="section video">
                <video
                    src="/media/codytokendj.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ width: "100%", borderRadius: 12, border: "1px solid var(--outline)" }}
                />
            </div>

            {/* 2) Waveform + buttons + Song List under it */}
            <div className="section">
                <WaveSurferPlayer
                    key={current.src}          // remount the player on track change
                    src={current.src}
                    autoPlay={autoPlayNext}    // autoplay after skip/pick/finish
                    onEndedAction={handleSkip} // auto-next when track finishes
                    onSkipAction={handleSkip}  // Skip button
                />

                <div className="songList">
                    <h2>Song List:</h2>
                    <div className="caption">Click a song to play</div>
                    <div className="songScroll" role="listbox" aria-label="Song list">
                        {playlist.map((t, i) => (
                            <div
                                key={t.src}
                                className={`songItem ${i === index ? "active" : ""}`}
                                onClick={() => handlePick(i)}
                                role="option"
                                aria-selected={i === index}
                            >
                                {t.title}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3) Cody main image */}
            <div className="section imageCard">
                <Image
                    src="/images/codytokendjmain.jpg"
                    alt="CODY DJ"
                    width={1200}
                    height={800}
                    priority
                />
            </div>
        </>
    );
}
