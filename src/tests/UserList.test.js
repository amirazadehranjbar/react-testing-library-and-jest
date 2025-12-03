import {getByRole, render, screen, within} from "@testing-library/react";
import {jest, describe, test, expect } from '@jest/globals';
import UserList from "../pages/usersPage/components/UserList.jsx";

function renderComponent(){
    const users = [
        {name: "amir", email: "amir@gmail.com"},
        {name: "shadi", email: "shadi@gmail.com"},
    ];

    render(<UserList userList={users}/>);

    return {
        users
    };
}

describe("user list", () => {

    test('should render one row for per user', () => {

        renderComponent();

        // method 1
        const rows = within(screen.getByTestId("users")).getAllByRole("row")

        //method 2
        //const rows = container.querySelectorAll("tbody tr");

        expect(rows).toHaveLength(2);


    });

    test('should render email and name of each user', () => {

     const {users} = renderComponent()

        for (let user of users) {

            const name = screen.getByRole("cell" , {name: user.name});
            const email = screen.getByRole("cell" , {name : user.email});

            expect(name).toBeInTheDocument;
            expect(email).toBeInTheDocument;

        }

    })


})
