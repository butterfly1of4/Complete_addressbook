  <form onSubmit={this.props.user ? this.editUser : this.createUser}>
          <form>
            <!-- <label for="user_name">User Name: </label> -->
            <input type="text" name="user_name" onChange={this.onChange} value={this.defaultIfEmpty(this.state.user_name)} />
          </form>
          <form>
            <!-- <label for="user_email">User Email: </label> -->
            <input type="text" name="user_email" onChange={this.onChange} value={this.defaultIfEmpty(this.state.user_email)} />
          </form>      <form>
            <!-- <label for="user_password">User Password: </label> -->
            <input type="text" name="user_password" onChange={this.onChange} value={this.defaultIfEmpty(this.state.user_password)} />
          </form>
        </form>
        <button>Send</button>


          <table>
    //     <thead>
    //       <tr>
    //         <th>User Name</th>
    //         <th>Email</th>
    //         <th>Password</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {!users || users.length <= 0 ? (
    //         <tr>
    //           <td colSpan="6" align="center">
    //             <b>Empty Form</b>
    //           </td>
    //         </tr>
    //       ) : (
    //         users.map((user) => (
    //           <tr key={user.pk}>
    //             <td>{user.name}</td>
    //             <td>{user.email}</td>
    //             <td>{user.password}</td>
    //             <td align="center">
    //               <NewUserModal
    //                 create={false}
    //                 user={user}
    //                 resetState={this.props.resetState}
    //               />
    //               &nbsp;&nbsp;
    //               <ConfirmRemovalModal
    //                 pk={user.pk}
    //                 resetState={this.props.resetState}
    //               />
    //             </td>
    //           </tr>
    //         ))
    //       )}
    //     </tbody>
    //   </table>