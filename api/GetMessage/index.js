module.exports = async function (context, req) {
  const date = "2024-04-08T01:44:16.043Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

