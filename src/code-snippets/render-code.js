import React from 'react';
import { colorpickerCode, installCode } from './code-snippets'

const Code = ({shape, color, height}) => {

    const codes = [
        {
            section: "Snippet",
            id: "snippet",  
            codes: [colorpickerCode(shape, color, height)]
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
    alert("Copied!");   
}

// helper function to renderCodeBlock
// renders a block of code
const codeBlockHelper = (i, code) => {
    return (
        <pre key={i}>
            <code>{code}</code>
        </pre>
    )
}

// Renders code section
const renderCodeBlock = (elem) => {
    var code = ""
    for (let i = 0; i < elem.codes.length; i++) {
        code +=  elem.codes[i] + "\n"
    }
    return (
        <div key={elem.section}>
            <h2>{elem.section}</h2>
            <div className='sample-code'>
                <input id={`${elem.id}-value`} value={code}/>
                <i id={elem.id} onClick={copy} className="far fa-clipboard"/>
                {elem.codes.map((code, i) => codeBlockHelper(i, code))}
            </div>
        </div>
      )
  }
  
  return (
    <div className='code-container'>
        {codes.map((elem) => renderCodeBlock(elem))}
    </div>
  )
}

export default Code;