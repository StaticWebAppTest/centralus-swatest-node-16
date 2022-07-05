module.exports = async function (context, req) {
  const date = "2022-07-05T19:08:34.312Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

