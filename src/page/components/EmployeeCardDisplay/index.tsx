import { AvatarProfile } from '../../../components/Avatar';
import { heads } from '../../../const/column-heads';
import { Card } from '../../../mobile/components/Card';
import { CardDisplay } from '../../../mobile/components/Card/cardDisplay';
import { CardTitle } from '../../../mobile/components/Card/cardTitle';
import { EmployeeType } from '../../../types/EmployeeType';
import { dateFormatter, phoneFormatter } from '../../../utils/formatters';

export function EmployeeCardDisplay({
  data,
  selectedRow,
  setSelectedRow,
}: {
  data: EmployeeType[];
  selectedRow: number | null;
  setSelectedRow: (id: number | null) => void;
}) {
  return (
    <Card>
      <CardTitle
        titles={heads.slice(0, 2)}
        renderItem={(head) => <div key={head}>{head}</div>}
      />
      <CardDisplay
        list={data}
        renderItem={({ id, image, name }) => (
          <div key={id}>
            <AvatarProfile src={image} />
            <div>{name}</div>
          </div>
        )}
        renderItemContent={({ id, job, admission_date, phone }) =>
          selectedRow === id && (
            <section key={id}>
              <div>
                <strong>Cargo:</strong> <span>{job}</span>
              </div>
              <div>
                <strong>Data de admissão:</strong>{' '}
                <span>{dateFormatter(admission_date)}</span>
              </div>
              <div>
                <strong>Telefone:</strong> <span>{phoneFormatter(phone)}</span>
              </div>
            </section>
          )
        }
        handleSelectRow={({ id }) =>
          setSelectedRow(selectedRow === id ? null : id)
        }
      />
    </Card>
  );
}
