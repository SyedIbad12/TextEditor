import React from 'react'

export default function Footer(props) {
  return (
    
        
    <div className="text-center p-3" style={{backgroundColor: props.mode === 'light' ? 'lightgray' : '#0586f0', color: props.mode === 'light' ? 'black' : 'white'}}>
     Designed by Syed Ibad Ali   © 2026 Copyright
      
    </div>

    
  )
}
