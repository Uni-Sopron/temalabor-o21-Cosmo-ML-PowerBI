package org.janoschek;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public final class Log {

    private static final Logger LOG = LogManager.getLogger(Log.class.getName());

    private Log(){}

    public static Logger get() {
        return LOG;
    }
}
