module.exports = async function (context, req) {
  const date = "2023-01-29T16:11:40.815Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

