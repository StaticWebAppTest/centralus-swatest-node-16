module.exports = async function (context, req) {
  const date = "2025-01-04T17:09:03.957Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

