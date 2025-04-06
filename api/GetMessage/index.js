module.exports = async function (context, req) {
  const date = "2025-04-06T19:09:01.152Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

