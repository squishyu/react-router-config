(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react-router'), require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react-router', 'react'], factory) :
  (global = global || self, factory(global.ReactRouterConfig = {}, global.ReactRouter, global.React));
}(this, function (exports, reactRouter, React) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;

  function matchRoutes(routes, pathname,
  /*not public API*/
  branch) {
    if (branch === void 0) {
      branch = [];
    }

    routes.some(function (route) {
      var match = route.path ? reactRouter.matchPath(pathname, route) : branch.length ? branch[branch.length - 1].match // use parent match
      : reactRouter.Router.computeRootMatch(pathname); // use default "root" match

      if (match) {
        branch.push({
          route: route,
          match: match
        });

        if (route.routes) {
          matchRoutes(route.routes, pathname, branch);
        }
      }

      return match;
    });
    return branch;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function renderRoutes(routes, extraProps, switchProps) {
    if (extraProps === void 0) {
      extraProps = {};
    }

    if (switchProps === void 0) {
      switchProps = {};
    }

    return routes ? /*#__PURE__*/React.createElement(reactRouter.Switch, switchProps, routes.map(function (route, i) {
      return /*#__PURE__*/React.createElement(reactRouter.Route, {
        key: route.key || i,
        path: route.path,
        exact: route.exact,
        strict: route.strict,
        render: function render(props) {
          return route.render ? route.render(_extends({}, props, extraProps, {
            route: route
          })) : /*#__PURE__*/React.createElement(route.component, _extends({}, props, extraProps, {
            route: route
          }));
        }
      });
    })) : null;
  }

  exports.matchRoutes = matchRoutes;
  exports.renderRoutes = renderRoutes;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=react-router-config.js.map
