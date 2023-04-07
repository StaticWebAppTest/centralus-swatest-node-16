module.exports = async function (context, req) {
  const date = "2023-04-07T10:09:16.011Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

