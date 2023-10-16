import { Injectable } from '@angular/core';
import {RegistryEntry} from "../models/registry_entry";

@Injectable({
  providedIn: 'root'
})
export class RegistryService {

  constructor() { }

  async getRegistry(): Promise<RegistryEntry[]> {
    return [];
  }
}
