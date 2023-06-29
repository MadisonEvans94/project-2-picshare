import { db } from "../firebase-config";

export const createPost = async (postData) => {
    try {
        const docRef = await db.collection("posts").add(postData);
        console.log("Post created with ID:", docRef.id);

        return docRef.id;
    } catch (error) {
        console.error("Error creating post:", error);
        throw error;
    }
};

export const updatePost = async (postId, updatedData) => {
    try {
        const postRef = db.collection("posts").doc(postId);
        await postRef.update(updatedData);
        console.log("Post updated with ID:", postId);
    } catch (error) {
        console.error("Error updating post:", error);
        throw error;
    }
};

export const getAllPosts = async () => {
    try {
        const snapshot = await db.collection("posts").get();
        const posts = snapshot.docs.map((doc) => ({ ...doc.data() }));
        return posts;
    } catch (error) {
        console.error("Error retrieving posts:", error);
        throw error;
    }
};

export const getPostById = async (postId) => {
    try {
        const postRef = db.collection("posts").doc(postId);
        const doc = await postRef.get();
        if (doc.exists) {
            return { ...doc.data() };
        } else {
            throw new Error("Post not found");
        }
    } catch (error) {
        console.error("Error retrieving Post:", error);
        throw error;
    }
};

export const deletePost = async (postId) => {
    try {
        const postRef = db.collection("posts").doc(postId);
        await postRef.delete();
        console.log("Post deleted with ID:", postId);
    } catch (error) {
        console.error("Error deleting post:", error);
        throw error;
    }
};
