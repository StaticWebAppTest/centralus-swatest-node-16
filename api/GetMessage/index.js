module.exports = async function (context, req) {
  const date = "2022-07-22T19:08:40.842Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

