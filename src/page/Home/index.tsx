import { useMemo, useState } from 'react';
import { AvatarProfile } from '../../components/Avatar';
import { Header } from '../../components/Header';
import { SearchBar } from '../../components/SearchBar';
import { Table } from '../../components/Table';
import { TableBody } from '../../components/Table/tableBody';
import { TableHeader } from '../../components/Table/tableHeader';
import { heads } from '../../const/column-heads';
import { useWindowSize } from '../../hooks/useWindowSize';
import { Card } from '../../mobile/components/Card';
import { CardDisplay } from '../../mobile/components/Card/cardDisplay';
import { CardTitle } from '../../mobile/components/Card/cardTitle';
import { EmployeeType } from '../../types/EmployeeType';
import { dateFormatter, phoneFormatter } from '../../utils/formatters';
import { useEmployee } from '../../hooks/useEmployee';

import styles from './styles.module.css';

export function Home() {
  const { width } = useWindowSize();
  const isDesktop = useMemo(() => width && width >= 981, [width]);

  const employeeData = useEmployee();

  const [selectedRow, setSelectedRow] = useState<number | null>(null);

  return (
    <main className={styles.main}>
      <Header />
      <SearchBar />
      {isDesktop && (
        <div style={{ width: '100%', overflowY: 'auto', maxHeight: '500px' }}>
          <style>
            {`
              div::-webkit-scrollbar {
                width: 4px;
              }
              div::-webkit-scrollbar-thumb {
                background: var(--Gray20);
              }
              div::-webkit-scrollbar-track {
                background: var(--Black);
                border-radius: 4px;
              }
            `}
          </style>
          <Table>
            <TableHeader<string>
              heads={heads}
              renderItem={(head) => <th key={head}>{head}</th>}
            />
            <TableBody<EmployeeType>
              data={employeeData}
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
        </div>
      )}
      {!isDesktop && (
        <Card>
          <CardTitle
            titles={heads.slice(0, 2)}
            renderItem={(head) => <div key={head}>{head}</div>}
          />
          <CardDisplay
            list={employeeData}
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
                    <strong>Telefone:</strong>{' '}
                    <span>{phoneFormatter(phone)}</span>
                  </div>
                </section>
              )
            }
            handleSelectRow={({ id }) =>
              setSelectedRow(selectedRow === id ? null : id)
            }
          />
        </Card>
      )}
    </main>
  );
}
