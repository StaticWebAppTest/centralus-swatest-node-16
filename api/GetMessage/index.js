module.exports = async function (context, req) {
  const date = "2025-05-06T07:13:16.868Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

