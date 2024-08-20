module.exports = async function (context, req) {
  const date = "2024-08-20T20:12:33.529Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

