module.exports = async function (context, req) {
  const date = "2025-02-12T03:15:09.266Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

