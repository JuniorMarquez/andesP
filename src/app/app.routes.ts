import {RouterModule,Routes} from '@angular/router';
import {
	LoginComponent,
	PrincipalComponent,
	SignupComponent,
	AboutComponent,
	TreksComponent,
	BlogComponent
	}from "./components/index.paginas";

	import { AuthGuard } from './guards/auth.guard';

const app_routes: Routes = [
	{path:'',component:PrincipalComponent},
	{path:'about',component:AboutComponent},
	{path:'login',component:LoginComponent},
	{path:'signup',component:SignupComponent},
	{path:'blog',component:BlogComponent},
	{path:'treks',component:TreksComponent},
	{path:'**',pathMatch:'full',redirectTo:''}
	];
	export const app_routing = RouterModule.forRoot(app_routes);

