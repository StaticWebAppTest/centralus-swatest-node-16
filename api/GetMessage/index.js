module.exports = async function (context, req) {
  const date = "2023-09-22T21:07:24.404Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

