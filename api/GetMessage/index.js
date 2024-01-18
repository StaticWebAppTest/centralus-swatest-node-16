module.exports = async function (context, req) {
  const date = "2024-01-18T02:24:41.582Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

