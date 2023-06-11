module.exports = async function (context, req) {
  const date = "2023-06-11T02:41:01.883Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

