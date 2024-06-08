module.exports = async function (context, req) {
  const date = "2024-06-08T22:08:42.191Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

