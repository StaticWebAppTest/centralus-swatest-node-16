module.exports = async function (context, req) {
  const date = "2022-08-15T04:57:35.840Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

