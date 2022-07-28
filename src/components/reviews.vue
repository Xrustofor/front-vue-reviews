<template>
	<div>
		<ul class="reviews p-1">
			<li 
				class="my-2 p-2"
				v-for="(item, key) in items"
				:key="`item-review-${key}`"
				v-show="showAll ? true : key <= 4 "
			>
				<div class="top" v-if="item && item.fullname && item.date">
					<div class="left">{{item.fullname}}</div>
					<div class="right">{{item.date}}</div>
				</div>
				<div class="rating">
					<star-rating
						class="text-black mx-2 h5"
						:rating="item.rating"
					/>
				</div>
				<div class="text">
					<p>{{item.text}}</p>
				</div>
			</li>
		</ul>
		<div class="bottom" v-if="items.length > 5">
			<b-button
				variant="success" 
				class="text-white"
				@click="showAll = !showAll"
			>{{showAll ? 'Приховати' : 'Показати усе'}}</b-button>
		</div>
	</div>
</template>
<script>
import starRating from '@/components/starRating.vue';

export default {
	name: 'Review',
	props: {
		items: {
			type: Array,
			default:() => {
				return []
			}
		}
	},
	components:{
		starRating
	},
	data(){
		return {
			showAll: false,
		}
	}
}
</script>
<style lang="less" scoped>
	.reviews{
		list-style: none;
		li{
			display: flex;
			flex-direction: column;
			border: 1px solid #ccc;
			border-radius: 5px;
		}
		.top{
			display: flex;
			.left, .right{
				display: flex;
				width: 50%;
			}
			.left{ 
				font-size: 1.4rem;
			}
			.right{
				align-items: center;
				flex-direction: row-reverse;
				color: rgba(0,0,0, .6);
			}

		}
		.text p{ text-align: left;}
		
	}
	.bottom{
		display: flex;
		flex-direction: row-reverse;
	}
</style>