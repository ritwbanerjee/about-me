export interface FamilyDetails {
    title: String;
    members: FamilyMembers[];
}

interface FamilyMembers {
    name: String;
    imageUrl: string;
}
