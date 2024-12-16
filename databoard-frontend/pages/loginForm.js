import '../app/globals.css'; 
import Form from 'next/form'

function loginForm(){

    return(
        <>

        <section>
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div className="absolute inset-0"></div>
         <div className="relative px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
            <div>
                <Form action='POST'>
                    <div>
                        <label className='font-bold text-4xl text-center'>Login</label>
                    </div>

                    <div className='mt-10'>
                        <table>
                            <tbody>
                            <tr>
                                <td>
                                  <label>Username</label>  
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <input className='rounded-sm h-[2rem] w-[20rem] mb-6 border-0 border-b-2 border-gray-400 focus:border-blue-500 outline-none' placeholder='username' name='username'/>  
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <label className='pt-5'>Password</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input className='rounded-sm h-[2rem] w-[20rem] mb-6 border-0 border-b-2 border-gray-400 focus:border-blue-500 outline-none' placeholder='password' name='password'/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <button className='bg-emerald-600 rounded-xl mt-6 h-[2rem] w-[20rem]' type='submit'>Submit</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        
                    </div>
                

                </Form>
            </div>
        </div>
        </div>
        </section>
        </>
    );
};

export default loginForm;