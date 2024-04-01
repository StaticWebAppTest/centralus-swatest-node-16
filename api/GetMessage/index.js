module.exports = async function (context, req) {
  const date = "2024-04-01T04:11:48.375Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

