import { PopupComponent } from "../widgets/popupComponent";
import { Autowired } from "../context/context";
import { GridOptionsWrapper } from "../gridOptionsWrapper";
import { EventService } from "../eventService";
import { GridApi } from "../gridApi";
import { ColumnApi } from "../columnController/columnApi";
import { PopupService } from "../widgets/popupService";

import { _ } from '../utils';

export class TooltipComponent extends PopupComponent {
    @Autowired('gridOptionsWrapper') private gridOptionsWrapper: GridOptionsWrapper;
    @Autowired('eventService') private eventService: EventService;
    @Autowired('gridApi') private gridApi: GridApi;
    @Autowired('columnApi') private columnApi: ColumnApi;
    @Autowired('popupService') private popupService: PopupService;

    constructor() {
        super(`<div class="ag-tooltip"></div>`);
    }
}