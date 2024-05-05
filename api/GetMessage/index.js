module.exports = async function (context, req) {
  const date = "2024-05-05T22:08:59.694Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

