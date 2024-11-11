module.exports = async function (context, req) {
  const date = "2024-11-11T10:12:50.554Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

