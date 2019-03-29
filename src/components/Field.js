import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
    // hook up a context object to a class component
    static contextType = LanguageContext;

    render() {
        const text = this.context === 'english' ? 'Name' : 'Naam';

        return (
            <div className="ui field">
                <label>{text}</label>
                <input />
            </div>
        )
    }
}

export default Field;