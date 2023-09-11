module.exports = async function (context, req) {
  const date = "2023-09-11T23:08:21.500Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

