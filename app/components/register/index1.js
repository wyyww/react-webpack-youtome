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
            form:{
                phone:{
                    valid:false,
                    value:'',
                    error:'',
                },
                password:{
                    valid:false,
                    value:'',
                    error:'',
                },
                repassword:{
                    valid:false,
                    value:'',
                    error:''
                }
            },
        }
        this.handlePhoneValueChange=this.handlePhoneValueChange.bind(this);
    }

    handleValueChange (field, value, type = 'string') {
        if (type === 'number') {
            value = +value;
        }

        const {form} = this.state;

        const newField = {value, valid: false, error: ''};


        switch (field) {
            case 'phone': {
                var regExp = /^1[3|4|5|8][0-9]\d{4,8}$/;
                // console.log(regExp.test(value))
                if (value.length == 11) {
                    if(!regExp.test(value)){
                        newField.error = '请输入11位有效手机号码';
                        newField.valid = false;
                    }
                    else{
                        newField.valid=true;
                    }
                }
                else if(value.length>11){
                    newField.error = '手机号码的长度应小于11位';
                    newField.valid = false;
                }
                break;
            }
            case 'password': {
                if (value.length >= 6 && value.length <= 20) {
                    var regExp = /^(?![0-9]*$)[a-zA-Z0-9]{6,20}$/;
                    if(!regExp.test(value)){
                        newField.error = '输入密码长度在6，20位，需要包含字母，数字';
                        newField.valid = false;
                    }
                    else{
                        newField.valid = true;
                    }
                }
                else if(value.length>20){
                    newField.error = '输入密码长度应该小于20';
                    newField.valid = false;
                }
                break;
            }
            case 'repassword': {
                if (!value) {
                    newField.error = '请选择性别';
                    newField.valid = false;
                }
                break;
            }
        }

        this.setState({
            form: {
                [field]:newField,
                // ...form,
            }
        });
        console.log(form)
        console.log(field)
    }
//手机号码的验证
    handlePhoneValueChange(e){
        var regExp = /^1[3|4|5|8][0-9]\d{4,8}$/;
        // console.log(regExp.test(value))
        if (value.length == 11) {
            if(!regExp.test(value)){
                newField.error = '请输入11位有效手机号码';
                newField.valid = false;
            }
            else{
                newField.valid=true;
            }
        }
        else if(value.length>11){
            newField.error = '手机号码的长度应小于11位';
            newField.valid = false;
        }
    }
    render(){
        const {form:{phone,password,repassword}}=this.state;
        return(
            <div>
                <Header/>
                <div  className="general-background-color">
                    <Col sm={8} md={8} mdOffset={2}>
                        <div className="login-case">
                            <h2 className="login-theme">欢迎注册</h2>
                            <div className="login-form">
                                <Form >
                                    <FormGroup controlId="formInlineName">
                                        <FormControl type="text" name="phone" value={phone.value} onChange={this.handlePhoneValueChange} placeholder="请输入11位手机号码" />
                                        {!phone.valid && <span>{phone.error}</span>}
                                    </FormGroup>
                                    {' '}
                                    <FormGroup controlId="formInlineEmail">
                                        {' '}
                                        <FormControl type="text" name="password" value={name.value} onChange={(e)=>this.handleValueChange('name',e.target.value)} placeholder="请输入密码" />
                                        {/*{!password.valid && <span>{password.error}</span>}*/}
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