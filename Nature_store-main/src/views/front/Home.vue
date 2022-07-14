<template>
  <div class="container-fluid">
    <div class="bg-cover banner">
      <div class="container row g-2">
        <h1
          class="col-12 fs-5 fs-md-3 ls-md-5 fw-normal text-white text-center"
        >
          創造出穿著的樂趣
        </h1>
        <router-link to="/products?category=all&page=1"
          class="col-2 btn btn-outline-light px-5 mx-auto mt-3"
          >走入Nature</router-link
        >
      </div>
    </div>
    <div class="container px-3">
      <h2 class="fs-4 text-center p-5"> 想在夏日好好享受舒適的穿著嗎？</h2>
      <div class="row g-3 mb-5 fade-out">
        <div class="col-12 col-md-6">
          <img
            class="img-fluid"
            src="https://i.imgur.com/5FtxVcx.jpg"
            alt=""
          />
        </div>
        <div
          class="
            col-12 col-md-6
            p-3 p-md-5
            d-flex
            justify-content-center
            align-items-center
            flex-column
            text-center
            lh-lg
          "
        >
          <h4 class="fs-5 text-primary">純棉布料</h4>
          100%純棉材質
          <br />
          出外居家穿著舒適方便
          <br />
          辦公室上班族最佳首選
        </div>
      </div>
      <div class="row g-3 mb-5 flex-md-row-reverse fade-out">
        <div class="col-12 col-md-6">
          <img
            class="img-fluid"
            src="https://i.imgur.com/cnaIl8q.jpg"
            alt=""
          />
        </div>
        <div
          class="
            col-12 col-md-6
            p-3 p-md-5
            d-flex
            justify-content-center
            align-items-center
            flex-column
            text-center
            lh-lg
          "
        >
          <h4 class="fs-5 text-primary">時尚穿搭</h4>
          精選設計
          <br />
          男士打造自然穿著又不失時尚
          <br />
         不論小隻女高女孩皆可駕馭
        </div>
      </div>
      <FrontSwiper
        class="fade-out"
        :datas="promote"
        :is-disabled="isDisabled"
        title="熱銷商品"
      />
    </div>
    <div class="bg-cover booking text-light flex-column">
      <h3 class="fs-5 ls-2 fw-normal mb-4">訂閱最新消息</h3>
        <Form class="container row g-2 g-md-0 px-5 w-md-60
          d-md-flex justify-content-md-center"
          :class="show ? '' : 'd-none d-md-none'"
          v-slot="{ errors }" @submit="onSubmit" id="subscribe">
          <p class="col-12 col-md-8 col-lg-5 m-0 me-md-2">
            <Field type="email" id="email" name="Email"
            class="form-control ls-2 ms-auto"
            :class="{ 'is-invalid': errors['Email'] }"
            :disabled="idDisabled"
            placeholder="abc@gmail.com"
            rules="email|required"
            inputmode="email"
            v-model="email"></Field>
            <ErrorMessage name="Email"
            class="invalid-feedback position-md-absolute">
          </ErrorMessage>
          </p>
          <button type="submit" class="btn btn-primary col-12 col-md-3 col-lg-2"
          :disabled="idDisabled"
          @submit="onSubmit">
          訂閱
          <Spinner :spin-item="email" />
        </button>
      </Form>
      <p class="text-warning ls-2 fade" v-if="email" ref="done">
        {{ email }} 已訂閱電子報 <i class="far fa-check-circle"></i>
      </p>
    </div>
    <div
      id="target"
      class="position-fixed vw-100 bottom-50"
    ></div>
  </div>
</template>

<script>
import { apiAllProducts } from '@/scripts/api';
import FrontSwiper from '@/components/FrontSwiper.vue';
import fadeInMix from '@/mixins/FadeInMix.vue';

export default {
  emits: ['page-loading', 'push-message', 'toggle-spinner'],
  props: ['isDisabled'],
  components: {
    FrontSwiper,
  },
  data() {
    return {
      products: [],
      promote: [],
      email: '',
      idDisabled: false,
      show: true,
    };
  },
  mixins: [fadeInMix],
  methods: {
    getAllProducts() {
      apiAllProducts()
        .then((res) => {
          if (!res.data.success) {
            this.$pushMessage(res);
          }
          this.products = res.data.products.reverse();
          this.promote = this.products.filter((item) => item.title);
          setTimeout(() => {
            this.$emitter.emit('page-loading', false);
            this.fadeInOnLoad();
          }, 1000);
        })
        .catch((err) => {
          this.$emitter.emit('page-loading', false);
          this.$pushMessage(err);
        });
    },
    onSubmit() {
      this.idDisabled = true;
      this.$emitter.emit('toggle-spinner', this.email);
      setTimeout(() => {
        this.idDisabled = false;
        this.$emitter.emit('toggle-spinner', false);
        this.$refs.done.classList.add('show');
        this.show = false;
      }, 1500);
    },
  },
  created() {
    this.getAllProducts();
    this.$emitter.emit('page-loading', true);
  },
};
</script>
