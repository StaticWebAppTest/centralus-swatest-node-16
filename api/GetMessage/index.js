module.exports = async function (context, req) {
  const date = "2023-11-17T20:09:58.053Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

