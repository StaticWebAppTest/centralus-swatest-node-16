module.exports = async function (context, req) {
  const date = "2022-04-05T19:08:47.309Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

