module.exports = async function (context, req) {
  const date = "2023-02-22T19:08:09.328Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

