module.exports = async function (context, req) {
  const date = "2023-08-05T03:08:41.441Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

