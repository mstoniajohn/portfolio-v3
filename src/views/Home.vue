<template>
	<div class="container">
		<div
			style="min-height: 100vh"
			class="container d-flex justify-content-center flex-column align-items-center"
		>
			<h1>
				Hello, I am Tonia the
				<span
					ref="textElement"
					class="txt-type"
					data-wait="3000"
					data-words='["Developer", "Creator", "Inventor"]'
				></span>
			</h1>
			<h2>Welcome To My Website</h2>

			<div class="d-flex justify-content-lg-center align-items-lg-center">
				<a id="scrollContent" class="btn btn-outline" href="#content"
					>Read more</a
				>
			</div>
		</div>
		<div id="content">
			lorem lorem ipsum lore lorem Lorem, ipsum dolor sit amet consectetur
			adipisicing elit. Rem labore enim accusamus ab, repellat modi error odio
			vel magnam quas consequatur ex possimus optio ea ducimus delectus
			necessitatibus fuga! Rerum!
		</div>

		<!-- <button @click="posts.pop()">Delete Post</button> -->
	</div>
</template>

<script>
// @ is an alias to /src
import { ref, onMounted } from 'vue';
import Spinner from '../components/Spinner';
import Projects from '../components/Projects';
import getPhotos from '../composables/getPhotos';

export default {
	name: 'Home',
	components: { Spinner, Projects },
	setup() {
		const textElement = ref(null);
		// const error = ref(null);
		const { posts, error, load } = getPhotos();

		console.log(posts, error);

		// ES6 Class
		class TypeWriter {
			constructor(txtElement, words, wait = 3000) {
				this.txtElement = txtElement;
				this.words = words;
				this.txt = '';
				this.wordIndex = 0;
				this.wait = parseInt(wait, 10);
				this.type();
				this.isDeleting = false;
			}

			type() {
				// Current index of word
				const current = this.wordIndex % this.words.length;
				// Get full text of current word
				const fullTxt = this.words[current];

				// Check if deleting
				if (this.isDeleting) {
					// Remove char
					this.txt = fullTxt.substring(0, this.txt.length - 1);
				} else {
					// Add char
					this.txt = fullTxt.substring(0, this.txt.length + 1);
				}

				// Insert txt into element
				this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

				// Initial Type Speed
				let typeSpeed = 300;

				if (this.isDeleting) {
					typeSpeed /= 2;
				}

				// If word is complete
				if (!this.isDeleting && this.txt === fullTxt) {
					// Make pause at end
					typeSpeed = this.wait;
					// Set delete to true
					this.isDeleting = true;
				} else if (this.isDeleting && this.txt === '') {
					this.isDeleting = false;
					// Move to next word
					this.wordIndex++;
					// Pause before start typing
					typeSpeed = 500;
				}

				setTimeout(() => this.type(), typeSpeed);
			}
		}
		function init() {
			const txtElement = document.querySelector('.txt-type');
			const words = JSON.parse(txtElement.getAttribute('data-words'));
			const wait = txtElement.getAttribute('data-wait');
			// Init TypeWriter
			new TypeWriter(txtElement, words, wait);
		}

		// Init On DOM Load
		// Init App

		onMounted(() => {
			init();
			load();
		});

		return { error, textElement };

		// var InputUsername = projectAuth.currentUser;
		// const InputMessage = ref('');
		// const router = useRouter();
		// const state = reactive({
		// 	username: '',
		// 	messages: [],
		// });
		// if (InputUsername != null) {
		// 	state.username = InputUsername.email.split('@')[0];
		// }
		// 	const SendMesage = () => {
		// 	const messagesRef = db.ref('messages');
		// 	if (InputMessage.value === '' || InputMessage.value === null) {
		// 		return;
		// 	}
		// 	const message = {
		// 		username: state.username,
		// 		content: InputMessage.value,
		// 	};
		// 	messagesRef.push(message);
		// 	InputMessage.value = '';
		// };
	},
};
</script>
<style scoped>
p.home {
	max-width: 1200px;
	margin: 0 auto;
	padding: 10pxs;
}
</style>
