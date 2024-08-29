import { Button, Card, CardBody, CardHeader, Divider, Input } from "@nextui-org/react";
import React from "react";
import { LoginSerivce } from "../../services/loginService";
import { useNavigate } from "react-router-dom";

import routing from "../../routing.json";

export const LoginPage: React.FunctionComponent = (props: any) => {
    const navigate = useNavigate();

    const submit = async () => {
        const reponse = await LoginSerivce.instance.login();

        if(reponse){
            navigate(routing.finaces);
        }
    }

    return <div className="w-screen h-screen p-10">
        <div className="flex justify-center">
            <Card>
                <CardHeader className="flex gap-3">
                    <p className="text-2xl">Private banking</p>
                </CardHeader>
                <Divider />
                <CardBody className="flex gap-3">
                    <Input type="text" label="Identifier" />
                    <Input type="password" label="Password" />
                    <Button onClick={submit}>
                        Login
                    </Button>
                </CardBody>
            </Card>
        </div>
    </div>
}