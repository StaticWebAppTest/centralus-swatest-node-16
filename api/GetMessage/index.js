module.exports = async function (context, req) {
  const date = "2022-12-16T16:12:35.500Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

