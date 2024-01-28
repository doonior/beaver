function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    const counts = {};

    for (let i = 0; i < s.length; i++) {
        counts[s[i]] = (counts[s[i]] ?? 0) + 1;
    }

    for (let i = 0; i < t.length; i++) {
        if (!counts[t[i]]) {
            return false;
        }
        counts[t[i]] -= 1;
    }
    
    return true;
};
