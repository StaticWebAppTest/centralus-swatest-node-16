module.exports = async function (context, req) {
  const date = "2024-01-24T10:10:13.006Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

