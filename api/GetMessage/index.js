module.exports = async function (context, req) {
  const date = "2025-08-22T13:23:50.603Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

