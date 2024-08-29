import { Card, CardHeader } from "@nextui-org/react"

type cardProps = {
    id: number
}

const loadAccount = () => {
    
}

export const accountTile:React.FunctionComponent<cardProps> = (props: cardProps) => {

    const account = loadAccount();

    return <Card>
        <CardHeader>
            
        </CardHeader>
    </Card>
}