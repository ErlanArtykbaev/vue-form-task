<template>
	<div class="main"> 
		<h3>Основное:</h3> 
		<input
			v-model="main.lastname"
			type="text" 
			placeholder="Фамилия" 
		/>
		<input
			v-model="main.firstname"
			type="text" 
			placeholder="Имя" /> 
		<input
			v-model="main.dadsname"
			type="text" 
			placeholder="Отчество" /> 
		<input 
			v-model="main.date"
			type="date" /> 
		<input 
			type="text" 
			v-model="main.phone"
			placeholder="Номер" /> 
		<input 
			type="text" 
			v-model="main.sex"
			placeholder="Пол"> 
		<select 
			v-model="main.groupClient" 
			name="group-client" 
			id="group-client" 
			multiple> 
			<option value="vip">VIP</option> 
			<option value="problematic">Проблемные</option> 
			<option value="omc">OMC</option> 
		</select> 
		<select 
			v-model="main.doctor" 
			name="doctor" 
			id="doctor"> 
			<option value="ivanov">Иванов</option> 
			<option value="zaharov">Захаров</option>
			<option value="chernysheva">Чернышева</option> 
		</select> 
		<div class="check-sms"> 
			<input 
				v-model="main.noSms" 
				type="checkbox" 
				name="no-sms" 
				id="no-sms"/> 
			<label for="no-sms">Не отправлять смс</label> 
		</div> 
	</div>
</template>

<script>
export default{
	props:['main']
}
</script>

<style lang="sass">
</style>
