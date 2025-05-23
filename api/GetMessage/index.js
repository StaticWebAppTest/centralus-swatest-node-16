module.exports = async function (context, req) {
  const date = "2025-05-23T01:05:50.043Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

