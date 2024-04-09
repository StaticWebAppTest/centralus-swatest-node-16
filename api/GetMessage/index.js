module.exports = async function (context, req) {
  const date = "2024-04-09T12:16:55.764Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

