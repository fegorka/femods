import { defineStore } from "pinia";

interface State {
	os: Os,
	themeColors: ThemeColors,
}

interface Os {
	name: string | null,
	themeType: string | null,
}

interface ThemeColors {
	[themeType: string]: Colors,
}

interface Colors {
	[colorHex: string]: `#${string}`,
}

export const useThemeStore = defineStore('themeStore', {
	state: (): State => ({
		os: {
			name: null,
			themeType: null,
		},
		themeColors: {
			dark: {
				baseWhiteColor: '#fff',
				baseLightColor: '#272C34',
				baseGrayColor: '#404854',
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
			},
			light: {
				baseWhiteColor: '#fff',
				baseLightColor: '#272C34',
				baseGrayColor: '#404854',
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
		}
	}),
	getters: {
		colorsByTheme(): Colors {
			if (this.os.themeType === 'dark') return this.themeColors.dark;
			if (this.os.themeType === 'light') return this.themeColors.light;
			else return this.themeColors.dark;
		},
		osName(): string {
			if(this.os.name !== null) return this.os.name;
			return 'win'
		}
	},
	actions: {
		setOsInfo(newName: string, newThemeType: string){
			this.os.name = newName;
			this.os.themeType = newThemeType;
		}
	}
}) 