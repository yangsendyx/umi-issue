import React from 'react';
import { Spin } from 'antd';

export default class extends React.PureComponent {
    render() {
        return (
            <div style={{
                width: '100%',
                paddingTop: 100,
                textAlign: 'center',
            }}>
                <Spin spinning size="large" />
                <div style={{ color: '#666', marginTop: 10 }}>
                    Loading...........
                </div>
            </div>
        );
    }
}