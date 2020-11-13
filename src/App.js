import React from 'react'
import List from './components/List.js'
import Form from './components/Form.js'
import Footer from './components/Footer.js'
import Header from './components/Header.js'

var styles = {
    'main': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
}

class App extends React.Component {
    state = {
        choosevalue: "1",
        deleteFlag:false,
        data: this.props.data,
    }

    ChooseValue(id) {
        this.setState({choosevalue: id});
    }

    OnAddTodoItem(newItem) {
        let newdata = this.state.data.concat(newItem).sort(function (a, b) {
            return b.timestamp - a.timestamp
        });
        this.setState({data: newdata});
    }
    AllChangeTimeSort(id){
        let newdata = this.state.data.map((item, index) => {
            item.timesort = !item.timesort;
            return item;
        })
        let sortdata
        if(newdata[0].timesort){
             sortdata = newdata.sort(function(a,b){
                return a.timestamp - b.timestamp
            })
            this.setState({data: sortdata});

        }else{
            sortdata = newdata.sort(function(a,b){
                return b.timestamp - a.timestamp
            })
            this.setState({data: sortdata});
        }

    }

    AllChangeComplete(id) {
        let newdata = this.state.data.map((item, index) => {
            if (item.id === id) {
                item.complete = !item.complete;
            }
            return item;
        })
        this.setState({data: newdata});
    }

    AllOnDeleteItem(id) {
        let newdata = this.state.data.map(function (item) {
            if (item.id === id) {
                item.deleteFlag = true
            }
            return item
        })
        this.setState({data: newdata})

    }

    render() {

        return (
            <div className='ui comments'
                 style={styles.main}
            >
                <h1>代办事项</h1>
                <Form AddTodoItem={this.OnAddTodoItem.bind(this)}/>
                <Header></Header>
                <List data={this.state.data}
                      choosevalue={this.state.choosevalue}
                      deleteFlag={this.state.deleteFlag}
                      ChangeCompleteTop={this.AllChangeComplete.bind(this)}
                      ChangeTimeSortTop={this.AllChangeTimeSort.bind(this)}
                      DeleteItemTop={this.AllOnDeleteItem.bind(this)}
                />
                <Footer SubmitChooseValue={this.ChooseValue.bind(this)}
                        choosevalue={this.state.choosevalue}
                />
            </div>
        )
    }
}

export default App;
