module.exports = async function (context, req) {
  const date = "2024-01-07T12:15:32.797Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

