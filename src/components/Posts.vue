<template>
	<a href="#" @click.prevent="hide" class="mb-4 text-uppercase btn btn-success">create post</a>
	<div class="card w-75" :style="{display: deter}">
		<div class="card-body" v-for="(post,index) in posts" :key="index">
			<h3 class="card-title">{{ post.title }}</h3>
			<span class="text-muted"><a @click.prevent="trash(index)" href="#">delete</a></span>
			<p class="card-text">{{ post.body }}</p>
			<p class="blockquote-footer">{{ post.posted }}</p>
			<p class="card-footer"><a href="#" @click.prevent="favs(index)" class="btn btn-primary px-3 py-0 text-capitalize">{{likes(index)}}</a><b class="badge p-1 ml-2 badge-primary">{{post.fav}}</b>
		<!-- 	<a href=""  @click.prevent="editPost(index)" class="btn btn-info px-3 py-0 text-capitalize">edit</a> -->
			</p>
		</div>
		<h4 class="text-uppercase text-center" v-if="noPost != null">{{noPost}}</h4>
	</div>
	<div class="card w-75 mt-4" :class="{'d-none':show}">
	<Form @create="create" />
	<div v-if=" errors != null" class="alert alert-danger">
	<small class="text-danger text-uppercase"> <b>Error : </b><slot>{{ errors }}</slot> </small>
	</div>
	</div>
<!-- 	<update @update="update" :datas="edit" /> -->
</template>
<style lang="css" scoped>
.alert{
	border-radius: 0px;
}
</style>

<script>
import Form from './Form.vue'
//import Update from './Update.vue'
export default {

name: 'Posts',
components:{Form},
data () {
return {
	edit: {},
	noPost: null,
	deter: '',
	show: true,
	errors: null,
	posts: [
	{id: 1,title:"how to become a billionasire",body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",posted: this.time(),fav:0},
	{id: 2,title:"how to become a billionaire part II",body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",posted: this.time(),fav:0}
	],
}
},
computed:{

},
methods:{
	create(newPost){
		if(newPost.title != '' && newPost.body != ''){
			this.errors = null;
			this.noPost = null;
			console.log(this.posts.length)
		newPost.id += this.posts.length;
		this.posts.unshift({id:newPost.id,title:newPost.title,body:newPost.body,posted:newPost.posted,fav:newPost.fav});
		{newPost.title = "",newPost.id = "",newPost.body = ""}
		this.deter = 'block';
		this.show = true;
	}else{
		this.errors = "fill in blank fields!"
	}
	},
	hide(){
		//this.posts.pop()
		this.deter = 'none';
		this.show = false;
	},
	trash(data){
		this.posts.splice(data,1)
		this.posts.length < 1 ? this.noPost = ' ): That`s All ' : ''
	},
	editPost(data){
		this.edit = this.posts[data]
	},
	time(){
		var time = new Date(2021,2,4)
		return time.toDateString()
	},
		favs(data){
		return this.posts[data].fav < 1 ? this.posts[data].fav += 1 : this.posts[data].fav = 0
	},
		likes (data){
		return this.posts[data].fav == 0 ? 'like' : 'liked!'
	}
}
}
</script>

