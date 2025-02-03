module.exports = async function (context, req) {
  const date = "2025-02-03T15:12:16.130Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

