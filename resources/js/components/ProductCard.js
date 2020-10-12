app.component('product-card', {
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    oldprice: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    installments: {
      type: Number,
      required: true
    },
    installmentvalue: {
      type: Number,
      required: true
    }
  },
  methods: {
    formatCurrency(value) {
      let val = (value/1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
  },
  template:
  /*html*/
  `<div class="product-card">
    <img :src="image" :alt="name" height="150" width="200" />
    <br>
    <p class="label-medium">{{ name }}</p>
    <p class="label-small product-description">{{ description }}</p>
    <p class="label-small">De: R$\{{ formatCurrency(oldprice) }}</p>
    <p class="label-bold">Por: R$\{{ formatCurrency(price) }}</p>
    <p class="label-small">ou {{ installments }}x de R$\{{ formatCurrency(installmentvalue) }}</p>
    <button class="product-button">Comprar</button>
  </div>`
})
