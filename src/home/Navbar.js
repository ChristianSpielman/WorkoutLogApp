import React, {useState} from 'react';
import { //1
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    Button
} from 'reactstrap';


const Sitebar = (props) => { //2
    const [isOpen, setIsOpen] = useState(false);
    const toggle =() => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }
//3
    return(
        <Navbar color="faded" light expand="md">
            <NavbarBrand href="/">Workout Log </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button onClick={props.clearToken}>Logout</Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Sitebar;