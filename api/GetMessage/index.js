module.exports = async function (context, req) {
  const date = "2025-02-26T07:12:10.544Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

