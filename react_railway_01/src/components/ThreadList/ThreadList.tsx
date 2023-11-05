import React, { useEffect, useState } from 'react'
import { getTreads } from '../../services/threadService'
import { ThreadsResponse } from '../../types'
import Stypes from './ThreadList.module.css'
import { Link } from 'react-router-dom'

const THREAD_PER_OFFSET = 10

const ThreadList: React.FC = () => {
  const [threads, setThreads] = useState<ThreadsResponse>([])
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    getTreads().then(data => {
      setThreads(data)
      setLoading(false)
    })
    .catch(error => {
      setError(error.message)
      setLoading(false)
    })
  }, [])

  const loadThreads = async () => {
    setLoading(true)
    getTreads(offset).then(data => {
      setThreads(prevThread => [...prevThread, ...data])
      setOffset(prevOffset => prevOffset + data.length)
      setHasMore(data.length === THREAD_PER_OFFSET)
      setLoading(false)
    })
    .catch(error => {
      setError(error.message)
      setLoading(false)
    }).finally(() => {
      setLoading(false)
    })
  }

  return (
    <>
      <div>
        {loading && <p>Loading threads</p>}
        {error && <p>Error: {error}</p>}
        {threads && (
          <>
            <h2>新着スレッド</h2>
            <ul className={Stypes.list}>
              {threads.map(thread => (
                <li className={Stypes.item} key={thread.id}><Link className={Stypes.link }to={`/thread/${thread.id}`}>{thread.title}</Link></li>
              ))}
            </ul>
          </>
        )}
        {!loading && hasMore && (
          <button className={Stypes.button} onClick={loadThreads}>もっとみる</button>
        )}
      </div>
    </>
  )
}

export default ThreadList