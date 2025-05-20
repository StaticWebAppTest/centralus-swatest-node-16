module.exports = async function (context, req) {
  const date = "2025-05-20T09:14:50.307Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

