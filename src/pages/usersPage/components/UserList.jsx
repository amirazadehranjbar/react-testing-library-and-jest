function UserList({userList}) {
    console.log("🚀 ~ UserList ~ userList: ", userList);


    return (
        <div className="mt-8 w-1/2">
            {userList.length > 0 && (
                <div className="">
                    <h2 className="text-xl font-bold mb-4">User List</h2>
                    <table>
                        <thead>
                        <tr>
                            <th className="px-2">name</th>
                            <th className="px-2">email</th>
                        </tr>
                        </thead>
                        <tbody data-testid="users">
                        {userList.map((user, index) => (

                            <tr key={index} className="border-1 border-gray-700">
                                {/* Added data-testid="username" to make this element queryable in tests */}
                                <td className="px-2" data-testid="username">{user.name}</td>
                                {/* Added data-testid="useremail" for future email testing */}
                                <td className="px-2" data-testid="useremail">{user.email}</td>
                            </tr>

                        ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default UserList
