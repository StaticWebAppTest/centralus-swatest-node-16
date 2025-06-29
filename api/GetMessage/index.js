module.exports = async function (context, req) {
  const date = "2025-06-29T22:12:30.125Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

