<script>
import { populateAmenitiesAndPrices } from "../js/helpers";
let model = JSON.parse(window.vuebnb_listing_model);
model = populateAmenitiesAndPrices(model);
import ImageCarousel from "./ImageCarousel.vue";
import ModalWindow from "./ModalWindow.vue";
import FeatureList from "./FeatureList.vue";
import HeaderImage from "./HeaderImage.vue";

export default {
  data() {
    return Object.assign(model, {});
  },
  components: {
 ImageCarousel, ModalWindow, FeatureList, HeaderImage

  },
  methods: {
    openModal() {
      this.$refs.imagemodal.modalOpen = true;
    }
  }
};
</script> <style>
.about {
  margin: 2em 0;
}
.about h3 {
  font-size: 22px;
}
</style>
<template>
  <div>

    <header-image :image-url="images[0]" @header-clicked="openModal"></header-image>
    <div class="container">
      <div class="heading">
        <h1>{{ title}}</h1>
        <p>{{ address }}</p>
      </div>
      <hr />
      <div class="about">
        <h3>About this listing</h3>

      </div>
      <div class="lists">
        <feature-list title="Amenities" :items="amenities">
           <div class="list-item" v-for="amenity in amenities"> 
                            <i class="fa fa-lg" :class="amenity.icon"></i>
                            <span>@{{ amenity.title }}</span> 
                            </div> 
        </feature-list>
        <feature-list title="Prices" :items="prices">
          <template slot-scope="price">
            {{ price.title }}:
            <strong>{{price.value }}</strong>
          </template>
        </feature-list>
      </div>
    </div>
    <modal-window ref="imagemodal">
      <image-carousel :images="images"></image-carousel>
    </modal-window>
  </div>
</template> 
