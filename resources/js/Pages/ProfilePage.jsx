import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { useDarkMode } from "../context/DarkModeContext";
import imageSquare from "../../../public/assets/icons/image-square.svg"

const ProfilePage = () => {
    const { darkMode } = useDarkMode();
    const [userPosts, setUserPosts] = useState([]);
    const [newPost, setNewPost] = useState("");
    const [newImage, setNewImage] = useState(null);
    const [activeCommentPost, setActiveCommentPost] = useState(null);

    useEffect(() => {
        const initialPosts = Array.from({ length: 5 }, (_, i) => ({
            id: i + 1,
            content: `Ceci est une de vos publications fictives numéro ${
                i + 1
            }.`,
            likes: 0,
            comments: [],
            image: null,
        }));
        setUserPosts(initialPosts);
    }, []);

    const handleNewPost = () => {
        if (newPost.trim() || newImage) {
            const newEntry = {
                id: userPosts.length + 1,
                content: newPost,
                likes: 0,
                comments: [],
                image: newImage,
            };
            setUserPosts([newEntry, ...userPosts]);
            setNewPost("");
            setNewImage(null);
        }
    };

    const handleLike = (id) => {
        setUserPosts((prevPosts) =>
            prevPosts.map((post) =>
                post.id === id ? { ...post, likes: post.likes + 1 } : post
            )
        );
    };

    const handleAddComment = (id, comment) => {
        setUserPosts((prevPosts) =>
            prevPosts.map((post) =>
                post.id === id
                    ? { ...post, comments: [...post.comments, comment] }
                    : post
            )
        );
    };

    const loadMorePosts = () => {
        const morePosts = Array.from({ length: 5 }, (_, i) => ({
            id: userPosts.length + i + 1,
            content: `Ceci est une autre de vos publications fictives numéro ${
                userPosts.length + i + 1
            }.`,
            likes: 0,
            comments: [],
            image: null,
        }));
        setUserPosts((prevPosts) => [...prevPosts, ...morePosts]);
    };

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop >=
            document.documentElement.offsetHeight - 50
        ) {
            loadMorePosts();
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [userPosts]);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setNewImage(reader.result);
            reader.readAsDataURL(file);
        }
    };

    return (
        <div
            className={`flex h-screen ${
                darkMode ? "bg-gray-900" : "bg-gray-100"
            }`}
        >
            <Sidebar />
            <div className="max-w-3xl p-4 pl-20 sm:pl-32 mx-auto my-0 w-full">
                {/* Section Profil */}
                <div
                    className={`p-6 rounded-lg shadow mb-6 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 ${
                        darkMode
                            ? "bg-gray-800 text-white"
                            : "bg-white text-black"
                    }`}
                >
                    <div className="w-20 h-20 bg-gray-300 rounded-full flex-shrink-0"></div>
                    <div className="text-center sm:text-left">
                        <h2 className="text-2xl font-semibold">John Doe</h2>
                        <p className="text-gray-500 mb-5">UI/UX Designer</p>
                        <a
                            href="/edit/profile"
                            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-black inline-block"
                        >
                            Modifier mon profil
                        </a>
                    </div>
                </div>

                {/* Formulaire de publication */}
                <div
                    className={`p-6 rounded-lg shadow mb-6 ${
                        darkMode
                            ? "bg-gray-800 text-white"
                            : "bg-white text-black"
                    }`}
                >
                    <h2 className="text-lg font-semibold mb-3">
                        Créer une publication
                    </h2>
                    <textarea
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-transparent"
                        placeholder="Quoi de neuf ?"
                        value={newPost}
                        onChange={(e) => setNewPost(e.target.value)}
                    ></textarea>
                    <div className="relative flex flex-col items-center mt-3">
                        <div className="cursor-pointer text-blue-500 hover:text-blue-700">
                            <i className="fas fa-image text-3xl"></i>{" "}
                            <p>Cliquer pour importer une image</p>
                        </div>

                        <input
                            type="file"
                            accept="image/*"
                            className="mt-3 opacity-0 absolute top-0 left-0 w-full h-full"
                            onChange={handleImageUpload}
                        />

                        <div className="mt-3 cursor-pointer">
                            <img
                                src={imageSquare}
                                alt="Uploaded"
                                className="w-10 h-10 object-cover rounded-lg"
                            />
                        </div>
                    </div>
                    {newImage && (
                        <img
                            src={newImage}
                            alt="Aperçu de l'image"
                            className="mt-3 max-h-40 rounded-lg object-cover"
                        />
                    )}
                    <button
                        className="mt-3 bg-primary text-white px-4 py-2 rounded-lg hover:bg-black"
                        onClick={handleNewPost}
                    >
                        Publier
                    </button>
                </div>

                {/* Liste des publications */}
                <div className="space-y-6">
                    {userPosts.map((post) => (
                        <div
                            key={post.id}
                            className={`p-6 rounded-lg shadow space-y-4 ${
                                darkMode
                                    ? "bg-gray-800 text-white"
                                    : "bg-white text-black"
                            }`}
                        >
                            <p className="text-lg">{post.content}</p>
                            <a className="underline" href="/posts/details">
                                Lire plus
                            </a>
                            {post.image && (
                                <img
                                    src={post.image}
                                    alt="Publication"
                                    className="mt-3 rounded-lg object-cover max-h-60 w-full"
                                />
                            )}
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-0 space-x-4">
                                <button
                                    className={`flex items-center space-x-1 ${
                                        darkMode ? "text-white" : "text-primary"
                                    }`}
                                    onClick={() => handleLike(post.id)}
                                >
                                    <span role="img" aria-label="like">
                                        ❤️
                                    </span>
                                    <span>J'aime ({post.likes})</span>
                                </button>
                                <button
                                    className={`flex items-center space-x-1 ${
                                        darkMode
                                            ? "text-white"
                                            : "text-gray-700"
                                    }`}
                                    onClick={() =>
                                        setActiveCommentPost(
                                            activeCommentPost === post.id
                                                ? null
                                                : post.id
                                        )
                                    }
                                >
                                    <span role="img" aria-label="comment">
                                        💬
                                    </span>
                                    <span>
                                        Commenter ({post.comments.length})
                                    </span>
                                </button>
                            </div>
                            {/* Affichage des commentaires */}
                            {post.comments.length > 0 && (
                                <div className="mt-4 space-y-2">
                                    {post.comments.map((comment, index) => (
                                        <div
                                            key={index}
                                            className={`p-2 rounded-lg text-sm ${
                                                darkMode
                                                    ? "bg-gray-700"
                                                    : "bg-gray-100"
                                            }`}
                                        >
                                            {comment}
                                        </div>
                                    ))}
                                </div>
                            )}
                            {/* Formulaire de commentaire conditionnel */}
                            {activeCommentPost === post.id && (
                                <div className="mt-4">
                                    <textarea
                                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-transparent"
                                        placeholder="Ajoutez un commentaire..."
                                        onKeyDown={(e) => {
                                            if (
                                                e.key === "Enter" &&
                                                !e.shiftKey
                                            ) {
                                                e.preventDefault();
                                                const comment =
                                                    e.target.value.trim();
                                                if (comment) {
                                                    handleAddComment(
                                                        post.id,
                                                        comment
                                                    );
                                                    e.target.value = "";
                                                    setActiveCommentPost(null);
                                                }
                                            }
                                        }}
                                    ></textarea>
                                    <button
                                        className="mt-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-black"
                                        onClick={() => {
                                            const textarea =
                                                document.querySelector(
                                                    `textarea[placeholder="Ajoutez un commentaire..."]`
                                                );
                                            const comment =
                                                textarea.value.trim();
                                            if (comment) {
                                                handleAddComment(
                                                    post.id,
                                                    comment
                                                );
                                                textarea.value = "";
                                                setActiveCommentPost(null);
                                            }
                                        }}
                                    >
                                        Commenter
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
