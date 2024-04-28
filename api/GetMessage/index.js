module.exports = async function (context, req) {
  const date = "2024-04-28T20:09:55.778Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

