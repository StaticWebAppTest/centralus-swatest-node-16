module.exports = async function (context, req) {
  const date = "2024-01-22T02:31:14.792Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

