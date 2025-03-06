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

  const fetchPRoducts = async (query) => {
    if (query.trim() === '') {
      setproducts([])
      return
    }
    try {
      const res = await fetch(`https://boolean-spec-frontend.vercel.app/freetestapi/products?search=${query}`)
      const resProducts = await res.json()
      setproducts(resProducts)
    } catch (error) {
      console.error(error);
    }
  }


  useEffect(() => {
    fetchPRoducts(query)
  }, [query])

  return (
    <>
      <div className="container">
        <h1>Cerca un prodotto</h1>

        <input
          type="text"
          placeholder="Cerca..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />

        <div className="results">
          {products.length > 0 ? (
            <ul>
              {products.map((product) => (
                <li key={product.id} className="product-item">
                  {product.name}
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-results">Nessun prodotto trovato</p>
          )}
        </div>
      </div>
    </>
  )
}

export default App
