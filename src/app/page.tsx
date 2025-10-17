// app/page.tsx
import Image from "next/image";
import AudioPlayer from "@/components/AudioPlayer";

export default function Page() {
    return (
        <main className="wrapper">
            {/* Header row */}
            <header className="header">
                <div className="brand">
                    <Image src="/logo/cclogo.png" width={64} height={64} alt="CC Logo" />
                </div>
                <h1 className="title">CODY Music App</h1>
            </header>

            {/* Middle + bottom rows are rendered by <AudioPlayer/> */}
            <AudioPlayer />
        </main>
    );
}
