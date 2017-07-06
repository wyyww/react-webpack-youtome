/**
 * Created by PC on 2017/7/6.
 */

import React,{Component} from 'react';
import PropTypes from 'prop-types';
// import createReactClass from 'create-react-class';

 const BUTTONSTATE={
    DISABLED:'disabled',
    ABLED:'abled',
    NOTHING:'',
}

export default class Button extends Component{

    //这个应该是自定义组件的属性
    static propTypes={
        classNameSpace:PropTypes.string,
        form:PropTypes.string,
        type:PropTypes.string,
        onClick:PropTypes.func,
        state: PropTypes.oneOf(Object.keys(BUTTONSTATE).map(k => BUTTONSTATE[k])),//这里使用了map函数呢
    }
    //这个应该是自定义组件的初始化属性
    static defaultProps={
        onClick(){},
    }
    constructor(props){
        super(props);
        this.state={
            currentState:this.props.state||BUTTONSTATE.NOTHING,
        }
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.state === this.props.state) { return }
        switch (nextProps.state) {
            case BUTTONSTATE.DISABLED:
                this.disable()
                return
            case BUTTONSTATE.NOTHING:
                this.notLoading()
                return
            default:
                return
        }
    }

    render(){
        const {
            className,
            classNamespace,
            children,
            type,
            form,
            onClick, // eslint-disable-line no-unused-vars
            state, // eslint-disable-line no-unused-vars
            ...containerProps
        } = this.props

        containerProps.className = classNamespace + 'container ' + this.state.currentState + ' ' + className
        containerProps.onClick = this.handleClick

        return(
            <div {...containerProps}>
                <button type={type} form={form} className={classNamespace + 'button'}>
                    <span>{children}</span>
                </button>
            </div>
        )
    }
    handleClick (e) {
        console.log(e)
    }

    handlePromise (promise) {
        if (promise && promise.then && promise.catch) {
            promise
                .then(() => {
                    // this.success()
                })
                .catch((err) => {
                    // this.error(null, err)
                })
        }
    }
    notLoading () {
        this.setState({currentState: BUTTONSTATE.NOTHING})
    }

    enable () {
        this.setState({currentState: BUTTONSTATE.NOTHING})
    }

    disable () {
        this.setState({currentState: BUTTONSTATE.DISABLED})
    }
}
