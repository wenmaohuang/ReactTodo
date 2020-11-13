import React from 'react'
import Todo from './Todo'

class List extends React.Component {
    SubmitDelete(id) {
        this.props.DeleteItemTop(id)
    }

    ChangeDone(id) {
        this.props.ChangeCompleteTop(id);
    }

    TimeSort(id) {
        this.props.ChangeTimeSortTop(id);
    }

    render() {
        var value = this.props.choosevalue;
        const a = this.props.data.map(({id, text, time, complete, deleteFlag}, index) => {

            if (value === "1" && deleteFlag !== true) {
                return <Todo
                    key={index}
                    id={id}
                    text={text}
                    time={time}
                    complete={complete}
                    ChangeCompleteItem={this.ChangeDone.bind(this)}
                    ChangeTimeSortItem={this.TimeSort.bind(this)}
                    DeleteItem={this.SubmitDelete.bind(this)}
                />
            } else if (value === "2" && complete === false && deleteFlag !== true) {
                return <Todo
                    key={index}
                    id={id}
                    text={text}
                    time={time}
                    complete={complete}
                    ChangeCompleteItem={this.ChangeDone.bind(this)}
                    ChangeTimeSortItem={this.TimeSort.bind(this)}
                    DeleteItem={this.SubmitDelete.bind(this)}
                />
            } else if (value === "3" && complete === true && deleteFlag !== true) {
                return <Todo
                    key={index}
                    id={id}
                    text={text}
                    time={time}
                    complete={complete}
                    ChangeCompleteItem={this.ChangeDone.bind(this)}
                    ChangeTimeSortItem={this.TimeSort.bind(this)}
                    DeleteItem={this.SubmitDelete.bind(this)}
                />
            } else {
                return <div key={index} />
            }


        })
        return (
            <div> {a} </div>
        )
    }
}

export default List;