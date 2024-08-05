module.exports = async function (context, req) {
  const date = "2024-08-05T19:11:08.643Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

