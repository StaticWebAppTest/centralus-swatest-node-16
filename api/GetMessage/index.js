module.exports = async function (context, req) {
  const date = "2024-06-08T06:12:46.500Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

