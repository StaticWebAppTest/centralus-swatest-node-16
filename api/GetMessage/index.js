module.exports = async function (context, req) {
  const date = "2025-03-26T09:13:46.669Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

