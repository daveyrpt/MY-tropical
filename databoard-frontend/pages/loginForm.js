import '../app/globals.css'; 
import Form from 'next/form'

function loginForm(){

    return(
        <>

        <section>
        <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div class="absolute inset-0"></div>
         <div class="relative bg-emerald-600 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
            <div>
                <Form action='POST'>
                    <div>
                        <label className='font-bold text-2xl'>Login Form</label>
                    </div>

                    <div className='mt-10'>
                        <table>
                            <tbody>
                            <tr>
                                <td>
                                  <label className='font-bold mr-5'>Username</label>  
                                </td>
                                <td>
                                  <input className='rounded-md' placeholder='username' name='username'/>  
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label className='font-bold mr-5 mt-2'>Password</label>
                                </td>
                                <td>
                                    <input className='rounded-md mt-2' placeholder='password' name='password'/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <button className='bg-teal-300 px-4 rounded-md mt-6' type='submit'>Submit</button>
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