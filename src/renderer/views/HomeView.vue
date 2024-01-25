<script setup lang="ts">
import {onMounted} from 'vue';
import {useRouter} from 'vue-router'

import {useThemeStore} from '@/renderer/stores/themeStore.ts';
import {useApplicationActionsStore} from '@/renderer/stores/applicationActionsStore.ts';

import WrapperGeneral from '@/renderer/components/base/wrappers/WrapperGeneral.vue';
import NavWindowContainer from '@/renderer/components/base/NavWindowContainer.vue';
import ImageTitle from '@/renderer/components/base/images/imageTitle.vue';
import IconButton from '@/renderer/components/base/buttons/IconButton.vue';
import SecondaryButton from '@/renderer/components/base/buttons/SecondaryButton.vue';
import GeneralButton from '@/renderer/components/base/buttons/GeneralButton.vue';
import PrimaryField from '@/renderer/components/base/fields/PrimaryField.vue';
import TextSeparator from '@/renderer/components/base/separators/TextSeparator.vue';

const router = useRouter();
const themeStore = useThemeStore();
const applicationActionsStore = useApplicationActionsStore();

const themeColors = themeStore.getColorsByTheme();


window.ipcRenderer.on('download-progress', (event, progress) => {
	console.log(event);
	console.log('progress: ', progress);
});

window.ipcRenderer.on('open-update-available-modal', () => {
	// open modal actions
	alert('User confirm update');
	window.ipcRenderer.invoke('start-update-process');
	// open modal download progress check
});

window.ipcRenderer.on('alert', (event, message) => {
	console.log(event);
	alert(message);
});


onMounted(async () => {
	console.log('HomeView mounted');
});
</script>

<template>
	<NavWindowContainer>
		<template #main-side>
			<IconButton
				@click="applicationActionsStore.closeApplication"
				:icon-name="'close'"
				:fill-color-hex="themeColors.baseWhiteColor"
			/>
		</template>
		<template #support-side>
			<IconButton
				@click="router.push({name: 'menu'})"
				:icon-name="'menu'"
				:fill-color-hex="themeColors.baseWhiteColor"
			/>
		</template>
	</NavWindowContainer>
	<WrapperGeneral>
		<div class="main-action-container">
			<ImageTitle
				:path-to-image-source="'./src/renderer/assets/images/femods-title.png'"
				:alt-image-text="'femods – Менеджер сборок'"
			/>
			<div class="main-action-container__add-pack-block">
				<PrimaryField :placeholder="'Код сборки'"/>
				<SecondaryButton :scale="'general'" @click="router.push({name: 'launch'})">
					Добавить
				</SecondaryButton>
			</div><!-- main-action-container__add-pack-block -->
			<div class="main-action-container__auth-block">
				<TextSeparator>Войти</TextSeparator>
				<div class="main-action-container__buttons-block">
					<GeneralButton
						:text-color-hex="themeColors.baseWhiteColor"
						:fill-color-hex="themeColors.accentPrimaryDiscordColor"
						:inner-stroke-color-hex="themeColors.accentSecondaryDiscordColor"
						:outer-stroke-color-hex="themeColors.baseBlackColor"
						:bottom-stroke-color-hex="themeColors.baseBlackColor"
						:rounded="'general'"
						:scale="'general'"
					>
						Discord
					</GeneralButton>
					<GeneralButton
						:text-color-hex="themeColors.baseWhiteColor"
						:fill-color-hex="themeColors.accentPrimaryTelegramColor"
						:inner-stroke-color-hex="themeColors.accentSecondaryTelegramColor"
						:outer-stroke-color-hex="themeColors.baseBlackColor"
						:bottom-stroke-color-hex="themeColors.baseBlackColor"
						:rounded="'general'"
						:scale="'general'"
					>
						Telegram
					</GeneralButton>
				</div><!-- main-action-container__buttons-block -->
			</div><!-- main-action-container__buttons-block -->
		</div><!-- main-action-container -->
	</WrapperGeneral>
</template>

<style scoped lang="scss">

.main-action-container {
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	gap: 0.5em;
	height: 100%;
	padding-top: 1em;
}

.main-action-container__add-pack-block {
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	gap: 0.25em;
}

.main-action-container__auth-block {
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	gap: 0.25em;
}

.main-action-container__buttons-block {
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	gap: 0.25em;
}

.main-buttons-container__button {
	width: 100%;
}
</style>