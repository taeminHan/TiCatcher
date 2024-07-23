import {Editor} from "@toast-ui/react-editor";

import '@toast-ui/editor/toastui-editor.css';
import '@toast-ui/editor/toastui-editor-dark.css';
import {useDarkMode} from "../utils/browserUtils.tsx";
import {DARK, DEFAULT} from "../const/CommonConst.ts";

export const ToastEditor = () => {

    const isDarkMode = useDarkMode();

    if (isDarkMode === null) {
        // TODO Loading UI 추가
        return <div>Loading...</div>;
    }

    return (
        <Editor
            initialValue="hello react editor world!"
            previewStyle="vertical"
            height="600px"
            initialEditType="markdown"
            useCommandShortcut={true}
            theme={isDarkMode ? DARK : DEFAULT}
        />
    )
}