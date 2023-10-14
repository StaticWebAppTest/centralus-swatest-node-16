module.exports = async function (context, req) {
  const date = "2023-10-14T19:06:17.815Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

