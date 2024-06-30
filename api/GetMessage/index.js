module.exports = async function (context, req) {
  const date = "2024-06-30T10:09:41.599Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

