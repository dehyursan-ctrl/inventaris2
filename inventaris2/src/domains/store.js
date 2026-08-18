import { reactive } from 'vue'
import { computed } from 'vue'

export const products = reactive([
    { id: 1, name: 'appel', actualAmount: 10, minAmount: 5 },
    { id: 2, name: 'banaan', actualAmount: 15, minAmount: 10 },
    { id: 3, name: 'peer', actualAmount: 8, minAmount: 5 },
    { id: 4, name: 'sinaasappel', actualAmount: 12, minAmount: 5 },
    { id: 5, name: 'kiwi', actualAmount: 20, minAmount: 10 },
    { id: 6, name: 'watermeloen', actualAmount: 6, minAmount: 5 },
    { id: 7, name: 'ananas', actualAmount: 10, minAmount: 5 },
])
export const Allproducts = computed(() => products)

export function addProduct(product) {
    products.push(product)
    product.id = products.length
}
export function updateProduct(updatedProduct) {
    const index = Allproducts.value.findIndex(product => product.id === updatedProduct.id)
    products[index] = {...updatedProduct }
  }