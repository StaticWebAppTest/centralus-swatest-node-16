module.exports = async function (context, req) {
  const date = "2024-04-25T19:08:17.186Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

