module.exports = async function (context, req) {
  const date = "2024-01-08T10:10:34.052Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

