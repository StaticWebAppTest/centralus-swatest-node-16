module.exports = async function (context, req) {
  const date = "2024-05-03T01:51:41.892Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

