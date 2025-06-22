module.exports = async function (context, req) {
  const date = "2025-06-22T15:12:19.304Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

