import React from 'react';
import {LanguageContext} from '../language.context'

function Profile(props) {
    return (
        <LanguageContext.Consumer>
            {({language}) => (
                <div className="profile">
                    <img className = "image" src = {props.imageURL} />
                    <h1 className="profile-name">
                        {props.name}
                    </h1>
                    <p className="profile-summary">
                        {language === "english" ? props.summary : props.frenchSummary}
                    </p>
                    <h3 className="profile-email">
                        {props.email}
                    </h3>
                </div>
            )}
        </LanguageContext.Consumer>
    );
}

export default Profile