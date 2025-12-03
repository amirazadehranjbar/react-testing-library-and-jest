import {useState} from "react";

function UserForm({setUserListProp}) {

    const [newUser, setNewUser] = useState({name: "", email: ""})


    const handleOnSubmit = (e) => {
        e.preventDefault(); // Prevent form from refreshing the page

        console.log("🚀 ~ UserForm ~ new user: ", newUser);

        setUserListProp(newUser); // Pass only the new user, not the entire list

        // Reset form after submission
        setNewUser({name: "", email: ""});

    }

    return (
        <form className="space-y-5 mt-5 w-1/2" onSubmit={handleOnSubmit}>
            <div className="flex-col flex">
                <label htmlFor="name">Enter name</label>
                {/* Changed data-testid from "username" to "name-input" to avoid conflict with the username display element in UserList */}
                <input 
                    placeholder="name" 
                    className="input"
                    value={newUser.name}
                    id="name"
                    data-testid="name-input"
                    onChange={(e) => {
                        setNewUser({...newUser, name: e.target.value})
                    }} 

                />
            </div>

            <div className="flex-col flex">
                <label htmlFor="email">Enter email</label>
                {/* Changed data-testid from "useremail" to "email-input" for consistency with name-input naming convention */}
                <input 
                    placeholder="email" 
                    className="input"
                    value={newUser.email}
                    id="email"
                    data-testid="email-input"
                    onChange={(e) => {
                        setNewUser({...newUser, email: e.target.value})
                    }}

                />
            </div>

            <button className="button w-full" type="submit">submit</button>
        </form>
    )
}

export default UserForm
