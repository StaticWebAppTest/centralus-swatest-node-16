module.exports = async function (context, req) {
  const date = "2024-04-18T12:16:28.138Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

