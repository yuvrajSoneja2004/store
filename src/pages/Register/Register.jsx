import React from 'react'
import { Outlet } from 'react-router-dom'
import { styled } from 'styled-components'

function Register() {
  return (
    <Whole>
        <Blob />
        <Outlet />
    </Whole>
  )
}

const Whole = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    gap: 170px;
`

const Blob = styled.div`

  width: 400px;
  height: 400px;
  background-size: cover;
  background-position: center center;
  background-repeat: repeat;
  background-image: url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M927 657.5q-52 157.5-204 200t-295.5 30q-143.5-12.5-255-120t-124-272Q36 331 163.5 235t275-158.5Q586 14 733.5 97T930 340q49 160-3 317.5Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22%23444cf7%22 d=%22M927 657.5q-52 157.5-204 200t-295.5 30q-143.5-12.5-255-120t-124-272Q36 331 163.5 235t275-158.5Q586 14 733.5 97T930 340q49 160-3 317.5Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
`

export default Register