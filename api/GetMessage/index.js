module.exports = async function (context, req) {
  const date = "2024-01-24T19:08:12.529Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

