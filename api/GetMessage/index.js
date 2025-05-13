module.exports = async function (context, req) {
  const date = "2025-05-13T19:11:05.745Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

