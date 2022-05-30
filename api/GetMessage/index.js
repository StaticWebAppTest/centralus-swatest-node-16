module.exports = async function (context, req) {
  const date = "2022-05-30T06:17:02.500Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

