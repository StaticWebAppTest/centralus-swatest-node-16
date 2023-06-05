module.exports = async function (context, req) {
  const date = "2023-06-05T06:11:59.481Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

