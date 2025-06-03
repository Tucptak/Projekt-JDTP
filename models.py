# app/models.py
import sqlite3

def get_db_connection():
    conn = sqlite3.connect('cars.db')  # Creates cars.db in root directory
    conn.row_factory = sqlite3.Row     # Allows column access by name
    return conn

def setup_database():
    conn = get_db_connection()
    conn.execute('''
        CREATE TABLE IF NOT EXISTS brands (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE
        )
    ''')
    conn.execute('''
        CREATE TABLE IF NOT EXISTS cars (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            brand_id INTEGER,
            model TEXT,
            type TEXT,
            image_url TEXT,
            price_min INTEGER,
            price_max INTEGER,
            year INTEGER,
            horsepower INTEGER,
            kilometers INTEGER,
            gas_type TEXT,
            transmission TEXT,
            FOREIGN KEY (brand_id) REFERENCES brands(id)
        )
    ''')

def insert_sample_data():
    conn = get_db_connection()

    # 👇 Clear tables (for development use)
    conn.execute("DELETE FROM cars")
    conn.execute("DELETE FROM brands")
    conn.commit()

    # Now insert new data
    conn.execute("INSERT INTO brands (name) VALUES (?)", ("Toyota",))
    conn.execute("INSERT INTO brands (name) VALUES (?)", ("BMW",))
    conn.execute("INSERT INTO brands (name) VALUES (?)", ("Ford",))

    brands = conn.execute("SELECT id, name FROM brands").fetchall()
    brand_map = {b["name"]: b["id"] for b in brands}

    toyota_cars = [
        ("Camry", "Sedan", "", 24000, 30000, 2021, 203, 15000, "Gasoline", "Automatic"),
        ("Corolla", "Sedan", "", 20000, 25000, 2020, 139, 22000, "Gasoline", "Manual"),
        ("RAV4", "SUV", "", 27000, 35000, 2022, 203, 8000, "Hybrid", "Automatic"),
        ("Highlander", "SUV", "", 35000, 45000, 2023, 295, 5000, "Gasoline", "Automatic"),
        ("Prius", "Hatchback", "", 25000, 30000, 2021, 121, 12000, "Hybrid", "Automatic"),
    ]

    bmw_cars = [
        ("X5", "SUV", "", 50000, 60000, 2022, 335, 10000, "Gasoline", "Automatic"),
        ("X3", "SUV", "", 43000, 50000, 2021, 248, 16000, "Gasoline", "Automatic"),
        ("3 Series", "Sedan", "", 41000, 48000, 2020, 255, 24000, "Diesel", "Manual"),
        ("5 Series", "Sedan", "", 54000, 65000, 2023, 335, 5000, "Gasoline", "Automatic"),
        ("i4", "Electric", "", 55000, 65000, 2023, 335, 3000, "Electric", "Automatic"),
    ]

    ford_cars = [
        ("F-150", "Truck", "", 28000, 40000, 2021, 400, 18000, "Gasoline", "Automatic"),
        ("Escape", "SUV", "", 27000, 35000, 2022, 181, 9000, "Hybrid", "Automatic"),
        ("Mustang", "Coupe", "", 30000, 50000, 2020, 450, 25000, "Gasoline", "Manual"),
        ("Explorer", "SUV", "", 33000, 45000, 2023, 300, 7000, "Gasoline", "Automatic"),
        ("Focus", "Sedan", "", 20000, 25000, 2019, 160, 30000, "Gasoline", "Manual"),
    ]

    for car in toyota_cars:
        conn.execute('''
             INSERT INTO cars 
             (brand_id, model, type, image_url, price_min, price_max, year, horsepower, kilometers, gas_type, transmission)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
         ''', (brand_map["Toyota"], *car))

    for car in bmw_cars:
        conn.execute('''
             INSERT INTO cars 
             (brand_id, model, type, image_url, price_min, price_max, year, horsepower, kilometers, gas_type, transmission)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
         ''', (brand_map["BMW"], *car))

    for car in ford_cars:
        conn.execute('''
             INSERT INTO cars 
             (brand_id, model, type, image_url, price_min, price_max, year, horsepower, kilometers, gas_type, transmission)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
         ''', (brand_map["Ford"], *car))

    conn.commit()
    conn.close()
    print(" Sample data inserted.")
