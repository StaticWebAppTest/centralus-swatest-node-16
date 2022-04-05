module.exports = async function (context, req) {
  const date = "2022-04-05T22:09:21.356Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

