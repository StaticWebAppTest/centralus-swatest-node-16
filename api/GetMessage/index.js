module.exports = async function (context, req) {
  const date = "2024-12-26T19:09:31.498Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

