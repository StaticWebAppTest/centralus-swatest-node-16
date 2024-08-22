module.exports = async function (context, req) {
  const date = "2024-08-22T13:15:05.138Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

