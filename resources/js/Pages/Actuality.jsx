import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { useDarkMode } from "../context/DarkModeContext";
import imageSquare from "../../../public/assets/icons/image-square.svg"

const Actuality = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState("");
    const [newImage, setNewImage] = useState(null);
    const { darkMode } = useDarkMode();
    const [activeCommentPost, setActiveCommentPost] = useState(null); // Gère le formulaire de commentaire actif

    useEffect(() => {
        const initialPosts = Array.from({ length: 5 }, (_, i) => ({
            id: i + 1,
            author: `Utilisateur ${i + 1}`,
            content: `Ceci est une publication fictive numéro ${i + 1}.`,
            image: null,
            likes: 0,
            comments: [],
        }));
        setPosts(initialPosts);
    }, []);

    const handleNewPost = () => {
        if (newPost.trim() || newImage) {
            const newEntry = {
                id: posts.length + 1,
                author: "Vous",
                content: newPost,
                image: newImage,
                likes: 0,
                comments: [],
            };
            setPosts([newEntry, ...posts]);
            setNewPost("");
            setNewImage(null);
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setNewImage(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleLike = (id) => {
        setPosts((prevPosts) =>
            prevPosts.map((post) =>
                post.id === id ? { ...post, likes: post.likes + 1 } : post
            )
        );
    };

    const handleAddComment = (id, comment) => {
        setPosts((prevPosts) =>
            prevPosts.map((post) =>
                post.id === id
                    ? { ...post, comments: [...post.comments, comment] }
                    : post
            )
        );
    };

    return (
        <div
            className={`flex h-screen ${
                darkMode ? "bg-gray-900" : "bg-gray-100"
            }`}
        >
            <Sidebar />
            <div className="min-h-screen flex-1 pl-16 sm:pl-32 py-4 mx-auto">
                <div className="max-w-2xl mx-auto p-4">
                    {/* Formulaire de publication */}
                    <div
                        className={`flex flex-col p-4 rounded-lg shadow mb-6 ${
                            darkMode
                                ? "text-white bg-gray-800"
                                : "text-black bg-white"
                        }`}
                    >
                        <h2 className="text-xl font-semibold mb-3">
                            Créer une publication
                        </h2>
                        <textarea
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
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

                            <div className="mt-3">
                                <img
                                    src={imageSquare}
                                    alt="Uploaded"
                                    className="w-10 h-10 object-cover rounded-lg"
                                />
                            </div>
                        </div>

                        <button
                            className="mt-3 bg-primary text-white px-4 py-2 rounded-lg hover:bg-black"
                            onClick={handleNewPost}
                        >
                            Publier
                        </button>
                    </div>

                    {/* Liste des publications */}
                    <div className="space-y-6">
                        {posts.map((post) => (
                            <div
                                key={post.id}
                                className={`p-4 rounded-lg shadow space-y-3 ${
                                    darkMode
                                        ? "text-white bg-gray-800"
                                        : "text-black bg-white"
                                }`}
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                                    <p className="font-semibold">
                                        {post.author}
                                    </p>
                                </div>
                                <p>{post.content}</p>
                                <a className="underline" href="/posts/details">
                                    Lire plus
                                </a>
                                {post.image && (
                                    <img
                                        src={post.image}
                                        alt="Publication"
                                        className="max-w-full h-auto rounded-lg"
                                    />
                                )}
                                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-0 space-x-4">
                                    <button
                                        className={`${
                                            darkMode
                                                ? "text-white"
                                                : "text-primary"
                                        }`}
                                        onClick={() => handleLike(post.id)}
                                    >
                                        ❤️ J'aime ({post.likes})
                                    </button>
                                    <button
                                        className={`${
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
                                        💬 Commenter ({post.comments.length})
                                    </button>
                                </div>
                                {post.comments.length > 0 && (
                                    <div className="mt-3 space-y-2">
                                        {post.comments.map((comment, index) => (
                                            <div
                                                key={index}
                                                className="p-2 bg-gray-100 rounded-lg text-sm"
                                            >
                                                {comment}
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {activeCommentPost === post.id && (
                                    <div className="mt-3">
                                        <textarea
                                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                            placeholder="Ajoutez un commentaire..."
                                            onKeyDown={(e) => {
                                                if (
                                                    e.key === "Enter" &&
                                                    !e.shiftKey
                                                ) {
                                                    e.preventDefault();
                                                    handleAddComment(
                                                        post.id,
                                                        e.target.value
                                                    );
                                                    e.target.value = "";
                                                }
                                            }}
                                        ></textarea>
                                        <button className="mt-3 bg-primary text-white px-4 py-2 rounded-lg hover:bg-black">
                                            Commenter
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Actuality;
