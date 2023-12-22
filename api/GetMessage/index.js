module.exports = async function (context, req) {
  const date = "2023-12-22T11:07:43.885Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

