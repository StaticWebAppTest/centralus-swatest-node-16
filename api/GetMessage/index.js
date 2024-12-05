module.exports = async function (context, req) {
  const date = "2024-12-05T17:11:16.599Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

