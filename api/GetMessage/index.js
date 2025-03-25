module.exports = async function (context, req) {
  const date = "2025-03-25T19:10:17.970Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

