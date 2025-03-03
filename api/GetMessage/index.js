module.exports = async function (context, req) {
  const date = "2025-03-03T10:13:54.948Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

