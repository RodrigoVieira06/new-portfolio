.DEFAULT_GOAL := help

.PHONY: help install dev build test lint format check

help:
	@echo "make install | dev | build | test | lint | format | check"

install:
	pnpm install

dev:
	pnpm dev

build:
	pnpm build

test:
	pnpm test

lint:
	pnpm lint

format:
	pnpm format

check: lint test build
