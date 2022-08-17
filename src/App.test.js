import { render, screen, configure } from '@testing-library/react';
import App from './App';
import FormContainer from './components/FormContainer';

describe('renders learn react link', () => {
  
  test("componenet should be in the document", () => {
    render(<App />);
    const form = screen.getByTestId('form');
    expect(form).toBeInTheDocument();
  })
});
