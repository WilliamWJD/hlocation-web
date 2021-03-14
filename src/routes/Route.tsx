import React from 'react';
import {
  RouteProps as ReactDomRouteProps,
  Route as ReactDomRoute,
  Redirect,
} from 'react-router-dom';

interface RouteProps extends ReactDomRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const user = null;

  return (
    <ReactDomRoute
      {...rest}
      render={({ location }) => (isPrivate === !!user ? (
        <Component />
      ) : (
        <Redirect
          to={{
            pathname: isPrivate ? '/' : '/dashboard',
            state: { from: location },
          }}
        />
      ))}
    />
  );
};

export default Route;