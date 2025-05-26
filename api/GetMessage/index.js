module.exports = async function (context, req) {
  const date = "2025-05-26T15:13:53.671Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

