import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
type Props = {}

const Web = (props: Props) => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="*" element={"<NoMatch />"} />
    </Routes>
  )
}

export default Web

