<template>
	<div class="container-fluid">
			<ul class="nav justify-content-center">
				<li class="nav-item">
					<a class="nav-link" href="#"><router-link to="/">Home</router-link> </a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#"> <router-link to="/about">About</router-link></a>
				</li>
			</ul>
			</div>
</template>
<style type="" scoped="">
	a{
		
	}
	.nav li a{
		margin: auto;
		font-size: 20px;
		text-align: center;
		color: #000;
		font-family: sans-serif;
	}
</style>
<script type="text/javascript">	
export default {
name: 'Header',

  data () {
    return {

    }
  },
methods: {
	hide(){

	}
}
}
</script>
