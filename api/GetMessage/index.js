module.exports = async function (context, req) {
  const date = "2024-04-26T09:10:35.269Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

