import React, { Component } from 'react';

class FooterComponent extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
           
        }
    }
    render() {
        return (
            <div>
                <footer className="footer">
                    <div className="text-muted mt-2">All Rights Reserved 2021 @Sushant-Thombare</div>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;