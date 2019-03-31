Vue.component('fl-projects', {
	props: ['name','link'],

	template: '<a class="navbar-item" :href="link">{{name}}</a>'

})

new Vue({
  el: "#nav"
})
