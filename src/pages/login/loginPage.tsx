import { Button, Card, CardBody, CardHeader, Divider, Input } from "@nextui-org/react";
import React from "react";

export class LoginPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    render(): React.ReactNode {
        return <>
            <Card className="max-w-[400px] p-36">
                <CardHeader className="flex gap-3">
                   <p className="text-2xl">Private banking</p>
                </CardHeader>
                <Divider/>
                <CardBody className="flex gap-3">
                    <Input type="text" label="Identifier" />
                    <Input type="password" label="Password" />
                    <Button>
                        Login
                    </Button>
                </CardBody>
            </Card>
        </>
    }
}