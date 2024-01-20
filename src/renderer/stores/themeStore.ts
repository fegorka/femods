import {ColorHex} from "@/types";
import {defineStore} from "pinia";


interface OsInfo {
	name: string | null,
	themeType: string | null,
}

interface ThemeColors {
	[themeType: string]: Colors,
}

interface Colors {
	[colorHex: string]: ColorHex,
}

const osName = await window.ipcRenderer.invoke('getOsName');

export const useThemeStore = defineStore('themeStore', () => {
	const osInfo: OsInfo = {
		name: osName,
		themeType: null,
	};
	const themeColors: ThemeColors = {
		dark: {
			baseWhiteColor: '#fff',
			baseLightColor: '#68707C',
			baseGrayColor: '#404854',
			baseDarkColor: '#272C34',
			baseDeepColor: '#1E242D',
			baseBlackColor: '#000',

			accentPrimaryPositiveColor: '#00A617',
			accentSecondaryPositiveColor: '#30D74B',
			accentPrimaryNegativeColor: '#BE1F32',
			accentSecondaryNegativeColor: '#E43569',

			accentDeepColor: '#446E86',
			accentLinkColor: '#0BA1D1',

			accentPrimaryDiscordColor: '#5865F2',
			accentSecondaryDiscordColor: '#65C7FF',
			accentPrimaryTelegramColor: '#0BA1D1',
			accentSecondaryTelegramColor: '#79EEFF',
		},
		light: {
			baseWhiteColor: '#fff',
			baseLightColor: '#404854',
			baseGrayColor: '#272C34',
			baseDarkColor: '#1E242D',
			baseBlackColor: '#000',

			accentPrimaryPositiveColor: '#00A617',
			accentSecondaryPositiveColor: '#30D74B',
			accentPrimaryNegativeColor: '#BE1F32',
			accentSecondaryNegativeColor: '#E43569',

			accentDeepColor: '#446E86',
			accentLinkColor: '#0BA1D1',

			accentPrimaryDiscordColor: '#5865F2',
			accentSecondaryDiscordColor: '#65C7FF',
			accentPrimaryTelegramColor: '#0BA1D1',
			accentSecondaryTelegramColor: '#79EEFF',
		}
	};

	function getColorsByTheme(): Colors {
		if (osInfo.themeType === 'dark') return themeColors.dark;
		if (osInfo.themeType === 'light') return themeColors.light;
		else return themeColors.dark;
	}

	function getUIElementsPositionBySystem(): string {
		if (osInfo.name === 'darwin') return 'left';
		return 'right'
	}

	function setOsInfo(newName: string, newThemeType: string) {
		osInfo.name = newName;
		osInfo.themeType = newThemeType;
	}

	return {
		getColorsByTheme, getUIElementsPositionBySystem, setOsInfo,
	}
});