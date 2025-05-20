module.exports = async function (context, req) {
  const date = "2025-05-20T14:13:37.395Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

