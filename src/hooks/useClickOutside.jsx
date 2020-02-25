// library imports
import React, { useRef, useEffect } from 'react'

export default function useOutsideAlerter(ref, value, setValue) {
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target) && value === true) {
      setValue(!value)
    }
  }

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside)
    }
  })
}