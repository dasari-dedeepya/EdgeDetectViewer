cmake_minimum_required(VERSION 3.10.2)
project("edgedetectviewer")

add_library(
        native-lib
        SHARED
        native-lib.cpp
)

find_package(OpenCV REQUIRED core imgproc)

include_directories(${OpenCV_INCLUDE_DIRS})

target_link_libraries(
        native-lib
        ${OpenCV_LIBS}
        log
)
