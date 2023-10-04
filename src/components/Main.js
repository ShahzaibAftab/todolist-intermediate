import React, { useEffect, useState } from 'react'
import { Text, Center, Input, Box, Button, Checkbox } from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Main = () => {
    const [notepad, setNotepad] = useState([])
    const [inputValue, setInputValue] = useState()
    const [markData, setmarkData] = useState([])

    const [edit, setEdit] = useState(false)
    const [IndexToBeEdit, setIndexToBeEdit] = useState()

    const [deleteToggle, setDeleteToggle] = useState(false)
    const [deleteBtn, setdeleteBtn] = useState(false)

    useEffect(() => {

    }, [notepad, markData]);

    const handleInputValue = (e) => {
        setInputValue(e.target.value)
    }
    const handleAddData = (e) => {

        if (inputValue && inputValue.trim() !== '') {
            setNotepad([...notepad, inputValue]);
            setInputValue('');
            // console.log('iv', inputValue)
            // console.log('note', notepad)
            toast.success('Added');
            if (notepad.length === 1) {
                setDeleteToggle(true)
            }
            setdeleteBtn(true)

        }
        else {
            toast.error('Input Fieild cannot be Empty');
        }
    };
    const displayCheck = (index) => {
        const indexExists = markData.includes(index);

        if (indexExists) {
            // If it exists, remove it
            const updatedMarkData = markData.filter((item) => item !== index);
            setmarkData(updatedMarkData);
            // console.log('updated marked data', markData)
        } else {
            // If it doesn't exist, add it
            const updatedMarkData = [...markData, index];
            setmarkData(updatedMarkData);
            // console.log('updated marked data', markData)
        }

    }
    const deleteIndex = (index) => {

        const updatedNotepad = [...notepad];
        updatedNotepad.splice(index, 1);
        setNotepad(updatedNotepad);
        // console.log('delete', notepad[index])
        if (notepad.length <= 2) {
            setDeleteToggle(false)
        }
    }
    const editIndex = (index) => {
        setEdit(true)
        setInputValue(notepad[index])
        setIndexToBeEdit(index)
    }
    const confirmEdit = () => {
        let updatedValue = [...notepad];
        // console.log('updated value', updatedValue)
        updatedValue[IndexToBeEdit] = inputValue;
        // console.log('updated value index', updatedValue[IndexToBeEdit])
        setNotepad(updatedValue);
        // console.log('result value', notepad)
        setEdit(false)
        setInputValue('')
        toast.success('Index Edited');
    }
    const emptyData = () => {
        if (notepad.length === 0) {
            toast.error('You have to Enter Data in order to Delete');
        }
        else {
            setNotepad([])
            // console.log('new', notepad)
            toast.success('All Records are Deleted');
            setDeleteToggle(false)
            setdeleteBtn(false)

        }
    }
    const deleteSelectedIndex = () => {

        if (markData.length === 0) {
            toast.error('Please select items to delete first');
        }
        else {
            const updatedNotepad = notepad.filter((_, index) => !markData.includes(index));
            setNotepad(updatedNotepad);
            setmarkData([]);
            console.log('deleted', notepad.length)

            if (notepad.length === 0) {
                setDeleteToggle(false)
            }
        }

    };

    return (
        <>
            <section>
                <Center>
                    <Text className='textShadow' color='white' fontWeight='bold' fontSize='3xl' mt='10'> Todolist</Text>
                </Center>
                <Center>
                    <Text className='textShadow' color='white' fontWeight='bold' fontSize='lg' mt='2'> 😎Add - Edit😁 - Delete😜</Text>
                </Center>
                <Center>
                    <Text className='textShadow' color='white' fontWeight='bold' fontSize='sm' mt='2'> REACT JS + CHAKRA UI</Text>
                </Center>
                <Box textAlign='center' mt='10'>
                    <Input type="text" value={inputValue} onChange={handleInputValue} placeholder='Type here...' size='lg' w='30%' color='white' _placeholder={{ color: 'white' }} />
                    {
                        !edit ? <Button onClick={handleAddData} ml={1} colorScheme='teal' size='lg' style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
                            Add
                        </Button> : <Button onClick={confirmEdit} ml={1} colorScheme='teal' size='lg' style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
                            Edit
                        </Button>
                    }
                </Box>

                {notepad.map((item, index) => (
                    <Box
                        key={index}
                        className='textShadow'
                        mx='auto'
                        bg='teal'
                        w='35%'
                        height='50px'
                        borderRadius='10px'
                        p='10px'
                        style={{
                            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                            marginTop: '30px',
                            display: 'flex',
                        }}
                    >
                        <Checkbox
                            size='lg'
                            colorScheme='orange'
                            className='textShadow'
                            color='white'
                            fontWeight='bold'
                            fontSize='xl'
                            type='checkbox'

                            onChange={() => displayCheck(index)}
                        >
                            {item}
                        </Checkbox>
                        <div style={{ position: 'absolute', right: '35%' }}>
                            <EditIcon onClick={() => editIndex(index)} color='white' className='icon' />{' '}
                            <DeleteIcon onClick={() => deleteIndex(index)} className='icon' color='white' mx='5px' />
                        </div>
                    </Box>
                ))}




                <Box textAlign='center' mt='10'>
                    {deleteBtn ? <Button onClick={deleteSelectedIndex} ml={1} colorScheme='red' size='lg' style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
                        Delete
                    </Button> : ''}
                    {deleteToggle ? <Button onClick={emptyData} ml={1} colorScheme='red' size='lg' style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
                        Delete All
                    </Button> : ''}
                </Box>
            </section>
        </>
    )
}

export default Main
