import TypeWriter from 'typewriter-effect'
import "./Type.scss"
export default function Type(){
    return (
       <>
        <TypeWriter
        
        options={{
            strings:[ 'I am a Full Stack Web Developer based in Indore, M.P','I build things for web.'],
            autoStart: true,
            loop: true,
            deleteSpeed:90,
        }}
        
        />
       </>
      
    )
}