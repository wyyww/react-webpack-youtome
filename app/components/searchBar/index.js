/**
 * Created by PC on 2017/7/13.
 */

import React,{Component} from 'react';
import {FormGroup,ControlLabel,FormControl,HelpBlock,InputGroup,Grid,Row,Col} from "react-bootstrap";

import "./index.scss";
import "../common.scss"


export default class ContentSearch extends Component{

    constructor(props){
        super(props);
        this.state={
            value:'',
        }
        this.handleChange=this.handleChange.bind(this);
        this.clickToGetSearchContent=this.clickToGetSearchContent.bind(this);
    }

    handleChange(e){
        var value=e.target.value;
        this.setState({
            value:value,
        })
    }
    // 点击搜索从服务器获取搜索内容
    clickToGetSearchContent(){
        console.log('这是搜搜内容')
    }
    render(){
        return(
            <div className="container-top-bottom-padding">
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={6} mdPush={3}>
                            <form className="">
                                <FormGroup
                                    controlId="formBasicText"
                                    // validationState={this.getValidationState()}决定表单的整体边框字体颜色
                                >
                                    <InputGroup>
                                        <FormControl
                                            type="text"
                                            value={this.state.value}
                                            placeholder="输入搜索内容"
                                             onChange={this.handleChange}

                                        />
                                        <InputGroup.Addon onClick={this.clickToGetSearchContent}>搜索</InputGroup.Addon>
                                    </InputGroup>
                                    <FormControl.Feedback />
                                </FormGroup>
                            </form>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}