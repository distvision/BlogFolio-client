import React from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'



function Code({ children, language }) {
  return (
    <div>
      <SyntaxHighlighter
        language={language}
        style={materialDark}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  )
}

export default Code
