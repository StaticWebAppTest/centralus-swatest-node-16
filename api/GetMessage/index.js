module.exports = async function (context, req) {
  const date = "2024-06-19T12:18:56.834Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

