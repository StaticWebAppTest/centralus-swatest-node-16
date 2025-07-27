module.exports = async function (context, req) {
  const date = "2025-07-27T15:13:25.661Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

