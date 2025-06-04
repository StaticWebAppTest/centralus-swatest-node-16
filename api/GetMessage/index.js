module.exports = async function (context, req) {
  const date = "2025-06-04T13:29:20.636Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

