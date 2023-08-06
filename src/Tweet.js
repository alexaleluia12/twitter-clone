import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faEdit, faTrash, faComment, faHeart, faRetweet} from '@fortawesome/free-solid-svg-icons'

export default function Tweet({author, authorNick, text, date=new Date()}) {

    return (
        <div id='tweet'>
            <p><FontAwesomeIcon icon={faUser} /> <b>{author}</b>  <span className='nick'>@ {authorNick}</span> </p>
            <p>
                {text}
            </p>
            <div id='tweet-bottom'>
                <div>
                    <FontAwesomeIcon icon={faEdit} />
                    <FontAwesomeIcon icon={faTrash} />
                </div>

                <div>
                    <FontAwesomeIcon icon={faComment} />
                    <FontAwesomeIcon icon={faHeart} />
                    <FontAwesomeIcon icon={faRetweet} />
                </div>

                <div>
                    <span>{`${date.toLocaleDateString()} - ${date.toLocaleTimeString()}` }</span>
                </div>
            </div>
        </div>
    )
}