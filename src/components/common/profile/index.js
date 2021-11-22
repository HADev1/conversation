export default function Profile({ isEditMode = false, user }) {
  return (
    <>
      <UserProfile isEditMode={isEditMode} />
      <hr />
      {/* <div className="spinner-border spinner-border-sm"></div> */}
      <ProviderDetail isEditMode={isEditMode} />
    </>
  );
}

function UserProfile({ isEditMode = false }) {
  return (
    <div>
      <h4>User Profile</h4>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          className="form-control"
          // value="Jazim Abbas"
          disabled={!isEditMode}
        />
      </div>
      {isEditMode && <button className="btn">Save User Profile</button>}
    </div>
  );
}

function ProviderDetail({ isEditMode = false }) {
  return (
    <div>
      <h4>Provider Detail</h4>
      <div className="form-group">
        <label htmlFor="regNo">Reg Number</label>
        <input
          type="text"
          id="regNo"
          className="form-control"
          // value="jazim@gmail.com"
          disabled={!isEditMode}
        />
      </div>
      <div className="form-group">
        <label htmlFor="monthlyPrice">Monthly Price in $</label>
        <input
          type="number"
          id="monthlyPrice"
          className="form-control"
          // value="20"
          disabled={!isEditMode}
        />
      </div>
      <div className="form-group">
        <label htmlFor="yearlyPrice">Yearly Price in $</label>
        <input
          type="number"
          id="yearlyPrice"
          className="form-control"
          // value="150"
          disabled={!isEditMode}
        />
      </div>
      {isEditMode && <button className="btn">Save Provider Detail</button>}
    </div>
  );
}
