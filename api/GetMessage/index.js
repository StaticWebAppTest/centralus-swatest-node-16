module.exports = async function (context, req) {
  const date = "2022-03-01T13:16:06.814Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

