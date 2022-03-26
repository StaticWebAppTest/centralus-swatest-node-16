module.exports = async function (context, req) {
  const date = "2022-03-26T04:12:34.888Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

