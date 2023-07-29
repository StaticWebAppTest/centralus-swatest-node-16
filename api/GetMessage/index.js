module.exports = async function (context, req) {
  const date = "2023-07-29T03:08:38.286Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

