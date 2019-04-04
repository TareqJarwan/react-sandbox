import React, {Component} from 'react';

class Tags extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: ['Tareq', 'Ahamad'],
            focused: false,
            input: ''
        };
    }

    render() {
        const styles = {
            container: {
                width: '80%',
                margin: '10px auto',
                border: '1px solid #ddd',
                padding: '5px',
                borderRadius: '5px',
            },

            items: {
                color: 'white',
                backgroundColor: '#17a2b8',
                display: 'inline-block',
                padding: '5px',
                border: '1px solid #17a2b8',
                fontFamily: 'Helvetica, sans-serif',
                borderRadius: '5px',
                marginRight: '5px',
                cursor: 'pointer'
            },

            input: {
                outline: 'none',
                border: 'none',
                fontSize: '14px',
                fontFamily: 'Helvetica, sans-serif'
            }
        };
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <ul style={styles.container}>
                        {this.state.items.map((item, i) =>
                            <li key={i} style={styles.items} onClick={this.handleRemoveItem(i)}>
                                {item}{' '}<span><i className="fa fa-times"/></span>
                            </li>
                        )}
                        <input
                            placeholder="Add new Subject"
                            style={styles.input}
                            value={this.state.input}
                            onChange={this.handleInputChange}
                            onKeyDown={this.handleInputKeyDown}/>
                    </ul>
                    <input type="submit" className={"btn btn-info"} value="Submit"/>
                </form>
            </div>
        );
    }

    onSubmit = (evt) => {
        evt.preventDefault();
        console.log(this.state.items);
    };

    handleInputChange = (evt) => {
        evt.preventDefault();
        this.setState({input: evt.target.value});
    };

    handleInputKeyDown = (evt) => {
        if (evt.keyCode === 13) {
            const {value} = evt.target;
            evt.preventDefault();
            if (value.trim() !== "") {
                this.setState(state => ({
                    items: [...state.items, value],
                    input: ''
                }));
            } else {
                this.setState({
                    input: ''
                });
            }
        }
    };

    handleRemoveItem = (index) => {
        return () => {
            this.setState(state => ({
                items: state.items.filter((item, i) => i !== index)
            }));
        }
    }
}

export default Tags;