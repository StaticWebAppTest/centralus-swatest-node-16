module.exports = async function (context, req) {
  const date = "2025-02-19T15:12:50.433Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

