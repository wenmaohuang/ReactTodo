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
        height: '24px',
        width: '45px',
        whiteSpace: 'nowrap'
    },
    'status': {
        display: 'inline-block',
        margin: '0 20px',
        width: '55px',
        whiteSpace: 'nowrap',
        textAlign:'center',
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
        whiteSpace: 'nowrap'
    }
}

class Header extends React.Component {


    render() {
        return (
            <div className='comment'>
                <div className='content'
                     style={styles.content}>
          <span
              className='author'
              style={styles.title}

          >
              标题
              <span/>
          </span>
                    <span className='author'
                          style={styles.status}

                    >
                状态
          </span>
                    <span style={styles.time}>
                        时间
                    </span>
                    <span className='ui blue button'
                            style={styles.delete}>
                        操作
                    </span>
                </div>
            </div>
        )
    }
}

export default Header;