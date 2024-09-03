import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useNavigate} from "react-router-dom";
// import { Loader2 } from "lucide-react";

const LoginPage = () => {

    const navigate = useNavigate();

    const clickHandler = () => {
        navigate("/editor");
    }

    return (

        <div className={"grid place-items-center"}>
            <Input type="text" placeholder="ID" size={40} className="w-max mb-4"/>
            <Input type="password" placeholder="Password" className="mb-10"/>
            <Button onClick={clickHandler} type={"submit"} className="w-full mb-10">Login</Button>
            <Button type={"submit"} className="w-full mb-3">Google</Button>
            <Button type={"submit"} className="w-full mb-3">Apple</Button>
            <Button type={"submit"} className="w-full mb-3">MicroSoft</Button>
        </div>
    );
};

export default LoginPage;
