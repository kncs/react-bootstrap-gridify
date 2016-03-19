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

  calculBoostrapColSize() {
    let size = 1;
    if(acceptedColNumber.indexOf(this.props.columns) !== -1) {
      size = maxBootstrapCols/this.props.columns;
    } else {
      if(this.props.columns > maxBootstrapCols) {
        size = 1;
      } else {
        size = 12;
      }
    }
    return size;
  }

  render() {
    let self = this;
    let bootstrapColSize = this.calculBoostrapColSize();
    let colSize = this.props.colSize ? this.props.colSize : 'sm';
    let complementClass = this.props.className ? ' ' + this.props.className : '';
    let className = 'col-'+ colSize +'-' + bootstrapColSize + complementClass;
    return (
      <div>
      {
        this.props.components
        .reduce(function(prec, current, index){
          let component = (
            <div className={className} key={'Col'+index} >{current}</div>
          );
          if(index%self.props.columns === 0) {
            prec.push([component]);
          } else {
            prec[Math.floor(index/self.props.columns)].push(component);
          }
          return prec;
        }, [])
        .map(function(row) {
          return <Row key={'Row'+uniqueIndex++}>{row}</Row>;
        })
      }
      </div>
    );
  }
}
