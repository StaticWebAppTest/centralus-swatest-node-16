module.exports = async function (context, req) {
  const date = "2024-03-05T08:12:20.269Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

