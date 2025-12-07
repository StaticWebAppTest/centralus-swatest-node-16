module.exports = async function (context, req) {
  const date = "2025-12-07T16:15:18.978Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

