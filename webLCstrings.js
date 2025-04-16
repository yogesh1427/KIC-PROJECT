function longestPalindrome(s) 
{
    let longest = "";
    
    function expandAroundCenter(left, right) 
    {
        while (left >= 0 && right < s.length && s[left] === s[right]) 
        {
            left--;
            right++;
        }
        return s.substring(left + 1, right);
    }

    for (let i = 0; i < s.length; i++) 
    {
        let odd = expandAroundCenter(i, i);
        let even = expandAroundCenter(i, i + 1);
        longest = odd.length > longest.length ? odd : longest;
        longest = even.length > longest.length ? even : longest;
    }
    
    return longest;
}

console.log(longestPalindrome("babad"));
