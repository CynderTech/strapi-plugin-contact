"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    kind: "collectionType",
    collectionName: "messages",
    info: {
        singularName: "message",
        pluralName: "messages",
        displayName: "Message"
    },
    options: {
        comment: "",
        draftAndPublish: false,
        increments: true
    },
    attributes: {
        name: {
            type: "string",
            required: true,
            maxLength: 255
        },
        email: {
            type: "email",
            required: true,
            maxLength: 255
        },
        organization: {
            type: "string",
            required: false,
            maxLength: 255
        },
        contactNumber: {
            type: "string",
            maxLength: 255
        },
        concernType: {
            type: "string",
            maxLength: 255
        },
        message: {
            type: "text",
            required: true
        }
    }
};
