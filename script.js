document.addEventListener('DOMContentLoaded', function() {
    const pcMembers = [
        { name: "Jieyang Chen", affiliation: "University of Alabama at Birmingham", country: "USA" },
        { name: "Hang Liu", affiliation: "Rutgers University", country: "USA" },
        { name: "Weilong Ren", affiliation: "ShenZhen Institute of Computing Sciences", country: "China" },
        { name: "Shaoxu Song", affiliation: "Tsinghua University", country: "China" },
        { name: "Ryan Wickman", affiliation: "Microsoft", country: "USA" },
        { name: "Yutong Ye", affiliation: "East China Normal University", country: "China" },
        { name: "Bo Yuan", affiliation: "Rutgers University", country: "USA" },
        { name: "Chen Jason Zhang", affiliation: "The Hong Kong Polytechnic University", country: "Hong Kong" },
        { name: "Libin Zheng", affiliation: "Sun Yat-sen University", country: "China" },
        { name: "Weiguo Zheng", affiliation: "Fudan University", country: "China" },
        { name: "Lei Zou", affiliation: "Peking University", country: "China" }
    ];

    const pcMembersTable = document.getElementById('pc-members');
    
    pcMembers.forEach(member => {
        const row = pcMembersTable.insertRow();
        const nameCell = row.insertCell(0);
        const affiliationCell = row.insertCell(1);
        const countryCell = row.insertCell(2);
        
        nameCell.textContent = member.name;
        affiliationCell.textContent = member.affiliation;
        countryCell.textContent = member.country;
    });
});