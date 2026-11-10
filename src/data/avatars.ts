export interface Avatar {
    id: string;
    url: string;
    label: string;
}

export const PRESET_AVATARS: Avatar[] = [
    {
        id: 'chef-1',
        url: 'https://api.dicebear.com/7.x/notionists/svg?seed=Felix',
        label: 'Chef Tradition'
    },
    {
        id: 'chef-2',
        url: 'https://api.dicebear.com/7.x/notionists/svg?seed=Aneka',
        label: 'Exploratrice'
    },
    {
        id: 'chef-3',
        url: 'https://api.dicebear.com/7.x/notionists/svg?seed=Vance',
        label: 'Maître du Grill'
    },
    {
        id: 'chef-4',
        url: 'https://api.dicebear.com/7.x/notionists/svg?seed=Jocelyn',
        label: 'Passion Épices'
    },
    {
        id: 'chef-5',
        url: 'https://api.dicebear.com/7.x/notionists/svg?seed=Aria',
        label: 'Reine des Sauces'
    },
    {
        id: 'chef-6',
        url: 'https://api.dicebear.com/7.x/notionists/svg?seed=Caleb',
        label: 'Chef Moderne'
    },
    {
        id: 'chef-7',
        url: 'https://api.dicebear.com/7.x/notionists/svg?seed=Sasha',
        label: 'Gourmet Bio'
    },
    {
        id: 'chef-8',
        url: 'https://api.dicebear.com/7.x/notionists/svg?seed=Dominic',
        label: 'Pâtissier Artiste'
    }
];
