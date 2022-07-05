module.exports = async function (context, req) {
  const date = "2022-07-05T12:21:03.177Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

