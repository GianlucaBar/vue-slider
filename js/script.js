var app = new Vue(
    {
        el: '#root',

        data: {
            currentActiveImg: 0,
			sliderImages: [
				'img/campagna.jpg',
				'img/fiori.jpeg',
				'img/montagne.webp',
				'img/cascate.webp'
			]
        },

        methods: {
            nextPhoto(){
				let nextImageIndex = this.currentActiveImg + 1;

				if (nextImageIndex == this.sliderImages.length) {
					this.currentActiveImg = 0;
				} else{
					this.currentActiveImg = nextImageIndex;
				}
			},

			prevPhoto(){
				let prevImageIndex = this.currentActiveImg - 1;

				if (prevImageIndex < 0) {
					this.currentActiveImg = this.sliderImages.length - 1;
				} else{
					this.currentActiveImg = prevImageIndex;
				}
			}

        },

		created () {
			setInterval(() => {
				this.nextPhoto();
			}, 2000)
		}
        
    });

