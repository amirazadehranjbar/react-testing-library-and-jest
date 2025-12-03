import UserForm from "./components/UserForm.jsx";

import UserList from "./components/UserList.jsx";
import {useState} from "react"; // Added: Import useState hook to manage user data state in parent component

function UsersPage() {

    const [userList , setUserList] = useState([]);


    const handleNewUser = (user)=>{
        setUserList([...userList , user]);
        console.log("🚀 ~ UsersPage ~ userList: ", userList);

    }

    return (
        <div className="flex flex-col justify-center items-center">
            <UserForm setUserListProp={handleNewUser}/>
            <UserList userList={userList}/>
        </div>
    )
}

export default UsersPage
