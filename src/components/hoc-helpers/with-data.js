import React, { Component } from "react";
import ErrorIndicator from "../error-indicator/error-indicator";
import Spinner from '../spinner';

const withData = (View) => {
    return class extends Component {
        state = {
            data: null,
            error: false
        }

        componentDidMount() {
          this.update()
        }

        componentDidUpdate(prevProps) {
          if (this.props.getData !== prevProps.getData) {
            this.update()
          }
        }

        update() {
          this.props.getData()
          .then((data) => {
              this.setState({
                  data,
                  error: false
              });
          })
          .catch((error) => {
              this.setState({
                  error: true
              });
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

export default withData;