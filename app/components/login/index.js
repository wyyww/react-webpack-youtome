/**
 * Created by PC on 2017/7/8.
 */
/**
 * Created by PC on 2017/7/6.
 */

import React, {Component} from 'react';
import {Col,Form,HelpBlock,FormGroup,ControlLabel,ButtonGroup,FormControl,Button} from 'react-bootstrap'

import  './index.scss'
import '../common.scss'

import Header from '../headers/index';
import Footer from "../footer/index";
export default class Login extends Component{

    constructor(props){
        super(props);

        this.state={
            userPhone:'',
            userPhoneError:'',
            userPhoneValid:true,
            password:'',
            passwordError:'',
            passwordValid:true,

        }
        this.handlePhoneValueChange=this.handlePhoneValueChange.bind(this);
        this.handlePasswordValueChange=this.handlePasswordValueChange.bind(this);
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
        if (value.length > 6) {
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
        else if(value.length>20){
            this.setState({
                passwordError:'输入密码长度应该小于20',
                passwordValid : false,
            })
        }
    }

    render(){
        return(
            <div>
                {/*头部导航开始*/}
                <Header/>
                {/*头部导航结束*/}
                {/*登录模块开始*/}
                <div  className="general-background-color">
                    <Col sm={8} md={8} mdOffset={2}>
                        <div className="login-case">
                            <h2 className="login-theme">欢迎登录youtome</h2>
                            <div className="login-form">
                                <Form >
                                    <FormGroup controlId="formValidationSuccess1" validationState={this.state.userPhoneValid?"success":"error"}>
                                        <FormControl type="text" name="phone"   value={this.state.userPhone} onChange={this.handlePhoneValueChange} placeholder="请输入11位手机号码" />
                                        <HelpBlock>   {!this.state.userPhoneValid && <span>{this.state.userPhoneError}</span>}</HelpBlock>
                                    </FormGroup>
                                    {' '}
                                    <FormGroup controlId="formValidationSuccess2" validationState={this.state.passwordValid?"success":"error"}>
                                        {' '}
                                        <FormControl type="text" name="password" value={this.state.password} onChange={this.handlePasswordValueChange} placeholder="请输入密码" />
                                        <HelpBlock>  {!this.state.passwordValid && <span>{this.state.passwordError}</span>}</HelpBlock>
                                    </FormGroup>
                                    {' '}
                                    <ButtonGroup vertical block>
                                        <Button type="submit" bsStyle="primary">登录</Button>
                                    </ButtonGroup>
                                </Form>
                            </div>
                        </div>
                    </Col>
                    <div className="clearfix"></div>
                </div>
                {/*登录模块结束*/}
                {/*底部公司简介开始*/}
                <Footer/>
                {/*底部公司简介结束*/}
            </div>
        )
    }
}