import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar"
import AlertDialogModal from "@/component/AlertDialogModal.tsx";
import {useState} from "react";


export const TopMenubar = () => {

    const [isModalOpen, setModalOpen] = useState(false);

    const handleLogOut = () => {
        setModalOpen(isModalOpen => !isModalOpen);
    }
    return (
        <>
            <Menubar className="fixed top-0 left-0 right-0 z-50">
                <MenubarMenu>
                    <MenubarTrigger>Profiles</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem onClick={handleLogOut}>Log Out</MenubarItem>
                        <MenubarSeparator/>
                        <MenubarItem>Version Info</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
            <AlertDialogModal isOpen={isModalOpen} onClose={() => setModalOpen(false)}/>
        </>
    )
}

export default TopMenubar;