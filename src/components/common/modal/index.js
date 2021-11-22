import Avatar from "../avatar";

const img =
  "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";

export default function Modal({ id, title, component: Component }) {
  return (
    <div
      className="modal fade"
      id={id ?? "show_profile_data"}
      tabindex="-1"
      role="dialog"
      aria-labelledby="show_profile_dataLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              <Avatar img={img} />
              <span style={{ marginLeft: "10px" }}>{title ?? "John Snow"}</span>
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">{Component && Component}</div>
          {/* <div className="modal-footer">
            <button type="button" className="btn">
              Save changes
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
