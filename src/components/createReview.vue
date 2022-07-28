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
							placeholder="Вкажіть ваше прізвище ти ім'я"
							v-model="name"
							:state="state"
							trim
						/>
						<div class="checkbox-wrap">
							<input type="checkbox" id="check" name="check" v-model="anonymity" />
							<label for="check">Анонімно</label>
						</div>
					</div>
				</b-row>
				<b-row class="my-1 p-1">
					<div class="left">
						Оцініть роботу лікаря <span class="require">*</span>
					</div>
					<div class="right"></div>
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
							rows="3"
							max-rows="6"
						/>
					</div>
				</b-row>
				<b-row class="my-1 p-3 pb-0">
					<b-button>Відправити</b-button>
				</b-row>
			</div>
		</b-form-group>
	</div>
</template>
<script>
export default {
	name: 'CreateReview',
	data() {
		return {
			anonymity: false,
			name: '',
			text:'',
		}
	},
	computed: {
      state() {
        return this.name.length >= 4
      },
      invalidFeedback() {
        if (this.name.length > 0) {
          return 'Enter at least 4 characters.'
        }
        return 'Please enter something.'
      }
    },
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