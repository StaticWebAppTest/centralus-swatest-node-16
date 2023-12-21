module.exports = async function (context, req) {
  const date = "2023-12-21T03:09:55.417Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

