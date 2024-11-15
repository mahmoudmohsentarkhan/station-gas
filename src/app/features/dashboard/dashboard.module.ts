import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import * as _  from '@app/dahsboard';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    _.HeaderComponent,
    _.HourlySalesComponent,
    _.SalesByStationComponent,
    _.StationOverviewComponent,
    _.StationListComponent

],
  exports:[DashboardComponent]
})
export class DashboardModule { }
