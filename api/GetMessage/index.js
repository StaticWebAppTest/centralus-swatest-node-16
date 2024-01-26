module.exports = async function (context, req) {
  const date = "2024-01-26T03:10:27.568Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

