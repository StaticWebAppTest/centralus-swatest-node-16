module.exports = async function (context, req) {
  const date = "2024-01-18T10:10:34.246Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

