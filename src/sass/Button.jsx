import React from 'react';
import './Button.scss';
import classNames from 'classnames';

function Button({ children, size, color, outline, fullWidth, ...rest }) {

    return (
        <button
            {...rest}
            className={classNames('Button', size, color, { outline, fullWidth })}>{children}</button>

    )
}

Button.defaultProps = {
    size: 'medium',
    color: 'blue'
}

export default Button;
