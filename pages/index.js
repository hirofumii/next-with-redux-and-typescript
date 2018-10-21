import React from 'react';
import { connect } from 'react-redux';
import { startClock, serverRenderClock } from '../actions';
import Examples from '../comonents/examples';

class Index extends React.Component {
    static getInitialProps({ reduxStore, req }) {
        const isServer = !!req;
        reduxStore.dispatch(serverRenderClock(isServer));

        return {};
    }

    componentDidMount() {
        const { dispatch } = this.props;
        this.timer = startClock(dispatch);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return <Examples />;
    }
}

export default connect()(Index);
