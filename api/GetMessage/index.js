module.exports = async function (context, req) {
  const date = "2023-03-28T06:12:36.500Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

