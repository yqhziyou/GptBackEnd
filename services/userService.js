// userService.js
import User from '../models/userInfo.js';
/**
 * Update the total token usage for a user
 * @param {String} userId
 * @param {Number} tokens
 * @returns {Object} Updated user object or error message
 */
export async function updateTotalTokenUsage(userId, tokens) {
    try {
        const user = await User.findById(userId);
        if (!user) {
            return { error: 'User not found' };
        }

        user.totalTokenUsage += tokens;
        await user.save();

        return { success: true, user };
    } catch (error) {
        return { error: 'Error updating total token usage' };
    }
}

/**
 * Add a session to the user's session list
 * @param {String} userId
 * @param {String} sessionId
 * @returns {Object} Updated user object or error message
 */
export async function addSessionToUser(userId, sessionId) {
    try {
        const user = await User.findById(userId);
        if (!user) {
            return { error: 'User not found' };
        }

        // Add the session ID to the user's sessionIdList
        user.sessionIdList.push(sessionId);
        await user.save();

        return { success: true, user };
    } catch (error) {
        return { error: 'Error adding session to user' };
    }
}

/**
 * Remove a session from the user's session list
 * @param {String} userId
 * @param {String} sessionId
 * @returns {Object} Updated user object or error message
 */
export async function removeSessionFromUser(userId, sessionId) {
    try {
        const user = await User.findById(userId);
        if (!user) {
            return { error: 'User not found' };
        }

        // Check if the session ID exists in the user's sessionIdList
        const sessionIndex = user.sessionIdList.indexOf(sessionId);
        if (sessionIndex === -1) {
            return { error: 'Session not found for user' };
        }

        // Remove the session ID from the user's sessionIdList
        user.sessionIdList.splice(sessionIndex, 1);
        await user.save();

        return { success: true, user };
    } catch (error) {
        return { error: 'Error removing session from user' };
    }
}