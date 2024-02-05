module.exports = async function (context, req) {
  const date = "2024-02-05T04:11:41.809Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

