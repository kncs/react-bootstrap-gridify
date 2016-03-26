# React Bootstrap Gridify

Because card-based design is emerging, I created a component to help me (and others) to manage that trend. Gridify is a really simple React component for displaying a list of whatever you want into a bootstrap grid.

# Code Example

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

import Gridify from 'react-bootstrap-gridify';


class App extends React.Component {

  buidComponentsList() {
   return [
     component1,
     component2,
     ...
   ];
  }

  render() {
    return (
      <div className="container">
        <Gridify columns={{xs:2, sm:4, md:8, lg:12}} components={this.buidComponentsList()}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
```

# Motivation

[Bootstrap](http://getbootstrap.com/) is certainly the most popular of the huge number of CSS front end framework and I really like to work with it. The Bootstrap grid system is powerfull and allow you to layout complexes applications. However, in most of cases I think bootstrap grid is verbose and that why I decided to create this [React](https://facebook.github.io/react/index.html) component.

# Installation

```bash
$ npm install --save react-bootstrap-gridify
```

# API Reference

## Options

The following otions are provided :

| Name          | Description                                          | Default   |
|:--------------|:-----------------------------------------------------|:---------:|
| components    | Array of compenents you want to display              | []        |
| columns       | Object representing number of columns wanted by type | {xs:1}    |

# License

The MIT License (MIT)

Copyright (c) 2015 Kevin Clarens

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
