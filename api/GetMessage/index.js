module.exports = async function (context, req) {
  const date = "2025-01-28T07:11:05.816Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

