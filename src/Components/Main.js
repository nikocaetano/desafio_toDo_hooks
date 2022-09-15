import React, { useState } from "react";
import * as S from "../Styled/main-styled"
import lixeira from "../images/lixo.png"

function Main() {
    const [tarefas, setTarefas] = useState("")
    const [lista, setLista] = useState([])
    const tarefa = { tarefa: tarefas, id: Date.now() }

    const Add = () => {
        if (tarefas !== "") {
            setLista((tasks) => [...tasks, tarefa]);
        }
        setTarefas("");
    };
    console.table(lista);


    const Remove = (id) => {
        setLista(lista.filter((item) => item.id !== id))
    }

    const AllRemove = (id) => {
        setLista(lista.filter((item) => item.id.tarefas !== id))
    }

    return (
        <S.Box onSubmit={(e) => { e.preventDefault(); }}>
            <S.Input placeholder="Digite sua tarefa" value={tarefas} onChange={(e) => { setTarefas(e.target.value); }} />
            <S.Botão1 onClick={() => Add()}>Send</S.Botão1>
            <S.Botão2 onClick={() => AllRemove()}>Clear</S.Botão2>
            {lista.map((item) => (
                <S.Div>
                    <input for="text" type="checkbox" />
                    <label id="text">{item.tarefa}</label>
                    <S.Img src={lixeira} onClick={() => Remove(item.id)}/>
                </S.Div>
            ))}
        </S.Box>
    )
}

export default Main
