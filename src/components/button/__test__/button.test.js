import React from 'react'
import ReactDOM from 'react-dom'
import { render, cleanup } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";
import renderer from 'react-test-renderer';

import Button from '../button';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button></Button>, div);
});

it('renders button correctly', () => {
  const { getByTestId } = render(<Button label="Click me"></Button>);
  expect(getByTestId('button')).toHaveTextContent('Click me');

});

it('renders button correctly', () => {
  const { getByTestId } = render(<Button label="me"></Button>);
  expect(getByTestId('button')).toHaveTextContent('me');

});

it('matches snapshot 1', () => {
  const tree = renderer.create(<Button label="click me"></Button>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('matches snapshot 2', () => {
  const tree = renderer.create(<Button label="save"></Button>).toJSON();
  expect(tree).toMatchSnapshot();
});
