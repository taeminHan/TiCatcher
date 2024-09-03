import {ToastEditor} from "@/component/ToastEditor.tsx";
import {Button} from "@/components/ui/button.tsx";
import TopMenubar from "@/component/TopMenubar.tsx";

const EditorPage = () => {

    return (
        <>
            <TopMenubar/>
            <ToastEditor/>
            <Button>Click me</Button>
        </>
    )
}

export default EditorPage;