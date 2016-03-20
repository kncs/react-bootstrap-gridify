# React Bootstrap Gridify(Draft)

Because card-based design is emerging, I created a component to help me (and others) to manage that trend. Gridify is a really simple React component for displaying a list of whatever you want into a bootstrap grid.

# Code Example

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

import Gridify from 'react-bootstrap-gridify';


class App extends React.Component {

  buidComponentsList() {
   return [
     ...
   ];
  }

  render() {
    return (
      <div className="container">
        <Gridify columns={4} components={this.buidComponentsList()}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
```
