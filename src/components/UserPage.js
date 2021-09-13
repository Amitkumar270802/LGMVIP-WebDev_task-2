import React from 'react'

const Users = ({loading,users}) => {
    return loading ? (   
          <div id="main">
            <img src="https://wallpapercave.com/wp/wp4923981.jpg" alt="load" className="front_page"/>
          </div>
        ) : 
        (
          <div id="main">
    
          {users.map(user =>
                      <div className="box_a">            
                      <div className="box_b">
                          <img src={user.avatar} alt={user.User_pic} className="User_pic"></img>
                          <h1 className="name">{user.first_name} {user.last_name}</h1>
                          <p className="email">{user.email}</p>
                          <p>User ID: {user.id}</p>
                        </div>
                       </div>
            )
          }
          </div>
        )
}
export default Users;