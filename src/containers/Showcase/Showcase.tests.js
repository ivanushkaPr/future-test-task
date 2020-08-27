import React from 'react';
import ReactDOM from 'react-dom';
import Showcase from './Showcase';
import renderer from 'react-test-renderer';

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Showcase/>, div);
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<Showcase/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });






