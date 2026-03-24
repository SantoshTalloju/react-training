import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe("Contact Us UI", () => {
    test("Should load contact us component", () => {
        render(<Contact/>);
    
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    })
    
    test("Should load button inside Contact component", () => {
        render(<Contact/>);
    
        // const button = screen.getByRole("button");
        const button = screen.getByText("Submit");
    
        expect(button).toBeInTheDocument();
    })
    
    test("Should load textinput inside Contact component", () => {
        render(<Contact/>);
    
        const inputName = screen.getByPlaceholderText("name");
    
        expect(inputName).toBeInTheDocument();
    })
    
    it("Should load 2 textinput inside Contact component", () => {
        render(<Contact/>);
    
        const inputboxes = screen.getAllByRole("textbox");
    
        expect(inputboxes.length).toBe(2);
    })
})
