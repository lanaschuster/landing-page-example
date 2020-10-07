const app = Vue.createApp({
  data() {
    return {
      products: [],
      next: ''
    }
  },
  methods: {
    loadNextPage() {
      this.loadProducts(`https://${this.next}`)
    },
    loadProducts(url) {
      fetch(url, { method: 'GET' })
      .then(result => {
        return result.json()

      }).then((data) => {
        for (let i=0; i < data.products.length; ++i) {
          this.products.push(data.products[i])
        }
         
        this.next = data.nextPage

      }).catch(error => {
        console.log(error)
      })
    }
  },
  created() {
    this.loadProducts('https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1')
  }
})
