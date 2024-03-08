module.exports = async function (context, req) {
  const date = "2024-03-08T19:08:00.138Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

