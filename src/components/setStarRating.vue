<template>
	<ul class="set-star-rating p-0">
		<li 
			v-for="(item, key) in items"
			:key="`star-${key}`"
			@click="changeRating(key)"
		>
			<div class="h1 mb-0">
				<b-icon :icon="`star${item.isTruth ? '-fill' : ''}`" variant="warning" size="lg"/>
				<span class="text-primary">{{item.text}}</span>
			</div>
		</li>
	</ul>
</template>
<script>
export default {
	name: 'setStarRating',
	data: () => {
		return{
			rating: 0,
			items: [
				{ isTruth: false, text: 'Дуже погано' },
				{ isTruth: false, text: 'Погано' },
				{ isTruth: false, text: 'Нормально' },
				{ isTruth: false, text: 'Добре' },
				{ isTruth: false, text: 'Дуже добре' },
			]
		}
	},
	methods:{
		changeRating(index){
			this.items = this.setRating(index);
			this.rating = index + 1
			this.$emit('rating', this.rating );
		},
		setRating(key){
			return this.items.reduce((arr, item, index) => {
				arr.push({...item, isTruth: index <= key})
				return arr
			},[])
		}
	}
}
</script>
<style lang="less" scoped>
	.set-star-rating{
		display: flex;
		list-style: none;
		li{
			padding: 0 5px;
			display: flex;
			flex-direction: column;
			align-content: center;
			cursor: pointer;
			>div{
				font-size: 3.5rem;
			}
			span{
				width: 100%;
				display: flex;
				font-size: .7rem;
				flex-direction: column;
			}
		}
	}
</style>