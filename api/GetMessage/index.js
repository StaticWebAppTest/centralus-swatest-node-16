module.exports = async function (context, req) {
  const date = "2024-01-20T02:22:44.309Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

