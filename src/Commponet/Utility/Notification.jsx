import React from 'react'
import styled from 'styled-components';
import './Utility.css';
import  { useState } from "react";
import { Toaster, toast } from 'sonner'

export default function Notification({alertmode,alertmsg}) {


  return(
    <div>
    <Toaster />
    <button onClick={() => toast(alertmsg)}>
      Give me a toast
    </button>
  </div>
  )
  
  
}