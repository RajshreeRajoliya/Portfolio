import React from 'react'


import {BsLinkedin , BsGithub} from 'react-icons/bs'
const SocilaMedia = () => {

  return (
    <div className='app__social'>
        <div>
          <a href="https://www.linkedin.com/in/rajshree-r/" target={'_blank'}  ><BsLinkedin/></a></div>

        <div><a href="https://github.com/RajshreeRajoliya" target={"_blank"}><BsGithub/></a></div>
  
        </div>
  )
}

export default SocilaMedia