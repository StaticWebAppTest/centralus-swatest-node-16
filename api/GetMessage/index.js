module.exports = async function (context, req) {
  const date = "2024-01-31T12:15:37.844Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

