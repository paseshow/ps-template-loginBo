import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { LoginService } from '@services/login.service';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

export interface MenuItem {
	state: string;
	name: string;
	type: string;
	icon: string;
	children?: any[];
}

@Component({
	selector: 'app-layout',
	templateUrl: './admin-layout.component.html'
})
export class AdminLayoutComponent implements OnInit, OnDestroy {
	menuItems: MenuItem[];
	private _router: Subscription;

	today: number = Date.now();
	url: string;
	showSettings = false;
	boxed: boolean;
	collapseSidebar: boolean;
	compactSidebar: boolean;
	sidebarBg = true;
	currentLang = 'en';
	layoutDir = 'ltr';

	menuLayout: any = 'vertical-menu';
	selectedSidebarImage: any = 'bg-1';
	selectedSidebarColor: any = 'sidebar-green';
	selectedHeaderColor: any = 'header-default';
	collapsedClass: any = 'side-panel-opened';

	@ViewChild('sidemenu') sidemenu;

	constructor(
		private router: Router,
		public title: Title,
		private loginService: LoginService,
		public snackBar: MatSnackBar
	) {
		this.menuItems = [
			{
				state: 'configuracionEvento',
				name: 'Configuracion de Eventos',
				type: 'link',
				icon: 'settings'
			}
			// {
			// 	state: 'accesoStream',
			// 	name: 'Acceso a Transmisión en Vivo',
			// 	type: 'link',
			// 	icon: 'live_tv'
			// }
		];
		// aca visualizo en el menu, las cosas que sean para SuperAdmin
	}

	ngOnInit(): void {
		this._router = this.router.events
			.pipe(filter((event) => event instanceof NavigationEnd))
			.subscribe((event: NavigationEnd) => {
				this.url = event.url;
				if (this.isOver()) {
					this.sidemenu.close();
				}

				if (
					window.matchMedia(`(min-width: 960px)`).matches &&
					!this.isMac() &&
					!this.compactSidebar &&
					this.layoutDir !== 'rtl'
				) {
					// Ps.update(elemContent);
				}
			});
		this.onSelectedSidebarColor('sidebar-orange');
	}

	ngOnDestroy() {
		this._router.unsubscribe();
	}

	isOver(): boolean {
		if (
			this.url === '/apps/messages' ||
			this.url === '/apps/calendar' ||
			this.url === '/apps/media'
		) {
			return true;
		} else {
			return window.matchMedia(`(max-width: 960px)`).matches;
		}
	}

	isMac(): boolean {
		let bool = false;
		if (
			navigator.platform.toUpperCase().indexOf('MAC') >= 0 ||
			navigator.platform.toUpperCase().indexOf('IPAD') >= 0
		) {
			bool = true;
		}
		return bool;
	}

	menuMouseOver(): void {
		if (window.matchMedia(`(min-width: 960px)`).matches && this.collapseSidebar) {
			this.sidemenu.mode = 'over';
		}
	}

	menuMouseOut(): void {
		if (window.matchMedia(`(min-width: 960px)`).matches && this.collapseSidebar) {
			this.sidemenu.mode = 'side';
		}
	}

	menuToggleFunc() {
		this.sidemenu.toggle();

		if (this.collapsedClass === 'side-panel-opened') {
			this.collapsedClass = 'side-panel-closed';
		} else {
			this.collapsedClass = 'side-panel-opened';
		}
	}

	changeMenuLayout(value) {
		console.log(value);
		if (value) {
			this.menuLayout = 'top-menu';
		} else {
			this.menuLayout = 'vertical-menu';
		}
	}

	onSelectSidebarImage(selectedClass, event) {
		this.selectedSidebarImage = selectedClass;
	}

	onSelectedSidebarColor(selectedClass) {
		this.selectedSidebarColor = selectedClass;
	}

	onSelectedHeaderColor(selectedClass) {
		this.selectedHeaderColor = selectedClass;
	}

	isBgActive(value) {
		if (value === this.selectedSidebarImage) {
			return true;
		} else {
			return false;
		}
	}

	isSidebarActive(value) {
		if (value === this.selectedSidebarColor) {
			return true;
		} else {
			return false;
		}
	}

	isHeaderActive(value) {
		if (value === this.selectedHeaderColor) {
			return true;
		} else {
			return false;
		}
	}

	logout(): void {
		this.router.navigate(['autentificacion/login']);
	}
}
