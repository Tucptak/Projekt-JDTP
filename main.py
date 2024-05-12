from flask import Flask, render_template, session, request, url_for, make_response, redirect
import os
import json

app = Flask(__name__, template_folder="templates", static_folder="static")
app.config["SECRET_KEY"] = "123456789"

@app.route("/index")
def index():
    return render_template("index.html")


@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/comparison")
def comparison():
    return render_template("comparison.html")

@app.route("/contacts")
def contacts():
    return render_template("contacts.html")

def precti_json(nazev_souboru):
    aktivni_soubor = os.path.dirname(__file__)
    SITE_ROOT = os.path.realpath(aktivni_soubor)
    json_url = os.path.join(SITE_ROOT, "static/data", f"{nazev_souboru}.json")
    UZIVATELE = json.load(open(json_url,"r",encoding="utf-8"))
    return UZIVATELE




def zapis_do_json(nazev_souboru, data_na_zapis):
    aktivni_soubor = os.path.dirname(__file__)
    SITE_ROOT = os.path.realpath(aktivni_soubor)
    json_url = os.path.join(SITE_ROOT, "static/data", f"{nazev_souboru}.json")
    UZIVATELE = json.load(open(json_url,"r",encoding="utf-8"))
    UZIVATELE.append(data_na_zapis)
    with open(json_url, "w", encoding="utf-8") as outline:
        json.dump(UZIVATELE, outline)
    return


@app.route('/')
def rozcestnik():
    if "username" in session:
        return redirect(url_for("account"))
    return redirect(url_for("index"))

@app.route('/account')
def account():
    username = session.get("username")
    if not username:
        return redirect(url_for("login"))
    return render_template("account.html", username=username)


@app.route('/login', methods=["POST", "GET"])
def login():

    if request.method == "GET":
        return render_template("login.html")

    else:


        username = request.form.get("username")
        password = request.form.get("password")


        uzivatele = precti_json("users")
        for u in uzivatele:
            if u ["username"] == username and u ["password"] == password:
                session["username"]=username
                res = make_response(redirect(url_for("account")))
                return res

        return redirect(url_for("login"))



@app.route('/signin', methods=["POST", "GET"])
def signin():
    if request.method == "GET":
        return render_template("signin.html")

    else:
        username = request.form.get("username")
        password = request.form.get("password")

        uzivatele = precti_json("users")
        for u in uzivatele:
            if u["username"] == username:
                return redirect(url_for("login"))
            novy_uzivatel = {
                "username": username,
                "password": password
            }

            zapis_do_json("users", novy_uzivatel)

            return redirect(url_for("login"))

@app.route('/del')
def delete_account():
    if session.get("username") is not None:
        
        with open("static/data/users.json", "r", encoding="utf-8") as file:
            users = json.load(file)
        for i, u in enumerate(users):
            if u["username"] == session["username"]:
                users.pop(i)
                break
        
        with open("static/data/users.json", "w", encoding="utf-8") as file:
            json.dump(users, file)
            session.pop("username")
        return redirect(url_for("login"))
    

    else:
        return "-1"

@app.route('/logout')
def logout():
    if "username" in session:
        session.clear()
    return redirect(url_for("index"))

if __name__ == "__main__":
    app.run(debug=True)