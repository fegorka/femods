import {createApp} from 'vue';
import {createPinia} from 'pinia';
import App from '@/renderer/App.vue'
import router from '@/renderer/router';

const app = createApp(App);
app.use(createPinia()).use(router);


// const componentConfigs = [
// 	{ name: 'buttonPrimary', component: buttonPrimary },
// ]
// componentConfigs.forEach(componentConfig => {
// 	console.log(`name ${componentConfig.name} | ${componentConfig.component}`);
// 	app.component(componentConfig.name, componentConfig.component );
// });

app.mount('#app').$nextTick(() => {
	postMessage({payload: 'removeLoading'}, '*')
	window.ipcRenderer.on('main-process-message', (_event, message) => {
		console.log(message)
	});
});

// router.push({ name: 'FirstLaunchConfigure'});
// router.push({ name: 'launch'});
//await router.replace({name: 'home'});