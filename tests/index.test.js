import React from 'react'
import { shallow } from 'enzyme'

import App from '../client/components/App'
import Nav from '../client/components/Nav'

test('<App /> returns main header text', () => {
  const expected = 'Welcome to BEATLE TUNES!!<Nav /><Route /><Route /><Route />'
  const wrapper = shallow(<App />)
  expect(wrapper.text()).toBe(expected)
})

test('<Nav /> returns nav header', () => {
  const expected = 'Genre<Genre /><Genre /><Genre /><Genre />'
  const wrapper = shallow(<Nav />)
  expect(wrapper.text()).toBe(expected)
})
