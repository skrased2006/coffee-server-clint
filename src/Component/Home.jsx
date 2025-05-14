import React from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const coffeeData=useLoaderData();
    console.log(coffeeData);
    return (
        <div>
            <div  className='grid grid-cols-2'>
                {
                    coffeeData.map(coffee=><CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
                }
            </div>
            
        </div>
    );
};

export default Home;