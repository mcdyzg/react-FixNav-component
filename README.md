# React-FixNav-Component 

##  
this component is a Nav component that is responsive

## how to run demo ##

```
npm install
```
```
npm start
```
check on localhost:3001

## how to use ##

```
var FixNav = require('react-FixNav-component');
```
```
var Header = React.createClass({
  render: function() {
    return (
      <FixNav
		height=65   //nessesary   the height of nav
		offset=500  //nessesary   when window.scrollTop>offset,the component hide
		id='fixnav'
		className='fixnav'>
      </FixNav>
    );
  }
});

React.render(<Header>Hello</Header>, document.body);
```

## how to build ##

```
npm run build
```