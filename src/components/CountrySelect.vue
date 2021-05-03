<template>
	<select
		@change="onChange()"
		v-model="selected"
		class="form-select mt-1 block w-full border p-3 rounded mb-10 mt-10"
	>
		<option value="0">Select Country</option>
		<option v-for="country in countries" :value="country.ID">
			{{ country.Country }}
		</option>
	</select>
</template>

<script>
import { ref, computed } from 'vue';
export default {
	name: 'CountrySelect',
	props: ['countries'],
	setup(props, { emit }) {
		// const country = ref('');
		const selected = ref(0);
		const onChange = (e) => {
			// do something
			const country = props.countries.find(
				(item) => item.ID === selected._value
			);
			emit('get-country', country);

			console.log(country);
		};
		// const message = computed({
		// 	get: () => props.countries,
		// 	set: (value) => emit('update:countries', value),
		// });
		return { selected, onChange };
	},
};
</script>

<style></style>
