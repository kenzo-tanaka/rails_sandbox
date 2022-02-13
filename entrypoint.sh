#!/bin/bash

set -e

rm -f /myapp/tmp/pids/server.id

exec "$@"