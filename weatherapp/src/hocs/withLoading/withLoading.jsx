import React from "react";

const withLoading = WrappedComponent => {
    const Component = ({
        isLoading, ...props
    }) => {
        return (
            <div className="hocLoading">
                {
                    !isLoading
                    ? <WrappedComponent {...props} />
                    : <div>Loading...</div>
                }
            </div>
        );
    };

    Component.defaultProps = {
        isLoading: false
    };

    Component.propTypes = {
        isLoading: Boolean
    }

    return (
        <div>hocs</div>
    )
}

export default withLoading;