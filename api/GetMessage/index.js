module.exports = async function (context, req) {
  const date = "2024-04-08T19:07:59.152Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

