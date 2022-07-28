<template>
	<b-container>
		<b-card-group deck>
			<b-card bg-variant="white" text-variant="white">
				<div class="bg-primary text-light p-2 text-center p-0">
					<h3 class="m-0 header-title">Профіль лікаря</h3>
				</div>
				<div class="text-black d-flex mt-2 mb-4">
					<h3 
						class="mb-0 d-flex align-items-center"
					>
						{{`Тестова Оксана Василівна`.toLocaleUpperCase()}}
					</h3>
					<star-rating
						class="text-black mx-2"
						:rating="rating"
					/>
					<span class="d-flex align-items-center">({{`Середня оцінка ${rating}`}})</span>
				</div>
				<b-row>
					<b-col cols="3">
						<div
							class="avatar"
							style="background-image: url('https://static3.depositphotos.com/1001992/255/i/450/depositphotos_2552495-stock-photo-successful-doctor-with-stethoscope.jpg');"
						/>
					</b-col>
					<b-col cols="9" class="text-black">
						<b-row class="information">
							<div class="left">Місто</div>
							<div class="right">Львів</div>
						</b-row>
						<b-row class="information">
							<div class="left">Місце роботи</div>
							<div class="right">Львів, площа Ринок 10</div>
						</b-row>
						<b-row class="information">
							<div class="left">Заклад</div>
							<div class="right text-primary">Відділення надання екстреної допомоги черговим лікарем у закладі стаціонарної допомоги імені Пилипіва Юрія</div>
						</b-row>
						<reviews
							class="my-2"
							:items="reviews"
						/>
						<create-review
							class="mt-3"
							:loading="loading"
							:key="createReviewKey"
							@sendReview="sendReview"
						/>
					</b-col>
				</b-row>

			</b-card>
		</b-card-group>
	</b-container>
</template>

<script>

import starRating from '@/components/starRating.vue';
import createReview from '@/components/createReview.vue';
import Reviews from "@/components/reviews.vue";
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
	components:{
		starRating,
		createReview,
		Reviews
	},
	data(){
		return {
			createReviewKey: 1
		}
	},
	computed:{
		...mapGetters({
			loading: 'getLoading',
			reviews: 'getReviews',
			rating: 'getRatingRound'
		})
	},
	methods:{
		...mapActions([
			'setPostReviews'
		]),
		async sendReview(data){
			const result = await this.setPostReviews(data);
			
			if(result){
				this.createReviewKey += 1
				this.toast();
			}
		},

		toast() {
        	this.$notify({
				title: 'Iнформація',
				text: 'Відгук успішно добавленний.'
			});
      	}
	}
	
}
</script>
<style lang="less" scoped>
	.header-title{
		text-transform: uppercase;
	}
	.avatar{
		border: 1px solid #ccc;
		height: 219px;
		width:  243px;
		background-size: cover;
		border-radius: 5px;
	}
	.information{
		text-align: left;
		.left, .right{
			display: flex;
		}
		.left{ width: 15%; }
		.right{	width: 50%; }
	}
</style>
