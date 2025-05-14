module.exports = async function (context, req) {
  const date = "2025-05-14T09:14:14.157Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

