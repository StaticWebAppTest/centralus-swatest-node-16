module.exports = async function (context, req) {
  const date = "2024-01-03T14:08:41.300Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

