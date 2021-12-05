import React from 'react';
import { colorpickerCode, importCode, installCode } from './code-snippets'

const Code = ({shape, color, height}) => {

    const codes = [
        {
            section: "Snippet",
            id: "snippet",  
            codes: [importCode, colorpickerCode(shape, color, height)]
        },
        {
            section: "Installation",
            id: "install-code",  
            codes: [installCode]
        }
    ]

  // handle copy text functionality
  const copy = (e) => {

    /* Get the text field */
    var copyText = document.getElementById(`${e.target.id}-value`)

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value)

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);   
}

// helper function to renderCodeBlock
// renders a block of code
const codeBlockHelper = (code) => {
    return (
        <pre>
            <code>{code}</code>
        </pre>
    )
}

// Renders code section
const renderCodeBlock = (elem) => {
    return (
        <>
            <h2>{elem.section}</h2>
            <div className='sample-code'>
                <input id={`${elem.id}-value`} value={elem.code}/>
                <i id={elem.id} onClick={copy} class="far fa-clipboard"/>
                {elem.codes.map((elem) => codeBlockHelper(elem))}
            </div>
        </>
      )
  }
  
  return (
    <div className='code-container'>
        {codes.map((elem) => renderCodeBlock(elem))}
    </div>
  )
}

export default Code;