module.exports = async function (context, req) {
  const date = "2025-03-03T23:11:41.304Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

