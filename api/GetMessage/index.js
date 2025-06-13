module.exports = async function (context, req) {
  const date = "2025-06-13T09:14:50.773Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

