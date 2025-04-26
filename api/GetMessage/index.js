module.exports = async function (context, req) {
  const date = "2025-04-26T09:12:20.583Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

