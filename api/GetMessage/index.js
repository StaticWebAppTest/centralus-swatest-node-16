module.exports = async function (context, req) {
  const date = "2022-11-05T12:19:29.842Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

