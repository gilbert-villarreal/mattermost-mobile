// Copyright (c) 2016-present Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import Config from 'assets/config.json';

import Routes from 'app/navigation/routes';

const state = {
    entities: {
        general: {
            appState: false,
            credentials: {},
            config: {},
            deviceToken: '',
            license: {},
            serverVersion: ''
        },
        users: {
            currentUserId: '',
            mySessions: [],
            myAudits: [],
            profiles: {},
            profilesInTeam: {},
            profilesInChannel: {},
            profilesNotInChannel: {},
            statuses: {}
        },
        teams: {
            currentTeamId: '',
            teams: {},
            myMembers: {},
            membersInTeam: {},
            stats: {}
        },
        channels: {
            currentChannelId: '',
            channels: {},
            myMembers: {},
            stats: {}
        },
        posts: {
            posts: {},
            postsInChannel: {},
            selectedPostId: '',
            currentFocusedPostId: ''
        },
        preferences: {
            myPreferences: {}
        },
        typing: {}
    },
    errors: [],
    requests: {
        channels: {
            getChannel: {
                status: 'not_started',
                error: null
            },
            getChannels: {
                status: 'not_started',
                error: null
            },
            myMembers: {
                status: 'not_started',
                error: null
            },
            createChannel: {
                status: 'not_started',
                error: null
            },
            updateChannel: {
                status: 'not_started',
                error: null
            },
            updateChannelNotifyProps: {
                status: 'not_started',
                error: null
            },
            leaveChannel: {
                status: 'not_started',
                error: null
            },
            joinChannel: {
                status: 'not_started',
                error: null
            },
            deleteChannel: {
                status: 'not_started',
                error: null
            },
            updateLastViewedAt: {
                status: 'not_started',
                error: null
            },
            getChannelStats: {
                status: 'not_started',
                error: null
            },
            addChannelMember: {
                status: 'not_started',
                error: null
            },
            removeChannelMember: {
                status: 'not_started',
                error: null
            }
        },
        general: {
            server: {
                status: 'not_started',
                error: null
            },
            config: {
                status: 'not_started',
                error: null
            },
            license: {
                status: 'not_started',
                error: null
            },
            websocket: {
                status: 'not_started',
                error: null
            }
        },
        posts: {
            createPost: {
                status: 'not_started',
                error: null
            },
            editPost: {
                status: 'not_started',
                error: null
            },
            deletePost: {
                status: 'not_started',
                error: null
            },
            getPostThread: {
                status: 'not_started',
                error: null
            },
            getPosts: {
                status: 'not_started',
                error: null
            },
            getPostsSince: {
                status: 'not_started',
                error: null
            },
            getPostsBefore: {
                status: 'not_started',
                error: null
            },
            getPostsAfter: {
                status: 'not_started',
                error: null
            }
        },
        teams: {
            getMyTeams: {
                status: 'not_started',
                error: null
            },
            getTeams: {
                status: 'not_started',
                error: null
            },
            createTeam: {
                status: 'not_started',
                error: null
            },
            updateTeam: {
                status: 'not_started',
                error: null
            },
            getMyTeamMembers: {
                status: 'not_started',
                error: null
            },
            getTeamMembers: {
                status: 'not_started',
                error: null
            },
            getTeamStats: {
                status: 'not_started',
                error: null
            },
            addUserToTeam: {
                status: 'not_started',
                error: null
            },
            removeUserFromTeam: {
                status: 'not_started',
                error: null
            }
        },
        users: {
            login: {
                status: 'not_started',
                error: null
            },
            logout: {
                status: 'not_started',
                error: null
            },
            getProfiles: {
                status: 'not_started',
                error: null
            },
            getProfilesInTeam: {
                status: 'not_started',
                error: null
            },
            getProfilesInChannel: {
                status: 'not_started',
                error: null
            },
            getProfilesNotInChannel: {
                status: 'not_started',
                error: null
            },
            getStatusesByIds: {
                status: 'not_started',
                error: null
            },
            getSessions: {
                status: 'not_started',
                error: null
            },
            revokeSession: {
                status: 'not_started',
                error: null
            },
            getAudits: {
                status: 'not_started',
                error: null
            }
        },
        preferences: {
            getMyPreferences: {
                status: 'not_started',
                error: null
            },
            savePreferences: {
                status: 'not_started',
                error: null
            },
            deletePreferences: {
                status: 'not_started',
                error: null
            }
        }
    },
    navigation: {
        index: 0,
        routes: [
            Routes.Root
        ],
        modal: {
            index: 0,
            requestClose: false,
            routes: []
        },
        isModal: false,
        leftDrawerOpen: false,
        leftDrawerRoute: Routes.ChannelDrawer,
        rightDrawerOpen: false,
        rightDrawerRoute: null,
        shouldRenderDrawer: false
    },
    views: {
        channel: {
            drafts: {},
            loading: false
        },
        connection: true,
        fetchCache: {},
        i18n: {
            locale: ''
        },
        login: {
            loginId: '',
            password: ''
        },
        notification: null,
        optionsModal: {
            title: '',
            options: [],
            visible: false
        },
        root: {
            hydrationComplete: false
        },
        selectServer: {
            serverUrl: Config.DefaultServerUrl
        },
        team: {},
        thread: {
            drafts: {}
        }
    }
};

export default state;
