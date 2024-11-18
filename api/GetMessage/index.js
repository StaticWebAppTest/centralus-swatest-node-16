module.exports = async function (context, req) {
  const date = "2024-11-18T03:27:51.234Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

