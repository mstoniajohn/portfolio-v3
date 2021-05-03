<template>
	<div class="grid md:grid-cols-2 gap-4">
		<div class="shadow-md bg-blue-100 p-10 text-center rounded">
			<h3 class="text-3xl text-blue-900 font-bold mb-4">Cases</h3>
			<div class="text-2xl mb-4">
				<span class="font-bold"> New: </span>
				{{ stats && formatNumber(stats.NewConfirmed) }}
			</div>
			<div class="text-2xl mb-4">
				<span class="font-bold"> Total: </span>
				{{ stats && formatNumber(stats.TotalConfirmed) }}
			</div>
		</div>
		<!-- 2 -->
		<div class="shadow-md bg-blue-200 p-10 text-center rounded">
			<h3 class="text-3xl text-blue-900 font-bold mb-4">Deaths</h3>
			<div class="text-2xl mb-4">
				<span class="font-bold"> New Deaths: </span>
				{{ stats && formatNumber(stats.NewDeaths) }}
			</div>
			<div class="text-2xl mb-4">
				<span class="font-bold"> Total Deaths: </span>
				{{ stats && formatNumber(stats.TotalDeaths) }}
			</div>
			<div class="text-2xl mb-4">
				<span class="font-bold"> Total Recover: </span>
				{{ stats && formatNumber(stats.TotalRecovered) }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'DataBoxes',
	props: ['stats'],
	setup(props) {
		const formatNumber = (number) => {
			return number.toLocaleString();
		};
		return { formatNumber };
	},
};
</script>

<style></style>
