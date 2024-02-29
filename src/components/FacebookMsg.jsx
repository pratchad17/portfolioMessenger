"use client";
import React from "react";
import { FacebookProvider, CustomChat } from "react-facebook";

const FacebookMsg = () => {
    return (
        <div>
            <FacebookProvider appId="1611180076355587" chatSupport>
                <CustomChat pageId="243077895549141" minimized={true} />
            </FacebookProvider>
        </div>
    );
};

export default FacebookMsg;
