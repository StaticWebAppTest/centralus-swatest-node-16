module.exports = async function (context, req) {
  const date = "2023-12-01T03:10:26.919Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

