module.exports = async function (context, req) {
  const date = "2025-06-21T13:22:17.397Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

