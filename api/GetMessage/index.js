module.exports = async function (context, req) {
  const date = "2023-03-31T02:04:38.502Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

