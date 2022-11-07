import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full'> 

            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4
                border-gray-500'>
                    About
                    </p>
            </div>
            <p className='text-xl mt-20'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum harum aperiam illo 
                ipsa consectetur minima rem temporibus magnam quod, error, suscipit quaerat earum eligendi 
                non nisi nulla pariatur culpa voluptatibus?
                excepturi eveniet atque sunt debitis dolore porro! Laborum fugit harum, ad tenetur in pariatur quas a eum similique 
                nemo maiores sit repellendus rem!
            </p>
            <br/>
            <p className='text-xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusamus eum unde recusandae tenetur 
              inventore minus eaque? Perferendis neque temporibus fugit, ipsa necessitatibus, aliquid dicta amet doloribus
              excepturi eveniet atque sunt debitis dolore porro! Laborum fugit harum, ad tenetur in pariatur quas a eum similique 
              nemo maiores sit repellendus rem!
            </p>
        </div>
    </div>
  )
}

export default About