// Crea un campo di input (<input type="text">) in cui l’utente può digitare.

// Effettua una chiamata API a: 
// https://boolean-spec-frontend.vercel.app/freetestapi/products?search=[query]

// La query deve essere sostituita con il testo digitato.

// Mostra i risultati API sotto l'input in una tendina di suggerimenti.

// Se l'utente cancella il testo, la tendina scompare.







import { useState, useEffect } from 'react'



function App() {
  const [query, setQuery] = useState('')
  const [products, setproducts] = useState([])
  console.log(products);




  useEffect(() => {
    if (query.trim() === '') {
      setproducts([])
      return
    }
    fetch(`https://boolean-spec-frontend.vercel.app/freetestapi/products?search=${query}`)
      .then(res => res.json())
      .then(data => setproducts(data))
      .catch(error => console.error(error))
  }, [query])





  return (
    <>
      <input
        type="text"
        placeholder='cerca...'
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      <div>
        {products.length > 0 && (
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                {product.name}
              </li>
            ))}
          </ul>
        )}

      </div>





    </>
  )
}

export default App
