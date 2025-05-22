module.exports = async function (context, req) {
  const date = "2025-05-22T07:13:12.768Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

