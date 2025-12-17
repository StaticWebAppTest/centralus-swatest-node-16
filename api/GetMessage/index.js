module.exports = async function (context, req) {
  const date = "2025-12-17T14:15:34.624Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

