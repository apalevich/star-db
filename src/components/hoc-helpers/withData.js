import React, { Component } from "react";
import ErrorIndicator from "../error-indicator/error-indicator";
import Spinner from '../spinner';

const withData = (View, getData) => {
    return class extends Component {
        state = {
            data: null,
            error: false
        }

        componentDidMount() {
            getData()
            .then((data) => {
                this.setState({
                    data
                });
            })
            .catch((error) => {
                this.setState({
                    error: true
                });
            })
        }

        renderItems(arr) {
            return arr.map((item) => {
              const {id} = item;
              const label = this.props.renderItems(item);
        
              return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => {this.props.onItemSelected(id)}}
                >
                  { label }
                </li>
              )
            })
        }

        render() {
            const { data, error } = this.state
            
            if (error) return <ErrorIndicator/>
            if (!data) return <Spinner/>

            return <View {...this.props} data={data}/>
        }
    }
}

export default withData