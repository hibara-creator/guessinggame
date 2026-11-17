
.PHONY: all

all: README.md

README.md: guessinggame.sh makefile
	@printf "# Guessing Game\n\n" > README.md
	@printf "Date and time: %s\n\n" "$$(date '+%Y-%m-%d %H:%M:%S')" >> README.md
	@printf "Lines of code: %s\n" "$$(wc -l < guessinggame.sh)" >> README.md
