import { Link } from "react-router-dom";
export function Register() {
    return (
        <>

        <h1 className='title'>Register</h1>

        <div className="row">
            <div className="col"></div>
            <div className="col">
            <div className='form'>

            <div className='mb-3'>
                <label htmlFor=''>Client Name</label>
                <input
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label htmlFor=''>Team Name</label>
                <input
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label htmlFor=''>Team ID</label>
                <input
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label htmlFor=''>Mobile Number</label>
                <input
                    type='number'
                    placeholder='xxxxxxxxxx'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label htmlFor=''>Email</label>
                <input
                    type='email'
                    placeholder='abc@gmail.com'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label htmlFor=''>Password</label>
                <input
                    type='password'
                    placeholder='********'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label htmlFor=''>Confirm Password</label>
                <input
                    type='password'
                    placeholder='********'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <div>Already have an account ? <Link to='/login'>Login Here</Link></div>
                <button className="btn btn-primary mt-2">Register</button>
            </div>
        </div>

            </div>
            <div className="col"></div>                      
        </div>

       
    </>
    )
}

export default Register