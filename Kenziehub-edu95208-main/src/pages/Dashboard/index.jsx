import { useContext, useState } from "react";
import { CreateTechModal } from "../../Componentes/CreateTechModal";
import { DefautTemplate } from "../../Componentes/DefautTemplate";
import { TechList } from "../../Componentes/TechList";
import { Techcontext } from "../../providers/TechContext";
import { EditTechModal } from "../../Componentes/EditTechModal";



export const Dashboard = () => {
  const { isModalVisible, setIsModalVisible, isModalEdit, setisModalEdit, setEditingTech } = useContext(Techcontext);

  return (

    <DefautTemplate>
      <main>
        <div className="containerUser smU">
          <TechList />
          {isModalVisible ?
            <CreateTechModal
              setIsModalVisible={setIsModalVisible}
            />
            : null
          }
          {isModalEdit ?
            <EditTechModal
            setEditingTech={setEditingTech}
            setisModalEdit={setisModalEdit}
            />
            : null
          }
        </div>
      </main>

    </DefautTemplate>
  );
};