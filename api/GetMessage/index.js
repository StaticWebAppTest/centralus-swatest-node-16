module.exports = async function (context, req) {
  const date = "2024-01-22T03:10:39.235Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

