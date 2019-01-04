<template>
  <div class="about">
    <div class="container">
      <h2>Vue Base64 File Upload</h2>
      <div>
        <base64 class="v1" accept="image/png, image/jpeg" image-class="v1-image" input-class="v1-input" :disable-preview="true" :max-size="customImageMaxSize" @size-exceeded="onSizeExceeded" @file="onFile" @load="onLoad" />
      </div>
      <div>
        <base64
          class="v3"
          accept="image/png, image/jpeg"
          image-class="v3-image"
          input-class="v3-input"
          :max-size="customImageMaxSize"
          @size-exceeded="onSizeExceeded"
          @file="onFile"
          @load="onLoad"
        />
      </div>
      <div>
        <base64
          class="v4"
          accept="image/png, image/jpeg"
          image-class="v4-image"
          input-class="v4-input"
          :max-size="customImageMaxSize"
          @size-exceeded="onSizeExceeded"
          @file="onFile"
          @load="onLoad"
        />
      </div>
    </div>
    <div>
      <img v-for="image in images" :src="image.dataUri" />
    </div>
  </div>
</template>
<script>
import Base64 from "vue-base64-file-upload";

export default {
  name: "about",
  data() {
    return {
      customImageMaxSize: 3 // megabytes
    };
  },
  components: {
    Base64
  },
  computed: {
    images() {
      return this.$store.state.images
    }
  },
  methods: {
    onFile(file) {
      console.log(file); // file object
    },

    onLoad(dataUri) {
      console.log(dataUri); // data-uri string
      this.$store.dispatch('uploadImage', {dataUri})
    },

    onSizeExceeded(size) {
      alert(
        `Image ${size}Mb size exceeds limits of ${this.customImageMaxSize}Mb!`
      );
    }
  }
};
</script>

