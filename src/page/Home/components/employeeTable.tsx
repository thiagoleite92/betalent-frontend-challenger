import { Table } from '../../../components/Table';
import { TableBody } from '../../../components/Table/tableBody';
import { TableHeader } from '../../../components/Table/tableHeader';
import { heads } from '../../../const/column-heads';
import { EmployeeType } from '../../../types/EmployeeType';
import { dateFormatter, phoneFormatter } from '../../../utils/formatters';

export function EmployeeTable({ data }: { data: EmployeeType[] }) {
  return (
    <Table>
      <TableHeader<string>
        heads={heads}
        renderItem={(head) => <th key={head}>{head}</th>}
      />
      <TableBody<EmployeeType>
        data={data}
        renderItem={({ id, admission_date, image, job, name, phone }) => (
          <tr key={id}>
            <td>
              <img src={image} />
            </td>
            <td>{name}</td>
            <td>{job}</td>
            <td>{dateFormatter(admission_date)}</td>
            <td>{phoneFormatter(phone)}</td>
          </tr>
        )}
      />
    </Table>
  );
}
