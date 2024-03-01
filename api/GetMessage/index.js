module.exports = async function (context, req) {
  const date = "2024-03-01T00:45:47.531Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

