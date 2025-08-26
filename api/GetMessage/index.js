module.exports = async function (context, req) {
  const date = "2025-08-26T07:13:38.923Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

