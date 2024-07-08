module.exports = async function (context, req) {
  const date = "2024-07-08T10:11:41.389Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

