'use strict';

/**
 * Module dependencies
 */

import React  from 'react';
import constantsBootstrap from './constants-bootstrap';

/**
 * Init variables
 */

let uniqueIndex = 0;


/**
 * Define pure function Row
 */

function Row(props) {
  return (
    <div className="row">
      {props.children}
    </div>
  );
}


/**
 * Define and Expose Gridify react component
 */

export default class Gridify extends React.Component {
  constructor() {
    super();
    this.state = {windowWidth: window.innerWidth};
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize());
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize());
  }

  handleResize() {
    let self = this;
    return function () {
      self.setState({windowWidth: window.innerWidth});
    };
  }

  getColsProperties() {
    let number = 1, type = 'xs', offset = 0, size = 12;

    if (this.props.columns) {
      if(this.state.windowWidth < constantsBootstrap.queries.sm) {
        type = 'xs';
        number = this.props.columns.xs || 1;
      } else if (this.state.windowWidth < constantsBootstrap.queries.md) {
        type = 'sm';
        number = this.props.columns.sm
          || this.props.columns.xs
          || 1;

      } else if (this.state.windowWidth < constantsBootstrap.queries.lg) {
        type = 'md';
        number = this.props.columns.md
          || this.props.columns.sm
          || this.props.columns.xs
          || 1;

      } else {
        type = 'lg';
        number = this.props.columns.lg
          || this.props.columns.md
          || this.props.columns.sm
          || this.props.columns.xs
          || 1;
      }
    }

    if(number > 0 || number < constantsBootstrap.maxCol) {
      size = Math.floor(constantsBootstrap.maxCol/number);
      offset = Math.floor((constantsBootstrap.maxCol%number)/2);
    }

    return {
      number : number,
      size : size,
      offset: offset,
      type :type
    };
  }

  render() {
    let cols = this.getColsProperties();
    let complementClass = this.props.className ? this.props.className : '';
    let className ='col-' + cols.type + '-' + cols.size + ' ' + complementClass;
    let classNameWithOffset ='col-' + cols.type + '-offset-' + cols.offset + ' '+ className;
    return (
      <div>
      {
        this.props.components
        .reduce(function(value, current, index){
          if(index%cols.number === 0) {
            value.push([
              <div className={classNameWithOffset} key={'Col'+index} >{current}</div>
            ]);
          } else {
            value[Math.floor((index)/cols.number)].push(
              <div className={className} key={'Col'+index} >{current}</div>
            );
          }
          return value;
        }, [])
        .map(function(row) {
          return <Row key={'Row'+uniqueIndex++}>{row}</Row>;
        })
      }
      </div>
    );
  }
}
