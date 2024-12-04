module.exports = async function (context, req) {
  const date = "2024-12-04T15:13:24.910Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

