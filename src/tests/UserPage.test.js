import {getByRole, render, screen, within, waitFor} from "@testing-library/react";
import {jest, describe, test, expect } from '@jest/globals';
import '@testing-library/jest-dom'; // ADD THIS
import UsersPage from "../pages/usersPage/UsersPage.jsx";
import user from "@testing-library/user-event";

describe("user page" , ()=>{

    test('should ', async () => {

        render(<UsersPage/>);

        const nameInput = screen.getByRole("textbox" , {name:/Enter name/i});
        const emailInput = screen.getByRole("textbox" , {name:/Enter email/i});
        const button = screen.getByRole("button");

        await user.click(nameInput);
        await user.keyboard("amir");

        await user.click(emailInput);
        await user.keyboard("amir@gmail.com");

        await user.click(button);

        // Wait for the username to appear in the UserList table (not the input field)
        // This queries the <td> element with data-testid="username" in UserList component
        const userName = await screen.findByTestId("username");
        const userEmail = await screen.findByTestId("useremail");
        
        // Extract the text content from the table cell
        const nameText = userName.textContent;
        const emailText = userEmail.textContent;


        console.log("🚀 ~ nameText: ", nameText);
        console.log("🚀 ~  ~ emailText: ", emailText);

        // Assert that the displayed username in the table matches what we typed
        expect(userName).toHaveTextContent("amir");
        expect(userEmail).toHaveTextContent("amir@gmail.com");
    })
})