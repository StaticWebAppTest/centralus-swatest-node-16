module.exports = async function (context, req) {
  const date = "2022-04-04T19:08:49.164Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

