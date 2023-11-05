import React, { useState } from 'react'
import { createThread } from '../../services/threadService'
import { Link } from 'react-router-dom'
import Stypes from './NewThread.module.css'

const NewThread: React.FC = () => {
    const [title, setTitle] = useState('')

    const handleSubmit = (event: React.FormEvent) => {
        // event.preventDefault()
        createThread(title)
    }
return (
    <>
        <div className={Stypes.body}>
            <form onSubmit={handleSubmit} className={Stypes.form}>
                <div>
                    <div className={Stypes.inputLabel}>
                        <p>スレッド新規作成</p>
                    </div>
                    <div>
                    <input 
                        className={Stypes.inputText}
                        type="text" value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder='スレッドタイトル'
                    />
                    </div>
                </div>
                <div className={Stypes.submit}>
                    <Link to="/" className={Stypes.backTopLink}>TOPに戻る</Link>
                    <button className={Stypes.submitButton}>作成</button>
                </div>
            </form>
        </div>
        
    </>
)
}

export default NewThread