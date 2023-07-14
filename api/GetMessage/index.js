module.exports = async function (context, req) {
  const date = "2023-07-14T07:09:24.885Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

