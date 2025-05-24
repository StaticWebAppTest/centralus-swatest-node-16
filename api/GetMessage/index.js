module.exports = async function (context, req) {
  const date = "2025-05-24T20:13:10.970Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

