import React from 'react'

const product = [
    {
        "_id": 1,
        "img": "https://www.tradeindia.com/_next/image/?url=https%3A%2F%2Fcpimg.tistatic.com%2F06334057%2Fb%2F4%2FRaw-Tea.jpg&w=384&q=15",
        "name": "Special Green Tea",
        "Description": "From New Vithanakande Estate – a bright, wiry, tippy Ceylon from the Ratnapura region of Sri Lanka. Not only great to drink, but a beautiful brew to look at. It took the owners of Teaism four years to find a Ceylon black tea this high in quality!",
        "price": 199
    },
    {
        "_id": 1,
        "img": "https://www.tradeindia.com/_next/image/?url=https%3A%2F%2Fcpimg.tistatic.com%2F06334057%2Fb%2F4%2FRaw-Tea.jpg&w=384&q=15",
        "name": "Special Green Tea",
        "Description": "From New Vithanakande Estate – a bright, wiry, tippy Ceylon from the Ratnapura region of Sri Lanka. Not only great to drink, but a beautiful brew to look at. It took the owners of Teaism four years to find a Ceylon black tea this high in quality!",
        "price": 199
    },
    {
        "_id": 1,
        "img": "https://www.tradeindia.com/_next/image/?url=https%3A%2F%2Fcpimg.tistatic.com%2F06334057%2Fb%2F4%2FRaw-Tea.jpg&w=384&q=15",
        "name": "Special Green Tea",
        "Description": "From New Vithanakande Estate – a bright, wiry, tippy Ceylon from the Ratnapura region of Sri Lanka. Not only great to drink, but a beautiful brew to look at. It took the owners of Teaism four years to find a Ceylon black tea this high in quality!",
        "price": 199
    },
    {
        "_id": 1,
        "img": "https://www.tradeindia.com/_next/image/?url=https%3A%2F%2Fcpimg.tistatic.com%2F06334057%2Fb%2F4%2FRaw-Tea.jpg&w=384&q=15",
        "name": "Special Green Tea",
        "Description": "From New Vithanakande Estate – a bright, wiry, tippy Ceylon from the Ratnapura region of Sri Lanka. Not only great to drink, but a beautiful brew to look at. It took the owners of Teaism four years to find a Ceylon black tea this high in quality!",
        "price": 199
    },
    {
        "_id": 1,
        "img": "https://www.tradeindia.com/_next/image/?url=https%3A%2F%2Fcpimg.tistatic.com%2F06334057%2Fb%2F4%2FRaw-Tea.jpg&w=384&q=15",
        "name": "Special Green Tea",
        "Description": "From New Vithanakande Estate – a bright, wiry, tippy Ceylon from the Ratnapura region of Sri Lanka. Not only great to drink, but a beautiful brew to look at. It took the owners of Teaism four years to find a Ceylon black tea this high in quality!",
        "price": 199
    },
    {
        "_id": 1,
        "img": "https://www.tradeindia.com/_next/image/?url=https%3A%2F%2Fcpimg.tistatic.com%2F06334057%2Fb%2F4%2FRaw-Tea.jpg&w=384&q=15",
        "name": "Special Green Tea",
        "Description": "From New Vithanakande Estate – a bright, wiry, tippy Ceylon from the Ratnapura region of Sri Lanka. Not only great to drink, but a beautiful brew to look at. It took the owners of Teaism four years to find a Ceylon black tea this high in quality!",
        "price": 199
    },
    {
        "_id": 1,
        "img": "https://www.tradeindia.com/_next/image/?url=https%3A%2F%2Fcpimg.tistatic.com%2F06334057%2Fb%2F4%2FRaw-Tea.jpg&w=384&q=15",
        "name": "Special Green Tea",
        "Description": "From New Vithanakande Estate – a bright, wiry, tippy Ceylon from the Ratnapura region of Sri Lanka. Not only great to drink, but a beautiful brew to look at. It took the owners of Teaism four years to find a Ceylon black tea this high in quality!",
        "price": 199
    }
]


function ProductMiddle() {
  return (
    <div className='grid grid-cols-4 bg-[#e0dfdf] shadow-lg shadow-slate-400 p-4 w-full m-2 justify-center'>
      {product.map(e=>{
        return (
            <div className='mb-5'>
                <div className='w-[200px] h-[250px] shadow-lg shadow-slate-400 rounded-md m-2'>
                    <img className="object-cover rounded-md" src={e.img} alt='no'></img>
                    <h1 className="text-center font-semibold">{e.name}</h1>
                    {/* <p>{e.Description}</p> */}
                </div>

            </div>
        )
      })}
    </div>
  )
}

export default ProductMiddle
