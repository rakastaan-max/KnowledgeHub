import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel';

export default defineConfig({
	adapter: vercel(),
	integrations: [
		starlight({
			title: 'IT-Hardware Hub',
			description: 'Interaktiver Studienführer für Computerhardware in der Berufsausbildung',
			customCss: ['./src/styles/custom.css'],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/yourusername/knowledgehub' },
			],
			sidebar: [
				{
					label: 'Startseite',
					link: '/',
				},
				{
					label: '📚 Grundlagen',
					items: [
						{ label: 'Übersicht', link: '/01-grundlagen/' },
						{ label: 'Evolution der Datenverarbeitung', link: '/01-grundlagen/evolution' },
						{ label: 'Analog vs. Digital', link: '/01-grundlagen/analog-digital' },
						{ label: 'DV-Geräte Kategorien', link: '/01-grundlagen/dv-geraete' },
					],
				},
				{
					label: '⚙️ EVA-Prinzip',
					items: [
						{ label: 'Das EVA-Prinzip', link: '/02-eva-prinzip/' },
						{ label: 'Eingabe', link: '/02-eva-prinzip/eingabe' },
						{ label: 'Verarbeitung', link: '/02-eva-prinzip/verarbeitung' },
						{ label: 'Speicherung', link: '/02-eva-prinzip/speicherung' },
						{ label: 'Ausgabe', link: '/02-eva-prinzip/ausgabe' },
					],
				},
				{
					label: '🔧 CPU & Architektur',
					items: [
						{ label: 'CPU-Architektur', link: '/03-cpu-architektur/' },
						{ label: 'CPU-Einheiten', link: '/03-cpu-architektur/cpu-einheiten' },
						{ label: 'RISC vs. CISC', link: '/03-cpu-architektur/risc-vs-cisc' },
						{ label: 'Cache & Register', link: '/03-cpu-architektur/cache-register' },
					],
				},
				{
					label: '🖥️ Mainboard & Chipsatz',
					items: [
						{ label: 'Mainboard-Architektur', link: '/04-mainboard-chipsatz/' },
						{ label: 'Leiterbahnen & Bussysteme', link: '/04-mainboard-chipsatz/leiterbahnen' },
						{ label: 'Timer, CMOS & Firmware', link: '/04-mainboard-chipsatz/timing-firmware' },
						{ label: 'Chipsatz-Evolution', link: '/04-mainboard-chipsatz/chipsatz-evolution' },
						{ label: 'Speicherhierarchie', link: '/04-mainboard-chipsatz/speicherhierarchie' },
					],
				},
				{
					label: '📖 Glossar & Selbstkontrolle',
					link: '/05-glossar/',
				},
			],
			// Sky Blue Theme (#0284c7)
			favicon: '/favicon.svg',
		}),
	],
});
