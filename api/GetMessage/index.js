module.exports = async function (context, req) {
  const date = "2024-08-20T12:20:44.943Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

