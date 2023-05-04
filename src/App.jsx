import { useState } from 'react'
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Textinput from './components/Textinput'

const App = () => {
  const [keywords, setKeywords] = useState(' ')

  const extractKeywords = async (text) => {
    const options ={
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: 'Extract keywords from this text. Make the first letter of each word uppercase and separate with commas\n\n' + text + '',
        temperature: 0.5,
        max_tokens: 60,
        frequency_penalty: 0.8,
      })
    }

    const response = await fetch(import.meta.env.VITE_OPENAI_API_URL, options);
    const json = await response.json();

    if (!json || !json.choices || json.choices.length === 0) {
      console.log("No data returned from API")
      return;
    }

    const data = json.choices[0].text.trim();

    console.log(data)
    setKeywords(data)
  }

  return (
    <div className="main w-screen  bg-[url('src/assets/bg.svg')]">
      <Header />
      <Textinput extractKeywords={extractKeywords} />
      <Footer />
    </div>
  )
}

export default App

