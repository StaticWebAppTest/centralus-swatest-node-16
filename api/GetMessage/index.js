module.exports = async function (context, req) {
  const date = "2025-03-20T13:20:44.822Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

