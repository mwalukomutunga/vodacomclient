import { useEffect, useState } from "react";
import DataTable from "../components/Table";
import { Item, RequiredRule } from "devextreme-react/form";
import { Form, Label } from "devextreme-react/data-grid";
import TextBox from "devextreme-react/text-box";
import requests from "../agent";
const page = "/Orders";

const columns = [
  "valueChain",
  "insured",
  "phone",
  "plantingDate",
  "level1",
  "level2",
  "premium",
  "duration",
  "rate",
  "currency",
  "insuranceType",
  "createdAt",
  "cover",
  "latitude",
  "longitude",
];

const Sales = () => {
  const [data, setData] = useState([]);
  const [inputs, setInputs] = useState({});
  useEffect(() => {
    requests.get(page).then((response) => {
      setData(response);
    });
  }, []);

  const handleSave = (e) => {
    requests.post(page, Object.values(inputs)[0]);
  };
  const handleDelete = (e) => {
    requests.del(page + e.id);
  };
  const handleUpdate = (e) => {
    requests.put(page + e.id, e);
  };

  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="card">
          <div className="card-body">
            <h4 className="header-title mb-3"> Menu Sales </h4>
            <DataTable
              columns={columns}
              dataSource={data}          
              title="Menu Sales"
              handlesave={handleSave}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
              width={500}
              height={350}
            >            
            </DataTable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
