module.exports = async function (context, req) {
  const date = "2023-01-08T09:08:49.417Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

