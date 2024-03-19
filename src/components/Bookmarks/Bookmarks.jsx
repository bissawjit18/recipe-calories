import React from 'react';

const Bookmarks = () => {
    return (
        <div className='md:w-2/5'>
            <div className='border-2 p-3 w-full'>
                <h2 className='text-center text-2xl font-bold mb-3'>Want to cook: <span>0</span></h2>

                <table className='text-[14px] w-full '>
                    <thead className=''>
                    <tr className=''>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Chicken Casar salad</td>
                        <td>20</td>
                        <td>400</td>
                        <button className='btn btn-success p-1 text-[12px]'>Preparing</button>
                        
                    </tr>
                    </tbody>
                </table>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default Bookmarks;