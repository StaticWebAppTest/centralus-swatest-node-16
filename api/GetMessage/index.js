module.exports = async function (context, req) {
  const date = "2025-03-12T13:21:23.463Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

