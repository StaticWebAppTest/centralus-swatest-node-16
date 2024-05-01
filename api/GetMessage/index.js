module.exports = async function (context, req) {
  const date = "2024-05-01T01:54:18.261Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

