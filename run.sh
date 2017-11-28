#!/bin/bash
while true; do
        clear
        date
        casperjs --verbose --log-level=debug --ignore-ssl-errors=true --ssl-protocol=any jscpanelmanager.js
        date
        echo ""
        secs=$((10 * 60))
        while [ $secs -gt 0 ]; do
                echo -ne "next check in $secs seconds \033[0K[.  ]\r"
                sleep 0.2
                echo -ne "next check in $secs seconds \033[0K[.. ]\r"
                sleep 0.2
                echo -ne "next check in $secs seconds \033[0K[...]\r"
                sleep 0.2
                echo -ne "next check in $secs seconds \033[0K[.. ]\r"
                sleep 0.2
                echo -ne "next check in $secs seconds \033[0K[.. ]\r"
                sleep 0.2
                : $((secs--))
        done
done
