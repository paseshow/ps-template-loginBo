import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
	constructor(private router: Router, private title: Title) {
		this.title.setTitle('Stream PaseShow');
		debugger
		if (!localStorage.getItem('tokenStream')) {
			this.router.navigate(['autentificacion/login']);
			this.title.setTitle('');
		}
	}
}
