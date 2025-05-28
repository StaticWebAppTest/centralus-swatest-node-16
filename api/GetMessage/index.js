module.exports = async function (context, req) {
  const date = "2025-05-28T23:12:44.957Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

