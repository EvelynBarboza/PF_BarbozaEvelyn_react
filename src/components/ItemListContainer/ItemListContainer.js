import { useState } from "react"
import { useParams } from "react-router-dom"
import {getDocs, collection, query, where, getDoc} from 'firebase/firestore'
import {db} from '../../services/firebase/firebaseConfig'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEfect (() => {
        setLoading(true)

        const collectionRef = categoryId
    ? query(collection(db, 'products'), where ('category', '==', categoryId))
    : collection(db, 'products')

        getDocs(colectionRef)
        .then(response => {
            const productsAdapted = response.docs.map (doc => {
                const data = doc.data()
                return{id: doc.id, ...data}
            })
            setProducts(productsAdapted)
        })
        .catch(error => {
            console.error(error)
        })

        .finally (() => {
            setLoading(false)
        })
        })
        }

export default ItemListContainer;