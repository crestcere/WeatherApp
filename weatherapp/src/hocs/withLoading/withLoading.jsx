import React, { useState } from "react";

// function withLoading(Component) {
const withLoading = Component => {
    // const [Loading, setLoading] = useState(true);
    return props => {
        const [loading, setLoading] = useState(false);
        // if (!loading) return <Component loading={loading} {...props} />
        // return (
        //     <div>Loading...</div>
        // );
        if (loading) { return(
            <div>Loading...</div>
        ) }
        else {
            return(
                <Component loading = {setLoading} {...props} />
            )
        }
    };
};

export default withLoading;