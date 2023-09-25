import { render } from '@testing-library/react';

import GameSort from './game-sort';

describe('GameSort', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GameSort />);
    expect(baseElement).toBeTruthy();
  });
});
