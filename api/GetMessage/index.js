module.exports = async function (context, req) {
  const date = "2024-01-21T09:08:47.516Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

