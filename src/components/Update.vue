<template>
		<div class="container">
			<form class="form-group" id="form" @submit.enter.prevent="$emit('update')">
				<div class="form-group">
					<label for="exampleInputName2">Title</label>
					<input  type="text" v-model="edit.title" class="form-control" name="" i placeholder="">
				</div>
				{{datas}}<i>---</i>
				{{editContent}}
				<div class="form-group">
					<label for="exampleInputEmail2">Body</label>
					<textarea class="form-control" v-model="edit.body" rows="10" cols="40"></textarea>
				</div>
				<button type="submit" class="btn btn-primary">UPDATE</button>
			</form>
			</div>
</template>

<script>
export default {
//eslint-disable-next-line no-unsed-vars
name: 'Update',
props:{datas: Object},

data() {
return {
editContent: ''
}
},
methods:{
	edit(){
		return this.editContent = this.datas
	},
	update(){

	}
}
};
</script>

<style lang="css" scoped>
</style>
