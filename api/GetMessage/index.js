module.exports = async function (context, req) {
  const date = "2023-10-05T12:17:41.300Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

