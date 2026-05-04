import { TestBed } from '@angular/core/testing';

import { ProveedorAPI } from './proveedor-api';

describe('ProveedorAPI', () => {
  let service: ProveedorAPI;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProveedorAPI);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
