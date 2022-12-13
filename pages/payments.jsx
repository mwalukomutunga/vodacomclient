import { useEffect, useState } from "react";
import DataTable from "../components/Table";
import { Item, RequiredRule } from "devextreme-react/form";
import { Form, Label } from "devextreme-react/data-grid";
import TextBox from "devextreme-react/text-box";
import requests from "../agent";
const page = "/Orders/Payments";

const columns = [
  "PaymentDate",
  "ActivationDate",
  "OrderNo",
  "Premium",
  "Paid",
  "Cover",
  "Insured",
  "Region",
  "Currency",
  "Rate",
  "Currency",
  "Country"
  // "Latitude",
  // "Longitude",
];

const Payments = () => {
  const [data, setData] = useState([]);
  const [inputs, setInputs] = useState({});
  useEffect(() => {
    requests.get(page).then((response) => {
      // setData(response);
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
            <h4 className="header-title mb-3"> Payments </h4>
            <DataTable
              columns={columns}
              dataSource={data}
              Page ="Payments"      
              title="Payments"
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
//   const Paymentss = await requests.get("CardSales");  
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
export default Payments;
