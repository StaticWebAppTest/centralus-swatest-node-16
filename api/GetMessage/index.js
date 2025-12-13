module.exports = async function (context, req) {
  const date = "2025-12-13T19:10:15.745Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

