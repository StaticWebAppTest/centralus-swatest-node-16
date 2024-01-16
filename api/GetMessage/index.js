module.exports = async function (context, req) {
  const date = "2024-01-16T04:11:41.204Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

