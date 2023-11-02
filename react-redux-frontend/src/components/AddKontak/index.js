import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addKontak, getListKontak, updateKontak } from '../../actions/KontakAction';

function AddKontak() {
    const[nama, setNama] = useState("");
    const[nohp, setNohp] = useState ("");
    const [id, setId] = useState("");
    
    const {addKontakResult, detailKontakResult, updateKontakResult} = useSelector((state) => state.KontakReducer);
    const dispatch = useDispatch ();

    const handleSubmit = (event) =>{
        event.preventDefault();
        // console.log("1. masuk handle submit")
        if(id){
            // update kontak
            dispatch(updateKontak({id: id, nama: nama, nohp:nohp}))
        }else{
            // add kontak
            dispatch(addKontak({nama: nama, nohp:nohp}))
        }
    }

    useEffect(() =>{
        if(addKontakResult){
            console.log ("5. Masuk Component did update")
            dispatch(getListKontak());
            setNama('');
            setNohp('');
        }
    }, [addKontakResult, dispatch])

    useEffect(() =>{
        if(detailKontakResult){
           setNama(detailKontakResult.nama);
           setNohp(detailKontakResult.nohp);
           setId(detailKontakResult.id);
        }
    }, [detailKontakResult, dispatch])

    
    useEffect(() =>{
        if(updateKontakResult){
            console.log ("5. Masuk Component did update")
            dispatch(getListKontak());
            setNama('');
            setNohp('');
            setId ('');
        }
    }, [updateKontakResult, dispatch])
    
  return (
    <div>
        <h4>{id ? "Edit kontak" : "Add kontak"}</h4>
        <form onSubmit={(event)=> handleSubmit(event)}>
            <input type="text" name="nama" placeholder='Nama . . ..' value={nama}  
            onChange={(event) => setNama(event.target.value)} />

            <input type="text" name="nohp" placeholder='No Hp . . ..' value={nohp}  
            onChange={(event) => setNohp(event.target.value)} />

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AddKontak