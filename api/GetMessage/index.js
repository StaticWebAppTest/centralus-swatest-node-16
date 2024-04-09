module.exports = async function (context, req) {
  const date = "2024-04-09T01:42:52.554Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

