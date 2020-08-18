import React from 'react';
import {LanguageContext} from '../language.context'

function Banner(props) {
    return (
      <div className="banner">
        <h1 className="Dialog-title">
            {props.title}
        </h1>
        <p className="Dialog-message">
            {props.message}
        </p>
      </div>
    );
}

export default Banner