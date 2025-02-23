module.exports = async function (context, req) {
  const date = "2025-02-23T13:14:47.164Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

