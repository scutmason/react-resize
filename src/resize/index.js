import React from 'react';

const Resize = (onResize) => (Component) => {
    //
    const listenr = []

    function connect(Res, spec) {
        listenr.push({
            Res,
            spec
        })
        return React.cloneElement(Res, {
            onKeyDown: (e) => console.log(e),
            onClick: (e) => console.log(e)
        })
    }

    return class Resize extends React.Component {
        render() {
            return <Component
                connect={connect}
            />
        }
    }
};

export default Resize;