module.exports = async function (context, req) {
  const date = "2022-07-10T10:10:39.885Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

