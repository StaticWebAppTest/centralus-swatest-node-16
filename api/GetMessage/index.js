module.exports = async function (context, req) {
  const date = "2025-12-12T15:15:56.309Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

