module.exports = async function (context, req) {
  const date = "2023-02-05T09:08:49.172Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

