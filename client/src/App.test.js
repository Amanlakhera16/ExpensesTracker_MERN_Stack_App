import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';

test('renders the dashboard title', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(screen.getByText(/expense tracking that feels fast/i)).toBeInTheDocument();
});
