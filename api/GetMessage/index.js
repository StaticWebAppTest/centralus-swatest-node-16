module.exports = async function (context, req) {
  const date = "2023-04-04T20:09:31.177Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

