module.exports = async function (context, req) {
  const date = "2025-06-23T12:28:58.404Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

