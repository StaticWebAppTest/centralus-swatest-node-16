module.exports = async function (context, req) {
  const date = "2024-04-01T02:24:34.076Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

