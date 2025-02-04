module.exports = async function (context, req) {
  const date = "2025-02-04T03:14:17.703Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

