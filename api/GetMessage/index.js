module.exports = async function (context, req) {
  const date = "2025-08-25T10:15:29.790Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

