module.exports = async function (context, req) {
  const date = "2024-03-31T05:08:59.845Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

