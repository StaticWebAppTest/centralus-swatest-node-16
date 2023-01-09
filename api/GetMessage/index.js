module.exports = async function (context, req) {
  const date = "2023-01-09T03:10:18.638Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

