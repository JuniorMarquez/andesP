import {RouterModule,Routes} from '@angular/router';
import {
	LoginComponent,
	PrincipalComponent,
	SignupComponent
	}from "./components/index.paginas";

	import { AuthGuard } from './guards/auth.guard';

const app_routes: Routes = [
	{path:'',component:PrincipalComponent},
	{path:'login',component:LoginComponent},
	{path:'signup',component:SignupComponent},
	{path:'**',pathMatch:'full',redirectTo:''}
	];
	export const app_routing = RouterModule.forRoot(app_routes);

