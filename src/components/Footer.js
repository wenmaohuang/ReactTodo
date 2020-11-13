import React from 'react'
import './Footer.css'
var totalActive = true
var unCompleteActive = false
var completeActive = false
class Footer extends React.Component {
    handleAll () {
        let all = this.refs.all.value;
        this.props.SubmitChooseValue(all);
        totalActive = true
        unCompleteActive = false
        completeActive = false
    }
    handleActive () {
        let active = this.refs.active.value;
        this.props.SubmitChooseValue(active);
        unCompleteActive = true
        totalActive = false
        completeActive = false
    }

    handleComplete () {
        let complete = this.refs.complete.value
        this.props.SubmitChooseValue(complete);
        completeActive = true
        totalActive = false
        unCompleteActive = false
    }
    render () {
        return (
            <div>
                <button
                    type='submit'
                    className={totalActive ? "total" : ""}
                    value='1'
                    ref='all'
                    onClick={this.handleAll.bind(this)}
                >
                    全部
                </button>
                <button
                    type='submit'
                    className={unCompleteActive ? "unCompleteContent" : ""}
                    value='2'
                    ref='active'
                    onClick={this.handleActive.bind(this)}
                >
                    还未完成
                </button>
                <button
                    type='submit'
                    className={completeActive ? "completeContent" : ""}

                    value='3'
                    ref='complete'
                    onClick={this.handleComplete.bind(this)}
                >
                    已完成
                </button>
            </div>
        )
    }
}

export default Footer;