import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatDividerModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule,
  MatGridListModule,
  MatListModule,
  MatTabsModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatSnackBarModule,
  MatTableModule
} from '@angular/material';

const MaterialComponents = [
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule,
  MatGridListModule,
  MatListModule,
  MatTabsModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatSnackBarModule,
  MatTableModule,
  MatCheckboxModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatCardModule,
  MatDividerModule
];

@NgModule({
  imports: [
    CommonModule,
    ...MaterialComponents
  ],
  exports: [...MaterialComponents],
  declarations: []
})
export class MaterialDesignModule { }
