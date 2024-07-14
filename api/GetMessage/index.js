module.exports = async function (context, req) {
  const date = "2024-07-14T04:14:26.176Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

