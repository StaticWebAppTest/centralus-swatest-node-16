module.exports = async function (context, req) {
  const date = "2024-08-20T04:14:41.759Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

