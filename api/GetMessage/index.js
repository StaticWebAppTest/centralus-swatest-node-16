module.exports = async function (context, req) {
  const date = "2024-12-19T16:13:17.351Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

