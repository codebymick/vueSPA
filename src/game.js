import VueGallerySlideshow from 'vue-gallery-slideshow'

const game = new VueGallerySlideshow({
  el: '#bpp',
  components: {
    VueGallerySlideshow
  },
  data: {
    images: [
      'https://placem.at/places?w=800&h=800&random=1',
      'https://placem.at/places?w=800&h=800&random=2',
      'https://placem.at/places?w=800&h=800&random=3',
      'https://placem.at/places?w=800&h=800&random=4',
      'https://placem.at/places?w=800&h=800&random=5',
      'https://placem.at/places?w=800&h=800&random=6',
      'https://placem.at/places?w=800&h=800&random=7',
      'https://placem.at/places?w=800&h=800&random=8',
      'https://placem.at/places?w=800&h=800&random=9',
      'https://placem.at/places?w=800&h=800&random=10'
    ],
    index: null
  }
})

export default game
