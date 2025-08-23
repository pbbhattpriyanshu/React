import React from 'react'

const Employee = ({company}) => {
  return (
    <>
      {company.employee && company.employee.length > 0 && (
          <li>
            <h4 className="text-sm font-light mb-2 text-center text-gray-300">
              Employees:
              <ul className="list-disc list-inside text-yellow-300 text-sm space-y-1 mt-2">
                {company.employee.map((emp, index) => (
                  <li key={index}>
                    <span className="font-medium">{emp.name}</span> ({emp.age}) –{" "}
                    <span className="text-gray-400">{emp.email}</span>
                  </li>
                ))}
              </ul>
            </h4>
          </li>
        )}
    </>
  )
}

export default Employee