module.exports = async function (context, req) {
  const date = "2022-07-29T01:04:59.868Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

