class UserStorage {
  setUser(user) {
    window.localStorage.setItem("user", JSON.stringify(user));
  }

  getItem(itemName) {
    const user = this._getUserFromStorage();
    return user ? user[itemName] : null;
  }

  getUser() {
    const user = this._getUserFromStorage();
    if (user) {
      const {token, ...userFields} = user;
      return userFields;
    }
  }

  clearUser() {
    window.localStorage.removeItem("user");
  }

  _getUserFromStorage() {
    return JSON.parse(window.localStorage.getItem("user"));
  }
}

export default new UserStorage();
