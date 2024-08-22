module.exports = async function (context, req) {
  const date = "2024-08-22T04:12:56.984Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

