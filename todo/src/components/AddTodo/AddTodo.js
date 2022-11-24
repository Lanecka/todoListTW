import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

const AddTodo = ({ todo, setTodo, date }) => {
  const [title, setTitle] = useState('Добавить задачу')
  const [description, setDescription] = useState('Добавить описание')
  const [image, setImage] = useState()
  const [imageURL, setImageURL] = useState()
  const fileReader = new FileReader()
  //console.log(value)

  /**
   * Добавляет новую задачу в список todo
   * @param {object} e 
   */
  const saveNewTodo = (e) => {
    e.preventDefault()
    setTodo(
      [...todo, {
        id: uuidv4(),
        title: title,
        description: description,
        image: image,
        dataLoading: `${dayjs(date).format('hh:mm:ss DD-MM-YYYY')}`,
        status: true
      }]
    )
    setTitle('Добавить задачу')
    setDescription('Добавить описание')
  }

  /**
   * функция нажатия на клавишу 'Enter', сохраняет новую задачу, 
   * если активно одно из окон "добавить новую задачу" 
   * @param {object} e 
   */
  const pushEnter = (e) => {
    if (e.key === 'Enter') {
      saveNewTodo(e)
    }
  }

  fileReader.onloadend = () => {
    setImageURL(fileReader.result)
  }

  /**
   * Позволяет веб-приложенияю добавить изображение, хранящиеся на компьютере пользователя
   * @param {object} e 
   */
  const addFile = (e) => {
    console.log(e.target.files)
    const file = e.target.files[0];
    setImage(file)
    fileReader.readAsDataURL(file)
  }

  return (
    <div>
      <form className="addTask" onSubmit={saveNewTodo} onKeyDown={pushEnter}>
        <input className="addTask-title"
          name="title"
          placeholder="Добавить задачу"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="addTask-description"
          name="description"
          placeholder="Добавить описание"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="addTask-file">
          <input className="addTask-file__input" type="file" onChange={addFile} />
          <img className="addTask-file__picture"
            src={imageURL ? imageURL : "https://i.pinimg.com/564x/fc/7e/ce/fc7ece8e8ee1f5db97577a4622f33975.jpg"}
          />
          <div>
            {image ? image.name : ''}
          </div>
        </div>
        <button type="submit" className="addTask-button">
          Добавить новую задачу
        </button>
      </form>
    </div>
  )
}

export default AddTodo;