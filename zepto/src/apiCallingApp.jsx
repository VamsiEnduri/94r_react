import React, { useState, useEffect } from 'react'

const ApiCallingApp = () => {

    let [data, setData] = useState([])
    let [status, setStatus] = useState(false)

    async function getData() {
        const res = await fetch("https://fakestoreapi.com/products")
        let result = await res.json()
        setData(result)
        setStatus(true)
        console.log(result, "data")
    }

    useEffect(() => {
        getData()
    }, [])

    if (status == false) {
        return <h2>Data is loading...</h2>
    }

    return (
        <div>
            <h2>ApiCallingApp Comp</h2>

            <div
                className="cardsContainer"
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    justifyContent: "center",
                    padding: "20px"
                }}
            >

                {data.map((elem, index) => {
                    return (
                        <div
                            key={index}
                            style={{
                                width: "250px",
                                padding: "20px",
                                border: "1px solid #ddd",
                                borderRadius: "10px",
                                boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
                                textAlign: "center",
                                backgroundColor: "white"
                            }}
                        >
                            <img
                                src={elem.image}
                                alt={elem.title}
                                style={{
                                    width: "150px",
                                    height: "180px",
                                    objectFit: "contain"
                                }}
                            />

                            <h3>{elem.title}</h3>

                            <p>Price: ${elem.price}</p>

                            <button
                                style={{
                                    padding: "10px 20px",
                                    border: "none",
                                    borderRadius: "5px",
                                    backgroundColor: "black",
                                    color: "white",
                                    cursor: "pointer"
                                }}
                            >
                                Buy Now
                            </button>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default ApiCallingApp