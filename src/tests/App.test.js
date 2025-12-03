import {screen, render, waitFor} from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "../App.jsx";


test('should return 6 product component', async () => {

    render(<App/>);
    const headings = await screen.findAllByRole("heading");

    expect(headings).toHaveLength(6);

});
