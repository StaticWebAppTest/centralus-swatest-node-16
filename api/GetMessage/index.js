module.exports = async function (context, req) {
  const date = "2022-09-10T10:12:21.500Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

