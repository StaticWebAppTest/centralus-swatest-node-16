module.exports = async function (context, req) {
  const date = "2024-07-14T22:10:12.064Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

