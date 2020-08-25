<template>
<div> 
	<form class="form"> 
		<FormMain />
		<FormAdress />
		<FormPass />
	</form> 
</div> 
</template>

<script>
import FormMain from './FormMain'
import FormAdress from './FormAdress'
import FormPass from './FormPass'

export default {
	components:{
		FormMain, FormAdress, FormPass
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
</style>
