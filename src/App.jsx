import React, { useState } from 'react'

function App() {
  return (
    <div className="p-4 text-center flex flex-col items-center justify-center space-y-8 h-screen">
      <div className="w-1/2 mx-auto flex bg-purple-100 divide-x divide-purple-500 border-x border-purple-500">
        <div class="p-4 flex-1">One</div>
        <div class="p-4 flex-1">Two</div>
        <div class="p-4 flex-1">Three</div>
      </div>
      <div className="w-1/2 mx-auto bg-blue-100 divide-y divide-blue-500 border-y border-blue-500">
        <div class="p-4">One</div>
        <div class="p-4">Two</div>
        <div class="p-4">Three</div>
      </div>
    </div>
  )
}

export default App
