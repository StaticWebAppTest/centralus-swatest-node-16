module.exports = async function (context, req) {
  const date = "2024-01-15T02:28:35.012Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

