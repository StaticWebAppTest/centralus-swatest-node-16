module.exports = async function (context, req) {
  const date = "2025-05-12T06:20:15.269Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

