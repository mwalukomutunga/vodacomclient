import React from "react";
import { useRouter } from "next/router";
import DataGrid, {
  Sorting,
  FilterPanel,
  HeaderFilter,
  Export,
  FilterRow,
  Selection,
  Paging,
  Pager,
  Editing,
  Grouping,
  Popup,
  ColumnChooser,
  StateStoring
} from "devextreme-react/data-grid";

const DataTable = ({
  columns,
  dataSource,
  handlesave,
  handleDelete,
  handleUpdate,
  title,
  Page,
  width,
  height,
  children,
}) => {
  const router = useRouter();
  const saving = (e) => {
    handlesave(e.data);
    e.cancel = true;
    router.reload();
  };
  const deleterecord = (e) => {
    handleDelete(e.data);
  };
  const updaterecord = (e) => {
    handleUpdate(e.data);
    e.cancel = true;
    router.reload();
  };
  const pageSizes = [20,50, 100,200,500,1000,'all'];
  return (
    <DataGrid
      dataSource={dataSource}
      columnsAutoWidth="true"
      defaultColumns={columns}
      showBorders={true}
      showRowLines={true}
      rowAlternationEnabled={false}
      columnHidingEnabled={false}
      columnMinWidth ={90}
      showPageSizeSelector ={true}
      // onRowInserting={(e) => saving(e)}
      // onRowRemoving={deleterecord}
      // onRowUpdated={updaterecord}
      allowColumnResizing={true}
    >
      <Editing
        mode="popup"
        allowUpdating={false}
        allowAdding={false}
        allowDeleting={false}
        useIcons={true}
      >
        <Popup title={title} showTitle={true} width='auto' height='auto' />

        {children}
      </Editing>
      <ColumnChooser enabled={true}  mode="select"/>
      <StateStoring enabled={true} type="localStorage" storageKey={Page} />
      <Grouping contextMenuEnabled={true} />
      <Selection mode="multiple" />
      <Sorting mode="multiple" />
      <FilterRow visible={true} />
      <FilterPanel visible={true} />
      <HeaderFilter visible={true} />
      <Pager
        allowedPageSizes={pageSizes}
        showPageSizeSelector={true}
        showNavigationButtons={true}
      />
      <Paging defaultPageSize={20} />
      <Export enabled={true} allowExportSelectedData={false} />
    </DataGrid>
  );
};

export default DataTable;
