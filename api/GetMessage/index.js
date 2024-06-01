module.exports = async function (context, req) {
  const date = "2024-06-01T12:17:18.760Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

