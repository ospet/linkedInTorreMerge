import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Profile from './profile/profileContainer';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={ this.props.store }>
        <div className="App">
          <header className="App-header">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKkAAAAsCAYAAAAeqJhEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU3Mjk5OEY5NTJDODExRThBNUI1QTAwRkFFRTFFNEU2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU3Mjk5OEZBNTJDODExRThBNUI1QTAwRkFFRTFFNEU2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTcyOTk4Rjc1MkM4MTFFOEE1QjVBMDBGQUVFMUU0RTYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTcyOTk4Rjg1MkM4MTFFOEE1QjVBMDBGQUVFMUU0RTYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7t1xymAAAUnElEQVR42uxdCZQc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" className="App-logo" alt="logo" />
            <h1 className="App-title">LinkedIn Torre Bio merge</h1>
          </header>
          <Profile/>
        </div>
      </Provider>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;