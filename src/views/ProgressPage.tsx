import {Progress} from "@/components/ui/progress.tsx";
import React from "react";

const ProgressPage = () => {
    const [progress, setProgress] = React.useState(13);

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Progress
            className="relative overflow-hidden bg-blackA6 rounded-full w-[300px] h-[25px]"
            style={{
                // Fix overflow clipping in Safari
                // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
                transform: 'translateZ(0)',
            }}
            value={progress}
        >
            <Progress
                className="bg-white w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
                style={{ transform: `translateX(-${100 - progress}%)` }}
            />
        </Progress>
    );
}
export default ProgressPage;