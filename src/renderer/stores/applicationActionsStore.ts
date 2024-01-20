import {defineStore} from "pinia";


export const useApplicationActionsStore = defineStore('applicationActionsStore', () => {
	async function closeApplication() {
		await window.ipcRenderer.invoke('closeApplication');
	}

	return {closeApplication}
});