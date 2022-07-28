<template>
	<div class="form-wrap">
		<div> <h4 class="text-primary">Залишити оцінку та відгук</h4> </div>
		<b-form-group class="form">
			<div class="row-block">
				<b-row class="my-1 p-1">
					<div class="left">
						Представтесь <span class="require">*</span>
					</div>
					<div class="right">
						<b-form-input 
							id="input-1"
							placeholder="Вкажіть ваше прізвище та ім’я"
							v-model="fullname"
							trim
							:disabled="anonymity"
						/>
						<div class="checkbox-wrap">
							<input type="checkbox" id="check" name="check" v-model="anonymity" />
							<label class="text-primary" for="check">Анонімно</label>
						</div>
					</div>
				</b-row>
				<b-row class="my-1 p-1">
					<div class="left">
						Оцініть роботу лікаря <span class="require">*</span>
					</div>
					<div class="right">
						<set-star-rating
							:key="keySetStarRating"
							:rating="rating"
							@rating="rating = $event"
						/>
					</div>
				</b-row>
				<b-row class="my-1 p-1">
					<div class="left">
						Напишіть відгук <span class="require">*</span>
					</div>
					<div class="right">
						<b-form-textarea
							id="textarea"
							v-model="text"
							placeholder="Вкажіть відгук до 500 символів"
							rows="5"
							max-rows="7"
							trim
						/>
					</div>
				</b-row>
				 <b-row align-h="between" class="my-1 p-3 pb-0">
					<b-col cols="3">
						<b-button 
							variant="primary"
							:disabled="!isChangingAnyField || loading"
							@click="setEmptyFields"
						>
							Очистити
						</b-button>
					</b-col>
					<b-col cols="3">
						<b-button
							variant="success" 
							class="text-white"
							:disabled="!isFieldsFull || loading"
							@click="sendReview"
						>
							Надіслати
						</b-button>
					</b-col>
				</b-row>
			</div>
		</b-form-group>
	</div>
</template>
<script>
import setStarRating from '@/components/setStarRating.vue'

export default {
	name: 'CreateReview',
	props:{
		loading: { type: Boolean, default: false }
	},
	components:{
		setStarRating
	},
	data() {
		return {
			keySetStarRating: 1,
			anonymity: false,
			fullname: '',
			text:'',
			rating: 0
		}
	},
	watch: {
		anonymity(val){	if(val) this.fullname = '' }
	},
	computed: {
      state() {
        return this.fullname.length >= 4
      },
      invalidFeedback() {
        if (this.fullname.length > 0) {
          return 'Enter at least 4 characters.'
        }
        return 'Please enter something.'
      },
	  isFieldsFull(){
		const { fullname, text, rating, anonymity } = this.$data;
		return anonymity 
				? !!text && !!rating 
				: !!fullname && !!text && !!rating
	  },
	  isChangingAnyField(){
		const { fullname, text, rating, anonymity } = this.$data;
		
		return fullname || text || rating || anonymity;
	  }
    },
	methods:{
		setEmptyFields(){
			this.fullname = '';
			this.text = '';
			this.rating = 0;
			this.anonymity = false;
			this.keySetStarRating++;
		},
		sendReview(){
			const { fullname, text, rating, anonymity } = this.$data;
			const data = { text, rating	};
			data.fullname = anonymity ? 'Анонім' : fullname;
			this.$emit('sendReview', data);
		}
	}
}
</script>
<style lang="less" scoped>
.form-wrap{
	border: 1px solid #ccc;
	border-radius: 5px;
	padding: 15px;
}
.form{
	display: flex;
	flex-direction: column;
	align-content: flex-start;
}
.checkbox-wrap{
	input[type=checkbox], input[type=radio] {display: none;}

	input[type=checkbox] + label:before {
		content: "\2714";
		color: transparent;
		display: inline-block;
		border: 1px solid #ccc;
		font-size: 20px;
		font-weight: 900;
		line-height: 22px;
		margin: -5px 5px 0 0;
		height: 20px;
		width: 20px;
		text-align: center;
		vertical-align: middle;
		transition: color ease .3s;
	}

	input[type=checkbox]:checked + label:before {
		color: #000;
	border-color: #000;
	}

	input[type=radio] + label:before {
		content: "\26AB";
		border: 1px solid #000;
		border-radius: 50%;
		display: inline-block;
		border: 1px solid #000;
		font-size: 20px;    
		line-height: 20px;
		margin: -5px 5px 0 0;
		height: 20px;
		width: 20px;
		text-align: center;
		vertical-align: middle;
		font-size: 0;    
		transition: font-size ease .3s;
	}
	input[type=radio]:checked + label:before {
		font-size: 20px;    
	}
}
.row-block{
	padding: 15px;
	display: flex;
	flex-direction: column;
	.left, .right{
		display: flex;
	}
	.left{
		max-width: 25%;
		width: 100%;
		.require{
			color: red;
			margin: 0 5px;
		}
	}
	.right{
		max-width: 75%;
		width: 100%;
	}
}
</style>