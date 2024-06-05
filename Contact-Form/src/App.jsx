import "./App.scss";

function App() {
    return (
        <>
            <div className="container">
                <div className="form">
                    <form action="">
                        <h2 className="heading">Contact Us</h2>
                        <div className="full_name">
                            <div className="first">
                                <label htmlFor="">First Name <span style={{color:"green"}}>*</span></label>
                                <input type="text" />
                            </div>
                            <div className="last">
                                <label htmlFor="">Last Name <span style={{color:"green"}}>*</span></label>
                                <input type="text" />
                            </div>
                        </div>

                        <label htmlFor="">Email Address <span style={{color:"green"}}>*</span></label>
                        <input type="email" />
                        <label htmlFor="">Query Type <span style={{color:"green"}}>*</span></label>
                        <div className="radio">
                            <div className="radio1">
                                <input type="radio" />
                                <span> General Enquiry</span>
                            </div>
                            <div className="radio2">
                                <input type="radio" />
                                <span> Support Request</span>
                            </div>
                        </div>
                        <label htmlFor="">Message <span style={{color:"green"}}>*</span></label>
                        <input className="message_box" type="text" />
                        <div className="check">
                          <input type="checkbox" />
                          <span>I consent to being contacted by the team <span style={{color:"green"}}>*</span></span>
                        </div>

                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default App;
