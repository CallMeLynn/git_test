import React from 'react'

export default function Contact() {
  return (
    <div className='container'>
      <div className='personalInfo mx-10'>
        <div className='info flex gap-10'>
          <img className="imageDetail sm:max-h-screen" src="assets/Avatar.jpg" alt="Avatar" />
          <div className="film-detail">
            <p className="text-left text-2xl mx-2 my-4 uppercase font-semibold">About me</p>
            <p className="text-left text-xl m-2">My name is Truc Quynh, I'm currently studying Software Technology at FPT University.</p>
            <p className="text-left text-xl m-2">My major is Front-end. This is my React lab.</p>
            <p className="text-left text-2xl mx-2 my-4 uppercase font-semibold">Some more information about me:</p>
            <p className='text-left text-xl m-2'>You can call me by my nickname, Lynn.</p>
            <p className='text-left text-xl m-2'>I like various types of films, there is no limitations. If you have any great films, I would be delighted if you share with me. We can then talk about the films.</p>
            <br/>
            <p className='text-left text-xl m-2'>Facebook: <a className='text-blue-700 hover:underline focus:text-purple-500' href='https://www.facebook.com/ashley.02.nt/'>https://www.facebook.com/ashley.02.nt/</a> </p>
          </div>
        </div>
      </div>
    </div>
  )
}
