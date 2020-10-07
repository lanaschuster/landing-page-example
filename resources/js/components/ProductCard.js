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
  template:
  /*html*/
  `<div class="product-card">
    <img :src="image" :alt="name" height="150" width="200" />
    <br>
    <p class="label-medium">{{ name }}</p>
    <p class="label-small product-description">{{ description }}</p>
    <p class="label-small">De: R$\{{ oldprice }}</p>
    <p class="label-bold">Por: R$\{{ price }}</p>
    <p class="label-small">ou {{ installments }}x de R$\{{ installmentvalue }}</p>
    <button class="product-button">Comprar</button>
  </div>`
})
