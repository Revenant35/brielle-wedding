import { Component } from '@angular/core';
// import {RegistryService} from "../../services/registry.service";
import {RegistryEntry} from "../../models/registry_entry";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss']
})
export class RegistryComponent {
  displayedColumns: string[] = [
    'name',
    'totalQuantity',
    'claimedQuantity',
    // 'actions'
  ];
  dataSource: MatTableDataSource<RegistryEntry> = new MatTableDataSource([
    { name: 'Toaster', totalQuantity: 5, claimedQuantity: 0 },
    { name: 'Microwave', totalQuantity: 3, claimedQuantity: 0 },
    { name: 'Plates', totalQuantity: 3, claimedQuantity: 0 },
    { name: 'Silverware', totalQuantity: 4, claimedQuantity: 0 },
    { name: 'Fine China', totalQuantity: 16, claimedQuantity: 0 },
    { name: 'Throw Blankets', totalQuantity: 3, claimedQuantity: 0 },
    { name: 'Comforter', totalQuantity: 2, claimedQuantity: 0 },
    { name: 'Pillows', totalQuantity: 6, claimedQuantity: 0 },
    { name: 'Knife Set', totalQuantity: 1, claimedQuantity: 0 },
    { name: 'Coffee Maker', totalQuantity: 1, claimedQuantity: 0 },
    { name: 'Blender', totalQuantity: 1, claimedQuantity: 0 },
    // ... add more items
  ]);

  increment(item: RegistryEntry) {
    if (item.claimedQuantity < item.totalQuantity) {
      item.claimedQuantity++;
    }
  }

  decrement(item: RegistryEntry) {
    if (item.claimedQuantity > 0) {
      item.claimedQuantity--;
    }
  }

  constructor(
    // private registryService: RegistryService,
  ) {}

  async ngOnInit() {
    // this.dataSource.data = await this.registryService.getRegistry();
  }
}
