module.exports = async function (context, req) {
  const date = "2025-12-05T15:15:04.309Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

