import React from 'react';
// import { shallow } from 'enzyme';
import { App } from '../App';
import toJson from 'enzyme-to-json';

import { createShallow } from 'material-ui/test-utils';

const setup = propOverrides => {
  let shallow = createShallow();

  const props = {
    location: {
      pathname: '/'
    },
    authenticated: false,
    history: {
      push: jest.fn()
    },
    classes: {},
    ...propOverrides
  };

  const wrapper = shallow(<App {...props} />);

  return { props, wrapper };
};

describe('App Container', () => {
  it('renders without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  describe('when authenticated', () => {
    it('renders without crashing', () => {
      const { wrapper } = setup({ authenticated: true });
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('when not authenticated', () => {
    it('redirects', () => {
      const { props, wrapper } = setup({ authenticated: false });
      expect(wrapper).toBeDefined();
      expect(props.history.push).toHaveBeenCalled();
    });
  });
});
