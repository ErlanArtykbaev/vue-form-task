<template>
<div> 
	<form class="form" @submit.prevent="alert"> 
		<div class="main"> 
			<h3>Основное:</h3> 
			<input
				class="input"
				required
				v-model.trim="form.main.lastname"
				type="text" 
				placeholder="Фамилия" 
				:class="{redborder: $v.form.main.lastname.$invalid}"
			/>
			<p v-if="!$v.form.main.lastname.minLength">error! min char 3</p>
			<p v-if="!$v.form.main.lastname.required">error! required</p>
			<input
				required
				v-model.trim="form.main.firstname"
				type="text" 
				:class="{redborder: $v.form.main.firstname.$invalid}"
				placeholder="Имя" /> 
			<p v-if="!$v.form.main.firstname.minLength">error! min char 3</p>
			<p v-if="!$v.form.main.firstname.required">error! required</p>
			<input
				v-model.trim="form.main.dadsname"
				type="text" 
				placeholder="Отчество" /> 
			<input 
				required
				v-model.trim="form.main.date"
				type="date" /> 
			<p v-if="!$v.form.main.date.required">error! required</p>
			<input 
				required
				type="number" 
				:class="{redborder: $v.form.main.phone.$invalid}"
				v-model.number="form.main.phone"
				placeholder="Номер: 7 777 777" /> 
			<p v-if="!$v.form.main.phone.minLength">error! min char 6</p>
			<p v-if="!$v.form.main.phone.required">error! required</p>
			<input 
				type="text" 
				v-model.trim="form.main.sex"
				placeholder="Пол"> 
			<select 
				required
				v-model="form.main.groupClient" 
				name="group-client" 
				id="group-client" 
				multiple> 
				<option value="vip" >VIP</option> 
				<option value="problematic">Проблемные</option> 
				<option value="omc">OMC</option> 
			</select> 
			<select 
				v-model="form.main.doctor" 
				name="doctor" 
				id="doctor"> 
				<option value="ivanov" >Иванов</option> 
				<option value="zaharov">Захаров</option>
				<option value="chernysheva">Чернышева</option> 
			</select> 
			<div class="check-sms"> 
				<input 
					v-model="form.main.noSms" 
					type="checkbox" 
					name="no-sms" 
					id="no-sms"/> 
				<label for="no-sms">Не отправлять смс</label> 
			</div> 
		</div>
		<div class="address"> 
			<h3>Адрес:</h3> 
			<input 
				v-model.trim="form.address.index"
				type="number" 
				placeholder="Индекс"> 
			<input 
				v-model.trim="form.address.country"
				type="text" 
				placeholder="Страна"> 
			<input 
				v-model.trim="form.address.oblast"
				type="text" 
				placeholder="Область"> 
			<input 
				required 
				v-model.trim="form.address.city"
				type="text"
				:class="{redborder: $v.form.address.city.$invalid}"
				placeholder="Город"> 
			<p v-if="!$v.form.address.city.required">error! required</p>
			<input
				v-model.trim="form.address.street"
				type="text" 
				placeholder="Улица"> 
			<input
				v-model.trim="form.address.house"
				type="text" 
				placeholder="Дом"> 
		</div> 
		<div class="pass"> 
			<h3>Паспорт:</h3> 
			<select required name="document-type" v-model="form.pass.typeDoc" id="document-type"> 
				<option value="pass" default>Паспорт</option> 
				<option value="birth-sertificate">Свидетельство о рождении</option> 
				<option value="driver-license">Водительское удостовирение</option> 
			</select> 
			<input
				v-model.trim="form.pass.seria"
				type="text" 
				placeholder="Серия"> 
			<input
				v-model.trim="form.pass.number"
				type="text" 
				placeholder="Номер"> 
			<input
				v-model.trim="form.pass.whoGave"
				type="text" 
				placeholder="Кем выдан"> 
			<input 
				required
				v-model="form.pass.dateGave"
				type="date" 
				placeholder="Дата выдачи"> 
			<p v-if="!$v.form.address.city.required">error! required</p>
		</div> 
		<button type="submit">Submit</button>
	</form> 
</div> 
</template>

<script>
import {required, minLength, email} from 'vuelidate/lib/validators'


export default {
	data(){
		return{
			form:{
				main:{
					firstname: '',
					lastname: '',
					dadsname: '',
					date: Date,
					phone: '',
					sex: '',
					groupClient: [],
					doctor: 'ivanov',
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
					typeDoc: 'pass',
					seria: '',
					number: '',
					whoGave: '',
					dateGave: Date
				}
			}
		}
	},

	validations:{
		form:{
			main:{
				firstname: {
					required,
					minLength: minLength(3)
				},
				lastname: {
					required,
					minLength: minLength(3)
				},
				date: {
					required
				},
				phone: {
					required,
					minLength: minLength(6)
				},
				groupClient: {
					required
				}
			},
			address: {
				city: {
					required
				}
			},
			pass: {
				typeDoc: {
					required
				},
				dateGave: {
					required
				}
			}
		}
	},
	methods:{
		checkForm(){
			this.$v.form.$touch()
			if(this.$v.form.$error){
				console.log('validation is not true')
			}
		},
		alert(){
			alert('you submitted')
		}
	}
}

</script>

