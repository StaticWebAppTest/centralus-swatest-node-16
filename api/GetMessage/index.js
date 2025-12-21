module.exports = async function (context, req) {
  const date = "2025-12-21T22:13:27.309Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

