module.exports = async function (context, req) {
  const date = "2024-04-01T00:46:43.888Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

