module.exports = async function (context, req) {
  const date = "2023-01-21T20:09:12.053Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

