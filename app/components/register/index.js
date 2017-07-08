/**
 * Created by PC on 2017/7/8.
 */
/**
 * Created by PC on 2017/7/6.
 */

import React, {Component} from 'react';
import {Col,Form,FormGroup,ControlLabel,ButtonGroup,FormControl,Button} from 'react-bootstrap'

import  './index.scss'
import '../common.scss'

import Header from '../headers/index';
export default class Register extends Component{

    constructor(props){
        super(props);

        this.state={
            userPhone:'',
            userPhoneError:'',
            userPhoneValid:false,
            password:'',
            passwordError:'',
            passwordValid:false,
        }
        this.handlePhoneValueChange=this.handlePhoneValueChange.bind(this);
        this.handlePasswordValueChange=this.handlePasswordValueChange.bind(this)
    }


//手机号码的验证
    handlePhoneValueChange(e){
        var value=e.target.value;
        var regExp = /^1[3|4|5|8][0-9]\d{4,8}$/;
        this.setState({
            userPhone:value,
        })
        if (value.length == 11) {
            if(!regExp.test(value)){
                this.setState({
                    userPhoneError:'请输入11位有效手机号码',
                     userPhoneValid : false,
                })
            }
            else{
                this.setState({
                    userPhoneValid : true,
                })
            }
        }
        else if(value.length>11){
            this.setState({
                userPhoneError:'手机号码的长度应小于11位',
                userPhoneValid : false,
            })
        }
    }

    //密码验证
    handlePasswordValueChange(e){
        var value=e.target.value;
        var regExp = /^(?![0-9]*$)[a-zA-Z0-9]{6,20}$/;
        this.setState({
            password:value,
        })
        if (value.length == 11) {
            if(!regExp.test(value)){
                this.setState({
                    passwordError:'输入密码长度在6，20位，需要包含字母，数字',
                    passwordValid : false,
                })
            }
            else{
                this.setState({
                    passwordValid : true,
                })
            }
        }
        else if(value.length>11){
            this.setState({
                passwordError:'输入密码长度应该小于20',
                passwordValid : false,
            })
        }
    }
    render(){
        return(
            <div>
                <Header/>
                <div  className="general-background-color">
                    <Col sm={8} md={8} mdOffset={2}>
                        <div className="login-case">
                            <h2 className="login-theme">欢迎注册youtome</h2>
                            <div className="login-form">
                                <Form >
                                    <FormGroup controlId="formInlineName">
                                        <FormControl type="text" name="phone" value={this.state.userPhone} onChange={this.handlePhoneValueChange} placeholder="请输入11位手机号码" />
                                        {!this.state.userPhoneValid && <span>{this.state.userPhoneError}</span>}
                                    </FormGroup>
                                    {' '}
                                    <FormGroup controlId="formInlineEmail">
                                        {' '}
                                        <FormControl type="text" name="password" value={this.state.password} onChange={this.handlePasswordValueChange} placeholder="请输入密码" />
                                        {!this.state.passwordValid && <span>{this.state.passwordError}</span>}
                                    </FormGroup>
                                    {' '}
                                    <FormGroup controlId="formInlineName">
                                        <FormControl type="text" placeholder="请再次输入你的密码" />
                                    </FormGroup>
                                    {' '}
                                    <ButtonGroup vertical block>
                                        <Button type="submit" bsStyle="primary">注册</Button>
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