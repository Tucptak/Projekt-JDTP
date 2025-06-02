# app/models.py
import sqlite3

def get_db_connection():
    conn = sqlite3.connect('cars.db')  # Creates cars.db in root directory
    conn.row_factory = sqlite3.Row     # Allows column access by name
    return conn

def setup_database():
    conn = get_db_connection()
    cursor = conn.cursor()

    # Create brand table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS brands (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL
        )
    ''')

    # Create car table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS cars (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            brand_id INTEGER,
            model TEXT NOT NULL,
            image_url TEXT,
            price_min INTEGER,
            price_max INTEGER,
            type TEXT,
            FOREIGN KEY (brand_id) REFERENCES brands (id)
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

    conn.execute("INSERT INTO cars (brand_id, model, type, image_url, price_min, price_max) VALUES (?, ?, ?, ?, ?, ?)",
                 (brand_map["Toyota"], "Camry", "Sedan", "", 24000, 30000))
    conn.execute("INSERT INTO cars (brand_id, model, type, image_url, price_min, price_max) VALUES (?, ?, ?, ?, ?, ?)",
                 (brand_map["Toyota"], "Corolla", "Sedan", "", 20000, 25000))
    conn.execute("INSERT INTO cars (brand_id, model, type, image_url, price_min, price_max) VALUES (?, ?, ?, ?, ?, ?)",
                 (brand_map["BMW"], "X5", "SUV", "", 50000, 60000))
    conn.execute("INSERT INTO cars (brand_id, model, type, image_url, price_min, price_max) VALUES (?, ?, ?, ?, ?, ?)",
                 (brand_map["Ford"], "F-150", "Truck", "", 28000, 40000))

    conn.commit()
    conn.close()
    print(" Sample data inserted.")
