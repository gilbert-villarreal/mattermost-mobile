// Copyright (c) 2017-present Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import React, {PropTypes, PureComponent} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import FormattedText from 'app/components/formatted_text';
import {preventDoubleTap} from 'app/utils/tap';
import {changeOpacity, makeStyleSheetFromTheme} from 'app/utils/theme';

export default class AccountSettings extends PureComponent {
    static propTypes = {
        actions: PropTypes.shape({
            goToAccountNotifications: PropTypes.func.isRequired
        }),
        theme: PropTypes.object.isRequired
    };

    static navigationProps = {
        renderLeftComponent: (props, emitter, theme) => {
            return (
                <TouchableOpacity
                    style={{flex: 1, paddingHorizontal: 15, justifyContent: 'center'}}
                    onPress={props.onNavigateBack}
                >
                    <FormattedText
                        id='admin.select_team.close'
                        defaultMessage='Close'
                        style={{color: theme.sidebarHeaderTextColor}}
                    />
                </TouchableOpacity>
            );
        }
    };

    // The enabled arg can be removed once all the scenes have been implemented.
    buildItemRow = (icon, id, defaultMessage, action, separator = true, enabled = false) => {
        if (!enabled) {
            return null;
        }

        const {theme} = this.props;
        const style = getStyleSheet(theme);

        return (
            <View
                key={id}
                style={style.itemWrapper}
            >
                <TouchableOpacity
                    style={style.item}
                    onPress={() => preventDoubleTap(action)}
                >
                    <View style={style.itemLeftIconContainer}>
                        <Icon
                            name={icon}
                            size={18}
                            style={style.itemLeftIcon}
                        />
                    </View>
                    <FormattedText
                        id={id}
                        defaultMessage={defaultMessage}
                        style={style.itemText}
                    />
                    <Icon
                        name='angle-right'
                        size={18}
                        style={style.itemRightIcon}
                    />
                </TouchableOpacity>
                {separator && <View style={style.separator}/>}
            </View>
        );
    };

    renderItems = () => {
        return [
            this.buildItemRow('gear', 'user.settings.modal.general', 'General', () => true, true, false),
            this.buildItemRow('lock', 'user.settings.modal.security', 'Security', () => true, true, false),
            this.buildItemRow('bell', 'user.settings.modal.notifications', 'Notifications', this.props.actions.goToAccountNotifications, false, true),
            this.buildItemRow('mobile', 'user.settings.modal.display', 'Display', () => true, true, false),
            this.buildItemRow('wrench', 'user.settings.modal.advanced', 'Advanced', () => true, false, false)
        ];
    };

    render() {
        const {theme} = this.props;
        const style = getStyleSheet(theme);

        return (
            <View style={style.wrapper}>
                <View style={style.container}>
                    <View style={style.itemsContainer}>
                        {this.renderItems()}
                    </View>
                </View>
            </View>
        );
    }
}

const getStyleSheet = makeStyleSheetFromTheme((theme) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: changeOpacity(theme.centerChannelColor, 0.03)
        },
        item: {
            height: 45,
            flexDirection: 'row',
            alignItems: 'center'
        },
        itemLeftIcon: {
            color: changeOpacity(theme.centerChannelColor, 0.5)
        },
        itemLeftIconContainer: {
            width: 18,
            marginRight: 15,
            alignItems: 'center',
            justifyContent: 'center'
        },
        itemText: {
            fontSize: 16,
            color: theme.centerChannelColor,
            flex: 1
        },
        itemRightIcon: {
            color: changeOpacity(theme.centerChannelColor, 0.5)
        },
        itemsContainer: {
            marginTop: 30,
            backgroundColor: theme.centerChannelBg,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderTopColor: changeOpacity(theme.centerChannelColor, 0.1),
            borderBottomColor: changeOpacity(theme.centerChannelColor, 0.1)
        },
        itemWrapper: {
            marginHorizontal: 15
        },
        separator: {
            height: 1,
            backgroundColor: changeOpacity(theme.centerChannelColor, 0.1)
        },
        wrapper: {
            flex: 1,
            backgroundColor: theme.centerChannelBg
        }
    });
});
