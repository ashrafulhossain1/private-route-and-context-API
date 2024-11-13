import React from 'react';

const OrderList = () => {
    return (
        <div className='text-center'>
            <h2 className='text-3xl font-bold mt-4'>Secret Info , Don't Try to seen</h2>
            <p className='font-light text-xl w-9/12 my-5 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis harum numquam nam delectus inventore error veniam fuga aliquam beatae adipisci.</p>
            <h1 className='text-4xl font-light'>WishList And Cart Item</h1>
            <div className='flex justify-evenly mx-auto text-start w-1/2  mt-3 border py-3'>
                <ul>
                    <li>item-1</li>
                    <li>item-2</li>
                    <li>item-3</li>
                    <li>item-4</li>
                </ul>
                <ul>
                    <li>item-1</li>
                    <li>item-2</li>
                    <li>item-3</li>
                    <li>item-4</li>
                </ul>
            </div>
        </div>
    );
};

export default OrderList;