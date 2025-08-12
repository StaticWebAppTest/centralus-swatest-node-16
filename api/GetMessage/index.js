module.exports = async function (context, req) {
  const date = "2025-08-12T15:15:00.603Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

