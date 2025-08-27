module.exports = async function (context, req) {
  const date = "2025-08-27T10:13:18.948Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

