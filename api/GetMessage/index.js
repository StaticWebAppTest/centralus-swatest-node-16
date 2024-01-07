module.exports = async function (context, req) {
  const date = "2024-01-07T07:08:25.176Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

