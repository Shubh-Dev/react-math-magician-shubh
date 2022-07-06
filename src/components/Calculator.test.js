import { render, screen } from "@testing-library/react"
import Calculator from "./Calculator"

test('render title as a text', () => {
    render (<Calculator />);
    const title = screen.getByText(/Let's do some Math!/i);
    expect(title).toBeInTheDocument();
});