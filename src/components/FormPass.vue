<template>
	<div class="pass"> 
		<h3>Паспорт:</h3> 
		<select name="document-type" id="document-type"> 
			<option value="pass">Паспорт</option> 
			<option value="birth-sertificate">Свидетельство о рождении</option> 
			<option value="driver-license">Водительское удостовирение</option> 
		</select> 
		<input type="text" placeholder="Серия"> 
		<input type="text" placeholder="Номер"> 
		<input type="text" placeholder="Кем выдан"> 
		<input type="text" placeholder="Дата выдачи"> 
	</div> 
</template>
