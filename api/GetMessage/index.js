module.exports = async function (context, req) {
  const date = "2023-08-29T01:41:49.922Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

