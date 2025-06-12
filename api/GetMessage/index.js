module.exports = async function (context, req) {
  const date = "2025-06-12T15:14:42.155Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

