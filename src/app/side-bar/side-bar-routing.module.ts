export const routes = [
   {
        path: '',
        children: [
            {
                path: 'dashboard',redirectTo:'/dashboard', pathMatch: 'full'
            },
            {
                path: 'users',redirectTo:'/users',pathMatch: 'full'
            },
           
        ],
    },
];
