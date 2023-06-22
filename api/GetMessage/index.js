module.exports = async function (context, req) {
  const date = "2023-06-22T12:17:12.334Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

