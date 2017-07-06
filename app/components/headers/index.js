/**
 * Created by PC on 2017/7/6.
 */

import React, {Component} from 'react'

import {Navbar, Nav, NavItem, ButtonToolbar, Button} from 'react-bootstrap'
// import Button from '../button/index'
// <Button/>
export default class Header extends Component {

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/register">React-Bootstrap</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#">Link</NavItem>
                    <NavItem eventKey={2} href="#">Link</NavItem>
                </Nav>
            </Navbar>
        );
    }
}