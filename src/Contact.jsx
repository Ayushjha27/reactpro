import React, { useState } from 'react'

const Contact = () => {

    const [data, setData] = useState({
        fullname: '',
        phone: '',
        email: '',
        msg: '',
    })

    const inputevent = (event) => {
        const { name, value } = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    }

    const formsubmit = (e) => {
        e.preventDefault();
        alert(` My name is ${data.fullname}. My mobile number is ${data.phone} 
        My email is ${data.email} . And my message is ${data.msg}  `)
    }


    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>

            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">

                        <form onSubmit={formsubmit}>
                            <div class="mb-3">
                                <label class="form-label">Fullname</label>
                                <input type="text" class="form-control" name="fullname" value={data.fullname} onChange={inputevent} autoComplete="off" placeholder="Enter your name" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Phone nubmer</label>
                                <input type="number" class="form-control" name="phone" value={data.phone} onChange={inputevent} autoComplete="off" placeholder="Mobile number" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Email address</label>
                                <input type="email" class="form-control" name="email" value={data.email} onChange={inputevent} autoComplete="off" placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Message</label>
                                <textarea class="form-control" rows="3"
                                    name="msg" value={data.msg} onChange={inputevent} autoComplete="off"></textarea>
                            </div>
                            {/* Validation */}


                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
