import React from "react"

const HeadBar = (props) => {
    const divStyle = {
        backgroundImage: `url('${props.img}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
      const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        width: '1100px',
        height: '300px',
      };
  return (
    <div className='flex  justify-evenly flex-wrap my-4 opacity-90' style={divStyle}>
      <div style={containerStyle}>
        <h1 className="text-3xl sm:text-7xl text-white font-extrabold opacity-100">{props.name}</h1>
      </div>
    </div>
  )
}

export default HeadBar;