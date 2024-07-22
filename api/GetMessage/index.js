module.exports = async function (context, req) {
  const date = "2024-07-22T08:14:44.176Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

