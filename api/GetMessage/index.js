module.exports = async function (context, req) {
  const date = "2025-01-10T07:11:50.943Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

