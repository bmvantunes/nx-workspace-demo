import { render } from '@testing-library/react';

import MyLibrary1 from './my-library-1';

describe('MyLibrary1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyLibrary1 />);
    expect(baseElement).toBeTruthy();
  });
});
