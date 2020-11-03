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