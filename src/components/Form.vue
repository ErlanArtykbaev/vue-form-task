<template>
<div> 
	<form class="form"> 
		<FormMain v-bind:main="main" />
		<FormAddress v-bind:address="address" />
		<FormPass v-bind:pass="pass"/>
	</form> 
</div> 
</template>

<script>
import {required, minLength, email} from 'vuelidate/lib/validators'

import FormMain from './FormMain'
import FormAddress from './FormAddress'
import FormPass from './FormPass'

export default {
	components:{
		FormMain, FormAddress, FormPass
	},
	data(){
		return{
			main:{
				firstname: '',
				lastname: '',
				dadsname: '',
				date: Date,
				phone: '',
				sex: '',
				groupClient: '',
				doctor: '',
				noSms: false,
			},
			address: {
				index: '',
				country: '',
				oblast: '',
				city: '',
				street: '',
				house: '',
			},
			pass: {
				typeDoc: '',
				seria: '',
				number: '',
				whoGave: '',
				dateGave: Date
			}
		}
	},

	validations:{
		firstname: {
			required,
			minLength: minLength(2)
		},
		lastname: {
			required,
			minLength: minLength(2)
		},
		date: {
			required
		},
		phone: {
			required,
			minLength: minLength(6)
		},
			sex: '',
			groupClient: '',
			doctor: '',
			noSms: false,
			address: {
				index: '',
				country: '',
				oblast: '',
				city: '',
				street: '',
				house: '',
			},
			pass: {
				typeDoc: '',
				seria: '',
				number: '',
				whoGave: '',
				dateGave: Date
			}
	}
}

</script>

<style lang="sass">
.form
	width: 80%
	margin: auto
	background-color: lightgrey
	border-box: box-sizing
	div
		display: flex
		flex-direction: column
		margin: 10px
		padding: 10px
		& > *
			margin: 10px
		.check-sms
			display: flex
			flex-direction: row
			align-items: center

</style>
