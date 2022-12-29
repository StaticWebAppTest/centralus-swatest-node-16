module.exports = async function (context, req) {
  const date = "2022-12-29T16:12:30.500Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

