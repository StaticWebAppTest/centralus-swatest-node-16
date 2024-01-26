module.exports = async function (context, req) {
  const date = "2024-01-26T06:11:50.625Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

