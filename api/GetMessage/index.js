module.exports = async function (context, req) {
  const date = "2025-07-06T14:11:41.389Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

