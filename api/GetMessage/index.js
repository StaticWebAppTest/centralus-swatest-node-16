module.exports = async function (context, req) {
  const date = "2024-09-06T06:15:54.269Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

