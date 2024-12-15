module.exports = async function (context, req) {
  const date = "2024-12-15T12:22:11.516Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

