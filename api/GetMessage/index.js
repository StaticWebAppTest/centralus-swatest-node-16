module.exports = async function (context, req) {
  const date = "2022-04-19T00:59:43.323Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

