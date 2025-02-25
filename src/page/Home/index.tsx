import { Header } from '../../components/Header';
import { SearchBar } from '../../components/SearchBar';
import { Table } from '../../components/Table';
import { TableBody } from '../../components/Table/tableBody';
import { TableHeader } from '../../components/Table/tableHeader';
import { heads } from '../../const/column-heads';
import { useWindowSize } from '../../hooks/useWindowSize';
import { EmployeeType } from '../../types/EmployeeType';
import { dateFormatter, phoneFormatter } from '../../utils/formatters';
import styles from './styles.module.css';

const rows = [
  {
    id: 1,
    name: 'João',
    job: 'Back-end',
    admission_date: '2019-12-02T00:00:00.000Z',
    phone: '5551234567890',
    image:
      'https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg',
  },
  {
    id: 2,
    name: 'Roberto',
    job: 'Front-end',
    admission_date: '2020-03-12T00:00:00.000Z',
    phone: '5550321654789',
    image:
      'https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png',
  },
  {
    id: 3,
    name: 'Maria',
    job: 'Front-end',
    admission_date: '2020-03-15T00:00:00.000Z',
    phone: '5557894561230',
    image:
      'https://www.clipartmax.com/png/middle/277-2772117_user-profile-avatar-woman-icon-avatar-png-profile-icon.png',
  },
  {
    id: 4,
    name: 'Cleber',
    job: 'Back-end',
    admission_date: '2020-06-01T00:00:00.000Z',
    phone: '5557410258963',
    image:
      'https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg',
  },
  {
    id: 5,
    name: 'Giovana',
    job: 'Designer',
    admission_date: '2020-06-20T00:00:00.000Z',
    phone: '5553698520147',
    image:
      'https://www.clipartmax.com/png/middle/277-2772117_user-profile-avatar-woman-icon-avatar-png-profile-icon.png',
  },
];

export function Home() {
  const { width } = useWindowSize();
  console.log(width);

  return (
    <main className={styles.main}>
      <Header />
      <SearchBar />
      {width && width >= 681 && (
        <Table>
          <TableHeader<string>
            heads={heads}
            renderItem={(head) => <th key={head}>{head}</th>}
          />
          <TableBody<EmployeeType>
            rows={rows}
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
      )}
    </main>
  );
}
