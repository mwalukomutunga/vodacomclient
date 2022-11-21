import { useEffect, useState } from "react";
import DataTable from "../components/Table";
import { Item, RequiredRule } from "devextreme-react/form";
import { Form, Label } from "devextreme-react/data-grid";
import TextBox from "devextreme-react/text-box";
import requests from "../agent";
const page = "/Orders";

const columns = [
  "ValueChain",
  "Insured",
  "ActivationDate",
  "region",
  "Premium",
  "Duration",
  "Rate",
  "Currency",
  "InsuranceType",
  "CreatedAt",
  "Cover",
  "Status"
  // "Latitude",
  // "Longitude",
];

const CardSales = () => {
  const [data, setData] = useState([]);
  const [inputs, setInputs] = useState({});
  useEffect(() => {
    requests.get(page).then((response) => {
      // setData(response);
      setData(response?.Insurances);
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
            <h4 className="header-title mb-3"> Card Sales </h4>
            <DataTable
              columns={columns}
              dataSource={data}          
              title="CardSales"
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
// export async function getServerSideProps({ req, res }) {
//   res.setHeader(
//     'Cache-Control',
//     'public, s-maxage=36000, stale-while-revalidate=5900000'
//   )
//   const CardSaless = await requests.get("CardSales");  
//   return {
//     props: {
//       CardSaless,
//     },
//   }
// }
// export async function getServerSideProps() {
//   const CardSaless = await requests.get("CardSales");  
//   return {
//     props: {
//       CardSaless,
//     },
//   }
// }
export default CardSales;
