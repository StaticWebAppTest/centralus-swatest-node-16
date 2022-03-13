module.exports = async function (context, req) {
  const date = "2022-03-13T10:10:17.885Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

