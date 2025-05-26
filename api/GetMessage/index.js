module.exports = async function (context, req) {
  const date = "2025-05-26T13:24:30.198Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

