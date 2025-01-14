module.exports = async function (context, req) {
  const date = "2025-01-14T08:15:01.235Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

