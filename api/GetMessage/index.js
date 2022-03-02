module.exports = async function (context, req) {
  const date = "2022-03-02T09:09:43.500Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

