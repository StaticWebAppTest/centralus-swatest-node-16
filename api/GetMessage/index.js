module.exports = async function (context, req) {
  const date = "2025-02-25T20:13:31.635Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

