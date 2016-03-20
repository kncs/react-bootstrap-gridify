'use strict';

/**
 * Module dependencies
 */

import React from 'react';

/**
 * Init variables
 */

const maxBootstrapCols = 12;
let uniqueIndex = 0;
let acceptedColNumber = [];
for(let i=0; i<=maxBootstrapCols; i++) {
  acceptedColNumber.push(i);
}

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

  calculBoostrapColProperties() {
    let size = 1;
    let offset = 0;
    if(acceptedColNumber.indexOf(this.props.columns) !== -1) {
      size = Math.floor(maxBootstrapCols/this.props.columns);
      offset = Math.floor((maxBootstrapCols%this.props.columns)/2);
    } else {
      if(this.props.columns > maxBootstrapCols) {
        size = 1;
      } else {
        size = 12;
      }
    }
    return {
      size :size,
      offset: offset
    };
  }

  render() {
    let self = this;
    let colProperties = this.calculBoostrapColProperties();
    let colSize = this.props.colSize ? this.props.colSize : 'sm';
    let complementClass = this.props.className ? ' ' + this.props.className : '';
    let className ='col-'+colSize +'-'+colProperties.size+complementClass;
    let classNameWithOffset ='col-'+colSize +'-offset-'+colProperties.offset+' '+className;
    return (
      <div>
      {
        this.props.components
        .reduce(function(value, current, index){
          if(index%self.props.columns === 0) {
            value.push([
              <div className={classNameWithOffset} key={'Col'+index} >{current}</div>
            ]);
          } else {
            value[Math.floor(index/self.props.columns)].push(
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
