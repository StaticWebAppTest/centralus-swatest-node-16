module.exports = async function (context, req) {
  const date = "2025-08-04T03:50:42.497Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

