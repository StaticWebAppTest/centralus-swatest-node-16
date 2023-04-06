module.exports = async function (context, req) {
  const date = "2023-04-06T15:08:41.521Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

