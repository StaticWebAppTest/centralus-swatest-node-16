module.exports = async function (context, req) {
  const date = "2025-11-26T11:12:20.407Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

