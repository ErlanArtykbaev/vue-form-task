<template>
	<div class="main"> 
		<h3>Основное:</h3> 
		<input type="text" placeholder="Фамилия" /> 
		<input type="text" placeholder="Имя" /> 
		<input type="text" placeholder="Отчество" /> 
		<input type="date" /> 
		<input type="text" placeholder="Номер" /> 
		<input type="text" placeholder="Пол"> 
		<input type="text" placeholder="Пол"> 
		<select name="group-client" id="group-client" multiple> 
		<option value="vip">VIP</option> 
		<option value="problematic">Проблемные</option> 
		<option value="omc">OMC</option> 
		</select> 
		<select name="doctor" id="doctor"> 
			<option value="ivanov">Иванов</option> 
			<option value="zaharov">Захаров</option>
			<option value="chernysheva">Чернышева</option> 
		</select> 
		<div> 
			<input type="checkbox" name="no-sms" id="no-sms"/> 
			<label for="no-sms">Не отправлять смс</label> 
		</div> 
	</div>
</template>
