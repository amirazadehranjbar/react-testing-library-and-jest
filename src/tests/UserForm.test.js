import {render , screen} from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "../pages/usersPage/components/UserForm.jsx";
import {MemoryRouter} from "react-router";
import {jest, describe, test, expect} from '@jest/globals';

describe('user form', () => {

    test('should show 2 input component', () => {
        // Wrap with MemoryRouter to provide router context for <Form> component
        render(
            <MemoryRouter>
                <UserForm/>
            </MemoryRouter>
        );

        const inputs = screen.getAllByRole("textbox");


        expect(inputs).toHaveLength(2);



    });

    test('should show button component', () => {
        // Wrap with MemoryRouter to provide router context for <Form> component
        render(
            <MemoryRouter>
                <UserForm/>
            </MemoryRouter>
        );

        const buttons = screen.getAllByRole("button");

        expect(buttons).toBeInTheDocument;


    });

    test("its calls setUserListProp when the form is submitted" , async ()=>{

        const mock = jest.fn();
        // try to render my components
        render(<UserForm setUserListProp={mock}/>);

        //find the two inputs
        const nameInput = screen.getByRole("textbox" , {name:/enter name/i});
        const emailInput = screen.getByRole("textbox" , {name:/enter email/i})

        // Simulate typing in a name
        await user.click(nameInput);
        await user.keyboard("amir")

        // Simulate typing in a email
        await user.click(emailInput);
        await user.keyboard("amir@gmail.com")

        // Find the button
        const button = screen.getByRole("button");

        // Simulate clicking the submit button
        await user.click(button);

        // Assertation to make sure 'setUserListProp' gets called with name/email
        expect(mock).toHaveBeenCalled();
        expect(mock).toHaveBeenCalledWith({name:"amir" , email:"amir@gmail.com"})

    })


});