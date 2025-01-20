StrawberryMilk Inventory 

Overview

This Inventory Management Site is designed to provide a streamlined experience for inventory managers to track, update, and share their inventory. It also allows unauthenticated visitors to browse and view inventory items created by all users.

Features

User Authentication

Account Creation: Inventory managers can create an account to manage their inventory.

Login: Inventory managers can log into their accounts to access their personalized inventory dashboard.

Session Management: After logging in, users are redirected to their inventory dashboard.

Inventory Management for Authenticated Users

Create New Items:

Inventory managers can add new items, specifying a name, description, and quantity.

After creating an item, users are redirected to their inventory dashboard.

View Inventory:

Inventory managers can view a list of all their items.

Each item displays:

Name

The first 100 characters of the description, followed by ... if longer.

Quantity.

View Individual Items:

Managers can click on an item to see its full details, including the complete description.

Edit Items:

Inventory managers can toggle edit mode to modify an item’s details.

In edit mode, fields become editable, and changes can be saved.

Delete Items:

Managers can delete items, and upon deletion, they are redirected back to the inventory dashboard.

Public Viewing for Unauthenticated Users

Browse Items:

Visitors can view a list of all items created by inventory managers.

Item descriptions are truncated to the first 100 characters, with ... appended if longer.

View Individual Items:

Visitors can view the full details of any single item, including its complete description.

User Stories

For Inventory Managers:

Account Management:

Create an account to manage inventory.

Log into the account to access inventory.

Inventory Interaction:

View all items in the inventory.

Add new items with details such as name, description, and quantity.

Edit item details without leaving the current page.

Delete items to remove unwanted content.

Navigation:

Redirect to the inventory dashboard after login, item creation, or deletion.

For Unauthenticated Visitors:

Browse Items:

View a list of items created by all inventory managers.

Item descriptions are truncated for clarity.

View Specific Items:

Access full details of any single item, including its complete description.

Technical Details

Item Fields:

Name: Text field to specify the item name.

Description: Text field to describe the item. Truncated to 100 characters for lists.

Quantity: Numerical field to specify the item count.

Dashboard: Personalized inventory dashboard for logged-in users.

Public View: Open browsing of all items for unauthenticated visitors.

Development Setup

Clone the repository:

git clone https://github.com/VirtualVeteran/my-crud.git

Install dependencies:

npm install

Run the development server:

npm start

Contributing

Contributions are welcome! Please submit issues or pull requests for any bugs or enhancements.

License

I do want I want.

