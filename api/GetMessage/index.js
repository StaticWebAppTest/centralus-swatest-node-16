module.exports = async function (context, req) {
  const date = "2023-02-27T16:13:47.883Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

