from flask import Flask, render_template

app = Flask(__name__, template_folder="templates", static_folder="static")

@app.route("/")
def index():
	return render_template("index.html")


@app.route("/about")
def about():
	return render_template("about.html")

@app.route("/comparison")
def comparison():
	return render_template("comparison.html")


if __name__ == "__main__":
	app.run(debug=True)