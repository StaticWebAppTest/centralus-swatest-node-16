module.exports = async function (context, req) {
  const date = "2023-07-22T15:07:49.404Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

