import React from 'react';
import Marquee from "react-fast-marquee";
import { Link, NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className=''>
            <h1 className='text-3xl font-light text-center'>This is Home Page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maiores modi nobis dolor minus consequuntur id mollitia repellendus dolorem tempora, similique, officiis nemo dicta velit harum quo? Doloremque omnis assumenda molestias maxime modi, totam veritatis provident quaerat voluptatum sunt possimus alias aliquam iure impedit labore eius. Voluptas nisi unde nemo quo veritatis doloribus quos id dolorum, cum quisquam? Atque accusamus, perspiciatis fugiat alias ab, sequi voluptas consequuntur vero consectetur non nisi! Reiciendis sapiente deserunt aperiam nihil non debitis accusantium delectus, consectetur culpa tenetur harum totam, asperiores cupiditate, ex eius quos numquam nulla ullam? Quis sequi impedit architecto quo, esse autem.</p>
            {/* <button className=' btn'>
                breaking news
            </button> */}
            {/* <marquee className='text-center font-bold text-3xl'>This is Home Page</marquee> */}
            {/* <Marquee speed={100} pauseOnHover={true}>

                <Link className='mr-12 text-red-500' to='/login'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, sunt?</Link>
                <Link className='mr-12' to='/signUp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deleniti repellat sed officiis perferendis at atque, commodi temporibus, aperiam consequatur omnis, quos doloribus minima? Corrupti, veritatis? Impedit quidem debitis, aspernatur ab tenetur, labore fuga modi aliquam, exercitationem porro sequi hic totam cumque odit molestias maiores eveniet odio reprehenderit ex excepturi.</Link>
            </Marquee>
           <p>login with user</p>
           <NavLink> profile news user</NavLink> */}


        </div>
    );
};

export default Home;