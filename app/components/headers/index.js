/**
 * Created by PC on 2017/7/6.
 */

import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav, NavItem,NavDropdown,MenuItem, ButtonToolbar, Button} from 'react-bootstrap'
// import Button from '../button/index'
// <Button/>

//个人写的
import './index.scss';
export default class Header extends Component {

    render() {
        return (

        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">YOUTOME</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#"><Link to="/" className="header-link">更多</Link></NavItem>
                    <NavItem eventKey={2} href="#" ><Link to="/register" className="header-link">注册</Link></NavItem>
                    <NavItem eventKey={3} href="#"><Link to="/login" className="header-link">登录</Link></NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        );
    }
}
