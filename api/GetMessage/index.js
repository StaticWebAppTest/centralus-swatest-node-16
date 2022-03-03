module.exports = async function (context, req) {
  const date = "2022-03-03T20:10:21.343Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

