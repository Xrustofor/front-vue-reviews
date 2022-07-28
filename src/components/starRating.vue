<template>
	<ul class="star-rating d-flex align-items-center">
		<li v-for="(item, index) in rating" :key="`star-${index}`">
			 <div class="h2 mb-0">
				<b-icon icon="star-fill" variant="warning"></b-icon>
			</div>
		</li>
	</ul>
</template>
<script>
export default {
	props:{
		rating: { type: Number, default: 5 }
	}
}
</script>
<style scoped>
	.star-rating{
		list-style: none;
		width: fit-content;
		padding: 0;
		align-items: center;
		margin-bottom: 0;
	}
	.star-rating li{
		padding: 0 2px;
	}
</style>
