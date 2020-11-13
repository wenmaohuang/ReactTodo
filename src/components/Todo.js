import React from 'react'

var styles = {
    'title': {
        display: 'inline-block',
        paddingLeft: '20px',
        paddingRight: '50px',
        position: 'relative',
        width: '300px',
        overflow: 'hidden',
        textOverflow: 'ellipsis'

    },
    'delete': {
        display: 'inline-block',
        marginLeft: '20px',
        marginRight: '50px',
        cursor: 'pointer',
        height: '24px',
        width: '45px',
        whiteSpace: 'nowrap'
    },
    'completeContent': {
        display: 'inline-block',
        margin: '0 20px',
        backgroundColor: 'green',
        cursor: 'pointer',
        width: '55px',
        whiteSpace: 'nowrap'
    },
    'unCompleteContent': {
        display: 'inline-block',
        margin: '0 20px',
        backgroundColor: 'red',
        cursor: 'pointer',
        width: '55px',
        whiteSpace: 'nowrap'
    },
    'content': {
        display: 'flex',
        margin: '15px',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    'time': {
        width:'270px',
        textAlign:'center',
        whiteSpace: 'nowrap',
        cursor:'pointer'
    }
}

class Todo extends React.Component {
    handleChangeComplete() {
        this.props.ChangeCompleteItem(this.props.id);
    }
    handleChangeTimeSort() {
        this.props.ChangeTimeSortItem(this.props.id);
    }

    handleDelete() {
        this.props.DeleteItem(this.props.id);
    }

    render() {
        return (
            <div className='comment'>
                <div className='content'
                     style={styles.content}
                >
          <span
              className='author'
              style={styles.title}
          >
              {this.props.text}
              <span
                  className={this.props.complete ? 'line' : ''}
              />
          </span>
                    <span className='author'
                          style={this.props.complete ? styles.completeContent : styles.unCompleteContent}
                          onClick={this.handleChangeComplete.bind(this)}
                    >
                {this.props.complete ? '已完成' : '未完成'}

          </span>
                    <span style={styles.time}
                          onClick={this.handleChangeTimeSort.bind(this)}
                    >创建于
                        【{this.props.time}】
                    </span>
                    <button className='ui blue button'
                            style={styles.delete}
                            onClick={this.handleDelete.bind(this)}
                    >
                        删除
                    </button>
                </div>
            </div>
        )
    }
}

export default Todo;