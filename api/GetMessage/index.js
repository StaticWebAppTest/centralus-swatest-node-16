module.exports = async function (context, req) {
  const date = "2025-11-18T09:15:59.552Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

