import React from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'


function Code({ children, language }) {
  return (
    <div>
      <SyntaxHighlighter
        showLineNumbers
        wrapLongLines='white-space: pre'
        language={language}
        style={materialDark}
        className='rounded-lg'
      >
        {children}
      </SyntaxHighlighter>
    </div>
  )
}

export default Code
