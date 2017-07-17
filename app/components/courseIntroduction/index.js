/**
 * Created by PC on 2017/7/17.
 */
import React ,{Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


export  default class CourseIntroduction extends Component{

    constructor(props){
        super(props);
        this.state={
            subject_id:''
        }
    }

    componentDidMount(){
        const params=this.props.location;
        console.log(this.props.location);
        this.setState({
            subject_id:params.query.subject_id,
        })
    }

    render(){

        return(
            <div>{this.state.subject_id}课程介绍</div>
        )
    }

}