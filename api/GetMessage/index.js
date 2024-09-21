module.exports = async function (context, req) {
  const date = "2024-09-21T03:12:56.529Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

