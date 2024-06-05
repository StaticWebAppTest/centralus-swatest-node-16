module.exports = async function (context, req) {
  const date = "2024-06-05T00:45:45.791Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

