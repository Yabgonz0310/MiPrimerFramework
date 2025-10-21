
const { contentType } = require("mime-types");
const status = require("statuses");

const { I } = inject();

class AttChat {
    constructor(){
        this.fields ={
            pagprin: "https://www.att.com.mx/",
            btnchat: '//div[@role="button"]',
            //'//div[@class="css-17ehq8p eg0frzz6"]',
             };
    }

   async mocking(){
        I.mockRoute('https://prod-live-chat.sprinklr.com/api/livechat/handshake/application/618bd3f05f4bd037d59aabb5_app_1066573', async (route) => {
            await route.fulfill ({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify(
                    {
                        "createdTime": 1660029430068,
                        "deleted": false,
                        "canEdit": false,
                        "id": "app_1066573",
                        "accountId": 1066573,
                        "partnerId": 485,
                        "name": "AT&T MX Ventas",
                        "description": "AT&T MX Ventas Live Chat",
                        "showBrandProfile": false,
                        "botName": "Chat de HITSS México",
                        "botProfileImgUrl": "https://sprcdn-assets.sprinklr.com/485/c9743d3b-5cd6-4db9-a813-7ba7a4ce9717-1576126871/pictogram_chatbot_blk_p.png",
                        "allowedTags": [
                            "target"
                        ],
                        "expireAfterDuration": 96,
                        "expireAfterDurationUnit": "HOURS",
                        "otherConfigs": {
                            "settings": {
                                "externalLocaleData": {
                                    "es": "https://live-chat-static.sprinklr.com/externalLocaleData/603c1161745e1505c37c8cd5_app_819193/es.json"
                                },
                                "hour12": true,
                                "analyticsSettings": {
                                    "sprinklrAnalytics": {
                                        "enabled": true
                                    }
                                },
                                "maximumOpenConversations": {
                                    "limit": 1,
                                    "label": "Estimado cliente, hemos identificado una solicitud de atención anterior, le invitamos a continuar por el botón de conversación previo"
                                },
                                "delayInitializePoller": true,
                                "enableSentry": true
                            },
                            "theme": {
                                "colors": {
                                    "primary": "#0057B8"
                                },
                                "styles": {
                                    "chatConversation": {
                                        "body": {
                                            "backgroundColor": "#FFFFFF"
                                        }
                                    },
                                    "trigger": {
                                        "icon": {
                                            "type": "cloud"
                                        },
                                        "closeIcon": {},
                                        "align": "right",
                                        "xPadding": 20,
                                        "yPadding": 20
                                    }
                                }
                            },
                            "trigger": {
                                "defaultHidden": false,
                                "initiallyHidden": false,
                                "label": "Chat"
                            },
                            "homeScreen": {
                                "header": {
                                    "logo": "https://sprcdn-assets.sprinklr.com/485/a8e97c89-abca-45eb-ba79-c4514baf5615-36052875/New_Globe_v3_p.png",
                                    "title": "Chat de HITSS México",
                                    "description": "AT&T México"
                                },
                                "conversationCard": {
                                    "title": "<p style=\"margin: 0;\">Bienvenido al chat de HITSS México, por favor dinos tu nombre.</p>",
                                    "button": {
                                        "label": "Comenzar"
                                    },
                                    "agents": {
                                        "shouldShow": false,
                                        "images": []
                                    },
                                    "hideWavingHandIcon": true
                                }
                            },
                            "conversationScreen": {
                                "actionsToShowByVariant": {},
                                "header": {
                                    "title": "Chat de HITSS México",
                                    "description": "AT&T México"
                                },
                                "inputPlaceholderMessage": "Escribe y envía tu mensaje aquí",
                                "footer": {
                                    "chatMessageComposer": {}
                                },
                                "shouldHidePersonaNames": true
                            },
                            "allScreens": {
                                "shouldEnablePersonaNames": true,
                                "shouldEnablePersonaAvatars": true
                            }
                        },
                        "welcomeMessageConfig": {
                            "defaultMessages": [
                                {
                                    "messageType": 313,
                                    "text": "¡Hola! Por favor completa la siguiente información para atenderte mejor",
                                    "textEntities": [],
                                    "disableManualResponse": false
                                }
                            ],
                            "welcomeMessages": [
                                {
                                    "filter": {
                                        "filterType": "AND",
                                        "userFilter": false,
                                        "allValuesAllowed": true,
                                        "lockedWithValues": false,
                                        "hidden": false,
                                        "favourite": false,
                                        "mandatory": false,
                                        "locked": false,
                                        "ignoreAddingToDimensionFilter": false,
                                        "details": {},
                                        "filters": [
                                            {
                                                "filterType": "IN",
                                                "field": "SPRINKLR_LIVE_CHAT_LOGGED_IN",
                                                "values": [
                                                    true
                                                ],
                                                "userFilter": false,
                                                "allValuesAllowed": true,
                                                "lockedWithValues": false,
                                                "hidden": false,
                                                "favourite": false,
                                                "mandatory": false,
                                                "locked": false,
                                                "ignoreAddingToDimensionFilter": false,
                                                "details": {
                                                    "valueAdditional": {}
                                                }
                                            }
                                        ]
                                    },
                                    "messages": [
                                        {
                                            "messageType": 313,
                                            "text": "Bienvenido a AT&T México, %%[toprofile_FULL_NAME:FullName]!",
                                            "textEntities": [],
                                            "disableManualResponse": false
                                        },
                                        {
                                            "messageType": 313,
                                            "attachment": {
                                                "type": "SAM",
                                                "subType": 3031,
                                                "assetId": "6250aa1e95f32d339332212a"
                                            },
                                            "disableManualResponse": false
                                        }
                                    ]
                                },
                                {
                                    "filter": {
                                        "filterType": "IN",
                                        "field": "SPRINKLR_LIVE_CHAT_LOGGED_IN",
                                        "values": [
                                            false
                                        ],
                                        "userFilter": false,
                                        "allValuesAllowed": true,
                                        "lockedWithValues": false,
                                        "hidden": false,
                                        "favourite": false,
                                        "mandatory": false,
                                        "locked": false,
                                        "ignoreAddingToDimensionFilter": false,
                                        "details": {}
                                    },
                                    "messages": [
                                        {
                                            "messageType": 313,
                                            "text": "¡Hola! Por favor completa la siguiente información para atenderte mejor",
                                            "textEntities": [],
                                            "disableManualResponse": false
                                        },
                                        {
                                            "messageType": 313,
                                            "attachment": {
                                                "type": "CONTACT_DETAILS_FORM",
                                                "subType": 2029,
                                                "otherConfigs": {
                                                    "postSubmitHideImage": false
                                                },
                                                "templateType": true,
                                                "disableManualResponse": true,
                                                "hideAttachment": false,
                                                "expired": false,
                                                "submitted": false,
                                                "reSubmittable": false,
                                                "postSubmitTitle": "Gracias",
                                                "showSubmittedContent": false,
                                                "showContentPostSubmit": false,
                                                "isReCaptchaEnabled": false,
                                                "reCaptchaValidated": false,
                                                "title": "<p style=\"margin: 0;\">Datos de Cliente</p>",
                                                "form": {
                                                    "formId": "9acce563-5ef1-4801-ba41-bd5f7d8d9a78",
                                                    "fields": [
                                                        {
                                                            "deleted": false,
                                                            "permissionTypes": [],
                                                            "canEdit": false,
                                                            "id": "NAME",
                                                            "fieldName": "NAME",
                                                            "type": "TEXT",
                                                            "parentChild": false,
                                                            "standardAttribute": false,
                                                            "multivalued": false,
                                                            "constraints": [],
                                                            "auditable": true,
                                                            "searchable": false,
                                                            "sortable": false,
                                                            "reportable": false,
                                                            "reorderable": false,
                                                            "groupable": false,
                                                            "cardinality": false,
                                                            "asDashboardFilter": false,
                                                            "cloneable": true,
                                                            "mask": false,
                                                            "mandatory": true,
                                                            "hasSubFields": false,
                                                            "inlcudeInAudit": true,
                                                            "resolvedDataType": "TEXT",
                                                            "dispositionGlobalField": false,
                                                            "entityMetadataField": false,
                                                            "dispositionGlobalModifiedField": false,
                                                            "modifiedTimeMillis": 0,
                                                            "searchAssetId": "NAME",
                                                            "partnerCustomProperties": {},
                                                            "name": "<p style=\"margin: 0;\">Nombre</p>"
                                                        },
                                                        {
                                                            "deleted": false,
                                                            "permissionTypes": [],
                                                            "canEdit": false,
                                                            "id": "PHONE_NO",
                                                            "fieldName": "PHONE_NO",
                                                            "type": "PHONE",
                                                            "parentChild": false,
                                                            "standardAttribute": false,
                                                            "multivalued": false,
                                                            "constraints": [],
                                                            "auditable": true,
                                                            "searchable": false,
                                                            "sortable": false,
                                                            "reportable": false,
                                                            "reorderable": false,
                                                            "groupable": false,
                                                            "cardinality": false,
                                                            "asDashboardFilter": false,
                                                            "cloneable": true,
                                                            "mask": false,
                                                            "mandatory": true,
                                                            "hasSubFields": false,
                                                            "inlcudeInAudit": true,
                                                            "resolvedDataType": "PHONE",
                                                            "dispositionGlobalField": false,
                                                            "entityMetadataField": false,
                                                            "dispositionGlobalModifiedField": false,
                                                            "modifiedTimeMillis": 0,
                                                            "searchAssetId": "PHONE_NO",
                                                            "partnerCustomProperties": {},
                                                            "name": "<p style=\"margin: 0;\">Número de contacto (10 digitos)</p>"
                                                        },
                                                        {
                                                            "deleted": false,
                                                            "permissionTypes": [],
                                                            "canEdit": false,
                                                            "id": "628728e4-8c36-448b-a96f-80f431b8dbb2",
                                                            "fieldName": "628728e4-8c36-448b-a96f-80f431b8dbb2",
                                                            "type": "CHECKBOX",
                                                            "parentChild": false,
                                                            "standardAttribute": false,
                                                            "multivalued": false,
                                                            "constraints": [],
                                                            "auditable": true,
                                                            "searchable": false,
                                                            "sortable": false,
                                                            "reportable": false,
                                                            "reorderable": false,
                                                            "groupable": false,
                                                            "cardinality": false,
                                                            "asDashboardFilter": false,
                                                            "cloneable": true,
                                                            "mask": false,
                                                            "mandatory": true,
                                                            "hasSubFields": false,
                                                            "inlcudeInAudit": true,
                                                            "resolvedDataType": "CHECKBOX",
                                                            "dispositionGlobalField": false,
                                                            "entityMetadataField": false,
                                                            "dispositionGlobalModifiedField": false,
                                                            "modifiedTimeMillis": 0,
                                                            "searchAssetId": "628728e4-8c36-448b-a96f-80f431b8dbb2",
                                                            "partnerCustomProperties": {},
                                                            "name": "<p style=\"margin: 0;\">Acepto <a title=\"Aviso de Privacidad\" href=\"https://www.att.com.mx/legales/aviso-de-privacidad.html\" target=\"_blank\" rel=\"noopener\">Aviso de Privacidad</a></p>"
                                                        }
                                                    ]
                                                },
                                                "submit": {
                                                    "id": "a87969aa-1cda-4146-b8bf-b8270220d4f5",
                                                    "type": "POST_BACK",
                                                    "title": "Enviar",
                                                    "makeExternalCall": false,
                                                    "postBackHandlerType": "CONTACT_DETAILS_POST_BACK"
                                                },
                                                "postSubmit": {
                                                    "id": "7c9b9f6a-ee8b-4d94-abfe-4cc7d7270b1a",
                                                    "type": "POST_BACK",
                                                    "makeExternalCall": false,
                                                    "postBackHandlerType": "CONTACT_DETAILS_POST_BACK"
                                                },
                                                "fieldMappings": [
                                                    {
                                                        "targetField": "PROFILE._c_6033db23266beb19504c46b3",
                                                        "sourceField": "NAME",
                                                        "op": "SET"
                                                    },
                                                    {
                                                        "targetField": "PROFILE.5d289a94e4b05b407a4fbda8",
                                                        "sourceField": "PHONE_NO",
                                                        "op": "SET"
                                                    },
                                                    {
                                                        "targetField": "PROFILE._c_6258378cc387253fe3f24fec",
                                                        "sourceField": "628728e4-8c36-448b-a96f-80f431b8dbb2",
                                                        "op": "SET"
                                                    }
                                                ]
                                            },
                                            "disableManualResponse": false
                                        }
                                    ]
                                }
                            ]
                        },
                        "convDisclaimerConfig": {},
                        "maxAttachmentCount": 1,
                        "supportedLocales": [
                            "es"
                        ],
                        "defaultLocale": "es",
                        "hasPrompts": false,
                        "callConfiguration": {
                            "disableRecording": false,
                            "onlyAudioRecording": false,
                            "videoChatEnabled": false
                        },
                        "versionId": 0,
                        "sendWelcomeMessageOnEmptyChat": false,
                        "configFilters": [],
                        "chatUrl": "https://prod-live-chat.sprinklr.com",
                        "maximumContentLength": 15728640,
                        "uploadPolicy": "SPR",
                        "cspDomains": [],
                        "recordingDisabled": false,
                        "transcriptionEnabled": false,
                        "versionableAssetType": "CHAT_APPLICATION",
                        "onlyAudioRecordingEnabled": false,
                        "modifiedTimeMillis": 0,
                        "searchAssetId": "app_1066573",
                        "partnerCustomProperties": {}
                    }
                )
            })
        } )
    }
   async attinicio(){
      await  I.amOnPage(this.fields.pagprin);
      await  I.wait(10);
    }
  async  chat(){
       await I.click(this.fields.btnchat);
       await I.wait(5);
    }
   async vercambio(){
        I.wait(5);
    }
}
module.exports = new AttChat();