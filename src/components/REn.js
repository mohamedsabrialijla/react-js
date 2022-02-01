import { t } from "i18next";
import React, { Component } from "react";
import { useTranslation } from 'react-i18next';


const REn = () => {
  const { t, i18n } = useTranslation();
    return (
      <h1>multi language here {t('name')}</h1>    
    );
}

export default REn;