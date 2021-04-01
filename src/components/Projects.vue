<template>
	<div class="container grid my-4 ">
		<div>
			<img width="400" src="../assets/urlshortener.png" alt="" />
		</div>
		<div class="align-self-center">
			<h1>Hello</h1>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cum labore
			expedita necessitatibus iste unde non a. Architecto aspernatur cumque
			tempora consequatur aliquam perspiciatis at, earum eveniet voluptate
			commodi laborum?
		</div>
	</div>
	<div class="container grid ">
		<div class="align-self-center">
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cum labore
				expedita necessitatibus iste unde non a. Architecto aspernatur cumque
				tempora consequatur aliquam perspiciatis at, earum eveniet voluptate
				commodi laborum?
			</p>
		</div>
		<div>
			<img width="400" src="../assets/urlshortener.png" alt="" />
		</div>
	</div>
	<div>
		<h3>Project 2 Image gallery</h3>
		<Pic />
	</div>
</template>

<script>
import { ref } from '@vue/reactivity';
import Pic from '../views/Pic';
import gsap from 'gsap';
export default {
	components: { Pic },
	setup() {
		// TOGGLER ACCORDION PAGINA SERVIZI
		const showUrl = ref(false);
		const showUrlHandler = (e) => {
			showUrl.value = !showUrl;
			e.target.classList.toggle('service-active');
			let icon = document.querySelector('#services-plus-0');
			gsap.to(icon, {
				rotate: 0,
				duration: 1,
				ease: 'elastic.inOut(1, 0.5)',
			});
		};
		// var togg = document.getElementsByClassName('service-card');
		// console.log(togg);
		// togg.forEach(function(el, index) {
		// 	el.addEventListener('click', function(e) {
		// 		console.log(e.target, el);
		// 		el.classList.toggle('service-active');

		// 		let icon = document.querySelectorAll('.services-plus');
		// 		gsap.to(icon[index], {
		// 			rotate: 0,
		// 			duration: 1,
		// 			ease: 'elastic.inOut(1, 0.5)',
		// 		});
		// 		if (el.classList.contains('service-active')) {
		// 			gsap.to(el, {
		// 				rotate: 45,
		// 				duration: 1,
		// 				ease: 'elastic.inOut(1, 0.5)',
		// 			});
		// 		}
		// 	});
		// });

		return { showUrl, showUrlHandler };
	},
};
</script>

<style></style>
