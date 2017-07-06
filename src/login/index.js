/**
 * Created by PC on 2017/7/6.
 */

import React, {Component} from 'react';

import styles from './index.css'
import Header from '../components/headers/index'
export default class LoginIn extends Component{

    render(){
        return(
            <div className={styles.top}>
                <Header />
            </div>
        )
    }
}