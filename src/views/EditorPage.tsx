import TopMenubar from "@/component/TopMenubar.tsx";
// import { MilkdownProvider } from '@milkdown/react';
// import { StrictMode } from 'react'
// import {MilkdownEditor} from '@/component/Editor';
import { CrepeEditor } from '../component/CrepeEditor.tsx';

const EditorPage = () => {
    return (
        <>
            <TopMenubar />
            {/* <div>
              <MilkdownProvider>
                <MilkdownEditor />
              </MilkdownProvider>
            </div> */}
            <CrepeEditor />
        </>

    );
};

export default EditorPage;
