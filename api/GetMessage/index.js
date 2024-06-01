module.exports = async function (context, req) {
  const date = "2024-06-01T05:10:05.269Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

