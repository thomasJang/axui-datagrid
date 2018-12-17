import * as React from 'react';
import { IDataGridStore } from '../providers';
import { IDataGridCol } from '../common/@types';
interface IProps extends IDataGridStore {
    ci: number;
    col?: IDataGridCol;
    value?: any;
}
declare const _default: React.ComponentClass<Pick<IProps, "col" | "value" | "ci">, any>;
export default _default;
