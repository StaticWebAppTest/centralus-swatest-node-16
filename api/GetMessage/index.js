module.exports = async function (context, req) {
  const date = "2025-01-19T23:10:12.802Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

