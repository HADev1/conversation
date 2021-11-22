import React from "react";
import { Link } from "react-router-dom";
const LoginScreen = () => {
  return (
    <>
      <main>
        <div class="layout">
          {/* <!-- Start of Sign In --> */}
          <div class="main order-md-1">
            <div class="start">
              <div class="container">
                <div class="col-md-12">
                  <div class="content">
                    <h1>Sign in to Swipe</h1>
                    <div class="third-party">
                      <button class="btn item bg-blue">
                        <i class="material-icons">pages</i>
                      </button>
                      <button class="btn item bg-teal">
                        <i class="material-icons">party_mode</i>
                      </button>
                      <button class="btn item bg-purple">
                        <i class="material-icons">whatshot</i>
                      </button>
                    </div>
                    <p>or use your email account:</p>
                    <form>
                      <div class="form-group">
                        <input
                          type="email"
                          id="inputEmail"
                          class="form-control"
                          placeholder="Email Address"
                          required
                        />
                        <button class="btn icon">
                          <i class="material-icons">mail_outline</i>
                        </button>
                      </div>
                      <div class="form-group">
                        <input
                          type="password"
                          id="inputPassword"
                          class="form-control"
                          placeholder="Password"
                          required
                        />
                        <button class="btn icon">
                          <i class="material-icons">lock_outline</i>
                        </button>
                      </div>

                      {/* <button
                        type="submit"
                        class="btn button"
                        formaction="index-2.html"
                      >
                        Sign In
                      </button> */}
                      <Link
                        to="Home"
                        type="submit"
                        class="btn button"
                        formaction="index-2.html"
                      >
                        Sign In
                      </Link>
                      <div class="callout">
                        <span>
                          Don't have account? <Link to="/">Create Account</Link>
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End of Sign In -->
				<!-- Start of Sidebar --> */}
          <div class="aside order-md-2">
            <div class="container">
              <div class="col-md-12">
                <div class="preference">
                  <h2>Hello, Friend!</h2>
                  <p>
                    Enter your personal details and start your journey with
                    Swipe today.
                  </p>
                  <Link to="/" class="btn button">
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End of Sidebar --> */}
        {/* </div> <!-- Layout --> */}
      </main>
    </>
  );
};

export default LoginScreen;