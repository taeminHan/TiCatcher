import { Crepe } from '@milkdown/crepe';
import "@milkdown/crepe/theme/common/style.css";
import { useEffect, useRef } from "react";
import "@milkdown/crepe/theme/nord-dark.css";

export const CrepeEditor = () => {
    const editorRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const crepe = new Crepe({
            root: document.getElementById("test"),
            defaultValue: `# Hello, World!`,
        });

        if (editorRef.current) {
            crepe.create();
        }

        return () => {
            crepe.destroy();
        };
    }, []);

  return(
    <>
        <div ref={editorRef} className="editor" />
    </>
  )
};