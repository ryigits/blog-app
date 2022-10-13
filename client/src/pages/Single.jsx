import { FiEdit, FiDelete } from "react-icons/fi";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

export default function Single(params) {
    return (
        <>
            <div className="single">
                <div className="content">
                    <img
                        src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                    <div className="user">
                        <img
                            src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                        />

                        <div className="info">
                            <span>Jessie</span>
                            <p>Posted 2 days ago</p>
                        </div>
                        <div className="edit">
                            <Link className="link" to={`write?edit=2`}>
                                <FiEdit />
                            </Link>
                            <Link className="link" to={`write?delete=2`}>
                                <FiDelete />
                            </Link>
                        </div>
                    </div>
                    <h1>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatem, earum explicabo molestias provident deserunt
                        corrupti sequi possimus dolores tempore, temporibus hic
                        dolore dicta quae atque quidem beatae facere deleniti
                        delectus omnis sapiente itaque quasi soluta! Blanditiis
                        earum deserunt laudantium repellat molestiae, alias ea
                        facere qui, et error recusandae veniam reiciendis
                        eveniet eaque ipsum eos esse incidunt aut? Alias
                        sapiente doloribus aliquid dolorem dolorum blanditiis
                        labore illo officia fugiat quaerat reiciendis, voluptate
                        neque maxime reprehenderit facilis distinctio inventore
                        iusto exercitationem deserunt nisi in. Aperiam expedita
                        eligendi accusantium nulla natus nemo adipisci corporis,
                        reiciendis ipsa earum ducimus vel hic non, quas
                        dignissimos.
                    </p>
                </div>
                <div className="menu">
                    <Menu/>
                </div>
            </div>
        </>
    );
}
