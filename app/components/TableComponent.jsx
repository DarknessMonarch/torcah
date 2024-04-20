"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "@/app/style/table.module.css";

import {
  PlusIcon as AddIcon,
  PencilSquareIcon as EditIcon,
  TrashIcon as DeleteIcon,
  ChatBubbleBottomCenterIcon as ChatIcon,
} from "@heroicons/react/24/outline";

export default function TableComponent({ Title, TableData }) {
  const router = useRouter();

  const chatUser = (id) => {
    router.push(`/manage/chat/${id}`);
  };

  const editData = (id) => {
    router.push(`/manage/edit/${id}`);
  };

  const addData = () => {
    router.push(`manage/add/`);
  };

  const deleteData = () => {
    toast.success("Deleted");
  };

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHeader}>
        <h1>{Title}</h1>
        <div className={styles.tableBtn} onClick={() => addData()}>
          <AddIcon
            className={styles.addIcon}
            alt="add icon"
            width={20}
            height={20}
          />
          add business
        </div>
      </div>
      <div className={styles.scrollTable}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>PhoneNumber</th>
              <th>Location</th>
              <th>Manager</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {TableData.length > 0 ? (
              TableData.map((data, index) => (
                <tr key={index}>
                  <td>
                    <div className={styles.tableProfile}>
                      <Image
                        src={data.profile}
                        className={styles.tableProfileImage}
                        alt="Profile image"
                        width={30}
                        height={30}
                        priority
                      />
                      {data.username}
                    </div>
                  </td>

                  <td>{data.phoneNumber}</td>
                  <td>{data.location}</td>
                  <td>{data.manager}</td>
                  <td>
                    <div className={styles.tableBtnContainer}>
                      <EditIcon
                        onClick={() => editData(1)}
                        className={styles.editIcon}
                        alt="edit icon"
                        width={30}
                        height={30}
                      />
                      <ChatIcon
                        onClick={() => chatUser(1)}
                        className={styles.chatIcon}
                        alt="delete icon"
                        width={30}
                        height={30}
                      />
                      <DeleteIcon
                        onClick={() => deleteData()}
                        className={styles.deleteIcon}
                        alt="delete icon"
                        width={30}
                        height={30}
                      />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No data</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
