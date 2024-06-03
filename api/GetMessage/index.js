module.exports = async function (context, req) {
  const date = "2024-06-03T10:13:34.432Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

