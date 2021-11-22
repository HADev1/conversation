import React from "react";
import "./signup.css";

const ProviderDetail = () => {
  return (
    <>
      <main>
        <div class="layout">
          <div class="main order-md-2">
            <div class="start">
              <div class="container">
                <div class="col-md-12">
                  <div class="content">
                    <h1>Select plan</h1>
                    <form class="signup provider_fields">
                      <div class="provider_plan_fields">
                        {/* <label>Select Plan:</label> */}
                        <div class="greate_what_job_checkbox">
                          <label>
                            <input type="radio" name="priceplan" />
                            <span>Monthly</span>
                          </label>
                          <label>
                            <input type="radio" name="priceplan" />
                            <span>Yearly</span>
                          </label>
                        </div>
                      </div>
                      <div class="select_price">
                        <input
                          class="form-control"
                          type="number"
                          placeholder="Type Price"
                        />
                        <i class="fas fa-dollar-sign"></i>
                      </div>

                      <button
                        type="submit"
                        class="btn button"
                        formaction="index-2.html"
                      >
                        Sign Up
                      </button>

                      <div class="callout">
                        {/* <span>
                          Already a member? <a href="/Login">Sign In</a>
                        </span> */}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProviderDetail;
