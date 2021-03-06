export namespace IDataGrid {
  export interface IPosition {
    x?: number;
    y?: number;
  }

  export interface IRect extends IPosition {
    width: number;
    height?: number;
  }

  export interface IColPrimitive {
    key?: string;
    label?: string;
    width?: number | string;
    align?: 'left' | 'center' | 'right' | string;
    colSpan?: number;
    rowSpan?: number;
  }

  export interface IonEventParam {
    e: React.MouseEvent<any> | React.KeyboardEvent<any>;
    eventName: string;
  }

  export interface IonRightClickParam {
    e: React.MouseEvent<any>;
    item: any;
    value: any;
    focusedRow?: number;
    focusedCol?: number;
  }

  export interface IonScrollEndFunctionParam {
    endOfScrollTop?: boolean;
    endOfScrollLeft?: boolean;
  }

  export interface IonChangeSelectedParam {
    filteredList?: any[];
  }

  export interface IonChangeSelectionParam {
    rows?: number[];
    cols?: number[];
  }

  export interface IapplyAutofitParam {
    asideWidth: number;
    colGroup: IAutofitCol[];
  }

  export type formatterFunction = (formatterData: IFormatterData) => any;

  export type collectorFunction = (formatterData: ICollectorData) => any;

  export type editorFunction = (editorData: IFormatterData) => void;

  export type userCallBackFunction = (param?: any) => void;

  export interface IEditingCell {
    rowIndex?: number;
    colIndex?: number;
    editor?: any;
  }

  export interface IFormatterData {
    data?: any;
    item?: any;
    index?: number;
    key?: string;
    value?: any;
    options?: any;
  }

  export interface ICollectorData {
    data?: any;
    key?: string;
    value?: any;
    options?: any;
  }

  export interface IFormatter {
    [key: string]: formatterFunction;
  }

  export interface ICollector {
    [key: string]: collectorFunction;
  }

  export interface ICol extends IColPrimitive {
    colIndex?: number;
    rowIndex?: number;
    formatter?: formatterFunction | string;
    collector?: collectorFunction | string;
    editor?: editorFunction | string | { type?: string };
    _ex?: number;
    _sx?: number;
    _width?: number;
    columnAttr?: string;
  }

  export interface IColumn extends IColPrimitive {
    colIndex?: number;
    rowIndex?: number;
    formatter?: formatterFunction | string;
    collector?: collectorFunction | string;
    editor?: editorFunction | string | { type?: string };
    hidden?: boolean;
    columns?: IColumn[];
    depth?: number;
    columnAttr?: string;
  }

  export interface IColumnKeys {
    selected?: string;
    modified?: string;
    deleted?: string;
    disableSelection?: string;
  }

  export interface IAutofitCol {
    colIndex: number;
    width: number;
    tdWidth: number;
  }

  export interface IMoving {
    active?: boolean;
    top?: boolean;
    bottom?: boolean;
    left?: boolean;
    right?: boolean;
  }

  export interface IColumnTableMapRow {
    cols: IColumn[];
  }

  export interface IColumnTableMap {
    rows: IColumnTableMapRow[];
  }

  export type ColumnDivideTable = {
    asideData: IColumnTableMap;
    asideColGroup: any[];
    leftData: IColumnTableMap;
    rightData: IColumnTableMap;
  };

  export interface IOptionHeader {
    display?: boolean;
    align?: 'left' | 'center' | 'right' | undefined;
    columnHeight?: number;
    columnPadding?: number;
    columnBorderWidth?: number;
    selector?: boolean;
    sortable?: boolean;
    enableFilter?: boolean;
    clickAction?: 'select' | 'sort' | undefined;
    filterIconClassName?: string;
  }

  export interface IOptionBody {
    align?: 'left' | 'center' | 'right' | undefined;
    columnHeight?: number;
    columnPadding?: number;
    columnBorderWidth?: number;
    grouping?: boolean;
    mergeCells?: boolean;
  }

  export interface IOptionPageButton {
    className: string;
    onClick: string | userCallBackFunction;
    width?: number;
  }

  export interface IOptionPage {
    // buttons?: IOptionPageButton[];
    // buttonHeight?: number;
    height?: number;
  }

  export interface IOptionScroller {
    theme?: string;
    width?: number;
    height?: number;
    arrowSize?: number;
    barMinSize?: number;
    padding?: number;
    horizontalScrollerWidth?: number;
  }

  export interface IOptions {
    frozenColumnIndex?: number;
    frozenRowIndex?: number;
    showLineNumber?: boolean;
    showRowSelector?: boolean;
    multipleSelect?: boolean;
    columnMinWidth?: number;
    lineNumberColumnWidth?: number;
    rowSelectorColumnWidth?: number;
    remoteSort?: boolean;
    header?: IOptionHeader;
    body?: IOptionBody;
    page?: IOptionPage;
    scroller?: IOptionScroller;
    columnKeys?: IColumnKeys;
    footSum?: boolean;
    bodyLoaderHeight?: number;
    autofitColumns?: boolean;
    autofitColumnWidthMax?: number;
    autofitColumnWidthMin?: number;
  }

  export interface IStyles {
    asidePanelWidth?: number;
    frozenPanelWidth?: number;
    bodyTrHeight?: number;
    elWidth?: number;
    elHeight?: number;
    rightPanelWidth?: number;
    headerHeight?: number;
    bodyHeight?: number;
    frozenPanelHeight?: number;
    footSumHeight?: number;
    pageHeight?: number;
    verticalScrollerWidth?: number;
    horizontalScrollerHeight?: number;
    scrollContentContainerHeight?: number;
    scrollContentHeight?: number;
    scrollContentContainerWidth?: number;
    scrollContentWidth?: number;
    verticalScrollerHeight?: number;
    verticalScrollBarHeight?: number;
    horizontalScrollerWidth?: number;
    horizontalScrollBarWidth?: number;
    scrollerPadding?: number;
    scrollerArrowSize?: number;
  }

  export interface IStoreProps {
    loading?: boolean;
    loadingData?: boolean;
    data?: any[];
    selection?: ISelection;
    rowSelector?: IRowSelector;
    width?: number;
    height?: number;
    scrollLeft?: number;
    scrollTop?: number;
    columnHeight?: number;
    options?: IOptions;
    status?: React.ReactNode;

    headerColGroup?: ICol[];
    headerTable?: IColumnTableMap;
    headerData?: IColumnTableMap;
    asideHeaderData?: IColumnTableMap;
    leftHeaderData?: IColumnTableMap;

    bodyRowTable?: IColumnTableMap;
    bodyRowData?: IColumnTableMap;
    bodyRowMap?: {};
    asideBodyRowData?: IColumnTableMap;
    leftBodyRowData?: IColumnTableMap;

    autofitColGroup?: IAutofitCol[];
    colGroup?: ICol[];
    colGroupMap?: {};
    asideColGroup?: ICol[];
    leftHeaderColGroup?: ICol[];

    footSumColumns?: IColumn[][];
    footSumTable?: IColumnTableMap;
    leftFootSumData?: IColumnTableMap;
    footSumData?: IColumnTableMap;

    rootNode?: React.RefObject<HTMLDivElement>;
    clipBoardNode?: React.RefObject<HTMLTextAreaElement>;

    rootObject?: any;

    setScrollLeft?: (scrollLeft: number) => void;
    setScrollTop?: (scrollTop: number) => void;
    onBeforeEvent?: (param: IonEventParam) => void;
    onAfterEvent?: (param: IonEventParam) => void;
    onScrollEnd?: (param: IonScrollEndFunctionParam) => void;
    onRightClick?: (param: IonRightClickParam) => void;
  }

  export interface IStoreState {
    loading?: boolean;
    loadingData?: boolean;

    data?: any[];
    filteredList?: any[];
    listSelectedAll?: boolean;
    selectedRowIndex?: number;
    selectedRowIndexSelected?: boolean;
    sortInfo?: {};
    filterInfo?: {};
    width?: number;
    height?: number;
    columnHeight?: number;

    onBeforeEvent?: (param: IonEventParam) => void;
    onAfterEvent?: (param: IonEventParam) => void;
    onScrollEnd?: (param: IonScrollEndFunctionParam) => void;
    onRightClick?: (param: IonRightClickParam) => void;

    selection?: ISelection;
    rowSelector?: IRowSelector;

    isInlineEditing?: boolean;
    inlineEditingCell?: IEditingCell;

    columnResizing?: boolean;
    columnResizerLeft?: number;

    isColumnFilter?: boolean | number;
    scrollLeft?: number;
    scrollTop?: number;
    endOfScrollTop?: boolean;
    endOfScrollLeft?: boolean;
    selectionRows?: {};
    selectionCols?: {};
    focusedRow?: number;
    focusedCol?: number;

    selectionStartOffset?: IPosition;
    selectionEndOffset?: IPosition;
    selectionMinOffset?: IPosition;
    selectionMaxOffset?: IPosition;

    selectionSRow?: number;
    selectionSCol?: number;
    selectionERow?: number;
    selectionECol?: number;

    printStartColIndex?: number;
    printEndColIndex?: number;

    autofitColGroup?: IAutofitCol[];
    colGroup?: ICol[];
    colGroupMap?: {};
    asideColGroup?: ICol[];
    leftHeaderColGroup?: ICol[];
    headerColGroup?: ICol[];
    bodyGrouping?: ICol[];
    headerTable?: IColumnTableMap;
    asideHeaderData?: IColumnTableMap;
    leftHeaderData?: IColumnTableMap;
    headerData?: IColumnTableMap;
    bodyRowTable?: IColumnTableMap;
    asideBodyRowData?: IColumnTableMap;
    leftBodyRowData?: IColumnTableMap;
    bodyRowData?: IColumnTableMap;
    bodyRowMap?: {};
    bodyGroupingTable?: IColumnTableMap;
    asideBodyGroupingData?: IColumnTableMap;
    leftBodyGroupingData?: IColumnTableMap;
    bodyGroupingData?: IColumnTableMap;
    bodyGroupingMap?: {};
    footSumColumns?: IColumn[][];
    footSumTable?: IColumnTableMap;
    leftFootSumData?: IColumnTableMap;
    footSumData?: IColumnTableMap;
    styles?: IStyles;
    options?: IOptions;
    status?: React.ReactNode;

    visibleHeaderColGroup?: ICol[];
    visibleBodyRowData?: IColumnTableMap;
    visibleBodyGroupingData?: IColumnTableMap;
    visibleFootSumData?: IColumnTableMap;

    propColumns?: string;
    propOptions?: string;

    predefinedFormatter?: IFormatter;
    predefinedCollector?: ICollector;
    rootObject?: any;

    rootNode?: React.RefObject<HTMLDivElement>;
    clipBoardNode?: React.RefObject<HTMLTextAreaElement>;
  } // footSum의 출력레이아웃 // frozenColumnIndex 를 기준으로 나누어진 출력 레이아웃 왼쪽 // frozenColumnIndex 를 기준으로 나누어진 출력 레이아웃 오른쪽

  export interface IRowSelector {
    show: boolean;
    rowKey: string;
    selectedRowKeys?: string[];
    onChange?: (param: IonChangeSelectedParam) => void;
  }
  export interface ISelection {
    rows?: number[];
    cols?: number[];
    onChange?: (param: IonChangeSelectionParam) => void;
  }

  export interface IProps {
    data?: any[];
    columns: IColumn[];
    footSum?: IColumn[][];
    width: number;
    height: number;
    style?: any;
    options?: IOptions;
    status?: React.ReactNode;
    loading?: boolean;
    loadingData?: boolean;
    rowSelector?: IRowSelector;
    selection?: ISelection;
    scrollLeft?: number;
    scrollTop?: number;
    onBeforeEvent?: (param: IonEventParam) => void;
    onAfterEvent?: (param: IonEventParam) => void;
    onScrollEnd?: (param: IonScrollEndFunctionParam) => void;
    onRightClick?: (param: IonRightClickParam) => void;
  }

  export interface IRootState {
    mounted: boolean;
    autofit: boolean;
    doneAutofit: boolean;
    autofitAsideWidth: number;
    autofitColGroup: IAutofitCol[];
  }

  export type DispatchParam = { [key: string]: any };
}
