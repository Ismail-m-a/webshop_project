import React from 'react'
import { Navbar, Nav, NavbarBrand } from 'react-bootstrap'
import '../css/SubFooter.css';


export default function SubFooter() {
    
    const date = new Date().getFullYear();
    
    return (
        <>
            <div className='sub-footer'>
                <main>

                    <Navbar bg="dark" data-bs-theme="dark">
                        <NavbarBrand className="mx-auto text-center">
                        <div className='sub-footer'>
                            <p> {date} &copy; || Nordic Classy</p>
                        </div>

                        </NavbarBrand>
                    </Navbar> 
                </main>
            </div>  
        </>
    );
}






// import React from 'react'
// import '../css/Footer.css'
// const SubFooter = () => {
    
//   return (
    
//   )
// }

// export default SubFooter