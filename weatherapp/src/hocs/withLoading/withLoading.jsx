import React, {useState} from "react";

const withLoading = WrappedComponent => {
    return props => {
      const [loading, setLoading] = useState(true);
      return (
        <>
          {loading}
          <WrappedComponent
            setLoading={setLoading}
            {...props}
          />
        </>
      );
    };
  };

export default withLoading;