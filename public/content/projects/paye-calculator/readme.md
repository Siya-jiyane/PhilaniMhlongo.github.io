# PAYE Calculator App

> A simple web application to calculate net salary from gross income using Python and Flask.

## ✨ About

Built this PAYE (Pay As You Earn) calculator to help people quickly calculate their net salary after tax deductions in South Africa. As someone working in IT, I often get asked about salary calculations, so I decided to build a simple tool that anyone can use.

This was one of my first Python web development projects, helping me learn the basics of web frameworks and backend development.

---

**[View on GitHub](https://github.com/siyabongajiyane/paye-calculator)**

---

## 🛠 Features

- Calculate net salary from gross income
- South African tax brackets and rates
- UIF and SDL deductions
- Medical aid tax credits
- Simple, clean web interface
- Responsive design for mobile use

---

## 🧰 Tech Stack

- **Python** - Backend logic and calculations
- **Flask** - Lightweight web framework
- **HTML/CSS** - Frontend interface
- **Bootstrap** - Responsive styling
- **JavaScript** - Form validation and interactivity

---

## 🚀 What I Learned

### Python Web Development
- Flask framework fundamentals
- Routing and template rendering
- Form handling and validation
- Session management

### Tax Calculation Logic
- South African tax brackets and rates
- PAYE calculation methodology
- UIF and SDL contribution calculations
- Medical aid tax credit applications

### Web Development Basics
- HTML form design and validation
- CSS styling and responsive design
- JavaScript for enhanced user experience
- Deployment considerations for Python apps

---

## 🔧 Key Features Implemented

### Tax Calculations
```python
def calculate_paye(annual_income):
    # South African tax brackets for 2023/2024
    tax_brackets = [
        (237100, 0.18),
        (370500, 0.26),
        (512800, 0.31),
        (673000, 0.36),
        (857900, 0.39),
        (1817600, 0.41),
        (float('inf'), 0.45)
    ]
    # Tax calculation logic here
```

### Form Validation
- Input sanitization and validation
- Error handling for invalid inputs
- User-friendly error messages
- Real-time calculation updates

---

## 🎯 Future Improvements

- Add more detailed breakdown of deductions
- Include pension fund contributions
- Support for different tax years
- Export results to PDF
- Add comparison tools for different salary scenarios
- Mobile app version

---

## 💭 Why I Built This

1. **Practical Need**: Colleagues often asked about salary calculations
2. **Learning Python**: Wanted hands-on experience with Python web development
3. **Problem Solving**: Enjoyed working through the tax calculation logic
4. **User Experience**: Focused on making complex calculations simple to use

This project helped me understand that good software solves real problems for real people, even if it's something as straightforward as a tax calculator.