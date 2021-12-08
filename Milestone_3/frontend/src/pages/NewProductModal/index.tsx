// Tela utilizada para se passar por um modal de produto
import { Container, ProductDetails } from './styles'
import placeholderImg from '../../assets/placeholder-image.png'
import { Product } from '../../../type';
import { api } from '../../services/api';
import { toast } from 'react-toastify';

// Leitura dos dados para cadastras um produto no banco de dados
async function createProduct() {
    try {
        const titleToSlug = document.querySelector<HTMLInputElement>('input[id="input-title"]')?.value;
        const newProduct = {
            title: document.querySelector<HTMLInputElement>('input[id="input-title"]')?.value,
            description: document.querySelector<HTMLInputElement>('input[id="input-description"]')?.value,
            amount: Number(document.querySelector<HTMLInputElement>('input[id="input-amount"]')?.value),
            price: Number(document.querySelector<HTMLInputElement>('input[id="input-price"]')?.value),
            slug: titleToSlug + String(Math.floor(Math.random() * 99999) + 1),
        }

        await api.post<Product>('/products', newProduct)
        toast.success('Success creating new product')
    } catch {
        toast.error('Failed trying to create a new product');
    }
}

function exit() {
    window.location.replace('http://' + window.location.host + '/manageproducts');
}

export function CreateNewProduct() {
    return (
        <Container>
            <ProductDetails>
                <p>Product Title</p>
                <input id="input-title" type="text" />
                <p>Image</p>
                <img src={placeholderImg} alt="" />
                <p>Description</p>
                <input id="input-description" type="text" />
                <p>Amount</p>
                <input id="input-amount" type="text" />
                <p>Price</p>
                <input id="input-price" type="text" />
                <br /><br />
                <button className="button-create" type="button" onClick={() => { createProduct() }}>Register</button>
                <button className="button-exit" type="button" onClick={() => { exit() }}>Exit</button>
            </ProductDetails>
        </Container>
    )
}