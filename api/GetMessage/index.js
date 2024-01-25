module.exports = async function (context, req) {
  const date = "2024-01-25T02:27:16.323Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

