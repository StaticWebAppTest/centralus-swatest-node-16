module.exports = async function (context, req) {
  const date = "2025-01-10T05:11:45.745Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

