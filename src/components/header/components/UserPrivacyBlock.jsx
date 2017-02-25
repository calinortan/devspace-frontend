import React, { Component } from 'react';

class UserPrivacyBlock extends Component {
    constructor(props) {
        super(props);
        console.log(props.user);
    }

    getAvatarBox() {
        return <div className={'UserPrivacyBlock-AvatarBox'}>
            <img
                className={'UserPrivacyBlock-AvatarBox-Image'}
                src={this.props.user.avatar}
                alt="your profile picture"
            />
            <span
                className={'UserPrivacyBlock-AvatarBox-Status'}>
            </span>
        </div>
    }

    getUserNameText() {
        return <div className={'UserPrivacyBlock-UserName'}>
            <span className={'UserPrivacyBlock-UserName-Text'}>
                {this.props.user.name}
            </span>
        </div>
    }

    render() {
        return <div className={'UserPrivacyBlock'}>
            {this.getAvatarBox()}
            {this.getUserNameText()}
        </div>;
    }
}

UserPrivacyBlock.propTypes = {
    user: React.PropTypes.object
}
export default UserPrivacyBlock;