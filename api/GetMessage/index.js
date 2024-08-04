module.exports = async function (context, req) {
  const date = "2024-08-04T04:13:49.043Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

