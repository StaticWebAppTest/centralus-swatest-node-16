module.exports = async function (context, req) {
  const date = "2025-06-01T23:12:21.235Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

