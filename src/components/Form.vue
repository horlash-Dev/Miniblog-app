<template>
	<div class="container">
			<form class="form-group" id="form" @submit.enter.prevent="$emit('create',newPost)">
				<div class="form-group">
					<label for="exampleInputName2">Title</label>
					<input v-model="newPost.title" type="text" class="form-control" name="" i placeholder="">
				</div>
				<div class="form-group">
					<label for="exampleInputEmail2">Body</label>
					<textarea class="form-control" v-model="newPost.body" rows="10" cols="40"></textarea>
				</div>
				<button type="submit" class="btn btn-primary">POST</button>
			</form>
			</div>
</template>

<script>
export default {

name: 'Form',
components:{},
data () {
return {
	newPost:{id: 1, title:'',body:'',posted:this.time(),fav:0}
}
},
methods: {
		time(){
		var time = new Date()
		return time.toDateString()
	}
}
}
</script>

<style lang="css" scoped>
</style>
