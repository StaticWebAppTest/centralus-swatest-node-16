module.exports = async function (context, req) {
  const date = "2023-07-09T20:09:29.778Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

