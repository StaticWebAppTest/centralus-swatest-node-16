module.exports = async function (context, req) {
  const date = "2024-07-22T10:11:17.459Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

