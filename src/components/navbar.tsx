import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react"

export const Navigation:React.FunctionComponent = (props:any) =>{
    return <Navbar>
        <NavbarBrand>
            <span>BANK</span>
        </NavbarBrand>       
        <NavbarContent>
            <NavbarItem>
                <Link href="#">Desktop</Link>
            </NavbarItem>
            <NavbarItem>
                <Link href="#">Finances</Link>
            </NavbarItem>
        </NavbarContent>
    </Navbar>
}