module.exports = async function (context, req) {
  const date = "2025-05-08T11:11:24.297Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

