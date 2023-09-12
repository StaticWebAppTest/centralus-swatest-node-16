module.exports = async function (context, req) {
  const date = "2023-09-12T02:13:54.883Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

