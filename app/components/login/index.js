/**
 * Created by PC on 2017/7/6.
 */

import React, {Component} from 'react';
import {Col,Form,FormGroup,ControlLabel,ButtonGroup,FormControl,Button} from 'react-bootstrap'

import  './index.scss'
import '../common.scss'

import Header from '../headers/index';
export default class LoginIn extends Component{

    render(){
        return(
            <div>
               <Header/>
                <div  className="general-background-color">
                <Col sm={8} md={8} mdOffset={2}>
                  <div className="login-case">
                     <h2 className="login-theme">欢迎登录youtome</h2>
                      <div className="login-form">
                          <Form >
                              <FormGroup controlId="formInlineName">
                                  <FormControl type="text" placeholder="请输入你的手机号" />
                              </FormGroup>
                              {' '}
                              <FormGroup controlId="formInlineEmail">
                                  {' '}
                                  <FormControl type="text" placeholder="请输入密码" />
                              </FormGroup>
                              {' '}
                              <ButtonGroup vertical block>
                                  <Button type="submit" bsStyle="primary">登录</Button>
                              </ButtonGroup>
                          </Form>
                      </div>
                  </div>
                </Col>
                </div>
            </div>
        )
    }
}