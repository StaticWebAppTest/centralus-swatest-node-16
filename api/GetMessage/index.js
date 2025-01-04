module.exports = async function (context, req) {
  const date = "2025-01-04T11:08:51.751Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

