module.exports = async function (context, req) {
  const date = "2025-12-31T23:13:40.970Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

