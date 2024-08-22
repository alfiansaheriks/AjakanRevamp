<template>
  <div class="card">
    <div class="card-title">{{ title }}</div>
    <img :src="imageSrc" alt="Card Image" class="card-image" />
    <div class="card-symbol">{{ symbol }}</div>
  </div>
</template>

<script>
export default {
  name: 'CardUndangan',
  props: {
    title: {
      type: String,
      required: true
    },
    imageSrc: {
      type: String,
      required: false
    },
    symbol: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>
.card {
  position: relative;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-size: 1.5em;
  padding: 16px;
  background-color: #f8f8f8;
  border-bottom: 1px solid #ccc;
}

.card-image {
  width: 100%;
  height: auto;
}

.card-symbol {
  position: absolute;
  bottom: 16px;
  right: 16px;
  font-size: 1.5em;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 4px 8px;
  border-radius: 50%;
}
</style>