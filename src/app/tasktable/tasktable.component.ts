import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator, MatTable, MatDialog } from '@angular/material';
import { TableService } from '../table.service';
import { ModalComponent } from '../modal/modal.component';
import { SelectionModel } from '@angular/cdk/collections';
import { Task } from '../models/task.model'


@Component({
  selector: 'app-tasktable',
  templateUrl: './tasktable.component.html',
  styleUrls: ['./tasktable.component.css']
})

export class TasktableComponent implements OnInit {

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  @ViewChild(MatSort,  { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  dataSource;
  selection = new SelectionModel<Task>(true, []);;
  displayedColumns = ['id', 'name', 'description', 'date', 'edit', 'select'];

  constructor(private tableService: TableService, public dialog: MatDialog) {

  }

  openDialog (action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '600px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {

      //Call table-service and do operations based on result.event

      if (result.event == 'Add') {
        this.tableService.addTask(result.data);
        this.dataSource.data = this.tableService.getTask();
        this.dataSource.sort = this.sort;
        this.table.renderRows();
      }

      else if (result.event == 'Update') {
        this.tableService.updateTask(result.data);
      } 

      //Iteration over selected items and getting the index number of each selection and deleting it from the table 
      else if (result.event == 'Delete') {
        let tempTask =this.tableService.getTask();
        this.selection.selected.forEach(item => {
          let index: number = tempTask.findIndex(d => d === item);
          this.tableService.deleteTask(index, 1);
          this.dataSource = new MatTableDataSource<Task>(tempTask);
          this.dataSource.sort = this.sort;
        });
        this.selection = new SelectionModel<Task>(true, []);
        this.dataSource.paginator = this.paginator;
      }

    });
  }

  //Whether the number of selected elements matches the total number of rows.
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  // Selects all rows if they are not all selected; otherwise clear selection.
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.tableService.getTask());
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  //Function for searching specific string in the table
  doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}




