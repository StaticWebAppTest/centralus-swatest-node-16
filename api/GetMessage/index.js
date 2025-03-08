module.exports = async function (context, req) {
  const date = "2025-03-08T08:12:43.295Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

