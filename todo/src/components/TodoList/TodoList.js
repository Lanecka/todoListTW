import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faTrash, faEdit, faCheck, faCirclePause } from '@fortawesome/free-solid-svg-icons'

const TodoList = ({ todo, setTodo }) => {
  const [edit, setEdit] = useState(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')

  /**
   * Функция для кнопки 'удалить', удаляет объект из списка задач todoList
   * @param {symbol} id id-который мы получаем при нажатии кнопки удалить
   * @return удаляет один из элементов todo, если id-элемента = id-полученный при нажатии
   */
  function deleteTodo(id) {
    // console.log('delete')
    let newTodo = [...todo].filter(item => item.id != id)
    setTodo(newTodo)
  }

  /**
   * Функция переключения на редактирования объекта
   * @param {symbol} id id объекта todo
   * @param {string} title название задачи
   * @param {string} description описание задачи
   * @param {object} image картинка к задаче
   * @return передает перечисленные параметры, которые нужно сохранить для дальнейшего использования в редактировании
   */
  function editTodo(id, title, description, image) {
    setEdit(id)
    setTitle(title)
    setDescription(description)
    setImage(image)
  }

  /**
   * функция изменения статуса задачи
   * @param {symbol} id id объекта todo
   * @return Отмечает цветом, что задача выполнена или находится в процессе 
   */
  function statusTodo(id) {
    let newTodo = [...todo].filter(item => {
      if (item.id == id) {
        item.status = !item.status
      }
      return item
    })
    setTodo(newTodo)
  }

  /**
   * Функция сохраняет изменения после нажатия кнопки "сохранить"
   * @param {symbol} id 
   */
  function saveTodo(id) {
    let newTodo = [...todo].map(item => {
      if (item.id == id) {
        item.title = title
        item.description = description
        item.image = image
      }
      return item
    })
    setTodo(newTodo)
    setEdit(null)
  }

  return (
    <div className="tasks">
      {
        todo.map(item => (
          <div className={!item.status ? "tasks-pause" : "tasks-item"} key={item.id}>
            {
              edit == item.id ?
                <div className="purpose">
                  <input className="purpose-title" value={title} onChange={(e) => setTitle(e.target.value)} />
                  <input className="purpose-description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div> :
                <div className="purpose">
                  <div className="purpose-item">
                    <div className="purpose-item__title">{item.title}</div>
                    <div className="purpose-item__description">{item.description}</div>
                    <img src={item.image} className="purpose-item__img" alt={`image ${item.id}`} />
                  </div>
                  <div className="purpose-dateLoading">{item.dataLoading}</div>
                </div>
            }
            {
              edit == item.id ?
                <div className="buttons">
                  <button className="buttons-icon" onClick={() => saveTodo(item.id)}><FontAwesomeIcon icon={faSave} /></button>
                </div> :
                <div>
                  <button className="buttons-icon" onClick={() => statusTodo(item.id)}>
                    {
                      item.status ? <FontAwesomeIcon icon={faCirclePause} /> : <FontAwesomeIcon icon={faCheck} />
                    }
                  </button>
                  <button className="buttons-icon edit" onClick={() => editTodo(item.id, item.title, item.description)}><FontAwesomeIcon icon={faEdit} /></button>
                  <button className="buttons-icon" onClick={() => deleteTodo(item.id)}><FontAwesomeIcon icon={faTrash} /></button>
                </div>
            }
          </div>
        ))
      }
    </div>
  )
}

export default TodoList;