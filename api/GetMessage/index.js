module.exports = async function (context, req) {
  const date = "2023-11-22T12:17:40.404Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

